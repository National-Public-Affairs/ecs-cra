const cors = require('cors');
const express = require('express');
const path = require('path');
const googleSheet = require('./googleSheet');

const app = express();
app.use(cors());

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client/build')));

// -----------------------------------------------------------------------------
// serves frontend app
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

// -----------------------------------------------------------------------------
// 'Take Action' form submissions
app.post('/submit-action', async (req, res) => {
  // attempt to submit to Google Sheets
  try {
    const sheetSubmission = await googleSheet.writeToSheetTwo(req.body);

    if (sheetSubmission) res.sendStatus(200);
  } catch {
    res.sendStatus(400).json({
      message: 'Bad request',
    });
  }
});

// -----------------------------------------------------------------------------
// contact form submissions
// data is sent to DirectSnd's endpoint
app.post('/submit-contact', async (req, res) => {
  // always attempt to submit to Google Sheets
  try {
    const sheetSubmission = await googleSheet.writeToSheet(req.body);

    // if mobile num present in req data
    // submit to DS
    if (req.body.mobile) {
      try {
        const headers = {
          'Authorization': `token ${process.env.DS_AUTH_TOKEN}`,
          'Content-Type': 'application/json',
        };
        const dsData = {
          number: parseInt(req.body.mobile, 10),
          first_name: req.body.firstName,
          last_name: req.body.lastName,
          email: req.body.email,
          zip_code: parseInt(req.body.zip, 10),
        };

        fetch('https://app.directsnd.com/api/tagged_audience/', {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(dsData),
        });
      }

      catch (e) {
        res.sendStatus(400).json({
          message: e.message,
        });
      }
    }
    if (sheetSubmission) res.sendStatus(200);
  }

  catch {
    res.sendStatus(400).json({
      message: 'Bad request',
    });
  }
});

// -----------------------------------------------------------------------------
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

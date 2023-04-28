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

// serves frontend app
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

// frontend sends form data meant for Google Sheet
app.post('/send', async (req, res) => {
  await googleSheet.writeToSheet(req.body);
  console.log('gs', gs);
  res.status(200).json({
    message: 'Successful request',
  });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

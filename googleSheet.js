const { GoogleSpreadsheet } = require('google-spreadsheet');
require('dotenv').config();

class InteractWithGoogleSheet {
  static writeToSheet = async (formData) => {
    console.log('received data:', formData);
    const { firstName, lastName, email, zip, mobile, message } = formData;
    console.log('gs spreadsheet id:', process.env.GS_SPREADSHEET_ID);
    console.log('client email:', process.env.GS_CLIENT_EMAIL);
    console.log('private key:', process.env.GS_PRIVATE_KEY)
    // initialize the Google Sheet
    const doc = new GoogleSpreadsheet(process.env.GS_SPREADSHEET_ID);
    console.log('doc:', doc);
    // initialize auth to Google Sheet
    const auth = await doc.useServiceAccountAuth({
      client_email: process.env.GS_CLIENT_EMAIL,
      private_key: process.env.GS_PRIVATE_KEY,
    });
    console.log('auth', auth)
    const loadedDoc = await doc.loadInfo();
    console.log('loaded doc:', loadedDoc);
    // set current sheet
    const sheet = doc.sheetsByIndex[0];
    console.log('sheet:', sheet);
    // add row
    const addRow = await sheet.addRow({
      firstName,
      lastName,
      email,
      zip,
      mobile,
      message,
    });
    console.log('addRow', addRow);
  }
}

module.exports = InteractWithGoogleSheet;

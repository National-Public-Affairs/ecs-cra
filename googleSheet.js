const { GoogleSpreadsheet } = require('google-spreadsheet');
require('dotenv').config();

class InteractWithGoogleSheet {
  static writeToSheet = async (formData) => {
    console.log('received data:', formData);
    const { firstName, lastName, email, zip, mobile, message } = formData;
    // initialize the Google Sheet
    try {
      const doc = new GoogleSpreadsheet(process.env.GS_SPREADSHEET_ID);
      // initialize auth to Google Sheet
      await doc.useServiceAccountAuth({
        client_email: process.env.GS_CLIENT_EMAIL,
        private_key: process.env.GS_PRIVATE_KEY,
      });
      await doc.loadInfo();
      // set current sheet
      const sheet = doc.sheetsByIndex[0];

      // add row
      await sheet.addRow({
        firstName,
        lastName,
        email,
        zip,
        mobile,
        message,
      });

      return { status: true, error: null };
    } catch (e) {
      throw { status: false, error: e };
    }

  }
}

module.exports = InteractWithGoogleSheet;

const { GoogleSpreadsheet } = require('google-spreadsheet');
require('dotenv').config();

class InteractWithGoogleSheet {
  static writeToSheet = async (formData) => {
    const { firstName, lastName, email, zip, mobile, message } = formData;
    // initialize the Google Sheet
    const doc = new GoogleSpreadsheet(process.env.GS_SPREADSHEET_ID);
    // initialize auth to Google Sheet
    const auth = await doc.useServiceAccountAuth({
      client_email: process.env.GS_CLIENT_EMAIL,
      private_key: process.env.GS_PRIVATE_KEY.split(String.raw`\n`).join('\n'),
    });
    await doc.loadInfo();
    // set current sheet
    const sheet = doc.sheetsByIndex[0];
    // add row
    try {
      await sheet.addRow({
        firstName,
        lastName,
        email,
        zip,
        mobile,
        message,
      });
      return true;
    } catch {
      return false;
    }
  };

  static writeToSheetTwo = async (formData) => {
    const {
      typeCandidateReferral,
      typeVolunteering,
      typeGrassroots,
      firstName,
      lastName,
      county,
      email,
      zip,
      mobile,
      message,
      doorKnocking,
      phoneBanking,
      writingPostcards,
      literatureDrops,
      signPlacement,
      hostingAnEvent,
    } = formData;
    // initialize the Google Sheet
    const doc = new GoogleSpreadsheet(process.env.GS_SPREADSHEET_ID_2);
    // initialize auth to Google Sheet
    const auth = await doc.useServiceAccountAuth({
      client_email: process.env.GS_CLIENT_EMAIL,
      private_key: process.env.GS_PRIVATE_KEY.split(String.raw`\n`).join('\n'),
    });
    await doc.loadInfo();
    // set current sheet
    const sheet = doc.sheetsByIndex[0];
    // add row
    try {
      await sheet.addRow({
        typeCandidateReferral,
        typeVolunteering,
        typeGrassroots,
        firstName,
        lastName,
        county,
        email,
        zip,
        mobile,
        message,
        doorKnocking,
        phoneBanking,
        writingPostcards,
        literatureDrops,
        signPlacement,
        hostingAnEvent,
      });
      return true;
    } catch {
      return false;
    }
  };
}

module.exports = InteractWithGoogleSheet;

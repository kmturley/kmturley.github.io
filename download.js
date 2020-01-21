const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const slugify = require('slugify');

const sheet_id = '1KhjaYHc01RKvq5UrJlTdi9mz5O9IcTF5Uh-7bYdlsks';

const pages = [
  {
    project_json: './src/assets/json/articles.json',
    sheet_range: 'articles!A1:C50'
  },
  {
    project_json: './src/assets/json/awards.json',
    sheet_range: 'awards!A1:F50'
  },
  {
    project_json: './src/assets/json/brands.json',
    sheet_range: 'brands!A1:C50'
  },
  {
    project_json: './src/assets/json/certifications.json',
    sheet_range: 'certifications!A1:E50'
  },
  {
    project_json: './src/assets/json/projects.json',
    sheet_range: 'projects!A1:H50'
  }
];

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Sheets API.
  authorize(JSON.parse(content), (auth) => {
    pages.forEach((page) => {
      listMajors(auth, page);
    });
  });
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.web;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function listMajors(auth, page) {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: sheet_id,
    range: page.sheet_range,
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    const projects = [];
    if (rows.length) {
      rows.forEach((row, index) => {
        if (index > 0) {
          projects.push(buildJsonResult(rows[0], row));
        }
      });
      fs.writeFile(page.project_json, JSON.stringify(projects, null, 2), () => {
        console.log('Created ' + page.project_json);
      });
    } else {
      console.log('No data found.');
    }
  });
}

function buildJsonResult(headers, currentLine) {
  let jsonObject = {};
  for (let j = 0; j < headers.length; j++) {
    let propertyName = slugify(headers[j], {
      lower: true,
    }).replace(/[_]/g, '-');
    let value = currentLine[j];
    // convert multiline fields to arrays
    if (typeof value === 'string' && value.includes('\n')) {
      value = value.split('\n');;
    }
    // force new lines with label ending in (s)
    if (typeof value === 'string' && propertyName.charAt(propertyName.length - 1) === 's') {
      value = value.split('\n');
      if (!Array.isArray(value)) {
        value = [value];
      }
      value.map((val) => {
        if (Number(val)) {
          return Number(val);
        }
        return val;
      });
    } else {
      // convert string fields containing only numbers
      if (Number(value)) {
        value = Number(value);
      }
    }
    
    jsonObject[propertyName] = value;
  }
  return jsonObject;
}

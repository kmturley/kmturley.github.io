import sharedEnvironment from './base';

export const environment = {
  ...sharedEnvironment,
  API_URL: 'https://sheets.googleapis.com/v4/spreadsheets/',
  CLIENT_ID: '342742830704-5rojkvgvmv9nrs7mdaou1qol4knaa9i2.apps.googleusercontent.com',
  SCOPE: 'https://www.googleapis.com/auth/spreadsheets.readonly',
  SHEET_ID: '1KhjaYHc01RKvq5UrJlTdi9mz5O9IcTF5Uh-7bYdlsks',
  production: false
};

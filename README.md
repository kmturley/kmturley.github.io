# kmturley.github.io

Portfolio project using:

* Angular 6.x
* Google Client API
* SCSS


## Installation

Install dependencies using:

    npm install

Create an file at src/environments/environment.ts containing your google API details:

    export const environment = {
        API_URL: 'https://sheets.googleapis.com/v4/spreadsheets/',
        CLIENT_ID: 'X.apps.googleusercontent.com',
        SCOPE: 'https://www.googleapis.com/auth/spreadsheets.readonly',
        SHEET_ID: 'X',
        production: false,
    };

Create a Google spreadsheet with named columns. You can duplicate my template here:

    https://docs.google.com/spreadsheets/d/1PGFoY15Wi0RFxjycqF_oXYKdjH8IM5k3_IxJLFI90aU/edit#gid=0


## Updating project data

Enable the Google Sheets API for your project at:

    https://console.cloud.google.com/apis/library/sheets.googleapis.com

Download a credentials file and place at /credentials.json

    https://console.cloud.google.com/apis/api/sheets.googleapis.com/credentials

Run the download script to update src/assets/products.json:

    npm run download


## Usage

Run the server:

    npm start

View the frontend at:

    http://localhost:4200/


## Deployment

In Chrome Dev tools, copy your Authorization Header Token from a Google Sheets request, and use as your NG_TOKEN in the next step.

Then run the command to build static:

    NG_TOKEN="X" npm install
    npm run build:prerender

Or to build with custom base url:

    ng build --prod --base-href https://kimturley.co.uk/angular-google-sheets/dist/browser/
    ng run angular-google-sheets:server:production
    npm run compile:server && npm run generate:prerender

To view the statically generated version locally use:

    npm run serve:prerender


## Directory structure

    /                               --> Frontend sources files
    /static.paths.ts                --> Static generation for Google Client API
    /app/app-routing.server.ts      --> Angular routing for Google Client API


## Contact

For more information please contact kmturley

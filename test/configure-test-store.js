/* eslint-disable */

// This file is executed by package.json test scripts (e.g. npm run test).
// The purpose is to allow the developer to test specific time zones from the command line.
// This code takes a command line environment variable (TIMEZONE) and writes the value
// into the mock store that is used for testing.

var timeZoneFileString = new RegExp (`timeZone: \\'(.*?)\\'`, 'g');

const replace = require('replace-in-file');
const options = {
  files: './test/test-config-reducer.js',
  from: timeZoneFileString,
  to: `timeZone: '${process.env.TIMEZONE ? process.env.TIMEZONE : "America/New_York"}'`,
};

// sync
try {
  const changes = replace.sync(options);
  console.log('Modified files:', changes.join(', '));
}
catch (error) {
  console.error('Error occurred:', error);
}

// async
// replace(options)
//   .then(changes => {
//     console.log('Modified files:', changes.join(', '));
//   })
//   .catch(error => {
//     console.error('Error occurred:', error);
//   });

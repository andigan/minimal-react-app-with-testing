/* eslint-disable */
var chai = require('chai');
var expect = chai.expect;

var axios = require('axios');

// used by package.json to get arguments from the script command
var argv = require('minimist')(process.argv.slice(2));

// import log in information
var secretCreds = require('../../secret_credentials');

var username,
    jwtToken,
    infoInfo,
    API_URL = argv.api_url;

const PROTOCOL = API_URL.includes('localhost') ? "http" : "https";

describe('API CONNECTION', () => {
  describe('Log In', () => {
    it('API should allow user to log in with username and password and return a JWT token', () => {
      let x = axios.post(`${PROTOCOL}://${API_URL}/api/login`, secretCreds)
        .then((response) => response);

      return x.then((response) => {
        expect(response.data.username).to.be.a('number');
        expect(response.data.jwt).to.be.a('string');
        username = response.data.username;
        jwtToken = response.data.jwt;
      });

    });
  });

  describe('Fetch InfoInfo', () => {
    it('API should allow client to fetch info without authorization', () => {
      let x = axios.get(`${PROTOCOL}://${API_URL}/api/2500/${username}/info`)
        .then((response) => response);

      return x.then((response) => {
        expect(response.data).to.exist;
        infoInfo = response.data;
      });
    }).timeout(5000);
    it('infoInfo should have a specific key', () => {
      expect(infoInfo).to.include.keys('specific');
    });
  });

  describe('Fetch lockedInfo', () => {
    it('should fetch info with JWT authorization', () => {
      let x = axios.get(`${PROTOCOL}://${API_URL}/api/${username}/lockedInfo`,
        { headers: {
          "Authorization": "Bearer " + jwtToken
        }})
        .then((response) => response);

      return x.then((response) => {
        expect(response.data).to.exist;
      });
    }).timeout(5000);
    it('should not fetch info without JWT authorization', () => {
      let x = axios.get(`${PROTOCOL}://${API_URL}/api/${username}/lockedInfo`,
        { headers: {
//          "Authorization": "Bearer " + JWT
        }})
        .then((response) => response).
        catch ((err) => err.response);

      return x.then((response) => {
        expect(response.status).to.equal(401);
      });
    });
  });
});

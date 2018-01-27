import React from 'react';

import moment from "moment-timezone";

import {
  formatDateTimeForDisplay,
  convertDateTimeFromNewYorkTimeToTimeZone,
  convertDateTimeFromTimeZoneToNewYorkTime
} from '../time-helpers';

describe('Helper functions \n', () => {
  describe('Time helper functions', () => {

    describe('formatDateTimeForDisplay(dateTime) using timeZone from redux store/consoleConfig', () => {
      let timeZoneAbbreviation = moment.tz(process.env.TIMEZONE).format('z');
      let dateOnly = "01-01-2018";
      let dateTime = "2018-01-01T00:30:07";
      let expectedDate = moment.tz(dateOnly, "MM-DD-YYYY", "America/New_York").tz(process.env.TIMEZONE).format('MM/DD/YYYY');
      let expectedTime = moment.tz(dateTime, "YYYY-MM-DDTHH:mm:ss", "America/New_York").tz(process.env.TIMEZONE).format("h:mmA");
      let expectedUnSpecifiedTime = moment.tz(dateOnly, "MM-DD-YYYY", "America/New_York").tz(process.env.TIMEZONE).format("h:mmA");

      it('returns {date: "", time: "", timeZone: ""} when argument is "", null, undefined, or ill-constructed', () => {
        expect(formatDateTimeForDisplay("")).to.deep.equal({date: "", time: "", timeZone: ""});
        expect(formatDateTimeForDisplay(null)).to.deep.equal({date: "", time: "", timeZone: ""});
        expect(formatDateTimeForDisplay(undefined)).to.deep.equal({date: "", time: "", timeZone: ""});
        expect(formatDateTimeForDisplay("ill constructed date")).to.deep.equal({date: "", time: "", timeZone: ""});
      });
      it(`returns {date: "${expectedDate}", time: "${expectedUnSpecifiedTime}", timeZone: "${timeZoneAbbreviation}"} when argument is formatted "${dateOnly}" and timeZone is ${process.env.TIMEZONE}`, () => {
        expect(formatDateTimeForDisplay(dateOnly)).to.deep.equal({date: expectedDate, time: expectedUnSpecifiedTime, timeZone: timeZoneAbbreviation});
      });
      it(`returns {date: "${expectedDate}", time: "${expectedTime}", timeZone: "${timeZoneAbbreviation}"} when argument is formatted "${dateTime}" and timeZone is ${process.env.TIMEZONE}`, () => {
        expect(formatDateTimeForDisplay(dateTime)).to.deep.equal({date: expectedDate, time: expectedTime, timeZone: timeZoneAbbreviation});
      });
    });

    describe('convertDateTimeFromNewYorkTimeToTimeZone(dateTime) using timeZone from redux store/consoleConfig', () => {
      let dateTime = "2018-01-01T00:30:07";
      let expectedTime = moment.tz(dateTime, "YYYY-MM-DDTHH:mm:ss", "America/New_York").tz(process.env.TIMEZONE).format("YYYY-MM-DDTHH:mm:ss");

      it('returns "" when argument is "", null, undefined, or ill-constructed', () => {
        expect(convertDateTimeFromNewYorkTimeToTimeZone("")).to.equal("");
        expect(convertDateTimeFromNewYorkTimeToTimeZone(null)).to.equal("");
        expect(convertDateTimeFromNewYorkTimeToTimeZone(undefined)).to.equal("");
        expect(convertDateTimeFromNewYorkTimeToTimeZone("ill constructed date")).to.equal("");
      });
      it(`returns ${expectedTime} when argument is ${dateTime}" and timeZone is ${process.env.TIMEZONE}`, () => {
        expect(convertDateTimeFromNewYorkTimeToTimeZone(dateTime)).to.equal(expectedTime);
      });
    });

    describe('convertDateTimeFromTimeZoneToNewYorkTime(dateTime) using timeZone from redux store/consoleConfig', () => {
      let dateTime = "2017-12-31T23:30:07";
      let expectedDateTime = moment.tz(dateTime, "YYYY-MM-DDTHH:mm:ss", process.env.TIMEZONE).tz('America/New_York').format("YYYY-MM-DDTHH:mm:ss");

      it('returns "" when argument is "", null, undefined, or ill-constructed', () => {
        expect(convertDateTimeFromTimeZoneToNewYorkTime("")).to.equal("");
        expect(convertDateTimeFromTimeZoneToNewYorkTime(null)).to.equal("");
        expect(convertDateTimeFromTimeZoneToNewYorkTime(undefined)).to.equal("");
        expect(convertDateTimeFromTimeZoneToNewYorkTime("ill constructed date")).to.equal("");
      });
      it(`returns ${expectedDateTime} when argument is ${dateTime}" and timeZone is ${process.env.TIMEZONE}`, () => {
        expect(convertDateTimeFromTimeZoneToNewYorkTime(dateTime)).to.equal(expectedDateTime);
      });
    });



});

});

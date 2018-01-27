import moment from "moment-timezone";
import {getStore} from '../store';

// take a time string and return date and time object
export function formatDateTimeForDisplay(dateTime) {
  let timeZone = getStore().getState().config.timeZone;
  let timeZoneAbbreviation = moment.tz(timeZone).format('z');

  if (moment(dateTime, "MM-DD-YYYY").isValid()) {
    return {
      date: moment.tz(dateTime, "MM-DD-YYYY", "America/New_York").tz(timeZone).format('MM/DD/YYYY'),
      time: moment.tz(dateTime, "MM-DD-YYYY", "America/New_York").tz(timeZone).format("h:mmA"),
      timeZone: timeZoneAbbreviation
    };
  }

  if (moment(dateTime, "YYYY-MM-DDTHH:mm:ss").isValid()) {
    return {
      date: moment.tz(dateTime, "YYYY-MM-DDTHH:mm:ss", "America/New_York").tz(timeZone).format('MM/DD/YYYY'),
      time: moment.tz(dateTime, "YYYY-MM-DDTHH:mm:ss", "America/New_York").tz(timeZone).format("h:mmA"),
      timeZone: timeZoneAbbreviation
    };
  }

  return {date: "", time: "", timeZone: ""};
}

export function convertDateTimeFromNewYorkTimeToTimeZone(dateTime) {
  let timeZone = getStore().getState().config.timeZone;

  if (moment(dateTime, "YYYY-MM-DDTHH:mm:ss").isValid()) {
    return moment.tz(dateTime, "YYYY-MM-DDTHH:mm:ss", "America/New_York").tz(timeZone).format("YYYY-MM-DDTHH:mm:ss")
  } else {
    return "";
  }
}

export function convertDateTimeFromTimeZoneToNewYorkTime(dateTime) {
  let timeZone = getStore().getState().config.timeZone;

  if (moment(dateTime, "YYYY-MM-DDTHH:mm:ss").isValid()) {
    return moment.tz(dateTime, "YYYY-MM-DDTHH:mm:ss", timeZone).tz('America/New_York').format("YYYY-MM-DDTHH:mm:ss");
  } else {
    return "";
  }
}

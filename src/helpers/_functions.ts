import moment from "moment-timezone";
import {DeviseLists} from "@/utils/devise"
export const getDateToSave = (date: string, timezone = "UTC", format="YYYY-MM-DD") => {
    let dateToSave = null;
    if (date && moment(date).isValid())
      dateToSave = moment
        .tz(moment(date).format("YYYY-MM-DD"), timezone)
        .set({ second: 0, millisecond: 0 })
        .toDate();
    return dateToSave;
  };
export const removeOptionalParams = (path:string) => path?.replace(/\/\:.+\?/g, "");
export const getUtcTimeZone = (timeZone:string) => {
  if (timeZone) {
    if (timeZone.indexOf("UTC") < 0) {
      let hourTimestamps = moment.tz(timeZone).format("Z");
      hourTimestamps = "UTC" + hourTimestamps + " " + timeZone;
      return hourTimestamps;
    } else {
      return timeZone;
    }
  } else {
    return "";
  }
};

export const getDeviseLists = () => {
  return DeviseLists.map((devise) => {
    const name = devise.pays + `(${devise.devise})`;
    return { _id: devise.devise, name: name };
  });
};
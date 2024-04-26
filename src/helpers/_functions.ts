import moment from "moment-timezone";
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
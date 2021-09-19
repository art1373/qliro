import dayjs from "dayjs";

export const normalizeDate = (date: number) => {
  if (date) {
    return dayjs(dayjs.unix(date)).format("MM MMM, hh:mm");
  }
  return dayjs(new Date()).format("MM, HH:MM");
};

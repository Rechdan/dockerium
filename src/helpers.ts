import { formatDistance } from "date-fns";

export const fromNow = (date: Date) => formatDistance(date.getTime(), Date.now(), { addSuffix: true });

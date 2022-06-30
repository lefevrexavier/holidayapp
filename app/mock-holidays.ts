import { Holiday, status, categoryHoliday } from './Interface';

export const HOLIDAY: Holiday[] = [

  {
    employee: "Xavier",
    start: new Date(2022, 10, 1, 0, 0, 0, 0,),
    end: new Date(2022, 11, 30, 0, 0, 0),
    status: "Pending for approval",
    category: "Yearly leaves",
  },
  {
    employee: "Mich",
    start: new Date(2022, 10, 1, 0, 0, 0, 0,),
    end: new Date(2022, 11, 30, 0, 0, 0),
    status: "Approved",
    category: "Study leaves",
  },]

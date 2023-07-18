import dayjs from "dayjs";

export function getMonth(year = dayjs().year(), month = dayjs().month()) {
    month = Math.floor(month);
    const firstDayOfTheMonth = dayjs(new Date(year, month, 0)).day();
    let currentMonthCount = 0 - firstDayOfTheMonth
    const daysMatrix = new Array(6).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        });
    });
    return daysMatrix;
}

export function getWeekDayName(day) {
    switch (day) {
        case 0: return "Sun"
        case 1: return "Mon"
        case 2: return "Tue"
        case 3: return "Wed"
        case 4: return "Thu"
        case 5: return "Fri"
        case 6: return "Sat"
        default: return "invalid"
    }
}
export function getWeekDayShort(day) {
    switch (day) {
        case 0: return "S"
        case 1: return "M"
        case 2: return "T"
        case 3: return "W"
        case 4: return "T"
        case 5: return "F"
        case 6: return "S"
        default: return "invalid"
    }
}
export function isToday(date)
{
    return dayjs().format("DD-MM-YYYY") === date.format("DD-MM-YYYY")
}

export function getMonthName(month,year) {
  return dayjs(new Date(year,month)).format("MMMM, YYYY");
}

export function isCurrentMonth(monthIndex,currentMonthIndex){
    return monthIndex===currentMonthIndex

}
import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
    month = Math.floor(month);
    const year = dayjs().year();
    const firstDayOfTheMonth = dayjs(new Date(year, month, 0)).day();
    let currentMonthCount = 0 - firstDayOfTheMonth;
    function getNumberOfWeeks() {
        const noOfDaysInMonth = dayjs(new Date(year, month, 1)).daysInMonth()
        if(firstDayOfTheMonth>4 && noOfDaysInMonth===31)
            return 6
        return 5
    }
    const daysMatrix = new Array(getNumberOfWeeks()).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        });
    });
    return daysMatrix;
}
export function convertMonthToWord(number) {
    let arrayOfMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return arrayOfMonths[number - 1]
}

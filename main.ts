input.onButtonPressed(Button.A, function () {
    basic.showString("" + convertToText(DS3231.date()) + "/" + strDay[DS3231.day()])
})
input.onButtonPressed(Button.AB, function () {
    DS3231.dateTime(
    2024,
    4,
    20,
    6,
    10,
    12,
    0
    )
    basic.showIcon(IconNames.Heart)
})
let strDay: string[] = []
strDay = [
"SUN.",
"MON.",
"TUE.",
"WED.",
"THU.",
"FRI.",
"SAT."
]
loops.everyInterval(2000, function () {
    basic.showString("" + convertToText(DS3231.hour()) + ":" + convertToText(DS3231.minute()))
})

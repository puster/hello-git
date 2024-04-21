input.onButtonPressed(Button.A, function () {
    basic.showString("" + convertToText(DS3231.date()) + "/" + strDay[DS3231.day() - 1])
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
"MON.",
"TUE.",
"WED.",
"THU.",
"FRI.",
"SAT.",
"SUN."
]
loops.everyInterval(2000, function () {
    TM1650.showSring("" + convertToText(DS3231.hour()) + convertToText(DS3231.minute()))
    TM1650.showDpAt(1, true)
    basic.pause(1000)
    TM1650.showDpAt(1, false)
})

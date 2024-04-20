input.onButtonPressed(Button.A, function () {
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
input.onButtonPressed(Button.B, function () {
    basic.showString("" + convertToText(DS3231.year()) + "/" + convertToText(DS3231.month()) + "/" + convertToText(DS3231.date()))
})
loops.everyInterval(2000, function () {
    basic.showString("" + convertToText(DS3231.hour()) + ":" + convertToText(DS3231.minute()))
})

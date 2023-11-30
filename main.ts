let strip = neopixel.create(DigitalPin.P13, 256, NeoPixelMode.RGB)
strip.setMatrixWidth(16)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
strip.show()
basic.forever(function () {
    basic.showNumber(1023 - pins.analogReadPin(AnalogPin.P4))
    if (500 > 1023 - pins.analogReadPin(AnalogPin.P4)) {
        strip.setPixelColor(17, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.show()
    }
})

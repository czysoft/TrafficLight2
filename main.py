def on_forever():
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(4000)
    pins.digital_write_pin(DigitalPin.P1, 1)
    basic.pause(2000)
    pins.digital_write_pin(DigitalPin.P0, 0)
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 1)
    basic.pause(2000)
    pins.digital_write_pin(DigitalPin.P2, 0)
    pins.digital_write_pin(DigitalPin.P1, 1)
    basic.pause(3000)
    pins.digital_write_pin(DigitalPin.P1, 0)
basic.forever(on_forever)

def on_forever2():
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(1000)
    pins.digital_write_pin(DigitalPin.P0, 0)
    basic.pause(1000)
basic.forever(on_forever2)

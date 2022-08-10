function 灯控制 (红: number, 黄: number, 绿: number) {
    pins.digitalWritePin(DigitalPin.P0, 绿)
    pins.digitalWritePin(DigitalPin.P1, 黄)
    pins.digitalWritePin(DigitalPin.P2, 红)
}
function 闪 (次数: number, 灯: number) {
    for (let index = 0; index < 次数; index++) {
        if (灯 == 0) {
            灯控制(1, 0, 0)
            basic.pause(1000)
            灯控制(0, 0, 0)
            basic.pause(1000)
        } else {
            灯控制(0, 0, 1)
            basic.pause(1000)
            灯控制(0, 0, 0)
            basic.pause(1000)
        }
    }
}
function 灯控制2 (红: number, 黄: number, 绿: number) {
    pins.digitalWritePin(DigitalPin.P3, 绿)
    pins.digitalWritePin(DigitalPin.P4, 黄)
    pins.digitalWritePin(DigitalPin.P6, 红)
}
led.enable(false)
basic.forever(function () {
    灯控制(1, 0, 0)
    basic.pause(5000)
    闪(3, 0)
    灯控制(0, 1, 0)
    basic.pause(1000)
    灯控制(0, 0, 1)
    basic.pause(5000)
    闪(3, 1)
    灯控制(0, 1, 0)
    basic.pause(1000)
})

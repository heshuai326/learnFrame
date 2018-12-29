
// 不像在其他语言中，实现接口，只会去关注传值的外形，只要传入的对象满足上面提到数据类型，那么他就是被允许的
interface SquareConfig {
    color?: string;
    width?: number;

    readonly length: number // 只读属性
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = { color: 'White', area: 100 }
    if (config.color) {
        newSquare.color = config.color
    }

    if (config.width) {
        newSquare.area = config.width * config.width
    }

    return newSquare
}

let mySquare = createSquare({color: 'black'})


// 实现接口
interface ClockInterface{
    currentTime: Date;
}

class Clock implements ClockInterface{
    currentTime: Date;
    constructor(h: number, m: number){}
}

// 继承接口: 一个接口可以继承多个接口，创建多个接口的合成接口
interface Shape{
    color: string
}

interface Square extends Shape{
    slideLength: number
}

let square = <Square>{}
square.color = 'blue'
square.slideLength = 10

// 混合类型
interface Couter {
    (start: number): string
    interval: number;
    reset(): void;
}

function getCounter(): Couter{
    let Couter = <Couter> function (start: number) {};
    Couter.interval = 123
    Couter.reset = function(){}
    return Couter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 5.0

//  接口继承类
class Control{
    private state: any
}

interface SelectableControl extends Control{
    select(): void;
}

class Button extends Control implements SelectableControl{
    select()
}
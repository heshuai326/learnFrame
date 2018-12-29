var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
readonly;
length: number; // 只读属性
function createSquare(config) {
    var newSquare = { color: 'White', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
var Clock = (function () {
    function Clock(h, m) {
    }
    return Clock;
})();
var square = {};
square.color = 'blue';
square.slideLength = 10;
function getCounter() {
    var Couter = function (start) { };
    Couter.interval = 123;
    Couter.reset = function () { };
    return Couter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
//  接口继承类
var Control = (function () {
    function Control() {
    }
    return Control;
})();
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        _super.apply(this, arguments);
    }
    return Button;
})(Control);

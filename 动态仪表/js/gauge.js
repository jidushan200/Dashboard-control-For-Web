//跳数字
!function (a, n) { "function" == typeof define && define.amd ? define(n) : "object" == typeof exports ? module.exports = n(require, exports, module) : a.CountUp = n() }(this, function (a, n, t) {
    var e = function (a, n, t, e, i, r) {
        function o(a) {
            a = a.toFixed(l.decimals), a += "";
            var n, t, e, i, r, o;
            if (n = a.split("."), t = n[0], e = n.length > 1 ? l.options.decimal + n[1] : "", l.options.useGrouping) {
                for (i = "", r = 0, o = t.length; r < o; ++r)
                    0 !== r && r % 3 === 0 && (i = l.options.separator + i), i = t[o - r - 1] + i;
                t = i
            }
            return l.options.numerals.length && (t = t.replace(/[0-9]/g, function (a) { return l.options.numerals[+a] }), e = e.replace(/[0-9]/g, function (a) { return l.options.numerals[+a] })), l.options.prefix + t + e + l.options.suffix
        }
        function u(a, n, t, e) { return t * (-Math.pow(2, -10 * a / e) + 1) * 1024 / 1023 + n }
        function s(a) { return "number" == typeof a && !isNaN(a) }
        var l = this;
        if (l.version = function () { return "1.9.2" }, l.options = { useEasing: !0, useGrouping: !0, separator: ",", decimal: ".", easingFn: u, formattingFn: o, prefix: "", suffix: "", numerals: [] },
            r && "object" == typeof r)
            for (var m in l.options) r.hasOwnProperty(m) && null !== r[m] && (l.options[m] = r[m]);
        "" === l.options.separator ? l.options.useGrouping = !1 : l.options.separator = "" + l.options.separator;
        for (var d = 0, c = ["webkit", "moz", "ms", "o"], f = 0; f < c.length && !window.requestAnimationFrame; ++f)
            window.requestAnimationFrame = window[c[f] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[c[f] + "CancelAnimationFrame"] || window[c[f] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function (a, n) {
            var t = (new Date).getTime(), e = Math.max(0, 16 - (t - d)), i = window.setTimeout(function () { a(t + e) }, e);
            return d = t + e, i
        }),
            window.cancelAnimationFrame || (window.cancelAnimationFrame = function (a) { clearTimeout(a) }), l.initialize = function () {
                return !!l.initialized || (l.error = "", l.d = "string" == typeof a ? document.getElementById(a) : a, l.d ? (l.startVal = Number(n), l.endVal = Number(t), s(l.startVal) &&
                    s(l.endVal) ? (l.decimals = Math.max(0, e || 0), l.dec = Math.pow(10, l.decimals), l.duration = 1e3 * Number(i) || 2e3,
                        l.countDown = l.startVal > l.endVal, l.frameVal = l.startVal, l.initialized = !0, !0) : (l.error = "[CountUp] startVal (" + n + ") or endVal (" + t + ") is not a number", !1)) : (l.error = "[CountUp] target is null or undefined", !1))
            }, l.printValue = function (a) {
                var n = l.options.formattingFn(a);
                "INPUT" === l.d.tagName ? this.d.value = n : "text" === l.d.tagName || "tspan" === l.d.tagName ? this.d.textContent
                    = n : this.d.innerHTML = n
            }, l.count = function (a) {
                l.startTime || (l.startTime = a), l.timestamp = a;
                var n = a - l.startTime;
                l.remaining = l.duration - n, l.options.useEasing ? l.countDown ? l.frameVal = l.startVal - l.options.easingFn(n, 0, l.startVal - l.endVal,
                    l.duration) : l.frameVal = l.options.easingFn(n, l.startVal, l.endVal - l.startVal, l.duration) : l.countDown ? l.frameVal = l.startVal - (l.startVal - l.endVal) * (n / l.duration) : l.frameVal
                        = l.startVal + (l.endVal - l.startVal) * (n / l.duration), l.countDown ? l.frameVal = l.frameVal < l.endVal ? l.endVal : l.frameVal : l.frameVal = l.frameVal > l.endVal ? l.endVal : l.frameVal, l.frameVal
                    = Math.round(l.frameVal * l.dec) / l.dec, l.printValue(l.frameVal), n < l.duration ? l.rAF = requestAnimationFrame(l.count) : l.callback && l.callback()
            }, l.start = function (a) { l.initialize() && (l.callback = a, l.rAF = requestAnimationFrame(l.count)) }, l.pauseResume
            = function () { l.paused ? (l.paused = !1, delete l.startTime, l.duration = l.remaining, l.startVal = l.frameVal, requestAnimationFrame(l.count)) : (l.paused = !0, cancelAnimationFrame(l.rAF)) },
            l.reset = function () { l.paused = !1, delete l.startTime, l.initialized = !1, l.initialize() && (cancelAnimationFrame(l.rAF), l.printValue(l.startVal)) }, l.update
            = function (a) {
                if (l.initialize()) {
                    if (a = Number(a), !s(a)) return void (l.error = "[CountUp] update() - new endVal is not a number: " + a);
                    l.error = "", a !== l.frameVal && (cancelAnimationFrame(l.rAF), l.paused = !1, delete l.startTime, l.startVal = l.frameVal, l.endVal = a, l.countDown = l.startVal > l.endVal, l.rAF = requestAnimationFrame(l.count))
                }
            }, l.initialize() && l.printValue(l.startVal)
    };
    return e
});
//当前值
var startValue = 0;
//速度
var duration = 2000;
//目标值
var progress = 0;
(function ($) {
    $.fn.extend({
        lu_word: function (text) {
            var html = "<div><svg height=\"0\" width=\"0\"><defs><clipPath id=\"Mask\" clipPathUnits=\"objectBoundingBox\"><path fill=\"none\" id=\"svgmask\" /></clipPath></defs></svg></div>"
                + "<div style=\"position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto;height: 545px;width: 545px;\">"
                + "<div style =\"position: absolute; inset: 0px; margin: auto; height: 545px; width: 545px;clip-path:url('#Mask')\" >"
                + "<img draggable=\"false\" style=\"width: 545px;height: 545px;\" src=\"./img/2.png\" alt=\"Meteor element\"></div>"
                + "<div id=\"arrow\" style=\"position: absolute; inset: 0px; margin: auto; width: 300px; height: 300px; opacity: 1; transform: rotate(90deg);\">"
                + "<div style=\"position: relative;top: 50%;transform: translateY(-50%);display: inline-block;height: 0px;width: 0px;opacity: 1;margin-right: 0px;"
                + "border-top: 13px solid transparent; border-bottom: 13px solid transparent; border-right: 18px solid #00fcfc;\"></div></div>"
                + "<div id=\"point\"  style=\"position: absolute; inset: 0px; margin: auto; width: 350px; height: 350px; transform: rotate(90deg); opacity: 0.9; transition: all 0.01s;-moz-transition: all 0.01s;"
                + "-webkit-transition: all 0.01s;-o-transition: all 0.01s;\"><img draggable=\"false\" style=\"width: 350px;height: 350px;\" src=\"./img/1.png\" alt=\"Meteor element\"></div>"
                + "<div style=\"position: absolute; inset: 0px; margin: auto; border: 10px solid rgb(0, 252, 252); border-radius: 100%; height: 484px; width: 484px; transform: rotate(-90deg); opacity: 1;"
                + "box-shadow: rgba(0, 252, 252, 0.1) 0px 0px 10px 2px, rgba(0, 252, 252, 0.2) 0px 0px 26px 4px, rgba(0, 252, 252, 0.3) 0px 0px 37px 7px,rgba(0, 252, 252, 0.3) 0px 0px 37px 7px inset,"
                + "rgba(0, 252, 252, 0.2) 0px 0px 26px 4px inset, rgba(0, 252, 252, 0.1) 0px 0px 10px 2px inset; \"></div>"
                + "<div style=\"position: absolute; inset: 0px; margin: auto; border: 4px solid rgb(0, 252, 252); border-radius: 100%; height: 313px; width: 313px; transform: rotate(-90deg); opacity: 0.4; box-shadow: none;\"></div></div>"
                + "<div style=\"position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto;height: 545px;width: 545px;\"><div draggable=\"false\" style=\"position: absolute;top: 0;bottom: 0;"
                + "margin: auto;user-select: none;color: white;transform: translateY(-30%);text-shadow: 0 0 11px rgba(255,255,255,0.5);overflow: hidden;left: 0; right: 0;height: 87px;width: 250px;font-size: 70px;text-align: center;\">"
                + "<span style=\"white-space: nowrap;line-height: 87px;text-align: center;opacity: 1;\"id=\"mumC\">0</span>%</div><div draggable=\"false\" style=\" position: absolute;top: 0;bottom: 0;margin: auto;transform: translateY(70%);"
                + "left: 0;right: 0;width: 247px;max-height: 62px;font-size: 23px;text-align: center;\"><div id=\"lu_word_box\" style=\" word-break: break-all; white-space: nowrap;clip-path: none;line-height: 62px;top: 25px;opacity: 1;\">"
                + "<span id='lu_word_title' style=\"color:#fff\">"+text+"</span></div ></div ></div > ";
            var word = $(this);

            //更改仪表大小和位置
            var w = parseFloat(word.css("width"));
            var h = parseFloat(word.css("height"));
            var t = word.css("top");
            var l = word.css("left");
            //高和宽取小的值为目标值
            var r = w > h ? h : w;
            var s = r / 545;
            word.css({
                "transform": "scale(" + s + ")"});
            word.append(html);
            //不断旋转的点
            var num = 90;
            setInterval(function () {
                if (num == -270) {
                    num = 90;
                }
                $("#point").css("transform", "rotate(" + num + "deg)");
                num--;
            }, 15);
        },
        setWord: function (target, date) {
            progress = target;
            //仪表
            animate2(target);
            //百分比设置
            new CountUp("mumC", startValue * 100, date * 100, 0, 4, {
                useEasing: true,//效果
                separator: ''//数字分隔符
            }).start();
        }
    })
})(jQuery);
//计算回弹步长
function BounceOut(k) {
    if (k < (1 / 2.75)) {
        return 7.5625 * k * k;
    }
    else if (k < (2 / 2.75)) {
        return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
    } else if (k < (2.5 / 2.75)) {
        return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
    } else {
        return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
    }
}
//回弹效果
function animate2(endValue) {
    var startTime = new Date();
    var timerId = setInterval(function () {
        var percentage = (new Date - startTime) / duration;
        var stepValue = startValue + (endValue - startValue) * BounceOut(percentage);
        setpropress(stepValue);
        if (progress != endValue) {
            clearInterval(timerId);
            startValue = stepValue;
        }
        if (percentage >= 1) {
            startValue = endValue;
            clearInterval(timerId);
        }
    }, 13);
}
//设值
function setpropress(progress) {
    //遮罩控制
    var path = document.getElementById('svgmask');
    if (progress >0.999) {
        progress = 0.999;
    }
    // 计算当前的进度对应的角度值
    var degrees = progress * 360;
    var arrowtran = degrees + 90;
    $("#arrow").css("transform", "rotate(" + arrowtran + "deg)");
    // 计算当前角度对应的弧度值
    var rad = degrees * (Math.PI / 180);
    //极坐标转换成直角坐标
    var x = Math.sin(rad).toFixed(2) * 0.5 + 0.5;
    var y = -Math.cos(rad).toFixed(2) * 0.5 + 0.5;
    //大于180度时候画大角度弧，小于180度的画小角度弧，(deg > 180) ? 1 : 0
    var lenghty = window.Number(degrees > 180);
    //path 属性
    var descriptions = [
        'M', 0.5, 0.5
        , 'L', 0.5, 0
        , 'A', 0.5, 0.5, 0, lenghty, 1, x, y
        , 'z'
    ];
    // 给path 设置属性
    path.setAttribute('d', descriptions.join(' '));
}


var endTxt = "";
var timer = null;
var duration = 2000; //速度
var startValue = 0; //当前值
var progress = 0; //目标值

//跳数字
!function (a, n) {
    "function" == typeof define && define.amd ? define(n) : "object" == typeof exports ? module.exports = n(require, exports, module) : a.CountUp = n()
}(this, function (a, n, t) {
    var e = function (a, n, t, e, i, r) {
        function o(a) {
            a = a.toFixed(l.decimals), a += "";
            var n, t, e, i, r, o;
            if (n = a.split("."), t = n[0], e = n.length > 1 ? l.options.decimal + n[1] : "", l.options.useGrouping) {
                for (i = "", r = 0, o = t.length; r < o; ++r) 0 !== r && r % 3 === 0 && (i = l.options.separator + i), i = t[o - r - 1] + i;
                t = i
            }
            return l.options.numerals.length && (t = t.replace(/[0-9]/g, function (a) {
                return l.options.numerals[+a]
            }), e = e.replace(/[0-9]/g, function (a) {
                return l.options.numerals[+a]
            })), l.options.prefix + t + e + l.options.suffix
        }

        function u(a, n, t, e) {
            return t * (-Math.pow(2, -10 * a / e) + 1) * 1024 / 1023 + n
        }

        function s(a) {
            return "number" == typeof a && !isNaN(a)
        }

        var l = this;
        if (l.version = function () {
            return "1.9.2"
        }, l.options = {
            useEasing: !0,
            useGrouping: !0,
            separator: ",",
            decimal: ".",
            easingFn: u,
            formattingFn: o,
            prefix: "",
            suffix: "",
            numerals: []
        }, r && "object" == typeof r) for (var m in l.options) r.hasOwnProperty(m) && null !== r[m] && (l.options[m] = r[m]);
        "" === l.options.separator ? l.options.useGrouping = !1 : l.options.separator = "" + l.options.separator;
        for (var d = 0, c = ["webkit", "moz", "ms", "o"], f = 0; f < c.length && !window.requestAnimationFrame; ++f) window.requestAnimationFrame = window[c[f] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[c[f] + "CancelAnimationFrame"] || window[c[f] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function (a, n) {
            var t = (new Date).getTime(), e = Math.max(0, 16 - (t - d)), i = window.setTimeout(function () {
                a(t + e)
            }, e);
            return d = t + e, i
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (a) {
            clearTimeout(a)
        }), l.initialize = function () {
            return !!l.initialized || (l.error = "", l.d = "string" == typeof a ? document.getElementById(a) : a, l.d ? (l.startVal = Number(n), l.endVal = Number(t), s(l.startVal) && s(l.endVal) ? (l.decimals = Math.max(0, e || 0), l.dec = Math.pow(10, l.decimals), l.duration = 1e3 * Number(i) || 2e3, l.countDown = l.startVal > l.endVal, l.frameVal = l.startVal, l.initialized = !0, !0) : (l.error = "[CountUp] startVal (" + n + ") or endVal (" + t + ") is not a number", !1)) : (l.error = "[CountUp] target is null or undefined", !1))
        }, l.printValue = function (a) {
            var n = l.options.formattingFn(a);
            "INPUT" === l.d.tagName ? this.d.value = n : "text" === l.d.tagName || "tspan" === l.d.tagName ? this.d.textContent = n : this.d.innerHTML = n
        }, l.count = function (a) {
            l.startTime || (l.startTime = a), l.timestamp = a;
            var n = a - l.startTime;
            l.remaining = l.duration - n, l.options.useEasing ? l.countDown ? l.frameVal = l.startVal - l.options.easingFn(n, 0, l.startVal - l.endVal, l.duration) : l.frameVal = l.options.easingFn(n, l.startVal, l.endVal - l.startVal, l.duration) : l.countDown ? l.frameVal = l.startVal - (l.startVal - l.endVal) * (n / l.duration) : l.frameVal = l.startVal + (l.endVal - l.startVal) * (n / l.duration), l.countDown ? l.frameVal = l.frameVal < l.endVal ? l.endVal : l.frameVal : l.frameVal = l.frameVal > l.endVal ? l.endVal : l.frameVal, l.frameVal = Math.round(l.frameVal * l.dec) / l.dec, l.printValue(l.frameVal), n < l.duration ? l.rAF = requestAnimationFrame(l.count) : l.callback && l.callback()
        }, l.start = function (a) {
            l.initialize() && (l.callback = a, l.rAF = requestAnimationFrame(l.count))
        }, l.pauseResume = function () {
            l.paused ? (l.paused = !1, delete l.startTime, l.duration = l.remaining, l.startVal = l.frameVal, requestAnimationFrame(l.count)) : (l.paused = !0, cancelAnimationFrame(l.rAF))
        }, l.reset = function () {
            l.paused = !1, delete l.startTime, l.initialized = !1, l.initialize() && (cancelAnimationFrame(l.rAF), l.printValue(l.startVal))
        }, l.update = function (a) {
            if (l.initialize()) {
                if (a = Number(a), !s(a)) return void (l.error = "[CountUp] update() - new endVal is not a number: " + a);
                l.error = "", a !== l.frameVal && (cancelAnimationFrame(l.rAF), l.paused = !1, delete l.startTime, l.startVal = l.frameVal, l.endVal = a, l.countDown = l.startVal > l.endVal, l.rAF = requestAnimationFrame(l.count))
            }
        }, l.initialize() && l.printValue(l.startVal)
    };
    return e
});
function renderDashBoard(id, startTxt, endTxt) {
    var dashBoardHtml = "<div style=\"\n" +
        "    position: absolute;\n" +
        "    top: 250px;\n" +
        "    left: -10px;\n" +
        "\">\n" +
        "    <!--遮罩-->\n" +
        "    <div>\n" +
        "        <svg class=\"normal\" height=\"0\" width=\"0\">\n" +
        "            <defs>\n" +
        "                <clipPath id=\"Mask\" clipPathUnits=\"objectBoundingBox\">\n" +
        "                    <path class=\"normal\" fill=\"none\" id=\"svgmask\"></path>\n" +
        "                </clipPath>\n" +
        "            </defs>\n" +
        "        </svg>\n" +
        "    </div>\n" +
        "    <div style=\"position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto;height: 545px;width: 545px;\">\n" +
        "        <!--进度栅-->\n" +
        "        <div style=\"position: absolute; inset: 0px; margin: auto; height: 545px; width: 545px;clip-path:url('#Mask')\">\n" +
        "            <img draggable=\"false\" style=\"width: 545px;height: 545px;\" src=\"img/2.png\" alt=\"Meteor element\">\n" +
        "        </div>\n" +
        "        <!--指示箭头-->\n" +
        "        <div id=\"arrow\" class=\"normal\" style=\"position: absolute; inset: 0px; margin: auto; width: 300px; height: 300px; opacity: 1; transform: rotate(90deg);\">\n" +
        "            <div style=\"position: relative;top: 50%;transform: translateY(-50%);display: inline-block;height: 0px;width: 0px;opacity: 1;margin-right: 0px;\n" +
        "                      border-top: 13px solid transparent;border-bottom: 13px solid transparent;border-right: 18px solid #00fcfc;\">\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <!--旋转点-->\n" +
        "        <div id=\"point\" class=\"fast\" style=\"position: absolute; inset: 0px; margin: auto; width: 350px; height: 350px; transform: rotate(-255deg); opacity: 0.9;\">\n" +
        "            <img draggable=\"false\" style=\"width: 350px;height: 350px;\" src=\"img/1.png\" alt=\"Meteor element\">\n" +
        "        </div>\n" +
        "        <!--两个细圈-->\n" +
        "        <div style=\"position: absolute; inset: 0px; margin: auto; border: 10px solid rgb(0, 252, 252); border-radius: 100%; height: 484px; width: 484px; transform: rotate(-90deg); opacity: 1;\n" +
        "                  box-shadow: rgba(0, 252, 252, 0.1) 0px 0px 10px 2px, rgba(0, 252, 252, 0.2) 0px 0px 26px 4px, rgba(0, 252, 252, 0.3) 0px 0px 37px 7px,\n" +
        "                      rgba(0, 252, 252, 0.3) 0px 0px 37px 7px inset, rgba(0, 252, 252, 0.2) 0px 0px 26px 4px inset, rgba(0, 252, 252, 0.1) 0px 0px 10px 2px inset;\">\n" +
        "        </div>\n" +
        "        <!--内圈-->\n" +
        "        <div style=\"position: absolute; inset: 0px; margin: auto; border: 4px solid rgb(0, 252, 252); border-radius: 100%; height: 313px; width: 313px; transform: rotate(-90deg); opacity: 0.4;\n" +
        "                  box-shadow: none;\">\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <!--圆圈中间文字-->\n" +
        "    <div style=\"position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;height: 261px;width: 261px;\">\n" +
        "        <div draggable=\"false\" style=\"\n" +
        "    position: absolute;\n" +
        "    top: 0;\n" +
        "    bottom: 0;\n" +
        "    margin: auto;\n" +
        "    user-select: none;\n" +
        "    color: white;\n" +
        "    transform: translateY(-30%);\n" +
        "    text-shadow: 0 0 11px rgba(255,255,255,0.5);\n" +
        "    overflow: hidden;\n" +
        "    left: 150px;\n" +
        "    right: 0;\n" +
        "    height: 87px;\n" +
        "    width: 250px;\n" +
        "    font-size: 70px;\n" +
        "    text-align: center;\n" +
        "    \">\n" +
        "            <span style=\" white-space: nowrap;\n" +
        "    line-height: 87px;\n" +
        "    text-align: center;\n" +
        "    opacity: 1;\" id=\"mumC\">0</span>%\n" +
        "        </div>\n" +
        "        <div draggable=\"false\" style=\"\n" +
        "            position: absolute;\n" +
        "            top: 0;\n" +
        "            bottom: 0;\n" +
        "            margin: auto;\n" +
        "            transform: translateY(70%);\n" +
        "            left: 150px;\n" +
        "            right: 0;\n" +
        "            width: 247px;\n" +
        "            max-height: 62px;\n" +
        "            font-size: 23px;\n" +
        "            text-align: center;\n" +
        "            \">\n" +
        "            <div id=\"lu_word_box\" style=\"word-break: break-all; white-space: nowrap; clip-path: none; line-height: 62px; top: 25px; opacity: 1; overflow-wrap: break-word;\"><span id=\"lu_word_title\" style=\"color: rgb(255, 255, 255);\"></span></div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    </div>"


    $('#' + id).html(dashBoardHtml)



    //开始 打印文字
    typeTxtShow(startTxt);
    //不断旋转的点
    pointCycle();

    //主体
    $("#lu_word_title").empty()

    timer = setInterval(function () {
        //输入目标值
        progress = Math.random();
        animate2(progress);

        //百分比设置
        new CountUp("mumC", startValue * 100, progress * 100, 0, 4, {
            useEasing: true,//效果
            separator: ''//数字分隔符
        }).start();

        typeTxtShow(endTxt);
    }, 3000)
}

function typeTxtShow(typeTxt) {
    $("#lu_word_title").empty()
    var pp = document.getElementById("lu_word_title");
    var str = typeTxt
    n = 0;
    var timer;
    timer = setInterval(function () {
        if (str != undefined) {
            if (n < str.length) {
                pp.innerHTML += str.charAt(n);//sunstring(0,n)
                n++
            } else {
                clearInterval(timer);
            }
        }
    }, 100)
}

//设值
function setpropress(progress) {
    var path = document.getElementById('svgmask'); //遮罩控制

    if (progress >= 1) {
        progress = 0;
    }
    if (progress == 1) {
        progress = 0.99;
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

function pointCycle() {
    var num = 90;
    setInterval(function () {
        if (num == -270) {
            num = 90;
        }
        $("#point").css("transform", "rotate(" + num + "deg)");
        num--;
    }, 15);
}

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
        if (progress != endValue) {
            clearInterval(timerId);
            startValue = endValue;
        }
        var percentage = (new Date - startTime) / duration;
        var stepValue = startValue + (endValue - startValue) * BounceOut(percentage);
        setpropress(stepValue);
        if (percentage >= 1) {
            startValue = endValue;
            clearInterval(timerId);
        }
    }, 13);
}

! function(e) {
    "use strict";
    var a = function() {};
    a.prototype.createBarChart = function(e, a, t, r, o, i) { Morris.Bar({ element: e, data: a, xkey: t, ykeys: r, labels: o, hideHover: "auto", resize: !0, gridLineColor: "#eeeeee", barSizeRatio: .2, barColors: i }) }, a.prototype.createAreaChartDotted = function(e, a, t, r, o, i, n, s, l, y) { Morris.Area({ element: e, pointSize: 3, lineWidth: 1, data: r, xkey: o, ykeys: i, labels: n, hideHover: "auto", pointFillColors: s, pointStrokeColors: l, resize: !0, smooth: !1, gridLineColor: "#eef0f2", lineColors: y }) }, a.prototype.createDonutChart = function(e, a, t) { Morris.Donut({ element: e, data: a, barSize: .2, resize: !0, colors: t }) }, a.prototype.init = function() {
        this.createBarChart("morris-bar-example", [{ y: "2012", a: 87 }, { y: "2013", a: 75 }, { y: "2014", a: 50 }, { y: "2015", a: 75 }, { y: "2016", a: 50 }, { y: "2017", a: 38 }, { y: "2018", a: 72 }], "y", ["a"], ["Statistics"], ["#02c0ce"]);
        this.createAreaChartDotted("morris-area-with-dotted", 0, 0, [{ y: "2012", a: 10, b: 20 }, { y: "2013", a: 75, b: 65 }, { y: "2014", a: 50, b: 40 }, { y: "2015", a: 75, b: 65 }, { y: "2016", a: 50, b: 40 }, { y: "2017", a: 75, b: 65 }, { y: "2018", a: 90, b: 60 }], "y", ["a", "b"], ["Bitcoin", "Litecoin"], ["#ffffff"], ["#999999"], ["#009fb7", "#e3eaef"]);
        this.createDonutChart("morris-donut-example", [{ label: " Total Sales ", value: 12 }, { label: " Campaign ", value: 30 }, { label: " Daily Sales ", value: 20 }], ["#4fc6e1", "#009fb7", "#ebeff2"])
    }, e.Dashboard4 = new a, e.Dashboard4.Constructor = a
}(window.jQuery),
function(e) {
    "use strict";
    window.jQuery.Dashboard4.init()
}();
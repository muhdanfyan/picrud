! function(e) {
    "use strict";
    var a = function() {};
    a.prototype.createStackedChart = function(e, a, t, r, s, o) { Morris.Bar({ element: e, data: a, xkey: t, ykeys: r, stacked: !0, labels: s, hideHover: "auto", resize: !0, gridLineColor: "#eeeeee", barSizeRatio: .2, barColors: o }) }, a.prototype.init = function() { this.createStackedChart("leads-statics", [{ y: "2012", a: 75, b: 65 }, { y: "2013", a: 50, b: 40 }, { y: "2014", a: 75, b: 65 }, { y: "2015", a: 50, b: 40 }, { y: "2016", a: 75, b: 65 }, { y: "2017", a: 100, b: 90 }, { y: "2018", a: 80, b: 65 }], "y", ["a", "b"], ["Won Leads", "Lost Leads"], ["#009fb7", "#e3eaef"]) }, e.LeadsCharts = new a, e.LeadsCharts.Constructor = a
}(window.jQuery),
function(e) {
    "use strict";
    window.jQuery.LeadsCharts.init()
}();
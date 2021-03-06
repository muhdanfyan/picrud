! function(i) {
    "use strict";
    var e = function() { this.$body = i("body") };
    e.prototype.createAreaGraph = function(e, r, a, t, n) {
        var o = new Rickshaw.Graph({ element: document.querySelector(e), renderer: "area", stroke: !0, height: 250, preserve: !0, series: [{ color: t[0], data: r[0], name: n[0] }, { color: t[1], data: r[1], name: n[1] }] });
        o.render(), setInterval(function() { a.removeData(r), a.addData(r), o.update() }, 700), i(window).resize(function() { o.render() })
    }, e.prototype.createSimpleareaGraph = function(e, r, a) { new Rickshaw.Graph({ element: document.querySelector(e), renderer: "area", stroke: !0, series: [{ data: r, color: a[0] }] }).render() }, e.prototype.createMultipleareaGraph = function(e, r, a, t) { new Rickshaw.Graph({ element: document.querySelector(e), renderer: "area", stroke: !0, series: [{ data: r, color: t[0], border: 0 }, { data: a, color: t[1] }] }).render() }, e.prototype.createLinetoggleGraph = function(e, r, a, t) {
        for (var n = [
                [],
                [],
                []
            ], o = new Rickshaw.Fixtures.RandomData(150), i = 0; i < 150; i++) o.addData(n);
        var c = new Rickshaw.Graph({ element: document.getElementById(e), height: r, renderer: "line", series: [{ color: a[0], data: n[0], name: t[0] }, { color: a[1], data: n[1], name: t[1] }, { color: a[2], data: n[2], name: t[2] }] });
        c.render();
        new Rickshaw.Graph.HoverDetail({ graph: c, formatter: function(e, r, a) { var t = '<span class="date">' + new Date(1e3 * r).toUTCString() + "</span>"; return '<span class="detail_swatch" style="background-color: #000' + e.color + '"></span>' + e.name + ": " + parseInt(a) + "<br>" + t } })
    }, e.prototype.createLinePlotGraph = function(e, r, a) {
        var t = new Rickshaw.Graph({ element: document.getElementById(e), renderer: "lineplot", padding: { top: .1 }, series: [{ data: [{ x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 }], color: r[0], name: a[0] }, { data: [{ x: 0, y: 19 }, { x: 1, y: 22 }, { x: 2, y: 32 }, { x: 3, y: 20 }, { x: 4, y: 21 }], color: r[1], name: a[1] }] });
        new Rickshaw.Graph.HoverDetail({ graph: t });
        t.render()
    }, e.prototype.createMultiGraph = function(e, r, a, t) {
        for (var n = [
                [],
                [],
                [],
                [],
                []
            ], o = new Rickshaw.Fixtures.RandomData(50), i = 0; i < 75; i++) o.addData(n);
        var c = new Rickshaw.Graph({ element: document.getElementById(e), renderer: "multi", height: r, dotSize: 5, series: [{ name: a[0], data: n.shift(), color: t[0], renderer: "stack" }, { name: a[1], data: n.shift(), color: t[1], renderer: "stack" }, { name: a[2], data: n.shift(), color: t[2], renderer: "scatterplot" }, { name: a[3], data: n.shift().map(function(e) { return { x: e.x, y: e.y / 4 } }), color: t[3], renderer: "bar" }, { name: a[4], data: n.shift().map(function(e) { return { x: e.x, y: 1.5 * e.y } }), color: t[4], renderer: "line" }] });
        c.render();
        new Rickshaw.Graph.HoverDetail({ graph: c });
        var d = new Rickshaw.Graph.Legend({ graph: c, element: document.querySelector("#legend") });
        new Rickshaw.Graph.Behavior.Series.Highlight({ graph: c, legend: d, disabledColor: function() { return "#ddd" } }), new Rickshaw.Graph.Behavior.Series.Toggle({ graph: c, legend: d })
    }, e.prototype.init = function() {
        for (var e = [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                []
            ], r = new Rickshaw.Fixtures.RandomData(200), a = 0; a < 100; a++) r.addData(e);
        this.createAreaGraph("#linechart", e, r, ["#009fb7", "#e3eaef"], ["Moscow", "Shanghai"]);
        this.createSimpleareaGraph("#simplearea", [{ x: 0, y: 20 }, { x: 1, y: 25 }, { x: 2, y: 38 }, { x: 3, y: 28 }, { x: 4, y: 20 }], ["#009fb7"]);
        this.createMultipleareaGraph("#multiplearea", [{ x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 }], [{ x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 }], ["#009fb7", "#ebeff2"]);
        this.createLinetoggleGraph("linetoggle", [250], ["#009fb7", "#4fc6e1", "#36404a"], ["New York", "London", "Tokyo"]);
        this.createLinePlotGraph("lineplotchart", ["#009fb7", "#4fc6e1"], ["Bitcoin", "Ethereum"]);
        this.createMultiGraph("multichart", [250], ["Temperature", "Heat index", "Dewpoint", "Pop", "Humidity"], ["#009fb7", "#ebeff2", "#36404a", "#4fc6e1", "#fb6d9d"])
    }, i.RickshawChart = new e, i.RickshawChart.Constructor = e
}(window.jQuery),
function(e) {
    "use strict";
    window.jQuery.RickshawChart.init()
}();
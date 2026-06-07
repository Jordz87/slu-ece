function openModalPar() {
    modaldxln.style.display = "none",
    modaldxxln.style.display = "none",
    modalddln.style.display = "none",
    modaldtx.style.display = "none",
    modalPar.style.display = "block"
}

function openModalCoax() {
    modaldxln.style.display = "none",
    modaldxxln.style.display = "none",
    modalddln.style.display = "none",
    modaldtx.style.display = "none",
    modalCoax.style.display = "block"
}

function openModalPar2() {
    modaldxln.style.display = "none",
    modaldxxln.style.display = "none",
    modalddln.style.display = "none",
    modaldtx.style.display = "none",
    modalPar.style.display = "block"
}

function openModalCoax2() {
    modaldxln.style.display = "none",
    modaldxxln.style.display = "none",
    modalddln.style.display = "none",
    modaldtx.style.display = "none",
    modalCoax.style.display = "block"
}

function openModalD() {
    modaldxln.style.display = "none",
    modaldxxln.style.display = "none",
    modaldxxln.style.display = "none",
    modalddln.style.display = "none",
    modaldtx.style.display = "none",
    modalD.style.display = "block"
}

function closeModalPar() {
    modalPar.style.display = "none",
    modaldxxln.style.display = "none",
    modaldtx.style.display = "block",
    modaldxln.style.display = "block",
    modalddln.style.display = "block"
}

function closeModalCoax() {
    modaldtx.style.display = "block",
    modalCoax.style.display = "none",
    modaldxln.style.display = "none",
    modaldxxln.style.display = "block",
    modalddln.style.display = "block"
}

function closeModalD() {
    1 == counter && (modaldxln.style.display = "block",
    modaldxxln.style.display = "none"),
    2 == counter && (modaldxln.style.display = "none",
    modaldxxln.style.display = "block"),
    modaldtx.style.display = "block",
    modalD.style.display = "none",
    modalddln.style.display = "block",
    modaldxln.style.display = "block"
}

function outsideClick(e) {
    e.target == modalPar && (modalPar.style.display = "none",
    modaldxxln.style.display = "none",
    modaldtx.style.display = "block",
    modaldxln.style.display = "block",
    modalddln.style.display = "block"),
    e.target == modalCoax && (modaldtx.style.display = "block",
    modalCoax.style.display = "none",
    modaldxln.style.display = "none",
    modaldxxln.style.display = "block",
    modalddln.style.display = "block"),
    e.target == modalD && (modalD.style.display = "none",
    modaldtx.style.display = "block",
    modaldxln.style.display = "block",
    modalddln.style.display = "block")
}

function resvalueP() {
    document.getElementById("P1").value = 0,
    document.getElementById("P2").value = 0,
    document.getElementById("P3").value = 0,
    document.getElementById("P4").value = 0
}

function resvalueC() {
    document.getElementById("C1").value = 0,
    document.getElementById("C2").value = 0,
    document.getElementById("C3").value = 0,
    document.getElementById("C4").value = 0
}

function resvalueD() {
    document.getElementById("D1").value = 0,
    document.getElementById("D2").value = 0,
    document.getElementById("D3").value = 0,
    document.getElementById("D4").value = 0
}

function getvalueP() {
    var e = .001 * document.getElementById("P1").value
      , t = .001 * document.getElementById("P2").value
      , n = document.getElementById("P3").value
      , l = 1e-6 * document.getElementById("P4").value;
    1e6 * document.getElementById("Tx1").value;
    document.getElementById("dpar").innerHTML = e / .001,
    document.getElementById("Dpar").innerHTML = t / .001,
    document.getElementById("Condp").innerHTML = l / 1e-6,
    document.getElementById("Erp").innerHTML = n,
    document.getElementById("din").innerHTML = "--",
    document.getElementById("dout").innerHTML = "--",
    document.getElementById("Condc").innerHTML = "--",
    document.getElementById("Erc").innerHTML = "--",
    document.getElementById("dpar").style.color = "#f5f542",
    document.getElementById("Dpar").style.color = "#f5f542",
    document.getElementById("Condp").style.color = "#f5f542",
    document.getElementById("Erp").style.color = "#f5f542",
    document.getElementById("din").style.color = "#D7DBDD",
    document.getElementById("dout").style.color = "#D7DBDD",
    document.getElementById("Condc").style.color = "#D7DBDD",
    document.getElementById("Erc").style.color = "#D7DBDD",
    document.getElementById("R").style.color = "#D7DBDD",
    document.getElementById("L").style.color = "#D7DBDD",
    document.getElementById("G").style.color = "#D7DBDD",
    document.getElementById("C").style.color = "#D7DBDD",
    modalPar.style.display = "none",
    modaldtx.style.display = "block",
    modaldxln.style.display = "block",
    modalddln.style.display = "block",
    modaldxxln.style.display = "none",
    counter = 1
}

function getvalueC() {
    var e = .001 * document.getElementById("C1").value
      , t = .001 * document.getElementById("C2").value
      , n = document.getElementById("C3").value
      , l = 1e-6 * document.getElementById("C4").value;
    Freq = 1e6 * document.getElementById("Tx2").value,
    document.getElementById("dpar").innerHTML = "--",
    document.getElementById("Dpar").innerHTML = "--",
    document.getElementById("Condp").innerHTML = "--",
    document.getElementById("Erp").innerHTML = "--",
    document.getElementById("din").innerHTML = e / .001,
    document.getElementById("dout").innerHTML = t / .001,
    document.getElementById("Condc").innerHTML = l / 1e-6,
    document.getElementById("Erc").innerHTML = n,
    document.getElementById("din").style.color = "#f5f542",
    document.getElementById("dout").style.color = "#f5f542",
    document.getElementById("Condc").style.color = "#f5f542",
    document.getElementById("Erc").style.color = "#f5f542",
    document.getElementById("dpar").style.color = "#D7DBDD",
    document.getElementById("Dpar").style.color = "#D7DBDD",
    document.getElementById("Condp").style.color = "#D7DBDD",
    document.getElementById("Erp").style.color = "#D7DBDD",
    document.getElementById("R").style.color = "#D7DBDD",
    document.getElementById("L").style.color = "#D7DBDD",
    document.getElementById("G").style.color = "#D7DBDD",
    document.getElementById("C").style.color = "#D7DBDD",
    modalCoax.style.display = "none",
    modaldtx.style.display = "block",
    modaldxln.style.display = "none",
    modaldxxln.style.display = "block",
    modalddln.style.display = "block",
    counter = 2
}

function getvalueD() {
    document.getElementById("Tx3").defaultValue = 10;
    var e = 1 * document.getElementById("D1").value;
    console.log(e);
    var t = 1e-6 * document.getElementById("D2").value
      , n = 1e-6 * document.getElementById("D3").value
      , l = 1e-12 * document.getElementById("D4").value;
    Freq = 1e6 * document.getElementById("Tx3").value,
    document.getElementById("R").innerHTML = Math.round(1e5 * (1 * e + Number.EPSILON)) / 1e5,
    document.getElementById("L").innerHTML = Math.round(1e5 * (t / 1e-6 + Number.EPSILON)) / 1e5,
    document.getElementById("G").innerHTML = Math.round(1e5 * (n / 1e-6 + Number.EPSILON)) / 1e5,
    document.getElementById("C").innerHTML = Math.round(1e5 * (l / 1e-12 + Number.EPSILON)) / 1e5,
    document.getElementById("dpar").innerHTML = "--",
    document.getElementById("Dpar").innerHTML = "--",
    document.getElementById("Condp").innerHTML = "--",
    document.getElementById("Erp").innerHTML = "--",
    document.getElementById("din").innerHTML = "--",
    document.getElementById("dout").innerHTML = "--",
    document.getElementById("Condc").innerHTML = "--",
    document.getElementById("Erc").innerHTML = "--",
    document.getElementById("R").style.color = "#f5f542",
    document.getElementById("L").style.color = "#f5f542",
    document.getElementById("G").style.color = "#f5f542",
    document.getElementById("C").style.color = "#f5f542",
    document.getElementById("dpar").style.color = "#D7DBDD",
    document.getElementById("Dpar").style.color = "#D7DBDD",
    document.getElementById("Condp").style.color = "#D7DBDD",
    document.getElementById("Erp").style.color = "#D7DBDD",
    document.getElementById("din").style.color = "#D7DBDD",
    document.getElementById("dout").style.color = "#D7DBDD",
    document.getElementById("Condc").style.color = "#D7DBDD",
    document.getElementById("Erc").style.color = "#D7DBDD",
    modalD.style.display = "none",
    modaldtx.style.display = "block",
    modaldxln.style.display = "block",
    modalddln.style.display = "block",
    counter = 3
}

function calc() {
    if (1 == counter) {
        var e = .001 * document.getElementById("P1").value
          , t = .001 * document.getElementById("P2").value
          , n = 1e-12 * document.getElementById("P3").value
          , d = 1e-6 * document.getElementById("P4").value
          , o = 1e6 * document.getElementById("Tx1").value;
        const m = 8.854e-12
          , u = 58e6
          , y = 4e-7 * Math.PI;
        var a = Math.sqrt(Math.PI * o * y / u)
          , r = 2 * a / (Math.PI * e)
          , s = y / Math.PI * Math.log(t / e + Math.sqrt(t / e * (t / e)))
          , E = Math.PI * d / Math.log(t / e + Math.sqrt(t / e * (t / e)));
        console.log(E);
        var i = E * m * n / d * 1e12;

        w = 2 * o * Math.PI,
        l = w * s,
        c = w * i;
        var B = new Complex(r,l)
          , I = new Complex(E,c);
        zo = B.div(I).sqrt(),
        Zodeg = Complex(zo.num, zo.im).arg(),
        Zo = zo.re;

        var g = B.mul(I).sqrt();
        D = Complex(g.num, g.im).arg();
        var g = (D * Math.PI / 180,
        B.mul(I).sqrt())
          , D = new Complex(g.num,g.im).arg();
        D * Math.PI / 180;
        document.getElementById("D1").value = r,
        document.getElementById("D2").value = s / 1e-6,
        document.getElementById("D3").value = E / 1e-6,
        document.getElementById("D4").value = i / 1e-12,
        document.getElementById("Tx3").value = o / 1e6,
        document.getElementById("Freq").innerHTML = o / 1e6,
        document.getElementById("dpar").innerHTML = e / .001,
        document.getElementById("Dpar").innerHTML = t / .001,
        document.getElementById("Condp").innerHTML = d / 1e-6,
        document.getElementById("Erp").innerHTML = n / 1e-12,
        document.getElementById("din").innerHTML = "--",
        document.getElementById("dout").innerHTML = "--",
        document.getElementById("Condc").innerHTML = "--",
        document.getElementById("Erc").innerHTML = "--",
        document.getElementById("R").innerHTML = Math.round(1e5 * (r + Number.EPSILON)) / 1e5,
        document.getElementById("L").innerHTML = Math.round(1e5 * (s / 1e-6 + Number.EPSILON)) / 1e5,
        document.getElementById("G").innerHTML = Math.round(1e16 * (E / 1e-6 + Number.EPSILON)) / 1e16,
        document.getElementById("C").innerHTML = Math.round(1e5 * (i / 1e-12 + Number.EPSILON)) / 1e5,
        document.getElementById("Zo").innerHTML = Math.round(1e5 * (Zo + Number.EPSILON)) / 1e5,
        document.getElementById("yre").innerHTML = Math.round(1e5 * (g.re + Number.EPSILON)) / 1e5,
        document.getElementById("yim").innerHTML = Math.round(1e5 * (g.im + Number.EPSILON)) / 1e5,
        document.getElementById("dpar").style.color = "#f5f542",
        document.getElementById("Freq").style.color = "#f5f542",
        document.getElementById("Dpar").style.color = "#f5f542",
        document.getElementById("Condp").style.color = "#f5f542",
        document.getElementById("Erp").style.color = "#f5f542",
        document.getElementById("din").style.color = "#D7DBDD",
        document.getElementById("dout").style.color = "#D7DBDD",
        document.getElementById("Condc").style.color = "#D7DBDD",
        document.getElementById("Erc").style.color = "#D7DBDD",
        document.getElementById("R").style.color = "#D7DBDD",
        document.getElementById("L").style.color = "#D7DBDD",
        document.getElementById("G").style.color = "#D7DBDD",
        document.getElementById("C").style.color = "#D7DBDD"
    }
    if (2 == counter) {
        var p = .001 * document.getElementById("C1").value
          , M = .001 * document.getElementById("C2").value
          , f = 1e-12 * document.getElementById("C3").value
          , L = 1e-6 * document.getElementById("C4").value;
        o = 1e6 * document.getElementById("Tx2").value;
        const m = 8.854e-12
          , u = 58e6
          , y = 4e-7 * Math.PI;
        var x = p / 2
          , v = M / 2
          , a = 1 / (2 * Math.PI) * Math.sqrt(Math.PI * o * y / u)
          , r = a * (1 / x + 1 / v)
          , s = y / (2 * Math.PI) * Math.log(v / x)
          , E = L * (2 * Math.PI) / Math.log(v / x)
          , i = m * f * (2 * Math.PI) / Math.log(v / x) * 1e12;
        w = 2 * o * Math.PI,
        l = w * s,
        c = w * i;
        var B = new Complex(r,l)
          , I = new Complex(E,c);
        zo = B.div(I).sqrt(),
        Zodeg = Complex(zo.num, zo.im).arg(),
        Zo = zo.re;
        var g = B.mul(I).sqrt();
        D = Complex(g.num, g.im).arg();
        var g = (D * Math.PI / 180,
        B.mul(I).sqrt())
          , D = new Complex(g.num,g.im).arg();
        D * Math.PI / 180;
        document.getElementById("D1").value = r,
        document.getElementById("D2").value = s / 1e-6,
        document.getElementById("D3").value = E / 1e-6,
        document.getElementById("D4").value = i / 1e-12,
        document.getElementById("Tx3").value = o / 1e6,
        document.getElementById("Freq").innerHTML = o / 1e6,
        document.getElementById("dpar").innerHTML = "--",
        document.getElementById("Dpar").innerHTML = "--",
        document.getElementById("Condp").innerHTML = "--",
        document.getElementById("Erp").innerHTML = "--",
        document.getElementById("din").innerHTML = p / .001,
        document.getElementById("dout").innerHTML = M / .001,
        document.getElementById("Condc").innerHTML = L / 1e-6,
        document.getElementById("Erc").innerHTML = f / 1e-12,
        document.getElementById("D1").innerHTML = r,
        document.getElementById("D2").innerHTML = s / 1e-6,
        document.getElementById("D3").innerHTML = E / 1e-6,
        document.getElementById("D4").innerHTML = i / 1e-12,
        document.getElementById("R").innerHTML = Math.round(1e5 * (r + Number.EPSILON)) / 1e5,
        document.getElementById("L").innerHTML = Math.round(1e5 * (s / 1e-6 + Number.EPSILON)) / 1e5,
        document.getElementById("G").innerHTML = Math.round(1e12 * (E / 1e-6 + Number.EPSILON)) / 1e12,
        document.getElementById("C").innerHTML = Math.round(1e5 * (i / 1e-12 + Number.EPSILON)) / 1e5,
        document.getElementById("Zo").innerHTML = Math.round(1e5 * (Zo + Number.EPSILON)) / 1e5,
        document.getElementById("yre").innerHTML = Math.round(1e5 * (g.re + Number.EPSILON)) / 1e5,
        document.getElementById("yim").innerHTML = Math.round(1e5 * (g.im + Number.EPSILON)) / 1e5,
        document.getElementById("din").style.color = "#f5f542",
        document.getElementById("dout").style.color = "#f5f542",
        document.getElementById("Condc").style.color = "#f5f542",
        document.getElementById("Erc").style.color = "#f5f542",
        document.getElementById("Freq").style.color = "#f5f542",
        document.getElementById("dpar").style.color = "#D7DBDD",
        document.getElementById("Dpar").style.color = "#D7DBDD",
        document.getElementById("Condp").style.color = "#D7DBDD",
        document.getElementById("Erp").style.color = "#D7DBDD",
        document.getElementById("R").style.color = "#D7DBDD",
        document.getElementById("L").style.color = "#D7DBDD",
        document.getElementById("G").style.color = "#D7DBDD",
        document.getElementById("C").style.color = "#D7DBDD",
        console.log("No")
    }
    if (3 == counter) {
        document.getElementById("P1").defaultValue = 0,
        document.getElementById("P2").defaultValue = 0,
        document.getElementById("P3").defaultValue = 0,
        document.getElementById("P4").defaultValue = 0,
        document.getElementById("C1").defaultValue = 0,
        document.getElementById("C2").defaultValue = 0,
        document.getElementById("C3").defaultValue = 0,
        document.getElementById("C4").defaultValue = 0;
        var r = document.getElementById("D1").value
          , s = 1e-6 * document.getElementById("D2").value
          , E = 1e-6 * document.getElementById("D3").value
          , i = 1e-12 * document.getElementById("D4").value;
        o = 1e6 * document.getElementById("Tx3").value,
        w = 2 * o * Math.PI,
        l = w * s,
        c = w * i;
        var B = new Complex(r,l)
          , I = new Complex(E,c);
        zo = B.div(I).sqrt(),
        Zodeg = Complex(zo.num, zo.im).arg(),
        Zo = zo.re;
        var g = B.mul(I).sqrt();
        D = Complex(g.num, g.im).arg();
        var g = (D * Math.PI / 180,
        B.mul(I).sqrt())
          , D = new Complex(g.num,g.im).arg();
        D * Math.PI / 180;

        document.getElementById("Freq").innerHTML = o / 1e6,
        document.getElementById("R").innerHTML = Math.round(1e5 * (1 * r + Number.EPSILON)) / 1e5,
        document.getElementById("L").innerHTML = Math.round(1e5 * (s / 1e-6 + Number.EPSILON)) / 1e5,
        document.getElementById("G").innerHTML = Math.round(1e5 * (E / 1e-6 + Number.EPSILON)) / 1e5,
        document.getElementById("C").innerHTML = Math.round(1e5 * (i / 1e-12 + Number.EPSILON)) / 1e5,
        document.getElementById("Zo").innerHTML = Math.round(1e5 * (Zo + Number.EPSILON)) / 1e5,
        document.getElementById("yre").innerHTML = Math.round(1e5 * (g.re + Number.EPSILON)) / 1e5,
        document.getElementById("yim").innerHTML = Math.round(1e5 * (g.im + Number.EPSILON)) / 1e5,
        document.getElementById("dpar").innerHTML = "--",
        document.getElementById("Dpar").innerHTML = "--",
        document.getElementById("Condp").innerHTML = "--",
        document.getElementById("Erp").innerHTML = "--",
        document.getElementById("din").innerHTML = "--",
        document.getElementById("dout").innerHTML = "--",
        document.getElementById("Condc").innerHTML = "--",
        document.getElementById("Erc").innerHTML = "--",
        document.getElementById("R").style.color = "#f5f542",
        document.getElementById("L").style.color = "#f5f542",
        document.getElementById("G").style.color = "#f5f542",
        document.getElementById("C").style.color = "#f5f542",
        document.getElementById("Freq").style.color = "#f5f542",
        document.getElementById("din").style.color = "#D7DBDD",
        document.getElementById("dout").style.color = "#D7DBDD",
        document.getElementById("Condc").style.color = "#D7DBDD",
        document.getElementById("Erc").style.color = "#D7DBDD",
        document.getElementById("dpar").style.color = "#D7DBDD",
        document.getElementById("Dpar").style.color = "#D7DBDD",
        document.getElementById("Condp").style.color = "#D7DBDD",
        document.getElementById("Erp").style.color = "#D7DBDD"
    }
}

function dragElement(e) {
    function t(e) {
        e = e || window.event,
        e.preventDefault(),
        m = e.clientX,
        c = e.clientY,
        document.onmouseup = l,
        document.onmousemove = n
    }

    function n(t) {
        t = t || window.event,
        t.preventDefault(),
        d = m - t.clientX,
        o = c - t.clientY,
        m = t.clientX,
        c = t.clientY,
        e.style.top = e.offsetTop - o + "px",
        e.style.left = e.offsetLeft - d + "px"
    }

    function l() {
        document.onmouseup = null,
        document.onmousemove = null
    }
    var d = 0
      , o = 0
      , m = 0
      , c = 0;
    document.getElementById(e.id + "header") ? document.getElementById(e.id + "header").onmousedown = t : e.onmousedown = t
}

function dragElement(e) {
    function t(e) {
        e = e || window.event,
        e.preventDefault(),
        m = e.clientX,
        c = e.clientY,
        document.onmouseup = l,
        document.onmousemove = n
    }

    function n(t) {
        t = t || window.event,
        t.preventDefault(),
        d = m - t.clientX,
        o = c - t.clientY,
        m = t.clientX,
        c = t.clientY,
        e.style.top = e.offsetTop - o + "px",
        e.style.left = e.offsetLeft - d + "px"
    }

    function l() {
        document.onmouseup = null,
        document.onmousemove = null
    }
    var d = 0
      , o = 0
      , m = 0
      , c = 0;
    document.getElementById(e.id + "header") ? document.getElementById(e.id + "header").onmousedown = t : e.onmousedown = t
}

function dragElement(e) {
    function t(e) {
        e = e || window.event,
        e.preventDefault(),
        m = e.clientX,
        c = e.clientY,
        document.onmouseup = l,
        document.onmousemove = n
    }

    function n(t) {
        t = t || window.event,
        t.preventDefault(),
        d = m - t.clientX,
        o = c - t.clientY,
        m = t.clientX,
        c = t.clientY,
        e.style.top = e.offsetTop - o + "px",
        e.style.left = e.offsetLeft - d + "px"
    }

    function l() {
        document.onmouseup = null,
        document.onmousemove = null
    }
    var d = 0
      , o = 0
      , m = 0
      , c = 0;
    document.getElementById(e.id + "header") ? document.getElementById(e.id + "header").onmousedown = t : e.onmousedown = t
}

function closeAllSelect(e) {
    var t, n, l, d, o, m = [];
    for (t = document.getElementsByClassName("select-items"),
    n = document.getElementsByClassName("select-selected"),
    d = t.length,
    o = n.length,
    l = 0; o > l; l++)
        e == n[l] ? m.push(l) : n[l].classList.remove("select-arrow-active");
    for (l = 0; d > l; l++)
        m.indexOf(l) && t[l].classList.add("select-hide")
}

function dragElement(e) {
    function t(e) {
        e = e || window.event,
        e.preventDefault(),
        m = e.clientX,
        c = e.clientY,
        document.onmouseup = l,
        document.onmousemove = n
    }

    function n(t) {
        t = t || window.event,
        t.preventDefault(),
        d = m - t.clientX,
        o = c - t.clientY,
        m = t.clientX,
        c = t.clientY,
        e.style.top = e.offsetTop - o + "px",
        e.style.left = e.offsetLeft - d + "px"
    }

    function l() {
        document.onmouseup = null,
        document.onmousemove = null
    }
    var d = 0
      , o = 0
      , m = 0
      , c = 0;
    document.getElementById(e.id + "header") ? document.getElementById(e.id + "header").onmousedown = t : e.onmousedown = t
}
const modalPar = document.querySelector("#my-modalPar")
  , modalCoax = document.querySelector("#my-modalCoax")
  , modaldtx = document.querySelector("#my-modaldtx")
  , modaldxln = document.querySelector("#my-modaldxln")
  , modaldxxln = document.querySelector("#my-modaldxxln")
  , modalddln = document.querySelector("#my-modalddln")
  , modalD = document.querySelector("#my-modalD")
  , modalBtnPar = document.querySelector("#inputPar")
  , modalBtnCoax = document.querySelector("#inputCoax")
  , modalBtnPar2 = document.querySelector("#inputPar2")
  , modalBtnCoax2 = document.querySelector("#inputCoax2")
  , modalBtnD = document.querySelector("#inputDist")
  , closeBtnPar = document.querySelector(".closePar")
  , closeBtnCoax = document.querySelector(".closeCoax")
  , closeBtnD = document.querySelector(".closeD");
modalBtnPar.addEventListener("click", openModalPar),
modalBtnCoax.addEventListener("click", openModalCoax),
modalBtnPar2.addEventListener("click", openModalPar2),
modalBtnCoax2.addEventListener("click", openModalCoax2),
modalBtnD.addEventListener("click", openModalD),
closeBtnPar.addEventListener("click", closeModalPar),
closeBtnCoax.addEventListener("click", closeModalCoax),
closeBtnD.addEventListener("click", closeModalD),
window.addEventListener("click", outsideClick);
var counter = 0;
dragElement(document.getElementById("my-modaldxln")),
dragElement(document.getElementById("my-modaldxxln")),
dragElement(document.getElementById("my-modalddln")),
document.addEventListener("click", closeAllSelect),
dragElement(document.getElementById("my-modaldtx"));

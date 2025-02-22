var kit = {
  embed: function (u, z) {
    var q = document.getElementById(z);
    if (null == q) throw Error("Could not find element [id=" + z + "]");
    for (
      var f = null, s = window.location.search.substr(1).split("&"), r = 0;
      r < s.length;
      ++r
    ) {
      var k = s[r].split("=");
      if (1 < k.length && "2dkit" == unescape(k[0]).toLowerCase()) {
        f = unescape(k[1]).toLowerCase();
        break;
      }
    }
    for (r = 0; r < u.length; ++r)
      switch (
        ((s = u[r]),
        (k = s.match(/\.(\w+)(\?|$)/)) && (k = k[1].toLowerCase()),
        k)
      ) {
        case "swf":
          if (
            (null == f || "flash" == f) &&
            swfobject.hasFlashPlayerVersion("11.2") &&
            !/\bAndroid\b/.exec(navigator.userAgent)
          )
            return (
              (f = document.createElement("div")),
              (f.id = z + "-swf"),
              (q.innerHTML = ""),
              q.appendChild(f),
              (q.style.overflow = "hidden"),
              "undefined" == typeof $kit_expose &&
                (window.$kit_expose = function (f, k) {
                  window[f] =
                    null != k
                      ? function () {
                          var q = document.getElementById(k);
                          q[f].apply(q, arguments);
                        }
                      : null;
                }),
              swfobject.embedSWF(
                s,
                f.id,
                "100%",
                "100%",
                "11.2",
                null,
                {},
                {
                  allowScriptAccess: "always",
                  allowFullScreen: "true",
                  wmode: "direct",
                },
                { id: f.id, name: f.id }
              ),
              !0
            );
          break;
        case "js":
          if (null == f || "html5" == f)
            if (((k = document.createElement("canvas")), "getContext" in k)) {
              var C = Array.prototype.slice.call(q.childNodes);
              k.id = z + "-canvas";
              q.appendChild(k);
              kit.canvas = k;
              var D = document.createElement("script");
              D.addEventListener("load", function F() {
                D.removeEventListener("load", F);
                for (var f = 0; f < C.length; ++f) q.removeChild(C[f]);
                kit.canvas = null;
              });
              D.src = s;
              q.appendChild(D);
              0 <= navigator.userAgent.indexOf("iPhone OS 7_1") &&
                ((f = document.querySelector("meta[name=viewport]")),
                null != f &&
                  0 > f.content.indexOf("minimal-ui") &&
                  (f.content += ", minimal-ui"));
              return !0;
            }
          break;
        default:
          throw Error("Don't know how to embed [url=" + s + "]");
      }
    return !1;
  },
};
"undefined" == typeof flambe && (window.flambe = kit);
var swfobject = (function () {
  function u() {
    if (!A) {
      try {
        var a = d
          .getElementsByTagName("body")[0]
          .appendChild(d.createElement("span"));
        a.parentNode.removeChild(a);
      } catch (b) {
        return;
      }
      A = !0;
      for (var a = H.length, c = 0; c < a; c++) H[c]();
    }
  }
  function z(a) {
    A ? a() : (H[H.length] = a);
  }
  function q(a) {
    if (typeof t.addEventListener != m) t.addEventListener("load", a, !1);
    else if (typeof d.addEventListener != m) d.addEventListener("load", a, !1);
    else if (typeof t.attachEvent != m) X(t, "onload", a);
    else if ("function" == typeof t.onload) {
      var b = t.onload;
      t.onload = function () {
        b();
        a();
      };
    } else t.onload = a;
  }
  function f() {
    var a = d.getElementsByTagName("body")[0],
      b = d.createElement(w);
    b.setAttribute("type", I);
    var c = a.appendChild(b);
    if (c) {
      var g = 0;
      (function () {
        if (typeof c.GetVariable != m) {
          var h = c.GetVariable("$version");
          h &&
            ((h = h.split(" ")[1].split(",")),
            (e.pv = [
              parseInt(h[0], 10),
              parseInt(h[1], 10),
              parseInt(h[2], 10),
            ]));
        } else if (10 > g) {
          g++;
          setTimeout(arguments.callee, 10);
          return;
        }
        a.removeChild(b);
        c = null;
        s();
      })();
    } else s();
  }
  function s() {
    var a = x.length;
    if (0 < a)
      for (var b = 0; b < a; b++) {
        var c = x[b].id,
          g = x[b].callbackFn,
          h = { success: !1, id: c };
        if (0 < e.pv[0]) {
          var d = p(c);
          if (d)
            if (!J(x[b].swfVersion) || (e.wk && 312 > e.wk))
              if (x[b].expressInstall && k()) {
                h = {};
                h.data = x[b].expressInstall;
                h.width = d.getAttribute("width") || "0";
                h.height = d.getAttribute("height") || "0";
                d.getAttribute("class") &&
                  (h.styleclass = d.getAttribute("class"));
                d.getAttribute("align") && (h.align = d.getAttribute("align"));
                for (
                  var l = {},
                    d = d.getElementsByTagName("param"),
                    f = d.length,
                    n = 0;
                  n < f;
                  n++
                )
                  "movie" != d[n].getAttribute("name").toLowerCase() &&
                    (l[d[n].getAttribute("name")] = d[n].getAttribute("value"));
                C(h, l, c, g);
              } else D(d), g && g(h);
            else B(c, !0), g && ((h.success = !0), (h.ref = r(c)), g(h));
        } else
          B(c, !0),
            g &&
              ((c = r(c)) &&
                typeof c.SetVariable != m &&
                ((h.success = !0), (h.ref = c)),
              g(h));
      }
  }
  function r(a) {
    var b = null;
    (a = p(a)) &&
      "OBJECT" == a.nodeName &&
      (typeof a.SetVariable != m
        ? (b = a)
        : (a = a.getElementsByTagName(w)[0]) && (b = a));
    return b;
  }
  function k() {
    return !K && J("6.0.65") && (e.win || e.mac) && !(e.wk && 312 > e.wk);
  }
  function C(a, b, c, g) {
    K = !0;
    O = g || null;
    R = { success: !1, id: c };
    var h = p(c);
    if (h) {
      "OBJECT" == h.nodeName ? ((G = N(h)), (L = null)) : ((G = h), (L = c));
      a.id = S;
      if (
        typeof a.width == m ||
        (!/%$/.test(a.width) && 310 > parseInt(a.width, 10))
      )
        a.width = "310";
      if (
        typeof a.height == m ||
        (!/%$/.test(a.height) && 137 > parseInt(a.height, 10))
      )
        a.height = "137";
      d.title = d.title.slice(0, 47) + " - Flash Player Installation";
      g = e.ie && e.win ? "ActiveX" : "PlugIn";
      g =
        "MMredirectURL=" +
        t.location.toString().replace(/&/g, "%26") +
        "&MMplayerType=" +
        g +
        "&MMdoctitle=" +
        d.title;
      b.flashvars = typeof b.flashvars != m ? b.flashvars + ("&" + g) : g;
      e.ie &&
        e.win &&
        4 != h.readyState &&
        ((g = d.createElement("div")),
        (c += "SWFObjectNew"),
        g.setAttribute("id", c),
        h.parentNode.insertBefore(g, h),
        (h.style.display = "none"),
        (function () {
          4 == h.readyState
            ? h.parentNode.removeChild(h)
            : setTimeout(arguments.callee, 10);
        })());
      F(a, b, c);
    }
  }
  function D(a) {
    if (e.ie && e.win && 4 != a.readyState) {
      var b = d.createElement("div");
      a.parentNode.insertBefore(b, a);
      b.parentNode.replaceChild(N(a), b);
      a.style.display = "none";
      (function () {
        4 == a.readyState
          ? a.parentNode.removeChild(a)
          : setTimeout(arguments.callee, 10);
      })();
    } else a.parentNode.replaceChild(N(a), a);
  }
  function N(a) {
    var b = d.createElement("div");
    if (e.win && e.ie) b.innerHTML = a.innerHTML;
    else if ((a = a.getElementsByTagName(w)[0]))
      if ((a = a.childNodes))
        for (var c = a.length, g = 0; g < c; g++)
          (1 == a[g].nodeType && "PARAM" == a[g].nodeName) ||
            8 == a[g].nodeType ||
            b.appendChild(a[g].cloneNode(!0));
    return b;
  }
  function F(a, b, c) {
    var g,
      h = p(c);
    if (e.wk && 312 > e.wk) return g;
    if (h)
      if ((typeof a.id == m && (a.id = c), e.ie && e.win)) {
        var f = "",
          l;
        for (l in a)
          a[l] != Object.prototype[l] &&
            ("data" == l.toLowerCase()
              ? (b.movie = a[l])
              : "styleclass" == l.toLowerCase()
              ? (f += ' class="' + a[l] + '"')
              : "classid" != l.toLowerCase() &&
                (f += " " + l + '="' + a[l] + '"'));
        l = "";
        for (var k in b)
          b[k] != Object.prototype[k] &&
            (l += '<param name="' + k + '" value="' + b[k] + '" />');
        h.outerHTML =
          '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' +
          f +
          ">" +
          l +
          "</object>";
        M[M.length] = a.id;
        g = p(a.id);
      } else {
        k = d.createElement(w);
        k.setAttribute("type", I);
        for (var n in a)
          a[n] != Object.prototype[n] &&
            ("styleclass" == n.toLowerCase()
              ? k.setAttribute("class", a[n])
              : "classid" != n.toLowerCase() && k.setAttribute(n, a[n]));
        for (f in b)
          b[f] != Object.prototype[f] &&
            "movie" != f.toLowerCase() &&
            ((a = k),
            (l = f),
            (n = b[f]),
            (c = d.createElement("param")),
            c.setAttribute("name", l),
            c.setAttribute("value", n),
            a.appendChild(c));
        h.parentNode.replaceChild(k, h);
        g = k;
      }
    return g;
  }
  function Q(a) {
    var b = p(a);
    b &&
      "OBJECT" == b.nodeName &&
      (e.ie && e.win
        ? ((b.style.display = "none"),
          (function () {
            if (4 == b.readyState) {
              var c = p(a);
              if (c) {
                for (var g in c) "function" == typeof c[g] && (c[g] = null);
                c.parentNode.removeChild(c);
              }
            } else setTimeout(arguments.callee, 10);
          })())
        : b.parentNode.removeChild(b));
  }
  function p(a) {
    var b = null;
    try {
      b = d.getElementById(a);
    } catch (c) {}
    return b;
  }
  function X(a, b, c) {
    a.attachEvent(b, c);
    E[E.length] = [a, b, c];
  }
  function J(a) {
    var b = e.pv;
    a = a.split(".");
    a[0] = parseInt(a[0], 10);
    a[1] = parseInt(a[1], 10) || 0;
    a[2] = parseInt(a[2], 10) || 0;
    return b[0] > a[0] ||
      (b[0] == a[0] && b[1] > a[1]) ||
      (b[0] == a[0] && b[1] == a[1] && b[2] >= a[2])
      ? !0
      : !1;
  }
  function T(a, b, c, g) {
    if (!e.ie || !e.mac) {
      var h = d.getElementsByTagName("head")[0];
      h &&
        ((c = c && "string" == typeof c ? c : "screen"),
        g && (P = v = null),
        (v && P == c) ||
          ((g = d.createElement("style")),
          g.setAttribute("type", "text/css"),
          g.setAttribute("media", c),
          (v = h.appendChild(g)),
          e.ie &&
            e.win &&
            typeof d.styleSheets != m &&
            0 < d.styleSheets.length &&
            (v = d.styleSheets[d.styleSheets.length - 1]),
          (P = c)),
        e.ie && e.win
          ? v && typeof v.addRule == w && v.addRule(a, b)
          : v &&
            typeof d.createTextNode != m &&
            v.appendChild(d.createTextNode(a + " {" + b + "}")));
    }
  }
  function B(a, b) {
    if (U) {
      var c = b ? "visible" : "hidden";
      A && p(a) ? (p(a).style.visibility = c) : T("#" + a, "visibility:" + c);
    }
  }
  function V(a) {
    return null != /[\\\"<>\.;]/.exec(a) && typeof encodeURIComponent != m
      ? encodeURIComponent(a)
      : a;
  }
  var m = "undefined",
    w = "object",
    I = "application/x-shockwave-flash",
    S = "SWFObjectExprInst",
    t = window,
    d = document,
    y = navigator,
    W = !1,
    H = [
      function () {
        W ? f() : s();
      },
    ],
    x = [],
    M = [],
    E = [],
    G,
    L,
    O,
    R,
    A = !1,
    K = !1,
    v,
    P,
    U = !0,
    e = (function () {
      var a =
          typeof d.getElementById != m &&
          typeof d.getElementsByTagName != m &&
          typeof d.createElement != m,
        b = y.userAgent.toLowerCase(),
        c = y.platform.toLowerCase(),
        g = c ? /win/.test(c) : /win/.test(b),
        c = c ? /mac/.test(c) : /mac/.test(b),
        b = /webkit/.test(b)
          ? parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1"))
          : !1,
        h = !+"\v1",
        e = [0, 0, 0],
        f = null;
      if (typeof y.plugins != m && typeof y.plugins["Shockwave Flash"] == w)
        !(f = y.plugins["Shockwave Flash"].description) ||
          (typeof y.mimeTypes != m &&
            y.mimeTypes[I] &&
            !y.mimeTypes[I].enabledPlugin) ||
          ((W = !0),
          (h = !1),
          (f = f.replace(/^.*\s+(\S+\s+\S+$)/, "$1")),
          (e[0] = parseInt(f.replace(/^(.*)\..*$/, "$1"), 10)),
          (e[1] = parseInt(f.replace(/^.*\.(.*)\s.*$/, "$1"), 10)),
          (e[2] = /[a-zA-Z]/.test(f)
            ? parseInt(f.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10)
            : 0));
      else if (typeof t.ActiveXObject != m)
        try {
          var k = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
          k &&
            (f = k.GetVariable("$version")) &&
            ((h = !0),
            (f = f.split(" ")[1].split(",")),
            (e = [parseInt(f[0], 10), parseInt(f[1], 10), parseInt(f[2], 10)]));
        } catch (n) {}
      return { w3: a, pv: e, wk: b, ie: h, win: g, mac: c };
    })();
  (function () {
    e.w3 &&
      (((typeof d.readyState != m && "complete" == d.readyState) ||
        (typeof d.readyState == m &&
          (d.getElementsByTagName("body")[0] || d.body))) &&
        u(),
      A ||
        (typeof d.addEventListener != m &&
          d.addEventListener("DOMContentLoaded", u, !1),
        e.ie &&
          e.win &&
          (d.attachEvent("onreadystatechange", function () {
            "complete" == d.readyState &&
              (d.detachEvent("onreadystatechange", arguments.callee), u());
          }),
          t == top &&
            (function () {
              if (!A) {
                try {
                  d.documentElement.doScroll("left");
                } catch (a) {
                  setTimeout(arguments.callee, 0);
                  return;
                }
                u();
              }
            })()),
        e.wk &&
          (function () {
            A ||
              (/loaded|complete/.test(d.readyState)
                ? u()
                : setTimeout(arguments.callee, 0));
          })(),
        q(u)));
  })();
  (function () {
    e.ie &&
      e.win &&
      window.attachEvent("onunload", function () {
        for (var a = E.length, b = 0; b < a; b++)
          E[b][0].detachEvent(E[b][1], E[b][2]);
        a = M.length;
        for (b = 0; b < a; b++) Q(M[b]);
        for (var c in e) e[c] = null;
        e = null;
        for (var g in swfobject) swfobject[g] = null;
        swfobject = null;
      });
  })();
  return {
    registerObject: function (a, b, c, g) {
      if (e.w3 && a && b) {
        var d = {};
        d.id = a;
        d.swfVersion = b;
        d.expressInstall = c;
        d.callbackFn = g;
        x[x.length] = d;
        B(a, !1);
      } else g && g({ success: !1, id: a });
    },
    getObjectById: function (a) {
      if (e.w3) return r(a);
    },
    embedSWF: function (a, b, c, d, f, q, l, s, n, r) {
      var t = { success: !1, id: b };
      e.w3 && !(e.wk && 312 > e.wk) && a && b && c && d && f
        ? (B(b, !1),
          z(function () {
            c += "";
            d += "";
            var e = {};
            if (n && typeof n === w) for (var p in n) e[p] = n[p];
            e.data = a;
            e.width = c;
            e.height = d;
            p = {};
            if (s && typeof s === w) for (var u in s) p[u] = s[u];
            if (l && typeof l === w)
              for (var v in l)
                p.flashvars =
                  typeof p.flashvars != m
                    ? p.flashvars + ("&" + v + "=" + l[v])
                    : v + "=" + l[v];
            if (J(f))
              (u = F(e, p, b)),
                e.id == b && B(b, !0),
                (t.success = !0),
                (t.ref = u);
            else {
              if (q && k()) {
                e.data = q;
                C(e, p, b, r);
                return;
              }
              B(b, !0);
            }
            r && r(t);
          }))
        : r && r(t);
    },
    switchOffAutoHideShow: function () {
      U = !1;
    },
    ua: e,
    getFlashPlayerVersion: function () {
      return { major: e.pv[0], minor: e.pv[1], release: e.pv[2] };
    },
    hasFlashPlayerVersion: J,
    createSWF: function (a, b, c) {
      if (e.w3) return F(a, b, c);
    },
    showExpressInstall: function (a, b, c, d) {
      e.w3 && k() && C(a, b, c, d);
    },
    removeSWF: function (a) {
      e.w3 && Q(a);
    },
    createCSS: function (a, b, c, d) {
      e.w3 && T(a, b, c, d);
    },
    addDomLoadEvent: z,
    addLoadEvent: q,
    getQueryParamValue: function (a) {
      var b = d.location.search || d.location.hash;
      if (b) {
        /\?/.test(b) && (b = b.split("?")[1]);
        if (null == a) return V(b);
        for (var b = b.split("&"), c = 0; c < b.length; c++)
          if (b[c].substring(0, b[c].indexOf("=")) == a)
            return V(b[c].substring(b[c].indexOf("=") + 1));
      }
      return "";
    },
    expressInstallCallback: function () {
      if (K) {
        var a = p(S);
        a &&
          G &&
          (a.parentNode.replaceChild(G, a),
          L && (B(L, !0), e.ie && e.win && (G.style.display = "block")),
          O && O(R));
        K = !1;
      }
    },
  };
})();

"use strict";

// API v1
// const url =
//   "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/LOwAyldXGa2Rle8qWWi7/scores";

// // Submit data to the Api
//  const postScore = async () => {
//   const data = {
//     user: localStorage.getItem("username"),
//     score: +localStorage.getItem("teamScore"),
//   };

//   const response = await fetch(url, {
//     method: "POST",
//     cache: "no-cache",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   return response.json();
// };

// API v2
const url =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ukWVVGMHLFxiIbJDv3Hm/scores";

// Function to fetch scores from the API
const fetchScores = async () => {
  const response = await fetch(url);
  return response.json();
};

// Function to count occurrences of a username in the scores
const countUsernameOccurrences = (username, scores) => {
  return scores.filter((entry) => entry.user === username).length;
};

// Submit data to the API only if the username occurs less than 3 times
const postScore = async () => {
  const username = localStorage.getItem("username");
  const score = +localStorage.getItem("teamScore");

  // Fetch existing scores
  const scoresData = await fetchScores();
  const scores = scoresData.result;

  // Count occurrences of the username
  const occurrences = countUsernameOccurrences(username, scores);

  // If the username occurs less than 3 times, post the new score
  if (occurrences < 3) {
    const data = {
      user: username,
      score: score,
    };

    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  } else {
    alert("You have reached the maximum number of submissions for ");
    return null;
  }
};

(function (Ie) {
  function v(a, b) {
    function c() {}
    c.prototype = a;
    var f = new c(),
      k;
    for (k in b) f[k] = b[k];
    b.toString !== Object.prototype.toString && (f.toString = b.toString);
    return f;
  }

  function Je(a) {
    return a instanceof Array
      ? function () {
          return B.iter(a);
        }
      : "function" == typeof a.iterator
      ? D(a, a.iterator)
      : a.iterator;
  }

  function D(a, b) {
    if (null == b) return null;
    null == b.__id__ && (b.__id__ = Ue++);
    var c;
    null == a.hx__closures__
      ? (a.hx__closures__ = {})
      : (c = a.hx__closures__[b.__id__]);
    null == c &&
      ((c = function () {
        return c.method.apply(c.scope, arguments);
      }),
      (c.scope = a),
      (c.method = b),
      (a.hx__closures__[b.__id__] = c));
    return c;
  }
  var l = {},
    n = function () {
      return K.__string_rec(this, "");
    },
    Qa = function (a, b) {
      b = b.split("u").join("");
      this.r = RegExp(a, b);
    };
  l.EReg = Qa;
  Qa.__name__ = ["EReg"];
  Qa.prototype = {
    match: function (a) {
      this.r.global && (this.r.lastIndex = 0);
      this.r.m = this.r.exec(a);
      this.r.s = a;
      return null != this.r.m;
    },
    matched: function (a) {
      if (null != this.r.m && 0 <= a && a < this.r.m.length) return this.r.m[a];
      throw new u("EReg::matched");
    },
    matchedPos: function () {
      if (null == this.r.m) throw new u("No string matched");
      return {
        pos: this.r.m.index,
        len: this.r.m[0].length,
      };
    },
    __class__: Qa,
  };
  var B = function () {};
  l.HxOverrides = B;
  B.__name__ = ["HxOverrides"];
  B.strDate = function (a) {
    switch (a.length) {
      case 8:
        a = a.split(":");
        var b = new Date();
        b.setTime(0);
        b.setUTCHours(a[0]);
        b.setUTCMinutes(a[1]);
        b.setUTCSeconds(a[2]);
        return b;
      case 10:
        return (a = a.split("-")), new Date(a[0], a[1] - 1, a[2], 0, 0, 0);
      case 19:
        return (
          (b = a.split(" ")),
          (a = b[0].split("-")),
          (b = b[1].split(":")),
          new Date(a[0], a[1] - 1, a[2], b[0], b[1], b[2])
        );
      default:
        throw new u("Invalid date format : " + a);
    }
  };
  B.cca = function (a, b) {
    var c = a.charCodeAt(b);
    return c != c ? void 0 : c;
  };
  B.substr = function (a, b, c) {
    if (null != b && 0 != b && null != c && 0 > c) return "";
    null == c && (c = a.length);
    0 > b
      ? ((b = a.length + b), 0 > b && (b = 0))
      : 0 > c && (c = a.length + c - b);
    return a.substr(b, c);
  };
  B.remove = function (a, b) {
    var c = a.indexOf(b);
    if (-1 == c) return !1;
    a.splice(c, 1);
    return !0;
  };
  B.iter = function (a) {
    return {
      cur: 0,
      arr: a,
      hasNext: function () {
        return this.cur < this.arr.length;
      },
      next: function () {
        return this.arr[this.cur++];
      },
    };
  };
  var Ob = function () {};
  l.Lambda = Ob;
  Ob.__name__ = ["Lambda"];
  Ob.array = function (a) {
    var b = [];
    for (a = Je(a)(); a.hasNext(); ) {
      var c = a.next();
      b.push(c);
    }
    return b;
  };
  Ob.count = function (a, b) {
    var c = 0;
    if (null == b) for (var f = Je(a)(); f.hasNext(); ) f.next(), c++;
    else
      for (f = Je(a)(); f.hasNext(); ) {
        var k = f.next();
        b(k) && c++;
      }
    return c;
  };
  var Pb = function () {
    this.length = 0;
  };
  l.List = Pb;
  Pb.__name__ = ["List"];
  Pb.prototype = {
    add: function (a) {
      a = [a];
      null == this.h ? (this.h = a) : (this.q[1] = a);
      this.q = a;
      this.length++;
    },
    iterator: function () {
      return new wd(this.h);
    },
    __class__: Pb,
  };
  var wd = function (a) {
    this.head = a;
    this.val = null;
  };
  l["_List.ListIterator"] = wd;
  wd.__name__ = ["_List", "ListIterator"];
  wd.prototype = {
    hasNext: function () {
      return null != this.head;
    },
    next: function () {
      this.val = this.head[0];
      this.head = this.head[1];
      return this.val;
    },
    __class__: wd,
  };
  Math.__name__ = ["Math"];
  var T = function () {};
  l.Reflect = T;
  T.__name__ = ["Reflect"];
  T.field = function (a, b) {
    try {
      return a[b];
    } catch (c) {
      return c instanceof u && (c = c.val), null;
    }
  };
  T.callMethod = function (a, b, c) {
    return b.apply(a, c);
  };
  T.fields = function (a) {
    var b = [];
    if (null != a) {
      var c = Object.prototype.hasOwnProperty,
        f;
      for (f in a)
        "__id__" != f && "hx__closures__" != f && c.call(a, f) && b.push(f);
    }
    return b;
  };
  T.isFunction = function (a) {
    return "function" == typeof a && !(a.__name__ || a.__ename__);
  };
  T.compare = function (a, b) {
    return a == b ? 0 : a > b ? 1 : -1;
  };
  T.deleteField = function (a, b) {
    if (!Object.prototype.hasOwnProperty.call(a, b)) return !1;
    delete a[b];
    return !0;
  };
  var r = function () {};
  l.Std = r;
  r.__name__ = ["Std"];
  r.is = function (a, b) {
    return K.__instanceof(a, b);
  };
  r.instance = function (a, b) {
    return a instanceof b ? a : null;
  };
  r.string = function (a) {
    return K.__string_rec(a, "");
  };
  r["int"] = function (a) {
    return a | 0;
  };
  r.parseInt = function (a) {
    var b = parseInt(a, 10);
    0 != b || (120 != B.cca(a, 1) && 88 != B.cca(a, 1)) || (b = parseInt(a));
    return isNaN(b) ? null : b;
  };
  r.parseFloat = function (a) {
    return parseFloat(a);
  };
  var Ea = function () {
    this.b = "";
  };
  l.StringBuf = Ea;
  Ea.__name__ = ["StringBuf"];
  Ea.prototype = {
    add: function (a) {
      this.b += r.string(a);
    },
    addSub: function (a, b, c) {
      this.b =
        null == c ? this.b + B.substr(a, b, null) : this.b + B.substr(a, b, c);
    },
    __class__: Ea,
  };
  var $ = function () {};
  l.StringTools = $;
  $.__name__ = ["StringTools"];
  $.startsWith = function (a, b) {
    return a.length >= b.length && B.substr(a, 0, b.length) == b;
  };
  $.isSpace = function (a, b) {
    var c = B.cca(a, b);
    return (8 < c && 14 > c) || 32 == c;
  };
  $.ltrim = function (a) {
    for (var b = a.length, c = 0; c < b && $.isSpace(a, c); ) c++;
    return 0 < c ? B.substr(a, c, b - c) : a;
  };
  $.rtrim = function (a) {
    for (var b = a.length, c = 0; c < b && $.isSpace(a, b - c - 1); ) c++;
    return 0 < c ? B.substr(a, 0, b - c) : a;
  };
  $.trim = function (a) {
    return $.ltrim($.rtrim(a));
  };
  $.fastCodeAt = function (a, b) {
    return a.charCodeAt(b);
  };
  var F = (l.ValueType = {
    __ename__: ["ValueType"],
    __constructs__:
      "TNull TInt TFloat TBool TObject TFunction TClass TEnum TUnknown".split(
        " "
      ),
  });
  F.TNull = ["TNull", 0];
  F.TNull.toString = n;
  F.TNull.__enum__ = F;
  F.TInt = ["TInt", 1];
  F.TInt.toString = n;
  F.TInt.__enum__ = F;
  F.TFloat = ["TFloat", 2];
  F.TFloat.toString = n;
  F.TFloat.__enum__ = F;
  F.TBool = ["TBool", 3];
  F.TBool.toString = n;
  F.TBool.__enum__ = F;
  F.TObject = ["TObject", 4];
  F.TObject.toString = n;
  F.TObject.__enum__ = F;
  F.TFunction = ["TFunction", 5];
  F.TFunction.toString = n;
  F.TFunction.__enum__ = F;
  F.TClass = function (a) {
    a = ["TClass", 6, a];
    a.__enum__ = F;
    a.toString = n;
    return a;
  };
  F.TEnum = function (a) {
    a = ["TEnum", 7, a];
    a.__enum__ = F;
    a.toString = n;
    return a;
  };
  F.TUnknown = ["TUnknown", 8];
  F.TUnknown.toString = n;
  F.TUnknown.__enum__ = F;
  var aa = function () {};
  l.Type = aa;
  aa.__name__ = ["Type"];
  aa.getClassName = function (a) {
    a = a.__name__;
    return null == a ? null : a.join(".");
  };
  aa.getEnumName = function (a) {
    return a.__ename__.join(".");
  };
  aa.resolveClass = function (a) {
    a = l[a];
    return null != a && a.__name__ ? a : null;
  };
  aa.resolveEnum = function (a) {
    a = l[a];
    return null != a && a.__ename__ ? a : null;
  };
  aa.createEmptyInstance = function (a) {
    function b() {}
    b.prototype = a.prototype;
    return new b();
  };
  aa.createEnum = function (a, b, c) {
    var f = T.field(a, b);
    if (null == f) throw new u("No such constructor " + b);
    if (T.isFunction(f)) {
      if (null == c) throw new u("Constructor " + b + " need parameters");
      return T.callMethod(a, f, c);
    }
    if (null != c && 0 != c.length)
      throw new u("Constructor " + b + " does not need parameters");
    return f;
  };
  aa.getEnumConstructs = function (a) {
    return a.__constructs__.slice();
  };
  aa["typeof"] = function (a) {
    switch (typeof a) {
      case "boolean":
        return F.TBool;
      case "string":
        return F.TClass(String);
      case "number":
        return Math.ceil(a) == a % 2147483648 ? F.TInt : F.TFloat;
      case "object":
        if (null == a) return F.TNull;
        var b = a.__enum__;
        if (null != b) return F.TEnum(b);
        a = K.getClass(a);
        return null != a ? F.TClass(a) : F.TObject;
      case "function":
        return a.__name__ || a.__ename__ ? F.TObject : F.TFunction;
      case "undefined":
        return F.TNull;
      default:
        return F.TUnknown;
    }
  };
  var t = function (a) {
    this.nodeType = a;
    this.children = [];
    this.attributeMap = new X();
  };
  l.Xml = t;
  t.__name__ = ["Xml"];
  t.parse = function (a) {
    return Ra.parse(a);
  };
  t.createElement = function (a) {
    var b = new t(t.Element);
    if (b.nodeType != t.Element)
      throw new u("Bad node type, expected Element but found " + b.nodeType);
    b.nodeName = a;
    return b;
  };
  t.createPCData = function (a) {
    var b = new t(t.PCData);
    if (b.nodeType == t.Document || b.nodeType == t.Element)
      throw new u("Bad node type, unexpected " + b.nodeType);
    b.nodeValue = a;
    return b;
  };
  t.createCData = function (a) {
    var b = new t(t.CData);
    if (b.nodeType == t.Document || b.nodeType == t.Element)
      throw new u("Bad node type, unexpected " + b.nodeType);
    b.nodeValue = a;
    return b;
  };
  t.createComment = function (a) {
    var b = new t(t.Comment);
    if (b.nodeType == t.Document || b.nodeType == t.Element)
      throw new u("Bad node type, unexpected " + b.nodeType);
    b.nodeValue = a;
    return b;
  };
  t.createDocType = function (a) {
    var b = new t(t.DocType);
    if (b.nodeType == t.Document || b.nodeType == t.Element)
      throw new u("Bad node type, unexpected " + b.nodeType);
    b.nodeValue = a;
    return b;
  };
  t.createProcessingInstruction = function (a) {
    var b = new t(t.ProcessingInstruction);
    if (b.nodeType == t.Document || b.nodeType == t.Element)
      throw new u("Bad node type, unexpected " + b.nodeType);
    b.nodeValue = a;
    return b;
  };
  t.createDocument = function () {
    return new t(t.Document);
  };
  t.prototype = {
    get_nodeName: function () {
      if (this.nodeType != t.Element)
        throw new u(
          "Bad node type, expected Element but found " + this.nodeType
        );
      return this.nodeName;
    },
    get: function (a) {
      if (this.nodeType != t.Element)
        throw new u(
          "Bad node type, expected Element but found " + this.nodeType
        );
      return this.attributeMap.get(a);
    },
    set: function (a, b) {
      if (this.nodeType != t.Element)
        throw new u(
          "Bad node type, expected Element but found " + this.nodeType
        );
      this.attributeMap.set(a, b);
    },
    exists: function (a) {
      if (this.nodeType != t.Element)
        throw new u(
          "Bad node type, expected Element but found " + this.nodeType
        );
      return this.attributeMap.exists(a);
    },
    iterator: function () {
      if (this.nodeType != t.Document && this.nodeType != t.Element)
        throw new u(
          "Bad node type, expected Element or Document but found " +
            this.nodeType
        );
      return B.iter(this.children);
    },
    elementsNamed: function (a) {
      if (this.nodeType != t.Document && this.nodeType != t.Element)
        throw new u(
          "Bad node type, expected Element or Document but found " +
            this.nodeType
        );
      for (var b = [], c = 0, f = this.children; c < f.length; ) {
        var k = f[c];
        ++c;
        var p;
        if ((p = k.nodeType == t.Element)) {
          p = void 0;
          if (k.nodeType != t.Element)
            throw new u(
              "Bad node type, expected Element but found " + k.nodeType
            );
          p = k.nodeName;
          p = p == a;
        }
        p && b.push(k);
      }
      return B.iter(b);
    },
    firstElement: function () {
      if (this.nodeType != t.Document && this.nodeType != t.Element)
        throw new u(
          "Bad node type, expected Element or Document but found " +
            this.nodeType
        );
      for (var a = 0, b = this.children; a < b.length; ) {
        var c = b[a];
        ++a;
        if (c.nodeType == t.Element) return c;
      }
      return null;
    },
    addChild: function (a) {
      if (this.nodeType != t.Document && this.nodeType != t.Element)
        throw new u(
          "Bad node type, expected Element or Document but found " +
            this.nodeType
        );
      null != a.parent && a.parent.removeChild(a);
      this.children.push(a);
      a.parent = this;
    },
    removeChild: function (a) {
      if (this.nodeType != t.Document && this.nodeType != t.Element)
        throw new u(
          "Bad node type, expected Element or Document but found " +
            this.nodeType
        );
      return B.remove(this.children, a) ? ((a.parent = null), !0) : !1;
    },
    __class__: t,
  };
  var P = function () {};
  l["aop.Anims"] = P;
  P.__name__ = ["aop", "Anims"];
  P.fadeIn = function (a, b, c) {
    a.$zF[1].alpha.set__(0);
    var f = new G();
    f.run(
      new H([
        new z(b),
        new x(function () {
          a.$zF[1].alpha.animateTo(1, c);
        }),
      ])
    );
    a.add(f);
  };
  P.animate = function (a, b, c, f, k, p, d) {
    null == d && (d = !0);
    a.$zF[1].set_pixelSnapping(!1);
    var g = a.$zF[1].x;
    g.set__(g.$bG + c);
    g = a.$zF[1].y;
    g.set__(g.$bG + f);
    g = a.$zF[1].rotation;
    g.set__(g.$bG + k);
    d && a.$zF[1].alpha.set__(0);
    g = new G();
    g.run(
      new H([
        new z(b),
        new x(function () {
          d && a.$zF[1].alpha.animateTo(1, p);
          a.$zF[1].x.animateBy(-c, p);
          a.$zF[1].y.animateBy(-f, p);
          a.$zF[1].rotation.animateBy(-k, p);
          a.$zF[1].set_pixelSnapping(!0);
        }),
      ])
    );
    a.add(g);
  };
  P.spawn = function (a, b, c, f, k, p) {
    null == p && (p = !0);
    null == k && (k = !0);
    a.$zF[1].set_pixelSnapping(!1);
    a.$zF[1].setScale(c);
    k && a.$zF[1].alpha.set__(0);
    c = new G();
    c.run(
      new H([
        new z(b),
        new x(function () {
          k && a.$zF[1].alpha.animateTo(1, 0.75 * f);
          p
            ? (a.$zF[1].scaleX.animateTo(1, f, C.bounceOut),
              a.$zF[1].scaleY.animateTo(1, f, C.bounceOut))
            : (a.$zF[1].scaleX.animateTo(1, f),
              a.$zF[1].scaleY.animateTo(1, f));
          a.$zF[1].set_pixelSnapping(!0);
        }),
      ])
    );
    a.add(c);
  };
  var U = function () {};
  l["aop.GameStorage"] = U;
  U.__name__ = ["aop", "GameStorage"];
  U.init = function () {
    m.$vG
      .getCloudStorage()
      .get(U.gameName + "playCount", 0)
      .then(function (count) {
        d.playCount = count;
      });
    m.$vG
      .getCloudStorage()
      .get(U.gameName + "score1", 0)
      .then(function (a) {
        d.score1 = a;
      });
    m.$vG
      .getCloudStorage()
      .get(U.gameName + "time1", 0)
      .then(function (a) {
        d.time1 = a;
      });
    m.$vG
      .getCloudStorage()
      .get(U.gameName + "targets1", 0)
      .then(function (a) {
        d.targets1 = a;
      });
    m.$vG
      .getCloudStorage()
      .get(U.gameName + "trophy1", 0)
      .then(function (a) {
        d.trophy1 = a;
      });
    m.$vG
      .getCloudStorage()
      .get(U.gameName + "score2", 0)
      .then(function (a) {
        d.score2 = a;
      });
    m.$vG
      .getCloudStorage()
      .get(U.gameName + "time2", 0)
      .then(function (a) {
        d.time2 = a;
      });
    m.$vG
      .getCloudStorage()
      .get(U.gameName + "targets2", 0)
      .then(function (a) {
        d.targets2 = a;
      });
    m.$vG
      .getCloudStorage()
      .get(U.gameName + "trophy2", 0)
      .then(function (a) {
        d.trophy2 = a;
      });
  };

  U.save = function () {
    U.saveInt("score1", d.score1);
    U.saveInt("time1", d.time1);
    U.saveInt("targets1", d.targets1);
    U.saveInt("trophy1", d.trophy1);

    // Save score1 into localStorage as an integer with var name teamScore
    localStorage.setItem("teamScore", d.score1);

    // mission 2
    U.saveInt("score2", d.score2);
    U.saveInt("time2", d.time2);
    U.saveInt("targets2", d.targets2);
    U.saveInt("trophy2", d.trophy2);

    //play count
    U.saveInt("playCount", d.playCount);
  };

  U.saveInt = function (a, b) {
    m.$vG.getCloudStorage().set(U.gameName + a, b);
  };

  var xd = function () {};
  l["haxe.IMap"] = xd;
  xd.__name__ = ["haxe", "IMap"];
  var yd = function (a, b) {
    this.high = a;
    this.low = b;
  };
  l["haxe._Int64.___Int64"] = yd;
  yd.__name__ = ["haxe", "_Int64", "___Int64"];
  yd.prototype = {
    __class__: yd,
  };
  var La = function () {
    this.buf = new Ea();
    this.cache = [];
    this.useCache = La.USE_CACHE;
    this.useEnumIndex = La.USE_ENUM_INDEX;
    this.shash = new X();
    this.scount = 0;
  };
  l["haxe.Serializer"] = La;
  La.__name__ = ["haxe", "Serializer"];
  La.prototype = {
    toString: function () {
      return this.buf.b;
    },
    serializeString: function (a) {
      var b = this.shash.get(a);
      null != b
        ? ((this.buf.b += "R"),
          (this.buf.b =
            null == b ? this.buf.b + "null" : this.buf.b + ("" + b)))
        : (this.shash.set(a, this.scount++),
          (this.buf.b += "y"),
          (a = encodeURIComponent(a)),
          (this.buf.b =
            null == a.length
              ? this.buf.b + "null"
              : this.buf.b + ("" + a.length)),
          (this.buf.b += ":"),
          (this.buf.b =
            null == a ? this.buf.b + "null" : this.buf.b + ("" + a)));
    },
    serializeRef: function (a) {
      for (var b = typeof a, c = 0, f = this.cache.length; c < f; ) {
        var k = c++,
          p = this.cache[k];
        if (typeof p == b && p == a)
          return (
            (this.buf.b += "r"),
            (this.buf.b =
              null == k ? this.buf.b + "null" : this.buf.b + ("" + k)),
            !0
          );
      }
      this.cache.push(a);
      return !1;
    },
    serializeFields: function (a) {
      for (var b = 0, c = T.fields(a); b < c.length; ) {
        var f = c[b];
        ++b;
        this.serializeString(f);
        this.serialize(T.field(a, f));
      }
      this.buf.b += "g";
    },
    serialize: function (a) {
      var b = aa["typeof"](a);
      switch (b[1]) {
        case 0:
          this.buf.b += "n";
          break;
        case 1:
          if (0 == a) {
            this.buf.b += "z";
            break;
          }
          this.buf.b += "i";
          this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a);
          break;
        case 2:
          isNaN(a)
            ? (this.buf.b += "k")
            : isFinite(a)
            ? ((this.buf.b += "d"),
              (this.buf.b =
                null == a ? this.buf.b + "null" : this.buf.b + ("" + a)))
            : (this.buf.b = 0 > a ? this.buf.b + "m" : this.buf.b + "p");
          break;
        case 3:
          this.buf.b = a ? this.buf.b + "t" : this.buf.b + "f";
          break;
        case 6:
          b = b[2];
          if (b == String) {
            this.serializeString(a);
            break;
          }
          if (this.useCache && this.serializeRef(a)) break;
          switch (b) {
            case Array:
              b = 0;
              this.buf.b += "a";
              for (var c = a.length, f = 0; f < c; ) {
                var k = f++;
                null == a[k]
                  ? b++
                  : (0 < b &&
                      (1 == b
                        ? (this.buf.b += "n")
                        : ((this.buf.b += "u"),
                          (this.buf.b =
                            null == b
                              ? this.buf.b + "null"
                              : this.buf.b + ("" + b))),
                      (b = 0)),
                    this.serialize(a[k]));
              }
              0 < b &&
                (1 == b
                  ? (this.buf.b += "n")
                  : ((this.buf.b += "u"),
                    (this.buf.b =
                      null == b
                        ? this.buf.b + "null"
                        : this.buf.b + ("" + b))));
              this.buf.b += "h";
              break;
            case Pb:
              this.buf.b += "l";
              a = a.h;
              for (b = null; null != a; )
                (b = a[0]), (a = a[1]), this.serialize(b);
              this.buf.b += "h";
              break;
            case Date:
              this.buf.b += "v";
              this.buf.add(a.getTime());
              break;
            case X:
              this.buf.b += "b";
              for (b = a.keys(); b.hasNext(); )
                (c = b.next()),
                  this.serializeString(c),
                  this.serialize(null != Sa[c] ? a.getReserved(c) : a.h[c]);
              this.buf.b += "h";
              break;
            case va:
              this.buf.b += "q";
              for (b = a.keys(); b.hasNext(); )
                (c = b.next()),
                  (this.buf.b += ":"),
                  (this.buf.b =
                    null == c ? this.buf.b + "null" : this.buf.b + ("" + c)),
                  this.serialize(a.h[c]);
              this.buf.b += "h";
              break;
            case Ma:
              this.buf.b += "M";
              for (b = a.keys(); b.hasNext(); )
                (c = b.next()),
                  (f = T.field(c, "__id__")),
                  T.deleteField(c, "__id__"),
                  this.serialize(c),
                  (c.__id__ = f),
                  this.serialize(a.h[c.__id__]);
              this.buf.b += "h";
              break;
            case cb:
              f = 0;
              k = a.length - 2;
              b = new Ea();
              for (c = La.BASE64; f < k; ) {
                var p = a.get(f++),
                  d = a.get(f++),
                  g = a.get(f++);
                b.add(c.charAt(p >> 2));
                b.add(c.charAt(((p << 4) | (d >> 4)) & 63));
                b.add(c.charAt(((d << 2) | (g >> 6)) & 63));
                b.add(c.charAt(g & 63));
              }
              f == k
                ? ((k = a.get(f++)),
                  (a = a.get(f++)),
                  b.add(c.charAt(k >> 2)),
                  b.add(c.charAt(((k << 4) | (a >> 4)) & 63)),
                  b.add(c.charAt((a << 2) & 63)))
                : f == k + 1 &&
                  ((a = a.get(f++)),
                  b.add(c.charAt(a >> 2)),
                  b.add(c.charAt((a << 4) & 63)));
              a = b.b;
              this.buf.b += "s";
              this.buf.b =
                null == a.length
                  ? this.buf.b + "null"
                  : this.buf.b + ("" + a.length);
              this.buf.b += ":";
              this.buf.b =
                null == a ? this.buf.b + "null" : this.buf.b + ("" + a);
              break;
            default:
              this.useCache && this.cache.pop(),
                null != a.hxSerialize
                  ? ((this.buf.b += "C"),
                    this.serializeString(aa.getClassName(b)),
                    this.useCache && this.cache.push(a),
                    a.hxSerialize(this),
                    (this.buf.b += "g"))
                  : ((this.buf.b += "c"),
                    this.serializeString(aa.getClassName(b)),
                    this.useCache && this.cache.push(a),
                    this.serializeFields(a));
          }
          break;
        case 4:
          if (K.__instanceof(a, Ne))
            (a = aa.getClassName(a)),
              (this.buf.b += "A"),
              this.serializeString(a);
          else if (K.__instanceof(a, Oe))
            (this.buf.b += "B"), this.serializeString(aa.getEnumName(a));
          else {
            if (this.useCache && this.serializeRef(a)) break;
            this.buf.b += "o";
            this.serializeFields(a);
          }
          break;
        case 7:
          b = b[2];
          if (this.useCache) {
            if (this.serializeRef(a)) break;
            this.cache.pop();
          }
          this.buf.b = this.useEnumIndex ? this.buf.b + "j" : this.buf.b + "w";
          this.serializeString(aa.getEnumName(b));
          this.useEnumIndex
            ? ((this.buf.b += ":"), (this.buf.b += r.string(a[1])))
            : this.serializeString(a[0]);
          this.buf.b += ":";
          b = a.length;
          this.buf.b += r.string(b - 2);
          for (c = 2; c < b; ) (f = c++), this.serialize(a[f]);
          this.useCache && this.cache.push(a);
          break;
        case 5:
          throw new u("Cannot serialize function");
        default:
          throw new u("Cannot serialize " + r.string(a));
      }
    },
    __class__: La,
  };
  var na = function (a) {
    this.buf = a;
    this.length = a.length;
    this.pos = 0;
    this.scache = [];
    this.cache = [];
    a = na.DEFAULT_RESOLVER;
    null == a && ((a = aa), (na.DEFAULT_RESOLVER = a));
    this.setResolver(a);
  };
  l["haxe.Unserializer"] = na;
  na.__name__ = ["haxe", "Unserializer"];
  na.initCodes = function () {
    for (var a = [], b = 0, c = na.BASE64.length; b < c; ) {
      var f = b++;
      a[na.BASE64.charCodeAt(f)] = f;
    }
    return a;
  };
  na.run = function (a) {
    return new na(a).unserialize();
  };
  na.prototype = {
    setResolver: function (a) {
      this.resolver =
        null == a
          ? {
              resolveClass: function (a) {
                return null;
              },
              resolveEnum: function (a) {
                return null;
              },
            }
          : a;
    },
    get: function (a) {
      return this.buf.charCodeAt(a);
    },
    readDigits: function () {
      for (var a = 0, b = !1, c = this.pos; ; ) {
        var f = this.buf.charCodeAt(this.pos);
        if (f != f) break;
        if (45 == f) {
          if (this.pos != c) break;
          b = !0;
        } else {
          if (48 > f || 57 < f) break;
          a = 10 * a + (f - 48);
        }
        this.pos++;
      }
      b && (a *= -1);
      return a;
    },
    readFloat: function () {
      for (var a = this.pos; ; ) {
        var b = this.buf.charCodeAt(this.pos);
        if ((43 <= b && 58 > b) || 101 == b || 69 == b) this.pos++;
        else break;
      }
      return r.parseFloat(B.substr(this.buf, a, this.pos - a));
    },
    unserializeObject: function (a) {
      for (;;) {
        if (this.pos >= this.length) throw new u("Invalid object");
        if (103 == this.buf.charCodeAt(this.pos)) break;
        var b = this.unserialize();
        if ("string" != typeof b) throw new u("Invalid object key");
        var c = this.unserialize();
        a[b] = c;
      }
      this.pos++;
    },
    unserializeEnum: function (a, b) {
      if (58 != this.get(this.pos++)) throw new u("Invalid enum format");
      var c = this.readDigits();
      if (0 == c) return aa.createEnum(a, b);
      for (var f = []; 0 < c--; ) f.push(this.unserialize());
      return aa.createEnum(a, b, f);
    },
    unserialize: function () {
      switch (this.get(this.pos++)) {
        case 110:
          return null;
        case 116:
          return !0;
        case 102:
          return !1;
        case 122:
          return 0;
        case 105:
          return this.readDigits();
        case 100:
          return this.readFloat();
        case 121:
          var a = this.readDigits();
          if (58 != this.get(this.pos++) || this.length - this.pos < a)
            throw new u("Invalid string length");
          var b = B.substr(this.buf, this.pos, a);
          this.pos += a;
          b = decodeURIComponent(b.split("+").join(" "));
          this.scache.push(b);
          return b;
        case 107:
          return NaN;
        case 109:
          return -Infinity;
        case 112:
          return Infinity;
        case 97:
          a = [];
          for (this.cache.push(a); ; ) {
            b = this.buf.charCodeAt(this.pos);
            if (104 == b) {
              this.pos++;
              break;
            }
            117 == b
              ? (this.pos++,
                (b = this.readDigits()),
                (a[a.length + b - 1] = null))
              : a.push(this.unserialize());
          }
          return a;
        case 111:
          return (a = {}), this.cache.push(a), this.unserializeObject(a), a;
        case 114:
          a = this.readDigits();
          if (0 > a || a >= this.cache.length) throw new u("Invalid reference");
          return this.cache[a];
        case 82:
          a = this.readDigits();
          if (0 > a || a >= this.scache.length)
            throw new u("Invalid string reference");
          return this.scache[a];
        case 120:
          throw new u(this.unserialize());
        case 99:
          a = this.unserialize();
          b = this.resolver.resolveClass(a);
          if (null == b) throw new u("Class not found " + a);
          a = aa.createEmptyInstance(b);
          this.cache.push(a);
          this.unserializeObject(a);
          return a;
        case 119:
          a = this.unserialize();
          b = this.resolver.resolveEnum(a);
          if (null == b) throw new u("Enum not found " + a);
          a = this.unserializeEnum(b, this.unserialize());
          this.cache.push(a);
          return a;
        case 106:
          a = this.unserialize();
          b = this.resolver.resolveEnum(a);
          if (null == b) throw new u("Enum not found " + a);
          this.pos++;
          var c = this.readDigits(),
            f = aa.getEnumConstructs(b)[c];
          if (null == f) throw new u("Unknown enum index " + a + "@" + c);
          a = this.unserializeEnum(b, f);
          this.cache.push(a);
          return a;
        case 108:
          a = new Pb();
          for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos); )
            a.add(this.unserialize());
          this.pos++;
          return a;
        case 98:
          a = new X();
          for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos); )
            (b = this.unserialize()), a.set(b, this.unserialize());
          this.pos++;
          return a;
        case 113:
          a = new va();
          this.cache.push(a);
          for (b = this.get(this.pos++); 58 == b; )
            (b = this.readDigits()),
              a.set(b, this.unserialize()),
              (b = this.get(this.pos++));
          if (104 != b) throw new u("Invalid IntMap format");
          return a;
        case 77:
          a = new Ma();
          for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos); )
            (b = this.unserialize()), a.set(b, this.unserialize());
          this.pos++;
          return a;
        case 118:
          return (
            48 <= this.buf.charCodeAt(this.pos) &&
            57 >= this.buf.charCodeAt(this.pos) &&
            48 <= this.buf.charCodeAt(this.pos + 1) &&
            57 >= this.buf.charCodeAt(this.pos + 1) &&
            48 <= this.buf.charCodeAt(this.pos + 2) &&
            57 >= this.buf.charCodeAt(this.pos + 2) &&
            48 <= this.buf.charCodeAt(this.pos + 3) &&
            57 >= this.buf.charCodeAt(this.pos + 3) &&
            45 == this.buf.charCodeAt(this.pos + 4)
              ? ((a = B.substr(this.buf, this.pos, 19)),
                (a = B.strDate(a)),
                (this.pos += 19))
              : ((a = this.readFloat()),
                (b = new Date()),
                b.setTime(a),
                (a = b)),
            this.cache.push(a),
            a
          );
        case 115:
          a = this.readDigits();
          f = this.buf;
          if (58 != this.get(this.pos++) || this.length - this.pos < a)
            throw new u("Invalid bytes length");
          var k = na.CODES;
          null == k && ((k = na.initCodes()), (na.CODES = k));
          for (
            var p = this.pos,
              d = a & 3,
              g = p + (a - d),
              b = cb.alloc(3 * (a >> 2) + (2 <= d ? d - 1 : 0)),
              c = 0;
            p < g;

          ) {
            var e = k[$.fastCodeAt(f, p++)],
              h = k[$.fastCodeAt(f, p++)];
            b.set(c++, (e << 2) | (h >> 4));
            e = k[$.fastCodeAt(f, p++)];
            b.set(c++, (h << 4) | (e >> 2));
            h = k[$.fastCodeAt(f, p++)];
            b.set(c++, (e << 6) | h);
          }
          2 <= d &&
            ((h = k[$.fastCodeAt(f, p++)]),
            (g = k[$.fastCodeAt(f, p++)]),
            b.set(c++, (h << 2) | (g >> 4)),
            3 == d &&
              ((f = k[$.fastCodeAt(f, p++)]), b.set(c++, (g << 4) | (f >> 2))));
          this.pos += a;
          this.cache.push(b);
          return b;
        case 67:
          a = this.unserialize();
          b = this.resolver.resolveClass(a);
          if (null == b) throw new u("Class not found " + a);
          a = aa.createEmptyInstance(b);
          this.cache.push(a);
          a.hxUnserialize(this);
          if (103 != this.get(this.pos++)) throw new u("Invalid custom data");
          return a;
        case 65:
          a = this.unserialize();
          b = this.resolver.resolveClass(a);
          if (null == b) throw new u("Class not found " + a);
          return b;
        case 66:
          a = this.unserialize();
          b = this.resolver.resolveEnum(a);
          if (null == b) throw new u("Enum not found " + a);
          return b;
      }
      this.pos--;
      throw new u(
        "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos
      );
    },
    __class__: na,
  };
  var va = function () {
    this.h = {};
  };
  l["haxe.ds.IntMap"] = va;
  va.__name__ = ["haxe", "ds", "IntMap"];
  va.__interfaces__ = [xd];
  va.prototype = {
    set: function (a, b) {
      this.h[a] = b;
    },
    remove: function (a) {
      if (!this.h.hasOwnProperty(a)) return !1;
      delete this.h[a];
      return !0;
    },
    keys: function () {
      var a = [],
        b;
      for (b in this.h) this.h.hasOwnProperty(b) && a.push(b | 0);
      return B.iter(a);
    },
    __class__: va,
  };
  var Ma = function () {
    this.h = {};
    this.h.__keys__ = {};
  };
  l["haxe.ds.ObjectMap"] = Ma;
  Ma.__name__ = ["haxe", "ds", "ObjectMap"];
  Ma.__interfaces__ = [xd];
  Ma.prototype = {
    set: function (a, b) {
      var c = a.__id__ || (a.__id__ = ++Ma.count);
      this.h[c] = b;
      this.h.__keys__[c] = a;
    },
    remove: function (a) {
      a = a.__id__;
      if (null == this.h.__keys__[a]) return !1;
      delete this.h[a];
      delete this.h.__keys__[a];
      return !0;
    },
    keys: function () {
      var a = [],
        b;
      for (b in this.h.__keys__)
        this.h.hasOwnProperty(b) && a.push(this.h.__keys__[b]);
      return B.iter(a);
    },
    iterator: function () {
      return {
        ref: this.h,
        it: this.keys(),
        hasNext: function () {
          return this.it.hasNext();
        },
        next: function () {
          var a = this.it.next();
          return this.ref[a.__id__];
        },
      };
    },
    __class__: Ma,
  };
  var Qb = function (a, b) {
    this.map = a;
    this.keys = b;
    this.index = 0;
    this.count = b.length;
  };
  l["haxe.ds._StringMap.StringMapIterator"] = Qb;
  Qb.__name__ = ["haxe", "ds", "_StringMap", "StringMapIterator"];
  Qb.prototype = {
    hasNext: function () {
      return this.index < this.count;
    },
    next: function () {
      return this.map.get(this.keys[this.index++]);
    },
    __class__: Qb,
  };
  var X = function () {
    this.h = {};
  };
  l["haxe.ds.StringMap"] = X;
  X.__name__ = ["haxe", "ds", "StringMap"];
  X.__interfaces__ = [xd];
  X.prototype = {
    set: function (a, b) {
      null != Sa[a] ? this.setReserved(a, b) : (this.h[a] = b);
    },
    get: function (a) {
      return null != Sa[a] ? this.getReserved(a) : this.h[a];
    },
    exists: function (a) {
      return null != Sa[a] ? this.existsReserved(a) : this.h.hasOwnProperty(a);
    },
    setReserved: function (a, b) {
      null == this.rh && (this.rh = {});
      this.rh["$" + a] = b;
    },
    getReserved: function (a) {
      return null == this.rh ? null : this.rh["$" + a];
    },
    existsReserved: function (a) {
      return null == this.rh ? !1 : this.rh.hasOwnProperty("$" + a);
    },
    keys: function () {
      var a = this.arrayKeys();
      return B.iter(a);
    },
    arrayKeys: function () {
      var a = [],
        b;
      for (b in this.h) this.h.hasOwnProperty(b) && a.push(b);
      if (null != this.rh)
        for (b in this.rh) 36 == b.charCodeAt(0) && a.push(b.substr(1));
      return a;
    },
    iterator: function () {
      return new Qb(this, this.arrayKeys());
    },
    __class__: X,
  };
  var cb = function (a) {
    this.length = a.byteLength;
    this.b = new Ke(a);
    this.b.bufferValue = a;
    a.hxBytes = this;
    a.bytes = this.b;
  };
  l["haxe.io.Bytes"] = cb;
  cb.__name__ = ["haxe", "io", "Bytes"];
  cb.alloc = function (a) {
    return new cb(new qe(a));
  };
  cb.prototype = {
    get: function (a) {
      return this.b[a];
    },
    set: function (a, b) {
      this.b[a] = b & 255;
    },
    __class__: cb,
  };
  var ra = (l["haxe.io.Error"] = {
    __ename__: ["haxe", "io", "Error"],
    __constructs__: ["Blocked", "Overflow", "OutsideBounds", "Custom"],
  });
  ra.Blocked = ["Blocked", 0];
  ra.Blocked.toString = n;
  ra.Blocked.__enum__ = ra;
  ra.Overflow = ["Overflow", 1];
  ra.Overflow.toString = n;
  ra.Overflow.__enum__ = ra;
  ra.OutsideBounds = ["OutsideBounds", 2];
  ra.OutsideBounds.toString = n;
  ra.OutsideBounds.__enum__ = ra;
  ra.Custom = function (a) {
    a = ["Custom", 3, a];
    a.__enum__ = ra;
    a.toString = n;
    return a;
  };
  var Fa = function () {};
  l["haxe.io.FPHelper"] = Fa;
  Fa.__name__ = ["haxe", "io", "FPHelper"];
  Fa.i32ToFloat = function (a) {
    var b = (a >>> 23) & 255,
      c = a & 8388607;
    return 0 == c && 0 == b
      ? 0
      : (1 - ((a >>> 31) << 1)) *
          (1 + Math.pow(2, -23) * c) *
          Math.pow(2, b - 127);
  };
  Fa.floatToI32 = function (a) {
    if (0 == a) return 0;
    var b;
    b = 0 > a ? -a : a;
    var c = Math.floor(Math.log(b) / 0.6931471805599453);
    -127 > c ? (c = -127) : 128 < c && (c = 128);
    b = Math.round(8388608 * (b / Math.pow(2, c) - 1)) & 8388607;
    return (0 > a ? -2147483648 : 0) | ((c + 127) << 23) | b;
  };
  Fa.i64ToDouble = function (a, b) {
    var c = ((b >> 20) & 2047) - 1023,
      f =
        4294967296 * (b & 1048575) + 2147483648 * (a >>> 31) + (a & 2147483647);
    return 0 == f && -1023 == c
      ? 0
      : (1 - ((b >>> 31) << 1)) * (1 + Math.pow(2, -52) * f) * Math.pow(2, c);
  };
  Fa.doubleToI64 = function (a) {
    var b = Fa.i64tmp;
    if (0 == a) (b.low = 0), (b.high = 0);
    else {
      var c;
      c = 0 > a ? -a : a;
      var f = Math.floor(Math.log(c) / 0.6931471805599453);
      c = 4503599627370496 * (c / Math.pow(2, f) - 1);
      c = Math.round(c);
      b.low = c | 0;
      b.high =
        (0 > a ? -2147483648 : 0) | ((f + 1023) << 20) | (c / 4294967296) | 0;
    }
    return b;
  };
  var Rb = function () {};
  l["haxe.rtti.Meta"] = Rb;
  Rb.__name__ = ["haxe", "rtti", "Meta"];
  Rb.getType = function (a) {
    a = Rb.getMeta(a);
    return null == a || null == a.obj ? {} : a.obj;
  };
  Rb.getMeta = function (a) {
    return a.__meta__;
  };
  var zd = function (a) {
    this.__x = a;
  };
  l["haxe.xml._Fast.NodeAccess"] = zd;
  zd.__name__ = ["haxe", "xml", "_Fast", "NodeAccess"];
  zd.prototype = {
    resolve: function (a) {
      var b = this.__x.elementsNamed(a).next();
      if (null == b)
        throw (
          ((b =
            this.__x.nodeType == t.Document
              ? "Document"
              : this.__x.get_nodeName()),
          new u(b + " is missing element " + a))
        );
      return new Wa(b);
    },
    __class__: zd,
  };
  var Ad = function (a) {
    this.__x = a;
  };
  l["haxe.xml._Fast.AttribAccess"] = Ad;
  Ad.__name__ = ["haxe", "xml", "_Fast", "AttribAccess"];
  Ad.prototype = {
    resolve: function (a) {
      if (this.__x.nodeType == t.Document)
        throw new u("Cannot access document attribute " + a);
      var b = this.__x.get(a);
      if (null == b)
        throw new u(this.__x.get_nodeName() + " is missing attribute " + a);
      return b;
    },
    __class__: Ad,
  };
  var Bd = function (a) {
    this.__x = a;
  };
  l["haxe.xml._Fast.HasAttribAccess"] = Bd;
  Bd.__name__ = ["haxe", "xml", "_Fast", "HasAttribAccess"];
  Bd.prototype = {
    __class__: Bd,
  };
  var Cd = function (a) {
    this.__x = a;
  };
  l["haxe.xml._Fast.HasNodeAccess"] = Cd;
  Cd.__name__ = ["haxe", "xml", "_Fast", "HasNodeAccess"];
  Cd.prototype = {
    __class__: Cd,
  };
  var Dd = function (a) {
    this.__x = a;
  };
  l["haxe.xml._Fast.NodeListAccess"] = Dd;
  Dd.__name__ = ["haxe", "xml", "_Fast", "NodeListAccess"];
  Dd.prototype = {
    __class__: Dd,
  };
  var Wa = function (a) {
    if (a.nodeType != t.Document && a.nodeType != t.Element)
      throw new u("Invalid nodeType " + a.nodeType);
    this.x = a;
    this.node = new zd(a);
    this.nodes = new Dd(a);
    this.att = new Ad(a);
    this.has = new Bd(a);
    this.hasNode = new Cd(a);
  };
  l["haxe.xml.Fast"] = Wa;
  Wa.__name__ = ["haxe", "xml", "Fast"];
  Wa.prototype = {
    get_name: function () {
      return this.x.nodeType == t.Document ? "Document" : this.x.get_nodeName();
    },
    get_innerData: function () {
      var a = this.x.iterator();
      if (!a.hasNext()) throw new u(this.get_name() + " does not have data");
      var b = a.next(),
        c = a.next();
      if (null != c) {
        if (
          b.nodeType == t.PCData &&
          c.nodeType == t.CData &&
          "" ==
            $.trim(
              (function (a) {
                if (b.nodeType == t.Document || b.nodeType == t.Element)
                  throw new u("Bad node type, unexpected " + b.nodeType);
                return b.nodeValue;
              })(this)
            )
        ) {
          var f = a.next();
          if (
            null == f ||
            (f.nodeType == t.PCData &&
              "" ==
                $.trim(
                  (function (a) {
                    if (f.nodeType == t.Document || f.nodeType == t.Element)
                      throw new u("Bad node type, unexpected " + f.nodeType);
                    return f.nodeValue;
                  })(this)
                ) &&
              null == a.next())
          ) {
            if (c.nodeType == t.Document || c.nodeType == t.Element)
              throw new u("Bad node type, unexpected " + c.nodeType);
            return c.nodeValue;
          }
        }
        throw new u(this.get_name() + " does not only have data");
      }
      if (b.nodeType != t.PCData && b.nodeType != t.CData)
        throw new u(this.get_name() + " does not have data");
      if (b.nodeType == t.Document || b.nodeType == t.Element)
        throw new u("Bad node type, unexpected " + b.nodeType);
      return b.nodeValue;
    },
    __class__: Wa,
  };
  var Ra = function () {};
  l["haxe.xml.Parser"] = Ra;
  Ra.__name__ = ["haxe", "xml", "Parser"];
  Ra.parse = function (a, b) {
    null == b && (b = !1);
    var c = t.createDocument();
    Ra.doParse(a, b, 0, c);
    return c;
  };
  Ra.doParse = function (a, b, c, f) {
    null == c && (c = 0);
    for (
      var k = null,
        p = 1,
        d = 1,
        g = null,
        e = 0,
        h = 0,
        l = 0,
        m = a.charCodeAt(c),
        n = new Ea(),
        q = 1,
        v = -1;
      m == m;

    ) {
      switch (p) {
        case 0:
          switch (m) {
            case 10:
            case 13:
            case 9:
            case 32:
              break;
            default:
              p = d;
              continue;
          }
          break;
        case 1:
          switch (m) {
            case 60:
              p = 0;
              d = 2;
              break;
            default:
              e = c;
              p = 13;
              continue;
          }
          break;
        case 13:
          60 == m
            ? (n.addSub(a, e, c - e),
              (d = t.createPCData(n.b)),
              (n = new Ea()),
              f.addChild(d),
              h++,
              (p = 0),
              (d = 2))
            : 38 == m &&
              (n.addSub(a, e, c - e), (p = 18), (q = 13), (e = c + 1));
          break;
        case 17:
          93 == m &&
            93 == a.charCodeAt(c + 1) &&
            62 == a.charCodeAt(c + 2) &&
            ((m = t.createCData(B.substr(a, e, c - e))),
            f.addChild(m),
            h++,
            (c += 2),
            (p = 1));
          break;
        case 2:
          switch (m) {
            case 33:
              if (91 == a.charCodeAt(c + 1)) {
                c += 2;
                if ("CDATA[" != B.substr(a, c, 6).toUpperCase())
                  throw new u("Expected <![CDATA[");
                c += 5;
                p = 17;
              } else if (
                68 == a.charCodeAt(c + 1) ||
                100 == a.charCodeAt(c + 1)
              ) {
                if ("OCTYPE" != B.substr(a, c + 2, 6).toUpperCase())
                  throw new u("Expected <!DOCTYPE");
                c += 8;
                p = 16;
              } else {
                if (45 != a.charCodeAt(c + 1) || 45 != a.charCodeAt(c + 2))
                  throw new u("Expected \x3c!--");
                c += 2;
                p = 15;
              }
              e = c + 1;
              break;
            case 63:
              p = 14;
              e = c;
              break;
            case 47:
              if (null == f) throw new u("Expected node name");
              e = c + 1;
              p = 0;
              d = 10;
              break;
            default:
              p = 3;
              e = c;
              continue;
          }
          break;
        case 3:
          if (
            !(
              (97 <= m && 122 >= m) ||
              (65 <= m && 90 >= m) ||
              (48 <= m && 57 >= m) ||
              58 == m ||
              46 == m ||
              95 == m ||
              45 == m
            )
          ) {
            if (c == e) throw new u("Expected node name");
            k = t.createElement(B.substr(a, e, c - e));
            f.addChild(k);
            h++;
            p = 0;
            d = 4;
            continue;
          }
          break;
        case 4:
          switch (m) {
            case 47:
              p = 11;
              break;
            case 62:
              p = 9;
              break;
            default:
              p = 5;
              e = c;
              continue;
          }
          break;
        case 5:
          if (
            !(
              (97 <= m && 122 >= m) ||
              (65 <= m && 90 >= m) ||
              (48 <= m && 57 >= m) ||
              58 == m ||
              46 == m ||
              95 == m ||
              45 == m
            )
          ) {
            if (e == c) throw new u("Expected attribute name");
            g = B.substr(a, e, c - e);
            if (k.exists(g)) throw new u("Duplicate attribute");
            p = 0;
            d = 6;
            continue;
          }
          break;
        case 6:
          switch (m) {
            case 61:
              p = 0;
              d = 7;
              break;
            default:
              throw new u("Expected =");
          }
          break;
        case 7:
          switch (m) {
            case 34:
            case 39:
              n = new Ea();
              p = 8;
              e = c + 1;
              v = m;
              break;
            default:
              throw new u('Expected "');
          }
          break;
        case 8:
          switch (m) {
            case 38:
              n.addSub(a, e, c - e);
              p = 18;
              q = 8;
              e = c + 1;
              break;
            case 62:
              if (b)
                throw new u(
                  "Invalid unescaped " +
                    String.fromCharCode(m) +
                    " in attribute value"
                );
              m == v &&
                (n.addSub(a, e, c - e),
                (d = n.b),
                (n = new Ea()),
                k.set(g, d),
                (p = 0),
                (d = 4));
              break;
            case 60:
              if (b)
                throw new u(
                  "Invalid unescaped " +
                    String.fromCharCode(m) +
                    " in attribute value"
                );
              m == v &&
                (n.addSub(a, e, c - e),
                (d = n.b),
                (n = new Ea()),
                k.set(g, d),
                (p = 0),
                (d = 4));
              break;
            default:
              m == v &&
                (n.addSub(a, e, c - e),
                (d = n.b),
                (n = new Ea()),
                k.set(g, d),
                (p = 0),
                (d = 4));
          }
          break;
        case 9:
          e = c = Ra.doParse(a, b, c, k);
          p = 1;
          break;
        case 11:
          switch (m) {
            case 62:
              p = 1;
              break;
            default:
              throw new u("Expected >");
          }
          break;
        case 12:
          switch (m) {
            case 62:
              return 0 == h && f.addChild(t.createPCData("")), c;
            default:
              throw new u("Expected >");
          }
        case 10:
          if (
            !(
              (97 <= m && 122 >= m) ||
              (65 <= m && 90 >= m) ||
              (48 <= m && 57 >= m) ||
              58 == m ||
              46 == m ||
              95 == m ||
              45 == m
            )
          ) {
            if (e == c) throw new u("Expected node name");
            d = B.substr(a, e, c - e);
            if (f.nodeType != t.Element)
              throw new u(
                "Bad node type, expected Element but found " + f.nodeType
              );
            if (d != f.nodeName)
              throw new u(
                "Expected </" +
                  (function (a) {
                    if (f.nodeType != t.Element)
                      throw (
                        "Bad node type, expected Element but found " +
                        f.nodeType
                      );
                    return f.nodeName;
                  })(this) +
                  ">"
              );
            p = 0;
            d = 12;
            continue;
          }
          break;
        case 15:
          45 == m &&
            45 == a.charCodeAt(c + 1) &&
            62 == a.charCodeAt(c + 2) &&
            ((m = t.createComment(B.substr(a, e, c - e))),
            f.addChild(m),
            h++,
            (c += 2),
            (p = 1));
          break;
        case 16:
          91 == m
            ? l++
            : 93 == m
            ? l--
            : 62 == m &&
              0 == l &&
              ((m = t.createDocType(B.substr(a, e, c - e))),
              f.addChild(m),
              h++,
              (p = 1));
          break;
        case 14:
          63 == m &&
            62 == a.charCodeAt(c + 1) &&
            (c++,
            (m = B.substr(a, e + 1, c - e - 2)),
            (m = t.createProcessingInstruction(m)),
            f.addChild(m),
            h++,
            (p = 1));
          break;
        case 18:
          if (59 == m) {
            e = B.substr(a, e, c - e);
            if (35 == e.charCodeAt(0))
              (e =
                120 == e.charCodeAt(1)
                  ? r.parseInt("0" + B.substr(e, 1, e.length - 1))
                  : r.parseInt(B.substr(e, 1, e.length - 1))),
                (n.b += String.fromCharCode(e));
            else if (Ra.escapes.exists(e)) n.add(Ra.escapes.get(e));
            else {
              if (b) throw new u("Undefined entity: " + e);
              n.b += r.string("&" + e + ";");
            }
            e = c + 1;
            p = q;
          } else if (
            !(
              (97 <= m && 122 >= m) ||
              (65 <= m && 90 >= m) ||
              (48 <= m && 57 >= m) ||
              58 == m ||
              46 == m ||
              95 == m ||
              45 == m
            ) &&
            35 != m
          ) {
            if (b)
              throw new u(
                "Invalid character in entity: " + String.fromCharCode(m)
              );
            n.b += "&";
            n.addSub(a, e, c - e);
            c--;
            e = c + 1;
            p = q;
          }
      }
      m = $.fastCodeAt(a, ++c);
    }
    1 == p && ((e = c), (p = 13));
    if (13 == p) {
      if (c != e || 0 == h)
        n.addSub(a, e, c - e), (a = t.createPCData(n.b)), f.addChild(a), h++;
      return c;
    }
    if (!b && 18 == p && 13 == q)
      return (
        (n.b += "&"),
        n.addSub(a, e, c - e),
        (a = t.createPCData(n.b)),
        f.addChild(a),
        h++,
        c
      );
    throw new u("Unexpected end");
  };
  var u = function (a) {
    Error.call(this);
    this.val = a;
    this.message = String(a);
    Error.captureStackTrace && Error.captureStackTrace(this, u);
  };
  l["js._Boot.HaxeError"] = u;
  u.__name__ = ["js", "_Boot", "HaxeError"];
  u.__super__ = Error;
  u.prototype = v(Error.prototype, {
    __class__: u,
  });
  var K = function () {};
  l["js.Boot"] = K;
  K.__name__ = ["js", "Boot"];
  K.getClass = function (a) {
    if (a instanceof Array && null == a.__enum__) return Array;
    var b = a.__class__;
    if (null != b) return b;
    a = K.__nativeClassName(a);
    return null != a ? K.__resolveNativeClass(a) : null;
  };
  K.__string_rec = function (a, b) {
    if (null == a) return "null";
    if (5 <= b.length) return "<...>";
    var c = typeof a;
    "function" == c && (a.__name__ || a.__ename__) && (c = "object");
    switch (c) {
      case "object":
        if (a instanceof Array) {
          if (a.__enum__) {
            if (2 == a.length) return a[0];
            c = a[0] + "(";
            b += "\t";
            for (var f = 2, k = a.length; f < k; )
              var p = f++,
                c =
                  2 != p
                    ? c + ("," + K.__string_rec(a[p], b))
                    : c + K.__string_rec(a[p], b);
            return c + ")";
          }
          c = a.length;
          f = "[";
          b += "\t";
          for (k = 0; k < c; )
            (p = k++), (f += (0 < p ? "," : "") + K.__string_rec(a[p], b));
          return f + "]";
        }
        try {
          f = a.toString;
        } catch (d) {
          return d instanceof u && (d = d.val), "???";
        }
        if (
          null != f &&
          f != Object.toString &&
          "function" == typeof f &&
          ((c = a.toString()), "[object Object]" != c)
        )
          return c;
        c = null;
        f = "{\n";
        b += "\t";
        k = null != a.hasOwnProperty;
        for (c in a)
          (k && !a.hasOwnProperty(c)) ||
            "prototype" == c ||
            "__class__" == c ||
            "__super__" == c ||
            "__interfaces__" == c ||
            "__properties__" == c ||
            (2 != f.length && (f += ", \n"),
            (f += b + c + " : " + K.__string_rec(a[c], b)));
        b = b.substring(1);
        return f + ("\n" + b + "}");
      case "function":
        return "<function>";
      case "string":
        return a;
      default:
        return String(a);
    }
  };
  K.__interfLoop = function (a, b) {
    if (null == a) return !1;
    if (a == b) return !0;
    var c = a.__interfaces__;
    if (null != c)
      for (var f = 0, k = c.length; f < k; ) {
        var p = f++,
          p = c[p];
        if (p == b || K.__interfLoop(p, b)) return !0;
      }
    return K.__interfLoop(a.__super__, b);
  };
  K.__instanceof = function (a, b) {
    if (null == b) return !1;
    switch (b) {
      case Ve:
        return (a | 0) === a;
      case Pe:
        return "number" == typeof a;
      case Qe:
        return "boolean" == typeof a;
      case String:
        return "string" == typeof a;
      case Array:
        return a instanceof Array && null == a.__enum__;
      case We:
        return !0;
      default:
        if (null != a)
          if ("function" == typeof b) {
            if (a instanceof b || K.__interfLoop(K.getClass(a), b)) return !0;
          } else {
            if ("object" == typeof b && K.__isNativeObj(b) && a instanceof b)
              return !0;
          }
        else return !1;
        return (b == Ne && null != a.__name__) ||
          (b == Oe && null != a.__ename__)
          ? !0
          : a.__enum__ == b;
    }
  };
  K.__nativeClassName = function (a) {
    a = K.__toStr.call(a).slice(8, -1);
    return "Object" == a || "Function" == a || "Math" == a || "JSON" == a
      ? null
      : a;
  };
  K.__isNativeObj = function (a) {
    return null != K.__nativeClassName(a);
  };
  K.__resolveNativeClass = function (a) {
    return Ie[a];
  };
  var re = function () {};
  l["js.Browser"] = re;
  re.__name__ = ["js", "Browser"];
  re.getLocalStorage = function () {
    try {
      var a = window.localStorage;
      a.getItem("");
      return a;
    } catch (b) {
      return b instanceof u && (b = b.val), null;
    }
  };
  var se = function () {};
  l["js.html._CanvasElement.CanvasUtil"] = se;
  se.__name__ = ["js", "html", "_CanvasElement", "CanvasUtil"];
  se.getContextWebGL = function (a, b) {
    for (var c = 0, f = ["webgl", "experimental-webgl"]; c < f.length; ) {
      var k = f[c];
      ++c;
      k = a.getContext(k, b);
      if (null != k) return k;
    }
    return null;
  };
  var Ga = function (a) {
    if (a instanceof Array && null == a.__enum__)
      (this.a = a), (this.byteLength = a.length);
    else {
      this.a = [];
      for (var b = 0; b < a; ) {
        var c = b++;
        this.a[c] = 0;
      }
      this.byteLength = a;
    }
  };
  l["js.html.compat.ArrayBuffer"] = Ga;
  Ga.__name__ = ["js", "html", "compat", "ArrayBuffer"];
  Ga.sliceImpl = function (a, b) {
    var c = new Ke(this, a, null == b ? null : b - a),
      f = new qe(c.byteLength);
    new Ke(f).set(c);
    return f;
  };
  Ga.prototype = {
    slice: function (a, b) {
      return new Ga(this.a.slice(a, b));
    },
    __class__: Ga,
  };
  var te = function (a, b, c) {
    this.buf = a;
    this.offset = null == b ? 0 : b;
    this.length = null == c ? a.byteLength - this.offset : c;
    if (
      0 > this.offset ||
      0 > this.length ||
      this.offset + this.length > a.byteLength
    )
      throw new u(ra.OutsideBounds);
  };
  l["js.html.compat.DataView"] = te;
  te.__name__ = ["js", "html", "compat", "DataView"];
  te.prototype = {
    getInt8: function (a) {
      a = this.buf.a[this.offset + a];
      return 128 <= a ? a - 256 : a;
    },
    getUint8: function (a) {
      return this.buf.a[this.offset + a];
    },
    getInt16: function (a, b) {
      var c = this.getUint16(a, b);
      return 32768 <= c ? c - 65536 : c;
    },
    getUint16: function (a, b) {
      return b
        ? this.buf.a[this.offset + a] | (this.buf.a[this.offset + a + 1] << 8)
        : (this.buf.a[this.offset + a] << 8) | this.buf.a[this.offset + a + 1];
    },
    getInt32: function (a, b) {
      var c = this.offset + a,
        f = this.buf.a[c++],
        k = this.buf.a[c++],
        p = this.buf.a[c++],
        c = this.buf.a[c++];
      return b
        ? f | (k << 8) | (p << 16) | (c << 24)
        : c | (p << 8) | (k << 16) | (f << 24);
    },
    getUint32: function (a, b) {
      var c = this.getInt32(a, b);
      return 0 > c ? c + 4294967296 : c;
    },
    getFloat32: function (a, b) {
      return Fa.i32ToFloat(this.getInt32(a, b));
    },
    getFloat64: function (a, b) {
      var c = this.getInt32(a, b),
        f = this.getInt32(a + 4, b);
      return Fa.i64ToDouble(b ? c : f, b ? f : c);
    },
    setInt8: function (a, b) {
      this.buf.a[a + this.offset] = 0 > b ? (b + 128) & 255 : b & 255;
    },
    setUint8: function (a, b) {
      this.buf.a[a + this.offset] = b & 255;
    },
    setInt16: function (a, b, c) {
      this.setUint16(a, 0 > b ? b + 65536 : b, c);
    },
    setUint16: function (a, b, c) {
      a += this.offset;
      c
        ? ((this.buf.a[a] = b & 255), (this.buf.a[a++] = (b >> 8) & 255))
        : ((this.buf.a[a++] = (b >> 8) & 255), (this.buf.a[a] = b & 255));
    },
    setInt32: function (a, b, c) {
      this.setUint32(a, b, c);
    },
    setUint32: function (a, b, c) {
      a += this.offset;
      c
        ? ((this.buf.a[a++] = b & 255),
          (this.buf.a[a++] = (b >> 8) & 255),
          (this.buf.a[a++] = (b >> 16) & 255),
          (this.buf.a[a++] = b >>> 24))
        : ((this.buf.a[a++] = b >>> 24),
          (this.buf.a[a++] = (b >> 16) & 255),
          (this.buf.a[a++] = (b >> 8) & 255),
          (this.buf.a[a++] = b & 255));
    },
    setFloat32: function (a, b, c) {
      this.setUint32(a, Fa.floatToI32(b), c);
    },
    setFloat64: function (a, b, c) {
      b = Fa.doubleToI64(b);
      c
        ? (this.setUint32(a, b.low), this.setUint32(a, b.high))
        : (this.setUint32(a, b.high), this.setUint32(a, b.low));
    },
    __class__: te,
  };
  var Ta = function () {};
  l["js.html.compat.Uint8Array"] = Ta;
  Ta.__name__ = ["js", "html", "compat", "Uint8Array"];
  Ta._new = function (a, b, c) {
    if ("number" == typeof a) {
      c = [];
      for (b = 0; b < a; ) {
        var f = b++;
        c[f] = 0;
      }
      c.byteLength = c.length;
      c.byteOffset = 0;
      c.buffer = new Ga(c);
    } else if (K.__instanceof(a, Ga))
      null == b && (b = 0),
        null == c && (c = a.byteLength - b),
        (c = 0 == b ? a.a : a.a.slice(b, b + c)),
        (c.byteLength = c.length),
        (c.byteOffset = b),
        (c.buffer = a);
    else if (a instanceof Array && null == a.__enum__)
      (c = a.slice()),
        (c.byteLength = c.length),
        (c.byteOffset = 0),
        (c.buffer = new Ga(c));
    else throw new u("TODO " + r.string(a));
    c.subarray = Ta._subarray;
    c.set = Ta._set;
    return c;
  };
  Ta._set = function (a, b) {
    if (K.__instanceof(a.buffer, Ga)) {
      if (a.byteLength + b > this.byteLength)
        throw new u("set() outside of range");
      for (var c = 0, f = a.byteLength; c < f; ) {
        var k = c++;
        this[k + b] = a[k];
      }
    } else if (a instanceof Array && null == a.__enum__) {
      if (a.length + b > this.byteLength) throw new u("set() outside of range");
      c = 0;
      for (f = a.length; c < f; ) (k = c++), (this[k + b] = a[k]);
    } else throw new u("TODO");
  };
  Ta._subarray = function (a, b) {
    var c = Ta._new(this.slice(a, b));
    c.byteOffset = a;
    return c;
  };
  var wa = function () {};
  l["kit.util.Disposable"] = wa;
  wa.__name__ = ["kit", "util", "Disposable"];
  wa.prototype = {
    __class__: wa,
  };
  var s = function () {
    this.$aF = null;
    this.$ZF = 0;
    this.owner = this.next = null;
  };
  l["kit.Component"] = s;
  s.__name__ = ["kit", "Component"];
  s.__interfaces__ = [wa];
  s.prototype = {
    onAdded: function () {},
    onRemoved: function () {
      null != this.$aF && this.$aF.$rF();
    },
    onStart: function () {},
    onStop: function () {},
    onUpdate: function (a) {},
    onMessage: function (a, b) {
      if (null != this.$aF) {
        var c = this.$aF.$pF;
        if (
          null != c &&
          ((c = null != Sa[a] ? c.getReserved(a) : c.h[a]),
          null != c && null != c.$oG)
        )
          return c.emit(b), !0;
      }
      return !1;
    },
    connect0: function (a, b) {
      var c = a.connect(b);
      this.registerDisposable(c);
      return this;
    },
    connect1: function (a, b) {
      var c = a.connect(b);
      this.registerDisposable(c);
      return this;
    },
    registerDisposable: function (a) {
      null == this.$aF && (this.$aF = new Ed());
      null == this.$aF.$qF && (this.$aF.$qF = []);
      this.$aF.$qF.push(a);
    },
    dispose: function () {
      null != this.owner
        ? this.owner.remove(this)
        : null != this.$aF && this.$aF.$rF();
    },
    get_entitySlot: function () {
      return -1;
    },
    $YF: function () {},
    __class__: s,
  };
  var Sb = function () {};
  l["kit.asset.AssetPack"] = Sb;
  Sb.__name__ = ["kit", "asset", "AssetPack"];
  Sb.__interfaces__ = [wa];
  Sb.prototype = {
    __class__: Sb,
  };
  var Ed = function () {
    this.$pF = this.$qF = null;
  };
  l.$CJ = Ed;
  Ed.__name__ = ["$CJ"];
  Ed.prototype = {
    $rF: function () {
      var a = this.$qF;
      if (null != a) {
        this.$qF = null;
        for (var b = 0; b < a.length; ) {
          var c = a[b];
          ++b;
          c.dispose();
        }
      }
      this.$pF = null;
    },
    __class__: Ed,
  };
  var Fd = function () {};
  l["kit.MessageResult"] = Fd;
  Fd.__name__ = ["kit", "MessageResult"];
  Fd.prototype = {
    __class__: Fd,
  };
  var h = function () {
    this.active = !0;
    this.parent = this.firstChild = this.next = this.firstComponent = null;
    this.$zF = {};
  };
  l["kit.Entity"] = h;
  h.__name__ = ["kit", "Entity"];
  h.__interfaces__ = [wa];
  h.$$F = function (a) {
    for (var b = null; null != a; ) (b = a), (a = a.next);
    return b;
  };
  h.prototype = {
    add: function (a) {
      null != a.owner && a.owner.remove(a);
      var b = a.get_entitySlot(),
        c = this.$zF[b];
      null != c && this.remove(c);
      this.$zF[b] = a;
      b = null;
      for (c = this.firstComponent; null != c; ) (b = c), (c = c.next);
      null != b ? (b.next = a) : (this.firstComponent = a);
      a.owner = this;
      a.next = null;
      a.onAdded();
      return this;
    },
    remove: function (a) {
      for (var b = null, c = this.firstComponent; null != c; ) {
        var f = c.next;
        if (c == a)
          return (
            null == b
              ? (this.firstComponent = f)
              : ((b.owner = this), (b.next = f)),
            (a = c.get_entitySlot()),
            delete this.$zF[a],
            0 != (c.$ZF & 1) && (c.onStop(), (c.$ZF &= -2)),
            c.onRemoved(),
            (c.owner = null),
            (c.next = null),
            !0
          );
        b = c;
        c = f;
      }
      return !1;
    },
    addChild: function (a, b) {
      null == b && (b = !0);
      null != a.parent && a.parent.removeChild(a);
      a.parent = this;
      b ? this.$vF(h.$$F(this.firstChild), a) : this.$wF(a);
      return this;
    },
    removeChild: function (a) {
      for (var b = null, c = this.firstChild; null != c; ) {
        if (c == a) {
          this.$uF(b);
          c.parent = null;
          c.next = null;
          break;
        }
        b = c;
        c = c.next;
      }
    },
    emitMessage: function (a, b) {
      for (var c = !1, f = this.firstComponent; null != f; ) {
        var k = f.next;
        f.onMessage(a, b) && (c = !0);
        f = k;
      }
      h.$_F.handled = c;
      return h.$_F;
    },
    emitMessageToParents: function (a, b) {
      var c = !1,
        f = this;
      do {
        var k = f.parent;
        f.emitMessage(a, b).handled && (c = !0);
        f = k;
      } while (null != f);
      h.$_F.handled = c;
      return h.$_F;
    },
    disposeChildren: function () {
      for (; null != this.firstChild; ) this.firstChild.dispose();
    },
    dispose: function () {
      for (
        null != this.parent && this.parent.removeChild(this);
        null != this.firstComponent;

      )
        this.firstComponent.dispose();
      this.disposeChildren();
    },
    $uF: function (a) {
      null != a ? (a.next = a.next.next) : this.$xF();
    },
    $vF: function (a, b) {
      null != a ? ((b.next = a.next), (a.next = b)) : this.$wF(b);
    },
    $wF: function (a) {
      a.next = this.firstChild;
      this.firstChild = a;
    },
    $xF: function () {
      this.firstChild = this.firstChild.next;
    },
    __class__: h,
  };
  var Gd = function () {};
  l.$CK = Gd;
  Gd.__name__ = ["$CK"];
  Gd.prototype = {
    __class__: Gd,
  };
  var xa = function () {
    this.$XG = !0;
  };
  l.$CL = xa;
  xa.__name__ = ["$CL"];
  xa.__interfaces__ = [Gd];
  xa.$aG = function (a) {
    var b = re.getLocalStorage();
    return null != b ? new Tb(b, a) : new Ub();
  };
  xa.prototype = {
    init: function () {
      var a = this;
      A.$wS();
      A.$xS();
      var b = null;
      try {
        b = window.flambe.canvas;
      } catch (c) {
        c instanceof u && (c = c.val);
      }
      b.setAttribute("tabindex", "0");
      b.style.outlineStyle = "none";
      A.$oS(b, "tap-highlight-color", "transparent");
      b.setAttribute("moz-opaque", "");
      this.$IG = new db(b);
      this.$GG = new ka();
      this.$FG = new Vb(this.$GG, b);
      this.$HG = this.$EG(b);
      this.$AG = new Xa();
      this.$TG = b;
      this.$UG = b.parentElement;
      this.$UG.style.overflow = "hidden";
      this.$UG.style.position = "relative";
      A.$oS(this.$UG, "touch-action", "none");
      var f = 0,
        k = function (c) {
          if (!(1e3 > c.timeStamp - f)) {
            var k = b.getBoundingClientRect(),
              p = a.$CG(c, k),
              k = a.$DG(c, k);
            switch (c.type) {
              case "mousedown":
                c.target == b &&
                  (c.preventDefault(), a.$FG.$IN(p, k, c.button), b.focus());
                break;
              case "mousemove":
                a.$FG.$MN(p, k);
                break;
              case "mouseup":
                a.$FG.$JN(p, k, c.button);
                break;
              case "mousewheel":
              case "DOMMouseScroll":
                a.$FG.$NN(
                  p,
                  k,
                  "mousewheel" == c.type ? c.wheelDelta / 40 : -c.detail
                ) && c.preventDefault();
            }
          }
        };
      window.addEventListener("mousedown", k, !1);
      window.addEventListener("mousemove", k, !1);
      window.addEventListener("mouseup", k, !1);
      b.addEventListener("mousewheel", k, !1);
      b.addEventListener("DOMMouseScroll", k, !1);
      b.addEventListener(
        "contextmenu",
        function (a) {
          a.preventDefault();
        },
        !1
      );
      var p = "undefined" != typeof window.ontouchstart,
        k = r["int"](A.$lS("maxTouchPoints", window.navigator).value);
      if (p || 1 < k) {
        var d = new Wb(this.$GG, p ? 4 : k);
        this.$JG = d;
        k = function (b) {
          var c;
          c = p ? b.changedTouches : [b];
          var k = b.target.getBoundingClientRect();
          f = b.timeStamp;
          switch (b.type) {
            case "touchstart":
            case "MSPointerDown":
            case "pointerdown":
              b.preventDefault();
              for (b = 0; b < c.length; ) {
                var e = c[b];
                ++b;
                var g = a.$CG(e, k),
                  h = a.$DG(e, k);
                d.$IN((p ? e.identifier : e.pointerId) | 0, g, h);
              }
              break;
            case "touchmove":
            case "MSPointerMove":
            case "pointermove":
              b.preventDefault();
              for (b = 0; b < c.length; )
                (e = c[b]),
                  ++b,
                  (g = a.$CG(e, k)),
                  (h = a.$DG(e, k)),
                  d.$MN((p ? e.identifier : e.pointerId) | 0, g, h);
              break;
            case "touchend":
            case "touchcancel":
            case "MSPointerUp":
            case "pointerup":
              for (b = 0; b < c.length; )
                (e = c[b]),
                  ++b,
                  (g = a.$CG(e, k)),
                  (h = a.$DG(e, k)),
                  d.$JN((p ? e.identifier : e.pointerId) | 0, g, h);
          }
        };
        p
          ? (b.addEventListener("touchstart", k, !1),
            b.addEventListener("touchmove", k, !1),
            b.addEventListener("touchend", k, !1),
            b.addEventListener("touchcancel", k, !1))
          : (b.addEventListener("MSPointerDown", k, !1),
            b.addEventListener("MSPointerMove", k, !1),
            b.addEventListener("MSPointerUp", k, !1));
      } else this.$JG = new Xb();
      var e = window.onerror;
      window.onerror = function (a, b, c) {
        m.uncaughtError.emit(a);
        return null != e ? e(a, b, c) : !1;
      };
      var g = A.$lS("hidden", window.document);
      null != g.value
        ? ((k = function (a) {
            m.hidden.set__(T.field(window.document, g.field));
          }),
          k(null),
          window.document.addEventListener(
            g.prefix + "visibilitychange",
            k,
            !1
          ))
        : ((k = function (a) {
            m.hidden.set__("pagehide" == a.type);
          }),
          window.addEventListener("pageshow", k, !1),
          window.addEventListener("pagehide", k, !1));
      m.hidden.get_changed().connect(function (b, c) {
        b || (a.$WG = !0);
      });
      this.$WG = !1;
      this.$VG = Date.now();
      var h = A.$lS("requestAnimationFrame").value;
      if (null != h) {
        var l = window.performance,
          n = null != l && A.$nS("now", l);
        n ? (this.$VG = l.now()) : null;
        var q = null,
          q = function (c) {
            h(q, b);
            a.$BG(n ? l.now() : c);
          };
        h(q, b);
      } else
        window.setInterval(function () {
          a.$BG(Date.now());
        }, 16);
      la.$dN("fullscreen") &&
        this.$JG.get_supported() &&
        this.$IG.get_fullscreenSupported() &&
        this.$JG.up.connect(function (b) {
          a.$IG.fullscreen.$bG || a.$IG.requestFullscreen();
        });
      var v = la.$eN();
      null != v &&
        (this.$IG.fullscreen.get_changed().connect(function (b, c) {
          b && a.$IG.lockOrientation(v);
        }),
        this.$IG.lockOrientation(v));
      this.$AG.$OQ.add(new Yb());
      this.$AG.$hK();
      return new sa().$bW(null);
    },
    loadAssetPack: function (a) {
      return new J(this, a).$oF;
    },
    getLocalStorage: function () {
      if (null == this.$QG) {
        var a = "2DKit.local." + r.string(la.$dN("id"));
        this.$QG = xa.$aG(a);
      }
      return this.$QG;
    },
    getCloudStorage: function () {
      if (null == this.$LG) {
        var a = "2DKit.cloud." + r.string(la.$dN("id"));
        this.$LG = xa.$aG(a);
      }
      return this.$LG;
    },
    $BG: function (a) {
      var b = (a - this.$VG) / 1e3;
      this.$VG = a;
      m.hidden.$bG ||
        (this.$WG
          ? (this.$WG = !1)
          : (this.$XG && ((this.$XG = !1), this.$IG.$XS(null)),
            this.$AG.$BG(b),
            this.$AG.$xI(this.$HG)));
    },
    getKeyboard: function () {
      var a = this;
      if (null == this.$PG) {
        this.$PG = new Ba();
        var b = function (b) {
          switch (b.type) {
            case "keydown":
              a.$PG.$IN(b.keyCode) && b.preventDefault();
              break;
            case "keyup":
              a.$PG.$JN(b.keyCode);
          }
        };
        this.$TG.addEventListener("keydown", b, !1);
        this.$TG.addEventListener("keyup", b, !1);
        if (
          null != window.history &&
          null != ((Le = window.history), D(Le, Le.pushState))
        ) {
          var c = !1,
            f = function () {
              window.history.pushState("2DKitBack", null);
              c = !0;
            };
          window.addEventListener("popstate", function (b) {
            c &&
              (null != a.$PG.backButton.$oG
                ? (f(), a.$PG.backButton.emit())
                : window.history.back());
          });
          if (A.$gS)
            this.$GG.down
              .connect(function (a) {
                f();
              })
              .once();
          else f();
        }
      }
      return this.$PG;
    },
    getExternal: function () {
      null == this.$MG && (this.$MG = new Zb());
      return this.$MG;
    },
    getRenderer: function () {
      return this.$HG;
    },
    $CG: function (a, b) {
      return ((a.clientX - b.left) * this.$IG.get_width()) / b.width;
    },
    $DG: function (a, b) {
      return ((a.clientY - b.top) * this.$IG.get_height()) / b.height;
    },
    $EG: function (a) {
      if (0 <= window.navigator.userAgent.indexOf("Windows Phone"))
        return new qb(a);
      try {
        var b = se.getContextWebGL(a, {
          alpha: !1,
          depth: !1,
          stencil: !0,
          failIfMajorPerformanceCaveat: !0,
        });
        if (null != b) {
          var c = new $b(this.$IG, b);
          if (c.$DV) return c;
        }
      } catch (f) {
        f instanceof u && (f = f.val), null;
      }
      return new qb(a);
    },
    __class__: xa,
  };
  var fa = function (a, b) {
    this.$bG = a;
    this.$cG = null != b ? new rb(b) : null;
  };
  l["kit.util.Value"] = fa;
  fa.__name__ = ["kit", "util", "Value"];
  fa.prototype = {
    watch: function (a) {
      a(this.$bG, this.$bG);
      return this.get_changed().connect(a);
    },
    set__: function (a) {
      var b = this.$bG;
      a != b && ((this.$bG = a), null != this.$cG && this.$cG.emit(a, b));
      return a;
    },
    get_changed: function () {
      null == this.$cG && (this.$cG = new rb());
      return this.$cG;
    },
    __class__: fa,
  };
  var eb = function (a, b) {
    this.$dG = null;
    this.$fG = a;
    this.$eG = b;
    this.stayInList = !0;
  };
  l["kit.util.SignalConnection"] = eb;
  eb.__name__ = ["kit", "util", "SignalConnection"];
  eb.__interfaces__ = [wa];
  eb.prototype = {
    once: function () {
      this.stayInList = !1;
      return this;
    },
    dispose: function () {
      null != this.$fG && (this.$fG.$hG(this), (this.$fG = null));
    },
    __class__: eb,
  };
  var ga = function (a) {
    this.$oG = null != a ? new eb(this, a) : null;
    this.$pG = null;
  };
  l["kit.util.SignalBase"] = ga;
  ga.__name__ = ["kit", "util", "SignalBase"];
  ga.prototype = {
    $gG: function (a, b) {
      var c = this,
        f = new eb(this, a);
      this.$oG == ga.$qG
        ? this.$iG(function () {
            c.$lG(f, b);
          })
        : this.$lG(f, b);
      return f;
    },
    $hG: function (a) {
      var b = this;
      this.$oG == ga.$qG
        ? this.$iG(function () {
            b.$mG(a);
          })
        : this.$mG(a);
    },
    $iG: function (a) {
      for (var b = null, c = this.$pG; null != c; ) (b = c), (c = c.next);
      a = new Hd(a);
      null != b ? (b.next = a) : (this.$pG = a);
    },
    $jG: function () {
      var a = this.$oG;
      this.$oG = ga.$qG;
      return a;
    },
    $kG: function (a) {
      this.$oG = a;
      a = this.$pG;
      for (this.$pG = null; null != a; ) a.$nW(), (a = a.next);
    },
    $lG: function (a, b) {
      if (b) (a.$dG = this.$oG), (this.$oG = a);
      else {
        for (var c = null, f = this.$oG; null != f; ) (c = f), (f = f.$dG);
        null != c ? (c.$dG = a) : (this.$oG = a);
      }
    },
    $mG: function (a) {
      for (var b = null, c = this.$oG; null != c; ) {
        if (c == a) {
          a = c.$dG;
          null == b ? (this.$oG = a) : (b.$dG = a);
          break;
        }
        b = c;
        c = c.$dG;
      }
    },
    __class__: ga,
  };
  var rb = function (a) {
    ga.call(this, a);
  };
  l["kit.util.Signal2"] = rb;
  rb.__name__ = ["kit", "util", "Signal2"];
  rb.__super__ = ga;
  rb.prototype = v(ga.prototype, {
    connect: function (a, b) {
      null == b && (b = !1);
      return this.$gG(a, b);
    },
    emit: function (a, b) {
      var c = this;
      this.$oG == ga.$qG
        ? this.$iG(function () {
            c.$rG(a, b);
          })
        : this.$rG(a, b);
    },
    $rG: function (a, b) {
      for (var c = this.$jG(), f = c; null != f; )
        f.$eG(a, b), f.stayInList || f.dispose(), (f = f.$dG);
      this.$kG(c);
    },
    __class__: rb,
  });
  var Ya = function (a) {
    ga.call(this, a);
  };
  l["kit.util.Signal0"] = Ya;
  Ya.__name__ = ["kit", "util", "Signal0"];
  Ya.__super__ = ga;
  Ya.prototype = v(ga.prototype, {
    connect: function (a, b) {
      null == b && (b = !1);
      return this.$gG(a, b);
    },
    emit: function () {
      var a = this;
      this.$oG == ga.$qG
        ? this.$iG(function () {
            a.$rG();
          })
        : this.$rG();
    },
    $rG: function () {
      for (var a = this.$jG(), b = a; null != b; )
        b.$eG(), b.stayInList || b.dispose(), (b = b.$dG);
      this.$kG(a);
    },
    __class__: Ya,
  });
  var R = function (a) {
    ga.call(this, a);
  };
  l["kit.util.Signal1"] = R;
  R.__name__ = ["kit", "util", "Signal1"];
  R.__super__ = ga;
  R.prototype = v(ga.prototype, {
    connect: function (a, b) {
      null == b && (b = !1);
      return this.$gG(a, b);
    },
    emit: function (a) {
      var b = this;
      this.$oG == ga.$qG
        ? this.$iG(function () {
            b.$rG(a);
          })
        : this.$rG(a);
    },
    $rG: function (a) {
      for (var b = this.$jG(), c = b; null != c; )
        c.$eG(a), c.stayInList || c.dispose(), (c = c.$dG);
      this.$kG(b);
    },
    __class__: R,
  });
  var O = function (a, b) {
    this.$sG = null;
    fa.call(this, a, b);
  };
  l["kit.animation.AnimatedFloat"] = O;
  O.__name__ = ["kit", "animation", "AnimatedFloat"];
  O.__super__ = fa;
  O.prototype = v(fa.prototype, {
    set__: function (a) {
      this.$sG = null;
      return fa.prototype.set__.call(this, a);
    },
    update: function (a) {
      null != this.$sG &&
        (fa.prototype.set__.call(this, this.$sG.update(a)),
        this.$sG.isComplete() && (this.$sG = null));
    },
    animate: function (a, b, c, f) {
      this.set__(a);
      this.animateTo(b, c, f);
    },
    animateTo: function (a, b, c) {
      this.set_behavior(new fb(this.$bG, a, b, c));
    },
    animateBy: function (a, b, c) {
      this.set_behavior(new fb(this.$bG, this.$bG + a, b, c));
    },
    set_behavior: function (a) {
      this.$sG = a;
      this.update(0);
      return a;
    },
    __class__: O,
  });
  var m = function () {};
  l["kit.System"] = m;
  m.__name__ = ["kit", "System"];
  m.$tG = function () {
    null == m.$wG &&
      ((m.$wG = m.$vG.init()),
      (m.$wG = m.$wG.then(function (a) {
        return Za.init();
      })));
    return m.$wG;
  };
  m.loadAssetPack = function (a) {
    return m.$vG.loadAssetPack(a);
  };
  m.nextFrame = function (a) {
    m.$vG.$AG.$RQ(a);
  };
  var $a = function (a) {
    null == a && (a = 1);
    this.$zG = 0;
    s.call(this);
    this.scale = new O(a);
  };
  l["kit.SpeedAdjuster"] = $a;
  $a.__name__ = ["kit", "SpeedAdjuster"];
  $a.__super__ = s;
  $a.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 9;
    },
    onUpdate: function (a) {
      0 < this.$zG && ((a = this.$zG), (this.$zG = 0));
      this.scale.update(a);
    },
    __class__: $a,
  });
  var Za = function (a) {
    this.$_G = a;
  };
  l["kit.LegacyStorage"] = Za;
  Za.__name__ = ["kit", "LegacyStorage"];
  Za.init = function () {
    return m.$vG
      .getLocalStorage()
      .get("LegacyStorage", {})
      .then(function (a) {
        null == Za.$AH && (Za.$AH = new Za(a));
      });
  };
  Za.prototype = {
    __class__: Za,
  };
  var Id = function () {};
  l["kit.animation.Behavior"] = Id;
  Id.__name__ = ["kit", "animation", "Behavior"];
  Id.prototype = {
    __class__: Id,
  };
  var C = function () {};
  l["kit.animation.Ease"] = C;
  C.__name__ = ["kit", "animation", "Ease"];
  C.linear = function (a) {
    return a;
  };
  C.sineIn = function (a) {
    return 1 - Math.cos(1.5707963267948966 * a);
  };
  C.sineOut = function (a) {
    return Math.sin(1.5707963267948966 * a);
  };
  C.sineInOut = function (a) {
    return 0.5 - Math.cos(3.141592653589793 * a) / 2;
  };
  C.bounceOut = function (a) {
    return 0.36363636363636365 > a
      ? 7.5625 * a * a
      : 0.7272727272727273 > a
      ? 7.5625 * (a - 0.5454545454545454) * (a - 0.5454545454545454) + 0.75
      : 0.9090909090909091 > a
      ? 7.5625 * (a - 0.8181818181818182) * (a - 0.8181818181818182) + 0.9375
      : 7.5625 * (a - 0.9545454545454546) * (a - 0.9545454545454546) + 0.984375;
  };
  var fb = function (a, b, c, f) {
    this.$NH = a;
    this.$OH = b;
    this.$PH = c;
    this.elapsed = 0;
    this.$QH = null != f ? f : C.linear;
  };
  l["kit.animation.Tween"] = fb;
  fb.__name__ = ["kit", "animation", "Tween"];
  fb.__interfaces__ = [Id];
  fb.prototype = {
    update: function (a) {
      this.elapsed += a;
      return this.elapsed >= this.$PH
        ? this.$OH
        : this.$NH + (this.$OH - this.$NH) * this.$QH(this.elapsed / this.$PH);
    },
    isComplete: function () {
      return this.elapsed >= this.$PH;
    },
    __class__: fb,
  };
  var Na = function () {};
  l["kit.asset.Asset"] = Na;
  Na.__name__ = ["kit", "asset", "Asset"];
  Na.__interfaces__ = [wa];
  Na.prototype = {
    __class__: Na,
  };
  var q = (l["kit.asset.AssetFormat"] = {
    __ename__: ["kit", "asset", "AssetFormat"],
    __constructs__:
      "WEBP JXR PNG JPG GIF _2DKD _2DKP _2DKE MP3 M4A OPUS OGG WAV WOFF TTF OTF SWF MP4 WEBM Data".split(
        " "
      ),
  });
  q.WEBP = ["WEBP", 0];
  q.WEBP.toString = n;
  q.WEBP.__enum__ = q;
  q.JXR = ["JXR", 1];
  q.JXR.toString = n;
  q.JXR.__enum__ = q;
  q.PNG = ["PNG", 2];
  q.PNG.toString = n;
  q.PNG.__enum__ = q;
  q.JPG = ["JPG", 3];
  q.JPG.toString = n;
  q.JPG.__enum__ = q;
  q.GIF = ["GIF", 4];
  q.GIF.toString = n;
  q.GIF.__enum__ = q;
  q._2DKD = ["_2DKD", 5];
  q._2DKD.toString = n;
  q._2DKD.__enum__ = q;
  q._2DKP = ["_2DKP", 6];
  q._2DKP.toString = n;
  q._2DKP.__enum__ = q;
  q._2DKE = ["_2DKE", 7];
  q._2DKE.toString = n;
  q._2DKE.__enum__ = q;
  q.MP3 = ["MP3", 8];
  q.MP3.toString = n;
  q.MP3.__enum__ = q;
  q.M4A = ["M4A", 9];
  q.M4A.toString = n;
  q.M4A.__enum__ = q;
  q.OPUS = ["OPUS", 10];
  q.OPUS.toString = n;
  q.OPUS.__enum__ = q;
  q.OGG = ["OGG", 11];
  q.OGG.toString = n;
  q.OGG.__enum__ = q;
  q.WAV = ["WAV", 12];
  q.WAV.toString = n;
  q.WAV.__enum__ = q;
  q.WOFF = ["WOFF", 13];
  q.WOFF.toString = n;
  q.WOFF.__enum__ = q;
  q.TTF = ["TTF", 14];
  q.TTF.toString = n;
  q.TTF.__enum__ = q;
  q.OTF = ["OTF", 15];
  q.OTF.toString = n;
  q.OTF.__enum__ = q;
  q.SWF = ["SWF", 16];
  q.SWF.toString = n;
  q.SWF.__enum__ = q;
  q.MP4 = ["MP4", 17];
  q.MP4.toString = n;
  q.MP4.__enum__ = q;
  q.WEBM = ["WEBM", 18];
  q.WEBM.toString = n;
  q.WEBM.__enum__ = q;
  q.Data = ["Data", 19];
  q.Data.toString = n;
  q.Data.__enum__ = q;
  var Jd = function (a, b, c, f) {
    this.cacheKey = null;
    this.name = a;
    this.url = b;
    this.format = c;
    this.bytes = f;
  };
  l["kit.asset.AssetEntry"] = Jd;
  Jd.__name__ = ["kit", "asset", "AssetEntry"];
  Jd.prototype = {
    __class__: Jd,
  };
  var ac = function () {};
  l["kit.asset.File"] = ac;
  ac.__name__ = ["kit", "asset", "File"];
  ac.__interfaces__ = [Na];
  ac.prototype = {
    __class__: ac,
  };
  var pa = function () {
    this.$RH = this.$SH = null;
    this.pixelScale = 1;
    this.$eF = [];
  };
  l["kit.asset.Manifest"] = pa;
  pa.__name__ = ["kit", "asset", "Manifest"];
  pa.fromAssets = function (a, b, c) {
    null == c && (c = !0);
    null == b && (b = -1);
    b = 1;
    c = [];
    for (var f = la.$dN("assets"), k = 0, p = T.fields(f); k < p.length; ) {
      var d = p[k];
      ++k;
      if ($.startsWith(d, a)) {
        var e = B.substr(d, a.length, null);
        if (0 < e.length) {
          var g = new Qa("^-([\\d\\.]+)%$", "");
          g.match(e) &&
            ((e = r.parseFloat(g.matched(1))), c.push(new bc(d, e / 100)));
        } else c.push(new bc(d, 1));
      }
    }
    if (0 == c.length) return null;
    c.sort(function (a, b) {
      return T.compare(a.$XH, b.$XH);
    });
    a = null;
    for (k = 0; k < c.length && !((p = c[k]), ++k, (a = p), p.$XH >= b); );
    b = T.field(f, a.$WH);
    c = new pa();
    c.$RH = "assets";
    c.pixelScale = a.$XH;
    try {
      var h = jsembed.baseUrl();
      c.$RH = h + c.$RH;
    } catch (m) {
      m instanceof u && (m = m.val);
    }
    h = encodeURIComponent(a.$WH);
    for (f = 0; f < b.length; ) {
      a = b[f];
      ++f;
      k = a.name;
      p = h;
      d = 0;
      for (e = k.split("/"); d < e.length; )
        (g = e[d]), ++d, (p += "/" + encodeURIComponent(g));
      null != a.md5 && (p += "?v=" + r.string(a.md5));
      d = pa.$TH(k);
      d != q.Data && (k = oa.removeFileExtension(k));
      k = c.add(k, p, a.bytes, d);
      null != a.md5 && (k.cacheKey = "assets:" + r.string(a.md5));
    }
    return c;
  };
  pa.$TH = function (a) {
    a = oa.getUrlExtension(a);
    if (null != a)
      switch (a.toLowerCase()) {
        case "gif":
          return q.GIF;
        case "jpg":
        case "jpeg":
          return q.JPG;
        case "jxr":
        case "wdp":
          return q.JXR;
        case "png":
          return q.PNG;
        case "webp":
          return q.WEBP;
        case "2dkd":
          return q._2DKD;
        case "2dkp":
          return q._2DKP;
        case "2dke":
          return q._2DKE;
        case "m4a":
          return q.M4A;
        case "mp3":
          return q.MP3;
        case "ogg":
          return q.OGG;
        case "opus":
          return q.OPUS;
        case "wav":
          return q.WAV;
        case "woff":
          return q.WOFF;
        case "ttf":
          return q.TTF;
        case "otf":
          return q.OTF;
        case "swf":
          return q.SWF;
        case "mp4":
          return q.MP4;
        case "webm":
          return q.WEBM;
      }
    else null;
    return q.Data;
  };
  pa.prototype = {
    add: function (a, b, c, f) {
      null == c && (c = 0);
      null == f && (f = pa.$TH(b));
      a = new Jd(a, b, f, c);
      this.$eF.push(a);
      return a;
    },
    iterator: function () {
      return B.iter(this.$eF);
    },
    getFullURL: function (a) {
      var b;
      b = null != this.$SH && pa.$VH ? this.$SH : this.$RH;
      return null != b ? oa.joinPath(b, a.url) : a.url;
    },
    set_remoteBase: function (a) {
      return (this.$SH = a);
    },
    __class__: pa,
  };
  var bc = function (a, b) {
    this.$WH = a;
    this.$XH = b;
  };
  l.$CM = bc;
  bc.__name__ = ["$CM"];
  bc.prototype = {
    __class__: bc,
  };
  var Kd = function () {};
  l["kit.filter.FilterContext"] = Kd;
  Kd.__name__ = ["kit", "filter", "FilterContext"];
  Kd.prototype = {
    __class__: Kd,
  };
  var cc = function () {
    this.$pH = [];
    this.$oH = [];
  };
  l.$CN = cc;
  cc.__name__ = ["$CN"];
  cc.__interfaces__ = [Kd];
  cc.prototype = {
    $mH: function (a, b, c, f) {
      var k = this.$oH.pop();
      null != k ? k.$QO(c, f) : (k = new Ld(c, f));
      k.$MO = a;
      k.$NO = b;
      this.$pH.unshift(k);
      return k.$OO;
    },
    apply: function (a) {
      a.active && a.apply(this);
    },
    render: function (a) {
      this.$pH[0].$RO(a);
    },
    $nH: function () {
      var a = this.$pH.shift();
      this.$oH.push(a);
      return a.$OO;
    },
    __class__: cc,
  };
  var ta = function () {
    this.identity();
  };
  l["kit.math.Matrix"] = ta;
  ta.__name__ = ["kit", "math", "Matrix"];
  ta.multiply = function (a, b, c) {
    null == c && (c = new ta());
    var f = a.m00,
      k = a.m01,
      p = a.m02,
      d = a.m10,
      e = a.m11;
    a = a.m12;
    var g = b.m00,
      h = b.m01,
      m = b.m02,
      l = b.m10,
      n = b.m11;
    b = b.m12;
    c.m00 = f * g + k * l;
    c.m01 = f * h + k * n;
    c.m02 = f * m + k * b + p;
    c.m10 = d * g + e * l;
    c.m11 = d * h + e * n;
    c.m12 = d * m + e * b + a;
    return c;
  };
  ta.prototype = {
    set: function (a, b, c, f, k, p) {
      this.m00 = a;
      this.m01 = c;
      this.m02 = k;
      this.m10 = b;
      this.m11 = f;
      this.m12 = p;
    },
    identity: function () {
      this.set(1, 0, 0, 1, 0, 0);
    },
    compose: function (a, b, c, f, k) {
      var p = Math.sin(k);
      k = Math.cos(k);
      this.set(k * c, p * c, -p * f, k * f, a, b);
    },
    translate: function (a, b) {
      this.m02 += this.m00 * a + this.m01 * b;
      this.m12 += this.m11 * b + this.m10 * a;
    },
    invert: function () {
      var a = this.determinant();
      if (0 == a) return !1;
      this.set(
        this.m11 / a,
        -this.m10 / a,
        -this.m01 / a,
        this.m00 / a,
        (this.m01 * this.m12 - this.m11 * this.m02) / a,
        (this.m10 * this.m02 - this.m00 * this.m12) / a
      );
      return !0;
    },
    transform: function (a, b, c) {
      null == c && (c = new ab());
      c.x = a * this.m00 + b * this.m01 + this.m02;
      c.y = a * this.m10 + b * this.m11 + this.m12;
      return c;
    },
    transformArray: function (a, b, c) {
      for (var f = 0; f < b; ) {
        var k = a[f],
          p = a[f + 1];
        c[f++] = k * this.m00 + p * this.m01 + this.m02;
        c[f++] = k * this.m10 + p * this.m11 + this.m12;
      }
    },
    determinant: function () {
      return this.m00 * this.m11 - this.m01 * this.m10;
    },
    inverseTransform: function (a, b, c) {
      var f = this.determinant();
      if (0 == f) return !1;
      a -= this.m02;
      b -= this.m12;
      c.x = (a * this.m11 - b * this.m01) / f;
      c.y = (b * this.m00 - a * this.m10) / f;
      return !0;
    },
    clone: function (a) {
      null == a && (a = new ta());
      a.set(this.m00, this.m10, this.m01, this.m11, this.m02, this.m12);
      return a;
    },
    __class__: ta,
  };
  var ab = function (a, b) {
    null == b && (b = 0);
    null == a && (a = 0);
    this.x = a;
    this.y = b;
  };
  l["kit.math.Point"] = ab;
  ab.__name__ = ["kit", "math", "Point"];
  ab.prototype = {
    add: function (a, b) {
      this.x += a;
      this.y += b;
    },
    normalize: function () {
      var a = this.magnitude();
      this.x /= a;
      this.y /= a;
    },
    dot: function (a, b) {
      return this.x * a + this.y * b;
    },
    multiply: function (a) {
      this.x *= a;
      this.y *= a;
    },
    magnitude: function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    __class__: ab,
  };
  var w = function () {
    this.$HI = null;
    this.$_H = this.$AI = 0;
    this.$$H = null;
    var a = this;
    s.call(this);
    this.$ZF |= 182;
    this.$zH = new ta();
    var b = function (b, f) {
      a.$ZF |= 24;
    };
    this.x = new O(0, b);
    this.y = new O(0, b);
    this.rotation = new O(0, b);
    this.scaleX = new O(1, b);
    this.scaleY = new O(1, b);
    this.anchorX = new O(0, b);
    this.anchorY = new O(0, b);
    this.alpha = new O(1);
  };
  l["kit.display.Sprite"] = w;
  w.__name__ = ["kit", "display", "Sprite"];
  w.hitTest = function (a, b, c) {
    if (!a.active) return null;
    var f = a.$zF[1];
    if (null != f) {
      if (
        6 != (f.$ZF & 6) ||
        (null != f.$HI && null != f.$HI.$FK) ||
        !f.getLocalMatrix().inverseTransform(b, c, w.$OI)
      )
        return null;
      b = w.$OI.x;
      c = w.$OI.y;
      var k = f.get_scissor();
      if (null != k && !k.contains(b, c)) return null;
    }
    a = w.$LI(a.firstChild, b, c);
    return null != a ? a : null != f && f.containsLocal(b, c) ? f : null;
  };
  w.render = function (a, b) {
    w.$II(a, b, !0);
  };
  w.$II = function (a, b, c) {
    if (a.active) {
      var f = null,
        k = null,
        p = a.$zF[1];
      if (null != p) {
        var d = p.alpha.$bG;
        if (0 == (p.$ZF & 2) || 0 >= d) return;
        var e = p.$HI;
        if (c && null != e && null != e.$FK) return;
        b.save();
        null != e &&
          null != e.$EK &&
          0 != (p.$ZF & 128) &&
          ((c = e.$EK.owner),
          null != c && (b.beginMask(), w.$II(c, b, !1), b.endMask()));
        if (null != e) {
          var g = !1;
          c = !1;
          for (
            var h = 0, l = 0, n = 0, q = 0, r = 0, v = e.$GK;
            r < v.length;

          ) {
            var u = v[r];
            ++r;
            u.active &&
              ((g = !0),
              (c = c || !u.outputOnly),
              (h = Math.max(h, u.paddingTop)),
              (l = Math.max(l, u.paddingRight)),
              (n = Math.max(n, u.paddingBottom)),
              (q = Math.max(q, u.paddingLeft)));
          }
          if (g && m.$vG.$HG.get_filterSupported()) {
            k = p.$tH();
            g = null != k ? k.getViewMatrix() : null;
            r = p.getViewMatrix();
            k = new Ca();
            k.set(
              1.79769313486231e308,
              1.79769313486231e308,
              -1.79769313486231e308,
              -1.79769313486231e308
            );
            var t = e.$HK;
            if (null != t) {
              var v = t.x,
                u = t.y,
                s = v + t.width,
                t = u + t.height;
              s > v &&
                t > u &&
                (w.$NI(r, v, u, k),
                w.$NI(r, s, u, k),
                w.$NI(r, s, t, k),
                w.$NI(r, v, t, k));
            } else w.$MI(a, g, k);
            k.width -= k.x;
            k.height -= k.y;
            if (!k.get_empty()) {
              k.x -= q;
              k.y -= h;
              k.width += q + l;
              k.height += h + n;
              f = w.$QI.$mH(k.x, k.y, Math.ceil(k.width), Math.ceil(k.height));
              c &&
                ((f = f.get_graphics()),
                f.save(),
                f.translate(-k.x, -k.y),
                f.transform(r.m00, r.m10, r.m01, r.m11, r.m02, r.m12),
                w.$KI(p, f),
                w.$JI(a, f),
                f.restore());
              f = 0;
              for (c = e.$GK; f < c.length; ) (h = c[f]), ++f, w.$QI.apply(h);
              f = w.$QI.$nH();
              null != g &&
                ((c = g.clone(w.$PI)),
                c.invert(),
                b.transform(c.m00, c.m10, c.m01, c.m11, c.m02, c.m12));
            }
          }
        }
        1 > d && b.multiplyAlpha(d);
        null == f &&
          ((d = p.getLocalMatrix()),
          (c = d.m02),
          (h = d.m12),
          0 != (p.$ZF & 32) && ((c = Math.round(c)), (h = Math.round(h))),
          b.transform(d.m00, d.m10, d.m01, d.m11, c, h));
        null != e &&
          ((1 == e.$AK.$bG && 1 == e.$BK.$bG && 1 == e.$CK.$bG) ||
            b.tint(e.$AK.$bG, e.$BK.$bG, e.$CK.$bG),
          null != e.$$J && b.setBlendMode(e.$$J),
          (e = e.$_J),
          null != e &&
            null == f &&
            b.applyScissor(e.x, e.y, e.width, e.height));
        null == f
          ? w.$KI(p, b)
          : b.drawSubTexture(f, k.x, k.y, 0, 0, k.width, k.height);
      }
      null == f && w.$JI(a, b);
      null != p && b.restore();
    }
  };
  w.$JI = function (a, b) {
    var c = a.$zF[7];
    if (null != c)
      for (var c = c.occludedScenes, f = 0; f < c.length; ) {
        var k = c[f];
        ++f;
        w.render(k, b);
      }
    for (c = a.firstChild; null != c; ) (f = c.next), w.render(c, b), (c = f);
  };
  w.$KI = function (a, b) {
    a.draw(b);
    var c = a.$HI;
    null != c && null != c.$DK && c.$DK.render(b);
  };
  w.$LI = function (a, b, c) {
    if (null != a) {
      var f = w.$LI(a.next, b, c);
      return null != f ? f : w.hitTest(a, b, c);
    }
    return null;
  };
  w.$MI = function (a, b, c) {
    if (a.active) {
      var f = a.$zF[1];
      if (null != f) {
        if (0 == (f.$ZF & 2) || (null != f.$HI && null != f.$HI.$FK))
          return null;
        b = null != b ? ta.multiply(b, f.getLocalMatrix()) : f.getLocalMatrix();
        var k = f.getNaturalWidth(),
          f = f.getNaturalHeight();
        0 < k &&
          0 < f &&
          (w.$NI(b, 0, 0, c),
          w.$NI(b, k, 0, c),
          w.$NI(b, k, f, c),
          w.$NI(b, 0, f, c));
      }
      k = a.$zF[7];
      if (null != k)
        for (var k = k.occludedScenes, f = 0, p = k.length; f < p; )
          w.$MI(k[f], b, c), ++f;
      for (a = a.firstChild; null != a; ) (k = a.next), w.$MI(a, b, c), (a = k);
    }
  };
  w.$NI = function (a, b, c, f) {
    a = a.transform(b, c, w.$OI);
    b = a.x;
    c = a.y;
    b < f.x && (f.x = b);
    c < f.y && (f.y = c);
    b > f.width && (f.width = b);
    c > f.height && (f.height = c);
  };
  w.__super__ = s;
  w.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 1;
    },
    getNaturalWidth: function () {
      return 0;
    },
    getNaturalHeight: function () {
      return 0;
    },
    containsLocal: function (a, b) {
      return (
        0 <= a &&
        a < this.getNaturalWidth() &&
        0 <= b &&
        b < this.getNaturalHeight()
      );
    },
    getLocalMatrix: function () {
      0 != (this.$ZF & 8) &&
        ((this.$ZF &= -9),
        this.$zH.compose(
          this.x.$bG,
          this.y.$bG,
          this.scaleX.$bG,
          this.scaleY.$bG,
          (3.141592653589793 * this.rotation.$bG) / 180
        ),
        this.$zH.translate(-this.anchorX.$bG, -this.anchorY.$bG));
      return this.$zH;
    },
    getViewMatrix: function () {
      if (this.$sH()) {
        var a = this.$tH();
        this.$$H =
          null != a
            ? ta.multiply(a.getViewMatrix(), this.getLocalMatrix(), this.$$H)
            : this.getLocalMatrix().clone(this.$$H);
        this.$ZF &= -17;
        null != a && (this.$AI = a.$_H);
        ++this.$_H;
      }
      return this.$$H;
    },
    setAnchor: function (a, b) {
      this.anchorX.set__(a);
      this.anchorY.set__(b);
      return this;
    },
    centerAnchor: function () {
      this.anchorX.set__(this.getNaturalWidth() / 2);
      this.anchorY.set__(this.getNaturalHeight() / 2);
      return this;
    },
    setXY: function (a, b) {
      this.x.set__(a);
      this.y.set__(b);
      return this;
    },
    setTint: function (a) {
      if (null != this.$HI || 16777215 != a)
        this.get_tintR().set__((a & 16711680) / 16711680),
          this.get_tintG().set__((a & 65280) / 65280),
          this.get_tintB().set__((a & 255) / 255);
      return this;
    },
    setScale: function (a) {
      this.scaleX.set__(a);
      this.scaleY.set__(a);
      return this;
    },
    setScaleXY: function (a, b) {
      this.scaleX.set__(a);
      this.scaleY.set__(b);
      return this;
    },
    onAdded: function () {
      0 != (this.$ZF & 64) && this.$uH();
    },
    onRemoved: function () {
      null != this.$GI && (this.$GI.dispose(), (this.$GI = null));
    },
    onUpdate: function (a) {
      this.x.update(a);
      this.y.update(a);
      this.rotation.update(a);
      this.scaleX.update(a);
      this.scaleY.update(a);
      this.alpha.update(a);
      this.anchorX.update(a);
      this.anchorY.update(a);
      var b = this.$HI;
      if (null != b) {
        b.$AK.update(a);
        b.$BK.update(a);
        b.$CK.update(a);
        for (var c = 0, b = b.$GK; c < b.length; ) {
          var f = b[c];
          ++c;
          f.active && f.update(a);
        }
      }
    },
    draw: function (a) {},
    $sH: function () {
      if (0 != (this.$ZF & 16)) return !0;
      var a = this.$tH();
      return null == a ? !1 : this.$AI != a.$_H || a.$sH();
    },
    $tH: function () {
      if (null == this.owner) return null;
      for (var a = this.owner.parent; null != a; ) {
        var b = a.$zF[1];
        if (null != b) return b;
        a = a.parent;
      }
      return null;
    },
    get_pointerDown: function () {
      null == this.$BI && (this.$BI = new R());
      return this.$BI;
    },
    get_pointerIn: function () {
      null == this.$EI && (this.$EI = new R());
      return this.$EI;
    },
    get_pointerOut: function () {
      null == this.$FI && (this.$FI = new R());
      return this.$FI;
    },
    $uH: function () {
      var a = this;
      null == this.$GI &&
        m.$vG.$AG.$RQ(function () {
          a.$GI = m.$vG.$GG.move.connect(function (b) {
            for (var c = b.hit; null != c; ) {
              if (c == a) return;
              c = c.$tH();
            }
            null != a.$FI && 0 != (a.$ZF & 64) && a.$FI.emit(b);
            a.$ZF &= -65;
            null != a.$GI && (a.$GI.dispose(), (a.$GI = null));
          });
        });
    },
    get_blendMode: function () {
      return null != this.$HI ? this.$HI.$$J : null;
    },
    set_blendMode: function (a) {
      if (null == this.$HI) {
        if (null == a) return null;
        this.$HI = new Oa();
      }
      return (this.$HI.$$J = a);
    },
    get_scissor: function () {
      return null != this.$HI ? this.$HI.$_J : null;
    },
    set_scissor: function (a) {
      if (null == this.$HI) {
        if (null == a) return null;
        this.$HI = new Oa();
      }
      return (this.$HI.$_J = a);
    },
    get_tintR: function () {
      null == this.$HI && (this.$HI = new Oa());
      return this.$HI.$AK;
    },
    get_tintG: function () {
      null == this.$HI && (this.$HI = new Oa());
      return this.$HI.$BK;
    },
    get_tintB: function () {
      null == this.$HI && (this.$HI = new Oa());
      return this.$HI.$CK;
    },
    set_mask: function (a) {
      if (null == this.$HI) {
        if (null == a) return null;
        this.$HI = new Oa();
      }
      var b = this.$HI.$EK;
      if (null != b && ((b = b.$HI), null != b && null != b.$FK)) {
        var c = b.$FK;
        b.$FK = null;
        c.set_mask(null);
      }
      null != a &&
        ((b = a.$HI),
        null == b && (b = a.$HI = new Oa()),
        null != b.$FK && b.$FK.set_mask(null),
        (b.$FK = this));
      return (this.$HI.$EK = a);
    },
    set_maskEnabled: function (a) {
      this.$ZF = gb.set(this.$ZF, 128, a);
      return a;
    },
    set_visible: function (a) {
      this.$ZF = gb.set(this.$ZF, 2, a);
      return a;
    },
    set_pointerEnabled: function (a) {
      this.$ZF = gb.set(this.$ZF, 4, a);
      return a;
    },
    set_pixelSnapping: function (a) {
      this.$ZF = gb.set(this.$ZF, 32, a);
      return a;
    },
    $vH: function (a) {
      this.$xH(a);
      null != this.$BI && this.$BI.emit(a);
    },
    $wH: function (a) {
      this.$xH(a);
      null != this.$CI && this.$CI.emit(a);
    },
    $xH: function (a) {
      0 == (this.$ZF & 64) &&
        ((this.$ZF |= 64), null != this.$EI || null != this.$FI) &&
        (null != this.$EI && this.$EI.emit(a), this.$uH());
    },
    $yH: function (a) {
      switch (a.source[1]) {
        case 1:
          null != this.$FI && 0 != (this.$ZF & 64) && this.$FI.emit(a),
            (this.$ZF &= -65),
            null != this.$GI && (this.$GI.dispose(), (this.$GI = null));
      }
      null != this.$DI && this.$DI.emit(a);
    },
    __class__: w,
  });
  var Ca = function (a, b, c, f) {
    null == f && (f = 0);
    null == c && (c = 0);
    null == b && (b = 0);
    null == a && (a = 0);
    this.set(a, b, c, f);
  };
  l["kit.math.Rectangle"] = Ca;
  Ca.__name__ = ["kit", "math", "Rectangle"];
  Ca.prototype = {
    set: function (a, b, c, f) {
      this.x = a;
      this.y = b;
      this.width = c;
      this.height = f;
    },
    contains: function (a, b) {
      a -= this.x;
      if (0 <= this.width) {
        if (0 > a || a > this.width) return !1;
      } else if (0 < a || a < this.width) return !1;
      b -= this.y;
      if (0 <= this.height) {
        if (0 > b || b > this.height) return !1;
      } else if (0 < b || b < this.height) return !1;
      return !0;
    },
    clone: function (a) {
      null == a && (a = new Ca());
      a.set(this.x, this.y, this.width, this.height);
      return a;
    },
    equals: function (a) {
      return (
        this.x == a.x &&
        this.y == a.y &&
        this.width == a.width &&
        this.height == a.height
      );
    },
    get_empty: function () {
      return 0 >= this.width || 0 >= this.height;
    },
    __class__: Ca,
  };
  var sb = function () {
    s.call(this);
    this.$TD();
  };
  l["kit.debug.FpsDisplay"] = sb;
  sb.__name__ = ["kit", "debug", "FpsDisplay"];
  sb.__super__ = s;
  sb.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 15;
    },
    onUpdate: function (a) {
      ++this.$tI;
      this.$uI += a;
      if (1 < this.$uI) {
        a = "FPS: " + Math.round((100 * this.$tI) / this.$uI) / 100;
        var b = r.instance(this.owner.$zF[1], I);
        null != b ? b.set_text(a) : null;
        this.$TD();
      }
    },
    $TD: function () {
      this.$uI = this.$tI = 0;
    },
    __class__: sb,
  });
  var L = (l["kit.display.BlendMode"] = {
    __ename__: ["kit", "display", "BlendMode"],
    __constructs__: "Normal Add Multiply Screen Mask Copy".split(" "),
  });
  L.Normal = ["Normal", 0];
  L.Normal.toString = n;
  L.Normal.__enum__ = L;
  L.Add = ["Add", 1];
  L.Add.toString = n;
  L.Add.__enum__ = L;
  L.Multiply = ["Multiply", 2];
  L.Multiply.toString = n;
  L.Multiply.__enum__ = L;
  L.Screen = ["Screen", 3];
  L.Screen.toString = n;
  L.Screen.__enum__ = L;
  L.Mask = ["Mask", 4];
  L.Mask.toString = n;
  L.Mask.__enum__ = L;
  L.Copy = ["Copy", 5];
  L.Copy.toString = n;
  L.Copy.__enum__ = L;
  var dc = function () {};
  l["kit.display.Graphics"] = dc;
  dc.__name__ = ["kit", "display", "Graphics"];
  dc.prototype = {
    __class__: dc,
  };
  var Md = function () {
    this.$wI = [];
  };
  l["kit.display.BufferedGraphics"] = Md;
  Md.__name__ = ["kit", "display", "BufferedGraphics"];
  Md.__interfaces__ = [dc];
  Md.prototype = {
    save: function () {
      this.$vI(new ec());
    },
    translate: function (a, b) {
      this.$vI(new fc(a, b));
    },
    scale: function (a, b) {
      this.$vI(new gc(a, b));
    },
    rotate: function (a) {
      this.$vI(new hc(a));
    },
    transform: function (a, b, c, f, k, p) {
      this.$vI(new ic(a, b, c, f, k, p));
    },
    multiplyAlpha: function (a) {
      this.$vI(new jc(a));
    },
    setAlpha: function (a) {
      this.$vI(new kc(a));
    },
    tint: function (a, b, c) {
      this.$vI(new lc(a, b, c));
    },
    setBlendMode: function (a) {
      this.$vI(new mc(a));
    },
    beginMask: function () {
      this.$vI(new nc());
    },
    endMask: function () {
      this.$vI(new oc());
    },
    applyScissor: function (a, b, c, f) {
      this.$vI(new pc(a, b, c, f));
    },
    restore: function () {
      this.$vI(new qc());
    },
    drawTexture: function (a, b, c) {
      this.$vI(new rc(a, b, c));
    },
    drawSubTexture: function (a, b, c, f, k, p, d) {
      this.$vI(new sc(a, b, c, f, k, p, d));
    },
    drawPattern: function (a, b, c, f, k) {
      this.$vI(new tc(a, b, c, f, k));
    },
    fillRect: function (a, b, c, f, k) {
      this.$vI(new uc(a, b, c, f, k));
    },
    fillTriangles: function (a, b, c) {
      this.$vI(new vc(a, b.slice(), c.slice()));
    },
    drawTriangles: function (a, b, c, f) {
      this.$vI(new wc(a, b.slice(), c.slice(), null != f ? f.slice() : null));
    },
    fillPolygon: function (a, b) {
      this.$vI(new xc(a, b.slice()));
    },
    drawPolygon: function (a, b) {
      this.$vI(new yc(a, b.slice()));
    },
    drawCircle: function (a, b, c, f, k) {
      null == k && (k = 50);
      this.$vI(new zc(a, b, c, f, k));
    },
    fillCircle: function (a, b, c, f, k) {
      null == k && (k = 50);
      this.$vI(new Ac(a, b, c, f, k));
    },
    strokeCircle: function (a, b, c, f, k, p) {
      null == p && (p = 50);
      this.$vI(new Bc(a, b, c, f, k, p));
    },
    drawEllipse: function (a, b, c, f, k, p) {
      null == p && (p = 50);
      this.$vI(new Cc(a, b, c, f, k, p));
    },
    fillEllipse: function (a, b, c, f, k, p) {
      null == p && (p = 50);
      this.$vI(new Dc(a, b, c, f, k, p));
    },
    strokeEllipse: function (a, b, c, f, k, p, d) {
      null == d && (d = 50);
      this.$vI(new Ec(a, b, c, f, k, p, d));
    },
    fillArc: function (a, b, c, f, k, p, d) {
      null == d && (d = 50);
      this.$vI(new Fc(a, b, c, f, k, p, d));
    },
    strokeArc: function (a, b, c, f, k, p, d, e) {
      null == e && (e = 50);
      this.$vI(new Gc(a, b, c, f, k, p, d, e));
    },
    strokeLines: function (a, b, c) {
      this.$vI(new Hc(a, b.slice(), c));
    },
    drawLines: function (a, b, c) {
      this.$vI(new Ic(a, b.slice(), c));
    },
    render: function (a) {
      for (var b = this.$wI.length, c = 0; c < b; ) {
        var f = c++;
        this.$wI[f].$xI(a);
      }
    },
    $vI: function (a) {
      this.$wI.push(a);
    },
    __class__: Md,
  };
  var y = function () {};
  l.$CP = y;
  y.__name__ = ["$CP"];
  y.prototype = {
    $xI: function (a) {},
    __class__: y,
  };
  var ec = function () {};
  l.$CQ = ec;
  ec.__name__ = ["$CQ"];
  ec.__super__ = y;
  ec.prototype = v(y.prototype, {
    $xI: function (a) {
      a.save();
    },
    __class__: ec,
  });
  var fc = function (a, b) {
    this.$yI = a;
    this.$zI = b;
  };
  l.$CR = fc;
  fc.__name__ = ["$CR"];
  fc.__super__ = y;
  fc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.translate(this.$yI, this.$zI);
    },
    __class__: fc,
  });
  var gc = function (a, b) {
    this.$yI = a;
    this.$zI = b;
  };
  l.$CS = gc;
  gc.__name__ = ["$CS"];
  gc.__super__ = y;
  gc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.scale(this.$yI, this.$zI);
    },
    __class__: gc,
  });
  var hc = function (a) {
    this.$$I = a;
  };
  l.$CT = hc;
  hc.__name__ = ["$CT"];
  hc.__super__ = y;
  hc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.rotate(this.$$I);
    },
    __class__: hc,
  });
  var ic = function (a, b, c, f, k, p) {
    this.$_I = a;
    this.$AJ = b;
    this.$BJ = c;
    this.$CJ = f;
    this.$DJ = k;
    this.$EJ = p;
  };
  l.$CU = ic;
  ic.__name__ = ["$CU"];
  ic.__super__ = y;
  ic.prototype = v(y.prototype, {
    $xI: function (a) {
      a.transform(this.$_I, this.$AJ, this.$BJ, this.$CJ, this.$DJ, this.$EJ);
    },
    __class__: ic,
  });
  var jc = function (a) {
    this.$FJ = a;
  };
  l.$CV = jc;
  jc.__name__ = ["$CV"];
  jc.__super__ = y;
  jc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.multiplyAlpha(this.$FJ);
    },
    __class__: jc,
  });
  var kc = function (a) {
    this.$GJ = a;
  };
  l.$CW = kc;
  kc.__name__ = ["$CW"];
  kc.__super__ = y;
  kc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.setAlpha(this.$GJ);
    },
    __class__: kc,
  });
  var lc = function (a, b, c) {
    this.$HJ = a;
    this.$IJ = b;
    this.$JJ = c;
  };
  l.$CX = lc;
  lc.__name__ = ["$CX"];
  lc.__super__ = y;
  lc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.tint(this.$HJ, this.$IJ, this.$JJ);
    },
    __class__: lc,
  });
  var mc = function (a) {
    this.$KJ = a;
  };
  l.$CY = mc;
  mc.__name__ = ["$CY"];
  mc.__super__ = y;
  mc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.setBlendMode(this.$KJ);
    },
    __class__: mc,
  });
  var pc = function (a, b, c, f) {
    this.$yI = a;
    this.$zI = b;
    this.$LJ = c;
    this.$MJ = f;
  };
  l.$CZ = pc;
  pc.__name__ = ["$CZ"];
  pc.__super__ = y;
  pc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.applyScissor(this.$yI, this.$zI, this.$LJ, this.$MJ);
    },
    __class__: pc,
  });
  var nc = function () {};
  l.$Ca = nc;
  nc.__name__ = ["$Ca"];
  nc.__super__ = y;
  nc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.beginMask();
    },
    __class__: nc,
  });
  var oc = function () {};
  l.$Cb = oc;
  oc.__name__ = ["$Cb"];
  oc.__super__ = y;
  oc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.endMask();
    },
    __class__: oc,
  });
  var qc = function () {};
  l.$Cc = qc;
  qc.__name__ = ["$Cc"];
  qc.__super__ = y;
  qc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.restore();
    },
    __class__: qc,
  });
  var rc = function (a, b, c) {
    this.$NJ = a;
    this.$OJ = b;
    this.$PJ = c;
  };
  l.$Cd = rc;
  rc.__name__ = ["$Cd"];
  rc.__super__ = y;
  rc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.drawTexture(this.$NJ, this.$OJ, this.$PJ);
    },
    __class__: rc,
  });
  var sc = function (a, b, c, f, k, p, d) {
    this.$NJ = a;
    this.$OJ = b;
    this.$PJ = c;
    this.$QJ = f;
    this.$RJ = k;
    this.$SJ = p;
    this.$TJ = d;
  };
  l.$Ce = sc;
  sc.__name__ = ["$Ce"];
  sc.__super__ = y;
  sc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.drawSubTexture(
        this.$NJ,
        this.$OJ,
        this.$PJ,
        this.$QJ,
        this.$RJ,
        this.$SJ,
        this.$TJ
      );
    },
    __class__: sc,
  });
  var tc = function (a, b, c, f, k) {
    this.$NJ = a;
    this.$OJ = b;
    this.$PJ = c;
    this.$LJ = f;
    this.$MJ = k;
  };
  l.$Cf = tc;
  tc.__name__ = ["$Cf"];
  tc.__super__ = y;
  tc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.drawPattern(this.$NJ, this.$OJ, this.$PJ, this.$LJ, this.$MJ);
    },
    __class__: tc,
  });
  var vc = function (a, b, c) {
    this.$UJ = a;
    this.$VJ = b;
    this.$WJ = c;
  };
  l.$Cg = vc;
  vc.__name__ = ["$Cg"];
  vc.__super__ = y;
  vc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.fillTriangles(this.$UJ, this.$VJ, this.$WJ);
    },
    __class__: vc,
  });
  var wc = function (a, b, c, f) {
    this.$NJ = a;
    this.$VJ = b;
    this.$WJ = c;
    this.$XJ = f;
  };
  l.$Ch = wc;
  wc.__name__ = ["$Ch"];
  wc.__super__ = y;
  wc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.drawTriangles(this.$NJ, this.$VJ, this.$WJ, this.$XJ);
    },
    __class__: wc,
  });
  var xc = function (a, b) {
    this.$UJ = a;
    this.$VJ = b;
  };
  l.$Ci = xc;
  xc.__name__ = ["$Ci"];
  xc.__super__ = y;
  xc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.fillPolygon(this.$UJ, this.$VJ);
    },
    __class__: xc,
  });
  var yc = function (a, b) {
    this.$NJ = a;
    this.$VJ = b;
  };
  l.$Cj = yc;
  yc.__name__ = ["$Cj"];
  yc.__super__ = y;
  yc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.drawPolygon(this.$NJ, this.$VJ);
    },
    __class__: yc,
  });
  var zc = function (a, b, c, f, k) {
    this.$NJ = a;
    this.$YJ = b;
    this.$ZJ = c;
    this.$aJ = f;
    this.$bJ = k;
  };
  l.$Ck = zc;
  zc.__name__ = ["$Ck"];
  zc.__super__ = y;
  zc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.drawCircle(this.$NJ, this.$YJ, this.$ZJ, this.$aJ, this.$bJ);
    },
    __class__: zc,
  });
  var Ac = function (a, b, c, f, k) {
    this.$UJ = a;
    this.$YJ = b;
    this.$ZJ = c;
    this.$aJ = f;
    this.$bJ = k;
  };
  l.$Cl = Ac;
  Ac.__name__ = ["$Cl"];
  Ac.__super__ = y;
  Ac.prototype = v(y.prototype, {
    $xI: function (a) {
      a.fillCircle(this.$UJ, this.$YJ, this.$ZJ, this.$aJ, this.$bJ);
    },
    __class__: Ac,
  });
  var Bc = function (a, b, c, f, k, p) {
    this.$UJ = a;
    this.$YJ = b;
    this.$ZJ = c;
    this.$aJ = f;
    this.$cJ = k;
    this.$bJ = p;
  };
  l.$Cm = Bc;
  Bc.__name__ = ["$Cm"];
  Bc.__super__ = y;
  Bc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.strokeCircle(
        this.$UJ,
        this.$YJ,
        this.$ZJ,
        this.$aJ,
        this.$cJ,
        this.$bJ
      );
    },
    __class__: Bc,
  });
  var Dc = function (a, b, c, f, k, p) {
    this.$UJ = a;
    this.$YJ = b;
    this.$ZJ = c;
    this.$dJ = f;
    this.$eJ = k;
    this.$bJ = p;
  };
  l.$Cn = Dc;
  Dc.__name__ = ["$Cn"];
  Dc.__super__ = y;
  Dc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.fillEllipse(this.$UJ, this.$YJ, this.$ZJ, this.$dJ, this.$eJ, this.$bJ);
    },
    __class__: Dc,
  });
  var Cc = function (a, b, c, f, k, p) {
    this.$NJ = a;
    this.$YJ = b;
    this.$ZJ = c;
    this.$dJ = f;
    this.$eJ = k;
    this.$bJ = p;
  };
  l.$Co = Cc;
  Cc.__name__ = ["$Co"];
  Cc.__super__ = y;
  Cc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.drawEllipse(this.$NJ, this.$YJ, this.$ZJ, this.$dJ, this.$eJ, this.$bJ);
    },
    __class__: Cc,
  });
  var Ec = function (a, b, c, f, k, p, d) {
    this.$UJ = a;
    this.$YJ = b;
    this.$ZJ = c;
    this.$dJ = f;
    this.$eJ = k;
    this.$cJ = p;
    this.$bJ = d;
  };
  l.$Cp = Ec;
  Ec.__name__ = ["$Cp"];
  Ec.__super__ = y;
  Ec.prototype = v(y.prototype, {
    $xI: function (a) {
      a.strokeEllipse(
        this.$UJ,
        this.$YJ,
        this.$ZJ,
        this.$dJ,
        this.$eJ,
        this.$cJ,
        this.$bJ
      );
    },
    __class__: Ec,
  });
  var Fc = function (a, b, c, f, k, p, d) {
    this.$UJ = a;
    this.$YJ = b;
    this.$ZJ = c;
    this.$aJ = f;
    this.$fJ = k;
    this.$gJ = p;
    this.$bJ = d;
  };
  l.$Cq = Fc;
  Fc.__name__ = ["$Cq"];
  Fc.__super__ = y;
  Fc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.fillArc(
        this.$UJ,
        this.$YJ,
        this.$ZJ,
        this.$aJ,
        this.$fJ,
        this.$gJ,
        this.$bJ
      );
    },
    __class__: Fc,
  });
  var Gc = function (a, b, c, f, k, p, d, e) {
    this.$UJ = a;
    this.$YJ = b;
    this.$ZJ = c;
    this.$aJ = f;
    this.$fJ = k;
    this.$gJ = p;
    this.$cJ = d;
    this.$bJ = e;
  };
  l.$Cr = Gc;
  Gc.__name__ = ["$Cr"];
  Gc.__super__ = y;
  Gc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.strokeArc(
        this.$UJ,
        this.$YJ,
        this.$ZJ,
        this.$aJ,
        this.$fJ,
        this.$gJ,
        this.$cJ,
        this.$bJ
      );
    },
    __class__: Gc,
  });
  var Hc = function (a, b, c) {
    this.$UJ = a;
    this.$VJ = b;
    this.$hJ = c;
  };
  l.$Cs = Hc;
  Hc.__name__ = ["$Cs"];
  Hc.__super__ = y;
  Hc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.strokeLines(this.$UJ, this.$VJ, this.$hJ);
    },
    __class__: Hc,
  });
  var Ic = function (a, b, c) {
    this.$NJ = a;
    this.$VJ = b;
    this.$hJ = c;
  };
  l.$Ct = Ic;
  Ic.__name__ = ["$Ct"];
  Ic.__super__ = y;
  Ic.prototype = v(y.prototype, {
    $xI: function (a) {
      a.drawLines(this.$NJ, this.$VJ, this.$hJ);
    },
    __class__: Ic,
  });
  var uc = function (a, b, c, f, k) {
    this.$UJ = a;
    this.$yI = b;
    this.$zI = c;
    this.$LJ = f;
    this.$MJ = k;
  };
  l.$Cu = uc;
  uc.__name__ = ["$Cu"];
  uc.__super__ = y;
  uc.prototype = v(y.prototype, {
    $xI: function (a) {
      a.fillRect(this.$UJ, this.$yI, this.$zI, this.$LJ, this.$MJ);
    },
    __class__: uc,
  });
  var Y = function (a, b, c) {
    w.call(this);
    this.color = a;
    this.width = new O(b);
    this.height = new O(c);
  };
  l["kit.display.FillSprite"] = Y;
  Y.__name__ = ["kit", "display", "FillSprite"];
  Y.__super__ = w;
  Y.prototype = v(w.prototype, {
    draw: function (a) {
      a.fillRect(this.color, 0, 0, this.width.$bG, this.height.$bG);
    },
    getNaturalWidth: function () {
      return this.width.$bG;
    },
    getNaturalHeight: function () {
      return this.height.$bG;
    },
    setSize: function (a, b) {
      this.width.set__(a);
      this.height.set__(b);
      return this;
    },
    onUpdate: function (a) {
      w.prototype.onUpdate.call(this, a);
      this.width.update(a);
      this.height.update(a);
    },
    __class__: Y,
  });
  var Jc = function (a) {
    this.$jJ = null;
    this.xOffset = this.yOffset = this.xAdvance = 0;
    this.page = null;
    this.x = this.y = this.width = this.height = 0;
    this.charCode = a;
  };
  l["kit.display.Glyph"] = Jc;
  Jc.__name__ = ["kit", "display", "Glyph"];
  Jc.prototype = {
    draw: function (a, b, c) {
      0 < this.width &&
        a.drawSubTexture(
          this.page,
          b + this.xOffset,
          c + this.yOffset,
          this.x,
          this.y,
          this.width,
          this.height
        );
    },
    getKerning: function (a) {
      return null != this.$jJ ? r["int"](this.$jJ.h[a]) : 0;
    },
    $iJ: function (a, b) {
      null == this.$jJ && (this.$jJ = new va());
      this.$jJ.h[a] = b;
    },
    __class__: Jc,
  };
  var ba = function (a, b) {
    this.name = b;
    this.$eI = a;
    this.$iH = a.getFile(b + ".fnt");
    this.$fH();
  };
  l["kit.display.Font"] = ba;
  ba.__name__ = ["kit", "display", "Font"];
  ba.prototype = {
    layoutText: function (a, b, c, f, k) {
      null == k && (k = 0);
      null == f && (f = 0);
      null == c && (c = 0);
      null == b && (b = da.Left);
      return new bb(this, a, b, c, f, k);
    },
    $fH: function () {
      this.$kJ = new va();
      this.$kJ.h[ba.$lJ.charCode] = ba.$lJ;
      for (
        var a = new hb(this.$iH.toString()),
          b = new va(),
          c = this.name.lastIndexOf("/"),
          c = 0 <= c ? B.substr(this.name, 0, c + 1) : "",
          f = a.$qJ();
        f.hasNext();

      )
        switch (f.next()) {
          case "info":
            for (var k = a.$rJ(); k.hasNext(); ) {
              var p = k.next();
              switch (p.$xJ) {
                case "size":
                  this.size = p.$yJ();
                  break;
                case "face":
                  this.typeface = p.$zJ();
              }
            }
            break;
          case "common":
            for (k = a.$rJ(); k.hasNext(); )
              switch (((p = k.next()), p.$xJ)) {
                case "lineHeight":
                  this.lineHeight = p.$yJ();
              }
            break;
          case "page":
            for (var k = 0, p = null, d = a.$rJ(); d.hasNext(); ) {
              var e = d.next();
              switch (e.$xJ) {
                case "id":
                  k = e.$yJ();
                  break;
                case "file":
                  p = e.$zJ();
              }
            }
            p = this.$eI.getTexture(c + oa.removeFileExtension(p));
            b.h[k] = p;
            break;
          case "char":
            k = null;
            for (p = a.$rJ(); p.hasNext(); )
              switch (((d = p.next()), d.$xJ)) {
                case "id":
                  k = new Jc(d.$yJ());
                  break;
                case "x":
                  k.x = d.$yJ();
                  break;
                case "y":
                  k.y = d.$yJ();
                  break;
                case "width":
                  k.width = d.$yJ();
                  break;
                case "height":
                  k.height = d.$yJ();
                  break;
                case "page":
                  d = d.$yJ();
                  k.page = b.h[d];
                  break;
                case "xoffset":
                  k.xOffset = d.$yJ();
                  break;
                case "yoffset":
                  k.yOffset = d.$yJ();
                  break;
                case "xadvance":
                  k.xAdvance = d.$yJ();
              }
            this.$kJ.h[k.charCode] = k;
            break;
          case "kerning":
            e = null;
            p = k = 0;
            for (d = a.$rJ(); d.hasNext(); ) {
              var g = d.next();
              switch (g.$xJ) {
                case "first":
                  e = g.$yJ();
                  e = this.$kJ.h[e];
                  break;
                case "second":
                  k = g.$yJ();
                  break;
                case "amount":
                  p = g.$yJ();
              }
            }
            null != e && 0 != p && e.$iJ(k, p);
        }
    },
    __class__: ba,
  };
  var da = (l["kit.display.TextAlign"] = {
    __ename__: ["kit", "display", "TextAlign"],
    __constructs__: ["Left", "Center", "Right"],
  });
  da.Left = ["Left", 0];
  da.Left.toString = n;
  da.Left.__enum__ = da;
  da.Center = ["Center", 1];
  da.Center.toString = n;
  da.Center.__enum__ = da;
  da.Right = ["Right", 2];
  da.Right.toString = n;
  da.Right.__enum__ = da;
  var bb = function (a, b, c, f, k, p) {
    this.lines = 0;
    var d = this;
    this.$mJ = a;
    this.$kJ = [];
    this.$nJ = [];
    this.$oJ = Math.round(a.lineHeight + p);
    this.bounds = new Ca();
    var e = [];
    p = b.length;
    for (var g = 0; g < p; ) {
      var h = g++,
        h = b.charCodeAt(h),
        h = a.$kJ.h[h];
      null != h ? this.$kJ.push(h) : null;
    }
    b = -1;
    var m = 0,
      l = 0;
    a = a.$kJ.h[10];
    p = function () {
      d.bounds.width = ha.max(d.bounds.width, m);
      d.bounds.height += l;
      e[d.lines] = m;
      l = m = 0;
      ++d.lines;
    };
    for (g = 0; g < this.$kJ.length; ) {
      h = this.$kJ[g];
      this.$nJ[g] = Math.round(m);
      var n = 0 < f && m + h.width > f;
      n || h == a
        ? (n &&
            (0 <= b
              ? ((this.$kJ[b] = a), (m = this.$nJ[b]), (g = b))
              : this.$kJ.splice(g, 0, a)),
          (b = -1),
          (l = this.$oJ),
          p())
        : (32 == h.charCode && (b = g),
          (m += h.xAdvance + k),
          (l = ha.max(l, h.height + h.yOffset)),
          g + 1 < this.$kJ.length &&
            (m += h.getKerning(this.$kJ[g + 1].charCode)));
      ++g;
    }
    p();
    k = 0;
    a = bb.$pJ(c, e[0], f);
    b = 1.79769313486231e308;
    p = -1.79769313486231e308;
    h = g = 0;
    for (n = this.$kJ.length; h < n; ) {
      var q = this.$kJ[h];
      10 == q.charCode && ((k += this.$oJ), ++g, (a = bb.$pJ(c, e[g], f)));
      this.$nJ[h] += a;
      var r = k + q.yOffset;
      b = b < r ? b : r;
      p = ha.max(p, r + q.height);
      ++h;
    }
    this.bounds.x = bb.$pJ(c, this.bounds.width, f);
    this.bounds.y = b;
    this.bounds.height = p - b;
  };
  l["kit.display.TextLayout"] = bb;
  bb.__name__ = ["kit", "display", "TextLayout"];
  bb.$pJ = function (a, b, c) {
    switch (a[1]) {
      case 0:
        return 0;
      case 2:
        return c - b;
      case 1:
        return Math.round((c - b) / 2);
    }
  };
  bb.prototype = {
    draw: function (a) {
      for (var b = 0, c = 0, f = this.$kJ.length; c < f; ) {
        var k = this.$kJ[c];
        10 == k.charCode ? (b += this.$oJ) : k.draw(a, this.$nJ[c], b);
        ++c;
      }
    },
    __class__: bb,
  };
  var hb = function (a) {
    this.$sJ = a;
    this.$uJ = new Qa("([A-Za-z]+)(.*)", "");
    this.$vJ = new Qa('([A-Za-z]+)=("[^"]*"|[^\\s]+)', "");
  };
  l.$Cv = hb;
  hb.__name__ = ["$Cv"];
  hb.$wJ = function (a, b) {
    var c = b.matchedPos();
    return B.substr(a, c.pos + c.len, a.length);
  };
  hb.prototype = {
    $qJ: function () {
      var a = this,
        b = this.$sJ;
      return {
        next: function () {
          b = hb.$wJ(b, a.$uJ);
          a.$tJ = a.$uJ.matched(2);
          return a.$uJ.matched(1);
        },
        hasNext: function () {
          return a.$uJ.match(b);
        },
      };
    },
    $rJ: function () {
      var a = this,
        b = this.$tJ;
      return {
        next: function () {
          b = hb.$wJ(b, a.$vJ);
          return new Nd(a.$vJ.matched(1), a.$vJ.matched(2));
        },
        hasNext: function () {
          return a.$vJ.match(b);
        },
      };
    },
    __class__: hb,
  };
  var Nd = function (a, b) {
    this.$xJ = a;
    this.$bG = b;
  };
  l.$Cw = Nd;
  Nd.__name__ = ["$Cw"];
  Nd.prototype = {
    $yJ: function () {
      return r.parseInt(this.$bG);
    },
    $zJ: function () {
      return 34 != this.$bG.charCodeAt(0)
        ? null
        : B.substr(this.$bG, 1, this.$bG.length - 2);
    },
    __class__: Nd,
  };
  var N = function (a) {
    w.call(this);
    this.texture = a;
  };
  l["kit.display.ImageSprite"] = N;
  N.__name__ = ["kit", "display", "ImageSprite"];
  N.__super__ = w;
  N.prototype = v(w.prototype, {
    draw: function (a) {
      null != this.texture && a.drawTexture(this.texture, 0, 0);
    },
    getNaturalWidth: function () {
      return null != this.texture ? this.texture.get_width() : 0;
    },
    getNaturalHeight: function () {
      return null != this.texture ? this.texture.get_height() : 0;
    },
    __class__: N,
  });
  var Ha = (l["kit.display.Orientation"] = {
    __ename__: ["kit", "display", "Orientation"],
    __constructs__: ["Portrait", "Landscape"],
  });
  Ha.Portrait = ["Portrait", 0];
  Ha.Portrait.toString = n;
  Ha.Portrait.__enum__ = Ha;
  Ha.Landscape = ["Landscape", 1];
  Ha.Landscape.toString = n;
  Ha.Landscape.__enum__ = Ha;
  var Oa = function () {
    this.$HK = null;
    this.$GK = [];
    this.$DK = this.$EK = this.$FK = null;
    this.$CK = new O(1);
    this.$BK = new O(1);
    this.$AK = new O(1);
    this.$$J = this.$_J = null;
  };
  l.$Cx = Oa;
  Oa.__name__ = ["$Cx"];
  Oa.prototype = {
    __class__: Oa,
  };
  var Kc = function () {};
  l["kit.display.Texture"] = Kc;
  Kc.__name__ = ["kit", "display", "Texture"];
  Kc.__interfaces__ = [Na];
  Kc.prototype = {
    __class__: Kc,
  };
  var ue = function () {};
  l["kit.display.SubTexture"] = ue;
  ue.__name__ = ["kit", "display", "SubTexture"];
  ue.__interfaces__ = [Kc];
  var I = function (a, b) {
    null == b && (b = "");
    this.$NK = null;
    var c = this;
    w.call(this);
    this.$mJ = a;
    this.$LK = b;
    this.$MK = da.Left;
    this.$ZF |= 256;
    var f = function (a, b) {
      c.$ZF |= 256;
    };
    this.wrapWidth = new O(0, f);
    this.letterSpacing = new O(0, f);
    this.lineSpacing = new O(0, f);
  };
  l["kit.display.TextSprite"] = I;
  I.__name__ = ["kit", "display", "TextSprite"];
  I.__super__ = w;
  I.prototype = v(w.prototype, {
    draw: function (a) {
      this.$KK();
      this.$NK.draw(a);
    },
    getNaturalWidth: function () {
      this.$KK();
      return 0 < this.wrapWidth.$bG
        ? this.wrapWidth.$bG
        : this.$NK.bounds.width;
    },
    getNaturalHeight: function () {
      this.$KK();
      var a = this.$NK.lines * (this.$mJ.lineHeight + this.lineSpacing.$bG),
        b = this.$NK.bounds.height;
      return a > b ? a : b;
    },
    containsLocal: function (a, b) {
      this.$KK();
      return this.$NK.bounds.contains(a, b);
    },
    set_text: function (a) {
      a != this.$LK && ((this.$LK = a), (this.$ZF |= 256));
      return a;
    },
    set_align: function (a) {
      a != this.$MK && ((this.$MK = a), (this.$ZF |= 256));
      return a;
    },
    $KK: function () {
      0 != (this.$ZF & 256) &&
        ((this.$ZF &= -257),
        (this.$NK = this.$mJ.layoutText(
          this.$LK,
          this.$MK,
          this.wrapWidth.$bG,
          this.letterSpacing.$bG,
          this.lineSpacing.$bG
        )));
    },
    onUpdate: function (a) {
      w.prototype.onUpdate.call(this, a);
      this.wrapWidth.update(a);
      this.letterSpacing.update(a);
      this.lineSpacing.update(a);
    },
    __class__: I,
  });
  var Z = (l["kit.display.TextureFormat"] = {
    __ename__: ["kit", "display", "TextureFormat"],
    __constructs__: ["RGBA", "RGBA_4444", "RGB", "RGB_565", "COMPRESSED"],
  });
  Z.RGBA = ["RGBA", 0];
  Z.RGBA.toString = n;
  Z.RGBA.__enum__ = Z;
  Z.RGBA_4444 = ["RGBA_4444", 1];
  Z.RGBA_4444.toString = n;
  Z.RGBA_4444.__enum__ = Z;
  Z.RGB = ["RGB", 2];
  Z.RGB.toString = n;
  Z.RGB.__enum__ = Z;
  Z.RGB_565 = ["RGB_565", 3];
  Z.RGB_565.toString = n;
  Z.RGB_565.__enum__ = Z;
  Z.COMPRESSED = ["COMPRESSED", 4];
  Z.COMPRESSED.toString = n;
  Z.COMPRESSED.__enum__ = Z;
  var ve = function () {};
  l["kit.display.VectorFont"] = ve;
  ve.__name__ = ["kit", "display", "VectorFont"];
  ve.__interfaces__ = [Na];
  var we = function () {
    this.$bK = this.$cK = this.$dK = null;
    this.$aK = new X();
    this.paddingTop =
      this.paddingRight =
      this.paddingBottom =
      this.paddingLeft =
        0;
    this.outputOnly = !1;
    this.active = !0;
  };
  l["kit.filter.Filter"] = we;
  we.__name__ = ["kit", "filter", "Filter"];
  we.prototype = {
    apply: function (a) {
      a.render(this);
    },
    setUniformVec2: function (a, b, c) {
      this.$YK(a, 1, [b, c]);
    },
    setUniformSampler2D: function (a, b) {
      this.$YK(a, 11, b);
    },
    update: function (a) {},
    $YK: function (a, b, c) {
      var f = this.$aK.get(a);
      if (null == f) {
        var k = (f = new Od(a));
        this.$aK.set(a, k);
      }
      f.$gK = b;
      f.$fK = c;
    },
    $ZK: function () {
      null == this.$dK &&
        (this.$dK = null != this.$cK ? this.$cK + "@" + this.$bK : this.$bK);
      return this.$dK;
    },
    __class__: we,
  };
  var Od = function (a) {
    this.$gK = 0;
    this.$fK = null;
    this.$eK = a;
  };
  l.$Cz = Od;
  Od.__name__ = ["$Cz"];
  Od.prototype = {
    __class__: Od,
  };
  var e = (l["kit.input.Key"] = {
    __ename__: ["kit", "input", "Key"],
    __constructs__:
      "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Number0 Number1 Number2 Number3 Number4 Number5 Number6 Number7 Number8 Number9 Numpad0 Numpad1 Numpad2 Numpad3 Numpad4 Numpad5 Numpad6 Numpad7 Numpad8 Numpad9 NumpadAdd NumpadDecimal NumpadDivide NumpadEnter NumpadMultiply NumpadSubtract F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12 F13 F14 F15 Left Up Right Down Alt Backquote Backslash Backspace CapsLock Comma Command Control Delete End Enter Equals Escape Home Insert LeftBracket Minus PageDown PageUp Period Quote RightBracket Semicolon Shift Slash Space Tab Menu Search Unknown".split(
        " "
      ),
  });
  e.A = ["A", 0];
  e.A.toString = n;
  e.A.__enum__ = e;
  e.B = ["B", 1];
  e.B.toString = n;
  e.B.__enum__ = e;
  e.C = ["C", 2];
  e.C.toString = n;
  e.C.__enum__ = e;
  e.D = ["D", 3];
  e.D.toString = n;
  e.D.__enum__ = e;
  e.E = ["E", 4];
  e.E.toString = n;
  e.E.__enum__ = e;
  e.F = ["F", 5];
  e.F.toString = n;
  e.F.__enum__ = e;
  e.G = ["G", 6];
  e.G.toString = n;
  e.G.__enum__ = e;
  e.H = ["H", 7];
  e.H.toString = n;
  e.H.__enum__ = e;
  e.I = ["I", 8];
  e.I.toString = n;
  e.I.__enum__ = e;
  e.J = ["J", 9];
  e.J.toString = n;
  e.J.__enum__ = e;
  e.K = ["K", 10];
  e.K.toString = n;
  e.K.__enum__ = e;
  e.L = ["L", 11];
  e.L.toString = n;
  e.L.__enum__ = e;
  e.M = ["M", 12];
  e.M.toString = n;
  e.M.__enum__ = e;
  e.N = ["N", 13];
  e.N.toString = n;
  e.N.__enum__ = e;
  e.O = ["O", 14];
  e.O.toString = n;
  e.O.__enum__ = e;
  e.P = ["P", 15];
  e.P.toString = n;
  e.P.__enum__ = e;
  e.Q = ["Q", 16];
  e.Q.toString = n;
  e.Q.__enum__ = e;
  e.R = ["R", 17];
  e.R.toString = n;
  e.R.__enum__ = e;
  e.S = ["S", 18];
  e.S.toString = n;
  e.S.__enum__ = e;
  e.T = ["T", 19];
  e.T.toString = n;
  e.T.__enum__ = e;
  e.U = ["U", 20];
  e.U.toString = n;
  e.U.__enum__ = e;
  e.V = ["V", 21];
  e.V.toString = n;
  e.V.__enum__ = e;
  e.W = ["W", 22];
  e.W.toString = n;
  e.W.__enum__ = e;
  e.X = ["X", 23];
  e.X.toString = n;
  e.X.__enum__ = e;
  e.Y = ["Y", 24];
  e.Y.toString = n;
  e.Y.__enum__ = e;
  e.Z = ["Z", 25];
  e.Z.toString = n;
  e.Z.__enum__ = e;
  e.Number0 = ["Number0", 26];
  e.Number0.toString = n;
  e.Number0.__enum__ = e;
  e.Number1 = ["Number1", 27];
  e.Number1.toString = n;
  e.Number1.__enum__ = e;
  e.Number2 = ["Number2", 28];
  e.Number2.toString = n;
  e.Number2.__enum__ = e;
  e.Number3 = ["Number3", 29];
  e.Number3.toString = n;
  e.Number3.__enum__ = e;
  e.Number4 = ["Number4", 30];
  e.Number4.toString = n;
  e.Number4.__enum__ = e;
  e.Number5 = ["Number5", 31];
  e.Number5.toString = n;
  e.Number5.__enum__ = e;
  e.Number6 = ["Number6", 32];
  e.Number6.toString = n;
  e.Number6.__enum__ = e;
  e.Number7 = ["Number7", 33];
  e.Number7.toString = n;
  e.Number7.__enum__ = e;
  e.Number8 = ["Number8", 34];
  e.Number8.toString = n;
  e.Number8.__enum__ = e;
  e.Number9 = ["Number9", 35];
  e.Number9.toString = n;
  e.Number9.__enum__ = e;
  e.Numpad0 = ["Numpad0", 36];
  e.Numpad0.toString = n;
  e.Numpad0.__enum__ = e;
  e.Numpad1 = ["Numpad1", 37];
  e.Numpad1.toString = n;
  e.Numpad1.__enum__ = e;
  e.Numpad2 = ["Numpad2", 38];
  e.Numpad2.toString = n;
  e.Numpad2.__enum__ = e;
  e.Numpad3 = ["Numpad3", 39];
  e.Numpad3.toString = n;
  e.Numpad3.__enum__ = e;
  e.Numpad4 = ["Numpad4", 40];
  e.Numpad4.toString = n;
  e.Numpad4.__enum__ = e;
  e.Numpad5 = ["Numpad5", 41];
  e.Numpad5.toString = n;
  e.Numpad5.__enum__ = e;
  e.Numpad6 = ["Numpad6", 42];
  e.Numpad6.toString = n;
  e.Numpad6.__enum__ = e;
  e.Numpad7 = ["Numpad7", 43];
  e.Numpad7.toString = n;
  e.Numpad7.__enum__ = e;
  e.Numpad8 = ["Numpad8", 44];
  e.Numpad8.toString = n;
  e.Numpad8.__enum__ = e;
  e.Numpad9 = ["Numpad9", 45];
  e.Numpad9.toString = n;
  e.Numpad9.__enum__ = e;
  e.NumpadAdd = ["NumpadAdd", 46];
  e.NumpadAdd.toString = n;
  e.NumpadAdd.__enum__ = e;
  e.NumpadDecimal = ["NumpadDecimal", 47];
  e.NumpadDecimal.toString = n;
  e.NumpadDecimal.__enum__ = e;
  e.NumpadDivide = ["NumpadDivide", 48];
  e.NumpadDivide.toString = n;
  e.NumpadDivide.__enum__ = e;
  e.NumpadEnter = ["NumpadEnter", 49];
  e.NumpadEnter.toString = n;
  e.NumpadEnter.__enum__ = e;
  e.NumpadMultiply = ["NumpadMultiply", 50];
  e.NumpadMultiply.toString = n;
  e.NumpadMultiply.__enum__ = e;
  e.NumpadSubtract = ["NumpadSubtract", 51];
  e.NumpadSubtract.toString = n;
  e.NumpadSubtract.__enum__ = e;
  e.F1 = ["F1", 52];
  e.F1.toString = n;
  e.F1.__enum__ = e;
  e.F2 = ["F2", 53];
  e.F2.toString = n;
  e.F2.__enum__ = e;
  e.F3 = ["F3", 54];
  e.F3.toString = n;
  e.F3.__enum__ = e;
  e.F4 = ["F4", 55];
  e.F4.toString = n;
  e.F4.__enum__ = e;
  e.F5 = ["F5", 56];
  e.F5.toString = n;
  e.F5.__enum__ = e;
  e.F6 = ["F6", 57];
  e.F6.toString = n;
  e.F6.__enum__ = e;
  e.F7 = ["F7", 58];
  e.F7.toString = n;
  e.F7.__enum__ = e;
  e.F8 = ["F8", 59];
  e.F8.toString = n;
  e.F8.__enum__ = e;
  e.F9 = ["F9", 60];
  e.F9.toString = n;
  e.F9.__enum__ = e;
  e.F10 = ["F10", 61];
  e.F10.toString = n;
  e.F10.__enum__ = e;
  e.F11 = ["F11", 62];
  e.F11.toString = n;
  e.F11.__enum__ = e;
  e.F12 = ["F12", 63];
  e.F12.toString = n;
  e.F12.__enum__ = e;
  e.F13 = ["F13", 64];
  e.F13.toString = n;
  e.F13.__enum__ = e;
  e.F14 = ["F14", 65];
  e.F14.toString = n;
  e.F14.__enum__ = e;
  e.F15 = ["F15", 66];
  e.F15.toString = n;
  e.F15.__enum__ = e;
  e.Left = ["Left", 67];
  e.Left.toString = n;
  e.Left.__enum__ = e;
  e.Up = ["Up", 68];
  e.Up.toString = n;
  e.Up.__enum__ = e;
  e.Right = ["Right", 69];
  e.Right.toString = n;
  e.Right.__enum__ = e;
  e.Down = ["Down", 70];
  e.Down.toString = n;
  e.Down.__enum__ = e;
  e.Alt = ["Alt", 71];
  e.Alt.toString = n;
  e.Alt.__enum__ = e;
  e.Backquote = ["Backquote", 72];
  e.Backquote.toString = n;
  e.Backquote.__enum__ = e;
  e.Backslash = ["Backslash", 73];
  e.Backslash.toString = n;
  e.Backslash.__enum__ = e;
  e.Backspace = ["Backspace", 74];
  e.Backspace.toString = n;
  e.Backspace.__enum__ = e;
  e.CapsLock = ["CapsLock", 75];
  e.CapsLock.toString = n;
  e.CapsLock.__enum__ = e;
  e.Comma = ["Comma", 76];
  e.Comma.toString = n;
  e.Comma.__enum__ = e;
  e.Command = ["Command", 77];
  e.Command.toString = n;
  e.Command.__enum__ = e;
  e.Control = ["Control", 78];
  e.Control.toString = n;
  e.Control.__enum__ = e;
  e.Delete = ["Delete", 79];
  e.Delete.toString = n;
  e.Delete.__enum__ = e;
  e.End = ["End", 80];
  e.End.toString = n;
  e.End.__enum__ = e;
  e.Enter = ["Enter", 81];
  e.Enter.toString = n;
  e.Enter.__enum__ = e;
  e.Equals = ["Equals", 82];
  e.Equals.toString = n;
  e.Equals.__enum__ = e;
  e.Escape = ["Escape", 83];
  e.Escape.toString = n;
  e.Escape.__enum__ = e;
  e.Home = ["Home", 84];
  e.Home.toString = n;
  e.Home.__enum__ = e;
  e.Insert = ["Insert", 85];
  e.Insert.toString = n;
  e.Insert.__enum__ = e;
  e.LeftBracket = ["LeftBracket", 86];
  e.LeftBracket.toString = n;
  e.LeftBracket.__enum__ = e;
  e.Minus = ["Minus", 87];
  e.Minus.toString = n;
  e.Minus.__enum__ = e;
  e.PageDown = ["PageDown", 88];
  e.PageDown.toString = n;
  e.PageDown.__enum__ = e;
  e.PageUp = ["PageUp", 89];
  e.PageUp.toString = n;
  e.PageUp.__enum__ = e;
  e.Period = ["Period", 90];
  e.Period.toString = n;
  e.Period.__enum__ = e;
  e.Quote = ["Quote", 91];
  e.Quote.toString = n;
  e.Quote.__enum__ = e;
  e.RightBracket = ["RightBracket", 92];
  e.RightBracket.toString = n;
  e.RightBracket.__enum__ = e;
  e.Semicolon = ["Semicolon", 93];
  e.Semicolon.toString = n;
  e.Semicolon.__enum__ = e;
  e.Shift = ["Shift", 94];
  e.Shift.toString = n;
  e.Shift.__enum__ = e;
  e.Slash = ["Slash", 95];
  e.Slash.toString = n;
  e.Slash.__enum__ = e;
  e.Space = ["Space", 96];
  e.Space.toString = n;
  e.Space.__enum__ = e;
  e.Tab = ["Tab", 97];
  e.Tab.toString = n;
  e.Tab.__enum__ = e;
  e.Menu = ["Menu", 98];
  e.Menu.toString = n;
  e.Menu.__enum__ = e;
  e.Search = ["Search", 99];
  e.Search.toString = n;
  e.Search.__enum__ = e;
  e.Unknown = function (a) {
    a = ["Unknown", 100, a];
    a.__enum__ = e;
    a.toString = n;
    return a;
  };
  var Pd = function () {
    this.$hK(0, null);
  };
  l["kit.input.KeyboardEvent"] = Pd;
  Pd.__name__ = ["kit", "input", "KeyboardEvent"];
  Pd.prototype = {
    $hK: function (a, b) {
      this.id = a;
      this.key = b;
    },
    __class__: Pd,
  };
  var ma = (l["kit.input.MouseButton"] = {
    __ename__: ["kit", "input", "MouseButton"],
    __constructs__: ["Left", "Middle", "Right", "Unknown"],
  });
  ma.Left = ["Left", 0];
  ma.Left.toString = n;
  ma.Left.__enum__ = ma;
  ma.Middle = ["Middle", 1];
  ma.Middle.toString = n;
  ma.Middle.__enum__ = ma;
  ma.Right = ["Right", 2];
  ma.Right.toString = n;
  ma.Right.__enum__ = ma;
  ma.Unknown = function (a) {
    a = ["Unknown", 3, a];
    a.__enum__ = ma;
    a.toString = n;
    return a;
  };
  var ea = (l["kit.input.MouseCursor"] = {
    __ename__: ["kit", "input", "MouseCursor"],
    __constructs__: ["Default", "Button", "None"],
  });
  ea.Default = ["Default", 0];
  ea.Default.toString = n;
  ea.Default.__enum__ = ea;
  ea.Button = ["Button", 1];
  ea.Button.toString = n;
  ea.Button.__enum__ = ea;
  ea.None = ["None", 2];
  ea.None.toString = n;
  ea.None.__enum__ = ea;
  var Qd = function () {
    this.$hK(0, 0, 0, null);
  };
  l["kit.input.MouseEvent"] = Qd;
  Qd.__name__ = ["kit", "input", "MouseEvent"];
  Qd.prototype = {
    $hK: function (a, b, c, f) {
      this.id = a;
      this.viewX = b;
      this.viewY = c;
      this.button = f;
    },
    __class__: Qd,
  };
  var Lc = (l["kit.input.EventSource"] = {
    __ename__: ["kit", "input", "EventSource"],
    __constructs__: ["Mouse", "Touch"],
  });
  Lc.Mouse = function (a) {
    a = ["Mouse", 0, a];
    a.__enum__ = Lc;
    a.toString = n;
    return a;
  };
  Lc.Touch = function (a) {
    a = ["Touch", 1, a];
    a.__enum__ = Lc;
    a.toString = n;
    return a;
  };
  var Rd = function () {
    this.$hK(0, 0, 0, null, null);
  };
  l["kit.input.PointerEvent"] = Rd;
  Rd.__name__ = ["kit", "input", "PointerEvent"];
  Rd.prototype = {
    $hK: function (a, b, c, f, k) {
      this.id = a;
      this.viewX = b;
      this.viewY = c;
      this.hit = f;
      this.source = k;
      this.$iK = !1;
    },
    __class__: Rd,
  };
  var Sd = function (a) {
    this.id = a;
    this.$jK = Lc.Touch(this);
  };
  l["kit.input.TouchPoint"] = Sd;
  Sd.__name__ = ["kit", "input", "TouchPoint"];
  Sd.prototype = {
    $hK: function (a, b) {
      this.viewX = a;
      this.viewY = b;
    },
    __class__: Sd,
  };
  var ha = function () {};
  l["kit.math.FMath"] = ha;
  ha.__name__ = ["kit", "math", "FMath"];
  ha.max = function (a, b) {
    return a > b ? a : b;
  };
  ha.min = function (a, b) {
    return a < b ? a : b;
  };
  ha.clamp = function (a, b, c) {
    return a < b ? b : a > c ? c : a;
  };
  var tb = function () {};
  l["kit.movie.Symbol"] = tb;
  tb.__name__ = ["kit", "movie", "Symbol"];
  tb.prototype = {
    __class__: tb,
  };
  var ub = function (a, b) {
    this.$kK = a.symbol;
    var c = a.rect;
    this.texture = b.subTexture(c[0], c[1], c[2], c[3]);
    c = a.origin;
    null != c
      ? ((this.anchorX = c[0]), (this.anchorY = c[1]))
      : (this.anchorY = this.anchorX = 0);
    c = a.scale;
    null != c
      ? ((this.scaleX = c[0]), (this.scaleY = c[1]))
      : (this.scaleY = this.scaleX = 1);
  };
  l["kit.movie.BitmapSymbol"] = ub;
  ub.__name__ = ["kit", "movie", "BitmapSymbol"];
  ub.__interfaces__ = [tb];
  ub.prototype = {
    createSprite: function () {
      var a = new N(this.texture);
      a.setAnchor(this.anchorX, this.anchorY);
      a.setScaleXY(this.scaleX, this.scaleY);
      return a;
    },
    __class__: ub,
  };
  var Ud = function (a, b) {
    this.sounds = new X();
    this.scenes = [];
    var c = this;
    this.$iH = a.getFile(b + "/library.json");
    var f = this.$iH.toJson();
    this.$oK = new X();
    this.frameRate = f.frameRate;
    this.backgroundColor = null != f.backgroundColor ? f.backgroundColor : 0;
    this.backgroundAlpha = null != f.backgroundAlpha ? f.backgroundAlpha : 1;
    this.width = null != f.width ? f.width : 0;
    this.height = null != f.height ? f.height : 0;
    this.pixelSnapping = null != f.pixelSnapping ? f.pixelSnapping : !0;
    if (null != f.sounds)
      for (var k = 0, d = f.sounds; k < d.length; ) {
        var e = d[k];
        ++k;
        var g = a.getSound(b + "/" + oa.removeFileExtension(e.file), !1),
          e = e.id,
          g = new Td(e, g);
        this.sounds.set(e, g);
      }
    if (null != f.videos)
      for (k = 0, d = f.videos; k < d.length; )
        (e = d[k]),
          ++k,
          (g = a.getVideo(b + "/" + oa.removeFileExtension(e.file), !1)),
          (e = e.id),
          (g = new Mc(e, g)),
          this.$oK.set(e, g);
    k = [];
    d = 0;
    for (g = f.movies; d < g.length; )
      (e = g[d]), ++d, (e = new vb(this, e)), k.push(e), this.$oK.set(e.$kK, e);
    if (null != f.scenes)
      for (d = 0, g = f.scenes; d < g.length; )
        (e = g[d]), ++d, (e = new vb(this, e)), k.push(e), this.scenes.push(e);
    f = f.textureGroups[0].atlases;
    for (d = 0; d < f.length; ) {
      e = f[d];
      ++d;
      g = b + "/" + oa.removeFileExtension(e.file);
      g = a.getTexture(g);
      if (null != e.mask) {
        var h = a.getTexture(b + "/" + oa.removeFileExtension(e.mask)),
          l = m.$vG.$HG.createTexture(g.get_width(), g.get_height()),
          n = l.get_graphics();
        n.save();
        n.setBlendMode(L.Copy);
        n.drawTexture(g, 0, 0);
        n.setBlendMode(L.Mask);
        n.drawTexture(h, 0, 0);
        n.restore();
        g.dispose();
        h.dispose();
        g = l;
      }
      h = 0;
      for (e = e.textures; h < e.length; )
        (l = e[h]), ++h, (l = new ub(l, g)), this.$oK.set(l.$kK, l);
    }
    for (
      var q = null,
        f = (q = function (a) {
          for (var b = a.keyframes, f = b.length, k = 0; k < f; ) {
            var d = k++,
              p = b[d];
            if (null != p.$hL) {
              var e = c.$oK.get(p.$hL);
              p.symbol = e;
            }
            p.tweened &&
              1 == p.duration &&
              d + 1 < f &&
              ((d = b[d + 1]),
              (d.visible && null != d.$hL) || (p.visible = !1));
          }
          b = 0;
          for (a = a.childLayers; b < a.length; ) (f = a[b]), ++b, q(f);
        }),
        d = 0;
      d < k.length;

    )
      for (e = k[d], ++d, g = 0, e = e.layers; g < e.length; )
        (h = e[g]), ++g, f(h);
  };
  l["kit.movie.Library"] = Ud;
  Ud.__name__ = ["kit", "movie", "Library"];
  Ud.prototype = {
    createSprite: function (a, b) {
      var c = this.$oK.get(a);
      return null == c ? null : c.createSprite();
    },
    __class__: Ud,
  };
  var Nc = function (a) {
    this.$tK = this.$uK = null;
    s.call(this);
    this.$PK = a;
    this.$sK = new h();
    this.movie = new fa(null);
    this.setCache(!0);
  };
  l["kit.movie.MoviePlayer"] = Nc;
  Nc.__name__ = ["kit", "movie", "MoviePlayer"];
  Nc.__super__ = s;
  Nc.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 6;
    },
    setCache: function (a) {
      this.$wK = a ? new X() : null;
      return this;
    },
    play: function (a, b) {
      null == b && (b = !0);
      if (b || null == this.$tK || this.$tK.symbol.$kK != a)
        this.$tK = this.$pK(a);
      return this;
    },
    loop: function (a, b) {
      null == b && (b = !0);
      if (b || null == this.$uK || this.$uK.symbol.$kK != a)
        (this.$tK = null), (this.$uK = this.$pK(a));
      return this;
    },
    onAdded: function () {
      this.owner.addChild(this.$sK);
    },
    onRemoved: function () {
      this.$sK.dispose();
      this.$tK = this.$uK = null;
      this.movie.set__(null);
    },
    onUpdate: function (a) {
      null != this.$tK &&
        this.$tK.$AL + a > this.$tK.symbol.duration &&
        ((this.$tK = null), this.$rK(this.$uK));
    },
    $pK: function (a) {
      var b;
      null != this.$wK
        ? ((b = this.$wK.get(a)),
          null != b
            ? b.set_position(0)
            : ((b = this.$qK(a)), this.$wK.set(a, b)))
        : (b = this.$qK(a));
      return this.$rK(b);
    },
    $qK: function (a) {
      a = this.$PK.createSprite(a, !0);
      null != this.$vK && this.$vK(a);
      return a;
    },
    $rK: function (a) {
      this.$sK.add(a);
      return this.movie.set__(a);
    },
    __class__: Nc,
  });
  var Ia = function (a) {
    this.$DL = this.$EL = this.$FL = null;
    this.$CL = 0;
    var b = this;
    w.call(this);
    this.symbol = a;
    this.speed = new O(1);
    this.$_K = Array(a.layers.length);
    for (var c = 0, f = this.$_K.length; c < f; ) {
      var k = c++;
      this.$_K[k] = new ib(a.layers[k]);
    }
    this.$AL = 0;
    this.$BL = -1;
    this.$yK(0);
    if (a.button) {
      var d = 0 / a.frameRate,
        e = 1 / a.frameRate,
        g = 2 / a.frameRate,
        h = !1,
        l = !1,
        c = new Ca(
          1.79769313486231e308,
          1.79769313486231e308,
          -1.79769313486231e308,
          -1.79769313486231e308
        ),
        f = 0;
      for (a = a.layers; f < a.length; ) (k = a[f]), ++f, Ia.$GL(k, c);
      c.x < c.width && c.y < c.height && (this.$FL = c);
      this.$ZF |= 4096;
      this.get_pointerDown().connect(function (a) {
        h = !0;
        b.set_position(g);
        m.$vG.$GG.up
          .connect(function (a) {
            h = !1;
            b.set_position(l ? e : d);
          })
          .once();
      });
      var n = null;
      this.get_pointerIn().connect(function (a) {
        l = !0;
        b.set_position(h ? g : e);
        m.$vG.$FG.get_cursor() == ea.Default && m.$vG.$FG.set_cursor(ea.Button);
        null != n && n.dispose();
        n = m.$vG.$GG.move.connect(function (a) {
          null == b.owner &&
            (n.dispose(),
            m.$vG.$FG.get_cursor() == ea.Button &&
              m.$vG.$FG.set_cursor(ea.Default));
        });
      });
      this.get_pointerOut().connect(function (a) {
        l = !1;
        b.set_position(d);
        m.$vG.$FG.get_cursor() == ea.Button && m.$vG.$FG.set_cursor(ea.Default);
      });
    }
  };
  l["kit.movie.MovieSprite"] = Ia;
  Ia.__name__ = ["kit", "movie", "MovieSprite"];
  Ia.$GL = function (a, b) {
    for (var c = 0, f = a.keyframes; c < f.length; ) {
      var k = f[c];
      ++c;
      if (3 == k.index && null != k.symbol) {
        var d = k.symbol.createSprite(),
          e = d.getNaturalWidth(),
          g = d.getNaturalHeight();
        if (0 < e && 0 < g) {
          var h = d.scaleX.$bG * k.scaleX,
            l = d.scaleY.$bG * k.scaleY,
            d = d.getLocalMatrix(),
            m = Math.sin(k.skewX),
            n = Math.cos(k.skewX),
            q = Math.sin(k.skewY),
            r = Math.cos(k.skewY);
          d.set(r * h, q * h, -m * l, n * l, k.x, k.y);
          d.translate(-k.pivotX, -k.pivotY);
          w.$NI(d, 0, 0, b);
          w.$NI(d, e, 0, b);
          w.$NI(d, e, g, b);
          w.$NI(d, 0, g, b);
        }
      }
    }
    c = 0;
    for (f = a.childLayers; c < f.length; ) (k = f[c]), ++c, Ia.$GL(k, b);
  };
  Ia.__super__ = w;
  Ia.prototype = v(w.prototype, {
    containsLocal: function (a, b) {
      return (
        null != this.$FL &&
        a >= this.$FL.x &&
        a < this.$FL.width &&
        b >= this.$FL.y &&
        b < this.$FL.height
      );
    },
    onAdded: function () {
      w.prototype.onAdded.call(this);
      for (var a = 0, b = this.$_K; a < b.length; ) {
        var c = b[a];
        ++a;
        this.owner.addChild(c.$ML);
      }
    },
    onRemoved: function () {
      w.prototype.onRemoved.call(this);
      for (var a = 0, b = this.$_K; a < b.length; ) {
        var c = b[a];
        ++a;
        this.owner.removeChild(c.$ML);
      }
    },
    onUpdate: function (a) {
      w.prototype.onUpdate.call(this, a);
      this.speed.update(a);
      switch (this.$ZF & 6912) {
        case 0:
          0 <= this.speed.$bG &&
            ((this.$AL += this.speed.$bG * a),
            this.$AL > this.symbol.duration &&
              (0 != (this.$ZF & 1024)
                ? ((this.$AL = this.symbol.duration), (this.$ZF |= 2048))
                : ((this.$AL %= this.symbol.duration),
                  null != this.$DL && this.$DL.emit())));
          break;
        case 512:
          this.$ZF &= -513;
      }
      this.$yK(this.$AL * this.symbol.frameRate);
    },
    $yK: function (a) {
      if (this.$BL != a) {
        if (a < this.$BL)
          for (var b = 0, c = this.$_K; b < c.length; ) {
            var f = c[b];
            ++b;
            if (f.$WL(this.$EL)) return;
          }
        b = 0;
        for (c = this.$_K; b < c.length; )
          if (((f = c[b]), ++b, f.$YL(a, this.$EL, this.$CL))) return;
        switch (this.$CL) {
          case 0:
            this.$CL = 1;
            break;
          case 1:
          case 2:
            this.$CL = 3;
        }
        this.$BL = a;
      }
    },
    set_position: function (a) {
      this.setPosition(a, !0);
      return a;
    },
    setPosition: function (a, b) {
      var c = ha.clamp(a, 0, this.symbol.duration);
      this.$AL = c;
      this.$CL = 3;
      var f = c * this.symbol.frameRate,
        k;
      k = b ? 2 : 0;
      for (var d = 0, e = this.$_K; d < e.length; ) {
        var g = e[d];
        ++d;
        if (g.$XL(f, this.$EL, k)) return c;
      }
      this.$BL = f;
      return c;
    },
    set_paused: function (a) {
      this.$ZF = gb.set(this.$ZF, 256, a);
      return a;
    },
    set_pixelSnapping: function (a) {
      for (var b = 0, c = this.$_K; b < c.length; ) {
        var f = c[b];
        ++b;
        f.$ZL(a);
      }
      return w.prototype.set_pixelSnapping.call(this, a);
    },
    $zK: function (a) {
      this.$AL = a.firstFrame / this.symbol.frameRate;
      this.set_paused(a.playMode == ia.SingleFrame);
      this.$ZF = (this.$ZF | 512) & -2049;
      a = 0;
      for (var b = this.$_K; a < b.length; ) {
        var c = b[a];
        ++a;
        c.$zK();
      }
    },
    __class__: Ia,
  });
  var ib = function (a) {
    this.$eL = [];
    this.$SL = null;
    this.$RL = !0;
    this.$PL = -1;
    this.$OL = 0;
    this.$NL = !1;
    this.$QL = a;
    this.$ML = new h();
    if (a.empty) this.$dL = null;
    else {
      this.$dL = Array(a.keyframes.length);
      for (var b = null, c = null, f = 0, k = this.$dL.length; f < k; ) {
        var d = f++,
          e = a.keyframes[d];
        if (null != b && ib.$fL(b, e)) this.$dL[d] = c;
        else if (null != e.symbol) {
          c = e.symbol.createSprite();
          this.$dL[d] = c;
          if (0 < e.firstFrame || e.playMode != ia.Loop)
            if (((b = c instanceof Ia ? c : null), null != b)) {
              switch (e.playMode[1]) {
                case 1:
                  b.$ZF |= 1024;
                  break;
                case 2:
                  b.set_paused(!0);
              }
              b.$AL = e.firstFrame / b.symbol.frameRate;
            }
          b = e;
        } else this.$dL[d] = new w();
      }
      this.$ML.add(this.$dL[0]);
    }
    this.$cL = this.$ML;
    if (0 < a.childLayers.length)
      for (
        k = new w(),
          e = new h().add(k),
          e.addChild(this.$ML),
          this.$ML = b = new h(),
          f = new h(),
          a.mask &&
            ((this.$SL = new w()), this.$SL.set_mask(k), f.add(this.$SL)),
          b.addChild(f),
          b.addChild(e),
          k = 0,
          a = a.childLayers;
        k < a.length;

      )
        (e = a[k]), ++k, (e = new ib(e)), this.$eL.push(e), f.addChild(e.$ML);
  };
  l.$CAB = ib;
  ib.__name__ = ["$CAB"];
  ib.$fL = function (a, b) {
    if (a.symbol != b.symbol || a.playMode != b.playMode) return !1;
    switch (a.playMode[1]) {
      case 2:
        return a.firstFrame == b.firstFrame;
      default:
        return (
          a.firstFrame == b.firstFrame ||
          a.firstFrame + a.duration == b.firstFrame
        );
    }
  };
  ib.prototype = {
    $VL: function (a, b) {
      null != a.sound &&
        null != a.sound.sound &&
        (this.$ML.emitMessageToParents(
          "MovieSprite.FRAME_SOUND",
          new Oc(this.$ML, a)
        ).handled ||
          a.sound.sound.play());
      if (null != b) {
        var c = a.label;
        null != c && b.emit(c);
      }
      null != a.actions &&
        this.$ML.emitMessageToParents(
          "MovieSprite.FRAME_ACTION",
          new Oc(this.$ML, a)
        );
    },
    $WL: function (a) {
      for (var b = 0, c = this.$eL; b < c.length; ) {
        var f = c[b];
        ++b;
        if (f.$WL(a)) return !0;
      }
      if (0 <= this.$PL) {
        for (
          var b = this.$QL.keyframes,
            c = this.$OL,
            f = this.$PL + 1,
            k = b.length;
          f < k;

        ) {
          var d = f++;
          this.$VL(b[d], a);
          if (c != this.$OL) return !0;
        }
        this.$PL = -1;
      }
      this.$NL = !0;
      return !1;
    },
    $XL: function (a, b, c) {
      for (var f = 0, k = this.$eL; f < k.length; ) {
        var d = k[f];
        ++f;
        if (d.$XL(a, b, c)) return !0;
      }
      ++this.$OL;
      f = this.$QL.keyframes;
      k = f.length - 1;
      d = this.$PL;
      for (this.$PL = -1; this.$PL < k && f[this.$PL + 1].index <= a; )
        ++this.$PL;
      this.$PL != d && (this.$NL = !0);
      return this.$YL(a, b, c);
    },
    $YL: function (a, b, c) {
      for (var f = 0, k = this.$eL; f < k.length; ) {
        var d = k[f];
        ++f;
        if (d.$YL(a, b, c)) return !0;
      }
      var f = this.$QL.keyframes,
        e = f.length - 1,
        k = this.$PL;
      if (a > this.$QL.frames) (this.$PL = e), (this.$NL = !0);
      else
        for (; this.$PL < e && f[this.$PL + 1].index <= a; )
          ++this.$PL, (this.$NL = !0);
      if (null != this.$dL) {
        var d = f[this.$PL],
          g;
        if (this.$NL) {
          if (
            ((this.$NL = !1), (g = this.$dL[this.$PL]), g != this.$cL.$zF[1])
          ) {
            var h;
            h = g instanceof Ia ? g : null;
            null != h && h.$zK(d);
            this.$cL.add(g);
          }
        } else g = this.$cL.$zF[1];
        if (
          this.$RL &&
          ((h = d.visible && null != d.symbol && a <= this.$QL.frames),
          g.set_visible(h),
          null != this.$SL && this.$SL.set_maskEnabled(h),
          h)
        ) {
          h = d.x;
          var l = d.y,
            m = d.scaleX,
            n = d.scaleY,
            q = d.skewX,
            v = d.skewY,
            u = d.alpha,
            t = d.tint;
          if (d.tweened && this.$PL < e) {
            var e = (a - d.index) / d.duration,
              s = d.ease;
            if (0 != s) {
              var w;
              0 > s ? ((w = 1 - e), (w = 1 - w * w), (s = -s)) : (w = e * e);
              e = s * w + (1 - s) * e;
            }
            s = f[this.$PL + 1];
            h += (s.x - h) * e;
            l += (s.y - l) * e;
            m += (s.scaleX - m) * e;
            n += (s.scaleY - n) * e;
            q += (s.skewX - q) * e;
            v += (s.skewY - v) * e;
            u += (s.alpha - u) * e;
            s = s.tint;
            if (16777215 != s || 16777215 != t) {
              w = (t & 16711680) >> 16;
              var x = (t & 65280) >> 8,
                t = t & 255,
                x = x + (((((s & 65280) >> 8) - x) * e) | 0),
                t = t + ((((s & 255) - t) * e) | 0),
                t =
                  ((w + (((((s & 16711680) >> 16) - w) * e) | 0)) << 16) |
                  (x << 8) |
                  t;
            }
          }
          e = r.instance(d.symbol, ub);
          null != e && ((m *= e.scaleX), (n *= e.scaleY));
          e = g.getLocalMatrix();
          s = Math.sin(q);
          q = Math.cos(q);
          w = Math.sin(v);
          v = Math.cos(v);
          e.set(v * m, w * m, -s * n, q * n, h, l);
          e.translate(-d.pivotX, -d.pivotY);
          g.$ZF |= 16;
          g.alpha.set__(u);
          g.setTint(t);
          (null == d.blendMode && null == g.get_blendMode()) ||
            g.set_blendMode(d.blendMode);
        }
      }
      if (0 != c)
        for (
          1 == c
            ? (k = -1)
            : 2 == c &&
              0 <= this.$PL &&
              f[this.$PL].index == a &&
              (k = this.$PL - 1),
            a = this.$OL,
            c = k,
            k = this.$PL;
          c < k;

        )
          if (((d = c++), this.$VL(f[d + 1], b), this.$OL != a)) return !0;
      return !1;
    },
    $ZL: function (a) {
      for (var b = 0, c = this.$eL; b < c.length; ) {
        var f = c[b];
        ++b;
        f.$ZL(a);
      }
      if (null != this.$dL)
        for (b = 0, c = this.$dL; b < c.length; )
          (f = c[b]), ++b, f.set_pixelSnapping(a);
    },
    $zK: function () {
      for (var a = 0, b = this.$eL; a < b.length; ) {
        var c = b[a];
        ++a;
        c.$zK();
      }
      this.$NL = !0;
      this.$PL = -1;
      if (null != this.$dL)
        for (a = 0, b = this.$dL.length; a < b; ) {
          var c = a++,
            f = r.instance(this.$dL[c], Ia);
          null != f && f.$zK(this.$QL.keyframes[c]);
        }
    },
    __class__: ib,
  };
  var Oc = function (a, b) {
    this.layer = a;
    this.keyframe = b;
  };
  l["kit.movie.FrameEvent"] = Oc;
  Oc.__name__ = ["kit", "movie", "FrameEvent"];
  Oc.prototype = {
    __class__: Oc,
  };
  var vb = function (a, b) {
    this.$kK = b.id;
    this.frameRate = a.frameRate;
    this.frames = 0;
    this.layers = Array(b.layers.length);
    for (var c = 0, f = this.layers.length; c < f; ) {
      var k = c++,
        d = new Pc(a, b.layers[k]);
      this.frames = Math.max(d.frames, this.frames);
      this.layers[k] = d;
    }
    this.duration = this.frames / this.frameRate;
    this.button = !0 == b.button;
  };
  l["kit.movie.MovieSymbol"] = vb;
  vb.__name__ = ["kit", "movie", "MovieSymbol"];
  vb.__interfaces__ = [tb];
  vb.prototype = {
    createSprite: function () {
      return new Ia(this);
    },
    __class__: vb,
  };
  var Pc = function (a, b) {
    this.mask = !1;
    this.childLayers = [];
    this.empty = !0;
    this.name = b.name;
    var c = null;
    this.keyframes = Array(b.keyframes.length);
    for (var f = 0, k = this.keyframes.length; f < k; ) {
      var d = f++,
        c = new Vd(a, b.keyframes[d], c);
      this.keyframes[d] = c;
      this.empty = this.empty && null == c.$hL;
    }
    this.frames = null != c ? c.index + c.duration : 0;
    null != b.mask && (this.mask = b.mask);
    if (null != b.childLayers)
      for (c = 0, f = b.childLayers; c < f.length; )
        (k = f[c]),
          ++c,
          (k = new Pc(a, k)),
          k.frames > this.frames && (this.frames = k.frames),
          this.childLayers.push(k);
  };
  l["kit.movie.MovieLayer"] = Pc;
  Pc.__name__ = ["kit", "movie", "MovieLayer"];
  Pc.prototype = {
    __class__: Pc,
  };
  var ia = (l["kit.movie.PlayMode"] = {
    __ename__: ["kit", "movie", "PlayMode"],
    __constructs__: ["Loop", "PlayOnce", "SingleFrame"],
  });
  ia.Loop = ["Loop", 0];
  ia.Loop.toString = n;
  ia.Loop.__enum__ = ia;
  ia.PlayOnce = ["PlayOnce", 1];
  ia.PlayOnce.toString = n;
  ia.PlayOnce.__enum__ = ia;
  ia.SingleFrame = ["SingleFrame", 2];
  ia.SingleFrame.toString = n;
  ia.SingleFrame.__enum__ = ia;
  var Vd = function (a, b, c) {
    this.actions = this.sound = null;
    this.firstFrame = 0;
    this.playMode = ia.Loop;
    this.blendMode = null;
    this.ease = 0;
    this.visible = this.tweened = !0;
    this.tint = 16777215;
    this.alpha = 1;
    this.skewX = this.skewY = this.pivotX = this.pivotY = 0;
    this.scaleX = this.scaleY = 1;
    this.x = this.y = 0;
    this.symbol = this.instanceName = null;
    this.index = null != c ? c.index + c.duration : 0;
    this.duration = b.duration;
    this.label = b.label;
    this.$hL = b.ref;
    c = b.loc;
    null != c && ((this.x = c[0]), (this.y = c[1]));
    c = b.scale;
    null != c && ((this.scaleX = c[0]), (this.scaleY = c[1]));
    c = b.skew;
    null != c && ((this.skewX = c[0]), (this.skewY = c[1]));
    c = b.pivot;
    null != c && ((this.pivotX = c[0]), (this.pivotY = c[1]));
    null != b.alpha && (this.alpha = b.alpha);
    null != b.tint && (this.tint = b.tint);
    null != b.visible && (this.visible = b.visible);
    null != b.tweened && (this.tweened = b.tweened);
    null != b.ease && (this.ease = b.ease);
    if (null != b.blendMode)
      if (((c = b.blendMode), null != c))
        switch (c) {
          case "add":
            this.blendMode = L.Add;
            break;
          case "multiply":
            this.blendMode = L.Multiply;
            break;
          case "screen":
            this.blendMode = L.Screen;
            break;
          case "layer":
            this.blendMode = L.Mask;
            break;
          default:
            this.blendMode = null;
        }
      else this.blendMode = null;
    null != b.firstFrame && (this.firstFrame = b.firstFrame);
    if (null != b.playMode)
      if (((c = b.playMode), null != c))
        switch (c) {
          case "stop":
            this.playMode = ia.SingleFrame;
            break;
          case "once":
            this.playMode = ia.PlayOnce;
            break;
          default:
            this.playMode = ia.Loop;
        }
      else this.playMode = ia.Loop;
    null != b.actions && (this.actions = b.actions);
    null != b.sound && (this.sound = a.sounds.get(b.sound));
    null != b.refName && (this.instanceName = b.refName);
  };
  l["kit.movie.MovieKeyframe"] = Vd;
  Vd.__name__ = ["kit", "movie", "MovieKeyframe"];
  Vd.prototype = {
    __class__: Vd,
  };
  var Td = function (a, b) {
    this.name = a;
    this.sound = b;
  };
  l["kit.movie.SoundSymbol"] = Td;
  Td.__name__ = ["kit", "movie", "SoundSymbol"];
  Td.prototype = {
    __class__: Td,
  };
  var Mc = function (a, b) {
    this.$kK = a;
    this.video = b;
  };
  l["kit.movie.VideoSymbol"] = Mc;
  Mc.__name__ = ["kit", "movie", "VideoSymbol"];
  Mc.__interfaces__ = [tb];
  Mc.prototype = {
    createSprite: function () {
      return new Qc(this);
    },
    __class__: Mc,
  };
  var Ua = function (a) {
    w.call(this);
    this.$kL = a;
  };
  l["kit.video.VideoSprite"] = Ua;
  Ua.__name__ = ["kit", "video", "VideoSprite"];
  Ua.__super__ = w;
  Ua.prototype = v(w.prototype, {
    draw: function (a) {
      null != this.$kL && a.drawTexture(this.$kL.get_texture(), 0, 0);
    },
    getNaturalWidth: function () {
      return null != this.$kL ? this.$kL.get_video().get_width() : 0;
    },
    getNaturalHeight: function () {
      return null != this.$kL ? this.$kL.get_video().get_height() : 0;
    },
    dispose: function () {
      w.prototype.dispose.call(this);
      this.set_playback(null);
    },
    set_playback: function (a) {
      null != this.$kL && this.$kL.dispose();
      return (this.$kL = a);
    },
    __class__: Ua,
  });
  var Qc = function (a) {
    Ua.call(this, null);
    this.$lL = a;
  };
  l.$CCB = Qc;
  Qc.__name__ = ["$CCB"];
  Qc.__super__ = Ua;
  Qc.prototype = v(Ua.prototype, {
    onAdded: function () {
      Ua.prototype.onAdded.call(this);
      this.set_playback(this.$lL.video.play());
    },
    onRemoved: function () {
      Ua.prototype.onRemoved.call(this);
      this.set_playback(null);
    },
    __class__: Qc,
  });
  var V = function () {
    this.$nM = !1;
  };
  l.$CFB = V;
  V.__name__ = ["$CFB"];
  V.__interfaces__ = [Na];
  V.prototype = {
    dispose: function () {
      this.$nM || ((this.$nM = !0), this.$lM());
    },
    $lM: function () {
      null;
    },
    __class__: V,
  };
  var wb = function (a, b) {
    this.$$M = 0;
    var c = this;
    this.$pM = b;
    this.$vG = a;
    this.$oF = new sa();
    this.$eI = new Rc(b, this);
    this.$zM = new X();
    var f = Ob.array(b);
    if (0 == f.length) this.$vM();
    else {
      for (var k = new X(), d = 0; d < f.length; ) {
        var e = f[d];
        ++d;
        var g = k.get(e.name);
        null == g && ((g = []), k.set(e.name, g));
        g.push(e);
      }
      this.$yM = Ob.count(k);
      for (f = new Qb(k, k.arrayKeys()); f.hasNext(); )
        (k = [f.next()]),
          this.$qM(
            k[0],
            (function (a) {
              return function (f) {
                if (null != f) {
                  var k = new Sc(0, f.bytes);
                  c.$zM.set(f.name, k);
                  k = b.getFullURL(f);
                  try {
                    c.$rM(k, f);
                  } catch (d) {
                    d instanceof u && (d = d.val),
                      c.$wM(f, "Unexpected error: " + r.string(d));
                  }
                } else
                  switch (
                    ((f = a[0][0]),
                    (k = new Sc(0, 0)),
                    c.$zM.set(f.name, k),
                    f.format[1])
                  ) {
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                      c.$tM(f, ya.$DO());
                      break;
                    case 17:
                    case 18:
                      c.$tM(f, Ja.$DO());
                      break;
                    default:
                      c.$wM(f, "Could not find a supported format to load");
                  }
              };
            })(k)
          );
    }
  };
  l.$CGB = wb;
  wb.__name__ = ["$CGB"];
  wb.prototype = {
    $qM: function (a, b) {
      this.$sM(function (c) {
        for (var f = 0; f < c.length; ) {
          var k = c[f];
          ++f;
          for (var d = 0; d < a.length; ) {
            var e = a[d];
            ++d;
            if (e.format == k) {
              b(e);
              return;
            }
          }
        }
        b(null);
      });
    },
    $rM: function (a, b) {
      null;
    },
    $sM: function (a) {
      null;
    },
    $tM: function (a, b) {
      if (this.$eI.$CN) b.dispose();
      else {
        var c = this.$zM.get(a.name);
        c.$FN = c.$GN;
        var f;
        switch (a.format[1]) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            f = this.$eI.textures;
            break;
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
            f = this.$eI.sounds;
            break;
          case 13:
          case 14:
          case 15:
          case 16:
            f = this.$eI.$AN;
            break;
          case 17:
          case 18:
            f = this.$eI.$BN;
            break;
          case 19:
            f = this.$eI.files;
        }
        f.set(a.name, b);
        this.$yM -= 1;
        0 == this.$yM && this.$vM();
      }
    },
    $uM: function (a, b, c) {
      a = this.$zM.get(a.name);
      0 < c && (a.$GN = c);
      a.$FN = ha.min(b, a.$GN);
      c = b = 0;
      for (a = this.$zM.iterator(); a.hasNext(); ) {
        var f = a.next();
        if (0 == f.$GN) return;
        b += f.$FN;
        c += f.$GN;
      }
      a = 0 < c ? b / c : 0;
      a != this.$$M &&
        ((this.$$M = a),
        this.$oF.emitProgress(a),
        this.$oF.set_total(c),
        this.$oF.set_progress(b));
    },
    $vM: function () {
      this.$oF.$bW(this.$eI);
    },
    $wM: function (a, b) {
      this.$eI.dispose();
      this.$oF.failure(oa.withFields(b, ["url", a.url]));
    },
    $xM: function (a) {
      this.$wM(a, "Failed to create texture. Is the GPU context unavailable?");
    },
    __class__: wb,
  };
  var Rc = function (a, b) {
    this.$CN = !1;
    this.$BN = new X();
    this.$AN = new X();
    this.files = new X();
    this.sounds = new X();
    this.textures = new X();
    this.$DN = a;
  };
  l.$CHB = Rc;
  Rc.__name__ = ["$CHB"];
  Rc.__interfaces__ = [Sb];
  Rc.prototype = {
    getTexture: function (a, b) {
      return this.textures.get(a);
    },
    getSound: function (a, b) {
      return this.sounds.get(a);
    },
    getFile: function (a, b) {
      return this.files.get(a);
    },
    getVideo: function (a, b) {
      return this.$BN.get(a);
    },
    dispose: function () {
      if (!this.$CN) {
        this.$CN = !0;
        for (var a = this.textures.iterator(); a.hasNext(); )
          a.next().dispose();
        this.textures = null;
        for (a = this.sounds.iterator(); a.hasNext(); ) a.next().dispose();
        this.sounds = null;
        for (a = this.files.iterator(); a.hasNext(); ) a.next().dispose();
        this.files = null;
        for (a = this.$AN.iterator(); a.hasNext(); ) a.next().dispose();
        this.$AN = null;
      }
    },
    __class__: Rc,
  };
  var Sc = function (a, b) {
    this.$FN = a;
    this.$GN = b;
  };
  l.$CIB = Sc;
  Sc.__name__ = ["$CIB"];
  Sc.prototype = {
    __class__: Sc,
  };
  var xb = function (a) {
    this.$nM = !1;
    this.$bI = a;
  };
  l.$CJB = xb;
  xb.__name__ = ["$CJB"];
  xb.__interfaces__ = [ac];
  xb.__super__ = V;
  xb.prototype = v(V.prototype, {
    toString: function () {
      return this.$bI;
    },
    toJson: function () {
      return JSON.parse(this.toString());
    },
    $lM: function () {
      this.$bI = null;
    },
    __class__: xb,
  });
  var Wd = function () {};
  l["kit.subsystem.KeyboardSystem"] = Wd;
  Wd.__name__ = ["kit", "subsystem", "KeyboardSystem"];
  Wd.prototype = {
    __class__: Wd,
  };
  var Ba = function () {
    this.down = new R();
    this.up = new R();
    this.backButton = new Ya();
    this.$KN = new va();
  };
  l.$CKB = Ba;
  Ba.__name__ = ["$CKB"];
  Ba.__interfaces__ = [Wd];
  Ba.prototype = {
    $IN: function (a) {
      if (16777238 == a)
        return null != this.backButton.$oG ? (this.backButton.emit(), !0) : !1;
      this.$KN.h.hasOwnProperty(a) ||
        ((this.$KN.h[a] = !0),
        Ba.$LN.$hK(Ba.$LN.id + 1, Xd.$MQ(a)),
        this.down.emit(Ba.$LN));
      return !0;
    },
    $JN: function (a) {
      this.$KN.h.hasOwnProperty(a) &&
        (this.$KN.remove(a),
        Ba.$LN.$hK(Ba.$LN.id + 1, Xd.$MQ(a)),
        this.up.emit(Ba.$LN));
    },
    __class__: Ba,
  };
  var Yd = function () {};
  l["kit.subsystem.MouseSystem"] = Yd;
  Yd.__name__ = ["kit", "subsystem", "MouseSystem"];
  Yd.prototype = {
    __class__: Yd,
  };
  var qa = function (a) {
    this.$GG = a;
    this.$jK = Lc.Mouse(qa.$LN);
    this.down = new R();
    this.move = new R();
    this.up = new R();
    this.scroll = new R();
    this.$zI = this.$yI = 0;
    this.$ON = ea.Default;
    this.$PN = new va();
  };
  l.$CLB = qa;
  qa.__name__ = ["$CLB"];
  qa.__interfaces__ = [Yd];
  qa.prototype = {
    get_cursor: function () {
      return this.$ON;
    },
    set_cursor: function (a) {
      return (this.$ON = a);
    },
    $IN: function (a, b, c) {
      this.$PN.h.hasOwnProperty(c) ||
        ((this.$PN.h[c] = !0),
        this.$IK(a, b, Zd.$fQ(c)),
        this.$GG.$IN(a, b, this.$jK),
        this.down.emit(qa.$LN));
    },
    $MN: function (a, b) {
      this.$IK(a, b, null);
      this.$GG.$MN(a, b, this.$jK);
      this.move.emit(qa.$LN);
    },
    $JN: function (a, b, c) {
      this.$PN.h.hasOwnProperty(c) &&
        (this.$PN.remove(c),
        this.$IK(a, b, Zd.$fQ(c)),
        this.$GG.$JN(a, b, this.$jK),
        this.up.emit(qa.$LN));
    },
    $NN: function (a, b, c) {
      this.$yI = a;
      this.$zI = b;
      if (null == this.scroll.$oG) return !1;
      this.scroll.emit(c);
      return !0;
    },
    $IK: function (a, b, c) {
      this.$yI = a;
      this.$zI = b;
      qa.$LN.$hK(qa.$LN.id + 1, a, b, c);
    },
    __class__: qa,
  };
  var $d = function () {};
  l["kit.subsystem.PointerSystem"] = $d;
  $d.__name__ = ["kit", "subsystem", "PointerSystem"];
  $d.prototype = {
    __class__: $d,
  };
  var ka = function (a, b, c) {
    null == c && (c = !1);
    null == b && (b = 0);
    null == a && (a = 0);
    this.down = new R();
    this.move = new R();
    this.up = new R();
    this.$yI = a;
    this.$zI = b;
    this.$QN = c;
  };
  l.$CMB = ka;
  ka.__name__ = ["$CMB"];
  ka.__interfaces__ = [$d];
  ka.prototype = {
    $IN: function (a, b, c) {
      if (!this.$QN) {
        this.$MN(a, b, c);
        this.$QN = !0;
        var f = [],
          k = w.hitTest(m.root, a, b);
        if (null != k) {
          var d = k.owner;
          do {
            var e = d.$zF[1];
            null != e && f.push(e);
            d = d.parent;
          } while (null != d);
        }
        this.$IK(a, b, k, c);
        for (a = 0; a < f.length; )
          if (((b = f[a]), ++a, b.$vH(ka.$LN), ka.$LN.$iK)) return;
        this.down.emit(ka.$LN);
      }
    },
    $MN: function (a, b, c) {
      if (a != this.$yI || b != this.$zI) {
        var f = [],
          k = w.hitTest(m.root, a, b);
        if (null != k) {
          var d = k.owner;
          do {
            var e = d.$zF[1];
            null != e && f.push(e);
            d = d.parent;
          } while (null != d);
        }
        this.$IK(a, b, k, c);
        for (a = 0; a < f.length; )
          if (((b = f[a]), ++a, b.$wH(ka.$LN), ka.$LN.$iK)) return;
        this.move.emit(ka.$LN);
      }
    },
    $JN: function (a, b, c) {
      if (this.$QN) {
        this.$MN(a, b, c);
        this.$QN = !1;
        var f = [],
          k = w.hitTest(m.root, a, b);
        if (null != k) {
          var d = k.owner;
          do {
            var e = d.$zF[1];
            null != e && f.push(e);
            d = d.parent;
          } while (null != d);
        }
        this.$IK(a, b, k, c);
        for (a = 0; a < f.length; )
          if (((b = f[a]), ++a, b.$yH(ka.$LN), ka.$LN.$iK)) return;
        this.up.emit(ka.$LN);
      }
    },
    $IK: function (a, b, c, f) {
      this.$yI = a;
      this.$zI = b;
      ka.$LN.$hK(ka.$LN.id + 1, a, b, c, f);
    },
    __class__: ka,
  };
  var Tc = function () {};
  l.$CNB = Tc;
  Tc.__name__ = ["$CNB"];
  Tc.__interfaces__ = [ue];
  Tc.prototype = {
    __class__: Tc,
  };
  var Ka = function (a, b, c) {
    this.$yI = this.$zI = 0;
    this.$UN = null;
    this.$SN = this.$TN = 0;
    this.$nM = !1;
    this.$RN = a;
    this.$LJ = b;
    this.$MJ = c;
  };
  l.$COB = Ka;
  Ka.__name__ = ["$COB"];
  Ka.__interfaces__ = [Tc];
  Ka.__super__ = V;
  Ka.prototype = v(V.prototype, {
    subTexture: function (a, b, c, f) {
      c = this.$RN.createTexture(c, f);
      c.$UN = this;
      c.$yI = a;
      c.$zI = b;
      c.$SN = this.$SN + a;
      c.$TN = this.$TN + b;
      return c;
    },
    clear: function () {
      this.$RN.clear();
    },
    renderFilter: function (a, b, c) {
      this.$RN.renderFilter(a, b, c);
    },
    get_graphics: function () {
      return this.$RN.getGraphics();
    },
    $lM: function () {
      null == this.$UN && this.$RN.dispose();
    },
    get_width: function () {
      return this.$LJ;
    },
    get_height: function () {
      return this.$MJ;
    },
    __class__: Ka,
  });
  var Uc = function () {};
  l["kit.subsystem.TouchSystem"] = Uc;
  Uc.__name__ = ["kit", "subsystem", "TouchSystem"];
  Uc.prototype = {
    __class__: Uc,
  };
  var Wb = function (a, b) {
    null == b && (b = 4);
    this.$GG = a;
    this.$WN = b;
    this.$XN = new va();
    this.$VJ = [];
    this.down = new R();
    this.move = new R();
    this.up = new R();
  };
  l.$CPB = Wb;
  Wb.__name__ = ["$CPB"];
  Wb.__interfaces__ = [Uc];
  Wb.prototype = {
    get_supported: function () {
      return !0;
    },
    $IN: function (a, b, c) {
      if (!this.$XN.h.hasOwnProperty(a)) {
        var f = new Sd(a);
        f.$hK(b, c);
        this.$XN.h[a] = f;
        this.$VJ.push(f);
        null == this.$VN && ((this.$VN = f), this.$GG.$IN(b, c, f.$jK));
        this.down.emit(f);
      }
    },
    $MN: function (a, b, c) {
      a = this.$XN.h[a];
      null != a &&
        (a.$hK(b, c),
        this.$VN == a && this.$GG.$MN(b, c, a.$jK),
        this.move.emit(a));
    },
    $JN: function (a, b, c) {
      var f = this.$XN.h[a];
      null != f &&
        (f.$hK(b, c),
        this.$XN.remove(a),
        B.remove(this.$VJ, f),
        this.$VN == f && ((this.$VN = null), this.$GG.$JN(b, c, f.$jK)),
        this.up.emit(f));
    },
    __class__: Wb,
  };
  var xe = function () {};
  l.$CQB = xe;
  xe.__name__ = ["$CQB"];
  xe.$YN = function () {
    m.$tG().then(function (a) {
      try {
        m.$vG
          .getExternal()
          .call("console.info", ["Built with 2DKit, http://2dkit.com"]);
      } catch (b) {
        b instanceof u && (b = b.val);
      }
      ye.main();
    });
  };
  var la = function () {};
  l.$CRB = la;
  la.__name__ = ["$CRB"];
  la.$dN = function (a) {
    var b = Rb.getType(la).injected[0];
    return T.field(b, a);
  };
  la.$eN = function () {
    switch (la.$dN("orientation")) {
      case "landscape":
        return Ha.Landscape;
      case "portrait":
        return Ha.Portrait;
    }
    return null;
  };
  var Vc = function () {
    this.$yN = new Ma();
    this.$xN = 0;
    this.$vN = this.$wN = null;
    this.$uN = Infinity;
    this.$tN = 0;
  };
  l.$CSB = Vc;
  Vc.__name__ = ["$CSB"];
  Vc.__interfaces__ = [wa];
  Vc.prototype = {
    $jN: function (a) {
      this.$uN = a;
      this.$sN(!0);
      return this;
    },
    $kN: function (a) {
      this.$vN = a;
      return this;
    },
    $lN: function (a) {
      this.$wN = a;
      return this;
    },
    $mN: function (a, b, c) {
      null == c && (c = !0);
      this.$qN(a);
      var f;
      f = null != this.$wN ? this.$wN(a, b) : 1;
      this.$tN += f;
      this.$sN(c);
      b = new ae(a, b);
      b.$zN = ++this.$xN;
      b.$hN = f;
      this.$yN.set(a, b);
    },
    $dN: function (a) {
      a = this.$yN.h[a.__id__];
      if (null == a) return null;
      a.$zN = ++this.$xN;
      return a.$fK;
    },
    $nN: function () {
      var a = this.$pN(!0);
      return null != a ? a.$xJ : null;
    },
    $pN: function (a) {
      for (var b = null, c = this.$yN.iterator(); c.hasNext(); ) {
        var f = c.next();
        if (null == b || f.$zN < b.$zN == a) b = f;
      }
      return b;
    },
    $qN: function (a, b) {
      null == b && (b = !0);
      var c = this.$yN.h[a.__id__];
      if (null == c) return null;
      null != this.$vN && b && this.$vN(a, c.$fK);
      this.$yN.remove(a);
      this.$tN -= c.$hN;
      return c.$fK;
    },
    $rN: function (a) {
      null == a && (a = !0);
      var b = this.$yN;
      this.$yN = new Ma();
      this.$tN = 0;
      if (null != this.$vN && a)
        for (a = b.iterator(); a.hasNext(); )
          (b = a.next()), this.$vN(b.$xJ, b.$fK);
    },
    dispose: function () {
      this.$rN();
    },
    $sN: function (a) {
      for (; this.$tN > this.$uN; ) {
        var b = this.$pN(a);
        if (null != b)
          null != this.$vN && this.$vN(b.$xJ, b.$fK),
            this.$yN.remove(b.$xJ),
            (this.$tN -= b.$hN);
        else break;
      }
    },
    __class__: Vc,
  };
  var ae = function (a, b) {
    this.$hN = 1;
    this.$zN = 0;
    this.$xJ = a;
    this.$fK = b;
  };
  l.$CTB = ae;
  ae.__name__ = ["$CTB"];
  ae.prototype = {
    __class__: ae,
  };
  var jb = function () {};
  l["kit.sound.Sound"] = jb;
  jb.__name__ = ["kit", "sound", "Sound"];
  jb.__interfaces__ = [Na];
  jb.prototype = {
    __class__: jb,
  };
  var ya = function () {
    this.$nM = !1;
    this.$kL = new Wc(this);
  };
  l.$CYB = ya;
  ya.__name__ = ["$CYB"];
  ya.__interfaces__ = [jb];
  ya.$DO = function () {
    null == ya.$AH && (ya.$AH = new ya());
    return ya.$AH;
  };
  ya.__super__ = V;
  ya.prototype = v(V.prototype, {
    play: function (a) {
      return this.$kL;
    },
    loop: function (a) {
      return this.$kL;
    },
    $lM: function () {},
    __class__: ya,
  });
  var kb = function () {};
  l["kit.sound.Playback"] = kb;
  kb.__name__ = ["kit", "sound", "Playback"];
  kb.__interfaces__ = [wa];
  kb.prototype = {
    __class__: kb,
  };
  var Wc = function (a) {
    this.$EO = a;
    this.volume = new O(0);
    this.$FO = new fa(!0);
  };
  l.$CZB = Wc;
  Wc.__name__ = ["$CZB"];
  Wc.__interfaces__ = [kb];
  Wc.prototype = {
    dispose: function () {},
    __class__: Wc,
  };
  var Xc = function () {};
  l["kit.subsystem.StorageSystem"] = Xc;
  Xc.__name__ = ["kit", "subsystem", "StorageSystem"];
  Xc.prototype = {
    __class__: Xc,
  };
  var Ub = function () {
    this.$rI = new X();
  };
  l.$CaB = Ub;
  Ub.__name__ = ["$CaB"];
  Ub.__interfaces__ = [Xc];
  Ub.prototype = {
    set: function (a, b) {
      this.$rI.set(a, b);
      return new sa().$bW(null);
    },
    get: function (a, b) {
      return new sa().$bW(this.$rI.exists(a) ? this.$rI.get(a) : b);
    },
    __class__: Ub,
  };
  var Xb = function () {
    this.down = new R();
    this.move = new R();
    this.up = new R();
  };
  l.$CbB = Xb;
  Xb.__name__ = ["$CbB"];
  Xb.__interfaces__ = [Uc];
  Xb.prototype = {
    get_supported: function () {
      return !1;
    },
    __class__: Xb,
  };
  var yb = function () {};
  l["kit.video.Video"] = yb;
  yb.__name__ = ["kit", "video", "Video"];
  yb.__interfaces__ = [Na];
  yb.prototype = {
    __class__: yb,
  };
  var Ja = function () {
    this.$nM = !1;
    this.$kL = new Yc(this);
  };
  l.$CcB = Ja;
  Ja.__name__ = ["$CcB"];
  Ja.__interfaces__ = [yb];
  Ja.$DO = function () {
    null == Ja.$AH && (Ja.$AH = new Ja());
    return Ja.$AH;
  };
  Ja.__super__ = V;
  Ja.prototype = v(V.prototype, {
    play: function (a) {
      return this.$kL;
    },
    get_width: function () {
      return 1;
    },
    get_height: function () {
      return 1;
    },
    $lM: function () {},
    __class__: Ja,
  });
  var zb = function () {};
  l["kit.video.VideoPlayback"] = zb;
  zb.__name__ = ["kit", "video", "VideoPlayback"];
  zb.__interfaces__ = [wa];
  zb.prototype = {
    __class__: zb,
  };
  var Yc = function (a) {
    this.$GO = a;
    this.volume = new O(0);
    this.$FO = new fa(!0);
    this.$NJ = m.$vG.$HG.createTexture(1, 1);
  };
  l.$CdB = Yc;
  Yc.__name__ = ["$CdB"];
  Yc.__interfaces__ = [zb];
  Yc.prototype = {
    get_video: function () {
      return this.$GO;
    },
    get_texture: function () {
      return this.$NJ;
    },
    dispose: function () {},
    __class__: Yc,
  };
  var lb = function () {
    this.$eF = [];
  };
  l.$CfB = lb;
  lb.__name__ = ["$CfB"];
  lb.__interfaces__ = [wa];
  lb.prototype = {
    $HO: function (a, b, c) {
      a.addEventListener(b, c, !1);
      this.$eF.push(new be(a, b, c));
    },
    $IO: function (a, b, c) {
      var f = this;
      this.$HO(a, b, function (a) {
        f.dispose();
        c(a);
      });
    },
    dispose: function () {
      for (var a = 0, b = this.$eF; a < b.length; ) {
        var c = b[a];
        ++a;
        c.$JO.removeEventListener(c.$gK, c.$KO, !1);
      }
      this.$eF = [];
    },
    __class__: lb,
  };
  var be = function (a, b, c) {
    this.$JO = a;
    this.$gK = b;
    this.$KO = c;
  };
  l.$CgB = be;
  be.__name__ = ["$CgB"];
  be.prototype = {
    __class__: be,
  };
  var Ld = function (a, b) {
    this.$MO = this.$NO = 0;
    var c = a + 150,
      f = b + 150;
    this.$OO = m.$vG.$HG.createTexture(c, f);
    this.$PO = m.$vG.$HG.createTexture(c, f);
    this.$LJ = a;
    this.$MJ = b;
  };
  l.$CiB = Ld;
  Ld.__name__ = ["$CiB"];
  Ld.prototype = {
    $QO: function (a, b) {
      if (a > this.$OO.get_width() || b > this.$OO.get_height()) {
        var c = r["int"](Math.max(this.$OO.get_width(), a + 150)),
          f = r["int"](Math.max(this.$OO.get_height(), b + 150));
        this.$OO.dispose();
        this.$PO.dispose();
        this.$OO = m.$vG.$HG.createTexture(c, f);
        this.$PO = m.$vG.$HG.createTexture(c, f);
      } else this.$OO.clear(), this.$PO.clear();
      this.$LJ = a;
      this.$MJ = b;
    },
    $RO: function (a) {
      null != a.$bK &&
        (a.outputOnly || a.setUniformSampler2D("uTexture", this.$OO),
        a.setUniformVec2("uFilterPosition", this.$MO, this.$NO),
        this.$PO.renderFilter(a, this.$LJ, this.$MJ),
        (a = this.$OO),
        (this.$OO = this.$PO),
        (this.$PO = a));
    },
    __class__: Ld,
  };
  var Ab = function () {};
  l.$CkB = Ab;
  Ab.__name__ = ["$CkB"];
  Ab.__interfaces__ = [dc];
  Ab.prototype = {
    __class__: Ab,
  };
  var ce = function () {};
  l["kit.subsystem.RendererSystem"] = ce;
  ce.__name__ = ["kit", "subsystem", "RendererSystem"];
  ce.prototype = {
    __class__: ce,
  };
  var Bb = function () {};
  l.$ClB = Bb;
  Bb.__name__ = ["$ClB"];
  Bb.__interfaces__ = [ce];
  Bb.prototype = {
    __class__: Bb,
  };
  var Xd = function () {};
  l.$CmB = Xd;
  Xd.__name__ = ["$CmB"];
  Xd.$MQ = function (a) {
    switch (a) {
      case 65:
        return e.A;
      case 66:
        return e.B;
      case 67:
        return e.C;
      case 68:
        return e.D;
      case 69:
        return e.E;
      case 70:
        return e.F;
      case 71:
        return e.G;
      case 72:
        return e.H;
      case 73:
        return e.I;
      case 74:
        return e.J;
      case 75:
        return e.K;
      case 76:
        return e.L;
      case 77:
        return e.M;
      case 78:
        return e.N;
      case 79:
        return e.O;
      case 80:
        return e.P;
      case 81:
        return e.Q;
      case 82:
        return e.R;
      case 83:
        return e.S;
      case 84:
        return e.T;
      case 85:
        return e.U;
      case 86:
        return e.V;
      case 87:
        return e.W;
      case 88:
        return e.X;
      case 89:
        return e.Y;
      case 90:
        return e.Z;
      case 48:
        return e.Number0;
      case 49:
        return e.Number1;
      case 50:
        return e.Number2;
      case 51:
        return e.Number3;
      case 52:
        return e.Number4;
      case 53:
        return e.Number5;
      case 54:
        return e.Number6;
      case 55:
        return e.Number7;
      case 56:
        return e.Number8;
      case 57:
        return e.Number9;
      case 96:
        return e.Numpad0;
      case 97:
        return e.Numpad1;
      case 98:
        return e.Numpad2;
      case 99:
        return e.Numpad3;
      case 100:
        return e.Numpad4;
      case 101:
        return e.Numpad5;
      case 102:
        return e.Numpad6;
      case 103:
        return e.Numpad7;
      case 104:
        return e.Numpad8;
      case 105:
        return e.Numpad9;
      case 107:
        return e.NumpadAdd;
      case 110:
        return e.NumpadDecimal;
      case 111:
        return e.NumpadDivide;
      case 108:
        return e.NumpadEnter;
      case 106:
        return e.NumpadMultiply;
      case 109:
        return e.NumpadSubtract;
      case 112:
        return e.F1;
      case 113:
        return e.F2;
      case 114:
        return e.F3;
      case 115:
        return e.F4;
      case 116:
        return e.F5;
      case 117:
        return e.F6;
      case 118:
        return e.F7;
      case 119:
        return e.F8;
      case 120:
        return e.F9;
      case 121:
        return e.F10;
      case 122:
        return e.F11;
      case 123:
        return e.F12;
      case 37:
        return e.Left;
      case 38:
        return e.Up;
      case 39:
        return e.Right;
      case 40:
        return e.Down;
      case 18:
        return e.Alt;
      case 192:
        return e.Backquote;
      case 220:
        return e.Backslash;
      case 8:
        return e.Backspace;
      case 20:
        return e.CapsLock;
      case 188:
        return e.Comma;
      case 15:
        return e.Command;
      case 17:
        return e.Control;
      case 46:
        return e.Delete;
      case 35:
        return e.End;
      case 13:
        return e.Enter;
      case 187:
        return e.Equals;
      case 27:
        return e.Escape;
      case 36:
        return e.Home;
      case 45:
        return e.Insert;
      case 219:
        return e.LeftBracket;
      case 189:
        return e.Minus;
      case 34:
        return e.PageDown;
      case 33:
        return e.PageUp;
      case 190:
        return e.Period;
      case 222:
        return e.Quote;
      case 221:
        return e.RightBracket;
      case 186:
        return e.Semicolon;
      case 16:
        return e.Shift;
      case 191:
        return e.Slash;
      case 32:
        return e.Space;
      case 9:
        return e.Tab;
      case 16777234:
        return e.Menu;
      case 16777247:
        return e.Search;
    }
    return e.Unknown(a);
  };
  var Xa = function () {
    this.$UQ = 0;
    this.$SQ = null;
    this.$OQ = new h();
    this.$TQ = [];
  };
  l.$CnB = Xa;
  Xa.__name__ = ["$CnB"];
  Xa.$VQ = function (a, b) {
    if (a.active) {
      var c = a.$zF[9];
      if (null != c && ((c.$zG = b), (b *= c.scale.$bG), 0 >= b)) {
        c.onUpdate(b);
        return;
      }
      for (c = a.firstComponent; null != c; ) {
        var f = c.next;
        0 == (c.$ZF & 1) && ((c.$ZF |= 1), c.$YF(), c.onStart());
        c.onUpdate(b);
        c = f;
      }
      for (c = a.firstChild; null != c; ) (f = c.next), Xa.$VQ(c, b), (c = f);
    }
  };
  Xa.prototype = {
    $hK: function () {
      if (1 == la.$dN("scaleMode")) {
        var a = new w();
        m.root.add(a);
        var b = la.$dN("width"),
          c = la.$dN("height"),
          f = la.$dN("maxWidth"),
          k = la.$dN("maxHeight"),
          d = function () {
            var d = Math.min(
              m.$vG.$IG.get_width() / b,
              m.$vG.$IG.get_height() / c
            );
            a.setXY(
              m.$vG.$IG.get_width() / 2 - (d * b) / 2,
              m.$vG.$IG.get_height() / 2 - (d * c) / 2
            );
            a.setScale(d);
            f * d < m.$vG.$IG.get_width() || k * d < m.$vG.$IG.get_height()
              ? (null == a.get_scissor() && a.set_scissor(new Ca()),
                a.get_scissor().set(b / 2 - f / 2, c / 2 - k / 2, f, k))
              : a.set_scissor(null);
          };
        d();
        m.$vG.$IG.resize.connect(d);
      }
    },
    $BG: function (a) {
      if (!(0 >= a)) {
        0.5 < a
          ? 3 >= this.$UQ && (++this.$UQ, (a = 0.016666666666666666))
          : (this.$UQ = 0);
        if (null != this.$SQ) {
          var b = this.$SQ;
          this.$SQ = null;
          for (var c = 0; c < b.length; ) {
            var f = b[c];
            ++c;
            f();
          }
        }
        for (b = 0; b < this.$TQ.length; )
          (c = this.$TQ[b]),
            null == c || c.update(a) ? this.$TQ.splice(b, 1) : ++b;
        m.volume.update(a);
        Xa.$VQ(m.root, a);
        Xa.$VQ(this.$OQ, a);
      }
    },
    $xI: function (a) {
      var b = a.graphics;
      null != b &&
        (a.willRender(),
        w.$II(m.root, b, !0),
        w.$II(this.$OQ, b, !0),
        a.didRender());
    },
    $PQ: function (a) {
      this.$TQ.push(a);
    },
    $RQ: function (a) {
      null == this.$SQ ? (this.$SQ = [a]) : this.$SQ.push(a);
    },
    __class__: Xa,
  };
  var W = function () {};
  l.$CoB = W;
  W.__name__ = ["$CoB"];
  W.$XQ = function (a, b, c, f, k, d, e) {
    if (3 > e) return !1;
    for (var g = 0, h = (2 * Math.PI) / e, l = 0; l < e; ) {
      var m = l++,
        n = Math.cos(g),
        q = Math.sin(g),
        g = g + h;
      a.push(k * n + c);
      a.push(d * q + f);
      m < e - 1 && (b.push(0), b.push(m), b.push(m + 1));
    }
    return !0;
  };
  W.$YQ = function (a, b, c, f, k, d, e, g) {
    if (3 > g) return !1;
    a.push(c);
    a.push(f);
    e /= g;
    var h = 0;
    for (g += 1; h < g; ) {
      var m = h++,
        l = Math.cos(d),
        n = Math.sin(d);
      d += e;
      a.push(k * l + c);
      a.push(k * n + f);
      b.push(0);
      b.push(m);
      b.push(m + 1);
    }
    return !0;
  };
  W.$ZQ = function (a, b, c, f, k, d, e, g, h) {
    e /= h;
    var m = [],
      l = 0;
    for (h += 1; l < h; ) {
      l++;
      var n = Math.cos(d),
        q = Math.sin(d);
      d += e;
      m.push(k * n + c);
      m.push(k * q + f);
    }
    return W.$bQ(a, b, m, g);
  };
  W.$aQ = function (a, b, c, f, k, d, e, g) {
    for (var h = 0, m = (2 * Math.PI) / g, l = [], n = 0; n < g; ) {
      n++;
      var q = Math.cos(h),
        r = Math.sin(h),
        h = h + m;
      l.push(k * q + c);
      l.push(d * r + f);
    }
    l.push(k + c);
    l.push(f);
    return W.$bQ(a, b, l, e);
  };
  W.$bQ = function (a, b, c, f) {
    var k = c.length;
    if (4 > k) return !1;
    f /= 2;
    var d = c[0],
      e = c[1],
      g = c[k - 2],
      h = c[k - 1],
      l = new ab(-(c[3] - e), c[2] - d);
    l.normalize();
    var m = l.x,
      l = l.y;
    a.push(d - f * m);
    a.push(e - f * l);
    a.push(d + f * m);
    a.push(e + f * l);
    d = (k / 2) | 0;
    for (e = 2; e < k - 2; ) {
      var n = c[e++],
        q = c[e++],
        r = c[e],
        v = c[e + 1],
        t = new ab(-(v - q), r - n);
      t.normalize();
      var s = new ab(t.x, t.y);
      s.add(m, l);
      s.normalize();
      var u = t.dot(s.x, s.y);
      s.multiply(f / u);
      if (0.15 > u) {
        var u = c[e - 4],
          w = c[e - 3];
        0 > (n - u) * (v - w) - (q - w) * (r - u)
          ? (a.push(n - s.x),
            a.push(q - s.y),
            a.push(n + m * f),
            a.push(q + l * f),
            a.push(n - s.x),
            a.push(q - s.y),
            a.push(n + t.x * f),
            a.push(q + t.y * f))
          : (a.push(n - m * f),
            a.push(q - l * f),
            a.push(n + s.x),
            a.push(q + s.y),
            a.push(n - t.x * f),
            a.push(q - t.y * f),
            a.push(n + s.x),
            a.push(q + s.y));
        ++d;
      } else a.push(n - s.x), a.push(q - s.y), a.push(n + s.x), a.push(q + s.y);
      m = t.x;
      l = t.y;
    }
    a.push(g - f * m);
    a.push(h - f * l);
    a.push(g + f * m);
    a.push(h + f * l);
    a = 0;
    for (c = d - 1; a < c; )
      (k = 2 * a++),
        b.push(k),
        b.push(k + 1),
        b.push(k + 2),
        b.push(k + 2),
        b.push(k + 3),
        b.push(k + 1);
    return !0;
  };
  W.$cQ = function (a) {
    if (6 > a.length) return null;
    null == W.$dQ && (W.$dQ = new de());
    return W.$dQ.triangulate(a);
  };
  var Zd = function () {};
  l.$CpB = Zd;
  Zd.__name__ = ["$CpB"];
  Zd.$fQ = function (a) {
    switch (a) {
      case 0:
        return ma.Left;
      case 1:
        return ma.Middle;
      case 2:
        return ma.Right;
    }
    return ma.Unknown(a);
  };
  var Yb = function () {
    this.$bI = null;
    s.call(this);
  };
  l.$CqB = Yb;
  Yb.__name__ = ["$CqB"];
  Yb.__super__ = s;
  Yb.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 10;
    },
    onStart: function () {
      var a = this,
        b = la.$eN();
      null != b &&
        m.$vG.$IG.orientation.watch(function (c, f) {
          null == c || c == b ? a.$iQ() : a.$hQ(c != f);
        });
    },
    $hQ: function (a) {
      var b = this;
      if (null == this.$bI) {
        this.owner.addChild((this.$bI = new h()));
        var c = this.$bI;
        m.loadAssetPack(pa.fromAssets("_2DKitOrientation")).then(function (f) {
          b.registerDisposable(f);
          var k = new Y(0, 0, 0);
          a && k.alpha.animate(0, 1, 0.3);
          c.add(k);
          var d = new N(f.getTexture("RotateDevice")).centerAnchor();
          c.addChild(new h().add(d));
          f = function () {
            k.setSize(m.$vG.$IG.get_width(), m.$vG.$IG.get_height());
            d.setXY(m.$vG.$IG.get_width() / 2, m.$vG.$IG.get_height() / 2);
          };
          f();
          b.connect0(m.$vG.$IG.resize, f);
        });
      }
    },
    $iQ: function () {
      null != this.$bI && (this.$bI.dispose(), (this.$bI = null));
    },
    __class__: Yb,
  });
  var Da = function () {};
  l.$CrB = Da;
  Da.__name__ = ["$CrB"];
  Da.$lQ = function (a) {
    var b = new La();
    b.useCache = !0;
    b.useEnumIndex = !1;
    b.serialize(a);
    return b.toString();
  };
  Da.$mQ = function (a) {
    return na.run(a);
  };
  Da.$nQ = function (a) {
    return Da.$pQ(Da.$lQ(a), !1);
  };
  Da.$oQ = function (a) {
    return Da.$mQ(Da.$pQ(a, !0));
  };
  Da.$pQ = function (a, b) {
    for (var c = "", f = new ee(a.length), d = 0, e = a.length; d < e; ) {
      var g = d++,
        h = f.nextInt() % 30;
      b && (h = -h);
      g = a.charCodeAt(g) + h;
      c += String.fromCharCode(g);
    }
    return c;
  };
  var Zc = function () {};
  l.$CsB = Zc;
  Zc.__name__ = ["$CsB"];
  Zc.prototype = {
    __class__: Zc,
  };
  var Cb = function () {};
  l.$CtB = Cb;
  Cb.__name__ = ["$CtB"];
  Cb.prototype = {
    __class__: Cb,
  };
  var Q = function (a, b) {
    this.$CR = new $c();
    this.$BR = !1;
    this.$AR = a.getContext("2d", {
      alpha: b,
    });
  };
  l.$CuB = Q;
  Q.__name__ = ["$CuB"];
  Q.__interfaces__ = [Ab];
  Q.prototype = {
    save: function () {
      var a = this.$CR,
        b = this.$CR.next;
      null == b && ((b = new $c()), (b.$GR = a), (a.next = b));
      b.$HM = a.$HM;
      b.$JM = a.$JM;
      b.$LM = a.$LM;
      b.$ER = a.$ER;
      b.$FR = a.$FR;
      this.$CR = b;
      this.$AR.save();
    },
    translate: function (a, b) {
      this.$AR.translate(a | 0, b | 0);
    },
    scale: function (a, b) {
      this.$AR.scale(a, b);
    },
    rotate: function (a) {
      this.$AR.rotate((3.141592653589793 * a) / 180);
    },
    transform: function (a, b, c, f, d, e) {
      this.$AR.transform(a, b, c, f, d, e);
    },
    restore: function () {
      this.$CR = this.$CR.$GR;
      this.$AR.restore();
    },
    $qQ: function (a, b, c, f, d) {
      var e = this.$CR,
        e =
          (((255 * e.$HM) & 255) << 16) |
          (((255 * e.$JM) & 255) << 8) |
          ((255 * e.$LM) & 255);
      null == Q.$DR && (Q.$DR = A.$tS(f, d));
      Q.$DR.width = f;
      Q.$DR.height = d;
      var g = Q.$DR.getContext("2d", null);
      g.globalCompositeOperation = "copy";
      g.fillStyle = A.$zS(e);
      g.fillRect(0, 0, f, d);
      g.globalCompositeOperation = "multiply";
      g.drawImage(a, b, c, f, d, 0, 0, f, d);
      g.globalCompositeOperation = "destination-atop";
      g.drawImage(a, b, c, f, d, 0, 0, f, d);
      return Q.$DR;
    },
    drawTexture: function (a, b, c) {
      this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height());
    },
    drawSubTexture: function (a, b, c, f, d, e, g) {
      if (this.$BR)
        (this.$BR = !1),
          (this.$AR.globalCompositeOperation = "copy"),
          this.drawSubTexture(a, b, c, f, d, e, g),
          (this.$AR.globalCompositeOperation = "source-over");
      else {
        var h = a.$RN;
        f = (a.$SN + f) | 0;
        a = (a.$TN + d) | 0;
        e |= 0;
        g |= 0;
        b |= 0;
        c |= 0;
        d = h.$XH;
        this.$CR.$ER
          ? ((h = this.$qQ(h.$RR, f, a, e, g)),
            this.$AR.drawImage(h, b * d, c * d, e * d, g * d))
          : this.$AR.drawImage(h.$RR, f * d, a * d, e * d, g * d, b, c, e, g);
      }
    },
    drawPattern: function (a, b, c, f, d) {
      if (this.$BR)
        (this.$BR = !1),
          (this.$AR.globalCompositeOperation = "copy"),
          this.drawPattern(a, b, c, f, d),
          (this.$AR.globalCompositeOperation = "source-over");
      else {
        var e = this.$CR,
          g = a.$RN.$XH;
        1 != g && (this.$AR.save(), this.$AR.scale(1 / g, 1 / g));
        b |= 0;
        c |= 0;
        f |= 0;
        d |= 0;
        e.$FR
          ? this.$AR.rect(b, c, f, d)
          : ((this.$AR.fillStyle = this.$yQ(a)),
            this.$AR.fillRect(b, c, f * g, d * g));
        1 != g && this.$AR.restore();
      }
    },
    fillRect: function (a, b, c, f, d) {
      this.$BR
        ? ((this.$BR = !1),
          (this.$AR.globalCompositeOperation = "copy"),
          this.fillRect(a, b, c, f, d),
          (this.$AR.globalCompositeOperation = "source-over"))
        : ((b |= 0),
          (c |= 0),
          (f |= 0),
          (d |= 0),
          this.$CR.$FR
            ? this.$AR.rect(b, c, f, d)
            : ((this.$AR.fillStyle = this.$xQ(a)),
              this.$AR.fillRect(b, c, f, d)));
    },
    fillTriangles: function (a, b, c) {
      this.$BR = !1;
      this.$rQ(b, c);
      this.$zQ(a);
    },
    drawTriangles: function (a, b, c, f) {
      this.$BR = !1;
      this.$rQ(b, c);
      this.$$Q(a);
    },
    $rQ: function (a, b) {
      this.$AR.beginPath();
      for (var c = 0, f = b.length; c < f; ) {
        var d = 2 * b[c],
          e = 2 * b[c + 1],
          g = 2 * b[c + 2],
          c = c + 3;
        this.$AR.moveTo(a[d], a[d + 1]);
        this.$AR.lineTo(a[e], a[e + 1]);
        this.$AR.lineTo(a[g], a[g + 1]);
      }
      this.$AR.closePath();
    },
    fillPolygon: function (a, b) {
      this.$BR = !1;
      this.$sQ(b);
      this.$zQ(a);
    },
    drawPolygon: function (a, b) {
      this.$BR = !1;
      this.$sQ(b);
      this.$$Q(a);
    },
    $sQ: function (a) {
      this.$AR.beginPath();
      for (var b = 0, c = a.length; b < c; ) {
        var f = a[b++],
          d = a[b++];
        this.$AR.lineTo(f, d);
      }
      this.$AR.closePath();
    },
    drawCircle: function (a, b, c, f, d) {
      this.$BR = !1;
      this.$tQ(b, c, f);
      this.$$Q(a);
    },
    fillCircle: function (a, b, c, f, d) {
      this.$BR = !1;
      this.$tQ(b, c, f);
      this.$zQ(a);
    },
    strokeCircle: function (a, b, c, f, d, e) {
      this.$BR = !1;
      this.$tQ(b, c, f);
      this.$_Q(a, d);
    },
    $tQ: function (a, b, c) {
      this.$AR.beginPath();
      this.$AR.arc(a, b, c, 0, 6.283185307179586);
      this.$AR.closePath();
    },
    drawEllipse: function (a, b, c, f, d, e) {
      this.$BR = !1;
      this.$uQ(b, c, f, d);
      this.$$Q(a);
    },
    fillEllipse: function (a, b, c, f, d, e) {
      this.$BR = !1;
      this.$uQ(b, c, f, d);
      this.$zQ(a);
    },
    strokeEllipse: function (a, b, c, f, d, e, g) {
      this.$BR = !1;
      this.$uQ(b, c, f, d);
      this.$_Q(a, e);
    },
    $uQ: function (a, b, c, f) {
      var d = 0.5522848 * c,
        e = 0.5522848 * f,
        g = a - c,
        h = b - f;
      c = a + c;
      f = b + f;
      this.$AR.beginPath();
      this.$AR.moveTo(g, b);
      this.$AR.bezierCurveTo(g, b - e, a - d, h, a, h);
      this.$AR.bezierCurveTo(a + d, h, c, b - e, c, b);
      this.$AR.bezierCurveTo(c, b + e, a + d, f, a, f);
      this.$AR.bezierCurveTo(a - d, f, g, b + e, g, b);
      this.$AR.closePath();
    },
    fillArc: function (a, b, c, f, d, e, g) {
      this.$BR = !1;
      e = d + e;
      this.$AR.beginPath();
      this.$AR.moveTo(b, c);
      this.$AR.arc(
        0,
        0,
        f,
        (3.141592653589793 * d) / 180,
        (3.141592653589793 * e) / 180
      );
      this.$zQ(a);
    },
    strokeArc: function (a, b, c, f, d, e, g, h) {
      this.$BR = !1;
      c = d + e;
      this.$AR.beginPath();
      this.$AR.arc(
        b,
        b,
        f,
        (3.141592653589793 * d) / 180,
        (3.141592653589793 * c) / 180
      );
      this.$_Q(a, g);
    },
    strokeLines: function (a, b, c) {
      this.$BR = !1;
      this.$vQ(b);
      this.$AR.lineWidth = c;
      this.$AR.strokeStyle = this.$xQ(a);
      this.$AR.stroke();
    },
    drawLines: function (a, b, c) {
      this.$BR = !1;
      this.$vQ(b);
      this.$AR.lineWidth = c;
      this.$AR.strokeStyle = this.$yQ(a);
      this.$AR.stroke();
    },
    $vQ: function (a) {
      this.$AR.beginPath();
      if (2 <= a.length) {
        this.$AR.moveTo(a[0], a[1]);
        for (var b = 2, c = a.length; b < c; ) {
          var f = a[b++],
            d = a[b++];
          this.$AR.lineTo(f, d);
        }
      }
    },
    multiplyAlpha: function (a) {
      this.$AR.globalAlpha *= a;
    },
    setAlpha: function (a) {
      this.$AR.globalAlpha = a;
    },
    tint: function (a, b, c) {
      var f = this.$CR;
      f.$HM *= a;
      f.$JM *= b;
      f.$LM *= c;
      f.$ER = !0;
    },
    setBlendMode: function (a) {
      var b;
      switch (a[1]) {
        case 0:
          b = "source-over";
          break;
        case 1:
          b = "lighter";
          break;
        case 2:
          b = "multiply";
          break;
        case 3:
          b = "screen";
          break;
        case 4:
          b = "destination-in";
          break;
        case 5:
          b = "copy";
      }
      this.$AR.globalCompositeOperation = b;
    },
    beginMask: function () {
      var a = this.$CR;
      a.$FR && this.endMask();
      a.$FR = !0;
      this.$AR.beginPath();
    },
    endMask: function () {
      var a = this.$CR;
      a.$FR && ((a.$FR = !1), this.$AR.clip());
    },
    applyScissor: function (a, b, c, f) {
      this.$AR.beginPath();
      this.$AR.rect(a | 0, b | 0, c | 0, f | 0);
      this.$AR.clip();
    },
    willRender: function () {
      this.$BR = !0;
    },
    didRender: function () {},
    onResize: function (a, b) {},
    $xQ: function (a) {
      var b = this.$CR;
      b.$ER &&
        (a =
          (((((b.$HM * (a & 16711680)) / 16711680) * 255) & 255) << 16) |
          (((((b.$JM * (a & 65280)) / 65280) * 255) & 255) << 8) |
          ((((b.$LM * (a & 255)) / 255) * 255) & 255));
      return A.$zS(a);
    },
    $yQ: function (a) {
      return this.$CR.$ER
        ? ((a = this.$qQ(a.$RN.$RR, a.$SN, a.$TN, a.$LJ, a.$MJ)),
          this.$AR.createPattern(a, "repeat"))
        : a.$KR();
    },
    $zQ: function (a) {
      this.$CR.$FR || ((this.$AR.fillStyle = this.$xQ(a)), this.$AR.fill());
    },
    $$Q: function (a) {
      this.$CR.$FR || ((this.$AR.fillStyle = this.$yQ(a)), this.$AR.fill());
    },
    $_Q: function (a, b) {
      this.$CR.$FR ||
        ((this.$AR.strokeStyle = this.$xQ(a)),
        (this.$AR.lineWidth = b),
        this.$AR.stroke());
    },
    __class__: Q,
  };
  var $c = function () {
    this.$GR = this.next = null;
    this.$ER = this.$FR = !1;
    this.$HM = this.$JM = this.$LM = 1;
  };
  l.$CvB = $c;
  $c.__name__ = ["$CvB"];
  $c.prototype = {
    __class__: $c,
  };
  var qb = function (a) {
    this.graphics = new Q(a, !1);
    this.$JR = new fa(!0);
  };
  l.$CwB = qb;
  qb.__name__ = ["$CwB"];
  qb.__interfaces__ = [Bb];
  qb.prototype = {
    get_type: function () {
      return za.Canvas;
    },
    get_filterSupported: function () {
      return !1;
    },
    createTextureFromImage: function (a, b, c) {
      null == c && (c = 1);
      a = new Db(a, c);
      return a.createTexture(a.$NR / c, a.$OR / c);
    },
    createTexture: function (a, b, c, f) {
      null == f && (f = 1);
      a = A.$tS(a, b);
      return this.createTextureFromImage(a, null, f);
    },
    getTextureAssetFormats: function () {
      return [];
    },
    willRender: function () {
      this.graphics.willRender();
    },
    didRender: function () {
      this.graphics.didRender();
    },
    __class__: qb,
  };
  var ad = function (a, b, c) {
    this.$MR = 0;
    this.$LR = null;
    Ka.call(this, a, b, c);
  };
  l.$CxB = ad;
  ad.__name__ = ["$CxB"];
  ad.__super__ = Ka;
  ad.prototype = v(Ka.prototype, {
    $KR: function () {
      if (this.$MR != this.$RN.$SR || null == this.$LR)
        (this.$MR = this.$RN.$SR),
          (this.$LR = this.$RN.$UR(this.$SN, this.$TN, this.$LJ, this.$MJ));
      return this.$LR;
    },
    __class__: ad,
  });
  var Db = function (a, b) {
    this.$WR = null;
    this.$SR = 0;
    this.$nM = !1;
    this.$RR = a;
    this.$NR = a.width;
    this.$OR = a.height;
    this.$XH = b;
    this.$PR = this.$NR / b;
    this.$QR = this.$OR / b;
  };
  l.$CyB = Db;
  Db.__name__ = ["$CyB"];
  Db.__interfaces__ = [Zc];
  Db.__super__ = V;
  Db.prototype = v(V.prototype, {
    createTexture: function (a, b) {
      return new ad(this, Math.ceil(a), Math.ceil(b));
    },
    getGraphics: function () {
      null == this.$WR && (this.$VR(), (this.$WR = new bd(this)));
      return this.$WR;
    },
    clear: function () {
      var a = this.$VR();
      a.save();
      a.setTransform(1, 0, 0, 1, 0, 0);
      a.clearRect(0, 0, this.$RR.width, this.$RR.height);
      a.restore();
    },
    renderFilter: function (a, b, c) {
      null;
    },
    $UR: function (a, b, c, f) {
      var d = this.$VR(),
        e = this.$RR;
      if (0 != a || 0 != b || c != this.$PR || f != this.$QR)
        (e = A.$tS(c, f)),
          (c = e.getContext("2d", null)),
          (c.globalCompositeOperation = "copy"),
          c.drawImage(this.$RR, -a, -b);
      return d.createPattern(e, "repeat");
    },
    $VR: function () {
      K.__instanceof(this.$RR, HTMLCanvasElement) ||
        (this.$RR = A.$uS(this.$RR));
      return this.$RR.getContext("2d", null);
    },
    $lM: function () {
      this.$WR = this.$RR = null;
    },
    __class__: Db,
  });
  var bd = function (a) {
    Q.call(this, a.$RR, !0);
    this.$XR = a;
  };
  l.$CzB = bd;
  bd.__name__ = ["$CzB"];
  bd.__super__ = Q;
  bd.prototype = v(Q.prototype, {
    drawTexture: function (a, b, c) {
      Q.prototype.drawTexture.call(this, a, b, c);
      ++this.$XR.$SR;
    },
    drawSubTexture: function (a, b, c, f, d, e, g) {
      Q.prototype.drawSubTexture.call(this, a, b, c, f, d, e, g);
      ++this.$XR.$SR;
    },
    drawPattern: function (a, b, c, f, d) {
      Q.prototype.drawPattern.call(this, a, b, c, f, d);
      ++this.$XR.$SR;
    },
    fillRect: function (a, b, c, f, d) {
      Q.prototype.fillRect.call(this, a, b, c, f, d);
      ++this.$XR.$SR;
    },
    fillTriangles: function (a, b, c) {
      Q.prototype.fillTriangles.call(this, a, b, c);
      ++this.$XR.$SR;
    },
    drawTriangles: function (a, b, c, f) {
      Q.prototype.drawTriangles.call(this, a, b, c);
      ++this.$XR.$SR;
    },
    drawCircle: function (a, b, c, f, d) {
      null == d && (d = 50);
      Q.prototype.drawCircle.call(this, a, b, c, f, d);
      ++this.$XR.$SR;
    },
    fillCircle: function (a, b, c, f, d) {
      null == d && (d = 50);
      Q.prototype.fillCircle.call(this, a, b, c, f, d);
      ++this.$XR.$SR;
    },
    drawEllipse: function (a, b, c, f, d, e) {
      null == e && (e = 50);
      Q.prototype.drawEllipse.call(this, a, b, c, f, d, e);
      ++this.$XR.$SR;
    },
    fillEllipse: function (a, b, c, f, d, e) {
      null == e && (e = 50);
      Q.prototype.fillEllipse.call(this, a, b, c, f, d, e);
      ++this.$XR.$SR;
    },
    strokeLines: function (a, b, c) {
      Q.prototype.strokeLines.call(this, a, b, c);
      ++this.$XR.$SR;
    },
    drawLines: function (a, b, c) {
      Q.prototype.drawLines.call(this, a, b, c);
      ++this.$XR.$SR;
    },
    __class__: bd,
  });
  var J = function (a, b) {
    wb.call(this, a, b);
  };
  l.$C_B = J;
  J.__name__ = ["$C_B"];
  J.$dR = function (a) {
    var b = [q.PNG, q.JPG, q.GIF],
      c = 2,
      f;
    f = window.document.createElement("img");
    f.onload = f.onerror = function (d) {
      1 == f.width && b.unshift(q.WEBP);
      --c;
      0 == c && a(b);
    };
    f.src =
      "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
    var d;
    d = window.document.createElement("img");
    d.onload = d.onerror = function (f) {
      1 == d.width && b.unshift(q.JXR);
      --c;
      0 == c && a(b);
    };
    d.src =
      "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA==";
  };
  J.$eR = function () {
    var a;
    a = window.document.createElement("audio");
    if (null == a || null == D(a, a.canPlayType)) return [];
    var b = new Qa("\\b(iPhone|iPod|iPad|Android|Windows Phone)\\b", ""),
      c = window.navigator.userAgent;
    if (!E.get_supported() && b.match(c)) return [];
    b = [];
    b.push({
      format: q.MP3,
      mimeType: "audio/mpeg",
    });
    b.push({
      format: q.MP4,
      mimeType: "video/mp4",
    });
    for (
      var c = [
          {
            format: q.OGG,
            mimeType: "audio/ogg; codecs=vorbis",
          },
          {
            format: q.WAV,
            mimeType: "audio/wav",
          },
          {
            format: q.WEBM,
            mimeType: "video/webm",
          },
        ],
        b = 0 <= window.navigator.userAgent.indexOf("2DKSim") ? c : b.concat(c),
        c = [],
        f = 0;
      f < b.length;

    ) {
      var d = b[f];
      ++f;
      var e = "";
      try {
        e = a.canPlayType(d.mimeType);
      } catch (g) {
        g instanceof u && (g = g.val);
      }
      "" != e && c.push(d.format);
    }
    return c;
  };
  J.$fR = function () {
    if (J.$qR) {
      J.$qR = !1;
      if (
        new Qa("\\bSilk\\b", "").match(window.navigator.userAgent) ||
        null == window.Blob
      )
        return !1;
      var a = new XMLHttpRequest();
      a.open("GET", ".", !0);
      if ("" != a.responseType) return !1;
      a.responseType = "blob";
      if ("blob" != a.responseType) return !1;
      J.$rR = A.$lS("URL").value;
    }
    return null != J.$rR && null != J.$rR.createObjectURL;
  };
  J.$gR = function (a) {
    var b = ++J.$oR;
    null == J.$nR && (J.$nR = new va());
    J.$nR.h[b] = a;
    return b;
  };
  J.$hR = function (a) {
    J.$nR.remove(a);
  };
  J.__super__ = wb;
  J.prototype = v(wb.prototype, {
    $rM: function (a, b) {
      var c = this;
      switch (b.format[1]) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
          var f;
          f = window.document.createElement("img");
          var d = new lb();
          d.$IO(f, "load", function (a) {
            J.$fR() && J.$rR.revokeObjectURL(f.src);
            a = c.$vG.getRenderer().createTextureFromImage(f, null, 1);
            null != a ? c.$tM(b, a) : c.$xM(b);
          });
          d.$IO(f, "error", function (a) {
            c.$wM(b, "Failed to load image");
          });
          d = "data:" == B.substr(a, 0, 5);
          !d && J.$fR()
            ? this.$bR(a, b, "blob", function (a) {
                f.src = J.$rR.createObjectURL(a);
              })
            : (d || (f.crossOrigin = ""), (f.src = a));
          break;
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
          if (E.get_supported())
            this.$bR(a, b, "arraybuffer", function (a) {
              E.$ST.decodeAudioData(
                a,
                function (a) {
                  c.$tM(b, new E(a));
                },
                function () {
                  c.$tM(b, ya.$DO());
                }
              );
            });
          else {
            var e;
            e = window.document.createElement("audio");
            e.preload = "auto";
            var g = J.$gR(e),
              d = new lb();
            d.$IO(e, "canplaythrough", function (a) {
              J.$hR(g);
              c.$tM(b, new Eb(e));
            });
            d.$IO(e, "error", function (a) {
              J.$hR(g);
              a = e.error.code;
              3 == a || 4 == a
                ? c.$tM(b, ya.$DO())
                : c.$wM(b, "Failed to load audio: " + e.error.code);
            });
            d.$HO(e, "progress", function (a) {
              0 < e.buffered.length &&
                0 < e.duration &&
                ((a = e.buffered.end(0) / e.duration),
                c.$uM(b, (a * b.bytes) | 0, b.bytes));
            });
            e.src = a;
            e.load();
          }
          break;
        case 17:
        case 18:
          var h;
          h = window.document.createElement("video");
          h.preload = "metadata";
          var l = J.$gR(h),
            d = new lb();
          d.$IO(h, "loadedmetadata", function (a) {
            J.$hR(l);
            c.$tM(b, new Fb(h));
          });
          d.$IO(h, "error", function (a) {
            J.$hR(l);
            c.$wM(b, "Failed to load video: " + h.error.code);
          });
          h.src = a;
          h.load();
          break;
        case 13:
        case 14:
        case 15:
          (function (a, f) {
            var d = "_kit_font_" + J.$pR;
            ++J.$pR;
            if ("undefined" != typeof FontFace)
              new FontFace(d, "url(" + a + ")", {}).load().then(
                function (a) {
                  window.document.fonts.add(a);
                  c.$tM(b, new mb(d, a));
                },
                function (a) {
                  c.$wM(b, a.message);
                }
              );
            else {
              var e;
              e = window.document.createElement("style");
              e.innerHTML =
                "@font-face{font-family:" + d + ";src:url(" + a + ");}";
              window.document.head.appendChild(e);
              var k = window.document
                .createElement("canvas")
                .getContext("2d", null);
              k.font = "300px sans";
              var g = k.measureText("BESbswy").width;
              k.font = '300px "' + d + '"';
              var p = Date.now() / 1e3;
              m.nextFrame(
                (function (a) {
                  var f = null;
                  return (f = function () {
                    var a = Date.now() / 1e3 - p,
                      h = k.measureText("BESbswy").width;
                    5 <= a || g != h
                      ? c.$tM(b, new mb(d, null, e))
                      : m.$vG.$AG.$RQ(f);
                  });
                })(this)
              );
            }
          })(a, !1);
          break;
        case 19:
          this.$bR(a, b, "text", function (a) {
            c.$tM(b, new xb(a));
          });
      }
    },
    $sM: function (a) {
      var b = this;
      null == J.$mR &&
        ((J.$mR = new sa()),
        J.$dR(function (a) {
          var f;
          f = window.navigator.isCocoonJS
            ? [q.TTF, q.WOFF]
            : [q.WOFF, q.OTF, q.TTF];
          a = b.$vG
            .getRenderer()
            .getTextureAssetFormats()
            .concat(a)
            .concat(J.$eR())
            .concat(f)
            .concat([q.Data]);
          J.$mR.$bW(a);
        }));
      J.$mR.then(a);
    },
    $bR: function (a, b, c, f) {
      this.$cR(a, b, c, f);
    },
    $cR: function (a, b, c, f) {
      var d = this,
        e = null,
        g = null,
        h = 0,
        l = !1,
        m = function () {
          l && ((l = !1), window.clearInterval(h));
        },
        n = 3,
        q = function () {
          --n;
          return 0 <= n ? (g(), !0) : !1;
        },
        g = function () {
          m();
          null != e && e.abort();
          e = new XMLHttpRequest();
          e.open("GET", a, !0);
          e.responseType = c;
          var g = 0;
          e.onprogress = function (a) {
            l ||
              ((l = !0),
              (h = window.setInterval(function () {
                4 != e.readyState &&
                  5e3 < Date.now() - g &&
                  !q() &&
                  (m(), d.$wM(b, "Download stalled"));
              }, 1e3)));
            g = Date.now();
            d.$uM(b, a.loaded, a.total);
          };
          e.onerror = function (a) {
            (0 == e.status && q()) || (m(), d.$wM(b, "HTTP error " + e.status));
          };
          e.onload = function (a) {
            a = e.response;
            null == a && (a = e.responseText);
            m();
            f(a);
          };
          e.send();
        };
      g();
    },
    __class__: J,
  });
  var fe = function () {};
  l["kit.subsystem.ExternalSystem"] = fe;
  fe.__name__ = ["kit", "subsystem", "ExternalSystem"];
  fe.prototype = {
    __class__: fe,
  };
  var Zb = function () {};
  l.$CBC = Zb;
  Zb.__name__ = ["$CBC"];
  Zb.__interfaces__ = [fe];
  Zb.prototype = {
    call: function (a, b) {
      null == b && (b = []);
      for (var c = window, f = c, d = 0, e = a.split("."); d < e.length; ) {
        var g = e[d];
        ++d;
        c = f;
        f = T.field(c, g);
      }
      return f.apply(c, b);
    },
    __class__: Zb,
  };
  var Vb = function (a, b) {
    qa.call(this, a);
    this.$TG = b;
  };
  l.$CFC = Vb;
  Vb.__name__ = ["$CFC"];
  Vb.__super__ = qa;
  Vb.prototype = v(qa.prototype, {
    set_cursor: function (a) {
      var b;
      switch (a[1]) {
        case 0:
          b = "";
          break;
        case 1:
          b = "pointer";
          break;
        case 2:
          b = "none";
      }
      this.$TG.style.cursor = b;
      return qa.prototype.set_cursor.call(this, a);
    },
    __class__: Vb,
  });
  var Eb = function (a) {
    this.$nM = !1;
    this.$PS = a;
  };
  l.$CGC = Eb;
  Eb.__name__ = ["$CGC"];
  Eb.__interfaces__ = [jb];
  Eb.__super__ = V;
  Eb.prototype = v(V.prototype, {
    play: function (a) {
      null == a && (a = 1);
      return new Gb(this, a, !1);
    },
    loop: function (a) {
      null == a && (a = 1);
      return new Gb(this, a, !0);
    },
    $lM: function () {
      this.$PS = null;
    },
    __class__: Eb,
  });
  var Gb = function (a, b, c) {
    this.$WS = !1;
    var f = this;
    this.$EO = a;
    this.$ES = !1;
    this.$SS = window.document.createElement("audio");
    this.$SS.loop = c;
    this.$SS.src = a.$PS.src;
    this.volume = new O(b, function (a, b) {
      f.$RS();
    });
    this.$RS();
    this.$FO = new fa(!1);
    this.$QS();
    m.hidden.$bG && this.set_paused(!0);
  };
  l.$CHC = Gb;
  Gb.__name__ = ["$CHC"];
  Gb.__interfaces__ = [Cb, kb];
  Gb.prototype = {
    set_paused: function (a) {
      a != this.$WS && ((this.$WS = a) ? this.$SS.pause() : this.$QS());
      return a;
    },
    update: function (a) {
      this.volume.update(a);
      this.$FO.set__(this.$SS.ended);
      return this.$FO.$bG || this.$WS
        ? ((this.$ES = !1), this.$TS.dispose(), this.$US.dispose(), !0)
        : !1;
    },
    dispose: function () {
      this.set_paused(!0);
      this.$FO.set__(!0);
    },
    $QS: function () {
      var a = this;
      this.$SS.play();
      this.$ES ||
        (xa.$ZG.$AG.$PQ(this),
        (this.$ES = !0),
        (this.$TS = m.volume.get_changed().connect(function (b, c) {
          a.$RS();
        })),
        (this.$US = m.hidden.get_changed().connect(function (b, c) {
          b ? ((a.$VS = a.$WS), a.set_paused(!0)) : a.set_paused(a.$VS);
        })));
    },
    $RS: function () {
      this.$SS.volume = ha.clamp(m.volume.$bG * this.volume.$bG, 0, 1);
    },
    __class__: Gb,
  };
  var ge = function () {};
  l["kit.subsystem.StageSystem"] = ge;
  ge.__name__ = ["kit", "subsystem", "StageSystem"];
  ge.prototype = {
    __class__: ge,
  };
  var db = function (a) {
    this.$bS = 1;
    this.orientation = new fa(null);
    var b = this;
    this.$TG = a;
    this.resize = new Ya();
    this.$bS = db.$cS();
    A.$$S() ||
      (A.$oS(this.$TG, "transform-origin", "top left"),
      A.$oS(this.$TG, "transform", "scale(" + 1 / this.$bS + ")"));
    window.addEventListener("resize", D(this, this.$XS), !1);
    this.$XS(null);
    this.fullscreen = new fa(!1);
    A.$pS(
      window.document,
      "fullscreenchange",
      function (a) {
        b.$aS();
      },
      !1
    );
    this.$aS();
  };
  l.$CIC = db;
  db.__name__ = ["$CIC"];
  db.__interfaces__ = [ge];
  db.$cS = function () {
    var a = window.devicePixelRatio;
    null == a && (a = 1);
    var b = window.document.createElement("canvas").getContext("2d", null),
      b = A.$lS("backingStorePixelRatio", b).value;
    null == b && (b = 1);
    return a / b;
  };
  db.prototype = {
    get_width: function () {
      return this.$TG.width;
    },
    get_height: function () {
      return this.$TG.height;
    },
    get_scaleFactor: function () {
      return this.$bS;
    },
    get_fullscreenSupported: function () {
      return (
        !0 ==
        A.$mS(["fullscreenEnabled", "fullScreenEnabled"], window.document).value
      );
    },
    lockOrientation: function (a) {
      var b = A.$lS("lockOrientation", window.screen).value;
      if (null != b) {
        var c;
        switch (a[1]) {
          case 0:
            c = "portrait";
            break;
          case 1:
            c = "landscape";
        }
        T.callMethod(window.screen, b, [c]) || null;
      }
    },
    requestFullscreen: function (a) {
      null == a && (a = !0);
      if (a) {
        a = window.document.documentElement;
        var b = A.$mS(["requestFullscreen", "requestFullScreen"], a).value;
        null != b && b.apply(a, []);
      } else
        (a = A.$mS(
          ["exitFullscreen", "cancelFullscreen", "cancelFullScreen"],
          window.document
        ).value),
          null != a && T.callMethod(window.document, a, []);
    },
    $XS: function (a) {
      var b = this.$TG.parentElement.getBoundingClientRect();
      !A.$gS || (90 != window.orientation && -90 != window.orientation)
        ? this.$YS(b.width, b.height)
        : ((a = Math.min(window.innerWidth, b.width)),
          (b = Math.min(window.innerHeight, b.height)),
          this.$YS(a, b) && window.scrollTo(window.scrollX, window.scrollY));
      this.$ZS();
    },
    $YS: function (a, b) {
      var c = this.$bS * a,
        f = this.$bS * b;
      if (this.$TG.width == c && this.$TG.height == f) return !1;
      1 != this.$bS &&
        A.$$S() &&
        ((this.$TG.style.width = a + "px"), (this.$TG.style.height = b + "px"));
      this.$TG.width = c | 0;
      this.$TG.height = f | 0;
      this.resize.emit();
      return !0;
    },
    $ZS: function () {
      null == window.orientation
        ? this.orientation.set__(null)
        : this.orientation.set__(
            window.innerWidth > window.innerHeight ? Ha.Landscape : Ha.Portrait
          );
    },
    $aS: function () {
      var a = A.$mS(
        ["fullscreen", "fullScreen", "isFullScreen"],
        window.document
      ).value;
      this.fullscreen.set__(!0 == a);
    },
    __class__: db,
  };
  var Tb = function (a, b) {
    this.$dS = a;
    this.$eS = b + ":";
  };
  l.$CJC = Tb;
  Tb.__name__ = ["$CJC"];
  Tb.__interfaces__ = [Xc];
  Tb.prototype = {
    set: function (a, b) {
      var c = Da.$nQ(b);
      try {
        this.$dS.setItem(this.$eS + a, c);
      } catch (f) {
        return f instanceof u && (f = f.val), new sa().failure(f.message);
      }
      return new sa().$bW(null);
    },
    get: function (a, b) {
      var c = null;
      try {
        c = this.$dS.getItem(this.$eS + a);
      } catch (f) {
        f instanceof u && (f = f.val), null;
      }
      var d = b;
      if (null != c)
        try {
          d = Da.$oQ(c);
        } catch (e) {
          e instanceof u && (e = e.val), null;
        }
      return new sa().$bW(d);
    },
    __class__: Tb,
  };
  var A = function () {};
  l.$CKC = A;
  A.__name__ = ["$CKC"];
  A.$kS = function (a, b) {
    null == b && (b = 0);
    window.setTimeout(a, b);
  };
  A.$lS = function (a, b) {
    null == b && (b = window);
    var c = T.field(b, a);
    if (null != c)
      return {
        prefix: "",
        field: a,
        value: c,
      };
    for (
      var c = a.charAt(0).toUpperCase() + B.substr(a, 1, null),
        f = 0,
        d = A.$fS;
      f < d.length;

    ) {
      var e = d[f];
      ++f;
      var g = e + c,
        h = T.field(b, g);
      if (null != h)
        return {
          prefix: e,
          field: g,
          value: h,
        };
    }
    return {
      prefix: null,
      field: null,
      value: null,
    };
  };
  A.$mS = function (a, b) {
    for (var c = 0; c < a.length; ) {
      var f = a[c];
      ++c;
      f = A.$lS(f, b);
      if (null != f.field) return f;
    }
    return {
      prefix: null,
      field: null,
      value: null,
    };
  };
  A.$nS = function (a, b) {
    null == b && (b = window);
    var c = A.$lS(a, b).value;
    if (null == c) return !1;
    b[a] = c;
    return !0;
  };
  A.$oS = function (a, b, c) {
    a = a.style;
    for (var f = 0, d = A.$fS; f < d.length; ) {
      var e = d[f];
      ++f;
      a.setProperty("-" + e + "-" + b, c);
    }
    a.setProperty(b, c);
  };
  A.$pS = function (a, b, c, f) {
    for (var d = 0, e = A.$fS; d < e.length; ) {
      var g = e[d];
      ++d;
      a.addEventListener(g + b, c, f);
    }
    a.addEventListener(b, c, f);
  };
  A.$tS = function (a, b) {
    var c;
    c = window.document.createElement("canvas");
    c.width = a;
    c.height = b;
    return c;
  };
  A.$uS = function (a) {
    var b = A.$tS(a.width, a.height),
      c = b.getContext("2d", null);
    c.save();
    c.globalCompositeOperation = "copy";
    c.drawImage(a, 0, 0);
    c.restore();
    return b;
  };
  A.$wS = function () {
    if (0 <= window.navigator.userAgent.indexOf("Linux; U; Android 4")) {
      var a = Math.sin,
        b = Math.cos;
      Math.sin = function (b) {
        return 0 == b ? 0 : a(b);
      };
      Math.cos = function (a) {
        return 0 == a ? 1 : b(a);
      };
    }
  };
  A.$xS = function () {
    0 <= window.navigator.userAgent.indexOf("iPhone OS 7_1") &&
      (window.addEventListener(
        "scroll",
        function (a) {
          window.document.activeElement == window.document.body &&
            0 < window.scrollY &&
            (window.document.body.scrollTop = 0);
        },
        !0
      ),
      (window.document.body.scrollTop = 0));
  };
  A.$yS = function (a, b, c) {
    var f = a.getContext("2d", null);
    f.drawImage(a, b - 1, 0, 1, c, b, 0, 1, c);
    f.drawImage(a, 0, c - 1, b, 1, 0, c, b, 1);
  };
  A.$zS = function (a) {
    for (a = (16777215 & a).toString(16); 6 > a.length; ) a = "0" + r.string(a);
    return "#" + r.string(a);
  };
  A.$$S = function () {
    try {
      return window.self != window.parent;
    } catch (a) {
      return a instanceof u && (a = a.val), !0;
    }
  };
  A.$_S = function (a) {
    return 157286400;
  };
  var mb = function (a, b, c) {
    this.$nM = !1;
    this.$kK = a;
    this.$ET = b;
    this.$FT = c;
  };
  l.$CLC = mb;
  mb.__name__ = ["$CLC"];
  mb.__interfaces__ = [ve];
  mb.__super__ = V;
  mb.prototype = v(V.prototype, {
    $lM: function () {
      null != this.$ET &&
        (window.document.fonts["delete"](this.$ET), (this.$ET = null));
      null != this.$FT &&
        (null != this.$FT.parentNode &&
          this.$FT.parentNode.removeChild(this.$FT),
        (this.$FT = null));
    },
    __class__: mb,
  });
  var Fb = function (a) {
    this.$nM = !1;
    this.$KT = a;
  };
  l.$COC = Fb;
  Fb.__name__ = ["$COC"];
  Fb.__interfaces__ = [yb];
  Fb.__super__ = V;
  Fb.prototype = v(V.prototype, {
    play: function (a) {
      null == a && (a = 1);
      return new cd(this, a, !1);
    },
    get_width: function () {
      return this.$KT.videoWidth;
    },
    get_height: function () {
      return this.$KT.videoHeight;
    },
    $lM: function () {
      this.$KT = null;
    },
    __class__: Fb,
  });
  var cd = function (a, b, c) {
    this.$NJ = null;
    this.$WS = !1;
    var f = this;
    this.$GO = a;
    this.$SS = window.document.createElement("video");
    this.$SS.loop = c;
    this.$SS.src = a.$KT.src;
    this.$SS.width = a.$KT.videoWidth;
    this.$SS.height = a.$KT.videoHeight;
    this.$SS.setAttribute("playsinline", "");
    this.$SS.setAttribute("webkit-playsinline", "");
    0 <= window.navigator.userAgent.indexOf("2DKSim") &&
      (this.$SS.src += "?" + Math.random());
    this.volume = new O(b, function (a, b) {
      f.$RS();
    });
    this.$RS();
    this.$FO = new fa(!1);
    this.$MT();
    m.hidden.$bG && this.set_paused(!0);
  };
  l.$CPC = cd;
  cd.__name__ = ["$CPC"];
  cd.__interfaces__ = [Cb, zb];
  cd.prototype = {
    get_texture: function () {
      null == this.$NJ &&
        (this.$NJ = m.$vG.$HG.createTextureFromImage(this.$SS, Z.RGB));
      return this.$NJ;
    },
    get_video: function () {
      return this.$GO;
    },
    set_paused: function (a) {
      a != this.$WS && ((this.$WS = a) ? this.$SS.pause() : this.$MT());
      return a;
    },
    update: function (a) {
      this.volume.update(a);
      this.$FO.set__(this.$SS.ended);
      return this.$FO.$bG || this.$WS
        ? ((this.$ES = !1), this.$TS.dispose(), this.$US.dispose(), !0)
        : !1;
    },
    dispose: function () {
      this.set_paused(!0);
      this.$FO.set__(!0);
    },
    $MT: function () {
      var a = this;
      this.$SS.play();
      this.$ES ||
        (xa.$ZG.$AG.$PQ(this),
        (this.$ES = !0),
        (this.$TS = m.volume.get_changed().connect(function (b, c) {
          a.$RS();
        })),
        (this.$US = m.hidden.get_changed().connect(function (b, c) {
          b ? ((a.$VS = a.$WS), a.set_paused(!0)) : a.set_paused(a.$VS);
        })));
    },
    $RS: function () {
      this.$SS.volume = m.volume.$bG * this.volume.$bG;
    },
    __class__: cd,
  };
  var E = function (a) {
    this.$nM = !1;
    this.$QT = a;
  };
  l.$CSC = E;
  E.__name__ = ["$CSC"];
  E.__interfaces__ = [jb];
  E.get_supported = function () {
    if (E.$YT) {
      E.$YT = !1;
      var a = A.$lS("AudioContext").value;
      if (
        null != a &&
        ((E.$ST = new a()),
        (E.$TT = E.$UT()),
        E.$TT.connect(E.$ST.destination),
        m.volume.watch(function (a, b) {
          E.$TT.gain.value = a;
        }),
        m.$vG.$JG.down
          .connect(function (a) {
            new E(E.$XT()).play();
          })
          .once(),
        (a = function (a) {
          "suspended" == E.$ST.state && E.$ST.resume();
        }),
        m.$vG.$JG.down.connect(a),
        m.$vG.$JG.up.connect(a),
        m.$vG.$FG.down.connect(a),
        m.$vG.$FG.up.connect(a),
        A.$gS)
      )
        var b = null,
          b = m.$vG.$JG.up.connect(function (a) {
            var f = new E(E.$XT()).play();
            A.$kS(function () {
              var a = f.$dT();
              (null == a || 2 <= a) && b.dispose();
            });
          });
    }
    return null != E.$ST;
  };
  E.$UT = function () {
    return null != E.$ST.createGain
      ? E.$ST.createGain()
      : E.$ST.createGainNode();
  };
  E.$VT = function (a, b) {
    null != a.start ? a.start(0, b) : a.noteOn(0, b);
  };
  E.$WT = function (a) {
    null != a.stop ? a.stop(0) : a.noteOff(0);
  };
  E.$XT = function () {
    null == E.$ZT && (E.$ZT = E.$ST.createBuffer(1, 1, 22050));
    return E.$ZT;
  };
  E.__super__ = V;
  E.prototype = v(V.prototype, {
    play: function (a) {
      null == a && (a = 1);
      return new Hb(this, a, !1);
    },
    loop: function (a) {
      null == a && (a = 1);
      return new Hb(this, a, !0);
    },
    get_duration: function () {
      return this.$QT.duration;
    },
    $lM: function () {
      this.$QT = null;
    },
    __class__: E,
  });
  var Hb = function (a, b, c) {
    this.$jT = 0;
    this.$eT = -1;
    var f = this;
    this.$EO = a;
    this.$oG = E.$TT;
    this.$FO = new fa(!1);
    this.$iT = c;
    this.$PH = a.get_duration();
    this.volume = new O(b, function (a, b) {
      null != f.$gT && f.$bT(a);
    });
    this.$QS(0);
    m.hidden.$bG && this.set_paused(!0);
  };
  l.$CTC = Hb;
  Hb.__name__ = ["$CTC"];
  Hb.__interfaces__ = [Cb, kb];
  Hb.prototype = {
    set_paused: function (a) {
      a != 0 <= this.$eT &&
        (a
          ? (this.$aT(), (this.$eT = this.get_position()))
          : (this.$FO.$bG || this.$QS(this.$eT), (this.$eT = -1)));
      return a;
    },
    get_position: function () {
      return this.$FO.$bG
        ? this.$PH
        : 0 <= this.$eT
        ? this.$eT
        : (E.$ST.currentTime - this.$fT + this.$jT) % this.$PH;
    },
    update: function (a) {
      this.volume.update(a);
      null != this.$gT && 3 == this.$gT.playbackState && this.$FO.set__(!0);
      return this.$FO.$bG || 0 <= this.$eT
        ? ((this.$ES = !1), this.$US.dispose(), this.$aT(), !0)
        : !1;
    },
    $aT: function () {
      if (null != this.$gT) {
        E.$WT(this.$gT);
        this.$gT.disconnect();
        this.$gT.onended = null;
        if (A.$gS) {
          var a = E.$XT();
          try {
            this.$gT.buffer = a;
          } catch (b) {
            b instanceof u && (b = b.val);
          }
        }
        this.$gT = null;
      }
    },
    dispose: function () {
      this.set_paused(!0);
      this.$FO.set__(!0);
    },
    $bT: function (a) {
      null == this.$hT && ((this.$hT = E.$UT()), this.$cT(this.$hT));
      this.$hT.gain.value = a;
    },
    $cT: function (a) {
      0 <= this.$eT || (this.$gT.disconnect(), this.$gT.connect(a));
      a.connect(this.$oG);
      this.$oG = a;
    },
    $QS: function (a) {
      var b = this;
      this.$gT = E.$ST.createBufferSource();
      this.$gT.buffer = this.$EO.$QT;
      this.$gT.loop = this.$iT;
      this.$gT.onended = function () {
        b.$FO.set__(!0);
      };
      E.$VT(this.$gT, a);
      this.$gT.connect(this.$oG);
      this.$jT = 0 <= this.$eT ? this.$eT : 0;
      this.$fT = E.$ST.currentTime;
      (1 == this.volume.$bG && null == this.$hT) || this.$bT(this.volume.$bG);
      this.$ES ||
        (xa.$ZG.$AG.$PQ(this),
        (this.$ES = !0),
        (this.$US = m.hidden.get_changed().connect(function (a, f) {
          a ? ((b.$VS = 0 <= b.$eT), b.set_paused(!0)) : b.set_paused(b.$VS);
        })));
    },
    $dT: function () {
      return null != this.$gT ? this.$gT.playbackState : 3;
    },
    __class__: Hb,
  };
  var he = function (a) {
    this.$sU = new X();
    this.$rU = new Vc().$jN(157286400).$lN(function (a, b) {
      return a.$MV();
    });
    this.$lU = this.$mU = this.$nU = this.$oU = this.$pU = this.$qU = 0;
    this.$dU = [];
    this.$aU = !0;
    this.$YU = !1;
    this.$WU = this.$XU = null;
    this.$VU = !1;
    this.$UU = null;
    this.$TU = 0;
    this.$PU = this.$QU = this.$JK = this.$RU = this.$SU = null;
    this.$OU = !1;
    this.$NU = null;
    this.$MU = new Ca();
    this.$LU = 0;
    this.$JU = this.$KU = null;
    this.$lT = [];
    this.$kT = null;
    var b = this;
    this.$IU = a;
    this.$rU.$kN(function (a, f) {
      b.$xT(a, f);
    });
    this.$rU.$jN(A.$_S(a));
    m.lowMemoryWarning.connect(function () {
      b.$rU.dispose();
    });
    a.clearColor(0, 0, 0, 0);
    a.enable(3042);
    a.pixelStorei(37441, 1);
    a.pixelStorei(3317, 1);
    this.$ZU = a.createBuffer();
    a.bindBuffer(34962, this.$ZU);
    this.$bU = a.createBuffer();
    this.$cU = a.createBuffer();
    this.$KU = this.$bU;
    this.$eU = new nb(a, 0);
    this.$fU = new nb(a, 1);
    this.$gU = new nb(a, 2);
    this.$hU = new ob(a, 0);
    this.$iU = new ob(a, 1);
    this.$jU = new ob(a, 2);
    this.$kU = new dd(a);
    this.$HU(16);
  };
  l.$CUC = he;
  he.__name__ = ["$CUC"];
  he.prototype = {
    $mT: function (a, b) {
      this.$IU.viewport(0, 0, a, b);
      this.$oU = a;
      this.$pU = b;
    },
    $nT: function () {
      this.$qU = (this.$qU + 1) | 0;
      this.$tT(null);
    },
    $oT: function () {
      this.$$G();
      this.$IU.flush();
    },
    $qT: function (a) {
      a == this.$JK && (this.$$G(), (this.$JK = null));
      this.$zT(a);
      null != a.$LV ? this.$xT(a, a.$LV) : this.$rU.$qN(a);
    },
    $rT: function (a) {
      if (a.$KV) {
        a.$KV = !1;
        var b = this.$rU.$qN(a, !1);
        null != b ? (a.$LV = b) : this.$uT(a);
        a.$GV = null;
        a.$HV = null;
      }
    },
    $sT: function () {
      var a = this.$IU.createTexture();
      this.$vT(a);
      this.$IU.texParameteri(3553, 10242, 33071);
      this.$IU.texParameteri(3553, 10243, 33071);
      this.$IU.texParameteri(3553, 10240, 9729);
      this.$IU.texParameteri(3553, 10241, 9729);
      return a;
    },
    $tT: function (a) {
      this.$$G();
      this.$NU = null;
      null != this.$PU && ((this.$PU = null), this.$IU.disable(3089));
      this.$yT(a);
      null == a && this.$IU.colorMask(!0, !0, !0, !1);
      this.$IU.clear(16384);
      null == a && this.$IU.colorMask(!0, !0, !0, !0);
    },
    $uT: function (a) {
      var b;
      b = a.$KV ? this.$rU.$dN(a) : a.$LV;
      if (null == b) {
        b = this.$sT();
        b = new ie(b);
        if (a.$KV) {
          var c = !0;
          if (this.$rU.$tN + a.$MV() > this.$rU.$uN) {
            var f = this.$rU.$nN();
            2 > this.$qU - f.$JV && (c = !1);
          }
          this.$rU.$mN(a, b, c);
        } else a.$LV = b;
        switch (a.$NV[1]) {
          case 2:
          case 3:
            c = 6407;
            break;
          default:
            c = 6408;
        }
        switch (a.$NV[1]) {
          case 3:
            f = 33635;
            break;
          case 1:
            f = 32819;
            break;
          default:
            f = 5121;
        }
        var d = a.$GV;
        if (null != d && null == r.instance(a.$GV, HTMLVideoElement)) {
          if (a.$NR != d.width || a.$OR != d.height) {
            var e = A.$tS(a.$NR, a.$OR);
            e.getContext("2d", null).drawImage(d, 0, 0);
            A.$yS(e, d.width, d.height);
            d = e;
          }
          this.$IU.texImage2D(3553, 0, c, c, f, d);
        } else this.$IU.texImage2D(3553, 0, c, a.$NR, a.$OR, 0, c, f, null);
      }
      a.$JV != this.$qU &&
        ((c = r.instance(a.$GV, HTMLVideoElement)),
        null != c &&
          2 <= c.readyState &&
          (this.$vT(b.$FV), this.$IU.texImage2D(3553, 0, 6407, 6407, 5121, c)));
      a.$JV = this.$qU;
      return b;
    },
    $vT: function (a) {
      this.$XU != a && ((this.$XU = a), this.$IU.bindTexture(3553, a));
    },
    $wT: function (a) {
      this.$WU != a && (a.$UV(this.$WU), (this.$WU = a));
    },
    $xT: function (a, b) {
      a == this.$JK && (this.$$G(), (this.$JK = null));
      this.$IU.deleteTexture(b.$FV);
      null != b.$FM && this.$IU.deleteTexture(b.$FM);
    },
    $yT: function (a) {
      if (this.$UU != a)
        if (((this.$UU = a), null != a)) {
          var b = null;
          null == a.$IV &&
            ((a.$IV = this.$IU.createFramebuffer()),
            this.$rT(a),
            (b = a.$LV.$FV));
          this.$IU.bindFramebuffer(36160, a.$IV);
          this.$IU.viewport(0, 0, a.$NR, a.$OR);
          null != b && this.$IU.framebufferTexture2D(36160, 36064, 3553, b, 0);
        } else
          this.$IU.bindFramebuffer(36160, null),
            this.$IU.viewport(0, 0, this.$oU, this.$pU);
    },
    $zT: function (a) {
      a == this.$NU && (this.$$G(), (this.$NU = null));
      null != a.$IV && (this.$IU.deleteFramebuffer(a.$IV), (a.$IV = null));
    },
    $$T: function (a, b, c, f, d, e) {
      e.$RN != this.$JK && (this.$$G(), (this.$JK = e.$RN));
      return this.$GU(a, b, c, f, d, this.$_T(e.$RN, d));
    },
    $_T: function (a, b) {
      return b
        ? this.$fU
        : null != a.$HV && a.$HV.separateAlpha
        ? this.$gU
        : this.$eU;
    },
    $AU: function (a, b, c, f, d, e) {
      e.$RN != this.$JK && (this.$$G(), (this.$JK = e.$RN));
      if (
        e.$SN != this.$MU.x ||
        e.$TN != this.$MU.y ||
        e.$LJ != this.$MU.width ||
        e.$MJ != this.$MU.height
      )
        this.$$G(), this.$MU.set(e.$SN, e.$TN, e.$LJ, e.$MJ);
      return this.$GU(a, b, c, f, d, this.$BU(e.$RN, d));
    },
    $BU: function (a, b) {
      return b
        ? this.$iU
        : null != a.$HV && a.$HV.separateAlpha
        ? this.$jU
        : this.$hU;
    },
    $CU: function (a, b, c, f, d) {
      return this.$GU(a, b, c, f, d, this.$kU);
    },
    $DU: function (a, b, c, f, d, e) {
      return this.$FU(a, b, c, f, d, this.$kU, e);
    },
    $EU: function (a, b, c, f, d, e, g) {
      e.$RN != this.$JK && (this.$$G(), (this.$JK = e.$RN));
      if (
        e.$SN != this.$MU.x ||
        e.$TN != this.$MU.y ||
        e.$LJ != this.$MU.width ||
        e.$MJ != this.$MU.height
      )
        this.$$G(), this.$MU.set(e.$SN, e.$TN, e.$LJ, e.$MJ);
      return this.$FU(a, b, c, f, d, this.$BU(e.$RN, d), g);
    },
    $IK: function (a, b, c, f, d, e, g) {
      a != this.$NU && (this.$$G(), (this.$NU = a));
      b != this.$JU && (this.$$G(), (this.$JU = b));
      f != this.$LU && (this.$$G(), (this.$LU = f));
      d != this.$OU && (this.$$G(), (this.$OU = d));
      e != this.$QU && (this.$$G(), e.$IK(), (this.$QU = e));
      g != this.$KU && (this.$$G(), (this.$KU = g));
      if (null != c || null != this.$PU)
        (null != c && null != this.$PU && this.$PU.equals(c)) ||
          (this.$$G(),
          (this.$PU = null != c ? c.clone(this.$PU) : null),
          (this.$YU = !0));
    },
    $FU: function (a, b, c, f, d, e, g) {
      this.$IK(a, b, c, f, d, e, this.$cU);
      a = this.$lT.length;
      e = (a / e.$SV) | 0;
      for (b = 0; b < g.length; ) (c = g[b]), ++b, this.$dU.push(c + e);
      return a;
    },
    $GU: function (a, b, c, f, d, e) {
      this.$IK(a, b, c, f, d, e, this.$bU);
      this.$lU >= this.$mU && this.$HU(2 * this.$mU);
      ++this.$lU;
      a = this.$nU;
      this.$nU += 4 * e.$SV;
      return a;
    },
    $RO: function (a, b, c, f) {
      var d = b.$ZK(),
        e = this.$sU.get(d);
      null == e &&
        ((e = new ed(this.$IU, this, b.$cK, b.$bK)), this.$sU.set(d, e));
      var d = this.$GU(a, L.Copy, null, 0, !1, e),
        g = this.$kT;
      this.$JK = null;
      var h = c / a.$PR,
        l = f / a.$QR,
        m = 2 * h - 1,
        n = 2 * l - 1;
      g[d] = -1;
      g[++d] = -1;
      g[++d] = 0;
      g[++d] = 0;
      g[++d] = m;
      g[++d] = -1;
      g[++d] = h;
      g[++d] = 0;
      g[++d] = m;
      g[++d] = n;
      g[++d] = h;
      g[++d] = l;
      g[++d] = -1;
      g[++d] = n;
      g[++d] = 0;
      g[++d] = l;
      this.$yT(a);
      this.$wT(e);
      e.$pV(b, a, c, f);
      this.$$G();
    },
    $$G: function () {
      if (this.$KU == this.$bU) {
        if (1 > this.$lU) return;
      } else if (1 > this.$dU.length) return;
      this.$yT(this.$NU);
      if (this.$JU != this.$RU) {
        switch (this.$JU[1]) {
          case 0:
            this.$IU.blendFunc(1, 771);
            break;
          case 1:
            this.$IU.blendFunc(1, 1);
            break;
          case 2:
            this.$IU.blendFunc(774, 771);
            break;
          case 3:
            this.$IU.blendFunc(1, 769);
            break;
          case 4:
            this.$IU.blendFunc(0, 770);
            break;
          case 5:
            this.$IU.blendFunc(1, 0);
        }
        this.$RU = this.$JU;
      }
      if (this.$LU != this.$TU) {
        if (0 < this.$LU)
          if ((0 == this.$TU && this.$IU.enable(2960), this.$OU)) {
            var a = 1 << (this.$LU - 1);
            this.$IU.stencilMask(a);
            this.$TU < this.$LU && this.$IU.clear(1024);
            this.$IU.stencilFunc(514, a - 1, 255);
          } else (a = (1 << this.$LU) - 1), this.$IU.stencilFunc(514, a, a);
        else this.$IU.disable(2960);
        this.$TU = this.$LU;
      }
      this.$OU != this.$VU &&
        (this.$OU
          ? (this.$IU.stencilMask(1 << (this.$LU - 1)),
            this.$IU.clear(1024),
            this.$IU.colorMask(!1, !1, !1, !1),
            this.$IU.stencilFunc(514, (1 << (this.$LU - 1)) - 1, 255),
            this.$IU.stencilOp(7680, 7680, 7682))
          : (this.$IU.colorMask(!0, !0, !0, !0),
            (a = (1 << this.$LU) - 1),
            this.$IU.stencilFunc(514, a, a),
            this.$IU.stencilOp(7680, 7680, 7680)),
        (this.$VU = this.$OU));
      this.$YU &&
        (null != this.$PU
          ? (this.$IU.enable(3089),
            this.$IU.scissor(
              this.$PU.x | 0,
              this.$PU.y | 0,
              this.$PU.width | 0,
              this.$PU.height | 0
            ))
          : this.$IU.disable(3089),
        (this.$YU = !1));
      null != this.$JK &&
        ((a = this.$uT(this.$JK)),
        null != a.$FM
          ? (this.$IU.activeTexture(33985),
            this.$vT(a.$FV),
            this.$IU.activeTexture(33984),
            this.$vT(a.$FM))
          : this.$vT(a.$FV));
      this.$wT(this.$QU);
      (this.$QU != this.$hU && this.$QU != this.$iU && this.$QU != this.$jU) ||
        this.$QU.$fV(
          this.$MU.x / this.$JK.$PR,
          this.$MU.y / this.$JK.$QR,
          this.$MU.width / this.$JK.$PR,
          this.$MU.height / this.$JK.$QR
        );
      this.$KU != this.$SU &&
        (this.$IU.bindBuffer(34963, this.$KU), (this.$SU = this.$KU));
      if (this.$SU == this.$bU) {
        if (this.$aU) {
          this.$aU = !1;
          for (
            var a = new Uint16Array(6 * this.$mU), b = 0, c = this.$mU;
            b < c;

          ) {
            var f = b++,
              d = 6 * f,
              f = 4 * f;
            a[d] = f;
            a[d + 1] = f + 1;
            a[d + 2] = f + 2;
            a[d + 3] = f + 2;
            a[d + 4] = f + 3;
            a[d + 5] = f;
          }
          this.$IU.bufferData(34963, a, 35044);
        }
        this.$IU.bufferData(34962, this.$kT.subarray(0, this.$nU), 35048);
        this.$IU.drawElements(4, 6 * this.$lU, 5123, 0);
        this.$nU = this.$lU = 0;
      } else
        (a = new Uint16Array(this.$dU)),
          this.$IU.bufferData(34963, a, 35048),
          (this.$dU.length = 0),
          this.$IU.bufferData(34962, new Float32Array(this.$lT), 35048),
          (this.$lT.length = 0),
          this.$IU.drawElements(4, a.length, 5123, 0);
    },
    $HU: function (a) {
      1024 < a
        ? this.$$G()
        : ((this.$mU = a),
          (a = new Float32Array(32 * a)),
          null != this.$kT && a.set(this.$kT, 0),
          (this.$kT = a),
          (this.$aU = !0));
    },
    __class__: he,
  };
  var Aa = function (a, b) {
    this.$xU = this.$CR = null;
    null == Aa.$yU && (Aa.$yU = new Float32Array(8));
    this.$wU = a;
    this.$XR = b;
  };
  l.$CVC = Aa;
  Aa.__name__ = ["$CVC"];
  Aa.__interfaces__ = [Ab];
  Aa.prototype = {
    save: function () {
      var a = this.$CR,
        b = this.$CR.next;
      null == b && ((b = new fd()), (b.$GR = a), (a.next = b));
      a.$zU.clone(b.$zU);
      b.$HM = a.$HM;
      b.$JM = a.$JM;
      b.$LM = a.$LM;
      b.$FM = a.$FM;
      b.$$J = a.$$J;
      b.$_J = null != a.$_J ? a.$_J.clone(b.$_J) : null;
      b.$$U = a.$$U;
      b.$_U = a.$_U;
      this.$CR = b;
    },
    translate: function (a, b) {
      var c = this.$CR.$zU;
      c.m02 += c.m00 * a + c.m01 * b;
      c.m12 += c.m10 * a + c.m11 * b;
    },
    scale: function (a, b) {
      var c = this.$CR.$zU;
      c.m00 *= a;
      c.m10 *= a;
      c.m01 *= b;
      c.m11 *= b;
    },
    rotate: function (a) {
      var b = this.$CR.$zU;
      a = (3.141592653589793 * a) / 180;
      var c = Math.sin(a);
      a = Math.cos(a);
      var f = b.m00,
        d = b.m10,
        e = b.m01,
        g = b.m11;
      b.m00 = f * a + e * c;
      b.m10 = d * a + g * c;
      b.m01 = e * a - f * c;
      b.m11 = g * a - d * c;
    },
    transform: function (a, b, c, f, d, e) {
      var g = this.$CR;
      Aa.$PI.set(a, b, c, f, d, e);
      ta.multiply(g.$zU, Aa.$PI, g.$zU);
    },
    restore: function () {
      this.$CR = this.$CR.$GR;
    },
    drawTexture: function (a, b, c) {
      this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height());
    },
    drawSubTexture: function (a, b, c, f, d, e, g) {
      var h = this.$CR,
        l = a.$RN;
      b = this.$vU(b, c, e, g);
      c = l.$PR;
      l = l.$QR;
      f = (a.$SN + f) / c;
      d = (a.$TN + d) / l;
      e = f + e / c;
      g = d + g / l;
      c = h.$HM;
      var l = h.$JM,
        m = h.$LM,
        n = h.$FM;
      a = this.$wU.$$T(this.$XR, h.$$J, h.$_J, h.$$U, h.$_U, a);
      h = this.$wU.$kT;
      h[a] = b[0];
      h[++a] = b[1];
      h[++a] = f;
      h[++a] = d;
      h[++a] = c;
      h[++a] = l;
      h[++a] = m;
      h[++a] = n;
      h[++a] = b[2];
      h[++a] = b[3];
      h[++a] = e;
      h[++a] = d;
      h[++a] = c;
      h[++a] = l;
      h[++a] = m;
      h[++a] = n;
      h[++a] = b[4];
      h[++a] = b[5];
      h[++a] = e;
      h[++a] = g;
      h[++a] = c;
      h[++a] = l;
      h[++a] = m;
      h[++a] = n;
      h[++a] = b[6];
      h[++a] = b[7];
      h[++a] = f;
      h[++a] = g;
      h[++a] = c;
      h[++a] = l;
      h[++a] = m;
      h[++a] = n;
    },
    drawPattern: function (a, b, c, f, d) {
      var e = this.$CR,
        g = a.$RN;
      b = this.$vU(b, c, f, d);
      f /= g.$PR;
      d /= g.$QR;
      g = e.$HM;
      c = e.$JM;
      var h = e.$LM,
        l = e.$FM;
      a = this.$wU.$AU(this.$XR, e.$$J, e.$_J, e.$$U, e.$_U, a);
      e = this.$wU.$kT;
      e[a] = b[0];
      e[++a] = b[1];
      e[++a] = 0;
      e[++a] = 0;
      e[++a] = g;
      e[++a] = c;
      e[++a] = h;
      e[++a] = l;
      e[++a] = b[2];
      e[++a] = b[3];
      e[++a] = f;
      e[++a] = 0;
      e[++a] = g;
      e[++a] = c;
      e[++a] = h;
      e[++a] = l;
      e[++a] = b[4];
      e[++a] = b[5];
      e[++a] = f;
      e[++a] = d;
      e[++a] = g;
      e[++a] = c;
      e[++a] = h;
      e[++a] = l;
      e[++a] = b[6];
      e[++a] = b[7];
      e[++a] = 0;
      e[++a] = d;
      e[++a] = g;
      e[++a] = c;
      e[++a] = h;
      e[++a] = l;
    },
    fillRect: function (a, b, c, f, d) {
      var e = this.$CR;
      b = this.$vU(b, c, f, d);
      c = (e.$HM * (a & 16711680)) / 16711680;
      f = (e.$JM * (a & 65280)) / 65280;
      a = (e.$LM * (a & 255)) / 255;
      d = e.$FM;
      var e = this.$wU.$CU(this.$XR, e.$$J, e.$_J, e.$$U, e.$_U),
        g = this.$wU.$kT;
      g[e] = b[0];
      g[++e] = b[1];
      g[++e] = c;
      g[++e] = f;
      g[++e] = a;
      g[++e] = d;
      g[++e] = b[2];
      g[++e] = b[3];
      g[++e] = c;
      g[++e] = f;
      g[++e] = a;
      g[++e] = d;
      g[++e] = b[4];
      g[++e] = b[5];
      g[++e] = c;
      g[++e] = f;
      g[++e] = a;
      g[++e] = d;
      g[++e] = b[6];
      g[++e] = b[7];
      g[++e] = c;
      g[++e] = f;
      g[++e] = a;
      g[++e] = d;
    },
    fillTriangles: function (a, b, c) {
      var f = this.$CR,
        d = f.$zU,
        e = d.m00,
        g = d.m01,
        h = d.m02,
        l = d.m10,
        m = d.m11,
        d = d.m12,
        n = (f.$HM * (a & 16711680)) / 16711680,
        q = (f.$JM * (a & 65280)) / 65280;
      a = (f.$LM * (a & 255)) / 255;
      var r = f.$FM;
      c = this.$wU.$DU(this.$XR, f.$$J, f.$_J, f.$$U, f.$_U, c);
      for (var f = this.$wU.$lT, s = 0, t = b.length; s < t; ) {
        var v = b[s++],
          u = b[s++];
        f[c++] = v * e + u * g + h;
        f[c++] = v * l + u * m + d;
        f[c++] = n;
        f[c++] = q;
        f[c++] = a;
        f[c++] = r;
      }
    },
    drawTriangles: function (a, b, c, f) {
      var d = this.$CR,
        e = a.$RN,
        g = d.$zU,
        h = g.m00,
        l = g.m01,
        m = g.m02,
        n = g.m10,
        q = g.m11,
        g = g.m12,
        r = d.$HM,
        s = d.$JM,
        t = d.$LM,
        v = d.$FM;
      a = this.$wU.$EU(this.$XR, d.$$J, d.$_J, d.$$U, d.$_U, a, c);
      c = this.$wU.$lT;
      for (var u = (d = 0), w = b.length; u < w; ) {
        var x = b[u++],
          y = b[u++];
        c[a++] = x * h + y * l + m;
        c[a++] = x * n + y * q + g;
        null != f
          ? ((c[a++] = f[d++]), (c[a++] = f[d++]))
          : ((c[a++] = x / e.$PR), (c[a++] = y / e.$QR));
        c[a++] = r;
        c[a++] = s;
        c[a++] = t;
        c[a++] = v;
      }
    },
    fillPolygon: function (a, b) {
      var c = W.$cQ(b);
      null != c && this.fillTriangles(a, b, c);
    },
    drawPolygon: function (a, b) {
      var c = W.$cQ(b);
      null != c && this.drawTriangles(a, b, c);
    },
    drawCircle: function (a, b, c, f, d) {
      null == d && (d = 50);
      var e = [],
        g = [];
      W.$XQ(e, g, b, c, f, f, d) && this.drawTriangles(a, e, g);
    },
    fillCircle: function (a, b, c, f, d) {
      null == d && (d = 50);
      var e = [],
        g = [];
      W.$XQ(e, g, b, c, f, f, d) && this.fillTriangles(a, e, g);
    },
    strokeCircle: function (a, b, c, f, d, e) {
      null == e && (e = 50);
      var g = [],
        h = [];
      W.$aQ(g, h, b, c, f, f, d, e) && this.fillTriangles(a, g, h);
    },
    drawEllipse: function (a, b, c, f, d, e) {
      null == e && (e = 50);
      var g = [],
        h = [];
      W.$XQ(g, h, b, c, f, d, e) && this.drawTriangles(a, g, h);
    },
    fillEllipse: function (a, b, c, f, d, e) {
      null == e && (e = 50);
      var g = [],
        h = [];
      W.$XQ(g, h, b, c, f, d, e) && this.fillTriangles(a, g, h);
    },
    strokeEllipse: function (a, b, c, f, d, e, g) {
      null == g && (g = 50);
      var h = [],
        l = [];
      W.$aQ(h, l, b, c, f, d, e, g) && this.fillTriangles(a, h, l);
    },
    fillArc: function (a, b, c, f, d, e, g) {
      null == g && (g = 50);
      var h = [],
        l = [];
      W.$YQ(
        h,
        l,
        b,
        c,
        f,
        (3.141592653589793 * d) / 180,
        (3.141592653589793 * e) / 180,
        g
      ) && this.fillTriangles(a, h, l);
    },
    strokeArc: function (a, b, c, f, d, e, g, h) {
      null == h && (h = 50);
      var l = [],
        m = [];
      W.$ZQ(
        l,
        m,
        b,
        c,
        f,
        (3.141592653589793 * d) / 180,
        (3.141592653589793 * e) / 180,
        g,
        h
      ) && this.fillTriangles(a, l, m);
    },
    strokeLines: function (a, b, c) {
      var f = [],
        d = [];
      W.$bQ(f, d, b, c) && this.fillTriangles(a, f, d);
    },
    drawLines: function (a, b, c) {
      var f = [],
        d = [];
      W.$bQ(f, d, b, c) && this.drawTriangles(a, f, d);
    },
    multiplyAlpha: function (a) {
      this.$CR.$FM *= a;
    },
    setAlpha: function (a) {
      this.$CR.$FM = a;
    },
    tint: function (a, b, c) {
      var f = this.$CR;
      f.$HM *= a;
      f.$JM *= b;
      f.$LM *= c;
    },
    setBlendMode: function (a) {
      this.$CR.$$J = a;
    },
    beginMask: function () {
      var a = this.$CR;
      ++a.$$U;
      a.$_U = !0;
    },
    endMask: function () {
      this.$CR.$_U = !1;
    },
    applyScissor: function (a, b, c, f) {
      var d = this.$CR,
        e = Aa.$yU;
      e[0] = a;
      e[1] = b;
      e[2] = a + c;
      e[3] = b + f;
      d.$zU.transformArray(e, 4, e);
      this.$xU.transformArray(e, 4, e);
      a = e[0];
      b = e[1];
      c = e[2] - a;
      f = e[3] - b;
      0 > c && ((a += c), (c = -c));
      0 > f && ((b += f), (f = -f));
      d.$AV(a, b, c, f);
    },
    willRender: function () {
      this.$wU.$nT();
    },
    didRender: function () {
      this.$wU.$oT();
    },
    onResize: function (a, b) {
      this.$CR = new fd();
      var c;
      c = null != this.$XR ? -1 : 1;
      this.$CR.$zU.set(2 / a, 0, 0, (-2 * c) / b, -1, c);
      this.$xU = new ta();
      this.$xU.set(2 / a, 0, 0, 2 / b, -1, -1);
      this.$xU.invert();
    },
    $vU: function (a, b, c, f) {
      c = a + c;
      f = b + f;
      var d = Aa.$yU;
      d[0] = a;
      d[1] = b;
      d[2] = c;
      d[3] = b;
      d[4] = c;
      d[5] = f;
      d[6] = a;
      d[7] = f;
      this.$CR.$zU.transformArray(d, 8, d);
      return d;
    },
    __class__: Aa,
  };
  var fd = function () {
    this.$GR = this.next = null;
    this.$_U = !1;
    this.$$U = 0;
    this.$HM = this.$JM = this.$LM = this.$FM = 1;
    this.$_J = null;
    this.$$J = L.Normal;
    this.$zU = new ta();
  };
  l.$CWC = fd;
  fd.__name__ = ["$CWC"];
  fd.prototype = {
    $AV: function (a, b, c, f) {
      if (null != this.$_J) {
        var d = ha.max(this.$_J.x, a),
          e = ha.max(this.$_J.y, b);
        c = ha.min(this.$_J.x + this.$_J.width, a + c);
        f = ha.min(this.$_J.y + this.$_J.height, b + f);
        a = d;
        b = e;
        c = ha.max(0, c - d);
        f = ha.max(0, f - e);
      } else this.$_J = new Ca();
      this.$_J.set(Math.round(a), Math.round(b), Math.round(c), Math.round(f));
    },
    __class__: fd,
  };
  var $b = function (a, b) {
    this.$DV = !1;
    var c = this;
    this.$JR = new fa(!0);
    this.$BV = b;
    this.$hK();
    if (0 == b.getError()) {
      this.$DV = !0;
      var f = b.canvas;
      f.addEventListener(
        "webglcontextlost",
        function (a) {
          a.preventDefault();
          c.graphics = null;
          c.$JR.set__(!1);
        },
        !1
      );
      f.addEventListener(
        "webglcontextrestored",
        function (a) {
          c.$hK();
          c.$JR.set__(!0);
        },
        !1
      );
      a.resize.connect(D(this, this.$EV));
    } else null;
  };
  l.$CXC = $b;
  $b.__name__ = ["$CXC"];
  $b.__interfaces__ = [Bb];
  $b.prototype = {
    get_type: function () {
      return za.WebGL;
    },
    get_filterSupported: function () {
      return !0;
    },
    createTextureFromImage: function (a, b, c) {
      null == c && (c = 1);
      var f = a.width,
        d = a.height,
        e = new pb(this, f, d, c);
      null != b && b != Z.COMPRESSED && (e.$NV = b);
      e.$GV = a;
      if (this.$BV.isContextLost()) return null;
      null == r.instance(a, HTMLVideoElement) && this.$CV.$rT(e);
      return e.createTexture(f / c, d / c);
    },
    createTexture: function (a, b, c, f) {
      null == f && (f = 1);
      var d = new pb(this, a, b, f);
      null != c && c != Z.COMPRESSED && (d.$NV = c);
      return d.createTexture(a / f, b / f);
    },
    getTextureAssetFormats: function () {
      return [];
    },
    willRender: function () {
      this.graphics.willRender();
    },
    didRender: function () {
      this.graphics.didRender();
    },
    $EV: function () {
      if (null != this.graphics) {
        var a = this.$BV.canvas,
          b = a.width,
          a = a.height;
        this.$CV.$mT(b, a);
        this.graphics.onResize(b, a);
      }
    },
    $hK: function () {
      this.$CV = new he(this.$BV);
      this.graphics = new Aa(this.$CV, null);
      this.$EV();
    },
    __class__: $b,
  };
  var ie = function (a) {
    this.$FM = null;
    this.$FV = a;
  };
  l.$CYC = ie;
  ie.__name__ = ["$CYC"];
  ie.prototype = {
    __class__: ie,
  };
  var gd = function (a, b, c) {
    Ka.call(this, a, b, c);
  };
  l.$CZC = gd;
  gd.__name__ = ["$CZC"];
  gd.__super__ = Ka;
  gd.prototype = v(Ka.prototype, {
    __class__: gd,
  });
  var pb = function (a, b, c, f) {
    this.$WR = null;
    this.$NV = Z.RGBA;
    this.$LV = null;
    this.$KV = !0;
    this.$JV = -1;
    this.$GV = this.$HV = this.$IV = null;
    this.$nM = !1;
    this.$HG = a;
    b = 2 > b ? 2 : b;
    c = 2 > c ? 2 : c;
    this.$NR = b;
    this.$OR = c;
    this.$XH = f;
    this.$PR = b / f;
    this.$QR = c / f;
  };
  l.$CaC = pb;
  pb.__name__ = ["$CaC"];
  pb.__interfaces__ = [Zc];
  pb.__super__ = V;
  pb.prototype = v(V.prototype, {
    createTexture: function (a, b) {
      return new gd(this, Math.ceil(a), Math.ceil(b));
    },
    getGraphics: function () {
      null == this.$WR &&
        ((this.$WR = new Aa(this.$HG.$CV, this)),
        this.$WR.onResize(this.$NR, this.$OR));
      return this.$WR;
    },
    clear: function () {
      this.$HG.$CV.$tT(this);
    },
    renderFilter: function (a, b, c) {
      this.$HG.$CV.$RO(this, a, b, c);
    },
    $MV: function () {
      var a;
      switch (this.$NV[1]) {
        case 3:
          a = 2;
          break;
        case 1:
          a = 2;
          break;
        case 2:
          a = 3;
          break;
        default:
          a = 4;
      }
      return a * this.$NR * this.$OR;
    },
    $lM: function () {
      this.$HG.$CV.$qT(this);
      this.$WR = this.$LV = this.$IV = this.$HV = this.$GV = null;
    },
    __class__: pb,
  });
  var ja = function (a) {
    this.$dV = !0;
    this.$cV = -1;
    this.$bV = [];
    this.$YV = this.$ZV = this.$aV = null;
    this.$SV = 0;
    this.$IU = a;
  };
  l.$CeC = ja;
  ja.__name__ = ["$CeC"];
  ja.$eV = function (a, b, c) {
    b = a.createShader(b);
    a.shaderSource(b, c);
    a.compileShader(b);
    return b;
  };
  ja.prototype = {
    $TV: function () {
      null;
    },
    $IK: function () {
      null == this.$YV &&
        ((this.$YV = this.$IU.createProgram()),
        this.$TV(),
        this.$dV &&
          (this.$IU.detachShader(this.$YV, this.$ZV),
          this.$IU.deleteShader(this.$ZV),
          (this.$ZV = null),
          this.$IU.detachShader(this.$YV, this.$aV),
          this.$IU.deleteShader(this.$aV),
          (this.$aV = null)));
    },
    $UV: function (a) {
      this.$IU.useProgram(this.$YV);
      if (0 > this.$cV) {
        for (var b = (this.$cV = 0), c = this.$bV; b < c.length; ) {
          var f = c[b];
          ++b;
          var d = f.$wV();
          f.$vV = this.$cV;
          this.$cV += d;
        }
        this.$bV = this.$bV.filter(function (a) {
          return 0 <= a.$uV;
        });
        this.$bV.sort(function (a, b) {
          return a.$uV - b.$uV;
        });
      }
      if (null != a) {
        b = a.$bV.length;
        for (c = this.$bV.length; b < c; )
          (f = b++), this.$IU.enableVertexAttribArray(f);
        b = this.$bV.length;
        for (c = a.$bV.length; b < c; )
          (f = b++), this.$IU.disableVertexAttribArray(f);
      } else
        for (b = 0, c = this.$bV.length; b < c; )
          (f = b++), this.$IU.enableVertexAttribArray(f);
      b = 0;
      for (c = this.$bV.length; b < c; ) {
        var f = b++,
          d = this.$bV[f],
          e;
        e = null != a ? a.$bV[f] : null;
        (null != e &&
          e.$hN == d.$hN &&
          e.$gK == d.$gK &&
          a.$cV == this.$cV &&
          e.$vV == d.$vV) ||
          this.$IU.vertexAttribPointer(f, d.$hN, d.$gK, !1, this.$cV, d.$vV);
      }
    },
    $VV: function (a, b) {
      b = "precision mediump float;\n" + b;
      this.$ZV = ja.$eV(this.$IU, 35633, a);
      this.$aV = ja.$eV(this.$IU, 35632, b);
      this.$IU.attachShader(this.$YV, this.$ZV);
      this.$IU.attachShader(this.$YV, this.$aV);
      this.$IU.linkProgram(this.$YV);
      this.$IU.useProgram(this.$YV);
    },
    $WV: function (a, b, c) {
      a = this.$IU.getAttribLocation(this.$YV, a);
      this.$bV.push(new je(a, b, c));
      this.$SV += b;
    },
    $XV: function (a) {
      return this.$IU.getUniformLocation(this.$YV, a);
    },
    __class__: ja,
  };
  var ob = function (a, b) {
    this.$gV = this.$hV = this.$iV = this.$jV = -1;
    ja.call(this, a);
    this.$nV = b;
  };
  l.$CfC = ob;
  ob.__name__ = ["$CfC"];
  ob.__super__ = ja;
  ob.prototype = v(ja.prototype, {
    $TV: function () {
      var a;
      switch (this.$nV) {
        case 0:
        case 1:
          a = "texture2D(u_texture, pos);";
          break;
        case 2:
          a =
            "vec4(texture2D(u_textureRGB, pos).rgb, texture2D(u_texture, pos).r);";
      }
      a = [
        "varying mediump vec2 v_uv;\nvarying lowp vec4 v_color;\nuniform lowp sampler2D u_texture;\nuniform mediump vec4 u_region;",
        2 == this.$nV ? "uniform lowp sampler2D u_textureRGB;" : "",
        "void main (void) {\nmediump vec2 pos = u_region.xy + mod(v_uv, u_region.zw);",
        "lowp vec4 color = " + a,
        1 == this.$nV ? "if (color.a == 0.0) discard;" : "",
        "gl_FragColor = color * v_color;\n}",
      ].join("\n");
      this.$VV(
        "attribute highp vec2 a_pos;\nattribute mediump vec2 a_uv;\nattribute lowp vec4 a_color;\nvarying mediump vec2 v_uv;\nvarying lowp vec4 v_color;\nvoid main (void) {\nv_uv = a_uv;\nv_color = vec4(a_color.rgb * a_color.a, a_color.a);\ngl_Position = vec4(a_pos, 0, 1);\n}",
        a
      );
      this.$WV("a_pos", 2, 5126);
      this.$WV("a_uv", 2, 5126);
      this.$WV("a_color", 4, 5126);
      this.$kV = this.$XV("u_texture");
      this.$mV = this.$XV("u_region");
      this.$IU.uniform1i(this.$kV, 0);
      2 == this.$nV &&
        ((this.$lV = this.$XV("u_textureRGB")),
        this.$IU.uniform1i(this.$lV, 1));
    },
    $fV: function (a, b, c, f) {
      if (a != this.$gV || b != this.$hV || c != this.$iV || f != this.$jV)
        (this.$gV = a),
          (this.$hV = b),
          (this.$iV = c),
          (this.$jV = f),
          this.$IU.uniform4f(this.$mV, a, b, c, f);
    },
    __class__: ob,
  });
  var nb = function (a, b) {
    ja.call(this, a);
    this.$nV = b;
  };
  l.$CgC = nb;
  nb.__name__ = ["$CgC"];
  nb.__super__ = ja;
  nb.prototype = v(ja.prototype, {
    $TV: function () {
      var a;
      switch (this.$nV) {
        case 0:
        case 1:
          a = "texture2D(u_texture, v_uv);";
          break;
        case 2:
          a =
            "vec4(texture2D(u_textureRGB, v_uv).rgb, texture2D(u_texture, v_uv).r);";
      }
      a = [
        "varying mediump vec2 v_uv;\nvarying lowp vec4 v_color;\nuniform lowp sampler2D u_texture;",
        2 == this.$nV ? "uniform lowp sampler2D u_textureRGB;" : "",
        "void main (void) {",
        "lowp vec4 color = " + a,
        1 == this.$nV ? "if (color.a == 0.0) discard;" : "",
        "gl_FragColor = color * v_color;\n}",
      ].join("\n");
      this.$VV(
        "attribute highp vec2 a_pos;\nattribute mediump vec2 a_uv;\nattribute lowp vec4 a_color;\nvarying mediump vec2 v_uv;\nvarying lowp vec4 v_color;\nvoid main (void) {\nv_uv = a_uv;\nv_color = vec4(a_color.rgb * a_color.a, a_color.a);\ngl_Position = vec4(a_pos, 0, 1);\n}",
        a
      );
      this.$WV("a_pos", 2, 5126);
      this.$WV("a_uv", 2, 5126);
      this.$WV("a_color", 4, 5126);
      this.$kV = this.$XV("u_texture");
      this.$oV(0);
      2 == this.$nV &&
        ((this.$lV = this.$XV("u_textureRGB")),
        this.$IU.uniform1i(this.$lV, 1));
    },
    $oV: function (a) {
      this.$IU.uniform1i(this.$kV, a);
    },
    __class__: nb,
  });
  var dd = function (a) {
    ja.call(this, a);
  };
  l.$ChC = dd;
  dd.__name__ = ["$ChC"];
  dd.__super__ = ja;
  dd.prototype = v(ja.prototype, {
    $TV: function () {
      this.$VV(
        "attribute highp vec2 a_pos;\nattribute lowp vec3 a_rgb;\nattribute lowp float a_alpha;\nvarying lowp vec4 v_color;\nvoid main (void) {\nv_color = vec4(a_rgb*a_alpha, a_alpha);\ngl_Position = vec4(a_pos, 0, 1);\n}",
        "varying lowp vec4 v_color;\nvoid main (void) {\ngl_FragColor = v_color;\n}"
      );
      this.$WV("a_pos", 2, 5126);
      this.$WV("a_rgb", 3, 5126);
      this.$WV("a_alpha", 1, 5126);
    },
    __class__: dd,
  });
  var ed = function (a, b, c, f) {
    this.$sV = new X();
    this.$qV = this.$rV = null;
    ja.call(this, a);
    this.$wU = b;
    null == c &&
      (c =
        "void main () {\nvTextureCoord = aTextureCoord;\nvFilterCoord = aTextureCoord * uTextureSize/uFilterSize;\ngl_Position = vec4(aVertexPosition, 0, 1);\n}");
    this.$cK = c;
    this.$bK = f;
    this.$dV = !1;
  };
  l.$CiC = ed;
  ed.__name__ = ["$CiC"];
  ed.__super__ = ja;
  ed.prototype = v(ja.prototype, {
    $TV: function () {
      var a = [
          "precision mediump float;\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\nuniform sampler2D uTexture;\nuniform vec2 uTextureSize;\nuniform vec2 uFilterSize;\nuniform vec2 uFilterPosition;\nattribute highp vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n#line 0",
          this.$cK,
        ].join("\n"),
        b = [
          "varying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\nuniform sampler2D uTexture;\nuniform vec2 uTextureSize;\nuniform vec2 uFilterSize;\nuniform vec2 uFilterPosition;\n#line 0",
          this.$bK,
        ].join("\n");
      this.$VV(a, b);
      this.$WV("aVertexPosition", 2, 5126);
      this.$WV("aTextureCoord", 2, 5126);
      this.$rV = this.$IU.getUniformLocation(this.$YV, "uTextureSize");
      this.$qV = this.$IU.getUniformLocation(this.$YV, "uFilterSize");
      this.$cK = this.$bK = null;
    },
    $pV: function (a, b, c, f) {
      null != this.$rV && this.$IU.uniform2f(this.$rV, b.$NR, b.$OR);
      null != this.$qV && this.$IU.uniform2f(this.$qV, c, f);
      b = 0;
      for (a = a.$aK.iterator(); a.hasNext(); )
        if (
          ((c = a.next()),
          (f = this.$sV.get(c.$eK)),
          null == f &&
            ((f = new ke(this.$IU.getUniformLocation(this.$YV, c.$eK))),
            this.$sV.set(c.$eK, f)),
          (f = f.$tV),
          null != f)
        )
          switch (c.$gK) {
            case 0:
              this.$IU.uniform1f(f, c.$fK);
              break;
            case 1:
              this.$IU.uniform2fv(f, c.$fK);
              break;
            case 2:
              this.$IU.uniform3fv(f, c.$fK);
              break;
            case 3:
              this.$IU.uniform4fv(f, c.$fK);
              break;
            case 4:
              this.$IU.uniform1i(f, c.$fK);
              break;
            case 5:
              this.$IU.uniform2iv(f, c.$fK);
              break;
            case 6:
              this.$IU.uniform3iv(f, c.$fK);
              break;
            case 7:
              this.$IU.uniform4iv(f, c.$fK);
              break;
            case 8:
              this.$IU.uniformMatrix2fv(f, !1, c.$fK);
              break;
            case 9:
              this.$IU.uniformMatrix3fv(f, !1, c.$fK);
              break;
            case 10:
              this.$IU.uniformMatrix4fv(f, !1, c.$fK);
              break;
            case 11:
              this.$IU.uniform1i(f, b),
                0 != b && this.$IU.activeTexture(33984 + b),
                b++,
                (c = this.$wU.$uT(c.$fK.$RN)),
                this.$wU.$vT(c.$FV);
          }
      1 < b && this.$IU.activeTexture(33984);
    },
    __class__: ed,
  });
  var ke = function (a) {
    this.$tV = a;
  };
  l.$CjC = ke;
  ke.__name__ = ["$CjC"];
  ke.prototype = {
    __class__: ke,
  };
  var je = function (a, b, c) {
    this.$vV = 0;
    this.$uV = a;
    this.$hN = b;
    this.$gK = c;
  };
  l.$CkC = je;
  je.__name__ = ["$CkC"];
  je.prototype = {
    $wV: function () {
      var a;
      switch (this.$gK) {
        case 5126:
          a = 4;
          break;
        default:
          a = 1;
      }
      return this.$hN * a;
    },
    __class__: je,
  };
  var le = function () {
    this.$BW = null;
  };
  l["kit.scene.Director"] = le;
  le.__name__ = ["kit", "scene", "Director"];
  le.__super__ = s;
  le.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 7;
    },
    onAdded: function () {
      this.owner.addChild(this.$sK);
    },
    onRemoved: function () {
      this.$_V();
      for (var a = 0, b = this.scenes; a < b.length; ) {
        var c = b[a];
        ++a;
        c.dispose();
      }
      this.scenes = [];
      this.occludedScenes = [];
      this.$sK.dispose();
    },
    onUpdate: function (a) {
      null != this.$BW && this.$BW.$BG(a) && this.$_V();
    },
    get_topScene: function () {
      var a = this.scenes.length;
      return 0 < a ? this.scenes[a - 1] : null;
    },
    $hQ: function (a) {
      a = a.$zF[8];
      null != a && a.shown.emit();
    },
    $$V: function () {
      for (var a = this.scenes.length; 0 < a; ) {
        var b = this.scenes[--a].$zF[8];
        if (null == b || b.opaque) break;
      }
      this.occludedScenes =
        0 < this.scenes.length
          ? this.scenes.slice(a, this.scenes.length - 1)
          : [];
      a = this.get_topScene();
      null != a && this.$hQ(a);
    },
    $_V: function () {
      null != this.$BW && (this.$BW.$CW(), (this.$BW = null), this.$$V());
    },
    __class__: le,
  });
  var ze = function () {};
  l.$ClC = ze;
  ze.__name__ = ["$ClC"];
  ze.prototype = {
    $BG: function (a) {
      return this.$DW.update(a);
    },
    $CW: function () {
      this.$DW.complete();
      this.$EW();
    },
    __class__: ze,
  };
  var me = function () {};
  l["kit.scene.Scene"] = me;
  me.__name__ = ["kit", "scene", "Scene"];
  me.__super__ = s;
  me.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 8;
    },
    __class__: me,
  });
  var Ae = function () {};
  l["kit.scene.Transition"] = Ae;
  Ae.__name__ = ["kit", "scene", "Transition"];
  Ae.prototype = {
    update: function (a) {
      return !0;
    },
    complete: function () {},
    __class__: Ae,
  };
  var Va = function () {};
  l["kit.script.Action"] = Va;
  Va.__name__ = ["kit", "script", "Action"];
  Va.prototype = {
    __class__: Va,
  };
  var ca = function (a, b, c, f) {
    this.$bG = a;
    this.$OH = b;
    this.$IW = c;
    this.$QH = f;
  };
  l["kit.script.AnimateTo"] = ca;
  ca.__name__ = ["kit", "script", "AnimateTo"];
  ca.__interfaces__ = [Va];
  ca.prototype = {
    update: function (a, b) {
      null == this.$GW &&
        ((this.$GW = new fb(this.$bG.$bG, this.$OH, this.$IW, this.$QH)),
        this.$bG.set_behavior(this.$GW),
        this.$bG.update(a));
      if (this.$bG.$sG != this.$GW) {
        var c = this.$GW.elapsed - this.$IW;
        this.$GW = null;
        return 0 < c ? a - c : 0;
      }
      return -1;
    },
    __class__: ca,
  };
  var x = function (a) {
    this.$CH = a;
  };
  l["kit.script.CallFunction"] = x;
  x.__name__ = ["kit", "script", "CallFunction"];
  x.__interfaces__ = [Va];
  x.prototype = {
    update: function (a, b) {
      this.$CH();
      return 0;
    },
    __class__: x,
  };
  var z = function (a) {
    this.$PH = a;
    this.$JW = 0;
  };
  l["kit.script.Delay"] = z;
  z.__name__ = ["kit", "script", "Delay"];
  z.__interfaces__ = [Va];
  z.prototype = {
    update: function (a, b) {
      this.$JW += a;
      if (this.$JW >= this.$PH) {
        var c = this.$JW - this.$PH;
        this.$JW = 0;
        return a - c;
      }
      return -1;
    },
    __class__: z,
  };
  var Ib = function (a) {
    this.$LW = [];
    this.$KW = null != a ? a.slice() : [];
  };
  l["kit.script.Parallel"] = Ib;
  Ib.__name__ = ["kit", "script", "Parallel"];
  Ib.__interfaces__ = [Va];
  Ib.prototype = {
    update: function (a, b) {
      for (var c = !0, f = 0, d = 0, e = this.$KW.length; d < e; ) {
        var g = d++,
          h = this.$KW[g];
        if (null != h) {
          var l = h.update(a, b);
          0 <= l
            ? ((this.$KW[g] = null), this.$LW.push(h), l > f && (f = l))
            : (c = !1);
        }
      }
      return c ? ((this.$KW = this.$LW), (this.$LW = []), f) : -1;
    },
    __class__: Ib,
  };
  var ua = function (a, b) {
    null == b && (b = -1);
    this.$MW = a;
    this.$OW = this.$NW = b;
  };
  l["kit.script.Repeat"] = ua;
  ua.__name__ = ["kit", "script", "Repeat"];
  ua.__interfaces__ = [Va];
  ua.prototype = {
    update: function (a, b) {
      if (0 == this.$NW) return 0;
      var c = this.$MW.update(a, b);
      return 0 < this.$NW && 0 <= c && 0 == --this.$OW
        ? ((this.$OW = this.$NW), c)
        : -1;
    },
    __class__: ua,
  };
  var G = function () {
    s.call(this);
    this.stopAll();
  };
  l["kit.script.Script"] = G;
  G.__name__ = ["kit", "script", "Script"];
  G.__super__ = s;
  G.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 11;
    },
    run: function (a) {
      a = new hd(a);
      this.$PW.push(a);
      return a;
    },
    stopAll: function () {
      this.$PW = [];
    },
    onUpdate: function (a) {
      for (var b = 0; b < this.$PW.length; ) {
        var c = this.$PW[b];
        c.$QW || 0 <= c.$RW.update(a, this.owner) ? this.$PW.splice(b, 1) : ++b;
      }
    },
    __class__: G,
  });
  var hd = function (a) {
    this.$QW = !1;
    this.$RW = a;
  };
  l.$CmC = hd;
  hd.__name__ = ["$CmC"];
  hd.__interfaces__ = [wa];
  hd.prototype = {
    dispose: function () {
      this.$QW = !0;
      this.$RW = null;
    },
    __class__: hd,
  };
  var H = function (a) {
    this.$SW = 0;
    this.$KW = null != a ? a.slice() : [];
  };
  l["kit.script.Sequence"] = H;
  H.__name__ = ["kit", "script", "Sequence"];
  H.__interfaces__ = [Va];
  H.prototype = {
    update: function (a, b) {
      for (var c = 0; ; ) {
        var f = this.$KW[this.$SW];
        if (null != f)
          if (((f = f.update(a - c, b)), 0 <= f)) c += f;
          else return -1;
        ++this.$SW;
        if (this.$SW >= this.$KW.length) {
          this.$SW = 0;
          break;
        } else if (c > a) return -1;
      }
      return c;
    },
    __class__: H,
  };
  var za = (l["kit.subsystem.RendererType"] = {
    __ename__: ["kit", "subsystem", "RendererType"],
    __constructs__: ["Stage3D", "WebGL", "Canvas"],
  });
  za.Stage3D = ["Stage3D", 0];
  za.Stage3D.toString = n;
  za.Stage3D.__enum__ = za;
  za.WebGL = ["WebGL", 1];
  za.WebGL.toString = n;
  za.WebGL.__enum__ = za;
  za.Canvas = ["Canvas", 2];
  za.Canvas.toString = n;
  za.Canvas.__enum__ = za;
  var gb = function () {};
  l["kit.util.BitSets"] = gb;
  gb.__name__ = ["kit", "util", "BitSets"];
  gb.set = function (a, b, c) {
    return c ? a | b : a & ~b;
  };
  var sa = function () {
    this.$iW = this.$jW = null;
    this.$hW = 0;
    this.$gW = null;
    this.$eW = this.$fW = 0;
    this.progressChanged = new Ya();
    this.error = new R();
    this.success = new R();
  };
  l["kit.util.Promise"] = sa;
  sa.__name__ = ["kit", "util", "Promise"];
  sa.prototype = {
    then: function (a) {
      var b = this;
      if (2 == this.$hW) return this;
      var c = new sa();
      this.$iG(c, function () {
        1 == b.$hW ? c.$cW(a(b.$gW)) : c.failure(b.$gW);
      });
      return c;
    },
    catchError: function (a) {
      var b = this;
      if (1 == this.$hW) return this;
      var c = new sa();
      this.$iG(c, function () {
        2 == b.$hW ? c.$cW(a(b.$gW)) : c.$bW(b.$gW);
      });
      return c;
    },
    failure: function (a) {
      this.error.emit(a);
      return this.$dW(2, a);
    },
    $bW: function (a) {
      var b = this.$dW(1, a);
      this.success.emit(a);
      return b;
    },
    emitProgress: function (a) {
      0 == this.$hW &&
        (null != this.$jW && this.$jW.emit(a), this.progressChanged.emit());
    },
    $iG: function (a, b) {
      0 == this.$hW
        ? null == this.$iW
          ? (this.$iW = [b])
          : this.$iW.push(b)
        : m.$vG.$AG.$RQ(b);
    },
    $cW: function (a) {
      var b = this;
      K.__instanceof(a, sa)
        ? a
            .then(function (a) {
              b.$bW(a);
            })
            .catchError(function (a) {
              b.failure(a);
            })
        : this.$bW(a);
    },
    $dW: function (a, b) {
      if (0 == this.$hW && ((this.$gW = b), (this.$hW = a), null != this.$iW)) {
        for (var c = 0, f = this.$iW; c < f.length; ) {
          var d = f[c];
          ++c;
          d();
        }
        this.$iW = null;
      }
      return this;
    },
    set_progress: function (a) {
      this.$eW != a && ((this.$eW = a), this.progressChanged.emit());
      return a;
    },
    set_total: function (a) {
      this.$fW != a && ((this.$fW = a), this.progressChanged.emit());
      return a;
    },
    __class__: sa,
  };
  var ee = function (a) {
    this.$hW = null != a ? a : Math.floor(2147483647 * Math.random());
  };
  l["kit.util.Random"] = ee;
  ee.__name__ = ["kit", "util", "Random"];
  ee.prototype = {
    nextInt: function () {
      return (this.$hW = (1103515245 * this.$hW + 12345) % 2147483647);
    },
    __class__: ee,
  };
  var Hd = function (a) {
    this.next = null;
    this.$nW = a;
  };
  l.$CoC = Hd;
  Hd.__name__ = ["$CoC"];
  Hd.prototype = {
    __class__: Hd,
  };
  var oa = function () {};
  l["kit.util.Strings"] = oa;
  oa.__name__ = ["kit", "util", "Strings"];
  oa.getFileExtension = function (a) {
    var b = a.lastIndexOf(".");
    return 0 < b ? B.substr(a, b + 1, null) : null;
  };
  oa.removeFileExtension = function (a) {
    var b = a.lastIndexOf(".");
    return 0 < b ? B.substr(a, 0, b) : a;
  };
  oa.getUrlExtension = function (a) {
    var b = a.lastIndexOf("?");
    0 <= b && (a = B.substr(a, 0, b));
    b = a.lastIndexOf("/");
    0 <= b && (a = B.substr(a, b + 1, null));
    return oa.getFileExtension(a);
  };
  oa.joinPath = function (a, b) {
    0 < a.length && 47 != a.charCodeAt(a.length - 1) && (a += "/");
    return a + b;
  };
  oa.withFields = function (a, b) {
    var c = b.length;
    if (0 < c) {
      a = 0 < a.length ? a + " [" : a + "[";
      for (var f = 0; f < c; ) {
        0 < f && (a += ", ");
        var d = b[f],
          e = b[f + 1];
        if (r.is(e, Error)) {
          var g = e.stack;
          null != g && (e = g);
        }
        a += d + "=" + r.string(e);
        f += 2;
      }
      a += "]";
    }
    return a;
  };
  var ne = function () {};
  l.$CpC = ne;
  ne.__name__ = ["$CpC"];
  ne.prototype = {
    __class__: ne,
  };
  var de = function () {};
  l["kit.util.Triangulator"] = de;
  de.__name__ = ["kit", "util", "Triangulator"];
  de.prototype = {
    triangulate: function (a) {
      var b = a.length;
      if (6 > b) return [];
      for (
        var c = this.$FX(-1, 0, 0, null), f = c, d = 0, e = 0, g = b - 2;
        e < b;

      )
        (d += (a[g] - a[e]) * (a[e + 1] + a[g + 1])), (g = e), (e += 2);
      if (0 < d)
        for (d = e = 0; e < b; )
          var g = a[e], h = a[e + 1], c = this.$FX(d++, g, h, c), e = e + 2;
      else
        for (e = b - 2, d = (e / 2) | 0; 0 <= e; )
          (g = a[e]), (h = a[e + 1]), (c = this.$FX(d--, g, h, c)), (e -= 2);
      c.next = f.next;
      c.next.$GR = c;
      return this.$$W(c, 160 < b);
    },
    $$W: function (a, b) {
      this.$uW = [];
      a = this.$DX(a);
      if (b && null != a) {
        var c, f;
        this.$xW = c = a.$tL;
        this.$yW = f = a.$vL;
        for (var d = a.next; d != a; ) {
          var e = d.$tL,
            g = d.$vL;
          e < this.$xW && (this.$xW = e);
          g < this.$yW && (this.$yW = g);
          e > c && (c = e);
          g > f && (f = g);
          d = d.next;
        }
        this.$hN = Math.max(c - this.$xW, f - this.$yW);
        this.$zW = !0;
      } else this.$zW = !1;
      this.$GX(a);
      c = this.$uW;
      this.$uW = null;
      f = this.$wW;
      if (null != this.$vW) {
        for (; f != this.$vW; ) f = f.$qW;
        f = f.$qW;
      }
      for (; null != f; ) (f.next = this.$vW), (this.$vW = f), (f = f.$qW);
      return c;
    },
    $_W: function (a, b) {
      return a.$tL == b.$tL && a.$vL == b.$vL;
    },
    $AX: function (a, b, c) {
      return (
        (b.$vL - a.$vL) * (c.$tL - b.$tL) - (b.$tL - a.$tL) * (c.$vL - b.$vL)
      );
    },
    $BX: function (a, b, c, f) {
      return (
        0 <
          (b.$vL - a.$vL) * (c.$tL - b.$tL) -
            (b.$tL - a.$tL) * (c.$vL - b.$vL) !=
          0 <
            (b.$vL - a.$vL) * (f.$tL - b.$tL) -
              (b.$tL - a.$tL) * (f.$vL - b.$vL) &&
        0 <
          (f.$vL - c.$vL) * (a.$tL - f.$tL) -
            (f.$tL - c.$tL) * (a.$vL - f.$vL) !=
          0 <
            (f.$vL - c.$vL) * (b.$tL - f.$tL) -
              (f.$tL - c.$tL) * (b.$vL - f.$vL)
      );
    },
    $DX: function (a, b) {
      if (null == a) return a;
      null == b && (b = a);
      var c = a,
        f;
      do
        if (
          ((f = !1),
          c.$tW || (!this.$_W(c, c.next) && 0 != this.$AX(c.$GR, c, c.next)))
        )
          c = c.next;
        else {
          c.next.$GR = c.$GR;
          c.$GR.next = c.next;
          null != c.$pW && (c.$pW.$oW = c.$oW);
          null != c.$oW && (c.$oW.$pW = c.$pW);
          c = b = c.$GR;
          if (c == c.next) return null;
          f = !0;
        }
      while (f || c != b);
      return b;
    },
    $EX: function (a) {
      a.next.$GR = a.$GR;
      a.$GR.next = a.next;
      null != a.$pW && (a.$pW.$oW = a.$oW);
      null != a.$oW && (a.$oW.$pW = a.$pW);
    },
    $FX: function (a, b, c, f) {
      var d = this.$vW;
      null == d
        ? ((d = new ne()), (d.$qW = this.$wW), (this.$wW = d))
        : (this.$vW = d.next);
      d.$rW = a;
      d.$sW = -1;
      d.$tL = b;
      d.$vL = c;
      d.next = null;
      d.$GR = f;
      d.$tW = !1;
      d.$pW = null;
      d.$oW = null;
      null != f && (f.next = d);
      return d;
    },
    $GX: function (a, b) {
      null == b && (b = 0);
      if (null != a) {
        0 == b && this.$zW && this.$RX(a);
        for (var c = a, f, d; a.$GR != a.next; )
          if (((f = a.$GR), (d = a.next), this.$zW ? this.$IX(a) : this.$HX(a)))
            this.$uW.push(f.$rW),
              this.$uW.push(a.$rW),
              this.$uW.push(d.$rW),
              (a.next.$GR = a.$GR),
              (a.$GR.next = a.next),
              null != a.$pW && (a.$pW.$oW = a.$oW),
              null != a.$oW && (a.$oW.$pW = a.$pW),
              (c = a = d.next);
          else if (((a = d), a == c)) {
            switch (b) {
              case 0:
                this.$GX(this.$DX(a), 1);
                break;
              case 1:
                a = this.$JX(a);
                this.$GX(a, 2);
                break;
              case 2:
                this.$KX(a);
            }
            break;
          }
      }
    },
    $HX: function (a) {
      var b = a.$GR,
        c = a.next;
      if (
        0 <=
        (a.$vL - b.$vL) * (c.$tL - a.$tL) - (a.$tL - b.$tL) * (c.$vL - a.$vL)
      )
        return !1;
      for (var f = a.next.next; f != a.$GR; ) {
        if (
          this.$MX(b.$tL, b.$vL, a.$tL, a.$vL, c.$tL, c.$vL, f.$tL, f.$vL) &&
          0 <= this.$AX(f.$GR, f, f.next)
        )
          return !1;
        f = f.next;
      }
      return !0;
    },
    $IX: function (a) {
      var b = a.$GR,
        c = a.next;
      if (
        0 <=
        (a.$vL - b.$vL) * (c.$tL - a.$tL) - (a.$tL - b.$tL) * (c.$vL - a.$vL)
      )
        return !1;
      var f;
      f =
        b.$tL < a.$tL
          ? b.$tL < c.$tL
            ? b.$tL
            : c.$tL
          : a.$tL < c.$tL
          ? a.$tL
          : c.$tL;
      var d;
      d =
        b.$vL < a.$vL
          ? b.$vL < c.$vL
            ? b.$vL
            : c.$vL
          : a.$vL < c.$vL
          ? a.$vL
          : c.$vL;
      var e;
      e =
        b.$tL > a.$tL
          ? b.$tL > c.$tL
            ? b.$tL
            : c.$tL
          : a.$tL > c.$tL
          ? a.$tL
          : c.$tL;
      var g;
      g =
        b.$vL > a.$vL
          ? b.$vL > c.$vL
            ? b.$vL
            : c.$vL
          : a.$vL > c.$vL
          ? a.$vL
          : c.$vL;
      f = this.$QX(f, d);
      e = this.$QX(e, g);
      for (g = a.$oW; null != g && g.$sW <= e; ) {
        if (
          g != a.$GR &&
          g != a.next &&
          this.$MX(b.$tL, b.$vL, a.$tL, a.$vL, c.$tL, c.$vL, g.$tL, g.$vL) &&
          0 <= this.$AX(g.$GR, g, g.next)
        )
          return !1;
        g = g.$oW;
      }
      for (g = a.$pW; null != g && g.$sW >= f; ) {
        if (
          g != a.$GR &&
          g != a.next &&
          this.$MX(b.$tL, b.$vL, a.$tL, a.$vL, c.$tL, c.$vL, g.$tL, g.$vL) &&
          0 <= this.$AX(g.$GR, g, g.next)
        )
          return !1;
        g = g.$pW;
      }
      return !0;
    },
    $JX: function (a) {
      var b = a;
      do {
        var c = b.$GR,
          f = b.next.next;
        this.$BX(c, b, b.next, f) &&
          (0 > this.$AX(c.$GR, c, c.next)
            ? 0 <= this.$AX(c, f, c.next) && 0 <= this.$AX(c, c.$GR, f)
            : 0 > this.$AX(c, f, c.$GR) || 0 > this.$AX(c, c.next, f)) &&
          (0 > this.$AX(f.$GR, f, f.next)
            ? 0 <= this.$AX(f, c, f.next) && 0 <= this.$AX(f, f.$GR, c)
            : 0 > this.$AX(f, c, f.$GR) || 0 > this.$AX(f, f.next, c)) &&
          (this.$uW.push(c.$rW),
          this.$uW.push(b.$rW),
          this.$uW.push(f.$rW),
          (b.next.$GR = b.$GR),
          (b.$GR.next = b.next),
          null != b.$pW && (b.$pW.$oW = b.$oW),
          null != b.$oW && (b.$oW.$pW = b.$pW),
          this.$EX(b.next),
          (b = a = f));
        b = b.next;
      } while (b != a);
      return b;
    },
    $KX: function (a) {
      var b = a;
      do {
        for (var c = b.next.next; c != b.$GR; ) {
          if (b.$rW != c.$rW && this.$NX(b, c)) {
            a = this.$LX(b, c);
            b = this.$DX(b, b.next);
            a = this.$DX(a, a.next);
            this.$GX(b);
            this.$GX(a);
            return;
          }
          c = c.next;
        }
        b = b.next;
      } while (b != a);
    },
    $LX: function (a, b) {
      var c = this.$FX(a.$rW, a.$tL, a.$vL, null),
        f = this.$FX(b.$rW, b.$tL, b.$vL, null),
        d = a.next,
        e = b.$GR;
      a.next = b;
      b.$GR = a;
      c.next = d;
      d.$GR = c;
      f.next = c;
      c.$GR = f;
      e.next = f;
      f.$GR = e;
      return f;
    },
    $MX: function (a, b, c, f, d, e, g, h) {
      return (
        0 <= (d - g) * (b - h) - (a - g) * (e - h) &&
        0 <= (a - g) * (f - h) - (c - g) * (b - h) &&
        0 <= (c - g) * (e - h) - (d - g) * (f - h)
      );
    },
    $NX: function (a, b) {
      return (
        (a.$tL == b.$tL && a.$vL == b.$vL) ||
        (a.next.$rW != b.$rW &&
          a.$GR.$rW != b.$rW &&
          !this.$PX(a, b) &&
          (0 > this.$AX(a.$GR, a, a.next)
            ? 0 <= this.$AX(a, b, a.next) && 0 <= this.$AX(a, a.$GR, b)
            : 0 > this.$AX(a, b, a.$GR) || 0 > this.$AX(a, a.next, b)) &&
          (0 > this.$AX(b.$GR, b, b.next)
            ? 0 <= this.$AX(b, a, b.next) && 0 <= this.$AX(b, b.$GR, a)
            : 0 > this.$AX(b, a, b.$GR) || 0 > this.$AX(b, b.next, a)) &&
          this.$OX(a, b))
      );
    },
    $OX: function (a, b) {
      var c = a,
        f = !1,
        d = (a.$tL + b.$tL) / 2,
        e = (a.$vL + b.$vL) / 2;
      do
        c.$vL > e != c.next.$vL > e &&
          d <
            ((c.next.$tL - c.$tL) * (e - c.$vL)) / (c.next.$vL - c.$vL) +
              c.$tL &&
          (f = !f),
          (c = c.next);
      while (c != a);
      return f;
    },
    $PX: function (a, b) {
      var c = a;
      do {
        if (
          c.$rW != a.$rW &&
          c.next.$rW != a.$rW &&
          c.$rW != b.$rW &&
          c.next.$rW != b.$rW &&
          this.$BX(c, c.next, a, b)
        )
          return !0;
        c = c.next;
      } while (c != a);
      return !1;
    },
    $QX: function (a, b) {
      var c = ((32767 * (a - this.$xW)) / this.$hN) | 0,
        f = ((32767 * (b - this.$yW)) / this.$hN) | 0,
        c = (c | (c << 8)) & 16711935,
        c = (c | (c << 4)) & 252645135,
        c = (c | (c << 2)) & 858993459,
        f = (f | (f << 8)) & 16711935,
        f = (f | (f << 4)) & 252645135,
        f = (f | (f << 2)) & 858993459;
      return (
        ((c | (c << 1)) & 1431655765) | (((f | (f << 1)) & 1431655765) << 1)
      );
    },
    $RX: function (a) {
      var b = a;
      do
        0 > b.$sW && (b.$sW = this.$QX(b.$tL, b.$vL)),
          (b.$pW = b.$GR),
          (b = b.$oW = b.next);
      while (b != a);
      b.$pW.$oW = null;
      b.$pW = null;
      this.$SX(b);
    },
    $SX: function (a) {
      var b,
        c,
        f,
        d,
        e,
        g,
        h,
        l = 1;
      do {
        b = a;
        d = a = null;
        for (e = 0; null != b; ) {
          e++;
          c = b;
          for (f = g = 0; f < l && (f++, g++, (c = c.$oW), null != c); );
          for (h = l; 0 < g || (0 < h && null != c); )
            0 == g
              ? ((f = c), (c = c.$oW), h--)
              : 0 == h || null == c
              ? ((f = b), (b = b.$oW), g--)
              : b.$sW <= c.$sW
              ? ((f = b), (b = b.$oW), g--)
              : ((f = c), (c = c.$oW), h--),
              null != d ? (d.$oW = f) : (a = f),
              (f.$pW = d),
              (d = f);
          b = c;
        }
        d.$oW = null;
        l *= 2;
      } while (1 < e);
      return a;
    },
    __class__: de,
  };
  var Pa = function (a, b, c) {
    s.call(this);
    this.x = b | 0;
    this.y = c | 0;
    this.track = a;
  };
  l["project.Car"] = Pa;
  Pa.__name__ = ["project", "Car"];
  Pa.__super__ = s;
  Pa.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 32;
    },
    onAdded: function () {
      var a = this;
      this.owner.add(new N(d.pack.getTexture("blank")));
      this.owner.$zF[1].centerAnchor();
      this.owner.$zF[1].setXY(this.x, this.y - 1);
      this.car = new h();
      g.createImageSprite(
        this.owner,
        this.car,
        "game/train_carriage_green-grey",
        !1,
        0,
        0
      );
      var b = new h();
      g.createImageSprite(
        this.owner,
        b,
        "game/train_carriage_green-grey",
        !1,
        1030,
        0
      );
      b.$zF[1].set_pixelSnapping(!1);
      var c = new G();
      c.run(
        new ua(
          new H([
            new z(g.randomNumberFloat(0.1, 0.5)),
            new x(function () {
              a.owner.$zF[1].y.animateBy(2, g.randomNumberFloat(0.15, 0.3));
            }),
            new z(g.randomNumberFloat(0.3, 0.5)),
            new x(function () {
              a.owner.$zF[1].y.animateTo(
                a.y - 1,
                g.randomNumberFloat(0.15, 0.3)
              );
            }),
            new z(g.randomNumberFloat(0.2, 0.4)),
          ])
        )
      );
      this.car.add(c);
      c = new G();
      c.run(
        new ua(
          new H([
            new x(function () {
              b.$zF[1].y.animateTo(0.5, g.randomNumberFloat(0.15, 0.3));
            }),
            new z(g.randomNumberFloat(0.2, 0.5)),
            new x(function () {
              b.$zF[1].y.animateTo(-0.5, g.randomNumberFloat(0.15, 0.3));
            }),
            new z(g.randomNumberFloat(0.2, 0.4)),
          ])
        )
      );
      b.add(c);
    },
    __class__: Pa,
  });
  var id = function (a, b, c, d) {
    s.call(this);
    this.x = c | 0;
    this.y = d | 0;
    this.linked = a;
    this.linked2 = b;
    this.track = this.linked.$zF[32].track;
  };
  l["project.CarBlank"] = id;
  id.__name__ = ["project", "CarBlank"];
  id.__super__ = s;
  id.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 29;
    },
    onAdded: function () {
      this.owner.add(new N(d.pack.getTexture("blank")));
      this.owner.$zF[1].centerAnchor();
      this.owner.$zF[1].setXY(this.x, this.y - 1);
    },
    onUpdate: function (a) {
      this.owner.$zF[1].setXY(
        this.linked.$zF[1].x.$bG,
        this.linked.$zF[1].y.$bG
      );
    },
    __class__: id,
  });
  var jd = function (a, b, c) {
    s.call(this);
    this.x = b | 0;
    this.y = c | 0;
    this.linked = a;
  };
  l["project.CarLit"] = jd;
  jd.__name__ = ["project", "CarLit"];
  jd.__super__ = s;
  jd.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 33;
    },
    onAdded: function () {
      this.owner.add(new N(d.pack.getTexture("blank")));
      this.owner.$zF[1].centerAnchor();
      this.owner.$zF[1].setXY(this.x, this.y - 1);
      this.car = new h();
      g.createImageSprite(
        this.owner,
        this.car,
        "game/train_carriage",
        !1,
        0,
        0
      );
      var a = new h();
      g.createImageSprite(this.owner, a, "game/train_carriage", !1, 1030, 0);
      a.$zF[1].set_pixelSnapping(!1);
      var b = new G();
      b.run(
        new ua(
          new H([
            new x(function () {
              a.$zF[1].y.animateTo(0.5, g.randomNumberFloat(0.15, 0.3));
            }),
            new z(g.randomNumberFloat(0.2, 0.5)),
            new x(function () {
              a.$zF[1].y.animateTo(-0.5, g.randomNumberFloat(0.15, 0.3));
            }),
            new z(g.randomNumberFloat(0.2, 0.4)),
          ])
        )
      );
      a.add(b);
    },
    onUpdate: function (a) {
      this.owner.$zF[1].setXY(
        this.linked.$zF[1].x.$bG,
        this.linked.$zF[1].y.$bG
      );
    },
    __class__: jd,
  });
  var d = function () {};
  l["project.Ctx"] = d;
  d.__name__ = ["project", "Ctx"];
  d.initFonts = function () {
    d.translations = new Wa(
      t.parse(d.configPack.getFile("translation.xml").toString()).firstElement()
    );
    d.bodyFont = new ba(d.pack, "fonts/smallFont");
    d.titleFont = new ba(d.pack, "fonts/titleFont");
    d.italicFont = new ba(d.pack, "fonts/italicFont");
    d.smallFont = new ba(d.pack, "fonts/smallFont");
    d.hudFont = new ba(d.pack, "fonts/hudFont");
    d.blackFont = new ba(d.pack, "fonts/blackFont");
    d.blackItalicFont = new ba(d.pack, "fonts/blackItalicFont");
    d.helpFont = new ba(d.pack, "fonts/helpFont");
    d.vo ||
      ((d.bodyFont = new ba(d.pack, "fonts/int/italicFont")),
      (d.titleFont = new ba(d.pack, "fonts/int/italicFont")),
      (d.italicFont = new ba(d.pack, "fonts/int/italicFont")),
      (d.smallFont = new ba(d.pack, "fonts/int/italicFont")));
  };
  var M = (l["project.Direction"] = {
    __ename__: ["project", "Direction"],
    __constructs__: ["LEFT", "RIGHT", "NONE"],
  });
  M.LEFT = ["LEFT", 0];
  M.LEFT.toString = n;
  M.LEFT.__enum__ = M;
  M.RIGHT = ["RIGHT", 1];
  M.RIGHT.toString = n;
  M.RIGHT.__enum__ = M;
  M.NONE = ["NONE", 2];
  M.NONE.toString = n;
  M.NONE.__enum__ = M;
  var kd = function () {
    this.debugText = "";
    this.audioEnabled = !1;
    this.musicVolume = 0.5;
    this.transitionTime = 0.4;
    this.transitionColour = 16777215;
    s.call(this);
  };
  l["project.Game"] = kd;
  kd.__name__ = ["project", "Game"];
  kd.__super__ = s;
  kd.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 16;
    },
    onAdded: function () {
      U.init();
      m.$vG.$GG.down.connect(D(this, this.onPointerDown));
      m.$vG.$GG.up.connect(D(this, this.onPointerUp));
      m.$vG.$GG.move.connect(D(this, this.onPointerMove));
      m.$vG.$IG.resize.connect(D(this, this.onResize));
      d.isMobile &&
        (m.$vG.$JG.up.connect(D(this, this.handleTouchUp)),
        m.$vG.$JG.down.connect(D(this, this.handleTouchDown)),
        m.$vG.$JG.move.connect(D(this, this.handleTouchMove)));
      m.$vG.getKeyboard().down.connect(D(this, this.keyDownHandler));
      m.$vG.getKeyboard().up.connect(D(this, this.keyUpHandler));
      this.myXML = new Wa(
        t.parse(d.configPack.getFile("config.xml").toString()).firstElement()
      );
      "YES" == this.myXML.node.resolve("showFPS").get_innerData()
        ? (d.showFPS = !0)
        : (d.showFPS = !1);
      "YES" == this.myXML.node.resolve("testMode").get_innerData()
        ? (d.testMode = !0)
        : (d.testMode = !1);
      "YES" == this.myXML.node.resolve("showDebugInfo").get_innerData()
        ? (d.showDebugInfo = !0)
        : (d.showDebugInfo = !1);
      "YES" == this.myXML.node.resolve("english").get_innerData()
        ? (d.vo = !0)
        : (d.vo = !1);
      "YES" == this.myXML.node.resolve("alvin").get_innerData()
        ? (d.alvin = !0)
        : (d.alvin = !1);
      "YES" == this.myXML.node.resolve("powerRangers").get_innerData()
        ? (d.powerRangers = !0)
        : (d.powerRangers = !1);
      d.minScaleSize = r.parseInt(
        this.myXML.node.resolve("scaleBelow").get_innerData()
      );
      this.status_font = new ba(d.pack, "fonts/tinyfont");
      d.initFonts();
      this.screen = new h().add(new Y(16777215, d.staticWidth, d.staticHeight));
      m.root.addChild(this.screen);
      this.onResize();
      this.screen.dispose();
      this.homeScreen();
    },
    onPointerDown: function (a) {
      var b = this;
      switch (this.gameState) {
        case "HOME":
          a.hit == this.muteBtn.$zF[1]
            ? (d.muted
                ? (this.muteBtn.dispose(),
                  (this.muteBtn = new h()),
                  g.createImageSprite(
                    this.screen,
                    this.muteBtn,
                    "buttons/BTN_audioON",
                    !0,
                    this.screenWidth - 65,
                    55
                  ),
                  g.mute(!1))
                : (this.muteBtn.dispose(),
                  (this.muteBtn = new h()),
                  g.createImageSprite(
                    this.screen,
                    this.muteBtn,
                    "buttons/BTN_audioOFF",
                    !0,
                    this.screenWidth - 65,
                    55
                  ),
                  g.mute(!0)),
              g.alignRight(this.muteBtn))
            : this.fadeOut(D(this, this.charScreen));
          null == this.menuLoop &&
            ((this.menuLoop = d.pack
              .getSound("audio/Spiderman_ITSV_TitleMenu_v1")
              .loop()),
            this.menuLoop.volume.set__(0),
            this.menuLoop.volume.animateTo(this.musicVolume, 0.5));
          this.playSound("click");
          break;
        case "CHAR":
          a.hit == this.muteBtn.$zF[1]
            ? (d.muted
                ? (this.muteBtn.dispose(),
                  (this.muteBtn = new h()),
                  g.createImageSprite(
                    this.screen,
                    this.muteBtn,
                    "buttons/BTN_audioON",
                    !0,
                    this.screenWidth - 65,
                    55
                  ),
                  g.mute(!1))
                : (this.muteBtn.dispose(),
                  (this.muteBtn = new h()),
                  g.createImageSprite(
                    this.screen,
                    this.muteBtn,
                    "buttons/BTN_audioOFF",
                    !0,
                    this.screenWidth - 65,
                    55
                  ),
                  g.mute(!0)),
              g.alignRight(this.muteBtn))
            : a.hit == this.miles.$zF[1]
            ? ((d["char"] = "miles"),
              (this.gameState = "WAIT"),
              this.milesBurst.$zF[1].x.animateBy(200, 0.5),
              this.miles.$zF[1].x.animateBy(200, 0.5),
              this.milesName.$zF[1].x.animateBy(200, 0.5),
              this.milesBurst.$zF[1].alpha.animateTo(1, 0.3),
              this.gwenName.$zF[1].alpha.animateTo(0, 0.3),
              this.gwenBurst.$zF[1].alpha.animateTo(0, 0.3),
              this.gwen.$zF[1].alpha.animateTo(0, 0.3),
              (a = new G()),
              a.run(
                new H([
                  new z(1),
                  new x(function () {
                    b.fadeOut(D(b, b.selectScreen));
                  }),
                ])
              ),
              this.screen.add(a))
            : a.hit == this.gwen.$zF[1] &&
              ((d["char"] = "gwen"),
              (this.gameState = "WAIT"),
              this.gwenBurst.$zF[1].x.animateBy(-170, 0.5),
              this.gwen.$zF[1].x.animateBy(-170, 0.5),
              this.gwenName.$zF[1].x.animateBy(-170, 0.5),
              this.gwenBurst.$zF[1].alpha.animateTo(1, 0.3),
              this.milesName.$zF[1].alpha.animateTo(0, 0.3),
              this.milesBurst.$zF[1].alpha.animateTo(0, 0.3),
              this.miles.$zF[1].alpha.animateTo(0, 0.3),
              (a = new G()),
              a.run(
                new H([
                  new z(1),
                  new x(function () {
                    b.fadeOut(D(b, b.selectScreen));
                  }),
                ])
              ),
              this.screen.add(a));
          this.playSound("click");
          break;
        case "WAIT":
          a.hit == this.muteBtn.$zF[1] &&
            (d.muted
              ? (this.muteBtn.dispose(),
                (this.muteBtn = new h()),
                g.createImageSprite(
                  this.screen,
                  this.muteBtn,
                  "buttons/BTN_audioON",
                  !0,
                  this.screenWidth - 65,
                  55
                ),
                g.mute(!1))
              : (this.muteBtn.dispose(),
                (this.muteBtn = new h()),
                g.createImageSprite(
                  this.screen,
                  this.muteBtn,
                  "buttons/BTN_audioOFF",
                  !0,
                  this.screenWidth - 65,
                  55
                ),
                g.mute(!0)),
            g.alignRight(this.muteBtn),
            this.playSound("click"));
          break;
        case "SELECT":
          a.hit == this.muteBtn.$zF[1]
            ? (d.muted
                ? (this.muteBtn.dispose(),
                  (this.muteBtn = new h()),
                  g.createImageSprite(
                    this.screen,
                    this.muteBtn,
                    "buttons/BTN_audioON",
                    !0,
                    this.screenWidth - 65,
                    55
                  ),
                  g.mute(!1))
                : (this.muteBtn.dispose(),
                  (this.muteBtn = new h()),
                  g.createImageSprite(
                    this.screen,
                    this.muteBtn,
                    "buttons/BTN_audioOFF",
                    !0,
                    this.screenWidth - 65,
                    55
                  ),
                  g.mute(!0)),
              g.alignRight(this.muteBtn))
            : a.hit == this.startBtn.$zF[1]
            ? (this.fadeOut(D(this, this.startGame)),
              this.menuLoop.volume.animateTo(0, 0.5))
            : a.hit == this.startBtn2.$zF[1] &&
              (this.fadeOut(D(this, this.startGame2)),
              this.menuLoop.volume.animateTo(0, 0.5));
          this.playSound("click");
          break;
        case "GAME":
          a.hit == this.pauseBtn.$zF[1] &&
            (this.pauseGame(!0, a), this.playSound("click"));
      }
    },
    onPointerUp: function (a) {},
    onPointerMove: function (a) {
      switch (this.gameState) {
        case "HOME":
          d.muted
            ? g.rolloverImage(
                this.muteBtn,
                "buttons/BTN_audioOFF",
                "buttons/BTN_audioOFF_rollover",
                a
              )
            : g.rolloverImage(
                this.muteBtn,
                "buttons/BTN_audioON",
                "buttons/BTN_audioON_rollover",
                a
              );
          break;
        case "WAIT":
          d.muted
            ? g.rolloverImage(
                this.muteBtn,
                "buttons/BTN_audioOFF",
                "buttons/BTN_audioOFF_rollover",
                a
              )
            : g.rolloverImage(
                this.muteBtn,
                "buttons/BTN_audioON",
                "buttons/BTN_audioON_rollover",
                a
              );
          break;
        case "CHAR":
          d.muted
            ? g.rolloverImage(
                this.muteBtn,
                "buttons/BTN_audioOFF",
                "buttons/BTN_audioOFF_rollover",
                a
              )
            : g.rolloverImage(
                this.muteBtn,
                "buttons/BTN_audioON",
                "buttons/BTN_audioON_rollover",
                a
              );
          break;
        case "SELECT":
          d.muted
            ? g.rolloverImage(
                this.muteBtn,
                "buttons/BTN_audioOFF",
                "buttons/BTN_audioOFF_rollover",
                a
              )
            : g.rolloverImage(
                this.muteBtn,
                "buttons/BTN_audioON",
                "buttons/BTN_audioON_rollover",
                a
              );
          g.rolloverImage(
            this.startBtn,
            "buttons/BTN_play",
            "buttons/BTN_play_rollover",
            a
          );
          g.rolloverImage(
            this.startBtn2,
            "buttons/BTN_play",
            "buttons/BTN_play_rollover",
            a
          );
          break;
        case "GAME":
          g.rolloverImage(
            this.pauseBtn,
            "buttons/BTN_pause",
            "buttons/BTN_pause_rollover",
            a
          );
      }
    },
    homeScreen: function () {
      this.inPlay = !1;
      this.screen = new h().add(new Y(394758, 960, 560));
      m.root.addChild(this.screen);
      this.getScreenSize();
      var a = new h();
      g.createImageSprite(
        this.screen,
        a,
        "screens/background",
        !1,
        -((1336 - this.screenWidth) / 2),
        this.screenHeight - 768
      );
      a = new h();
      g.createImageSprite(
        this.screen,
        a,
        "screens/title",
        !0,
        this.screenWidth / 2,
        this.screenHeight / 2 - 105
      );
      a = new h();
      g.createImageSprite(
        this.screen,
        a,
        "screens/miles",
        !0,
        this.screenWidth / 2,
        this.screenHeight - 90
      );
      a = new h();
      g.createImageSprite(
        this.screen,
        a,
        "screens/gwen",
        !0,
        130,
        this.screenHeight / 2 - 50
      );
      g.alignLeft(a);
      a = new h();
      g.createImageSprite(
        this.screen,
        a,
        "screens/spiderman",
        !0,
        this.screenWidth - 200,
        150
      );
      g.alignRight(a);
      a = new h();
      g.createImageSprite(this.screen, a, "hud/HUD_top_left", !1, -20, -10);
      g.alignLeft(a);
      a = new h();
      g.createImageSprite(
        this.screen,
        a,
        "hud/HUD_top_right",
        !1,
        this.screenWidth - 200,
        -10
      );
      g.alignRight(a);
      a = new h();
      g.createImageSprite(this.screen, a, "hud/logo", !1, 15, 10);
      g.alignLeft(a);
      a = new h();
      g.createXMLSprite(
        this.screen,
        a,
        d.italicFont,
        "Center",
        125,
        87,
        d.translations.node.resolve("cinema")
      );
      g.alignLeft(a);
      a = new h();
      g.createImageSprite(
        this.screen,
        a,
        "blank",
        !0,
        this.screenWidth / 2,
        this.screenHeight / 2 + 45
      );
      a.$zF[1].set_pixelSnapping(!1);
      var b = new h();
      d.isMobile
        ? g.createXMLSprite(
            a,
            b,
            d.titleFont,
            "Center",
            0,
            -70,
            d.translations.node.resolve("tapPlay")
          )
        : g.createXMLSprite(
            a,
            b,
            d.titleFont,
            "Center",
            0,
            -70,
            d.translations.node.resolve("clickPlay")
          );
      g.pulseBtn(a, 1.05, 0.7);
      this.muteBtn = new h();
      d.muted
        ? g.createImageSprite(
            this.screen,
            this.muteBtn,
            "buttons/BTN_audioOFF",
            !0,
            this.screenWidth - 65,
            55
          )
        : g.createImageSprite(
            this.screen,
            this.muteBtn,
            "buttons/BTN_audioON",
            !0,
            this.screenWidth - 65,
            55
          );
      g.alignRight(this.muteBtn);
      this.gameState = "HOME";
      this.fadeIn();
      this.displayDebugInfo();
      null == this.menuLoop &&
        ((this.menuLoop = d.pack
          .getSound("audio/Spiderman_ITSV_TitleMenu_v1")
          .loop()),
        this.menuLoop.volume.set__(0),
        this.menuLoop.volume.animateTo(this.musicVolume, 0.5));
    },
    charScreen: function () {
      this.inPlay = !1;
      this.screen = new h().add(new Y(394758, 960, 560));
      m.root.addChild(this.screen);
      this.getScreenSize();
      var a = new h();
      g.createImageSprite(
        this.screen,
        a,
        "screens/background2",
        !1,
        -((1336 - this.screenWidth) / 2),
        this.screenHeight - 768
      );
      a = new h();
      g.createImageSprite(this.screen, a, "hud/HUD_top_left", !1, -20, -10);
      g.alignLeft(a);
      a = new h();
      g.createImageSprite(
        this.screen,
        a,
        "hud/HUD_top_right",
        !1,
        this.screenWidth - 200,
        -10
      );
      g.alignRight(a);
      a = new h();
      g.createImageSprite(this.screen, a, "hud/logo", !1, 15, 10);
      g.alignLeft(a);
      a = new h();
      g.createXMLSprite(
        this.screen,
        a,
        d.italicFont,
        "Center",
        125,
        87,
        d.translations.node.resolve("cinema")
      );
      g.alignLeft(a);
      a = new h();
      d.vo
        ? g.createImageSprite(
            this.screen,
            a,
            "screens/charheader",
            !0,
            this.screenWidth / 2 + 80,
            100
          )
        : g.createXMLSprite(
            this.screen,
            a,
            d.titleFont,
            "Center",
            this.screenWidth / 2 + 80,
            100,
            d.translations.node.resolve("selectChar")
          );
      this.milesBurst = new h();
      g.createImageSprite(
        this.screen,
        this.milesBurst,
        "screens/highlight_burst",
        !0,
        this.screenWidth / 2 - 195,
        this.screenHeight - 290
      );
      this.milesBurst.$zF[1].set_pixelSnapping(!1);
      this.gwenBurst = new h();
      g.createImageSprite(
        this.screen,
        this.gwenBurst,
        "screens/highlight_burst",
        !0,
        this.screenWidth / 2 + 165,
        this.screenHeight - 185
      );
      this.gwenBurst.$zF[1].set_pixelSnapping(!1);
      this.gwenBurst.$zF[1].alpha.set__(0.3);
      this.milesBurst.$zF[1].alpha.set__(0.3);
      this.miles = new h();
      g.createImageSprite(
        this.screen,
        this.miles,
        "screens/miles",
        !0,
        this.screenWidth / 2 - 235,
        this.screenHeight - 180
      );
      this.gwen = new h();
      g.createImageSprite(
        this.screen,
        this.gwen,
        "screens/chargwen",
        !0,
        this.screenWidth / 2 + 210,
        this.screenHeight - 140
      );
      this.milesName = new h();
      g.createXMLSprite(
        this.screen,
        this.milesName,
        d.smallFont,
        "Center",
        this.screenWidth / 2 - 215 + 100,
        this.screenHeight - 290 - 60,
        d.translations.node.resolve("miles")
      );
      this.gwenName = new h();
      g.createXMLSprite(
        this.screen,
        this.gwenName,
        d.smallFont,
        "Center",
        this.screenWidth / 2 + 255,
        this.screenHeight - 185 - 70,
        d.translations.node.resolve("gwen")
      );
      this.muteBtn = new h();
      d.muted
        ? g.createImageSprite(
            this.screen,
            this.muteBtn,
            "buttons/BTN_audioOFF",
            !0,
            this.screenWidth - 65,
            55
          )
        : g.createImageSprite(
            this.screen,
            this.muteBtn,
            "buttons/BTN_audioON",
            !0,
            this.screenWidth - 65,
            55
          );
      g.alignRight(this.muteBtn);
      this.gameState = "CHAR";
      this.fadeIn();
    },
    selectScreen: function () {
      this.inPlay = !1;
      this.screen = new h().add(new Y(394758, 960, 560));
      m.root.addChild(this.screen);
      this.getScreenSize();
      var a = new h();
      g.createImageSprite(
        this.screen,
        a,
        "screens/background",
        !1,
        -((1336 - this.screenWidth) / 2),
        this.screenHeight - 768
      );
      a = new h();
      g.createImageSprite(this.screen, a, "hud/HUD_top_left", !1, -20, -10);
      g.alignLeft(a);
      a = new h();
      g.createImageSprite(
        this.screen,
        a,
        "hud/HUD_top_right",
        !1,
        this.screenWidth - 200,
        -10
      );
      g.alignRight(a);
      a = new h();
      g.createImageSprite(this.screen, a, "hud/logo", !1, 15, 10);
      g.alignLeft(a);
      a = new h();
      g.createXMLSprite(
        this.screen,
        a,
        d.italicFont,
        "Center",
        125,
        87,
        d.translations.node.resolve("cinema")
      );
      g.alignLeft(a);
      a = new h();
      d.vo
        ? g.createImageSprite(
            this.screen,
            a,
            "screens/header",
            !0,
            this.screenWidth / 2 + 80,
            100
          )
        : g.createXMLSprite(
            this.screen,
            a,
            d.titleFont,
            "Center",
            this.screenWidth / 2 + 80,
            100,
            d.translations.node.resolve("selectMission")
          );
      this.frame1 = new h();
      g.createImageSprite(
        this.screen,
        this.frame1,
        "screens/mission1_frame",
        !0,
        this.screenWidth / 2 - 230,
        this.screenHeight / 2 + 80
      );
      this.startBtn = new h();
      g.createImageSprite(
        this.screen,
        this.startBtn,
        "buttons/BTN_play",
        !0,
        this.screenWidth / 2 - 230 + 190,
        this.screenHeight / 2 + 225
      );
      a = new h();
      g.createImageSprite(
        this.screen,
        a,
        "screens/star_icon",
        !0,
        this.screenWidth / 2 - 210 + 50,
        this.screenHeight / 2 + 10
      );
      a = new h();
      g.createImageSprite(
        this.screen,
        a,
        "screens/time_icon",
        !0,
        this.screenWidth / 2 - 210 + 50,
        this.screenHeight / 2 + 60
      );
      a = new h();
      g.createImageSprite(
        this.screen,
        a,
        "screens/land_icon",
        !0,
        this.screenWidth / 2 - 210 + 50,
        this.screenHeight / 2 + 115
      );
      a = new h();
      g.createXMLSprite(
        this.screen,
        a,
        d.blackItalicFont,
        "Center",
        this.screenWidth / 2 - 210 - 30,
        this.screenHeight / 2 - 7,
        d.translations.node.resolve("best")
      );
      a = new h();
      g.createTextSprite(
        this.screen,
        a,
        d.blackFont,
        "Left",
        this.screenWidth / 2 - 210 + 80,
        this.screenHeight / 2 - 18,
        r.string(d.score1)
      );
      a = new h();
      g.createTextSprite(
        this.screen,
        a,
        d.blackFont,
        "Left",
        this.screenWidth / 2 - 210 + 80,
        this.screenHeight / 2 + 33,
        r.string(d.time1)
      );
      a = new h();
      g.createTextSprite(
        this.screen,
        a,
        d.blackFont,
        "Left",
        this.screenWidth / 2 - 210 + 80,
        this.screenHeight / 2 + 84,
        r.string(d.targets1)
      );
      a = new h();
      g.createImageSprite(
        this.screen,
        a,
        "gameover/trophy_" + d.trophy1,
        !0,
        this.screenWidth / 2 - 230 - 120,
        this.screenHeight / 2 + 122
      );
      0 == d.trophy1
        ? a.$zF[1].alpha.set__(0.6)
        : ((a = new h().add(
            new S(
              "screens/glint",
              "glint",
              this.screenWidth / 2 - 230 - 122,
              this.screenHeight / 2 + 175
            )
          )),
          this.screen.addChild(a));
      a = new h();
      g.createImageSprite(
        this.screen,
        a,
        "gameover/trophy_" + d.trophy2,
        !0,
        this.screenWidth / 2 + 230 - 110,
        this.screenHeight / 2 + 122
      );
      0 == d.trophy2
        ? a.$zF[1].alpha.set__(0.6)
        : ((a = new h().add(
            new S(
              "screens/glint",
              "glint",
              this.screenWidth / 2 + 230 - 112,
              this.screenHeight / 2 + 175
            )
          )),
          this.screen.addChild(a));
      this.muteBtn = new h();
      d.muted
        ? g.createImageSprite(
            this.screen,
            this.muteBtn,
            "buttons/BTN_audioOFF",
            !0,
            this.screenWidth - 65,
            55
          )
        : g.createImageSprite(
            this.screen,
            this.muteBtn,
            "buttons/BTN_audioON",
            !0,
            this.screenWidth - 65,
            55
          );
      g.alignRight(this.muteBtn);
      this.gameState = "SELECT";
      this.fadeIn();
    },
    gameOver: function () {
      postScore();
      d.replay
        ? 1 == d.mission
          ? (this.screen.$zF[18].stopGame(),
            this.screen.$zF[18].dispose(),
            this.fadeOut(D(this, this.startGame)))
          : (this.screen.$zF[19].stopGame(),
            this.screen.$zF[19].dispose(),
            this.fadeOut(D(this, this.startGame2)))
        : (1 == d.mission
            ? (this.screen.$zF[18].stopGame(), this.screen.$zF[18].dispose())
            : (this.screen.$zF[19].stopGame(), this.screen.$zF[19].dispose()),
          this.fadeOut(D(this, this.charScreen)),
          this.menuLoop.volume.animateTo(this.musicVolume, 0.5));
    },
    startGame: function () {
      //new logic for game loop
      if (d.playCount >= 3) {
        alert("You played the game 3 times!!");
        return;
      }

      d.playCount++;
      U.saveInt("playCount", d.playCount);
      d.mission = 1;
      this.screen = new h().add(new Y(16777215, d.staticWidth, d.staticHeight));
      m.root.addChild(this.screen);
      this.getScreenSize();
      this.screen.add(
        new ld(this.screenWidth, this.screenHeight, D(this, this.gameOver))
      );
      this.pauseBtn = new h();
      g.createImageSprite(
        this.screen,
        this.pauseBtn,
        "buttons/BTN_pause",
        !0,
        this.screenWidth - 55,
        55
      );
      g.alignRight(this.pauseBtn);
      this.screen2 = new h();
      g.createImageSprite(m.root, this.screen2, "blankScreen", !1, 0, 0);
      this.screen2.$zF[1].set_pointerEnabled(!1);
      this.gameState = "GAME";
      this.inPlay = !0;
      this.fadeIn();
      d.showFPS &&
        m.root.addChild(new h().add(new I(this.status_font)).add(new sb()));
      d.testMode && g.addDebugSpeedAdjuster(m.root);
    },
    startGame2: function () {
      d.mission = 2;
      this.screen = new h().add(new Y(16777215, d.staticWidth, d.staticHeight));
      m.root.addChild(this.screen);
      this.getScreenSize();
      this.screen.add(
        new md(this.screenWidth, this.screenHeight, D(this, this.gameOver))
      );
      this.pauseBtn = new h();
      g.createImageSprite(
        this.screen,
        this.pauseBtn,
        "buttons/BTN_pause",
        !0,
        this.screenWidth - 55,
        55
      );
      g.alignRight(this.pauseBtn);
      this.screen2 = new h();
      g.createImageSprite(m.root, this.screen2, "blankScreen", !1, 0, 0);
      this.screen2.$zF[1].set_pointerEnabled(!1);
      this.gameState = "GAME";
      this.inPlay = !0;
      this.fadeIn();
      d.showFPS &&
        m.root.addChild(new h().add(new I(this.status_font)).add(new sb()));
      d.testMode && g.addDebugSpeedAdjuster(m.root);
    },
    onUpdate: function (a) {
      m.hidden.$bG
        ? (g.mute(!0), (d.active = !1))
        : d.active || (g.mute(!1), (d.active = !0));
      if ("CHAR" == this.gameState || "WAIT" == this.gameState) {
        var b = this.milesBurst.$zF[1].rotation;
        b.set__(b.$bG + 80 * a);
        b = this.gwenBurst.$zF[1].rotation;
        b.set__(b.$bG + 80 * a);
      }
    },
    handleTouchDown: function (a) {},
    handleTouchMove: function (a) {},
    handleTouchUp: function (a) {
      this.audioEnabled ||
        (d.pack.getSound("audio/blank").play(), (this.audioEnabled = !0));
    },
    keyDownHandler: function (a) {
      d.testMode &&
        "HOME" == this.gameState &&
        this.fadeOut(D(this, this.startGame2));
    },
    keyUpHandler: function (a) {},
    pauseGame: function (a, b) {
      if (a) {
        this.gameState = "PAUSED";
        this.screen.add(new $a(0));
        this.pausedFade = new h().add(
          new Y(0, this.screenWidth + 600, this.screenHeight)
        );
        this.screen.addChild(this.pausedFade);
        this.pausedFade.$zF[1].alpha.set__(0.6);
        var c = this.pausedFade.$zF[1].x;
        c.set__(c.$bG - 300);
        this.pauseMenu = new h().add(
          new nd(
            this.screenWidth / 2,
            this.screenHeight / 2,
            D(this, this.closePauseMenu)
          )
        );
        this.screen2.addChild(this.pauseMenu);
        this.pauseBtn.$zF[1].alpha.set__(0.5);
        this.screen2.$zF[1].set_pointerEnabled(!0);
        this.onResize();
      }
    },
    closePauseMenu: function (a) {
      a
        ? (this.screen.add(new $a(1)),
          1 == d.mission
            ? (this.screen.$zF[18].stopGame(), this.screen.$zF[18].dispose())
            : (this.screen.$zF[19].stopGame(), this.screen.$zF[19].dispose()),
          this.fadeOut(D(this, this.charScreen)),
          this.menuLoop.volume.animateTo(this.musicVolume, 0.5),
          this.screen2.dispose())
        : ((this.gameState = "GAME"),
          this.screen.add(new $a(1)),
          this.pausedFade.dispose(),
          this.pauseMenu.dispose(),
          this.screen2.$zF[1].set_pointerEnabled(!1),
          this.pauseBtn.$zF[1].alpha.set__(1),
          this.pauseBtn.$zF[1].scaleX.set__(1),
          this.pauseBtn.$zF[1].scaleY.set__(1));
    },
    fadeIn: function () {
      var a = new h().add(new Y(this.transitionColour, 2e3, 2e3));
      this.screen.addChild(a);
      a.$zF[1].alpha.set__(1);
      a.$zF[1].set_pointerEnabled(!1);
      var b = a.$zF[1].x;
      b.set__(b.$bG - 300);
      b = new G();
      b.run(
        new H([
          new ca(a.$zF[1].alpha, 0, this.transitionTime),
          new x(function () {
            a.dispose();
          }),
        ])
      );
      a.add(b);
      this.onResize();
    },
    fadeOut: function (a) {
      var b = this,
        c = new h().add(new Y(this.transitionColour, 2e3, 2e3));
      this.screen.addChild(c);
      c.$zF[1].alpha.set__(0);
      var d = c.$zF[1].x;
      d.set__(d.$bG - 300);
      d = new G();
      d.run(
        new H([
          new ca(c.$zF[1].alpha, 1, this.transitionTime),
          new x(function () {
            b.screen.dispose();
            a();
          }),
        ])
      );
      c.add(d);
    },
    onResize: function () {
      if (null != this.screen) {
        d.resizeScreen = !0;
        !d.isMobile &&
          667 != m.$vG.$IG.get_width() &&
          900 < m.$vG.$IG.get_width() &&
          (d.resizeScreen = !1);
        939 < m.$vG.$IG.get_width() &&
          1140 > m.$vG.$IG.get_width() &&
          (d.resizeScreen = !1);
        939 < m.$vG.$IG.get_height() &&
          1140 > m.$vG.$IG.get_height() &&
          (d.resizeScreen = !1);
        if (1336 < m.$vG.$IG.get_width() || 960 > m.$vG.$IG.get_width())
          d.resizeScreen = !0;
        2 < m.$vG.$IG.get_width() / m.$vG.$IG.get_height() &&
          (d.resizeScreen = !1);
        if (
          d.alwaysResize ||
          2048 < m.$vG.$IG.get_width() ||
          768 < m.$vG.$IG.get_height()
        )
          d.resizeScreen = !0;
        var a = !1;
        812 == m.$vG.$IG.get_width() && 375 == m.$vG.$IG.get_height()
          ? ((a = d.resizeScreen = !0), (this.debugText = "iPhone X"))
          : 375 == m.$vG.$IG.get_width() && 812 == m.$vG.$IG.get_height()
          ? ((a = d.resizeScreen = !0), (this.debugText = "iPhone X"))
          : 975 == m.$vG.$IG.get_width() && 2172 == m.$vG.$IG.get_height()
          ? ((a = d.resizeScreen = !0),
            (this.debugText = "iPhone X with address bar"))
          : 2172 == m.$vG.$IG.get_width() &&
            975 == m.$vG.$IG.get_height() &&
            ((a = d.resizeScreen = !0),
            (this.debugText = "iPhone X with address bar"));
        2048 == m.$vG.$IG.get_width() &&
          1536 >= m.$vG.$IG.get_height() &&
          ((d.staticWidth = r["int"](m.$vG.$IG.get_width() / 2)),
          (d.staticHeight = r["int"](m.$vG.$IG.get_height() / 2)));
        if (d.resizeScreen) {
          1920 == r["int"](m.$vG.$IG.get_width()) &&
            1120 == r["int"](m.$vG.$IG.get_height()) &&
            (d.staticHeight = 560);
          var b = d.staticWidth,
            c = d.staticHeight;
          d.scale = ha.min(
            m.$vG.$IG.get_width() / b,
            m.$vG.$IG.get_height() / c
          );
          this.screen.$zF[1]
            .setScale(d.scale)
            .setXY(
              (m.$vG.$IG.get_width() - b * d.scale) / 2,
              (m.$vG.$IG.get_height() - c * d.scale) / 2
            );
          if (a) {
            var f = this.screen.$zF[1].scaleX;
            f.set__(1.05 * f.$bG);
            f = this.screen.$zF[1].x;
            f.set__(f.$bG - 19.2);
          }
          null != this.screen2 &&
            null != this.screen2.$zF[1] &&
            (this.screen2.$zF[1]
              .setScale(d.scale)
              .setXY(
                (m.$vG.$IG.get_width() - b * d.scale) / 2,
                (m.$vG.$IG.get_height() - c * d.scale) / 2
              ),
            a &&
              ((f = this.screen2.$zF[1].scaleX),
              f.set__(1.05 * f.$bG),
              (f = this.screen2.$zF[1].x),
              f.set__(f.$bG - 19.2)));
          m.$vG.$IG.get_width() > m.$vG.$IG.get_height()
            ? ((d.offsetX = r["int"](m.$vG.$IG.get_width() / d.scale - b)),
              (d.offsetY = r["int"](m.$vG.$IG.get_height() / d.scale - c)),
              a &&
                (d.offsetX = r["int"](
                  m.$vG.$IG.get_width() / (1.05 * d.scale) - b
                )))
            : ((d.offsetX = r["int"](m.$vG.$IG.get_height() / d.scale - c)),
              (d.offsetY = r["int"](m.$vG.$IG.get_width() / d.scale - b)),
              a &&
                (d.offsetX = r["int"](
                  m.$vG.$IG.get_height() / (1.05 * d.scale) - c
                )));
        } else (d.scale = 1), (d.offsetX = 0), (d.offsetY = 0);
      }
      null;
    },
    getScreenSize: function () {
      if (d.resizeScreen)
        (this.screenWidth = d.staticWidth),
          (this.screenHeight = d.staticHeight);
      else if (
        ((this.screenWidth = m.$vG.$IG.get_width()),
        (this.screenHeight = m.$vG.$IG.get_height()),
        this.screenHeight > this.screenWidth)
      ) {
        var a = this.screenWidth;
        this.screenWidth = this.screenHeight;
        this.screenHeight = a;
      }
    },
    playSound: function (a) {
      this.sfx = d.pack.getSound("audio/" + a).play();
    },
    displayDebugInfo: function () {
      if (d.showDebugInfo) {
        var a = new h();
        g.createFillSprite(this.screen, a, 0, !1, 0, 50, 500, 700, 0.6);
        g.alignLeft(a);
        a = new h();
        g.createTextSprite(
          this.screen,
          a,
          d.bodyFont,
          "Left",
          50,
          100,
          "Screen width  : " + this.screenWidth
        );
        g.alignLeft(a);
        a = new h();
        g.createTextSprite(
          this.screen,
          a,
          d.bodyFont,
          "Left",
          50,
          150,
          "Screen height : " + this.screenHeight
        );
        g.alignLeft(a);
        a = new h();
        g.createTextSprite(
          this.screen,
          a,
          d.bodyFont,
          "Left",
          50,
          200,
          "Actual screen width  : " + m.$vG.$IG.get_width()
        );
        g.alignLeft(a);
        a = new h();
        g.createTextSprite(
          this.screen,
          a,
          d.bodyFont,
          "Left",
          50,
          250,
          "Actual screen height : " + m.$vG.$IG.get_height()
        );
        g.alignLeft(a);
        a = new h();
        g.createTextSprite(
          this.screen,
          a,
          d.bodyFont,
          "Left",
          50,
          300,
          "Resizing : " + r.string(d.resizeScreen)
        );
        g.alignLeft(a);
        a = new h();
        g.createTextSprite(
          this.screen,
          a,
          d.bodyFont,
          "Left",
          50,
          350,
          "Always resize : " + r.string(d.alwaysResize)
        );
        g.alignLeft(a);
        a = new h();
        g.createTextSprite(
          this.screen,
          a,
          d.bodyFont,
          "Left",
          50,
          400,
          "Scale : " + d.scale
        );
        g.alignLeft(a);
        a = new h();
        g.createTextSprite(
          this.screen,
          a,
          d.bodyFont,
          "Left",
          50,
          450,
          "Scale factor : " + m.$vG.$IG.get_scaleFactor()
        );
        g.alignLeft(a);
        a = new h();
        g.createTextSprite(
          this.screen,
          a,
          d.bodyFont,
          "Left",
          50,
          500,
          "Render type  : " + r.string(m.$vG.$HG.get_type())
        );
        g.alignLeft(a);
        a = new h();
        g.createTextSprite(
          this.screen,
          a,
          d.bodyFont,
          "Left",
          50,
          550,
          this.debugText
        );
        g.alignLeft(a);
      }
    },
    __class__: kd,
  });
  var Jb = function (a, b, c) {
    this.trophyNumber = 0;
    s.call(this);
    this.x = a | 0;
    this.y = b | 0;
    this.callback = c;
    d.resizeScreen
      ? ((this.screenWidth = d.staticWidth),
        (this.screenHeight = d.staticHeight))
      : ((this.screenWidth = m.$vG.$IG.get_width()),
        (this.screenHeight = m.$vG.$IG.get_height()));
  };
  l["project.GameOver"] = Jb;
  Jb.__name__ = ["project", "GameOver"];
  Jb.__super__ = s;
  Jb.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 23;
    },
    onAdded: function () {
      var a = this;
      this.items = [];
      this.owner.add(new N(d.pack.getTexture("blank")));
      this.thisSprite = this.owner.$zF[1];
      this.thisSprite.setXY(this.x, this.y);
      this.getTrophyType();
      this.fade = new h();
      g.createFillSprite(this.owner, this.fade, 0, !0, 0, 0, 3e3, 3e3, 0);
      var b = new G();
      b.run(
        new H([
          new ca(this.fade.$zF[1].alpha, 0.75, 0.5),
          new x(function () {
            a.addContent();
          }),
        ])
      );
      this.fade.add(b);
    },
    getTrophyType: function () {
      this.trophyNumber = 0;
      1 == d.mission
        ? (25 <= d.score && 15 <= d.targets
            ? (this.trophyNumber = 3)
            : 10 <= d.score && 10 <= d.targets
            ? (this.trophyNumber = 2)
            : 5 <= d.score && 5 <= d.targets && (this.trophyNumber = 1),
          this.trophyNumber > d.trophy1 && (d.trophy1 = this.trophyNumber),
          d.score > d.score1 && (d.score1 = d.score),
          d.time > d.time1 && (d.time1 = d.time),
          d.targets > d.targets1 && (d.targets1 = d.targets))
        : (100 <= d.score && 15 <= d.targets
            ? (this.trophyNumber = 3)
            : 60 <= d.score && 10 <= d.targets
            ? (this.trophyNumber = 2)
            : 25 <= d.score && 5 <= d.targets && (this.trophyNumber = 1),
          this.trophyNumber > d.trophy2 && (d.trophy2 = this.trophyNumber),
          d.score > d.score2 && (d.score2 = d.score),
          d.time > d.time2 && (d.time2 = d.time),
          d.targets > d.targets2 && (d.targets2 = d.targets));
      U.save();
    },
    addContent: function () {
      this.frame = new h();
      g.createImageSprite(
        this.owner,
        this.frame,
        "gameover/frame_mission" + d.mission,
        !0,
        0,
        0
      );
      P.animate(this.frame, 0, -15, -450, 20, 0.2);
      var a = new h();
      d.vo
        ? g.createImageSprite(this.owner, a, "gameover/header", !0, 0, -200)
        : g.createXMLSprite(
            this.owner,
            a,
            d.titleFont,
            "Center",
            0,
            -200,
            d.translations.node.resolve("missionOver")
          );
      P.spawn(a, 0.5, 0.3, 0.3);
      this.items.push(a);
      a = new h();
      g.createXMLSprite(
        this.owner,
        a,
        d.blackItalicFont,
        "Center",
        10,
        -110,
        d.translations.node.resolve("results")
      );
      P.spawn(a, 0.7, 0.3, 0.3);
      this.items.push(a);
      a = new h();
      g.createImageSprite(this.owner, a, "gameover/icon_pickup", !0, 90, -30);
      P.spawn(a, 0.9, 0.3, 0.3);
      this.items.push(a);
      a = new h();
      g.createImageSprite(this.owner, a, "gameover/icon_time", !0, 90, 30);
      P.spawn(a, 1, 0.3, 0.3);
      this.items.push(a);
      a = new h();
      g.createImageSprite(this.owner, a, "gameover/icon_spider", !0, 90, 100);
      P.spawn(a, 1.1, 0.3, 0.3);
      this.items.push(a);
      a = new h();
      g.createTextSprite(
        this.owner,
        a,
        d.blackFont,
        "Center",
        150,
        -58,
        r.string(d.score)
      );
      P.spawn(a, 1, 0.3, 0.3);
      this.items.push(a);
      a = new h();
      g.createTextSprite(
        this.owner,
        a,
        d.blackFont,
        "Center",
        150,
        2,
        r.string(d.time)
      );
      P.spawn(a, 1.1, 0.3, 0.3);
      this.items.push(a);
      a = new h();
      g.createTextSprite(
        this.owner,
        a,
        d.blackFont,
        "Center",
        150,
        64,
        r.string(d.targets)
      );
      P.spawn(a, 1.2, 0.3, 0.3);
      this.items.push(a);
      this.closeBtn = new h();
      g.createImageSprite(
        this.owner,
        this.closeBtn,
        "buttons/BTN_home",
        !0,
        285,
        -95
      );
      P.spawn(this.closeBtn, 1.5, 0.5, 0.5);
      this.items.push(this.closeBtn);
      this.replayBtn = new h();
      g.createImageSprite(
        this.owner,
        this.replayBtn,
        "buttons/BTN_replay",
        !0,
        20000,
        -20000
      );
      P.spawn(this.replayBtn, 1.7, 0.5, 0.5);
      this.items.push(this.replayBtn);
      0 < this.trophyNumber &&
        ((a = new h()),
        g.createImageSprite(
          this.owner,
          a,
          "gameover/trophy_" + this.trophyNumber,
          !0,
          -130,
          50
        ),
        P.spawn(a, 1, 0.5, 0.5),
        (a = new h().add(new S("screens/glint", "glint", -132, 103))),
        this.owner.addChild(a),
        P.spawn(a, 1, 0.5, 0.5));
      this.connect1(m.$vG.$GG.down, D(this, this.onPointerDown));
      this.connect1(m.$vG.$GG.move, D(this, this.onPointerMove));
    },
    onPointerDown: function (a) {
      d.replay = !1;
      a.hit == this.replayBtn.$zF[1]
        ? ((d.replay = !0), null)
        : a.hit == this.closeBtn.$zF[1] && ((d.replay = !1), null);
      this.callback();
    },
    onPointerMove: function (a) {
      g.rolloverImage(
        this.closeBtn,
        "buttons/BTN_home",
        "buttons/BTN_home_rollover",
        a
      );
      g.rolloverImage(
        this.replayBtn,
        "buttons/BTN_replay",
        "buttons/BTN_replay_rollover",
        a
      );
    },
    __class__: Jb,
  });
  var Kb = function (a, b, c) {
    this.stage = 1;
    s.call(this);
    this.x = a | 0;
    this.y = b | 0;
    this.callback = c;
    d.resizeScreen
      ? ((this.screenWidth = d.staticWidth),
        (this.screenHeight = d.staticHeight))
      : ((this.screenWidth = m.$vG.$IG.get_width()),
        (this.screenHeight = m.$vG.$IG.get_height()));
  };
  l["project.Help"] = Kb;
  Kb.__name__ = ["project", "Help"];
  Kb.__super__ = s;
  Kb.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 27;
    },
    onAdded: function () {
      var a = this;
      this.items = [];
      this.owner.add(new N(d.pack.getTexture("blank")));
      this.thisSprite = this.owner.$zF[1];
      this.thisSprite.setXY(this.x, this.y);
      this.fade = new h();
      g.createFillSprite(this.owner, this.fade, 0, !0, 0, 0, 3e3, 3e3, 0);
      var b = new G();
      b.run(
        new H([
          new ca(this.fade.$zF[1].alpha, 0.75, 0.5),
          new x(function () {
            a.addContent();
          }),
        ])
      );
      this.fade.add(b);
    },
    addContent: function () {
      this.frame = new h();
      g.createImageSprite(this.owner, this.frame, "help/subscreen", !0, 0, 0);
      P.animate(this.frame, 0, -15, -450, 20, 0.2);
      var a = new h();
      d.vo
        ? g.createImageSprite(this.owner, a, "help/header", !0, 0, -200)
        : g.createXMLSprite(
            this.owner,
            a,
            d.titleFont,
            "Center",
            0,
            -200,
            d.translations.node.resolve("help")
          );
      P.spawn(a, 0.5, 0.3, 0.3);
      this.items.push(a);
      this.help = new h();
      1 == d.mission
        ? d.isMobile
          ? (g.createImageSprite(
              this.owner,
              this.help,
              "help/m1_mobile1",
              !0,
              15,
              20
            ),
            (a = new h()),
            g.createXMLSprite(
              this.help,
              a,
              d.helpFont,
              "Center",
              30,
              30,
              d.translations.node.resolve("run")
            ),
            (a = new h()),
            g.createXMLSprite(
              this.help,
              a,
              d.helpFont,
              "Center",
              265,
              30,
              d.translations.node.resolve("jumpCars")
            ))
          : (g.createImageSprite(
              this.owner,
              this.help,
              "help/m1_desktop1",
              !0,
              15,
              20
            ),
            (a = new h()),
            g.createXMLSprite(
              this.help,
              a,
              d.helpFont,
              "Center",
              20,
              20,
              d.translations.node.resolve("run")
            ),
            (a = new h()),
            g.createXMLSprite(
              this.help,
              a,
              d.helpFont,
              "Center",
              250,
              20,
              d.translations.node.resolve("jumpCars")
            ))
        : d.isMobile
        ? d.vo
          ? g.createImageSprite(
              this.owner,
              this.help,
              "help/m2_mobile1",
              !0,
              15,
              20
            )
          : (g.createImageSprite(
              this.owner,
              this.help,
              "help/m2_mobile1_int",
              !0,
              15,
              20
            ),
            (a = new h()),
            g.createXMLSprite(
              this.help,
              a,
              d.helpFont,
              "Center",
              210,
              20,
              d.translations.node.resolve("jumpWall")
            ),
            (a = new h()),
            g.createXMLSprite(
              this.help,
              a,
              d.helpFont,
              "Center",
              35,
              210,
              d.translations.node.resolve("jump")
            ),
            (a = new h()),
            g.createXMLSprite(
              this.help,
              a,
              d.helpFont,
              "Center",
              150,
              255,
              d.translations.node.resolve("hold")
            ),
            (a = new h()),
            g.createXMLSprite(
              this.help,
              a,
              d.helpFont,
              "Center",
              330,
              220,
              d.translations.node.resolve("power")
            ))
        : d.vo
        ? g.createImageSprite(
            this.owner,
            this.help,
            "help/m2_desktop1",
            !0,
            15,
            20
          )
        : (g.createImageSprite(
            this.owner,
            this.help,
            "help/m2_desktop1_int",
            !0,
            15,
            20
          ),
          (a = new h()),
          g.createXMLSprite(
            this.help,
            a,
            d.helpFont,
            "Center",
            210,
            20,
            d.translations.node.resolve("jumpWall")
          ),
          (a = new h()),
          g.createXMLSprite(
            this.help,
            a,
            d.helpFont,
            "Center",
            35,
            210,
            d.translations.node.resolve("jump")
          ),
          (a = new h()),
          g.createXMLSprite(
            this.help,
            a,
            d.helpFont,
            "Center",
            150,
            255,
            d.translations.node.resolve("hold")
          ),
          (a = new h()),
          g.createXMLSprite(
            this.help,
            a,
            d.helpFont,
            "Center",
            330,
            220,
            d.translations.node.resolve("power")
          ));
      P.fadeIn(this.help, 0.9, 0.3);
      this.backBtn = new h();
      g.createImageSprite(
        this.owner,
        this.backBtn,
        "buttons/BTN_back",
        !0,
        -275,
        20
      );
      P.spawn(this.backBtn, 1.5, 0.5, 0.5);
      this.items.push(this.backBtn);
      this.nextBtn = new h();
      g.createImageSprite(
        this.owner,
        this.nextBtn,
        "buttons/BTN_next",
        !0,
        300,
        20
      );
      P.spawn(this.nextBtn, 1.5, 0.5, 0.5);
      this.items.push(this.nextBtn);
      this.closeBtn = new h();
      g.createImageSprite(
        this.owner,
        this.closeBtn,
        "buttons/BTN_close",
        !0,
        300,
        -100
      );
      P.spawn(this.closeBtn, 1.5, 0.5, 0.5);
      this.items.push(this.closeBtn);
      this.connect1(m.$vG.$GG.down, D(this, this.onPointerDown));
      this.connect1(m.$vG.$GG.move, D(this, this.onPointerMove));
    },
    onPointerDown: function (a) {
      if (a.hit == this.closeBtn.$zF[1]) this.callback();
      else if (a.hit == this.backBtn.$zF[1] || a.hit == this.nextBtn.$zF[1])
        this.help.dispose(),
          (this.help = new h()),
          1 == this.stage
            ? ((this.stage = 2),
              1 == d.mission
                ? (g.createImageSprite(
                    this.owner,
                    this.help,
                    "help/m1_2",
                    !0,
                    0,
                    20
                  ),
                  (a = new h()),
                  g.createXMLSprite(
                    this.help,
                    a,
                    d.helpFont,
                    "Left",
                    270,
                    55,
                    d.translations.node.resolve("collect")
                  ),
                  (a = new h()),
                  g.createXMLSprite(
                    this.help,
                    a,
                    d.helpFont,
                    "Left",
                    270,
                    200,
                    d.translations.node.resolve("avoid")
                  ))
                : (g.createImageSprite(
                    this.owner,
                    this.help,
                    "help/m2_2",
                    !0,
                    0,
                    20
                  ),
                  (a = new h()),
                  g.createXMLSprite(
                    this.help,
                    a,
                    d.helpFont,
                    "Center",
                    95,
                    35,
                    d.translations.node.resolve("collect2")
                  ),
                  (a = new h()),
                  g.createXMLSprite(
                    this.help,
                    a,
                    d.helpFont,
                    "Left",
                    335,
                    40,
                    d.translations.node.resolve("land")
                  ),
                  (a = new h()),
                  g.createXMLSprite(
                    this.help,
                    a,
                    d.helpFont,
                    "Center",
                    260,
                    170,
                    d.translations.node.resolve("avoid")
                  )))
            : ((this.stage = 1),
              1 == d.mission
                ? d.isMobile
                  ? (g.createImageSprite(
                      this.owner,
                      this.help,
                      "help/m1_mobile1",
                      !0,
                      15,
                      20
                    ),
                    (a = new h()),
                    g.createXMLSprite(
                      this.help,
                      a,
                      d.helpFont,
                      "Center",
                      30,
                      30,
                      d.translations.node.resolve("run")
                    ),
                    (a = new h()),
                    g.createXMLSprite(
                      this.help,
                      a,
                      d.helpFont,
                      "Center",
                      265,
                      30,
                      d.translations.node.resolve("jumpCars")
                    ))
                  : (g.createImageSprite(
                      this.owner,
                      this.help,
                      "help/m1_desktop1",
                      !0,
                      15,
                      20
                    ),
                    (a = new h()),
                    g.createXMLSprite(
                      this.help,
                      a,
                      d.helpFont,
                      "Center",
                      20,
                      20,
                      d.translations.node.resolve("run")
                    ),
                    (a = new h()),
                    g.createXMLSprite(
                      this.help,
                      a,
                      d.helpFont,
                      "Center",
                      250,
                      20,
                      d.translations.node.resolve("jumpCars")
                    ))
                : d.isMobile
                ? d.vo
                  ? g.createImageSprite(
                      this.owner,
                      this.help,
                      "help/m2_mobile1",
                      !0,
                      15,
                      20
                    )
                  : (g.createImageSprite(
                      this.owner,
                      this.help,
                      "help/m2_mobile1_int",
                      !0,
                      15,
                      20
                    ),
                    (a = new h()),
                    g.createXMLSprite(
                      this.help,
                      a,
                      d.helpFont,
                      "Center",
                      215,
                      25,
                      d.translations.node.resolve("jumpWall")
                    ),
                    (a = new h()),
                    g.createXMLSprite(
                      this.help,
                      a,
                      d.helpFont,
                      "Center",
                      55,
                      225,
                      d.translations.node.resolve("jump")
                    ),
                    (a = new h()),
                    g.createXMLSprite(
                      this.help,
                      a,
                      d.helpFont,
                      "Center",
                      155,
                      270,
                      d.translations.node.resolve("hold")
                    ),
                    (a = new h()),
                    g.createXMLSprite(
                      this.help,
                      a,
                      d.helpFont,
                      "Center",
                      330,
                      220,
                      d.translations.node.resolve("power")
                    ))
                : d.vo
                ? g.createImageSprite(
                    this.owner,
                    this.help,
                    "help/m2_desktop1",
                    !0,
                    15,
                    20
                  )
                : (g.createImageSprite(
                    this.owner,
                    this.help,
                    "help/m2_desktop1_int",
                    !0,
                    15,
                    20
                  ),
                  (a = new h()),
                  g.createXMLSprite(
                    this.help,
                    a,
                    d.helpFont,
                    "Center",
                    215,
                    25,
                    d.translations.node.resolve("jumpWall")
                  ),
                  (a = new h()),
                  g.createXMLSprite(
                    this.help,
                    a,
                    d.helpFont,
                    "Center",
                    55,
                    225,
                    d.translations.node.resolve("jump")
                  ),
                  (a = new h()),
                  g.createXMLSprite(
                    this.help,
                    a,
                    d.helpFont,
                    "Center",
                    155,
                    270,
                    d.translations.node.resolve("hold")
                  ),
                  (a = new h()),
                  g.createXMLSprite(
                    this.help,
                    a,
                    d.helpFont,
                    "Center",
                    330,
                    220,
                    d.translations.node.resolve("power")
                  ))),
          P.fadeIn(this.help, 0, 0.3);
    },
    onPointerMove: function (a) {
      g.rolloverImage(
        this.closeBtn,
        "buttons/BTN_close",
        "buttons/BTN_close_rollover",
        a
      );
      g.rolloverImage(
        this.backBtn,
        "buttons/BTN_back",
        "buttons/BTN_back_rollover",
        a
      );
      g.rolloverImage(
        this.nextBtn,
        "buttons/BTN_next",
        "buttons/BTN_next_rollover",
        a
      );
    },
    __class__: Kb,
  });
  var od = function (a, b, c, d) {
    s.call(this);
    this.x = a | 0;
    this.y = b | 0;
    this.screenWidth = c;
    this.screenHeight = d;
  };
  l["project.Hud"] = od;
  od.__name__ = ["project", "Hud"];
  od.__super__ = s;
  od.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 34;
    },
    onAdded: function () {
      var a = new h();
      g.createImageSprite(this.owner, a, "hud/HUD_top_left", !1, -20, -10);
      g.alignLeft(a);
      a = new h();
      g.createImageSprite(
        this.owner,
        a,
        "hud/HUD_top_right",
        !1,
        this.screenWidth - 200,
        -10
      );
      g.alignRight(a);
      a = new h();
      g.createImageSprite(this.owner, a, "hud/logo", !1, 10, 10);
      g.alignLeft(a);
      a = new h();
      g.createXMLSprite(
        this.owner,
        a,
        d.italicFont,
        "Center",
        120,
        87,
        d.translations.node.resolve("cinemaGame")
      );
      g.alignLeft(a);
      a = new h();
      g.createImageSprite(
        this.owner,
        a,
        "hud/char_icon_" + d["char"],
        !0,
        290,
        50
      );
      g.alignLeft(a);
      this.healthbar = new h();
      g.createImageSprite(
        this.owner,
        this.healthbar,
        "hud/health4",
        !0,
        450,
        65
      );
      g.alignLeft(this.healthbar);
      a = new h();
      switch (d["char"]) {
        case "miles":
          g.createXMLSprite(
            this.healthbar,
            a,
            d.italicFont,
            "Center",
            50,
            -6,
            d.translations.node.resolve("miles")
          );
          break;
        case "gwen":
          g.createXMLSprite(
            this.healthbar,
            a,
            d.italicFont,
            "Center",
            50,
            -6,
            d.translations.node.resolve("gwen")
          );
      }
      g.alignLeft(a);
      a.$zF[1].set_pixelSnapping(!1);
      var b = a.$zF[1].scaleX;
      b.set__(0.8 * b.$bG);
      a = a.$zF[1].scaleY;
      a.set__(0.8 * a.$bG);
      a = new h();
      g.createImageSprite(this.owner, a, "hud/pickup_icon", !0, 600, 50);
      g.alignLeft(a);
      this.scoreText = new h();
      g.createTextSprite(
        this.owner,
        this.scoreText,
        d.hudFont,
        "Left",
        617,
        22,
        "0"
      );
      g.alignLeft(this.scoreText);
      a = new h();
      g.createImageSprite(this.owner, a, "game2/landing_icon", !0, 690, 55);
      g.alignLeft(a);
      this.tagsText = new h();
      g.createTextSprite(
        this.owner,
        this.tagsText,
        d.hudFont,
        "Left",
        711,
        22,
        "0"
      );
      g.alignLeft(this.tagsText);
      a = new h();
      g.createImageSprite(this.owner, a, "hud/time_icon", !0, 776, 50);
      g.alignLeft(a);
      this.timeText = new h();
      g.createTextSprite(
        this.owner,
        this.timeText,
        d.hudFont,
        "Left",
        798,
        22,
        "60"
      );
      g.alignLeft(this.timeText);
    },
    setTargets: function (a) {
      r.instance(this.tagsText.$zF[1], I).set_text(null == a ? "null" : "" + a);
    },
    setScore: function (a) {
      r.instance(this.scoreText.$zF[1], I).set_text(
        null == a ? "null" : "" + a
      );
    },
    setTime: function (a) {
      r.instance(this.timeText.$zF[1], I).set_text(null == a ? "null" : "" + a);
      5 >= a
        ? this.timeText.$zF[1].setTint(16711680)
        : this.timeText.$zF[1].setTint(16777215);
    },
    setHealth: function (a) {
      r.instance(this.healthbar.$zF[1], N).texture = d.pack.getTexture(
        "hud/health" + a
      );
      // g.alignLeft(this.healthbar);
    },
    __class__: od,
  });
  var pd = function (a, b, c, d) {
    s.call(this);
    this.x = a | 0;
    this.y = b | 0;
    this.screenWidth = c;
    this.screenHeight = d;
  };
  l["project.Hud2"] = pd;
  pd.__name__ = ["project", "Hud2"];
  pd.__super__ = s;
  pd.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 26;
    },
    onAdded: function () {
      var a = new h();
      g.createImageSprite(this.owner, a, "hud/HUD_top_left", !1, -20, -10);
      g.alignLeft(a);
      a = new h();
      g.createImageSprite(
        this.owner,
        a,
        "hud/HUD_top_right",
        !1,
        this.screenWidth - 200,
        -10
      );
      g.alignRight(a);
      a = new h();
      g.createImageSprite(this.owner, a, "hud/logo", !1, 10, 10);
      g.alignLeft(a);
      a = new h();
      g.createXMLSprite(
        this.owner,
        a,
        d.italicFont,
        "Center",
        120,
        87,
        d.translations.node.resolve("cinemaGame")
      );
      g.alignLeft(a);
      a = new h();
      g.createImageSprite(
        this.owner,
        a,
        "hud/char_icon_" + d["char"],
        !0,
        290,
        50
      );
      g.alignLeft(a);
      this.healthbar = new h();
      g.createImageSprite(
        this.owner,
        this.healthbar,
        "hud/health4",
        !0,
        450,
        65
      );
      g.alignLeft(this.healthbar);
      a = new h();
      switch (d["char"]) {
        case "miles":
          g.createXMLSprite(
            this.healthbar,
            a,
            d.italicFont,
            "Center",
            50,
            -6,
            d.translations.node.resolve("miles")
          );
          break;
        case "gwen":
          g.createXMLSprite(
            this.healthbar,
            a,
            d.italicFont,
            "Center",
            50,
            -6,
            d.translations.node.resolve("gwen")
          );
      }
      g.alignLeft(a);
      a.$zF[1].set_pixelSnapping(!1);
      var b = a.$zF[1].scaleX;
      b.set__(0.8 * b.$bG);
      a = a.$zF[1].scaleY;
      a.set__(0.8 * a.$bG);
      a = new h();
      g.createImageSprite(this.owner, a, "hud/pickup_icon", !0, 600, 50);
      g.alignLeft(a);
      this.scoreText = new h();
      g.createTextSprite(
        this.owner,
        this.scoreText,
        d.hudFont,
        "Left",
        617,
        22,
        "0"
      );
      g.alignLeft(this.scoreText);
      a = new h();
      g.createImageSprite(this.owner, a, "game2/landing_icon", !0, 690, 55);
      g.alignLeft(a);
      this.tagsText = new h();
      g.createTextSprite(
        this.owner,
        this.tagsText,
        d.hudFont,
        "Left",
        711,
        22,
        "0"
      );
      g.alignLeft(this.tagsText);
      a = new h();
      g.createImageSprite(this.owner, a, "hud/time_icon", !0, 776, 50);
      g.alignLeft(a);
      this.timeText = new h();
      g.createTextSprite(
        this.owner,
        this.timeText,
        d.hudFont,
        "Left",
        798,
        22,
        "60"
      );
      g.alignLeft(this.timeText);
    },
    setScore: function (a) {
      r.instance(this.scoreText.$zF[1], I).set_text(
        null == a ? "null" : "" + a
      );
    },
    setTargets: function (a) {
      r.instance(this.tagsText.$zF[1], I).set_text(null == a ? "null" : "" + a);
    },
    setTime: function (a) {
      r.instance(this.timeText.$zF[1], I).set_text(null == a ? "null" : "" + a);
      5 >= a
        ? this.timeText.$zF[1].setTint(16711680)
        : this.timeText.$zF[1].setTint(16777215);
    },
    setHealth: function (a) {
      r.instance(this.healthbar.$zF[1], N).texture = d.pack.getTexture(
        "hud/health" + a
      );
      // g.alignLeft(this.healthbar);
    },
    __class__: pd,
  });
  var ld = function (a, b, c) {
    this.touchDist = 60;
    this.screenPushback = !1;
    this.frontSpeed = -150;
    this.midSpeed = 100;
    this.rearSpeed = -200;
    this.inPlatform =
      this.enterPlatform =
      this.exitPlatform =
      this.platformLightsOn =
      this.inColumn =
        !1;
    this.timer = 1.5;
    this.seconds = 60;
    this.platformBGWidth = 977;
    this.bgWidth = 1213;
    this.scrollSpeed = 1613;
    this.controlsActive = !0;
    this.showingGo = !1;
    this.group = 1;
    this.gameEnded = !1;
    this.maxHealthPickups = 4;
    this.healthPickups = 0;
    s.call(this);
    this.screenWidth = a;
    this.screenHeight = b;
    this.gameOverCallback = c;
  };
  l["project.Level"] = ld;
  ld.__name__ = ["project", "Level"];
  ld.__super__ = s;
  ld.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 18;
    },
    onAdded: function () {
      d.isMobile &&
        (this.connect1(m.$vG.$JG.down, D(this, this.handleTouchDown)),
        this.connect1(m.$vG.$JG.move, D(this, this.handleTouchMove)),
        this.connect1(m.$vG.$JG.up, D(this, this.handleTouchUp)));
      this.connect1(m.$vG.getKeyboard().down, D(this, this.keyDownHandler));
      this.connect1(m.$vG.getKeyboard().up, D(this, this.keyUpHandler));
      this.leftLimit = (50 - d.offsetX / 2) | 0;
      this.rightLimit = (this.screenWidth - 50 + d.offsetX / 2) | 0;
      this.startGame();
      this.musicLoop = d.pack
        .getSound("audio/Spiderman_ITSV_SubwayGameplay_v1")
        .loop();
      this.musicLoop.volume.set__(0);
      this.musicLoop.volume.animateTo(0.8, 0.5);
      this.ambience = d.pack.getSound("audio/subway_train_loop").loop();
      this.ambience.volume.set__(0);
      this.ambience.volume.animateTo(0.8, 0.5);
    },
    stopGame: function () {
      this.inPlay = !1;
      this.musicLoop.dispose();
      this.ambience.dispose();
    },
    startGame: function () {
      var a = this;
      this.bgs = [];
      this.platformBgs = [];
      this.platformFgs = [];
      this.platformLights = [];
      this.tracks = [];
      this.pickups = [];
      this.masks = [];
      this.cars = [];
      this.targets = this.score = d.time = 0;
      this.screen = new h().add(new Y(16777215, d.staticWidth, d.staticHeight));
      this.owner.addChild(this.screen);
      this.background = new h();
      g.createImageSprite(
        this.screen,
        this.background,
        "blank",
        !1,
        -((1336 - this.screenWidth) / 2),
        this.screenHeight - 768
      );
      this.background.$zF[1].set_pixelSnapping(!1);
      var b = new h();
      g.createImageSprite(this.background, b, "game/bg_tunnel", !1, 0, 0);
      this.bgs.push(b);
      b = new h();
      g.createImageSprite(
        this.background,
        b,
        "game/bg_tunnel",
        !1,
        this.bgWidth,
        0
      );
      this.bgs.push(b);
      b = new h();
      g.createImageSprite(
        this.background,
        b,
        "game/bg_tunnel",
        !1,
        2 * this.bgWidth,
        0
      );
      this.bgs.push(b);
      this.platformBackground = new h();
      g.createImageSprite(
        this.screen,
        this.platformBackground,
        "blank",
        !1,
        -((1336 - this.screenWidth) / 2),
        this.screenHeight - 520
      );
      this.platformBackground.$zF[1].set_pixelSnapping(!1);
      this.firstRedPlatform = new h();
      g.createImageSprite(
        this.platformBackground,
        this.firstRedPlatform,
        "game/red/bg_back_layer",
        !1,
        0,
        0
      );
      this.firstRedPlatform.$zF[1].set_visible(!1);
      this.platformBgs.push(this.firstRedPlatform);
      b = new h();
      g.createImageSprite(
        this.platformBackground,
        b,
        "game/red/bg_back_layer",
        !1,
        this.platformBGWidth,
        0
      );
      b.$zF[1].set_visible(!1);
      this.platformBgs.push(b);
      b = new h();
      g.createImageSprite(
        this.platformBackground,
        b,
        "game/red/bg_back_layer",
        !1,
        2 * this.platformBGWidth,
        0
      );
      b.$zF[1].set_visible(!1);
      this.platformBgs.push(b);
      this.redParallax = new h().add(new qd(0, 0));
      this.platformBackground.addChild(this.redParallax);
      this.redParallax.$zF[1].set_visible(!1);
      this.platformLight = new h();
      g.createImageSprite(
        this.screen,
        this.platformLight,
        "blank",
        !1,
        -((1336 - this.screenWidth) / 2),
        this.screenHeight - 600
      );
      this.platformLight.$zF[1].set_pixelSnapping(!1);
      b = new h();
      g.createImageSprite(this.platformLight, b, "game/red/light", !1, 0, 0);
      b.$zF[1].set_visible(!1);
      this.platformLights.push(b);
      b = new h();
      g.createImageSprite(
        this.platformLight,
        b,
        "game/red/light",
        !1,
        this.platformBGWidth,
        0
      );
      b.$zF[1].set_visible(!1);
      this.platformLights.push(b);
      b = new h();
      g.createImageSprite(
        this.platformLight,
        b,
        "game/red/light",
        !1,
        2 * this.platformBGWidth,
        0
      );
      b.$zF[1].set_visible(!1);
      this.platformLights.push(b);
      this.game = new h();
      g.createImageSprite(this.screen, this.game, "blank", !1, 0, 0);
      this.rearTrack = [];
      this.midTrack = [];
      this.frontTrack = [];
      b = new h().add(new Pa(1, 0, this.screenHeight - 768 + 500));
      this.game.addChild(b);
      b.$zF[1].set_pixelSnapping(!1);
      this.rearTrack.push(this.duplicateCar(b));
      b = new h().add(new Pa(1, 2500, this.screenHeight - 768 + 500));
      this.game.addChild(b);
      b.$zF[1].set_pixelSnapping(!1);
      this.rearTrack.push(this.duplicateCar(b));
      this.fade2 = new h();
      g.createImageSprite(
        this.game,
        this.fade2,
        "game/fade",
        !0,
        this.screenWidth / 2,
        this.screenHeight - 768 + 650
      );
      this.fade2.$zF[1].scaleX.set__(3);
      b = new h().add(new Pa(2, -300, this.screenHeight - 768 + 600));
      this.game.addChild(b);
      b.$zF[1].set_pixelSnapping(!1);
      this.midTrack.push(this.duplicateCar(b));
      b = new h().add(new Pa(2, 2200, this.screenHeight - 768 + 600));
      this.game.addChild(b);
      b.$zF[1].set_pixelSnapping(!1);
      this.midTrack.push(this.duplicateCar(b));
      this.fade1 = new h();
      g.createImageSprite(
        this.game,
        this.fade1,
        "game/fade",
        !0,
        this.screenWidth / 2,
        this.screenHeight - 768 + 750
      );
      this.fade1.$zF[1].scaleX.set__(3);
      b = new h().add(new Pa(3, 1e3, this.screenHeight - 768 + 700));
      this.game.addChild(b);
      b.$zF[1].set_pixelSnapping(!1);
      this.frontTrack.push(this.duplicateCar(b));
      b = new h().add(new Pa(3, -1500, this.screenHeight - 768 + 700));
      this.game.addChild(b);
      b.$zF[1].set_pixelSnapping(!1);
      this.frontTrack.push(this.duplicateCar(b));
      this.spawnPickupGroup(this.rearTrack[0], g.randomNumber(1, 2));
      this.spawnPickupGroup(this.rearTrack[1], g.randomNumber(3, 4));
      this.spawnPickupGroup(this.frontTrack[0], g.randomNumber(1, 2));
      this.spawnPickupGroup(this.frontTrack[1], g.randomNumber(5, 6));
      this.group = 7;
      this.spidey = new h().add(
        new rd(
          this.midTrack[0],
          500,
          20,
          D(this, this.leaveCar),
          D(this, this.landOnCar)
        )
      );
      this.midTrack[0].addChild(this.spidey);
      b = new G();
      b.run(
        new H([
          new z(0.1),
          new x(function () {
            a.screenPushback = !0;
          }),
        ])
      );
      this.spidey.add(b);
      this.darkFade = new h();
      g.createFillSprite(
        this.screen,
        this.darkFade,
        0,
        !0,
        this.screenWidth / 2,
        this.screenHeight / 2,
        3e3,
        3e3,
        0
      );
      this.column = new h();
      g.createImageSprite(
        this.game,
        this.column,
        "game/red/fg_column",
        !1,
        -500,
        this.screenHeight - 749
      );
      for (var b = 0, c = this.frontTrack; b < c.length; ) {
        var f = c[b];
        ++b;
        this.cars.push(f);
      }
      b = 0;
      for (c = this.midTrack; b < c.length; )
        (f = c[b]), ++b, this.cars.push(f);
      b = 0;
      for (c = this.rearTrack; b < c.length; )
        (f = c[b]), ++b, this.cars.push(f);
      this.hud = new h().add(new od(0, 0, this.screenWidth, this.screenHeight));
      this.screen.addChild(this.hud);
      d.isMobile &&
        ((this.leftBtn = new h()),
        g.createImageSprite(
          this.screen,
          this.leftBtn,
          "game/left",
          !0,
          70,
          this.screenHeight - 100
        ),
        (this.rightBtn = new h()),
        g.createImageSprite(
          this.screen,
          this.rightBtn,
          "game/right",
          !0,
          210,
          this.screenHeight - 100
        ),
        g.alignLeft(this.leftBtn),
        g.alignLeft(this.rightBtn),
        (this.upBtn = new h()),
        g.createImageSprite(
          this.screen,
          this.upBtn,
          "game/up",
          !0,
          this.screenWidth - 120,
          this.screenHeight - 170
        ),
        (this.downBtn = new h()),
        g.createImageSprite(
          this.screen,
          this.downBtn,
          "game/down",
          !0,
          this.screenWidth - 120,
          this.screenHeight - 60
        ),
        g.alignRight(this.upBtn),
        g.alignRight(this.downBtn));
      this.help = new h().add(
        new Kb(
          this.screenWidth / 2,
          this.screenHeight / 2,
          D(this, this.helpCallback)
        )
      );
      this.screen.addChild(this.help);
    },
    helpCallback: function () {
      var a = this;
      this.help.dispose();
      this.inPlay = !0;
      var b = new G();
      b.run(
        new ua(
          new H([
            new z(2),
            new x(function () {
              a.inColumn = !0;
              r.instance(a.column.$zF[1], N).texture = d.pack.getTexture(
                "game/light/fg_column"
              );
              a.column.$zF[1].x.set__(a.screenWidth + 200);
            }),
            new z(3),
            new x(function () {
              a.startPlatform();
            }),
            new z(3),
            new x(function () {
              a.endPlatform();
            }),
            new z(2),
          ])
        )
      );
      this.owner.add(b);
    },
    startPlatform: function () {
      this.inColumn = !1;
      this.inPlatform = !0;
      this.exitPlatform = this.enterPlatform = !1;
      this.platformLightsOn = !0;
      for (var a = 0, b = this.masks; a < b.length; ) {
        var c = b[a];
        ++a;
        c.$zF[1].x.set__(this.screenWidth + 500);
      }
      r.instance(this.column.$zF[1], N).texture =
        d.pack.getTexture("game/red/fg_column");
    },
    endPlatform: function () {
      this.enterPlatform = this.inPlatform = !1;
    },
    duplicateCar: function (a) {
      var b = new h().add(
        new jd(
          a,
          this.screenWidth / 2 - 650 - 800,
          this.screenHeight - 768 + 600
        )
      );
      this.game.addChild(b);
      b.$zF[1].set_pixelSnapping(!1);
      var c = new h();
      g.createFillSprite(
        this.screen,
        c,
        16777215,
        !1,
        this.screenWidth + d.offsetX / 2,
        0,
        3e3,
        this.screenHeight,
        1
      );
      this.masks.push(c);
      b.$zF[1].set_mask(c.$zF[1]);
      a = new h().add(
        new id(
          a,
          b,
          this.screenWidth / 2 - 650 - 800,
          this.screenHeight - 768 + 600
        )
      );
      this.game.addChild(a);
      a.$zF[1].set_pixelSnapping(!1);
      return a;
    },
    leaveCar: function (a, b) {
      this.game.addChild(this.spidey, !0);
      if (null != this.spidey.$zF[28].car) {
        var c = this.spidey.$zF[1].x;
        c.set__(c.$bG + this.spidey.$zF[28].car.$zF[1].x.$bG);
        c = this.spidey.$zF[1].y;
        c.set__(c.$bG + this.spidey.$zF[28].car.$zF[1].y.$bG);
      }
      this.spidey.$zF[28].car = null;
      if (b)
        if (
          (a
            ? this.spidey.$zF[1].x.animateBy(-50, 1, C.sineOut)
            : this.spidey.$zF[1].x.animateBy(50, 1, C.sineOut),
          2 > this.spidey.$zF[28].track)
        ) {
          for (var c = 0, d = this.midTrack; c < d.length; ) {
            var e = d[c];
            ++c;
            this.game.addChild(e.$zF[29].linked);
            this.game.addChild(e.$zF[29].linked2);
            this.game.addChild(e);
          }
          this.game.addChild(this.fade1);
          c = 0;
          for (d = this.frontTrack; c < d.length; )
            (e = d[c]),
              ++c,
              this.game.addChild(e.$zF[29].linked),
              this.game.addChild(e.$zF[29].linked2),
              this.game.addChild(e);
        } else if (3 > this.spidey.$zF[28].track)
          for (c = 0, d = this.frontTrack; c < d.length; )
            (e = d[c]),
              ++c,
              this.game.addChild(e.$zF[29].linked),
              this.game.addChild(e.$zF[29].linked2),
              this.game.addChild(e);
      this.game.addChild(this.column);
    },
    landOnCar: function (a) {
      var b = this;
      if (99 == a) {
        var c = new G();
        c.run(
          new H([
            new z(0.5),
            new x(function () {
              b.checkGameOver();
            }),
            new z(2),
            new x(function () {
              0 < b.spidey.$zF[28].health && b.respawn();
            }),
          ])
        );
        this.spidey.add(c);
      } else {
        c = this.rearTrack;
        switch (a) {
          case 2:
            c = this.midTrack;
            break;
          case 3:
            c = this.frontTrack;
        }
        a = !1;
        var d = this.spidey.$zF[1].x.$bG;
        this.spidey.$zF[28].walkLeft
          ? (d -= 40)
          : this.spidey.$zF[28].walkRight && (d += 40);
        for (var e = 0; e < c.length; ) {
          var g = c[e];
          ++e;
          if (
            d - g.$zF[1].x.$bG > this.spidey.$zF[28].carLeft - 50 &&
            d - g.$zF[1].x.$bG < this.spidey.$zF[28].carRight + 50
          ) {
            a = !0;
            g.addChild(this.spidey, !0);
            this.spidey.$zF[28].car = g;
            c = this.spidey.$zF[1].x;
            c.set__(c.$bG - this.spidey.$zF[28].car.$zF[1].x.$bG);
            this.spidey.$zF[1].y.set__(20);
            break;
          }
        }
        if (!a) {
          this.spidey.$zF[28].miss();
          if (2 > this.spidey.$zF[28].track) {
            c = 0;
            for (a = this.midTrack; c < a.length; )
              (d = a[c]),
                ++c,
                this.game.addChild(d.$zF[29].linked),
                this.game.addChild(d.$zF[29].linked2),
                this.game.addChild(d);
            this.game.addChild(this.fade1);
            c = 0;
            for (a = this.frontTrack; c < a.length; )
              (d = a[c]),
                ++c,
                this.game.addChild(d.$zF[29].linked),
                this.game.addChild(d.$zF[29].linked2),
                this.game.addChild(d);
          } else if (3 > this.spidey.$zF[28].track)
            for (c = 0, a = this.frontTrack; c < a.length; )
              (d = a[c]),
                ++c,
                this.game.addChild(d.$zF[29].linked),
                this.game.addChild(d.$zF[29].linked2),
                this.game.addChild(d);
          c = new G();
          c.run(
            new H([
              new z(0.5),
              new x(function () {
                b.checkGameOver();
              }),
              new z(2),
              new x(function () {
                0 < b.spidey.$zF[28].health && b.respawn();
              }),
            ])
          );
          this.spidey.add(c);
        }
      }
      this.game.addChild(this.column);
    },
    respawn: function () {
      d.score = this.score;
      d.targets = this.targets;
      this.showGameOver();
    },
    checkGameOver: function () {
      var a = this;
      this.hud.$zF[34].setHealth(this.spidey.$zF[28].health);
      if (1 > this.spidey.$zF[28].health) {
        var b = new G();
        b.run(
          new H([
            new z(3),
            new x(function () {
              d.score = a.score;
              d.targets = a.targets;
              a.showGameOver();
            }),
          ])
        );
        this.owner.add(b);
      }
    },
    spawnPickupGroup: function (a, b) {
      switch (b) {
        case 1:
          this.spawnPickup("pickup", a, 1600);
          g.coinFlip() && this.spawnPickup("pickup", a, 1700);
          g.coinFlip() && this.spawnPickup("pickup", a, 1800);
          break;
        case 2:
          this.spawnPickup("pickup", a, 300);
          g.coinFlip() && this.spawnPickup("pickup", a, 400);
          g.coinFlip() && this.spawnPickup("pickup", a, 500);
          this.spawnPickup("pickup", a, 1500);
          g.coinFlip() && this.spawnPickup("pickup", a, 1600);
          g.coinFlip() && this.spawnPickup("pickup", a, 1700);
          break;
        case 3:
          this.spawnPickup("pickup", a, 800);
          this.spawnPickup("pickup", a, 1e3);
          this.spawnPickup("pickup", a, 1200);
          g.coinFlip() &&
            (this.spawnPickup("pickup", a, 600),
            this.spawnPickup("pickup", a, 1400));
          break;
        case 4:
          g.coinFlip()
            ? (this.spawnPickup("pickup", a, 400),
              this.spawnPickup("pickup", a, 500),
              this.spawnPickup("pickup", a, 600),
              this.spawnPickup("target", a, 1500))
            : (this.spawnPickup("pickup", a, 1400),
              this.spawnPickup("pickup", a, 1500),
              this.spawnPickup("pickup", a, 1600),
              this.spawnPickup("target", a, 500));
          break;
        case 5:
          this.spawnPickup("bomb", a, g.randomNumber(500, 1500));
          break;
        case 6:
          var c = g.randomNumber(200, 1200);
          this.spawnPickup("pickup", a, c);
          this.spawnPickup("pickup", a, c + 100);
          this.spawnPickup("pickup", a, c + 200);
          this.spawnPickup("pickup", a, c + 300);
          this.spawnPickup("pickup", a, c + 400);
          break;
        case 7:
          this.spawnPickup("pickup", a, 500);
          this.spawnPickup("pickup", a, 600);
          this.spawnPickup("bomb", a, 800);
          this.spawnPickup("pickup", a, 1e3);
          this.spawnPickup("pickup", a, 1100);
          break;
        case 8:
          g.coinFlip()
            ? (this.spawnPickup("bomb", a, 500),
              this.spawnPickup("target", a, 1500))
            : (this.spawnPickup("bomb", a, 1500),
              this.spawnPickup("target", a, 500));
          break;
        case 9:
          g.coinFlip()
            ? (this.spawnPickup("bomb", a, 400),
              this.spawnPickup("time", a, 600),
              this.spawnPickup("bomb", a, 800),
              g.coinFlip() && this.spawnPickup("target", a, 1500))
            : (this.spawnPickup("bomb", a, 1400),
              this.spawnPickup("time", a, 1600),
              this.spawnPickup("bomb", a, 1800),
              g.coinFlip() && this.spawnPickup("target", a, 500));
          break;
        case 10:
          g.coinFlip()
            ? (this.spawnPickup("bomb", a, 100),
              this.spawnPickup("pickup", a, 250),
              g.coinFlip() &&
                (this.spawnPickup("target", a, 1500),
                this.spawnPickup("bomb", a, 1300)))
            : (this.spawnPickup("pickup", a, 100),
              this.spawnMovingPickup("bomb", a, 250, 200, 1),
              g.coinFlip() &&
                (this.spawnPickup("pickup", a, 1500),
                this.spawnPickup("pickup", a, 1300)));
          break;
        case 11:
          g.coinFlip()
            ? (this.spawnPickup("bomb", a, 400),
              this.spawnPickup("time", a, 600),
              this.spawnPickup("bomb", a, 800),
              this.spawnPickup("pickup", a, 1e3),
              this.spawnPickup("bomb", a, 1200),
              this.spawnPickup("target", a, 1400))
            : (this.spawnPickup("bomb", a, 400),
              this.spawnPickup("target", a, 600),
              this.spawnPickup("bomb", a, 800),
              this.spawnPickup("pickup", a, 1e3),
              this.spawnPickup("bomb", a, 1200),
              this.spawnPickup("time", a, 1400));
          this.spawnPickup("bomb", a, 1600);
          break;
        case 12:
          c = g.randomNumber(200, 1e3);
          this.spawnPickup("pickup", a, c);
          this.spawnPickup("pickup", a, c + 100);
          this.spawnPickup("pickup", a, c + 200);
          this.healthPickups < this.maxHealthPickups
            ? (this.spawnPickup("health", a, c + 300), this.healthPickups++)
            : this.spawnPickup("pickup", a, c + 300);
          this.spawnPickup("pickup", a, c + 400);
          this.spawnPickup("pickup", a, c + 500);
          this.spawnPickup("pickup", a, c + 600);
          break;
        case 13:
          this.spawnPickup("pickup", a, 1600);
          g.coinFlip() && this.spawnPickup("pickup", a, 1700);
          g.coinFlip() && this.spawnPickup("pickup", a, 1800);
          break;
        case 14:
          this.spawnPickup("pickup", a, 300);
          g.coinFlip() && this.spawnPickup("pickup", a, 400);
          g.coinFlip() && this.spawnPickup("pickup", a, 500);
          this.spawnPickup("pickup", a, 1500);
          g.coinFlip() && this.spawnPickup("pickup", a, 1600);
          g.coinFlip() && this.spawnPickup("pickup", a, 1700);
          break;
        case 15:
          this.spawnPickup("pickup", a, 800);
          this.spawnPickup("time", a, 1e3);
          this.spawnPickup("pickup", a, 1200);
          g.coinFlip() &&
            (this.spawnPickup("pickup", a, 600),
            this.spawnPickup("pickup", a, 1400));
          break;
        case 16:
          g.coinFlip()
            ? (this.spawnPickup("pickup", a, 400),
              this.spawnPickup("pickup", a, 500),
              this.spawnPickup("pickup", a, 600),
              this.spawnPickup("target", a, 1500))
            : (this.spawnPickup("pickup", a, 1400),
              this.spawnPickup("pickup", a, 1500),
              this.spawnPickup("pickup", a, 1600),
              this.spawnPickup("target", a, 500));
          break;
        case 17:
          this.spawnMovingPickup("bomb", a, g.randomNumber(500, 1e3), 500, 2);
          break;
        case 18:
          c = g.randomNumber(200, 1200);
          this.spawnPickup("pickup", a, c);
          this.spawnPickup("pickup", a, c + 100);
          this.spawnPickup("pickup", a, c + 200);
          this.spawnPickup("pickup", a, c + 300);
          this.spawnPickup("pickup", a, c + 400);
          break;
        case 19:
          this.spawnPickup("pickup", a, 500);
          this.spawnPickup("pickup", a, 600);
          this.healthPickups < this.maxHealthPickups
            ? (this.spawnPickup("health", a, 800), this.healthPickups++)
            : this.spawnPickup("bomb", a, 800);
          this.spawnPickup("pickup", a, 1e3);
          this.spawnPickup("pickup", a, 1100);
          break;
        case 20:
          g.coinFlip()
            ? (this.spawnMovingPickup("bomb", a, 500, 300, 1.5),
              this.spawnPickup("target", a, 1500))
            : (this.spawnMovingPickup("bomb", a, 1300, 300, 1.5),
              this.spawnPickup("target", a, 500));
          break;
        case 21:
          g.coinFlip()
            ? (this.spawnPickup("bomb", a, 400),
              this.spawnPickup("pickup", a, 550),
              this.spawnPickup("pickup", a, 650),
              this.spawnPickup("bomb", a, 800),
              g.coinFlip() && this.spawnPickup("target", a, 1500))
            : (this.spawnPickup("bomb", a, 1400),
              this.spawnPickup("target", a, 1600),
              this.spawnPickup("bomb", a, 1800),
              g.coinFlip() &&
                (this.spawnPickup("bomb", a, 300),
                this.spawnPickup("pickup", a, 500),
                this.spawnPickup("pickup", a, 600)));
          break;
        case 22:
          g.coinFlip()
            ? (this.spawnMovingPickup("bomb", a, 200, 300, 1.5),
              this.spawnPickup("pickup", a, 100),
              g.coinFlip() &&
                (this.spawnPickup("target", a, 1500),
                this.spawnPickup("bomb", a, 1300)))
            : (this.spawnPickup("pickup", a, 100),
              this.spawnPickup("bomb", a, 250),
              g.coinFlip() &&
                (this.spawnPickup("pickup", a, 1500),
                this.spawnPickup("pickup", a, 1300)));
          break;
        case 23:
          g.coinFlip()
            ? (this.spawnPickup("bomb", a, 400),
              this.spawnPickup("pickup", a, 600),
              this.spawnPickup("bomb", a, 800),
              this.spawnPickup("pickup", a, 1e3),
              this.spawnPickup("bomb", a, 1200),
              this.spawnPickup("target", a, 1400))
            : (this.spawnPickup("bomb", a, 400),
              this.spawnPickup("target", a, 600),
              this.spawnPickup("bomb", a, 800),
              this.spawnPickup("pickup", a, 1e3),
              this.spawnPickup("bomb", a, 1200),
              this.spawnPickup("pickup", a, 1400));
          this.spawnPickup("bomb", a, 1600);
          break;
        case 24:
          (c = g.randomNumber(200, 1e3)),
            this.spawnPickup("pickup", a, c),
            this.spawnPickup("pickup", a, c + 100),
            this.spawnPickup("pickup", a, c + 200),
            this.healthPickups < this.maxHealthPickups
              ? (this.spawnPickup("health", a, c + 300), this.healthPickups++)
              : this.spawnPickup("pickup", a, c + 300),
            this.spawnPickup("pickup", a, c + 400),
            this.spawnPickup("pickup", a, c + 500),
            this.spawnPickup("pickup", a, c + 600),
            (this.group = 15);
      }
      this.group++;
    },
    spawnPickup: function (a, b, c) {
      null == c && (c = 0);
      0 == c && (c = g.randomNumber(100, 2e3));
      a = new h().add(new Lb(b, a, c, -50));
      b.addChild(a);
      this.pickups.push(a);
    },
    spawnMovingPickup: function (a, b, c, d, e) {
      a = new h().add(new Lb(b, a, c, -50));
      b.addChild(a);
      this.pickups.push(a);
      a.$zF[30].move(d, e);
    },

    onUpdate: function (a) {
      this.inPlay &&
        ((this.timer -= a),
        0 >= this.timer &&
          this.controlsActive &&
          !this.gameEnded &&
          (this.timer++,
          d.time++,
          0 < this.seconds &&
            (this.seconds--,
            this.hud.$zF[34].setTime(this.seconds),
            0 == this.seconds && this.timeOut())),
        this.gameEnded || this.scroll(a),
        this.collidePickups(),
        this.screenPushback &&
          0 < this.spidey.$zF[28].health &&
          (null != this.spidey.$zF[28].car
            ? this.spidey.$zF[1].x.$bG + this.spidey.$zF[28].car.$zF[1].x.$bG >
              this.rightLimit
              ? this.spidey.$zF[1].x.set__(
                  this.rightLimit - this.spidey.$zF[28].car.$zF[1].x.$bG
                )
              : this.spidey.$zF[1].x.$bG +
                  this.spidey.$zF[28].car.$zF[1].x.$bG <
                  this.leftLimit &&
                this.spidey.$zF[1].x.set__(
                  this.leftLimit - this.spidey.$zF[28].car.$zF[1].x.$bG
                )
            : this.spidey.$zF[1].x.$bG > this.rightLimit
            ? this.spidey.$zF[1].x.set__(this.rightLimit)
            : this.spidey.$zF[1].x.$bG < this.leftLimit &&
              this.spidey.$zF[1].x.set__(this.leftLimit)));
    },

    timeOut: function () {
      var a = this;
      this.controlsActive = !1;
      this.spidey.$zF[28].endGame();
      var b = new h();
      d.vo
        ? g.createImageSprite(
            this.screen,
            b,
            "game/time_up",
            !0,
            this.screenWidth / 2,
            this.screenHeight / 2
          )
        : g.createXMLSprite(
            this.screen,
            b,
            d.titleFont,
            "Center",
            this.screenWidth / 2,
            this.screenHeight / 2,
            d.translations.node.resolve("timeUp")
          );
      P.spawn(b, 0, 0.5, 0.5);
      b = new G();
      b.run(
        new H([
          new z(1.5),
          new x(function () {
            d.score = a.score;
            d.targets = a.targets;
            a.showGameOver();
          }),
        ])
      );
      this.owner.add(b);
    },
    collidePickups: function () {
      if (null != this.spidey.$zF[28].car)
        for (var a = 0, b = this.pickups; a < b.length; ) {
          var c = b[a];
          ++a;
          c.$zF[30].active &&
            c.$zF[30].car == this.spidey.$zF[28].car &&
            80 >
              g.vectorDistance(
                this.spidey.$zF[1].x.$bG,
                c.$zF[1].x.$bG,
                0,
                0
              ) &&
            c.$zF[30].hit() &&
            ("bomb" == c.$zF[30].type
              ? (this.spidey.$zF[28].hit(c),
                this.hud.$zF[34].setHealth(this.spidey.$zF[28].health),
                this.checkGameOver())
              : "time" == c.$zF[30].type
              ? ((this.seconds += 30),
                (this.timer = 1),
                this.hud.$zF[34].setTime(this.seconds))
              : "health" == c.$zF[30].type
              ? (this.spidey.$zF[28].healthPickup(),
                this.hud.$zF[34].setHealth(this.spidey.$zF[28].health))
              : "target" == c.$zF[30].type
              ? (this.targets++, this.hud.$zF[34].setTargets(this.targets))
              : (this.score++, this.hud.$zF[34].setScore(this.score)));
        }
    },
    scroll: function (a) {
      var b = this.background.$zF[1].x;
      b.set__(b.$bG - this.scrollSpeed * a);
      b = this.platformBackground.$zF[1].x;
      b.set__(b.$bG - this.scrollSpeed * a);
      b = this.platformLight.$zF[1].x;
      b.set__(b.$bG - this.scrollSpeed * a);
      this.inColumn &&
        ((b = this.column.$zF[1].x),
        b.set__(b.$bG - this.scrollSpeed * a * 1.4));
      if (this.enterPlatform)
        for (var b = 0, c = this.masks; b < c.length; ) {
          var f = c[b];
          ++b;
          var e = f.$zF[1].x;
          e.set__(e.$bG - this.scrollSpeed * a);
          f.$zF[1].x.$bG < -d.offsetX / 2 - 100 &&
            f.$zF[1].x.set__(-d.offsetX / 2 - 100);
        }
      b = 0;
      for (c = this.bgs; b < c.length; )
        (f = c[b]),
          ++b,
          this.background.$zF[1].x.$bG + f.$zF[1].x.$bG <
            -(this.bgWidth + 100) &&
            ((f = f.$zF[1].x), f.set__(f.$bG + this.bgWidth * this.bgs.length));
      b = 0;
      for (c = this.platformBgs; b < c.length; )
        if (
          ((f = c[b]),
          ++b,
          this.platformBackground.$zF[1].x.$bG + f.$zF[1].x.$bG <
            -(this.platformBGWidth + 100))
        )
          if (
            ((e = f.$zF[1].x),
            e.set__(e.$bG + this.platformBGWidth * this.platformBgs.length),
            this.inPlatform)
          ) {
            if (
              (f.$zF[1].set_visible(!0),
              !this.enterPlatform &&
                this.masks[0].$zF[1].x.$bG > this.screenWidth / 2)
            ) {
              for (var e = 0, g = this.masks; e < g.length; ) {
                var h = g[e];
                ++e;
                h.$zF[1].x.set__(
                  this.platformBackground.$zF[1].x.$bG + f.$zF[1].x.$bG
                );
              }
              this.enterPlatform = !0;
              this.redParallax.$zF[1].x.set__(f.$zF[1].x.$bG);
              this.redParallax.$zF[1].set_visible(!0);
              this.playSound("multiple");
            }
          } else {
            if (this.platformLightsOn) {
              e = 0;
              for (g = this.masks; e < g.length; )
                (h = g[e]),
                  ++e,
                  h.$zF[1].x.set__(
                    this.platformBackground.$zF[1].x.$bG + f.$zF[1].x.$bG - 3e3
                  );
              this.platformLightsOn = !1;
              this.exitPlatform = !0;
              this.enterPlatform = !1;
            }
            f.$zF[1].set_visible(!1);
          }
      b = 0;
      for (c = this.platformLights; b < c.length; )
        (f = c[b]),
          ++b,
          this.platformLight.$zF[1].x.$bG + f.$zF[1].x.$bG <
            -(this.platformBGWidth + 100) &&
            ((e = f.$zF[1].x),
            e.set__(e.$bG + this.platformBGWidth * this.platformLights.length),
            this.inPlatform
              ? f.$zF[1].set_visible(!0)
              : f.$zF[1].set_visible(!1));
      if (this.exitPlatform) {
        b = 0;
        for (c = this.masks; b < c.length; )
          (f = c[b]),
            ++b,
            (f = f.$zF[1].x),
            f.set__(f.$bG - this.scrollSpeed * a);
        this.platformLightsOn = !1;
        this.inColumn ||
          this.column.$zF[1].x.set__(this.masks[0].$zF[1].x.$bG + 2950);
      } else
        this.inPlatform &&
          !this.inColumn &&
          this.column.$zF[1].x.set__(this.masks[0].$zF[1].x.$bG - 50);
      b = 0;
      for (c = this.rearTrack; b < c.length; )
        if (
          ((f = c[b]),
          ++b,
          (e = f.$zF[29].linked),
          (g = e.$zF[1].x),
          g.set__(g.$bG + this.rearSpeed * a),
          -2500 > e.$zF[1].x.$bG)
        ) {
          e = e.$zF[1].x;
          e.set__(e.$bG + 5e3);
          e = 0;
          for (g = this.pickups; e < g.length; )
            (h = g[e]),
              ++e,
              h.$zF[30].car == f && (B.remove(this.pickups, h), h.dispose());
          this.spawnPickupGroup(f, this.group);
        }
      b = 0;
      for (c = this.midTrack; b < c.length; )
        if (
          ((f = c[b]),
          ++b,
          (e = f.$zF[29].linked),
          (g = e.$zF[1].x),
          g.set__(g.$bG + this.midSpeed * a),
          e.$zF[1].x.$bG > this.screenWidth + 300)
        ) {
          e = e.$zF[1].x;
          e.set__(e.$bG - 5e3);
          e = 0;
          for (g = this.pickups; e < g.length; )
            (h = g[e]),
              ++e,
              h.$zF[30].car == f && (B.remove(this.pickups, h), h.dispose());
          this.spawnPickupGroup(f, this.group);
        }
      b = 0;
      for (c = this.frontTrack; b < c.length; )
        if (
          ((f = c[b]),
          ++b,
          (e = f.$zF[29].linked),
          (g = e.$zF[1].x),
          g.set__(g.$bG + this.frontSpeed * a),
          -2500 > e.$zF[1].x.$bG)
        ) {
          e = e.$zF[1].x;
          e.set__(e.$bG + 5e3);
          e = 0;
          for (g = this.pickups; e < g.length; )
            (h = g[e]),
              ++e,
              h.$zF[30].car == f && (B.remove(this.pickups, h), h.dispose());
          this.spawnPickupGroup(f, this.group);
        }
    },
    handleTouchDown: function (a) {
      var b = a.viewX / d.scale - d.offsetX / 2;
      a = a.viewY / d.scale - d.offsetY / 2;
      g.vectorDistance(
        b,
        this.leftBtn.$zF[1].x.$bG,
        a,
        this.leftBtn.$zF[1].y.$bG
      ) < this.touchDist
        ? this.spidey.$zF[28].walk(M.LEFT, !0)
        : g.vectorDistance(
            b,
            this.rightBtn.$zF[1].x.$bG,
            a,
            this.rightBtn.$zF[1].y.$bG
          ) < this.touchDist
        ? this.spidey.$zF[28].walk(M.RIGHT, !0)
        : g.vectorDistance(
            b,
            this.upBtn.$zF[1].x.$bG,
            a,
            this.upBtn.$zF[1].y.$bG
          ) < this.touchDist
        ? this.spidey.$zF[28].jumpUp()
        : g.vectorDistance(
            b,
            this.downBtn.$zF[1].x.$bG,
            a,
            this.downBtn.$zF[1].y.$bG
          ) < this.touchDist && this.spidey.$zF[28].jumpDown();
    },
    handleTouchMove: function (a) {
      var b = a.viewX / d.scale - d.offsetX / 2;
      a = a.viewY / d.scale - d.offsetY / 2;
      g.vectorDistance(
        b,
        this.leftBtn.$zF[1].x.$bG,
        a,
        this.leftBtn.$zF[1].y.$bG
      ) < this.touchDist
        ? this.spidey.$zF[28].walk(M.LEFT, !0)
        : g.vectorDistance(
            b,
            this.rightBtn.$zF[1].x.$bG,
            a,
            this.rightBtn.$zF[1].y.$bG
          ) < this.touchDist
        ? this.spidey.$zF[28].walk(M.RIGHT, !0)
        : (this.spidey.$zF[28].walk(M.LEFT, !1),
          this.spidey.$zF[28].walk(M.RIGHT, !1));
    },
    handleTouchUp: function (a) {
      a.viewX / d.scale - d.offsetX / 2 < this.screenWidth / 2 &&
        (this.spidey.$zF[28].walk(M.LEFT, !1),
        this.spidey.$zF[28].walk(M.RIGHT, !1));
    },
    keyDownHandler: function (a) {
      this.inPlay &&
        this.controlsActive &&
        (a.key == e.A || a.key == e.Left
          ? this.spidey.$zF[28].walk(M.LEFT, !0)
          : a.key == e.D || a.key == e.Right
          ? this.spidey.$zF[28].walk(M.RIGHT, !0)
          : a.key == e.W || a.key == e.Up
          ? this.spidey.$zF[28].jumpUp()
          : (a.key != e.S && a.key != e.Down) ||
            this.spidey.$zF[28].jumpDown());
      if (d.testMode)
        if (a.key == e.P) {
          for (
            a = this.cars[g.randomNumber(0, this.cars.length - 1)];
            a == this.spidey.$zF[28].car;

          )
            a = this.cars[g.randomNumber(0, this.cars.length - 1)];
          this.spawnPickup("pickup", a);
        } else if (a.key == e.T) {
          for (
            a = this.cars[g.randomNumber(0, this.cars.length - 1)];
            a == this.spidey.$zF[28].car;

          )
            a = this.cars[g.randomNumber(0, this.cars.length - 1)];
          this.spawnPickup("health", a);
        } else if (a.key == e.B) {
          for (
            a = this.cars[g.randomNumber(0, this.cars.length - 1)];
            a == this.spidey.$zF[28].car;

          )
            a = this.cars[g.randomNumber(0, this.cars.length - 1)];
          this.spawnPickup("bomb", a);
        } else if (a.key == e.Y) {
          for (
            a = this.cars[g.randomNumber(0, this.cars.length - 1)];
            a == this.spidey.$zF[28].car;

          )
            a = this.cars[g.randomNumber(0, this.cars.length - 1)];
          this.spawnMovingPickup("bomb", a, 100, 200, 1);
        } else a.key == e.L && (this.screenPushback = !this.screenPushback);
    },
    keyUpHandler: function (a) {
      this.inPlay &&
        this.controlsActive &&
        (a.key == e.A || a.key == e.Left
          ? this.spidey.$zF[28].walk(M.LEFT, !1)
          : (a.key != e.D && a.key != e.Right) ||
            this.spidey.$zF[28].walk(M.RIGHT, !1));
    },
    showGameOver: function () {
      if (!this.showingGo) {
        this.gameEnded = !0;
        var a = new h().add(
          new Jb(
            this.screenWidth / 2,
            this.screenHeight / 2,
            D(this, this.closeGameOver)
          )
        );
        this.screen.addChild(a);
        this.showingGo = !0;
      }
    },
    closeGameOver: function () {
      this.gameOverCallback();
    },
    playSound: function (a) {
      this.sfx = d.pack.getSound("audio/" + a).play();
    },
    __class__: ld,
  });
  var md = function (a, b, c) {
    this.timer = 1.5;
    this.seconds = 60;
    this.lastSpawn = 0;
    this.spawnGap = 250;
    this.groups = 0;
    this.health = 4;
    this.jumpTime = 0.53;
    this.wallHeight = 1514;
    s.call(this);
    this.screenWidth = a;
    this.screenHeight = b;
    this.gameOverCallback = c;
  };
  l["project.Level2"] = md;
  md.__name__ = ["project", "Level2"];
  md.__super__ = s;
  md.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 19;
    },
    onAdded: function () {
      this.connect1(m.$vG.$GG.down, D(this, this.handlePointerDown));
      this.connect1(m.$vG.$GG.up, D(this, this.handlePointerUp));
      this.connect1(m.$vG.getKeyboard().down, D(this, this.keyDownHandler));
      this.connect1(m.$vG.getKeyboard().up, D(this, this.keyUpHandler));
      this.startGame();
      this.musicLoop = d.pack
        .getSound("audio/Spiderman_ITSV_JumpingGameplay_v1")
        .loop();
      this.musicLoop.volume.set__(0);
      this.musicLoop.volume.animateTo(0.8, 0.5);
      this.ambience = d.pack.getSound("audio/nyc_ambience").loop();
      this.ambience.volume.set__(0);
      this.ambience.volume.animateTo(0.8, 0.5);
    },
    stopGame: function () {
      this.inPlay = !1;
      this.musicLoop.dispose();
      this.ambience.dispose();
    },
    startGame: function () {
      this.targetScore = this.score = d.time = 0;
      this.walls = [];
      this.pickups = [];
      this.targets = [];
      this.screen = new h().add(new Y(16777215, d.staticWidth, d.staticHeight));
      this.owner.addChild(this.screen);
      var a = new h();
      g.createFillSprite(
        this.screen,
        a,
        5003925,
        !0,
        this.screenWidth / 2,
        this.screenHeight / 2,
        3e3,
        3e3,
        1
      );
      this.city = new h();
      g.createImageSprite(
        this.screen,
        this.city,
        "game2/background",
        !0,
        this.screenWidth / 2,
        630
      );
      this.city.$zF[1].set_pixelSnapping(!1);
      this.game = new h();
      g.createImageSprite(this.screen, this.game, "blank", !1, 0, 0);
      a = new h();
      g.createImageSprite(
        this.game,
        a,
        "game2/side_wall",
        !1,
        this.screenWidth / 2 + 400,
        0
      );
      var b = new h();
      g.createImageSprite(a, b, "game2/side_wall", !1, -800, 0);
      b.$zF[1].scaleX.set__(-1);
      this.walls.push(a);
      a = new h();
      g.createImageSprite(
        this.game,
        a,
        "game2/side_wall",
        !1,
        this.screenWidth / 2 + 400,
        this.wallHeight
      );
      b = new h();
      g.createImageSprite(a, b, "game2/side_wall", !1, -800, 0);
      b.$zF[1].scaleX.set__(-1);
      this.walls.push(a);
      a = new h();
      g.createImageSprite(
        this.game,
        a,
        "game2/side_wall",
        !1,
        this.screenWidth / 2 + 400,
        2 * this.wallHeight
      );
      b = new h();
      g.createImageSprite(a, b, "game2/side_wall", !1, -800, 0);
      b.$zF[1].scaleX.set__(-1);
      this.walls.push(a);
      this.spidey = new h().add(
        new sd(
          this.screenWidth / 2 - 410,
          150,
          (this.screenWidth / 2 - 410) | 0,
          (this.screenWidth / 2 + 410) | 0,
          D(this, this.spideyCallback)
        )
      );
      this.game.addChild(this.spidey);
      this.powerbar = new h().add(new td(this.screenWidth / 2 - 400, 250));
      this.screen.addChild(this.powerbar);
      this.powerbar.$zF[22].spawn(!0, this.screenWidth / 2 - 380, 240);
      this.hud = new h().add(new pd(0, 0, this.screenWidth, this.screenHeight));
      this.screen.addChild(this.hud);
      this.help = new h().add(
        new Kb(
          this.screenWidth / 2,
          this.screenHeight / 2,
          D(this, this.helpCallback)
        )
      );
      this.screen.addChild(this.help);
    },
    helpCallback: function () {
      this.help.dispose();
      this.inPlay = !0;
    },
    spideyCallback: function (a) {
      switch (a) {
        case "JUMP":
          this.game.$zF[1].y.animateBy(
            -this.fallDist,
            1.5 * this.jumpTime,
            C.sineInOut
          );
          a = this.city.$zF[1].y.$bG - 0.1 * this.fallDist;
          a < this.screenHeight - 630 && (a = this.screenHeight - 630);
          this.city.$zF[1].y.animateTo(a, 1.5 * this.jumpTime, C.sineInOut);
          a = 0;
          for (var b = this.pickups; a < b.length; ) {
            var c = b[a];
            ++a;
            -200 > c.$zF[1].y.$bG + this.game.$zF[1].y.$bG &&
              (B.remove(this.pickups, c), c.dispose());
          }
          break;
        case "LAND":
          a = 0;
          for (b = this.targets; a < b.length; )
            (c = b[a]),
              ++a,
              c.$zF[24].active &&
                g.vectorDistance(
                  this.spidey.$zF[1].x.$bG,
                  c.$zF[1].x.$bG,
                  this.spidey.$zF[1].y.$bG,
                  c.$zF[1].y.$bG
                ) < c.$zF[24].size &&
                c.$zF[24].hit() &&
                ("target" == c.$zF[24].type
                  ? (this.targetScore++,
                    this.hud.$zF[26].setTargets(this.targetScore))
                  : "oil" == c.$zF[24].type && this.spidey.$zF[21].hitOil());
          break;
        case "READY":
          this.spidey.$zF[21].isLeft
            ? this.powerbar.$zF[22].spawn(!0, this.screenWidth / 2 - 380, 240)
            : this.powerbar.$zF[22].spawn(!1, this.screenWidth / 2 + 380, 240);
          break;
        case "SCAFFOLD":
          a = 0;
          for (b = this.targets; a < b.length; )
            (c = b[a]),
              ++a,
              c.$zF[24].active &&
                "scaffold" == c.$zF[24].type &&
                500 >
                  g.vectorDistance(
                    this.spidey.$zF[1].x.$bG,
                    c.$zF[1].x.$bG,
                    0,
                    0
                  ) &&
                110 >
                  g.vectorDistance(
                    0,
                    0,
                    this.spidey.$zF[1].y.$bG,
                    c.$zF[1].y.$bG - 35
                  ) &&
                c.$zF[24].hit() &&
                this.spidey.$zF[21].hitScaffold();
          break;
        case "FALLEN":
          (d.score = this.score),
            (d.targets = this.targetScore),
            this.showGameOver();
      }
    },
    onUpdate: function (a) {
      this.inPlay &&
        ((this.timer -= a),
        0 >= this.timer &&
          (this.timer++,
          d.time++,
          0 < this.seconds &&
            (this.seconds--,
            this.hud.$zF[26].setTime(this.seconds),
            0 == this.seconds && this.timeOut())),
        this.scroll(a),
        this.spawnObjects(),
        this.collidePickups());
    },
    scroll: function (a) {
      a = 0;
      for (var b = this.walls; a < b.length; ) {
        var c = b[a];
        ++a;
        c.$zF[1].y.$bG + this.game.$zF[1].y.$bG < -(this.wallHeight + 100) &&
          ((c = c.$zF[1].y),
          c.set__(c.$bG + this.wallHeight * this.walls.length));
      }
    },
    spawnObjects: function () {
      if (this.game.$zF[1].y.$bG < this.lastSpawn - this.spawnGap) {
        this.lastSpawn = this.game.$zF[1].y.$bG;
        var a = g.randomNumber(1, 3);
        3 > this.groups
          ? (a = g.randomNumber(1, 3))
          : 3 == this.groups
          ? ((a = 0),
            new h(),
            g.coinFlip()
              ? this.spawnTarget("targetLeft", g.randomNumber(0, 50))
              : this.spawnTarget("targetRight", g.randomNumber(0, 50)))
          : 6 > this.groups
          ? (a = g.randomNumber(1, 3))
          : 6 == this.groups
          ? ((a = 0),
            new h(),
            g.coinFlip()
              ? this.spawnTarget("oilLeft", g.randomNumber(0, 50))
              : this.spawnTarget("oilRight", g.randomNumber(0, 50)))
          : 8 == this.groups
          ? ((a = 0),
            this.spawnPickup("pickup", 0, 0),
            this.spawnPickup("time", 0, 50),
            this.spawnPickup("pickup", 0, 105))
          : 9 > this.groups
          ? (a = g.randomNumber(1, 3))
          : 9 == this.groups
          ? ((a = 0),
            g.coinFlip()
              ? this.spawnPickup("bombLeft", 0, 0)
              : this.spawnPickup("bombRight", 0, 0))
          : 14 == this.groups
          ? (a = g.randomNumber(1, 3))
          : 15 == this.groups
          ? ((a = 0),
            this.spawnPickup("bombLeft", 0, 0),
            this.spawnPickup("bombRight", 0, 100))
          : 16 == this.groups
          ? (a = g.randomNumber(1, 3))
          : 20 == this.groups
          ? ((a = 0),
            this.spawnPickup("pickup", 0, 0),
            this.spawnPickup("time", 0, 50),
            this.spawnPickup("pickup", 0, 105))
          : 30 == this.groups
          ? ((a = 0),
            this.spawnPickup("pickup", 0, 0),
            this.spawnPickup("time", 0, 50),
            this.spawnPickup("pickup", 0, 105))
          : 40 == this.groups
          ? ((a = 0),
            this.spawnPickup("pickup", 0, 0),
            this.spawnPickup("time", 0, 50),
            this.spawnPickup("pickup", 0, 105))
          : (a =
              20 > this.groups
                ? g.randomNumber(1, 5)
                : 30 > this.groups
                ? g.randomNumber(1, 7)
                : g.randomNumber(1, 8));
        this.groups++;
        switch (a) {
          case 1:
            this.spawnPickup("pickup", 0, 0);
            this.spawnPickup("pickup", 0, 50);
            this.spawnPickup("pickup", 0, 100);
            break;
          case 2:
            this.spawnPickup("pickup", -25, -25);
            this.spawnPickup("pickup", -25, 25);
            this.spawnPickup("pickup", 25, -25);
            this.spawnPickup("pickup", 25, 25);
            break;
          case 3:
            this.spawnPickup("pickup", 0, 0);
            this.spawnPickup("pickup", -50, 0);
            this.spawnPickup("pickup", 50, 0);
            break;
          case 4:
            g.coinFlip()
              ? this.spawnPickup("bombLeft", 0, 0)
              : this.spawnPickup("bombRight", 0, 0);
            break;
          case 5:
            g.coinFlip()
              ? this.spawnTarget("targetLeft", g.randomNumber(0, 50))
              : this.spawnTarget("targetRight", g.randomNumber(0, 50));
            break;
          case 6:
            g.coinFlip()
              ? this.spawnTarget("oilLeft", g.randomNumber(0, 50))
              : this.spawnTarget("oilRight", g.randomNumber(0, 50));
            break;
          case 7:
            g.coinFlip()
              ? this.spawnTarget("scaffoldLeft", g.randomNumber(0, 50))
              : this.spawnTarget("scaffoldRight", g.randomNumber(0, 50));
            break;
          case 8:
            this.spawnPickup("bombLeft", 0, 0),
              this.spawnPickup("bombRight", 0, 100);
        }
      }
    },
    collidePickups: function () {
      for (var a = 0, b = this.pickups; a < b.length; ) {
        var c = b[a];
        ++a;
        c.$zF[25].active &&
          (this.spidey.$zF[21].isLeft
            ? (40 >
                g.vectorDistance(
                  this.spidey.$zF[1].x.$bG - 135,
                  c.$zF[1].x.$bG,
                  this.spidey.$zF[1].y.$bG - 65,
                  c.$zF[1].y.$bG
                ) ||
                65 >
                  g.vectorDistance(
                    this.spidey.$zF[1].x.$bG - 135,
                    c.$zF[1].x.$bG,
                    this.spidey.$zF[1].y.$bG - 30,
                    c.$zF[1].y.$bG
                  ) ||
                65 >
                  g.vectorDistance(
                    this.spidey.$zF[1].x.$bG - 135,
                    c.$zF[1].x.$bG,
                    this.spidey.$zF[1].y.$bG + 10,
                    c.$zF[1].y.$bG
                  )) &&
              c.$zF[25].hit() &&
              ("bomb" == c.$zF[25].type
                ? (this.health--,
                  0 > this.health && (this.health = 0),
                  this.hud.$zF[26].setHealth(this.health),
                  0 == this.health && this.endGame())
                : "time" == c.$zF[25].type
                ? ((this.seconds += 30),
                  (this.timer = 1),
                  this.hud.$zF[26].setTime(this.seconds))
                : (this.score++, this.hud.$zF[26].setScore(this.score)))
            : (40 >
                g.vectorDistance(
                  this.spidey.$zF[1].x.$bG + 135,
                  c.$zF[1].x.$bG,
                  this.spidey.$zF[1].y.$bG - 65,
                  c.$zF[1].y.$bG
                ) ||
                65 >
                  g.vectorDistance(
                    this.spidey.$zF[1].x.$bG + 135,
                    c.$zF[1].x.$bG,
                    this.spidey.$zF[1].y.$bG - 30,
                    c.$zF[1].y.$bG
                  ) ||
                65 >
                  g.vectorDistance(
                    this.spidey.$zF[1].x.$bG + 135,
                    c.$zF[1].x.$bG,
                    this.spidey.$zF[1].y.$bG + 10,
                    c.$zF[1].y.$bG
                  )) &&
              c.$zF[25].hit() &&
              ("bomb" == c.$zF[25].type
                ? (this.health--,
                  0 > this.health && (this.health = 0),
                  this.hud.$zF[26].setHealth(this.health),
                  0 == this.health && this.endGame())
                : "time" == c.$zF[25].type
                ? ((this.seconds += 10),
                  (this.timer = 1),
                  this.hud.$zF[26].setTime(this.seconds))
                : (this.score++, this.hud.$zF[26].setScore(this.score))));
      }
    },
    timeOut: function () {
      var a = this;
      this.inPlay = !1;
      var b = new G();
      b.run(
        new H([
          new z(1),
          new x(function () {
            d.score = a.score;
            d.targets = a.targetScore;
            a.showGameOver();
          }),
        ])
      );
      this.owner.add(b);
    },
    endGame: function () {
      var a = this;
      this.spidey.$zF[21].fall();
      var b = new G();
      b.run(
        new H([
          new z(2),
          new x(function () {
            d.score = a.score;
            d.targets = a.targetScore;
            a.showGameOver();
          }),
        ])
      );
      this.owner.add(b);
    },
    spawnPickup: function (a, b, c) {
      null == c && (c = 0);
      null == b && (b = 0);
      a = new h().add(
        new ud(
          a,
          this.screenWidth / 2 + b,
          -this.game.$zF[1].y.$bG + this.screenHeight + 250 + c
        )
      );
      this.game.addChild(a);
      this.pickups.push(a);
      this.game.addChild(this.spidey, !0);
    },
    spawnTarget: function (a, b) {
      null == b && (b = 0);
      var c = new h();
      -1 != a.indexOf("Left")
        ? c.add(
            new Mb(
              a,
              this.screenWidth / 2 - 430,
              -this.game.$zF[1].y.$bG + this.screenHeight + 250 + b
            )
          )
        : c.add(
            new Mb(
              a,
              this.screenWidth / 2 + 430,
              -this.game.$zF[1].y.$bG + this.screenHeight + 250 + b
            )
          );
      this.game.addChild(c);
      this.targets.push(c);
      this.game.addChild(this.spidey, !0);
      return c;
    },
    keyDownHandler: function (a) {
      var b = this;
      this.inPlay &&
        (a.key == e.Number1
          ? this.spidey.$zF[21].isIdle &&
            ((this.fallDist = 10), this.spidey.$zF[21].jump(this.fallDist))
          : a.key == e.Number2
          ? this.spidey.$zF[21].isIdle &&
            ((this.fallDist = (0.1 * (this.screenHeight - 150)) | 0),
            this.spidey.$zF[21].jump(this.fallDist))
          : a.key == e.Number3
          ? this.spidey.$zF[21].isIdle &&
            ((this.fallDist = (0.4 * (this.screenHeight - 150)) | 0),
            this.spidey.$zF[21].jump(this.fallDist))
          : a.key == e.Number4
          ? this.spidey.$zF[21].isIdle &&
            ((this.fallDist = (0.7 * (this.screenHeight - 150)) | 0),
            this.spidey.$zF[21].jump(this.fallDist))
          : a.key == e.Number5
          ? this.spidey.$zF[21].isIdle &&
            ((this.fallDist = (this.screenHeight - 150) | 0),
            this.spidey.$zF[21].jump(this.fallDist))
          : a.key == e.Number6
          ? this.spidey.$zF[21].isIdle &&
            ((this.fallDist = (1.2 * (this.screenHeight - 150)) | 0),
            this.spidey.$zF[21].jump(this.fallDist))
          : a.key == e.Number7
          ? this.spidey.$zF[21].isIdle &&
            ((this.fallDist = (1.5 * (this.screenHeight - 150)) | 0),
            this.spidey.$zF[21].jump(this.fallDist))
          : a.key == e.Number0
          ? (this.spidey.$zF[21].isIdle &&
              ((this.fallDist = (1.5 * (this.screenHeight - 150)) | 0),
              this.spidey.$zF[21].failJump(this.fallDist)),
            (a = new G()),
            a.run(
              new H([
                new z(3),
                new x(function () {
                  d.score = b.score;
                  d.targets = b.targetScore;
                  b.gameOverCallback();
                }),
              ])
            ),
            this.owner.add(a))
          : a.key == e.T
          ? g.coinFlip()
            ? this.spawnTarget("targetLeft")
            : this.spawnTarget("targetRight")
          : a.key == e.B
          ? g.coinFlip()
            ? this.spawnPickup("bombLeft", 0, 0)
            : this.spawnPickup("bombRight", 0, 0)
          : a.key == e.O
          ? g.coinFlip()
            ? this.spawnTarget("oilLeft")
            : this.spawnTarget("oilRight")
          : a.key == e.S
          ? g.coinFlip()
            ? this.spawnTarget("scaffoldLeft")
            : this.spawnTarget("scaffoldRight")
          : a.key == e.L
          ? this.spawnPickup("time", 0, 0)
          : a.key == e.Space && this.startPower());
    },
    keyUpHandler: function (a) {
      this.inPlay && a.key == e.Space && this.endPower();
    },
    handlePointerDown: function (a) {
      this.inPlay && this.startPower();
    },
    handlePointerUp: function (a) {
      this.inPlay && this.endPower();
    },
    startPower: function () {
      this.spidey.$zF[21].isIdle && this.powerbar.$zF[22].startBar();
    },
    endPower: function () {
      var a = this,
        b = this.powerbar.$zF[22].getPower();
      0 <= b &&
        ((b /= this.powerbar.$zF[22].length),
        1 < b && (b = 1),
        this.spidey.$zF[21].isIdle &&
          (0.9 < b
            ? ((this.fallDist = (1.5 * (this.screenHeight - 150) * b) | 0),
              this.spidey.$zF[21].failJump(this.fallDist),
              (b = new G()),
              b.run(
                new H([
                  new z(3),
                  new x(function () {
                    a.showGameOver();
                  }),
                ])
              ),
              this.owner.add(b))
            : ((this.fallDist = (1.5 * (this.screenHeight - 150) * b) | 0),
              this.spidey.$zF[21].jump(this.fallDist))));
      null;
    },
    showGameOver: function () {
      this.inPlay = !1;
      d.score = this.score;
      d.targets = this.targetScore;
      var a = new h().add(
        new Jb(
          this.screenWidth / 2,
          this.screenHeight / 2,
          D(this, this.closeGameOver)
        )
      );
      this.screen.addChild(a);
    },
    closeGameOver: function () {
      this.gameOverCallback();
    },
    __class__: md,
  });
  var ye = function () {};
  l["project.Main"] = ye;
  ye.__name__ = ["project", "Main"];
  ye.main = function () {
    var a,
      b = new h().add(new Y(16777215, 960, 560)),
      c = new h().add(new Y(16777215, 2e3, 2e3));
    b.addChild(c);
    var c = m.$vG.$IG.get_width(),
      e = m.$vG.$IG.get_height();
    if (e > c)
      var k = c,
        c = e,
        e = k;
    m.root.addChild(b);
    g.detectLowEndDevice();
    m.$vG.$JG.get_supported() && (d.isMobile = !0);
    c = window.navigator.userAgent;
    -1 != c.indexOf("Win") && (d.isMobile = !1);
    -1 != c.indexOf("Mac") && (d.isMobile = !1);
    -1 != c.indexOf("Mobile") && (d.isMobile = !0);
    a = m.loadAssetPack(pa.fromAssets("config"));
    a.success.connect(function (c) {
      d.configPack = c;
      a = m.loadAssetPack(pa.fromAssets("preloader"));
      a.success.connect(function (a) {
        d.loaderPack = a;
        b.dispose();
        m.root.add(new vd());
      });
      a.catchError(function (a) {
        null;
      });
      a.progressChanged.connect(function () {
        null;
      });
    });
    a.catchError(function (a) {
      null;
    });
    a.progressChanged.connect(function () {
      null;
    });
  };
  var S = function (a, b, c, e, g, h) {
    null == h && (h = 1);
    s.call(this);
    this.movie = a;
    this.animation = b;
    this.x = c | 0;
    this.y = e | 0;
    this.pack = null != g ? g : d.pack;
    this.liteScale = h;
  };
  l["project.MovieClip"] = S;
  S.__name__ = ["project", "MovieClip"];
  S.__super__ = s;
  S.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 17;
    },
    onAdded: function () {
      var a = new Ud(this.pack, this.movie);
      this.moviePlayer = new Nc(a);
      this.moviePlayer.loop(this.animation);
      this.owner.add(this.moviePlayer).add(new w());
      this.thisSprite = this.owner.$zF[1];
      this.thisSprite.x.set__(this.x);
      this.thisSprite.y.set__(this.y);
      d.lite &&
        (80 == this.liteScale
          ? this.thisSprite.setScale(1.25)
          : 50 == this.liteScale && this.thisSprite.setScale(2),
        this.thisSprite.set_pixelSnapping(!1));
    },
    gotoAndPlay: function (a) {
      var b = this.moviePlayer.movie.$bG;
      b.set_position((1 / b.symbol.frameRate) * a);
    },
    play: function (a, b) {
      this.moviePlayer.loop(b);
      this.moviePlayer.play(a);
    },
    loop: function (a) {
      this.moviePlayer.loop(a);
    },
    __class__: S,
  });
  var nd = function (a, b, c) {
    this.stage = 1;
    this.showExit = !0;
    s.call(this);
    this.x = a | 0;
    this.y = b | 0;
    this.callback = c;
  };
  l["project.PauseMenu"] = nd;
  nd.__name__ = ["project", "PauseMenu"];
  nd.__super__ = s;
  nd.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 20;
    },
    onAdded: function () {
      this.owner.add(new N(d.pack.getTexture("blank")));
      this.owner.$zF[1].centerAnchor();
      this.thisSprite = this.owner.$zF[1];
      this.thisSprite.setXY(this.x, this.y);
      var a = new h();
      g.createImageSprite(this.owner, a, "blank", !0, 0, 0);
      a = new h();
      g.createImageSprite(this.owner, a, "help/subscreen", !0, 0, 0);
      this.connect1(m.$vG.$GG.down, D(this, this.onPointerDown));
      this.connect1(m.$vG.$GG.move, D(this, this.onPointerMove));
      this.screen = new h();
      g.createImageSprite(this.owner, this.screen, "blank", !0, 0, 0);
      this.showMenu();
    },
    showMenu: function () {
      this.screen.dispose();
      this.screen = new h();
      g.createImageSprite(this.owner, this.screen, "blank", !0, 0, 0);
      this.btnPlay = new h();
      g.createImageSprite(
        this.screen,
        this.btnPlay,
        "buttons/BTN_play",
        !0,
        -180,
        10
      );
      this.btnHelp = new h();
      g.createImageSprite(
        this.screen,
        this.btnHelp,
        "buttons/BTN_help",
        !0,
        -60,
        10
      );
      this.btnMute = new h();
      d.muted
        ? g.createImageSprite(
            this.screen,
            this.btnMute,
            "buttons/BTN_audio_OFF",
            !0,
            60,
            10
          )
        : g.createImageSprite(
            this.screen,
            this.btnMute,
            "buttons/BTN_audio_ON",
            !0,
            60,
            10
          );
      this.btnExit = new h();
      g.createImageSprite(
        this.screen,
        this.btnExit,
        "buttons/BTN_close",
        !0,
        180,
        10
      );
      this.tab = "MENU";
    },
    showHelp: function () {
      this.stage = 1;
      this.screen.dispose();
      this.screen = new h();
      g.createImageSprite(this.owner, this.screen, "blank", !0, 0, 0);
      var a = new h();
      g.createImageSprite(this.screen, a, "help/header", !0, 0, -200);
      this.help = new h();
      1 == d.mission
        ? d.isMobile
          ? (g.createImageSprite(
              this.owner,
              this.help,
              "help/m1_mobile1",
              !0,
              15,
              20
            ),
            (a = new h()),
            g.createXMLSprite(
              this.help,
              a,
              d.helpFont,
              "Center",
              30,
              30,
              d.translations.node.resolve("run")
            ),
            (a = new h()),
            g.createXMLSprite(
              this.help,
              a,
              d.helpFont,
              "Center",
              265,
              30,
              d.translations.node.resolve("jumpCars")
            ))
          : (g.createImageSprite(
              this.owner,
              this.help,
              "help/m1_desktop1",
              !0,
              15,
              20
            ),
            (a = new h()),
            g.createXMLSprite(
              this.help,
              a,
              d.helpFont,
              "Center",
              20,
              20,
              d.translations.node.resolve("run")
            ),
            (a = new h()),
            g.createXMLSprite(
              this.help,
              a,
              d.helpFont,
              "Center",
              250,
              20,
              d.translations.node.resolve("jumpCars")
            ))
        : d.isMobile
        ? d.vo
          ? g.createImageSprite(
              this.owner,
              this.help,
              "help/m2_mobile1",
              !0,
              15,
              20
            )
          : (g.createImageSprite(
              this.owner,
              this.help,
              "help/m2_mobile1_int",
              !0,
              15,
              20
            ),
            (a = new h()),
            g.createXMLSprite(
              this.help,
              a,
              d.helpFont,
              "Center",
              210,
              20,
              d.translations.node.resolve("jumpWall")
            ),
            (a = new h()),
            g.createXMLSprite(
              this.help,
              a,
              d.helpFont,
              "Center",
              35,
              210,
              d.translations.node.resolve("jump")
            ),
            (a = new h()),
            g.createXMLSprite(
              this.help,
              a,
              d.helpFont,
              "Center",
              150,
              255,
              d.translations.node.resolve("hold")
            ),
            (a = new h()),
            g.createXMLSprite(
              this.help,
              a,
              d.helpFont,
              "Center",
              330,
              220,
              d.translations.node.resolve("power")
            ))
        : d.vo
        ? g.createImageSprite(
            this.owner,
            this.help,
            "help/m2_desktop1",
            !0,
            15,
            20
          )
        : (g.createImageSprite(
            this.owner,
            this.help,
            "help/m2_desktop1_int",
            !0,
            15,
            20
          ),
          (a = new h()),
          g.createXMLSprite(
            this.help,
            a,
            d.helpFont,
            "Center",
            210,
            20,
            d.translations.node.resolve("jumpWall")
          ),
          (a = new h()),
          g.createXMLSprite(
            this.help,
            a,
            d.helpFont,
            "Center",
            35,
            210,
            d.translations.node.resolve("jump")
          ),
          (a = new h()),
          g.createXMLSprite(
            this.help,
            a,
            d.helpFont,
            "Center",
            150,
            255,
            d.translations.node.resolve("hold")
          ),
          (a = new h()),
          g.createXMLSprite(
            this.help,
            a,
            d.helpFont,
            "Center",
            330,
            220,
            d.translations.node.resolve("power")
          ));
      this.backBtn = new h();
      g.createImageSprite(
        this.screen,
        this.backBtn,
        "buttons/BTN_back",
        !0,
        -275,
        20
      );
      this.nextBtn = new h();
      g.createImageSprite(
        this.screen,
        this.nextBtn,
        "buttons/BTN_next",
        !0,
        300,
        20
      );
      this.btnExit = new h();
      this.showExit &&
        g.createImageSprite(
          this.screen,
          this.btnExit,
          "buttons/BTN_close",
          !0,
          300,
          -100
        );
      this.showExit = !0;
      this.tab = "HELP";
    },
    showQuit: function () {
      this.screen.dispose();
      this.screen = new h();
      g.createImageSprite(this.owner, this.screen, "blank", !0, 0, 0);
      this.btnExit = new h();
      g.createImageSprite(
        this.screen,
        this.btnExit,
        "buttons/BTN_tick",
        !0,
        -100,
        30
      );
      this.btnPlay = new h();
      g.createImageSprite(
        this.screen,
        this.btnPlay,
        "buttons/BTN_close",
        !0,
        100,
        30
      );
      var a = new h();
      g.createXMLSprite(
        this.screen,
        a,
        d.italicFont,
        "Center",
        0,
        -100,
        d.translations.node.resolve("sure")
      );
      this.tab = "QUIT";
    },
    onPointerDown: function (a) {
      switch (this.tab) {
        case "MENU":
          a.hit == this.btnPlay.$zF[1]
            ? (this.callback(!1), this.playSound("click"))
            : a.hit == this.btnHelp.$zF[1]
            ? (this.showHelp(), this.playSound("click"))
            : a.hit == this.btnExit.$zF[1]
            ? (this.showQuit(), this.playSound("click"))
            : a.hit == this.btnMute.$zF[1] &&
              (d.muted
                ? (this.btnMute.dispose(),
                  (this.btnMute = new h()),
                  g.createImageSprite(
                    this.screen,
                    this.btnMute,
                    "buttons/BTN_audio_ON",
                    !0,
                    60,
                    10
                  ),
                  g.mute(!1))
                : (this.btnMute.dispose(),
                  (this.btnMute = new h()),
                  g.createImageSprite(
                    this.screen,
                    this.btnMute,
                    "buttons/BTN_audio_OFF",
                    !0,
                    60,
                    10
                  ),
                  g.mute(!0)),
              this.playSound("click"));
          break;
        case "HELP":
          if (a.hit == this.btnExit.$zF[1])
            this.help.dispose(), this.showMenu(), this.playSound("click");
          else if (a.hit == this.backBtn.$zF[1] || a.hit == this.nextBtn.$zF[1])
            this.help.dispose(),
              (this.help = new h()),
              1 == this.stage
                ? ((this.stage = 2),
                  1 == d.mission
                    ? (g.createImageSprite(
                        this.screen,
                        this.help,
                        "help/m1_2",
                        !0,
                        0,
                        20
                      ),
                      (a = new h()),
                      g.createXMLSprite(
                        this.help,
                        a,
                        d.helpFont,
                        "Left",
                        270,
                        55,
                        d.translations.node.resolve("collect")
                      ),
                      (a = new h()),
                      g.createXMLSprite(
                        this.help,
                        a,
                        d.helpFont,
                        "Left",
                        270,
                        200,
                        d.translations.node.resolve("avoid")
                      ))
                    : (g.createImageSprite(
                        this.owner,
                        this.help,
                        "help/m2_2",
                        !0,
                        0,
                        20
                      ),
                      (a = new h()),
                      g.createXMLSprite(
                        this.help,
                        a,
                        d.helpFont,
                        "Center",
                        95,
                        35,
                        d.translations.node.resolve("collect2")
                      ),
                      (a = new h()),
                      g.createXMLSprite(
                        this.help,
                        a,
                        d.helpFont,
                        "Left",
                        335,
                        40,
                        d.translations.node.resolve("land")
                      ),
                      (a = new h()),
                      g.createXMLSprite(
                        this.help,
                        a,
                        d.helpFont,
                        "Center",
                        260,
                        170,
                        d.translations.node.resolve("avoid")
                      )))
                : ((this.stage = 1),
                  1 == d.mission
                    ? d.isMobile
                      ? (g.createImageSprite(
                          this.screen,
                          this.help,
                          "help/m1_mobile1",
                          !0,
                          15,
                          20
                        ),
                        (a = new h()),
                        g.createXMLSprite(
                          this.help,
                          a,
                          d.helpFont,
                          "Center",
                          30,
                          30,
                          d.translations.node.resolve("run")
                        ),
                        (a = new h()),
                        g.createXMLSprite(
                          this.help,
                          a,
                          d.helpFont,
                          "Center",
                          265,
                          30,
                          d.translations.node.resolve("jumpCars")
                        ))
                      : (g.createImageSprite(
                          this.owner,
                          this.help,
                          "help/m1_desktop1",
                          !0,
                          15,
                          20
                        ),
                        (a = new h()),
                        g.createXMLSprite(
                          this.help,
                          a,
                          d.helpFont,
                          "Center",
                          20,
                          20,
                          d.translations.node.resolve("run")
                        ),
                        (a = new h()),
                        g.createXMLSprite(
                          this.help,
                          a,
                          d.helpFont,
                          "Center",
                          250,
                          20,
                          d.translations.node.resolve("jumpCars")
                        ))
                    : d.isMobile
                    ? d.vo
                      ? g.createImageSprite(
                          this.screen,
                          this.help,
                          "help/m2_mobile1",
                          !0,
                          15,
                          20
                        )
                      : (g.createImageSprite(
                          this.screen,
                          this.help,
                          "help/m2_mobile1_int",
                          !0,
                          15,
                          20
                        ),
                        (a = new h()),
                        g.createXMLSprite(
                          this.help,
                          a,
                          d.helpFont,
                          "Center",
                          215,
                          25,
                          d.translations.node.resolve("jumpWall")
                        ),
                        (a = new h()),
                        g.createXMLSprite(
                          this.help,
                          a,
                          d.helpFont,
                          "Center",
                          55,
                          225,
                          d.translations.node.resolve("jump")
                        ),
                        (a = new h()),
                        g.createXMLSprite(
                          this.help,
                          a,
                          d.helpFont,
                          "Center",
                          155,
                          270,
                          d.translations.node.resolve("hold")
                        ),
                        (a = new h()),
                        g.createXMLSprite(
                          this.help,
                          a,
                          d.helpFont,
                          "Center",
                          330,
                          220,
                          d.translations.node.resolve("power")
                        ))
                    : d.vo
                    ? g.createImageSprite(
                        this.screen,
                        this.help,
                        "help/m2_desktop1",
                        !0,
                        15,
                        20
                      )
                    : (g.createImageSprite(
                        this.screen,
                        this.help,
                        "help/m2_desktop1_int",
                        !0,
                        15,
                        20
                      ),
                      (a = new h()),
                      g.createXMLSprite(
                        this.help,
                        a,
                        d.helpFont,
                        "Center",
                        215,
                        25,
                        d.translations.node.resolve("jumpWall")
                      ),
                      (a = new h()),
                      g.createXMLSprite(
                        this.help,
                        a,
                        d.helpFont,
                        "Center",
                        55,
                        225,
                        d.translations.node.resolve("jump")
                      ),
                      (a = new h()),
                      g.createXMLSprite(
                        this.help,
                        a,
                        d.helpFont,
                        "Center",
                        155,
                        270,
                        d.translations.node.resolve("hold")
                      ),
                      (a = new h()),
                      g.createXMLSprite(
                        this.help,
                        a,
                        d.helpFont,
                        "Center",
                        330,
                        220,
                        d.translations.node.resolve("power")
                      ))),
              P.fadeIn(this.help, 0, 0.3);
          break;
        case "HELPINTRO":
          a.hit == this.btnExit.$zF[1] &&
            (this.callback(!1), this.playSound("click"));
          break;
        case "QUIT":
          a.hit == this.btnExit.$zF[1]
            ? (this.callback(!0), this.playSound("click"))
            : a.hit == this.btnPlay.$zF[1] &&
              (this.showMenu(), this.playSound("click"));
      }
    },
    onPointerMove: function (a) {
      switch (this.tab) {
        case "MENU":
          g.rolloverImage(
            this.btnPlay,
            "buttons/BTN_play",
            "buttons/BTN_play_rollover",
            a
          );
          g.rolloverImage(
            this.btnHelp,
            "buttons/BTN_help",
            "buttons/BTN_help_rollover",
            a
          );
          g.rolloverImage(
            this.btnExit,
            "buttons/BTN_close",
            "buttons/BTN_close_rollover",
            a
          );
          d.muted
            ? g.rolloverImage(
                this.btnMute,
                "buttons/BTN_audio_OFF",
                "buttons/BTN_audio_OFF_rollover",
                a
              )
            : g.rolloverImage(
                this.btnMute,
                "buttons/BTN_audio_ON",
                "buttons/BTN_audio_ON_rollover",
                a
              );
          break;
        case "HELP":
          g.rolloverImage(
            this.btnExit,
            "buttons/BTN_close",
            "buttons/BTN_close_rollover",
            a
          );
          break;
        case "QUIT":
          g.rolloverImage(
            this.btnExit,
            "buttons/BTN_tick",
            "buttons/BTN_tick_rollover",
            a
          ),
            g.rolloverImage(
              this.btnPlay,
              "buttons/BTN_close",
              "buttons/BTN_close_rollover",
              a
            );
      }
    },
    playSound: function (a) {
      this.sfx = d.pack.getSound("audio/" + a).play();
    },
    __class__: nd,
  });
  var Lb = function (a, b, c, d) {
    this.active = !0;
    s.call(this);
    this.x = c | 0;
    this.y = d | 0;
    this.car = a;
    this.type = b;
  };
  l["project.Pickup"] = Lb;
  Lb.__name__ = ["project", "Pickup"];
  Lb.__super__ = s;
  Lb.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 30;
    },
    onAdded: function () {
      this.owner.add(new N(d.pack.getTexture("blank")));
      this.owner.$zF[1].centerAnchor();
      this.owner.$zF[1].setXY(this.x, this.y);
      this.owner.$zF[1].set_pixelSnapping(!1);
      if ("bomb" == this.type)
        (this.bomb = new h().add(new S("game/bomb", "idle", 0, 0))),
          this.owner.addChild(this.bomb);
      else if ("health" == this.type) {
        this.shadow = new h().add(new S("game/pickups", "shadow", 0, 62));
        this.owner.addChild(this.shadow);
        var a = new h();
        g.createImageSprite(this.owner, a, "blank", !0, 0, 0);
        g.pulseUpDown(a, 25, 1.2);
        this.pickup = new h();
        g.createImageSprite(a, this.pickup, "game/health_pickup", !0, 0, -15);
        this.burst = new h().add(new S("game/pickups2", "blank", 3, -20));
        a.addChild(this.burst);
      } else
        "time" == this.type
          ? ((this.shadow = new h().add(
              new S("game/pickups", "shadow", 0, 62)
            )),
            this.owner.addChild(this.shadow),
            (a = new h()),
            g.createImageSprite(this.owner, a, "blank", !0, 0, 0),
            g.pulseUpDown(a, 25, 1.2),
            (this.pickup = new h()),
            g.createImageSprite(a, this.pickup, "game/pickup_time", !0, 0, -15),
            (this.burst = new h().add(new S("game/pickups2", "blank", 3, -20))),
            a.addChild(this.burst))
          : "target" == this.type
          ? ((this.pickup = new h()),
            g.createImageSprite(
              this.owner,
              this.pickup,
              "game/spider_pickup",
              !0,
              0,
              64
            ),
            (this.burst = new h().add(
              new S("game/targetBurst", "blank", 0, 50)
            )),
            this.owner.addChild(this.burst))
          : ((this.shadow = new h().add(
              new S("game/pickups", "shadow", 0, 62)
            )),
            this.owner.addChild(this.shadow),
            (a = new h()),
            g.createImageSprite(this.owner, a, "blank", !0, 0, 0),
            g.pulseUpDown(a, 25, 1.2),
            (this.pickup = new h()),
            g.createImageSprite(a, this.pickup, "game/pickup", !0, 0, 0),
            (this.burst = new h().add(new S("game/pickups", "blank", 3, -20))),
            a.addChild(this.burst));
    },
    move: function (a, b) {
      var c = new G();
      c.run(
        new ua(
          new H([
            new ca(this.owner.$zF[1].x, this.x + a, b, C.sineInOut),
            new ca(this.owner.$zF[1].x, this.x, b, C.sineInOut),
          ])
        )
      );
      this.bomb.add(c);
    },
    hit: function () {
      if (this.active) {
        this.active = !1;
        if ("bomb" == this.type)
          this.bomb.$zF[17].play("explode", "blank"),
            null != this.bomb.$zF[11] &&
              (this.bomb.$zF[11].stopAll(),
              this.owner.$zF[1].x.set__(this.owner.$zF[1].x.$bG)),
            this.playSound("explode");
        else {
          if ("target" == this.type) {
            this.pickup.$zF[1].alpha.animateTo(0, 0.5);
            this.burst.$zF[17].play("burst", "blank");
            var a = new h();
            g.createImageSprite(this.owner, a, "game2/target", !0, 0, 0);
            a.$zF[1].set_pixelSnapping(!1);
            a.$zF[1].y.animateBy(-100, 1, C.sineIn);
            a.$zF[1].alpha.animateTo(0, 1);
          } else
            this.shadow.$zF[1].alpha.animateTo(0, 0.1),
              this.pickup.$zF[1].y.animateBy(-30, 0.5),
              this.pickup.$zF[1].alpha.animateTo(0, 0.5),
              this.burst.$zF[17].play("burst", "blank");
          this.playSound("pickup");
        }
        return !0;
      }
      return !1;
    },
    playSound: function (a) {
      this.sfx = d.pack.getSound("audio/" + a).play();
    },
    __class__: Lb,
  });
  var ud = function (a, b, c) {
    this.bombMoveTime = 2;
    this.bombMoveDist = 220;
    this.active = !0;
    s.call(this);
    this.x = b | 0;
    this.y = c | 0;
    this.type = a;
  };
  l["project.Pickup2"] = ud;
  ud.__name__ = ["project", "Pickup2"];
  ud.__super__ = s;
  ud.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 25;
    },
    onAdded: function () {
      this.owner.add(new N(d.pack.getTexture("blank")));
      this.owner.$zF[1].centerAnchor();
      this.owner.$zF[1].setXY(this.x, this.y);
      this.owner.$zF[1].set_pixelSnapping(!1);
      if ("bombLeft" == this.type) {
        this.owner.$zF[1].setXY(this.x - this.bombMoveDist, this.y);
        this.bomb = new h().add(new S("game/bomb", "idle", 0, 0));
        this.owner.addChild(this.bomb);
        var a = new G();
        a.run(
          new ua(
            new H([
              new ca(
                this.owner.$zF[1].x,
                this.x + this.bombMoveDist,
                this.bombMoveTime,
                C.sineInOut
              ),
              new ca(
                this.owner.$zF[1].x,
                this.x - this.bombMoveDist,
                this.bombMoveTime,
                C.sineInOut
              ),
            ])
          )
        );
        this.bomb.add(a);
        this.type = "bomb";
      } else
        "bombRight" == this.type
          ? (this.owner.$zF[1].setXY(this.x + this.bombMoveDist, this.y),
            (this.bomb = new h().add(new S("game/bomb", "idle", 0, 0))),
            this.owner.addChild(this.bomb),
            (a = new G()),
            a.run(
              new ua(
                new H([
                  new ca(
                    this.owner.$zF[1].x,
                    this.x - this.bombMoveDist,
                    this.bombMoveTime,
                    C.sineInOut
                  ),
                  new ca(
                    this.owner.$zF[1].x,
                    this.x + this.bombMoveDist,
                    this.bombMoveTime,
                    C.sineInOut
                  ),
                ])
              )
            ),
            this.bomb.add(a),
            (this.type = "bomb"))
          : ("time" == this.type
              ? ((a = new h()),
                g.createImageSprite(this.owner, a, "blank", !0, 0, 0),
                g.pulseUpDown(a, 25, 1.2),
                (this.pickup = new h()),
                g.createImageSprite(
                  a,
                  this.pickup,
                  "game/pickup_time",
                  !0,
                  0,
                  0
                ),
                (this.burst = new h().add(
                  new S("game/pickups2", "blank", 3, -20)
                )))
              : ((a = new h()),
                g.createImageSprite(this.owner, a, "blank", !0, 0, 0),
                g.pulseUpDown(a, 25, 1.2),
                (this.pickup = new h()),
                g.createImageSprite(a, this.pickup, "game/pickup", !0, 0, 0),
                (this.burst = new h().add(
                  new S("game/pickups", "blank", 3, -20)
                ))),
            a.addChild(this.burst));
    },
    hit: function () {
      return this.active
        ? ((this.active = !1),
          "bomb" == this.type
            ? (this.bomb.$zF[17].play("explode", "blank"),
              this.playSound("explode"))
            : (this.pickup.$zF[1].y.animateBy(-30, 0.5),
              this.pickup.$zF[1].alpha.animateTo(0, 0.5),
              this.burst.$zF[17].play("burst", "blank"),
              this.playSound("pickup")),
          !0)
        : !1;
    },
    onUpdate: function (a) {},
    playSound: function (a) {
      this.sfx = d.pack.getSound("audio/" + a).play();
    },
    __class__: ud,
  });
  var qd = function (a, b) {
    this.bgWidth = 916;
    this.scrollSpeed = 300;
    s.call(this);
    this.x = a | 0;
    this.y = b | 0;
  };
  l["project.PlatformParallax"] = qd;
  qd.__name__ = ["project", "PlatformParallax"];
  qd.__super__ = s;
  qd.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 31;
    },
    onAdded: function () {
      this.owner.add(new N(d.pack.getTexture("blank")));
      this.owner.$zF[1].centerAnchor();
      this.owner.$zF[1].setXY(this.x, this.y);
      this.owner.$zF[1].set_pixelSnapping(!1);
      this.bgs = [];
      var a = new h();
      g.createImageSprite(this.owner, a, "blank", !1, 0, 0);
      this.background = new h();
      g.createImageSprite(a, this.background, "blank", !1, -200, 0);
      var b = new h();
      g.createImageSprite(
        this.background,
        b,
        "game/red/bg_front_layer",
        !1,
        0,
        0
      );
      this.bgs.push(b);
      b = new h();
      g.createImageSprite(
        this.background,
        b,
        "game/red/bg_front_layer",
        !1,
        this.bgWidth,
        0
      );
      this.bgs.push(b);
      b = new h();
      g.createImageSprite(
        this.background,
        b,
        "game/red/bg_front_layer",
        !1,
        2 * this.bgWidth,
        0
      );
      this.bgs.push(b);
      b = new h();
      g.createImageSprite(
        this.background,
        b,
        "game/red/bg_front_layer",
        !1,
        3 * this.bgWidth,
        0
      );
      this.bgs.push(b);
      b = new h();
      g.createImageSprite(
        this.background,
        b,
        "game/red/bg_front_layer",
        !1,
        4 * this.bgWidth,
        0
      );
      this.bgs.push(b);
      b = new h();
      g.createImageSprite(
        this.background,
        b,
        "game/red/bg_front_layer",
        !1,
        5 * this.bgWidth,
        0
      );
      this.bgs.push(b);
      b = new h();
      g.createImageSprite(
        this.background,
        b,
        "game/red/bg_front_layer",
        !1,
        6 * this.bgWidth,
        0
      );
      this.bgs.push(b);
      this.mask = new h();
      g.createFillSprite(
        this.background,
        this.mask,
        16776960,
        !1,
        0,
        0,
        4935,
        1e3,
        1
      );
      a.$zF[1].set_mask(this.mask.$zF[1]);
    },
    onUpdate: function (a) {
      var b = this.background.$zF[1].x;
      b.set__(b.$bG - this.scrollSpeed * a);
      a = 0;
      for (b = this.bgs; a < b.length; ) {
        var c = b[a];
        ++a;
        this.background.$zF[1].x.$bG + c.$zF[1].x.$bG < -(this.bgWidth + 100) &&
          ((c = c.$zF[1].x), c.set__(c.$bG + this.bgWidth * this.bgs.length));
      }
    },
    __class__: qd,
  });
  var td = function (a, b) {
    this.speed = 0.6;
    this.length = 110;
    this.ready = this.moving = !1;
    s.call(this);
    this.x = a | 0;
    this.y = b | 0;
  };
  l["project.Powerbar"] = td;
  td.__name__ = ["project", "Powerbar"];
  td.__super__ = s;
  td.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 22;
    },
    onAdded: function () {
      this.owner.add(new N(d.pack.getTexture("blank")));
      this.owner.$zF[1].centerAnchor();
      this.owner.$zF[1].setXY(this.x, this.y);
      var a = new h();
      g.createImageSprite(this.owner, a, "game2/powerbar", !0, 0, 0);
      this.bar = new h();
      g.createImageSprite(
        this.owner,
        this.bar,
        "game2/powerbarArrow",
        !0,
        0,
        0
      );
      a = new h();
      g.createImageSprite(this.owner, a, "game2/powerbarOverlay", !0, 0, 0);
      a = new h();
      g.createImageSprite(this.owner, a, "game2/powerbar", !0, -10, 0);
      this.bar.$zF[1].set_mask(a.$zF[1]);
    },
    spawn: function (a, b, c) {
      this.owner.$zF[1].setXY(b | 0, c | 0);
      a
        ? this.owner.$zF[1].scaleX.set__(-1)
        : this.owner.$zF[1].scaleX.set__(1);
      this.bar.$zF[1].x.set__(this.length);
      this.owner.$zF[1].alpha.animateTo(1, 0.2);
      this.ready = !0;
    },
    startBar: function () {
      var a = this;
      if (this.ready) {
        var b = new G();
        b.run(
          new ua(
            new H([
              new ca(this.bar.$zF[1].x, 0, this.speed, C.sineIn),
              new ca(this.bar.$zF[1].x, this.length, this.speed, C.sineOut),
              new x(function () {
                a.playSound("jump_powerbar");
              }),
            ])
          )
        );
        this.bar.add(b);
        this.moving = !0;
        this.playSound("jump_powerbar");
      }
    },
    getPower: function () {
      var a = this;
      if (this.moving) {
        this.stopSound();
        this.ready = this.moving = !1;
        this.bar.$zF[11].stopAll();
        this.bar.$zF[1].x.set__(this.bar.$zF[1].x.$bG);
        var b = new G();
        b.run(
          new H([
            new z(0.2),
            new x(function () {
              a.owner.$zF[1].alpha.animateTo(0, 0.5);
            }),
          ])
        );
        this.bar.add(b);
        return Math.abs(this.bar.$zF[1].x.$bG);
      }
      return -1;
    },
    stopSound: function () {
      this.sfx.volume.animateTo(0, 0.1);
    },
    playSound: function (a) {
      this.sfx = d.pack.getSound("audio/" + a).play();
      this.sfx.volume.set__(1);
    },
    __class__: td,
  });
  var vd = function () {
    this.fading = !1;
    this.progressWidth = 295;
    this.backgroundColour = 16777215;
    this.staticHeight = 640;
    this.staticWidth = 960;
    this.version = "0.4";
    s.call(this);
    null;
  };
  l["project.Preloader"] = vd;
  vd.__name__ = ["project", "Preloader"];
  vd.__super__ = s;
  vd.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 13;
    },
    onAdded: function () {
      var a = new h().add(new Y(this.backgroundColour, 2e3, 1500));
      m.root.addChild(a);
      a.$zF[1].x.set__(-300);
      this.screen = new h().add(
        new Y(this.backgroundColour, this.staticWidth, this.staticHeight)
      );
      m.root.addChild(this.screen);
      this.onResize();
      this.screen.dispose();
      this.loadGame();
    },
    loadGame: function () {
      var a = this;
      this.screen = new h().add(new Y(this.backgroundColour, 960, 560));
      m.root.addChild(this.screen);
      this.getScreenSize();
      this.getScreenSize();
      var b = new h();
      g.createImageSprite(
        this.screen,
        b,
        "background",
        !1,
        -((1336 - this.screenWidth) / 2),
        this.screenHeight - 768,
        "LOADER"
      );
      b = new h();
      g.createImageSprite(
        this.screen,
        b,
        "header",
        !0,
        this.screenWidth / 2,
        60,
        "LOADER"
      );
      b = new h();
      g.createImageSprite(
        this.screen,
        b,
        "smlogo",
        !0,
        this.screenWidth / 2,
        60,
        "LOADER"
      );
      d.translations = new Wa(
        t
          .parse(d.configPack.getFile("translation.xml").toString())
          .firstElement()
      );
      new h();
      var b = new ba(d.loaderPack, "italicFont"),
        c = new h();
      g.createXMLSprite(
        this.screen,
        c,
        b,
        "Center",
        this.screenWidth / 2,
        105,
        d.translations.node.resolve("cinema")
      );
      b = new h();
      var e = new h();
      e.add(new N(d.loaderPack.getTexture("loader_icon")));
      this.screen.addChild(e);
      e.$zF[1].centerAnchor();
      e.$zF[1].setXY(this.screenWidth / 2 + 15, this.screenHeight / 2 + 30);
      e.$zF[1].set_scissor(new Ca(0, 0, 0, 0));
      var k = new h(),
        b = new ba(d.loaderPack, "italicFont");
      k.add(new I(b));
      this.screen.addChild(k);
      r.instance(k.$zF[1], I).set_align(da.Center);
      r.instance(k.$zF[1], I).setXY(
        this.screenWidth / 2,
        this.screenHeight / 2 + 180
      );
      r.instance(k.$zF[1], I).set_text("0%");
      var b = new Wa(
          t.parse(d.configPack.getFile("config.xml").toString()).firstElement()
        ),
        l = new h();
      "YES" == b.node.resolve("showVersionNumber").get_innerData() &&
        ((c = new ba(d.loaderPack, "tinyfont")),
        l.add(new I(c)),
        this.screen.addChild(l),
        r.instance(l.$zF[1], I).set_align(da.Center),
        r
          .instance(l.$zF[1], I)
          .setXY(this.screenWidth - 20, this.screenHeight - 20),
        l.$zF[1].alpha.set__(0.5),
        g.alignRight(l),
        b.node.resolve("versionNumber").get_innerData() == this.version
          ? r
              .instance(l.$zF[1], I)
              .set_text("v" + b.node.resolve("versionNumber").get_innerData())
          : r.instance(l.$zF[1], I).set_text("version error"));
      this.onResize();
      "YES" == b.node.resolve("testLite").get_innerData() && (d.lite = !0);
      "YES" == b.node.resolve("testMobile").get_innerData() &&
        (d.isMobile = !0);
      b = "mainassets";
      d.lite && (b += "-lite");
      d.v2
        ? ((b = pa.fromAssets(b)),
          b.set_remoteBase(
            r.string(m.$vG.getExternal().call("jsembed.baseUrl")) + "assets/"
          ),
          (this.loader2 = m.$vG.loadAssetPack(b)))
        : (this.loader2 = m.loadAssetPack(pa.fromAssets(b)));
      this.loader2.success.connect(function (b) {
        d.pack = b;
        d.initFonts();
        if (d.preloaderClick) {
          e.dispose();
          l.dispose();
          b = new h();
          g.createImageSprite(
            a.screen,
            b,
            "blank",
            !0,
            a.screenWidth / 2,
            a.screenHeight / 2
          );
          b.$zF[1].set_pixelSnapping(!1);
          var c = new h();
          d.isMobile
            ? g.createXMLSprite(
                b,
                c,
                d.titleFont,
                "Center",
                0,
                0,
                d.translations.node.resolve("tapStart")
              )
            : g.createXMLSprite(
                b,
                c,
                d.titleFont,
                "Center",
                0,
                0,
                d.translations.node.resolve("clickStart")
              );
          g.pulseBtn(b, 1.05, 0.7);
          a.connect1(m.$vG.$GG.down, D(a, a.handlePointerDown));
        } else a.startGame();
      });
      this.loader2.catchError(function (a) {
        null;
      });
      this.loader2.progressChanged.connect(function () {
        var b = a.loader2.$eW / a.loader2.$fW;
        1 < b && (b = 1);
        e.$zF[1].set_scissor(new Ca(0, 0, 500, b * a.progressWidth));
        b = (100 * b) | 0;
        r.instance(k.$zF[1], I).set_text((null == b ? "null" : "" + b) + "%");
      });
    },
    startGame: function () {
      var a = this;
      if (!this.fading) {
        this.fading = !0;
        var b = new h().add(new Y(this.backgroundColour, 2e3, 2e3));
        this.screen.addChild(b);
        b.$zF[1].x.set__(-200);
        b.$zF[1].alpha.set__(0);
        b.$zF[1].alpha.animateTo(0.5, 0.3);
        b = new G();
        b.run(
          new H([
            new z(0.3),
            new x(function () {
              a.screen.dispose();
              d.loaderPack.dispose();
              m.root.add(new kd());
            }),
          ])
        );
        this.screen.add(b);
      }
    },
    handlePointerDown: function (a) {
      this.startGame();
    },
    onResize: function () {
      if (null != this.screen) {
        d.resizeScreen = !0;
        !d.isMobile &&
          667 != m.$vG.$IG.get_width() &&
          900 < m.$vG.$IG.get_width() &&
          (d.resizeScreen = !1);
        939 < m.$vG.$IG.get_width() &&
          1140 > m.$vG.$IG.get_width() &&
          (d.resizeScreen = !1);
        939 < m.$vG.$IG.get_height() &&
          1140 > m.$vG.$IG.get_height() &&
          (d.resizeScreen = !1);
        if (1336 < m.$vG.$IG.get_width() || 960 > m.$vG.$IG.get_width())
          d.resizeScreen = !0;
        2 < m.$vG.$IG.get_width() / m.$vG.$IG.get_height() &&
          (d.resizeScreen = !1);
        if (
          d.alwaysResize ||
          2048 < m.$vG.$IG.get_width() ||
          768 < m.$vG.$IG.get_height()
        )
          d.resizeScreen = !0;
        2048 == m.$vG.$IG.get_width() &&
          1536 >= m.$vG.$IG.get_height() &&
          ((d.staticWidth = r["int"](m.$vG.$IG.get_width() / 2)),
          (d.staticHeight = r["int"](m.$vG.$IG.get_height() / 2)));
        if (d.resizeScreen) {
          1920 == r["int"](m.$vG.$IG.get_width()) &&
            1120 == r["int"](m.$vG.$IG.get_height()) &&
            (d.staticHeight = 560);
          var a = d.staticWidth,
            b = d.staticHeight;
          d.scale = ha.min(
            m.$vG.$IG.get_width() / a,
            m.$vG.$IG.get_height() / b
          );
          this.screen.$zF[1]
            .setScale(d.scale)
            .setXY(
              (m.$vG.$IG.get_width() - a * d.scale) / 2,
              (m.$vG.$IG.get_height() - b * d.scale) / 2
            );
          m.$vG.$IG.get_width() > m.$vG.$IG.get_height()
            ? ((d.offsetX = r["int"](m.$vG.$IG.get_width() / d.scale - a)),
              (d.offsetY = r["int"](m.$vG.$IG.get_height() / d.scale - b)))
            : ((d.offsetX = r["int"](m.$vG.$IG.get_height() / d.scale - b)),
              (d.offsetY = r["int"](m.$vG.$IG.get_width() / d.scale - a)));
        } else (d.scale = 1), (d.offsetX = 0), (d.offsetY = 0);
      }
    },
    getScreenSize: function () {
      if (d.resizeScreen)
        (this.screenWidth = d.staticWidth),
          (this.screenHeight = d.staticHeight);
      else if (
        ((this.screenWidth = m.$vG.$IG.get_width()),
        (this.screenHeight = m.$vG.$IG.get_height()),
        this.screenHeight > this.screenWidth)
      ) {
        var a = this.screenWidth;
        this.screenWidth = this.screenHeight;
        this.screenHeight = a;
      }
    },
    __class__: vd,
  });
  var rd = function (a, b, c, e, g) {
    this.jumpTime = 0.65;
    this.jumpHeight = 180;
    this.walkSpeed = 800;
    this.health = this.maxHealth = 4;
    this.carRight = 1965;
    this.carLeft = 135;
    this.invincible = !1;
    this.active = !0;
    s.call(this);
    this.x = b | 0;
    this.y = c | 0;
    null != a && ((this.car = a), (this.track = this.car.$zF[29].track));
    this.leaveCar = e;
    this.landOnCar = g;
    "gwen" == d["char"] && ((this.carLeft -= 20), (this.carRight += 70));
  };
  l["project.Spiderman"] = rd;
  rd.__name__ = ["project", "Spiderman"];
  rd.__super__ = s;
  rd.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 28;
    },
    onAdded: function () {
      this.owner.add(new N(d.pack.getTexture("blank")));
      this.owner.$zF[1].centerAnchor();
      this.owner.$zF[1].setXY(this.x, this.y);
      this.shadow = new h().add(new S("game/" + d["char"], "shadow", 0, -5));
      this.owner.addChild(this.shadow);
      this.spidey = new h().add(new S("game/" + d["char"], "idle", 0, 0));
      this.owner.addChild(this.spidey);
      this.jumpEnt = new h();
      this.owner.addChild(this.jumpEnt);
      this.invEnt = new h();
      this.owner.addChild(this.invEnt);
      this.init();
    },
    init: function () {
      this.active = !0;
      this.attacking =
        this.hurting =
        this.jumping =
        this.walkRight =
        this.walkLeft =
          !1;
      this.facingRight = !0;
      this.fallen = !1;
    },
    onUpdate: function (a) {
      if (!this.walkRight || this.attacking || this.hurting)
        !this.walkLeft ||
          this.attacking ||
          this.hurting ||
          (this.owner.$zF[1].x.$bG < this.carLeft
            ? this.walk(M.LEFT, !1)
            : ((b = this.owner.$zF[1].x), b.set__(b.$bG - this.walkSpeed * a)));
      else if (this.owner.$zF[1].x.$bG > this.carRight) this.walk(M.RIGHT, !1);
      else {
        var b = this.owner.$zF[1].x;
        b.set__(b.$bG + this.walkSpeed * a);
      }
      !this.jumping &&
        0 < this.shadow.$zF[1].alpha.$bG &&
        (this.owner.$zF[1].x.$bG > this.carRight + 50
          ? this.fall(M.RIGHT) &&
            (this.leaveCar(!0, !0), this.shadow.$zF[1].alpha.set__(0))
          : this.owner.$zF[1].x.$bG < this.carLeft - 50 &&
            this.fall(M.LEFT) &&
            (this.leaveCar(!0, !0), this.shadow.$zF[1].alpha.set__(0)));
    },
    endGame: function () {
      this.walkRight = this.walkLeft = !1;
      this.jumping || this.spidey.$zF[17].loop("idle");
    },
    jumpUp: function () {
      var a = this;
      if (
        this.active &&
        !this.attacking &&
        !this.hurting &&
        !this.jumping &&
        1 < this.car.$zF[29].track
      ) {
        this.jumping = !0;
        this.attacking = !1;
        this.track = this.car.$zF[29].track - 1;
        this.spidey.$zF[17].play("jump", "idle");
        this.playSound("jump" + g.randomNumber(1, 2));
        this.playVo("VO_" + d["char"] + "_jump1_long");
        this.shadow.$zF[1].alpha.animateTo(0, 0.2);
        var b = 0.16;
        if (this.walkLeft || this.walkRight)
          this.spidey.$zF[17].gotoAndPlay(3), (b = 0);
        var c = new G();
        c.run(
          new H([
            new z(b),
            new x(function () {
              a.leaveCar(!0, !1);
              a.spidey.$zF[1].y.animateBy(
                -a.jumpHeight,
                a.jumpTime / 2,
                C.sineOut
              );
              a.owner.$zF[1].y.animateBy(-70, a.jumpTime / 2, C.sineInOut);
            }),
            new z(0.16),
            new x(function () {
              a.spidey.$zF[1].y.animateTo(0, a.jumpTime / 2, C.sineIn);
            }),
            new z(0.38),
            new x(function () {
              a.shadow.$zF[17].loop("shadow");
              a.shadow.$zF[1].alpha.animateTo(1, 0.3);
              a.landOnCar(a.track);
            }),
            new z(0.25),
            new x(function () {
              a.walkLeft || a.walkRight
                ? (a.spidey.$zF[17].loop("run"),
                  a.shadow.$zF[17].loop("shadow_run"),
                  (a.jumping = !1))
                : a.spidey.$zF[17].loop("idle");
            }),
            new z(0.16),
            new x(function () {
              a.jumping &&
                ((a.jumping = !1), a.walkLeft || a.walkRight) &&
                (a.spidey.$zF[17].loop("run"),
                a.shadow.$zF[17].loop("shadow_run"));
            }),
          ])
        );
        this.jumpEnt.add(c);
        return !0;
      }
      return !1;
    },
    jumpDown: function () {
      var a = this;
      if (
        this.active &&
        !this.attacking &&
        !this.hurting &&
        !this.jumping &&
        3 > this.car.$zF[29].track
      ) {
        this.jumping = !0;
        this.attacking = !1;
        this.track = this.car.$zF[29].track + 1;
        this.spidey.$zF[17].play("jump", "idle");
        this.playSound("jump" + g.randomNumber(1, 2));
        this.playVo("VO_" + d["char"] + "_jump1_long");
        this.shadow.$zF[1].alpha.animateTo(0, 0.2);
        var b = 0.16;
        if (this.walkLeft || this.walkRight)
          this.spidey.$zF[17].gotoAndPlay(3), (b = 0);
        var c = new G();
        c.run(
          new H([
            new z(b),
            new x(function () {
              a.leaveCar(!0, !1);
              a.spidey.$zF[1].y.animateBy(
                -a.jumpHeight,
                a.jumpTime / 2,
                C.sineOut
              );
              a.owner.$zF[1].y.animateBy(70, a.jumpTime / 2, C.sineInOut);
            }),
            new z(0.16),
            new x(function () {
              a.spidey.$zF[1].y.animateTo(0, a.jumpTime / 2, C.sineIn);
            }),
            new z(0.38),
            new x(function () {
              a.shadow.$zF[17].loop("shadow");
              a.shadow.$zF[1].alpha.animateTo(1, 0.3);
              a.landOnCar(a.track);
            }),
            new z(0.25),
            new x(function () {
              a.walkLeft || a.walkRight
                ? (a.spidey.$zF[17].loop("run"),
                  a.shadow.$zF[17].loop("shadow_run"),
                  (a.jumping = !1))
                : a.spidey.$zF[17].loop("idle");
            }),
            new z(0.16),
            new x(function () {
              a.jumping &&
                ((a.jumping = !1), a.walkLeft || a.walkRight) &&
                (a.spidey.$zF[17].loop("run"),
                a.shadow.$zF[17].loop("shadow_run"));
            }),
          ])
        );
        this.jumpEnt.add(c);
        return !0;
      }
      return !1;
    },
    hit: function (a) {
      var b = this;
      return !this.active || this.hurting || this.invincible
        ? !1
        : (this.health--,
          (this.hurting = !0),
          (this.walkRight = this.walkLeft = !1),
          this.shadow.$zF[17].loop("shadow"),
          this.playVo("VO_" + d["char"] + "_hit"),
          0 == this.health
            ? (this.spidey.$zF[17].play("hit", "idle"),
              (a = new G()),
              a.run(
                new H([
                  new z(0.4),
                  new x(function () {
                    b.spidey.$zF[17].play("die", "dead");
                    b.shadow.$zF[17].loop("shadow_dead");
                  }),
                ])
              ))
            : (this.spidey.$zF[17].play("hit", "idle"),
              this.shadow.$zF[17].loop("shadow"),
              (a = new G()),
              a.run(
                new H([
                  new z(0.5),
                  new x(function () {
                    b.hurting = !1;
                    b.invincible = !0;
                    b.spidey.$zF[1].alpha.animateTo(0.5, 0.25);
                  }),
                  new z(0.25),
                  new x(function () {
                    b.spidey.$zF[1].alpha.animateTo(1, 0.25);
                  }),
                  new z(0.25),
                  new x(function () {
                    b.spidey.$zF[1].alpha.animateTo(0.5, 0.25);
                  }),
                  new z(0.25),
                  new x(function () {
                    b.spidey.$zF[1].alpha.animateTo(1, 0.25);
                  }),
                  new z(0.25),
                  new x(function () {
                    b.spidey.$zF[1].alpha.animateTo(0.5, 0.25);
                  }),
                  new z(0.25),
                  new x(function () {
                    b.spidey.$zF[1].alpha.animateTo(1, 0.25);
                  }),
                  new z(0.25),
                  new x(function () {
                    b.invincible = !1;
                  }),
                ])
              )),
          this.owner.add(a),
          !0);
    },
    miss: function () {
      this.health--;
      null != this.spidey.$zF[11] && this.spidey.$zF[11].stopAll();
      this.spidey.$zF[17].loop("jumping");
      this.shadow.$zF[1].alpha.set__(0);
      this.spidey.$zF[1].y.animateBy(600, 0.5);
    },
    fall: function (a) {
      this.health--;
      this.landOnCar(99);
      return this.active
        ? ((this.active = !1),
          a == M.LEFT
            ? (this.spidey.$zF[1].rotation.animateBy(-60, 1, C.sineIn),
              this.spidey.$zF[1].y.animateBy(600, 1, C.sineIn))
            : a == M.RIGHT &&
              (this.spidey.$zF[1].rotation.animateBy(60, 1, C.sineIn),
              this.spidey.$zF[1].y.animateBy(600, 1, C.sineIn)),
          !0)
        : !1;
    },
    walk: function (a, b) {
      a == M.RIGHT
        ? (this.walkRight = b)
          ? (this.hurting || this.spidey.$zF[1].scaleX.set__(1),
            (this.facingRight = !0),
            (this.walkLeft = !1))
          : this.walkLeft &&
            (this.spidey.$zF[1].scaleX.set__(-1), (this.facingRight = !1))
        : a == M.LEFT &&
          ((this.walkLeft = b)
            ? (this.hurting || this.spidey.$zF[1].scaleX.set__(-1),
              (this.walkRight = this.facingRight = !1))
            : this.walkLeft &&
              (this.spidey.$zF[1].scaleX.set__(1), (this.facingRight = !0)));
      this.jumping ||
        this.attacking ||
        this.hurting ||
        (b
          ? (this.spidey.$zF[17].loop("run"),
            this.shadow.$zF[17].loop("shadow_run"))
          : this.walkLeft ||
            this.walkRight ||
            (this.spidey.$zF[17].loop("idle"),
            this.shadow.$zF[17].loop("shadow")));
    },
    healthPickup: function () {
      this.health++;
      this.health > this.maxHealth && (this.health = this.maxHealth);
    },
    playSound: function (a) {
      this.sfx = d.pack.getSound("audio/" + a).play();
    },
    playVo: function (a) {
      this.sfx = d.pack.getSound("vo/" + a).play();
    },
    __class__: rd,
  });
  var sd = function (a, b, c, d, e) {
    this.isLeft = this.isIdle = !0;
    this.jumpTime = 0.53;
    this.jumpDist = 625;
    s.call(this);
    this.x = a | 0;
    this.y = b | 0;
    this.left = c;
    this.right = d;
    this.callback = e;
  };
  l["project.Spiderman2"] = sd;
  sd.__name__ = ["project", "Spiderman2"];
  sd.__super__ = s;
  sd.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 21;
    },
    onAdded: function () {
      this.owner.add(new N(d.pack.getTexture("blank")));
      this.owner.$zF[1].centerAnchor();
      this.owner.$zF[1].setXY(this.x, this.y);
      this.spidey = new h().add(new S("game2/" + d["char"], "idle", 0, 0));
      this.owner.addChild(this.spidey);
    },
    hitOil: function () {
      var a = this;
      this.isIdle = !1;
      null != this.spidey.$zF[11] && this.spidey.$zF[11].stopAll();
      this.owner.$zF[1].y.animateBy(1e3, 3, C.sineIn);
      var b = new G();
      b.run(
        new H([
          new z(0.5),
          new x(function () {
            a.spidey.$zF[17].loop("sliding");
            a.playVo("VO_" + d["char"] + "_hit");
            a.owner.$zF[1].y.animateBy(1e3, 2, C.sineIn);
            a.isLeft
              ? (a.owner.$zF[1].x.animateBy(60, 2, C.sineIn),
                a.owner.$zF[1].rotation.animateBy(30, 2, C.sineIn))
              : (a.owner.$zF[1].x.animateBy(-60, 2, C.sineIn),
                a.owner.$zF[1].rotation.animateBy(-30, 2, C.sineIn));
          }),
          new z(2),
          new x(function () {
            a.callback("FALLEN");
          }),
        ])
      );
      this.spidey.add(b);
    },
    hitScaffold: function () {
      var a = this;
      this.isIdle = !1;
      null != this.spidey.$zF[11] && this.spidey.$zF[11].stopAll();
      this.spidey.$zF[17].play("fall", "falling");
      this.playVo("VO_" + d["char"] + "_hit");
      var b = new G();
      b.run(
        new H([
          new z(0.1),
          new x(function () {
            a.owner.$zF[1].y.animateBy(1300, 1.5, C.sineIn);
            a.isLeft
              ? a.owner.$zF[1].x.animateBy(60, 2, C.sineIn)
              : a.owner.$zF[1].x.animateBy(-60, 2, C.sineIn);
          }),
          new z(2),
          new x(function () {
            a.callback("FALLEN");
          }),
        ])
      );
      this.spidey.add(b);
    },
    fall: function (a) {
      null == a && (a = !1);
      null != this.spidey.$zF[11] && this.spidey.$zF[11].stopAll();
      a
        ? this.spidey.$zF[17].loop("jumping")
        : (this.spidey.$zF[17].play("fall", "falling"),
          this.owner.$zF[1].x.set__(this.owner.$zF[1].x.$bG));
      a
        ? this.owner.$zF[1].y.animateBy(1300, 1, C.sineIn)
        : this.owner.$zF[1].y.animateBy(1e3, 1.5, C.sineIn);
      this.playVo("VO_" + d["char"] + "_hit");
    },
    failJump: function (a) {
      var b = this;
      if (this.isIdle) {
        this.isIdle = !1;
        this.spidey.$zF[17].play("jump", "idle");
        this.playSound("jump" + g.randomNumber(1, 2));
        this.playVo("VO_" + d["char"] + "_jump1_long");
        var c = new G();
        c.run(
          new H([
            new z(0.1),
            new x(function () {
              b.isLeft
                ? (b.owner.$zF[1].x.animateBy(
                    b.jumpDist - 30,
                    b.jumpTime + 0.6,
                    C.sineOut
                  ),
                  (b.isLeft = !1))
                : (b.owner.$zF[1].x.animateBy(
                    -b.jumpDist + 30,
                    b.jumpTime + 0.6,
                    C.sineOut
                  ),
                  (b.isLeft = !0));
              b.owner.$zF[1].y.animateBy(a, b.jumpTime, C.sineIn);
            }),
            new z(this.jumpTime / 2),
            new x(function () {
              b.callback("JUMP");
            }),
            new z(this.jumpTime / 2 - 0.05),
            new x(function () {
              b.fall(!0);
            }),
          ])
        );
        this.spidey.add(c);
      }
    },
    jump: function (a) {
      var b = this;
      if (this.isIdle) {
        this.isIdle = !1;
        this.spidey.$zF[17].play("jump", "idle");
        this.playSound("jump" + g.randomNumber(1, 2));
        this.playVo("VO_" + d["char"] + "_jump1_long");
        var c = new G();
        c.run(
          new H([
            new z(0.1),
            new x(function () {
              b.isLeft
                ? (b.owner.$zF[1].x.animateBy(b.jumpDist, b.jumpTime),
                  (b.isLeft = !1))
                : (b.owner.$zF[1].x.animateBy(-b.jumpDist, b.jumpTime),
                  (b.isLeft = !0));
              100 > b.jumpDist
                ? b.owner.$zF[1].y.animateBy(-50, 0.5 * b.jumpTime, C.sineOut)
                : b.owner.$zF[1].y.animateBy(a, b.jumpTime, C.sineIn);
            }),
            new z(this.jumpTime / 2),
            new x(function () {
              b.callback("JUMP");
              100 > b.jumpDist &&
                b.owner.$zF[1].y.animateBy(a + 50, 0.5 * b.jumpTime, C.sineIn);
            }),
            new z(this.jumpTime / 2 - 0.05),
            new x(function () {
              b.callback("SCAFFOLD");
            }),
            new z(0.05),
            new x(function () {
              b.isLeft
                ? (b.spidey.$zF[1].scaleX.set__(1),
                  b.owner.$zF[1].x.set__(b.left))
                : (b.spidey.$zF[1].scaleX.set__(-1),
                  b.owner.$zF[1].x.set__(b.right));
              b.callback("LAND");
              b.callback("SCAFFOLD");
            }),
            new z(this.jumpTime),
            new x(function () {
              b.isIdle = !0;
              b.callback("READY");
            }),
          ])
        );
        this.spidey.add(c);
      }
    },
    playSound: function (a) {
      this.sfx = d.pack.getSound("audio/" + a).play();
    },
    playVo: function (a) {
      this.sfx = d.pack.getSound("vo/" + a).play();
    },
    __class__: sd,
  });
  var Mb = function (a, b, c) {
    this.active = !0;
    this.size = 50;
    s.call(this);
    this.x = b | 0;
    this.y = c | 0;
    switch (a) {
      case "targetLeft":
        this.type = "target";
        this.left = !0;
        break;
      case "targetRight":
        this.type = "target";
        this.left = !1;
        break;
      case "oilLeft":
        this.type = "oil";
        this.left = !0;
        break;
      case "oilRight":
        this.type = "oil";
        this.left = !1;
        break;
      case "scaffoldLeft":
        this.type = "scaffold";
        this.left = !0;
        break;
      case "scaffoldRight":
        (this.type = "scaffold"), (this.left = !1);
    }
  };
  l["project.Target"] = Mb;
  Mb.__name__ = ["project", "Target"];
  Mb.__super__ = s;
  Mb.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 24;
    },
    onAdded: function () {
      this.owner.add(new N(d.pack.getTexture("blank")));
      this.owner.$zF[1].centerAnchor();
      this.owner.$zF[1].setXY(this.x, this.y);
      this.owner.$zF[1].set_pixelSnapping(!1);
      "target" == this.type
        ? ((this.target = new h()),
          g.createImageSprite(
            this.owner,
            this.target,
            "game2/" + this.type,
            !0,
            0,
            0
          ),
          this.showArrow(!1))
        : "oil" == this.type
        ? ((this.size = 80),
          this.left
            ? ((this.target = new h().add(
                new S("game2/drain", "water", 15, 0)
              )),
              this.owner.addChild(this.target))
            : ((this.target = new h().add(
                new S("game2/drain", "water", -15, 0)
              )),
              this.owner.addChild(this.target),
              this.target.$zF[1].scaleX.set__(-1)))
        : "scaffold" == this.type &&
          ((this.target = new h()),
          g.createImageSprite(
            this.owner,
            this.target,
            "game2/scaffold",
            !0,
            0,
            0
          ),
          this.left
            ? g.createImageSprite(
                this.owner,
                this.target,
                "game2/scaffold",
                !0,
                -110,
                0
              )
            : (g.createImageSprite(
                this.owner,
                this.target,
                "game2/scaffold",
                !0,
                110,
                0
              ),
              this.target.$zF[1].scaleX.set__(-1)));
    },
    showArrow: function (a) {},
    hit: function () {
      var a = this;
      if (this.active) {
        this.active = !1;
        if ("target" == this.type) {
          this.target.$zF[1].alpha.animateTo(0, 0.5);
          var b = new h();
          g.createImageSprite(this.owner, b, "game2/targetWhite", !0, 0, 0);
          b.$zF[1].alpha.set__(0);
          b.$zF[1].alpha.animateTo(1, 0.2);
          var c = new h().add(new S("game2/targetBurst", "blank", 0, 0));
          this.owner.addChild(c);
          c.$zF[17].play("burst", "blank");
          c = new G();
          c.run(
            new H([
              new z(0.3),
              new x(function () {
                a.target.$zF[1].set_visible(!1);
                b.$zF[1].alpha.animateTo(0, 1);
              }),
            ])
          );
          b.add(c);
          null != this.arrow && this.arrow.$zF[1].alpha.animateTo(0, 0.3);
        }
        return !0;
      }
      return !1;
    },
    __class__: Mb,
  });
  var g = function () {};
  l["project.Utils"] = g;
  g.__name__ = ["project", "Utils"];
  g.randomNumber = function (a, b) {
    return Math.round(Math.random() * (b - a) + a);
  };
  g.randomNumberFloat = function (a, b) {
    return Math.random() * (b - a) + a;
  };
  g.coinFlip = function () {
    return 51 > g.randomNumber(1, 100) ? !0 : !1;
  };
  g.vectorDistance = function (a, b, c, d) {
    return Math.sqrt(Math.pow(a - b, 2) + Math.pow(c - d, 2));
  };
  g.addDebugSpeedAdjuster = function (a) {
    null == a.$zF[9] && a.add(new $a(1));
    return m.$vG.getKeyboard().down.connect(function (b) {
      var c = a.$zF[9];
      b.key == e.LeftBracket
        ? ((b = c.scale), b.set__(b.$bG / 1.61803398875), null)
        : b.key == e.RightBracket &&
          ((b = c.scale), b.set__(1.61803398875 * b.$bG), null);
    });
  };
  g.createImageSprite = function (a, b, c, e, g, h, l, m) {
    null == m && (m = 1);
    null == l && (l = "MAIN");
    if (null != l)
      switch (l) {
        case "GAME":
          b.add(new N(d.gamePack.getTexture(c)));
          break;
        case "LOADER":
          b.add(new N(d.loaderPack.getTexture(c)));
          break;
        default:
          b.add(new N(d.pack.getTexture(c)));
      }
    else b.add(new N(d.pack.getTexture(c)));
    a.addChild(b);
    e && b.$zF[1].centerAnchor();
    b.$zF[1].x.set__(g);
    b.$zF[1].y.set__(h);
    d.lite &&
      (80 == m ? b.$zF[1].setScale(1.25) : 50 == m && b.$zF[1].setScale(2));
  };
  g.createFillSprite = function (a, b, c, d, e, g, h, l, m) {
    b.add(new Y(c, h, l));
    a.addChild(b);
    d && b.$zF[1].centerAnchor();
    b.$zF[1].x.set__(e);
    b.$zF[1].y.set__(g);
    b.$zF[1].alpha.set__(m);
  };
  g.createTextSprite = function (a, b, c, d, e, g, h, l) {
    b.add(new I(c));
    a.addChild(b);
    "Left" == d
      ? r.instance(b.$zF[1], I).set_align(da.Left)
      : "Right" == d
      ? r.instance(b.$zF[1], I).set_align(da.Right)
      : r.instance(b.$zF[1], I).set_align(da.Center);
    r.instance(b.$zF[1], I).x.set__(e);
    r.instance(b.$zF[1], I).y.set__(g);
    r.instance(b.$zF[1], I).set_text(h);
    null != l &&
      ((a = r.instance(b.$zF[1], I).x),
      a.set__(a.$bG + r.parseInt(l.att.resolve("offsetX"))),
      (a = r.instance(b.$zF[1], I).y),
      a.set__(a.$bG + r.parseInt(l.att.resolve("offsetY"))),
      r
        .instance(b.$zF[1], I)
        .setScale(r.parseFloat(l.att.resolve("fontScale"))));
  };
  g.createXMLSprite = function (a, b, c, d, e, g, h) {
    b.add(new I(c));
    a.addChild(b);
    "Left" == d
      ? r.instance(b.$zF[1], I).set_align(da.Left)
      : "Right" == d
      ? r.instance(b.$zF[1], I).set_align(da.Right)
      : r.instance(b.$zF[1], I).set_align(da.Center);
    r.instance(b.$zF[1], I).x.set__(e);
    r.instance(b.$zF[1], I).y.set__(g);
    r.instance(b.$zF[1], I).set_text(h.get_innerData());
    a = r.instance(b.$zF[1], I).x;
    a.set__(a.$bG + r.parseInt(h.att.resolve("offsetX")));
    a = r.instance(b.$zF[1], I).y;
    a.set__(a.$bG + r.parseInt(h.att.resolve("offsetY")));
    r.instance(b.$zF[1], I).setScale(r.parseFloat(h.att.resolve("fontScale")));
  };
  g.rolloverImage = function (a, b, c, e) {
    d.isMobile ||
      (e.hit == a.$zF[1]
        ? ((r.instance(a.$zF[1], N).texture = d.pack.getTexture(c)),
          m.$vG.$FG.set_cursor(ea.Button))
        : ((r.instance(a.$zF[1], N).texture = d.pack.getTexture(b)),
          m.$vG.$FG.set_cursor(ea.Default)));
  };
  g.pulseBtn = function (a, b, c) {
    a.$zF[1].set_pixelSnapping(!1);
    var d = [];
    d.push(new ca(a.$zF[1].scaleX, b, c));
    d.push(new ca(a.$zF[1].scaleY, b, c));
    b = [];
    b.push(new ca(a.$zF[1].scaleX, 1, c));
    b.push(new ca(a.$zF[1].scaleY, 1, c));
    c = new G();
    c.run(new ua(new H([new Ib(d), new Ib(b)])));
    a.add(c);
  };
  g.pulseUpDown = function (a, b, c) {
    a.$zF[1].set_pixelSnapping(!1);
    var d = a.$zF[1].y.$bG,
      e = new G();
    e.run(
      new ua(
        new H([
          new ca(a.$zF[1].y, d + b, c, C.sineInOut),
          new ca(a.$zF[1].y, d, c, C.sineInOut),
        ])
      )
    );
    a.add(e);
  };
  g.mute = function (a) {
    a
      ? ((d.muted = !0), m.volume.set__(0))
      : ((d.muted = !1), m.volume.set__(1));
  };
  g.alignLeft = function (a) {
    d.resizeScreen && ((a = a.$zF[1].x), a.set__(a.$bG - d.offsetX / 2));
  };
  g.alignRight = function (a) {
    d.resizeScreen && ((a = a.$zF[1].x), a.set__(a.$bG + d.offsetX / 2));
  };
  g.detectLowEndDevice = function () {
    var a = window.navigator.userAgent.toLowerCase();
    if (
      -1 != a.indexOf("ipod") ||
      -1 != a.indexOf("iphone") ||
      -1 != a.indexOf("ipad")
    ) {
      var a = window.screen.width * window.devicePixelRatio,
        b = window.screen.height * window.devicePixelRatio;
      if ((1024 == a && 768 == b) || (768 == a && 1024 == b)) d.lite = !0;
    }
    navigator.isCocoonJS
      ? ((d.nickApp = !0), d.liteAssetsInApp && (d.lite = !0))
      : null;
    d.lite || null;
  };
  g.__super__ = s;
  g.prototype = v(s.prototype, {
    get_entitySlot: function () {
      return 12;
    },
    __class__: g,
  });
  var Me = function () {};
  l["spine.Updatable"] = Me;
  Me.__name__ = ["spine", "Updatable"];
  var oe = function () {};
  l["spine.Bone"] = oe;
  oe.__name__ = ["spine", "Bone"];
  oe.__interfaces__ = [Me];
  oe.prototype = {
    __class__: oe,
  };
  var Be = function () {};
  l["spine.BoneData"] = Be;
  Be.__name__ = ["spine", "BoneData"];
  Be.prototype = {
    __class__: Be,
  };
  var Re = function () {};
  l["spine.EventData"] = Re;
  Re.__name__ = ["spine", "EventData"];
  var Ce = function () {};
  l["spine.IkConstraintData"] = Ce;
  Ce.__name__ = ["spine", "IkConstraintData"];
  Ce.prototype = {
    __class__: Ce,
  };
  var De = function () {};
  l["spine.PathConstraintData"] = De;
  De.__name__ = ["spine", "PathConstraintData"];
  De.prototype = {
    __class__: De,
  };
  var Ee = function () {};
  l["spine.Skeleton"] = Ee;
  Ee.__name__ = ["spine", "Skeleton"];
  Ee.prototype = {
    __class__: Ee,
  };
  var Se = function () {};
  l["spine.SkeletonData"] = Se;
  Se.__name__ = ["spine", "SkeletonData"];
  var Te = function () {};
  l["spine.Skin"] = Te;
  Te.__name__ = ["spine", "Skin"];
  var Fe = function () {};
  l["spine.SlotData"] = Fe;
  Fe.__name__ = ["spine", "SlotData"];
  Fe.prototype = {
    __class__: Fe,
  };
  var Ge = function () {};
  l["spine.TransformConstraintData"] = Ge;
  Ge.__name__ = ["spine", "TransformConstraintData"];
  Ge.prototype = {
    __class__: Ge,
  };
  var He = function () {};
  l["spine.attachments.Attachment"] = He;
  He.__name__ = ["spine", "attachments", "Attachment"];
  var Nb = function () {};
  l["spine.attachments.VertexAttachment"] = Nb;
  Nb.__name__ = ["spine", "attachments", "VertexAttachment"];
  Nb.__super__ = He;
  Nb.prototype = v(He.prototype, {
    __class__: Nb,
  });
  var pe = function () {};
  l["spine.attachments.MeshAttachment"] = pe;
  pe.__name__ = ["spine", "attachments", "MeshAttachment"];
  pe.__super__ = Nb;
  pe.prototype = v(Nb.prototype, {
    __class__: pe,
  });
  var Le,
    Ue = 0;
  l.Math = Math;
  String.prototype.__class__ = l.String = String;
  String.__name__ = ["String"];
  l.Array = Array;
  Array.__name__ = ["Array"];
  Date.prototype.__class__ = l.Date = Date;
  Date.__name__ = ["Date"];
  var Ve = (l.Int = {
      __name__: ["Int"],
    }),
    We = (l.Dynamic = {
      __name__: ["Dynamic"],
    }),
    Pe = (l.Float = Number);
  Pe.__name__ = ["Float"];
  var Qe = (l.Bool = Boolean);
  Qe.__ename__ = ["Bool"];
  var Ne = (l.Class = {
      __name__: ["Class"],
    }),
    Oe = {},
    Sa = {},
    qe = Ie.ArrayBuffer || Ga;
  null == qe.prototype.slice && (qe.prototype.slice = Ga.sliceImpl);
  var Ke = Ie.Uint8Array || Ta._new;
  t.Element = 0;
  t.PCData = 1;
  t.CData = 2;
  t.Comment = 3;
  t.DocType = 4;
  t.ProcessingInstruction = 5;
  t.Document = 6;
  U.gameName = "NICK_SPIDERVERSE_";
  La.USE_CACHE = !1;
  La.USE_ENUM_INDEX = !1;
  La.BASE64 =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
  na.DEFAULT_RESOLVER = aa;
  na.BASE64 =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
  Ma.count = 0;
  Fa.i64tmp = new yd(0, 0);
  Ra.escapes = (function (a) {
    a = new X();
    null != Sa.lt ? a.setReserved("lt", "<") : (a.h.lt = "<");
    null != Sa.gt ? a.setReserved("gt", ">") : (a.h.gt = ">");
    null != Sa.amp ? a.setReserved("amp", "&") : (a.h.amp = "&");
    null != Sa.quot ? a.setReserved("quot", '"') : (a.h.quot = '"');
    null != Sa.apos ? a.setReserved("apos", "'") : (a.h.apos = "'");
    return a;
  })(this);
  K.__toStr = {}.toString;
  Ta.BYTES_PER_ELEMENT = 1;
  h.$_F = new Fd();
  xa.$ZG = new xa();
  ga.$qG = new eb(null, null);
  m.root = new h();
  m.uncaughtError = new R();
  m.lowMemoryWarning = new Ya();
  m.hidden = new fa(!1);
  m.volume = new O(1);
  m.$vG = xa.$ZG;
  pa.$VH = (function () {
    var a = null != new XMLHttpRequest().withCredentials;
    a || null;
    return a;
  })();
  w.$OI = new ab();
  w.$PI = new ta();
  w.$QI = new cc();
  ba.$lJ = new Jc(10);
  Ba.$LN = new Pd();
  qa.$LN = new Qd();
  ka.$LN = new Rd();
  la.__meta__ = {
    obj: {
      injected: [
        {
          scenes: {},
          height: 720,
          id: "com.artofplaygames.spiderman",
          orientation: "landscape",
          fullscreen: !0,
          assets: {
            preloader: [
              {
                bytes: 36521,
                md5: "LADTP5Nz6eUgp-IkcksKkw",
                name: "header.png",
              },
              {
                bytes: 34778,
                md5: "yL4Uv6KbQJrwvlb-zfo-hw",
                name: "header.webp",
              },
              {
                bytes: 29777,
                md5: "EVLlscJeVyhGhe5lK8Ejkw",
                name: "italicFont.fnt",
              },
              {
                bytes: 21141,
                md5: "jWkimi8gKyIeUS9ke9JHlg",
                name: "italicFont.png",
              },
              {
                bytes: 20568,
                md5: "9Iz5SpfoBECSybKy5g4DPw",
                name: "italicFont.webp",
              },
              {
                bytes: 4846,
                md5: "2FLU554vxaq8xW9X-r2FPA",
                name: "loader_icon.png",
              },
              {
                bytes: 5468,
                md5: "9X1QLvpNeYXSjVLXBsrUJg",
                name: "loader_icon.webp",
              },
              {
                bytes: 8557,
                md5: "cnaiv6I1oQFsVFHnOnSorw",
                name: "smlogo.png",
              },
              {
                bytes: 486228,
                md5: "PeIIRrax381gOtSgwScacw",
                name: "background.webp",
              },
              {
                bytes: 537764,
                md5: "2ozJib5c07pO3rxguvMI1w",
                name: "background.png",
              },
              {
                bytes: 8218,
                md5: "85VPd-k9g4Jr52LX04F66A",
                name: "smlogo.webp",
              },
              {
                bytes: 22499,
                md5: "t4Nsuf4LOtGbOTvpQ-qOqQ",
                name: "tinyfont.fnt",
              },
              {
                bytes: 11487,
                md5: "61oZzFJfHO1w104tYcx9sQ",
                name: "tinyfont.png",
              },
              {
                bytes: 10532,
                md5: "F1dyobbw45Kr8RGO4_YyGA",
                name: "tinyfont.webp",
              },
            ],
            mainassets: [
              {
                bytes: 124,
                md5: "lERae41wljnn3hJhgZyisw",
                name: "blank.png",
              },
              {
                bytes: 36,
                md5: "saOIGBG_-s-0iqesdulomA",
                name: "blank.webp",
              },
              {
                bytes: 212,
                md5: "efnJE0YTyqDSRHKIH0nvYw",
                name: "blankScreen.png",
              },
              {
                bytes: 68,
                md5: "06QmJvt0uewc4sZ6NkWGaA",
                name: "blankScreen.webp",
              },
              {
                bytes: 1251,
                md5: "kcy6HqELfTANuIpmdEBqWg",
                name: "audio/blank.mp3",
              },
              {
                bytes: 4598,
                md5: "t18qHmgh6zzhE6Bnv8IDmw",
                name: "audio/blank.ogg",
              },
              {
                bytes: 3760,
                md5: "l86NPUnC_Z774TgaWCt2eA",
                name: "audio/click.mp3",
              },
              {
                bytes: 5649,
                md5: "P8hQctAUq-cHd-Nroi0DPA",
                name: "audio/click.ogg",
              },
              {
                bytes: 16574,
                md5: "HC5dwpWoVKh5rjIoMkPJ7Q",
                name: "audio/explode.mp3",
              },
              {
                bytes: 15488,
                md5: "Qk-qedHD82c_yHgS29lVLg",
                name: "audio/explode.ogg",
              },
              {
                bytes: 137664,
                md5: "TylTmpR5u8eKSoazp5Vx7w",
                name: "audio/Spiderman_ITSV_TitleMenu_v1.ogg",
              },
              {
                bytes: 243383,
                md5: "UJ2yyJ2_AhcZ-VtX0nGd3w",
                name: "audio/Spiderman_ITSV_JumpingGameplay_v1.ogg",
              },
              {
                bytes: 250992,
                md5: "f7aM_O4MUy8ZZ8ekEE09vw",
                name: "audio/Spiderman_ITSV_SubwayGameplay_v1.ogg",
              },
              {
                bytes: 420675,
                md5: "piOIM7DwOt5_VnS4M8FfYA",
                name: "audio/Spiderman_ITSV_TitleMenu_v1.mp3",
              },
              {
                bytes: 8130,
                md5: "HSJPHy_N8oyfJhp-bDEWDA",
                name: "audio/jump1.mp3",
              },
              {
                bytes: 9633,
                md5: "YCQnyQhR6oV0_X_ykrg9qA",
                name: "audio/jump1.ogg",
              },
              {
                bytes: 7771,
                md5: "dGZl2Xy5rCnSd5WxY8OJ2Q",
                name: "audio/jump2.mp3",
              },
              {
                bytes: 8968,
                md5: "xVgGZVlSiZAizc0ghr1glQ",
                name: "audio/jump2.ogg",
              },
              {
                bytes: 40554,
                md5: "9R5grAbLHHukVwoH7RC2_w",
                name: "audio/jump_powerbar.mp3",
              },
              {
                bytes: 30298,
                md5: "lNdP6PwJuqJa1Mob6IUiVw",
                name: "audio/jump_powerbar.ogg",
              },
              {
                bytes: 106987,
                md5: "bUMFvngfc4UXij8ynQU--Q",
                name: "audio/multiple.ogg",
              },
              {
                bytes: 4292,
                md5: "4KLmPgxOrnMHA04UWDtdfA",
                name: "audio/pickup.mp3",
              },
              {
                bytes: 6550,
                md5: "mwkhLHZvlDL7WLCK8N1ixQ",
                name: "audio/pickup.ogg",
              },
              {
                bytes: 143004,
                md5: "4Nt_6-15inTq1xq_UHucYQ",
                name: "audio/multiple.mp3",
              },
              {
                bytes: 757341,
                md5: "gyVlbx2DvGLD_kcpPgKTMA",
                name: "audio/Spiderman_ITSV_JumpingGameplay_v1.mp3",
              },
              {
                bytes: 769879,
                md5: "UKcaSwiU8f2KZ1aN8daBzA",
                name: "audio/Spiderman_ITSV_SubwayGameplay_v1.mp3",
              },
              {
                bytes: 2036,
                md5: "SiykWFxTJ5r8NWh23ygSzQ",
                name: "buttons/BTN_audioOFF.png",
              },
              {
                bytes: 1894,
                md5: "8GLHYA1gcZ-BRJ3LcrU8aw",
                name: "buttons/BTN_audioOFF.webp",
              },
              {
                bytes: 2037,
                md5: "5OI4I5Z8Xu4QHTBMNc1tOw",
                name: "buttons/BTN_audioOFF_rollover.png",
              },
              {
                bytes: 229168,
                md5: "GREZPDz2v7zyXP4IvmN0uA",
                name: "audio/subway_train_loop.ogg",
              },
              {
                bytes: 291050,
                md5: "TD3sCOp4sHQpXtx4e86Z9A",
                name: "audio/subway_train_loop.mp3",
              },
              {
                bytes: 1882,
                md5: "DRJrIDdgL3WWgiDJr7EiOw",
                name: "buttons/BTN_audioOFF_rollover.webp",
              },
              {
                bytes: 2053,
                md5: "M978js13P0yvlev2-TNGZg",
                name: "buttons/BTN_audioON.png",
              },
              {
                bytes: 1910,
                md5: "xua5o5X3gWEMGYSTO09f2g",
                name: "buttons/BTN_audioON.webp",
              },
              {
                bytes: 2053,
                md5: "LKl5uHemBjrudDBYc-UGvg",
                name: "buttons/BTN_audioON_rollover.png",
              },
              {
                bytes: 1904,
                md5: "bcCR3TR6FPCW42uRh0CNXQ",
                name: "buttons/BTN_audioON_rollover.webp",
              },
              {
                bytes: 2307,
                md5: "nlLHDHCh4u5c7p2l_kMPyQ",
                name: "buttons/BTN_audio_OFF.png",
              },
              {
                bytes: 2152,
                md5: "vZ7_qb2e-hbZqHPloaftiQ",
                name: "buttons/BTN_audio_OFF.webp",
              },
              {
                bytes: 2307,
                md5: "mosPh7aCkCH6drDyx0tvKw",
                name: "buttons/BTN_audio_OFF_rollover.png",
              },
              {
                bytes: 2146,
                md5: "TFGUdlP8Qr_CmW17wtNK2w",
                name: "buttons/BTN_audio_OFF_rollover.webp",
              },
              {
                bytes: 2332,
                md5: "DiwXDrfgArJPJ71b6tyonA",
                name: "buttons/BTN_audio_ON.png",
              },
              {
                bytes: 2172,
                md5: "mhPBMJa4Oh1tdggFX-yrCQ",
                name: "buttons/BTN_audio_ON.webp",
              },
              {
                bytes: 662915,
                md5: "-uvDw_zZDhJCjqUm5CA9Pg",
                name: "audio/nyc_ambience.ogg",
              },
              {
                bytes: 2332,
                md5: "Qv4j7GTUSVOXdq04FeQDUg",
                name: "buttons/BTN_audio_ON_rollover.png",
              },
              {
                bytes: 2164,
                md5: "_IIVgzdkjl_hmIaJCsAzbg",
                name: "buttons/BTN_audio_ON_rollover.webp",
              },
              {
                bytes: 1996,
                md5: "IXR7k00_yYm5X40l-FvBAA",
                name: "buttons/BTN_back.png",
              },
              {
                bytes: 1844,
                md5: "LzzjZqiYnzltPVtbLLw-7g",
                name: "buttons/BTN_back.webp",
              },
              {
                bytes: 1996,
                md5: "EzOX_hzYPSqaeRcAPsWCQQ",
                name: "buttons/BTN_back_rollover.png",
              },
              {
                bytes: 826373,
                md5: "ixtkyaCNX-gBqWNf6r6yJg",
                name: "audio/nyc_ambience.mp3",
              },
              {
                bytes: 1842,
                md5: "0-6F0Na2fGfYHClxbljpdw",
                name: "buttons/BTN_back_rollover.webp",
              },
              {
                bytes: 2104,
                md5: "60bj0P7Y6LlpSvUsbxI9vA",
                name: "buttons/BTN_close.png",
              },
              {
                bytes: 1948,
                md5: "0VaB2OJSAD_o-ZpcRyi8sQ",
                name: "buttons/BTN_close.webp",
              },
              {
                bytes: 2104,
                md5: "XKYbYAp0WV27-6YrWe-lXQ",
                name: "buttons/BTN_close_rollover.png",
              },
              {
                bytes: 1946,
                md5: "FTXCIfzLpCg-rRAqh-E10g",
                name: "buttons/BTN_close_rollover.webp",
              },
              {
                bytes: 2021,
                md5: "1kwmuEbdTMKmhNvAGk0zFg",
                name: "buttons/BTN_help.png",
              },
              {
                bytes: 1884,
                md5: "mrz5zGRBKsSzA66fOtFVrg",
                name: "buttons/BTN_help.webp",
              },
              {
                bytes: 2021,
                md5: "-R7HrL_ONv1L50q5F4au5w",
                name: "buttons/BTN_help_rollover.png",
              },
              {
                bytes: 1884,
                md5: "1OQ8Zj8zcTceTc4lQrtK7A",
                name: "buttons/BTN_help_rollover.webp",
              },
              {
                bytes: 2134,
                md5: "u94R5kxZ5fI8tI063YVE2A",
                name: "buttons/BTN_home.png",
              },
              {
                bytes: 1992,
                md5: "2BlGbLLrE2PA6EedUXlGQQ",
                name: "buttons/BTN_home.webp",
              },
              {
                bytes: 2133,
                md5: "FJkzyra5SeANvcSpPnlYkA",
                name: "buttons/BTN_home_rollover.png",
              },
              {
                bytes: 1986,
                md5: "XqmCOQOYJmAHe4LOFRynQA",
                name: "buttons/BTN_home_rollover.webp",
              },
              {
                bytes: 1922,
                md5: "bQjXDZlpjVjqcyUDaxeABw",
                name: "buttons/BTN_next.png",
              },
              {
                bytes: 1764,
                md5: "LVsdvLMSsfg5zHG2hqLYrg",
                name: "buttons/BTN_next.webp",
              },
              {
                bytes: 1921,
                md5: "j8GqOsPXMTt3pImsaEq5jg",
                name: "buttons/BTN_next_rollover.png",
              },
              {
                bytes: 1762,
                md5: "cNcUkSJNO6lSALjPu_KIEQ",
                name: "buttons/BTN_next_rollover.webp",
              },
              {
                bytes: 1728,
                md5: "tajo1nLAOrnWpdRMpjjQlA",
                name: "buttons/BTN_pause.png",
              },
              {
                bytes: 1612,
                md5: "pVXLmvnQExH8CxSCb_5GBA",
                name: "buttons/BTN_pause.webp",
              },
              {
                bytes: 1728,
                md5: "piiAe51TDwyO1XpsCmbyqQ",
                name: "buttons/BTN_pause_rollover.png",
              },
              {
                bytes: 1610,
                md5: "JAyet12FDddSyEEZ-sEYJg",
                name: "buttons/BTN_pause_rollover.webp",
              },
              {
                bytes: 1873,
                md5: "yobCMzG9AzoruglJs-e_tg",
                name: "buttons/BTN_play.png",
              },
              {
                bytes: 1718,
                md5: "yTgjkc5NPMt_7S1kvQJlIg",
                name: "buttons/BTN_play.webp",
              },
              {
                bytes: 1873,
                md5: "ioZfWS-nNQaFP5HWP3JPkw",
                name: "buttons/BTN_play_rollover.png",
              },
              {
                bytes: 1714,
                md5: "Uovn-1QvCXtWc67DZbKPkQ",
                name: "buttons/BTN_play_rollover.webp",
              },
              {
                bytes: 2456,
                md5: "4sc2edUiW9bfpGzob3g_jA",
                name: "buttons/BTN_replay.png",
              },
              {
                bytes: 2310,
                md5: "WoCudvDyh0Rk028_p9Zdng",
                name: "buttons/BTN_replay.webp",
              },
              {
                bytes: 2455,
                md5: "US1MaBUbCZLOfYvFJdKFxA",
                name: "buttons/BTN_replay_rollover.png",
              },
              {
                bytes: 2312,
                md5: "byTdVckbE_9NMOmH8wENNw",
                name: "buttons/BTN_replay_rollover.webp",
              },
              {
                bytes: 1996,
                md5: "eRXevW_YYdoB61dn72uPrQ",
                name: "buttons/BTN_tick.png",
              },
              {
                bytes: 1854,
                md5: "_T8U3BkOosKrVwN1g37okQ",
                name: "buttons/BTN_tick.webp",
              },
              {
                bytes: 1995,
                md5: "s8tjMCpMwqozJCPJu3NV1A",
                name: "buttons/BTN_tick_rollover.png",
              },
              {
                bytes: 1850,
                md5: "cnS9bwlPimxw6QoqjE_rDg",
                name: "buttons/BTN_tick_rollover.webp",
              },
              {
                bytes: 57487,
                md5: "32CnYKOWCiQ8kY-tXGWQjQ",
                name: "fonts/blackFont.fnt",
              },
              {
                bytes: 34121,
                md5: "Q9M6ANHjM8yfdCZhRZxtLA",
                name: "fonts/blackFont.png",
              },
              {
                bytes: 33674,
                md5: "s0Iebg86--2mY_Y28h3WFg",
                name: "fonts/blackFont.webp",
              },
              {
                bytes: 35948,
                md5: "VmZ_j1ZicooEKA9Nr_-dJA",
                name: "fonts/blackItalicFont.png",
              },
              {
                bytes: 32854,
                md5: "yc8mpAcnoUMGIsTpkrTcRQ",
                name: "fonts/blackItalicFont.webp",
              },
              {
                bytes: 68050,
                md5: "u8vF8DGMlMOQiEL8xJtwfw",
                name: "fonts/blackItalicFont.fnt",
              },
              {
                bytes: 37367,
                md5: "y3QIMpX-9SEdQ5P8AHTCLQ",
                name: "fonts/helpFont.png",
              },
              {
                bytes: 90313,
                md5: "8nKfc0TUYf89dlzL1yN1fA",
                name: "fonts/helpFont.fnt",
              },
              {
                bytes: 33622,
                md5: "eglw0KyUE4SMYCSuH5nehQ",
                name: "fonts/helpFont.webp",
              },
              {
                bytes: 1922,
                md5: "C23nlSLWERrDiJbKSCT0cw",
                name: "fonts/hudFont.fnt",
              },
              {
                bytes: 3818,
                md5: "_myX3v_Y4xry4cqddTEwMg",
                name: "fonts/hudFont.png",
              },
              {
                bytes: 3462,
                md5: "P-n-FrJJvtSj2qw3ILKjWw",
                name: "fonts/hudFont.webp",
              },
              {
                bytes: 29777,
                md5: "EVLlscJeVyhGhe5lK8Ejkw",
                name: "fonts/italicFont.fnt",
              },
              {
                bytes: 21141,
                md5: "jWkimi8gKyIeUS9ke9JHlg",
                name: "fonts/italicFont.png",
              },
              {
                bytes: 20568,
                md5: "9Iz5SpfoBECSybKy5g4DPw",
                name: "fonts/italicFont.webp",
              },
              {
                bytes: 29776,
                md5: "LF1VzG72X4AWij0oTNzS3A",
                name: "fonts/smallFont.fnt",
              },
              {
                bytes: 19332,
                md5: "1zUEzy1UYz21w82yiRTVSA",
                name: "fonts/smallFont.png",
              },
              {
                bytes: 18162,
                md5: "4B6XhMoGskD95enUjDqq-w",
                name: "fonts/smallFont.webp",
              },
              {
                bytes: 22499,
                md5: "t4Nsuf4LOtGbOTvpQ-qOqQ",
                name: "fonts/tinyfont.fnt",
              },
              {
                bytes: 11487,
                md5: "61oZzFJfHO1w104tYcx9sQ",
                name: "fonts/tinyfont.png",
              },
              {
                bytes: 10532,
                md5: "F1dyobbw45Kr8RGO4_YyGA",
                name: "fonts/tinyfont.webp",
              },
              {
                bytes: 54211,
                md5: "6clw-VlzKVOqX3N3Oe0Myw",
                name: "fonts/titleFont.png",
              },
              {
                bytes: 48544,
                md5: "ErLmZmolo4XrZaa9LbZGjQ",
                name: "fonts/titleFont.webp",
              },
              {
                bytes: 67431,
                md5: "-X0timqfCvlHHQVEhf01qQ",
                name: "fonts/titleFont.fnt",
              },
              {
                bytes: 117111,
                md5: "MHic21BS7rPsHS5ISXD1jg",
                name: "game/bg_back_layer.png",
              },
              {
                bytes: 109866,
                md5: "NGNv4H2klwjxkCmsy0Uf4Q",
                name: "game/bg_back_layer.webp",
              },
              {
                bytes: 7080,
                md5: "M85tu37wYl9bJoCqvPsk5w",
                name: "game/carriage_divide_gradient.png",
              },
              {
                bytes: 5074,
                md5: "SNP7aqSwn9XakCF-BMchIw",
                name: "game/carriage_divide_gradient.webp",
              },
              {
                bytes: 238846,
                md5: "Q1pPDiSGqrZcT3gagqEV9g",
                name: "game/bg_tunnel.webp",
              },
              {
                bytes: 269657,
                md5: "0bgrNHd1W2oshwDQSbutEg",
                name: "game/bg_tunnel.png",
              },
              {
                bytes: 948,
                md5: "zdr52h1wdrQJZpjO75YdyQ",
                name: "game/down.png",
              },
              {
                bytes: 638,
                md5: "57CDbsdD1xx8Un3TPP47Bw",
                name: "game/down.webp",
              },
              {
                bytes: 15454,
                md5: "T9L_7uhTuwZHEQHbaCbYfA",
                name: "game/fade.webp",
              },
              {
                bytes: 17934,
                md5: "2sGLqMtCZkUkrrt5lAfLtg",
                name: "game/fade.png",
              },
              {
                bytes: 2634,
                md5: "2JMceT-5kadj5otDAqxeqw",
                name: "game/health_pickup.png",
              },
              {
                bytes: 2362,
                md5: "3dhJWUwFXZKvK9bXAzdO-Q",
                name: "game/health_pickup.webp",
              },
              {
                bytes: 954,
                md5: "S1aQstMyfXYMQj3hXY--ow",
                name: "game/icon_spider.png",
              },
              {
                bytes: 880,
                md5: "8eAiQ9MYUtFe5_ltImZjWg",
                name: "game/icon_spider.webp",
              },
              {
                bytes: 2068,
                md5: "bTyE0A72BZJGcKUTWP8kSQ",
                name: "game/landing_icon.png",
              },
              {
                bytes: 1080,
                md5: "lCL0H6NAKw311sx7ezrB5Q",
                name: "game/landing_icon.webp",
              },
              {
                bytes: 887,
                md5: "yDig3EY7PYkdOb--S4yKyw",
                name: "game/left.png",
              },
              {
                bytes: 594,
                md5: "BxVU312vpV2dIEcsLkchQg",
                name: "game/left.webp",
              },
              {
                bytes: 1801,
                md5: "OsjAhzesTAP37peTwfAShA",
                name: "game/pickup.png",
              },
              {
                bytes: 1496,
                md5: "uwxQiVo1AkkkIpvu8ywZUw",
                name: "game/pickup.webp",
              },
              {
                bytes: 2764,
                md5: "xRhKfZ1DTXr-X1h_sT36mA",
                name: "game/pickup_time.png",
              },
              {
                bytes: 2534,
                md5: "2dKe-ss8T68Q1Rg-jTUD2Q",
                name: "game/pickup_time.webp",
              },
              {
                bytes: 840,
                md5: "kShtHeYDpUqJy-ASpZRngA",
                name: "game/right.png",
              },
              {
                bytes: 558,
                md5: "ReX7QEBdlwZzsKEu-RqzyQ",
                name: "game/right.webp",
              },
              {
                bytes: 458,
                md5: "XwL3Exx4veyesjjGECXUQA",
                name: "game/spider_pickup.png",
              },
              {
                bytes: 302,
                md5: "3MbOqF5ZTsDoqv8NVV6CbA",
                name: "game/spider_pickup.webp",
              },
              {
                bytes: 1808,
                md5: "nTLoZElDQcMD9LiWfYyiEA",
                name: "game/target.webp",
              },
              {
                bytes: 2913,
                md5: "FkUWKjhv-ToPHtWXyHqPiQ",
                name: "game/target.png",
              },
              {
                bytes: 4642,
                md5: "4YWsMwGtg-AtFafrd8H0dw",
                name: "game/time_up.webp",
              },
              {
                bytes: 5059,
                md5: "98eYWr1tPAc1q3cMqAF0Fg",
                name: "game/time_up.png",
              },
              {
                bytes: 122420,
                md5: "iImDFMI6S5kxRF-zxoDceA",
                name: "game/train_carriage.png",
              },
              {
                bytes: 112432,
                md5: "vnssxZek3DKQHus0KNVHJQ",
                name: "game/train_carriage.webp",
              },
              {
                bytes: 870,
                md5: "W5RoQ0YI-lGwsDEKfRUrSw",
                name: "game/up.png",
              },
              {
                bytes: 538,
                md5: "1x9AYHpiwDNq0_62jBolOA",
                name: "game/up.webp",
              },
              {
                bytes: 163111,
                md5: "bI82D4d0iUnBMWjOyBcWFw",
                name: "game/train_carriage_green-grey.png",
              },
              {
                bytes: 120990,
                md5: "gIrjsd3bBVAgK2A2jUQ9YA",
                name: "game2/background.png",
              },
              {
                bytes: 150480,
                md5: "gD9_UbOPI3dHeGplRphroQ",
                name: "game/train_carriage_green-grey.webp",
              },
              {
                bytes: 4088,
                md5: "Mf3U243Qb3f_0j0zbthAmw",
                name: "game2/blaze_shadow.webp",
              },
              {
                bytes: 4771,
                md5: "Z7izNa_z4OagoVCX2ay0ug",
                name: "game2/blaze_shadow.png",
              },
              {
                bytes: 105656,
                md5: "Gy_sciEvgmJOozz1u9u1fQ",
                name: "game2/background.webp",
              },
              {
                bytes: 20609,
                md5: "D99JU4lB0Dcgstf45gJ-Ng",
                name: "game2/clouds_background.png",
              },
              {
                bytes: 19068,
                md5: "wWZ_eWKULV4mC7B3mqrnRA",
                name: "game2/clouds_background.webp",
              },
              {
                bytes: 39965,
                md5: "Iqmt-192D6_gPMzOxKf37g",
                name: "game2/clouds_foreground.png",
              },
              {
                bytes: 36622,
                md5: "5iupXttYyUO5JyjIzEjRxQ",
                name: "game2/clouds_foreground.webp",
              },
              {
                bytes: 2067,
                md5: "XuGD2IBkWPJlGOL2DYE8xg",
                name: "game2/landing_icon.png",
              },
              {
                bytes: 1074,
                md5: "3ok3cA0GXsmMHxqTmcyn5g",
                name: "game2/landing_icon.webp",
              },
              {
                bytes: 599,
                md5: "e27fV2zG_T3lShqvTt6bsg",
                name: "game2/miles_shadow.png",
              },
              {
                bytes: 336,
                md5: "IFQtnXqbTlHROtHpmaEp0g",
                name: "game2/miles_shadow.webp",
              },
              {
                bytes: 1984,
                md5: "6CE2VDJzpkzS62IF9W4_Xg",
                name: "game2/powerbar.webp",
              },
              {
                bytes: 2296,
                md5: "GG07TMj-TZh4KAdkcz3hBQ",
                name: "game2/powerbar.png",
              },
              {
                bytes: 454,
                md5: "PmnUmnUIe_UNx0nlCyXYgg",
                name: "game2/powerbarArrow.png",
              },
              {
                bytes: 282,
                md5: "tIjclrh8YWpWzHNOyKJxNw",
                name: "game2/powerbarArrow.webp",
              },
              {
                bytes: 237,
                md5: "kViSIJPC8RbA-k90lQyJpQ",
                name: "game2/powerbarOverlay.png",
              },
              {
                bytes: 124,
                md5: "jqmFzjdxV1K4DovwZ6IViA",
                name: "game2/powerbarOverlay.webp",
              },
              {
                bytes: 20984,
                md5: "49oETlRTbLtYk2PKpzjWcg",
                name: "game2/scaffold.png",
              },
              {
                bytes: 18726,
                md5: "PQb1hie7r0oHqNj0gC9Yjg",
                name: "game2/scaffold.webp",
              },
              {
                bytes: 2913,
                md5: "FkUWKjhv-ToPHtWXyHqPiQ",
                name: "game2/target.png",
              },
              {
                bytes: 1808,
                md5: "nTLoZElDQcMD9LiWfYyiEA",
                name: "game2/target.webp",
              },
              {
                bytes: 2913,
                md5: "9xBYfdUuc9MmqNJVkLANGA",
                name: "game2/targetWhite.png",
              },
              {
                bytes: 1808,
                md5: "uCQ_QeejxiJsUKeTKqxgsA",
                name: "game2/targetWhite.webp",
              },
              {
                bytes: 74964,
                md5: "J2_Fw7OVV1aV1k88TqSt8w",
                name: "gameover/frame_mission1.png",
              },
              {
                bytes: 222698,
                md5: "nrIONeGk0KXr6bAt2cyvfg",
                name: "game2/side_wall.webp",
              },
              {
                bytes: 278496,
                md5: "ELZm4cbjVHtd28WxU2nnzA",
                name: "game2/side_wall.png",
              },
              {
                bytes: 69328,
                md5: "-UlA5TKDGO-szCi7Ezy_vQ",
                name: "gameover/frame_mission1.webp",
              },
              {
                bytes: 4095,
                md5: "A-g9EwPkZMMRWdnaye-ZZw",
                name: "gameover/header.png",
              },
              {
                bytes: 3828,
                md5: "9IPrLMCvQj5HZnv0f8LQzQ",
                name: "gameover/header.webp",
              },
              {
                bytes: 2139,
                md5: "udCWZ1D7dRfO8H3DQQVk6A",
                name: "gameover/icon_pickup.png",
              },
              {
                bytes: 1854,
                md5: "gFYDF78aawtwlbQKt1O7nw",
                name: "gameover/icon_pickup.webp",
              },
              {
                bytes: 86150,
                md5: "pro-CozYQaAdZ7uAXbRH5w",
                name: "gameover/frame_mission2.png",
              },
              {
                bytes: 79276,
                md5: "gHJYx5cibcfV1rIq6GqcKQ",
                name: "gameover/frame_mission2.webp",
              },
              {
                bytes: 954,
                md5: "S1aQstMyfXYMQj3hXY--ow",
                name: "gameover/icon_spider.png",
              },
              {
                bytes: 880,
                md5: "8eAiQ9MYUtFe5_ltImZjWg",
                name: "gameover/icon_spider.webp",
              },
              {
                bytes: 2644,
                md5: "-1u99FZkomXa90XqF3PgsA",
                name: "gameover/icon_time.png",
              },
              {
                bytes: 2426,
                md5: "sxdT9qVu6DKdpuNoclZlzA",
                name: "gameover/icon_time.webp",
              },
              {
                bytes: 140,
                md5: "ayQ8Tc0wSXtsoK2QNPophg",
                name: "gameover/trophy_0.png",
              },
              {
                bytes: 42,
                md5: "Tg1hIWOqxb9ZMLEzmlQV8w",
                name: "gameover/trophy_0.webp",
              },
              {
                bytes: 8016,
                md5: "6AIVFTlLPeXqFvvMSt616w",
                name: "gameover/trophy_1.png",
              },
              {
                bytes: 7726,
                md5: "A3SJIM2gEMB26Kt5INGZzQ",
                name: "gameover/trophy_1.webp",
              },
              {
                bytes: 7345,
                md5: "SQEUZzYZVCuZOaOHTrSwag",
                name: "gameover/trophy_2.png",
              },
              {
                bytes: 6928,
                md5: "jlaldZd3Phv2RxcKfQIPpg",
                name: "gameover/trophy_2.webp",
              },
              {
                bytes: 8531,
                md5: "eGYojcyBwK5yKoAjimoIiQ",
                name: "gameover/trophy_3.png",
              },
              {
                bytes: 8042,
                md5: "-YWnF1YtCQiwVhwAgFRbbA",
                name: "gameover/trophy_3.webp",
              },
              {
                bytes: 3921,
                md5: "HOJpARH67I7v1OwpWN94kg",
                name: "help/header.png",
              },
              {
                bytes: 3450,
                md5: "izxGxW_uvzBnuU_ldhE8Pw",
                name: "help/header.webp",
              },
              {
                bytes: 12858,
                md5: "w446aLZ9g0i94axfhb0XGw",
                name: "help/m1_2.png",
              },
              {
                bytes: 11094,
                md5: "FxJufc7BVsi_vilQ9aWtZg",
                name: "help/m1_2.webp",
              },
              {
                bytes: 23536,
                md5: "do7EkuJHLtzs0Ppv0uJBwA",
                name: "help/m1_desktop1.png",
              },
              {
                bytes: 21870,
                md5: "Pks_2Xd_hgo-K8huwLxrRg",
                name: "help/m1_desktop1.webp",
              },
              {
                bytes: 22205,
                md5: "k3Jv8ioB-UfsKGd4spnG0Q",
                name: "help/m1_mobile1.png",
              },
              {
                bytes: 20750,
                md5: "YiTHs6AgMtRAYM5I4HTdtA",
                name: "help/m1_mobile1.webp",
              },
              {
                bytes: 20671,
                md5: "6QkvomjiyItHCGXrs1UneQ",
                name: "help/m2_2.png",
              },
              {
                bytes: 17958,
                md5: "CEnW5XqPHoDP87MDbYVK7A",
                name: "help/m2_2.webp",
              },
              {
                bytes: 16936,
                md5: "TzqYXKQ0VbPxWUj54hqOxQ",
                name: "help/m2_desktop1.png",
              },
              {
                bytes: 15364,
                md5: "JFqUPJXIu_vfveM9SMkRng",
                name: "help/m2_desktop1.webp",
              },
              {
                bytes: 13086,
                md5: "zbSmOypNisHnWKsL1fZQMQ",
                name: "help/m2_desktop1_int.png",
              },
              {
                bytes: 11946,
                md5: "juboO7pzq1lFe3-VrWLiLQ",
                name: "help/m2_desktop1_int.webp",
              },
              {
                bytes: 17387,
                md5: "69swU6nhLA0f2ngA6JiYrg",
                name: "help/m2_mobile1.png",
              },
              {
                bytes: 15672,
                md5: "nAG7V_7g0DMu2kvdJEULwQ",
                name: "help/m2_mobile1.webp",
              },
              {
                bytes: 13531,
                md5: "acKGQGrw6F9KvFneKzt5Pg",
                name: "help/m2_mobile1_int.png",
              },
              {
                bytes: 12386,
                md5: "Pu0vENDKaLUAu0u_aVa2gA",
                name: "help/m2_mobile1_int.webp",
              },
              {
                bytes: 55545,
                md5: "ODP3yndt3v7ypjJt-T3Jcw",
                name: "help/subscreen.png",
              },
              {
                bytes: 55558,
                md5: "B4uO30ptq6LMk6MdzVRHWQ",
                name: "help/subscreen.webp",
              },
              {
                bytes: 20989,
                md5: "LYAj2xcZLx_ok_H3Zt8qhg",
                name: "hud/HUD_top_left.png",
              },
              {
                bytes: 19860,
                md5: "FSQ2Tq5MPnzNWTTzRjSonA",
                name: "hud/HUD_top_left.webp",
              },
              {
                bytes: 6902,
                md5: "_u4zcPB8IfSjrGlKuuboRA",
                name: "hud/HUD_top_right.png",
              },
              {
                bytes: 6168,
                md5: "_zBe15wSV6pevXmA9Sl3nQ",
                name: "hud/HUD_top_right.webp",
              },
              {
                bytes: 3559,
                md5: "82rW12IcpXfVSEri3ZXZ8Q",
                name: "hud/char_icon_gwen.png",
              },
              {
                bytes: 3278,
                md5: "xlxZQBUR6yoE4EJ8IUF3qA",
                name: "hud/char_icon_gwen.webp",
              },
              {
                bytes: 3018,
                md5: "HzA69dkJ5vQDbnClsRUh_Q",
                name: "hud/char_icon_miles.png",
              },
              {
                bytes: 2756,
                md5: "NBGYMVlDFvw8OYKpPZdohw",
                name: "hud/char_icon_miles.webp",
              },
              {
                bytes: 3346,
                md5: "Y926S8bVZqtadSzrEAelaw",
                name: "hud/health0.png",
              },
              {
                bytes: 3068,
                md5: "WRTRlinA3QC676LvBxLZCg",
                name: "hud/health0.webp",
              },
              {
                bytes: 3549,
                md5: "6580T3h_iQ34eEsrYPsS1g",
                name: "hud/health1.png",
              },
              {
                bytes: 3308,
                md5: "emMTS3GZQA5aLj9WFGQZeQ",
                name: "hud/health1.webp",
              },
              {
                bytes: 3485,
                md5: "dnl5LWJIEEaq85Nxj4kOVA",
                name: "hud/health2.png",
              },
              {
                bytes: 3180,
                md5: "hkHk1lyQNfEtzBq__Ihw3g",
                name: "hud/health2.webp",
              },
              {
                bytes: 3476,
                md5: "H1n-setOh1GE4tBc9IhRXA",
                name: "hud/health3.png",
              },
              {
                bytes: 3178,
                md5: "DZjEe3Bw02XR9RO1Ltn8rg",
                name: "hud/health3.webp",
              },
              {
                bytes: 3475,
                md5: "ajpmU5DbdQU5JF6yLeuYBQ",
                name: "hud/health4.png",
              },
              {
                bytes: 3168,
                md5: "2lf4ltPEdG1XklxH4MkktA",
                name: "hud/health4.webp",
              },
              {
                bytes: 8557,
                md5: "cnaiv6I1oQFsVFHnOnSorw",
                name: "hud/logo.png",
              },
              {
                bytes: 8218,
                md5: "85VPd-k9g4Jr52LX04F66A",
                name: "hud/logo.webp",
              },
              {
                bytes: 1671,
                md5: "h32jGdFqhHidqDIGHyNDoA",
                name: "hud/pickup_icon.png",
              },
              {
                bytes: 1358,
                md5: "D7lqyjQ0R7PFbujttgR4cA",
                name: "hud/pickup_icon.webp",
              },
              {
                bytes: 1885,
                md5: "y31xdMbcmd0nwbEQhz80Uw",
                name: "hud/time_icon.png",
              },
              {
                bytes: 1668,
                md5: "vIeXNjDdTgs1_-Tesbf_JQ",
                name: "hud/time_icon.webp",
              },
              {
                bytes: 12716,
                md5: "aIfEbWNJKWhFWA5ZyB6-iQ",
                name: "screens/chargwen.png",
              },
              {
                bytes: 11658,
                md5: "jwPe-WlwlPU-ghJwsZbyuw",
                name: "screens/chargwen.webp",
              },
              {
                bytes: 4624,
                md5: "9A-Lf5LttSSR4bkLP25_iw",
                name: "screens/charheader.png",
              },
              {
                bytes: 4308,
                md5: "N9YVLfdWUTQVTTz1LUfdBQ",
                name: "screens/charheader.webp",
              },
              {
                bytes: 2742,
                md5: "FQk9ifpdEbJj-nZ17Zjy3w",
                name: "screens/gradient_overlay.png",
              },
              {
                bytes: 750,
                md5: "IGl1Tbt9dKi0St8mMgkDmA",
                name: "screens/gradient_overlay.webp",
              },
              {
                bytes: 13470,
                md5: "xZGX2z73CIshLmK8DV4H2w",
                name: "screens/gwen.png",
              },
              {
                bytes: 12006,
                md5: "7J9e0793TN1or1DKCnjDkA",
                name: "screens/gwen.webp",
              },
              {
                bytes: 5198,
                md5: "sYhNOFGb2HS4gVQIqqz6Yw",
                name: "screens/header.png",
              },
              {
                bytes: 4946,
                md5: "si3Yd0X0suwMb97kW26h0A",
                name: "screens/header.webp",
              },
              {
                bytes: 23759,
                md5: "ARBW3aNwdlldHok7wQJa0w",
                name: "screens/highlight_burst.png",
              },
              {
                bytes: 521799,
                md5: "QEhBiMVjdc1opAW08uMMsg",
                name: "screens/background.png",
              },
              {
                bytes: 462956,
                md5: "8TEyOn7jmy4_LJem7CiGTA",
                name: "screens/background.webp",
              },
              {
                bytes: 20176,
                md5: "EKXqhzJhFdI1p3Bqi_XGVw",
                name: "screens/highlight_burst.webp",
              },
              {
                bytes: 516552,
                md5: "O2S2ri2q9YX1UeCICt5fcg",
                name: "screens/background2.webp",
              },
              {
                bytes: 802,
                md5: "OqKJRME9v8njajEd6b8CfA",
                name: "screens/land_icon.png",
              },
              {
                bytes: 696,
                md5: "WkoEhXgRB-1K6JjgkqceFg",
                name: "screens/land_icon.webp",
              },
              {
                bytes: 590941,
                md5: "vXhYeHvwQ9P4jJxEYX7ebA",
                name: "screens/background2.png",
              },
              {
                bytes: 27661,
                md5: "SzELGsEUnlLmUt57IU-33A",
                name: "screens/miles.png",
              },
              {
                bytes: 26042,
                md5: "yhnqKUN8skxWIk53Xfvvpw",
                name: "screens/miles.webp",
              },
              {
                bytes: 47471,
                md5: "dKiznpIQHwL7Ofb7VmvBOQ",
                name: "screens/mission1_frame.png",
              },
              {
                bytes: 44174,
                md5: "3RcdejjyocpLgbnxRW6Fqw",
                name: "screens/mission1_frame.webp",
              },
              {
                bytes: 51507,
                md5: "Qbw5fym3dFnlHg9cSdSiQA",
                name: "screens/mission2_frame.png",
              },
              {
                bytes: 47472,
                md5: "LNJh00d7gluxveDc8GekvA",
                name: "screens/mission2_frame.webp",
              },
              {
                bytes: 10912,
                md5: "QH3w58C0Eeru8VARDM0WMg",
                name: "screens/spiderman.webp",
              },
              {
                bytes: 11970,
                md5: "fA5D3sMLTeZxQF7Z6ZSAbw",
                name: "screens/spiderman.png",
              },
              {
                bytes: 1801,
                md5: "OsjAhzesTAP37peTwfAShA",
                name: "screens/star_icon.png",
              },
              {
                bytes: 1496,
                md5: "uwxQiVo1AkkkIpvu8ywZUw",
                name: "screens/star_icon.webp",
              },
              {
                bytes: 1951,
                md5: "rxMv6YrVdObYvQpwkr6CSQ",
                name: "screens/time_icon.png",
              },
              {
                bytes: 1734,
                md5: "KXJN_1X8yb5nwewpHA6e3g",
                name: "screens/time_icon.webp",
              },
              {
                bytes: 8988,
                md5: "d0Cvnwh0-7DLD5MgYxK99Q",
                name: "screens/title.webp",
              },
              {
                bytes: 8990,
                md5: "MPBbObgAHIgpczR_kmHL-g",
                name: "screens/title.png",
              },
              {
                bytes: 14165,
                md5: "7psJeO5fMPNqcF49vAZFPw",
                name: "vo/VO_gwen_hit.mp3",
              },
              {
                bytes: 15040,
                md5: "OXDR2Id82sntMKZlc4HQvA",
                name: "vo/VO_gwen_hit.ogg",
              },
              {
                bytes: 5960,
                md5: "CBnW1dVLDgqYcOi66sTezg",
                name: "vo/VO_gwen_jump1_long.mp3",
              },
              {
                bytes: 8743,
                md5: "icncac9a6Gey5Mb6sdOMNw",
                name: "vo/VO_gwen_jump1_long.ogg",
              },
              {
                bytes: 7941,
                md5: "mhki0J-cmORNybBIwt5JcA",
                name: "vo/VO_miles_hit.mp3",
              },
              {
                bytes: 10100,
                md5: "j_XBGwT3FfnnXuyX4xoYGg",
                name: "vo/VO_miles_hit.ogg",
              },
              {
                bytes: 25020,
                md5: "XytF_s4_0X91JhcdgvTGEQ",
                name: "vo/VO_miles_jump1_long.mp3",
              },
              {
                bytes: 20498,
                md5: "lNMKUaAgBuLxznikJyYajA",
                name: "vo/VO_miles_jump1_long.ogg",
              },
              {
                bytes: 54311,
                md5: "3jKA8mWGCFOOk-6dcVsV6w",
                name: "fonts/int/italicFont.fnt",
              },
              {
                bytes: 63060,
                md5: "DwqiZ1Q9MVWvq1JZkiNP_w",
                name: "fonts/int/italicFont.png",
              },
              {
                bytes: 58884,
                md5: "mhMsPyNyH8fz6red3_uysA",
                name: "fonts/int/italicFont.webp",
              },
              {
                bytes: 8787,
                md5: "f8_g_BsSa96RC1Zl5Cy2nQ",
                name: "game/bomb/library.json",
              },
              {
                bytes: 21394,
                md5: "qjSuNm99bTHaF36l0Hq36g",
                name: "game/gwen/library.json",
              },
              {
                bytes: 41640,
                md5: "OCVkYXe1QF9ICBb-CTXIUA",
                name: "game/light/bg_front_layer.png",
              },
              {
                bytes: 222374,
                md5: "OILE8J8SmbQwev6_qbTgLA",
                name: "game/bomb/atlas0.webp",
              },
              {
                bytes: 281030,
                md5: "xM3-j6YeV5Y82__62AiQfg",
                name: "game/bomb/atlas0.png",
              },
              {
                bytes: 39618,
                md5: "O00TKfhZAaKH7jUX9BOE8w",
                name: "game/light/bg_front_layer.webp",
              },
              {
                bytes: 78139,
                md5: "UlZnq8l2oRLkQrVSehzrww",
                name: "game/light/bg_back_layer.png",
              },
              {
                bytes: 32479,
                md5: "hF1gHA59tgfHatjhBLzuCg",
                name: "game/light/fg_column.png",
              },
              {
                bytes: 73540,
                md5: "HK047pPu4QE9pkRpbu3fFw",
                name: "game/light/bg_back_layer.webp",
              },
              {
                bytes: 27806,
                md5: "YkjeGxIzGIQ--L-3Bac11A",
                name: "game/light/fg_column.webp",
              },
              {
                bytes: 21698,
                md5: "A9hc2PtbSgrxsPqbMJI_ng",
                name: "game/miles/library.json",
              },
              {
                bytes: 311204,
                md5: "icbBhGnc5JdExtKOzwFDYg",
                name: "game/gwen/atlas0.webp",
              },
              {
                bytes: 6121,
                md5: "r2TgC5Yy5FdtNV5AL1Zqow",
                name: "game/pickups/atlas0.png",
              },
              {
                bytes: 5932,
                md5: "jVvG0Wm21CA57pvQekK8kQ",
                name: "game/pickups/atlas0.webp",
              },
              {
                bytes: 354621,
                md5: "acQiqB4AyHGBgLt38YTIGw",
                name: "game/gwen/atlas0.png",
              },
              {
                bytes: 2227,
                md5: "MScvahxku3xHLPIz5tFCqg",
                name: "game/pickups/library.json",
              },
              {
                bytes: 6430,
                md5: "Z1vxqPH9faRWjZzqKBRJ0g",
                name: "game/pickups2/atlas0.png",
              },
              {
                bytes: 5222,
                md5: "XGogVL18NnSD4L_CvZJJmQ",
                name: "game/pickups2/atlas0.webp",
              },
              {
                bytes: 362186,
                md5: "kcVbiuHnlHRXcPLFjfRJTA",
                name: "game/miles/atlas0.webp",
              },
              {
                bytes: 2228,
                md5: "4UV0hFytBfCm3UlypY1h7w",
                name: "game/pickups2/library.json",
              },
              {
                bytes: 410958,
                md5: "-YB7vfO1GhboCwuIZVW1rA",
                name: "game/miles/atlas0.png",
              },
              {
                bytes: 85181,
                md5: "O49QAbopgpPcwzJhuWFhiQ",
                name: "game/red/bg_back_layer.png",
              },
              {
                bytes: 25705,
                md5: "OAGDcZzJwF3Oa9NCwxADMw",
                name: "game/red/fg_column.png",
              },
              {
                bytes: 21776,
                md5: "Mi1HBAn4VKPkJP2CpN_jGQ",
                name: "game/red/fg_column.webp",
              },
              {
                bytes: 17386,
                md5: "UJ7JGk02oW7IO36Pf9W3CQ",
                name: "game/red/light.png",
              },
              {
                bytes: 16660,
                md5: "ETQFVGPep8dFMKA7ZZEjOQ",
                name: "game/red/light.webp",
              },
              {
                bytes: 81856,
                md5: "fTpwuHAxRTTxRvQz-MkJ6Q",
                name: "game/red/bg_back_layer.webp",
              },
              {
                bytes: 20458,
                md5: "OkBjcRZY1qviEt0sQSk_gw",
                name: "game/targetBurst/atlas0.png",
              },
              {
                bytes: 90879,
                md5: "7jT5VxN3jEz_lEYTsYpfig",
                name: "game/red/bg_front_layer.png",
              },
              {
                bytes: 89340,
                md5: "Pc4AuFDxwrcsh5a3dOAsmA",
                name: "game/red/bg_front_layer.webp",
              },
              {
                bytes: 17950,
                md5: "ge_Gn215OSScVQLlRbRfXw",
                name: "game/targetBurst/atlas0.webp",
              },
              {
                bytes: 2962,
                md5: "auXHnEjVHff_Ubl36Gy11A",
                name: "game/targetBurst/library.json",
              },
              {
                bytes: 20098,
                md5: "Od91D3GhZE45oe0w5plxFg",
                name: "game2/drain/atlas0.png",
              },
              {
                bytes: 18418,
                md5: "yDxFmX5n2o6FeCJkGuakKg",
                name: "game2/drain/atlas0.webp",
              },
              {
                bytes: 2741,
                md5: "wACdrrpsNkdOFVpUAUH63w",
                name: "game2/drain/library.json",
              },
              {
                bytes: 16430,
                md5: "hOR_xmSVR8u67cxnZIKcow",
                name: "game2/gwen/library.json",
              },
              {
                bytes: 180626,
                md5: "86qYu5kU6bqZPZ7wvozhFA",
                name: "game2/gwen/atlas0.webp",
              },
              {
                bytes: 16157,
                md5: "ukpNQkBljarizpE9MIGjkQ",
                name: "game2/miles/library.json",
              },
              {
                bytes: 205814,
                md5: "KGGh1INkwPYavDywic-t9w",
                name: "game2/gwen/atlas0.png",
              },
              {
                bytes: 249017,
                md5: "icfJuBEDQMUKq4HKyaAY4A",
                name: "game2/miles/atlas0.png",
              },
              {
                bytes: 211682,
                md5: "TNlvEsHLKslWre05MnJCnw",
                name: "game2/miles/atlas0.webp",
              },
              {
                bytes: 20458,
                md5: "OkBjcRZY1qviEt0sQSk_gw",
                name: "game2/targetBurst/atlas0.png",
              },
              {
                bytes: 17950,
                md5: "ge_Gn215OSScVQLlRbRfXw",
                name: "game2/targetBurst/atlas0.webp",
              },
              {
                bytes: 2962,
                md5: "auXHnEjVHff_Ubl36Gy11A",
                name: "game2/targetBurst/library.json",
              },
              {
                bytes: 1951,
                md5: "KpZUFPnFRJ2W7AK-p81vnw",
                name: "screens/glint/atlas0.png",
              },
              {
                bytes: 1824,
                md5: "ESQUQOXq_lu7XfrLVER-hw",
                name: "screens/glint/atlas0.webp",
              },
              {
                bytes: 2942,
                md5: "9vvjUXHmzHvML1yLwSSguw",
                name: "screens/glint/library.json",
              },
            ],
            _2DKitOrientation: [
              {
                bytes: 3720,
                md5: "mvAlyYTf1LRKK4k4-E_lsA",
                name: "RotateDevice.png",
              },
              {
                bytes: 1794,
                md5: "jKhibIkp_bMvwCVvP-C45w",
                name: "RotateDevice.webp",
              },
            ],
            config: [
              {
                bytes: 1319,
                md5: "cgrZq0WHmwsb0cyQeaqfhw",
                name: "config.xml",
              },
              {
                bytes: 3129,
                md5: "Gvj3d9la86xCzLryKH4GIQ",
                name: "translation.xml",
              },
            ],
          },
          width: 480,
        },
      ],
    },
  };
  J.$oR = 0;
  J.$pR = 0;
  J.$qR = !0;
  A.$fS = ["webkit", "moz", "ms"];
  A.$gS = new Qa("(iPhone|iPod|iPad)", "").match(window.navigator.userAgent);
  E.$YT = !0;
  Aa.$PI = new ta();
  d.v2 = !1;
  d.nickApp = !1;
  d.liteAssetsInApp = !1;
  d.lite = !1;
  d.minScaleSize = 960;
  d.scale = 1;
  d.offsetX = 0;
  d.offsetY = 0;
  d.alwaysResize = !1;
  d.staticWidth = 960;
  d.staticHeight = 640;
  d.isMobile = !1;
  d.active = !0;
  d.muted = !1;
  d.firstPlay = !0;
  d.preloaderClick = !1;
  d.replay = !1;
  d["char"] = "miles";
  d.score1 = 0;
  d.targets1 = 0;
  d.time1 = 0;
  d.trophy1 = 0;
  d.score2 = 0;
  d.targets2 = 0;
  d.time2 = 0;
  d.trophy2 = 0;
  d.showFPS = !1;
  d.testMode = !1;
  d.showDebugInfo = !1;
  xe.$YN();
})(
  "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self
    ? self
    : this
);

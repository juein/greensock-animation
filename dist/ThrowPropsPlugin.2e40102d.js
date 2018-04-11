// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({4:[function(require,module,exports) {
var global = (1,eval)("this");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * VERSION: 0.9.9
 * DATE: 2015-04-28
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * ThrowPropsPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  _gsScope._gsDefine("plugins.ThrowPropsPlugin", ["plugins.TweenPlugin", "TweenLite", "easing.Ease", "utils.VelocityTracker"], function (t, e, i, r) {
    var s,
        n,
        o,
        a,
        l = function l() {
      t.call(this, "throwProps"), this._overwriteProps.length = 0;
    },
        h = 999999999999999,
        u = 1e-10,
        f = _gsScope._gsDefine.globals,
        c = !1,
        p = { x: 1, y: 1, z: 2, scale: 1, scaleX: 1, scaleY: 1, rotation: 1, rotationZ: 1, rotationX: 2, rotationY: 2, skewX: 1, skewY: 1, xPercent: 1, yPercent: 1 },
        _ = function _(t, e, i, r) {
      for (var s, n, o = e.length, a = 0, l = h; --o > -1;) {
        s = e[o], n = s - t, 0 > n && (n = -n), l > n && s >= r && i >= s && (a = o, l = n);
      }return e[a];
    },
        d = function d(t, e, i, r) {
      if ("auto" === t.end) return t;i = isNaN(i) ? h : i, r = isNaN(r) ? -h : r;var s = "function" == typeof t.end ? t.end(e) : t.end instanceof Array ? _(e, t.end, i, r) : Number(t.end);return s > i ? s = i : r > s && (s = r), { max: s, min: s, unitFactor: t.unitFactor };
    },
        g = function g(t, e, i) {
      for (var r in e) {
        void 0 === t[r] && r !== i && (t[r] = e[r]);
      }return t;
    },
        m = l.calculateChange = function (t, r, s, n) {
      null == n && (n = .05);var o = r instanceof i ? r : r ? new i(r) : e.defaultEase;return s * n * t / o.getRatio(n);
    },
        v = l.calculateDuration = function (t, r, s, n, o) {
      o = o || .05;var a = n instanceof i ? n : n ? new i(n) : e.defaultEase;return Math.abs((r - t) * a.getRatio(o) / s / o);
    },
        y = l.calculateTweenDuration = function (t, s, n, o, a, h) {
      if ("string" == typeof t && (t = e.selector(t)), !t) return 0;null == n && (n = 10), null == o && (o = .2), null == a && (a = 1), t.length && (t = t[0] || t);var f,
          p,
          _,
          y,
          x,
          T,
          w,
          b,
          P,
          S,
          k = 0,
          O = 9999999999,
          C = s.throwProps || s,
          R = s.ease instanceof i ? s.ease : s.ease ? new i(s.ease) : e.defaultEase,
          A = isNaN(C.checkpoint) ? .05 : Number(C.checkpoint),
          M = isNaN(C.resistance) ? l.defaultResistance : Number(C.resistance);for (f in C) {
        "resistance" !== f && "checkpoint" !== f && "preventOvershoot" !== f && (p = C[f], "object" != (typeof p === "undefined" ? "undefined" : _typeof(p)) && (P = P || r.getByTarget(t), P && P.isTrackingProp(f) ? p = "number" == typeof p ? { velocity: p } : { velocity: P.getVelocity(f) } : (y = Number(p) || 0, _ = y * M > 0 ? y / M : y / -M)), "object" == (typeof p === "undefined" ? "undefined" : _typeof(p)) && (void 0 !== p.velocity && "number" == typeof p.velocity ? y = Number(p.velocity) || 0 : (P = P || r.getByTarget(t), y = P && P.isTrackingProp(f) ? P.getVelocity(f) : 0), x = isNaN(p.resistance) ? M : Number(p.resistance), _ = y * x > 0 ? y / x : y / -x, T = "function" == typeof t[f] ? t[f.indexOf("set") || "function" != typeof t["get" + f.substr(3)] ? f : "get" + f.substr(3)]() : t[f] || 0, w = T + m(y, R, _, A), void 0 !== p.end && (p = d(p, w, p.max, p.min), (h || c) && (C[f] = g(p, C[f], "end"))), void 0 !== p.max && w > Number(p.max) + u ? (S = p.unitFactor || l.defaultUnitFactors[f] || 1, b = T > p.max && p.min !== p.max || y * S > -15 && 45 > y * S ? o + .1 * (n - o) : v(T, p.max, y, R, A), O > b + a && (O = b + a)) : void 0 !== p.min && Number(p.min) - u > w && (S = p.unitFactor || l.defaultUnitFactors[f] || 1, b = p.min > T && p.min !== p.max || y * S > -45 && 15 > y * S ? o + .1 * (n - o) : v(T, p.min, y, R, A), O > b + a && (O = b + a)), b > k && (k = b)), _ > k && (k = _));
      }return k > O && (k = O), k > n ? n : o > k ? o : k;
    },
        x = l.prototype = new t("throwProps");return x.constructor = l, l.version = "0.9.9", l.API = 2, l._autoCSS = !0, l.defaultResistance = 100, l.defaultUnitFactors = { time: 1e3, totalTime: 1e3 }, l.track = function (t, e, i) {
      return r.track(t, e, i);
    }, l.untrack = function (t, e) {
      r.untrack(t, e);
    }, l.isTracking = function (t, e) {
      return r.isTracking(t, e);
    }, l.getVelocity = function (t, e) {
      var i = r.getByTarget(t);return i ? i.getVelocity(e) : 0 / 0;
    }, l._cssRegister = function () {
      var t = f.com.greensock.plugins.CSSPlugin;if (t) {
        var e = t._internals,
            i = e._parseToProxy,
            o = e._setPluginRatio,
            a = e.CSSPropTween;e._registerComplexSpecialProp("throwProps", { parser: function parser(t, e, h, u, f, c) {
            c = new l();var _,
                d,
                g,
                m,
                v,
                y = {},
                x = {},
                T = {},
                w = {},
                b = {},
                P = {};n = {};for (g in e) {
              "resistance" !== g && "preventOvershoot" !== g && (d = e[g], "object" == (typeof d === "undefined" ? "undefined" : _typeof(d)) ? (void 0 !== d.velocity && "number" == typeof d.velocity ? y[g] = Number(d.velocity) || 0 : (v = v || r.getByTarget(t), y[g] = v && v.isTrackingProp(g) ? v.getVelocity(g) : 0), void 0 !== d.end && (w[g] = d.end), void 0 !== d.min && (x[g] = d.min), void 0 !== d.max && (T[g] = d.max), d.preventOvershoot && (P[g] = !0), void 0 !== d.resistance && (_ = !0, b[g] = d.resistance)) : "number" == typeof d ? y[g] = d : (v = v || r.getByTarget(t), y[g] = v && v.isTrackingProp(g) ? v.getVelocity(g) : d || 0), p[g] && u._enableTransforms(2 === p[g]));
            }m = i(t, y, u, f, c), s = m.proxy, y = m.end;for (g in s) {
              n[g] = { velocity: y[g], min: x[g], max: T[g], end: w[g], resistance: b[g], preventOvershoot: P[g] };
            }return null != e.resistance && (n.resistance = e.resistance), e.preventOvershoot && (n.preventOvershoot = !0), f = new a(t, "throwProps", 0, 0, m.pt, 2), u._overwriteProps.pop(), f.plugin = c, f.setRatio = o, f.data = m, c._onInitTween(s, n, u._tween), f;
          } });
      }
    }, l.to = function (t, i, r, l, h) {
      i.throwProps || (i = { throwProps: i }), 0 === h && (i.throwProps.preventOvershoot = !0), c = !0;var u = new e(t, l || 1, i);return u.render(0, !0, !0), u.vars.css ? (u.duration(y(s, { throwProps: n, ease: i.ease }, r, l, h)), u._delay && !u.vars.immediateRender ? u.invalidate() : o._onInitTween(s, a, u), c = !1, u) : (u.kill(), u = new e(t, y(t, i, r, l, h), i), c = !1, u);
    }, x._onInitTween = function (t, e, i) {
      this.target = t, this._props = [], o = this, a = e;var s,
          n,
          l,
          h,
          u,
          f,
          p,
          _,
          v,
          y = i._ease,
          x = isNaN(e.checkpoint) ? .05 : Number(e.checkpoint),
          T = i._duration,
          w = e.preventOvershoot,
          b = 0;for (s in e) {
        if ("resistance" !== s && "checkpoint" !== s && "preventOvershoot" !== s) {
          if (n = e[s], "number" == typeof n) u = Number(n) || 0;else if ("object" != (typeof n === "undefined" ? "undefined" : _typeof(n)) || isNaN(n.velocity)) {
            if (v = v || r.getByTarget(t), !v || !v.isTrackingProp(s)) throw "ERROR: No velocity was defined in the throwProps tween of " + t + " property: " + s;u = v.getVelocity(s);
          } else u = Number(n.velocity);f = m(u, y, T, x), _ = 0, h = "function" == typeof t[s], l = h ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : t[s], "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && (p = l + f, void 0 !== n.end && (n = d(n, p, n.max, n.min), c && (e[s] = g(n, e[s], "end"))), void 0 !== n.max && p > Number(n.max) ? w || n.preventOvershoot ? f = n.max - l : _ = n.max - l - f : void 0 !== n.min && Number(n.min) > p && (w || n.preventOvershoot ? f = n.min - l : _ = n.min - l - f)), this._overwriteProps[b] = s, this._props[b++] = { p: s, s: l, c1: f, c2: _, f: h, r: !1 };
        }
      }return !0;
    }, x._kill = function (e) {
      for (var i = this._props.length; --i > -1;) {
        null != e[this._props[i].p] && this._props.splice(i, 1);
      }return t.prototype._kill.call(this, e);
    }, x._roundProps = function (t, e) {
      for (var i = this._props, r = i.length; --r > -1;) {
        (t[i[r].p] || t.throwProps) && (i[r].r = e);
      }
    }, x.setRatio = function (t) {
      for (var e, i, r = this._props.length; --r > -1;) {
        e = this._props[r], i = e.s + e.c1 * t + e.c2 * t * t, e.r && (i = Math.round(i)), e.f ? this.target[e.p](i) : this.target[e.p] = i;
      }
    }, t.activate([l]), l;
  }, !0), _gsScope._gsDefine("utils.VelocityTracker", ["TweenLite"], function (t) {
    var e,
        i,
        r,
        s,
        n = /([A-Z])/g,
        o = {},
        a = { x: 1, y: 1, z: 2, scale: 1, scaleX: 1, scaleY: 1, rotation: 1, rotationZ: 1, rotationX: 2, rotationY: 2, skewX: 1, skewY: 1, xPercent: 1, yPercent: 1 },
        l = document.defaultView ? document.defaultView.getComputedStyle : function () {},
        h = function h(t, e, i) {
      var r = (t._gsTransform || o)[e];return r || 0 === r ? r : (t.style[e] ? r = t.style[e] : (i = i || l(t, null)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(n, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), parseFloat(r) || 0);
    },
        u = t.ticker,
        f = function f(t, e, i) {
      this.p = t, this.f = e, this.v1 = this.v2 = 0, this.t1 = this.t2 = u.time, this.css = !1, this.type = "", this._prev = null, i && (this._next = i, i._prev = this);
    },
        c = function c() {
      var t,
          i,
          n = e,
          o = u.time;if (o - r >= .03) for (s = r, r = o; n;) {
        for (i = n._firstVP; i;) {
          t = i.css ? h(n.target, i.p) : i.f ? n.target[i.p]() : n.target[i.p], (t !== i.v1 || o - i.t1 > .15) && (i.v2 = i.v1, i.v1 = t, i.t2 = i.t1, i.t1 = o), i = i._next;
        }n = n._next;
      }
    },
        p = function p(t) {
      this._lookup = {}, this.target = t, this.elem = t.style && t.nodeType ? !0 : !1, i || (u.addEventListener("tick", c, null, !1, -100), r = s = u.time, i = !0), e && (this._next = e, e._prev = this), e = this;
    },
        _ = p.getByTarget = function (t) {
      for (var i = e; i;) {
        if (i.target === t) return i;i = i._next;
      }
    },
        d = p.prototype;return d.addProp = function (e, i) {
      if (!this._lookup[e]) {
        var r = this.target,
            s = "function" == typeof r[e],
            n = s ? this._altProp(e) : e,
            o = this._firstVP;this._firstVP = this._lookup[e] = this._lookup[n] = o = new f(n !== e && 0 === e.indexOf("set") ? n : e, s, o), o.css = this.elem && (void 0 !== this.target.style[o.p] || a[o.p]), o.css && a[o.p] && !r._gsTransform && t.set(r, { x: "+=0", overwrite: !1 }), o.type = i || o.css && 0 === e.indexOf("rotation") ? "deg" : "", o.v1 = o.v2 = o.css ? h(r, o.p) : s ? r[o.p]() : r[o.p];
      }
    }, d.removeProp = function (t) {
      var e = this._lookup[t];e && (e._prev ? e._prev._next = e._next : e === this._firstVP && (this._firstVP = e._next), e._next && (e._next._prev = e._prev), this._lookup[t] = 0, e.f && (this._lookup[this._altProp(t)] = 0));
    }, d.isTrackingProp = function (t) {
      return this._lookup[t] instanceof f;
    }, d.getVelocity = function (t) {
      var e,
          i,
          r,
          s = this._lookup[t],
          n = this.target;if (!s) throw "The velocity of " + t + " is not being tracked.";return e = s.css ? h(n, s.p) : s.f ? n[s.p]() : n[s.p], i = e - s.v2, ("rad" === s.type || "deg" === s.type) && (r = "rad" === s.type ? 2 * Math.PI : 360, i %= r, i !== i % (r / 2) && (i = 0 > i ? i + r : i - r)), i / (u.time - s.t2);
    }, d._altProp = function (t) {
      var e = t.substr(0, 3),
          i = ("get" === e ? "set" : "set" === e ? "get" : e) + t.substr(3);return "function" == typeof this.target[i] ? i : t;
    }, p.getByTarget = function (i) {
      var r = e;for ("string" == typeof i && (i = t.selector(i)), i.length && i !== window && i[0] && i[0].style && !i.nodeType && (i = i[0]); r;) {
        if (r.target === i) return r;r = r._next;
      }
    }, p.track = function (t, e, i) {
      var r = _(t),
          s = e.split(","),
          n = s.length;for (i = (i || "").split(","), r || (r = new p(t)); --n > -1;) {
        r.addProp(s[n], i[n] || i[0]);
      }return r;
    }, p.untrack = function (t, i) {
      var r = _(t),
          s = (i || "").split(","),
          n = s.length;if (r) {
        for (; --n > -1;) {
          r.removeProp(s[n]);
        }r._firstVP && i || (r._prev ? r._prev._next = r._next : r === e && (e = r._next), r._next && (r._next._prev = r._prev));
      }
    }, p.isTracking = function (t, e) {
      var i = _(t);return i ? !e && i._firstVP ? !0 : i.isTrackingProp(e) : !1;
    }, p;
  }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t) {
  "use strict";
  var e = function e() {
    return (_gsScope.GreenSockGlobals || _gsScope)[t];
  };"function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (1, module.exports = e());
}("ThrowPropsPlugin");
},{}],8:[function(require,module,exports) {

var OVERLAY_ID = '__parcel__error__overlay__';

var global = (1, eval)('this');
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '64485' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[8,4])
//# sourceMappingURL=/ThrowPropsPlugin.2e40102d.map
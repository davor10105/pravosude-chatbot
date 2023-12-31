/*!
 * jQuery JavaScript Library v1.4.4
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Nov 11 19:04:53 2010 -0500
 */
(function(E, B) {
    function ka(a, b, d) {
        if (d === B && a.nodeType === 1) {
            d = a.getAttribute("data-" + b);
            if (typeof d === "string") {
                try {
                    d = d === "true" ? true : d === "false" ? false : d === "null" ? null : !c.isNaN(d) ? parseFloat(d) : Ja.test(d) ? c.parseJSON(d) : d
                } catch (e) {}
                c.data(a, b, d)
            } else
                d = B
        }
        return d
    }
    function U() {
        return false
    }
    function ca() {
        return true
    }
    function la(a, b, d) {
        d[0].type = a;
        return c.event.handle.apply(b, d)
    }
    function Ka(a) {
        var b, d, e, f, h, l, k, o, x, r, A, C = [];
        f = [];
        h = c.data(this, this.nodeType ? "events" : "__events__");
        if (typeof h === "function")
            h = h.events;
        if (!(a.liveFired === this || !h || !h.live || a.button && a.type === "click")) {
            if (a.namespace)
                A = RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)");
            a.liveFired = this;
            var J = h.live.slice(0);
            for (k = 0; k < J.length; k++) {
                h = J[k];
                h.origType.replace(X, "") === a.type ? f.push(h.selector) : J.splice(k--, 1)
            }
            f = c(a.target).closest(f, a.currentTarget);
            o = 0;
            for (x = f.length; o < x; o++) {
                r = f[o];
                for (k = 0; k < J.length; k++) {
                    h = J[k];
                    if (r.selector === h.selector && (!A || A.test(h.namespace))) {
                        l = r.elem;
                        e = null;
                        if (h.preType === "mouseenter" || h.preType === "mouseleave") {
                            a.type = h.preType;
                            e = c(a.relatedTarget).closest(h.selector)[0]
                        }
                        if (!e || e !== l)
                            C.push({
                                elem: l,
                                handleObj: h,
                                level: r.level
                            })
                    }
                }
            }
            o = 0;
            for (x = C.length; o < x; o++) {
                f = C[o];
                if (d && f.level > d)
                    break;
                a.currentTarget = f.elem;
                a.data = f.handleObj.data;
                a.handleObj = f.handleObj;
                A = f.handleObj.origHandler.apply(f.elem, arguments);
                if (A === false || a.isPropagationStopped()) {
                    d = f.level;
                    if (A === false)
                        b = false;
                    if (a.isImmediatePropagationStopped())
                        break
                }
            }
            return b
        }
    }
    function Y(a, b) {
        return (a && a !== "*" ? a + "." : "") + b.replace(La, "`").replace(Ma, "&")
    }
    function ma(a, b, d) {
        if (c.isFunction(b))
            return c.grep(a, function(f, h) {
                return !!b.call(f, h, f) === d
            });
        else if (b.nodeType)
            return c.grep(a, function(f) {
                return f === b === d
            });
        else if (typeof b === "string") {
            var e = c.grep(a, function(f) {
                return f.nodeType === 1
            });
            if (Na.test(b))
                return c.filter(b, e, !d);
            else
                b = c.filter(b, e)
        }
        return c.grep(a, function(f) {
            return c.inArray(f, b) >= 0 === d
        })
    }
    function na(a, b) {
        var d = 0;
        b.each(function() {
            if (this.nodeName === (a[d] && a[d].nodeName)) {
                var e = c.data(a[d++])
                  , f = c.data(this, e);
                if (e = e && e.events) {
                    delete f.handle;
                    f.events = {};
                    for (var h in e)
                        for (var l in e[h])
                            c.event.add(this, h, e[h][l], e[h][l].data)
                }
            }
        })
    }
    function Oa(a, b) {
        b.src ? c.ajax({
            url: b.src,
            async: false,
            dataType: "script"
        }) : c.globalEval(b.text || b.textContent || b.innerHTML || "");
        b.parentNode && b.parentNode.removeChild(b)
    }
    function oa(a, b, d) {
        var e = b === "width" ? a.offsetWidth : a.offsetHeight;
        if (d === "border")
            return e;
        c.each(b === "width" ? Pa : Qa, function() {
            d || (e -= parseFloat(c.css(a, "padding" + this)) || 0);
            if (d === "margin")
                e += parseFloat(c.css(a, "margin" + this)) || 0;
            else
                e -= parseFloat(c.css(a, "border" + this + "Width")) || 0
        });
        return e
    }
    function da(a, b, d, e) {
        if (c.isArray(b) && b.length)
            c.each(b, function(f, h) {
                d || Ra.test(a) ? e(a, h) : da(a + "[" + (typeof h === "object" || c.isArray(h) ? f : "") + "]", h, d, e)
            });
        else if (!d && b != null && typeof b === "object")
            c.isEmptyObject(b) ? e(a, "") : c.each(b, function(f, h) {
                da(a + "[" + f + "]", h, d, e)
            });
        else
            e(a, b)
    }
    function S(a, b) {
        var d = {};
        c.each(pa.concat.apply([], pa.slice(0, b)), function() {
            d[this] = a
        });
        return d
    }
    function qa(a) {
        if (!ea[a]) {
            var b = c("<" + a + ">").appendTo("body")
              , d = b.css("display");
            b.remove();
            if (d === "none" || d === "")
                d = "block";
            ea[a] = d
        }
        return ea[a]
    }
    function fa(a) {
        return c.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : false
    }
    var t = E.document
      , c = function() {
        function a() {
            if (!b.isReady) {
                try {
                    t.documentElement.doScroll("left")
                } catch (j) {
                    setTimeout(a, 1);
                    return
                }
                b.ready()
            }
        }
        var b = function(j, s) {
            return new b.fn.init(j,s)
        }, d = E.jQuery, e = E.$, f, h = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/, l = /\S/, k = /^\s+/, o = /\s+$/, x = /\W/, r = /\d/, A = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, C = /^[\],:{}\s]*$/, J = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, w = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, I = /(?:^|:|,)(?:\s*\[)+/g, L = /(webkit)[ \/]([\w.]+)/, g = /(opera)(?:.*version)?[ \/]([\w.]+)/, i = /(msie) ([\w.]+)/, n = /(mozilla)(?:.*? rv:([\w.]+))?/, m = navigator.userAgent, p = false, q = [], u, y = Object.prototype.toString, F = Object.prototype.hasOwnProperty, M = Array.prototype.push, N = Array.prototype.slice, O = String.prototype.trim, D = Array.prototype.indexOf, R = {};
        b.fn = b.prototype = {
            init: function(j, s) {
                var v, z, H;
                if (!j)
                    return this;
                if (j.nodeType) {
                    this.context = this[0] = j;
                    this.length = 1;
                    return this
                }
                if (j === "body" && !s && t.body) {
                    this.context = t;
                    this[0] = t.body;
                    this.selector = "body";
                    this.length = 1;
                    return this
                }
                if (typeof j === "string")
                    if ((v = h.exec(j)) && (v[1] || !s))
                        if (v[1]) {
                            H = s ? s.ownerDocument || s : t;
                            if (z = A.exec(j))
                                if (b.isPlainObject(s)) {
                                    j = [t.createElement(z[1])];
                                    b.fn.attr.call(j, s, true)
                                } else
                                    j = [H.createElement(z[1])];
                            else {
                                z = b.buildFragment([v[1]], [H]);
                                j = (z.cacheable ? z.fragment.cloneNode(true) : z.fragment).childNodes
                            }
                            return b.merge(this, j)
                        } else {
                            if ((z = t.getElementById(v[2])) && z.parentNode) {
                                if (z.id !== v[2])
                                    return f.find(j);
                                this.length = 1;
                                this[0] = z
                            }
                            this.context = t;
                            this.selector = j;
                            return this
                        }
                    else if (!s && !x.test(j)) {
                        this.selector = j;
                        this.context = t;
                        j = t.getElementsByTagName(j);
                        return b.merge(this, j)
                    } else
                        return !s || s.jquery ? (s || f).find(j) : b(s).find(j);
                else if (b.isFunction(j))
                    return f.ready(j);
                if (j.selector !== B) {
                    this.selector = j.selector;
                    this.context = j.context
                }
                return b.makeArray(j, this)
            },
            selector: "",
            jquery: "1.4.4",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return N.call(this, 0)
            },
            get: function(j) {
                return j == null ? this.toArray() : j < 0 ? this.slice(j)[0] : this[j]
            },
            pushStack: function(j, s, v) {
                var z = b();
                b.isArray(j) ? M.apply(z, j) : b.merge(z, j);
                z.prevObject = this;
                z.context = this.context;
                if (s === "find")
                    z.selector = this.selector + (this.selector ? " " : "") + v;
                else if (s)
                    z.selector = this.selector + "." + s + "(" + v + ")";
                return z
            },
            each: function(j, s) {
                return b.each(this, j, s)
            },
            ready: function(j) {
                b.bindReady();
                if (b.isReady)
                    j.call(t, b);
                else
                    q && q.push(j);
                return this
            },
            eq: function(j) {
                return j === -1 ? this.slice(j) : this.slice(j, +j + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            slice: function() {
                return this.pushStack(N.apply(this, arguments), "slice", N.call(arguments).join(","))
            },
            map: function(j) {
                return this.pushStack(b.map(this, function(s, v) {
                    return j.call(s, v, s)
                }))
            },
            end: function() {
                return this.prevObject || b(null)
            },
            push: M,
            sort: [].sort,
            splice: [].splice
        };
        b.fn.init.prototype = b.fn;
        b.extend = b.fn.extend = function() {
            var j, s, v, z, H, G = arguments[0] || {}, K = 1, Q = arguments.length, ga = false;
            if (typeof G === "boolean") {
                ga = G;
                G = arguments[1] || {};
                K = 2
            }
            if (typeof G !== "object" && !b.isFunction(G))
                G = {};
            if (Q === K) {
                G = this;
                --K
            }
            for (; K < Q; K++)
                if ((j = arguments[K]) != null)
                    for (s in j) {
                        v = G[s];
                        z = j[s];
                        if (G !== z)
                            if (ga && z && (b.isPlainObject(z) || (H = b.isArray(z)))) {
                                if (H) {
                                    H = false;
                                    v = v && b.isArray(v) ? v : []
                                } else
                                    v = v && b.isPlainObject(v) ? v : {};
                                G[s] = b.extend(ga, v, z)
                            } else if (z !== B)
                                G[s] = z
                    }
            return G
        }
        ;
        b.extend({
            noConflict: function(j) {
                E.$ = e;
                if (j)
                    E.jQuery = d;
                return b
            },
            isReady: false,
            readyWait: 1,
            ready: function(j) {
                j === true && b.readyWait--;
                if (!b.readyWait || j !== true && !b.isReady) {
                    if (!t.body)
                        return setTimeout(b.ready, 1);
                    b.isReady = true;
                    if (!(j !== true && --b.readyWait > 0))
                        if (q) {
                            var s = 0
                              , v = q;
                            for (q = null; j = v[s++]; )
                                j.call(t, b);
                            b.fn.trigger && b(t).trigger("ready").unbind("ready")
                        }
                }
            },
            bindReady: function() {
                if (!p) {
                    p = true;
                    if (t.readyState === "complete")
                        return setTimeout(b.ready, 1);
                    if (t.addEventListener) {
                        t.addEventListener("DOMContentLoaded", u, false);
                        E.addEventListener("load", b.ready, false)
                    } else if (t.attachEvent) {
                        t.attachEvent("onreadystatechange", u);
                        E.attachEvent("onload", b.ready);
                        var j = false;
                        try {
                            j = E.frameElement == null
                        } catch (s) {}
                        t.documentElement.doScroll && j && a()
                    }
                }
            },
            isFunction: function(j) {
                return b.type(j) === "function"
            },
            isArray: Array.isArray || function(j) {
                return b.type(j) === "array"
            }
            ,
            isWindow: function(j) {
                return j && typeof j === "object" && "setInterval"in j
            },
            isNaN: function(j) {
                return j == null || !r.test(j) || isNaN(j)
            },
            type: function(j) {
                return j == null ? String(j) : R[y.call(j)] || "object"
            },
            isPlainObject: function(j) {
                if (!j || b.type(j) !== "object" || j.nodeType || b.isWindow(j))
                    return false;
                if (j.constructor && !F.call(j, "constructor") && !F.call(j.constructor.prototype, "isPrototypeOf"))
                    return false;
                for (var s in j)
                    ;
                return s === B || F.call(j, s)
            },
            isEmptyObject: function(j) {
                for (var s in j)
                    return false;
                return true
            },
            error: function(j) {
                throw j;
            },
            parseJSON: function(j) {
                if (typeof j !== "string" || !j)
                    return null;
                j = b.trim(j);
                if (C.test(j.replace(J, "@").replace(w, "]").replace(I, "")))
                    return E.JSON && E.JSON.parse ? E.JSON.parse(j) : (new Function("return " + j))();
                else
                    b.error("Invalid JSON: " + j)
            },
            noop: function() {},
            globalEval: function(j) {
                if (j && l.test(j)) {
                    var s = t.getElementsByTagName("head")[0] || t.documentElement
                      , v = t.createElement("script");
                    v.type = "text/javascript";
                    if (b.support.scriptEval)
                        v.appendChild(t.createTextNode(j));
                    else
                        v.text = j;
                    s.insertBefore(v, s.firstChild);
                    s.removeChild(v)
                }
            },
            nodeName: function(j, s) {
                return j.nodeName && j.nodeName.toUpperCase() === s.toUpperCase()
            },
            each: function(j, s, v) {
                var z, H = 0, G = j.length, K = G === B || b.isFunction(j);
                if (v)
                    if (K)
                        for (z in j) {
                            if (s.apply(j[z], v) === false)
                                break
                        }
                    else
                        for (; H < G; ) {
                            if (s.apply(j[H++], v) === false)
                                break
                        }
                else if (K)
                    for (z in j) {
                        if (s.call(j[z], z, j[z]) === false)
                            break
                    }
                else
                    for (v = j[0]; H < G && s.call(v, H, v) !== false; v = j[++H])
                        ;
                return j
            },
            trim: O ? function(j) {
                return j == null ? "" : O.call(j)
            }
            : function(j) {
                return j == null ? "" : j.toString().replace(k, "").replace(o, "")
            }
            ,
            makeArray: function(j, s) {
                var v = s || [];
                if (j != null) {
                    var z = b.type(j);
                    j.length == null || z === "string" || z === "function" || z === "regexp" || b.isWindow(j) ? M.call(v, j) : b.merge(v, j)
                }
                return v
            },
            inArray: function(j, s) {
                if (s.indexOf)
                    return s.indexOf(j);
                for (var v = 0, z = s.length; v < z; v++)
                    if (s[v] === j)
                        return v;
                return -1
            },
            merge: function(j, s) {
                var v = j.length
                  , z = 0;
                if (typeof s.length === "number")
                    for (var H = s.length; z < H; z++)
                        j[v++] = s[z];
                else
                    for (; s[z] !== B; )
                        j[v++] = s[z++];
                j.length = v;
                return j
            },
            grep: function(j, s, v) {
                var z = [], H;
                v = !!v;
                for (var G = 0, K = j.length; G < K; G++) {
                    H = !!s(j[G], G);
                    v !== H && z.push(j[G])
                }
                return z
            },
            map: function(j, s, v) {
                for (var z = [], H, G = 0, K = j.length; G < K; G++) {
                    H = s(j[G], G, v);
                    if (H != null)
                        z[z.length] = H
                }
                return z.concat.apply([], z)
            },
            guid: 1,
            proxy: function(j, s, v) {
                if (arguments.length === 2)
                    if (typeof s === "string") {
                        v = j;
                        j = v[s];
                        s = B
                    } else if (s && !b.isFunction(s)) {
                        v = s;
                        s = B
                    }
                if (!s && j)
                    s = function() {
                        return j.apply(v || this, arguments)
                    }
                    ;
                if (j)
                    s.guid = j.guid = j.guid || s.guid || b.guid++;
                return s
            },
            access: function(j, s, v, z, H, G) {
                var K = j.length;
                if (typeof s === "object") {
                    for (var Q in s)
                        b.access(j, Q, s[Q], z, H, v);
                    return j
                }
                if (v !== B) {
                    z = !G && z && b.isFunction(v);
                    for (Q = 0; Q < K; Q++)
                        H(j[Q], s, z ? v.call(j[Q], Q, H(j[Q], s)) : v, G);
                    return j
                }
                return K ? H(j[0], s) : B
            },
            now: function() {
                return (new Date).getTime()
            },
            uaMatch: function(j) {
                j = j.toLowerCase();
                j = L.exec(j) || g.exec(j) || i.exec(j) || j.indexOf("compatible") < 0 && n.exec(j) || [];
                return {
                    browser: j[1] || "",
                    version: j[2] || "0"
                }
            },
            browser: {}
        });
        b.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(j, s) {
            R["[object " + s + "]"] = s.toLowerCase()
        });
        m = b.uaMatch(m);
        if (m.browser) {
            b.browser[m.browser] = true;
            b.browser.version = m.version
        }
        if (b.browser.webkit)
            b.browser.safari = true;
        if (D)
            b.inArray = function(j, s) {
                return D.call(s, j)
            }
            ;
        if (!/\s/.test("\u00a0")) {
            k = /^[\s\xA0]+/;
            o = /[\s\xA0]+$/
        }
        f = b(t);
        if (t.addEventListener)
            u = function() {
                t.removeEventListener("DOMContentLoaded", u, false);
                b.ready()
            }
            ;
        else if (t.attachEvent)
            u = function() {
                if (t.readyState === "complete") {
                    t.detachEvent("onreadystatechange", u);
                    b.ready()
                }
            }
            ;
        return E.jQuery = E.$ = b
    }();
    (function() {
        c.support = {};
        var a = t.documentElement
          , b = t.createElement("script")
          , d = t.createElement("div")
          , e = "script" + c.now();
        d.style.display = "none";
        d.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var f = d.getElementsByTagName("*")
          , h = d.getElementsByTagName("a")[0]
          , l = t.createElement("select")
          , k = l.appendChild(t.createElement("option"));
        if (!(!f || !f.length || !h)) {
            c.support = {
                leadingWhitespace: d.firstChild.nodeType === 3,
                tbody: !d.getElementsByTagName("tbody").length,
                htmlSerialize: !!d.getElementsByTagName("link").length,
                style: /red/.test(h.getAttribute("style")),
                hrefNormalized: h.getAttribute("href") === "/a",
                opacity: /^0.55$/.test(h.style.opacity),
                cssFloat: !!h.style.cssFloat,
                checkOn: d.getElementsByTagName("input")[0].value === "on",
                optSelected: k.selected,
                deleteExpando: true,
                optDisabled: false,
                checkClone: false,
                scriptEval: false,
                noCloneEvent: true,
                boxModel: null,
                inlineBlockNeedsLayout: false,
                shrinkWrapBlocks: false,
                reliableHiddenOffsets: true
            };
            l.disabled = true;
            c.support.optDisabled = !k.disabled;
            b.type = "text/javascript";
            try {
                b.appendChild(t.createTextNode("window." + e + "=1;"))
            } catch (o) {}
            a.insertBefore(b, a.firstChild);
            if (E[e]) {
                c.support.scriptEval = true;
                delete E[e]
            }
            try {
                delete b.test
            } catch (x) {
                c.support.deleteExpando = false
            }
            a.removeChild(b);
            if (d.attachEvent && d.fireEvent) {
                d.attachEvent("onclick", function r() {
                    c.support.noCloneEvent = false;
                    d.detachEvent("onclick", r)
                });
                d.cloneNode(true).fireEvent("onclick")
            }
            d = t.createElement("div");
            d.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
            a = t.createDocumentFragment();
            a.appendChild(d.firstChild);
            c.support.checkClone = a.cloneNode(true).cloneNode(true).lastChild.checked;
            c(function() {
                var r = t.createElement("div");
                r.style.width = r.style.paddingLeft = "1px";
                t.body.appendChild(r);
                c.boxModel = c.support.boxModel = r.offsetWidth === 2;
                if ("zoom"in r.style) {
                    r.style.display = "inline";
                    r.style.zoom = 1;
                    c.support.inlineBlockNeedsLayout = r.offsetWidth === 2;
                    r.style.display = "";
                    r.innerHTML = "<div style='width:4px;'></div>";
                    c.support.shrinkWrapBlocks = r.offsetWidth !== 2
                }
                r.innerHTML = "<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";
                var A = r.getElementsByTagName("td");
                c.support.reliableHiddenOffsets = A[0].offsetHeight === 0;
                A[0].style.display = "";
                A[1].style.display = "none";
                c.support.reliableHiddenOffsets = c.support.reliableHiddenOffsets && A[0].offsetHeight === 0;
                r.innerHTML = "";
                t.body.removeChild(r).style.display = "none"
            });
            a = function(r) {
                var A = t.createElement("div");
                r = "on" + r;
                var C = r in A;
                if (!C) {
                    A.setAttribute(r, "return;");
                    C = typeof A[r] === "function"
                }
                return C
            }
            ;
            c.support.submitBubbles = a("submit");
            c.support.changeBubbles = a("change");
            a = b = d = f = h = null
        }
    }
    )();
    var ra = {}
      , Ja = /^(?:\{.*\}|\[.*\])$/;
    c.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + c.now(),
        noData: {
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: true
        },
        data: function(a, b, d) {
            if (c.acceptData(a)) {
                a = a == E ? ra : a;
                var e = a.nodeType
                  , f = e ? a[c.expando] : null
                  , h = c.cache;
                if (!(e && !f && typeof b === "string" && d === B)) {
                    if (e)
                        f || (a[c.expando] = f = ++c.uuid);
                    else
                        h = a;
                    if (typeof b === "object")
                        if (e)
                            h[f] = c.extend(h[f], b);
                        else
                            c.extend(h, b);
                    else if (e && !h[f])
                        h[f] = {};
                    a = e ? h[f] : h;
                    if (d !== B)
                        a[b] = d;
                    return typeof b === "string" ? a[b] : a
                }
            }
        },
        removeData: function(a, b) {
            if (c.acceptData(a)) {
                a = a == E ? ra : a;
                var d = a.nodeType
                  , e = d ? a[c.expando] : a
                  , f = c.cache
                  , h = d ? f[e] : e;
                if (b) {
                    if (h) {
                        delete h[b];
                        d && c.isEmptyObject(h) && c.removeData(a)
                    }
                } else if (d && c.support.deleteExpando)
                    delete a[c.expando];
                else if (a.removeAttribute)
                    a.removeAttribute(c.expando);
                else if (d)
                    delete f[e];
                else
                    for (var l in a)
                        delete a[l]
            }
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = c.noData[a.nodeName.toLowerCase()];
                if (b)
                    return !(b === true || a.getAttribute("classid") !== b)
            }
            return true
        }
    });
    c.fn.extend({
        data: function(a, b) {
            var d = null;
            if (typeof a === "undefined") {
                if (this.length) {
                    var e = this[0].attributes, f;
                    d = c.data(this[0]);
                    for (var h = 0, l = e.length; h < l; h++) {
                        f = e[h].name;
                        if (f.indexOf("data-") === 0) {
                            f = f.substr(5);
                            ka(this[0], f, d[f])
                        }
                    }
                }
                return d
            } else if (typeof a === "object")
                return this.each(function() {
                    c.data(this, a)
                });
            var k = a.split(".");
            k[1] = k[1] ? "." + k[1] : "";
            if (b === B) {
                d = this.triggerHandler("getData" + k[1] + "!", [k[0]]);
                if (d === B && this.length) {
                    d = c.data(this[0], a);
                    d = ka(this[0], a, d)
                }
                return d === B && k[1] ? this.data(k[0]) : d
            } else
                return this.each(function() {
                    var o = c(this)
                      , x = [k[0], b];
                    o.triggerHandler("setData" + k[1] + "!", x);
                    c.data(this, a, b);
                    o.triggerHandler("changeData" + k[1] + "!", x)
                })
        },
        removeData: function(a) {
            return this.each(function() {
                c.removeData(this, a)
            })
        }
    });
    c.extend({
        queue: function(a, b, d) {
            if (a) {
                b = (b || "fx") + "queue";
                var e = c.data(a, b);
                if (!d)
                    return e || [];
                if (!e || c.isArray(d))
                    e = c.data(a, b, c.makeArray(d));
                else
                    e.push(d);
                return e
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var d = c.queue(a, b)
              , e = d.shift();
            if (e === "inprogress")
                e = d.shift();
            if (e) {
                b === "fx" && d.unshift("inprogress");
                e.call(a, function() {
                    c.dequeue(a, b)
                })
            }
        }
    });
    c.fn.extend({
        queue: function(a, b) {
            if (typeof a !== "string") {
                b = a;
                a = "fx"
            }
            if (b === B)
                return c.queue(this[0], a);
            return this.each(function() {
                var d = c.queue(this, a, b);
                a === "fx" && d[0] !== "inprogress" && c.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                c.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            a = c.fx ? c.fx.speeds[a] || a : a;
            b = b || "fx";
            return this.queue(b, function() {
                var d = this;
                setTimeout(function() {
                    c.dequeue(d, b)
                }, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        }
    });
    var sa = /[\n\t]/g
      , ha = /\s+/
      , Sa = /\r/g
      , Ta = /^(?:href|src|style)$/
      , Ua = /^(?:button|input)$/i
      , Va = /^(?:button|input|object|select|textarea)$/i
      , Wa = /^a(?:rea)?$/i
      , ta = /^(?:radio|checkbox)$/i;
    c.props = {
        "for": "htmlFor",
        "class": "className",
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        colspan: "colSpan",
        tabindex: "tabIndex",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    c.fn.extend({
        attr: function(a, b) {
            return c.access(this, a, b, true, c.attr)
        },
        removeAttr: function(a) {
            return this.each(function() {
                c.attr(this, a, "");
                this.nodeType === 1 && this.removeAttribute(a)
            })
        },
        addClass: function(a) {
            if (c.isFunction(a))
                return this.each(function(x) {
                    var r = c(this);
                    r.addClass(a.call(this, x, r.attr("class")))
                });
            if (a && typeof a === "string")
                for (var b = (a || "").split(ha), d = 0, e = this.length; d < e; d++) {
                    var f = this[d];
                    if (f.nodeType === 1)
                        if (f.className) {
                            for (var h = " " + f.className + " ", l = f.className, k = 0, o = b.length; k < o; k++)
                                if (h.indexOf(" " + b[k] + " ") < 0)
                                    l += " " + b[k];
                            f.className = c.trim(l)
                        } else
                            f.className = a
                }
            return this
        },
        removeClass: function(a) {
            if (c.isFunction(a))
                return this.each(function(o) {
                    var x = c(this);
                    x.removeClass(a.call(this, o, x.attr("class")))
                });
            if (a && typeof a === "string" || a === B)
                for (var b = (a || "").split(ha), d = 0, e = this.length; d < e; d++) {
                    var f = this[d];
                    if (f.nodeType === 1 && f.className)
                        if (a) {
                            for (var h = (" " + f.className + " ").replace(sa, " "), l = 0, k = b.length; l < k; l++)
                                h = h.replace(" " + b[l] + " ", " ");
                            f.className = c.trim(h)
                        } else
                            f.className = ""
                }
            return this
        },
        toggleClass: function(a, b) {
            var d = typeof a
              , e = typeof b === "boolean";
            if (c.isFunction(a))
                return this.each(function(f) {
                    var h = c(this);
                    h.toggleClass(a.call(this, f, h.attr("class"), b), b)
                });
            return this.each(function() {
                if (d === "string")
                    for (var f, h = 0, l = c(this), k = b, o = a.split(ha); f = o[h++]; ) {
                        k = e ? k : !l.hasClass(f);
                        l[k ? "addClass" : "removeClass"](f)
                    }
                else if (d === "undefined" || d === "boolean") {
                    this.className && c.data(this, "__className__", this.className);
                    this.className = this.className || a === false ? "" : c.data(this, "__className__") || ""
                }
            })
        },
        hasClass: function(a) {
            a = " " + a + " ";
            for (var b = 0, d = this.length; b < d; b++)
                if ((" " + this[b].className + " ").replace(sa, " ").indexOf(a) > -1)
                    return true;
            return false
        },
        val: function(a) {
            if (!arguments.length) {
                var b = this[0];
                if (b) {
                    if (c.nodeName(b, "option")) {
                        var d = b.attributes.value;
                        return !d || d.specified ? b.value : b.text
                    }
                    if (c.nodeName(b, "select")) {
                        var e = b.selectedIndex;
                        d = [];
                        var f = b.options;
                        b = b.type === "select-one";
                        if (e < 0)
                            return null;
                        var h = b ? e : 0;
                        for (e = b ? e + 1 : f.length; h < e; h++) {
                            var l = f[h];
                            if (l.selected && (c.support.optDisabled ? !l.disabled : l.getAttribute("disabled") === null) && (!l.parentNode.disabled || !c.nodeName(l.parentNode, "optgroup"))) {
                                a = c(l).val();
                                if (b)
                                    return a;
                                d.push(a)
                            }
                        }
                        return d
                    }
                    if (ta.test(b.type) && !c.support.checkOn)
                        return b.getAttribute("value") === null ? "on" : b.value;
                    return (b.value || "").replace(Sa, "")
                }
                return B
            }
            var k = c.isFunction(a);
            return this.each(function(o) {
                var x = c(this)
                  , r = a;
                if (this.nodeType === 1) {
                    if (k)
                        r = a.call(this, o, x.val());
                    if (r == null)
                        r = "";
                    else if (typeof r === "number")
                        r += "";
                    else if (c.isArray(r))
                        r = c.map(r, function(C) {
                            return C == null ? "" : C + ""
                        });
                    if (c.isArray(r) && ta.test(this.type))
                        this.checked = c.inArray(x.val(), r) >= 0;
                    else if (c.nodeName(this, "select")) {
                        var A = c.makeArray(r);
                        c("option", this).each(function() {
                            this.selected = c.inArray(c(this).val(), A) >= 0
                        });
                        if (!A.length)
                            this.selectedIndex = -1
                    } else
                        this.value = r
                }
            })
        }
    });
    c.extend({
        attrFn: {
            val: true,
            css: true,
            html: true,
            text: true,
            data: true,
            width: true,
            height: true,
            offset: true
        },
        attr: function(a, b, d, e) {
            if (!a || a.nodeType === 3 || a.nodeType === 8)
                return B;
            if (e && b in c.attrFn)
                return c(a)[b](d);
            e = a.nodeType !== 1 || !c.isXMLDoc(a);
            var f = d !== B;
            b = e && c.props[b] || b;
            var h = Ta.test(b);
            if ((b in a || a[b] !== B) && e && !h) {
                if (f) {
                    b === "type" && Ua.test(a.nodeName) && a.parentNode && c.error("type property can't be changed");
                    if (d === null)
                        a.nodeType === 1 && a.removeAttribute(b);
                    else
                        a[b] = d
                }
                if (c.nodeName(a, "form") && a.getAttributeNode(b))
                    return a.getAttributeNode(b).nodeValue;
                if (b === "tabIndex")
                    return (b = a.getAttributeNode("tabIndex")) && b.specified ? b.value : Va.test(a.nodeName) || Wa.test(a.nodeName) && a.href ? 0 : B;
                return a[b]
            }
            if (!c.support.style && e && b === "style") {
                if (f)
                    a.style.cssText = "" + d;
                return a.style.cssText
            }
            f && a.setAttribute(b, "" + d);
            if (!a.attributes[b] && a.hasAttribute && !a.hasAttribute(b))
                return B;
            a = !c.support.hrefNormalized && e && h ? a.getAttribute(b, 2) : a.getAttribute(b);
            return a === null ? B : a
        }
    });
    var X = /\.(.*)$/
      , ia = /^(?:textarea|input|select)$/i
      , La = /\./g
      , Ma = / /g
      , Xa = /[^\w\s.|`]/g
      , Ya = function(a) {
        return a.replace(Xa, "\\$&")
    }
      , ua = {
        focusin: 0,
        focusout: 0
    };
    c.event = {
        add: function(a, b, d, e) {
            if (!(a.nodeType === 3 || a.nodeType === 8)) {
                if (c.isWindow(a) && a !== E && !a.frameElement)
                    a = E;
                if (d === false)
                    d = U;
                else if (!d)
                    return;
                var f, h;
                if (d.handler) {
                    f = d;
                    d = f.handler
                }
                if (!d.guid)
                    d.guid = c.guid++;
                if (h = c.data(a)) {
                    var l = a.nodeType ? "events" : "__events__"
                      , k = h[l]
                      , o = h.handle;
                    if (typeof k === "function") {
                        o = k.handle;
                        k = k.events
                    } else if (!k) {
                        a.nodeType || (h[l] = h = function() {}
                        );
                        h.events = k = {}
                    }
                    if (!o)
                        h.handle = o = function() {
                            return typeof c !== "undefined" && !c.event.triggered ? c.event.handle.apply(o.elem, arguments) : B
                        }
                        ;
                    o.elem = a;
                    b = b.split(" ");
                    for (var x = 0, r; l = b[x++]; ) {
                        h = f ? c.extend({}, f) : {
                            handler: d,
                            data: e
                        };
                        if (l.indexOf(".") > -1) {
                            r = l.split(".");
                            l = r.shift();
                            h.namespace = r.slice(0).sort().join(".")
                        } else {
                            r = [];
                            h.namespace = ""
                        }
                        h.type = l;
                        if (!h.guid)
                            h.guid = d.guid;
                        var A = k[l]
                          , C = c.event.special[l] || {};
                        if (!A) {
                            A = k[l] = [];
                            if (!C.setup || C.setup.call(a, e, r, o) === false)
                                if (a.addEventListener)
                                    a.addEventListener(l, o, false);
                                else
                                    a.attachEvent && a.attachEvent("on" + l, o)
                        }
                        if (C.add) {
                            C.add.call(a, h);
                            if (!h.handler.guid)
                                h.handler.guid = d.guid
                        }
                        A.push(h);
                        c.event.global[l] = true
                    }
                    a = null
                }
            }
        },
        global: {},
        remove: function(a, b, d, e) {
            if (!(a.nodeType === 3 || a.nodeType === 8)) {
                if (d === false)
                    d = U;
                var f, h, l = 0, k, o, x, r, A, C, J = a.nodeType ? "events" : "__events__", w = c.data(a), I = w && w[J];
                if (w && I) {
                    if (typeof I === "function") {
                        w = I;
                        I = I.events
                    }
                    if (b && b.type) {
                        d = b.handler;
                        b = b.type
                    }
                    if (!b || typeof b === "string" && b.charAt(0) === ".") {
                        b = b || "";
                        for (f in I)
                            c.event.remove(a, f + b)
                    } else {
                        for (b = b.split(" "); f = b[l++]; ) {
                            r = f;
                            k = f.indexOf(".") < 0;
                            o = [];
                            if (!k) {
                                o = f.split(".");
                                f = o.shift();
                                x = RegExp("(^|\\.)" + c.map(o.slice(0).sort(), Ya).join("\\.(?:.*\\.)?") + "(\\.|$)")
                            }
                            if (A = I[f])
                                if (d) {
                                    r = c.event.special[f] || {};
                                    for (h = e || 0; h < A.length; h++) {
                                        C = A[h];
                                        if (d.guid === C.guid) {
                                            if (k || x.test(C.namespace)) {
                                                e == null && A.splice(h--, 1);
                                                r.remove && r.remove.call(a, C)
                                            }
                                            if (e != null)
                                                break
                                        }
                                    }
                                    if (A.length === 0 || e != null && A.length === 1) {
                                        if (!r.teardown || r.teardown.call(a, o) === false)
                                            c.removeEvent(a, f, w.handle);
                                        delete I[f]
                                    }
                                } else
                                    for (h = 0; h < A.length; h++) {
                                        C = A[h];
                                        if (k || x.test(C.namespace)) {
                                            c.event.remove(a, r, C.handler, h);
                                            A.splice(h--, 1)
                                        }
                                    }
                        }
                        if (c.isEmptyObject(I)) {
                            if (b = w.handle)
                                b.elem = null;
                            delete w.events;
                            delete w.handle;
                            if (typeof w === "function")
                                c.removeData(a, J);
                            else
                                c.isEmptyObject(w) && c.removeData(a)
                        }
                    }
                }
            }
        },
        trigger: function(a, b, d, e) {
            var f = a.type || a;
            if (!e) {
                a = typeof a === "object" ? a[c.expando] ? a : c.extend(c.Event(f), a) : c.Event(f);
                if (f.indexOf("!") >= 0) {
                    a.type = f = f.slice(0, -1);
                    a.exclusive = true
                }
                if (!d) {
                    a.stopPropagation();
                    c.event.global[f] && c.each(c.cache, function() {
                        this.events && this.events[f] && c.event.trigger(a, b, this.handle.elem)
                    })
                }
                if (!d || d.nodeType === 3 || d.nodeType === 8)
                    return B;
                a.result = B;
                a.target = d;
                b = c.makeArray(b);
                b.unshift(a)
            }
            a.currentTarget = d;
            (e = d.nodeType ? c.data(d, "handle") : (c.data(d, "__events__") || {}).handle) && e.apply(d, b);
            e = d.parentNode || d.ownerDocument;
            try {
                if (!(d && d.nodeName && c.noData[d.nodeName.toLowerCase()]))
                    if (d["on" + f] && d["on" + f].apply(d, b) === false) {
                        a.result = false;
                        a.preventDefault()
                    }
            } catch (h) {}
            if (!a.isPropagationStopped() && e)
                c.event.trigger(a, b, e, true);
            else if (!a.isDefaultPrevented()) {
                var l;
                e = a.target;
                var k = f.replace(X, "")
                  , o = c.nodeName(e, "a") && k === "click"
                  , x = c.event.special[k] || {};
                if ((!x._default || x._default.call(d, a) === false) && !o && !(e && e.nodeName && c.noData[e.nodeName.toLowerCase()])) {
                    try {
                        if (e[k]) {
                            if (l = e["on" + k])
                                e["on" + k] = null;
                            c.event.triggered = true;
                            e[k]()
                        }
                    } catch (r) {}
                    if (l)
                        e["on" + k] = l;
                    c.event.triggered = false
                }
            }
        },
        handle: function(a) {
            var b, d, e, f;
            d = [];
            var h = c.makeArray(arguments);
            a = h[0] = c.event.fix(a || E.event);
            a.currentTarget = this;
            b = a.type.indexOf(".") < 0 && !a.exclusive;
            if (!b) {
                e = a.type.split(".");
                a.type = e.shift();
                d = e.slice(0).sort();
                e = RegExp("(^|\\.)" + d.join("\\.(?:.*\\.)?") + "(\\.|$)")
            }
            a.namespace = a.namespace || d.join(".");
            f = c.data(this, this.nodeType ? "events" : "__events__");
            if (typeof f === "function")
                f = f.events;
            d = (f || {})[a.type];
            if (f && d) {
                d = d.slice(0);
                f = 0;
                for (var l = d.length; f < l; f++) {
                    var k = d[f];
                    if (b || e.test(k.namespace)) {
                        a.handler = k.handler;
                        a.data = k.data;
                        a.handleObj = k;
                        k = k.handler.apply(this, h);
                        if (k !== B) {
                            a.result = k;
                            if (k === false) {
                                a.preventDefault();
                                a.stopPropagation()
                            }
                        }
                        if (a.isImmediatePropagationStopped())
                            break
                    }
                }
            }
            return a.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function(a) {
            if (a[c.expando])
                return a;
            var b = a;
            a = c.Event(b);
            for (var d = this.props.length, e; d; ) {
                e = this.props[--d];
                a[e] = b[e]
            }
            if (!a.target)
                a.target = a.srcElement || t;
            if (a.target.nodeType === 3)
                a.target = a.target.parentNode;
            if (!a.relatedTarget && a.fromElement)
                a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement;
            if (a.pageX == null && a.clientX != null) {
                b = t.documentElement;
                d = t.body;
                a.pageX = a.clientX + (b && b.scrollLeft || d && d.scrollLeft || 0) - (b && b.clientLeft || d && d.clientLeft || 0);
                a.pageY = a.clientY + (b && b.scrollTop || d && d.scrollTop || 0) - (b && b.clientTop || d && d.clientTop || 0)
            }
            if (a.which == null && (a.charCode != null || a.keyCode != null))
                a.which = a.charCode != null ? a.charCode : a.keyCode;
            if (!a.metaKey && a.ctrlKey)
                a.metaKey = a.ctrlKey;
            if (!a.which && a.button !== B)
                a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0;
            return a
        },
        guid: 1E8,
        proxy: c.proxy,
        special: {
            ready: {
                setup: c.bindReady,
                teardown: c.noop
            },
            live: {
                add: function(a) {
                    c.event.add(this, Y(a.origType, a.selector), c.extend({}, a, {
                        handler: Ka,
                        guid: a.handler.guid
                    }))
                },
                remove: function(a) {
                    c.event.remove(this, Y(a.origType, a.selector), a)
                }
            },
            beforeunload: {
                setup: function(a, b, d) {
                    if (c.isWindow(this))
                        this.onbeforeunload = d
                },
                teardown: function(a, b) {
                    if (this.onbeforeunload === b)
                        this.onbeforeunload = null
                }
            }
        }
    };
    c.removeEvent = t.removeEventListener ? function(a, b, d) {
        a.removeEventListener && a.removeEventListener(b, d, false)
    }
    : function(a, b, d) {
        a.detachEvent && a.detachEvent("on" + b, d)
    }
    ;
    c.Event = function(a) {
        if (!this.preventDefault)
            return new c.Event(a);
        if (a && a.type) {
            this.originalEvent = a;
            this.type = a.type
        } else
            this.type = a;
        this.timeStamp = c.now();
        this[c.expando] = true
    }
    ;
    c.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = ca;
            var a = this.originalEvent;
            if (a)
                if (a.preventDefault)
                    a.preventDefault();
                else
                    a.returnValue = false
        },
        stopPropagation: function() {
            this.isPropagationStopped = ca;
            var a = this.originalEvent;
            if (a) {
                a.stopPropagation && a.stopPropagation();
                a.cancelBubble = true
            }
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = ca;
            this.stopPropagation()
        },
        isDefaultPrevented: U,
        isPropagationStopped: U,
        isImmediatePropagationStopped: U
    };
    var va = function(a) {
        var b = a.relatedTarget;
        try {
            for (; b && b !== this; )
                b = b.parentNode;
            if (b !== this) {
                a.type = a.data;
                c.event.handle.apply(this, arguments)
            }
        } catch (d) {}
    }
      , wa = function(a) {
        a.type = a.data;
        c.event.handle.apply(this, arguments)
    };
    c.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        c.event.special[a] = {
            setup: function(d) {
                c.event.add(this, b, d && d.selector ? wa : va, a)
            },
            teardown: function(d) {
                c.event.remove(this, b, d && d.selector ? wa : va)
            }
        }
    });
    if (!c.support.submitBubbles)
        c.event.special.submit = {
            setup: function() {
                if (this.nodeName.toLowerCase() !== "form") {
                    c.event.add(this, "click.specialSubmit", function(a) {
                        var b = a.target
                          , d = b.type;
                        if ((d === "submit" || d === "image") && c(b).closest("form").length) {
                            a.liveFired = B;
                            return la("submit", this, arguments)
                        }
                    });
                    c.event.add(this, "keypress.specialSubmit", function(a) {
                        var b = a.target
                          , d = b.type;
                        if ((d === "text" || d === "password") && c(b).closest("form").length && a.keyCode === 13) {
                            a.liveFired = B;
                            return la("submit", this, arguments)
                        }
                    })
                } else
                    return false
            },
            teardown: function() {
                c.event.remove(this, ".specialSubmit")
            }
        };
    if (!c.support.changeBubbles) {
        var V, xa = function(a) {
            var b = a.type
              , d = a.value;
            if (b === "radio" || b === "checkbox")
                d = a.checked;
            else if (b === "select-multiple")
                d = a.selectedIndex > -1 ? c.map(a.options, function(e) {
                    return e.selected
                }).join("-") : "";
            else if (a.nodeName.toLowerCase() === "select")
                d = a.selectedIndex;
            return d
        }, Z = function(a, b) {
            var d = a.target, e, f;
            if (!(!ia.test(d.nodeName) || d.readOnly)) {
                e = c.data(d, "_change_data");
                f = xa(d);
                if (a.type !== "focusout" || d.type !== "radio")
                    c.data(d, "_change_data", f);
                if (!(e === B || f === e))
                    if (e != null || f) {
                        a.type = "change";
                        a.liveFired = B;
                        return c.event.trigger(a, b, d)
                    }
            }
        };
        c.event.special.change = {
            filters: {
                focusout: Z,
                beforedeactivate: Z,
                click: function(a) {
                    var b = a.target
                      , d = b.type;
                    if (d === "radio" || d === "checkbox" || b.nodeName.toLowerCase() === "select")
                        return Z.call(this, a)
                },
                keydown: function(a) {
                    var b = a.target
                      , d = b.type;
                    if (a.keyCode === 13 && b.nodeName.toLowerCase() !== "textarea" || a.keyCode === 32 && (d === "checkbox" || d === "radio") || d === "select-multiple")
                        return Z.call(this, a)
                },
                beforeactivate: function(a) {
                    a = a.target;
                    c.data(a, "_change_data", xa(a))
                }
            },
            setup: function() {
                if (this.type === "file")
                    return false;
                for (var a in V)
                    c.event.add(this, a + ".specialChange", V[a]);
                return ia.test(this.nodeName)
            },
            teardown: function() {
                c.event.remove(this, ".specialChange");
                return ia.test(this.nodeName)
            }
        };
        V = c.event.special.change.filters;
        V.focus = V.beforeactivate
    }
    t.addEventListener && c.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        function d(e) {
            e = c.event.fix(e);
            e.type = b;
            return c.event.trigger(e, null, e.target)
        }
        c.event.special[b] = {
            setup: function() {
                ua[b]++ === 0 && t.addEventListener(a, d, true)
            },
            teardown: function() {
                --ua[b] === 0 && t.removeEventListener(a, d, true)
            }
        }
    });
    c.each(["bind", "one"], function(a, b) {
        c.fn[b] = function(d, e, f) {
            if (typeof d === "object") {
                for (var h in d)
                    this[b](h, e, d[h], f);
                return this
            }
            if (c.isFunction(e) || e === false) {
                f = e;
                e = B
            }
            var l = b === "one" ? c.proxy(f, function(o) {
                c(this).unbind(o, l);
                return f.apply(this, arguments)
            }) : f;
            if (d === "unload" && b !== "one")
                this.one(d, e, f);
            else {
                h = 0;
                for (var k = this.length; h < k; h++)
                    c.event.add(this[h], d, l, e)
            }
            return this
        }
    });
    c.fn.extend({
        unbind: function(a, b) {
            if (typeof a === "object" && !a.preventDefault)
                for (var d in a)
                    this.unbind(d, a[d]);
            else {
                d = 0;
                for (var e = this.length; d < e; d++)
                    c.event.remove(this[d], a, b)
            }
            return this
        },
        delegate: function(a, b, d, e) {
            return this.live(b, d, e, a)
        },
        undelegate: function(a, b, d) {
            return arguments.length === 0 ? this.unbind("live") : this.die(b, null, d, a)
        },
        trigger: function(a, b) {
            return this.each(function() {
                c.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            if (this[0]) {
                var d = c.Event(a);
                d.preventDefault();
                d.stopPropagation();
                c.event.trigger(d, b, this[0]);
                return d.result
            }
        },
        toggle: function(a) {
            for (var b = arguments, d = 1; d < b.length; )
                c.proxy(a, b[d++]);
            return this.click(c.proxy(a, function(e) {
                var f = (c.data(this, "lastToggle" + a.guid) || 0) % d;
                c.data(this, "lastToggle" + a.guid, f + 1);
                e.preventDefault();
                return b[f].apply(this, arguments) || false
            }))
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var ya = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    c.each(["live", "die"], function(a, b) {
        c.fn[b] = function(d, e, f, h) {
            var l, k = 0, o, x, r = h || this.selector;
            h = h ? this : c(this.context);
            if (typeof d === "object" && !d.preventDefault) {
                for (l in d)
                    h[b](l, e, d[l], r);
                return this
            }
            if (c.isFunction(e)) {
                f = e;
                e = B
            }
            for (d = (d || "").split(" "); (l = d[k++]) != null; ) {
                o = X.exec(l);
                x = "";
                if (o) {
                    x = o[0];
                    l = l.replace(X, "")
                }
                if (l === "hover")
                    d.push("mouseenter" + x, "mouseleave" + x);
                else {
                    o = l;
                    if (l === "focus" || l === "blur") {
                        d.push(ya[l] + x);
                        l += x
                    } else
                        l = (ya[l] || l) + x;
                    if (b === "live") {
                        x = 0;
                        for (var A = h.length; x < A; x++)
                            c.event.add(h[x], "live." + Y(l, r), {
                                data: e,
                                selector: r,
                                handler: f,
                                origType: l,
                                origHandler: f,
                                preType: o
                            })
                    } else
                        h.unbind("live." + Y(l, r), f)
                }
            }
            return this
        }
    });
    c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(a, b) {
        c.fn[b] = function(d, e) {
            if (e == null) {
                e = d;
                d = null
            }
            return arguments.length > 0 ? this.bind(b, d, e) : this.trigger(b)
        }
        ;
        if (c.attrFn)
            c.attrFn[b] = true
    });
    E.attachEvent && !E.addEventListener && c(E).bind("unload", function() {
        for (var a in c.cache)
            if (c.cache[a].handle)
                try {
                    c.event.remove(c.cache[a].handle.elem)
                } catch (b) {}
    });
    (function() {
        function a(g, i, n, m, p, q) {
            p = 0;
            for (var u = m.length; p < u; p++) {
                var y = m[p];
                if (y) {
                    var F = false;
                    for (y = y[g]; y; ) {
                        if (y.sizcache === n) {
                            F = m[y.sizset];
                            break
                        }
                        if (y.nodeType === 1 && !q) {
                            y.sizcache = n;
                            y.sizset = p
                        }
                        if (y.nodeName.toLowerCase() === i) {
                            F = y;
                            break
                        }
                        y = y[g]
                    }
                    m[p] = F
                }
            }
        }
        function b(g, i, n, m, p, q) {
            p = 0;
            for (var u = m.length; p < u; p++) {
                var y = m[p];
                if (y) {
                    var F = false;
                    for (y = y[g]; y; ) {
                        if (y.sizcache === n) {
                            F = m[y.sizset];
                            break
                        }
                        if (y.nodeType === 1) {
                            if (!q) {
                                y.sizcache = n;
                                y.sizset = p
                            }
                            if (typeof i !== "string") {
                                if (y === i) {
                                    F = true;
                                    break
                                }
                            } else if (k.filter(i, [y]).length > 0) {
                                F = y;
                                break
                            }
                        }
                        y = y[g]
                    }
                    m[p] = F
                }
            }
        }
        var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g
          , e = 0
          , f = Object.prototype.toString
          , h = false
          , l = true;
        [0, 0].sort(function() {
            l = false;
            return 0
        });
        var k = function(g, i, n, m) {
            n = n || [];
            var p = i = i || t;
            if (i.nodeType !== 1 && i.nodeType !== 9)
                return [];
            if (!g || typeof g !== "string")
                return n;
            var q, u, y, F, M, N = true, O = k.isXML(i), D = [], R = g;
            do {
                d.exec("");
                if (q = d.exec(R)) {
                    R = q[3];
                    D.push(q[1]);
                    if (q[2]) {
                        F = q[3];
                        break
                    }
                }
            } while (q);
            if (D.length > 1 && x.exec(g))
                if (D.length === 2 && o.relative[D[0]])
                    u = L(D[0] + D[1], i);
                else
                    for (u = o.relative[D[0]] ? [i] : k(D.shift(), i); D.length; ) {
                        g = D.shift();
                        if (o.relative[g])
                            g += D.shift();
                        u = L(g, u)
                    }
            else {
                if (!m && D.length > 1 && i.nodeType === 9 && !O && o.match.ID.test(D[0]) && !o.match.ID.test(D[D.length - 1])) {
                    q = k.find(D.shift(), i, O);
                    i = q.expr ? k.filter(q.expr, q.set)[0] : q.set[0]
                }
                if (i) {
                    q = m ? {
                        expr: D.pop(),
                        set: C(m)
                    } : k.find(D.pop(), D.length === 1 && (D[0] === "~" || D[0] === "+") && i.parentNode ? i.parentNode : i, O);
                    u = q.expr ? k.filter(q.expr, q.set) : q.set;
                    if (D.length > 0)
                        y = C(u);
                    else
                        N = false;
                    for (; D.length; ) {
                        q = M = D.pop();
                        if (o.relative[M])
                            q = D.pop();
                        else
                            M = "";
                        if (q == null)
                            q = i;
                        o.relative[M](y, q, O)
                    }
                } else
                    y = []
            }
            y || (y = u);
            y || k.error(M || g);
            if (f.call(y) === "[object Array]")
                if (N)
                    if (i && i.nodeType === 1)
                        for (g = 0; y[g] != null; g++) {
                            if (y[g] && (y[g] === true || y[g].nodeType === 1 && k.contains(i, y[g])))
                                n.push(u[g])
                        }
                    else
                        for (g = 0; y[g] != null; g++)
                            y[g] && y[g].nodeType === 1 && n.push(u[g]);
                else
                    n.push.apply(n, y);
            else
                C(y, n);
            if (F) {
                k(F, p, n, m);
                k.uniqueSort(n)
            }
            return n
        };
        k.uniqueSort = function(g) {
            if (w) {
                h = l;
                g.sort(w);
                if (h)
                    for (var i = 1; i < g.length; i++)
                        g[i] === g[i - 1] && g.splice(i--, 1)
            }
            return g
        }
        ;
        k.matches = function(g, i) {
            return k(g, null, null, i)
        }
        ;
        k.matchesSelector = function(g, i) {
            return k(i, null, null, [g]).length > 0
        }
        ;
        k.find = function(g, i, n) {
            var m;
            if (!g)
                return [];
            for (var p = 0, q = o.order.length; p < q; p++) {
                var u, y = o.order[p];
                if (u = o.leftMatch[y].exec(g)) {
                    var F = u[1];
                    u.splice(1, 1);
                    if (F.substr(F.length - 1) !== "\\") {
                        u[1] = (u[1] || "").replace(/\\/g, "");
                        m = o.find[y](u, i, n);
                        if (m != null) {
                            g = g.replace(o.match[y], "");
                            break
                        }
                    }
                }
            }
            m || (m = i.getElementsByTagName("*"));
            return {
                set: m,
                expr: g
            }
        }
        ;
        k.filter = function(g, i, n, m) {
            for (var p, q, u = g, y = [], F = i, M = i && i[0] && k.isXML(i[0]); g && i.length; ) {
                for (var N in o.filter)
                    if ((p = o.leftMatch[N].exec(g)) != null && p[2]) {
                        var O, D, R = o.filter[N];
                        D = p[1];
                        q = false;
                        p.splice(1, 1);
                        if (D.substr(D.length - 1) !== "\\") {
                            if (F === y)
                                y = [];
                            if (o.preFilter[N])
                                if (p = o.preFilter[N](p, F, n, y, m, M)) {
                                    if (p === true)
                                        continue
                                } else
                                    q = O = true;
                            if (p)
                                for (var j = 0; (D = F[j]) != null; j++)
                                    if (D) {
                                        O = R(D, p, j, F);
                                        var s = m ^ !!O;
                                        if (n && O != null)
                                            if (s)
                                                q = true;
                                            else
                                                F[j] = false;
                                        else if (s) {
                                            y.push(D);
                                            q = true
                                        }
                                    }
                            if (O !== B) {
                                n || (F = y);
                                g = g.replace(o.match[N], "");
                                if (!q)
                                    return [];
                                break
                            }
                        }
                    }
                if (g === u)
                    if (q == null)
                        k.error(g);
                    else
                        break;
                u = g
            }
            return F
        }
        ;
        k.error = function(g) {
            throw "Syntax error, unrecognized expression: " + g;
        }
        ;
        var o = k.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(g) {
                    return g.getAttribute("href")
                }
            },
            relative: {
                "+": function(g, i) {
                    var n = typeof i === "string"
                      , m = n && !/\W/.test(i);
                    n = n && !m;
                    if (m)
                        i = i.toLowerCase();
                    m = 0;
                    for (var p = g.length, q; m < p; m++)
                        if (q = g[m]) {
                            for (; (q = q.previousSibling) && q.nodeType !== 1; )
                                ;
                            g[m] = n || q && q.nodeName.toLowerCase() === i ? q || false : q === i
                        }
                    n && k.filter(i, g, true)
                },
                ">": function(g, i) {
                    var n, m = typeof i === "string", p = 0, q = g.length;
                    if (m && !/\W/.test(i))
                        for (i = i.toLowerCase(); p < q; p++) {
                            if (n = g[p]) {
                                n = n.parentNode;
                                g[p] = n.nodeName.toLowerCase() === i ? n : false
                            }
                        }
                    else {
                        for (; p < q; p++)
                            if (n = g[p])
                                g[p] = m ? n.parentNode : n.parentNode === i;
                        m && k.filter(i, g, true)
                    }
                },
                "": function(g, i, n) {
                    var m, p = e++, q = b;
                    if (typeof i === "string" && !/\W/.test(i)) {
                        m = i = i.toLowerCase();
                        q = a
                    }
                    q("parentNode", i, p, g, m, n)
                },
                "~": function(g, i, n) {
                    var m, p = e++, q = b;
                    if (typeof i === "string" && !/\W/.test(i)) {
                        m = i = i.toLowerCase();
                        q = a
                    }
                    q("previousSibling", i, p, g, m, n)
                }
            },
            find: {
                ID: function(g, i, n) {
                    if (typeof i.getElementById !== "undefined" && !n)
                        return (g = i.getElementById(g[1])) && g.parentNode ? [g] : []
                },
                NAME: function(g, i) {
                    if (typeof i.getElementsByName !== "undefined") {
                        for (var n = [], m = i.getElementsByName(g[1]), p = 0, q = m.length; p < q; p++)
                            m[p].getAttribute("name") === g[1] && n.push(m[p]);
                        return n.length === 0 ? null : n
                    }
                },
                TAG: function(g, i) {
                    return i.getElementsByTagName(g[1])
                }
            },
            preFilter: {
                CLASS: function(g, i, n, m, p, q) {
                    g = " " + g[1].replace(/\\/g, "") + " ";
                    if (q)
                        return g;
                    q = 0;
                    for (var u; (u = i[q]) != null; q++)
                        if (u)
                            if (p ^ (u.className && (" " + u.className + " ").replace(/[\t\n]/g, " ").indexOf(g) >= 0))
                                n || m.push(u);
                            else if (n)
                                i[q] = false;
                    return false
                },
                ID: function(g) {
                    return g[1].replace(/\\/g, "")
                },
                TAG: function(g) {
                    return g[1].toLowerCase()
                },
                CHILD: function(g) {
                    if (g[1] === "nth") {
                        var i = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2] === "even" && "2n" || g[2] === "odd" && "2n+1" || !/\D/.test(g[2]) && "0n+" + g[2] || g[2]);
                        g[2] = i[1] + (i[2] || 1) - 0;
                        g[3] = i[3] - 0
                    }
                    g[0] = e++;
                    return g
                },
                ATTR: function(g, i, n, m, p, q) {
                    i = g[1].replace(/\\/g, "");
                    if (!q && o.attrMap[i])
                        g[1] = o.attrMap[i];
                    if (g[2] === "~=")
                        g[4] = " " + g[4] + " ";
                    return g
                },
                PSEUDO: function(g, i, n, m, p) {
                    if (g[1] === "not")
                        if ((d.exec(g[3]) || "").length > 1 || /^\w/.test(g[3]))
                            g[3] = k(g[3], null, null, i);
                        else {
                            g = k.filter(g[3], i, n, true ^ p);
                            n || m.push.apply(m, g);
                            return false
                        }
                    else if (o.match.POS.test(g[0]) || o.match.CHILD.test(g[0]))
                        return true;
                    return g
                },
                POS: function(g) {
                    g.unshift(true);
                    return g
                }
            },
            filters: {
                enabled: function(g) {
                    return g.disabled === false && g.type !== "hidden"
                },
                disabled: function(g) {
                    return g.disabled === true
                },
                checked: function(g) {
                    return g.checked === true
                },
                selected: function(g) {
                    return g.selected === true
                },
                parent: function(g) {
                    return !!g.firstChild
                },
                empty: function(g) {
                    return !g.firstChild
                },
                has: function(g, i, n) {
                    return !!k(n[3], g).length
                },
                header: function(g) {
                    return /h\d/i.test(g.nodeName)
                },
                text: function(g) {
                    return "text" === g.type
                },
                radio: function(g) {
                    return "radio" === g.type
                },
                checkbox: function(g) {
                    return "checkbox" === g.type
                },
                file: function(g) {
                    return "file" === g.type
                },
                password: function(g) {
                    return "password" === g.type
                },
                submit: function(g) {
                    return "submit" === g.type
                },
                image: function(g) {
                    return "image" === g.type
                },
                reset: function(g) {
                    return "reset" === g.type
                },
                button: function(g) {
                    return "button" === g.type || g.nodeName.toLowerCase() === "button"
                },
                input: function(g) {
                    return /input|select|textarea|button/i.test(g.nodeName)
                }
            },
            setFilters: {
                first: function(g, i) {
                    return i === 0
                },
                last: function(g, i, n, m) {
                    return i === m.length - 1
                },
                even: function(g, i) {
                    return i % 2 === 0
                },
                odd: function(g, i) {
                    return i % 2 === 1
                },
                lt: function(g, i, n) {
                    return i < n[3] - 0
                },
                gt: function(g, i, n) {
                    return i > n[3] - 0
                },
                nth: function(g, i, n) {
                    return n[3] - 0 === i
                },
                eq: function(g, i, n) {
                    return n[3] - 0 === i
                }
            },
            filter: {
                PSEUDO: function(g, i, n, m) {
                    var p = i[1]
                      , q = o.filters[p];
                    if (q)
                        return q(g, n, i, m);
                    else if (p === "contains")
                        return (g.textContent || g.innerText || k.getText([g]) || "").indexOf(i[3]) >= 0;
                    else if (p === "not") {
                        i = i[3];
                        n = 0;
                        for (m = i.length; n < m; n++)
                            if (i[n] === g)
                                return false;
                        return true
                    } else
                        k.error("Syntax error, unrecognized expression: " + p)
                },
                CHILD: function(g, i) {
                    var n = i[1]
                      , m = g;
                    switch (n) {
                    case "only":
                    case "first":
                        for (; m = m.previousSibling; )
                            if (m.nodeType === 1)
                                return false;
                        if (n === "first")
                            return true;
                        m = g;
                    case "last":
                        for (; m = m.nextSibling; )
                            if (m.nodeType === 1)
                                return false;
                        return true;
                    case "nth":
                        n = i[2];
                        var p = i[3];
                        if (n === 1 && p === 0)
                            return true;
                        var q = i[0]
                          , u = g.parentNode;
                        if (u && (u.sizcache !== q || !g.nodeIndex)) {
                            var y = 0;
                            for (m = u.firstChild; m; m = m.nextSibling)
                                if (m.nodeType === 1)
                                    m.nodeIndex = ++y;
                            u.sizcache = q
                        }
                        m = g.nodeIndex - p;
                        return n === 0 ? m === 0 : m % n === 0 && m / n >= 0
                    }
                },
                ID: function(g, i) {
                    return g.nodeType === 1 && g.getAttribute("id") === i
                },
                TAG: function(g, i) {
                    return i === "*" && g.nodeType === 1 || g.nodeName.toLowerCase() === i
                },
                CLASS: function(g, i) {
                    return (" " + (g.className || g.getAttribute("class")) + " ").indexOf(i) > -1
                },
                ATTR: function(g, i) {
                    var n = i[1];
                    n = o.attrHandle[n] ? o.attrHandle[n](g) : g[n] != null ? g[n] : g.getAttribute(n);
                    var m = n + ""
                      , p = i[2]
                      , q = i[4];
                    return n == null ? p === "!=" : p === "=" ? m === q : p === "*=" ? m.indexOf(q) >= 0 : p === "~=" ? (" " + m + " ").indexOf(q) >= 0 : !q ? m && n !== false : p === "!=" ? m !== q : p === "^=" ? m.indexOf(q) === 0 : p === "$=" ? m.substr(m.length - q.length) === q : p === "|=" ? m === q || m.substr(0, q.length + 1) === q + "-" : false
                },
                POS: function(g, i, n, m) {
                    var p = o.setFilters[i[2]];
                    if (p)
                        return p(g, n, i, m)
                }
            }
        }, x = o.match.POS, r = function(g, i) {
            return "\\" + (i - 0 + 1)
        }, A;
        for (A in o.match) {
            o.match[A] = RegExp(o.match[A].source + /(?![^\[]*\])(?![^\(]*\))/.source);
            o.leftMatch[A] = RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[A].source.replace(/\\(\d+)/g, r))
        }
        var C = function(g, i) {
            g = Array.prototype.slice.call(g, 0);
            if (i) {
                i.push.apply(i, g);
                return i
            }
            return g
        };
        try {
            Array.prototype.slice.call(t.documentElement.childNodes, 0)
        } catch (J) {
            C = function(g, i) {
                var n = 0
                  , m = i || [];
                if (f.call(g) === "[object Array]")
                    Array.prototype.push.apply(m, g);
                else if (typeof g.length === "number")
                    for (var p = g.length; n < p; n++)
                        m.push(g[n]);
                else
                    for (; g[n]; n++)
                        m.push(g[n]);
                return m
            }
        }
        var w, I;
        if (t.documentElement.compareDocumentPosition)
            w = function(g, i) {
                if (g === i) {
                    h = true;
                    return 0
                }
                if (!g.compareDocumentPosition || !i.compareDocumentPosition)
                    return g.compareDocumentPosition ? -1 : 1;
                return g.compareDocumentPosition(i) & 4 ? -1 : 1
            }
            ;
        else {
            w = function(g, i) {
                var n, m, p = [], q = [];
                n = g.parentNode;
                m = i.parentNode;
                var u = n;
                if (g === i) {
                    h = true;
                    return 0
                } else if (n === m)
                    return I(g, i);
                else if (n) {
                    if (!m)
                        return 1
                } else
                    return -1;
                for (; u; ) {
                    p.unshift(u);
                    u = u.parentNode
                }
                for (u = m; u; ) {
                    q.unshift(u);
                    u = u.parentNode
                }
                n = p.length;
                m = q.length;
                for (u = 0; u < n && u < m; u++)
                    if (p[u] !== q[u])
                        return I(p[u], q[u]);
                return u === n ? I(g, q[u], -1) : I(p[u], i, 1)
            }
            ;
            I = function(g, i, n) {
                if (g === i)
                    return n;
                for (g = g.nextSibling; g; ) {
                    if (g === i)
                        return -1;
                    g = g.nextSibling
                }
                return 1
            }
        }
        k.getText = function(g) {
            for (var i = "", n, m = 0; g[m]; m++) {
                n = g[m];
                if (n.nodeType === 3 || n.nodeType === 4)
                    i += n.nodeValue;
                else if (n.nodeType !== 8)
                    i += k.getText(n.childNodes)
            }
            return i
        }
        ;
        (function() {
            var g = t.createElement("div")
              , i = "script" + (new Date).getTime()
              , n = t.documentElement;
            g.innerHTML = "<a name='" + i + "'/>";
            n.insertBefore(g, n.firstChild);
            if (t.getElementById(i)) {
                o.find.ID = function(m, p, q) {
                    if (typeof p.getElementById !== "undefined" && !q)
                        return (p = p.getElementById(m[1])) ? p.id === m[1] || typeof p.getAttributeNode !== "undefined" && p.getAttributeNode("id").nodeValue === m[1] ? [p] : B : []
                }
                ;
                o.filter.ID = function(m, p) {
                    var q = typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id");
                    return m.nodeType === 1 && q && q.nodeValue === p
                }
            }
            n.removeChild(g);
            n = g = null
        }
        )();
        (function() {
            var g = t.createElement("div");
            g.appendChild(t.createComment(""));
            if (g.getElementsByTagName("*").length > 0)
                o.find.TAG = function(i, n) {
                    var m = n.getElementsByTagName(i[1]);
                    if (i[1] === "*") {
                        for (var p = [], q = 0; m[q]; q++)
                            m[q].nodeType === 1 && p.push(m[q]);
                        m = p
                    }
                    return m
                }
                ;
            g.innerHTML = "<a href='#'></a>";
            if (g.firstChild && typeof g.firstChild.getAttribute !== "undefined" && g.firstChild.getAttribute("href") !== "#")
                o.attrHandle.href = function(i) {
                    return i.getAttribute("href", 2)
                }
                ;
            g = null
        }
        )();
        t.querySelectorAll && function() {
            var g = k
              , i = t.createElement("div");
            i.innerHTML = "<p class='TEST'></p>";
            if (!(i.querySelectorAll && i.querySelectorAll(".TEST").length === 0)) {
                k = function(m, p, q, u) {
                    p = p || t;
                    m = m.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!u && !k.isXML(p))
                        if (p.nodeType === 9)
                            try {
                                return C(p.querySelectorAll(m), q)
                            } catch (y) {}
                        else if (p.nodeType === 1 && p.nodeName.toLowerCase() !== "object") {
                            var F = p.getAttribute("id")
                              , M = F || "__sizzle__";
                            F || p.setAttribute("id", M);
                            try {
                                return C(p.querySelectorAll("#" + M + " " + m), q)
                            } catch (N) {} finally {
                                F || p.removeAttribute("id")
                            }
                        }
                    return g(m, p, q, u)
                }
                ;
                for (var n in g)
                    k[n] = g[n];
                i = null
            }
        }();
        (function() {
            var g = t.documentElement
              , i = g.matchesSelector || g.mozMatchesSelector || g.webkitMatchesSelector || g.msMatchesSelector
              , n = false;
            try {
                i.call(t.documentElement, "[test!='']:sizzle")
            } catch (m) {
                n = true
            }
            if (i)
                k.matchesSelector = function(p, q) {
                    q = q.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!k.isXML(p))
                        try {
                            if (n || !o.match.PSEUDO.test(q) && !/!=/.test(q))
                                return i.call(p, q)
                        } catch (u) {}
                    return k(q, null, null, [p]).length > 0
                }
        }
        )();
        (function() {
            var g = t.createElement("div");
            g.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!(!g.getElementsByClassName || g.getElementsByClassName("e").length === 0)) {
                g.lastChild.className = "e";
                if (g.getElementsByClassName("e").length !== 1) {
                    o.order.splice(1, 0, "CLASS");
                    o.find.CLASS = function(i, n, m) {
                        if (typeof n.getElementsByClassName !== "undefined" && !m)
                            return n.getElementsByClassName(i[1])
                    }
                    ;
                    g = null
                }
            }
        }
        )();
        k.contains = t.documentElement.contains ? function(g, i) {
            return g !== i && (g.contains ? g.contains(i) : true)
        }
        : t.documentElement.compareDocumentPosition ? function(g, i) {
            return !!(g.compareDocumentPosition(i) & 16)
        }
        : function() {
            return false
        }
        ;
        k.isXML = function(g) {
            return (g = (g ? g.ownerDocument || g : 0).documentElement) ? g.nodeName !== "HTML" : false
        }
        ;
        var L = function(g, i) {
            for (var n, m = [], p = "", q = i.nodeType ? [i] : i; n = o.match.PSEUDO.exec(g); ) {
                p += n[0];
                g = g.replace(o.match.PSEUDO, "")
            }
            g = o.relative[g] ? g + "*" : g;
            n = 0;
            for (var u = q.length; n < u; n++)
                k(g, q[n], m);
            return k.filter(p, m)
        };
        c.find = k;
        c.expr = k.selectors;
        c.expr[":"] = c.expr.filters;
        c.unique = k.uniqueSort;
        c.text = k.getText;
        c.isXMLDoc = k.isXML;
        c.contains = k.contains
    }
    )();
    var Za = /Until$/
      , $a = /^(?:parents|prevUntil|prevAll)/
      , ab = /,/
      , Na = /^.[^:#\[\.,]*$/
      , bb = Array.prototype.slice
      , cb = c.expr.match.POS;
    c.fn.extend({
        find: function(a) {
            for (var b = this.pushStack("", "find", a), d = 0, e = 0, f = this.length; e < f; e++) {
                d = b.length;
                c.find(a, this[e], b);
                if (e > 0)
                    for (var h = d; h < b.length; h++)
                        for (var l = 0; l < d; l++)
                            if (b[l] === b[h]) {
                                b.splice(h--, 1);
                                break
                            }
            }
            return b
        },
        has: function(a) {
            var b = c(a);
            return this.filter(function() {
                for (var d = 0, e = b.length; d < e; d++)
                    if (c.contains(this, b[d]))
                        return true
            })
        },
        not: function(a) {
            return this.pushStack(ma(this, a, false), "not", a)
        },
        filter: function(a) {
            return this.pushStack(ma(this, a, true), "filter", a)
        },
        is: function(a) {
            return !!a && c.filter(a, this).length > 0
        },
        closest: function(a, b) {
            var d = [], e, f, h = this[0];
            if (c.isArray(a)) {
                var l, k = {}, o = 1;
                if (h && a.length) {
                    e = 0;
                    for (f = a.length; e < f; e++) {
                        l = a[e];
                        k[l] || (k[l] = c.expr.match.POS.test(l) ? c(l, b || this.context) : l)
                    }
                    for (; h && h.ownerDocument && h !== b; ) {
                        for (l in k) {
                            e = k[l];
                            if (e.jquery ? e.index(h) > -1 : c(h).is(e))
                                d.push({
                                    selector: l,
                                    elem: h,
                                    level: o
                                })
                        }
                        h = h.parentNode;
                        o++
                    }
                }
                return d
            }
            l = cb.test(a) ? c(a, b || this.context) : null;
            e = 0;
            for (f = this.length; e < f; e++)
                for (h = this[e]; h; )
                    if (l ? l.index(h) > -1 : c.find.matchesSelector(h, a)) {
                        d.push(h);
                        break
                    } else {
                        h = h.parentNode;
                        if (!h || !h.ownerDocument || h === b)
                            break
                    }
            d = d.length > 1 ? c.unique(d) : d;
            return this.pushStack(d, "closest", a)
        },
        index: function(a) {
            if (!a || typeof a === "string")
                return c.inArray(this[0], a ? c(a) : this.parent().children());
            return c.inArray(a.jquery ? a[0] : a, this)
        },
        add: function(a, b) {
            var d = typeof a === "string" ? c(a, b || this.context) : c.makeArray(a)
              , e = c.merge(this.get(), d);
            return this.pushStack(!d[0] || !d[0].parentNode || d[0].parentNode.nodeType === 11 || !e[0] || !e[0].parentNode || e[0].parentNode.nodeType === 11 ? e : c.unique(e))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    });
    c.each({
        parent: function(a) {
            return (a = a.parentNode) && a.nodeType !== 11 ? a : null
        },
        parents: function(a) {
            return c.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, d) {
            return c.dir(a, "parentNode", d)
        },
        next: function(a) {
            return c.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return c.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return c.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return c.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, d) {
            return c.dir(a, "nextSibling", d)
        },
        prevUntil: function(a, b, d) {
            return c.dir(a, "previousSibling", d)
        },
        siblings: function(a) {
            return c.sibling(a.parentNode.firstChild, a)
        },
        children: function(a) {
            return c.sibling(a.firstChild)
        },
        contents: function(a) {
            return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : c.makeArray(a.childNodes)
        }
    }, function(a, b) {
        c.fn[a] = function(d, e) {
            var f = c.map(this, b, d);
            Za.test(a) || (e = d);
            if (e && typeof e === "string")
                f = c.filter(e, f);
            f = this.length > 1 ? c.unique(f) : f;
            if ((this.length > 1 || ab.test(e)) && $a.test(a))
                f = f.reverse();
            return this.pushStack(f, a, bb.call(arguments).join(","))
        }
    });
    c.extend({
        filter: function(a, b, d) {
            if (d)
                a = ":not(" + a + ")";
            return b.length === 1 ? c.find.matchesSelector(b[0], a) ? [b[0]] : [] : c.find.matches(a, b)
        },
        dir: function(a, b, d) {
            var e = [];
            for (a = a[b]; a && a.nodeType !== 9 && (d === B || a.nodeType !== 1 || !c(a).is(d)); ) {
                a.nodeType === 1 && e.push(a);
                a = a[b]
            }
            return e
        },
        nth: function(a, b, d) {
            b = b || 1;
            for (var e = 0; a; a = a[d])
                if (a.nodeType === 1 && ++e === b)
                    break;
            return a
        },
        sibling: function(a, b) {
            for (var d = []; a; a = a.nextSibling)
                a.nodeType === 1 && a !== b && d.push(a);
            return d
        }
    });
    var za = / jQuery\d+="(?:\d+|null)"/g
      , $ = /^\s+/
      , Aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig
      , Ba = /<([\w:]+)/
      , db = /<tbody/i
      , eb = /<|&#?\w+;/
      , Ca = /<(?:script|object|embed|option|style)/i
      , Da = /checked\s*(?:[^=]|=\s*.checked.)/i
      , fb = /\=([^="'>\s]+\/)>/g
      , P = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    };
    P.optgroup = P.option;
    P.tbody = P.tfoot = P.colgroup = P.caption = P.thead;
    P.th = P.td;
    if (!c.support.htmlSerialize)
        P._default = [1, "div<div>", "</div>"];
    c.fn.extend({
        text: function(a) {
            if (c.isFunction(a))
                return this.each(function(b) {
                    var d = c(this);
                    d.text(a.call(this, b, d.text()))
                });
            if (typeof a !== "object" && a !== B)
                return this.empty().append((this[0] && this[0].ownerDocument || t).createTextNode(a));
            return c.text(this)
        },
        wrapAll: function(a) {
            if (c.isFunction(a))
                return this.each(function(d) {
                    c(this).wrapAll(a.call(this, d))
                });
            if (this[0]) {
                var b = c(a, this[0].ownerDocument).eq(0).clone(true);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function() {
                    for (var d = this; d.firstChild && d.firstChild.nodeType === 1; )
                        d = d.firstChild;
                    return d
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            if (c.isFunction(a))
                return this.each(function(b) {
                    c(this).wrapInner(a.call(this, b))
                });
            return this.each(function() {
                var b = c(this)
                  , d = b.contents();
                d.length ? d.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            return this.each(function() {
                c(this).wrapAll(a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, true, function(a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, true, function(a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, false, function(b) {
                    this.parentNode.insertBefore(b, this)
                });
            else if (arguments.length) {
                var a = c(arguments[0]);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, false, function(b) {
                    this.parentNode.insertBefore(b, this.nextSibling)
                });
            else if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, c(arguments[0]).toArray());
                return a
            }
        },
        remove: function(a, b) {
            for (var d = 0, e; (e = this[d]) != null; d++)
                if (!a || c.filter(a, [e]).length) {
                    if (!b && e.nodeType === 1) {
                        c.cleanData(e.getElementsByTagName("*"));
                        c.cleanData([e])
                    }
                    e.parentNode && e.parentNode.removeChild(e)
                }
            return this
        },
        empty: function() {
            for (var a = 0, b; (b = this[a]) != null; a++)
                for (b.nodeType === 1 && c.cleanData(b.getElementsByTagName("*")); b.firstChild; )
                    b.removeChild(b.firstChild);
            return this
        },
        clone: function(a) {
            var b = this.map(function() {
                if (!c.support.noCloneEvent && !c.isXMLDoc(this)) {
                    var d = this.outerHTML
                      , e = this.ownerDocument;
                    if (!d) {
                        d = e.createElement("div");
                        d.appendChild(this.cloneNode(true));
                        d = d.innerHTML
                    }
                    return c.clean([d.replace(za, "").replace(fb, '="$1">').replace($, "")], e)[0]
                } else
                    return this.cloneNode(true)
            });
            if (a === true) {
                na(this, b);
                na(this.find("*"), b.find("*"))
            }
            return b
        },
        html: function(a) {
            if (a === B)
                return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(za, "") : null;
            else if (typeof a === "string" && !Ca.test(a) && (c.support.leadingWhitespace || !$.test(a)) && !P[(Ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Aa, "<$1></$2>");
                try {
                    for (var b = 0, d = this.length; b < d; b++)
                        if (this[b].nodeType === 1) {
                            c.cleanData(this[b].getElementsByTagName("*"));
                            this[b].innerHTML = a
                        }
                } catch (e) {
                    this.empty().append(a)
                }
            } else
                c.isFunction(a) ? this.each(function(f) {
                    var h = c(this);
                    h.html(a.call(this, f, h.html()))
                }) : this.empty().append(a);
            return this
        },
        replaceWith: function(a) {
            if (this[0] && this[0].parentNode) {
                if (c.isFunction(a))
                    return this.each(function(b) {
                        var d = c(this)
                          , e = d.html();
                        d.replaceWith(a.call(this, b, e))
                    });
                if (typeof a !== "string")
                    a = c(a).detach();
                return this.each(function() {
                    var b = this.nextSibling
                      , d = this.parentNode;
                    c(this).remove();
                    b ? c(b).before(a) : c(d).append(a)
                })
            } else
                return this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a)
        },
        detach: function(a) {
            return this.remove(a, true)
        },
        domManip: function(a, b, d) {
            var e, f, h, l = a[0], k = [];
            if (!c.support.checkClone && arguments.length === 3 && typeof l === "string" && Da.test(l))
                return this.each(function() {
                    c(this).domManip(a, b, d, true)
                });
            if (c.isFunction(l))
                return this.each(function(x) {
                    var r = c(this);
                    a[0] = l.call(this, x, b ? r.html() : B);
                    r.domManip(a, b, d)
                });
            if (this[0]) {
                e = l && l.parentNode;
                e = c.support.parentNode && e && e.nodeType === 11 && e.childNodes.length === this.length ? {
                    fragment: e
                } : c.buildFragment(a, this, k);
                h = e.fragment;
                if (f = h.childNodes.length === 1 ? h = h.firstChild : h.firstChild) {
                    b = b && c.nodeName(f, "tr");
                    f = 0;
                    for (var o = this.length; f < o; f++)
                        d.call(b ? c.nodeName(this[f], "table") ? this[f].getElementsByTagName("tbody")[0] || this[f].appendChild(this[f].ownerDocument.createElement("tbody")) : this[f] : this[f], f > 0 || e.cacheable || this.length > 1 ? h.cloneNode(true) : h)
                }
                k.length && c.each(k, Oa)
            }
            return this
        }
    });
    c.buildFragment = function(a, b, d) {
        var e, f, h;
        b = b && b[0] ? b[0].ownerDocument || b[0] : t;
        if (a.length === 1 && typeof a[0] === "string" && a[0].length < 512 && b === t && !Ca.test(a[0]) && (c.support.checkClone || !Da.test(a[0]))) {
            f = true;
            if (h = c.fragments[a[0]])
                if (h !== 1)
                    e = h
        }
        if (!e) {
            e = b.createDocumentFragment();
            c.clean(a, b, e, d)
        }
        if (f)
            c.fragments[a[0]] = h ? e : 1;
        return {
            fragment: e,
            cacheable: f
        }
    }
    ;
    c.fragments = {};
    c.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        c.fn[a] = function(d) {
            var e = [];
            d = c(d);
            var f = this.length === 1 && this[0].parentNode;
            if (f && f.nodeType === 11 && f.childNodes.length === 1 && d.length === 1) {
                d[b](this[0]);
                return this
            } else {
                f = 0;
                for (var h = d.length; f < h; f++) {
                    var l = (f > 0 ? this.clone(true) : this).get();
                    c(d[f])[b](l);
                    e = e.concat(l)
                }
                return this.pushStack(e, a, d.selector)
            }
        }
    });
    c.extend({
        clean: function(a, b, d, e) {
            b = b || t;
            if (typeof b.createElement === "undefined")
                b = b.ownerDocument || b[0] && b[0].ownerDocument || t;
            for (var f = [], h = 0, l; (l = a[h]) != null; h++) {
                if (typeof l === "number")
                    l += "";
                if (l) {
                    if (typeof l === "string" && !eb.test(l))
                        l = b.createTextNode(l);
                    else if (typeof l === "string") {
                        l = l.replace(Aa, "<$1></$2>");
                        var k = (Ba.exec(l) || ["", ""])[1].toLowerCase()
                          , o = P[k] || P._default
                          , x = o[0]
                          , r = b.createElement("div");
                        for (r.innerHTML = o[1] + l + o[2]; x--; )
                            r = r.lastChild;
                        if (!c.support.tbody) {
                            x = db.test(l);
                            k = k === "table" && !x ? r.firstChild && r.firstChild.childNodes : o[1] === "<table>" && !x ? r.childNodes : [];
                            for (o = k.length - 1; o >= 0; --o)
                                c.nodeName(k[o], "tbody") && !k[o].childNodes.length && k[o].parentNode.removeChild(k[o])
                        }
                        !c.support.leadingWhitespace && $.test(l) && r.insertBefore(b.createTextNode($.exec(l)[0]), r.firstChild);
                        l = r.childNodes
                    }
                    if (l.nodeType)
                        f.push(l);
                    else
                        f = c.merge(f, l)
                }
            }
            if (d)
                for (h = 0; f[h]; h++)
                    if (e && c.nodeName(f[h], "script") && (!f[h].type || f[h].type.toLowerCase() === "text/javascript"))
                        e.push(f[h].parentNode ? f[h].parentNode.removeChild(f[h]) : f[h]);
                    else {
                        f[h].nodeType === 1 && f.splice.apply(f, [h + 1, 0].concat(c.makeArray(f[h].getElementsByTagName("script"))));
                        d.appendChild(f[h])
                    }
            return f
        },
        cleanData: function(a) {
            for (var b, d, e = c.cache, f = c.event.special, h = c.support.deleteExpando, l = 0, k; (k = a[l]) != null; l++)
                if (!(k.nodeName && c.noData[k.nodeName.toLowerCase()]))
                    if (d = k[c.expando]) {
                        if ((b = e[d]) && b.events)
                            for (var o in b.events)
                                f[o] ? c.event.remove(k, o) : c.removeEvent(k, o, b.handle);
                        if (h)
                            delete k[c.expando];
                        else
                            k.removeAttribute && k.removeAttribute(c.expando);
                        delete e[d]
                    }
        }
    });
    var Ea = /alpha\([^)]*\)/i, gb = /opacity=([^)]*)/, hb = /-([a-z])/ig, ib = /([A-Z])/g, Fa = /^-?\d+(?:px)?$/i, jb = /^-?\d/, kb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Pa = ["Left", "Right"], Qa = ["Top", "Bottom"], W, Ga, aa, lb = function(a, b) {
        return b.toUpperCase()
    };
    c.fn.css = function(a, b) {
        if (arguments.length === 2 && b === B)
            return this;
        return c.access(this, a, b, true, function(d, e, f) {
            return f !== B ? c.style(d, e, f) : c.css(d, e)
        })
    }
    ;
    c.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var d = W(a, "opacity", "opacity");
                        return d === "" ? "1" : d
                    } else
                        return a.style.opacity
                }
            }
        },
        cssNumber: {
            zIndex: true,
            fontWeight: true,
            opacity: true,
            zoom: true,
            lineHeight: true
        },
        cssProps: {
            "float": c.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, d, e) {
            if (!(!a || a.nodeType === 3 || a.nodeType === 8 || !a.style)) {
                var f, h = c.camelCase(b), l = a.style, k = c.cssHooks[h];
                b = c.cssProps[h] || h;
                if (d !== B) {
                    if (!(typeof d === "number" && isNaN(d) || d == null)) {
                        if (typeof d === "number" && !c.cssNumber[h])
                            d += "px";
                        if (!k || !("set"in k) || (d = k.set(a, d)) !== B)
                            try {
                                l[b] = d
                            } catch (o) {}
                    }
                } else {
                    if (k && "get"in k && (f = k.get(a, false, e)) !== B)
                        return f;
                    return l[b]
                }
            }
        },
        css: function(a, b, d) {
            var e, f = c.camelCase(b), h = c.cssHooks[f];
            b = c.cssProps[f] || f;
            if (h && "get"in h && (e = h.get(a, true, d)) !== B)
                return e;
            else if (W)
                return W(a, b, f)
        },
        swap: function(a, b, d) {
            var e = {}, f;
            for (f in b) {
                e[f] = a.style[f];
                a.style[f] = b[f]
            }
            d.call(a);
            for (f in b)
                a.style[f] = e[f]
        },
        camelCase: function(a) {
            return a.replace(hb, lb)
        }
    });
    c.curCSS = c.css;
    c.each(["height", "width"], function(a, b) {
        c.cssHooks[b] = {
            get: function(d, e, f) {
                var h;
                if (e) {
                    if (d.offsetWidth !== 0)
                        h = oa(d, b, f);
                    else
                        c.swap(d, kb, function() {
                            h = oa(d, b, f)
                        });
                    if (h <= 0) {
                        h = W(d, b, b);
                        if (h === "0px" && aa)
                            h = aa(d, b, b);
                        if (h != null)
                            return h === "" || h === "auto" ? "0px" : h
                    }
                    if (h < 0 || h == null) {
                        h = d.style[b];
                        return h === "" || h === "auto" ? "0px" : h
                    }
                    return typeof h === "string" ? h : h + "px"
                }
            },
            set: function(d, e) {
                if (Fa.test(e)) {
                    e = parseFloat(e);
                    if (e >= 0)
                        return e + "px"
                } else
                    return e
            }
        }
    });
    if (!c.support.opacity)
        c.cssHooks.opacity = {
            get: function(a, b) {
                return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var d = a.style;
                d.zoom = 1;
                var e = c.isNaN(b) ? "" : "alpha(opacity=" + b * 100 + ")"
                  , f = d.filter || "";
                d.filter = Ea.test(f) ? f.replace(Ea, e) : d.filter + " " + e
            }
        };
    if (t.defaultView && t.defaultView.getComputedStyle)
        Ga = function(a, b, d) {
            var e;
            d = d.replace(ib, "-$1").toLowerCase();
            if (!(b = a.ownerDocument.defaultView))
                return B;
            if (b = b.getComputedStyle(a, null)) {
                e = b.getPropertyValue(d);
                if (e === "" && !c.contains(a.ownerDocument.documentElement, a))
                    e = c.style(a, d)
            }
            return e
        }
        ;
    if (t.documentElement.currentStyle)
        aa = function(a, b) {
            var d, e, f = a.currentStyle && a.currentStyle[b], h = a.style;
            if (!Fa.test(f) && jb.test(f)) {
                d = h.left;
                e = a.runtimeStyle.left;
                a.runtimeStyle.left = a.currentStyle.left;
                h.left = b === "fontSize" ? "1em" : f || 0;
                f = h.pixelLeft + "px";
                h.left = d;
                a.runtimeStyle.left = e
            }
            return f === "" ? "auto" : f
        }
        ;
    W = Ga || aa;
    if (c.expr && c.expr.filters) {
        c.expr.filters.hidden = function(a) {
            var b = a.offsetHeight;
            return a.offsetWidth === 0 && b === 0 || !c.support.reliableHiddenOffsets && (a.style.display || c.css(a, "display")) === "none"
        }
        ;
        c.expr.filters.visible = function(a) {
            return !c.expr.filters.hidden(a)
        }
    }
    var mb = c.now()
      , nb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi
      , ob = /^(?:select|textarea)/i
      , pb = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i
      , qb = /^(?:GET|HEAD)$/
      , Ra = /\[\]$/
      , T = /\=\?(&|$)/
      , ja = /\?/
      , rb = /([?&])_=[^&]*/
      , sb = /^(\w+:)?\/\/([^\/?#]+)/
      , tb = /%20/g
      , ub = /#.*$/
      , Ha = c.fn.load;
    c.fn.extend({
        load: function(a, b, d) {
            if (typeof a !== "string" && Ha)
                return Ha.apply(this, arguments);
            else if (!this.length)
                return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var f = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            e = "GET";
            if (b)
                if (c.isFunction(b)) {
                    d = b;
                    b = null
                } else if (typeof b === "object") {
                    b = c.param(b, c.ajaxSettings.traditional);
                    e = "POST"
                }
            var h = this;
            c.ajax({
                url: a,
                type: e,
                dataType: "html",
                data: b,
                complete: function(l, k) {
                    if (k === "success" || k === "notmodified")
                        h.html(f ? c("<div>").append(l.responseText.replace(nb, "")).find(f) : l.responseText);
                    d && h.each(d, [l.responseText, k, l])
                }
            });
            return this
        },
        serialize: function() {
            return c.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? c.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || ob.test(this.nodeName) || pb.test(this.type))
            }).map(function(a, b) {
                var d = c(this).val();
                return d == null ? null : c.isArray(d) ? c.map(d, function(e) {
                    return {
                        name: b.name,
                        value: e
                    }
                }) : {
                    name: b.name,
                    value: d
                }
            }).get()
        }
    });
    c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        c.fn[b] = function(d) {
            return this.bind(b, d)
        }
    });
    c.extend({
        get: function(a, b, d, e) {
            if (c.isFunction(b)) {
                e = e || d;
                d = b;
                b = null
            }
            return c.ajax({
                type: "GET",
                url: a,
                data: b,
                success: d,
                dataType: e
            })
        },
        getScript: function(a, b) {
            return c.get(a, null, b, "script")
        },
        getJSON: function(a, b, d) {
            return c.get(a, b, d, "json")
        },
        post: function(a, b, d, e) {
            if (c.isFunction(b)) {
                e = e || d;
                d = b;
                b = {}
            }
            return c.ajax({
                type: "POST",
                url: a,
                data: b,
                success: d,
                dataType: e
            })
        },
        ajaxSetup: function(a) {
            c.extend(c.ajaxSettings, a)
        },
        ajaxSettings: {
            url: location.href,
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            xhr: function() {
                return new E.XMLHttpRequest
            },
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                script: "text/javascript, application/javascript",
                json: "application/json, text/javascript",
                text: "text/plain",
                _default: "*/*"
            }
        },
        ajax: function(a) {
            var b = c.extend(true, {}, c.ajaxSettings, a), d, e, f, h = b.type.toUpperCase(), l = qb.test(h);
            b.url = b.url.replace(ub, "");
            b.context = a && a.context != null ? a.context : b;
            if (b.data && b.processData && typeof b.data !== "string")
                b.data = c.param(b.data, b.traditional);
            if (b.dataType === "jsonp") {
                if (h === "GET")
                    T.test(b.url) || (b.url += (ja.test(b.url) ? "&" : "?") + (b.jsonp || "callback") + "=?");
                else if (!b.data || !T.test(b.data))
                    b.data = (b.data ? b.data + "&" : "") + (b.jsonp || "callback") + "=?";
                b.dataType = "json"
            }
            if (b.dataType === "json" && (b.data && T.test(b.data) || T.test(b.url))) {
                d = b.jsonpCallback || "jsonp" + mb++;
                if (b.data)
                    b.data = (b.data + "").replace(T, "=" + d + "$1");
                b.url = b.url.replace(T, "=" + d + "$1");
                b.dataType = "script";
                var k = E[d];
                E[d] = function(m) {
                    if (c.isFunction(k))
                        k(m);
                    else {
                        E[d] = B;
                        try {
                            delete E[d]
                        } catch (p) {}
                    }
                    f = m;
                    c.handleSuccess(b, w, e, f);
                    c.handleComplete(b, w, e, f);
                    r && r.removeChild(A)
                }
            }
            if (b.dataType === "script" && b.cache === null)
                b.cache = false;
            if (b.cache === false && l) {
                var o = c.now()
                  , x = b.url.replace(rb, "$1_=" + o);
                b.url = x + (x === b.url ? (ja.test(b.url) ? "&" : "?") + "_=" + o : "")
            }
            if (b.data && l)
                b.url += (ja.test(b.url) ? "&" : "?") + b.data;
            b.global && c.active++ === 0 && c.event.trigger("ajaxStart");
            o = (o = sb.exec(b.url)) && (o[1] && o[1].toLowerCase() !== location.protocol || o[2].toLowerCase() !== location.host);
            if (b.dataType === "script" && h === "GET" && o) {
                var r = t.getElementsByTagName("head")[0] || t.documentElement
                  , A = t.createElement("script");
                if (b.scriptCharset)
                    A.charset = b.scriptCharset;
                A.src = b.url;
                if (!d) {
                    var C = false;
                    A.onload = A.onreadystatechange = function() {
                        if (!C && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                            C = true;
                            c.handleSuccess(b, w, e, f);
                            c.handleComplete(b, w, e, f);
                            A.onload = A.onreadystatechange = null;
                            r && A.parentNode && r.removeChild(A)
                        }
                    }
                }
                r.insertBefore(A, r.firstChild);
                return B
            }
            var J = false
              , w = b.xhr();
            if (w) {
                b.username ? w.open(h, b.url, b.async, b.username, b.password) : w.open(h, b.url, b.async);
                try {
                    if (b.data != null && !l || a && a.contentType)
                        w.setRequestHeader("Content-Type", b.contentType);
                    if (b.ifModified) {
                        c.lastModified[b.url] && w.setRequestHeader("If-Modified-Since", c.lastModified[b.url]);
                        c.etag[b.url] && w.setRequestHeader("If-None-Match", c.etag[b.url])
                    }
                    o || w.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    w.setRequestHeader("Accept", b.dataType && b.accepts[b.dataType] ? b.accepts[b.dataType] + ", */*; q=0.01" : b.accepts._default)
                } catch (I) {}
                if (b.beforeSend && b.beforeSend.call(b.context, w, b) === false) {
                    b.global && c.active-- === 1 && c.event.trigger("ajaxStop");
                    w.abort();
                    return false
                }
                b.global && c.triggerGlobal(b, "ajaxSend", [w, b]);
                var L = w.onreadystatechange = function(m) {
                    if (!w || w.readyState === 0 || m === "abort") {
                        J || c.handleComplete(b, w, e, f);
                        J = true;
                        if (w)
                            w.onreadystatechange = c.noop
                    } else if (!J && w && (w.readyState === 4 || m === "timeout")) {
                        J = true;
                        w.onreadystatechange = c.noop;
                        e = m === "timeout" ? "timeout" : !c.httpSuccess(w) ? "error" : b.ifModified && c.httpNotModified(w, b.url) ? "notmodified" : "success";
                        var p;
                        if (e === "success")
                            try {
                                f = c.httpData(w, b.dataType, b)
                            } catch (q) {
                                e = "parsererror";
                                p = q
                            }
                        if (e === "success" || e === "notmodified")
                            d || c.handleSuccess(b, w, e, f);
                        else
                            c.handleError(b, w, e, p);
                        d || c.handleComplete(b, w, e, f);
                        m === "timeout" && w.abort();
                        if (b.async)
                            w = null
                    }
                }
                ;
                try {
                    var g = w.abort;
                    w.abort = function() {
                        w && Function.prototype.call.call(g, w);
                        L("abort")
                    }
                } catch (i) {}
                b.async && b.timeout > 0 && setTimeout(function() {
                    w && !J && L("timeout")
                }, b.timeout);
                try {
                    w.send(l || b.data == null ? null : b.data)
                } catch (n) {
                    c.handleError(b, w, null, n);
                    c.handleComplete(b, w, e, f)
                }
                b.async || L();
                return w
            }
        },
        param: function(a, b) {
            var d = []
              , e = function(h, l) {
                l = c.isFunction(l) ? l() : l;
                d[d.length] = encodeURIComponent(h) + "=" + encodeURIComponent(l)
            };
            if (b === B)
                b = c.ajaxSettings.traditional;
            if (c.isArray(a) || a.jquery)
                c.each(a, function() {
                    e(this.name, this.value)
                });
            else
                for (var f in a)
                    da(f, a[f], b, e);
            return d.join("&").replace(tb, "+")
        }
    });
    c.extend({
        active: 0,
        lastModified: {},
        etag: {},
        handleError: function(a, b, d, e) {
            a.error && a.error.call(a.context, b, d, e);
            a.global && c.triggerGlobal(a, "ajaxError", [b, a, e])
        },
        handleSuccess: function(a, b, d, e) {
            a.success && a.success.call(a.context, e, d, b);
            a.global && c.triggerGlobal(a, "ajaxSuccess", [b, a])
        },
        handleComplete: function(a, b, d) {
            a.complete && a.complete.call(a.context, b, d);
            a.global && c.triggerGlobal(a, "ajaxComplete", [b, a]);
            a.global && c.active-- === 1 && c.event.trigger("ajaxStop")
        },
        triggerGlobal: function(a, b, d) {
            (a.context && a.context.url == null ? c(a.context) : c.event).trigger(b, d)
        },
        httpSuccess: function(a) {
            try {
                return !a.status && location.protocol === "file:" || a.status >= 200 && a.status < 300 || a.status === 304 || a.status === 1223
            } catch (b) {}
            return false
        },
        httpNotModified: function(a, b) {
            var d = a.getResponseHeader("Last-Modified")
              , e = a.getResponseHeader("Etag");
            if (d)
                c.lastModified[b] = d;
            if (e)
                c.etag[b] = e;
            return a.status === 304
        },
        httpData: function(a, b, d) {
            var e = a.getResponseHeader("content-type") || ""
              , f = b === "xml" || !b && e.indexOf("xml") >= 0;
            a = f ? a.responseXML : a.responseText;
            f && a.documentElement.nodeName === "parsererror" && c.error("parsererror");
            if (d && d.dataFilter)
                a = d.dataFilter(a, b);
            if (typeof a === "string")
                if (b === "json" || !b && e.indexOf("json") >= 0)
                    a = c.parseJSON(a);
                else if (b === "script" || !b && e.indexOf("javascript") >= 0)
                    c.globalEval(a);
            return a
        }
    });
    if (E.ActiveXObject)
        c.ajaxSettings.xhr = function() {
            if (E.location.protocol !== "file:")
                try {
                    return new E.XMLHttpRequest
                } catch (a) {}
            try {
                return new E.ActiveXObject("Microsoft.XMLHTTP")
            } catch (b) {}
        }
        ;
    c.support.ajax = !!c.ajaxSettings.xhr();
    var ea = {}, vb = /^(?:toggle|show|hide)$/, wb = /^([+\-]=)?([\d+.\-]+)(.*)$/, ba, pa = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
    c.fn.extend({
        show: function(a, b, d) {
            if (a || a === 0)
                return this.animate(S("show", 3), a, b, d);
            else {
                d = 0;
                for (var e = this.length; d < e; d++) {
                    a = this[d];
                    b = a.style.display;
                    if (!c.data(a, "olddisplay") && b === "none")
                        b = a.style.display = "";
                    b === "" && c.css(a, "display") === "none" && c.data(a, "olddisplay", qa(a.nodeName))
                }
                for (d = 0; d < e; d++) {
                    a = this[d];
                    b = a.style.display;
                    if (b === "" || b === "none")
                        a.style.display = c.data(a, "olddisplay") || ""
                }
                return this
            }
        },
        hide: function(a, b, d) {
            if (a || a === 0)
                return this.animate(S("hide", 3), a, b, d);
            else {
                a = 0;
                for (b = this.length; a < b; a++) {
                    d = c.css(this[a], "display");
                    d !== "none" && c.data(this[a], "olddisplay", d)
                }
                for (a = 0; a < b; a++)
                    this[a].style.display = "none";
                return this
            }
        },
        _toggle: c.fn.toggle,
        toggle: function(a, b, d) {
            var e = typeof a === "boolean";
            if (c.isFunction(a) && c.isFunction(b))
                this._toggle.apply(this, arguments);
            else
                a == null || e ? this.each(function() {
                    var f = e ? a : c(this).is(":hidden");
                    c(this)[f ? "show" : "hide"]()
                }) : this.animate(S("toggle", 3), a, b, d);
            return this
        },
        fadeTo: function(a, b, d, e) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, d, e)
        },
        animate: function(a, b, d, e) {
            var f = c.speed(b, d, e);
            if (c.isEmptyObject(a))
                return this.each(f.complete);
            return this[f.queue === false ? "each" : "queue"](function() {
                var h = c.extend({}, f), l, k = this.nodeType === 1, o = k && c(this).is(":hidden"), x = this;
                for (l in a) {
                    var r = c.camelCase(l);
                    if (l !== r) {
                        a[r] = a[l];
                        delete a[l];
                        l = r
                    }
                    if (a[l] === "hide" && o || a[l] === "show" && !o)
                        return h.complete.call(this);
                    if (k && (l === "height" || l === "width")) {
                        h.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                        if (c.css(this, "display") === "inline" && c.css(this, "float") === "none")
                            if (c.support.inlineBlockNeedsLayout)
                                if (qa(this.nodeName) === "inline")
                                    this.style.display = "inline-block";
                                else {
                                    this.style.display = "inline";
                                    this.style.zoom = 1
                                }
                            else
                                this.style.display = "inline-block"
                    }
                    if (c.isArray(a[l])) {
                        (h.specialEasing = h.specialEasing || {})[l] = a[l][1];
                        a[l] = a[l][0]
                    }
                }
                if (h.overflow != null)
                    this.style.overflow = "hidden";
                h.curAnim = c.extend({}, a);
                c.each(a, function(A, C) {
                    var J = new c.fx(x,h,A);
                    if (vb.test(C))
                        J[C === "toggle" ? o ? "show" : "hide" : C](a);
                    else {
                        var w = wb.exec(C)
                          , I = J.cur() || 0;
                        if (w) {
                            var L = parseFloat(w[2])
                              , g = w[3] || "px";
                            if (g !== "px") {
                                c.style(x, A, (L || 1) + g);
                                I = (L || 1) / J.cur() * I;
                                c.style(x, A, I + g)
                            }
                            if (w[1])
                                L = (w[1] === "-=" ? -1 : 1) * L + I;
                            J.custom(I, L, g)
                        } else
                            J.custom(I, C, "")
                    }
                });
                return true
            })
        },
        stop: function(a, b) {
            var d = c.timers;
            a && this.queue([]);
            this.each(function() {
                for (var e = d.length - 1; e >= 0; e--)
                    if (d[e].elem === this) {
                        b && d[e](true);
                        d.splice(e, 1)
                    }
            });
            b || this.dequeue();
            return this
        }
    });
    c.each({
        slideDown: S("show", 1),
        slideUp: S("hide", 1),
        slideToggle: S("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        c.fn[a] = function(d, e, f) {
            return this.animate(b, d, e, f)
        }
    });
    c.extend({
        speed: function(a, b, d) {
            var e = a && typeof a === "object" ? c.extend({}, a) : {
                complete: d || !d && b || c.isFunction(a) && a,
                duration: a,
                easing: d && b || b && !c.isFunction(b) && b
            };
            e.duration = c.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in c.fx.speeds ? c.fx.speeds[e.duration] : c.fx.speeds._default;
            e.old = e.complete;
            e.complete = function() {
                e.queue !== false && c(this).dequeue();
                c.isFunction(e.old) && e.old.call(this)
            }
            ;
            return e
        },
        easing: {
            linear: function(a, b, d, e) {
                return d + e * a
            },
            swing: function(a, b, d, e) {
                return (-Math.cos(a * Math.PI) / 2 + 0.5) * e + d
            }
        },
        timers: [],
        fx: function(a, b, d) {
            this.options = b;
            this.elem = a;
            this.prop = d;
            if (!b.orig)
                b.orig = {}
        }
    });
    c.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this);
            (c.fx.step[this.prop] || c.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))
                return this.elem[this.prop];
            var a = parseFloat(c.css(this.elem, this.prop));
            return a && a > -1E4 ? a : 0
        },
        custom: function(a, b, d) {
            function e(l) {
                return f.step(l)
            }
            var f = this
              , h = c.fx;
            this.startTime = c.now();
            this.start = a;
            this.end = b;
            this.unit = d || this.unit || "px";
            this.now = this.start;
            this.pos = this.state = 0;
            e.elem = this.elem;
            if (e() && c.timers.push(e) && !ba)
                ba = setInterval(h.tick, h.interval)
        },
        show: function() {
            this.options.orig[this.prop] = c.style(this.elem, this.prop);
            this.options.show = true;
            this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            c(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = c.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function(a) {
            var b = c.now()
              , d = true;
            if (a || b >= this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                this.options.curAnim[this.prop] = true;
                for (var e in this.options.curAnim)
                    if (this.options.curAnim[e] !== true)
                        d = false;
                if (d) {
                    if (this.options.overflow != null && !c.support.shrinkWrapBlocks) {
                        var f = this.elem
                          , h = this.options;
                        c.each(["", "X", "Y"], function(k, o) {
                            f.style["overflow" + o] = h.overflow[k]
                        })
                    }
                    this.options.hide && c(this.elem).hide();
                    if (this.options.hide || this.options.show)
                        for (var l in this.options.curAnim)
                            c.style(this.elem, l, this.options.orig[l]);
                    this.options.complete.call(this.elem)
                }
                return false
            } else {
                a = b - this.startTime;
                this.state = a / this.options.duration;
                b = this.options.easing || (c.easing.swing ? "swing" : "linear");
                this.pos = c.easing[this.options.specialEasing && this.options.specialEasing[this.prop] || b](this.state, a, 0, 1, this.options.duration);
                this.now = this.start + (this.end - this.start) * this.pos;
                this.update()
            }
            return true
        }
    };
    c.extend(c.fx, {
        tick: function() {
            for (var a = c.timers, b = 0; b < a.length; b++)
                a[b]() || a.splice(b--, 1);
            a.length || c.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(ba);
            ba = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                c.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                if (a.elem.style && a.elem.style[a.prop] != null)
                    a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit;
                else
                    a.elem[a.prop] = a.now
            }
        }
    });
    if (c.expr && c.expr.filters)
        c.expr.filters.animated = function(a) {
            return c.grep(c.timers, function(b) {
                return a === b.elem
            }).length
        }
        ;
    var xb = /^t(?:able|d|h)$/i
      , Ia = /^(?:body|html)$/i;
    c.fn.offset = "getBoundingClientRect"in t.documentElement ? function(a) {
        var b = this[0], d;
        if (a)
            return this.each(function(l) {
                c.offset.setOffset(this, a, l)
            });
        if (!b || !b.ownerDocument)
            return null;
        if (b === b.ownerDocument.body)
            return c.offset.bodyOffset(b);
        try {
            d = b.getBoundingClientRect()
        } catch (e) {}
        var f = b.ownerDocument
          , h = f.documentElement;
        if (!d || !c.contains(h, b))
            return d || {
                top: 0,
                left: 0
            };
        b = f.body;
        f = fa(f);
        return {
            top: d.top + (f.pageYOffset || c.support.boxModel && h.scrollTop || b.scrollTop) - (h.clientTop || b.clientTop || 0),
            left: d.left + (f.pageXOffset || c.support.boxModel && h.scrollLeft || b.scrollLeft) - (h.clientLeft || b.clientLeft || 0)
        }
    }
    : function(a) {
        var b = this[0];
        if (a)
            return this.each(function(x) {
                c.offset.setOffset(this, a, x)
            });
        if (!b || !b.ownerDocument)
            return null;
        if (b === b.ownerDocument.body)
            return c.offset.bodyOffset(b);
        c.offset.initialize();
        var d, e = b.offsetParent, f = b.ownerDocument, h = f.documentElement, l = f.body;
        d = (f = f.defaultView) ? f.getComputedStyle(b, null) : b.currentStyle;
        for (var k = b.offsetTop, o = b.offsetLeft; (b = b.parentNode) && b !== l && b !== h; ) {
            if (c.offset.supportsFixedPosition && d.position === "fixed")
                break;
            d = f ? f.getComputedStyle(b, null) : b.currentStyle;
            k -= b.scrollTop;
            o -= b.scrollLeft;
            if (b === e) {
                k += b.offsetTop;
                o += b.offsetLeft;
                if (c.offset.doesNotAddBorder && !(c.offset.doesAddBorderForTableAndCells && xb.test(b.nodeName))) {
                    k += parseFloat(d.borderTopWidth) || 0;
                    o += parseFloat(d.borderLeftWidth) || 0
                }
                e = b.offsetParent
            }
            if (c.offset.subtractsBorderForOverflowNotVisible && d.overflow !== "visible") {
                k += parseFloat(d.borderTopWidth) || 0;
                o += parseFloat(d.borderLeftWidth) || 0
            }
            d = d
        }
        if (d.position === "relative" || d.position === "static") {
            k += l.offsetTop;
            o += l.offsetLeft
        }
        if (c.offset.supportsFixedPosition && d.position === "fixed") {
            k += Math.max(h.scrollTop, l.scrollTop);
            o += Math.max(h.scrollLeft, l.scrollLeft)
        }
        return {
            top: k,
            left: o
        }
    }
    ;
    c.offset = {
        initialize: function() {
            var a = t.body, b = t.createElement("div"), d, e, f, h = parseFloat(c.css(a, "marginTop")) || 0;
            c.extend(b.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            b.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            a.insertBefore(b, a.firstChild);
            d = b.firstChild;
            e = d.firstChild;
            f = d.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = e.offsetTop !== 5;
            this.doesAddBorderForTableAndCells = f.offsetTop === 5;
            e.style.position = "fixed";
            e.style.top = "20px";
            this.supportsFixedPosition = e.offsetTop === 20 || e.offsetTop === 15;
            e.style.position = e.style.top = "";
            d.style.overflow = "hidden";
            d.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = e.offsetTop === -5;
            this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== h;
            a.removeChild(b);
            c.offset.initialize = c.noop
        },
        bodyOffset: function(a) {
            var b = a.offsetTop
              , d = a.offsetLeft;
            c.offset.initialize();
            if (c.offset.doesNotIncludeMarginInBodyOffset) {
                b += parseFloat(c.css(a, "marginTop")) || 0;
                d += parseFloat(c.css(a, "marginLeft")) || 0
            }
            return {
                top: b,
                left: d
            }
        },
        setOffset: function(a, b, d) {
            var e = c.css(a, "position");
            if (e === "static")
                a.style.position = "relative";
            var f = c(a)
              , h = f.offset()
              , l = c.css(a, "top")
              , k = c.css(a, "left")
              , o = e === "absolute" && c.inArray("auto", [l, k]) > -1;
            e = {};
            var x = {};
            if (o)
                x = f.position();
            l = o ? x.top : parseInt(l, 10) || 0;
            k = o ? x.left : parseInt(k, 10) || 0;
            if (c.isFunction(b))
                b = b.call(a, d, h);
            if (b.top != null)
                e.top = b.top - h.top + l;
            if (b.left != null)
                e.left = b.left - h.left + k;
            "using"in b ? b.using.call(a, e) : f.css(e)
        }
    };
    c.fn.extend({
        position: function() {
            if (!this[0])
                return null;
            var a = this[0]
              , b = this.offsetParent()
              , d = this.offset()
              , e = Ia.test(b[0].nodeName) ? {
                top: 0,
                left: 0
            } : b.offset();
            d.top -= parseFloat(c.css(a, "marginTop")) || 0;
            d.left -= parseFloat(c.css(a, "marginLeft")) || 0;
            e.top += parseFloat(c.css(b[0], "borderTopWidth")) || 0;
            e.left += parseFloat(c.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: d.top - e.top,
                left: d.left - e.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || t.body; a && !Ia.test(a.nodeName) && c.css(a, "position") === "static"; )
                    a = a.offsetParent;
                return a
            })
        }
    });
    c.each(["Left", "Top"], function(a, b) {
        var d = "scroll" + b;
        c.fn[d] = function(e) {
            var f = this[0], h;
            if (!f)
                return null;
            if (e !== B)
                return this.each(function() {
                    if (h = fa(this))
                        h.scrollTo(!a ? e : c(h).scrollLeft(), a ? e : c(h).scrollTop());
                    else
                        this[d] = e
                });
            else
                return (h = fa(f)) ? "pageXOffset"in h ? h[a ? "pageYOffset" : "pageXOffset"] : c.support.boxModel && h.document.documentElement[d] || h.document.body[d] : f[d]
        }
    });
    c.each(["Height", "Width"], function(a, b) {
        var d = b.toLowerCase();
        c.fn["inner" + b] = function() {
            return this[0] ? parseFloat(c.css(this[0], d, "padding")) : null
        }
        ;
        c.fn["outer" + b] = function(e) {
            return this[0] ? parseFloat(c.css(this[0], d, e ? "margin" : "border")) : null
        }
        ;
        c.fn[d] = function(e) {
            var f = this[0];
            if (!f)
                return e == null ? null : this;
            if (c.isFunction(e))
                return this.each(function(l) {
                    var k = c(this);
                    k[d](e.call(this, l, k[d]()))
                });
            if (c.isWindow(f))
                return f.document.compatMode === "CSS1Compat" && f.document.documentElement["client" + b] || f.document.body["client" + b];
            else if (f.nodeType === 9)
                return Math.max(f.documentElement["client" + b], f.body["scroll" + b], f.documentElement["scroll" + b], f.body["offset" + b], f.documentElement["offset" + b]);
            else if (e === B) {
                f = c.css(f, d);
                var h = parseFloat(f);
                return c.isNaN(h) ? f : h
            } else
                return this.css(d, typeof e === "string" ? e : e + "px")
        }
    })
}
)(window);

/*!
 * jQuery UI 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c, j) {
    function k(a, b) {
        var d = a.nodeName.toLowerCase();
        if ("area" === d) {
            b = a.parentNode;
            d = b.name;
            if (!a.href || !d || b.nodeName.toLowerCase() !== "map")
                return false;
            a = c("img[usemap=#" + d + "]")[0];
            return !!a && l(a)
        }
        return (/input|select|textarea|button|object/.test(d) ? !a.disabled : "a" == d ? a.href || b : b) && l(a)
    }
    function l(a) {
        return !c(a).parents().andSelf().filter(function() {
            return c.curCSS(this, "visibility") === "hidden" || c.expr.filters.hidden(this)
        }).length
    }
    c.ui = c.ui || {};
    if (!c.ui.version) {
        c.extend(c.ui, {
            version: "1.8.16",
            keyCode: {
                ALT: 18,
                BACKSPACE: 8,
                CAPS_LOCK: 20,
                COMMA: 188,
                COMMAND: 91,
                COMMAND_LEFT: 91,
                COMMAND_RIGHT: 93,
                CONTROL: 17,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                INSERT: 45,
                LEFT: 37,
                MENU: 93,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SHIFT: 16,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                WINDOWS: 91
            }
        });
        c.fn.extend({
            propAttr: c.fn.prop || c.fn.attr,
            _focus: c.fn.focus,
            focus: function(a, b) {
                return typeof a === "number" ? this.each(function() {
                    var d = this;
                    setTimeout(function() {
                        c(d).focus();
                        b && b.call(d)
                    }, a)
                }) : this._focus.apply(this, arguments)
            },
            scrollParent: function() {
                var a;
                a = c.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(c.curCSS(this, "position", 1)) && /(auto|scroll)/.test(c.curCSS(this, "overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(c.curCSS(this, "overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1))
                }).eq(0);
                return /fixed/.test(this.css("position")) || !a.length ? c(document) : a
            },
            zIndex: function(a) {
                if (a !== j)
                    return this.css("zIndex", a);
                if (this.length) {
                    a = c(this[0]);
                    for (var b; a.length && a[0] !== document; ) {
                        b = a.css("position");
                        if (b === "absolute" || b === "relative" || b === "fixed") {
                            b = parseInt(a.css("zIndex"), 10);
                            if (!isNaN(b) && b !== 0)
                                return b
                        }
                        a = a.parent()
                    }
                }
                return 0
            },
            disableSelection: function() {
                return this.bind((c.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        });
        c.each(["Width", "Height"], function(a, b) {
            function d(f, g, m, n) {
                c.each(e, function() {
                    g -= parseFloat(c.curCSS(f, "padding" + this, true)) || 0;
                    if (m)
                        g -= parseFloat(c.curCSS(f, "border" + this + "Width", true)) || 0;
                    if (n)
                        g -= parseFloat(c.curCSS(f, "margin" + this, true)) || 0
                });
                return g
            }
            var e = b === "Width" ? ["Left", "Right"] : ["Top", "Bottom"]
              , h = b.toLowerCase()
              , i = {
                innerWidth: c.fn.innerWidth,
                innerHeight: c.fn.innerHeight,
                outerWidth: c.fn.outerWidth,
                outerHeight: c.fn.outerHeight
            };
            c.fn["inner" + b] = function(f) {
                if (f === j)
                    return i["inner" + b].call(this);
                return this.each(function() {
                    c(this).css(h, d(this, f) + "px")
                })
            }
            ;
            c.fn["outer" + b] = function(f, g) {
                if (typeof f !== "number")
                    return i["outer" + b].call(this, f);
                return this.each(function() {
                    c(this).css(h, d(this, f, true, g) + "px")
                })
            }
        });
        c.extend(c.expr[":"], {
            data: function(a, b, d) {
                return !!c.data(a, d[3])
            },
            focusable: function(a) {
                return k(a, !isNaN(c.attr(a, "tabindex")))
            },
            tabbable: function(a) {
                var b = c.attr(a, "tabindex")
                  , d = isNaN(b);
                return (d || b >= 0) && k(a, !d)
            }
        });
        c(function() {
            var a = document.body
              , b = a.appendChild(b = document.createElement("div"));
            c.extend(b.style, {
                minHeight: "100px",
                height: "auto",
                padding: 0,
                borderWidth: 0
            });
            c.support.minHeight = b.offsetHeight === 100;
            c.support.selectstart = "onselectstart"in b;
            a.removeChild(b).style.display = "none"
        });
        c.extend(c.ui, {
            plugin: {
                add: function(a, b, d) {
                    a = c.ui[a].prototype;
                    for (var e in d) {
                        a.plugins[e] = a.plugins[e] || [];
                        a.plugins[e].push([b, d[e]])
                    }
                },
                call: function(a, b, d) {
                    if ((b = a.plugins[b]) && a.element[0].parentNode)
                        for (var e = 0; e < b.length; e++)
                            a.options[b[e][0]] && b[e][1].apply(a.element, d)
                }
            },
            contains: function(a, b) {
                return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b)
            },
            hasScroll: function(a, b) {
                if (c(a).css("overflow") === "hidden")
                    return false;
                b = b && b === "left" ? "scrollLeft" : "scrollTop";
                var d = false;
                if (a[b] > 0)
                    return true;
                a[b] = 1;
                d = a[b] > 0;
                a[b] = 0;
                return d
            },
            isOverAxis: function(a, b, d) {
                return a > b && a < b + d
            },
            isOver: function(a, b, d, e, h, i) {
                return c.ui.isOverAxis(a, d, h) && c.ui.isOverAxis(b, e, i)
            }
        })
    }
}
)(jQuery);
;/*!
 * jQuery UI Widget 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b, j) {
    if (b.cleanData) {
        var k = b.cleanData;
        b.cleanData = function(a) {
            for (var c = 0, d; (d = a[c]) != null; c++)
                try {
                    b(d).triggerHandler("remove")
                } catch (e) {}
            k(a)
        }
    } else {
        var l = b.fn.remove;
        b.fn.remove = function(a, c) {
            return this.each(function() {
                if (!c)
                    if (!a || b.filter(a, [this]).length)
                        b("*", this).add([this]).each(function() {
                            try {
                                b(this).triggerHandler("remove")
                            } catch (d) {}
                        });
                return l.call(b(this), a, c)
            })
        }
    }
    b.widget = function(a, c, d) {
        var e = a.split(".")[0], f;
        a = a.split(".")[1];
        f = e + "-" + a;
        if (!d) {
            d = c;
            c = b.Widget
        }
        b.expr[":"][f] = function(h) {
            return !!b.data(h, a)
        }
        ;
        b[e] = b[e] || {};
        b[e][a] = function(h, g) {
            arguments.length && this._createWidget(h, g)
        }
        ;
        c = new c;
        c.options = b.extend(true, {}, c.options);
        b[e][a].prototype = b.extend(true, c, {
            namespace: e,
            widgetName: a,
            widgetEventPrefix: b[e][a].prototype.widgetEventPrefix || a,
            widgetBaseClass: f
        }, d);
        b.widget.bridge(a, b[e][a])
    }
    ;
    b.widget.bridge = function(a, c) {
        b.fn[a] = function(d) {
            var e = typeof d === "string"
              , f = Array.prototype.slice.call(arguments, 1)
              , h = this;
            d = !e && f.length ? b.extend.apply(null, [true, d].concat(f)) : d;
            if (e && d.charAt(0) === "_")
                return h;
            e ? this.each(function() {
                var g = b.data(this, a)
                  , i = g && b.isFunction(g[d]) ? g[d].apply(g, f) : g;
                if (i !== g && i !== j) {
                    h = i;
                    return false
                }
            }) : this.each(function() {
                var g = b.data(this, a);
                g ? g.option(d || {})._init() : b.data(this, a, new c(d,this))
            });
            return h
        }
    }
    ;
    b.Widget = function(a, c) {
        arguments.length && this._createWidget(a, c)
    }
    ;
    b.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: false
        },
        _createWidget: function(a, c) {
            b.data(c, this.widgetName, this);
            this.element = b(c);
            this.options = b.extend(true, {}, this.options, this._getCreateOptions(), a);
            var d = this;
            this.element.bind("remove." + this.widgetName, function() {
                d.destroy()
            });
            this._create();
            this._trigger("create");
            this._init()
        },
        _getCreateOptions: function() {
            return b.metadata && b.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function() {},
        _init: function() {},
        destroy: function() {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName);
            this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function() {
            return this.element
        },
        option: function(a, c) {
            var d = a;
            if (arguments.length === 0)
                return b.extend({}, this.options);
            if (typeof a === "string") {
                if (c === j)
                    return this.options[a];
                d = {};
                d[a] = c
            }
            this._setOptions(d);
            return this
        },
        _setOptions: function(a) {
            var c = this;
            b.each(a, function(d, e) {
                c._setOption(d, e)
            });
            return this
        },
        _setOption: function(a, c) {
            this.options[a] = c;
            if (a === "disabled")
                this.widget()[c ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", c);
            return this
        },
        enable: function() {
            return this._setOption("disabled", false)
        },
        disable: function() {
            return this._setOption("disabled", true)
        },
        _trigger: function(a, c, d) {
            var e = this.options[a];
            c = b.Event(c);
            c.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase();
            d = d || {};
            if (c.originalEvent) {
                a = b.event.props.length;
                for (var f; a; ) {
                    f = b.event.props[--a];
                    c[f] = c.originalEvent[f]
                }
            }
            this.element.trigger(c, d);
            return !(b.isFunction(e) && e.call(this.element[0], c, d) === false || c.isDefaultPrevented())
        }
    }
}
)(jQuery);
;/*!
 * jQuery UI Mouse 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(b) {
    var d = false;
    b(document).mouseup(function() {
        d = false
    });
    b.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var a = this;
            this.element.bind("mousedown." + this.widgetName, function(c) {
                return a._mouseDown(c)
            }).bind("click." + this.widgetName, function(c) {
                if (true === b.data(c.target, a.widgetName + ".preventClickEvent")) {
                    b.removeData(c.target, a.widgetName + ".preventClickEvent");
                    c.stopImmediatePropagation();
                    return false
                }
            });
            this.started = false
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName)
        },
        _mouseDown: function(a) {
            if (!d) {
                this._mouseStarted && this._mouseUp(a);
                this._mouseDownEvent = a;
                var c = this
                  , f = a.which == 1
                  , g = typeof this.options.cancel == "string" && a.target.nodeName ? b(a.target).closest(this.options.cancel).length : false;
                if (!f || g || !this._mouseCapture(a))
                    return true;
                this.mouseDelayMet = !this.options.delay;
                if (!this.mouseDelayMet)
                    this._mouseDelayTimer = setTimeout(function() {
                        c.mouseDelayMet = true
                    }, this.options.delay);
                if (this._mouseDistanceMet(a) && this._mouseDelayMet(a)) {
                    this._mouseStarted = this._mouseStart(a) !== false;
                    if (!this._mouseStarted) {
                        a.preventDefault();
                        return true
                    }
                }
                true === b.data(a.target, this.widgetName + ".preventClickEvent") && b.removeData(a.target, this.widgetName + ".preventClickEvent");
                this._mouseMoveDelegate = function(e) {
                    return c._mouseMove(e)
                }
                ;
                this._mouseUpDelegate = function(e) {
                    return c._mouseUp(e)
                }
                ;
                b(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
                a.preventDefault();
                return d = true
            }
        },
        _mouseMove: function(a) {
            if (b.browser.msie && !(document.documentMode >= 9) && !a.button)
                return this._mouseUp(a);
            if (this._mouseStarted) {
                this._mouseDrag(a);
                return a.preventDefault()
            }
            if (this._mouseDistanceMet(a) && this._mouseDelayMet(a))
                (this._mouseStarted = this._mouseStart(this._mouseDownEvent, a) !== false) ? this._mouseDrag(a) : this._mouseUp(a);
            return !this._mouseStarted
        },
        _mouseUp: function(a) {
            b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted = false;
                a.target == this._mouseDownEvent.target && b.data(a.target, this.widgetName + ".preventClickEvent", true);
                this._mouseStop(a)
            }
            return false
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return true
        }
    })
}
)(jQuery);
;/*
 * jQuery UI Position 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(c) {
    c.ui = c.ui || {};
    var n = /left|center|right/
      , o = /top|center|bottom/
      , t = c.fn.position
      , u = c.fn.offset;
    c.fn.position = function(b) {
        if (!b || !b.of)
            return t.apply(this, arguments);
        b = c.extend({}, b);
        var a = c(b.of), d = a[0], g = (b.collision || "flip").split(" "), e = b.offset ? b.offset.split(" ") : [0, 0], h, k, j;
        if (d.nodeType === 9) {
            h = a.width();
            k = a.height();
            j = {
                top: 0,
                left: 0
            }
        } else if (d.setTimeout) {
            h = a.width();
            k = a.height();
            j = {
                top: a.scrollTop(),
                left: a.scrollLeft()
            }
        } else if (d.preventDefault) {
            b.at = "left top";
            h = k = 0;
            j = {
                top: b.of.pageY,
                left: b.of.pageX
            }
        } else {
            h = a.outerWidth();
            k = a.outerHeight();
            j = a.offset()
        }
        c.each(["my", "at"], function() {
            var f = (b[this] || "").split(" ");
            if (f.length === 1)
                f = n.test(f[0]) ? f.concat(["center"]) : o.test(f[0]) ? ["center"].concat(f) : ["center", "center"];
            f[0] = n.test(f[0]) ? f[0] : "center";
            f[1] = o.test(f[1]) ? f[1] : "center";
            b[this] = f
        });
        if (g.length === 1)
            g[1] = g[0];
        e[0] = parseInt(e[0], 10) || 0;
        if (e.length === 1)
            e[1] = e[0];
        e[1] = parseInt(e[1], 10) || 0;
        if (b.at[0] === "right")
            j.left += h;
        else if (b.at[0] === "center")
            j.left += h / 2;
        if (b.at[1] === "bottom")
            j.top += k;
        else if (b.at[1] === "center")
            j.top += k / 2;
        j.left += e[0];
        j.top += e[1];
        return this.each(function() {
            var f = c(this), l = f.outerWidth(), m = f.outerHeight(), p = parseInt(c.curCSS(this, "marginLeft", true)) || 0, q = parseInt(c.curCSS(this, "marginTop", true)) || 0, v = l + p + (parseInt(c.curCSS(this, "marginRight", true)) || 0), w = m + q + (parseInt(c.curCSS(this, "marginBottom", true)) || 0), i = c.extend({}, j), r;
            if (b.my[0] === "right")
                i.left -= l;
            else if (b.my[0] === "center")
                i.left -= l / 2;
            if (b.my[1] === "bottom")
                i.top -= m;
            else if (b.my[1] === "center")
                i.top -= m / 2;
            i.left = Math.round(i.left);
            i.top = Math.round(i.top);
            r = {
                left: i.left - p,
                top: i.top - q
            };
            c.each(["left", "top"], function(s, x) {
                c.ui.position[g[s]] && c.ui.position[g[s]][x](i, {
                    targetWidth: h,
                    targetHeight: k,
                    elemWidth: l,
                    elemHeight: m,
                    collisionPosition: r,
                    collisionWidth: v,
                    collisionHeight: w,
                    offset: e,
                    my: b.my,
                    at: b.at
                })
            });
            c.fn.bgiframe && f.bgiframe();
            f.offset(c.extend(i, {
                using: b.using
            }))
        })
    }
    ;
    c.ui.position = {
        fit: {
            left: function(b, a) {
                var d = c(window);
                d = a.collisionPosition.left + a.collisionWidth - d.width() - d.scrollLeft();
                b.left = d > 0 ? b.left - d : Math.max(b.left - a.collisionPosition.left, b.left)
            },
            top: function(b, a) {
                var d = c(window);
                d = a.collisionPosition.top + a.collisionHeight - d.height() - d.scrollTop();
                b.top = d > 0 ? b.top - d : Math.max(b.top - a.collisionPosition.top, b.top)
            }
        },
        flip: {
            left: function(b, a) {
                if (a.at[0] !== "center") {
                    var d = c(window);
                    d = a.collisionPosition.left + a.collisionWidth - d.width() - d.scrollLeft();
                    var g = a.my[0] === "left" ? -a.elemWidth : a.my[0] === "right" ? a.elemWidth : 0
                      , e = a.at[0] === "left" ? a.targetWidth : -a.targetWidth
                      , h = -2 * a.offset[0];
                    b.left += a.collisionPosition.left < 0 ? g + e + h : d > 0 ? g + e + h : 0
                }
            },
            top: function(b, a) {
                if (a.at[1] !== "center") {
                    var d = c(window);
                    d = a.collisionPosition.top + a.collisionHeight - d.height() - d.scrollTop();
                    var g = a.my[1] === "top" ? -a.elemHeight : a.my[1] === "bottom" ? a.elemHeight : 0
                      , e = a.at[1] === "top" ? a.targetHeight : -a.targetHeight
                      , h = -2 * a.offset[1];
                    b.top += a.collisionPosition.top < 0 ? g + e + h : d > 0 ? g + e + h : 0
                }
            }
        }
    };
    if (!c.offset.setOffset) {
        c.offset.setOffset = function(b, a) {
            if (/static/.test(c.curCSS(b, "position")))
                b.style.position = "relative";
            var d = c(b)
              , g = d.offset()
              , e = parseInt(c.curCSS(b, "top", true), 10) || 0
              , h = parseInt(c.curCSS(b, "left", true), 10) || 0;
            g = {
                top: a.top - g.top + e,
                left: a.left - g.left + h
            };
            "using"in a ? a.using.call(b, g) : d.css(g)
        }
        ;
        c.fn.offset = function(b) {
            var a = this[0];
            if (!a || !a.ownerDocument)
                return null;
            if (b)
                return this.each(function() {
                    c.offset.setOffset(this, b)
                });
            return u.call(this)
        }
    }
}
)(jQuery);
;/*
 * jQuery UI Draggable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d) {
    d.widget("ui.draggable", d.ui.mouse, {
        widgetEventPrefix: "drag",
        options: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false
        },
        _create: function() {
            if (this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")))
                this.element[0].style.position = "relative";
            this.options.addClasses && this.element.addClass("ui-draggable");
            this.options.disabled && this.element.addClass("ui-draggable-disabled");
            this._mouseInit()
        },
        destroy: function() {
            if (this.element.data("draggable")) {
                this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
                this._mouseDestroy();
                return this
            }
        },
        _mouseCapture: function(a) {
            var b = this.options;
            if (this.helper || b.disabled || d(a.target).is(".ui-resizable-handle"))
                return false;
            this.handle = this._getHandle(a);
            if (!this.handle)
                return false;
            if (b.iframeFix)
                d(b.iframeFix === true ? "iframe" : b.iframeFix).each(function() {
                    d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                        width: this.offsetWidth + "px",
                        height: this.offsetHeight + "px",
                        position: "absolute",
                        opacity: "0.001",
                        zIndex: 1E3
                    }).css(d(this).offset()).appendTo("body")
                });
            return true
        },
        _mouseStart: function(a) {
            var b = this.options;
            this.helper = this._createHelper(a);
            this._cacheHelperProportions();
            if (d.ui.ddmanager)
                d.ui.ddmanager.current = this;
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.positionAbs = this.element.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            d.extend(this.offset, {
                click: {
                    left: a.pageX - this.offset.left,
                    top: a.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.originalPosition = this.position = this._generatePosition(a);
            this.originalPageX = a.pageX;
            this.originalPageY = a.pageY;
            b.cursorAt && this._adjustOffsetFromHelper(b.cursorAt);
            b.containment && this._setContainment();
            if (this._trigger("start", a) === false) {
                this._clear();
                return false
            }
            this._cacheHelperProportions();
            d.ui.ddmanager && !b.dropBehaviour && d.ui.ddmanager.prepareOffsets(this, a);
            this.helper.addClass("ui-draggable-dragging");
            this._mouseDrag(a, true);
            d.ui.ddmanager && d.ui.ddmanager.dragStart(this, a);
            return true
        },
        _mouseDrag: function(a, b) {
            this.position = this._generatePosition(a);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!b) {
                b = this._uiHash();
                if (this._trigger("drag", a, b) === false) {
                    this._mouseUp({});
                    return false
                }
                this.position = b.position
            }
            if (!this.options.axis || this.options.axis != "y")
                this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x")
                this.helper[0].style.top = this.position.top + "px";
            d.ui.ddmanager && d.ui.ddmanager.drag(this, a);
            return false
        },
        _mouseStop: function(a) {
            var b = false;
            if (d.ui.ddmanager && !this.options.dropBehaviour)
                b = d.ui.ddmanager.drop(this, a);
            if (this.dropped) {
                b = this.dropped;
                this.dropped = false
            }
            if ((!this.element[0] || !this.element[0].parentNode) && this.options.helper == "original")
                return false;
            if (this.options.revert == "invalid" && !b || this.options.revert == "valid" && b || this.options.revert === true || d.isFunction(this.options.revert) && this.options.revert.call(this.element, b)) {
                var c = this;
                d(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    c._trigger("stop", a) !== false && c._clear()
                })
            } else
                this._trigger("stop", a) !== false && this._clear();
            return false
        },
        _mouseUp: function(a) {
            this.options.iframeFix === true && d("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            });
            d.ui.ddmanager && d.ui.ddmanager.dragStop(this, a);
            return d.ui.mouse.prototype._mouseUp.call(this, a)
        },
        cancel: function() {
            this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear();
            return this
        },
        _getHandle: function(a) {
            var b = !this.options.handle || !d(this.options.handle, this.element).length ? true : false;
            d(this.options.handle, this.element).find("*").andSelf().each(function() {
                if (this == a.target)
                    b = true
            });
            return b
        },
        _createHelper: function(a) {
            var b = this.options;
            a = d.isFunction(b.helper) ? d(b.helper.apply(this.element[0], [a])) : b.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
            a.parents("body").length || a.appendTo(b.appendTo == "parent" ? this.element[0].parentNode : b.appendTo);
            a[0] != this.element[0] && !/(fixed|absolute)/.test(a.css("position")) && a.css("position", "absolute");
            return a
        },
        _adjustOffsetFromHelper: function(a) {
            if (typeof a == "string")
                a = a.split(" ");
            if (d.isArray(a))
                a = {
                    left: +a[0],
                    top: +a[1] || 0
                };
            if ("left"in a)
                this.offset.click.left = a.left + this.margins.left;
            if ("right"in a)
                this.offset.click.left = this.helperProportions.width - a.right + this.margins.left;
            if ("top"in a)
                this.offset.click.top = a.top + this.margins.top;
            if ("bottom"in a)
                this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var a = this.offsetParent.offset();
            if (this.cssPosition == "absolute" && this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) {
                a.left += this.scrollParent.scrollLeft();
                a.top += this.scrollParent.scrollTop()
            }
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && d.browser.msie)
                a = {
                    top: 0,
                    left: 0
                };
            return {
                top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var a = this.element.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            } else
                return {
                    top: 0,
                    left: 0
                }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var a = this.options;
            if (a.containment == "parent")
                a.containment = this.helper[0].parentNode;
            if (a.containment == "document" || a.containment == "window")
                this.containment = [a.containment == "document" ? 0 : d(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a.containment == "document" ? 0 : d(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (a.containment == "document" ? 0 : d(window).scrollLeft()) + d(a.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (a.containment == "document" ? 0 : d(window).scrollTop()) + (d(a.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(a.containment) && a.containment.constructor != Array) {
                a = d(a.containment);
                var b = a[0];
                if (b) {
                    a.offset();
                    var c = d(b).css("overflow") != "hidden";
                    this.containment = [(parseInt(d(b).css("borderLeftWidth"), 10) || 0) + (parseInt(d(b).css("paddingLeft"), 10) || 0), (parseInt(d(b).css("borderTopWidth"), 10) || 0) + (parseInt(d(b).css("paddingTop"), 10) || 0), (c ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(d(b).css("borderLeftWidth"), 10) || 0) - (parseInt(d(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (c ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(d(b).css("borderTopWidth"), 10) || 0) - (parseInt(d(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
                    this.relative_container = a
                }
            } else if (a.containment.constructor == Array)
                this.containment = a.containment
        },
        _convertPositionTo: function(a, b) {
            if (!b)
                b = this.position;
            a = a == "absolute" ? 1 : -1;
            var c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent
              , f = /(html|body)/i.test(c[0].tagName);
            return {
                top: b.top + this.offset.relative.top * a + this.offset.parent.top * a - (d.browser.safari && d.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : c.scrollTop()) * a),
                left: b.left + this.offset.relative.left * a + this.offset.parent.left * a - (d.browser.safari && d.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : c.scrollLeft()) * a)
            }
        },
        _generatePosition: function(a) {
            var b = this.options
              , c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent
              , f = /(html|body)/i.test(c[0].tagName)
              , e = a.pageX
              , h = a.pageY;
            if (this.originalPosition) {
                var g;
                if (this.containment) {
                    if (this.relative_container) {
                        g = this.relative_container.offset();
                        g = [this.containment[0] + g.left, this.containment[1] + g.top, this.containment[2] + g.left, this.containment[3] + g.top]
                    } else
                        g = this.containment;
                    if (a.pageX - this.offset.click.left < g[0])
                        e = g[0] + this.offset.click.left;
                    if (a.pageY - this.offset.click.top < g[1])
                        h = g[1] + this.offset.click.top;
                    if (a.pageX - this.offset.click.left > g[2])
                        e = g[2] + this.offset.click.left;
                    if (a.pageY - this.offset.click.top > g[3])
                        h = g[3] + this.offset.click.top
                }
                if (b.grid) {
                    h = b.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / b.grid[1]) * b.grid[1] : this.originalPageY;
                    h = g ? !(h - this.offset.click.top < g[1] || h - this.offset.click.top > g[3]) ? h : !(h - this.offset.click.top < g[1]) ? h - b.grid[1] : h + b.grid[1] : h;
                    e = b.grid[0] ? this.originalPageX + Math.round((e - this.originalPageX) / b.grid[0]) * b.grid[0] : this.originalPageX;
                    e = g ? !(e - this.offset.click.left < g[0] || e - this.offset.click.left > g[2]) ? e : !(e - this.offset.click.left < g[0]) ? e - b.grid[0] : e + b.grid[0] : e
                }
            }
            return {
                top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (d.browser.safari && d.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : c.scrollTop()),
                left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (d.browser.safari && d.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : c.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove();
            this.helper = null;
            this.cancelHelperRemoval = false
        },
        _trigger: function(a, b, c) {
            c = c || this._uiHash();
            d.ui.plugin.call(this, a, [b, c]);
            if (a == "drag")
                this.positionAbs = this._convertPositionTo("absolute");
            return d.Widget.prototype._trigger.call(this, a, b, c)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    d.extend(d.ui.draggable, {
        version: "1.8.16"
    });
    d.ui.plugin.add("draggable", "connectToSortable", {
        start: function(a, b) {
            var c = d(this).data("draggable")
              , f = c.options
              , e = d.extend({}, b, {
                item: c.element
            });
            c.sortables = [];
            d(f.connectToSortable).each(function() {
                var h = d.data(this, "sortable");
                if (h && !h.options.disabled) {
                    c.sortables.push({
                        instance: h,
                        shouldRevert: h.options.revert
                    });
                    h.refreshPositions();
                    h._trigger("activate", a, e)
                }
            })
        },
        stop: function(a, b) {
            var c = d(this).data("draggable")
              , f = d.extend({}, b, {
                item: c.element
            });
            d.each(c.sortables, function() {
                if (this.instance.isOver) {
                    this.instance.isOver = 0;
                    c.cancelHelperRemoval = true;
                    this.instance.cancelHelperRemoval = false;
                    if (this.shouldRevert)
                        this.instance.options.revert = true;
                    this.instance._mouseStop(a);
                    this.instance.options.helper = this.instance.options._helper;
                    c.options.helper == "original" && this.instance.currentItem.css({
                        top: "auto",
                        left: "auto"
                    })
                } else {
                    this.instance.cancelHelperRemoval = false;
                    this.instance._trigger("deactivate", a, f)
                }
            })
        },
        drag: function(a, b) {
            var c = d(this).data("draggable")
              , f = this;
            d.each(c.sortables, function() {
                this.instance.positionAbs = c.positionAbs;
                this.instance.helperProportions = c.helperProportions;
                this.instance.offset.click = c.offset.click;
                if (this.instance._intersectsWith(this.instance.containerCache)) {
                    if (!this.instance.isOver) {
                        this.instance.isOver = 1;
                        this.instance.currentItem = d(f).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", true);
                        this.instance.options._helper = this.instance.options.helper;
                        this.instance.options.helper = function() {
                            return b.helper[0]
                        }
                        ;
                        a.target = this.instance.currentItem[0];
                        this.instance._mouseCapture(a, true);
                        this.instance._mouseStart(a, true, true);
                        this.instance.offset.click.top = c.offset.click.top;
                        this.instance.offset.click.left = c.offset.click.left;
                        this.instance.offset.parent.left -= c.offset.parent.left - this.instance.offset.parent.left;
                        this.instance.offset.parent.top -= c.offset.parent.top - this.instance.offset.parent.top;
                        c._trigger("toSortable", a);
                        c.dropped = this.instance.element;
                        c.currentItem = c.element;
                        this.instance.fromOutside = c
                    }
                    this.instance.currentItem && this.instance._mouseDrag(a)
                } else if (this.instance.isOver) {
                    this.instance.isOver = 0;
                    this.instance.cancelHelperRemoval = true;
                    this.instance.options.revert = false;
                    this.instance._trigger("out", a, this.instance._uiHash(this.instance));
                    this.instance._mouseStop(a, true);
                    this.instance.options.helper = this.instance.options._helper;
                    this.instance.currentItem.remove();
                    this.instance.placeholder && this.instance.placeholder.remove();
                    c._trigger("fromSortable", a);
                    c.dropped = false
                }
            })
        }
    });
    d.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var a = d("body")
              , b = d(this).data("draggable").options;
            if (a.css("cursor"))
                b._cursor = a.css("cursor");
            a.css("cursor", b.cursor)
        },
        stop: function() {
            var a = d(this).data("draggable").options;
            a._cursor && d("body").css("cursor", a._cursor)
        }
    });
    d.ui.plugin.add("draggable", "opacity", {
        start: function(a, b) {
            a = d(b.helper);
            b = d(this).data("draggable").options;
            if (a.css("opacity"))
                b._opacity = a.css("opacity");
            a.css("opacity", b.opacity)
        },
        stop: function(a, b) {
            a = d(this).data("draggable").options;
            a._opacity && d(b.helper).css("opacity", a._opacity)
        }
    });
    d.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var a = d(this).data("draggable");
            if (a.scrollParent[0] != document && a.scrollParent[0].tagName != "HTML")
                a.overflowOffset = a.scrollParent.offset()
        },
        drag: function(a) {
            var b = d(this).data("draggable")
              , c = b.options
              , f = false;
            if (b.scrollParent[0] != document && b.scrollParent[0].tagName != "HTML") {
                if (!c.axis || c.axis != "x")
                    if (b.overflowOffset.top + b.scrollParent[0].offsetHeight - a.pageY < c.scrollSensitivity)
                        b.scrollParent[0].scrollTop = f = b.scrollParent[0].scrollTop + c.scrollSpeed;
                    else if (a.pageY - b.overflowOffset.top < c.scrollSensitivity)
                        b.scrollParent[0].scrollTop = f = b.scrollParent[0].scrollTop - c.scrollSpeed;
                if (!c.axis || c.axis != "y")
                    if (b.overflowOffset.left + b.scrollParent[0].offsetWidth - a.pageX < c.scrollSensitivity)
                        b.scrollParent[0].scrollLeft = f = b.scrollParent[0].scrollLeft + c.scrollSpeed;
                    else if (a.pageX - b.overflowOffset.left < c.scrollSensitivity)
                        b.scrollParent[0].scrollLeft = f = b.scrollParent[0].scrollLeft - c.scrollSpeed
            } else {
                if (!c.axis || c.axis != "x")
                    if (a.pageY - d(document).scrollTop() < c.scrollSensitivity)
                        f = d(document).scrollTop(d(document).scrollTop() - c.scrollSpeed);
                    else if (d(window).height() - (a.pageY - d(document).scrollTop()) < c.scrollSensitivity)
                        f = d(document).scrollTop(d(document).scrollTop() + c.scrollSpeed);
                if (!c.axis || c.axis != "y")
                    if (a.pageX - d(document).scrollLeft() < c.scrollSensitivity)
                        f = d(document).scrollLeft(d(document).scrollLeft() - c.scrollSpeed);
                    else if (d(window).width() - (a.pageX - d(document).scrollLeft()) < c.scrollSensitivity)
                        f = d(document).scrollLeft(d(document).scrollLeft() + c.scrollSpeed)
            }
            f !== false && d.ui.ddmanager && !c.dropBehaviour && d.ui.ddmanager.prepareOffsets(b, a)
        }
    });
    d.ui.plugin.add("draggable", "snap", {
        start: function() {
            var a = d(this).data("draggable")
              , b = a.options;
            a.snapElements = [];
            d(b.snap.constructor != String ? b.snap.items || ":data(draggable)" : b.snap).each(function() {
                var c = d(this)
                  , f = c.offset();
                this != a.element[0] && a.snapElements.push({
                    item: this,
                    width: c.outerWidth(),
                    height: c.outerHeight(),
                    top: f.top,
                    left: f.left
                })
            })
        },
        drag: function(a, b) {
            for (var c = d(this).data("draggable"), f = c.options, e = f.snapTolerance, h = b.offset.left, g = h + c.helperProportions.width, n = b.offset.top, o = n + c.helperProportions.height, i = c.snapElements.length - 1; i >= 0; i--) {
                var j = c.snapElements[i].left
                  , l = j + c.snapElements[i].width
                  , k = c.snapElements[i].top
                  , m = k + c.snapElements[i].height;
                if (j - e < h && h < l + e && k - e < n && n < m + e || j - e < h && h < l + e && k - e < o && o < m + e || j - e < g && g < l + e && k - e < n && n < m + e || j - e < g && g < l + e && k - e < o && o < m + e) {
                    if (f.snapMode != "inner") {
                        var p = Math.abs(k - o) <= e
                          , q = Math.abs(m - n) <= e
                          , r = Math.abs(j - g) <= e
                          , s = Math.abs(l - h) <= e;
                        if (p)
                            b.position.top = c._convertPositionTo("relative", {
                                top: k - c.helperProportions.height,
                                left: 0
                            }).top - c.margins.top;
                        if (q)
                            b.position.top = c._convertPositionTo("relative", {
                                top: m,
                                left: 0
                            }).top - c.margins.top;
                        if (r)
                            b.position.left = c._convertPositionTo("relative", {
                                top: 0,
                                left: j - c.helperProportions.width
                            }).left - c.margins.left;
                        if (s)
                            b.position.left = c._convertPositionTo("relative", {
                                top: 0,
                                left: l
                            }).left - c.margins.left
                    }
                    var t = p || q || r || s;
                    if (f.snapMode != "outer") {
                        p = Math.abs(k - n) <= e;
                        q = Math.abs(m - o) <= e;
                        r = Math.abs(j - h) <= e;
                        s = Math.abs(l - g) <= e;
                        if (p)
                            b.position.top = c._convertPositionTo("relative", {
                                top: k,
                                left: 0
                            }).top - c.margins.top;
                        if (q)
                            b.position.top = c._convertPositionTo("relative", {
                                top: m - c.helperProportions.height,
                                left: 0
                            }).top - c.margins.top;
                        if (r)
                            b.position.left = c._convertPositionTo("relative", {
                                top: 0,
                                left: j
                            }).left - c.margins.left;
                        if (s)
                            b.position.left = c._convertPositionTo("relative", {
                                top: 0,
                                left: l - c.helperProportions.width
                            }).left - c.margins.left
                    }
                    if (!c.snapElements[i].snapping && (p || q || r || s || t))
                        c.options.snap.snap && c.options.snap.snap.call(c.element, a, d.extend(c._uiHash(), {
                            snapItem: c.snapElements[i].item
                        }));
                    c.snapElements[i].snapping = p || q || r || s || t
                } else {
                    c.snapElements[i].snapping && c.options.snap.release && c.options.snap.release.call(c.element, a, d.extend(c._uiHash(), {
                        snapItem: c.snapElements[i].item
                    }));
                    c.snapElements[i].snapping = false
                }
            }
        }
    });
    d.ui.plugin.add("draggable", "stack", {
        start: function() {
            var a = d(this).data("draggable").options;
            a = d.makeArray(d(a.stack)).sort(function(c, f) {
                return (parseInt(d(c).css("zIndex"), 10) || 0) - (parseInt(d(f).css("zIndex"), 10) || 0)
            });
            if (a.length) {
                var b = parseInt(a[0].style.zIndex) || 0;
                d(a).each(function(c) {
                    this.style.zIndex = b + c
                });
                this[0].style.zIndex = b + a.length
            }
        }
    });
    d.ui.plugin.add("draggable", "zIndex", {
        start: function(a, b) {
            a = d(b.helper);
            b = d(this).data("draggable").options;
            if (a.css("zIndex"))
                b._zIndex = a.css("zIndex");
            a.css("zIndex", b.zIndex)
        },
        stop: function(a, b) {
            a = d(this).data("draggable").options;
            a._zIndex && d(b.helper).css("zIndex", a._zIndex)
        }
    })
}
)(jQuery);
;/*
 * jQuery UI Droppable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */
(function(d) {
    d.widget("ui.droppable", {
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: false,
            addClasses: true,
            greedy: false,
            hoverClass: false,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function() {
            var a = this.options
              , b = a.accept;
            this.isover = 0;
            this.isout = 1;
            this.accept = d.isFunction(b) ? b : function(c) {
                return c.is(b)
            }
            ;
            this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            };
            d.ui.ddmanager.droppables[a.scope] = d.ui.ddmanager.droppables[a.scope] || [];
            d.ui.ddmanager.droppables[a.scope].push(this);
            a.addClasses && this.element.addClass("ui-droppable")
        },
        destroy: function() {
            for (var a = d.ui.ddmanager.droppables[this.options.scope], b = 0; b < a.length; b++)
                a[b] == this && a.splice(b, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");
            return this
        },
        _setOption: function(a, b) {
            if (a == "accept")
                this.accept = d.isFunction(b) ? b : function(c) {
                    return c.is(b)
                }
                ;
            d.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(a) {
            var b = d.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass);
            b && this._trigger("activate", a, this.ui(b))
        },
        _deactivate: function(a) {
            var b = d.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass);
            b && this._trigger("deactivate", a, this.ui(b))
        },
        _over: function(a) {
            var b = d.ui.ddmanager.current;
            if (!(!b || (b.currentItem || b.element)[0] == this.element[0]))
                if (this.accept.call(this.element[0], b.currentItem || b.element)) {
                    this.options.hoverClass && this.element.addClass(this.options.hoverClass);
                    this._trigger("over", a, this.ui(b))
                }
        },
        _out: function(a) {
            var b = d.ui.ddmanager.current;
            if (!(!b || (b.currentItem || b.element)[0] == this.element[0]))
                if (this.accept.call(this.element[0], b.currentItem || b.element)) {
                    this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
                    this._trigger("out", a, this.ui(b))
                }
        },
        _drop: function(a, b) {
            var c = b || d.ui.ddmanager.current;
            if (!c || (c.currentItem || c.element)[0] == this.element[0])
                return false;
            var e = false;
            this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
                var g = d.data(this, "droppable");
                if (g.options.greedy && !g.options.disabled && g.options.scope == c.options.scope && g.accept.call(g.element[0], c.currentItem || c.element) && d.ui.intersect(c, d.extend(g, {
                    offset: g.element.offset()
                }), g.options.tolerance)) {
                    e = true;
                    return false
                }
            });
            if (e)
                return false;
            if (this.accept.call(this.element[0], c.currentItem || c.element)) {
                this.options.activeClass && this.element.removeClass(this.options.activeClass);
                this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
                this._trigger("drop", a, this.ui(c));
                return this.element
            }
            return false
        },
        ui: function(a) {
            return {
                draggable: a.currentItem || a.element,
                helper: a.helper,
                position: a.position,
                offset: a.positionAbs
            }
        }
    });
    d.extend(d.ui.droppable, {
        version: "1.8.16"
    });
    d.ui.intersect = function(a, b, c) {
        if (!b.offset)
            return false;
        var e = (a.positionAbs || a.position.absolute).left
          , g = e + a.helperProportions.width
          , f = (a.positionAbs || a.position.absolute).top
          , h = f + a.helperProportions.height
          , i = b.offset.left
          , k = i + b.proportions.width
          , j = b.offset.top
          , l = j + b.proportions.height;
        switch (c) {
        case "fit":
            return i <= e && g <= k && j <= f && h <= l;
        case "intersect":
            return i < e + a.helperProportions.width / 2 && g - a.helperProportions.width / 2 < k && j < f + a.helperProportions.height / 2 && h - a.helperProportions.height / 2 < l;
        case "pointer":
            return d.ui.isOver((a.positionAbs || a.position.absolute).top + (a.clickOffset || a.offset.click).top, (a.positionAbs || a.position.absolute).left + (a.clickOffset || a.offset.click).left, j, i, b.proportions.height, b.proportions.width);
        case "touch":
            return (f >= j && f <= l || h >= j && h <= l || f < j && h > l) && (e >= i && e <= k || g >= i && g <= k || e < i && g > k);
        default:
            return false
        }
    }
    ;
    d.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(a, b) {
            var c = d.ui.ddmanager.droppables[a.options.scope] || []
              , e = b ? b.type : null
              , g = (a.currentItem || a.element).find(":data(droppable)").andSelf()
              , f = 0;
            a: for (; f < c.length; f++)
                if (!(c[f].options.disabled || a && !c[f].accept.call(c[f].element[0], a.currentItem || a.element))) {
                    for (var h = 0; h < g.length; h++)
                        if (g[h] == c[f].element[0]) {
                            c[f].proportions.height = 0;
                            continue a
                        }
                    c[f].visible = c[f].element.css("display") != "none";
                    if (c[f].visible) {
                        e == "mousedown" && c[f]._activate.call(c[f], b);
                        c[f].offset = c[f].element.offset();
                        c[f].proportions = {
                            width: c[f].element[0].offsetWidth,
                            height: c[f].element[0].offsetHeight
                        }
                    }
                }
        },
        drop: function(a, b) {
            var c = false;
            d.each(d.ui.ddmanager.droppables[a.options.scope] || [], function() {
                if (this.options) {
                    if (!this.options.disabled && this.visible && d.ui.intersect(a, this, this.options.tolerance))
                        c = c || this._drop.call(this, b);
                    if (!this.options.disabled && this.visible && this.accept.call(this.element[0], a.currentItem || a.element)) {
                        this.isout = 1;
                        this.isover = 0;
                        this._deactivate.call(this, b)
                    }
                }
            });
            return c
        },
        dragStart: function(a, b) {
            a.element.parents(":not(body,html)").bind("scroll.droppable", function() {
                a.options.refreshPositions || d.ui.ddmanager.prepareOffsets(a, b)
            })
        },
        drag: function(a, b) {
            a.options.refreshPositions && d.ui.ddmanager.prepareOffsets(a, b);
            d.each(d.ui.ddmanager.droppables[a.options.scope] || [], function() {
                if (!(this.options.disabled || this.greedyChild || !this.visible)) {
                    var c = d.ui.intersect(a, this, this.options.tolerance);
                    if (c = !c && this.isover == 1 ? "isout" : c && this.isover == 0 ? "isover" : null) {
                        var e;
                        if (this.options.greedy) {
                            var g = this.element.parents(":data(droppable):eq(0)");
                            if (g.length) {
                                e = d.data(g[0], "droppable");
                                e.greedyChild = c == "isover" ? 1 : 0
                            }
                        }
                        if (e && c == "isover") {
                            e.isover = 0;
                            e.isout = 1;
                            e._out.call(e, b)
                        }
                        this[c] = 1;
                        this[c == "isout" ? "isover" : "isout"] = 0;
                        this[c == "isover" ? "_over" : "_out"].call(this, b);
                        if (e && c == "isout") {
                            e.isout = 0;
                            e.isover = 1;
                            e._over.call(e, b)
                        }
                    }
                }
            })
        },
        dragStop: function(a, b) {
            a.element.parents(":not(body,html)").unbind("scroll.droppable");
            a.options.refreshPositions || d.ui.ddmanager.prepareOffsets(a, b)
        }
    }
}
)(jQuery);
;/*
 * jQuery UI Resizable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(e) {
    e.widget("ui.resizable", e.ui.mouse, {
        widgetEventPrefix: "resize",
        options: {
            alsoResize: false,
            animate: false,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: false,
            autoHide: false,
            containment: false,
            ghost: false,
            grid: false,
            handles: "e,s,se",
            helper: false,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1E3
        },
        _create: function() {
            var b = this
              , a = this.options;
            this.element.addClass("ui-resizable");
            e.extend(this, {
                _aspectRatio: !!a.aspectRatio,
                aspectRatio: a.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper" : null
            });
            if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {
                /relative/.test(this.element.css("position")) && e.browser.opera && this.element.css({
                    position: "relative",
                    top: "auto",
                    left: "auto"
                });
                this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                }));
                this.element = this.element.parent().data("resizable", this.element.data("resizable"));
                this.elementIsWrapper = true;
                this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                });
                this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                });
                this.originalResizeStyle = this.originalElement.css("resize");
                this.originalElement.css("resize", "none");
                this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                }));
                this.originalElement.css({
                    margin: this.originalElement.css("margin")
                });
                this._proportionallyResize()
            }
            this.handles = a.handles || (!e(".ui-resizable-handle", this.element).length ? "e,s,se" : {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            });
            if (this.handles.constructor == String) {
                if (this.handles == "all")
                    this.handles = "n,e,s,w,se,sw,ne,nw";
                var c = this.handles.split(",");
                this.handles = {};
                for (var d = 0; d < c.length; d++) {
                    var f = e.trim(c[d])
                      , g = e('<div class="ui-resizable-handle ' + ("ui-resizable-" + f) + '"></div>');
                    /sw|se|ne|nw/.test(f) && g.css({
                        zIndex: ++a.zIndex
                    });
                    "se" == f && g.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
                    this.handles[f] = ".ui-resizable-" + f;
                    this.element.append(g)
                }
            }
            this._renderAxis = function(h) {
                h = h || this.element;
                for (var i in this.handles) {
                    if (this.handles[i].constructor == String)
                        this.handles[i] = e(this.handles[i], this.element).show();
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var j = e(this.handles[i], this.element)
                          , l = 0;
                        l = /sw|ne|nw|se|n|s/.test(i) ? j.outerHeight() : j.outerWidth();
                        j = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join("");
                        h.css(j, l);
                        this._proportionallyResize()
                    }
                    e(this.handles[i])
                }
            }
            ;
            this._renderAxis(this.element);
            this._handles = e(".ui-resizable-handle", this.element).disableSelection();
            this._handles.mouseover(function() {
                if (!b.resizing) {
                    if (this.className)
                        var h = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    b.axis = h && h[1] ? h[1] : "se"
                }
            });
            if (a.autoHide) {
                this._handles.hide();
                e(this.element).addClass("ui-resizable-autohide").hover(function() {
                    if (!a.disabled) {
                        e(this).removeClass("ui-resizable-autohide");
                        b._handles.show()
                    }
                }, function() {
                    if (!a.disabled)
                        if (!b.resizing) {
                            e(this).addClass("ui-resizable-autohide");
                            b._handles.hide()
                        }
                })
            }
            this._mouseInit()
        },
        destroy: function() {
            this._mouseDestroy();
            var b = function(c) {
                e(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                b(this.element);
                var a = this.element;
                a.after(this.originalElement.css({
                    position: a.css("position"),
                    width: a.outerWidth(),
                    height: a.outerHeight(),
                    top: a.css("top"),
                    left: a.css("left")
                })).remove()
            }
            this.originalElement.css("resize", this.originalResizeStyle);
            b(this.originalElement);
            return this
        },
        _mouseCapture: function(b) {
            var a = false;
            for (var c in this.handles)
                if (e(this.handles[c])[0] == b.target)
                    a = true;
            return !this.options.disabled && a
        },
        _mouseStart: function(b) {
            var a = this.options
              , c = this.element.position()
              , d = this.element;
            this.resizing = true;
            this.documentScroll = {
                top: e(document).scrollTop(),
                left: e(document).scrollLeft()
            };
            if (d.is(".ui-draggable") || /absolute/.test(d.css("position")))
                d.css({
                    position: "absolute",
                    top: c.top,
                    left: c.left
                });
            e.browser.opera && /relative/.test(d.css("position")) && d.css({
                position: "relative",
                top: "auto",
                left: "auto"
            });
            this._renderProxy();
            c = m(this.helper.css("left"));
            var f = m(this.helper.css("top"));
            if (a.containment) {
                c += e(a.containment).scrollLeft() || 0;
                f += e(a.containment).scrollTop() || 0
            }
            this.offset = this.helper.offset();
            this.position = {
                left: c,
                top: f
            };
            this.size = this._helper ? {
                width: d.outerWidth(),
                height: d.outerHeight()
            } : {
                width: d.width(),
                height: d.height()
            };
            this.originalSize = this._helper ? {
                width: d.outerWidth(),
                height: d.outerHeight()
            } : {
                width: d.width(),
                height: d.height()
            };
            this.originalPosition = {
                left: c,
                top: f
            };
            this.sizeDiff = {
                width: d.outerWidth() - d.width(),
                height: d.outerHeight() - d.height()
            };
            this.originalMousePosition = {
                left: b.pageX,
                top: b.pageY
            };
            this.aspectRatio = typeof a.aspectRatio == "number" ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
            a = e(".ui-resizable-" + this.axis).css("cursor");
            e("body").css("cursor", a == "auto" ? this.axis + "-resize" : a);
            d.addClass("ui-resizable-resizing");
            this._propagate("start", b);
            return true
        },
        _mouseDrag: function(b) {
            var a = this.helper
              , c = this.originalMousePosition
              , d = this._change[this.axis];
            if (!d)
                return false;
            c = d.apply(this, [b, b.pageX - c.left || 0, b.pageY - c.top || 0]);
            this._updateVirtualBoundaries(b.shiftKey);
            if (this._aspectRatio || b.shiftKey)
                c = this._updateRatio(c, b);
            c = this._respectSize(c, b);
            this._propagate("resize", b);
            a.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            });
            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize();
            this._updateCache(c);
            this._trigger("resize", b, this.ui());
            return false
        },
        _mouseStop: function(b) {
            this.resizing = false;
            var a = this.options
              , c = this;
            if (this._helper) {
                var d = this._proportionallyResizeElements
                  , f = d.length && /textarea/i.test(d[0].nodeName);
                d = f && e.ui.hasScroll(d[0], "left") ? 0 : c.sizeDiff.height;
                f = f ? 0 : c.sizeDiff.width;
                f = {
                    width: c.helper.width() - f,
                    height: c.helper.height() - d
                };
                d = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null;
                var g = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
                a.animate || this.element.css(e.extend(f, {
                    top: g,
                    left: d
                }));
                c.helper.height(c.size.height);
                c.helper.width(c.size.width);
                this._helper && !a.animate && this._proportionallyResize()
            }
            e("body").css("cursor", "auto");
            this.element.removeClass("ui-resizable-resizing");
            this._propagate("stop", b);
            this._helper && this.helper.remove();
            return false
        },
        _updateVirtualBoundaries: function(b) {
            var a = this.options, c, d, f;
            a = {
                minWidth: k(a.minWidth) ? a.minWidth : 0,
                maxWidth: k(a.maxWidth) ? a.maxWidth : Infinity,
                minHeight: k(a.minHeight) ? a.minHeight : 0,
                maxHeight: k(a.maxHeight) ? a.maxHeight : Infinity
            };
            if (this._aspectRatio || b) {
                b = a.minHeight * this.aspectRatio;
                d = a.minWidth / this.aspectRatio;
                c = a.maxHeight * this.aspectRatio;
                f = a.maxWidth / this.aspectRatio;
                if (b > a.minWidth)
                    a.minWidth = b;
                if (d > a.minHeight)
                    a.minHeight = d;
                if (c < a.maxWidth)
                    a.maxWidth = c;
                if (f < a.maxHeight)
                    a.maxHeight = f
            }
            this._vBoundaries = a
        },
        _updateCache: function(b) {
            this.offset = this.helper.offset();
            if (k(b.left))
                this.position.left = b.left;
            if (k(b.top))
                this.position.top = b.top;
            if (k(b.height))
                this.size.height = b.height;
            if (k(b.width))
                this.size.width = b.width
        },
        _updateRatio: function(b) {
            var a = this.position
              , c = this.size
              , d = this.axis;
            if (k(b.height))
                b.width = b.height * this.aspectRatio;
            else if (k(b.width))
                b.height = b.width / this.aspectRatio;
            if (d == "sw") {
                b.left = a.left + (c.width - b.width);
                b.top = null
            }
            if (d == "nw") {
                b.top = a.top + (c.height - b.height);
                b.left = a.left + (c.width - b.width)
            }
            return b
        },
        _respectSize: function(b) {
            var a = this._vBoundaries
              , c = this.axis
              , d = k(b.width) && a.maxWidth && a.maxWidth < b.width
              , f = k(b.height) && a.maxHeight && a.maxHeight < b.height
              , g = k(b.width) && a.minWidth && a.minWidth > b.width
              , h = k(b.height) && a.minHeight && a.minHeight > b.height;
            if (g)
                b.width = a.minWidth;
            if (h)
                b.height = a.minHeight;
            if (d)
                b.width = a.maxWidth;
            if (f)
                b.height = a.maxHeight;
            var i = this.originalPosition.left + this.originalSize.width
              , j = this.position.top + this.size.height
              , l = /sw|nw|w/.test(c);
            c = /nw|ne|n/.test(c);
            if (g && l)
                b.left = i - a.minWidth;
            if (d && l)
                b.left = i - a.maxWidth;
            if (h && c)
                b.top = j - a.minHeight;
            if (f && c)
                b.top = j - a.maxHeight;
            if ((a = !b.width && !b.height) && !b.left && b.top)
                b.top = null;
            else if (a && !b.top && b.left)
                b.left = null;
            return b
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var b = this.helper || this.element, a = 0; a < this._proportionallyResizeElements.length; a++) {
                    var c = this._proportionallyResizeElements[a];
                    if (!this.borderDif) {
                        var d = [c.css("borderTopWidth"), c.css("borderRightWidth"), c.css("borderBottomWidth"), c.css("borderLeftWidth")]
                          , f = [c.css("paddingTop"), c.css("paddingRight"), c.css("paddingBottom"), c.css("paddingLeft")];
                        this.borderDif = e.map(d, function(g, h) {
                            g = parseInt(g, 10) || 0;
                            h = parseInt(f[h], 10) || 0;
                            return g + h
                        })
                    }
                    e.browser.msie && (e(b).is(":hidden") || e(b).parents(":hidden").length) || c.css({
                        height: b.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: b.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
        },
        _renderProxy: function() {
            var b = this.options;
            this.elementOffset = this.element.offset();
            if (this._helper) {
                this.helper = this.helper || e('<div style="overflow:hidden;"></div>');
                var a = e.browser.msie && e.browser.version < 7
                  , c = a ? 1 : 0;
                a = a ? 2 : -1;
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + a,
                    height: this.element.outerHeight() + a,
                    position: "absolute",
                    left: this.elementOffset.left - c + "px",
                    top: this.elementOffset.top - c + "px",
                    zIndex: ++b.zIndex
                });
                this.helper.appendTo("body").disableSelection()
            } else
                this.helper = this.element
        },
        _change: {
            e: function(b, a) {
                return {
                    width: this.originalSize.width + a
                }
            },
            w: function(b, a) {
                return {
                    left: this.originalPosition.left + a,
                    width: this.originalSize.width - a
                }
            },
            n: function(b, a, c) {
                return {
                    top: this.originalPosition.top + c,
                    height: this.originalSize.height - c
                }
            },
            s: function(b, a, c) {
                return {
                    height: this.originalSize.height + c
                }
            },
            se: function(b, a, c) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, a, c]))
            },
            sw: function(b, a, c) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, a, c]))
            },
            ne: function(b, a, c) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, a, c]))
            },
            nw: function(b, a, c) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, a, c]))
            }
        },
        _propagate: function(b, a) {
            e.ui.plugin.call(this, b, [a, this.ui()]);
            b != "resize" && this._trigger(b, a, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    e.extend(e.ui.resizable, {
        version: "1.8.16"
    });
    e.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var b = e(this).data("resizable").options
              , a = function(c) {
                e(c).each(function() {
                    var d = e(this);
                    d.data("resizable-alsoresize", {
                        width: parseInt(d.width(), 10),
                        height: parseInt(d.height(), 10),
                        left: parseInt(d.css("left"), 10),
                        top: parseInt(d.css("top"), 10),
                        position: d.css("position")
                    })
                })
            };
            if (typeof b.alsoResize == "object" && !b.alsoResize.parentNode)
                if (b.alsoResize.length) {
                    b.alsoResize = b.alsoResize[0];
                    a(b.alsoResize)
                } else
                    e.each(b.alsoResize, function(c) {
                        a(c)
                    });
            else
                a(b.alsoResize)
        },
        resize: function(b, a) {
            var c = e(this).data("resizable");
            b = c.options;
            var d = c.originalSize
              , f = c.originalPosition
              , g = {
                height: c.size.height - d.height || 0,
                width: c.size.width - d.width || 0,
                top: c.position.top - f.top || 0,
                left: c.position.left - f.left || 0
            }
              , h = function(i, j) {
                e(i).each(function() {
                    var l = e(this)
                      , q = e(this).data("resizable-alsoresize")
                      , p = {}
                      , r = j && j.length ? j : l.parents(a.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    e.each(r, function(n, o) {
                        if ((n = (q[o] || 0) + (g[o] || 0)) && n >= 0)
                            p[o] = n || null
                    });
                    if (e.browser.opera && /relative/.test(l.css("position"))) {
                        c._revertToRelativePosition = true;
                        l.css({
                            position: "absolute",
                            top: "auto",
                            left: "auto"
                        })
                    }
                    l.css(p)
                })
            };
            typeof b.alsoResize == "object" && !b.alsoResize.nodeType ? e.each(b.alsoResize, function(i, j) {
                h(i, j)
            }) : h(b.alsoResize)
        },
        stop: function() {
            var b = e(this).data("resizable")
              , a = b.options
              , c = function(d) {
                e(d).each(function() {
                    var f = e(this);
                    f.css({
                        position: f.data("resizable-alsoresize").position
                    })
                })
            };
            if (b._revertToRelativePosition) {
                b._revertToRelativePosition = false;
                typeof a.alsoResize == "object" && !a.alsoResize.nodeType ? e.each(a.alsoResize, function(d) {
                    c(d)
                }) : c(a.alsoResize)
            }
            e(this).removeData("resizable-alsoresize")
        }
    });
    e.ui.plugin.add("resizable", "animate", {
        stop: function(b) {
            var a = e(this).data("resizable")
              , c = a.options
              , d = a._proportionallyResizeElements
              , f = d.length && /textarea/i.test(d[0].nodeName)
              , g = f && e.ui.hasScroll(d[0], "left") ? 0 : a.sizeDiff.height;
            f = {
                width: a.size.width - (f ? 0 : a.sizeDiff.width),
                height: a.size.height - g
            };
            g = parseInt(a.element.css("left"), 10) + (a.position.left - a.originalPosition.left) || null;
            var h = parseInt(a.element.css("top"), 10) + (a.position.top - a.originalPosition.top) || null;
            a.element.animate(e.extend(f, h && g ? {
                top: h,
                left: g
            } : {}), {
                duration: c.animateDuration,
                easing: c.animateEasing,
                step: function() {
                    var i = {
                        width: parseInt(a.element.css("width"), 10),
                        height: parseInt(a.element.css("height"), 10),
                        top: parseInt(a.element.css("top"), 10),
                        left: parseInt(a.element.css("left"), 10)
                    };
                    d && d.length && e(d[0]).css({
                        width: i.width,
                        height: i.height
                    });
                    a._updateCache(i);
                    a._propagate("resize", b)
                }
            })
        }
    });
    e.ui.plugin.add("resizable", "containment", {
        start: function() {
            var b = e(this).data("resizable")
              , a = b.element
              , c = b.options.containment;
            if (a = c instanceof e ? c.get(0) : /parent/.test(c) ? a.parent().get(0) : c) {
                b.containerElement = e(a);
                if (/document/.test(c) || c == document) {
                    b.containerOffset = {
                        left: 0,
                        top: 0
                    };
                    b.containerPosition = {
                        left: 0,
                        top: 0
                    };
                    b.parentData = {
                        element: e(document),
                        left: 0,
                        top: 0,
                        width: e(document).width(),
                        height: e(document).height() || document.body.parentNode.scrollHeight
                    }
                } else {
                    var d = e(a)
                      , f = [];
                    e(["Top", "Right", "Left", "Bottom"]).each(function(i, j) {
                        f[i] = m(d.css("padding" + j))
                    });
                    b.containerOffset = d.offset();
                    b.containerPosition = d.position();
                    b.containerSize = {
                        height: d.innerHeight() - f[3],
                        width: d.innerWidth() - f[1]
                    };
                    c = b.containerOffset;
                    var g = b.containerSize.height
                      , h = b.containerSize.width;
                    h = e.ui.hasScroll(a, "left") ? a.scrollWidth : h;
                    g = e.ui.hasScroll(a) ? a.scrollHeight : g;
                    b.parentData = {
                        element: a,
                        left: c.left,
                        top: c.top,
                        width: h,
                        height: g
                    }
                }
            }
        },
        resize: function(b) {
            var a = e(this).data("resizable")
              , c = a.options
              , d = a.containerOffset
              , f = a.position;
            b = a._aspectRatio || b.shiftKey;
            var g = {
                top: 0,
                left: 0
            }
              , h = a.containerElement;
            if (h[0] != document && /static/.test(h.css("position")))
                g = d;
            if (f.left < (a._helper ? d.left : 0)) {
                a.size.width += a._helper ? a.position.left - d.left : a.position.left - g.left;
                if (b)
                    a.size.height = a.size.width / c.aspectRatio;
                a.position.left = c.helper ? d.left : 0
            }
            if (f.top < (a._helper ? d.top : 0)) {
                a.size.height += a._helper ? a.position.top - d.top : a.position.top;
                if (b)
                    a.size.width = a.size.height * c.aspectRatio;
                a.position.top = a._helper ? d.top : 0
            }
            a.offset.left = a.parentData.left + a.position.left;
            a.offset.top = a.parentData.top + a.position.top;
            c = Math.abs((a._helper ? a.offset.left - g.left : a.offset.left - g.left) + a.sizeDiff.width);
            d = Math.abs((a._helper ? a.offset.top - g.top : a.offset.top - d.top) + a.sizeDiff.height);
            f = a.containerElement.get(0) == a.element.parent().get(0);
            g = /relative|absolute/.test(a.containerElement.css("position"));
            if (f && g)
                c -= a.parentData.left;
            if (c + a.size.width >= a.parentData.width) {
                a.size.width = a.parentData.width - c;
                if (b)
                    a.size.height = a.size.width / a.aspectRatio
            }
            if (d + a.size.height >= a.parentData.height) {
                a.size.height = a.parentData.height - d;
                if (b)
                    a.size.width = a.size.height * a.aspectRatio
            }
        },
        stop: function() {
            var b = e(this).data("resizable")
              , a = b.options
              , c = b.containerOffset
              , d = b.containerPosition
              , f = b.containerElement
              , g = e(b.helper)
              , h = g.offset()
              , i = g.outerWidth() - b.sizeDiff.width;
            g = g.outerHeight() - b.sizeDiff.height;
            b._helper && !a.animate && /relative/.test(f.css("position")) && e(this).css({
                left: h.left - d.left - c.left,
                width: i,
                height: g
            });
            b._helper && !a.animate && /static/.test(f.css("position")) && e(this).css({
                left: h.left - d.left - c.left,
                width: i,
                height: g
            })
        }
    });
    e.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var b = e(this).data("resizable")
              , a = b.options
              , c = b.size;
            b.ghost = b.originalElement.clone();
            b.ghost.css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: c.height,
                width: c.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof a.ghost == "string" ? a.ghost : "");
            b.ghost.appendTo(b.helper)
        },
        resize: function() {
            var b = e(this).data("resizable");
            b.ghost && b.ghost.css({
                position: "relative",
                height: b.size.height,
                width: b.size.width
            })
        },
        stop: function() {
            var b = e(this).data("resizable");
            b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0))
        }
    });
    e.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var b = e(this).data("resizable")
              , a = b.options
              , c = b.size
              , d = b.originalSize
              , f = b.originalPosition
              , g = b.axis;
            a.grid = typeof a.grid == "number" ? [a.grid, a.grid] : a.grid;
            var h = Math.round((c.width - d.width) / (a.grid[0] || 1)) * (a.grid[0] || 1);
            a = Math.round((c.height - d.height) / (a.grid[1] || 1)) * (a.grid[1] || 1);
            if (/^(se|s|e)$/.test(g)) {
                b.size.width = d.width + h;
                b.size.height = d.height + a
            } else if (/^(ne)$/.test(g)) {
                b.size.width = d.width + h;
                b.size.height = d.height + a;
                b.position.top = f.top - a
            } else {
                if (/^(sw)$/.test(g)) {
                    b.size.width = d.width + h;
                    b.size.height = d.height + a
                } else {
                    b.size.width = d.width + h;
                    b.size.height = d.height + a;
                    b.position.top = f.top - a
                }
                b.position.left = f.left - h
            }
        }
    });
    var m = function(b) {
        return parseInt(b, 10) || 0
    }
      , k = function(b) {
        return !isNaN(parseInt(b, 10))
    }
}
)(jQuery);
;/*
 * jQuery UI Selectable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(e) {
    e.widget("ui.selectable", e.ui.mouse, {
        options: {
            appendTo: "body",
            autoRefresh: true,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function() {
            var c = this;
            this.element.addClass("ui-selectable");
            this.dragged = false;
            var f;
            this.refresh = function() {
                f = e(c.options.filter, c.element[0]);
                f.each(function() {
                    var d = e(this)
                      , b = d.offset();
                    e.data(this, "selectable-item", {
                        element: this,
                        $element: d,
                        left: b.left,
                        top: b.top,
                        right: b.left + d.outerWidth(),
                        bottom: b.top + d.outerHeight(),
                        startselected: false,
                        selected: d.hasClass("ui-selected"),
                        selecting: d.hasClass("ui-selecting"),
                        unselecting: d.hasClass("ui-unselecting")
                    })
                })
            }
            ;
            this.refresh();
            this.selectees = f.addClass("ui-selectee");
            this._mouseInit();
            this.helper = e("<div class='ui-selectable-helper'></div>")
        },
        destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item");
            this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");
            this._mouseDestroy();
            return this
        },
        _mouseStart: function(c) {
            var f = this;
            this.opos = [c.pageX, c.pageY];
            if (!this.options.disabled) {
                var d = this.options;
                this.selectees = e(d.filter, this.element[0]);
                this._trigger("start", c);
                e(d.appendTo).append(this.helper);
                this.helper.css({
                    left: c.clientX,
                    top: c.clientY,
                    width: 0,
                    height: 0
                });
                d.autoRefresh && this.refresh();
                this.selectees.filter(".ui-selected").each(function() {
                    var b = e.data(this, "selectable-item");
                    b.startselected = true;
                    if (!c.metaKey) {
                        b.$element.removeClass("ui-selected");
                        b.selected = false;
                        b.$element.addClass("ui-unselecting");
                        b.unselecting = true;
                        f._trigger("unselecting", c, {
                            unselecting: b.element
                        })
                    }
                });
                e(c.target).parents().andSelf().each(function() {
                    var b = e.data(this, "selectable-item");
                    if (b) {
                        var g = !c.metaKey || !b.$element.hasClass("ui-selected");
                        b.$element.removeClass(g ? "ui-unselecting" : "ui-selected").addClass(g ? "ui-selecting" : "ui-unselecting");
                        b.unselecting = !g;
                        b.selecting = g;
                        (b.selected = g) ? f._trigger("selecting", c, {
                            selecting: b.element
                        }) : f._trigger("unselecting", c, {
                            unselecting: b.element
                        });
                        return false
                    }
                })
            }
        },
        _mouseDrag: function(c) {
            var f = this;
            this.dragged = true;
            if (!this.options.disabled) {
                var d = this.options
                  , b = this.opos[0]
                  , g = this.opos[1]
                  , h = c.pageX
                  , i = c.pageY;
                if (b > h) {
                    var j = h;
                    h = b;
                    b = j
                }
                if (g > i) {
                    j = i;
                    i = g;
                    g = j
                }
                this.helper.css({
                    left: b,
                    top: g,
                    width: h - b,
                    height: i - g
                });
                this.selectees.each(function() {
                    var a = e.data(this, "selectable-item");
                    if (!(!a || a.element == f.element[0])) {
                        var k = false;
                        if (d.tolerance == "touch")
                            k = !(a.left > h || a.right < b || a.top > i || a.bottom < g);
                        else if (d.tolerance == "fit")
                            k = a.left > b && a.right < h && a.top > g && a.bottom < i;
                        if (k) {
                            if (a.selected) {
                                a.$element.removeClass("ui-selected");
                                a.selected = false
                            }
                            if (a.unselecting) {
                                a.$element.removeClass("ui-unselecting");
                                a.unselecting = false
                            }
                            if (!a.selecting) {
                                a.$element.addClass("ui-selecting");
                                a.selecting = true;
                                f._trigger("selecting", c, {
                                    selecting: a.element
                                })
                            }
                        } else {
                            if (a.selecting)
                                if (c.metaKey && a.startselected) {
                                    a.$element.removeClass("ui-selecting");
                                    a.selecting = false;
                                    a.$element.addClass("ui-selected");
                                    a.selected = true
                                } else {
                                    a.$element.removeClass("ui-selecting");
                                    a.selecting = false;
                                    if (a.startselected) {
                                        a.$element.addClass("ui-unselecting");
                                        a.unselecting = true
                                    }
                                    f._trigger("unselecting", c, {
                                        unselecting: a.element
                                    })
                                }
                            if (a.selected)
                                if (!c.metaKey && !a.startselected) {
                                    a.$element.removeClass("ui-selected");
                                    a.selected = false;
                                    a.$element.addClass("ui-unselecting");
                                    a.unselecting = true;
                                    f._trigger("unselecting", c, {
                                        unselecting: a.element
                                    })
                                }
                        }
                    }
                });
                return false
            }
        },
        _mouseStop: function(c) {
            var f = this;
            this.dragged = false;
            e(".ui-unselecting", this.element[0]).each(function() {
                var d = e.data(this, "selectable-item");
                d.$element.removeClass("ui-unselecting");
                d.unselecting = false;
                d.startselected = false;
                f._trigger("unselected", c, {
                    unselected: d.element
                })
            });
            e(".ui-selecting", this.element[0]).each(function() {
                var d = e.data(this, "selectable-item");
                d.$element.removeClass("ui-selecting").addClass("ui-selected");
                d.selecting = false;
                d.selected = true;
                d.startselected = true;
                f._trigger("selected", c, {
                    selected: d.element
                })
            });
            this._trigger("stop", c);
            this.helper.remove();
            return false
        }
    });
    e.extend(e.ui.selectable, {
        version: "1.8.16"
    })
}
)(jQuery);
;/*
 * jQuery UI Sortable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d) {
    d.widget("ui.sortable", d.ui.mouse, {
        widgetEventPrefix: "sort",
        options: {
            appendTo: "parent",
            axis: false,
            connectWith: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            dropOnEmpty: true,
            forcePlaceholderSize: false,
            forceHelperSize: false,
            grid: false,
            handle: false,
            helper: "original",
            items: "> *",
            opacity: false,
            placeholder: false,
            revert: false,
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1E3
        },
        _create: function() {
            var a = this.options;
            this.containerCache = {};
            this.element.addClass("ui-sortable");
            this.refresh();
            this.floating = this.items.length ? a.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : false;
            this.offset = this.element.offset();
            this._mouseInit()
        },
        destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");
            this._mouseDestroy();
            for (var a = this.items.length - 1; a >= 0; a--)
                this.items[a].item.removeData("sortable-item");
            return this
        },
        _setOption: function(a, b) {
            if (a === "disabled") {
                this.options[a] = b;
                this.widget()[b ? "addClass" : "removeClass"]("ui-sortable-disabled")
            } else
                d.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(a, b) {
            if (this.reverting)
                return false;
            if (this.options.disabled || this.options.type == "static")
                return false;
            this._refreshItems(a);
            var c = null
              , e = this;
            d(a.target).parents().each(function() {
                if (d.data(this, "sortable-item") == e) {
                    c = d(this);
                    return false
                }
            });
            if (d.data(a.target, "sortable-item") == e)
                c = d(a.target);
            if (!c)
                return false;
            if (this.options.handle && !b) {
                var f = false;
                d(this.options.handle, c).find("*").andSelf().each(function() {
                    if (this == a.target)
                        f = true
                });
                if (!f)
                    return false
            }
            this.currentItem = c;
            this._removeCurrentsFromItems();
            return true
        },
        _mouseStart: function(a, b, c) {
            b = this.options;
            var e = this;
            this.currentContainer = this;
            this.refreshPositions();
            this.helper = this._createHelper(a);
            this._cacheHelperProportions();
            this._cacheMargins();
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");
            d.extend(this.offset, {
                click: {
                    left: a.pageX - this.offset.left,
                    top: a.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.originalPosition = this._generatePosition(a);
            this.originalPageX = a.pageX;
            this.originalPageY = a.pageY;
            b.cursorAt && this._adjustOffsetFromHelper(b.cursorAt);
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            };
            this.helper[0] != this.currentItem[0] && this.currentItem.hide();
            this._createPlaceholder();
            b.containment && this._setContainment();
            if (b.cursor) {
                if (d("body").css("cursor"))
                    this._storedCursor = d("body").css("cursor");
                d("body").css("cursor", b.cursor)
            }
            if (b.opacity) {
                if (this.helper.css("opacity"))
                    this._storedOpacity = this.helper.css("opacity");
                this.helper.css("opacity", b.opacity)
            }
            if (b.zIndex) {
                if (this.helper.css("zIndex"))
                    this._storedZIndex = this.helper.css("zIndex");
                this.helper.css("zIndex", b.zIndex)
            }
            if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML")
                this.overflowOffset = this.scrollParent.offset();
            this._trigger("start", a, this._uiHash());
            this._preserveHelperProportions || this._cacheHelperProportions();
            if (!c)
                for (c = this.containers.length - 1; c >= 0; c--)
                    this.containers[c]._trigger("activate", a, e._uiHash(this));
            if (d.ui.ddmanager)
                d.ui.ddmanager.current = this;
            d.ui.ddmanager && !b.dropBehaviour && d.ui.ddmanager.prepareOffsets(this, a);
            this.dragging = true;
            this.helper.addClass("ui-sortable-helper");
            this._mouseDrag(a);
            return true
        },
        _mouseDrag: function(a) {
            this.position = this._generatePosition(a);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.lastPositionAbs)
                this.lastPositionAbs = this.positionAbs;
            if (this.options.scroll) {
                var b = this.options
                  , c = false;
                if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") {
                    if (this.overflowOffset.top + this.scrollParent[0].offsetHeight - a.pageY < b.scrollSensitivity)
                        this.scrollParent[0].scrollTop = c = this.scrollParent[0].scrollTop + b.scrollSpeed;
                    else if (a.pageY - this.overflowOffset.top < b.scrollSensitivity)
                        this.scrollParent[0].scrollTop = c = this.scrollParent[0].scrollTop - b.scrollSpeed;
                    if (this.overflowOffset.left + this.scrollParent[0].offsetWidth - a.pageX < b.scrollSensitivity)
                        this.scrollParent[0].scrollLeft = c = this.scrollParent[0].scrollLeft + b.scrollSpeed;
                    else if (a.pageX - this.overflowOffset.left < b.scrollSensitivity)
                        this.scrollParent[0].scrollLeft = c = this.scrollParent[0].scrollLeft - b.scrollSpeed
                } else {
                    if (a.pageY - d(document).scrollTop() < b.scrollSensitivity)
                        c = d(document).scrollTop(d(document).scrollTop() - b.scrollSpeed);
                    else if (d(window).height() - (a.pageY - d(document).scrollTop()) < b.scrollSensitivity)
                        c = d(document).scrollTop(d(document).scrollTop() + b.scrollSpeed);
                    if (a.pageX - d(document).scrollLeft() < b.scrollSensitivity)
                        c = d(document).scrollLeft(d(document).scrollLeft() - b.scrollSpeed);
                    else if (d(window).width() - (a.pageX - d(document).scrollLeft()) < b.scrollSensitivity)
                        c = d(document).scrollLeft(d(document).scrollLeft() + b.scrollSpeed)
                }
                c !== false && d.ui.ddmanager && !b.dropBehaviour && d.ui.ddmanager.prepareOffsets(this, a)
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis != "y")
                this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x")
                this.helper[0].style.top = this.position.top + "px";
            for (b = this.items.length - 1; b >= 0; b--) {
                c = this.items[b];
                var e = c.item[0]
                  , f = this._intersectsWithPointer(c);
                if (f)
                    if (e != this.currentItem[0] && this.placeholder[f == 1 ? "next" : "prev"]()[0] != e && !d.ui.contains(this.placeholder[0], e) && (this.options.type == "semi-dynamic" ? !d.ui.contains(this.element[0], e) : true)) {
                        this.direction = f == 1 ? "down" : "up";
                        if (this.options.tolerance == "pointer" || this._intersectsWithSides(c))
                            this._rearrange(a, c);
                        else
                            break;
                        this._trigger("change", a, this._uiHash());
                        break
                    }
            }
            this._contactContainers(a);
            d.ui.ddmanager && d.ui.ddmanager.drag(this, a);
            this._trigger("sort", a, this._uiHash());
            this.lastPositionAbs = this.positionAbs;
            return false
        },
        _mouseStop: function(a, b) {
            if (a) {
                d.ui.ddmanager && !this.options.dropBehaviour && d.ui.ddmanager.drop(this, a);
                if (this.options.revert) {
                    var c = this;
                    b = c.placeholder.offset();
                    c.reverting = true;
                    d(this.helper).animate({
                        left: b.left - this.offset.parent.left - c.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: b.top - this.offset.parent.top - c.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function() {
                        c._clear(a)
                    })
                } else
                    this._clear(a, b);
                return false
            }
        },
        cancel: function() {
            var a = this;
            if (this.dragging) {
                this._mouseUp({
                    target: null
                });
                this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var b = this.containers.length - 1; b >= 0; b--) {
                    this.containers[b]._trigger("deactivate", null, a._uiHash(this));
                    if (this.containers[b].containerCache.over) {
                        this.containers[b]._trigger("out", null, a._uiHash(this));
                        this.containers[b].containerCache.over = 0
                    }
                }
            }
            if (this.placeholder) {
                this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
                this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove();
                d.extend(this, {
                    helper: null,
                    dragging: false,
                    reverting: false,
                    _noFinalSort: null
                });
                this.domPosition.prev ? d(this.domPosition.prev).after(this.currentItem) : d(this.domPosition.parent).prepend(this.currentItem)
            }
            return this
        },
        serialize: function(a) {
            var b = this._getItemsAsjQuery(a && a.connected)
              , c = [];
            a = a || {};
            d(b).each(function() {
                var e = (d(a.item || this).attr(a.attribute || "id") || "").match(a.expression || /(.+)[-=_](.+)/);
                if (e)
                    c.push((a.key || e[1] + "[]") + "=" + (a.key && a.expression ? e[1] : e[2]))
            });
            !c.length && a.key && c.push(a.key + "=");
            return c.join("&")
        },
        toArray: function(a) {
            var b = this._getItemsAsjQuery(a && a.connected)
              , c = [];
            a = a || {};
            b.each(function() {
                c.push(d(a.item || this).attr(a.attribute || "id") || "")
            });
            return c
        },
        _intersectsWith: function(a) {
            var b = this.positionAbs.left
              , c = b + this.helperProportions.width
              , e = this.positionAbs.top
              , f = e + this.helperProportions.height
              , g = a.left
              , h = g + a.width
              , i = a.top
              , k = i + a.height
              , j = this.offset.click.top
              , l = this.offset.click.left;
            j = e + j > i && e + j < k && b + l > g && b + l < h;
            return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? j : g < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < h && i < e + this.helperProportions.height / 2 && f - this.helperProportions.height / 2 < k
        },
        _intersectsWithPointer: function(a) {
            var b = d.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height);
            a = d.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, a.left, a.width);
            b = b && a;
            a = this._getDragVerticalDirection();
            var c = this._getDragHorizontalDirection();
            if (!b)
                return false;
            return this.floating ? c && c == "right" || a == "down" ? 2 : 1 : a && (a == "down" ? 2 : 1)
        },
        _intersectsWithSides: function(a) {
            var b = d.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height);
            a = d.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width);
            var c = this._getDragVerticalDirection()
              , e = this._getDragHorizontalDirection();
            return this.floating && e ? e == "right" && a || e == "left" && !a : c && (c == "down" && b || c == "up" && !b)
        },
        _getDragVerticalDirection: function() {
            var a = this.positionAbs.top - this.lastPositionAbs.top;
            return a != 0 && (a > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var a = this.positionAbs.left - this.lastPositionAbs.left;
            return a != 0 && (a > 0 ? "right" : "left")
        },
        refresh: function(a) {
            this._refreshItems(a);
            this.refreshPositions();
            return this
        },
        _connectWith: function() {
            var a = this.options;
            return a.connectWith.constructor == String ? [a.connectWith] : a.connectWith
        },
        _getItemsAsjQuery: function(a) {
            var b = []
              , c = []
              , e = this._connectWith();
            if (e && a)
                for (a = e.length - 1; a >= 0; a--)
                    for (var f = d(e[a]), g = f.length - 1; g >= 0; g--) {
                        var h = d.data(f[g], "sortable");
                        if (h && h != this && !h.options.disabled)
                            c.push([d.isFunction(h.options.items) ? h.options.items.call(h.element) : d(h.options.items, h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), h])
                    }
            c.push([d.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : d(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (a = c.length - 1; a >= 0; a--)
                c[a][0].each(function() {
                    b.push(this)
                });
            return d(b)
        },
        _removeCurrentsFromItems: function() {
            for (var a = this.currentItem.find(":data(sortable-item)"), b = 0; b < this.items.length; b++)
                for (var c = 0; c < a.length; c++)
                    a[c] == this.items[b].item[0] && this.items.splice(b, 1)
        },
        _refreshItems: function(a) {
            this.items = [];
            this.containers = [this];
            var b = this.items
              , c = [[d.isFunction(this.options.items) ? this.options.items.call(this.element[0], a, {
                item: this.currentItem
            }) : d(this.options.items, this.element), this]]
              , e = this._connectWith();
            if (e)
                for (var f = e.length - 1; f >= 0; f--)
                    for (var g = d(e[f]), h = g.length - 1; h >= 0; h--) {
                        var i = d.data(g[h], "sortable");
                        if (i && i != this && !i.options.disabled) {
                            c.push([d.isFunction(i.options.items) ? i.options.items.call(i.element[0], a, {
                                item: this.currentItem
                            }) : d(i.options.items, i.element), i]);
                            this.containers.push(i)
                        }
                    }
            for (f = c.length - 1; f >= 0; f--) {
                a = c[f][1];
                e = c[f][0];
                h = 0;
                for (g = e.length; h < g; h++) {
                    i = d(e[h]);
                    i.data("sortable-item", a);
                    b.push({
                        item: i,
                        instance: a,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
            }
        },
        refreshPositions: function(a) {
            if (this.offsetParent && this.helper)
                this.offset.parent = this._getParentOffset();
            for (var b = this.items.length - 1; b >= 0; b--) {
                var c = this.items[b];
                if (!(c.instance != this.currentContainer && this.currentContainer && c.item[0] != this.currentItem[0])) {
                    var e = this.options.toleranceElement ? d(this.options.toleranceElement, c.item) : c.item;
                    if (!a) {
                        c.width = e.outerWidth();
                        c.height = e.outerHeight()
                    }
                    e = e.offset();
                    c.left = e.left;
                    c.top = e.top
                }
            }
            if (this.options.custom && this.options.custom.refreshContainers)
                this.options.custom.refreshContainers.call(this);
            else
                for (b = this.containers.length - 1; b >= 0; b--) {
                    e = this.containers[b].element.offset();
                    this.containers[b].containerCache.left = e.left;
                    this.containers[b].containerCache.top = e.top;
                    this.containers[b].containerCache.width = this.containers[b].element.outerWidth();
                    this.containers[b].containerCache.height = this.containers[b].element.outerHeight()
                }
            return this
        },
        _createPlaceholder: function(a) {
            var b = a || this
              , c = b.options;
            if (!c.placeholder || c.placeholder.constructor == String) {
                var e = c.placeholder;
                c.placeholder = {
                    element: function() {
                        var f = d(document.createElement(b.currentItem[0].nodeName)).addClass(e || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        if (!e)
                            f.style.visibility = "hidden";
                        return f
                    },
                    update: function(f, g) {
                        if (!(e && !c.forcePlaceholderSize)) {
                            g.height() || g.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10));
                            g.width() || g.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10))
                        }
                    }
                }
            }
            b.placeholder = d(c.placeholder.element.call(b.element, b.currentItem));
            b.currentItem.after(b.placeholder);
            c.placeholder.update(b, b.placeholder)
        },
        _contactContainers: function(a) {
            for (var b = null, c = null, e = this.containers.length - 1; e >= 0; e--)
                if (!d.ui.contains(this.currentItem[0], this.containers[e].element[0]))
                    if (this._intersectsWith(this.containers[e].containerCache)) {
                        if (!(b && d.ui.contains(this.containers[e].element[0], b.element[0]))) {
                            b = this.containers[e];
                            c = e
                        }
                    } else if (this.containers[e].containerCache.over) {
                        this.containers[e]._trigger("out", a, this._uiHash(this));
                        this.containers[e].containerCache.over = 0
                    }
            if (b)
                if (this.containers.length === 1) {
                    this.containers[c]._trigger("over", a, this._uiHash(this));
                    this.containers[c].containerCache.over = 1
                } else if (this.currentContainer != this.containers[c]) {
                    b = 1E4;
                    e = null;
                    for (var f = this.positionAbs[this.containers[c].floating ? "left" : "top"], g = this.items.length - 1; g >= 0; g--)
                        if (d.ui.contains(this.containers[c].element[0], this.items[g].item[0])) {
                            var h = this.items[g][this.containers[c].floating ? "left" : "top"];
                            if (Math.abs(h - f) < b) {
                                b = Math.abs(h - f);
                                e = this.items[g]
                            }
                        }
                    if (e || this.options.dropOnEmpty) {
                        this.currentContainer = this.containers[c];
                        e ? this._rearrange(a, e, null, true) : this._rearrange(a, null, this.containers[c].element, true);
                        this._trigger("change", a, this._uiHash());
                        this.containers[c]._trigger("change", a, this._uiHash(this));
                        this.options.placeholder.update(this.currentContainer, this.placeholder);
                        this.containers[c]._trigger("over", a, this._uiHash(this));
                        this.containers[c].containerCache.over = 1
                    }
                }
        },
        _createHelper: function(a) {
            var b = this.options;
            a = d.isFunction(b.helper) ? d(b.helper.apply(this.element[0], [a, this.currentItem])) : b.helper == "clone" ? this.currentItem.clone() : this.currentItem;
            a.parents("body").length || d(b.appendTo != "parent" ? b.appendTo : this.currentItem[0].parentNode)[0].appendChild(a[0]);
            if (a[0] == this.currentItem[0])
                this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                };
            if (a[0].style.width == "" || b.forceHelperSize)
                a.width(this.currentItem.width());
            if (a[0].style.height == "" || b.forceHelperSize)
                a.height(this.currentItem.height());
            return a
        },
        _adjustOffsetFromHelper: function(a) {
            if (typeof a == "string")
                a = a.split(" ");
            if (d.isArray(a))
                a = {
                    left: +a[0],
                    top: +a[1] || 0
                };
            if ("left"in a)
                this.offset.click.left = a.left + this.margins.left;
            if ("right"in a)
                this.offset.click.left = this.helperProportions.width - a.right + this.margins.left;
            if ("top"in a)
                this.offset.click.top = a.top + this.margins.top;
            if ("bottom"in a)
                this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var a = this.offsetParent.offset();
            if (this.cssPosition == "absolute" && this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) {
                a.left += this.scrollParent.scrollLeft();
                a.top += this.scrollParent.scrollTop()
            }
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && d.browser.msie)
                a = {
                    top: 0,
                    left: 0
                };
            return {
                top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var a = this.currentItem.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            } else
                return {
                    top: 0,
                    left: 0
                }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var a = this.options;
            if (a.containment == "parent")
                a.containment = this.helper[0].parentNode;
            if (a.containment == "document" || a.containment == "window")
                this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, d(a.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (d(a.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(a.containment)) {
                var b = d(a.containment)[0];
                a = d(a.containment).offset();
                var c = d(b).css("overflow") != "hidden";
                this.containment = [a.left + (parseInt(d(b).css("borderLeftWidth"), 10) || 0) + (parseInt(d(b).css("paddingLeft"), 10) || 0) - this.margins.left, a.top + (parseInt(d(b).css("borderTopWidth"), 10) || 0) + (parseInt(d(b).css("paddingTop"), 10) || 0) - this.margins.top, a.left + (c ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(d(b).css("borderLeftWidth"), 10) || 0) - (parseInt(d(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, a.top + (c ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(d(b).css("borderTopWidth"), 10) || 0) - (parseInt(d(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(a, b) {
            if (!b)
                b = this.position;
            a = a == "absolute" ? 1 : -1;
            var c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent
              , e = /(html|body)/i.test(c[0].tagName);
            return {
                top: b.top + this.offset.relative.top * a + this.offset.parent.top * a - (d.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0 : c.scrollTop()) * a),
                left: b.left + this.offset.relative.left * a + this.offset.parent.left * a - (d.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0 : c.scrollLeft()) * a)
            }
        },
        _generatePosition: function(a) {
            var b = this.options
              , c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent
              , e = /(html|body)/i.test(c[0].tagName);
            if (this.cssPosition == "relative" && !(this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0]))
                this.offset.relative = this._getRelativeOffset();
            var f = a.pageX
              , g = a.pageY;
            if (this.originalPosition) {
                if (this.containment) {
                    if (a.pageX - this.offset.click.left < this.containment[0])
                        f = this.containment[0] + this.offset.click.left;
                    if (a.pageY - this.offset.click.top < this.containment[1])
                        g = this.containment[1] + this.offset.click.top;
                    if (a.pageX - this.offset.click.left > this.containment[2])
                        f = this.containment[2] + this.offset.click.left;
                    if (a.pageY - this.offset.click.top > this.containment[3])
                        g = this.containment[3] + this.offset.click.top
                }
                if (b.grid) {
                    g = this.originalPageY + Math.round((g - this.originalPageY) / b.grid[1]) * b.grid[1];
                    g = this.containment ? !(g - this.offset.click.top < this.containment[1] || g - this.offset.click.top > this.containment[3]) ? g : !(g - this.offset.click.top < this.containment[1]) ? g - b.grid[1] : g + b.grid[1] : g;
                    f = this.originalPageX + Math.round((f - this.originalPageX) / b.grid[0]) * b.grid[0];
                    f = this.containment ? !(f - this.offset.click.left < this.containment[0] || f - this.offset.click.left > this.containment[2]) ? f : !(f - this.offset.click.left < this.containment[0]) ? f - b.grid[0] : f + b.grid[0] : f
                }
            }
            return {
                top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (d.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0 : c.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (d.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0 : c.scrollLeft())
            }
        },
        _rearrange: function(a, b, c, e) {
            c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? b.item[0] : b.item[0].nextSibling);
            this.counter = this.counter ? ++this.counter : 1;
            var f = this
              , g = this.counter;
            window.setTimeout(function() {
                g == f.counter && f.refreshPositions(!e)
            }, 0)
        },
        _clear: function(a, b) {
            this.reverting = false;
            var c = [];
            !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem);
            this._noFinalSort = null;
            if (this.helper[0] == this.currentItem[0]) {
                for (var e in this._storedCSS)
                    if (this._storedCSS[e] == "auto" || this._storedCSS[e] == "static")
                        this._storedCSS[e] = "";
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else
                this.currentItem.show();
            this.fromOutside && !b && c.push(function(f) {
                this._trigger("receive", f, this._uiHash(this.fromOutside))
            });
            if ((this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !b)
                c.push(function(f) {
                    this._trigger("update", f, this._uiHash())
                });
            if (!d.ui.contains(this.element[0], this.currentItem[0])) {
                b || c.push(function(f) {
                    this._trigger("remove", f, this._uiHash())
                });
                for (e = this.containers.length - 1; e >= 0; e--)
                    if (d.ui.contains(this.containers[e].element[0], this.currentItem[0]) && !b) {
                        c.push(function(f) {
                            return function(g) {
                                f._trigger("receive", g, this._uiHash(this))
                            }
                        }
                        .call(this, this.containers[e]));
                        c.push(function(f) {
                            return function(g) {
                                f._trigger("update", g, this._uiHash(this))
                            }
                        }
                        .call(this, this.containers[e]))
                    }
            }
            for (e = this.containers.length - 1; e >= 0; e--) {
                b || c.push(function(f) {
                    return function(g) {
                        f._trigger("deactivate", g, this._uiHash(this))
                    }
                }
                .call(this, this.containers[e]));
                if (this.containers[e].containerCache.over) {
                    c.push(function(f) {
                        return function(g) {
                            f._trigger("out", g, this._uiHash(this))
                        }
                    }
                    .call(this, this.containers[e]));
                    this.containers[e].containerCache.over = 0
                }
            }
            this._storedCursor && d("body").css("cursor", this._storedCursor);
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity);
            if (this._storedZIndex)
                this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex);
            this.dragging = false;
            if (this.cancelHelperRemoval) {
                if (!b) {
                    this._trigger("beforeStop", a, this._uiHash());
                    for (e = 0; e < c.length; e++)
                        c[e].call(this, a);
                    this._trigger("stop", a, this._uiHash())
                }
                return false
            }
            b || this._trigger("beforeStop", a, this._uiHash());
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            this.helper[0] != this.currentItem[0] && this.helper.remove();
            this.helper = null;
            if (!b) {
                for (e = 0; e < c.length; e++)
                    c[e].call(this, a);
                this._trigger("stop", a, this._uiHash())
            }
            this.fromOutside = false;
            return true
        },
        _trigger: function() {
            d.Widget.prototype._trigger.apply(this, arguments) === false && this.cancel()
        },
        _uiHash: function(a) {
            var b = a || this;
            return {
                helper: b.helper,
                placeholder: b.placeholder || d([]),
                position: b.position,
                originalPosition: b.originalPosition,
                offset: b.positionAbs,
                item: b.currentItem,
                sender: a ? a.element : null
            }
        }
    });
    d.extend(d.ui.sortable, {
        version: "1.8.16"
    })
}
)(jQuery);
;/*
 * jQuery UI Accordion 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(c) {
    c.widget("ui.accordion", {
        options: {
            active: 0,
            animated: "slide",
            autoHeight: true,
            clearStyle: false,
            collapsible: false,
            event: "click",
            fillSpace: false,
            header: "> li > :first-child,> :not(li):even",
            navigation: false,
            navigationFilter: function() {
                return this.href.toLowerCase() === location.href.toLowerCase()
            }
        },
        _create: function() {
            var a = this
              , b = a.options;
            a.running = 0;
            a.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
            a.headers = a.element.find(b.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function() {
                b.disabled || c(this).addClass("ui-state-hover")
            }).bind("mouseleave.accordion", function() {
                b.disabled || c(this).removeClass("ui-state-hover")
            }).bind("focus.accordion", function() {
                b.disabled || c(this).addClass("ui-state-focus")
            }).bind("blur.accordion", function() {
                b.disabled || c(this).removeClass("ui-state-focus")
            });
            a.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
            if (b.navigation) {
                var d = a.element.find("a").filter(b.navigationFilter).eq(0);
                if (d.length) {
                    var h = d.closest(".ui-accordion-header");
                    a.active = h.length ? h : d.closest(".ui-accordion-content").prev()
                }
            }
            a.active = a._findActive(a.active || b.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");
            a.active.next().addClass("ui-accordion-content-active");
            a._createIcons();
            a.resize();
            a.element.attr("role", "tablist");
            a.headers.attr("role", "tab").bind("keydown.accordion", function(f) {
                return a._keydown(f)
            }).next().attr("role", "tabpanel");
            a.headers.not(a.active || "").attr({
                "aria-expanded": "false",
                "aria-selected": "false",
                tabIndex: -1
            }).next().hide();
            a.active.length ? a.active.attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0
            }) : a.headers.eq(0).attr("tabIndex", 0);
            c.browser.safari || a.headers.find("a").attr("tabIndex", -1);
            b.event && a.headers.bind(b.event.split(" ").join(".accordion ") + ".accordion", function(f) {
                a._clickHandler.call(a, f, this);
                f.preventDefault()
            })
        },
        _createIcons: function() {
            var a = this.options;
            if (a.icons) {
                c("<span></span>").addClass("ui-icon " + a.icons.header).prependTo(this.headers);
                this.active.children(".ui-icon").toggleClass(a.icons.header).toggleClass(a.icons.headerSelected);
                this.element.addClass("ui-accordion-icons")
            }
        },
        _destroyIcons: function() {
            this.headers.children(".ui-icon").remove();
            this.element.removeClass("ui-accordion-icons")
        },
        destroy: function() {
            var a = this.options;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
            this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
            this.headers.find("a").removeAttr("tabIndex");
            this._destroyIcons();
            var b = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
            if (a.autoHeight || a.fillHeight)
                b.css("height", "");
            return c.Widget.prototype.destroy.call(this)
        },
        _setOption: function(a, b) {
            c.Widget.prototype._setOption.apply(this, arguments);
            a == "active" && this.activate(b);
            if (a == "icons") {
                this._destroyIcons();
                b && this._createIcons()
            }
            if (a == "disabled")
                this.headers.add(this.headers.next())[b ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
        },
        _keydown: function(a) {
            if (!(this.options.disabled || a.altKey || a.ctrlKey)) {
                var b = c.ui.keyCode
                  , d = this.headers.length
                  , h = this.headers.index(a.target)
                  , f = false;
                switch (a.keyCode) {
                case b.RIGHT:
                case b.DOWN:
                    f = this.headers[(h + 1) % d];
                    break;
                case b.LEFT:
                case b.UP:
                    f = this.headers[(h - 1 + d) % d];
                    break;
                case b.SPACE:
                case b.ENTER:
                    this._clickHandler({
                        target: a.target
                    }, a.target);
                    a.preventDefault()
                }
                if (f) {
                    c(a.target).attr("tabIndex", -1);
                    c(f).attr("tabIndex", 0);
                    f.focus();
                    return false
                }
                return true
            }
        },
        resize: function() {
            var a = this.options, b;
            if (a.fillSpace) {
                if (c.browser.msie) {
                    var d = this.element.parent().css("overflow");
                    this.element.parent().css("overflow", "hidden")
                }
                b = this.element.parent().height();
                c.browser.msie && this.element.parent().css("overflow", d);
                this.headers.each(function() {
                    b -= c(this).outerHeight(true)
                });
                this.headers.next().each(function() {
                    c(this).height(Math.max(0, b - c(this).innerHeight() + c(this).height()))
                }).css("overflow", "auto")
            } else if (a.autoHeight) {
                b = 0;
                this.headers.next().each(function() {
                    b = Math.max(b, c(this).height("").height())
                }).height(b)
            }
            return this
        },
        activate: function(a) {
            this.options.active = a;
            a = this._findActive(a)[0];
            this._clickHandler({
                target: a
            }, a);
            return this
        },
        _findActive: function(a) {
            return a ? typeof a === "number" ? this.headers.filter(":eq(" + a + ")") : this.headers.not(this.headers.not(a)) : a === false ? c([]) : this.headers.filter(":eq(0)")
        },
        _clickHandler: function(a, b) {
            var d = this.options;
            if (!d.disabled)
                if (a.target) {
                    a = c(a.currentTarget || b);
                    b = a[0] === this.active[0];
                    d.active = d.collapsible && b ? false : this.headers.index(a);
                    if (!(this.running || !d.collapsible && b)) {
                        var h = this.active;
                        j = a.next();
                        g = this.active.next();
                        e = {
                            options: d,
                            newHeader: b && d.collapsible ? c([]) : a,
                            oldHeader: this.active,
                            newContent: b && d.collapsible ? c([]) : j,
                            oldContent: g
                        };
                        var f = this.headers.index(this.active[0]) > this.headers.index(a[0]);
                        this.active = b ? c([]) : a;
                        this._toggle(j, g, e, b, f);
                        h.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);
                        if (!b) {
                            a.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);
                            a.next().addClass("ui-accordion-content-active")
                        }
                    }
                } else if (d.collapsible) {
                    this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);
                    this.active.next().addClass("ui-accordion-content-active");
                    var g = this.active.next()
                      , e = {
                        options: d,
                        newHeader: c([]),
                        oldHeader: d.active,
                        newContent: c([]),
                        oldContent: g
                    }
                      , j = this.active = c([]);
                    this._toggle(j, g, e)
                }
        },
        _toggle: function(a, b, d, h, f) {
            var g = this
              , e = g.options;
            g.toShow = a;
            g.toHide = b;
            g.data = d;
            var j = function() {
                if (g)
                    return g._completed.apply(g, arguments)
            };
            g._trigger("changestart", null, g.data);
            g.running = b.size() === 0 ? a.size() : b.size();
            if (e.animated) {
                d = {};
                d = e.collapsible && h ? {
                    toShow: c([]),
                    toHide: b,
                    complete: j,
                    down: f,
                    autoHeight: e.autoHeight || e.fillSpace
                } : {
                    toShow: a,
                    toHide: b,
                    complete: j,
                    down: f,
                    autoHeight: e.autoHeight || e.fillSpace
                };
                if (!e.proxied)
                    e.proxied = e.animated;
                if (!e.proxiedDuration)
                    e.proxiedDuration = e.duration;
                e.animated = c.isFunction(e.proxied) ? e.proxied(d) : e.proxied;
                e.duration = c.isFunction(e.proxiedDuration) ? e.proxiedDuration(d) : e.proxiedDuration;
                h = c.ui.accordion.animations;
                var i = e.duration
                  , k = e.animated;
                if (k && !h[k] && !c.easing[k])
                    k = "slide";
                h[k] || (h[k] = function(l) {
                    this.slide(l, {
                        easing: k,
                        duration: i || 700
                    })
                }
                );
                h[k](d)
            } else {
                if (e.collapsible && h)
                    a.toggle();
                else {
                    b.hide();
                    a.show()
                }
                j(true)
            }
            b.prev().attr({
                "aria-expanded": "false",
                "aria-selected": "false",
                tabIndex: -1
            }).blur();
            a.prev().attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0
            }).focus()
        },
        _completed: function(a) {
            this.running = a ? 0 : --this.running;
            if (!this.running) {
                this.options.clearStyle && this.toShow.add(this.toHide).css({
                    height: "",
                    overflow: ""
                });
                this.toHide.removeClass("ui-accordion-content-active");
                if (this.toHide.length)
                    this.toHide.parent()[0].className = this.toHide.parent()[0].className;
                this._trigger("change", null, this.data)
            }
        }
    });
    c.extend(c.ui.accordion, {
        version: "1.8.16",
        animations: {
            slide: function(a, b) {
                a = c.extend({
                    easing: "swing",
                    duration: 300
                }, a, b);
                if (a.toHide.size())
                    if (a.toShow.size()) {
                        var d = a.toShow.css("overflow"), h = 0, f = {}, g = {}, e;
                        b = a.toShow;
                        e = b[0].style.width;
                        b.width(parseInt(b.parent().width(), 10) - parseInt(b.css("paddingLeft"), 10) - parseInt(b.css("paddingRight"), 10) - (parseInt(b.css("borderLeftWidth"), 10) || 0) - (parseInt(b.css("borderRightWidth"), 10) || 0));
                        c.each(["height", "paddingTop", "paddingBottom"], function(j, i) {
                            g[i] = "hide";
                            j = ("" + c.css(a.toShow[0], i)).match(/^([\d+-.]+)(.*)$/);
                            f[i] = {
                                value: j[1],
                                unit: j[2] || "px"
                            }
                        });
                        a.toShow.css({
                            height: 0,
                            overflow: "hidden"
                        }).show();
                        a.toHide.filter(":hidden").each(a.complete).end().filter(":visible").animate(g, {
                            step: function(j, i) {
                                if (i.prop == "height")
                                    h = i.end - i.start === 0 ? 0 : (i.now - i.start) / (i.end - i.start);
                                a.toShow[0].style[i.prop] = h * f[i.prop].value + f[i.prop].unit
                            },
                            duration: a.duration,
                            easing: a.easing,
                            complete: function() {
                                a.autoHeight || a.toShow.css("height", "");
                                a.toShow.css({
                                    width: e,
                                    overflow: d
                                });
                                a.complete()
                            }
                        })
                    } else
                        a.toHide.animate({
                            height: "hide",
                            paddingTop: "hide",
                            paddingBottom: "hide"
                        }, a);
                else
                    a.toShow.animate({
                        height: "show",
                        paddingTop: "show",
                        paddingBottom: "show"
                    }, a)
            },
            bounceslide: function(a) {
                this.slide(a, {
                    easing: a.down ? "easeOutBounce" : "swing",
                    duration: a.down ? 1E3 : 200
                })
            }
        }
    })
}
)(jQuery);
;/*
 * jQuery UI Autocomplete 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
(function(d) {
    var e = 0;
    d.widget("ui.autocomplete", {
        options: {
            appendTo: "body",
            autoFocus: false,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null
        },
        pending: 0,
        _create: function() {
            var a = this, b = this.element[0].ownerDocument, g;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
                role: "textbox",
                "aria-autocomplete": "list",
                "aria-haspopup": "true"
            }).bind("keydown.autocomplete", function(c) {
                if (!(a.options.disabled || a.element.propAttr("readOnly"))) {
                    g = false;
                    var f = d.ui.keyCode;
                    switch (c.keyCode) {
                    case f.PAGE_UP:
                        a._move("previousPage", c);
                        break;
                    case f.PAGE_DOWN:
                        a._move("nextPage", c);
                        break;
                    case f.UP:
                        a._move("previous", c);
                        c.preventDefault();
                        break;
                    case f.DOWN:
                        a._move("next", c);
                        c.preventDefault();
                        break;
                    case f.ENTER:
                    case f.NUMPAD_ENTER:
                        if (a.menu.active) {
                            g = true;
                            c.preventDefault()
                        }
                    case f.TAB:
                        if (!a.menu.active)
                            return;
                        a.menu.select(c);
                        break;
                    case f.ESCAPE:
                        a.element.val(a.term);
                        a.close(c);
                        break;
                    default:
                        clearTimeout(a.searching);
                        a.searching = setTimeout(function() {
                            if (a.term != a.element.val()) {
                                a.selectedItem = null;
                                a.search(null, c)
                            }
                        }, a.options.delay);
                        break
                    }
                }
            }).bind("keypress.autocomplete", function(c) {
                if (g) {
                    g = false;
                    c.preventDefault()
                }
            }).bind("focus.autocomplete", function() {
                if (!a.options.disabled) {
                    a.selectedItem = null;
                    a.previous = a.element.val()
                }
            }).bind("blur.autocomplete", function(c) {
                if (!a.options.disabled) {
                    clearTimeout(a.searching);
                    a.closing = setTimeout(function() {
                        a.close(c);
                        a._change(c)
                    }, 150)
                }
            });
            this._initSource();
            this.response = function() {
                return a._response.apply(a, arguments)
            }
            ;
            this.menu = d("<ul></ul>").addClass("ui-autocomplete").appendTo(d(this.options.appendTo || "body", b)[0]).mousedown(function(c) {
                var f = a.menu.element[0];
                d(c.target).closest(".ui-menu-item").length || setTimeout(function() {
                    d(document).one("mousedown", function(h) {
                        h.target !== a.element[0] && h.target !== f && !d.ui.contains(f, h.target) && a.close()
                    })
                }, 1);
                setTimeout(function() {
                    clearTimeout(a.closing)
                }, 13)
            }).menu({
                focus: function(c, f) {
                    f = f.item.data("item.autocomplete");
                    false !== a._trigger("focus", c, {
                        item: f
                    }) && /^key/.test(c.originalEvent.type) && a.element.val(f.value)
                },
                selected: function(c, f) {
                    var h = f.item.data("item.autocomplete")
                      , i = a.previous;
                    if (a.element[0] !== b.activeElement) {
                        a.element.focus();
                        a.previous = i;
                        setTimeout(function() {
                            a.previous = i;
                            a.selectedItem = h
                        }, 1)
                    }
                    false !== a._trigger("select", c, {
                        item: h
                    }) && a.element.val(h.value);
                    a.term = a.element.val();
                    a.close(c);
                    a.selectedItem = h
                },
                blur: function() {
                    a.menu.element.is(":visible") && a.element.val() !== a.term && a.element.val(a.term)
                }
            }).zIndex(this.element.zIndex() + 1).css({
                top: 0,
                left: 0
            }).hide().data("menu");
            d.fn.bgiframe && this.menu.element.bgiframe()
        },
        destroy: function() {
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
            this.menu.element.remove();
            d.Widget.prototype.destroy.call(this)
        },
        _setOption: function(a, b) {
            d.Widget.prototype._setOption.apply(this, arguments);
            a === "source" && this._initSource();
            if (a === "appendTo")
                this.menu.element.appendTo(d(b || "body", this.element[0].ownerDocument)[0]);
            a === "disabled" && b && this.xhr && this.xhr.abort()
        },
        _initSource: function() {
            var a = this, b, g;
            if (d.isArray(this.options.source)) {
                b = this.options.source;
                this.source = function(c, f) {
                    f(d.ui.autocomplete.filter(b, c.term))
                }
            } else if (typeof this.options.source === "string") {
                g = this.options.source;
                this.source = function(c, f) {
                    a.xhr && a.xhr.abort();
                    a.xhr = d.ajax({
                        url: g,
                        data: c,
                        dataType: "json",
                        autocompleteRequest: ++e,
                        success: function(h) {
                            this.autocompleteRequest === e && f(h)
                        },
                        error: function() {
                            this.autocompleteRequest === e && f([])
                        }
                    })
                }
            } else
                this.source = this.options.source
        },
        search: function(a, b) {
            a = a != null ? a : this.element.val();
            this.term = this.element.val();
            if (a.length < this.options.minLength)
                return this.close(b);
            clearTimeout(this.closing);
            if (this._trigger("search", b) !== false)
                return this._search(a)
        },
        _search: function(a) {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.source({
                term: a
            }, this.response)
        },
        _response: function(a) {
            if (!this.options.disabled && a && a.length) {
                a = this._normalize(a);
                this._suggest(a);
                this._trigger("open")
            } else
                this.close();
            this.pending--;
            this.pending || this.element.removeClass("ui-autocomplete-loading")
        },
        close: function(a) {
            clearTimeout(this.closing);
            if (this.menu.element.is(":visible")) {
                this.menu.element.hide();
                this.menu.deactivate();
                this._trigger("close", a)
            }
        },
        _change: function(a) {
            this.previous !== this.element.val() && this._trigger("change", a, {
                item: this.selectedItem
            })
        },
        _normalize: function(a) {
            if (a.length && a[0].label && a[0].value)
                return a;
            return d.map(a, function(b) {
                if (typeof b === "string")
                    return {
                        label: b,
                        value: b
                    };
                return d.extend({
                    label: b.label || b.value,
                    value: b.value || b.label
                }, b)
            })
        },
        _suggest: function(a) {
            var b = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(b, a);
            this.menu.deactivate();
            this.menu.refresh();
            b.show();
            this._resizeMenu();
            b.position(d.extend({
                of: this.element
            }, this.options.position));
            this.options.autoFocus && this.menu.next(new d.Event("mouseover"))
        },
        _resizeMenu: function() {
            var a = this.menu.element;
            a.outerWidth(Math.max(a.width("").outerWidth(), this.element.outerWidth()))
        },
        _renderMenu: function(a, b) {
            var g = this;
            d.each(b, function(c, f) {
                g._renderItem(a, f)
            })
        },
        _renderItem: function(a, b) {
            return d("<li></li>").data("item.autocomplete", b).append(d("<a></a>").text(b.label)).appendTo(a)
        },
        _move: function(a, b) {
            if (this.menu.element.is(":visible"))
                if (this.menu.first() && /^previous/.test(a) || this.menu.last() && /^next/.test(a)) {
                    this.element.val(this.term);
                    this.menu.deactivate()
                } else
                    this.menu[a](b);
            else
                this.search(null, b)
        },
        widget: function() {
            return this.menu.element
        }
    });
    d.extend(d.ui.autocomplete, {
        escapeRegex: function(a) {
            return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        },
        filter: function(a, b) {
            var g = new RegExp(d.ui.autocomplete.escapeRegex(b),"i");
            return d.grep(a, function(c) {
                return g.test(c.label || c.value || c)
            })
        }
    })
}
)(jQuery);
(function(d) {
    d.widget("ui.menu", {
        _create: function() {
            var e = this;
            this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                role: "listbox",
                "aria-activedescendant": "ui-active-menuitem"
            }).click(function(a) {
                if (d(a.target).closest(".ui-menu-item a").length) {
                    a.preventDefault();
                    e.select(a)
                }
            });
            this.refresh()
        },
        refresh: function() {
            var e = this;
            this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem").children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function(a) {
                e.activate(a, d(this).parent())
            }).mouseleave(function() {
                e.deactivate()
            })
        },
        activate: function(e, a) {
            this.deactivate();
            if (this.hasScroll()) {
                var b = a.offset().top - this.element.offset().top
                  , g = this.element.scrollTop()
                  , c = this.element.height();
                if (b < 0)
                    this.element.scrollTop(g + b);
                else
                    b >= c && this.element.scrollTop(g + b - c + a.height())
            }
            this.active = a.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end();
            this._trigger("focus", e, {
                item: a
            })
        },
        deactivate: function() {
            if (this.active) {
                this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
                this._trigger("blur");
                this.active = null
            }
        },
        next: function(e) {
            this.move("next", ".ui-menu-item:first", e)
        },
        previous: function(e) {
            this.move("prev", ".ui-menu-item:last", e)
        },
        first: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        last: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        move: function(e, a, b) {
            if (this.active) {
                e = this.active[e + "All"](".ui-menu-item").eq(0);
                e.length ? this.activate(b, e) : this.activate(b, this.element.children(a))
            } else
                this.activate(b, this.element.children(a))
        },
        nextPage: function(e) {
            if (this.hasScroll())
                if (!this.active || this.last())
                    this.activate(e, this.element.children(".ui-menu-item:first"));
                else {
                    var a = this.active.offset().top
                      , b = this.element.height()
                      , g = this.element.children(".ui-menu-item").filter(function() {
                        var c = d(this).offset().top - a - b + d(this).height();
                        return c < 10 && c > -10
                    });
                    g.length || (g = this.element.children(".ui-menu-item:last"));
                    this.activate(e, g)
                }
            else
                this.activate(e, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
        },
        previousPage: function(e) {
            if (this.hasScroll())
                if (!this.active || this.first())
                    this.activate(e, this.element.children(".ui-menu-item:last"));
                else {
                    var a = this.active.offset().top
                      , b = this.element.height();
                    result = this.element.children(".ui-menu-item").filter(function() {
                        var g = d(this).offset().top - a + b - d(this).height();
                        return g < 10 && g > -10
                    });
                    result.length || (result = this.element.children(".ui-menu-item:first"));
                    this.activate(e, result)
                }
            else
                this.activate(e, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
        },
        hasScroll: function() {
            return this.element.height() < this.element[d.fn.prop ? "prop" : "attr"]("scrollHeight")
        },
        select: function(e) {
            this._trigger("selected", e, {
                item: this.active
            })
        }
    })
}
)(jQuery);
;/*
 * jQuery UI Button 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Button
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(b) {
    var h, i, j, g, l = function() {
        var a = b(this).find(":ui-button");
        setTimeout(function() {
            a.button("refresh")
        }, 1)
    }, k = function(a) {
        var c = a.name
          , e = a.form
          , f = b([]);
        if (c)
            f = e ? b(e).find("[name='" + c + "']") : b("[name='" + c + "']", a.ownerDocument).filter(function() {
                return !this.form
            });
        return f
    };
    b.widget("ui.button", {
        options: {
            disabled: null,
            text: true,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset.button").bind("reset.button", l);
            if (typeof this.options.disabled !== "boolean")
                this.options.disabled = this.element.propAttr("disabled");
            this._determineButtonType();
            this.hasTitle = !!this.buttonElement.attr("title");
            var a = this
              , c = this.options
              , e = this.type === "checkbox" || this.type === "radio"
              , f = "ui-state-hover" + (!e ? " ui-state-active" : "");
            if (c.label === null)
                c.label = this.buttonElement.html();
            if (this.element.is(":disabled"))
                c.disabled = true;
            this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role", "button").bind("mouseenter.button", function() {
                if (!c.disabled) {
                    b(this).addClass("ui-state-hover");
                    this === h && b(this).addClass("ui-state-active")
                }
            }).bind("mouseleave.button", function() {
                c.disabled || b(this).removeClass(f)
            }).bind("click.button", function(d) {
                if (c.disabled) {
                    d.preventDefault();
                    d.stopImmediatePropagation()
                }
            });
            this.element.bind("focus.button", function() {
                a.buttonElement.addClass("ui-state-focus")
            }).bind("blur.button", function() {
                a.buttonElement.removeClass("ui-state-focus")
            });
            if (e) {
                this.element.bind("change.button", function() {
                    g || a.refresh()
                });
                this.buttonElement.bind("mousedown.button", function(d) {
                    if (!c.disabled) {
                        g = false;
                        i = d.pageX;
                        j = d.pageY
                    }
                }).bind("mouseup.button", function(d) {
                    if (!c.disabled)
                        if (i !== d.pageX || j !== d.pageY)
                            g = true
                })
            }
            if (this.type === "checkbox")
                this.buttonElement.bind("click.button", function() {
                    if (c.disabled || g)
                        return false;
                    b(this).toggleClass("ui-state-active");
                    a.buttonElement.attr("aria-pressed", a.element[0].checked)
                });
            else if (this.type === "radio")
                this.buttonElement.bind("click.button", function() {
                    if (c.disabled || g)
                        return false;
                    b(this).addClass("ui-state-active");
                    a.buttonElement.attr("aria-pressed", "true");
                    var d = a.element[0];
                    k(d).not(d).map(function() {
                        return b(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                });
            else {
                this.buttonElement.bind("mousedown.button", function() {
                    if (c.disabled)
                        return false;
                    b(this).addClass("ui-state-active");
                    h = this;
                    b(document).one("mouseup", function() {
                        h = null
                    })
                }).bind("mouseup.button", function() {
                    if (c.disabled)
                        return false;
                    b(this).removeClass("ui-state-active")
                }).bind("keydown.button", function(d) {
                    if (c.disabled)
                        return false;
                    if (d.keyCode == b.ui.keyCode.SPACE || d.keyCode == b.ui.keyCode.ENTER)
                        b(this).addClass("ui-state-active")
                }).bind("keyup.button", function() {
                    b(this).removeClass("ui-state-active")
                });
                this.buttonElement.is("a") && this.buttonElement.keyup(function(d) {
                    d.keyCode === b.ui.keyCode.SPACE && b(this).click()
                })
            }
            this._setOption("disabled", c.disabled);
            this._resetButton()
        },
        _determineButtonType: function() {
            this.type = this.element.is(":checkbox") ? "checkbox" : this.element.is(":radio") ? "radio" : this.element.is("input") ? "input" : "button";
            if (this.type === "checkbox" || this.type === "radio") {
                var a = this.element.parents().filter(":last")
                  , c = "label[for='" + this.element.attr("id") + "']";
                this.buttonElement = a.find(c);
                if (!this.buttonElement.length) {
                    a = a.length ? a.siblings() : this.element.siblings();
                    this.buttonElement = a.filter(c);
                    if (!this.buttonElement.length)
                        this.buttonElement = a.find(c)
                }
                this.element.addClass("ui-helper-hidden-accessible");
                (a = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active");
                this.buttonElement.attr("aria-pressed", a)
            } else
                this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible");
            this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
            this.hasTitle || this.buttonElement.removeAttr("title");
            b.Widget.prototype.destroy.call(this)
        },
        _setOption: function(a, c) {
            b.Widget.prototype._setOption.apply(this, arguments);
            if (a === "disabled")
                c ? this.element.propAttr("disabled", true) : this.element.propAttr("disabled", false);
            else
                this._resetButton()
        },
        refresh: function() {
            var a = this.element.is(":disabled");
            a !== this.options.disabled && this._setOption("disabled", a);
            if (this.type === "radio")
                k(this.element[0]).each(function() {
                    b(this).is(":checked") ? b(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : b(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                });
            else if (this.type === "checkbox")
                this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false")
        },
        _resetButton: function() {
            if (this.type === "input")
                this.options.label && this.element.val(this.options.label);
            else {
                var a = this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only")
                  , c = b("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(a.empty()).text()
                  , e = this.options.icons
                  , f = e.primary && e.secondary
                  , d = [];
                if (e.primary || e.secondary) {
                    if (this.options.text)
                        d.push("ui-button-text-icon" + (f ? "s" : e.primary ? "-primary" : "-secondary"));
                    e.primary && a.prepend("<span class='ui-button-icon-primary ui-icon " + e.primary + "'></span>");
                    e.secondary && a.append("<span class='ui-button-icon-secondary ui-icon " + e.secondary + "'></span>");
                    if (!this.options.text) {
                        d.push(f ? "ui-button-icons-only" : "ui-button-icon-only");
                        this.hasTitle || a.attr("title", c)
                    }
                } else
                    d.push("ui-button-text-only");
                a.addClass(d.join(" "))
            }
        }
    });
    b.widget("ui.buttonset", {
        options: {
            items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(a, c) {
            a === "disabled" && this.buttons.button("option", a, c);
            b.Widget.prototype._setOption.apply(this, arguments)
        },
        refresh: function() {
            var a = this.element.css("direction") === "ltr";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return b(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a ? "ui-corner-left" : "ui-corner-right").end().filter(":last").addClass(a ? "ui-corner-right" : "ui-corner-left").end().end()
        },
        destroy: function() {
            this.element.removeClass("ui-buttonset");
            this.buttons.map(function() {
                return b(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
            b.Widget.prototype.destroy.call(this)
        }
    })
}
)(jQuery);
;/*
 * jQuery UI Dialog 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.button.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 */
(function(c, l) {
    var m = {
        buttons: true,
        height: true,
        maxHeight: true,
        maxWidth: true,
        minHeight: true,
        minWidth: true,
        width: true
    }
      , n = {
        maxHeight: true,
        maxWidth: true,
        minHeight: true,
        minWidth: true
    }
      , o = c.attrFn || {
        val: true,
        css: true,
        html: true,
        text: true,
        data: true,
        width: true,
        height: true,
        offset: true,
        click: true
    };
    c.widget("ui.dialog", {
        options: {
            autoOpen: true,
            buttons: {},
            closeOnEscape: true,
            closeText: "close",
            dialogClass: "",
            draggable: true,
            hide: null,
            height: "auto",
            maxHeight: false,
            maxWidth: false,
            minHeight: 150,
            minWidth: 150,
            modal: false,
            position: {
                my: "center",
                at: "center",
                collision: "fit",
                using: function(a) {
                    var b = c(this).css(a).offset().top;
                    b < 0 && c(this).css("top", a.top - b)
                }
            },
            resizable: true,
            show: null,
            stack: true,
            title: "",
            width: 300,
            zIndex: 1E3
        },
        _create: function() {
            this.originalTitle = this.element.attr("title");
            if (typeof this.originalTitle !== "string")
                this.originalTitle = "";
            this.options.title = this.options.title || this.originalTitle;
            var a = this
              , b = a.options
              , d = b.title || "&#160;"
              , e = c.ui.dialog.getTitleId(a.element)
              , g = (a.uiDialog = c("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + b.dialogClass).css({
                zIndex: b.zIndex
            }).attr("tabIndex", -1).css("outline", 0).keydown(function(i) {
                if (b.closeOnEscape && !i.isDefaultPrevented() && i.keyCode && i.keyCode === c.ui.keyCode.ESCAPE) {
                    a.close(i);
                    i.preventDefault()
                }
            }).attr({
                role: "dialog",
                "aria-labelledby": e
            }).mousedown(function(i) {
                a.moveToTop(false, i)
            });
            a.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g);
            var f = (a.uiDialogTitlebar = c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g)
              , h = c('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function() {
                h.addClass("ui-state-hover")
            }, function() {
                h.removeClass("ui-state-hover")
            }).focus(function() {
                h.addClass("ui-state-focus")
            }).blur(function() {
                h.removeClass("ui-state-focus")
            }).click(function(i) {
                a.close(i);
                return false
            }).appendTo(f);
            (a.uiDialogTitlebarCloseText = c("<span></span>")).addClass("ui-icon ui-icon-closethick").text(b.closeText).appendTo(h);
            c("<span></span>").addClass("ui-dialog-title").attr("id", e).html(d).prependTo(f);
            if (c.isFunction(b.beforeclose) && !c.isFunction(b.beforeClose))
                b.beforeClose = b.beforeclose;
            f.find("*").add(f).disableSelection();
            b.draggable && c.fn.draggable && a._makeDraggable();
            b.resizable && c.fn.resizable && a._makeResizable();
            a._createButtons(b.buttons);
            a._isOpen = false;
            c.fn.bgiframe && g.bgiframe()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        destroy: function() {
            var a = this;
            a.overlay && a.overlay.destroy();
            a.uiDialog.hide();
            a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
            a.uiDialog.remove();
            a.originalTitle && a.element.attr("title", a.originalTitle);
            return a
        },
        widget: function() {
            return this.uiDialog
        },
        close: function(a) {
            var b = this, d, e;
            if (false !== b._trigger("beforeClose", a)) {
                b.overlay && b.overlay.destroy();
                b.uiDialog.unbind("keypress.ui-dialog");
                b._isOpen = false;
                if (b.options.hide)
                    b.uiDialog.hide(b.options.hide, function() {
                        b._trigger("close", a)
                    });
                else {
                    b.uiDialog.hide();
                    b._trigger("close", a)
                }
                c.ui.dialog.overlay.resize();
                if (b.options.modal) {
                    d = 0;
                    c(".ui-dialog").each(function() {
                        if (this !== b.uiDialog[0]) {
                            e = c(this).css("z-index");
                            isNaN(e) || (d = Math.max(d, e))
                        }
                    });
                    c.ui.dialog.maxZ = d
                }
                return b
            }
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function(a, b) {
            var d = this
              , e = d.options;
            if (e.modal && !a || !e.stack && !e.modal)
                return d._trigger("focus", b);
            if (e.zIndex > c.ui.dialog.maxZ)
                c.ui.dialog.maxZ = e.zIndex;
            if (d.overlay) {
                c.ui.dialog.maxZ += 1;
                d.overlay.$el.css("z-index", c.ui.dialog.overlay.maxZ = c.ui.dialog.maxZ)
            }
            a = {
                scrollTop: d.element.scrollTop(),
                scrollLeft: d.element.scrollLeft()
            };
            c.ui.dialog.maxZ += 1;
            d.uiDialog.css("z-index", c.ui.dialog.maxZ);
            d.element.attr(a);
            d._trigger("focus", b);
            return d
        },
        open: function() {
            if (!this._isOpen) {
                var a = this
                  , b = a.options
                  , d = a.uiDialog;
                a.overlay = b.modal ? new c.ui.dialog.overlay(a) : null;
                a._size();
                a._position(b.position);
                d.show(b.show);
                a.moveToTop(true);
                b.modal && d.bind("keypress.ui-dialog", function(e) {
                    if (e.keyCode === c.ui.keyCode.TAB) {
                        var g = c(":tabbable", this)
                          , f = g.filter(":first");
                        g = g.filter(":last");
                        if (e.target === g[0] && !e.shiftKey) {
                            f.focus(1);
                            return false
                        } else if (e.target === f[0] && e.shiftKey) {
                            g.focus(1);
                            return false
                        }
                    }
                });
                c(a.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus();
                a._isOpen = true;
                a._trigger("open");
                return a
            }
        },
        _createButtons: function(a) {
            var b = this
              , d = false
              , e = c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix")
              , g = c("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);
            b.uiDialog.find(".ui-dialog-buttonpane").remove();
            typeof a === "object" && a !== null && c.each(a, function() {
                return !(d = true)
            });
            if (d) {
                c.each(a, function(f, h) {
                    h = c.isFunction(h) ? {
                        click: h,
                        text: f
                    } : h;
                    var i = c('<button type="button"></button>').click(function() {
                        h.click.apply(b.element[0], arguments)
                    }).appendTo(g);
                    c.each(h, function(j, k) {
                        if (j !== "click")
                            j in o ? i[j](k) : i.attr(j, k)
                    });
                    c.fn.button && i.button()
                });
                e.appendTo(b.uiDialog)
            }
        },
        _makeDraggable: function() {
            function a(f) {
                return {
                    position: f.position,
                    offset: f.offset
                }
            }
            var b = this, d = b.options, e = c(document), g;
            b.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(f, h) {
                    g = d.height === "auto" ? "auto" : c(this).height();
                    c(this).height(c(this).height()).addClass("ui-dialog-dragging");
                    b._trigger("dragStart", f, a(h))
                },
                drag: function(f, h) {
                    b._trigger("drag", f, a(h))
                },
                stop: function(f, h) {
                    d.position = [h.position.left - e.scrollLeft(), h.position.top - e.scrollTop()];
                    c(this).removeClass("ui-dialog-dragging").height(g);
                    b._trigger("dragStop", f, a(h));
                    c.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function(a) {
            function b(f) {
                return {
                    originalPosition: f.originalPosition,
                    originalSize: f.originalSize,
                    position: f.position,
                    size: f.size
                }
            }
            a = a === l ? this.options.resizable : a;
            var d = this
              , e = d.options
              , g = d.uiDialog.css("position");
            a = typeof a === "string" ? a : "n,e,s,w,se,sw,ne,nw";
            d.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: d.element,
                maxWidth: e.maxWidth,
                maxHeight: e.maxHeight,
                minWidth: e.minWidth,
                minHeight: d._minHeight(),
                handles: a,
                start: function(f, h) {
                    c(this).addClass("ui-dialog-resizing");
                    d._trigger("resizeStart", f, b(h))
                },
                resize: function(f, h) {
                    d._trigger("resize", f, b(h))
                },
                stop: function(f, h) {
                    c(this).removeClass("ui-dialog-resizing");
                    e.height = c(this).height();
                    e.width = c(this).width();
                    d._trigger("resizeStop", f, b(h));
                    c.ui.dialog.overlay.resize()
                }
            }).css("position", g).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function() {
            var a = this.options;
            return a.height === "auto" ? a.minHeight : Math.min(a.minHeight, a.height)
        },
        _position: function(a) {
            var b = [], d = [0, 0], e;
            if (a) {
                if (typeof a === "string" || typeof a === "object" && "0"in a) {
                    b = a.split ? a.split(" ") : [a[0], a[1]];
                    if (b.length === 1)
                        b[1] = b[0];
                    c.each(["left", "top"], function(g, f) {
                        if (+b[g] === b[g]) {
                            d[g] = b[g];
                            b[g] = f
                        }
                    });
                    a = {
                        my: b.join(" "),
                        at: b.join(" "),
                        offset: d.join(" ")
                    }
                }
                a = c.extend({}, c.ui.dialog.prototype.options.position, a)
            } else
                a = c.ui.dialog.prototype.options.position;
            (e = this.uiDialog.is(":visible")) || this.uiDialog.show();
            this.uiDialog.css({
                top: 0,
                left: 0
            }).position(c.extend({
                of: window
            }, a));
            e || this.uiDialog.hide()
        },
        _setOptions: function(a) {
            var b = this
              , d = {}
              , e = false;
            c.each(a, function(g, f) {
                b._setOption(g, f);
                if (g in m)
                    e = true;
                if (g in n)
                    d[g] = f
            });
            e && this._size();
            this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", d)
        },
        _setOption: function(a, b) {
            var d = this
              , e = d.uiDialog;
            switch (a) {
            case "beforeclose":
                a = "beforeClose";
                break;
            case "buttons":
                d._createButtons(b);
                break;
            case "closeText":
                d.uiDialogTitlebarCloseText.text("" + b);
                break;
            case "dialogClass":
                e.removeClass(d.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + b);
                break;
            case "disabled":
                b ? e.addClass("ui-dialog-disabled") : e.removeClass("ui-dialog-disabled");
                break;
            case "draggable":
                var g = e.is(":data(draggable)");
                g && !b && e.draggable("destroy");
                !g && b && d._makeDraggable();
                break;
            case "position":
                d._position(b);
                break;
            case "resizable":
                (g = e.is(":data(resizable)")) && !b && e.resizable("destroy");
                g && typeof b === "string" && e.resizable("option", "handles", b);
                !g && b !== false && d._makeResizable(b);
                break;
            case "title":
                c(".ui-dialog-title", d.uiDialogTitlebar).html("" + (b || "&#160;"));
                break
            }
            c.Widget.prototype._setOption.apply(d, arguments)
        },
        _size: function() {
            var a = this.options, b, d, e = this.uiDialog.is(":visible");
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                height: 0
            });
            if (a.minWidth > a.width)
                a.width = a.minWidth;
            b = this.uiDialog.css({
                height: "auto",
                width: a.width
            }).height();
            d = Math.max(0, a.minHeight - b);
            if (a.height === "auto")
                if (c.support.minHeight)
                    this.element.css({
                        minHeight: d,
                        height: "auto"
                    });
                else {
                    this.uiDialog.show();
                    a = this.element.css("height", "auto").height();
                    e || this.uiDialog.hide();
                    this.element.height(Math.max(a, d))
                }
            else
                this.element.height(Math.max(a.height - b, 0));
            this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }
    });
    c.extend(c.ui.dialog, {
        version: "1.8.16",
        uuid: 0,
        maxZ: 0,
        getTitleId: function(a) {
            a = a.attr("id");
            if (!a) {
                this.uuid += 1;
                a = this.uuid
            }
            return "ui-dialog-title-" + a
        },
        overlay: function(a) {
            this.$el = c.ui.dialog.overlay.create(a)
        }
    });
    c.extend(c.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(a) {
            return a + ".dialog-overlay"
        }).join(" "),
        create: function(a) {
            if (this.instances.length === 0) {
                setTimeout(function() {
                    c.ui.dialog.overlay.instances.length && c(document).bind(c.ui.dialog.overlay.events, function(d) {
                        if (c(d.target).zIndex() < c.ui.dialog.overlay.maxZ)
                            return false
                    })
                }, 1);
                c(document).bind("keydown.dialog-overlay", function(d) {
                    if (a.options.closeOnEscape && !d.isDefaultPrevented() && d.keyCode && d.keyCode === c.ui.keyCode.ESCAPE) {
                        a.close(d);
                        d.preventDefault()
                    }
                });
                c(window).bind("resize.dialog-overlay", c.ui.dialog.overlay.resize)
            }
            var b = (this.oldInstances.pop() || c("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
                width: this.width(),
                height: this.height()
            });
            c.fn.bgiframe && b.bgiframe();
            this.instances.push(b);
            return b
        },
        destroy: function(a) {
            var b = c.inArray(a, this.instances);
            b != -1 && this.oldInstances.push(this.instances.splice(b, 1)[0]);
            this.instances.length === 0 && c([document, window]).unbind(".dialog-overlay");
            a.remove();
            var d = 0;
            c.each(this.instances, function() {
                d = Math.max(d, this.css("z-index"))
            });
            this.maxZ = d
        },
        height: function() {
            var a, b;
            if (c.browser.msie && c.browser.version < 7) {
                a = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
                b = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight);
                return a < b ? c(window).height() + "px" : a + "px"
            } else
                return c(document).height() + "px"
        },
        width: function() {
            var a, b;
            if (c.browser.msie) {
                a = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
                b = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
                return a < b ? c(window).width() + "px" : a + "px"
            } else
                return c(document).width() + "px"
        },
        resize: function() {
            var a = c([]);
            c.each(c.ui.dialog.overlay.instances, function() {
                a = a.add(this)
            });
            a.css({
                width: 0,
                height: 0
            }).css({
                width: c.ui.dialog.overlay.width(),
                height: c.ui.dialog.overlay.height()
            })
        }
    });
    c.extend(c.ui.dialog.overlay.prototype, {
        destroy: function() {
            c.ui.dialog.overlay.destroy(this.$el)
        }
    })
}
)(jQuery);
;/*
 * jQuery UI Slider 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d) {
    d.widget("ui.slider", d.ui.mouse, {
        widgetEventPrefix: "slide",
        options: {
            animate: false,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: false,
            step: 1,
            value: 0,
            values: null
        },
        _create: function() {
            var a = this
              , b = this.options
              , c = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all")
              , f = b.values && b.values.length || 1
              , e = [];
            this._mouseSliding = this._keySliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (b.disabled ? " ui-slider-disabled ui-disabled" : ""));
            this.range = d([]);
            if (b.range) {
                if (b.range === true) {
                    if (!b.values)
                        b.values = [this._valueMin(), this._valueMin()];
                    if (b.values.length && b.values.length !== 2)
                        b.values = [b.values[0], b.values[0]]
                }
                this.range = d("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header3" + (b.range === "min" || b.range === "max" ? " ui-slider-range-" + b.range : ""))
            }
            for (var j = c.length; j < f; j += 1)
                e.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
            this.handles = c.add(d(e.join("")).appendTo(a.element));
            this.handle = this.handles.eq(0);
            this.handles.add(this.range).filter("a").click(function(g) {
                g.preventDefault()
            }).hover(function() {
                b.disabled || d(this).addClass("ui-state-hover")
            }, function() {
                d(this).removeClass("ui-state-hover")
            }).focus(function() {
                if (b.disabled)
                    d(this).blur();
                else {
                    d(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
                    d(this).addClass("ui-state-focus")
                }
            }).blur(function() {
                d(this).removeClass("ui-state-focus")
            });
            this.handles.each(function(g) {
                d(this).data("index.ui-slider-handle", g)
            });
            this.handles.keydown(function(g) {
                var k = true, l = d(this).data("index.ui-slider-handle"), i, h, m;
                if (!a.options.disabled) {
                    switch (g.keyCode) {
                    case d.ui.keyCode.HOME:
                    case d.ui.keyCode.END:
                    case d.ui.keyCode.PAGE_UP:
                    case d.ui.keyCode.PAGE_DOWN:
                    case d.ui.keyCode.UP:
                    case d.ui.keyCode.RIGHT:
                    case d.ui.keyCode.DOWN:
                    case d.ui.keyCode.LEFT:
                        k = false;
                        if (!a._keySliding) {
                            a._keySliding = true;
                            d(this).addClass("ui-state-active");
                            i = a._start(g, l);
                            if (i === false)
                                return
                        }
                        break
                    }
                    m = a.options.step;
                    i = a.options.values && a.options.values.length ? (h = a.values(l)) : (h = a.value());
                    switch (g.keyCode) {
                    case d.ui.keyCode.HOME:
                        h = a._valueMin();
                        break;
                    case d.ui.keyCode.END:
                        h = a._valueMax();
                        break;
                    case d.ui.keyCode.PAGE_UP:
                        h = a._trimAlignValue(i + (a._valueMax() - a._valueMin()) / 5);
                        break;
                    case d.ui.keyCode.PAGE_DOWN:
                        h = a._trimAlignValue(i - (a._valueMax() - a._valueMin()) / 5);
                        break;
                    case d.ui.keyCode.UP:
                    case d.ui.keyCode.RIGHT:
                        if (i === a._valueMax())
                            return;
                        h = a._trimAlignValue(i + m);
                        break;
                    case d.ui.keyCode.DOWN:
                    case d.ui.keyCode.LEFT:
                        if (i === a._valueMin())
                            return;
                        h = a._trimAlignValue(i - m);
                        break
                    }
                    a._slide(g, l, h);
                    return k
                }
            }).keyup(function(g) {
                var k = d(this).data("index.ui-slider-handle");
                if (a._keySliding) {
                    a._keySliding = false;
                    a._stop(g, k);
                    a._change(g, k);
                    d(this).removeClass("ui-state-active")
                }
            });
            this._refreshValue();
            this._animateOff = false
        },
        destroy: function() {
            this.handles.remove();
            this.range.remove();
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
            this._mouseDestroy();
            return this
        },
        _mouseCapture: function(a) {
            var b = this.options, c, f, e, j, g;
            if (b.disabled)
                return false;
            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();
            c = this._normValueFromMouse({
                x: a.pageX,
                y: a.pageY
            });
            f = this._valueMax() - this._valueMin() + 1;
            j = this;
            this.handles.each(function(k) {
                var l = Math.abs(c - j.values(k));
                if (f > l) {
                    f = l;
                    e = d(this);
                    g = k
                }
            });
            if (b.range === true && this.values(1) === b.min) {
                g += 1;
                e = d(this.handles[g])
            }
            if (this._start(a, g) === false)
                return false;
            this._mouseSliding = true;
            j._handleIndex = g;
            e.addClass("ui-state-active").focus();
            b = e.offset();
            this._clickOffset = !d(a.target).parents().andSelf().is(".ui-slider-handle") ? {
                left: 0,
                top: 0
            } : {
                left: a.pageX - b.left - e.width() / 2,
                top: a.pageY - b.top - e.height() / 2 - (parseInt(e.css("borderTopWidth"), 10) || 0) - (parseInt(e.css("borderBottomWidth"), 10) || 0) + (parseInt(e.css("marginTop"), 10) || 0)
            };
            this.handles.hasClass("ui-state-hover") || this._slide(a, g, c);
            return this._animateOff = true
        },
        _mouseStart: function() {
            return true
        },
        _mouseDrag: function(a) {
            var b = this._normValueFromMouse({
                x: a.pageX,
                y: a.pageY
            });
            this._slide(a, this._handleIndex, b);
            return false
        },
        _mouseStop: function(a) {
            this.handles.removeClass("ui-state-active");
            this._mouseSliding = false;
            this._stop(a, this._handleIndex);
            this._change(a, this._handleIndex);
            this._clickOffset = this._handleIndex = null;
            return this._animateOff = false
        },
        _detectOrientation: function() {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(a) {
            var b;
            if (this.orientation === "horizontal") {
                b = this.elementSize.width;
                a = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
            } else {
                b = this.elementSize.height;
                a = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)
            }
            b = a / b;
            if (b > 1)
                b = 1;
            if (b < 0)
                b = 0;
            if (this.orientation === "vertical")
                b = 1 - b;
            a = this._valueMax() - this._valueMin();
            return this._trimAlignValue(this._valueMin() + b * a)
        },
        _start: function(a, b) {
            var c = {
                handle: this.handles[b],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                c.value = this.values(b);
                c.values = this.values()
            }
            return this._trigger("start", a, c)
        },
        _slide: function(a, b, c) {
            var f;
            if (this.options.values && this.options.values.length) {
                f = this.values(b ? 0 : 1);
                if (this.options.values.length === 2 && this.options.range === true && (b === 0 && c > f || b === 1 && c < f))
                    c = f;
                if (c !== this.values(b)) {
                    f = this.values();
                    f[b] = c;
                    a = this._trigger("slide", a, {
                        handle: this.handles[b],
                        value: c,
                        values: f
                    });
                    this.values(b ? 0 : 1);
                    a !== false && this.values(b, c, true)
                }
            } else if (c !== this.value()) {
                a = this._trigger("slide", a, {
                    handle: this.handles[b],
                    value: c
                });
                a !== false && this.value(c)
            }
        },
        _stop: function(a, b) {
            var c = {
                handle: this.handles[b],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                c.value = this.values(b);
                c.values = this.values()
            }
            this._trigger("stop", a, c)
        },
        _change: function(a, b) {
            if (!this._keySliding && !this._mouseSliding) {
                var c = {
                    handle: this.handles[b],
                    value: this.value()
                };
                if (this.options.values && this.options.values.length) {
                    c.value = this.values(b);
                    c.values = this.values()
                }
                this._trigger("change", a, c)
            }
        },
        value: function(a) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(a);
                this._refreshValue();
                this._change(null, 0)
            } else
                return this._value()
        },
        values: function(a, b) {
            var c, f, e;
            if (arguments.length > 1) {
                this.options.values[a] = this._trimAlignValue(b);
                this._refreshValue();
                this._change(null, a)
            } else if (arguments.length)
                if (d.isArray(arguments[0])) {
                    c = this.options.values;
                    f = arguments[0];
                    for (e = 0; e < c.length; e += 1) {
                        c[e] = this._trimAlignValue(f[e]);
                        this._change(null, e)
                    }
                    this._refreshValue()
                } else
                    return this.options.values && this.options.values.length ? this._values(a) : this.value();
            else
                return this._values()
        },
        _setOption: function(a, b) {
            var c, f = 0;
            if (d.isArray(this.options.values))
                f = this.options.values.length;
            d.Widget.prototype._setOption.apply(this, arguments);
            switch (a) {
            case "disabled":
                if (b) {
                    this.handles.filter(".ui-state-focus").blur();
                    this.handles.removeClass("ui-state-hover");
                    this.handles.propAttr("disabled", true);
                    this.element.addClass("ui-disabled")
                } else {
                    this.handles.propAttr("disabled", false);
                    this.element.removeClass("ui-disabled")
                }
                break;
            case "orientation":
                this._detectOrientation();
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                this._refreshValue();
                break;
            case "value":
                this._animateOff = true;
                this._refreshValue();
                this._change(null, 0);
                this._animateOff = false;
                break;
            case "values":
                this._animateOff = true;
                this._refreshValue();
                for (c = 0; c < f; c += 1)
                    this._change(null, c);
                this._animateOff = false;
                break
            }
        },
        _value: function() {
            var a = this.options.value;
            return a = this._trimAlignValue(a)
        },
        _values: function(a) {
            var b, c;
            if (arguments.length) {
                b = this.options.values[a];
                return b = this._trimAlignValue(b)
            } else {
                b = this.options.values.slice();
                for (c = 0; c < b.length; c += 1)
                    b[c] = this._trimAlignValue(b[c]);
                return b
            }
        },
        _trimAlignValue: function(a) {
            if (a <= this._valueMin())
                return this._valueMin();
            if (a >= this._valueMax())
                return this._valueMax();
            var b = this.options.step > 0 ? this.options.step : 1
              , c = (a - this._valueMin()) % b;
            a = a - c;
            if (Math.abs(c) * 2 >= b)
                a += c > 0 ? b : -b;
            return parseFloat(a.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var a = this.options.range, b = this.options, c = this, f = !this._animateOff ? b.animate : false, e, j = {}, g, k, l, i;
            if (this.options.values && this.options.values.length)
                this.handles.each(function(h) {
                    e = (c.values(h) - c._valueMin()) / (c._valueMax() - c._valueMin()) * 100;
                    j[c.orientation === "horizontal" ? "left" : "bottom"] = e + "%";
                    d(this).stop(1, 1)[f ? "animate" : "css"](j, b.animate);
                    if (c.options.range === true)
                        if (c.orientation === "horizontal") {
                            if (h === 0)
                                c.range.stop(1, 1)[f ? "animate" : "css"]({
                                    left: e + "%"
                                }, b.animate);
                            if (h === 1)
                                c.range[f ? "animate" : "css"]({
                                    width: e - g + "%"
                                }, {
                                    queue: false,
                                    duration: b.animate
                                })
                        } else {
                            if (h === 0)
                                c.range.stop(1, 1)[f ? "animate" : "css"]({
                                    bottom: e + "%"
                                }, b.animate);
                            if (h === 1)
                                c.range[f ? "animate" : "css"]({
                                    height: e - g + "%"
                                }, {
                                    queue: false,
                                    duration: b.animate
                                })
                        }
                    g = e
                });
            else {
                k = this.value();
                l = this._valueMin();
                i = this._valueMax();
                e = i !== l ? (k - l) / (i - l) * 100 : 0;
                j[c.orientation === "horizontal" ? "left" : "bottom"] = e + "%";
                this.handle.stop(1, 1)[f ? "animate" : "css"](j, b.animate);
                if (a === "min" && this.orientation === "horizontal")
                    this.range.stop(1, 1)[f ? "animate" : "css"]({
                        width: e + "%"
                    }, b.animate);
                if (a === "max" && this.orientation === "horizontal")
                    this.range[f ? "animate" : "css"]({
                        width: 100 - e + "%"
                    }, {
                        queue: false,
                        duration: b.animate
                    });
                if (a === "min" && this.orientation === "vertical")
                    this.range.stop(1, 1)[f ? "animate" : "css"]({
                        height: e + "%"
                    }, b.animate);
                if (a === "max" && this.orientation === "vertical")
                    this.range[f ? "animate" : "css"]({
                        height: 100 - e + "%"
                    }, {
                        queue: false,
                        duration: b.animate
                    })
            }
        }
    });
    d.extend(d.ui.slider, {
        version: "1.8.16"
    })
}
)(jQuery);
;/*
 * jQuery UI Tabs 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(d, p) {
    function u() {
        return ++v
    }
    function w() {
        return ++x
    }
    var v = 0
      , x = 0;
    d.widget("ui.tabs", {
        options: {
            add: null,
            ajaxOptions: null,
            cache: false,
            cookie: null,
            collapsible: false,
            disable: null,
            disabled: [],
            enable: null,
            event: "click",
            fx: null,
            idPrefix: "ui-tabs-",
            load: null,
            panelTemplate: "<div></div>",
            remove: null,
            select: null,
            show: null,
            spinner: "<em>Loading&#8230;</em>",
            tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
        },
        _create: function() {
            this._tabify(true)
        },
        _setOption: function(b, e) {
            if (b == "selected")
                this.options.collapsible && e == this.options.selected || this.select(e);
            else {
                this.options[b] = e;
                this._tabify()
            }
        },
        _tabId: function(b) {
            return b.title && b.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + u()
        },
        _sanitizeSelector: function(b) {
            return b.replace(/:/g, "\\:")
        },
        _cookie: function() {
            var b = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + w());
            return d.cookie.apply(null, [b].concat(d.makeArray(arguments)))
        },
        _ui: function(b, e) {
            return {
                tab: b,
                panel: e,
                index: this.anchors.index(b)
            }
        },
        _cleanup: function() {
            this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function() {
                var b = d(this);
                b.html(b.data("label.tabs")).removeData("label.tabs")
            })
        },
        _tabify: function(b) {
            function e(g, f) {
                g.css("display", "");
                !d.support.opacity && f.opacity && g[0].style.removeAttribute("filter")
            }
            var a = this
              , c = this.options
              , h = /^#.+/;
            this.list = this.element.find("ol,ul").eq(0);
            this.lis = d(" > li:has(a[href])", this.list);
            this.anchors = this.lis.map(function() {
                return d("a", this)[0]
            });
            this.panels = d([]);
            this.anchors.each(function(g, f) {
                var i = d(f).attr("href"), l = i.split("#")[0], q;
                if (l && (l === location.toString().split("#")[0] || (q = d("base")[0]) && l === q.href)) {
                    i = f.hash;
                    f.href = i
                }
                if (h.test(i))
                    a.panels = a.panels.add(a.element.find(a._sanitizeSelector(i)));
                else if (i && i !== "#") {
                    d.data(f, "href.tabs", i);
                    d.data(f, "load.tabs", i.replace(/#.*$/, ""));
                    i = a._tabId(f);
                    f.href = "#" + i;
                    f = a.element.find("#" + i);
                    if (!f.length) {
                        f = d(c.panelTemplate).attr("id", i).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(a.panels[g - 1] || a.list);
                        f.data("destroy.tabs", true)
                    }
                    a.panels = a.panels.add(f)
                } else
                    c.disabled.push(g)
            });
            if (b) {
                this.element.addClass("ui-tabs ui-widget  ui-corner-all");
                this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-corner-all");
                this.lis.addClass("ui-state-default ui-corner-top");
                this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");
                if (c.selected === p) {
                    location.hash && this.anchors.each(function(g, f) {
                        if (f.hash == location.hash) {
                            c.selected = g;
                            return false
                        }
                    });
                    if (typeof c.selected !== "number" && c.cookie)
                        c.selected = parseInt(a._cookie(), 10);
                    if (typeof c.selected !== "number" && this.lis.filter(".ui-tabs-selected").length)
                        c.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"));
                    c.selected = c.selected || (this.lis.length ? 0 : -1)
                } else if (c.selected === null)
                    c.selected = -1;
                c.selected = c.selected >= 0 && this.anchors[c.selected] || c.selected < 0 ? c.selected : 0;
                c.disabled = d.unique(c.disabled.concat(d.map(this.lis.filter(".ui-state-disabled"), function(g) {
                    return a.lis.index(g)
                }))).sort();
                d.inArray(c.selected, c.disabled) != -1 && c.disabled.splice(d.inArray(c.selected, c.disabled), 1);
                this.panels.addClass("ui-tabs-hide");
                this.lis.removeClass("ui-tabs-selected ui-state-active");
                if (c.selected >= 0 && this.anchors.length) {
                    a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash)).removeClass("ui-tabs-hide");
                    this.lis.eq(c.selected).addClass("ui-tabs-selected ui-state-active");
                    a.element.queue("tabs", function() {
                        a._trigger("show", null, a._ui(a.anchors[c.selected], a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash))[0]))
                    });
                    this.load(c.selected)
                }
                d(window).bind("unload", function() {
                    a.lis.add(a.anchors).unbind(".tabs");
                    a.lis = a.anchors = a.panels = null
                })
            } else
                c.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"));
            this.element[c.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible");
            c.cookie && this._cookie(c.selected, c.cookie);
            b = 0;
            for (var j; j = this.lis[b]; b++)
                d(j)[d.inArray(b, c.disabled) != -1 && !d(j).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled");
            c.cache === false && this.anchors.removeData("cache.tabs");
            this.lis.add(this.anchors).unbind(".tabs");
            if (c.event !== "mouseover") {
                var k = function(g, f) {
                    f.is(":not(.ui-state-disabled)") && f.addClass("ui-state-" + g)
                }
                  , n = function(g, f) {
                    f.removeClass("ui-state-" + g)
                };
                this.lis.bind("mouseover.tabs", function() {
                    k("hover", d(this))
                });
                this.lis.bind("mouseout.tabs", function() {
                    n("hover", d(this))
                });
                this.anchors.bind("focus.tabs", function() {
                    k("focus", d(this).closest("li"))
                });
                this.anchors.bind("blur.tabs", function() {
                    n("focus", d(this).closest("li"))
                })
            }
            var m, o;
            if (c.fx)
                if (d.isArray(c.fx)) {
                    m = c.fx[0];
                    o = c.fx[1]
                } else
                    m = o = c.fx;
            var r = o ? function(g, f) {
                d(g).closest("li").addClass("ui-tabs-selected ui-state-active");
                f.hide().removeClass("ui-tabs-hide").animate(o, o.duration || "normal", function() {
                    e(f, o);
                    a._trigger("show", null, a._ui(g, f[0]))
                })
            }
            : function(g, f) {
                d(g).closest("li").addClass("ui-tabs-selected ui-state-active");
                f.removeClass("ui-tabs-hide");
                a._trigger("show", null, a._ui(g, f[0]))
            }
              , s = m ? function(g, f) {
                f.animate(m, m.duration || "normal", function() {
                    a.lis.removeClass("ui-tabs-selected ui-state-active");
                    f.addClass("ui-tabs-hide");
                    e(f, m);
                    a.element.dequeue("tabs")
                })
            }
            : function(g, f) {
                a.lis.removeClass("ui-tabs-selected ui-state-active");
                f.addClass("ui-tabs-hide");
                a.element.dequeue("tabs")
            }
            ;
            this.anchors.bind(c.event + ".tabs", function() {
                var g = this
                  , f = d(g).closest("li")
                  , i = a.panels.filter(":not(.ui-tabs-hide)")
                  , l = a.element.find(a._sanitizeSelector(g.hash));
                if (f.hasClass("ui-tabs-selected") && !c.collapsible || f.hasClass("ui-state-disabled") || f.hasClass("ui-state-processing") || a.panels.filter(":animated").length || a._trigger("select", null, a._ui(this, l[0])) === false) {
                    this.blur();
                    return false
                }
                c.selected = a.anchors.index(this);
                a.abort();
                if (c.collapsible)
                    if (f.hasClass("ui-tabs-selected")) {
                        c.selected = -1;
                        c.cookie && a._cookie(c.selected, c.cookie);
                        a.element.queue("tabs", function() {
                            s(g, i)
                        }).dequeue("tabs");
                        this.blur();
                        return false
                    } else if (!i.length) {
                        c.cookie && a._cookie(c.selected, c.cookie);
                        a.element.queue("tabs", function() {
                            r(g, l)
                        });
                        a.load(a.anchors.index(this));
                        this.blur();
                        return false
                    }
                c.cookie && a._cookie(c.selected, c.cookie);
                if (l.length) {
                    i.length && a.element.queue("tabs", function() {
                        s(g, i)
                    });
                    a.element.queue("tabs", function() {
                        r(g, l)
                    });
                    a.load(a.anchors.index(this))
                } else
                    throw "jQuery UI Tabs: Mismatching fragment identifier.";
                d.browser.msie && this.blur()
            });
            this.anchors.bind("click.tabs", function() {
                return false
            })
        },
        _getIndex: function(b) {
            if (typeof b == "string")
                b = this.anchors.index(this.anchors.filter("[href$=" + b + "]"));
            return b
        },
        destroy: function() {
            var b = this.options;
            this.abort();
            this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");
            this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
            this.anchors.each(function() {
                var e = d.data(this, "href.tabs");
                if (e)
                    this.href = e;
                var a = d(this).unbind(".tabs");
                d.each(["href", "load", "cache"], function(c, h) {
                    a.removeData(h + ".tabs")
                })
            });
            this.lis.unbind(".tabs").add(this.panels).each(function() {
                d.data(this, "destroy.tabs") ? d(this).remove() : d(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")
            });
            b.cookie && this._cookie(null, b.cookie);
            return this
        },
        add: function(b, e, a) {
            if (a === p)
                a = this.anchors.length;
            var c = this
              , h = this.options;
            e = d(h.tabTemplate.replace(/#\{href\}/g, b).replace(/#\{label\}/g, e));
            b = !b.indexOf("#") ? b.replace("#", "") : this._tabId(d("a", e)[0]);
            e.addClass("ui-state-default ui-corner-top").data("destroy.tabs", true);
            var j = c.element.find("#" + b);
            j.length || (j = d(h.panelTemplate).attr("id", b).data("destroy.tabs", true));
            j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");
            if (a >= this.lis.length) {
                e.appendTo(this.list);
                j.appendTo(this.list[0].parentNode)
            } else {
                e.insertBefore(this.lis[a]);
                j.insertBefore(this.panels[a])
            }
            h.disabled = d.map(h.disabled, function(k) {
                return k >= a ? ++k : k
            });
            this._tabify();
            if (this.anchors.length == 1) {
                h.selected = 0;
                e.addClass("ui-tabs-selected ui-state-active");
                j.removeClass("ui-tabs-hide");
                this.element.queue("tabs", function() {
                    c._trigger("show", null, c._ui(c.anchors[0], c.panels[0]))
                });
                this.load(0)
            }
            this._trigger("add", null, this._ui(this.anchors[a], this.panels[a]));
            return this
        },
        remove: function(b) {
            b = this._getIndex(b);
            var e = this.options
              , a = this.lis.eq(b).remove()
              , c = this.panels.eq(b).remove();
            if (a.hasClass("ui-tabs-selected") && this.anchors.length > 1)
                this.select(b + (b + 1 < this.anchors.length ? 1 : -1));
            e.disabled = d.map(d.grep(e.disabled, function(h) {
                return h != b
            }), function(h) {
                return h >= b ? --h : h
            });
            this._tabify();
            this._trigger("remove", null, this._ui(a.find("a")[0], c[0]));
            return this
        },
        enable: function(b) {
            b = this._getIndex(b);
            var e = this.options;
            if (d.inArray(b, e.disabled) != -1) {
                this.lis.eq(b).removeClass("ui-state-disabled");
                e.disabled = d.grep(e.disabled, function(a) {
                    return a != b
                });
                this._trigger("enable", null, this._ui(this.anchors[b], this.panels[b]));
                return this
            }
        },
        disable: function(b) {
            b = this._getIndex(b);
            var e = this.options;
            if (b != e.selected) {
                this.lis.eq(b).addClass("ui-state-disabled");
                e.disabled.push(b);
                e.disabled.sort();
                this._trigger("disable", null, this._ui(this.anchors[b], this.panels[b]))
            }
            return this
        },
        select: function(b) {
            b = this._getIndex(b);
            if (b == -1)
                if (this.options.collapsible && this.options.selected != -1)
                    b = this.options.selected;
                else
                    return this;
            this.anchors.eq(b).trigger(this.options.event + ".tabs");
            return this
        },
        load: function(b) {
            b = this._getIndex(b);
            var e = this
              , a = this.options
              , c = this.anchors.eq(b)[0]
              , h = d.data(c, "load.tabs");
            this.abort();
            if (!h || this.element.queue("tabs").length !== 0 && d.data(c, "cache.tabs"))
                this.element.dequeue("tabs");
            else {
                this.lis.eq(b).addClass("ui-state-processing");
                if (a.spinner) {
                    var j = d("span", c);
                    j.data("label.tabs", j.html()).html(a.spinner)
                }
                this.xhr = d.ajax(d.extend({}, a.ajaxOptions, {
                    url: h,
                    success: function(k, n) {
                        e.element.find(e._sanitizeSelector(c.hash)).html(k);
                        e._cleanup();
                        a.cache && d.data(c, "cache.tabs", true);
                        e._trigger("load", null, e._ui(e.anchors[b], e.panels[b]));
                        try {
                            a.ajaxOptions.success(k, n)
                        } catch (m) {}
                    },
                    error: function(k, n) {
                        e._cleanup();
                        e._trigger("load", null, e._ui(e.anchors[b], e.panels[b]));
                        try {
                            a.ajaxOptions.error(k, n, b, c)
                        } catch (m) {}
                    }
                }));
                e.element.dequeue("tabs");
                return this
            }
        },
        abort: function() {
            this.element.queue([]);
            this.panels.stop(false, true);
            this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2));
            if (this.xhr) {
                this.xhr.abort();
                delete this.xhr
            }
            this._cleanup();
            return this
        },
        url: function(b, e) {
            this.anchors.eq(b).removeData("cache.tabs").data("load.tabs", e);
            return this
        },
        length: function() {
            return this.anchors.length
        }
    });
    d.extend(d.ui.tabs, {
        version: "1.8.16"
    });
    d.extend(d.ui.tabs.prototype, {
        rotation: null,
        rotate: function(b, e) {
            var a = this
              , c = this.options
              , h = a._rotate || (a._rotate = function(j) {
                clearTimeout(a.rotation);
                a.rotation = setTimeout(function() {
                    var k = c.selected;
                    a.select(++k < a.anchors.length ? k : 0)
                }, b);
                j && j.stopPropagation()
            }
            );
            e = a._unrotate || (a._unrotate = !e ? function(j) {
                j.clientX && a.rotate(null)
            }
            : function() {
                t = c.selected;
                h()
            }
            );
            if (b) {
                this.element.bind("tabsshow", h);
                this.anchors.bind(c.event + ".tabs", e);
                h()
            } else {
                clearTimeout(a.rotation);
                this.element.unbind("tabsshow", h);
                this.anchors.unbind(c.event + ".tabs", e);
                delete this._rotate;
                delete this._unrotate
            }
            return this
        }
    })
}
)(jQuery);
;/*
 * jQuery UI Datepicker 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function(d, C) {
    function M() {
        this.debug = false;
        this._curInst = null;
        this._keyEvent = false;
        this._disabledInputs = [];
        this._inDialog = this._datepickerShowing = false;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: false,
            hideIfNoPrevNext: false,
            navigationAsDateFormat: false,
            gotoCurrent: false,
            changeMonth: false,
            changeYear: false,
            yearRange: "c-10:c+10",
            showOtherMonths: false,
            selectOtherMonths: false,
            showWeek: false,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: true,
            showButtonPanel: false,
            autoSize: false,
            disabled: false
        };
        d.extend(this._defaults, this.regional[""]);
        this.dpDiv = N(d('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content-calendar ui-helper-clearfix ui-corner-all"></div>'))
    }
    function N(a) {
        return a.bind("mouseout", function(b) {
            b = d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");
            b.length && b.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
        }).bind("mouseover", function(b) {
            b = d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");
            if (!(d.datepicker._isDisabledDatepicker(J.inline ? a.parent()[0] : J.input[0]) || !b.length)) {
                b.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
                b.addClass("ui-state-hover");
                b.hasClass("ui-datepicker-prev") && b.addClass("ui-datepicker-prev-hover");
                b.hasClass("ui-datepicker-next") && b.addClass("ui-datepicker-next-hover")
            }
        })
    }
    function H(a, b) {
        d.extend(a, b);
        for (var c in b)
            if (b[c] == null || b[c] == C)
                a[c] = b[c];
        return a
    }
    d.extend(d.ui, {
        datepicker: {
            version: "1.8.16"
        }
    });
    var B = (new Date).getTime(), J;
    d.extend(M.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        log: function() {
            this.debug && console.log.apply("", arguments)
        },
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(a) {
            H(this._defaults, a || {});
            return this
        },
        _attachDatepicker: function(a, b) {
            var c = null;
            for (var e in this._defaults) {
                var f = a.getAttribute("date:" + e);
                if (f) {
                    c = c || {};
                    try {
                        c[e] = eval(f)
                    } catch (h) {
                        c[e] = f
                    }
                }
            }
            e = a.nodeName.toLowerCase();
            f = e == "div" || e == "span";
            if (!a.id) {
                this.uuid += 1;
                a.id = "dp" + this.uuid
            }
            var i = this._newInst(d(a), f);
            i.settings = d.extend({}, b || {}, c || {});
            if (e == "input")
                this._connectDatepicker(a, i);
            else
                f && this._inlineDatepicker(a, i)
        },
        _newInst: function(a, b) {
            return {
                id: a[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
                input: a,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: b,
                dpDiv: !b ? this.dpDiv : N(d('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content-calendar ui-helper-clearfix"></div>'))
            }
        },
        _connectDatepicker: function(a, b) {
            var c = d(a);
            b.append = d([]);
            b.trigger = d([]);
            if (!c.hasClass(this.markerClassName)) {
                this._attachments(c, b);
                c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(e, f, h) {
                    b.settings[f] = h
                }).bind("getData.datepicker", function(e, f) {
                    return this._get(b, f)
                });
                this._autoSize(b);
                d.data(a, "datepicker", b);
                b.settings.disabled && this._disableDatepicker(a)
            }
        },
        _attachments: function(a, b) {
            var c = this._get(b, "appendText")
              , e = this._get(b, "isRTL");
            b.append && b.append.remove();
            if (c) {
                b.append = d('<span class="' + this._appendClass + '">' + c + "</span>");
                a[e ? "before" : "after"](b.append)
            }
            a.unbind("focus", this._showDatepicker);
            b.trigger && b.trigger.remove();
            c = this._get(b, "showOn");
            if (c == "focus" || c == "both")
                a.focus(this._showDatepicker);
            if (c == "button" || c == "both") {
                c = this._get(b, "buttonText");
                var f = this._get(b, "buttonImage");
                b.trigger = d(this._get(b, "buttonImageOnly") ? d("<img/>").addClass(this._triggerClass).attr({
                    src: f,
                    alt: c,
                    title: c
                }) : d('<button type="button"></button>').addClass(this._triggerClass).html(f == "" ? c : d("<img/>").attr({
                    src: f,
                    alt: c,
                    title: c
                })));
                a[e ? "before" : "after"](b.trigger);
                b.trigger.click(function() {
                    d.datepicker._datepickerShowing && d.datepicker._lastInput == a[0] ? d.datepicker._hideDatepicker() : d.datepicker._showDatepicker(a[0]);
                    return false
                })
            }
        },
        _autoSize: function(a) {
            if (this._get(a, "autoSize") && !a.inline) {
                var b = new Date(2009,11,20)
                  , c = this._get(a, "dateFormat");
                if (c.match(/[DM]/)) {
                    var e = function(f) {
                        for (var h = 0, i = 0, g = 0; g < f.length; g++)
                            if (f[g].length > h) {
                                h = f[g].length;
                                i = g
                            }
                        return i
                    };
                    b.setMonth(e(this._get(a, c.match(/MM/) ? "monthNames" : "monthNamesShort")));
                    b.setDate(e(this._get(a, c.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - b.getDay())
                }
                a.input.attr("size", this._formatDate(a, b).length)
            }
        },
        _inlineDatepicker: function(a, b) {
            var c = d(a);
            if (!c.hasClass(this.markerClassName)) {
                c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker", function(e, f, h) {
                    b.settings[f] = h
                }).bind("getData.datepicker", function(e, f) {
                    return this._get(b, f)
                });
                d.data(a, "datepicker", b);
                this._setDate(b, this._getDefaultDate(b), true);
                this._updateDatepicker(b);
                this._updateAlternate(b);
                b.settings.disabled && this._disableDatepicker(a);
                b.dpDiv.css("display", "block")
            }
        },
        _dialogDatepicker: function(a, b, c, e, f) {
            a = this._dialogInst;
            if (!a) {
                this.uuid += 1;
                this._dialogInput = d('<input type="text" id="' + ("dp" + this.uuid) + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
                this._dialogInput.keydown(this._doKeyDown);
                d("body").append(this._dialogInput);
                a = this._dialogInst = this._newInst(this._dialogInput, false);
                a.settings = {};
                d.data(this._dialogInput[0], "datepicker", a)
            }
            H(a.settings, e || {});
            b = b && b.constructor == Date ? this._formatDate(a, b) : b;
            this._dialogInput.val(b);
            this._pos = f ? f.length ? f : [f.pageX, f.pageY] : null;
            if (!this._pos)
                this._pos = [document.documentElement.clientWidth / 2 - 100 + (document.documentElement.scrollLeft || document.body.scrollLeft), document.documentElement.clientHeight / 2 - 150 + (document.documentElement.scrollTop || document.body.scrollTop)];
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px");
            a.settings.onSelect = c;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            d.blockUI && d.blockUI(this.dpDiv);
            d.data(this._dialogInput[0], "datepicker", a);
            return this
        },
        _destroyDatepicker: function(a) {
            var b = d(a)
              , c = d.data(a, "datepicker");
            if (b.hasClass(this.markerClassName)) {
                var e = a.nodeName.toLowerCase();
                d.removeData(a, "datepicker");
                if (e == "input") {
                    c.append.remove();
                    c.trigger.remove();
                    b.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)
                } else if (e == "div" || e == "span")
                    b.removeClass(this.markerClassName).empty()
            }
        },
        _enableDatepicker: function(a) {
            var b = d(a)
              , c = d.data(a, "datepicker");
            if (b.hasClass(this.markerClassName)) {
                var e = a.nodeName.toLowerCase();
                if (e == "input") {
                    a.disabled = false;
                    c.trigger.filter("button").each(function() {
                        this.disabled = false
                    }).end().filter("img").css({
                        opacity: "1.0",
                        cursor: ""
                    })
                } else if (e == "div" || e == "span") {
                    b = b.children("." + this._inlineClass);
                    b.children().removeClass("ui-state-disabled");
                    b.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
                }
                this._disabledInputs = d.map(this._disabledInputs, function(f) {
                    return f == a ? null : f
                })
            }
        },
        _disableDatepicker: function(a) {
            var b = d(a)
              , c = d.data(a, "datepicker");
            if (b.hasClass(this.markerClassName)) {
                var e = a.nodeName.toLowerCase();
                if (e == "input") {
                    a.disabled = true;
                    c.trigger.filter("button").each(function() {
                        this.disabled = true
                    }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                    })
                } else if (e == "div" || e == "span") {
                    b = b.children("." + this._inlineClass);
                    b.children().addClass("ui-state-disabled");
                    b.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled")
                }
                this._disabledInputs = d.map(this._disabledInputs, function(f) {
                    return f == a ? null : f
                });
                this._disabledInputs[this._disabledInputs.length] = a
            }
        },
        _isDisabledDatepicker: function(a) {
            if (!a)
                return false;
            for (var b = 0; b < this._disabledInputs.length; b++)
                if (this._disabledInputs[b] == a)
                    return true;
            return false
        },
        _getInst: function(a) {
            try {
                return d.data(a, "datepicker")
            } catch (b) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(a, b, c) {
            var e = this._getInst(a);
            if (arguments.length == 2 && typeof b == "string")
                return b == "defaults" ? d.extend({}, d.datepicker._defaults) : e ? b == "all" ? d.extend({}, e.settings) : this._get(e, b) : null;
            var f = b || {};
            if (typeof b == "string") {
                f = {};
                f[b] = c
            }
            if (e) {
                this._curInst == e && this._hideDatepicker();
                var h = this._getDateDatepicker(a, true)
                  , i = this._getMinMaxDate(e, "min")
                  , g = this._getMinMaxDate(e, "max");
                H(e.settings, f);
                if (i !== null && f.dateFormat !== C && f.minDate === C)
                    e.settings.minDate = this._formatDate(e, i);
                if (g !== null && f.dateFormat !== C && f.maxDate === C)
                    e.settings.maxDate = this._formatDate(e, g);
                this._attachments(d(a), e);
                this._autoSize(e);
                this._setDate(e, h);
                this._updateAlternate(e);
                this._updateDatepicker(e)
            }
        },
        _changeDatepicker: function(a, b, c) {
            this._optionDatepicker(a, b, c)
        },
        _refreshDatepicker: function(a) {
            (a = this._getInst(a)) && this._updateDatepicker(a)
        },
        _setDateDatepicker: function(a, b) {
            if (a = this._getInst(a)) {
                this._setDate(a, b);
                this._updateDatepicker(a);
                this._updateAlternate(a)
            }
        },
        _getDateDatepicker: function(a, b) {
            (a = this._getInst(a)) && !a.inline && this._setDateFromField(a, b);
            return a ? this._getDate(a) : null
        },
        _doKeyDown: function(a) {
            var b = d.datepicker._getInst(a.target)
              , c = true
              , e = b.dpDiv.is(".ui-datepicker-rtl");
            b._keyEvent = true;
            if (d.datepicker._datepickerShowing)
                switch (a.keyCode) {
                case 9:
                    d.datepicker._hideDatepicker();
                    c = false;
                    break;
                case 13:
                    c = d("td." + d.datepicker._dayOverClass + ":not(." + d.datepicker._currentClass + ")", b.dpDiv);
                    c[0] && d.datepicker._selectDay(a.target, b.selectedMonth, b.selectedYear, c[0]);
                    if (a = d.datepicker._get(b, "onSelect")) {
                        c = d.datepicker._formatDate(b);
                        a.apply(b.input ? b.input[0] : null, [c, b])
                    } else
                        d.datepicker._hideDatepicker();
                    return false;
                case 27:
                    d.datepicker._hideDatepicker();
                    break;
                case 33:
                    d.datepicker._adjustDate(a.target, a.ctrlKey ? -d.datepicker._get(b, "stepBigMonths") : -d.datepicker._get(b, "stepMonths"), "M");
                    break;
                case 34:
                    d.datepicker._adjustDate(a.target, a.ctrlKey ? +d.datepicker._get(b, "stepBigMonths") : +d.datepicker._get(b, "stepMonths"), "M");
                    break;
                case 35:
                    if (a.ctrlKey || a.metaKey)
                        d.datepicker._clearDate(a.target);
                    c = a.ctrlKey || a.metaKey;
                    break;
                case 36:
                    if (a.ctrlKey || a.metaKey)
                        d.datepicker._gotoToday(a.target);
                    c = a.ctrlKey || a.metaKey;
                    break;
                case 37:
                    if (a.ctrlKey || a.metaKey)
                        d.datepicker._adjustDate(a.target, e ? +1 : -1, "D");
                    c = a.ctrlKey || a.metaKey;
                    if (a.originalEvent.altKey)
                        d.datepicker._adjustDate(a.target, a.ctrlKey ? -d.datepicker._get(b, "stepBigMonths") : -d.datepicker._get(b, "stepMonths"), "M");
                    break;
                case 38:
                    if (a.ctrlKey || a.metaKey)
                        d.datepicker._adjustDate(a.target, -7, "D");
                    c = a.ctrlKey || a.metaKey;
                    break;
                case 39:
                    if (a.ctrlKey || a.metaKey)
                        d.datepicker._adjustDate(a.target, e ? -1 : +1, "D");
                    c = a.ctrlKey || a.metaKey;
                    if (a.originalEvent.altKey)
                        d.datepicker._adjustDate(a.target, a.ctrlKey ? +d.datepicker._get(b, "stepBigMonths") : +d.datepicker._get(b, "stepMonths"), "M");
                    break;
                case 40:
                    if (a.ctrlKey || a.metaKey)
                        d.datepicker._adjustDate(a.target, +7, "D");
                    c = a.ctrlKey || a.metaKey;
                    break;
                default:
                    c = false
                }
            else if (a.keyCode == 36 && a.ctrlKey)
                d.datepicker._showDatepicker(this);
            else
                c = false;
            if (c) {
                a.preventDefault();
                a.stopPropagation()
            }
        },
        _doKeyPress: function(a) {
            var b = d.datepicker._getInst(a.target);
            if (d.datepicker._get(b, "constrainInput")) {
                b = d.datepicker._possibleChars(d.datepicker._get(b, "dateFormat"));
                var c = String.fromCharCode(a.charCode == C ? a.keyCode : a.charCode);
                return a.ctrlKey || a.metaKey || c < " " || !b || b.indexOf(c) > -1
            }
        },
        _doKeyUp: function(a) {
            a = d.datepicker._getInst(a.target);
            if (a.input.val() != a.lastVal)
                try {
                    if (d.datepicker.parseDate(d.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, d.datepicker._getFormatConfig(a))) {
                        d.datepicker._setDateFromField(a);
                        d.datepicker._updateAlternate(a);
                        d.datepicker._updateDatepicker(a)
                    }
                } catch (b) {
                    d.datepicker.log(b)
                }
            return true
        },
        _showDatepicker: function(a) {
            a = a.target || a;
            if (a.nodeName.toLowerCase() != "input")
                a = d("input", a.parentNode)[0];
            if (!(d.datepicker._isDisabledDatepicker(a) || d.datepicker._lastInput == a)) {
                var b = d.datepicker._getInst(a);
                if (d.datepicker._curInst && d.datepicker._curInst != b) {
                    d.datepicker._datepickerShowing && d.datepicker._triggerOnClose(d.datepicker._curInst);
                    d.datepicker._curInst.dpDiv.stop(true, true)
                }
                var c = d.datepicker._get(b, "beforeShow");
                c = c ? c.apply(a, [a, b]) : {};
                if (c !== false) {
                    H(b.settings, c);
                    b.lastVal = null;
                    d.datepicker._lastInput = a;
                    d.datepicker._setDateFromField(b);
                    if (d.datepicker._inDialog)
                        a.value = "";
                    if (!d.datepicker._pos) {
                        d.datepicker._pos = d.datepicker._findPos(a);
                        d.datepicker._pos[1] += a.offsetHeight
                    }
                    var e = false;
                    d(a).parents().each(function() {
                        e |= d(this).css("position") == "fixed";
                        return !e
                    });
                    if (e && d.browser.opera) {
                        d.datepicker._pos[0] -= document.documentElement.scrollLeft;
                        d.datepicker._pos[1] -= document.documentElement.scrollTop
                    }
                    c = {
                        left: d.datepicker._pos[0],
                        top: d.datepicker._pos[1]
                    };
                    d.datepicker._pos = null;
                    b.dpDiv.empty();
                    b.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    });
                    d.datepicker._updateDatepicker(b);
                    c = d.datepicker._checkOffset(b, c, e);
                    b.dpDiv.css({
                        position: d.datepicker._inDialog && d.blockUI ? "static" : e ? "fixed" : "absolute",
                        display: "none",
                        left: c.left + "px",
                        top: c.top + "px"
                    });
                    if (!b.inline) {
                        c = d.datepicker._get(b, "showAnim");
                        var f = d.datepicker._get(b, "duration")
                          , h = function() {
                            var i = b.dpDiv.find("iframe.ui-datepicker-cover");
                            if (i.length) {
                                var g = d.datepicker._getBorders(b.dpDiv);
                                i.css({
                                    left: -g[0],
                                    top: -g[1],
                                    width: b.dpDiv.outerWidth(),
                                    height: b.dpDiv.outerHeight()
                                })
                            }
                        };
                        b.dpDiv.zIndex(d(a).zIndex() + 1);
                        d.datepicker._datepickerShowing = true;
                        d.effects && d.effects[c] ? b.dpDiv.show(c, d.datepicker._get(b, "showOptions"), f, h) : b.dpDiv[c || "show"](c ? f : null, h);
                        if (!c || !f)
                            h();
                        b.input.is(":visible") && !b.input.is(":disabled") && b.input.focus();
                        d.datepicker._curInst = b
                    }
                }
            }
        },
        _updateDatepicker: function(a) {
            this.maxRows = 4;
            var b = d.datepicker._getBorders(a.dpDiv);
            J = a;
            a.dpDiv.empty().append(this._generateHTML(a));
            var c = a.dpDiv.find("iframe.ui-datepicker-cover");
            c.length && c.css({
                left: -b[0],
                top: -b[1],
                width: a.dpDiv.outerWidth(),
                height: a.dpDiv.outerHeight()
            });
            a.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            b = this._getNumberOfMonths(a);
            c = b[1];
            a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            c > 1 && a.dpDiv.addClass("ui-datepicker-multi-" + c).css("width", 17 * c + "em");
            a.dpDiv[(b[0] != 1 || b[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            a == d.datepicker._curInst && d.datepicker._datepickerShowing && a.input && a.input.is(":visible") && !a.input.is(":disabled") && a.input[0] != document.activeElement && a.input.focus();
            if (a.yearshtml) {
                var e = a.yearshtml;
                setTimeout(function() {
                    e === a.yearshtml && a.yearshtml && a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);
                    e = a.yearshtml = null
                }, 0)
            }
        },
        _getBorders: function(a) {
            var b = function(c) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[c] || c
            };
            return [parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))]
        },
        _checkOffset: function(a, b, c) {
            var e = a.dpDiv.outerWidth()
              , f = a.dpDiv.outerHeight()
              , h = a.input ? a.input.outerWidth() : 0
              , i = a.input ? a.input.outerHeight() : 0
              , g = document.documentElement.clientWidth + d(document).scrollLeft()
              , j = document.documentElement.clientHeight + d(document).scrollTop();
            b.left -= this._get(a, "isRTL") ? e - h : 0;
            b.left -= c && b.left == a.input.offset().left ? d(document).scrollLeft() : 0;
            b.top -= c && b.top == a.input.offset().top + i ? d(document).scrollTop() : 0;
            b.left -= Math.min(b.left, b.left + e > g && g > e ? Math.abs(b.left + e - g) : 0);
            b.top -= Math.min(b.top, b.top + f > j && j > f ? Math.abs(f + i) : 0);
            return b
        },
        _findPos: function(a) {
            for (var b = this._get(this._getInst(a), "isRTL"); a && (a.type == "hidden" || a.nodeType != 1 || d.expr.filters.hidden(a)); )
                a = a[b ? "previousSibling" : "nextSibling"];
            a = d(a).offset();
            return [a.left, a.top]
        },
        _triggerOnClose: function(a) {
            var b = this._get(a, "onClose");
            if (b)
                b.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a])
        },
        _hideDatepicker: function(a) {
            var b = this._curInst;
            if (!(!b || a && b != d.data(a, "datepicker")))
                if (this._datepickerShowing) {
                    a = this._get(b, "showAnim");
                    var c = this._get(b, "duration")
                      , e = function() {
                        d.datepicker._tidyDialog(b);
                        this._curInst = null
                    };
                    d.effects && d.effects[a] ? b.dpDiv.hide(a, d.datepicker._get(b, "showOptions"), c, e) : b.dpDiv[a == "slideDown" ? "slideUp" : a == "fadeIn" ? "fadeOut" : "hide"](a ? c : null, e);
                    a || e();
                    d.datepicker._triggerOnClose(b);
                    this._datepickerShowing = false;
                    this._lastInput = null;
                    if (this._inDialog) {
                        this._dialogInput.css({
                            position: "absolute",
                            left: "0",
                            top: "-100px"
                        });
                        if (d.blockUI) {
                            d.unblockUI();
                            d("body").append(this.dpDiv)
                        }
                    }
                    this._inDialog = false
                }
        },
        _tidyDialog: function(a) {
            a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(a) {
            if (d.datepicker._curInst) {
                a = d(a.target);
                a[0].id != d.datepicker._mainDivId && a.parents("#" + d.datepicker._mainDivId).length == 0 && !a.hasClass(d.datepicker.markerClassName) && !a.hasClass(d.datepicker._triggerClass) && d.datepicker._datepickerShowing && !(d.datepicker._inDialog && d.blockUI) && d.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(a, b, c) {
            a = d(a);
            var e = this._getInst(a[0]);
            if (!this._isDisabledDatepicker(a[0])) {
                this._adjustInstDate(e, b + (c == "M" ? this._get(e, "showCurrentAtPos") : 0), c);
                this._updateDatepicker(e)
            }
        },
        _gotoToday: function(a) {
            a = d(a);
            var b = this._getInst(a[0]);
            if (this._get(b, "gotoCurrent") && b.currentDay) {
                b.selectedDay = b.currentDay;
                b.drawMonth = b.selectedMonth = b.currentMonth;
                b.drawYear = b.selectedYear = b.currentYear
            } else {
                var c = new Date;
                b.selectedDay = c.getDate();
                b.drawMonth = b.selectedMonth = c.getMonth();
                b.drawYear = b.selectedYear = c.getFullYear()
            }
            this._notifyChange(b);
            this._adjustDate(a)
        },
        _selectMonthYear: function(a, b, c) {
            a = d(a);
            var e = this._getInst(a[0]);
            e["selected" + (c == "M" ? "Month" : "Year")] = e["draw" + (c == "M" ? "Month" : "Year")] = parseInt(b.options[b.selectedIndex].value, 10);
            this._notifyChange(e);
            this._adjustDate(a)
        },
        _selectDay: function(a, b, c, e) {
            var f = d(a);
            if (!(d(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(f[0]))) {
                f = this._getInst(f[0]);
                f.selectedDay = f.currentDay = d("a", e).html();
                f.selectedMonth = f.currentMonth = b;
                f.selectedYear = f.currentYear = c;
                this._selectDate(a, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear))
            }
        },
        _clearDate: function(a) {
            a = d(a);
            this._getInst(a[0]);
            this._selectDate(a, "")
        },
        _selectDate: function(a, b) {
            a = this._getInst(d(a)[0]);
            b = b != null ? b : this._formatDate(a);
            a.input && a.input.val(b);
            this._updateAlternate(a);
            var c = this._get(a, "onSelect");
            if (c)
                c.apply(a.input ? a.input[0] : null, [b, a]);
            else
                a.input && a.input.trigger("change");
            if (a.inline)
                this._updateDatepicker(a);
            else {
                this._hideDatepicker();
                this._lastInput = a.input[0];
                typeof a.input[0] != "object" && a.input.focus();
                this._lastInput = null
            }
        },
        _updateAlternate: function(a) {
            var b = this._get(a, "altField");
            if (b) {
                var c = this._get(a, "altFormat") || this._get(a, "dateFormat")
                  , e = this._getDate(a)
                  , f = this.formatDate(c, e, this._getFormatConfig(a));
                d(b).each(function() {
                    d(this).val(f)
                })
            }
        },
        noWeekends: function(a) {
            a = a.getDay();
            return [a > 0 && a < 6, ""]
        },
        iso8601Week: function(a) {
            a = new Date(a.getTime());
            a.setDate(a.getDate() + 4 - (a.getDay() || 7));
            var b = a.getTime();
            a.setMonth(0);
            a.setDate(1);
            return Math.floor(Math.round((b - a) / 864E5) / 7) + 1
        },
        parseDate: function(a, b, c) {
            if (a == null || b == null)
                throw "Invalid arguments";
            b = typeof b == "object" ? b.toString() : b + "";
            if (b == "")
                return null;
            var e = (c ? c.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            e = typeof e != "string" ? e : (new Date).getFullYear() % 100 + parseInt(e, 10);
            for (var f = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, h = (c ? c.dayNames : null) || this._defaults.dayNames, i = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort, g = (c ? c.monthNames : null) || this._defaults.monthNames, j = c = -1, l = -1, u = -1, k = false, o = function(p) {
                (p = A + 1 < a.length && a.charAt(A + 1) == p) && A++;
                return p
            }, m = function(p) {
                var D = o(p);
                p = new RegExp("^\\d{1," + (p == "@" ? 14 : p == "!" ? 20 : p == "y" && D ? 4 : p == "o" ? 3 : 2) + "}");
                p = b.substring(q).match(p);
                if (!p)
                    throw "Missing number at position " + q;
                q += p[0].length;
                return parseInt(p[0], 10)
            }, n = function(p, D, K) {
                p = d.map(o(p) ? K : D, function(w, x) {
                    return [[x, w]]
                }).sort(function(w, x) {
                    return -(w[1].length - x[1].length)
                });
                var E = -1;
                d.each(p, function(w, x) {
                    w = x[1];
                    if (b.substr(q, w.length).toLowerCase() == w.toLowerCase()) {
                        E = x[0];
                        q += w.length;
                        return false
                    }
                });
                if (E != -1)
                    return E + 1;
                else
                    throw "Unknown name at position " + q;
            }, s = function() {
                if (b.charAt(q) != a.charAt(A))
                    throw "Unexpected literal at position " + q;
                q++
            }, q = 0, A = 0; A < a.length; A++)
                if (k)
                    if (a.charAt(A) == "'" && !o("'"))
                        k = false;
                    else
                        s();
                else
                    switch (a.charAt(A)) {
                    case "d":
                        l = m("d");
                        break;
                    case "D":
                        n("D", f, h);
                        break;
                    case "o":
                        u = m("o");
                        break;
                    case "m":
                        j = m("m");
                        break;
                    case "M":
                        j = n("M", i, g);
                        break;
                    case "y":
                        c = m("y");
                        break;
                    case "@":
                        var v = new Date(m("@"));
                        c = v.getFullYear();
                        j = v.getMonth() + 1;
                        l = v.getDate();
                        break;
                    case "!":
                        v = new Date((m("!") - this._ticksTo1970) / 1E4);
                        c = v.getFullYear();
                        j = v.getMonth() + 1;
                        l = v.getDate();
                        break;
                    case "'":
                        if (o("'"))
                            s();
                        else
                            k = true;
                        break;
                    default:
                        s()
                    }
            if (q < b.length)
                throw "Extra/unparsed characters found in date: " + b.substring(q);
            if (c == -1)
                c = (new Date).getFullYear();
            else if (c < 100)
                c += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c <= e ? 0 : -100);
            if (u > -1) {
                j = 1;
                l = u;
                do {
                    e = this._getDaysInMonth(c, j - 1);
                    if (l <= e)
                        break;
                    j++;
                    l -= e
                } while (1)
            }
            v = this._daylightSavingAdjust(new Date(c,j - 1,l));
            if (v.getFullYear() != c || v.getMonth() + 1 != j || v.getDate() != l)
                throw "Invalid date";
            return v
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1E7,
        formatDate: function(a, b, c) {
            if (!b)
                return "";
            var e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort
              , f = (c ? c.dayNames : null) || this._defaults.dayNames
              , h = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort;
            c = (c ? c.monthNames : null) || this._defaults.monthNames;
            var i = function(o) {
                (o = k + 1 < a.length && a.charAt(k + 1) == o) && k++;
                return o
            }
              , g = function(o, m, n) {
                m = "" + m;
                if (i(o))
                    for (; m.length < n; )
                        m = "0" + m;
                return m
            }
              , j = function(o, m, n, s) {
                return i(o) ? s[m] : n[m]
            }
              , l = ""
              , u = false;
            if (b)
                for (var k = 0; k < a.length; k++)
                    if (u)
                        if (a.charAt(k) == "'" && !i("'"))
                            u = false;
                        else
                            l += a.charAt(k);
                    else
                        switch (a.charAt(k)) {
                        case "d":
                            l += g("d", b.getDate(), 2);
                            break;
                        case "D":
                            l += j("D", b.getDay(), e, f);
                            break;
                        case "o":
                            l += g("o", Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime() - (new Date(b.getFullYear(),0,0)).getTime()) / 864E5), 3);
                            break;
                        case "m":
                            l += g("m", b.getMonth() + 1, 2);
                            break;
                        case "M":
                            l += j("M", b.getMonth(), h, c);
                            break;
                        case "y":
                            l += i("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100;
                            break;
                        case "@":
                            l += b.getTime();
                            break;
                        case "!":
                            l += b.getTime() * 1E4 + this._ticksTo1970;
                            break;
                        case "'":
                            if (i("'"))
                                l += "'";
                            else
                                u = true;
                            break;
                        default:
                            l += a.charAt(k)
                        }
            return l
        },
        _possibleChars: function(a) {
            for (var b = "", c = false, e = function(h) {
                (h = f + 1 < a.length && a.charAt(f + 1) == h) && f++;
                return h
            }, f = 0; f < a.length; f++)
                if (c)
                    if (a.charAt(f) == "'" && !e("'"))
                        c = false;
                    else
                        b += a.charAt(f);
                else
                    switch (a.charAt(f)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        b += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        if (e("'"))
                            b += "'";
                        else
                            c = true;
                        break;
                    default:
                        b += a.charAt(f)
                    }
            return b
        },
        _get: function(a, b) {
            return a.settings[b] !== C ? a.settings[b] : this._defaults[b]
        },
        _setDateFromField: function(a, b) {
            if (a.input.val() != a.lastVal) {
                var c = this._get(a, "dateFormat"), e = a.lastVal = a.input ? a.input.val() : null, f, h;
                f = h = this._getDefaultDate(a);
                var i = this._getFormatConfig(a);
                try {
                    f = this.parseDate(c, e, i) || h
                } catch (g) {
                    this.log(g);
                    e = b ? "" : e
                }
                a.selectedDay = f.getDate();
                a.drawMonth = a.selectedMonth = f.getMonth();
                a.drawYear = a.selectedYear = f.getFullYear();
                a.currentDay = e ? f.getDate() : 0;
                a.currentMonth = e ? f.getMonth() : 0;
                a.currentYear = e ? f.getFullYear() : 0;
                this._adjustInstDate(a)
            }
        },
        _getDefaultDate: function(a) {
            return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
        },
        _determineDate: function(a, b, c) {
            var e = function(h) {
                var i = new Date;
                i.setDate(i.getDate() + h);
                return i
            }
              , f = function(h) {
                try {
                    return d.datepicker.parseDate(d.datepicker._get(a, "dateFormat"), h, d.datepicker._getFormatConfig(a))
                } catch (i) {}
                var g = (h.toLowerCase().match(/^c/) ? d.datepicker._getDate(a) : null) || new Date
                  , j = g.getFullYear()
                  , l = g.getMonth();
                g = g.getDate();
                for (var u = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, k = u.exec(h); k; ) {
                    switch (k[2] || "d") {
                    case "d":
                    case "D":
                        g += parseInt(k[1], 10);
                        break;
                    case "w":
                    case "W":
                        g += parseInt(k[1], 10) * 7;
                        break;
                    case "m":
                    case "M":
                        l += parseInt(k[1], 10);
                        g = Math.min(g, d.datepicker._getDaysInMonth(j, l));
                        break;
                    case "y":
                    case "Y":
                        j += parseInt(k[1], 10);
                        g = Math.min(g, d.datepicker._getDaysInMonth(j, l));
                        break
                    }
                    k = u.exec(h)
                }
                return new Date(j,l,g)
            };
            if (b = (b = b == null || b === "" ? c : typeof b == "string" ? f(b) : typeof b == "number" ? isNaN(b) ? c : e(b) : new Date(b.getTime())) && b.toString() == "Invalid Date" ? c : b) {
                b.setHours(0);
                b.setMinutes(0);
                b.setSeconds(0);
                b.setMilliseconds(0)
            }
            return this._daylightSavingAdjust(b)
        },
        _daylightSavingAdjust: function(a) {
            if (!a)
                return null;
            a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0);
            return a
        },
        _setDate: function(a, b, c) {
            var e = !b
              , f = a.selectedMonth
              , h = a.selectedYear;
            b = this._restrictMinMax(a, this._determineDate(a, b, new Date));
            a.selectedDay = a.currentDay = b.getDate();
            a.drawMonth = a.selectedMonth = a.currentMonth = b.getMonth();
            a.drawYear = a.selectedYear = a.currentYear = b.getFullYear();
            if ((f != a.selectedMonth || h != a.selectedYear) && !c)
                this._notifyChange(a);
            this._adjustInstDate(a);
            if (a.input)
                a.input.val(e ? "" : this._formatDate(a))
        },
        _getDate: function(a) {
            return !a.currentYear || a.input && a.input.val() == "" ? null : this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay))
        },
        _generateHTML: function(a) {
            var b = new Date;
            b = this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));
            var c = this._get(a, "isRTL")
              , e = this._get(a, "showButtonPanel")
              , f = this._get(a, "hideIfNoPrevNext")
              , h = this._get(a, "navigationAsDateFormat")
              , i = this._getNumberOfMonths(a)
              , g = this._get(a, "showCurrentAtPos")
              , j = this._get(a, "stepMonths")
              , l = i[0] != 1 || i[1] != 1
              , u = this._daylightSavingAdjust(!a.currentDay ? new Date(9999,9,9) : new Date(a.currentYear,a.currentMonth,a.currentDay))
              , k = this._getMinMaxDate(a, "min")
              , o = this._getMinMaxDate(a, "max");
            g = a.drawMonth - g;
            var m = a.drawYear;
            if (g < 0) {
                g += 12;
                m--
            }
            if (o) {
                var n = this._daylightSavingAdjust(new Date(o.getFullYear(),o.getMonth() - i[0] * i[1] + 1,o.getDate()));
                for (n = k && n < k ? k : n; this._daylightSavingAdjust(new Date(m,g,1)) > n; ) {
                    g--;
                    if (g < 0) {
                        g = 11;
                        m--
                    }
                }
            }
            a.drawMonth = g;
            a.drawYear = m;
            n = this._get(a, "prevText");
            n = !h ? n : this.formatDate(n, this._daylightSavingAdjust(new Date(m,g - j,1)), this._getFormatConfig(a));
            n = this._canAdjustMonth(a, -1, m, g) ? '<a class="ui-datepicker-prev" onclick="DP_jQuery_' + B + ".datepicker._adjustDate('#" + a.id + "', -" + j + ", 'M');\" title=\"" + n + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + n + "</span></a>" : f ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + n + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + n + "</span></a>";
            var s = this._get(a, "nextText");
            s = !h ? s : this.formatDate(s, this._daylightSavingAdjust(new Date(m,g + j,1)), this._getFormatConfig(a));
            f = this._canAdjustMonth(a, +1, m, g) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + B + ".datepicker._adjustDate('#" + a.id + "', +" + j + ", 'M');\" title=\"" + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>" : f ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>";
            j = this._get(a, "currentText");
            s = this._get(a, "gotoCurrent") && a.currentDay ? u : b;
            j = !h ? j : this.formatDate(j, s, this._getFormatConfig(a));
            h = !a.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + B + '.datepicker._hideDatepicker();">' + this._get(a, "closeText") + "</button>" : "";
            e = e ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (c ? h : "") + (this._isInRange(a, s) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + B + ".datepicker._gotoToday('#" + a.id + "');\">" + j + "</button>" : "") + (c ? "" : h) + "</div>" : "";
            h = parseInt(this._get(a, "firstDay"), 10);
            h = isNaN(h) ? 0 : h;
            j = this._get(a, "showWeek");
            s = this._get(a, "dayNames");
            this._get(a, "dayNamesShort");
            var q = this._get(a, "dayNamesMin")
              , A = this._get(a, "monthNames")
              , v = this._get(a, "monthNamesShort")
              , p = this._get(a, "beforeShowDay")
              , D = this._get(a, "showOtherMonths")
              , K = this._get(a, "selectOtherMonths");
            this._get(a, "calculateWeek");
            for (var E = this._getDefaultDate(a), w = "", x = 0; x < i[0]; x++) {
                var O = "";
                this.maxRows = 4;
                for (var G = 0; G < i[1]; G++) {
                    var P = this._daylightSavingAdjust(new Date(m,g,a.selectedDay))
                      , t = " ui-corner-alls"
                      , y = "";
                    if (l) {
                        y += '<div class="ui-datepicker-group';
                        if (i[1] > 1)
                            switch (G) {
                            case 0:
                                y += " ui-datepicker-group-first";
                                t = " ui-corner-" + (c ? "right" : "left");
                                break;
                            case i[1] - 1:
                                y += " ui-datepicker-group-last";
                                t = " ui-corner-" + (c ? "left" : "right");
                                break;
                            default:
                                y += " ui-datepicker-group-middle";
                                t = "";
                                break
                            }
                        y += '">'
                    }
                    y += '<div class="ui-datepicker-header ui-widget-header2 ui-helper-clearfix' + t + '">' + (/all|left/.test(t) && x == 0 ? c ? f : n : "") + (/all|right/.test(t) && x == 0 ? c ? n : f : "") + this._generateMonthYearHeader(a, g, m, k, o, x > 0 || G > 0, A, v) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                    var z = j ? '<th class="ui-datepicker-week-col">' + this._get(a, "weekHeader") + "</th>" : "";
                    for (t = 0; t < 7; t++) {
                        var r = (t + h) % 7;
                        z += "<th" + ((t + h + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + s[r] + '">' + q[r] + "</span></th>"
                    }
                    y += z + "</tr></thead><tbody>";
                    z = this._getDaysInMonth(m, g);
                    if (m == a.selectedYear && g == a.selectedMonth)
                        a.selectedDay = Math.min(a.selectedDay, z);
                    t = (this._getFirstDayOfMonth(m, g) - h + 7) % 7;
                    z = Math.ceil((t + z) / 7);
                    this.maxRows = z = l ? this.maxRows > z ? this.maxRows : z : z;
                    r = this._daylightSavingAdjust(new Date(m,g,1 - t));
                    for (var Q = 0; Q < z; Q++) {
                        y += "<tr>";
                        var R = !j ? "" : '<td class="ui-datepicker-week-col">' + this._get(a, "calculateWeek")(r) + "</td>";
                        for (t = 0; t < 7; t++) {
                            var I = p ? p.apply(a.input ? a.input[0] : null, [r]) : [true, ""]
                              , F = r.getMonth() != g
                              , L = F && !K || !I[0] || k && r < k || o && r > o;
                            R += '<td class="' + ((t + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (r.getTime() == P.getTime() && g == a.selectedMonth && a._keyEvent || E.getTime() == r.getTime() && E.getTime() == P.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !D ? "" : " " + I[1] + (r.getTime() == u.getTime() ? " " + this._currentClass : "") + (r.getTime() == b.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!F || D) && I[2] ? ' title="' + I[2] + '"' : "") + (L ? "" : ' onclick="DP_jQuery_' + B + ".datepicker._selectDay('#" + a.id + "'," + r.getMonth() + "," + r.getFullYear() + ', this);return false;"') + ">" + (F && !D ? "&#xa0;" : L ? '<span class="ui-state-default">' + r.getDate() + "</span>" : '<a class="ui-state-default' + (r.getTime() == b.getTime() ? " ui-state-highlight" : "") + (r.getTime() == u.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + '" href="#">' + r.getDate() + "</a>") + "</td>";
                            r.setDate(r.getDate() + 1);
                            r = this._daylightSavingAdjust(r)
                        }
                        y += R + "</tr>"
                    }
                    g++;
                    if (g > 11) {
                        g = 0;
                        m++
                    }
                    y += "</tbody></table>" + (l ? "</div>" + (i[0] > 0 && G == i[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : "");
                    O += y
                }
                w += O
            }
            w += e + (d.browser.msie && parseInt(d.browser.version, 10) < 7 && !a.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frame></iframe>' : "");
            a._keyEvent = false;
            return w
        },
        _generateMonthYearHeader: function(a, b, c, e, f, h, i, g) {
            var j = this._get(a, "changeMonth")
              , l = this._get(a, "changeYear")
              , u = this._get(a, "showMonthAfterYear")
              , k = '<div class="ui-datepicker-title">'
              , o = "";
            if (h || !j)
                o += '<span class="ui-datepicker-month">' + i[b] + "</span>";
            else {
                i = e && e.getFullYear() == c;
                var m = f && f.getFullYear() == c;
                o += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + B + ".datepicker._selectMonthYear('#" + a.id + "', this, 'M');\" >";
                for (var n = 0; n < 12; n++)
                    if ((!i || n >= e.getMonth()) && (!m || n <= f.getMonth()))
                        o += '<option value="' + n + '"' + (n == b ? ' selected="selected"' : "") + ">" + g[n] + "</option>";
                o += "</select>"
            }
            u || (k += o + (h || !(j && l) ? "&#xa0;" : ""));
            if (!a.yearshtml) {
                a.yearshtml = "";
                if (h || !l)
                    k += '<span class="ui-datepicker-year">' + c + "</span>";
                else {
                    g = this._get(a, "yearRange").split(":");
                    var s = (new Date).getFullYear();
                    i = function(q) {
                        q = q.match(/c[+-].*/) ? c + parseInt(q.substring(1), 10) : q.match(/[+-].*/) ? s + parseInt(q, 10) : parseInt(q, 10);
                        return isNaN(q) ? s : q
                    }
                    ;
                    b = i(g[0]);
                    g = Math.max(b, i(g[1] || ""));
                    b = e ? Math.max(b, e.getFullYear()) : b;
                    g = f ? Math.min(g, f.getFullYear()) : g;
                    for (a.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + B + ".datepicker._selectMonthYear('#" + a.id + "', this, 'Y');\" >"; b <= g; b++)
                        a.yearshtml += '<option value="' + b + '"' + (b == c ? ' selected="selected"' : "") + ">" + b + "</option>";
                    a.yearshtml += "</select>";
                    k += a.yearshtml;
                    a.yearshtml = null
                }
            }
            k += this._get(a, "yearSuffix");
            if (u)
                k += (h || !(j && l) ? "&#xa0;" : "") + o;
            k += "</div>";
            return k
        },
        _adjustInstDate: function(a, b, c) {
            var e = a.drawYear + (c == "Y" ? b : 0)
              , f = a.drawMonth + (c == "M" ? b : 0);
            b = Math.min(a.selectedDay, this._getDaysInMonth(e, f)) + (c == "D" ? b : 0);
            e = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(e,f,b)));
            a.selectedDay = e.getDate();
            a.drawMonth = a.selectedMonth = e.getMonth();
            a.drawYear = a.selectedYear = e.getFullYear();
            if (c == "M" || c == "Y")
                this._notifyChange(a)
        },
        _restrictMinMax: function(a, b) {
            var c = this._getMinMaxDate(a, "min");
            a = this._getMinMaxDate(a, "max");
            b = c && b < c ? c : b;
            return b = a && b > a ? a : b
        },
        _notifyChange: function(a) {
            var b = this._get(a, "onChangeMonthYear");
            if (b)
                b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
        },
        _getNumberOfMonths: function(a) {
            a = this._get(a, "numberOfMonths");
            return a == null ? [1, 1] : typeof a == "number" ? [1, a] : a
        },
        _getMinMaxDate: function(a, b) {
            return this._determineDate(a, this._get(a, b + "Date"), null)
        },
        _getDaysInMonth: function(a, b) {
            return 32 - this._daylightSavingAdjust(new Date(a,b,32)).getDate()
        },
        _getFirstDayOfMonth: function(a, b) {
            return (new Date(a,b,1)).getDay()
        },
        _canAdjustMonth: function(a, b, c, e) {
            var f = this._getNumberOfMonths(a);
            c = this._daylightSavingAdjust(new Date(c,e + (b < 0 ? b : f[0] * f[1]),1));
            b < 0 && c.setDate(this._getDaysInMonth(c.getFullYear(), c.getMonth()));
            return this._isInRange(a, c)
        },
        _isInRange: function(a, b) {
            var c = this._getMinMaxDate(a, "min");
            a = this._getMinMaxDate(a, "max");
            return (!c || b.getTime() >= c.getTime()) && (!a || b.getTime() <= a.getTime())
        },
        _getFormatConfig: function(a) {
            var b = this._get(a, "shortYearCutoff");
            b = typeof b != "string" ? b : (new Date).getFullYear() % 100 + parseInt(b, 10);
            return {
                shortYearCutoff: b,
                dayNamesShort: this._get(a, "dayNamesShort"),
                dayNames: this._get(a, "dayNames"),
                monthNamesShort: this._get(a, "monthNamesShort"),
                monthNames: this._get(a, "monthNames")
            }
        },
        _formatDate: function(a, b, c, e) {
            if (!b) {
                a.currentDay = a.selectedDay;
                a.currentMonth = a.selectedMonth;
                a.currentYear = a.selectedYear
            }
            b = b ? typeof b == "object" ? b : this._daylightSavingAdjust(new Date(e,c,b)) : this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));
            return this.formatDate(this._get(a, "dateFormat"), b, this._getFormatConfig(a))
        }
    });
    d.fn.datepicker = function(a) {
        if (!this.length)
            return this;
        if (!d.datepicker.initialized) {
            d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv);
            d.datepicker.initialized = true
        }
        var b = Array.prototype.slice.call(arguments, 1);
        if (typeof a == "string" && (a == "isDisabled" || a == "getDate" || a == "widget"))
            return d.datepicker["_" + a + "Datepicker"].apply(d.datepicker, [this[0]].concat(b));
        if (a == "option" && arguments.length == 2 && typeof arguments[1] == "string")
            return d.datepicker["_" + a + "Datepicker"].apply(d.datepicker, [this[0]].concat(b));
        return this.each(function() {
            typeof a == "string" ? d.datepicker["_" + a + "Datepicker"].apply(d.datepicker, [this].concat(b)) : d.datepicker._attachDatepicker(this, a)
        })
    }
    ;
    d.datepicker = new M;
    d.datepicker.initialized = false;
    d.datepicker.uuid = (new Date).getTime();
    d.datepicker.version = "1.8.16";
    window["DP_jQuery_" + B] = d
}
)(jQuery);
;/*
 * jQuery UI Progressbar 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
(function(b, d) {
    b.widget("ui.progressbar", {
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function() {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            });
            this.valueDiv = b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
            this.oldValue = this._value();
            this._refreshValue()
        },
        destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.valueDiv.remove();
            b.Widget.prototype.destroy.apply(this, arguments)
        },
        value: function(a) {
            if (a === d)
                return this._value();
            this._setOption("value", a);
            return this
        },
        _setOption: function(a, c) {
            if (a === "value") {
                this.options.value = c;
                this._refreshValue();
                this._value() === this.options.max && this._trigger("complete")
            }
            b.Widget.prototype._setOption.apply(this, arguments)
        },
        _value: function() {
            var a = this.options.value;
            if (typeof a !== "number")
                a = 0;
            return Math.min(this.options.max, Math.max(this.min, a))
        },
        _percentage: function() {
            return 100 * this._value() / this.options.max
        },
        _refreshValue: function() {
            var a = this.value()
              , c = this._percentage();
            if (this.oldValue !== a) {
                this.oldValue = a;
                this._trigger("change")
            }
            this.valueDiv.toggle(a > this.min).toggleClass("ui-corner-right", a === this.options.max).width(c.toFixed(0) + "%");
            this.element.attr("aria-valuenow", a)
        }
    });
    b.extend(b.ui.progressbar, {
        version: "1.8.16"
    })
}
)(jQuery);
;/*
 * jQuery UI Effects 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects || function(f, j) {
    function m(c) {
        var a;
        if (c && c.constructor == Array && c.length == 3)
            return c;
        if (a = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c))
            return [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3], 10)];
        if (a = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c))
            return [parseFloat(a[1]) * 2.55, parseFloat(a[2]) * 2.55, parseFloat(a[3]) * 2.55];
        if (a = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))
            return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)];
        if (a = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c))
            return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)];
        if (/rgba\(0, 0, 0, 0\)/.exec(c))
            return n.transparent;
        return n[f.trim(c).toLowerCase()]
    }
    function s(c, a) {
        var b;
        do {
            b = f.curCSS(c, a);
            if (b != "" && b != "transparent" || f.nodeName(c, "body"))
                break;
            a = "backgroundColor"
        } while (c = c.parentNode);
        return m(b)
    }
    function o() {
        var c = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle, a = {}, b, d;
        if (c && c.length && c[0] && c[c[0]])
            for (var e = c.length; e--; ) {
                b = c[e];
                if (typeof c[b] == "string") {
                    d = b.replace(/\-(\w)/g, function(g, h) {
                        return h.toUpperCase()
                    });
                    a[d] = c[b]
                }
            }
        else
            for (b in c)
                if (typeof c[b] === "string")
                    a[b] = c[b];
        return a
    }
    function p(c) {
        var a, b;
        for (a in c) {
            b = c[a];
            if (b == null || f.isFunction(b) || a in t || /scrollbar/.test(a) || !/color/i.test(a) && isNaN(parseFloat(b)))
                delete c[a]
        }
        return c
    }
    function u(c, a) {
        var b = {
            _: 0
        }, d;
        for (d in a)
            if (c[d] != a[d])
                b[d] = a[d];
        return b
    }
    function k(c, a, b, d) {
        if (typeof c == "object") {
            d = a;
            b = null;
            a = c;
            c = a.effect
        }
        if (f.isFunction(a)) {
            d = a;
            b = null;
            a = {}
        }
        if (typeof a == "number" || f.fx.speeds[a]) {
            d = b;
            b = a;
            a = {}
        }
        if (f.isFunction(b)) {
            d = b;
            b = null
        }
        a = a || {};
        b = b || a.duration;
        b = f.fx.off ? 0 : typeof b == "number" ? b : b in f.fx.speeds ? f.fx.speeds[b] : f.fx.speeds._default;
        d = d || a.complete;
        return [c, a, b, d]
    }
    function l(c) {
        if (!c || typeof c === "number" || f.fx.speeds[c])
            return true;
        if (typeof c === "string" && !f.effects[c])
            return true;
        return false
    }
    f.effects = {};
    f.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function(c, a) {
        f.fx.step[a] = function(b) {
            if (!b.colorInit) {
                b.start = s(b.elem, a);
                b.end = m(b.end);
                b.colorInit = true
            }
            b.elem.style[a] = "rgb(" + Math.max(Math.min(parseInt(b.pos * (b.end[0] - b.start[0]) + b.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(b.pos * (b.end[1] - b.start[1]) + b.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(b.pos * (b.end[2] - b.start[2]) + b.start[2], 10), 255), 0) + ")"
        }
    });
    var n = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
        transparent: [255, 255, 255]
    }
      , q = ["add", "remove", "toggle"]
      , t = {
        border: 1,
        borderBottom: 1,
        borderColor: 1,
        borderLeft: 1,
        borderRight: 1,
        borderTop: 1,
        borderWidth: 1,
        margin: 1,
        padding: 1
    };
    f.effects.animateClass = function(c, a, b, d) {
        if (f.isFunction(b)) {
            d = b;
            b = null
        }
        return this.queue(function() {
            var e = f(this), g = e.attr("style") || " ", h = p(o.call(this)), r, v = e.attr("class");
            f.each(q, function(w, i) {
                c[i] && e[i + "Class"](c[i])
            });
            r = p(o.call(this));
            e.attr("class", v);
            e.animate(u(h, r), {
                queue: false,
                duration: a,
                easing: b,
                complete: function() {
                    f.each(q, function(w, i) {
                        c[i] && e[i + "Class"](c[i])
                    });
                    if (typeof e.attr("style") == "object") {
                        e.attr("style").cssText = "";
                        e.attr("style").cssText = g
                    } else
                        e.attr("style", g);
                    d && d.apply(this, arguments);
                    f.dequeue(this)
                }
            })
        })
    }
    ;
    f.fn.extend({
        _addClass: f.fn.addClass,
        addClass: function(c, a, b, d) {
            return a ? f.effects.animateClass.apply(this, [{
                add: c
            }, a, b, d]) : this._addClass(c)
        },
        _removeClass: f.fn.removeClass,
        removeClass: function(c, a, b, d) {
            return a ? f.effects.animateClass.apply(this, [{
                remove: c
            }, a, b, d]) : this._removeClass(c)
        },
        _toggleClass: f.fn.toggleClass,
        toggleClass: function(c, a, b, d, e) {
            return typeof a == "boolean" || a === j ? b ? f.effects.animateClass.apply(this, [a ? {
                add: c
            } : {
                remove: c
            }, b, d, e]) : this._toggleClass(c, a) : f.effects.animateClass.apply(this, [{
                toggle: c
            }, a, b, d])
        },
        switchClass: function(c, a, b, d, e) {
            return f.effects.animateClass.apply(this, [{
                add: a,
                remove: c
            }, b, d, e])
        }
    });
    f.extend(f.effects, {
        version: "1.8.16",
        save: function(c, a) {
            for (var b = 0; b < a.length; b++)
                a[b] !== null && c.data("ec.storage." + a[b], c[0].style[a[b]])
        },
        restore: function(c, a) {
            for (var b = 0; b < a.length; b++)
                a[b] !== null && c.css(a[b], c.data("ec.storage." + a[b]))
        },
        setMode: function(c, a) {
            if (a == "toggle")
                a = c.is(":hidden") ? "show" : "hide";
            return a
        },
        getBaseline: function(c, a) {
            var b;
            switch (c[0]) {
            case "top":
                b = 0;
                break;
            case "middle":
                b = 0.5;
                break;
            case "bottom":
                b = 1;
                break;
            default:
                b = c[0] / a.height
            }
            switch (c[1]) {
            case "left":
                c = 0;
                break;
            case "center":
                c = 0.5;
                break;
            case "right":
                c = 1;
                break;
            default:
                c = c[1] / a.width
            }
            return {
                x: c,
                y: b
            }
        },
        createWrapper: function(c) {
            if (c.parent().is(".ui-effects-wrapper"))
                return c.parent();
            var a = {
                width: c.outerWidth(true),
                height: c.outerHeight(true),
                "float": c.css("float")
            }
              , b = f("<div></div>").addClass("ui-effects-wrapper").css({
                fontSize: "100%",
                background: "transparent",
                border: "none",
                margin: 0,
                padding: 0
            })
              , d = document.activeElement;
            c.wrap(b);
            if (c[0] === d || f.contains(c[0], d))
                f(d).focus();
            b = c.parent();
            if (c.css("position") == "static") {
                b.css({
                    position: "relative"
                });
                c.css({
                    position: "relative"
                })
            } else {
                f.extend(a, {
                    position: c.css("position"),
                    zIndex: c.css("z-index")
                });
                f.each(["top", "left", "bottom", "right"], function(e, g) {
                    a[g] = c.css(g);
                    if (isNaN(parseInt(a[g], 10)))
                        a[g] = "auto"
                });
                c.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })
            }
            return b.css(a).show()
        },
        removeWrapper: function(c) {
            var a, b = document.activeElement;
            if (c.parent().is(".ui-effects-wrapper")) {
                a = c.parent().replaceWith(c);
                if (c[0] === b || f.contains(c[0], b))
                    f(b).focus();
                return a
            }
            return c
        },
        setTransition: function(c, a, b, d) {
            d = d || {};
            f.each(a, function(e, g) {
                unit = c.cssUnit(g);
                if (unit[0] > 0)
                    d[g] = unit[0] * b + unit[1]
            });
            return d
        }
    });
    f.fn.extend({
        effect: function(c) {
            var a = k.apply(this, arguments)
              , b = {
                options: a[1],
                duration: a[2],
                callback: a[3]
            };
            a = b.options.mode;
            var d = f.effects[c];
            if (f.fx.off || !d)
                return a ? this[a](b.duration, b.callback) : this.each(function() {
                    b.callback && b.callback.call(this)
                });
            return d.call(this, b)
        },
        _show: f.fn.show,
        show: function(c) {
            if (l(c))
                return this._show.apply(this, arguments);
            else {
                var a = k.apply(this, arguments);
                a[1].mode = "show";
                return this.effect.apply(this, a)
            }
        },
        _hide: f.fn.hide,
        hide: function(c) {
            if (l(c))
                return this._hide.apply(this, arguments);
            else {
                var a = k.apply(this, arguments);
                a[1].mode = "hide";
                return this.effect.apply(this, a)
            }
        },
        __toggle: f.fn.toggle,
        toggle: function(c) {
            if (l(c) || typeof c === "boolean" || f.isFunction(c))
                return this.__toggle.apply(this, arguments);
            else {
                var a = k.apply(this, arguments);
                a[1].mode = "toggle";
                return this.effect.apply(this, a)
            }
        },
        cssUnit: function(c) {
            var a = this.css(c)
              , b = [];
            f.each(["em", "px", "%", "pt"], function(d, e) {
                if (a.indexOf(e) > 0)
                    b = [parseFloat(a), e]
            });
            return b
        }
    });
    f.easing.jswing = f.easing.swing;
    f.extend(f.easing, {
        def: "easeOutQuad",
        swing: function(c, a, b, d, e) {
            return f.easing[f.easing.def](c, a, b, d, e)
        },
        easeInQuad: function(c, a, b, d, e) {
            return d * (a /= e) * a + b
        },
        easeOutQuad: function(c, a, b, d, e) {
            return -d * (a /= e) * (a - 2) + b
        },
        easeInOutQuad: function(c, a, b, d, e) {
            if ((a /= e / 2) < 1)
                return d / 2 * a * a + b;
            return -d / 2 * (--a * (a - 2) - 1) + b
        },
        easeInCubic: function(c, a, b, d, e) {
            return d * (a /= e) * a * a + b
        },
        easeOutCubic: function(c, a, b, d, e) {
            return d * ((a = a / e - 1) * a * a + 1) + b
        },
        easeInOutCubic: function(c, a, b, d, e) {
            if ((a /= e / 2) < 1)
                return d / 2 * a * a * a + b;
            return d / 2 * ((a -= 2) * a * a + 2) + b
        },
        easeInQuart: function(c, a, b, d, e) {
            return d * (a /= e) * a * a * a + b
        },
        easeOutQuart: function(c, a, b, d, e) {
            return -d * ((a = a / e - 1) * a * a * a - 1) + b
        },
        easeInOutQuart: function(c, a, b, d, e) {
            if ((a /= e / 2) < 1)
                return d / 2 * a * a * a * a + b;
            return -d / 2 * ((a -= 2) * a * a * a - 2) + b
        },
        easeInQuint: function(c, a, b, d, e) {
            return d * (a /= e) * a * a * a * a + b
        },
        easeOutQuint: function(c, a, b, d, e) {
            return d * ((a = a / e - 1) * a * a * a * a + 1) + b
        },
        easeInOutQuint: function(c, a, b, d, e) {
            if ((a /= e / 2) < 1)
                return d / 2 * a * a * a * a * a + b;
            return d / 2 * ((a -= 2) * a * a * a * a + 2) + b
        },
        easeInSine: function(c, a, b, d, e) {
            return -d * Math.cos(a / e * (Math.PI / 2)) + d + b
        },
        easeOutSine: function(c, a, b, d, e) {
            return d * Math.sin(a / e * (Math.PI / 2)) + b
        },
        easeInOutSine: function(c, a, b, d, e) {
            return -d / 2 * (Math.cos(Math.PI * a / e) - 1) + b
        },
        easeInExpo: function(c, a, b, d, e) {
            return a == 0 ? b : d * Math.pow(2, 10 * (a / e - 1)) + b
        },
        easeOutExpo: function(c, a, b, d, e) {
            return a == e ? b + d : d * (-Math.pow(2, -10 * a / e) + 1) + b
        },
        easeInOutExpo: function(c, a, b, d, e) {
            if (a == 0)
                return b;
            if (a == e)
                return b + d;
            if ((a /= e / 2) < 1)
                return d / 2 * Math.pow(2, 10 * (a - 1)) + b;
            return d / 2 * (-Math.pow(2, -10 * --a) + 2) + b
        },
        easeInCirc: function(c, a, b, d, e) {
            return -d * (Math.sqrt(1 - (a /= e) * a) - 1) + b
        },
        easeOutCirc: function(c, a, b, d, e) {
            return d * Math.sqrt(1 - (a = a / e - 1) * a) + b
        },
        easeInOutCirc: function(c, a, b, d, e) {
            if ((a /= e / 2) < 1)
                return -d / 2 * (Math.sqrt(1 - a * a) - 1) + b;
            return d / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b
        },
        easeInElastic: function(c, a, b, d, e) {
            c = 1.70158;
            var g = 0
              , h = d;
            if (a == 0)
                return b;
            if ((a /= e) == 1)
                return b + d;
            g || (g = e * 0.3);
            if (h < Math.abs(d)) {
                h = d;
                c = g / 4
            } else
                c = g / (2 * Math.PI) * Math.asin(d / h);
            return -(h * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * e - c) * 2 * Math.PI / g)) + b
        },
        easeOutElastic: function(c, a, b, d, e) {
            c = 1.70158;
            var g = 0
              , h = d;
            if (a == 0)
                return b;
            if ((a /= e) == 1)
                return b + d;
            g || (g = e * 0.3);
            if (h < Math.abs(d)) {
                h = d;
                c = g / 4
            } else
                c = g / (2 * Math.PI) * Math.asin(d / h);
            return h * Math.pow(2, -10 * a) * Math.sin((a * e - c) * 2 * Math.PI / g) + d + b
        },
        easeInOutElastic: function(c, a, b, d, e) {
            c = 1.70158;
            var g = 0
              , h = d;
            if (a == 0)
                return b;
            if ((a /= e / 2) == 2)
                return b + d;
            g || (g = e * 0.3 * 1.5);
            if (h < Math.abs(d)) {
                h = d;
                c = g / 4
            } else
                c = g / (2 * Math.PI) * Math.asin(d / h);
            if (a < 1)
                return -0.5 * h * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * e - c) * 2 * Math.PI / g) + b;
            return h * Math.pow(2, -10 * (a -= 1)) * Math.sin((a * e - c) * 2 * Math.PI / g) * 0.5 + d + b
        },
        easeInBack: function(c, a, b, d, e, g) {
            if (g == j)
                g = 1.70158;
            return d * (a /= e) * a * ((g + 1) * a - g) + b
        },
        easeOutBack: function(c, a, b, d, e, g) {
            if (g == j)
                g = 1.70158;
            return d * ((a = a / e - 1) * a * ((g + 1) * a + g) + 1) + b
        },
        easeInOutBack: function(c, a, b, d, e, g) {
            if (g == j)
                g = 1.70158;
            if ((a /= e / 2) < 1)
                return d / 2 * a * a * (((g *= 1.525) + 1) * a - g) + b;
            return d / 2 * ((a -= 2) * a * (((g *= 1.525) + 1) * a + g) + 2) + b
        },
        easeInBounce: function(c, a, b, d, e) {
            return d - f.easing.easeOutBounce(c, e - a, 0, d, e) + b
        },
        easeOutBounce: function(c, a, b, d, e) {
            return (a /= e) < 1 / 2.75 ? d * 7.5625 * a * a + b : a < 2 / 2.75 ? d * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + b : a < 2.5 / 2.75 ? d * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + b : d * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + b
        },
        easeInOutBounce: function(c, a, b, d, e) {
            if (a < e / 2)
                return f.easing.easeInBounce(c, a * 2, 0, d, e) * 0.5 + b;
            return f.easing.easeOutBounce(c, a * 2 - e, 0, d, e) * 0.5 + d * 0.5 + b
        }
    })
}(jQuery);
;/*
 * jQuery UI Effects Blind 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b) {
    b.effects.blind = function(c) {
        return this.queue(function() {
            var a = b(this)
              , g = ["position", "top", "bottom", "left", "right"]
              , f = b.effects.setMode(a, c.options.mode || "hide")
              , d = c.options.direction || "vertical";
            b.effects.save(a, g);
            a.show();
            var e = b.effects.createWrapper(a).css({
                overflow: "hidden"
            })
              , h = d == "vertical" ? "height" : "width";
            d = d == "vertical" ? e.height() : e.width();
            f == "show" && e.css(h, 0);
            var i = {};
            i[h] = f == "show" ? d : 0;
            e.animate(i, c.duration, c.options.easing, function() {
                f == "hide" && a.hide();
                b.effects.restore(a, g);
                b.effects.removeWrapper(a);
                c.callback && c.callback.apply(a[0], arguments);
                a.dequeue()
            })
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Bounce 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(e) {
    e.effects.bounce = function(b) {
        return this.queue(function() {
            var a = e(this)
              , l = ["position", "top", "bottom", "left", "right"]
              , h = e.effects.setMode(a, b.options.mode || "effect")
              , d = b.options.direction || "up"
              , c = b.options.distance || 20
              , m = b.options.times || 5
              , i = b.duration || 250;
            /show|hide/.test(h) && l.push("opacity");
            e.effects.save(a, l);
            a.show();
            e.effects.createWrapper(a);
            var f = d == "up" || d == "down" ? "top" : "left";
            d = d == "up" || d == "left" ? "pos" : "neg";
            c = b.options.distance || (f == "top" ? a.outerHeight({
                margin: true
            }) / 3 : a.outerWidth({
                margin: true
            }) / 3);
            if (h == "show")
                a.css("opacity", 0).css(f, d == "pos" ? -c : c);
            if (h == "hide")
                c /= m * 2;
            h != "hide" && m--;
            if (h == "show") {
                var g = {
                    opacity: 1
                };
                g[f] = (d == "pos" ? "+=" : "-=") + c;
                a.animate(g, i / 2, b.options.easing);
                c /= 2;
                m--
            }
            for (g = 0; g < m; g++) {
                var j = {}
                  , k = {};
                j[f] = (d == "pos" ? "-=" : "+=") + c;
                k[f] = (d == "pos" ? "+=" : "-=") + c;
                a.animate(j, i / 2, b.options.easing).animate(k, i / 2, b.options.easing);
                c = h == "hide" ? c * 2 : c / 2
            }
            if (h == "hide") {
                g = {
                    opacity: 0
                };
                g[f] = (d == "pos" ? "-=" : "+=") + c;
                a.animate(g, i / 2, b.options.easing, function() {
                    a.hide();
                    e.effects.restore(a, l);
                    e.effects.removeWrapper(a);
                    b.callback && b.callback.apply(this, arguments)
                })
            } else {
                j = {};
                k = {};
                j[f] = (d == "pos" ? "-=" : "+=") + c;
                k[f] = (d == "pos" ? "+=" : "-=") + c;
                a.animate(j, i / 2, b.options.easing).animate(k, i / 2, b.options.easing, function() {
                    e.effects.restore(a, l);
                    e.effects.removeWrapper(a);
                    b.callback && b.callback.apply(this, arguments)
                })
            }
            a.queue("fx", function() {
                a.dequeue()
            });
            a.dequeue()
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Clip 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b) {
    b.effects.clip = function(e) {
        return this.queue(function() {
            var a = b(this)
              , i = ["position", "top", "bottom", "left", "right", "height", "width"]
              , f = b.effects.setMode(a, e.options.mode || "hide")
              , c = e.options.direction || "vertical";
            b.effects.save(a, i);
            a.show();
            var d = b.effects.createWrapper(a).css({
                overflow: "hidden"
            });
            d = a[0].tagName == "IMG" ? d : a;
            var g = {
                size: c == "vertical" ? "height" : "width",
                position: c == "vertical" ? "top" : "left"
            };
            c = c == "vertical" ? d.height() : d.width();
            if (f == "show") {
                d.css(g.size, 0);
                d.css(g.position, c / 2)
            }
            var h = {};
            h[g.size] = f == "show" ? c : 0;
            h[g.position] = f == "show" ? 0 : c / 2;
            d.animate(h, {
                queue: false,
                duration: e.duration,
                easing: e.options.easing,
                complete: function() {
                    f == "hide" && a.hide();
                    b.effects.restore(a, i);
                    b.effects.removeWrapper(a);
                    e.callback && e.callback.apply(a[0], arguments);
                    a.dequeue()
                }
            })
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Drop 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c) {
    c.effects.drop = function(d) {
        return this.queue(function() {
            var a = c(this)
              , h = ["position", "top", "bottom", "left", "right", "opacity"]
              , e = c.effects.setMode(a, d.options.mode || "hide")
              , b = d.options.direction || "left";
            c.effects.save(a, h);
            a.show();
            c.effects.createWrapper(a);
            var f = b == "up" || b == "down" ? "top" : "left";
            b = b == "up" || b == "left" ? "pos" : "neg";
            var g = d.options.distance || (f == "top" ? a.outerHeight({
                margin: true
            }) / 2 : a.outerWidth({
                margin: true
            }) / 2);
            if (e == "show")
                a.css("opacity", 0).css(f, b == "pos" ? -g : g);
            var i = {
                opacity: e == "show" ? 1 : 0
            };
            i[f] = (e == "show" ? b == "pos" ? "+=" : "-=" : b == "pos" ? "-=" : "+=") + g;
            a.animate(i, {
                queue: false,
                duration: d.duration,
                easing: d.options.easing,
                complete: function() {
                    e == "hide" && a.hide();
                    c.effects.restore(a, h);
                    c.effects.removeWrapper(a);
                    d.callback && d.callback.apply(this, arguments);
                    a.dequeue()
                }
            })
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Explode 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(j) {
    j.effects.explode = function(a) {
        return this.queue(function() {
            var c = a.options.pieces ? Math.round(Math.sqrt(a.options.pieces)) : 3
              , d = a.options.pieces ? Math.round(Math.sqrt(a.options.pieces)) : 3;
            a.options.mode = a.options.mode == "toggle" ? j(this).is(":visible") ? "hide" : "show" : a.options.mode;
            var b = j(this).show().css("visibility", "hidden")
              , g = b.offset();
            g.top -= parseInt(b.css("marginTop"), 10) || 0;
            g.left -= parseInt(b.css("marginLeft"), 10) || 0;
            for (var h = b.outerWidth(true), i = b.outerHeight(true), e = 0; e < c; e++)
                for (var f = 0; f < d; f++)
                    b.clone().appendTo("body").wrap("<div></div>").css({
                        position: "absolute",
                        visibility: "visible",
                        left: -f * (h / d),
                        top: -e * (i / c)
                    }).parent().addClass("ui-effects-explode").css({
                        position: "absolute",
                        overflow: "hidden",
                        width: h / d,
                        height: i / c,
                        left: g.left + f * (h / d) + (a.options.mode == "show" ? (f - Math.floor(d / 2)) * (h / d) : 0),
                        top: g.top + e * (i / c) + (a.options.mode == "show" ? (e - Math.floor(c / 2)) * (i / c) : 0),
                        opacity: a.options.mode == "show" ? 0 : 1
                    }).animate({
                        left: g.left + f * (h / d) + (a.options.mode == "show" ? 0 : (f - Math.floor(d / 2)) * (h / d)),
                        top: g.top + e * (i / c) + (a.options.mode == "show" ? 0 : (e - Math.floor(c / 2)) * (i / c)),
                        opacity: a.options.mode == "show" ? 1 : 0
                    }, a.duration || 500);
            setTimeout(function() {
                a.options.mode == "show" ? b.css({
                    visibility: "visible"
                }) : b.css({
                    visibility: "visible"
                }).hide();
                a.callback && a.callback.apply(b[0]);
                b.dequeue();
                j("div.ui-effects-explode").remove()
            }, a.duration || 500)
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Fade 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fade
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b) {
    b.effects.fade = function(a) {
        return this.queue(function() {
            var c = b(this)
              , d = b.effects.setMode(c, a.options.mode || "hide");
            c.animate({
                opacity: d
            }, {
                queue: false,
                duration: a.duration,
                easing: a.options.easing,
                complete: function() {
                    a.callback && a.callback.apply(this, arguments);
                    c.dequeue()
                }
            })
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Fold 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c) {
    c.effects.fold = function(a) {
        return this.queue(function() {
            var b = c(this)
              , j = ["position", "top", "bottom", "left", "right"]
              , d = c.effects.setMode(b, a.options.mode || "hide")
              , g = a.options.size || 15
              , h = !!a.options.horizFirst
              , k = a.duration ? a.duration / 2 : c.fx.speeds._default / 2;
            c.effects.save(b, j);
            b.show();
            var e = c.effects.createWrapper(b).css({
                overflow: "hidden"
            })
              , f = d == "show" != h
              , l = f ? ["width", "height"] : ["height", "width"];
            f = f ? [e.width(), e.height()] : [e.height(), e.width()];
            var i = /([0-9]+)%/.exec(g);
            if (i)
                g = parseInt(i[1], 10) / 100 * f[d == "hide" ? 0 : 1];
            if (d == "show")
                e.css(h ? {
                    height: 0,
                    width: g
                } : {
                    height: g,
                    width: 0
                });
            h = {};
            i = {};
            h[l[0]] = d == "show" ? f[0] : g;
            i[l[1]] = d == "show" ? f[1] : 0;
            e.animate(h, k, a.options.easing).animate(i, k, a.options.easing, function() {
                d == "hide" && b.hide();
                c.effects.restore(b, j);
                c.effects.removeWrapper(b);
                a.callback && a.callback.apply(b[0], arguments);
                b.dequeue()
            })
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Highlight 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b) {
    b.effects.highlight = function(c) {
        return this.queue(function() {
            var a = b(this)
              , e = ["backgroundImage", "backgroundColor", "opacity"]
              , d = b.effects.setMode(a, c.options.mode || "show")
              , f = {
                backgroundColor: a.css("backgroundColor")
            };
            if (d == "hide")
                f.opacity = 0;
            b.effects.save(a, e);
            a.show().css({
                backgroundImage: "none",
                backgroundColor: c.options.color || "#ffff99"
            }).animate(f, {
                queue: false,
                duration: c.duration,
                easing: c.options.easing,
                complete: function() {
                    d == "hide" && a.hide();
                    b.effects.restore(a, e);
                    d == "show" && !b.support.opacity && this.style.removeAttribute("filter");
                    c.callback && c.callback.apply(this, arguments);
                    a.dequeue()
                }
            })
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Pulsate 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(d) {
    d.effects.pulsate = function(a) {
        return this.queue(function() {
            var b = d(this)
              , c = d.effects.setMode(b, a.options.mode || "show");
            times = (a.options.times || 5) * 2 - 1;
            duration = a.duration ? a.duration / 2 : d.fx.speeds._default / 2;
            isVisible = b.is(":visible");
            animateTo = 0;
            if (!isVisible) {
                b.css("opacity", 0).show();
                animateTo = 1
            }
            if (c == "hide" && isVisible || c == "show" && !isVisible)
                times--;
            for (c = 0; c < times; c++) {
                b.animate({
                    opacity: animateTo
                }, duration, a.options.easing);
                animateTo = (animateTo + 1) % 2
            }
            b.animate({
                opacity: animateTo
            }, duration, a.options.easing, function() {
                animateTo == 0 && b.hide();
                a.callback && a.callback.apply(this, arguments)
            });
            b.queue("fx", function() {
                b.dequeue()
            }).dequeue()
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Scale 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c) {
    c.effects.puff = function(b) {
        return this.queue(function() {
            var a = c(this)
              , e = c.effects.setMode(a, b.options.mode || "hide")
              , g = parseInt(b.options.percent, 10) || 150
              , h = g / 100
              , i = {
                height: a.height(),
                width: a.width()
            };
            c.extend(b.options, {
                fade: true,
                mode: e,
                percent: e == "hide" ? g : 100,
                from: e == "hide" ? i : {
                    height: i.height * h,
                    width: i.width * h
                }
            });
            a.effect("scale", b.options, b.duration, b.callback);
            a.dequeue()
        })
    }
    ;
    c.effects.scale = function(b) {
        return this.queue(function() {
            var a = c(this)
              , e = c.extend(true, {}, b.options)
              , g = c.effects.setMode(a, b.options.mode || "effect")
              , h = parseInt(b.options.percent, 10) || (parseInt(b.options.percent, 10) == 0 ? 0 : g == "hide" ? 0 : 100)
              , i = b.options.direction || "both"
              , f = b.options.origin;
            if (g != "effect") {
                e.origin = f || ["middle", "center"];
                e.restore = true
            }
            f = {
                height: a.height(),
                width: a.width()
            };
            a.from = b.options.from || (g == "show" ? {
                height: 0,
                width: 0
            } : f);
            h = {
                y: i != "horizontal" ? h / 100 : 1,
                x: i != "vertical" ? h / 100 : 1
            };
            a.to = {
                height: f.height * h.y,
                width: f.width * h.x
            };
            if (b.options.fade) {
                if (g == "show") {
                    a.from.opacity = 0;
                    a.to.opacity = 1
                }
                if (g == "hide") {
                    a.from.opacity = 1;
                    a.to.opacity = 0
                }
            }
            e.from = a.from;
            e.to = a.to;
            e.mode = g;
            a.effect("size", e, b.duration, b.callback);
            a.dequeue()
        })
    }
    ;
    c.effects.size = function(b) {
        return this.queue(function() {
            var a = c(this)
              , e = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"]
              , g = ["position", "top", "bottom", "left", "right", "overflow", "opacity"]
              , h = ["width", "height", "overflow"]
              , i = ["fontSize"]
              , f = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"]
              , k = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"]
              , p = c.effects.setMode(a, b.options.mode || "effect")
              , n = b.options.restore || false
              , m = b.options.scale || "both"
              , l = b.options.origin
              , j = {
                height: a.height(),
                width: a.width()
            };
            a.from = b.options.from || j;
            a.to = b.options.to || j;
            if (l) {
                l = c.effects.getBaseline(l, j);
                a.from.top = (j.height - a.from.height) * l.y;
                a.from.left = (j.width - a.from.width) * l.x;
                a.to.top = (j.height - a.to.height) * l.y;
                a.to.left = (j.width - a.to.width) * l.x
            }
            var d = {
                from: {
                    y: a.from.height / j.height,
                    x: a.from.width / j.width
                },
                to: {
                    y: a.to.height / j.height,
                    x: a.to.width / j.width
                }
            };
            if (m == "box" || m == "both") {
                if (d.from.y != d.to.y) {
                    e = e.concat(f);
                    a.from = c.effects.setTransition(a, f, d.from.y, a.from);
                    a.to = c.effects.setTransition(a, f, d.to.y, a.to)
                }
                if (d.from.x != d.to.x) {
                    e = e.concat(k);
                    a.from = c.effects.setTransition(a, k, d.from.x, a.from);
                    a.to = c.effects.setTransition(a, k, d.to.x, a.to)
                }
            }
            if (m == "content" || m == "both")
                if (d.from.y != d.to.y) {
                    e = e.concat(i);
                    a.from = c.effects.setTransition(a, i, d.from.y, a.from);
                    a.to = c.effects.setTransition(a, i, d.to.y, a.to)
                }
            c.effects.save(a, n ? e : g);
            a.show();
            c.effects.createWrapper(a);
            a.css("overflow", "hidden").css(a.from);
            if (m == "content" || m == "both") {
                f = f.concat(["marginTop", "marginBottom"]).concat(i);
                k = k.concat(["marginLeft", "marginRight"]);
                h = e.concat(f).concat(k);
                a.find("*[width]").each(function() {
                    child = c(this);
                    n && c.effects.save(child, h);
                    var o = {
                        height: child.height(),
                        width: child.width()
                    };
                    child.from = {
                        height: o.height * d.from.y,
                        width: o.width * d.from.x
                    };
                    child.to = {
                        height: o.height * d.to.y,
                        width: o.width * d.to.x
                    };
                    if (d.from.y != d.to.y) {
                        child.from = c.effects.setTransition(child, f, d.from.y, child.from);
                        child.to = c.effects.setTransition(child, f, d.to.y, child.to)
                    }
                    if (d.from.x != d.to.x) {
                        child.from = c.effects.setTransition(child, k, d.from.x, child.from);
                        child.to = c.effects.setTransition(child, k, d.to.x, child.to)
                    }
                    child.css(child.from);
                    child.animate(child.to, b.duration, b.options.easing, function() {
                        n && c.effects.restore(child, h)
                    })
                })
            }
            a.animate(a.to, {
                queue: false,
                duration: b.duration,
                easing: b.options.easing,
                complete: function() {
                    a.to.opacity === 0 && a.css("opacity", a.from.opacity);
                    p == "hide" && a.hide();
                    c.effects.restore(a, n ? e : g);
                    c.effects.removeWrapper(a);
                    b.callback && b.callback.apply(this, arguments);
                    a.dequeue()
                }
            })
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Shake 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(d) {
    d.effects.shake = function(a) {
        return this.queue(function() {
            var b = d(this)
              , j = ["position", "top", "bottom", "left", "right"];
            d.effects.setMode(b, a.options.mode || "effect");
            var c = a.options.direction || "left"
              , e = a.options.distance || 20
              , l = a.options.times || 3
              , f = a.duration || a.options.duration || 140;
            d.effects.save(b, j);
            b.show();
            d.effects.createWrapper(b);
            var g = c == "up" || c == "down" ? "top" : "left"
              , h = c == "up" || c == "left" ? "pos" : "neg";
            c = {};
            var i = {}
              , k = {};
            c[g] = (h == "pos" ? "-=" : "+=") + e;
            i[g] = (h == "pos" ? "+=" : "-=") + e * 2;
            k[g] = (h == "pos" ? "-=" : "+=") + e * 2;
            b.animate(c, f, a.options.easing);
            for (e = 1; e < l; e++)
                b.animate(i, f, a.options.easing).animate(k, f, a.options.easing);
            b.animate(i, f, a.options.easing).animate(c, f / 2, a.options.easing, function() {
                d.effects.restore(b, j);
                d.effects.removeWrapper(b);
                a.callback && a.callback.apply(this, arguments)
            });
            b.queue("fx", function() {
                b.dequeue()
            });
            b.dequeue()
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Slide 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c) {
    c.effects.slide = function(d) {
        return this.queue(function() {
            var a = c(this)
              , h = ["position", "top", "bottom", "left", "right"]
              , f = c.effects.setMode(a, d.options.mode || "show")
              , b = d.options.direction || "left";
            c.effects.save(a, h);
            a.show();
            c.effects.createWrapper(a).css({
                overflow: "hidden"
            });
            var g = b == "up" || b == "down" ? "top" : "left";
            b = b == "up" || b == "left" ? "pos" : "neg";
            var e = d.options.distance || (g == "top" ? a.outerHeight({
                margin: true
            }) : a.outerWidth({
                margin: true
            }));
            if (f == "show")
                a.css(g, b == "pos" ? isNaN(e) ? "-" + e : -e : e);
            var i = {};
            i[g] = (f == "show" ? b == "pos" ? "+=" : "-=" : b == "pos" ? "-=" : "+=") + e;
            a.animate(i, {
                queue: false,
                duration: d.duration,
                easing: d.options.easing,
                complete: function() {
                    f == "hide" && a.hide();
                    c.effects.restore(a, h);
                    c.effects.removeWrapper(a);
                    d.callback && d.callback.apply(this, arguments);
                    a.dequeue()
                }
            })
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Transfer 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(e) {
    e.effects.transfer = function(a) {
        return this.queue(function() {
            var b = e(this)
              , c = e(a.options.to)
              , d = c.offset();
            c = {
                top: d.top,
                left: d.left,
                height: c.innerHeight(),
                width: c.innerWidth()
            };
            d = b.offset();
            var f = e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(a.options.className).css({
                top: d.top,
                left: d.left,
                height: b.innerHeight(),
                width: b.innerWidth(),
                position: "absolute"
            }).animate(c, a.duration, a.options.easing, function() {
                f.remove();
                a.callback && a.callback.apply(b[0], arguments);
                b.dequeue()
            })
        })
    }
}
)(jQuery);
;
/*
 * TipTip
 * Copyright 2010 Drew Wilson
 * www.drewwilson.com
 * code.drewwilson.com/entry/tiptip-jquery-plugin
 *
 * Version 1.3   -   Updated: Mar. 23, 2010
 *
 * This Plug-In will create a custom tooltip to replace the default
 * browser tooltip. It is extremely lightweight and very smart in
 * that it detects the edges of the browser window and will make sure
 * the tooltip stays within the current window size. As a result the
 * tooltip will adjust itself to be displayed above, below, to the left 
 * or to the right depending on what is necessary to stay within the
 * browser window. It is completely customizable as well via CSS.
 *
 * This TipTip jQuery plug-in is dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($) {
    $.fn.tipTip = function(options) {
        var defaults = {
            activation: "hover",
            keepAlive: false,
            maxWidth: "200px",
            edgeOffset: 3,
            defaultPosition: "bottom",
            delay: 250,
            fadeIn: 100,
            fadeOut: 100,
            attribute: "title",
            content: false,
            enter: function() {},
            exit: function() {}
        };
        var opts = $.extend(defaults, options);
        if ($("#tiptip_holder").length <= 0) {
            var tiptip_holder = $('<div id="tiptip_holder" style="max-width:' + opts.maxWidth + ';"></div>');
            var tiptip_content = $('<div id="tiptip_content"></div>');
            var tiptip_arrow = $('<div id="tiptip_arrow"></div>');
            $("body").append(tiptip_holder.html(tiptip_content).prepend(tiptip_arrow.html('<div id="tiptip_arrow_inner"></div>')))
        } else {
            var tiptip_holder = $("#tiptip_holder");
            var tiptip_content = $("#tiptip_content");
            var tiptip_arrow = $("#tiptip_arrow")
        }
        return this.each(function() {
            var org_elem = $(this);
            if (opts.content) {
                var org_title = opts.content
            } else {
                var org_title = org_elem.attr(opts.attribute)
            }
            if (org_title != "") {
                if (!opts.content) {
                    org_elem.removeAttr(opts.attribute)
                }
                var timeout = false;
                if (opts.activation == "hover") {
                    org_elem.hover(function() {
                        active_tiptip()
                    }, function() {
                        if (!opts.keepAlive) {
                            deactive_tiptip()
                        }
                    });
                    if (opts.keepAlive) {
                        tiptip_holder.hover(function() {}, function() {
                            deactive_tiptip()
                        })
                    }
                } else if (opts.activation == "focus") {
                    org_elem.focus(function() {
                        active_tiptip()
                    }).blur(function() {
                        deactive_tiptip()
                    })
                } else if (opts.activation == "click") {
                    org_elem.click(function() {
                        active_tiptip();
                        return false
                    }).hover(function() {}, function() {
                        if (!opts.keepAlive) {
                            deactive_tiptip()
                        }
                    });
                    if (opts.keepAlive) {
                        tiptip_holder.hover(function() {}, function() {
                            deactive_tiptip()
                        })
                    }
                }
                function active_tiptip() {
                    opts.enter.call(this);
                    tiptip_content.html(org_title);
                    tiptip_holder.hide().removeAttr("class").css("margin", "0");
                    tiptip_arrow.removeAttr("style");
                    var top = parseInt(org_elem.offset()['top']);
                    var left = parseInt(org_elem.offset()['left']);
                    var org_width = parseInt(org_elem.outerWidth());
                    var org_height = parseInt(org_elem.outerHeight());
                    var tip_w = tiptip_holder.outerWidth();
                    var tip_h = tiptip_holder.outerHeight();
                    var w_compare = Math.round((org_width - tip_w) / 2);
                    var h_compare = Math.round((org_height - tip_h) / 2);
                    var marg_left = Math.round(left + w_compare);
                    var marg_top = Math.round(top + org_height + opts.edgeOffset);
                    var t_class = "";
                    var arrow_top = "";
                    var arrow_left = Math.round(tip_w - 12) / 2;
                    if (opts.defaultPosition == "bottom") {
                        t_class = "_bottom"
                    } else if (opts.defaultPosition == "top") {
                        t_class = "_top"
                    } else if (opts.defaultPosition == "left") {
                        t_class = "_left"
                    } else if (opts.defaultPosition == "right") {
                        t_class = "_right"
                    }
                    var right_compare = (w_compare + left) < parseInt($(window).scrollLeft());
                    var left_compare = (tip_w + left) > parseInt($(window).width());
                    if ((right_compare && w_compare < 0) || (t_class == "_right" && !left_compare) || (t_class == "_left" && left < (tip_w + opts.edgeOffset + 5))) {
                        t_class = "_right";
                        arrow_top = Math.round(tip_h - 13) / 2;
                        arrow_left = -12;
                        marg_left = Math.round(left + org_width + opts.edgeOffset);
                        marg_top = Math.round(top + h_compare)
                    } else if ((left_compare && w_compare < 0) || (t_class == "_left" && !right_compare)) {
                        t_class = "_left";
                        arrow_top = Math.round(tip_h - 13) / 2;
                        arrow_left = Math.round(tip_w);
                        marg_left = Math.round(left - (tip_w + opts.edgeOffset + 5));
                        marg_top = Math.round(top + h_compare)
                    }
                    var top_compare = (top + org_height + opts.edgeOffset + tip_h + 8) > parseInt($(window).height() + $(window).scrollTop());
                    var bottom_compare = ((top + org_height) - (opts.edgeOffset + tip_h + 8)) < 0;
                    if (top_compare || (t_class == "_bottom" && top_compare) || (t_class == "_top" && !bottom_compare)) {
                        if (t_class == "_top" || t_class == "_bottom") {
                            t_class = "_top"
                        } else {
                            t_class = t_class + "_top"
                        }
                        arrow_top = tip_h;
                        marg_top = Math.round(top - (tip_h + 5 + opts.edgeOffset))
                    } else if (bottom_compare | (t_class == "_top" && bottom_compare) || (t_class == "_bottom" && !top_compare)) {
                        if (t_class == "_top" || t_class == "_bottom") {
                            t_class = "_bottom"
                        } else {
                            t_class = t_class + "_bottom"
                        }
                        arrow_top = -12;
                        marg_top = Math.round(top + org_height + opts.edgeOffset)
                    }
                    if (t_class == "_right_top" || t_class == "_left_top") {
                        marg_top = marg_top + 5
                    } else if (t_class == "_right_bottom" || t_class == "_left_bottom") {
                        marg_top = marg_top - 5
                    }
                    if (t_class == "_left_top" || t_class == "_left_bottom") {
                        marg_left = marg_left + 5
                    }
                    tiptip_arrow.css({
                        "margin-left": arrow_left + "px",
                        "margin-top": arrow_top + "px"
                    });
                    tiptip_holder.css({
                        "margin-left": marg_left + "px",
                        "margin-top": marg_top + "px"
                    }).attr("class", "tip" + t_class);
                    if (timeout) {
                        clearTimeout(timeout)
                    }
                    timeout = setTimeout(function() {
                        tiptip_holder.stop(true, true).fadeIn(opts.fadeIn)
                    }, opts.delay)
                }
                function deactive_tiptip() {
                    opts.exit.call(this);
                    if (timeout) {
                        clearTimeout(timeout)
                    }
                    tiptip_holder.fadeOut(opts.fadeOut)
                }
            }
        })
    }
}
)(jQuery);

/********* Checkbox **********/

var checkboxHeight = "25";
var radioHeight = "25";
var selectWidth = "190";

/* No need to change anything after this */

document.write('<style type="text/css">input.styled { display: none; } select.styled { position: relative; width: ' + selectWidth + 'px; opacity: 0; filter: alpha(opacity=0); z-index: 5; } .disabled { opacity: 0.5; filter: alpha(opacity=50); }</style>');

var Custom = {
    init: function() {
        var inputs = document.getElementsByTagName("input"), span = Array(), textnode, option, active;
        for (a = 0; a < inputs.length; a++) {
            if ((inputs[a].type == "checkbox" || inputs[a].type == "radio") && inputs[a].className == "styled") {
                span[a] = document.createElement("span");
                span[a].className = inputs[a].type;

                if (inputs[a].checked == true) {
                    if (inputs[a].type == "checkbox") {
                        position = "0 -" + (checkboxHeight * 2) + "px";
                        span[a].style.backgroundPosition = position;
                    } else {
                        position = "0 -" + (radioHeight * 2) + "px";
                        span[a].style.backgroundPosition = position;
                    }
                }
                inputs[a].parentNode.insertBefore(span[a], inputs[a]);
                inputs[a].onchange = Custom.clear;
                if (!inputs[a].getAttribute("disabled")) {
                    span[a].onmousedown = Custom.pushed;
                    span[a].onmouseup = Custom.check;
                } else {
                    span[a].className = span[a].className += " disabled";
                }
            }
        }
        inputs = document.getElementsByTagName("select");
        for (a = 0; a < inputs.length; a++) {
            if (inputs[a].className == "styled") {
                option = inputs[a].getElementsByTagName("option");
                active = option[0].childNodes[0].nodeValue;
                textnode = document.createTextNode(active);
                for (b = 0; b < option.length; b++) {
                    if (option[b].selected == true) {
                        textnode = document.createTextNode(option[b].childNodes[0].nodeValue);
                    }
                }
                span[a] = document.createElement("span");
                span[a].className = "select";
                span[a].id = "select" + inputs[a].name;
                span[a].appendChild(textnode);
                inputs[a].parentNode.insertBefore(span[a], inputs[a]);
                if (!inputs[a].getAttribute("disabled")) {
                    inputs[a].onchange = Custom.choose;
                } else {
                    inputs[a].previousSibling.className = inputs[a].previousSibling.className += " disabled";
                }
            }
        }
        document.onmouseup = Custom.clear;
    },
    pushed: function() {
        element = this.nextSibling;
        if (element.checked == true && element.type == "checkbox") {
            this.style.backgroundPosition = "0 -" + checkboxHeight * 3 + "px";
        } else if (element.checked == true && element.type == "radio") {
            this.style.backgroundPosition = "0 -" + radioHeight * 3 + "px";
        } else if (element.checked != true && element.type == "checkbox") {
            this.style.backgroundPosition = "0 -" + checkboxHeight + "px";
        } else {
            this.style.backgroundPosition = "0 -" + radioHeight + "px";
        }
    },
    check: function() {
        element = this.nextSibling;
        if (element.checked == true && element.type == "checkbox") {
            this.style.backgroundPosition = "0 0";
            element.checked = false;
        } else {
            if (element.type == "checkbox") {
                this.style.backgroundPosition = "0 -" + checkboxHeight * 2 + "px";
            } else {
                this.style.backgroundPosition = "0 -" + radioHeight * 2 + "px";
                group = this.nextSibling.name;
                inputs = document.getElementsByTagName("input");
                for (a = 0; a < inputs.length; a++) {
                    if (inputs[a].name == group && inputs[a] != this.nextSibling) {
                        inputs[a].previousSibling.style.backgroundPosition = "0 0";
                    }
                }
            }
            element.checked = true;
        }
    },
    clear: function() {
        inputs = document.getElementsByTagName("input");
        for (var b = 0; b < inputs.length; b++) {
            if (inputs[b].type == "checkbox" && inputs[b].checked == true && inputs[b].className == "styled") {
                inputs[b].previousSibling.style.backgroundPosition = "0 -" + checkboxHeight * 2 + "px";
            } else if (inputs[b].type == "checkbox" && inputs[b].className == "styled") {
                inputs[b].previousSibling.style.backgroundPosition = "0 0";
            } else if (inputs[b].type == "radio" && inputs[b].checked == true && inputs[b].className == "styled") {
                inputs[b].previousSibling.style.backgroundPosition = "0 -" + radioHeight * 2 + "px";
            } else if (inputs[b].type == "radio" && inputs[b].className == "styled") {
                inputs[b].previousSibling.style.backgroundPosition = "0 0";
            }
        }
    },
    choose: function() {
        option = this.getElementsByTagName("option");
        for (d = 0; d < option.length; d++) {
            if (option[d].selected == true) {
                document.getElementById("select" + this.name).childNodes[0].nodeValue = option[d].childNodes[0].nodeValue;
            }
        }
    }
}
window.onload = Custom.init;
// Autotab
/**
 * Autotab - jQuery plugin 1.1b
 * http://www.lousyllama.com/sandbox/jquery-autotab
 * 
 * Copyright (c) 2008 Matthew Miller
 * 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 * 
 * Revised: 2008-09-10 16:55:08
 */

(function($) {
    // Look for an element based on ID or name
    var check_element = function(name) {
        var obj = null;
        var check_id = $('#' + name);
        var check_name = $('input[name=' + name + ']');

        if (check_id.length)
            obj = check_id;
        else if (check_name != undefined)
            obj = check_name;

        return obj;
    };

    /**
 * autotab_magic automatically establishes autotabbing with the
 * next and previous elements as provided by :input.
 * 
 * autotab_magic should called after applying filters, if used.
 * If any filters are applied after calling autotab_magic, then
 * Autotab may not protect against brute force typing.
 * 
 * @name	autotab_magic
 * @param	focus	Applies focus on the specified element
 * @example	$(':input').autotab_magic();
 */
    $.fn.autotab_magic = function(focus) {
        for (var i = 0; i < this.length; i++) {
            var n = i + 1;
            var p = i - 1;

            if (i > 0 && n < this.length)
                $(this[i]).autotab({
                    target: $(this[n]),
                    previous: $(this[p])
                });
            else if (i > 0)
                $(this[i]).autotab({
                    previous: $(this[p])
                });
            else
                $(this[i]).autotab({
                    target: $(this[n])
                });

            // Set the focus on the specified element
            if (focus != null && (isNaN(focus) && focus == $(this[i]).attr('id')) || (!isNaN(focus) && focus == i))
                $(this[i]).focus();
        }
        return this;
    }
    ;

    /**
 * This will take any of the text that is typed and
 * format it according to the options specified.
 * 
 * Option values:
 *	format		text|number|alphanumeric|all|custom
 *	- Text			Allows all characters except numbers
 *	- Number		Allows only numbers
 *	- Alphanumeric	Allows only letters and numbers
 *	- All			Allows any and all characters
 *	- Custom		Allows developer to provide their own filter
 *
 *	uppercase	true|false
 *	- Converts a string to UPPERCASE
 * 
 *	lowercase	true|false
 *	- Converts a string to lowecase
 * 
 *	nospace		true|false
 *	- Remove spaces in the user input
 * 
 *	pattern		null|(regular expression)
 *	- Custom regular expression for the filter
 * 
 * @name	autotab_filter
 * @param	options		Can be a string, function or a list of options. If a string or
 *						function is passed, it will be assumed to be a format option.
 * @example	$('#number1, #number2, #number3').autotab_filter('number');
 * @example	$('#product_key').autotab_filter({ format: 'alphanumeric', nospace: true });
 * @example	$('#unique_id').autotab_filter({ format: 'custom', pattern: '[^0-9\.]' });
 */
    $.fn.autotab_filter = function(options) {
        var defaults = {
            format: 'all',
            uppercase: false,
            lowercase: false,
            nospace: false,
            pattern: null
        };

        if (typeof options == 'string' || typeof options == 'function')
            defaults.format = options;
        else
            $.extend(defaults, options);

        for (var i = 0; i < this.length; i++) {
            $(this[i]).bind('keyup', function(e) {
                var val = this.value;

                switch (defaults.format) {
                case 'text':
                    var pattern = new RegExp('[0-9]+','g');
                    val = val.replace(pattern, '');
                    break;

                case 'alpha':
                    var pattern = new RegExp('[^a-zA-Z]+','g');
                    val = val.replace(pattern, '');
                    break;

                case 'number':
                case 'numeric':
                    var pattern = new RegExp('[^0-9]+','g');
                    val = val.replace(pattern, '');
                    break;

                case 'alphanumeric':
                    var pattern = new RegExp('[^0-9a-zA-Z]+','g');
                    val = val.replace(pattern, '');
                    break;

                case 'custom':
                    var pattern = new RegExp(defaults.pattern,'g');
                    val = val.replace(pattern, '');
                    break;

                case 'all':
                default:
                    if (typeof defaults.format == 'function')
                        var val = defaults.format(val);

                    break;
                }

                if (defaults.nospace) {
                    var pattern = new RegExp('[ ]+','g');
                    val = val.replace(pattern, '');
                }

                if (defaults.uppercase)
                    val = val.toUpperCase();

                if (defaults.lowercase)
                    val = val.toLowerCase();

                if (val != this.value)
                    this.value = val;
            });
        }
    }
    ;

    /**
 * Provides the autotabbing mechanism for the supplied element and passes
 * any formatting options to autotab_filter.
 * 
 * Refer to autotab_filter's description for a detailed explanation of
 * the options available.
 * 
 * @name	autotab
 * @param	options
 * @example	$('#phone').autotab({ format: 'number' });
 * @example	$('#username').autotab({ format: 'alphanumeric', target: 'password' });
 * @example	$('#password').autotab({ previous: 'username', target: 'confirm' });
 */
    $.fn.autotab = function(options) {
        var defaults = {
            format: 'all',
            maxlength: 2147483647,
            uppercase: false,
            lowercase: false,
            nospace: false,
            target: null,
            previous: null,
            pattern: null
        };

        $.extend(defaults, options);

        // Sets targets to element based on the name or ID
        // passed if they are not currently objects
        if (typeof defaults.target == 'string')
            defaults.target = check_element(defaults.target);

        if (typeof defaults.previous == 'string')
            defaults.previous = check_element(defaults.previous);

        var maxlength = $(this).attr('maxlength');

        // defaults.maxlength has not changed and maxlength was specified
        if (defaults.maxlength == 2147483647 && maxlength != 2147483647)
            defaults.maxlength = maxlength;
            // defaults.maxlength overrides maxlength
        else if (defaults.maxlength > 0)
            $(this).attr('maxlength', defaults.maxlength)
            // defaults.maxlength and maxlength have not been specified
            // A target cannot be used since there is no defined maxlength
        else
            defaults.target = null;

        if (defaults.format != 'all')
            $(this).autotab_filter(defaults);

        // Go to the previous element when backspace
        // is pressed in an empty input field
        return $(this).bind('keydown', function(e) {
            if (e.which == 8 && this.value.length == 0 && defaults.previous)
                defaults.previous.focus().val(defaults.previous.val());
        }).bind('keyup', function(e) {
            /**
		 * Do not auto tab when the following keys are pressed
		 * 8:	Backspace
		 * 9:	Tab
		 * 16:	Shift
		 * 17:	Ctrl
		 * 18:	Alt
		 * 19:	Pause Break
		 * 20:	Caps Lock
		 * 27:	Esc
		 * 33:	Page Up
		 * 34:	Page Down
		 * 35:	End
		 * 36:	Home
		 * 37:	Left Arrow
		 * 38:	Up Arrow
		 * 39:	Right Arrow
		 * 40:	Down Arrow
		 * 45:	Insert
		 * 46:	Delete
		 * 144:	Num Lock
		 * 145:	Scroll Lock
		 */
            var keys = [8, 9, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 145];

            if (e.which != 8) {
                var val = $(this).val();

                if ($.inArray(e.which, keys) == -1 && val.length == defaults.maxlength && defaults.target)
                    defaults.target.focus();
            }
        });
    }
    ;

}
)(jQuery);

// Chosen, a Select Box Enhancer for jQuery and Protoype
// by Patrick Filler for Harvest, http://getharvest.com
// 
// Version 0.9.5
// Full source at https://github.com/harvesthq/chosen
// Copyright (c) 2011 Harvest http://getharvest.com

// MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
// This file is generated by `cake build`, do not edit it by hand.
(function() {
    var a;
    a = function() {
        function a() {
            this.options_index = 0,
            this.parsed = []
        }
        return a.prototype.add_node = function(a) {
            return a.nodeName === "OPTGROUP" ? this.add_group(a) : this.add_option(a)
        }
        ,
        a.prototype.add_group = function(a) {
            var b, c, d, e, f, g;
            b = this.parsed.length,
            this.parsed.push({
                array_index: b,
                group: !0,
                label: a.label,
                children: 0,
                disabled: a.disabled
            }),
            f = a.childNodes,
            g = [];
            for (d = 0,
            e = f.length; d < e; d++)
                c = f[d],
                g.push(this.add_option(c, b, a.disabled));
            return g
        }
        ,
        a.prototype.add_option = function(a, b, c) {
            if (a.nodeName === "OPTION")
                return a.text !== "" ? (b != null && (this.parsed[b].children += 1),
                this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    value: a.value,
                    text: a.text,
                    html: a.innerHTML,
                    selected: a.selected,
                    disabled: c === !0 ? c : a.disabled,
                    group_array_index: b,
                    classes: a.className,
                    style: a.style.cssText
                })) : this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    empty: !0
                }),
                this.options_index += 1
        }
        ,
        a
    }(),
    a.select_to_array = function(b) {
        var c, d, e, f, g;
        d = new a,
        g = b.childNodes;
        for (e = 0,
        f = g.length; e < f; e++)
            c = g[e],
            d.add_node(c);
        return d.parsed
    }
    ,
    this.SelectParser = a
}
).call(this),
function() {
    var a, b, c = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    };
    b = this,
    a = function() {
        function a(a, b) {
            this.form_field = a,
            this.options = b != null ? b : {},
            this.set_default_values(),
            this.is_multiple = this.form_field.multiple,
            this.default_text_default = this.is_multiple ? "Select Some Options" : "Select an Option",
            this.setup(),
            this.set_up_html(),
            this.register_observers(),
            this.finish_setup()
        }
        return a.prototype.set_default_values = function() {
            return this.click_test_action = c(function(a) {
                return this.test_active_click(a)
            }, this),
            this.activate_action = c(function(a) {
                return this.activate_field(a)
            }, this),
            this.active_field = !1,
            this.mouse_on_container = !1,
            this.results_showing = !1,
            this.result_highlighted = null,
            this.result_single_selected = null,
            this.allow_single_deselect = this.options.allow_single_deselect != null && this.form_field.options[0] != null && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : !1,
            this.disable_search_threshold = this.options.disable_search_threshold || 0,
            this.choices = 0,
            this.results_none_found = this.options.no_results_text || "No results match"
        }
        ,
        a.prototype.mouse_enter = function() {
            return this.mouse_on_container = !0
        }
        ,
        a.prototype.mouse_leave = function() {
            return this.mouse_on_container = !1
        }
        ,
        a.prototype.input_focus = function(a) {
            if (!this.active_field)
                return setTimeout(c(function() {
                    return this.container_mousedown()
                }, this), 50)
        }
        ,
        a.prototype.input_blur = function(a) {
            if (!this.mouse_on_container)
                return this.active_field = !1,
                setTimeout(c(function() {
                    return this.blur_test()
                }, this), 100)
        }
        ,
        a.prototype.result_add_option = function(a) {
            var b, c;
            return a.disabled ? "" : (a.dom_id = this.container_id + "_o_" + a.array_index,
            b = a.selected && this.is_multiple ? [] : ["active-result"],
            a.selected && b.push("result-selected"),
            a.group_array_index != null && b.push("group-option"),
            a.classes !== "" && b.push(a.classes),
            c = a.style.cssText !== "" ? ' style="' + a.style + '"' : "",
            '<li id="' + a.dom_id + '" class="' + b.join(" ") + '"' + c + ">" + a.html + "</li>")
        }
        ,
        a.prototype.results_update_field = function() {
            return this.result_clear_highlight(),
            this.result_single_selected = null,
            this.results_build()
        }
        ,
        a.prototype.results_toggle = function() {
            return this.results_showing ? this.results_hide() : this.results_show()
        }
        ,
        a.prototype.results_search = function(a) {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }
        ,
        a.prototype.keyup_checker = function(a) {
            var b, c;
            b = (c = a.which) != null ? c : a.keyCode,
            this.search_field_scale();
            switch (b) {
            case 8:
                if (this.is_multiple && this.backstroke_length < 1 && this.choices > 0)
                    return this.keydown_backstroke();
                if (!this.pending_backstroke)
                    return this.result_clear_highlight(),
                    this.results_search();
                break;
            case 13:
                a.preventDefault();
                if (this.results_showing)
                    return this.result_select(a);
                break;
            case 27:
                if (this.results_showing)
                    return this.results_hide();
                break;
            case 9:
            case 38:
            case 40:
            case 16:
            case 91:
            case 17:
                break;
            default:
                return this.results_search()
            }
        }
        ,
        a.prototype.generate_field_id = function() {
            var a;
            return a = this.generate_random_id(),
            this.form_field.id = a,
            a
        }
        ,
        a.prototype.generate_random_char = function() {
            var a, b, c;
            return a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ",
            c = Math.floor(Math.random() * a.length),
            b = a.substring(c, c + 1)
        }
        ,
        a
    }(),
    b.AbstractChosen = a
}
.call(this),
function() {
    var a, b, c, d, e = Object.prototype.hasOwnProperty, f = function(a, b) {
        function d() {
            this.constructor = a
        }
        for (var c in b)
            e.call(b, c) && (a[c] = b[c]);
        return d.prototype = b.prototype,
        a.prototype = new d,
        a.__super__ = b.prototype,
        a
    }, g = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    };
    d = this,
    a = jQuery,
    a.fn.extend({
        chosen: function(c) {
            return !a.browser.msie || a.browser.version !== "6.0" && a.browser.version !== "7.0" ? a(this).each(function(d) {
                if (!a(this).hasClass("chzn-done"))
                    return new b(this,c)
            }) : this
        }
    }),
    b = function() {
        function b() {
            b.__super__.constructor.apply(this, arguments)
        }
        return f(b, AbstractChosen),
        b.prototype.setup = function() {
            return this.form_field_jq = a(this.form_field),
            this.is_rtl = this.form_field_jq.hasClass("chzn-rtl")
        }
        ,
        b.prototype.finish_setup = function() {
            return this.form_field_jq.addClass("chzn-done")
        }
        ,
        b.prototype.set_up_html = function() {
            var b, d, e, f;
            return this.container_id = this.form_field.id.length ? this.form_field.id.replace(/(:|\.)/g, "_") : this.generate_field_id(),
            this.container_id += "_chzn",
            this.f_width = this.form_field_jq.outerWidth(),
            this.default_text = this.form_field_jq.data("placeholder") ? this.form_field_jq.data("placeholder") : this.default_text_default,
            b = a("<div />", {
                id: this.container_id,
                "class": "chzn-container" + (this.is_rtl ? " chzn-rtl" : ""),
                style: "width: " + 482 /* this.f_width */ + "px;",
                "onFocus": "myFocusMojSpan(this)"/* BART */
            }),
            this.is_multiple ? b.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop" style="left:-9000px;"><ul class="chzn-results"></ul></div>') : b.html('<a href="javascript:void(0)" class="chzn-single"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chzn-drop" style="left:-9000px;"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>'),
            this.form_field_jq.hide().after(b),
            this.container = a("#" + this.container_id),
            this.container.addClass("chzn-container-" + (this.is_multiple ? "multi" : "single")),
            this.dropdown = this.container.find("div.chzn-drop").first(),
            d = this.container.height(),
            e = this.f_width - c(this.dropdown),
            this.dropdown.css({
                width: 480 /* e */ + "px", /* BART */
                top: d + "px"
            }),
            this.search_field = this.container.find("input").first(),
            this.search_results = this.container.find("ul.chzn-results").first(),
            this.search_field_scale(),
            this.search_no_results = this.container.find("li.no-results").first(),
            this.is_multiple ? (this.search_choices = this.container.find("ul.chzn-choices").first(),
            this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chzn-search").first(),
            this.selected_item = this.container.find(".chzn-single").first(),
            f = e - c(this.search_container) - c(this.search_field),
            this.search_field.css({
                width: 450 /* f */ + "px"
            })),
            this.results_build(),
            this.set_tab_index(),
            this.form_field_jq.trigger("liszt:ready", {
                chosen: this
            })
        }
        ,
        b.prototype.register_observers = function() {
            this.container.mousedown(g(function(a) {
                return this.container_mousedown(a)
            }, this)),
            this.container.mouseup(g(function(a) {
                return this.container_mouseup(a)
            }, this)),
            this.container.mouseenter(g(function(a) {
                return this.mouse_enter(a)
            }, this)),
            this.container.mouseleave(g(function(a) {
                return this.mouse_leave(a)
            }, this)),
            this.search_results.mouseup(g(function(a) {
                return this.search_results_mouseup(a)
            }, this)),
            this.search_results.mouseover(g(function(a) {
                return this.search_results_mouseover(a)
            }, this)),
            this.search_results.mouseout(g(function(a) {
                return this.search_results_mouseout(a)
            }, this)),
            this.form_field_jq.bind("liszt:updated", g(function(a) {
                return this.results_update_field(a)
            }, this)),
            this.search_field.blur(g(function(a) {
                return this.input_blur(a)
            }, this)),
            this.search_field.keyup(g(function(a) {
                return this.keyup_checker(a)
            }, this)),
            this.search_field.keydown(g(function(a) {
                return this.keydown_checker(a)
            }, this));
            if (this.is_multiple)
                return this.search_choices.click(g(function(a) {
                    return this.choices_click(a)
                }, this)),
                this.search_field.focus(g(function(a) {
                    return this.input_focus(a)
                }, this))
        }
        ,
        b.prototype.search_field_disabled = function() {
            this.is_disabled = this.form_field_jq[0].disabled;
            if (this.is_disabled)
                return this.container.addClass("chzn-disabled"),
                this.search_field[0].disabled = !0,
                this.is_multiple || this.selected_item.unbind("focus", this.activate_action),
                this.close_field();
            this.container.removeClass("chzn-disabled"),
            this.search_field[0].disabled = !1;
            if (!this.is_multiple)
                return this.selected_item.bind("focus", this.activate_action)
        }
        ,
        b.prototype.container_mousedown = function(b) {
            var c;
            if (!this.is_disabled)
                return c = b != null ? a(b.target).hasClass("search-choice-close") : !1,
                b && b.type === "mousedown" && b.stopPropagation(),
                !this.pending_destroy_click && !c ? (this.active_field ? !this.is_multiple && b && (a(b.target)[0] === this.selected_item[0] || a(b.target).parents("a.chzn-single").length) && (b.preventDefault(),
                this.results_toggle()) : (this.is_multiple && this.search_field.val(""),
                a(document).click(this.click_test_action),
                this.results_show()),
                this.activate_field()) : this.pending_destroy_click = !1
        }
        ,
        b.prototype.container_mouseup = function(a) {
            if (a.target.nodeName === "ABBR")
                return this.results_reset(a)
        }
        ,
        b.prototype.blur_test = function(a) {
            if (!this.active_field && this.container.hasClass("chzn-container-active"))
                return this.close_field()
        }
        ,
        b.prototype.close_field = function() {
            return a(document).unbind("click", this.click_test_action),
            this.is_multiple || (this.selected_item.attr("tabindex", this.search_field.attr("tabindex")),
            this.search_field.attr("tabindex", -1)),
            this.active_field = !1,
            this.results_hide(),
            this.container.removeClass("chzn-container-active"),
            this.winnow_results_clear(),
            this.clear_backstroke(),
            this.show_search_field_default(),
            this.search_field_scale()
        }
        ,
        b.prototype.activate_field = function() {
            return !this.is_multiple && !this.active_field && (this.search_field.attr("tabindex", this.selected_item.attr("tabindex")),
            this.selected_item.attr("tabindex", -1)),
            this.container.addClass("chzn-container-active"),
            this.active_field = !0,
            this.search_field.val(this.search_field.val()),
            this.search_field.focus()
        }
        ,
        b.prototype.test_active_click = function(b) {
            return a(b.target).parents("#" + this.container_id).length ? this.active_field = !0 : this.close_field()
        }
        ,
        b.prototype.results_build = function() {
            var a, b, c, e, f;
            this.parsing = !0,
            this.results_data = d.SelectParser.select_to_array(this.form_field),
            this.is_multiple && this.choices > 0 ? (this.search_choices.find("li.search-choice").remove(),
            this.choices = 0) : this.is_multiple || (this.selected_item.find("span").text(this.default_text),
            this.form_field.options.length > this.disable_search_threshold ? this.container.removeClass("chzn-container-single-nosearch") : this.container.addClass("chzn-container-single-nosearch")),
            a = "",
            f = this.results_data;
            for (c = 0,
            e = f.length; c < e; c++)
                b = f[c],
                b.group ? a += this.result_add_group(b) : b.empty || (a += this.result_add_option(b),
                b.selected && this.is_multiple ? this.choice_build(b) : b.selected && !this.is_multiple && (this.selected_item.find("span").text(b.text),
                this.allow_single_deselect && this.single_deselect_control_build()));
            return this.search_field_disabled(),
            this.show_search_field_default(),
            this.search_field_scale(),
            this.search_results.html(a),
            this.parsing = !1
        }
        ,
        b.prototype.result_add_group = function(b) {
            return b.disabled ? "" : (b.dom_id = this.container_id + "_g_" + b.array_index,
            '<li id="' + b.dom_id + '" class="group-result">' + a("<div />").text(b.label).html() + "</li>")
        }
        ,
        b.prototype.result_do_highlight = function(a) {
            var b, c, d, e, f;
            if (a.length) {
                this.result_clear_highlight(),
                this.result_highlight = a,
                this.result_highlight.addClass("highlighted"),
                d = parseInt(this.search_results.css("maxHeight"), 10),
                f = this.search_results.scrollTop(),
                e = d + f,
                c = this.result_highlight.position().top + this.search_results.scrollTop(),
                b = c + this.result_highlight.outerHeight();
                if (b >= e)
                    return this.search_results.scrollTop(b - d > 0 ? b - d : 0);
                if (c < f)
                    return this.search_results.scrollTop(c)
            }
        }
        ,
        b.prototype.result_clear_highlight = function() {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"),
            this.result_highlight = null
        }
        ,
        b.prototype.results_show = function() {
            var a;
            return this.is_multiple || (this.selected_item.addClass("chzn-single-with-drop"),
            this.result_single_selected && this.result_do_highlight(this.result_single_selected)),
            a = this.is_multiple ? this.container.height() : this.container.height() - 1,
            this.dropdown.css({
                top: a + "px",
                left: 0
            }),
            this.results_showing = !0,
            this.search_field.focus(),
            this.search_field.val(this.search_field.val()),
            this.winnow_results()
        }
        ,
        b.prototype.results_hide = function() {
            return this.is_multiple || this.selected_item.removeClass("chzn-single-with-drop"),
            this.result_clear_highlight(),
            this.dropdown.css({
                left: "-9000px"
            }),
            this.results_showing = !1
        }
        ,
        b.prototype.set_tab_index = function(a) {
            var b;
            if (this.form_field_jq.attr("tabindex"))
                return b = this.form_field_jq.attr("tabindex"),
                this.form_field_jq.attr("tabindex", -1),
                this.is_multiple ? this.search_field.attr("tabindex", b) : (this.selected_item.attr("tabindex", b),
                this.search_field.attr("tabindex", -1))
        }
        ,
        b.prototype.show_search_field_default = function() {
            return this.is_multiple && this.choices < 1 && !this.active_field ? (this.search_field.val(this.default_text),
            this.search_field.addClass("default")) : (this.search_field.val(""),
            this.search_field.removeClass("default"))
        }
        ,
        b.prototype.search_results_mouseup = function(b) {
            var c;
            c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first();
            if (c.length)
                return this.result_highlight = c,
                this.result_select(b)
        }
        ,
        b.prototype.search_results_mouseover = function(b) {
            var c;
            c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first();
            if (c)
                return this.result_do_highlight(c)
        }
        ,
        b.prototype.search_results_mouseout = function(b) {
            if (a(b.target).hasClass("active-result"))
                return this.result_clear_highlight()
        }
        ,
        b.prototype.choices_click = function(b) {
            b.preventDefault();
            if (this.active_field && !a(b.target).hasClass("search-choice") && !this.results_showing)
                return this.results_show()
        }
        ,
        b.prototype.choice_build = function(b) {
            var c, d;
            return c = this.container_id + "_c_" + b.array_index,
            this.choices += 1,
            this.search_container.before('<li class="search-choice" id="' + c + '"><span>' + b.html + '</span><a href="javascript:void(0)" class="search-choice-close" rel="' + b.array_index + '"></a></li>'),
            d = a("#" + c).find("a").first(),
            d.click(g(function(a) {
                return this.choice_destroy_link_click(a)
            }, this))
        }
        ,
        b.prototype.choice_destroy_link_click = function(b) {
            return b.preventDefault(),
            this.is_disabled ? b.stopPropagation : (this.pending_destroy_click = !0,
            this.choice_destroy(a(b.target)))
        }
        ,
        b.prototype.choice_destroy = function(a) {
            return this.choices -= 1,
            this.show_search_field_default(),
            this.is_multiple && this.choices > 0 && this.search_field.val().length < 1 && this.results_hide(),
            this.result_deselect(a.attr("rel")),
            a.parents("li").first().remove()
        }
        ,
        b.prototype.results_reset = function(b) {
            this.form_field.options[0].selected = !0,
            this.selected_item.find("span").text(this.default_text),
            this.show_search_field_default(),
            a(b.target).remove(),
            this.form_field_jq.trigger("change");
            if (this.active_field)
                return this.results_hide()
        }
        ,
        b.prototype.result_select = function(a) {
            var b, c, d, e;
            if (this.result_highlight)
                return b = this.result_highlight,
                c = b.attr("id"),
                this.result_clear_highlight(),
                this.is_multiple ? this.result_deactivate(b) : (this.search_results.find(".result-selected").removeClass("result-selected"),
                this.result_single_selected = b),
                b.addClass("result-selected"),
                e = c.substr(c.lastIndexOf("_") + 1),
                d = this.results_data[e],
                d.selected = !0,
                this.form_field.options[d.options_index].selected = !0,
                this.is_multiple ? this.choice_build(d) : (this.selected_item.find("span").first().text(d.text),
                this.allow_single_deselect && this.single_deselect_control_build()),
                (!a.metaKey || !this.is_multiple) && this.results_hide(),
                this.search_field.val(""),
                this.form_field_jq.trigger("change"),
                this.search_field_scale()
        }
        ,
        b.prototype.result_activate = function(a) {
            return a.addClass("active-result")
        }
        ,
        b.prototype.result_deactivate = function(a) {
            return a.removeClass("active-result")
        }
        ,
        b.prototype.result_deselect = function(b) {
            var c, d;
            return d = this.results_data[b],
            d.selected = !1,
            this.form_field.options[d.options_index].selected = !1,
            c = a("#" + this.container_id + "_o_" + b),
            c.removeClass("result-selected").addClass("active-result").show(),
            this.result_clear_highlight(),
            this.winnow_results(),
            this.form_field_jq.trigger("change"),
            this.search_field_scale()
        }
        ,
        b.prototype.single_deselect_control_build = function() {
            if (this.allow_single_deselect && this.selected_item.find("abbr").length < 1)
                return this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>')
        }
        ,
        b.prototype.winnow_results = function() {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
            this.no_results_clear(),
            i = 0,
            j = this.search_field.val() === this.default_text ? "" : a("<div/>").text(a.trim(this.search_field.val())).html(),
            f = new RegExp("^" + j.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"),"i"),
            m = new RegExp(j.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"),"i"),
            r = this.results_data;
            for (n = 0,
            p = r.length; n < p; n++) {
                c = r[n];
                if (!c.disabled && !c.empty)
                    if (c.group)
                        a("#" + c.dom_id).css("display", "none");
                    else if (!this.is_multiple || !c.selected) {
                        b = !1,
                        h = c.dom_id,
                        g = a("#" + h);
                        if (f.test(c.html))
                            b = !0,
                            i += 1;
                        else if (c.html.indexOf(" ") >= 0 || c.html.indexOf("[") === 0) {
                            e = c.html.replace(/\[|\]/g, "").split(" ");
                            if (e.length)
                                for (o = 0,
                                q = e.length; o < q; o++)
                                    d = e[o],
                                    f.test(d) && (b = !0,
                                    i += 1)
                        }
                        b ? (j.length ? (k = c.html.search(m),
                        l = c.html.substr(0, k + j.length) + "</em>" + c.html.substr(k + j.length),
                        l = l.substr(0, k) + "<em>" + l.substr(k)) : l = c.html,
                        g.html(l),
                        this.result_activate(g),
                        c.group_array_index != null && a("#" + this.results_data[c.group_array_index].dom_id).css("display", "list-item")) : (this.result_highlight && h === this.result_highlight.attr("id") && this.result_clear_highlight(),
                        this.result_deactivate(g))
                    }
            }
            return i < 1 && j.length ? this.no_results(j) : this.winnow_results_set_highlight()
        }
        ,
        b.prototype.winnow_results_clear = function() {
            var b, c, d, e, f;
            this.search_field.val(""),
            c = this.search_results.find("li"),
            f = [];
            for (d = 0,
            e = c.length; d < e; d++)
                b = c[d],
                b = a(b),
                f.push(b.hasClass("group-result") ? b.css("display", "auto") : !this.is_multiple || !b.hasClass("result-selected") ? this.result_activate(b) : void 0);
            return f
        }
        ,
        b.prototype.winnow_results_set_highlight = function() {
            var a, b;
            if (!this.result_highlight) {
                b = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"),
                a = b.length ? b.first() : this.search_results.find(".active-result").first();
                if (a != null)
                    return this.result_do_highlight(a)
            }
        }
        ,
        b.prototype.no_results = function(b) {
            var c;
            return c = a('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'),
            c.find("span").first().html(b),
            this.search_results.append(c)
        }
        ,
        b.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove()
        }
        ,
        b.prototype.keydown_arrow = function() {
            var b, c;
            this.result_highlight ? this.results_showing && (c = this.result_highlight.nextAll("li.active-result").first(),
            c && this.result_do_highlight(c)) : (b = this.search_results.find("li.active-result").first(),
            b && this.result_do_highlight(a(b)));
            if (!this.results_showing)
                return this.results_show()
        }
        ,
        b.prototype.keyup_arrow = function() {
            var a;
            if (!this.results_showing && !this.is_multiple)
                return this.results_show();
            if (this.result_highlight)
                return a = this.result_highlight.prevAll("li.active-result"),
                a.length ? this.result_do_highlight(a.first()) : (this.choices > 0 && this.results_hide(),
                this.result_clear_highlight())
        }
        ,
        b.prototype.keydown_backstroke = function() {
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()),
            this.clear_backstroke()) : (this.pending_backstroke = this.search_container.siblings("li.search-choice").last(),
            this.pending_backstroke.addClass("search-choice-focus"))
        }
        ,
        b.prototype.clear_backstroke = function() {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"),
            this.pending_backstroke = null
        }
        ,
        b.prototype.keydown_checker = function(a) {
            var b, c;
            b = (c = a.which) != null ? c : a.keyCode,
            this.search_field_scale(),
            b !== 8 && this.pending_backstroke && this.clear_backstroke();
            switch (b) {
            case 8:
                this.backstroke_length = this.search_field.val().length;
                break;
            case 9:
                this.results_showing && !this.is_multiple && this.result_select(a),
                this.mouse_on_container = !1;
                break;
            case 13:
                a.preventDefault();
                break;
            case 38:
                a.preventDefault(),
                this.keyup_arrow();
                break;
            case 40:
                this.keydown_arrow()
            }
        }
        ,
        b.prototype.search_field_scale = function() {
            var b, c, d, e, f, g, h, i, j;
            if (this.is_multiple) {
                d = 0,
                h = 0,
                f = "position:absolute; left: -1000px; top: -1000px; display:none;",
                g = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"];
                for (i = 0,
                j = g.length; i < j; i++)
                    e = g[i],
                    f += e + ":" + this.search_field.css(e) + ";";
                return c = a("<div />", {
                    style: f
                }),
                c.text(this.search_field.val()),
                a("body").append(c),
                h = c.width() + 25,
                c.remove(),
                h > this.f_width - 10 && (h = this.f_width - 10),
                this.search_field.css({
                    width: h + "px"
                }),
                b = this.container.height(),
                this.dropdown.css({
                    top: b + "px"
                })
            }
        }
        ,
        b.prototype.generate_random_id = function() {
            var b;
            b = "sel" + this.generate_random_char() + this.generate_random_char() + this.generate_random_char();
            while (a("#" + b).length > 0)
                b += this.generate_random_char();
            return b
        }
        ,
        b
    }(),
    c = function(a) {
        var b;
        return b = a.outerWidth() - a.width()
    }
    ,
    d.get_side_border_padding = c
}
.call(this)

/*
 * jQuery autoResize (textarea auto-resizer)
 * @copyright James Padolsey http://james.padolsey.com
 * @version 1.04
 */
/*
(function(a){a.fn.autoResize=function(j){var b=a.extend({onResize:function(){},animate:true,animateDuration:150,animateCallback:function(){},extraSpace:20,limit:1000},j);this.filter('textarea').each(function(){var c=a(this).css({resize:'none','overflow-y':'hidden'}),k=c.height(),f=(function(){var l=['height','width','lineHeight','textDecoration','letterSpacing'],h={};a.each(l,function(d,e){h[e]=c.css(e)});return c.clone().removeAttr('id').removeAttr('name').css({position:'absolute',top:0,left:-9999}).css(h).attr('tabIndex','-1').insertBefore(c)})(),i=null,g=function(){f.height(0).val(a(this).val()).scrollTop(10000);var d=Math.max(f.scrollTop(),k)+b.extraSpace,e=a(this).add(f);if(i===d){return}i=d;if(d>=b.limit){a(this).css('overflow-y','');return}b.onResize.call(this);b.animate&&c.css('display')==='block'?e.stop().animate({height:d},b.animateDuration,b.animateCallback):e.height(d)};c.unbind('.dynSiz').bind('keyup.dynSiz',g).bind('keydown.dynSiz',g).bind('change.dynSiz',g)});return this}})(jQuery);
*/
/***************************/
//@Author: Adrian "yEnS" Mato Gondelle & Ivan Guardado Castro
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

$(document).ready(function() {
    //global vars
    var form = $("#customForm");
    var name = $("#name");
    var nameInfo = $("#nameInfo");
    var email = $("#email");
    var emailInfo = $("#emailInfo");
    var pass1 = $("#pass1");
    var pass1Info = $("#pass1Info");
    var pass2 = $("#pass2");
    var pass2Info = $("#pass2Info");
    var message = $("#message");

    //On blur
    name.blur(validateName);
    email.blur(validateEmail);
    pass1.blur(validatePass1);
    pass2.blur(validatePass2);
    //On key press
    name.keyup(validateName);
    pass1.keyup(validatePass1);
    pass2.keyup(validatePass2);
    message.keyup(validateMessage);
    //On Submitting
    form.submit(function() {
        if (validateName() & validateEmail() & validatePass1() & validatePass2() & validateMessage())
            return true
        else
            return false;
    });

    //validation functions
    function validateEmail() {
        //testing regular expression
        var a = $("#email").val();
        var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
        //if it's valid email
        if (filter.test(a)) {
            email.removeClass("error");
            emailInfo.text("Valid E-mail please, you will need it to log in!");
            emailInfo.removeClass("error");
            return true;
        }//if it's NOT valid
        else {
            email.addClass("error");
            emailInfo.text("Stop cowboy! Type a valid e-mail please :P");
            emailInfo.addClass("error");
            return false;
        }
    }
    function validateName() {
        //if it's NOT valid
        if (name.val().length < 4) {
            name.addClass("error");
            nameInfo.text("We want names with more than 3 letters!");
            nameInfo.addClass("error");
            return false;
        }//if it's valid
        else {
            name.removeClass("error");
            nameInfo.text("What's your name?");
            nameInfo.removeClass("error");
            return true;
        }
    }
    function validatePass1() {
        var a = $("#password1");
        var b = $("#password2");

        //it's NOT valid
        if (pass1.val().length < 5) {
            pass1.addClass("error");
            pass1Info.text("Ey! Remember: At least 5 characters: letters, numbers and '_'");
            pass1Info.addClass("error");
            return false;
        }//it's valid
        else {
            pass1.removeClass("error");
            pass1Info.text("At least 5 characters: letters, numbers and '_'");
            pass1Info.removeClass("error");
            validatePass2();
            return true;
        }
    }
    function validatePass2() {
        var a = $("#password1");
        var b = $("#password2");
        //are NOT valid
        if (pass1.val() != pass2.val()) {
            pass2.addClass("error");
            pass2Info.text("Passwords doesn't match!");
            pass2Info.addClass("error");
            return false;
        }//are valid
        else {
            pass2.removeClass("error");
            pass2Info.text("Confirm password");
            pass2Info.removeClass("error");
            return true;
        }
    }
    function validateMessage() {
        //it's NOT valid
        if (message.val().length < 10) {
            message.addClass("error");
            return false;
        }//it's valid
        else {
            message.removeClass("error");
            return true;
        }
    }
});

/** jgrowl minimized **/

(function($) {
    $.jGrowl = function(m, o) {
        if ($('#jGrowl').size() == 0)
            $('<div id="jGrowl"></div>').addClass((o && o.position) ? o.position : $.jGrowl.defaults.position).appendTo('body');
        $('#jGrowl').jGrowl(m, o);
    }
    ;
    $.fn.jGrowl = function(m, o) {
        if ($.isFunction(this.each)) {
            var args = arguments;
            return this.each(function() {
                var self = this;
                if ($(this).data('jGrowl.instance') == undefined) {
                    $(this).data('jGrowl.instance', $.extend(new $.fn.jGrowl(), {
                        notifications: [],
                        element: null,
                        interval: null
                    }));
                    $(this).data('jGrowl.instance').startup(this);
                }
                if ($.isFunction($(this).data('jGrowl.instance')[m])) {
                    $(this).data('jGrowl.instance')[m].apply($(this).data('jGrowl.instance'), $.makeArray(args).slice(1));
                } else {
                    $(this).data('jGrowl.instance').create(m, o);
                }
            });
        }
        ;
    }
    ;
    $.extend($.fn.jGrowl.prototype, {
        defaults: {
            pool: 0,
            header: '',
            group: '',
            sticky: false,
            position: 'top-right',
            glue: 'after',
            theme: 'default',
            themeState: 'highlight',
            corners: '10px',
            check: 250,
            life: 3000,
            closeDuration: 'normal',
            openDuration: 'normal',
            easing: 'swing',
            closer: true,
            closeTemplate: '&times;',
            closerTemplate: '<div>[ close all ]</div>',
            log: function(e, m, o) {},
            beforeOpen: function(e, m, o) {},
            afterOpen: function(e, m, o) {},
            open: function(e, m, o) {},
            beforeClose: function(e, m, o) {},
            close: function(e, m, o) {},
            animateOpen: {
                opacity: 'show'
            },
            animateClose: {
                opacity: 'hide'
            }
        },
        notifications: [],
        element: null,
        interval: null,
        create: function(message, o) {
            var o = $.extend({}, this.defaults, o);
            if (typeof o.speed !== 'undefined') {
                o.openDuration = o.speed;
                o.closeDuration = o.speed;
            }
            this.notifications.push({
                message: message,
                options: o
            });
            o.log.apply(this.element, [this.element, message, o]);
        },
        render: function(notification) {
            var self = this;
            var message = notification.message;
            var o = notification.options;
            var notification = $('<div class="jGrowl-notification ' + o.themeState + ' ui-corner-all' + ((o.group != undefined && o.group != '') ? ' ' + o.group : '') + '">' + '<div class="jGrowl-close">' + o.closeTemplate + '</div>' + '<div class="jGrowl-header">' + o.header + '</div>' + '<div class="jGrowl-message">' + message + '</div></div>').data("jGrowl", o).addClass(o.theme).children('div.jGrowl-close').bind("click.jGrowl", function() {
                $(this).parent().trigger('jGrowl.close');
            }).parent();
            $(notification).bind("mouseover.jGrowl", function() {
                $('div.jGrowl-notification', self.element).data("jGrowl.pause", true);
            }).bind("mouseout.jGrowl", function() {
                $('div.jGrowl-notification', self.element).data("jGrowl.pause", false);
            }).bind('jGrowl.beforeOpen', function() {
                if (o.beforeOpen.apply(notification, [notification, message, o, self.element]) != false) {
                    $(this).trigger('jGrowl.open');
                }
            }).bind('jGrowl.open', function() {
                if (o.open.apply(notification, [notification, message, o, self.element]) != false) {
                    if (o.glue == 'after') {
                        $('div.jGrowl-notification:last', self.element).after(notification);
                    } else {
                        $('div.jGrowl-notification:first', self.element).before(notification);
                    }
                    $(this).animate(o.animateOpen, o.openDuration, o.easing, function() {
                        if ($.browser.msie && (parseInt($(this).css('opacity'), 10) === 1 || parseInt($(this).css('opacity'), 10) === 0))
                            this.style.removeAttribute('filter');
                        if ($(this).data("jGrowl") != null)
                            $(this).data("jGrowl").created = new Date();
                        $(this).trigger('jGrowl.afterOpen');
                    });
                }
            }).bind('jGrowl.afterOpen', function() {
                o.afterOpen.apply(notification, [notification, message, o, self.element]);
            }).bind('jGrowl.beforeClose', function() {
                if (o.beforeClose.apply(notification, [notification, message, o, self.element]) != false)
                    $(this).trigger('jGrowl.close');
            }).bind('jGrowl.close', function() {
                $(this).data('jGrowl.pause', true);
                $(this).animate(o.animateClose, o.closeDuration, o.easing, function() {
                    if ($.isFunction(o.close)) {
                        if (o.close.apply(notification, [notification, message, o, self.element]) !== false)
                            $(this).remove();
                    } else {
                        $(this).remove();
                    }
                });
            }).trigger('jGrowl.beforeOpen');
            if (o.corners != '' && $.fn.corner != undefined)
                $(notification).corner(o.corners);
            if ($('div.jGrowl-notification:parent', self.element).size() > 1 && $('div.jGrowl-closer', self.element).size() == 0 && this.defaults.closer != false) {
                $(this.defaults.closerTemplate).addClass('jGrowl-closer ui-state-highlight ui-corner-all').addClass(this.defaults.theme).appendTo(self.element).animate(this.defaults.animateOpen, this.defaults.speed, this.defaults.easing).bind("click.jGrowl", function() {
                    $(this).siblings().trigger("jGrowl.beforeClose");
                    if ($.isFunction(self.defaults.closer)) {
                        self.defaults.closer.apply($(this).parent()[0], [$(this).parent()[0]]);
                    }
                });
            }
            ;
        },
        update: function() {
            $(this.element).find('div.jGrowl-notification:parent').each(function() {
                if ($(this).data("jGrowl") != undefined && $(this).data("jGrowl").created != undefined && ($(this).data("jGrowl").created.getTime() + parseInt($(this).data("jGrowl").life)) < (new Date()).getTime() && $(this).data("jGrowl").sticky != true && ($(this).data("jGrowl.pause") == undefined || $(this).data("jGrowl.pause") != true)) {
                    $(this).trigger('jGrowl.beforeClose');
                }
            });
            if (this.notifications.length > 0 && (this.defaults.pool == 0 || $(this.element).find('div.jGrowl-notification:parent').size() < this.defaults.pool))
                this.render(this.notifications.shift());
            if ($(this.element).find('div.jGrowl-notification:parent').size() < 2) {
                $(this.element).find('div.jGrowl-closer').animate(this.defaults.animateClose, this.defaults.speed, this.defaults.easing, function() {
                    $(this).remove();
                });
            }
        },
        startup: function(e) {
            this.element = $(e).addClass('jGrowl').append('<div class="jGrowl-notification"></div>');
            this.interval = setInterval(function() {
                $(e).data('jGrowl.instance').update();
            }, parseInt(this.defaults.check));
            if ($.browser.msie && parseInt($.browser.version) < 7 && !window["XMLHttpRequest"]) {
                $(this.element).addClass('ie6');
            }
        },
        shutdown: function() {
            $(this.element).removeClass('jGrowl').find('div.jGrowl-notification').remove();
            clearInterval(this.interval);
        },
        close: function() {
            $(this.element).find('div.jGrowl-notification').each(function() {
                $(this).trigger('jGrowl.beforeClose');
            });
        }
    });
    $.jGrowl.defaults = $.fn.jGrowl.prototype.defaults;
}
)(jQuery);

// jQuery Alert Dialogs Plugin
//
// Version 1.1
//
// Cory S.N. LaViska
// A Beautiful Site (http://abeautifulsite.net/)
// 14 May 2009
//
// Website: http://abeautifulsite.net/blog/2008/12/jquery-alert-dialogs/
//
// Usage:
//		jAlert( message, [title, callback] )
//		jConfirm( message, [title, callback] )
//		jPrompt( message, [value, title, callback] )
// 
// History:
//
//		1.00 - Released (29 December 2008)
//
//		1.01 - Fixed bug where unbinding would destroy all resize events
//
// License:
// 
// This plugin is dual-licensed under the GNU General Public License and the MIT License and
// is copyright 2008 A Beautiful Site, LLC. 
//
(function($) {

    $.alerts = {

        // These properties can be read/written by accessing $.alerts.propertyName from your scripts at any time

        verticalOffset: -75,
        // vertical offset of the dialog from center screen, in pixels
        horizontalOffset: 0,
        // horizontal offset of the dialog from center screen, in pixels/
        repositionOnResize: true,
        // re-centers the dialog on window resize
        overlayOpacity: .01,
        // transparency level of overlay
        overlayColor: '#FFF',
        // base color of overlay
        draggable: true,
        // make the dialogs draggable (requires UI Draggables plugin)
        okButton: '&nbsp;OK&nbsp;',
        // text for the OK button
        cancelButton: '&nbsp;Cancel&nbsp;',
        // text for the Cancel button
        dialogClass: null,
        // if specified, this class will be applied to all dialogs

        // Public methods

        alert: function(message, title, callback) {
            if (title == null)
                title = 'Alert';
            $.alerts._show(title, message, null, 'alert', function(result) {
                if (callback)
                    callback(result);
            });
        },

        confirm: function(message, title, callback) {
            if (title == null)
                title = 'Confirm';
            $.alerts._show(title, message, null, 'confirm', function(result) {
                if (callback)
                    callback(result);
            });
        },

        prompt: function(message, value, title, callback) {
            if (title == null)
                title = 'Prompt';
            $.alerts._show(title, message, value, 'prompt', function(result) {
                if (callback)
                    callback(result);
            });
        },

        // Private methods

        _show: function(title, msg, value, type, callback) {

            $.alerts._hide();
            $.alerts._overlay('show');

            $("BODY").append('<div id="popup_container">' + '<h1 id="popup_title"></h1>' + '<div id="popup_content">' + '<div id="popup_message"></div>' + '</div>' + '</div>');

            if ($.alerts.dialogClass)
                $("#popup_container").addClass($.alerts.dialogClass);

            // IE6 Fix
            var pos = ($.browser.msie && parseInt($.browser.version) <= 6) ? 'absolute' : 'fixed';

            $("#popup_container").css({
                position: pos,
                zIndex: 99999,
                padding: 0,
                margin: 0
            });

            $("#popup_title").text(title);
            $("#popup_content").addClass(type);
            $("#popup_message").text(msg);
            $("#popup_message").html($("#popup_message").text().replace(/\n/g, '<br />'));

            $("#popup_container").css({
                minWidth: $("#popup_container").outerWidth(),
                maxWidth: $("#popup_container").outerWidth()
            });

            $.alerts._reposition();
            $.alerts._maintainPosition(true);

            switch (type) {
            case 'alert':
                $("#popup_message").after('<div id="popup_panel"><input type="button" class="button-a gray" value="' + $.alerts.okButton + '" id="popup_ok" /></div>');
                $("#popup_ok").click(function() {
                    $.alerts._hide();
                    callback(true);
                });
                $("#popup_ok").focus().keypress(function(e) {
                    if (e.keyCode == 13 || e.keyCode == 27)
                        $("#popup_ok").trigger('click');
                });
                break;
            case 'confirm':
                $("#popup_message").after('<div id="popup_panel"><input type="button" class="button-a gray" value="' + $.alerts.okButton + '" id="popup_ok" /> <input type="button" class="button-a blue" value="' + $.alerts.cancelButton + '" id="popup_cancel" /></div>');
                $("#popup_ok").click(function() {
                    $.alerts._hide();
                    if (callback)
                        callback(true);
                });
                $("#popup_cancel").click(function() {
                    $.alerts._hide();
                    if (callback)
                        callback(false);
                });
                $("#popup_ok").focus();
                $("#popup_ok, #popup_cancel").keypress(function(e) {
                    if (e.keyCode == 13)
                        $("#popup_ok").trigger('click');
                    if (e.keyCode == 27)
                        $("#popup_cancel").trigger('click');
                });
                break;
            case 'prompt':
                $("#popup_message").append('<br /><input type="text" id="popup_prompt" class="promt_input " />').after('<div id="popup_panel"><input type="button" class="button-a gray" value="' + $.alerts.okButton + '" id="popup_ok" /> <input type="button" class="button-a blue" value="' + $.alerts.cancelButton + '" id="popup_cancel" /></div>');
                $("#popup_prompt").width($("#popup_message").width());
                $("#popup_ok").click(function() {
                    var val = $("#popup_prompt").val();
                    $.alerts._hide();
                    if (callback)
                        callback(val);
                });
                $("#popup_cancel").click(function() {
                    $.alerts._hide();
                    if (callback)
                        callback(null);
                });
                $("#popup_prompt, #popup_ok, #popup_cancel").keypress(function(e) {
                    if (e.keyCode == 13)
                        $("#popup_ok").trigger('click');
                    if (e.keyCode == 27)
                        $("#popup_cancel").trigger('click');
                });
                if (value)
                    $("#popup_prompt").val(value);
                $("#popup_prompt").focus().select();
                break;
            }

            // Make draggable
            if ($.alerts.draggable) {
                try {
                    $("#popup_container").draggable({
                        handle: $("#popup_title")
                    });
                    $("#popup_title").css({
                        cursor: 'move'
                    });
                } catch (e) {/* requires jQuery UI draggables */
                }
            }
        },

        _hide: function() {
            $("#popup_container").remove();
            $.alerts._overlay('hide');
            $.alerts._maintainPosition(false);
        },

        _overlay: function(status) {
            switch (status) {
            case 'show':
                $.alerts._overlay('hide');
                $("BODY").append('<div id="popup_overlay"></div>');
                $("#popup_overlay").css({
                    position: 'absolute',
                    zIndex: 99998,
                    top: '0px',
                    left: '0px',
                    width: '100%',
                    height: $(document).height(),
                    background: $.alerts.overlayColor,
                    opacity: $.alerts.overlayOpacity
                });
                break;
            case 'hide':
                $("#popup_overlay").remove();
                break;
            }
        },

        _reposition: function() {
            var top = (($(window).height() / 2) - ($("#popup_container").outerHeight() / 2)) + $.alerts.verticalOffset;
            var left = (($(window).width() / 2) - ($("#popup_container").outerWidth() / 2)) + $.alerts.horizontalOffset;
            if (top < 0)
                top = 0;
            if (left < 0)
                left = 0;

            // IE6 fix
            if ($.browser.msie && parseInt($.browser.version) <= 6)
                top = top + $(window).scrollTop();

            $("#popup_container").css({
                top: top + 'px',
                left: left + 'px'
            });
            $("#popup_overlay").height($(document).height());
        },

        _maintainPosition: function(status) {
            if ($.alerts.repositionOnResize) {
                switch (status) {
                case true:
                    $(window).bind('resize', $.alerts._reposition);
                    break;
                case false:
                    $(window).unbind('resize', $.alerts._reposition);
                    break;
                }
            }
        }

    }

    // Shortuct functions
    jAlert = function(message, title, callback) {
        $.alerts.alert(message, title, callback);
    }

    jConfirm = function(message, title, callback) {
        $.alerts.confirm(message, title, callback);
    }
    ;

    jPrompt = function(message, value, title, callback) {
        $.alerts.prompt(message, value, title, callback);
    }
    ;

}
)(jQuery);

/*
 *  SliderNav - A Simple Content Slider with a Navigation Bar
 *  Copyright 2010 Monjurul Dolon, http://mdolon.com/
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://devgrow.com/slidernav
 */
$.fn.sliderNav = function(options) {
    var defaults = {
        items: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        debug: false,
        height: null,
        arrows: true
    };
    var opts = $.extend(defaults, options);
    var o = $.meta ? $.extend({}, opts, $$.data()) : opts;
    var slider = $(this);
    $(slider).addClass('slider');
    $('.slider-content li:first', slider).addClass('selected');
    $(slider).append('<div class="slider-nav"><ul></ul></div>');
    for (var i in o.items)
        $('.slider-nav ul', slider).append("<li><a alt='#" + o.items[i] + "'>" + o.items[i] + "</a></li>");
    var height = $('.slider-nav', slider).height();
    if (o.height)
        height = o.height;
    $('.slider-content, .slider-nav', slider).css('height', height);
    if (o.debug)
        $(slider).append('<div id="debug">Scroll Offset: <span>0</span></div>');
    $('.slider-nav a', slider).mouseover(function(event) {
        var target = $(this).attr('alt');
        var cOffset = $('.slider-content', slider).offset().top;
        var tOffset = $('.slider-content ' + target, slider).offset().top;
        var height = $('.slider-nav', slider).height();
        if (o.height)
            height = o.height;
        var pScroll = (tOffset - cOffset) - height / 8;
        $('.slider-content li', slider).removeClass('selected');
        $(target).addClass('selected');
        $('.slider-content', slider).stop().animate({
            scrollTop: '+=' + pScroll + 'px'
        });
        if (o.debug)
            $('#debug span', slider).html(tOffset);
    });
    if (o.arrows) {
        $('.slider-nav', slider).css('top', '20px');
        $(slider).prepend('<div class="slide-up end"><span class="arrow-sl up-sl"></span></div>');
        $(slider).append('<div class="slide-down"><span class="arrow-sl down-sl"></span></div>');
        $('.slide-down', slider).click(function() {
            $('.slider-content', slider).animate({
                scrollTop: "+=" + height + "px"
            }, 500);
        });
        $('.slide-up', slider).click(function() {
            $('.slider-content', slider).animate({
                scrollTop: "-=" + height + "px"
            }, 500);
        });
    }
}
;

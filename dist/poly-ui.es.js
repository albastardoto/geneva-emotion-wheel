typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const tn = 2, de = "[", _e = "[!", ve = "]", $t = {}, w = /* @__PURE__ */ Symbol(), Yt = !1;
var en = Array.isArray, nn = Array.prototype.indexOf, rn = Array.from, At = Object.keys, Rt = Object.defineProperty, ut = Object.getOwnPropertyDescriptor, sn = Object.prototype, fn = Array.prototype, ln = Object.getPrototypeOf, ie = Object.isExtensible;
function un(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function pe() {
  var t, e, n = new Promise((r, s) => {
    t = r, e = s;
  });
  return { promise: n, resolve: t, reject: e };
}
const y = 2, $e = 4, Jt = 8, on = 1 << 24, H = 16, rt = 32, J = 64, Lt = 128, D = 512, b = 1024, A = 2048, I = 4096, G = 8192, B = 16384, Zt = 32768, Ct = 65536, fe = 1 << 17, ge = 1 << 18, st = 1 << 19, an = 1 << 20, nt = 32768, Bt = 1 << 21, Qt = 1 << 22, W = 1 << 23, qt = /* @__PURE__ */ Symbol("$state"), cn = /* @__PURE__ */ Symbol("legacy props"), lt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Mt = 8;
function hn() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function dn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function _n() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function vn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function pn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function $n() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function gn() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Xt(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function yn() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let S = !1;
function Et(t) {
  S = t;
}
let g;
function ot(t) {
  if (t === null)
    throw Xt(), $t;
  return g = t;
}
function ye() {
  return ot(/* @__PURE__ */ it(g));
}
function wn(t) {
  if (S) {
    if (/* @__PURE__ */ it(g) !== null)
      throw Xt(), $t;
    g = t;
  }
}
function mn(t = 1) {
  if (S) {
    for (var e = t, n = g; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ it(n);
    g = n;
  }
}
function bn(t = !0) {
  for (var e = 0, n = g; ; ) {
    if (n.nodeType === Mt) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === ve) {
        if (e === 0) return n;
        e -= 1;
      } else (r === de || r === _e) && (e += 1);
    }
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ it(n)
    );
    t && n.remove(), n = s;
  }
}
function we(t) {
  return t === this.v;
}
function En(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function xn(t) {
  return !En(t, this.v);
}
let Tn = !1, F = null;
function at(t) {
  F = t;
}
function me(t, e = !1, n) {
  F = {
    p: F,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function be(t) {
  var e = (
    /** @type {ComponentContext} */
    F
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Vn(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, F = e.p, t ?? /** @type {T} */
  {};
}
function Ee() {
  return !0;
}
let X = [];
function xe() {
  var t = X;
  X = [], un(t);
}
function te(t) {
  if (X.length === 0 && !vt) {
    var e = X;
    queueMicrotask(() => {
      e === X && xe();
    });
  }
  X.push(t);
}
function Sn() {
  for (; X.length > 0; )
    xe();
}
function Te(t) {
  var e = v;
  if (e === null)
    return _.f |= W, t;
  if ((e.f & Zt) === 0) {
    if ((e.f & Lt) === 0)
      throw t;
    e.b.error(t);
  } else
    ct(t, e);
}
function ct(t, e) {
  for (; e !== null; ) {
    if ((e.f & Lt) !== 0)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t;
}
const xt = /* @__PURE__ */ new Set();
let $ = null, N = null, C = [], It = null, Vt = !1, vt = !1;
class O {
  committed = !1;
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #e = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #t = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #u = 0;
  /**
   * The number of async effects that are currently in flight, _not_ inside a pending boundary
   */
  #s = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #o = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #f = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #r = /* @__PURE__ */ new Set();
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  is_fork = !1;
  is_deferred() {
    return this.is_fork || this.#s > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    C = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of e)
      this.#n(r, n);
    this.is_fork || this.#a(), this.is_deferred() ? (this.#i(n.effects), this.#i(n.render_effects)) : ($ = null, le(n.render_effects), le(n.effects), this.#o?.resolve()), N = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #n(e, n) {
    e.f ^= b;
    for (var r = e.first; r !== null; ) {
      var s = r.f, i = (s & (rt | J)) !== 0, f = i && (s & b) !== 0, l = f || (s & G) !== 0 || this.skipped_effects.has(r);
      if ((r.f & Lt) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: []
      }), !l && r.fn !== null) {
        i ? r.f ^= b : (s & $e) !== 0 ? n.effects.push(r) : bt(r) && ((r.f & H) !== 0 && this.#f.add(r), wt(r));
        var u = r.first;
        if (u !== null) {
          r = u;
          continue;
        }
      }
      var o = r.parent;
      for (r = r.next; r === null && o !== null; )
        o === n.effect && (this.#i(n.effects), this.#i(n.render_effects), n = /** @type {EffectTarget} */
        n.parent), r = o.next, o = o.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #i(e) {
    for (const n of e)
      (n.f & A) !== 0 ? this.#f.add(n) : (n.f & I) !== 0 && this.#r.add(n), this.#l(n.deps), E(n, b);
  }
  /**
   * @param {Value[] | null} deps
   */
  #l(e) {
    if (e !== null)
      for (const n of e)
        (n.f & y) === 0 || (n.f & nt) === 0 || (n.f ^= nt, this.#l(
          /** @type {Derived} */
          n.deps
        ));
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    this.previous.has(e) || this.previous.set(e, n), (e.f & W) === 0 && (this.current.set(e, e.v), N?.set(e, e.v));
  }
  activate() {
    $ = this, this.apply();
  }
  deactivate() {
    $ === this && ($ = null, N = null);
  }
  flush() {
    if (this.activate(), C.length > 0) {
      if (Se(), $ !== null && $ !== this)
        return;
    } else this.#u === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of this.#t) e(this);
    this.#t.clear();
  }
  #a() {
    if (this.#s === 0) {
      for (const e of this.#e) e();
      this.#e.clear();
    }
    this.#u === 0 && this.#c();
  }
  #c() {
    if (xt.size > 1) {
      this.previous.clear();
      var e = N, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: []
      };
      for (const i of xt) {
        if (i === this) {
          n = !1;
          continue;
        }
        const f = [];
        for (const [u, o] of this.current) {
          if (i.current.has(u))
            if (n && o !== i.current.get(u))
              i.current.set(u, o);
            else
              continue;
          f.push(u);
        }
        if (f.length === 0)
          continue;
        const l = [...i.current.keys()].filter((u) => !this.current.has(u));
        if (l.length > 0) {
          var s = C;
          C = [];
          const u = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
          for (const c of f)
            ke(c, l, u, o);
          if (C.length > 0) {
            $ = i, i.apply();
            for (const c of C)
              i.#n(c, r);
            i.deactivate();
          }
          C = s;
        }
      }
      $ = null, N = e;
    }
    this.committed = !0, xt.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    this.#u += 1, e && (this.#s += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    this.#u -= 1, e && (this.#s -= 1), this.revive();
  }
  revive() {
    for (const e of this.#f)
      this.#r.delete(e), E(e, A), ht(e);
    for (const e of this.#r)
      E(e, I), ht(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    this.#e.add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    this.#t.add(e);
  }
  settled() {
    return (this.#o ??= pe()).promise;
  }
  static ensure() {
    if ($ === null) {
      const e = $ = new O();
      xt.add($), vt || O.enqueue(() => {
        $ === e && e.flush();
      });
    }
    return $;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    te(e);
  }
  apply() {
  }
}
function Ht(t) {
  var e = vt;
  vt = !0;
  try {
    for (var n; ; ) {
      if (Sn(), C.length === 0 && ($?.flush(), C.length === 0))
        return It = null, /** @type {T} */
        n;
      Se();
    }
  } finally {
    vt = e;
  }
}
function Se() {
  var t = tt;
  Vt = !0;
  var e = null;
  try {
    var n = 0;
    for (Dt(!0); C.length > 0; ) {
      var r = O.ensure();
      if (n++ > 1e3) {
        var s, i;
        kn();
      }
      r.process(C), z.clear();
    }
  } finally {
    Vt = !1, Dt(t), It = null;
  }
}
function kn() {
  try {
    dn();
  } catch (t) {
    ct(t, It);
  }
}
let Y = null;
function le(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (B | G)) === 0 && bt(r) && (Y = /* @__PURE__ */ new Set(), wt(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? qe(r) : r.fn = null), Y?.size > 0)) {
        z.clear();
        for (const s of Y) {
          if ((s.f & (B | G)) !== 0) continue;
          const i = [s];
          let f = s.parent;
          for (; f !== null; )
            Y.has(f) && (Y.delete(f), i.push(f)), f = f.parent;
          for (let l = i.length - 1; l >= 0; l--) {
            const u = i[l];
            (u.f & (B | G)) === 0 && wt(u);
          }
        }
        Y.clear();
      }
    }
    Y = null;
  }
}
function ke(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const s of t.reactions) {
      const i = s.f;
      (i & y) !== 0 ? ke(
        /** @type {Derived} */
        s,
        e,
        n,
        r
      ) : (i & (Qt | H)) !== 0 && (i & A) === 0 && Ae(s, e, r) && (E(s, A), ht(
        /** @type {Effect} */
        s
      ));
    }
}
function Ae(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const s of t.deps) {
      if (e.includes(s))
        return !0;
      if ((s.f & y) !== 0 && Ae(
        /** @type {Derived} */
        s,
        e,
        n
      ))
        return n.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return n.set(t, !1), !1;
}
function ht(t) {
  for (var e = It = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Vt && e === v && (n & H) !== 0 && (n & ge) === 0)
      return;
    if ((n & (J | rt)) !== 0) {
      if ((n & b) === 0) return;
      e.f ^= b;
    }
  }
  C.push(e);
}
function An(t) {
  let e = 0, n = mt(0), r;
  return () => {
    gt() && (k(n), Me(() => (e === 0 && (r = tr(() => t(() => pt(n)))), e += 1, () => {
      te(() => {
        e -= 1, e === 0 && (r?.(), r = void 0, pt(n));
      });
    })));
  };
}
var Rn = Ct | st | Lt;
function Cn(t, e, n) {
  new Nn(t, e, n);
}
class Nn {
  /** @type {Boundary | null} */
  parent;
  #e = !1;
  /** @type {TemplateNode} */
  #t;
  /** @type {TemplateNode | null} */
  #u = S ? g : null;
  /** @type {BoundaryProps} */
  #s;
  /** @type {((anchor: Node) => void)} */
  #o;
  /** @type {Effect} */
  #f;
  /** @type {Effect | null} */
  #r = null;
  /** @type {Effect | null} */
  #n = null;
  /** @type {Effect | null} */
  #i = null;
  /** @type {DocumentFragment | null} */
  #l = null;
  /** @type {TemplateNode | null} */
  #a = null;
  #c = 0;
  #h = 0;
  #_ = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #d = null;
  #y = An(() => (this.#d = mt(this.#c), () => {
    this.#d = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    this.#t = e, this.#s = n, this.#o = r, this.parent = /** @type {Effect} */
    v.b, this.#e = !!this.#s.pending, this.#f = Wn(() => {
      if (v.b = this, S) {
        const i = this.#u;
        ye(), /** @type {Comment} */
        i.nodeType === Mt && /** @type {Comment} */
        i.data === _e ? this.#m() : this.#w();
      } else {
        var s = this.#$();
        try {
          this.#r = Q(() => r(s));
        } catch (i) {
          this.error(i);
        }
        this.#h > 0 ? this.#p() : this.#e = !1;
      }
      return () => {
        this.#a?.remove();
      };
    }, Rn), S && (this.#t = g);
  }
  #w() {
    try {
      this.#r = Q(() => this.#o(this.#t));
    } catch (e) {
      this.error(e);
    }
    this.#e = !1;
  }
  #m() {
    const e = this.#s.pending;
    e && (this.#n = Q(() => e(this.#t)), O.enqueue(() => {
      var n = this.#$();
      this.#r = this.#v(() => (O.ensure(), Q(() => this.#o(n)))), this.#h > 0 ? this.#p() : (St(
        /** @type {Effect} */
        this.#n,
        () => {
          this.#n = null;
        }
      ), this.#e = !1);
    }));
  }
  #$() {
    var e = this.#t;
    return this.#e && (this.#a = re(), this.#t.before(this.#a), e = this.#a), e;
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return this.#e || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!this.#s.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #v(e) {
    var n = v, r = _, s = F;
    j(this.#f), x(this.#f), at(this.#f.ctx);
    try {
      return e();
    } catch (i) {
      return Te(i), null;
    } finally {
      j(n), x(r), at(s);
    }
  }
  #p() {
    const e = (
      /** @type {(anchor: Node) => void} */
      this.#s.pending
    );
    this.#r !== null && (this.#l = document.createDocumentFragment(), this.#l.append(
      /** @type {TemplateNode} */
      this.#a
    ), Zn(this.#r, this.#l)), this.#n === null && (this.#n = Q(() => e(this.#t)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #g(e) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#g(e);
      return;
    }
    this.#h += e, this.#h === 0 && (this.#e = !1, this.#n && St(this.#n, () => {
      this.#n = null;
    }), this.#l && (this.#t.before(this.#l), this.#l = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    this.#g(e), this.#c += e, this.#d && Ot(this.#d, this.#c);
  }
  get_effect_pending() {
    return this.#y(), k(
      /** @type {Source<number>} */
      this.#d
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = this.#s.onerror;
    let r = this.#s.failed;
    if (this.#_ || !n && !r)
      throw e;
    this.#r && (P(this.#r), this.#r = null), this.#n && (P(this.#n), this.#n = null), this.#i && (P(this.#i), this.#i = null), S && (ot(
      /** @type {TemplateNode} */
      this.#u
    ), mn(), ot(bn()));
    var s = !1, i = !1;
    const f = () => {
      if (s) {
        yn();
        return;
      }
      s = !0, i && gn(), O.ensure(), this.#c = 0, this.#i !== null && St(this.#i, () => {
        this.#i = null;
      }), this.#e = this.has_pending_snippet(), this.#r = this.#v(() => (this.#_ = !1, Q(() => this.#o(this.#t)))), this.#h > 0 ? this.#p() : this.#e = !1;
    };
    var l = _;
    try {
      x(null), i = !0, n?.(e, f), i = !1;
    } catch (u) {
      ct(u, this.#f && this.#f.parent);
    } finally {
      x(l);
    }
    r && te(() => {
      this.#i = this.#v(() => {
        O.ensure(), this.#_ = !0;
        try {
          return Q(() => {
            r(
              this.#t,
              () => e,
              () => f
            );
          });
        } catch (u) {
          return ct(
            u,
            /** @type {Effect} */
            this.#f.parent
          ), null;
        } finally {
          this.#_ = !1;
        }
      });
    });
  }
}
function On(t, e, n, r) {
  const s = ee;
  if (n.length === 0 && t.length === 0) {
    r(e.map(s));
    return;
  }
  var i = $, f = (
    /** @type {Effect} */
    v
  ), l = Pn();
  function u() {
    Promise.all(n.map((o) => /* @__PURE__ */ Dn(o))).then((o) => {
      l();
      try {
        r([...e.map(s), ...o]);
      } catch (c) {
        (f.f & B) === 0 && ct(c, f);
      }
      i?.deactivate(), Nt();
    }).catch((o) => {
      ct(o, f);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    l();
    try {
      return u();
    } finally {
      i?.deactivate(), Nt();
    }
  }) : u();
}
function Pn() {
  var t = v, e = _, n = F, r = $;
  return function(i = !0) {
    j(t), x(e), at(n), i && r?.activate();
  };
}
function Nt() {
  j(null), x(null), at(null);
}
// @__NO_SIDE_EFFECTS__
function ee(t) {
  var e = y | A, n = _ !== null && (_.f & y) !== 0 ? (
    /** @type {Derived} */
    _
  ) : null;
  return v !== null && (v.f |= st), {
    ctx: F,
    deps: null,
    effects: null,
    equals: we,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      w
    ),
    wv: 0,
    parent: n ?? v,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Dn(t, e) {
  let n = (
    /** @type {Effect | null} */
    v
  );
  n === null && hn();
  var r = (
    /** @type {Boundary} */
    n.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = mt(
    /** @type {V} */
    w
  ), f = !_, l = /* @__PURE__ */ new Map();
  return Kn(() => {
    var u = pe();
    s = u.promise;
    try {
      Promise.resolve(t()).then(u.resolve, u.reject).then(() => {
        o === $ && o.committed && o.deactivate(), Nt();
      });
    } catch (a) {
      u.reject(a), Nt();
    }
    var o = (
      /** @type {Batch} */
      $
    );
    if (f) {
      var c = !r.is_pending();
      r.update_pending_count(1), o.increment(c), l.get(o)?.reject(lt), l.delete(o), l.set(o, u);
    }
    const d = (a, h = void 0) => {
      if (o.activate(), h)
        h !== lt && (i.f |= W, Ot(i, h));
      else {
        (i.f & W) !== 0 && (i.f ^= W), Ot(i, a);
        for (const [p, q] of l) {
          if (l.delete(p), p === o) break;
          q.reject(lt);
        }
      }
      f && (r.update_pending_count(-1), o.decrement(c));
    };
    u.promise.then(d, (a) => d(null, a || "unknown"));
  }), Bn(() => {
    for (const u of l.values())
      u.reject(lt);
  }), new Promise((u) => {
    function o(c) {
      function d() {
        c === s ? u(i) : o(s);
      }
      c.then(d, d);
    }
    o(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Fn(t) {
  const e = /* @__PURE__ */ ee(t);
  return Be(e), e;
}
function Re(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      P(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Ln(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & y) === 0)
      return (e.f & B) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function ne(t) {
  var e, n = v;
  j(Ln(t));
  try {
    t.f &= ~nt, Re(t), e = Ke(t);
  } finally {
    j(n);
  }
  return e;
}
function Ce(t) {
  var e = ne(t);
  if (t.equals(e) || ($?.is_fork || (t.v = e), t.wv = He()), !dt)
    if (N !== null)
      (gt() || $?.is_fork) && N.set(t, e);
    else {
      var n = (t.f & D) === 0 ? I : b;
      E(t, n);
    }
}
let Ut = /* @__PURE__ */ new Set();
const z = /* @__PURE__ */ new Map();
let Ne = !1;
function mt(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: we,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function K(t, e) {
  const n = mt(t);
  return Be(n), n;
}
// @__NO_SIDE_EFFECTS__
function Mn(t, e = !1, n = !0) {
  const r = mt(t);
  return e || (r.equals = xn), r;
}
function L(t, e, n = !1) {
  _ !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!M || (_.f & fe) !== 0) && Ee() && (_.f & (y | H | Qt | fe)) !== 0 && !V?.includes(t) && $n();
  let r = n ? _t(e) : e;
  return Ot(t, r);
}
function Ot(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    dt ? z.set(t, e) : z.set(t, n), t.v = e;
    var r = O.ensure();
    r.capture(t, n), (t.f & y) !== 0 && ((t.f & A) !== 0 && ne(
      /** @type {Derived} */
      t
    ), E(t, (t.f & D) !== 0 ? b : I)), t.wv = He(), Oe(t, A), v !== null && (v.f & b) !== 0 && (v.f & (rt | J)) === 0 && (R === null ? Qn([t]) : R.push(t)), !r.is_fork && Ut.size > 0 && !Ne && In();
  }
  return e;
}
function In() {
  Ne = !1;
  var t = tt;
  Dt(!0);
  const e = Array.from(Ut);
  try {
    for (const n of e)
      (n.f & b) !== 0 && E(n, I), bt(n) && wt(n);
  } finally {
    Dt(t);
  }
  Ut.clear();
}
function pt(t) {
  L(t, t.v + 1);
}
function Oe(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, s = 0; s < r; s++) {
      var i = n[s], f = i.f, l = (f & A) === 0;
      if (l && E(i, e), (f & y) !== 0) {
        var u = (
          /** @type {Derived} */
          i
        );
        N?.delete(u), (f & nt) === 0 && (f & D && (i.f |= nt), Oe(u, I));
      } else l && ((f & H) !== 0 && Y !== null && Y.add(
        /** @type {Effect} */
        i
      ), ht(
        /** @type {Effect} */
        i
      ));
    }
}
function _t(t) {
  if (typeof t != "object" || t === null || qt in t)
    return t;
  const e = ln(t);
  if (e !== sn && e !== fn)
    return t;
  var n = /* @__PURE__ */ new Map(), r = en(t), s = /* @__PURE__ */ K(0), i = et, f = (l) => {
    if (et === i)
      return l();
    var u = _, o = et;
    x(null), ae(i);
    var c = l();
    return x(u), ae(o), c;
  };
  return r && n.set("length", /* @__PURE__ */ K(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(l, u, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && vn();
        var c = n.get(u);
        return c === void 0 ? c = f(() => {
          var d = /* @__PURE__ */ K(o.value);
          return n.set(u, d), d;
        }) : L(c, o.value, !0), !0;
      },
      deleteProperty(l, u) {
        var o = n.get(u);
        if (o === void 0) {
          if (u in l) {
            const c = f(() => /* @__PURE__ */ K(w));
            n.set(u, c), pt(s);
          }
        } else
          L(o, w), pt(s);
        return !0;
      },
      get(l, u, o) {
        if (u === qt)
          return t;
        var c = n.get(u), d = u in l;
        if (c === void 0 && (!d || ut(l, u)?.writable) && (c = f(() => {
          var h = _t(d ? l[u] : w), p = /* @__PURE__ */ K(h);
          return p;
        }), n.set(u, c)), c !== void 0) {
          var a = k(c);
          return a === w ? void 0 : a;
        }
        return Reflect.get(l, u, o);
      },
      getOwnPropertyDescriptor(l, u) {
        var o = Reflect.getOwnPropertyDescriptor(l, u);
        if (o && "value" in o) {
          var c = n.get(u);
          c && (o.value = k(c));
        } else if (o === void 0) {
          var d = n.get(u), a = d?.v;
          if (d !== void 0 && a !== w)
            return {
              enumerable: !0,
              configurable: !0,
              value: a,
              writable: !0
            };
        }
        return o;
      },
      has(l, u) {
        if (u === qt)
          return !0;
        var o = n.get(u), c = o !== void 0 && o.v !== w || Reflect.has(l, u);
        if (o !== void 0 || v !== null && (!c || ut(l, u)?.writable)) {
          o === void 0 && (o = f(() => {
            var a = c ? _t(l[u]) : w, h = /* @__PURE__ */ K(a);
            return h;
          }), n.set(u, o));
          var d = k(o);
          if (d === w)
            return !1;
        }
        return c;
      },
      set(l, u, o, c) {
        var d = n.get(u), a = u in l;
        if (r && u === "length")
          for (var h = o; h < /** @type {Source<number>} */
          d.v; h += 1) {
            var p = n.get(h + "");
            p !== void 0 ? L(p, w) : h in l && (p = f(() => /* @__PURE__ */ K(w)), n.set(h + "", p));
          }
        if (d === void 0)
          (!a || ut(l, u)?.writable) && (d = f(() => /* @__PURE__ */ K(void 0)), L(d, _t(o)), n.set(u, d));
        else {
          a = d.v !== w;
          var q = f(() => _t(o));
          L(d, q);
        }
        var Z = Reflect.getOwnPropertyDescriptor(l, u);
        if (Z?.set && Z.set.call(c, o), !a) {
          if (r && typeof u == "string") {
            var se = (
              /** @type {Source<number>} */
              n.get("length")
            ), jt = Number(u);
            Number.isInteger(jt) && jt >= se.v && L(se, jt + 1);
          }
          pt(s);
        }
        return !0;
      },
      ownKeys(l) {
        k(s);
        var u = Reflect.ownKeys(l).filter((d) => {
          var a = n.get(d);
          return a === void 0 || a.v !== w;
        });
        for (var [o, c] of n)
          c.v !== w && !(o in l) && u.push(o);
        return u;
      },
      setPrototypeOf() {
        pn();
      }
    }
  );
}
var ue, Pe, De, Fe;
function Kt() {
  if (ue === void 0) {
    ue = window, Pe = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    De = ut(e, "firstChild").get, Fe = ut(e, "nextSibling").get, ie(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), ie(n) && (n.__t = void 0);
  }
}
function re(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Pt(t) {
  return (
    /** @type {TemplateNode | null} */
    De.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function it(t) {
  return (
    /** @type {TemplateNode | null} */
    Fe.call(t)
  );
}
function jn(t, e) {
  if (!S)
    return /* @__PURE__ */ Pt(t);
  var n = /* @__PURE__ */ Pt(g);
  return n === null && (n = g.appendChild(re())), ot(n), n;
}
function qn(t) {
  t.textContent = "";
}
function Le(t) {
  var e = _, n = v;
  x(null), j(null);
  try {
    return t();
  } finally {
    x(e), j(n);
  }
}
function Yn(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function U(t, e, n) {
  var r = v;
  r !== null && (r.f & G) !== 0 && (t |= G);
  var s = {
    ctx: F,
    deps: null,
    nodes: null,
    f: t | A | D,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      wt(s), s.f |= Zt;
    } catch (l) {
      throw P(s), l;
    }
  else e !== null && ht(s);
  var i = s;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & st) === 0 && (i = i.first, (t & H) !== 0 && (t & Ct) !== 0 && i !== null && (i.f |= Ct)), i !== null && (i.parent = r, r !== null && Yn(i, r), _ !== null && (_.f & y) !== 0 && (t & J) === 0)) {
    var f = (
      /** @type {Derived} */
      _
    );
    (f.effects ??= []).push(i);
  }
  return s;
}
function gt() {
  return _ !== null && !M;
}
function Bn(t) {
  const e = U(Jt, null, !1);
  return E(e, b), e.teardown = t, e;
}
function Vn(t) {
  return U($e | an, t, !1);
}
function Hn(t) {
  O.ensure();
  const e = U(J | st, t, !0);
  return () => {
    P(e);
  };
}
function Un(t) {
  O.ensure();
  const e = U(J | st, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? St(e, () => {
      P(e), r(void 0);
    }) : (P(e), r(void 0));
  });
}
function Kn(t) {
  return U(Qt | st, t, !0);
}
function Me(t, e = 0) {
  return U(Jt | e, t, !0);
}
function Gn(t, e = [], n = [], r = []) {
  On(r, e, n, (s) => {
    U(Jt, () => t(...s.map(k)), !0);
  });
}
function Wn(t, e = 0) {
  var n = U(H | e, t, !0);
  return n;
}
function Q(t) {
  return U(rt | st, t, !0);
}
function Ie(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = dt, r = _;
    oe(!0), x(null);
    try {
      e.call(null);
    } finally {
      oe(n), x(r);
    }
  }
}
function je(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && Le(() => {
      s.abort(lt);
    });
    var r = n.next;
    (n.f & J) !== 0 ? n.parent = null : P(n, e), n = r;
  }
}
function zn(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & rt) === 0 && P(e), e = n;
  }
}
function P(t, e = !0) {
  var n = !1;
  (e || (t.f & ge) !== 0) && t.nodes !== null && t.nodes.end !== null && (Jn(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), je(t, e && !n), Ft(t, 0), E(t, B);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const i of r)
      i.stop();
  Ie(t);
  var s = t.parent;
  s !== null && s.first !== null && qe(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function Jn(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : /* @__PURE__ */ it(t);
    t.remove(), t = n;
  }
}
function qe(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function St(t, e, n = !0) {
  var r = [];
  Ye(t, r, !0);
  var s = () => {
    n && P(t), e && e();
  }, i = r.length;
  if (i > 0) {
    var f = () => --i || s();
    for (var l of r)
      l.out(f);
  } else
    s();
}
function Ye(t, e, n) {
  if ((t.f & G) === 0) {
    t.f ^= G;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const l of r)
        (l.is_global || n) && e.push(l);
    for (var s = t.first; s !== null; ) {
      var i = s.next, f = (s.f & Ct) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & rt) !== 0 && (t.f & H) !== 0;
      Ye(s, e, f ? n : !1), s = i;
    }
  }
}
function Zn(t, e) {
  if (t.nodes)
    for (var n = t.nodes.start, r = t.nodes.end; n !== null; ) {
      var s = n === r ? null : /* @__PURE__ */ it(n);
      e.append(n), n = s;
    }
}
let tt = !1;
function Dt(t) {
  tt = t;
}
let dt = !1;
function oe(t) {
  dt = t;
}
let _ = null, M = !1;
function x(t) {
  _ = t;
}
let v = null;
function j(t) {
  v = t;
}
let V = null;
function Be(t) {
  _ !== null && (V === null ? V = [t] : V.push(t));
}
let m = null, T = 0, R = null;
function Qn(t) {
  R = t;
}
let Ve = 1, yt = 0, et = yt;
function ae(t) {
  et = t;
}
function He() {
  return ++Ve;
}
function bt(t) {
  var e = t.f;
  if ((e & A) !== 0)
    return !0;
  if (e & y && (t.f &= ~nt), (e & I) !== 0) {
    var n = t.deps;
    if (n !== null)
      for (var r = n.length, s = 0; s < r; s++) {
        var i = n[s];
        if (bt(
          /** @type {Derived} */
          i
        ) && Ce(
          /** @type {Derived} */
          i
        ), i.wv > t.wv)
          return !0;
      }
    (e & D) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    N === null && E(t, b);
  }
  return !1;
}
function Ue(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !V?.includes(t))
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      (i.f & y) !== 0 ? Ue(
        /** @type {Derived} */
        i,
        e,
        !1
      ) : e === i && (n ? E(i, A) : (i.f & b) !== 0 && E(i, I), ht(
        /** @type {Effect} */
        i
      ));
    }
}
function Ke(t) {
  var e = m, n = T, r = R, s = _, i = V, f = F, l = M, u = et, o = t.f;
  m = /** @type {null | Value[]} */
  null, T = 0, R = null, _ = (o & (rt | J)) === 0 ? t : null, V = null, at(t.ctx), M = !1, et = ++yt, t.ac !== null && (Le(() => {
    t.ac.abort(lt);
  }), t.ac = null);
  try {
    t.f |= Bt;
    var c = (
      /** @type {Function} */
      t.fn
    ), d = c(), a = t.deps;
    if (m !== null) {
      var h;
      if (Ft(t, T), a !== null && T > 0)
        for (a.length = T + m.length, h = 0; h < m.length; h++)
          a[T + h] = m[h];
      else
        t.deps = a = m;
      if (gt() && (t.f & D) !== 0)
        for (h = T; h < a.length; h++)
          (a[h].reactions ??= []).push(t);
    } else a !== null && T < a.length && (Ft(t, T), a.length = T);
    if (Ee() && R !== null && !M && a !== null && (t.f & (y | I | A)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      R.length; h++)
        Ue(
          R[h],
          /** @type {Effect} */
          t
        );
    return s !== null && s !== t && (yt++, R !== null && (r === null ? r = R : r.push(.../** @type {Source[]} */
    R))), (t.f & W) !== 0 && (t.f ^= W), d;
  } catch (p) {
    return Te(p);
  } finally {
    t.f ^= Bt, m = e, T = n, R = r, _ = s, V = i, at(f), M = l, et = u;
  }
}
function Xn(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = nn.call(n, t);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = e.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  n === null && (e.f & y) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (m === null || !m.includes(e)) && (E(e, I), (e.f & D) !== 0 && (e.f ^= D, e.f &= ~nt), Re(
    /** @type {Derived} **/
    e
  ), Ft(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Ft(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Xn(t, n[r]);
}
function wt(t) {
  var e = t.f;
  if ((e & B) === 0) {
    E(t, b);
    var n = v, r = tt;
    v = t, tt = !0;
    try {
      (e & (H | on)) !== 0 ? zn(t) : je(t), Ie(t);
      var s = Ke(t);
      t.teardown = typeof s == "function" ? s : null, t.wv = Ve;
      var i;
      Yt && Tn && (t.f & A) !== 0 && t.deps;
    } finally {
      tt = r, v = n;
    }
  }
}
function k(t) {
  var e = t.f, n = (e & y) !== 0;
  if (_ !== null && !M) {
    var r = v !== null && (v.f & B) !== 0;
    if (!r && !V?.includes(t)) {
      var s = _.deps;
      if ((_.f & Bt) !== 0)
        t.rv < yt && (t.rv = yt, m === null && s !== null && s[T] === t ? T++ : m === null ? m = [t] : m.includes(t) || m.push(t));
      else {
        (_.deps ??= []).push(t);
        var i = t.reactions;
        i === null ? t.reactions = [_] : i.includes(_) || i.push(_);
      }
    }
  }
  if (dt) {
    if (z.has(t))
      return z.get(t);
    if (n) {
      var f = (
        /** @type {Derived} */
        t
      ), l = f.v;
      return ((f.f & b) === 0 && f.reactions !== null || We(f)) && (l = ne(f)), z.set(f, l), l;
    }
  } else n && (!N?.has(t) || $?.is_fork && !gt()) && (f = /** @type {Derived} */
  t, bt(f) && Ce(f), tt && gt() && (f.f & D) === 0 && Ge(f));
  if (N?.has(t))
    return N.get(t);
  if ((t.f & W) !== 0)
    throw t.v;
  return t.v;
}
function Ge(t) {
  if (t.deps !== null) {
    t.f ^= D;
    for (const e of t.deps)
      (e.reactions ??= []).push(t), (e.f & y) !== 0 && (e.f & D) === 0 && Ge(
        /** @type {Derived} */
        e
      );
  }
}
function We(t) {
  if (t.v === w) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (z.has(e) || (e.f & y) !== 0 && We(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function tr(t) {
  var e = M;
  try {
    return M = !0, t();
  } finally {
    M = e;
  }
}
const er = -7169;
function E(t, e) {
  t.f = t.f & er | e;
}
const ze = /* @__PURE__ */ new Set(), Gt = /* @__PURE__ */ new Set();
function nr(t) {
  for (var e = 0; e < t.length; e++)
    ze.add(t[e]);
  for (var n of Gt)
    n(t);
}
let ce = null;
function Tt(t) {
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, s = t.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || t.target
  );
  ce = t;
  var f = 0, l = ce === t && t.__root;
  if (l) {
    var u = s.indexOf(l);
    if (u !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var o = s.indexOf(e);
    if (o === -1)
      return;
    u <= o && (f = u);
  }
  if (i = /** @type {Element} */
  s[f] || t.target, i !== e) {
    Rt(t, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var c = _, d = v;
    x(null), j(null);
    try {
      for (var a, h = []; i !== null; ) {
        var p = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var q = i["__" + r];
          q != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === i) && q.call(i, t);
        } catch (Z) {
          a ? h.push(Z) : a = Z;
        }
        if (t.cancelBubble || p === e || p === null)
          break;
        i = p;
      }
      if (a) {
        for (let Z of h)
          queueMicrotask(() => {
            throw Z;
          });
        throw a;
      }
    } finally {
      t.__root = e, delete t.currentTarget, x(c), j(d);
    }
  }
}
function rr(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Wt(t, e) {
  var n = (
    /** @type {Effect} */
    v
  );
  n.nodes === null && (n.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function sr(t, e) {
  var n = (e & tn) !== 0, r, s = !t.startsWith("<!>");
  return () => {
    if (S)
      return Wt(g, null), g;
    r === void 0 && (r = rr(s ? t : "<!>" + t), r = /** @type {TemplateNode} */
    /* @__PURE__ */ Pt(r));
    var i = (
      /** @type {TemplateNode} */
      n || Pe ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return Wt(i, i), i;
  };
}
function Je(t, e) {
  if (S) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      v
    );
    ((n.f & Zt) === 0 || n.nodes.end === null) && (n.nodes.end = g), ye();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const ir = ["touchstart", "touchmove"];
function fr(t) {
  return ir.includes(t);
}
function lr(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function Ze(t, e) {
  return Qe(t, e);
}
function ur(t, e) {
  Kt(), e.intro = e.intro ?? !1;
  const n = e.target, r = S, s = g;
  try {
    for (var i = /* @__PURE__ */ Pt(n); i && (i.nodeType !== Mt || /** @type {Comment} */
    i.data !== de); )
      i = /* @__PURE__ */ it(i);
    if (!i)
      throw $t;
    Et(!0), ot(
      /** @type {Comment} */
      i
    );
    const f = Qe(t, { ...e, anchor: i });
    return Et(!1), /**  @type {Exports} */
    f;
  } catch (f) {
    if (f instanceof Error && f.message.split(`
`).some((l) => l.startsWith("https://svelte.dev/e/")))
      throw f;
    return f !== $t && console.warn("Failed to hydrate: ", f), e.recover === !1 && _n(), Kt(), qn(n), Et(!1), Ze(t, e);
  } finally {
    Et(r), ot(s);
  }
}
const ft = /* @__PURE__ */ new Map();
function Qe(t, { target: e, anchor: n, props: r = {}, events: s, context: i, intro: f = !0 }) {
  Kt();
  var l = /* @__PURE__ */ new Set(), u = (d) => {
    for (var a = 0; a < d.length; a++) {
      var h = d[a];
      if (!l.has(h)) {
        l.add(h);
        var p = fr(h);
        e.addEventListener(h, Tt, { passive: p });
        var q = ft.get(h);
        q === void 0 ? (document.addEventListener(h, Tt, { passive: p }), ft.set(h, 1)) : ft.set(h, q + 1);
      }
    }
  };
  u(rn(ze)), Gt.add(u);
  var o = void 0, c = Un(() => {
    var d = n ?? e.appendChild(re());
    return Cn(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (a) => {
        if (i) {
          me({});
          var h = (
            /** @type {ComponentContext} */
            F
          );
          h.c = i;
        }
        if (s && (r.$$events = s), S && Wt(
          /** @type {TemplateNode} */
          a,
          null
        ), o = t(a, r) || {}, S && (v.nodes.end = g, g === null || g.nodeType !== Mt || /** @type {Comment} */
        g.data !== ve))
          throw Xt(), $t;
        i && be();
      }
    ), () => {
      for (var a of l) {
        e.removeEventListener(a, Tt);
        var h = (
          /** @type {number} */
          ft.get(a)
        );
        --h === 0 ? (document.removeEventListener(a, Tt), ft.delete(a)) : ft.set(a, h);
      }
      Gt.delete(u), d !== n && d.parentNode?.removeChild(d);
    };
  });
  return zt.set(o, c), o;
}
let zt = /* @__PURE__ */ new WeakMap();
function or(t, e) {
  const n = zt.get(t);
  return n ? (zt.delete(t), n(e)) : Promise.resolve();
}
function he(t, e, n, r) {
  var s = (
    /** @type {V} */
    r
  ), i = !0, f = () => (i && (i = !1, s = /** @type {V} */
  r), s), l;
  l = /** @type {V} */
  t[e], l === void 0 && r !== void 0 && (l = f());
  var u;
  u = () => {
    var a = (
      /** @type {V} */
      t[e]
    );
    return a === void 0 ? f() : (i = !0, a);
  };
  var o = !1, c = /* @__PURE__ */ ee(() => (o = !1, u())), d = (
    /** @type {Effect} */
    v
  );
  return (
    /** @type {() => V} */
    (function(a, h) {
      if (arguments.length > 0) {
        const p = h ? k(c) : a;
        return L(c, p), o = !0, s !== void 0 && (s = p), a;
      }
      return dt && o || (d.f & B) !== 0 ? c.v : k(c);
    })
  );
}
function ar(t) {
  return new cr(t);
}
class cr {
  /** @type {any} */
  #e;
  /** @type {Record<string, any>} */
  #t;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    var n = /* @__PURE__ */ new Map(), r = (i, f) => {
      var l = /* @__PURE__ */ Mn(f, !1, !1);
      return n.set(i, l), l;
    };
    const s = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(i, f) {
          return k(n.get(f) ?? r(f, Reflect.get(i, f)));
        },
        has(i, f) {
          return f === cn ? !0 : (k(n.get(f) ?? r(f, Reflect.get(i, f))), Reflect.has(i, f));
        },
        set(i, f, l) {
          return L(n.get(f) ?? r(f, l), l), Reflect.set(i, f, l);
        }
      }
    );
    this.#t = (e.hydrate ? ur : Ze)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: s,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && Ht(), this.#e = s.$$events;
    for (const i of Object.keys(this.#t))
      i === "$set" || i === "$destroy" || i === "$on" || Rt(this, i, {
        get() {
          return this.#t[i];
        },
        /** @param {any} value */
        set(f) {
          this.#t[i] = f;
        },
        enumerable: !0
      });
    this.#t.$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(s, i);
    }, this.#t.$destroy = () => {
      or(this.#t);
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    this.#t.$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    this.#e[e] = this.#e[e] || [];
    const r = (...s) => n.call(this, ...s);
    return this.#e[e].push(r), () => {
      this.#e[e] = this.#e[e].filter(
        /** @param {any} fn */
        (s) => s !== r
      );
    };
  }
  $destroy() {
    this.#t.$destroy();
  }
}
let Xe;
typeof HTMLElement == "function" && (Xe = class extends HTMLElement {
  /** The Svelte component constructor */
  $$ctor;
  /** Slots */
  $$s;
  /** @type {any} The Svelte component instance */
  $$c;
  /** Whether or not the custom element is connected */
  $$cn = !1;
  /** @type {Record<string, any>} Component props data */
  $$d = {};
  /** `true` if currently in the process of reflecting component props back to attributes */
  $$r = !1;
  /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
  $$p_d = {};
  /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
  $$l = {};
  /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
  $$l_u = /* @__PURE__ */ new Map();
  /** @type {any} The managed render effect for reflecting attributes */
  $$me;
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, e, n) {
    super(), this.$$ctor = t, this.$$s = e, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, e, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(e), this.$$c) {
      const r = this.$$c.$on(t, e);
      this.$$l_u.set(e, r);
    }
    super.addEventListener(t, e, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, e, n) {
    if (super.removeEventListener(t, e, n), this.$$c) {
      const r = this.$$l_u.get(e);
      r && (r(), this.$$l_u.delete(e));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(s) {
        return (i) => {
          const f = document.createElement("slot");
          s !== "default" && (f.name = s), Je(i, f);
        };
      };
      var t = e;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = hr(this);
      for (const s of this.$$s)
        s in r && (s === "default" && !this.$$d.children ? (this.$$d.children = e(s), n.default = !0) : n[s] = e(s));
      for (const s of this.attributes) {
        const i = this.$$g_p(s.name);
        i in this.$$d || (this.$$d[i] = kt(i, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = ar({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Hn(() => {
        Me(() => {
          this.$$r = !0;
          for (const s of At(this.$$c)) {
            if (!this.$$p_d[s]?.reflect) continue;
            this.$$d[s] = this.$$c[s];
            const i = kt(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, i);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const i of this.$$l[s]) {
          const f = this.$$c.$on(s, i);
          this.$$l_u.set(i, f);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, e, n) {
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = kt(t, n, this.$$p_d, "toProp"), this.$$c?.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return At(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function kt(t, e, n, r) {
  const s = n[t]?.type;
  if (e = s === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !n[t])
    return e;
  if (r === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      // conversion already handled above
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function hr(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function dr(t, e, n, r, s, i) {
  let f = class extends Xe {
    constructor() {
      super(t, n, s), this.$$p_d = e;
    }
    static get observedAttributes() {
      return At(e).map(
        (l) => (e[l].attribute || l).toLowerCase()
      );
    }
  };
  return At(e).forEach((l) => {
    Rt(f.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(u) {
        u = kt(l, u, e), this.$$d[l] = u;
        var o = this.$$c;
        if (o) {
          var c = ut(o, l)?.get;
          c ? o[l] = u : o.$set({ [l]: u });
        }
      }
    });
  }), r.forEach((l) => {
    Rt(f.prototype, l, {
      get() {
        return this.$$c?.[l];
      }
    });
  }), t.element = /** @type {any} */
  f, f;
}
var _r = /* @__PURE__ */ sr("<button> </button>");
function vr(t, e) {
  me(e, !0);
  let n = he(e, "startCount", 7, 0), r = he(e, "step", 7, 1), s = /* @__PURE__ */ Fn(n);
  const i = () => {
    L(s, k(s) + r());
  };
  var f = {
    get startCount() {
      return n();
    },
    set startCount(o = 0) {
      n(o), Ht();
    },
    get step() {
      return r();
    },
    set step(o = 1) {
      r(o), Ht();
    }
  }, l = _r();
  l.__click = i;
  var u = jn(l);
  return wn(l), Gn(() => lr(u, `count is ${k(s) ?? ""}`)), Je(t, l), be(f);
}
nr(["click"]);
customElements.define("ui-counter", dr(
  vr,
  {
    startCount: { attribute: "start-count", type: "Number" },
    step: { attribute: "step", type: "Number" }
  },
  [],
  [],
  !0
));

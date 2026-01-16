typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const yr = 1, $r = 2, pn = 4, Er = 8, Sr = 16, xr = 1, kr = 4, Cr = 8, Ar = 16, Rr = 1, Tr = 2, gn = "[", zt = "[!", Ft = "]", Fe = {}, P = /* @__PURE__ */ Symbol(), Or = "http://www.w3.org/1999/xhtml", Ct = !1;
var mn = Array.isArray, Nr = Array.prototype.indexOf, vt = Array.from, lt = Object.keys, ft = Object.defineProperty, Se = Object.getOwnPropertyDescriptor, Pr = Object.getOwnPropertyDescriptors, Mr = Object.prototype, Ir = Array.prototype, wn = Object.getPrototypeOf, tn = Object.isExtensible;
function Dr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function bn() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const N = 2, jt = 4, Ht = 8, Lr = 1 << 24, _e = 16, pe = 32, ye = 64, _t = 128, te = 512, M = 1024, F = 2048, le = 4096, U = 8192, he = 16384, pt = 32768, We = 65536, nn = 1 << 17, yn = 1 << 18, Ne = 1 << 19, zr = 1 << 20, ce = 1 << 25, Ae = 32768, At = 1 << 21, qt = 1 << 22, me = 1 << 23, xe = /* @__PURE__ */ Symbol("$state"), $n = /* @__PURE__ */ Symbol("legacy props"), Fr = /* @__PURE__ */ Symbol(""), De = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Vt = 3, Ve = 8;
function jr(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Hr() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function qr(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Vr() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Br(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ur() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Yr() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Wr(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Gr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Kr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Jr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Xr() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function gt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Zr() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let S = !1;
function $e(e) {
  S = e;
}
let C;
function Y(e) {
  if (e === null)
    throw gt(), Fe;
  return C = e;
}
function Bt() {
  return Y(/* @__PURE__ */ ue(C));
}
function ut(e) {
  if (S) {
    if (/* @__PURE__ */ ue(C) !== null)
      throw gt(), Fe;
    C = e;
  }
}
function Qr(e = 1) {
  if (S) {
    for (var t = e, n = C; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ ue(n);
    C = n;
  }
}
function Rt(e = !0) {
  for (var t = 0, n = C; ; ) {
    if (n.nodeType === Ve) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Ft) {
        if (t === 0) return n;
        t -= 1;
      } else (r === gn || r === zt) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ue(n)
    );
    e && n.remove(), n = i;
  }
}
function ei(e) {
  if (!e || e.nodeType !== Ve)
    throw gt(), Fe;
  return (
    /** @type {Comment} */
    e.data
  );
}
function En(e) {
  return e === this.v;
}
function ti(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Sn(e) {
  return !ti(e, this.v);
}
let ni = !1, W = null;
function je(e) {
  W = e;
}
function mt(e, t = !1, n) {
  W = {
    p: W,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function wt(e) {
  var t = (
    /** @type {ComponentContext} */
    W
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Bn(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, W = t.p, e ?? /** @type {T} */
  {};
}
function xn() {
  return !0;
}
let Ee = [];
function kn() {
  var e = Ee;
  Ee = [], Dr(e);
}
function be(e) {
  if (Ee.length === 0 && !Ue) {
    var t = Ee;
    queueMicrotask(() => {
      t === Ee && kn();
    });
  }
  Ee.push(e);
}
function ri() {
  for (; Ee.length > 0; )
    kn();
}
function Cn(e) {
  var t = E;
  if (t === null)
    return y.f |= me, e;
  if ((t.f & pt) === 0) {
    if ((t.f & _t) === 0)
      throw e;
    t.b.error(e);
  } else
    He(e, t);
}
function He(e, t) {
  for (; t !== null; ) {
    if ((t.f & _t) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e;
}
const et = /* @__PURE__ */ new Set();
let A = null, X = null, J = [], bt = null, Tt = !1, Ue = !1;
class ee {
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
  #t = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #e = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #f = 0;
  /**
   * The number of async effects that are currently in flight, _not_ inside a pending boundary
   */
  #n = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #a = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #l = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #i = /* @__PURE__ */ new Set();
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  is_fork = !1;
  is_deferred() {
    return this.is_fork || this.#n > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    J = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of t)
      this.#r(r, n);
    this.is_fork || this.#o(), this.is_deferred() ? (this.#s(n.effects), this.#s(n.render_effects)) : (A = null, rn(n.render_effects), rn(n.effects), this.#a?.resolve()), X = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #r(t, n) {
    t.f ^= M;
    for (var r = t.first; r !== null; ) {
      var i = r.f, s = (i & (pe | ye)) !== 0, l = s && (i & M) !== 0, a = l || (i & U) !== 0 || this.skipped_effects.has(r);
      if ((r.f & _t) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: []
      }), !a && r.fn !== null) {
        s ? r.f ^= M : (i & jt) !== 0 ? n.effects.push(r) : Xe(r) && ((r.f & _e) !== 0 && this.#l.add(r), Je(r));
        var f = r.first;
        if (f !== null) {
          r = f;
          continue;
        }
      }
      var u = r.parent;
      for (r = r.next; r === null && u !== null; )
        u === n.effect && (this.#s(n.effects), this.#s(n.render_effects), n = /** @type {EffectTarget} */
        n.parent), r = u.next, u = u.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #s(t) {
    for (const n of t)
      (n.f & F) !== 0 ? this.#l.add(n) : (n.f & le) !== 0 && this.#i.add(n), this.#u(n.deps), I(n, M);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(t) {
    if (t !== null)
      for (const n of t)
        (n.f & N) === 0 || (n.f & Ae) === 0 || (n.f ^= Ae, this.#u(
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
  capture(t, n) {
    this.previous.has(t) || this.previous.set(t, n), (t.f & me) === 0 && (this.current.set(t, t.v), X?.set(t, t.v));
  }
  activate() {
    A = this, this.apply();
  }
  deactivate() {
    A === this && (A = null, X = null);
  }
  flush() {
    if (this.activate(), J.length > 0) {
      if (An(), A !== null && A !== this)
        return;
    } else this.#f === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of this.#e) t(this);
    this.#e.clear();
  }
  #o() {
    if (this.#n === 0) {
      for (const t of this.#t) t();
      this.#t.clear();
    }
    this.#f === 0 && this.#c();
  }
  #c() {
    if (et.size > 1) {
      this.previous.clear();
      var t = X, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: []
      };
      for (const s of et) {
        if (s === this) {
          n = !1;
          continue;
        }
        const l = [];
        for (const [f, u] of this.current) {
          if (s.current.has(f))
            if (n && u !== s.current.get(f))
              s.current.set(f, u);
            else
              continue;
          l.push(f);
        }
        if (l.length === 0)
          continue;
        const a = [...s.current.keys()].filter((f) => !this.current.has(f));
        if (a.length > 0) {
          var i = J;
          J = [];
          const f = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const c of l)
            Rn(c, a, f, u);
          if (J.length > 0) {
            A = s, s.apply();
            for (const c of J)
              s.#r(c, r);
            s.deactivate();
          }
          J = i;
        }
      }
      A = null, X = t;
    }
    this.committed = !0, et.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    this.#f += 1, t && (this.#n += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    this.#f -= 1, t && (this.#n -= 1), this.revive();
  }
  revive() {
    for (const t of this.#l)
      this.#i.delete(t), I(t, F), Re(t);
    for (const t of this.#i)
      I(t, le), Re(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    this.#t.add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#a ??= bn()).promise;
  }
  static ensure() {
    if (A === null) {
      const t = A = new ee();
      et.add(A), Ue || ee.enqueue(() => {
        A === t && t.flush();
      });
    }
    return A;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    be(t);
  }
  apply() {
  }
}
function x(e) {
  var t = Ue;
  Ue = !0;
  try {
    for (var n; ; ) {
      if (ri(), J.length === 0 && (A?.flush(), J.length === 0))
        return bt = null, /** @type {T} */
        n;
      An();
    }
  } finally {
    Ue = t;
  }
}
function An() {
  var e = ke;
  Tt = !0;
  var t = null;
  try {
    var n = 0;
    for (ot(!0); J.length > 0; ) {
      var r = ee.ensure();
      if (n++ > 1e3) {
        var i, s;
        ii();
      }
      r.process(J), we.clear();
    }
  } finally {
    Tt = !1, ot(e), bt = null;
  }
}
function ii() {
  try {
    Ur();
  } catch (e) {
    He(e, bt);
  }
}
let oe = null;
function rn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (he | U)) === 0 && Xe(r) && (oe = /* @__PURE__ */ new Set(), Je(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? Kn(r) : r.fn = null), oe?.size > 0)) {
        we.clear();
        for (const i of oe) {
          if ((i.f & (he | U)) !== 0) continue;
          const s = [i];
          let l = i.parent;
          for (; l !== null; )
            oe.has(l) && (oe.delete(l), s.push(l)), l = l.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const f = s[a];
            (f.f & (he | U)) === 0 && Je(f);
          }
        }
        oe.clear();
      }
    }
    oe = null;
  }
}
function Rn(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & N) !== 0 ? Rn(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (qt | _e)) !== 0 && (s & F) === 0 && Tn(i, t, r) && (I(i, F), Re(
        /** @type {Effect} */
        i
      ));
    }
}
function Tn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (t.includes(i))
        return !0;
      if ((i.f & N) !== 0 && Tn(
        /** @type {Derived} */
        i,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function Re(e) {
  for (var t = bt = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Tt && t === E && (n & _e) !== 0 && (n & yn) === 0)
      return;
    if ((n & (ye | pe)) !== 0) {
      if ((n & M) === 0) return;
      t.f ^= M;
    }
  }
  J.push(t);
}
function si(e) {
  let t = 0, n = Te(0), r;
  return () => {
    Ge() && (m(n), $t(() => (t === 0 && (r = Ze(() => e(() => Ye(n)))), t += 1, () => {
      be(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Ye(n));
      });
    })));
  };
}
var li = We | Ne | _t;
function fi(e, t, n) {
  new ui(e, t, n);
}
class ui {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #f = S ? C : null;
  /** @type {BoundaryProps} */
  #n;
  /** @type {((anchor: Node) => void)} */
  #a;
  /** @type {Effect} */
  #l;
  /** @type {Effect | null} */
  #i = null;
  /** @type {Effect | null} */
  #r = null;
  /** @type {Effect | null} */
  #s = null;
  /** @type {DocumentFragment | null} */
  #u = null;
  /** @type {TemplateNode | null} */
  #o = null;
  #c = 0;
  #h = 0;
  #v = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #d = null;
  #w = si(() => (this.#d = Te(this.#c), () => {
    this.#d = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#n = n, this.#a = r, this.parent = /** @type {Effect} */
    E.b, this.#t = !!this.#n.pending, this.#l = Yn(() => {
      if (E.b = this, S) {
        const s = this.#f;
        Bt(), /** @type {Comment} */
        s.nodeType === Ve && /** @type {Comment} */
        s.data === zt ? this.#y() : this.#b();
      } else {
        var i = this.#g();
        try {
          this.#i = ie(() => r(i));
        } catch (s) {
          this.error(s);
        }
        this.#h > 0 ? this.#p() : this.#t = !1;
      }
      return () => {
        this.#o?.remove();
      };
    }, li), S && (this.#e = C);
  }
  #b() {
    try {
      this.#i = ie(() => this.#a(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #y() {
    const t = this.#n.pending;
    t && (this.#r = ie(() => t(this.#e)), ee.enqueue(() => {
      var n = this.#g();
      this.#i = this.#_(() => (ee.ensure(), ie(() => this.#a(n)))), this.#h > 0 ? this.#p() : (ze(
        /** @type {Effect} */
        this.#r,
        () => {
          this.#r = null;
        }
      ), this.#t = !1);
    }));
  }
  #g() {
    var t = this.#e;
    return this.#t && (this.#o = de(), this.#e.before(this.#o), t = this.#o), t;
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return this.#t || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!this.#n.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #_(t) {
    var n = E, r = y, i = W;
    fe(this.#l), z(this.#l), je(this.#l.ctx);
    try {
      return t();
    } catch (s) {
      return Cn(s), null;
    } finally {
      fe(n), z(r), je(i);
    }
  }
  #p() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#n.pending
    );
    this.#i !== null && (this.#u = document.createDocumentFragment(), this.#u.append(
      /** @type {TemplateNode} */
      this.#o
    ), xi(this.#i, this.#u)), this.#r === null && (this.#r = ie(() => t(this.#e)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #m(t) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#m(t);
      return;
    }
    this.#h += t, this.#h === 0 && (this.#t = !1, this.#r && ze(this.#r, () => {
      this.#r = null;
    }), this.#u && (this.#e.before(this.#u), this.#u = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#m(t), this.#c += t, this.#d && qe(this.#d, this.#c);
  }
  get_effect_pending() {
    return this.#w(), m(
      /** @type {Source<number>} */
      this.#d
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = this.#n.onerror;
    let r = this.#n.failed;
    if (this.#v || !n && !r)
      throw t;
    this.#i && (Z(this.#i), this.#i = null), this.#r && (Z(this.#r), this.#r = null), this.#s && (Z(this.#s), this.#s = null), S && (Y(
      /** @type {TemplateNode} */
      this.#f
    ), Qr(), Y(Rt()));
    var i = !1, s = !1;
    const l = () => {
      if (i) {
        Zr();
        return;
      }
      i = !0, s && Xr(), ee.ensure(), this.#c = 0, this.#s !== null && ze(this.#s, () => {
        this.#s = null;
      }), this.#t = this.has_pending_snippet(), this.#i = this.#_(() => (this.#v = !1, ie(() => this.#a(this.#e)))), this.#h > 0 ? this.#p() : this.#t = !1;
    };
    var a = y;
    try {
      z(null), s = !0, n?.(t, l), s = !1;
    } catch (f) {
      He(f, this.#l && this.#l.parent);
    } finally {
      z(a);
    }
    r && be(() => {
      this.#s = this.#_(() => {
        ee.ensure(), this.#v = !0;
        try {
          return ie(() => {
            r(
              this.#e,
              () => t,
              () => l
            );
          });
        } catch (f) {
          return He(
            f,
            /** @type {Effect} */
            this.#l.parent
          ), null;
        } finally {
          this.#v = !1;
        }
      });
    });
  }
}
function ai(e, t, n, r) {
  const i = yt;
  if (n.length === 0 && e.length === 0) {
    r(t.map(i));
    return;
  }
  var s = A, l = (
    /** @type {Effect} */
    E
  ), a = oi();
  function f() {
    Promise.all(n.map((u) => /* @__PURE__ */ ci(u))).then((u) => {
      a();
      try {
        r([...t.map(i), ...u]);
      } catch (c) {
        (l.f & he) === 0 && He(c, l);
      }
      s?.deactivate(), at();
    }).catch((u) => {
      He(u, l);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return f();
    } finally {
      s?.deactivate(), at();
    }
  }) : f();
}
function oi() {
  var e = E, t = y, n = W, r = A;
  return function(s = !0) {
    fe(e), z(t), je(n), s && r?.activate();
  };
}
function at() {
  fe(null), z(null), je(null);
}
// @__NO_SIDE_EFFECTS__
function yt(e) {
  var t = N | F, n = y !== null && (y.f & N) !== 0 ? (
    /** @type {Derived} */
    y
  ) : null;
  return E !== null && (E.f |= Ne), {
    ctx: W,
    deps: null,
    effects: null,
    equals: En,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      P
    ),
    wv: 0,
    parent: n ?? E,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ci(e, t) {
  let n = (
    /** @type {Effect | null} */
    E
  );
  n === null && Hr();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Te(
    /** @type {V} */
    P
  ), l = !y, a = /* @__PURE__ */ new Map();
  return $i(() => {
    var f = bn();
    i = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).then(() => {
        u === A && u.committed && u.deactivate(), at();
      });
    } catch (h) {
      f.reject(h), at();
    }
    var u = (
      /** @type {Batch} */
      A
    );
    if (l) {
      var c = !r.is_pending();
      r.update_pending_count(1), u.increment(c), a.get(u)?.reject(De), a.delete(u), a.set(u, f);
    }
    const v = (h, o = void 0) => {
      if (u.activate(), o)
        o !== De && (s.f |= me, qe(s, o));
      else {
        (s.f & me) !== 0 && (s.f ^= me), qe(s, h);
        for (const [_, $] of a) {
          if (a.delete(_), _ === u) break;
          $.reject(De);
        }
      }
      l && (r.update_pending_count(-1), u.decrement(c));
    };
    f.promise.then(v, (h) => v(null, h || "unknown"));
  }), Vn(() => {
    for (const f of a.values())
      f.reject(De);
  }), new Promise((f) => {
    function u(c) {
      function v() {
        c === i ? f(s) : u(i);
      }
      c.then(v, v);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function re(e) {
  const t = /* @__PURE__ */ yt(e);
  return Qn(t), t;
}
// @__NO_SIDE_EFFECTS__
function On(e) {
  const t = /* @__PURE__ */ yt(e);
  return t.equals = Sn, t;
}
function Nn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Z(
        /** @type {Effect} */
        t[n]
      );
  }
}
function hi(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & N) === 0)
      return (t.f & he) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Ut(e) {
  var t, n = E;
  fe(hi(e));
  try {
    e.f &= ~Ae, Nn(e), t = rr(e);
  } finally {
    fe(n);
  }
  return t;
}
function Pn(e) {
  var t = Ut(e);
  if (e.equals(t) || (A?.is_fork || (e.v = t), e.wv = tr()), !Pe)
    if (X !== null)
      (Ge() || A?.is_fork) && X.set(e, t);
    else {
      var n = (e.f & te) === 0 ? le : M;
      I(e, n);
    }
}
let Ot = /* @__PURE__ */ new Set();
const we = /* @__PURE__ */ new Map();
let Mn = !1;
function Te(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: En,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function V(e, t) {
  const n = Te(e);
  return Qn(n), n;
}
// @__NO_SIDE_EFFECTS__
function In(e, t = !1, n = !0) {
  const r = Te(e);
  return t || (r.equals = Sn), r;
}
function B(e, t, n = !1) {
  y !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!se || (y.f & nn) !== 0) && xn() && (y.f & (N | _e | qt | nn)) !== 0 && !ve?.includes(e) && Jr();
  let r = n ? Le(t) : t;
  return qe(e, r);
}
function qe(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Pe ? we.set(e, t) : we.set(e, n), e.v = t;
    var r = ee.ensure();
    r.capture(e, n), (e.f & N) !== 0 && ((e.f & F) !== 0 && Ut(
      /** @type {Derived} */
      e
    ), I(e, (e.f & te) !== 0 ? M : le)), e.wv = tr(), Dn(e, F), E !== null && (E.f & M) !== 0 && (E.f & (pe | ye)) === 0 && (K === null ? ki([e]) : K.push(e)), !r.is_fork && Ot.size > 0 && !Mn && di();
  }
  return t;
}
function di() {
  Mn = !1;
  var e = ke;
  ot(!0);
  const t = Array.from(Ot);
  try {
    for (const n of t)
      (n.f & M) !== 0 && I(n, le), Xe(n) && Je(n);
  } finally {
    ot(e);
  }
  Ot.clear();
}
function Ye(e) {
  B(e, e.v + 1);
}
function Dn(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], l = s.f, a = (l & F) === 0;
      if (a && I(s, t), (l & N) !== 0) {
        var f = (
          /** @type {Derived} */
          s
        );
        X?.delete(f), (l & Ae) === 0 && (l & te && (s.f |= Ae), Dn(f, le));
      } else a && ((l & _e) !== 0 && oe !== null && oe.add(
        /** @type {Effect} */
        s
      ), Re(
        /** @type {Effect} */
        s
      ));
    }
}
function Le(e) {
  if (typeof e != "object" || e === null || xe in e)
    return e;
  const t = wn(e);
  if (t !== Mr && t !== Ir)
    return e;
  var n = /* @__PURE__ */ new Map(), r = mn(e), i = /* @__PURE__ */ V(0), s = Ce, l = (a) => {
    if (Ce === s)
      return a();
    var f = y, u = Ce;
    z(null), an(s);
    var c = a();
    return z(f), an(u), c;
  };
  return r && n.set("length", /* @__PURE__ */ V(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Gr();
        var c = n.get(f);
        return c === void 0 ? c = l(() => {
          var v = /* @__PURE__ */ V(u.value);
          return n.set(f, v), v;
        }) : B(c, u.value, !0), !0;
      },
      deleteProperty(a, f) {
        var u = n.get(f);
        if (u === void 0) {
          if (f in a) {
            const c = l(() => /* @__PURE__ */ V(P));
            n.set(f, c), Ye(i);
          }
        } else
          B(u, P), Ye(i);
        return !0;
      },
      get(a, f, u) {
        if (f === xe)
          return e;
        var c = n.get(f), v = f in a;
        if (c === void 0 && (!v || Se(a, f)?.writable) && (c = l(() => {
          var o = Le(v ? a[f] : P), _ = /* @__PURE__ */ V(o);
          return _;
        }), n.set(f, c)), c !== void 0) {
          var h = m(c);
          return h === P ? void 0 : h;
        }
        return Reflect.get(a, f, u);
      },
      getOwnPropertyDescriptor(a, f) {
        var u = Reflect.getOwnPropertyDescriptor(a, f);
        if (u && "value" in u) {
          var c = n.get(f);
          c && (u.value = m(c));
        } else if (u === void 0) {
          var v = n.get(f), h = v?.v;
          if (v !== void 0 && h !== P)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return u;
      },
      has(a, f) {
        if (f === xe)
          return !0;
        var u = n.get(f), c = u !== void 0 && u.v !== P || Reflect.has(a, f);
        if (u !== void 0 || E !== null && (!c || Se(a, f)?.writable)) {
          u === void 0 && (u = l(() => {
            var h = c ? Le(a[f]) : P, o = /* @__PURE__ */ V(h);
            return o;
          }), n.set(f, u));
          var v = m(u);
          if (v === P)
            return !1;
        }
        return c;
      },
      set(a, f, u, c) {
        var v = n.get(f), h = f in a;
        if (r && f === "length")
          for (var o = u; o < /** @type {Source<number>} */
          v.v; o += 1) {
            var _ = n.get(o + "");
            _ !== void 0 ? B(_, P) : o in a && (_ = l(() => /* @__PURE__ */ V(P)), n.set(o + "", _));
          }
        if (v === void 0)
          (!h || Se(a, f)?.writable) && (v = l(() => /* @__PURE__ */ V(void 0)), B(v, Le(u)), n.set(f, v));
        else {
          h = v.v !== P;
          var $ = l(() => Le(u));
          B(v, $);
        }
        var d = Reflect.getOwnPropertyDescriptor(a, f);
        if (d?.set && d.set.call(c, u), !h) {
          if (r && typeof f == "string") {
            var g = (
              /** @type {Source<number>} */
              n.get("length")
            ), b = Number(f);
            Number.isInteger(b) && b >= g.v && B(g, b + 1);
          }
          Ye(i);
        }
        return !0;
      },
      ownKeys(a) {
        m(i);
        var f = Reflect.ownKeys(a).filter((v) => {
          var h = n.get(v);
          return h === void 0 || h.v !== P;
        });
        for (var [u, c] of n)
          c.v !== P && !(u in a) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        Kr();
      }
    }
  );
}
function sn(e) {
  try {
    if (e !== null && typeof e == "object" && xe in e)
      return e[xe];
  } catch {
  }
  return e;
}
function vi(e, t) {
  return Object.is(sn(e), sn(t));
}
var ln, Ln, zn, Fn;
function Nt() {
  if (ln === void 0) {
    ln = window, Ln = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    zn = Se(t, "firstChild").get, Fn = Se(t, "nextSibling").get, tn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), tn(n) && (n.__t = void 0);
  }
}
function de(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Oe(e) {
  return (
    /** @type {TemplateNode | null} */
    zn.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function ue(e) {
  return (
    /** @type {TemplateNode | null} */
    Fn.call(e)
  );
}
function Pt(e, t) {
  if (!S)
    return /* @__PURE__ */ Oe(e);
  var n = /* @__PURE__ */ Oe(C);
  if (n === null)
    n = C.appendChild(de());
  else if (t && n.nodeType !== Vt) {
    var r = de();
    return n?.before(r), Y(r), r;
  }
  return Y(n), n;
}
function _i(e, t = !1) {
  if (!S) {
    var n = /* @__PURE__ */ Oe(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ ue(n) : n;
  }
  if (t && C?.nodeType !== Vt) {
    var r = de();
    return C?.before(r), Y(r), r;
  }
  return C;
}
function jn(e, t = 1, n = !1) {
  let r = S ? C : e;
  for (var i; t--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ ue(r);
  if (!S)
    return r;
  if (n && r?.nodeType !== Vt) {
    var s = de();
    return r === null ? i?.after(s) : r.before(s), Y(s), s;
  }
  return Y(r), r;
}
function Hn(e) {
  e.textContent = "";
}
function pi() {
  return !1;
}
let fn = !1;
function qn() {
  fn || (fn = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Yt(e) {
  var t = y, n = E;
  z(null), fe(null);
  try {
    return e();
  } finally {
    z(t), fe(n);
  }
}
function gi(e, t, n, r = n) {
  e.addEventListener(t, () => Yt(n));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), r(!0);
  } : e.__on_r = () => r(!0), qn();
}
function mi(e) {
  E === null && (y === null && Br(), Vr()), Pe && qr();
}
function wi(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ae(e, t, n) {
  var r = E;
  r !== null && (r.f & U) !== 0 && (e |= U);
  var i = {
    ctx: W,
    deps: null,
    nodes: null,
    f: e | F | te,
    first: null,
    fn: t,
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
      Je(i), i.f |= pt;
    } catch (a) {
      throw Z(i), a;
    }
  else t !== null && Re(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & Ne) === 0 && (s = s.first, (e & _e) !== 0 && (e & We) !== 0 && s !== null && (s.f |= We)), s !== null && (s.parent = r, r !== null && wi(s, r), y !== null && (y.f & N) !== 0 && (e & ye) === 0)) {
    var l = (
      /** @type {Derived} */
      y
    );
    (l.effects ??= []).push(s);
  }
  return i;
}
function Ge() {
  return y !== null && !se;
}
function Vn(e) {
  const t = ae(Ht, null, !1);
  return I(t, M), t.teardown = e, t;
}
function Wt(e) {
  mi();
  var t = (
    /** @type {Effect} */
    E.f
  ), n = !y && (t & pe) !== 0 && (t & pt) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      W
    );
    (r.e ??= []).push(e);
  } else
    return Bn(e);
}
function Bn(e) {
  return ae(jt | zr, e, !1);
}
function bi(e) {
  ee.ensure();
  const t = ae(ye | Ne, e, !0);
  return () => {
    Z(t);
  };
}
function yi(e) {
  ee.ensure();
  const t = ae(ye | Ne, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? ze(t, () => {
      Z(t), r(void 0);
    }) : (Z(t), r(void 0));
  });
}
function Gt(e) {
  return ae(jt, e, !1);
}
function $i(e) {
  return ae(qt | Ne, e, !0);
}
function $t(e, t = 0) {
  return ae(Ht | t, e, !0);
}
function Un(e, t = [], n = [], r = []) {
  ai(r, t, n, (i) => {
    ae(Ht, () => e(...i.map(m)), !0);
  });
}
function Yn(e, t = 0) {
  var n = ae(_e | t, e, !0);
  return n;
}
function ie(e) {
  return ae(pe | Ne, e, !0);
}
function Wn(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Pe, r = y;
    un(!0), z(null);
    try {
      t.call(null);
    } finally {
      un(n), z(r);
    }
  }
}
function Gn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Yt(() => {
      i.abort(De);
    });
    var r = n.next;
    (n.f & ye) !== 0 ? n.parent = null : Z(n, t), n = r;
  }
}
function Ei(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & pe) === 0 && Z(t), t = n;
  }
}
function Z(e, t = !0) {
  var n = !1;
  (t || (e.f & yn) !== 0) && e.nodes !== null && e.nodes.end !== null && (Si(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Gn(e, t && !n), ct(e, 0), I(e, he);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Wn(e);
  var i = e.parent;
  i !== null && i.first !== null && Kn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function Si(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ ue(e);
    e.remove(), e = n;
  }
}
function Kn(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function ze(e, t, n = !0) {
  var r = [];
  Jn(e, r, !0);
  var i = () => {
    n && Z(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var l = () => --s || i();
    for (var a of r)
      a.out(l);
  } else
    i();
}
function Jn(e, t, n) {
  if ((e.f & U) === 0) {
    e.f ^= U;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var i = e.first; i !== null; ) {
      var s = i.next, l = (i.f & We) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & pe) !== 0 && (e.f & _e) !== 0;
      Jn(i, t, l ? n : !1), i = s;
    }
  }
}
function Xn(e) {
  Zn(e, !0);
}
function Zn(e, t) {
  if ((e.f & U) !== 0) {
    e.f ^= U, (e.f & M) === 0 && (I(e, F), Re(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & We) !== 0 || (n.f & pe) !== 0;
      Zn(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const l of s)
        (l.is_global || t) && l.in();
  }
}
function xi(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ ue(n);
      t.append(n), n = i;
    }
}
let ke = !1;
function ot(e) {
  ke = e;
}
let Pe = !1;
function un(e) {
  Pe = e;
}
let y = null, se = !1;
function z(e) {
  y = e;
}
let E = null;
function fe(e) {
  E = e;
}
let ve = null;
function Qn(e) {
  y !== null && (ve === null ? ve = [e] : ve.push(e));
}
let L = null, q = 0, K = null;
function ki(e) {
  K = e;
}
let er = 1, Ke = 0, Ce = Ke;
function an(e) {
  Ce = e;
}
function tr() {
  return ++er;
}
function Xe(e) {
  var t = e.f;
  if ((t & F) !== 0)
    return !0;
  if (t & N && (e.f &= ~Ae), (t & le) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, i = 0; i < r; i++) {
        var s = n[i];
        if (Xe(
          /** @type {Derived} */
          s
        ) && Pn(
          /** @type {Derived} */
          s
        ), s.wv > e.wv)
          return !0;
      }
    (t & te) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    X === null && I(e, M);
  }
  return !1;
}
function nr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !ve?.includes(e))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & N) !== 0 ? nr(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? I(s, F) : (s.f & M) !== 0 && I(s, le), Re(
        /** @type {Effect} */
        s
      ));
    }
}
function rr(e) {
  var t = L, n = q, r = K, i = y, s = ve, l = W, a = se, f = Ce, u = e.f;
  L = /** @type {null | Value[]} */
  null, q = 0, K = null, y = (u & (pe | ye)) === 0 ? e : null, ve = null, je(e.ctx), se = !1, Ce = ++Ke, e.ac !== null && (Yt(() => {
    e.ac.abort(De);
  }), e.ac = null);
  try {
    e.f |= At;
    var c = (
      /** @type {Function} */
      e.fn
    ), v = c(), h = e.deps;
    if (L !== null) {
      var o;
      if (ct(e, q), h !== null && q > 0)
        for (h.length = q + L.length, o = 0; o < L.length; o++)
          h[q + o] = L[o];
      else
        e.deps = h = L;
      if (Ge() && (e.f & te) !== 0)
        for (o = q; o < h.length; o++)
          (h[o].reactions ??= []).push(e);
    } else h !== null && q < h.length && (ct(e, q), h.length = q);
    if (xn() && K !== null && !se && h !== null && (e.f & (N | le | F)) === 0)
      for (o = 0; o < /** @type {Source[]} */
      K.length; o++)
        nr(
          K[o],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (Ke++, K !== null && (r === null ? r = K : r.push(.../** @type {Source[]} */
    K))), (e.f & me) !== 0 && (e.f ^= me), v;
  } catch (_) {
    return Cn(_);
  } finally {
    e.f ^= At, L = t, q = n, K = r, y = i, ve = s, je(l), se = a, Ce = f;
  }
}
function Ci(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Nr.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && (t.f & N) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (L === null || !L.includes(t)) && (I(t, le), (t.f & te) !== 0 && (t.f ^= te, t.f &= ~Ae), Nn(
    /** @type {Derived} **/
    t
  ), ct(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ct(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Ci(e, n[r]);
}
function Je(e) {
  var t = e.f;
  if ((t & he) === 0) {
    I(e, M);
    var n = E, r = ke;
    E = e, ke = !0;
    try {
      (t & (_e | Lr)) !== 0 ? Ei(e) : Gn(e), Wn(e);
      var i = rr(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = er;
      var s;
      Ct && ni && (e.f & F) !== 0 && e.deps;
    } finally {
      ke = r, E = n;
    }
  }
}
function m(e) {
  var t = e.f, n = (t & N) !== 0;
  if (y !== null && !se) {
    var r = E !== null && (E.f & he) !== 0;
    if (!r && !ve?.includes(e)) {
      var i = y.deps;
      if ((y.f & At) !== 0)
        e.rv < Ke && (e.rv = Ke, L === null && i !== null && i[q] === e ? q++ : L === null ? L = [e] : L.includes(e) || L.push(e));
      else {
        (y.deps ??= []).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [y] : s.includes(y) || s.push(y);
      }
    }
  }
  if (Pe) {
    if (we.has(e))
      return we.get(e);
    if (n) {
      var l = (
        /** @type {Derived} */
        e
      ), a = l.v;
      return ((l.f & M) === 0 && l.reactions !== null || sr(l)) && (a = Ut(l)), we.set(l, a), a;
    }
  } else n && (!X?.has(e) || A?.is_fork && !Ge()) && (l = /** @type {Derived} */
  e, Xe(l) && Pn(l), ke && Ge() && (l.f & te) === 0 && ir(l));
  if (X?.has(e))
    return X.get(e);
  if ((e.f & me) !== 0)
    throw e.v;
  return e.v;
}
function ir(e) {
  if (e.deps !== null) {
    e.f ^= te;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & N) !== 0 && (t.f & te) === 0 && ir(
        /** @type {Derived} */
        t
      );
  }
}
function sr(e) {
  if (e.v === P) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (we.has(t) || (t.f & N) !== 0 && sr(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Ze(e) {
  var t = se;
  try {
    return se = !0, e();
  } finally {
    se = t;
  }
}
const Ai = -7169;
function I(e, t) {
  e.f = e.f & Ai | t;
}
const lr = /* @__PURE__ */ new Set(), Mt = /* @__PURE__ */ new Set();
function Ri(e) {
  for (var t = 0; t < e.length; t++)
    lr.add(e[t]);
  for (var n of Mt)
    n(e);
}
let on = null;
function tt(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  on = e;
  var l = 0, a = on === e && e.__root;
  if (a) {
    var f = i.indexOf(a);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    f <= u && (l = f);
  }
  if (s = /** @type {Element} */
  i[l] || e.target, s !== t) {
    ft(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var c = y, v = E;
    z(null), fe(null);
    try {
      for (var h, o = []; s !== null; ) {
        var _ = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var $ = s["__" + r];
          $ != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && $.call(s, e);
        } catch (d) {
          h ? o.push(d) : h = d;
        }
        if (e.cancelBubble || _ === t || _ === null)
          break;
        s = _;
      }
      if (h) {
        for (let d of o)
          queueMicrotask(() => {
            throw d;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, z(c), fe(v);
    }
  }
}
function Ti(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function rt(e, t) {
  var n = (
    /** @type {Effect} */
    E
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Kt(e, t) {
  var n = (t & Rr) !== 0, r = (t & Tr) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if (S)
      return rt(C, null), C;
    i === void 0 && (i = Ti(s ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Oe(i)));
    var l = (
      /** @type {TemplateNode} */
      r || Ln ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Oe(l)
      ), f = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      rt(a, f);
    } else
      rt(l, l);
    return l;
  };
}
function Et(e, t) {
  if (S) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      E
    );
    ((n.f & pt) === 0 || n.nodes.end === null) && (n.nodes.end = C), Bt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Oi = ["touchstart", "touchmove"];
function Ni(e) {
  return Oi.includes(e);
}
function Pi(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function fr(e, t) {
  return ur(e, t);
}
function Mi(e, t) {
  Nt(), t.intro = t.intro ?? !1;
  const n = t.target, r = S, i = C;
  try {
    for (var s = /* @__PURE__ */ Oe(n); s && (s.nodeType !== Ve || /** @type {Comment} */
    s.data !== gn); )
      s = /* @__PURE__ */ ue(s);
    if (!s)
      throw Fe;
    $e(!0), Y(
      /** @type {Comment} */
      s
    );
    const l = ur(e, { ...t, anchor: s });
    return $e(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l instanceof Error && l.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw l;
    return l !== Fe && console.warn("Failed to hydrate: ", l), t.recover === !1 && Yr(), Nt(), Hn(n), $e(!1), fr(e, t);
  } finally {
    $e(r), Y(i);
  }
}
const Ie = /* @__PURE__ */ new Map();
function ur(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: l = !0 }) {
  Nt();
  var a = /* @__PURE__ */ new Set(), f = (v) => {
    for (var h = 0; h < v.length; h++) {
      var o = v[h];
      if (!a.has(o)) {
        a.add(o);
        var _ = Ni(o);
        t.addEventListener(o, tt, { passive: _ });
        var $ = Ie.get(o);
        $ === void 0 ? (document.addEventListener(o, tt, { passive: _ }), Ie.set(o, 1)) : Ie.set(o, $ + 1);
      }
    }
  };
  f(vt(lr)), Mt.add(f);
  var u = void 0, c = yi(() => {
    var v = n ?? t.appendChild(de());
    return fi(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (h) => {
        if (s) {
          mt({});
          var o = (
            /** @type {ComponentContext} */
            W
          );
          o.c = s;
        }
        if (i && (r.$$events = i), S && rt(
          /** @type {TemplateNode} */
          h,
          null
        ), u = e(h, r) || {}, S && (E.nodes.end = C, C === null || C.nodeType !== Ve || /** @type {Comment} */
        C.data !== Ft))
          throw gt(), Fe;
        s && wt();
      }
    ), () => {
      for (var h of a) {
        t.removeEventListener(h, tt);
        var o = (
          /** @type {number} */
          Ie.get(h)
        );
        --o === 0 ? (document.removeEventListener(h, tt), Ie.delete(h)) : Ie.set(h, o);
      }
      Mt.delete(f), v !== n && v.parentNode?.removeChild(v);
    };
  });
  return It.set(u, c), u;
}
let It = /* @__PURE__ */ new WeakMap();
function Ii(e, t) {
  const n = It.get(e);
  return n ? (It.delete(e), n(t)) : Promise.resolve();
}
function ar(e) {
  W === null && jr(), Wt(() => {
    const t = Ze(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function or(e, t) {
  return t;
}
function Di(e, t, n) {
  for (var r = [], i = t.length, s, l = t.length, a = 0; a < i; a++) {
    let v = t[a];
    ze(
      v,
      () => {
        if (s) {
          if (s.pending.delete(v), s.done.add(v), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Dt(vt(s.done)), h.delete(s), h.size === 0 && (e.outrogroups = null);
          }
        } else
          l -= 1;
      },
      !1
    );
  }
  if (l === 0) {
    var f = r.length === 0 && n !== null;
    if (f) {
      var u = (
        /** @type {Element} */
        n
      ), c = (
        /** @type {Element} */
        u.parentNode
      );
      Hn(c), c.append(u), e.items.clear();
    }
    Dt(t, !f);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(s);
}
function Dt(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Z(e[n], t);
}
var cn;
function cr(e, t, n, r, i, s = null) {
  var l = e, a = /* @__PURE__ */ new Map(), f = (t & pn) !== 0;
  if (f) {
    var u = (
      /** @type {Element} */
      e
    );
    l = S ? Y(/* @__PURE__ */ Oe(u)) : u.appendChild(de());
  }
  S && Bt();
  var c = null, v = /* @__PURE__ */ On(() => {
    var g = n();
    return mn(g) ? g : g == null ? [] : vt(g);
  }), h, o = !0;
  function _() {
    d.fallback = c, Li(d, h, l, t, r), c !== null && (h.length === 0 ? (c.f & ce) === 0 ? Xn(c) : (c.f ^= ce, Be(c, null, l)) : ze(c, () => {
      c = null;
    }));
  }
  var $ = Yn(() => {
    h = /** @type {V[]} */
    m(v);
    var g = h.length;
    let b = !1;
    if (S) {
      var T = ei(l) === zt;
      T !== (g === 0) && (l = Rt(), Y(l), $e(!1), b = !0);
    }
    for (var R = /* @__PURE__ */ new Set(), w = (
      /** @type {Batch} */
      A
    ), Q = pi(), D = 0; D < g; D += 1) {
      S && C.nodeType === Ve && /** @type {Comment} */
      C.data === Ft && (l = /** @type {Comment} */
      C, b = !0, $e(!1));
      var j = h[D], H = r(j, D), O = o ? null : a.get(H);
      O ? (O.v && qe(O.v, j), O.i && qe(O.i, D), Q && w.skipped_effects.delete(O.e)) : (O = zi(
        a,
        o ? l : cn ??= de(),
        j,
        H,
        D,
        i,
        t,
        n
      ), o || (O.e.f |= ce), a.set(H, O)), R.add(H);
    }
    if (g === 0 && s && !c && (o ? c = ie(() => s(l)) : (c = ie(() => s(cn ??= de())), c.f |= ce)), S && g > 0 && Y(Rt()), !o)
      if (Q) {
        for (const [St, Qe] of a)
          R.has(St) || w.skipped_effects.add(Qe.e);
        w.oncommit(_), w.ondiscard(() => {
        });
      } else
        _();
    b && $e(!0), m(v);
  }), d = { effect: $, items: a, outrogroups: null, fallback: c };
  o = !1, S && (l = C);
}
function Li(e, t, n, r, i) {
  var s = (r & Er) !== 0, l = t.length, a = e.items, f = e.effect.first, u, c = null, v, h = [], o = [], _, $, d, g;
  if (s)
    for (g = 0; g < l; g += 1)
      _ = t[g], $ = i(_, g), d = /** @type {EachItem} */
      a.get($).e, (d.f & ce) === 0 && (d.nodes?.a?.measure(), (v ??= /* @__PURE__ */ new Set()).add(d));
  for (g = 0; g < l; g += 1) {
    if (_ = t[g], $ = i(_, g), d = /** @type {EachItem} */
    a.get($).e, e.outrogroups !== null)
      for (const O of e.outrogroups)
        O.pending.delete(d), O.done.delete(d);
    if ((d.f & ce) !== 0)
      if (d.f ^= ce, d === f)
        Be(d, null, n);
      else {
        var b = c ? c.next : f;
        d === e.effect.last && (e.effect.last = d.prev), d.prev && (d.prev.next = d.next), d.next && (d.next.prev = d.prev), ge(e, c, d), ge(e, d, b), Be(d, b, n), c = d, h = [], o = [], f = c.next;
        continue;
      }
    if ((d.f & U) !== 0 && (Xn(d), s && (d.nodes?.a?.unfix(), (v ??= /* @__PURE__ */ new Set()).delete(d))), d !== f) {
      if (u !== void 0 && u.has(d)) {
        if (h.length < o.length) {
          var T = o[0], R;
          c = T.prev;
          var w = h[0], Q = h[h.length - 1];
          for (R = 0; R < h.length; R += 1)
            Be(h[R], T, n);
          for (R = 0; R < o.length; R += 1)
            u.delete(o[R]);
          ge(e, w.prev, Q.next), ge(e, c, w), ge(e, Q, T), f = T, c = Q, g -= 1, h = [], o = [];
        } else
          u.delete(d), Be(d, f, n), ge(e, d.prev, d.next), ge(e, d, c === null ? e.effect.first : c.next), ge(e, c, d), c = d;
        continue;
      }
      for (h = [], o = []; f !== null && f !== d; )
        (u ??= /* @__PURE__ */ new Set()).add(f), o.push(f), f = f.next;
      if (f === null)
        continue;
    }
    (d.f & ce) === 0 && h.push(d), c = d, f = d.next;
  }
  if (e.outrogroups !== null) {
    for (const O of e.outrogroups)
      O.pending.size === 0 && (Dt(vt(O.done)), e.outrogroups?.delete(O));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (f !== null || u !== void 0) {
    var D = [];
    if (u !== void 0)
      for (d of u)
        (d.f & U) === 0 && D.push(d);
    for (; f !== null; )
      (f.f & U) === 0 && f !== e.fallback && D.push(f), f = f.next;
    var j = D.length;
    if (j > 0) {
      var H = (r & pn) !== 0 && l === 0 ? n : null;
      if (s) {
        for (g = 0; g < j; g += 1)
          D[g].nodes?.a?.measure();
        for (g = 0; g < j; g += 1)
          D[g].nodes?.a?.fix();
      }
      Di(e, D, H);
    }
  }
  s && be(() => {
    if (v !== void 0)
      for (d of v)
        d.nodes?.a?.apply();
  });
}
function zi(e, t, n, r, i, s, l, a) {
  var f = (l & yr) !== 0 ? (l & Sr) === 0 ? /* @__PURE__ */ In(n, !1, !1) : Te(n) : null, u = (l & $r) !== 0 ? Te(i) : null;
  return {
    v: f,
    i: u,
    e: ie(() => (s(t, f ?? n, u ?? i, a), () => {
      e.delete(r);
    }))
  };
}
function Be(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & ce) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ue(r)
      );
      if (s.before(r), r === i)
        return;
      r = l;
    }
}
function ge(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Jt(e, t) {
  Gt(() => {
    var n = e.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + t.hash)) {
      const i = document.createElement("style");
      i.id = t.hash, i.textContent = t.code, r.appendChild(i);
    }
  });
}
function Fi(e, t, n) {
  var r = e == null ? "" : "" + e;
  return r = r ? r + " " + t : t, r === "" ? null : r;
}
function hn(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var i in e) {
    var s = e[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function ji(e, t) {
  if (t) {
    var n = "", r, i;
    return Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, r && (n += hn(r)), i && (n += hn(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(e);
}
function Hi(e, t, n, r, i, s) {
  var l = e.__className;
  if (S || l !== n || l === void 0) {
    var a = Fi(n, r);
    (!S || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : e.className = a), e.__className = n;
  }
  return s;
}
function xt(e, t = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    t[i] !== s && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, s, r));
  }
}
function it(e, t, n, r) {
  var i = e.__style;
  if (S || i !== t) {
    var s = ji(t, r);
    (!S || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e.__style = t;
  } else r && (Array.isArray(r) ? (xt(e, n?.[0], r[0]), xt(e, n?.[1], r[1], "important")) : xt(e, n, r));
  return r;
}
const qi = /* @__PURE__ */ Symbol("is custom element"), Vi = /* @__PURE__ */ Symbol("is html");
function Bi(e) {
  if (S) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          Lt(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          Lt(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = n, be(n), qn();
  }
}
function Lt(e, t, n, r) {
  var i = Ui(e);
  S && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = n) && (t === "loading" && (e[Fr] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Yi(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Ui(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [qi]: e.nodeName.includes("-"),
      [Vi]: e.namespaceURI === Or
    }
  );
}
var dn = /* @__PURE__ */ new Map();
function Yi(e) {
  var t = e.getAttribute("is") || e.nodeName, n = dn.get(t);
  if (n) return n;
  dn.set(t, n = []);
  for (var r, i = e, s = Element.prototype; s !== i; ) {
    r = Pr(i);
    for (var l in r)
      r[l].set && n.push(l);
    i = wn(i);
  }
  return n;
}
const kt = /* @__PURE__ */ new Set();
function Wi(e, t, n, r, i = r) {
  var s = n.getAttribute("type") === "checkbox", l = e;
  let a = !1;
  if (t !== null)
    for (var f of t)
      l = l[f] ??= [];
  l.push(n), gi(
    n,
    "change",
    () => {
      var u = n.__value;
      s && (u = vn(l, u, n.checked)), i(u);
    },
    // TODO better default value handling
    () => i(s ? [] : null)
  ), $t(() => {
    var u = r();
    if (S && n.defaultChecked !== n.checked) {
      a = !0;
      return;
    }
    s ? (u = u || [], n.checked = u.includes(n.__value)) : n.checked = vi(n.__value, u);
  }), Vn(() => {
    var u = l.indexOf(n);
    u !== -1 && l.splice(u, 1);
  }), kt.has(l) || (kt.add(l), be(() => {
    l.sort((u, c) => u.compareDocumentPosition(c) === 4 ? -1 : 1), kt.delete(l);
  })), be(() => {
    if (a) {
      var u;
      if (s)
        u = vn(l, u, n.checked);
      else {
        var c = l.find((v) => v.checked);
        u = c?.__value;
      }
      i(u);
    }
  });
}
function vn(e, t, n) {
  for (var r = /* @__PURE__ */ new Set(), i = 0; i < e.length; i += 1)
    e[i].checked && r.add(e[i].__value);
  return n || r.delete(t), Array.from(r);
}
class Xt {
  /** */
  #t = /* @__PURE__ */ new WeakMap();
  /** @type {ResizeObserver | undefined} */
  #e;
  /** @type {ResizeObserverOptions} */
  #f;
  /** @static */
  static entries = /* @__PURE__ */ new WeakMap();
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    this.#f = t;
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = this.#t.get(t) || /* @__PURE__ */ new Set();
    return r.add(n), this.#t.set(t, r), this.#n().observe(t, this.#f), () => {
      var i = this.#t.get(t);
      i.delete(n), i.size === 0 && (this.#t.delete(t), this.#e.unobserve(t));
    };
  }
  #n() {
    return this.#e ?? (this.#e = new ResizeObserver(
      /** @param {any} entries */
      (t) => {
        for (var n of t) {
          Xt.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Gi = /* @__PURE__ */ new Xt({
  box: "border-box"
});
function ht(e, t, n) {
  var r = Gi.observe(e, () => n(e[t]));
  Gt(() => (Ze(() => n(e[t])), r));
}
function _n(e, t) {
  return e === t || e?.[xe] === t;
}
function dt(e = {}, t, n, r) {
  return Gt(() => {
    var i, s;
    return $t(() => {
      i = s, s = [], Ze(() => {
        e !== n(...s) && (t(e, ...s), i && _n(n(...i), e) && t(null, ...i));
      });
    }), () => {
      be(() => {
        s && _n(n(...s), e) && t(null, ...s);
      });
    };
  }), e;
}
let nt = !1;
function Ki(e) {
  var t = nt;
  try {
    return nt = !1, [e(), nt];
  } finally {
    nt = t;
  }
}
function k(e, t, n, r) {
  var i = (n & Cr) !== 0, s = (n & Ar) !== 0, l = (
    /** @type {V} */
    r
  ), a = !0, f = () => (a && (a = !1, l = s ? Ze(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), l), u;
  if (i) {
    var c = xe in e || $n in e;
    u = Se(e, t)?.set ?? (c && t in e ? (b) => e[t] = b : void 0);
  }
  var v, h = !1;
  i ? [v, h] = Ki(() => (
    /** @type {V} */
    e[t]
  )) : v = /** @type {V} */
  e[t], v === void 0 && r !== void 0 && (v = f(), u && (Wr(), u(v)));
  var o;
  if (o = () => {
    var b = (
      /** @type {V} */
      e[t]
    );
    return b === void 0 ? f() : (a = !0, b);
  }, (n & kr) === 0)
    return o;
  if (u) {
    var _ = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(b, T) {
        return arguments.length > 0 ? ((!T || _ || h) && u(T ? o() : b), b) : o();
      })
    );
  }
  var $ = !1, d = ((n & xr) !== 0 ? yt : On)(() => ($ = !1, o()));
  i && m(d);
  var g = (
    /** @type {Effect} */
    E
  );
  return (
    /** @type {() => V} */
    (function(b, T) {
      if (arguments.length > 0) {
        const R = T ? m(d) : i ? Le(b) : b;
        return B(d, R), $ = !0, l !== void 0 && (l = R), b;
      }
      return Pe && $ || (g.f & he) !== 0 ? d.v : m(d);
    })
  );
}
function Ji(e) {
  return new Xi(e);
}
class Xi {
  /** @type {any} */
  #t;
  /** @type {Record<string, any>} */
  #e;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    var n = /* @__PURE__ */ new Map(), r = (s, l) => {
      var a = /* @__PURE__ */ In(l, !1, !1);
      return n.set(s, a), a;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, l) {
          return m(n.get(l) ?? r(l, Reflect.get(s, l)));
        },
        has(s, l) {
          return l === $n ? !0 : (m(n.get(l) ?? r(l, Reflect.get(s, l))), Reflect.has(s, l));
        },
        set(s, l, a) {
          return B(n.get(l) ?? r(l, a), a), Reflect.set(s, l, a);
        }
      }
    );
    this.#e = (t.hydrate ? Mi : fr)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && x(), this.#t = i.$$events;
    for (const s of Object.keys(this.#e))
      s === "$set" || s === "$destroy" || s === "$on" || ft(this, s, {
        get() {
          return this.#e[s];
        },
        /** @param {any} value */
        set(l) {
          this.#e[s] = l;
        },
        enumerable: !0
      });
    this.#e.$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(i, s);
    }, this.#e.$destroy = () => {
      Ii(this.#e);
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    this.#e.$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    this.#t[t] = this.#t[t] || [];
    const r = (...i) => n.call(this, ...i);
    return this.#t[t].push(r), () => {
      this.#t[t] = this.#t[t].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    this.#e.$destroy();
  }
}
let hr;
typeof HTMLElement == "function" && (hr = class extends HTMLElement {
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
  constructor(e, t, n) {
    super(), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, t, n) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const r = this.$$c.$on(e, t);
      this.$$l_u.set(t, r);
    }
    super.addEventListener(e, t, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, t, n) {
    if (super.removeEventListener(e, t, n), this.$$c) {
      const r = this.$$l_u.get(t);
      r && (r(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(i) {
        return (s) => {
          const l = document.createElement("slot");
          i !== "default" && (l.name = i), Et(s, l);
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = Zi(this);
      for (const i of this.$$s)
        i in r && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), n.default = !0) : n[i] = t(i));
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = st(s, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Ji({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = bi(() => {
        $t(() => {
          this.$$r = !0;
          for (const i of lt(this.$$c)) {
            if (!this.$$p_d[i]?.reflect) continue;
            this.$$d[i] = this.$$c[i];
            const s = st(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, s);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const s of this.$$l[i]) {
          const l = this.$$c.$on(i, s);
          this.$$l_u.set(s, l);
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
  attributeChangedCallback(e, t, n) {
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = st(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return lt(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function st(e, t, n, r) {
  const i = n[e]?.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function Zi(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function Zt(e, t, n, r, i, s) {
  let l = class extends hr {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return lt(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return lt(t).forEach((a) => {
    ft(l.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(f) {
        f = st(a, f, t), this.$$d[a] = f;
        var u = this.$$c;
        if (u) {
          var c = Se(u, a)?.get;
          c ? u[a] = f : u.$set({ [a]: f });
        }
      }
    });
  }), r.forEach((a) => {
    ft(l.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
var Qi = /* @__PURE__ */ Kt('<div class="option svelte-1hi2z3e"><label><input type="radio" class="svelte-1hi2z3e"/> <span></span></label></div>');
const es = {
  hash: "svelte-1hi2z3e",
  code: `.checkmark.svelte-1hi2z3e {position:absolute;height:25px;top:0;left:0;width:25px;background-color:#eee;border-radius:100%;}.option.svelte-1hi2z3e {cursor:pointer;}.option.svelte-1hi2z3e input:where(.svelte-1hi2z3e) {position:absolute;opacity:0;cursor:pointer;height:25;width:25;}.option.svelte-1hi2z3e:hover input:where(.svelte-1hi2z3e) ~ .checkmark:where(.svelte-1hi2z3e) {background-color:#ccc;}.option.svelte-1hi2z3e input:where(.svelte-1hi2z3e):checked ~ .checkmark:where(.svelte-1hi2z3e) {background-color:var(--checked-color);}.dark.svelte-1hi2z3e {background-color:#999;}

	/* Create the checkmark/indicator (hidden when not checked) */.checkmark.svelte-1hi2z3e:after {content:'';position:absolute;display:none;}`
};
function dr(e, t) {
  mt(t, !0), Jt(e, es);
  const n = [];
  let r = k(t, "top", 7), i = k(t, "left", 7), s = k(t, "height", 7), l = k(t, "width", 7), a = k(t, "group", 7), f = k(t, "name", 7), u = k(t, "index", 7), c = k(t, "pair", 7), v = k(t, "updateSelection", 7), h = k(t, "selectedColor", 7), o, _;
  Wt(() => {
    o.style.top = r() + "px", o.style.left = i() + "px", _.style.width = l() + "px", _.style.height = s() + "px", c() && (_.class = _.class + " dark"), console.log(h());
  });
  var $ = {
    get top() {
      return r();
    },
    set top(w) {
      r(w), x();
    },
    get left() {
      return i();
    },
    set left(w) {
      i(w), x();
    },
    get height() {
      return s();
    },
    set height(w) {
      s(w), x();
    },
    get width() {
      return l();
    },
    set width(w) {
      l(w), x();
    },
    get group() {
      return a();
    },
    set group(w) {
      a(w), x();
    },
    get name() {
      return f();
    },
    set name(w) {
      f(w), x();
    },
    get index() {
      return u();
    },
    set index(w) {
      u(w), x();
    },
    get pair() {
      return c();
    },
    set pair(w) {
      c(w), x();
    },
    get updateSelection() {
      return v();
    },
    set updateSelection(w) {
      v(w), x();
    },
    get selectedColor() {
      return h();
    },
    set selectedColor(w) {
      h(w), x();
    }
  }, d = Qi();
  it(d, "", {}, { position: "absolute" });
  var g = Pt(d), b = Pt(g);
  Bi(b), b.__change = function(...w) {
    v()?.apply(this, w);
  }, it(b, "", {}, { opacity: "0", cursor: "pointer" });
  var T, R = jn(b, 2);
  return it(R, "", {}, { "border-radius": "100%" }), dt(R, (w) => _ = w, () => _), ut(g), ut(d), dt(d, (w) => o = w, () => o), Un(() => {
    Lt(b, "name", f()), T !== (T = u() + 1) && (b.value = b.__value = u() + 1), Hi(R, 1, `checkmark ${c() ? "dark" : ""}`, "svelte-1hi2z3e");
  }), Wi(
    n,
    [],
    b,
    () => (u() + 1, a()),
    a
  ), Et(e, d), wt($);
}
Ri(["change"]);
Zt(
  dr,
  {
    top: {},
    left: {},
    height: {},
    width: {},
    group: {},
    name: {},
    index: {},
    pair: {},
    updateSelection: {},
    selectedColor: {}
  },
  [],
  [],
  !0
);
class ts extends Event {
  // define the parameters of the event using the constructor
  constructor(t, n) {
    super("emotion-selected", {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }), this.index = t, this.value = n;
  }
}
var ns = /* @__PURE__ */ Kt('<!> <div class="tag svelte-zp4a68"> </div>', 1);
const rs = {
  hash: "svelte-zp4a68",
  code: ".tag.svelte-zp4a68 {position:absolute;font-size:1.2em;}"
};
function vr(e, t) {
  mt(t, !0), Jt(e, rs);
  let n = [1, 2, 3, 4, 5], r = /* @__PURE__ */ V(void 0);
  const i = k(t, "name", 7), s = k(t, "percentage", 7), l = k(t, "width", 7), a = k(t, "height", 7), f = k(t, "pair", 7), u = k(t, "maxRadius", 7), c = k(t, "minRadius", 7), v = k(t, "tagOffset", 7), h = k(t, "selectionCallback", 7), o = k(t, "index", 7), _ = k(t, "selectedColor", 7), $ = /* @__PURE__ */ re(() => s() * Math.PI * 2);
  let d = /* @__PURE__ */ re(() => a() / 2), g = /* @__PURE__ */ re(() => l() / 2), b = /* @__PURE__ */ V(0), T = /* @__PURE__ */ V(0);
  function R(p) {
    let ne = c();
    for (let G = p; G > 1; G--)
      ne += j(G - 1);
    return w(ne);
  }
  function w(p) {
    return {
      y: m(d) + Math.sin(m($)) * p,
      x: m(g) + Math.cos(m($)) * p
    };
  }
  const Q = /* @__PURE__ */ re(() => w(u() + v())), D = /* @__PURE__ */ re(() => n.map((p) => R(p)));
  function j(p) {
    return 20 + 40 * (p / (n.length - 1));
  }
  let H;
  Wt(() => {
    const p = m(Q).y - m(b) / 2, ne = m(Q).x - m(T) / 2;
    H.style.top = p + "px", H.style.left = ne + "px";
  }), ar(() => {
    f() && (H.class += "tagDark");
  });
  function O(p) {
    const ne = p.target.value, G = new ts(o(), ne);
    console.log("something was selected"), H.dispatchEvent(G);
  }
  var St = {
    get name() {
      return i();
    },
    set name(p) {
      i(p), x();
    },
    get percentage() {
      return s();
    },
    set percentage(p) {
      s(p), x();
    },
    get width() {
      return l();
    },
    set width(p) {
      l(p), x();
    },
    get height() {
      return a();
    },
    set height(p) {
      a(p), x();
    },
    get pair() {
      return f();
    },
    set pair(p) {
      f(p), x();
    },
    get maxRadius() {
      return u();
    },
    set maxRadius(p) {
      u(p), x();
    },
    get minRadius() {
      return c();
    },
    set minRadius(p) {
      c(p), x();
    },
    get tagOffset() {
      return v();
    },
    set tagOffset(p) {
      v(p), x();
    },
    get selectionCallback() {
      return h();
    },
    set selectionCallback(p) {
      h(p), x();
    },
    get index() {
      return o();
    },
    set index(p) {
      o(p), x();
    },
    get selectedColor() {
      return _();
    },
    set selectedColor(p) {
      _(p), x();
    }
  }, Qe = ns(), Qt = _i(Qe);
  cr(Qt, 17, () => m(D), or, (p, ne, G, pr) => {
    {
      let gr = /* @__PURE__ */ re(() => m(ne).y - j(G) / 2), mr = /* @__PURE__ */ re(() => m(ne).x - j(G) / 2), wr = /* @__PURE__ */ re(() => j(G)), br = /* @__PURE__ */ re(() => j(G));
      dr(p, {
        get top() {
          return m(gr);
        },
        get left() {
          return m(mr);
        },
        get height() {
          return m(wr);
        },
        get width() {
          return m(br);
        },
        group: m(r),
        get name() {
          return i();
        },
        get pair() {
          return f();
        },
        index: G,
        updateSelection: O,
        get selectedColor() {
          return _();
        }
      });
    }
  });
  var Me = jn(Qt, 2);
  let en;
  var _r = Pt(Me, !0);
  return ut(Me), dt(Me, (p) => H = p, () => H), Un(() => {
    en = it(Me, "", en, {
      top: `${m(Q).y - m(b) / 2}px`,
      left: `${m(Q).x - m(T) / 2}px`
    }), Pi(_r, i());
  }), ht(Me, "clientWidth", (p) => B(T, p)), ht(Me, "clientHeight", (p) => B(b, p)), Et(e, Qe), wt(St);
}
Zt(
  vr,
  {
    name: {},
    percentage: {},
    width: {},
    height: {},
    pair: {},
    maxRadius: {},
    minRadius: {},
    tagOffset: {},
    selectionCallback: {},
    index: {},
    selectedColor: {}
  },
  [],
  [],
  !0
);
var is = /* @__PURE__ */ Kt('<div class="wheel h-full svelte-ad83fs"></div>');
const ss = {
  hash: "svelte-ad83fs",
  code: ".wheel.svelte-ad83fs {position:relative;height:100%;width:100%;}"
};
function ls(e, t) {
  mt(t, !0), Jt(e, ss);
  let n = k(t, "emotions", 23, () => ["Sadness"]), r = k(t, "maxRadius", 7, 200), i = k(t, "tagOffset", 7, 120), s = k(t, "minRadius", 7, 50), l = k(t, "selectionCallback", 7, (o, _) => {
    console.log("Chose index : " + o + " with value " + _);
  }), a = k(t, "selectedColor", 7, "#3396e8"), f = /* @__PURE__ */ V(void 0), u = /* @__PURE__ */ V(void 0), c;
  ar(() => {
    c.style.setProperty("--checked-color", a());
  });
  var v = {
    get emotions() {
      return n();
    },
    set emotions(o = ["Sadness"]) {
      n(o), x();
    },
    get maxRadius() {
      return r();
    },
    set maxRadius(o = 200) {
      r(o), x();
    },
    get tagOffset() {
      return i();
    },
    set tagOffset(o = 120) {
      i(o), x();
    },
    get minRadius() {
      return s();
    },
    set minRadius(o = 50) {
      s(o), x();
    },
    get selectionCallback() {
      return l();
    },
    set selectionCallback(o = (_, $) => {
      console.log("Chose index : " + _ + " with value " + $);
    }) {
      l(o), x();
    },
    get selectedColor() {
      return a();
    },
    set selectedColor(o = "#3396e8") {
      a(o), x();
    }
  }, h = is();
  return cr(h, 21, n, or, (o, _, $) => {
    {
      let d = /* @__PURE__ */ re(() => $ / n().length);
      vr(o, {
        get name() {
          return m(_);
        },
        get percentage() {
          return m(d);
        },
        index: $,
        get width() {
          return m(u);
        },
        get height() {
          return m(f);
        },
        get maxRadius() {
          return r();
        },
        get minRadius() {
          return s();
        },
        get tagOffset() {
          return i();
        },
        pair: $ % 2 == 0,
        get selectionCallback() {
          return l();
        },
        get selectedColor() {
          return a();
        }
      });
    }
  }), ut(h), dt(h, (o) => c = o, () => c), ht(h, "clientWidth", (o) => B(u, o)), ht(h, "clientHeight", (o) => B(f, o)), Et(e, h), wt(v);
}
customElements.define("geneva-emotion-wheel", Zt(
  ls,
  {
    emotions: { attribute: "emotions", type: "Array" },
    maxRadius: { attribute: "max-radius", type: "Number" },
    minRadius: { attribute: "max-radius", type: "Number" },
    tagOffset: { attribute: "tag-offset", type: "Number" },
    selectionCallback: { attribute: "selection-callback", type: "Object" },
    selectedColor: { attribute: "selected-color", type: "String" }
  },
  [],
  [],
  !1
));

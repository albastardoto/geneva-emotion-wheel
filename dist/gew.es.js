typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const br = 1, $r = 2, vn = 4, yr = 8, Er = 16, xr = 1, Sr = 4, kr = 8, Ar = 16, Rr = 1, Tr = 2, _n = "[", zt = "[!", Ft = "]", Fe = {}, P = /* @__PURE__ */ Symbol(), Cr = "http://www.w3.org/1999/xhtml", kt = !1;
var pn = Array.isArray, Or = Array.prototype.indexOf, dt = Array.from, ft = Object.keys, lt = Object.defineProperty, Se = Object.getOwnPropertyDescriptor, Nr = Object.getOwnPropertyDescriptors, Pr = Object.prototype, Ir = Array.prototype, gn = Object.getPrototypeOf, Qt = Object.isExtensible;
function Mr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function mn() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const N = 2, jt = 4, Ht = 8, Dr = 1 << 24, de = 16, ve = 32, $e = 64, vt = 128, Q = 512, I = 1024, z = 2048, ie = 4096, V = 8192, oe = 16384, _t = 32768, We = 65536, en = 1 << 17, wn = 1 << 18, Pe = 1 << 19, Lr = 1 << 20, ae = 1 << 25, Te = 32768, At = 1 << 21, qt = 1 << 22, me = 1 << 23, ke = /* @__PURE__ */ Symbol("$state"), bn = /* @__PURE__ */ Symbol("legacy props"), zr = /* @__PURE__ */ Symbol(""), De = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Vt = 3, Ve = 8;
function Fr() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function jr(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Hr() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function qr(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Vr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Br() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ur(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Yr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Wr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Gr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Kr() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function pt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Jr() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let E = !1;
function Ee(e) {
  E = e;
}
let S;
function B(e) {
  if (e === null)
    throw pt(), Fe;
  return S = e;
}
function Bt() {
  return B(/* @__PURE__ */ fe(S));
}
function ut(e) {
  if (E) {
    if (/* @__PURE__ */ fe(S) !== null)
      throw pt(), Fe;
    S = e;
  }
}
function Xr(e = 1) {
  if (E) {
    for (var t = e, n = S; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ fe(n);
    S = n;
  }
}
function Rt(e = !0) {
  for (var t = 0, n = S; ; ) {
    if (n.nodeType === Ve) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Ft) {
        if (t === 0) return n;
        t -= 1;
      } else (r === _n || r === zt) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ fe(n)
    );
    e && n.remove(), n = i;
  }
}
function Zr(e) {
  if (!e || e.nodeType !== Ve)
    throw pt(), Fe;
  return (
    /** @type {Comment} */
    e.data
  );
}
function $n(e) {
  return e === this.v;
}
function Qr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function yn(e) {
  return !Qr(e, this.v);
}
let ei = !1, X = null;
function je(e) {
  X = e;
}
function gt(e, t = !1, n) {
  X = {
    p: X,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function mt(e) {
  var t = (
    /** @type {ComponentContext} */
    X
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Vn(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, X = t.p, e ?? /** @type {T} */
  {};
}
function En() {
  return !0;
}
let xe = [];
function xn() {
  var e = xe;
  xe = [], Mr(e);
}
function be(e) {
  if (xe.length === 0 && !Ue) {
    var t = xe;
    queueMicrotask(() => {
      t === xe && xn();
    });
  }
  xe.push(e);
}
function ti() {
  for (; xe.length > 0; )
    xn();
}
function Sn(e) {
  var t = $;
  if (t === null)
    return b.f |= me, e;
  if ((t.f & _t) === 0) {
    if ((t.f & vt) === 0)
      throw e;
    t.b.error(e);
  } else
    He(e, t);
}
function He(e, t) {
  for (; t !== null; ) {
    if ((t.f & vt) !== 0)
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
let R = null, K = null, G = [], wt = null, Tt = !1, Ue = !1;
class Z {
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
  #l = 0;
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
  #f = /* @__PURE__ */ new Set();
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
    G = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of t)
      this.#r(r, n);
    this.is_fork || this.#o(), this.is_deferred() ? (this.#s(n.effects), this.#s(n.render_effects)) : (R = null, tn(n.render_effects), tn(n.effects), this.#a?.resolve()), K = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #r(t, n) {
    t.f ^= I;
    for (var r = t.first; r !== null; ) {
      var i = r.f, s = (i & (ve | $e)) !== 0, f = s && (i & I) !== 0, a = f || (i & V) !== 0 || this.skipped_effects.has(r);
      if ((r.f & vt) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: []
      }), !a && r.fn !== null) {
        s ? r.f ^= I : (i & jt) !== 0 ? n.effects.push(r) : Xe(r) && ((r.f & de) !== 0 && this.#f.add(r), Je(r));
        var l = r.first;
        if (l !== null) {
          r = l;
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
      (n.f & z) !== 0 ? this.#f.add(n) : (n.f & ie) !== 0 && this.#i.add(n), this.#u(n.deps), M(n, I);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(t) {
    if (t !== null)
      for (const n of t)
        (n.f & N) === 0 || (n.f & Te) === 0 || (n.f ^= Te, this.#u(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & me) === 0 && (this.current.set(t, t.v), K?.set(t, t.v));
  }
  activate() {
    R = this, this.apply();
  }
  deactivate() {
    R === this && (R = null, K = null);
  }
  flush() {
    if (this.activate(), G.length > 0) {
      if (kn(), R !== null && R !== this)
        return;
    } else this.#l === 0 && this.process([]);
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
    this.#l === 0 && this.#c();
  }
  #c() {
    if (et.size > 1) {
      this.previous.clear();
      var t = K, n = !0, r = {
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
        const f = [];
        for (const [l, u] of this.current) {
          if (s.current.has(l))
            if (n && u !== s.current.get(l))
              s.current.set(l, u);
            else
              continue;
          f.push(l);
        }
        if (f.length === 0)
          continue;
        const a = [...s.current.keys()].filter((l) => !this.current.has(l));
        if (a.length > 0) {
          var i = G;
          G = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const o of f)
            An(o, a, l, u);
          if (G.length > 0) {
            R = s, s.apply();
            for (const o of G)
              s.#r(o, r);
            s.deactivate();
          }
          G = i;
        }
      }
      R = null, K = t;
    }
    this.committed = !0, et.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    this.#l += 1, t && (this.#n += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    this.#l -= 1, t && (this.#n -= 1), this.revive();
  }
  revive() {
    for (const t of this.#f)
      this.#i.delete(t), M(t, z), Ce(t);
    for (const t of this.#i)
      M(t, ie), Ce(t);
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
    return (this.#a ??= mn()).promise;
  }
  static ensure() {
    if (R === null) {
      const t = R = new Z();
      et.add(R), Ue || Z.enqueue(() => {
        R === t && t.flush();
      });
    }
    return R;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    be(t);
  }
  apply() {
  }
}
function k(e) {
  var t = Ue;
  Ue = !0;
  try {
    for (var n; ; ) {
      if (ti(), G.length === 0 && (R?.flush(), G.length === 0))
        return wt = null, /** @type {T} */
        n;
      kn();
    }
  } finally {
    Ue = t;
  }
}
function kn() {
  var e = Ae;
  Tt = !0;
  var t = null;
  try {
    var n = 0;
    for (ot(!0); G.length > 0; ) {
      var r = Z.ensure();
      if (n++ > 1e3) {
        var i, s;
        ni();
      }
      r.process(G), we.clear();
    }
  } finally {
    Tt = !1, ot(e), wt = null;
  }
}
function ni() {
  try {
    Vr();
  } catch (e) {
    He(e, wt);
  }
}
let ue = null;
function tn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (oe | V)) === 0 && Xe(r) && (ue = /* @__PURE__ */ new Set(), Je(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? Gn(r) : r.fn = null), ue?.size > 0)) {
        we.clear();
        for (const i of ue) {
          if ((i.f & (oe | V)) !== 0) continue;
          const s = [i];
          let f = i.parent;
          for (; f !== null; )
            ue.has(f) && (ue.delete(f), s.push(f)), f = f.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const l = s[a];
            (l.f & (oe | V)) === 0 && Je(l);
          }
        }
        ue.clear();
      }
    }
    ue = null;
  }
}
function An(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & N) !== 0 ? An(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (qt | de)) !== 0 && (s & z) === 0 && Rn(i, t, r) && (M(i, z), Ce(
        /** @type {Effect} */
        i
      ));
    }
}
function Rn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (t.includes(i))
        return !0;
      if ((i.f & N) !== 0 && Rn(
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
function Ce(e) {
  for (var t = wt = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Tt && t === $ && (n & de) !== 0 && (n & wn) === 0)
      return;
    if ((n & ($e | ve)) !== 0) {
      if ((n & I) === 0) return;
      t.f ^= I;
    }
  }
  G.push(t);
}
function ri(e) {
  let t = 0, n = Oe(0), r;
  return () => {
    Ge() && (m(n), $t(() => (t === 0 && (r = yt(() => e(() => Ye(n)))), t += 1, () => {
      be(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Ye(n));
      });
    })));
  };
}
var ii = We | Pe | vt;
function si(e, t, n) {
  new fi(e, t, n);
}
class fi {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #l = E ? S : null;
  /** @type {BoundaryProps} */
  #n;
  /** @type {((anchor: Node) => void)} */
  #a;
  /** @type {Effect} */
  #f;
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
  #w = ri(() => (this.#d = Oe(this.#c), () => {
    this.#d = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#n = n, this.#a = r, this.parent = /** @type {Effect} */
    $.b, this.#t = !!this.#n.pending, this.#f = Un(() => {
      if ($.b = this, E) {
        const s = this.#l;
        Bt(), /** @type {Comment} */
        s.nodeType === Ve && /** @type {Comment} */
        s.data === zt ? this.#$() : this.#b();
      } else {
        var i = this.#g();
        try {
          this.#i = ne(() => r(i));
        } catch (s) {
          this.error(s);
        }
        this.#h > 0 ? this.#p() : this.#t = !1;
      }
      return () => {
        this.#o?.remove();
      };
    }, ii), E && (this.#e = S);
  }
  #b() {
    try {
      this.#i = ne(() => this.#a(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #$() {
    const t = this.#n.pending;
    t && (this.#r = ne(() => t(this.#e)), Z.enqueue(() => {
      var n = this.#g();
      this.#i = this.#_(() => (Z.ensure(), ne(() => this.#a(n)))), this.#h > 0 ? this.#p() : (ze(
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
    return this.#t && (this.#o = ce(), this.#e.before(this.#o), t = this.#o), t;
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
    var n = $, r = b, i = X;
    se(this.#f), L(this.#f), je(this.#f.ctx);
    try {
      return t();
    } catch (s) {
      return Sn(s), null;
    } finally {
      se(n), L(r), je(i);
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
    ), Ei(this.#i, this.#u)), this.#r === null && (this.#r = ne(() => t(this.#e)));
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
    this.#i && (J(this.#i), this.#i = null), this.#r && (J(this.#r), this.#r = null), this.#s && (J(this.#s), this.#s = null), E && (B(
      /** @type {TemplateNode} */
      this.#l
    ), Xr(), B(Rt()));
    var i = !1, s = !1;
    const f = () => {
      if (i) {
        Jr();
        return;
      }
      i = !0, s && Kr(), Z.ensure(), this.#c = 0, this.#s !== null && ze(this.#s, () => {
        this.#s = null;
      }), this.#t = this.has_pending_snippet(), this.#i = this.#_(() => (this.#v = !1, ne(() => this.#a(this.#e)))), this.#h > 0 ? this.#p() : this.#t = !1;
    };
    var a = b;
    try {
      L(null), s = !0, n?.(t, f), s = !1;
    } catch (l) {
      He(l, this.#f && this.#f.parent);
    } finally {
      L(a);
    }
    r && be(() => {
      this.#s = this.#_(() => {
        Z.ensure(), this.#v = !0;
        try {
          return ne(() => {
            r(
              this.#e,
              () => t,
              () => f
            );
          });
        } catch (l) {
          return He(
            l,
            /** @type {Effect} */
            this.#f.parent
          ), null;
        } finally {
          this.#v = !1;
        }
      });
    });
  }
}
function li(e, t, n, r) {
  const i = bt;
  if (n.length === 0 && e.length === 0) {
    r(t.map(i));
    return;
  }
  var s = R, f = (
    /** @type {Effect} */
    $
  ), a = ui();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ ai(u))).then((u) => {
      a();
      try {
        r([...t.map(i), ...u]);
      } catch (o) {
        (f.f & oe) === 0 && He(o, f);
      }
      s?.deactivate(), at();
    }).catch((u) => {
      He(u, f);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      s?.deactivate(), at();
    }
  }) : l();
}
function ui() {
  var e = $, t = b, n = X, r = R;
  return function(s = !0) {
    se(e), L(t), je(n), s && r?.activate();
  };
}
function at() {
  se(null), L(null), je(null);
}
// @__NO_SIDE_EFFECTS__
function bt(e) {
  var t = N | z, n = b !== null && (b.f & N) !== 0 ? (
    /** @type {Derived} */
    b
  ) : null;
  return $ !== null && ($.f |= Pe), {
    ctx: X,
    deps: null,
    effects: null,
    equals: $n,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      P
    ),
    wv: 0,
    parent: n ?? $,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ai(e, t) {
  let n = (
    /** @type {Effect | null} */
    $
  );
  n === null && Fr();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Oe(
    /** @type {V} */
    P
  ), f = !b, a = /* @__PURE__ */ new Map();
  return bi(() => {
    var l = mn();
    i = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        u === R && u.committed && u.deactivate(), at();
      });
    } catch (c) {
      l.reject(c), at();
    }
    var u = (
      /** @type {Batch} */
      R
    );
    if (f) {
      var o = !r.is_pending();
      r.update_pending_count(1), u.increment(o), a.get(u)?.reject(De), a.delete(u), a.set(u, l);
    }
    const h = (c, d = void 0) => {
      if (u.activate(), d)
        d !== De && (s.f |= me, qe(s, d));
      else {
        (s.f & me) !== 0 && (s.f ^= me), qe(s, c);
        for (const [w, x] of a) {
          if (a.delete(w), w === u) break;
          x.reject(De);
        }
      }
      f && (r.update_pending_count(-1), u.decrement(o));
    };
    l.promise.then(h, (c) => h(null, c || "unknown"));
  }), Hn(() => {
    for (const l of a.values())
      l.reject(De);
  }), new Promise((l) => {
    function u(o) {
      function h() {
        o === i ? l(s) : u(i);
      }
      o.then(h, h);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function te(e) {
  const t = /* @__PURE__ */ bt(e);
  return Zn(t), t;
}
// @__NO_SIDE_EFFECTS__
function Tn(e) {
  const t = /* @__PURE__ */ bt(e);
  return t.equals = yn, t;
}
function Cn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      J(
        /** @type {Effect} */
        t[n]
      );
  }
}
function oi(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & N) === 0)
      return (t.f & oe) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Ut(e) {
  var t, n = $;
  se(oi(e));
  try {
    e.f &= ~Te, Cn(e), t = nr(e);
  } finally {
    se(n);
  }
  return t;
}
function On(e) {
  var t = Ut(e);
  if (e.equals(t) || (R?.is_fork || (e.v = t), e.wv = er()), !Ie)
    if (K !== null)
      (Ge() || R?.is_fork) && K.set(e, t);
    else {
      var n = (e.f & Q) === 0 ? ie : I;
      M(e, n);
    }
}
let Ct = /* @__PURE__ */ new Set();
const we = /* @__PURE__ */ new Map();
let Nn = !1;
function Oe(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: $n,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function H(e, t) {
  const n = Oe(e);
  return Zn(n), n;
}
// @__NO_SIDE_EFFECTS__
function Pn(e, t = !1, n = !0) {
  const r = Oe(e);
  return t || (r.equals = yn), r;
}
function q(e, t, n = !1) {
  b !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!re || (b.f & en) !== 0) && En() && (b.f & (N | de | qt | en)) !== 0 && !he?.includes(e) && Gr();
  let r = n ? Le(t) : t;
  return qe(e, r);
}
function qe(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Ie ? we.set(e, t) : we.set(e, n), e.v = t;
    var r = Z.ensure();
    r.capture(e, n), (e.f & N) !== 0 && ((e.f & z) !== 0 && Ut(
      /** @type {Derived} */
      e
    ), M(e, (e.f & Q) !== 0 ? I : ie)), e.wv = er(), In(e, z), $ !== null && ($.f & I) !== 0 && ($.f & (ve | $e)) === 0 && (W === null ? xi([e]) : W.push(e)), !r.is_fork && Ct.size > 0 && !Nn && ci();
  }
  return t;
}
function ci() {
  Nn = !1;
  var e = Ae;
  ot(!0);
  const t = Array.from(Ct);
  try {
    for (const n of t)
      (n.f & I) !== 0 && M(n, ie), Xe(n) && Je(n);
  } finally {
    ot(e);
  }
  Ct.clear();
}
function Ye(e) {
  q(e, e.v + 1);
}
function In(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], f = s.f, a = (f & z) === 0;
      if (a && M(s, t), (f & N) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        K?.delete(l), (f & Te) === 0 && (f & Q && (s.f |= Te), In(l, ie));
      } else a && ((f & de) !== 0 && ue !== null && ue.add(
        /** @type {Effect} */
        s
      ), Ce(
        /** @type {Effect} */
        s
      ));
    }
}
function Le(e) {
  if (typeof e != "object" || e === null || ke in e)
    return e;
  const t = gn(e);
  if (t !== Pr && t !== Ir)
    return e;
  var n = /* @__PURE__ */ new Map(), r = pn(e), i = /* @__PURE__ */ H(0), s = Re, f = (a) => {
    if (Re === s)
      return a();
    var l = b, u = Re;
    L(null), ln(s);
    var o = a();
    return L(l), ln(u), o;
  };
  return r && n.set("length", /* @__PURE__ */ H(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Yr();
        var o = n.get(l);
        return o === void 0 ? o = f(() => {
          var h = /* @__PURE__ */ H(u.value);
          return n.set(l, h), h;
        }) : q(o, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const o = f(() => /* @__PURE__ */ H(P));
            n.set(l, o), Ye(i);
          }
        } else
          q(u, P), Ye(i);
        return !0;
      },
      get(a, l, u) {
        if (l === ke)
          return e;
        var o = n.get(l), h = l in a;
        if (o === void 0 && (!h || Se(a, l)?.writable) && (o = f(() => {
          var d = Le(h ? a[l] : P), w = /* @__PURE__ */ H(d);
          return w;
        }), n.set(l, o)), o !== void 0) {
          var c = m(o);
          return c === P ? void 0 : c;
        }
        return Reflect.get(a, l, u);
      },
      getOwnPropertyDescriptor(a, l) {
        var u = Reflect.getOwnPropertyDescriptor(a, l);
        if (u && "value" in u) {
          var o = n.get(l);
          o && (u.value = m(o));
        } else if (u === void 0) {
          var h = n.get(l), c = h?.v;
          if (h !== void 0 && c !== P)
            return {
              enumerable: !0,
              configurable: !0,
              value: c,
              writable: !0
            };
        }
        return u;
      },
      has(a, l) {
        if (l === ke)
          return !0;
        var u = n.get(l), o = u !== void 0 && u.v !== P || Reflect.has(a, l);
        if (u !== void 0 || $ !== null && (!o || Se(a, l)?.writable)) {
          u === void 0 && (u = f(() => {
            var c = o ? Le(a[l]) : P, d = /* @__PURE__ */ H(c);
            return d;
          }), n.set(l, u));
          var h = m(u);
          if (h === P)
            return !1;
        }
        return o;
      },
      set(a, l, u, o) {
        var h = n.get(l), c = l in a;
        if (r && l === "length")
          for (var d = u; d < /** @type {Source<number>} */
          h.v; d += 1) {
            var w = n.get(d + "");
            w !== void 0 ? q(w, P) : d in a && (w = f(() => /* @__PURE__ */ H(P)), n.set(d + "", w));
          }
        if (h === void 0)
          (!c || Se(a, l)?.writable) && (h = f(() => /* @__PURE__ */ H(void 0)), q(h, Le(u)), n.set(l, h));
        else {
          c = h.v !== P;
          var x = f(() => Le(u));
          q(h, x);
        }
        var v = Reflect.getOwnPropertyDescriptor(a, l);
        if (v?.set && v.set.call(o, u), !c) {
          if (r && typeof l == "string") {
            var _ = (
              /** @type {Source<number>} */
              n.get("length")
            ), y = Number(l);
            Number.isInteger(y) && y >= _.v && q(_, y + 1);
          }
          Ye(i);
        }
        return !0;
      },
      ownKeys(a) {
        m(i);
        var l = Reflect.ownKeys(a).filter((h) => {
          var c = n.get(h);
          return c === void 0 || c.v !== P;
        });
        for (var [u, o] of n)
          o.v !== P && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Wr();
      }
    }
  );
}
function nn(e) {
  try {
    if (e !== null && typeof e == "object" && ke in e)
      return e[ke];
  } catch {
  }
  return e;
}
function hi(e, t) {
  return Object.is(nn(e), nn(t));
}
var rn, Mn, Dn, Ln;
function Ot() {
  if (rn === void 0) {
    rn = window, Mn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Dn = Se(t, "firstChild").get, Ln = Se(t, "nextSibling").get, Qt(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Qt(n) && (n.__t = void 0);
  }
}
function ce(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  return (
    /** @type {TemplateNode | null} */
    Dn.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function fe(e) {
  return (
    /** @type {TemplateNode | null} */
    Ln.call(e)
  );
}
function Nt(e, t) {
  if (!E)
    return /* @__PURE__ */ Ne(e);
  var n = /* @__PURE__ */ Ne(S);
  if (n === null)
    n = S.appendChild(ce());
  else if (t && n.nodeType !== Vt) {
    var r = ce();
    return n?.before(r), B(r), r;
  }
  return B(n), n;
}
function di(e, t = !1) {
  if (!E) {
    var n = /* @__PURE__ */ Ne(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ fe(n) : n;
  }
  if (t && S?.nodeType !== Vt) {
    var r = ce();
    return S?.before(r), B(r), r;
  }
  return S;
}
function zn(e, t = 1, n = !1) {
  let r = E ? S : e;
  for (var i; t--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ fe(r);
  if (!E)
    return r;
  if (n && r?.nodeType !== Vt) {
    var s = ce();
    return r === null ? i?.after(s) : r.before(s), B(s), s;
  }
  return B(r), r;
}
function Fn(e) {
  e.textContent = "";
}
function vi() {
  return !1;
}
let sn = !1;
function jn() {
  sn || (sn = !0, document.addEventListener(
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
  var t = b, n = $;
  L(null), se(null);
  try {
    return e();
  } finally {
    L(t), se(n);
  }
}
function _i(e, t, n, r = n) {
  e.addEventListener(t, () => Yt(n));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), r(!0);
  } : e.__on_r = () => r(!0), jn();
}
function pi(e) {
  $ === null && (b === null && qr(), Hr()), Ie && jr();
}
function gi(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function le(e, t, n) {
  var r = $;
  r !== null && (r.f & V) !== 0 && (e |= V);
  var i = {
    ctx: X,
    deps: null,
    nodes: null,
    f: e | z | Q,
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
      Je(i), i.f |= _t;
    } catch (a) {
      throw J(i), a;
    }
  else t !== null && Ce(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & Pe) === 0 && (s = s.first, (e & de) !== 0 && (e & We) !== 0 && s !== null && (s.f |= We)), s !== null && (s.parent = r, r !== null && gi(s, r), b !== null && (b.f & N) !== 0 && (e & $e) === 0)) {
    var f = (
      /** @type {Derived} */
      b
    );
    (f.effects ??= []).push(s);
  }
  return i;
}
function Ge() {
  return b !== null && !re;
}
function Hn(e) {
  const t = le(Ht, null, !1);
  return M(t, I), t.teardown = e, t;
}
function qn(e) {
  pi();
  var t = (
    /** @type {Effect} */
    $.f
  ), n = !b && (t & ve) !== 0 && (t & _t) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      X
    );
    (r.e ??= []).push(e);
  } else
    return Vn(e);
}
function Vn(e) {
  return le(jt | Lr, e, !1);
}
function mi(e) {
  Z.ensure();
  const t = le($e | Pe, e, !0);
  return () => {
    J(t);
  };
}
function wi(e) {
  Z.ensure();
  const t = le($e | Pe, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? ze(t, () => {
      J(t), r(void 0);
    }) : (J(t), r(void 0));
  });
}
function Wt(e) {
  return le(jt, e, !1);
}
function bi(e) {
  return le(qt | Pe, e, !0);
}
function $t(e, t = 0) {
  return le(Ht | t, e, !0);
}
function Bn(e, t = [], n = [], r = []) {
  li(r, t, n, (i) => {
    le(Ht, () => e(...i.map(m)), !0);
  });
}
function Un(e, t = 0) {
  var n = le(de | t, e, !0);
  return n;
}
function ne(e) {
  return le(ve | Pe, e, !0);
}
function Yn(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ie, r = b;
    fn(!0), L(null);
    try {
      t.call(null);
    } finally {
      fn(n), L(r);
    }
  }
}
function Wn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Yt(() => {
      i.abort(De);
    });
    var r = n.next;
    (n.f & $e) !== 0 ? n.parent = null : J(n, t), n = r;
  }
}
function $i(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & ve) === 0 && J(t), t = n;
  }
}
function J(e, t = !0) {
  var n = !1;
  (t || (e.f & wn) !== 0) && e.nodes !== null && e.nodes.end !== null && (yi(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Wn(e, t && !n), ct(e, 0), M(e, oe);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Yn(e);
  var i = e.parent;
  i !== null && i.first !== null && Gn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function yi(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ fe(e);
    e.remove(), e = n;
  }
}
function Gn(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function ze(e, t, n = !0) {
  var r = [];
  Kn(e, r, !0);
  var i = () => {
    n && J(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var f = () => --s || i();
    for (var a of r)
      a.out(f);
  } else
    i();
}
function Kn(e, t, n) {
  if ((e.f & V) === 0) {
    e.f ^= V;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var i = e.first; i !== null; ) {
      var s = i.next, f = (i.f & We) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & ve) !== 0 && (e.f & de) !== 0;
      Kn(i, t, f ? n : !1), i = s;
    }
  }
}
function Jn(e) {
  Xn(e, !0);
}
function Xn(e, t) {
  if ((e.f & V) !== 0) {
    e.f ^= V, (e.f & I) === 0 && (M(e, z), Ce(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & We) !== 0 || (n.f & ve) !== 0;
      Xn(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const f of s)
        (f.is_global || t) && f.in();
  }
}
function Ei(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ fe(n);
      t.append(n), n = i;
    }
}
let Ae = !1;
function ot(e) {
  Ae = e;
}
let Ie = !1;
function fn(e) {
  Ie = e;
}
let b = null, re = !1;
function L(e) {
  b = e;
}
let $ = null;
function se(e) {
  $ = e;
}
let he = null;
function Zn(e) {
  b !== null && (he === null ? he = [e] : he.push(e));
}
let D = null, j = 0, W = null;
function xi(e) {
  W = e;
}
let Qn = 1, Ke = 0, Re = Ke;
function ln(e) {
  Re = e;
}
function er() {
  return ++Qn;
}
function Xe(e) {
  var t = e.f;
  if ((t & z) !== 0)
    return !0;
  if (t & N && (e.f &= ~Te), (t & ie) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, i = 0; i < r; i++) {
        var s = n[i];
        if (Xe(
          /** @type {Derived} */
          s
        ) && On(
          /** @type {Derived} */
          s
        ), s.wv > e.wv)
          return !0;
      }
    (t & Q) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    K === null && M(e, I);
  }
  return !1;
}
function tr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !he?.includes(e))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & N) !== 0 ? tr(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? M(s, z) : (s.f & I) !== 0 && M(s, ie), Ce(
        /** @type {Effect} */
        s
      ));
    }
}
function nr(e) {
  var t = D, n = j, r = W, i = b, s = he, f = X, a = re, l = Re, u = e.f;
  D = /** @type {null | Value[]} */
  null, j = 0, W = null, b = (u & (ve | $e)) === 0 ? e : null, he = null, je(e.ctx), re = !1, Re = ++Ke, e.ac !== null && (Yt(() => {
    e.ac.abort(De);
  }), e.ac = null);
  try {
    e.f |= At;
    var o = (
      /** @type {Function} */
      e.fn
    ), h = o(), c = e.deps;
    if (D !== null) {
      var d;
      if (ct(e, j), c !== null && j > 0)
        for (c.length = j + D.length, d = 0; d < D.length; d++)
          c[j + d] = D[d];
      else
        e.deps = c = D;
      if (Ge() && (e.f & Q) !== 0)
        for (d = j; d < c.length; d++)
          (c[d].reactions ??= []).push(e);
    } else c !== null && j < c.length && (ct(e, j), c.length = j);
    if (En() && W !== null && !re && c !== null && (e.f & (N | ie | z)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      W.length; d++)
        tr(
          W[d],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (Ke++, W !== null && (r === null ? r = W : r.push(.../** @type {Source[]} */
    W))), (e.f & me) !== 0 && (e.f ^= me), h;
  } catch (w) {
    return Sn(w);
  } finally {
    e.f ^= At, D = t, j = n, W = r, b = i, he = s, je(f), re = a, Re = l;
  }
}
function Si(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Or.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && (t.f & N) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (D === null || !D.includes(t)) && (M(t, ie), (t.f & Q) !== 0 && (t.f ^= Q, t.f &= ~Te), Cn(
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
      Si(e, n[r]);
}
function Je(e) {
  var t = e.f;
  if ((t & oe) === 0) {
    M(e, I);
    var n = $, r = Ae;
    $ = e, Ae = !0;
    try {
      (t & (de | Dr)) !== 0 ? $i(e) : Wn(e), Yn(e);
      var i = nr(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Qn;
      var s;
      kt && ei && (e.f & z) !== 0 && e.deps;
    } finally {
      Ae = r, $ = n;
    }
  }
}
function m(e) {
  var t = e.f, n = (t & N) !== 0;
  if (b !== null && !re) {
    var r = $ !== null && ($.f & oe) !== 0;
    if (!r && !he?.includes(e)) {
      var i = b.deps;
      if ((b.f & At) !== 0)
        e.rv < Ke && (e.rv = Ke, D === null && i !== null && i[j] === e ? j++ : D === null ? D = [e] : D.includes(e) || D.push(e));
      else {
        (b.deps ??= []).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [b] : s.includes(b) || s.push(b);
      }
    }
  }
  if (Ie) {
    if (we.has(e))
      return we.get(e);
    if (n) {
      var f = (
        /** @type {Derived} */
        e
      ), a = f.v;
      return ((f.f & I) === 0 && f.reactions !== null || ir(f)) && (a = Ut(f)), we.set(f, a), a;
    }
  } else n && (!K?.has(e) || R?.is_fork && !Ge()) && (f = /** @type {Derived} */
  e, Xe(f) && On(f), Ae && Ge() && (f.f & Q) === 0 && rr(f));
  if (K?.has(e))
    return K.get(e);
  if ((e.f & me) !== 0)
    throw e.v;
  return e.v;
}
function rr(e) {
  if (e.deps !== null) {
    e.f ^= Q;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & N) !== 0 && (t.f & Q) === 0 && rr(
        /** @type {Derived} */
        t
      );
  }
}
function ir(e) {
  if (e.v === P) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (we.has(t) || (t.f & N) !== 0 && ir(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function yt(e) {
  var t = re;
  try {
    return re = !0, e();
  } finally {
    re = t;
  }
}
const ki = -7169;
function M(e, t) {
  e.f = e.f & ki | t;
}
const sr = /* @__PURE__ */ new Set(), Pt = /* @__PURE__ */ new Set();
function Ai(e) {
  for (var t = 0; t < e.length; t++)
    sr.add(e[t]);
  for (var n of Pt)
    n(e);
}
let un = null;
function tt(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  un = e;
  var f = 0, a = un === e && e.__root;
  if (a) {
    var l = i.indexOf(a);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    l <= u && (f = l);
  }
  if (s = /** @type {Element} */
  i[f] || e.target, s !== t) {
    lt(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var o = b, h = $;
    L(null), se(null);
    try {
      for (var c, d = []; s !== null; ) {
        var w = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var x = s["__" + r];
          x != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && x.call(s, e);
        } catch (v) {
          c ? d.push(v) : c = v;
        }
        if (e.cancelBubble || w === t || w === null)
          break;
        s = w;
      }
      if (c) {
        for (let v of d)
          queueMicrotask(() => {
            throw v;
          });
        throw c;
      }
    } finally {
      e.__root = t, delete e.currentTarget, L(o), se(h);
    }
  }
}
function Ri(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function rt(e, t) {
  var n = (
    /** @type {Effect} */
    $
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Gt(e, t) {
  var n = (t & Rr) !== 0, r = (t & Tr) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if (E)
      return rt(S, null), S;
    i === void 0 && (i = Ri(s ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Ne(i)));
    var f = (
      /** @type {TemplateNode} */
      r || Mn ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ne(f)
      ), l = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      rt(a, l);
    } else
      rt(f, f);
    return f;
  };
}
function Et(e, t) {
  if (E) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      $
    );
    ((n.f & _t) === 0 || n.nodes.end === null) && (n.nodes.end = S), Bt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Ti = ["touchstart", "touchmove"];
function Ci(e) {
  return Ti.includes(e);
}
function Oi(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function fr(e, t) {
  return lr(e, t);
}
function Ni(e, t) {
  Ot(), t.intro = t.intro ?? !1;
  const n = t.target, r = E, i = S;
  try {
    for (var s = /* @__PURE__ */ Ne(n); s && (s.nodeType !== Ve || /** @type {Comment} */
    s.data !== _n); )
      s = /* @__PURE__ */ fe(s);
    if (!s)
      throw Fe;
    Ee(!0), B(
      /** @type {Comment} */
      s
    );
    const f = lr(e, { ...t, anchor: s });
    return Ee(!1), /**  @type {Exports} */
    f;
  } catch (f) {
    if (f instanceof Error && f.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw f;
    return f !== Fe && console.warn("Failed to hydrate: ", f), t.recover === !1 && Br(), Ot(), Fn(n), Ee(!1), fr(e, t);
  } finally {
    Ee(r), B(i);
  }
}
const Me = /* @__PURE__ */ new Map();
function lr(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: f = !0 }) {
  Ot();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var c = 0; c < h.length; c++) {
      var d = h[c];
      if (!a.has(d)) {
        a.add(d);
        var w = Ci(d);
        t.addEventListener(d, tt, { passive: w });
        var x = Me.get(d);
        x === void 0 ? (document.addEventListener(d, tt, { passive: w }), Me.set(d, 1)) : Me.set(d, x + 1);
      }
    }
  };
  l(dt(sr)), Pt.add(l);
  var u = void 0, o = wi(() => {
    var h = n ?? t.appendChild(ce());
    return si(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (c) => {
        if (s) {
          gt({});
          var d = (
            /** @type {ComponentContext} */
            X
          );
          d.c = s;
        }
        if (i && (r.$$events = i), E && rt(
          /** @type {TemplateNode} */
          c,
          null
        ), u = e(c, r) || {}, E && ($.nodes.end = S, S === null || S.nodeType !== Ve || /** @type {Comment} */
        S.data !== Ft))
          throw pt(), Fe;
        s && mt();
      }
    ), () => {
      for (var c of a) {
        t.removeEventListener(c, tt);
        var d = (
          /** @type {number} */
          Me.get(c)
        );
        --d === 0 ? (document.removeEventListener(c, tt), Me.delete(c)) : Me.set(c, d);
      }
      Pt.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return It.set(u, o), u;
}
let It = /* @__PURE__ */ new WeakMap();
function Pi(e, t) {
  const n = It.get(e);
  return n ? (It.delete(e), n(t)) : Promise.resolve();
}
function ur(e, t) {
  return t;
}
function Ii(e, t, n) {
  for (var r = [], i = t.length, s, f = t.length, a = 0; a < i; a++) {
    let h = t[a];
    ze(
      h,
      () => {
        if (s) {
          if (s.pending.delete(h), s.done.add(h), s.pending.size === 0) {
            var c = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Mt(dt(s.done)), c.delete(s), c.size === 0 && (e.outrogroups = null);
          }
        } else
          f -= 1;
      },
      !1
    );
  }
  if (f === 0) {
    var l = r.length === 0 && n !== null;
    if (l) {
      var u = (
        /** @type {Element} */
        n
      ), o = (
        /** @type {Element} */
        u.parentNode
      );
      Fn(o), o.append(u), e.items.clear();
    }
    Mt(t, !l);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(s);
}
function Mt(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    J(e[n], t);
}
var an;
function ar(e, t, n, r, i, s = null) {
  var f = e, a = /* @__PURE__ */ new Map(), l = (t & vn) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    f = E ? B(/* @__PURE__ */ Ne(u)) : u.appendChild(ce());
  }
  E && Bt();
  var o = null, h = /* @__PURE__ */ Tn(() => {
    var _ = n();
    return pn(_) ? _ : _ == null ? [] : dt(_);
  }), c, d = !0;
  function w() {
    v.fallback = o, Mi(v, c, f, t, r), o !== null && (c.length === 0 ? (o.f & ae) === 0 ? Jn(o) : (o.f ^= ae, Be(o, null, f)) : ze(o, () => {
      o = null;
    }));
  }
  var x = Un(() => {
    c = /** @type {V[]} */
    m(h);
    var _ = c.length;
    let y = !1;
    if (E) {
      var O = Zr(f) === zt;
      O !== (_ === 0) && (f = Rt(), B(f), Ee(!1), y = !0);
    }
    for (var p = /* @__PURE__ */ new Set(), U = (
      /** @type {Batch} */
      R
    ), _e = vi(), T = 0; T < _; T += 1) {
      E && S.nodeType === Ve && /** @type {Comment} */
      S.data === Ft && (f = /** @type {Comment} */
      S, y = !0, Ee(!1));
      var F = c[T], pe = r(F, T), C = d ? null : a.get(pe);
      C ? (C.v && qe(C.v, F), C.i && qe(C.i, T), _e && U.skipped_effects.delete(C.e)) : (C = Di(
        a,
        d ? f : an ??= ce(),
        F,
        pe,
        T,
        i,
        t,
        n
      ), d || (C.e.f |= ae), a.set(pe, C)), p.add(pe);
    }
    if (_ === 0 && s && !o && (d ? o = ne(() => s(f)) : (o = ne(() => s(an ??= ce())), o.f |= ae)), E && _ > 0 && B(Rt()), !d)
      if (_e) {
        for (const [Ze, Qe] of a)
          p.has(Ze) || U.skipped_effects.add(Qe.e);
        U.oncommit(w), U.ondiscard(() => {
        });
      } else
        w();
    y && Ee(!0), m(h);
  }), v = { effect: x, items: a, outrogroups: null, fallback: o };
  d = !1, E && (f = S);
}
function Mi(e, t, n, r, i) {
  var s = (r & yr) !== 0, f = t.length, a = e.items, l = e.effect.first, u, o = null, h, c = [], d = [], w, x, v, _;
  if (s)
    for (_ = 0; _ < f; _ += 1)
      w = t[_], x = i(w, _), v = /** @type {EachItem} */
      a.get(x).e, (v.f & ae) === 0 && (v.nodes?.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(v));
  for (_ = 0; _ < f; _ += 1) {
    if (w = t[_], x = i(w, _), v = /** @type {EachItem} */
    a.get(x).e, e.outrogroups !== null)
      for (const C of e.outrogroups)
        C.pending.delete(v), C.done.delete(v);
    if ((v.f & ae) !== 0)
      if (v.f ^= ae, v === l)
        Be(v, null, n);
      else {
        var y = o ? o.next : l;
        v === e.effect.last && (e.effect.last = v.prev), v.prev && (v.prev.next = v.next), v.next && (v.next.prev = v.prev), ge(e, o, v), ge(e, v, y), Be(v, y, n), o = v, c = [], d = [], l = o.next;
        continue;
      }
    if ((v.f & V) !== 0 && (Jn(v), s && (v.nodes?.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(v))), v !== l) {
      if (u !== void 0 && u.has(v)) {
        if (c.length < d.length) {
          var O = d[0], p;
          o = O.prev;
          var U = c[0], _e = c[c.length - 1];
          for (p = 0; p < c.length; p += 1)
            Be(c[p], O, n);
          for (p = 0; p < d.length; p += 1)
            u.delete(d[p]);
          ge(e, U.prev, _e.next), ge(e, o, U), ge(e, _e, O), l = O, o = _e, _ -= 1, c = [], d = [];
        } else
          u.delete(v), Be(v, l, n), ge(e, v.prev, v.next), ge(e, v, o === null ? e.effect.first : o.next), ge(e, o, v), o = v;
        continue;
      }
      for (c = [], d = []; l !== null && l !== v; )
        (u ??= /* @__PURE__ */ new Set()).add(l), d.push(l), l = l.next;
      if (l === null)
        continue;
    }
    (v.f & ae) === 0 && c.push(v), o = v, l = v.next;
  }
  if (e.outrogroups !== null) {
    for (const C of e.outrogroups)
      C.pending.size === 0 && (Mt(dt(C.done)), e.outrogroups?.delete(C));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var T = [];
    if (u !== void 0)
      for (v of u)
        (v.f & V) === 0 && T.push(v);
    for (; l !== null; )
      (l.f & V) === 0 && l !== e.fallback && T.push(l), l = l.next;
    var F = T.length;
    if (F > 0) {
      var pe = (r & vn) !== 0 && f === 0 ? n : null;
      if (s) {
        for (_ = 0; _ < F; _ += 1)
          T[_].nodes?.a?.measure();
        for (_ = 0; _ < F; _ += 1)
          T[_].nodes?.a?.fix();
      }
      Ii(e, T, pe);
    }
  }
  s && be(() => {
    if (h !== void 0)
      for (v of h)
        v.nodes?.a?.apply();
  });
}
function Di(e, t, n, r, i, s, f, a) {
  var l = (f & br) !== 0 ? (f & Er) === 0 ? /* @__PURE__ */ Pn(n, !1, !1) : Oe(n) : null, u = (f & $r) !== 0 ? Oe(i) : null;
  return {
    v: l,
    i: u,
    e: ne(() => (s(t, l ?? n, u ?? i, a), () => {
      e.delete(r);
    }))
  };
}
function Be(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & ae) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ fe(r)
      );
      if (s.before(r), r === i)
        return;
      r = f;
    }
}
function ge(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Kt(e, t) {
  Wt(() => {
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
function Li(e, t, n) {
  var r = e == null ? "" : "" + e;
  return t && (r = r ? r + " " + t : t), r === "" ? null : r;
}
function on(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var i in e) {
    var s = e[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function zi(e, t) {
  if (t) {
    var n = "", r, i;
    return Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, r && (n += on(r)), i && (n += on(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(e);
}
function or(e, t, n, r, i, s) {
  var f = e.__className;
  if (E || f !== n || f === void 0) {
    var a = Li(n, r);
    (!E || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : e.className = a), e.__className = n;
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
  if (E || i !== t) {
    var s = zi(t, r);
    (!E || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e.__style = t;
  } else r && (Array.isArray(r) ? (xt(e, n?.[0], r[0]), xt(e, n?.[1], r[1], "important")) : xt(e, n, r));
  return r;
}
const Fi = /* @__PURE__ */ Symbol("is custom element"), ji = /* @__PURE__ */ Symbol("is html");
function Hi(e) {
  if (E) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          Dt(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          Dt(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = n, be(n), jn();
  }
}
function Dt(e, t, n, r) {
  var i = qi(e);
  E && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = n) && (t === "loading" && (e[zr] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Vi(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function qi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Fi]: e.nodeName.includes("-"),
      [ji]: e.namespaceURI === Cr
    }
  );
}
var cn = /* @__PURE__ */ new Map();
function Vi(e) {
  var t = e.getAttribute("is") || e.nodeName, n = cn.get(t);
  if (n) return n;
  cn.set(t, n = []);
  for (var r, i = e, s = Element.prototype; s !== i; ) {
    r = Nr(i);
    for (var f in r)
      r[f].set && n.push(f);
    i = gn(i);
  }
  return n;
}
const St = /* @__PURE__ */ new Set();
function Bi(e, t, n, r, i = r) {
  var s = n.getAttribute("type") === "checkbox", f = e;
  let a = !1;
  if (t !== null)
    for (var l of t)
      f = f[l] ??= [];
  f.push(n), _i(
    n,
    "change",
    () => {
      var u = n.__value;
      s && (u = hn(f, u, n.checked)), i(u);
    },
    // TODO better default value handling
    () => i(s ? [] : null)
  ), $t(() => {
    var u = r();
    if (E && n.defaultChecked !== n.checked) {
      a = !0;
      return;
    }
    s ? (u = u || [], n.checked = u.includes(n.__value)) : n.checked = hi(n.__value, u);
  }), Hn(() => {
    var u = f.indexOf(n);
    u !== -1 && f.splice(u, 1);
  }), St.has(f) || (St.add(f), be(() => {
    f.sort((u, o) => u.compareDocumentPosition(o) === 4 ? -1 : 1), St.delete(f);
  })), be(() => {
    if (a) {
      var u;
      if (s)
        u = hn(f, u, n.checked);
      else {
        var o = f.find((h) => h.checked);
        u = o?.__value;
      }
      i(u);
    }
  });
}
function hn(e, t, n) {
  for (var r = /* @__PURE__ */ new Set(), i = 0; i < e.length; i += 1)
    e[i].checked && r.add(e[i].__value);
  return n || r.delete(t), Array.from(r);
}
class Jt {
  /** */
  #t = /* @__PURE__ */ new WeakMap();
  /** @type {ResizeObserver | undefined} */
  #e;
  /** @type {ResizeObserverOptions} */
  #l;
  /** @static */
  static entries = /* @__PURE__ */ new WeakMap();
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    this.#l = t;
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = this.#t.get(t) || /* @__PURE__ */ new Set();
    return r.add(n), this.#t.set(t, r), this.#n().observe(t, this.#l), () => {
      var i = this.#t.get(t);
      i.delete(n), i.size === 0 && (this.#t.delete(t), this.#e.unobserve(t));
    };
  }
  #n() {
    return this.#e ?? (this.#e = new ResizeObserver(
      /** @param {any} entries */
      (t) => {
        for (var n of t) {
          Jt.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Ui = /* @__PURE__ */ new Jt({
  box: "border-box"
});
function ht(e, t, n) {
  var r = Ui.observe(e, () => n(e[t]));
  Wt(() => (yt(() => n(e[t])), r));
}
function dn(e, t) {
  return e === t || e?.[ke] === t;
}
function Lt(e = {}, t, n, r) {
  return Wt(() => {
    var i, s;
    return $t(() => {
      i = s, s = [], yt(() => {
        e !== n(...s) && (t(e, ...s), i && dn(n(...i), e) && t(null, ...i));
      });
    }), () => {
      be(() => {
        s && dn(n(...s), e) && t(null, ...s);
      });
    };
  }), e;
}
let nt = !1;
function Yi(e) {
  var t = nt;
  try {
    return nt = !1, [e(), nt];
  } finally {
    nt = t;
  }
}
function A(e, t, n, r) {
  var i = (n & kr) !== 0, s = (n & Ar) !== 0, f = (
    /** @type {V} */
    r
  ), a = !0, l = () => (a && (a = !1, f = s ? yt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), f), u;
  if (i) {
    var o = ke in e || bn in e;
    u = Se(e, t)?.set ?? (o && t in e ? (y) => e[t] = y : void 0);
  }
  var h, c = !1;
  i ? [h, c] = Yi(() => (
    /** @type {V} */
    e[t]
  )) : h = /** @type {V} */
  e[t], h === void 0 && r !== void 0 && (h = l(), u && (Ur(), u(h)));
  var d;
  if (d = () => {
    var y = (
      /** @type {V} */
      e[t]
    );
    return y === void 0 ? l() : (a = !0, y);
  }, (n & Sr) === 0)
    return d;
  if (u) {
    var w = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(y, O) {
        return arguments.length > 0 ? ((!O || w || c) && u(O ? d() : y), y) : d();
      })
    );
  }
  var x = !1, v = ((n & xr) !== 0 ? bt : Tn)(() => (x = !1, d()));
  i && m(v);
  var _ = (
    /** @type {Effect} */
    $
  );
  return (
    /** @type {() => V} */
    (function(y, O) {
      if (arguments.length > 0) {
        const p = O ? m(v) : i ? Le(y) : y;
        return q(v, p), x = !0, f !== void 0 && (f = p), y;
      }
      return Ie && x || (_.f & oe) !== 0 ? v.v : m(v);
    })
  );
}
function Wi(e) {
  return new Gi(e);
}
class Gi {
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
    var n = /* @__PURE__ */ new Map(), r = (s, f) => {
      var a = /* @__PURE__ */ Pn(f, !1, !1);
      return n.set(s, a), a;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, f) {
          return m(n.get(f) ?? r(f, Reflect.get(s, f)));
        },
        has(s, f) {
          return f === bn ? !0 : (m(n.get(f) ?? r(f, Reflect.get(s, f))), Reflect.has(s, f));
        },
        set(s, f, a) {
          return q(n.get(f) ?? r(f, a), a), Reflect.set(s, f, a);
        }
      }
    );
    this.#e = (t.hydrate ? Ni : fr)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && k(), this.#t = i.$$events;
    for (const s of Object.keys(this.#e))
      s === "$set" || s === "$destroy" || s === "$on" || lt(this, s, {
        get() {
          return this.#e[s];
        },
        /** @param {any} value */
        set(f) {
          this.#e[s] = f;
        },
        enumerable: !0
      });
    this.#e.$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(i, s);
    }, this.#e.$destroy = () => {
      Pi(this.#e);
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
let cr;
typeof HTMLElement == "function" && (cr = class extends HTMLElement {
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
          const f = document.createElement("slot");
          i !== "default" && (f.name = i), Et(s, f);
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = Ki(this);
      for (const i of this.$$s)
        i in r && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), n.default = !0) : n[i] = t(i));
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = st(s, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Wi({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = mi(() => {
        $t(() => {
          this.$$r = !0;
          for (const i of ft(this.$$c)) {
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
          const f = this.$$c.$on(i, s);
          this.$$l_u.set(s, f);
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
    return ft(this.$$p_d).find(
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
function Ki(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function Xt(e, t, n, r, i, s) {
  let f = class extends cr {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ft(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return ft(t).forEach((a) => {
    lt(f.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = st(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var o = Se(u, a)?.get;
          o ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    lt(f.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  f, f;
}
var Ji = /* @__PURE__ */ Gt('<div class="option svelte-1hi2z3e"><label><input type="radio" class="svelte-1hi2z3e"/> <span></span></label></div>');
const Xi = {
  hash: "svelte-1hi2z3e",
  code: `.checkmark.svelte-1hi2z3e {position:absolute;height:25px;width:25px;background-color:#eee;border-radius:100%;}.option.svelte-1hi2z3e:hover input:where(.svelte-1hi2z3e) ~ .checkmark:where(.svelte-1hi2z3e) {background-color:#ccc;}.option.svelte-1hi2z3e input:where(.svelte-1hi2z3e):checked ~ .checkmark:where(.svelte-1hi2z3e) {background-color:#2196f3;}.dark.svelte-1hi2z3e {background-color:#999;}

	/* Create the checkmark/indicator (hidden when not checked) */.checkmark.svelte-1hi2z3e:after {content:'';position:absolute;display:none;}`
};
function hr(e, t) {
  gt(t, !0), Kt(e, Xi);
  const n = [];
  let r = A(t, "top", 7), i = A(t, "left", 7), s = A(t, "height", 7), f = A(t, "width", 7), a = A(t, "group", 7), l = A(t, "name", 7), u = A(t, "index", 7), o = A(t, "pair", 7), h = A(t, "updateSelection", 7), c, d;
  qn(() => {
    c.style.top = r() + "px", c.style.left = i() + "px", d.style.width = f() + "px", d.style.height = s() + "px", o() && (d.class = d.class + " dark");
  });
  var w = {
    get top() {
      return r();
    },
    set top(p) {
      r(p), k();
    },
    get left() {
      return i();
    },
    set left(p) {
      i(p), k();
    },
    get height() {
      return s();
    },
    set height(p) {
      s(p), k();
    },
    get width() {
      return f();
    },
    set width(p) {
      f(p), k();
    },
    get group() {
      return a();
    },
    set group(p) {
      a(p), k();
    },
    get name() {
      return l();
    },
    set name(p) {
      l(p), k();
    },
    get index() {
      return u();
    },
    set index(p) {
      u(p), k();
    },
    get pair() {
      return o();
    },
    set pair(p) {
      o(p), k();
    },
    get updateSelection() {
      return h();
    },
    set updateSelection(p) {
      h(p), k();
    }
  }, x = Ji();
  it(x, "", {}, { position: "absolute" });
  var v = Nt(x), _ = Nt(v);
  Hi(_), _.__change = function(...p) {
    h()?.apply(this, p);
  }, it(_, "", {}, { opacity: "0", cursor: "pointer" });
  var y, O = zn(_, 2);
  return it(O, "", {}, { "border-radius": "100%" }), Lt(O, (p) => d = p, () => d), ut(v), ut(x), Lt(x, (p) => c = p, () => c), Bn(() => {
    Dt(_, "name", l()), y !== (y = u() + 1) && (_.value = _.__value = u() + 1), or(O, 1, `checkmark ${o() ? "dark" : ""}`, "svelte-1hi2z3e");
  }), Bi(
    n,
    [],
    _,
    () => (u() + 1, a()),
    a
  ), Et(e, x), mt(w);
}
Ai(["change"]);
Xt(
  hr,
  {
    top: {},
    left: {},
    height: {},
    width: {},
    group: {},
    name: {},
    index: {},
    pair: {},
    updateSelection: {}
  },
  [],
  [],
  !0
);
class Zi extends Event {
  // define the parameters of the event using the constructor
  constructor(t, n) {
    super("emotion-selected", {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }), this.index = t, this.value = n;
  }
}
var Qi = /* @__PURE__ */ Gt("<!> <div> </div>", 1);
const es = {
  hash: "svelte-zp4a68",
  code: ".tag.svelte-zp4a68 {position:absolute;font-size:1.2em;}.tagDark.svelte-zp4a68 {color:#999;}"
};
function dr(e, t) {
  gt(t, !0), Kt(e, es);
  let n = [1, 2, 3, 4, 5], r = /* @__PURE__ */ H(void 0);
  const i = A(t, "name", 7), s = A(t, "percentage", 7), f = A(t, "width", 7), a = A(t, "height", 7), l = A(t, "pair", 7), u = A(t, "maxRadius", 7), o = A(t, "minRadius", 7), h = A(t, "tagOffset", 7), c = A(t, "selectionCallback", 7), d = A(t, "index", 7), w = /* @__PURE__ */ te(() => s() * Math.PI * 2);
  let x = /* @__PURE__ */ te(() => a() / 2), v = /* @__PURE__ */ te(() => f() / 2), _ = /* @__PURE__ */ H(0), y = /* @__PURE__ */ H(0);
  function O(g) {
    let ee = o();
    for (let Y = g; Y > 1; Y--)
      ee += T(Y - 1);
    return p(ee);
  }
  function p(g) {
    return {
      y: m(x) + Math.sin(m(w)) * g,
      x: m(v) + Math.cos(m(w)) * g
    };
  }
  const U = /* @__PURE__ */ te(() => p(u() + h())), _e = /* @__PURE__ */ te(() => n.map((g) => O(g)));
  function T(g) {
    return 20 + 40 * (g / (n.length - 1));
  }
  let F;
  qn(() => {
    const g = m(U).y - m(_) / 2, ee = m(U).x - m(y) / 2;
    F.style.top = g + "px", F.style.left = ee + "px";
  });
  function pe(g) {
    const ee = g.target.value, Y = new Zi(d(), ee);
    F.dispatchEvent(Y);
  }
  var C = {
    get name() {
      return i();
    },
    set name(g) {
      i(g), k();
    },
    get percentage() {
      return s();
    },
    set percentage(g) {
      s(g), k();
    },
    get width() {
      return f();
    },
    set width(g) {
      f(g), k();
    },
    get height() {
      return a();
    },
    set height(g) {
      a(g), k();
    },
    get pair() {
      return l();
    },
    set pair(g) {
      l(g), k();
    },
    get maxRadius() {
      return u();
    },
    set maxRadius(g) {
      u(g), k();
    },
    get minRadius() {
      return o();
    },
    set minRadius(g) {
      o(g), k();
    },
    get tagOffset() {
      return h();
    },
    set tagOffset(g) {
      h(g), k();
    },
    get selectionCallback() {
      return c();
    },
    set selectionCallback(g) {
      c(g), k();
    },
    get index() {
      return d();
    },
    set index(g) {
      d(g), k();
    }
  }, Ze = Qi(), Qe = di(Ze);
  ar(Qe, 17, () => m(_e), ur, (g, ee, Y, _r) => {
    {
      let pr = /* @__PURE__ */ te(() => m(ee).y - T(Y) / 2), gr = /* @__PURE__ */ te(() => m(ee).x - T(Y) / 2), mr = /* @__PURE__ */ te(() => T(Y)), wr = /* @__PURE__ */ te(() => T(Y));
      hr(g, {
        get top() {
          return m(pr);
        },
        get left() {
          return m(gr);
        },
        get height() {
          return m(mr);
        },
        get width() {
          return m(wr);
        },
        group: m(r),
        get name() {
          return i();
        },
        get pair() {
          return l();
        },
        index: Y,
        updateSelection: pe
      });
    }
  });
  var ye = zn(Qe, 2);
  let Zt;
  var vr = Nt(ye, !0);
  return ut(ye), Lt(ye, (g) => F = g, () => F), Bn(() => {
    or(ye, 1, `tag ${l() ? "tagDark" : ""}`, "svelte-zp4a68"), Zt = it(ye, "", Zt, {
      top: `${m(U).y - m(_) / 2}px`,
      left: `${m(U).x - m(y) / 2}px`
    }), Oi(vr, i());
  }), ht(ye, "clientWidth", (g) => q(y, g)), ht(ye, "clientHeight", (g) => q(_, g)), Et(e, Ze), mt(C);
}
Xt(
  dr,
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
    index: {}
  },
  [],
  [],
  !0
);
var ts = /* @__PURE__ */ Gt('<div class="wheel h-full svelte-ad83fs"></div>');
const ns = {
  hash: "svelte-ad83fs",
  code: ".wheel.svelte-ad83fs {position:relative;height:100%;width:100%;}"
};
function rs(e, t) {
  gt(t, !0), Kt(e, ns);
  let n = A(t, "emotions", 23, () => ["Sadness"]), r = A(t, "maxRadius", 7, 200), i = A(t, "tagOffset", 7, 120), s = A(t, "minRadius", 7, 50), f = A(t, "selectionCallback", 7, (h, c) => {
    console.log("Chose index : " + h + " with value " + c);
  }), a = /* @__PURE__ */ H(void 0), l = /* @__PURE__ */ H(void 0);
  var u = {
    get emotions() {
      return n();
    },
    set emotions(h = ["Sadness"]) {
      n(h), k();
    },
    get maxRadius() {
      return r();
    },
    set maxRadius(h = 200) {
      r(h), k();
    },
    get tagOffset() {
      return i();
    },
    set tagOffset(h = 120) {
      i(h), k();
    },
    get minRadius() {
      return s();
    },
    set minRadius(h = 50) {
      s(h), k();
    },
    get selectionCallback() {
      return f();
    },
    set selectionCallback(h = (c, d) => {
      console.log("Chose index : " + c + " with value " + d);
    }) {
      f(h), k();
    }
  }, o = ts();
  return ar(o, 21, n, ur, (h, c, d) => {
    {
      let w = /* @__PURE__ */ te(() => d / n().length);
      dr(h, {
        get name() {
          return m(c);
        },
        get percentage() {
          return m(w);
        },
        index: d,
        get width() {
          return m(l);
        },
        get height() {
          return m(a);
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
        pair: d % 2 == 0,
        get selectionCallback() {
          return f();
        }
      });
    }
  }), ut(o), ht(o, "clientWidth", (h) => q(l, h)), ht(o, "clientHeight", (h) => q(a, h)), Et(e, o), mt(u);
}
customElements.define("geneva-emotion-wheel", Xt(
  rs,
  {
    emotions: { attribute: "emotions", type: "Array" },
    maxRadius: { attribute: "max-radius", type: "Number" },
    minRadius: { attribute: "max-radius", type: "Number" },
    tagOffset: { attribute: "tag-offset", type: "Number" },
    selectionCallback: { attribute: "selection-callback", type: "Object" }
  },
  [],
  [],
  !1
));

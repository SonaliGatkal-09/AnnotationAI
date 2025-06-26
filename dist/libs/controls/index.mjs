import { jsx as m, Fragment as Fe, jsxs as ee } from "react/jsx-runtime";
import * as c from "react";
import T, { forwardRef as Ze, createElement as $e, useState as at, createContext as At, useContext as Zt, useEffect as Oe, useLayoutEffect as ra, useRef as ze, useCallback as tr, isValidElement as Bo, PureComponent as Xi, useImperativeHandle as Z1, useMemo as dn, cloneElement as qi, Children as Hn, Fragment as rh, useReducer as Q1 } from "react";
import * as qr from "react-dom";
import vn, { flushSync as oh } from "react-dom";
function J1(e, t) {
  const n = c.createContext(t);
  function r(a) {
    const { children: i, ...s } = a, l = c.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ m(n.Provider, { value: l, children: i });
  }
  function o(a) {
    const i = c.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return r.displayName = e + "Provider", [r, o];
}
function De(e, t = []) {
  let n = [];
  function r(a, i) {
    const s = c.createContext(i), l = n.length;
    n = [...n, i];
    function u(f) {
      const { scope: p, children: g, ...h } = f, v = (p == null ? void 0 : p[e][l]) || s, b = c.useMemo(() => h, Object.values(h));
      return /* @__PURE__ */ m(v.Provider, { value: b, children: g });
    }
    function d(f, p) {
      const g = (p == null ? void 0 : p[e][l]) || s, h = c.useContext(g);
      if (h) return h;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return u.displayName = a + "Provider", [u, d];
  }
  const o = () => {
    const a = n.map((i) => c.createContext(i));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return o.scopeName = e, [r, eN(o, ...t)];
}
function eN(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = r.reduce((s, { useScope: l, scopeName: u }) => {
        const f = l(a)[`__scope${u}`];
        return { ...s, ...f };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function tN(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function oa(...e) {
  return (t) => e.forEach((n) => tN(n, t));
}
function te(...e) {
  return c.useCallback(oa(...e), e);
}
var Ke = c.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = c.Children.toArray(n), a = o.find(nN);
  if (a) {
    const i = a.props.children, s = o.map((l) => l === a ? c.Children.count(i) > 1 ? c.Children.only(null) : c.isValidElement(i) ? i.props.children : null : l);
    return /* @__PURE__ */ m(Gc, { ...r, ref: t, children: c.isValidElement(i) ? c.cloneElement(i, void 0, s) : null });
  }
  return /* @__PURE__ */ m(Gc, { ...r, ref: t, children: n });
});
Ke.displayName = "Slot";
var Gc = c.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (c.isValidElement(n)) {
    const o = oN(n);
    return c.cloneElement(n, {
      ...rN(r, n.props),
      // @ts-ignore
      ref: t ? oa(t, o) : o
    });
  }
  return c.Children.count(n) > 1 ? c.Children.only(null) : null;
});
Gc.displayName = "SlotClone";
var bu = ({ children: e }) => /* @__PURE__ */ m(Fe, { children: e });
function nN(e) {
  return c.isValidElement(e) && e.type === bu;
}
function rN(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      a(...s), o(...s);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function oN(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function hn(e) {
  const t = e + "CollectionProvider", [n, r] = De(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (g) => {
    const { scope: h, children: v } = g, b = T.useRef(null), y = T.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ m(o, { scope: h, itemMap: y, collectionRef: b, children: v });
  };
  i.displayName = t;
  const s = e + "CollectionSlot", l = T.forwardRef(
    (g, h) => {
      const { scope: v, children: b } = g, y = a(s, v), w = te(h, y.collectionRef);
      return /* @__PURE__ */ m(Ke, { ref: w, children: b });
    }
  );
  l.displayName = s;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", f = T.forwardRef(
    (g, h) => {
      const { scope: v, children: b, ...y } = g, w = T.useRef(null), C = te(h, w), E = a(u, v);
      return T.useEffect(() => (E.itemMap.set(w, { ref: w, ...y }), () => void E.itemMap.delete(w))), /* @__PURE__ */ m(Ke, { [d]: "", ref: C, children: b });
    }
  );
  f.displayName = u;
  function p(g) {
    const h = a(e + "CollectionConsumer", g);
    return T.useCallback(() => {
      const b = h.collectionRef.current;
      if (!b) return [];
      const y = Array.from(b.querySelectorAll(`[${d}]`));
      return Array.from(h.itemMap.values()).sort(
        (E, S) => y.indexOf(E.ref.current) - y.indexOf(S.ref.current)
      );
    }, [h.collectionRef, h.itemMap]);
  }
  return [
    { Provider: i, Slot: l, ItemSlot: f },
    p,
    r
  ];
}
function I(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function fe(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Me({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = aN({ defaultProp: t, onChange: n }), a = e !== void 0, i = a ? e : r, s = fe(n), l = c.useCallback(
    (u) => {
      if (a) {
        const f = typeof u == "function" ? u(e) : u;
        f !== e && s(f);
      } else
        o(u);
    },
    [a, e, o, s]
  );
  return [i, l];
}
function aN({
  defaultProp: e,
  onChange: t
}) {
  const n = c.useState(e), [r] = n, o = c.useRef(r), a = fe(t);
  return c.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [r, o, a]), n;
}
var iN = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Y = iN.reduce((e, t) => {
  const n = c.forwardRef((r, o) => {
    const { asChild: a, ...i } = r, s = a ? Ke : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m(s, { ...i, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Nt(e, t) {
  e && qr.flushSync(() => e.dispatchEvent(t));
}
var Ce = globalThis != null && globalThis.document ? c.useLayoutEffect : () => {
};
function sN(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var Be = (e) => {
  const { present: t, children: n } = e, r = cN(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), a = te(r.ref, lN(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: a }) : null;
};
Be.displayName = "Presence";
function cN(e) {
  const [t, n] = c.useState(), r = c.useRef({}), o = c.useRef(e), a = c.useRef("none"), i = e ? "mounted" : "unmounted", [s, l] = sN(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return c.useEffect(() => {
    const u = Aa(r.current);
    a.current = s === "mounted" ? u : "none";
  }, [s]), Ce(() => {
    const u = r.current, d = o.current;
    if (d !== e) {
      const p = a.current, g = Aa(u);
      e ? l("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(d && p !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ce(() => {
    if (t) {
      const u = (f) => {
        const g = Aa(r.current).includes(f.animationName);
        f.target === t && g && qr.flushSync(() => l("ANIMATION_END"));
      }, d = (f) => {
        f.target === t && (a.current = Aa(r.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: c.useCallback((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function Aa(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function lN(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var uN = c.useId || (() => {
}), dN = 0;
function Le(e) {
  const [t, n] = c.useState(uN());
  return Ce(() => {
    n((r) => r ?? String(dN++));
  }, [e]), t ? `radix-${t}` : "";
}
var yu = "Collapsible", [fN, ah] = De(yu), [pN, wu] = fN(yu), ih = c.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: a,
      onOpenChange: i,
      ...s
    } = e, [l = !1, u] = Me({
      prop: r,
      defaultProp: o,
      onChange: i
    });
    return /* @__PURE__ */ m(
      pN,
      {
        scope: n,
        disabled: a,
        contentId: Le(),
        open: l,
        onOpenToggle: c.useCallback(() => u((d) => !d), [u]),
        children: /* @__PURE__ */ m(
          Y.div,
          {
            "data-state": Eu(l),
            "data-disabled": a ? "" : void 0,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
ih.displayName = yu;
var sh = "CollapsibleTrigger", xu = c.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = wu(sh, n);
    return /* @__PURE__ */ m(
      Y.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Eu(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: I(e.onClick, o.onOpenToggle)
      }
    );
  }
);
xu.displayName = sh;
var Cu = "CollapsibleContent", Su = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = wu(Cu, e.__scopeCollapsible);
    return /* @__PURE__ */ m(Be, { present: n || o.open, children: ({ present: a }) => /* @__PURE__ */ m(mN, { ...r, ref: t, present: a }) });
  }
);
Su.displayName = Cu;
var mN = c.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, i = wu(Cu, n), [s, l] = c.useState(r), u = c.useRef(null), d = te(t, u), f = c.useRef(0), p = f.current, g = c.useRef(0), h = g.current, v = i.open || s, b = c.useRef(v), y = c.useRef();
  return c.useEffect(() => {
    const w = requestAnimationFrame(() => b.current = !1);
    return () => cancelAnimationFrame(w);
  }, []), Ce(() => {
    const w = u.current;
    if (w) {
      y.current = y.current || {
        transitionDuration: w.style.transitionDuration,
        animationName: w.style.animationName
      }, w.style.transitionDuration = "0s", w.style.animationName = "none";
      const C = w.getBoundingClientRect();
      f.current = C.height, g.current = C.width, b.current || (w.style.transitionDuration = y.current.transitionDuration, w.style.animationName = y.current.animationName), l(r);
    }
  }, [i.open, r]), /* @__PURE__ */ m(
    Y.div,
    {
      "data-state": Eu(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !v,
      ...a,
      ref: d,
      style: {
        "--radix-collapsible-content-height": p ? `${p}px` : void 0,
        "--radix-collapsible-content-width": h ? `${h}px` : void 0,
        ...e.style
      },
      children: v && o
    }
  );
});
function Eu(e) {
  return e ? "open" : "closed";
}
var ch = ih, vN = xu, hN = Su, gN = c.createContext(void 0);
function Bt(e) {
  const t = c.useContext(gN);
  return e || t || "ltr";
}
var gn = "Accordion", bN = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Pu, yN, wN] = hn(gn), [Zi, qJ] = De(gn, [
  wN,
  ah
]), Nu = ah(), lh = T.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, a = r;
    return /* @__PURE__ */ m(Pu.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ m(EN, { ...a, ref: t }) : /* @__PURE__ */ m(SN, { ...o, ref: t }) });
  }
);
lh.displayName = gn;
var [uh, xN] = Zi(gn), [dh, CN] = Zi(
  gn,
  { collapsible: !1 }
), SN = T.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: a = !1,
      ...i
    } = e, [s, l] = Me({
      prop: n,
      defaultProp: r,
      onChange: o
    });
    return /* @__PURE__ */ m(
      uh,
      {
        scope: e.__scopeAccordion,
        value: s ? [s] : [],
        onItemOpen: l,
        onItemClose: T.useCallback(() => a && l(""), [a, l]),
        children: /* @__PURE__ */ m(dh, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ m(fh, { ...i, ref: t }) })
      }
    );
  }
), EN = T.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i = [], s] = Me({
    prop: n,
    defaultProp: r,
    onChange: o
  }), l = T.useCallback(
    (d) => s((f = []) => [...f, d]),
    [s]
  ), u = T.useCallback(
    (d) => s((f = []) => f.filter((p) => p !== d)),
    [s]
  );
  return /* @__PURE__ */ m(
    uh,
    {
      scope: e.__scopeAccordion,
      value: i,
      onItemOpen: l,
      onItemClose: u,
      children: /* @__PURE__ */ m(dh, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ m(fh, { ...a, ref: t }) })
    }
  );
}), [PN, Qi] = Zi(gn), fh = T.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...i } = e, s = T.useRef(null), l = te(s, t), u = yN(n), f = Bt(o) === "ltr", p = I(e.onKeyDown, (g) => {
      var N;
      if (!bN.includes(g.key)) return;
      const h = g.target, v = u().filter((R) => {
        var M;
        return !((M = R.ref.current) != null && M.disabled);
      }), b = v.findIndex((R) => R.ref.current === h), y = v.length;
      if (b === -1) return;
      g.preventDefault();
      let w = b;
      const C = 0, E = y - 1, S = () => {
        w = b + 1, w > E && (w = C);
      }, P = () => {
        w = b - 1, w < C && (w = E);
      };
      switch (g.key) {
        case "Home":
          w = C;
          break;
        case "End":
          w = E;
          break;
        case "ArrowRight":
          a === "horizontal" && (f ? S() : P());
          break;
        case "ArrowDown":
          a === "vertical" && S();
          break;
        case "ArrowLeft":
          a === "horizontal" && (f ? P() : S());
          break;
        case "ArrowUp":
          a === "vertical" && P();
          break;
      }
      const x = w % y;
      (N = v[x].ref.current) == null || N.focus();
    });
    return /* @__PURE__ */ m(
      PN,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ m(Pu.Slot, { scope: n, children: /* @__PURE__ */ m(
          Y.div,
          {
            ...i,
            "data-orientation": a,
            ref: l,
            onKeyDown: r ? void 0 : p
          }
        ) })
      }
    );
  }
), vi = "AccordionItem", [NN, Ru] = Zi(vi), ph = T.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, a = Qi(vi, n), i = xN(vi, n), s = Nu(n), l = Le(), u = r && i.value.includes(r) || !1, d = a.disabled || e.disabled;
    return /* @__PURE__ */ m(
      NN,
      {
        scope: n,
        open: u,
        disabled: d,
        triggerId: l,
        children: /* @__PURE__ */ m(
          ch,
          {
            "data-orientation": a.orientation,
            "data-state": yh(u),
            ...s,
            ...o,
            ref: t,
            disabled: d,
            open: u,
            onOpenChange: (f) => {
              f ? i.onItemOpen(r) : i.onItemClose(r);
            }
          }
        )
      }
    );
  }
);
ph.displayName = vi;
var mh = "AccordionHeader", vh = T.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Qi(gn, n), a = Ru(mh, n);
    return /* @__PURE__ */ m(
      Y.h3,
      {
        "data-orientation": o.orientation,
        "data-state": yh(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
vh.displayName = mh;
var Yc = "AccordionTrigger", hh = T.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Qi(gn, n), a = Ru(Yc, n), i = CN(Yc, n), s = Nu(n);
    return /* @__PURE__ */ m(Pu.ItemSlot, { scope: n, children: /* @__PURE__ */ m(
      vN,
      {
        "aria-disabled": a.open && !i.collapsible || void 0,
        "data-orientation": o.orientation,
        id: a.triggerId,
        ...s,
        ...r,
        ref: t
      }
    ) });
  }
);
hh.displayName = Yc;
var gh = "AccordionContent", bh = T.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Qi(gn, n), a = Ru(gh, n), i = Nu(n);
    return /* @__PURE__ */ m(
      hN,
      {
        role: "region",
        "aria-labelledby": a.triggerId,
        "data-orientation": o.orientation,
        ...i,
        ...r,
        ref: t,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...e.style
        }
      }
    );
  }
);
bh.displayName = gh;
function yh(e) {
  return e ? "open" : "closed";
}
var RN = lh, _N = ph, TN = vh, wh = hh, xh = bh;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $N = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ch = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var MN = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ON = Ze(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: i,
    ...s
  }, l) => $e(
    "svg",
    {
      ref: l,
      ...MN,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Ch("lucide", o),
      ...s
    },
    [
      ...i.map(([u, d]) => $e(u, d)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = (e, t) => {
  const n = Ze(
    ({ className: r, ...o }, a) => $e(ON, {
      ref: a,
      iconNode: t,
      className: Ch(`lucide-${$N(e)}`, r),
      ...o
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DN = st("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AN = st("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = st("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ji = st("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sh = st("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = st("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IN = st("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kN = st("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = st("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LN = st("Dot", [
  ["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eh = st("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FN = st("GripVertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BN = st("PanelLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WN = st("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _u = st("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Ph(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ph(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function fn() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ph(e)) && (r && (r += " "), r += t);
  return r;
}
const Tu = "-", zN = (e) => {
  const t = jN(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(Tu);
      return s[0] === "" && s.length !== 1 && s.shift(), Nh(s, t) || HN(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const l = n[i] || [];
      return s && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, Nh = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Nh(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Tu);
  return (i = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : i.classGroupId;
}, qf = /^\[(.+)\]$/, HN = (e) => {
  if (qf.test(e)) {
    const t = qf.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, jN = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return UN(Object.entries(e.classGroups), n).forEach(([a, i]) => {
    Kc(i, r, a, t);
  }), r;
}, Kc = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : Zf(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (VN(o)) {
        Kc(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      Kc(i, Zf(t, a), n, r);
    });
  });
}, Zf = (e, t) => {
  let n = e;
  return t.split(Tu).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, VN = (e) => e.isThemeGetter, UN = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([i, s]) => [t + i, s])) : a);
  return [n, o];
}) : e, GN = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (a, i) => {
    n.set(a, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let i = n.get(a);
      if (i !== void 0)
        return i;
      if ((i = r.get(a)) !== void 0)
        return o(a, i), i;
    },
    set(a, i) {
      n.has(a) ? n.set(a, i) : o(a, i);
    }
  };
}, Rh = "!", YN = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], a = t.length, i = (s) => {
    const l = [];
    let u = 0, d = 0, f;
    for (let b = 0; b < s.length; b++) {
      let y = s[b];
      if (u === 0) {
        if (y === o && (r || s.slice(b, b + a) === t)) {
          l.push(s.slice(d, b)), d = b + a;
          continue;
        }
        if (y === "/") {
          f = b;
          continue;
        }
      }
      y === "[" ? u++ : y === "]" && u--;
    }
    const p = l.length === 0 ? s : s.substring(d), g = p.startsWith(Rh), h = g ? p.substring(1) : p, v = f && f > d ? f - d : void 0;
    return {
      modifiers: l,
      hasImportantModifier: g,
      baseClassName: h,
      maybePostfixModifierPosition: v
    };
  };
  return n ? (s) => n({
    className: s,
    parseClassName: i
  }) : i;
}, KN = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, XN = (e) => ({
  cache: GN(e.cacheSize),
  parseClassName: YN(e),
  ...zN(e)
}), qN = /\s+/, ZN = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, a = [], i = e.trim().split(qN);
  let s = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const u = i[l], {
      modifiers: d,
      hasImportantModifier: f,
      baseClassName: p,
      maybePostfixModifierPosition: g
    } = n(u);
    let h = !!g, v = r(h ? p.substring(0, g) : p);
    if (!v) {
      if (!h) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (v = r(p), !v) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      h = !1;
    }
    const b = KN(d).join(":"), y = f ? b + Rh : b, w = y + v;
    if (a.includes(w))
      continue;
    a.push(w);
    const C = o(v, h);
    for (let E = 0; E < C.length; ++E) {
      const S = C[E];
      a.push(y + S);
    }
    s = u + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function QN() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = _h(t)) && (r && (r += " "), r += n);
  return r;
}
const _h = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = _h(e[r])) && (n && (n += " "), n += t);
  return n;
};
function JN(e, ...t) {
  let n, r, o, a = i;
  function i(l) {
    const u = t.reduce((d, f) => f(d), e());
    return n = XN(u), r = n.cache.get, o = n.cache.set, a = s, s(l);
  }
  function s(l) {
    const u = r(l);
    if (u)
      return u;
    const d = ZN(l, n);
    return o(l, d), d;
  }
  return function() {
    return a(QN.apply(null, arguments));
  };
}
const Ie = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Th = /^\[(?:([a-z-]+):)?(.+)\]$/i, eR = /^\d+\/\d+$/, tR = /* @__PURE__ */ new Set(["px", "full", "screen"]), nR = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, rR = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, oR = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, aR = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, iR = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, on = (e) => $r(e) || tR.has(e) || eR.test(e), wn = (e) => Jr(e, "length", mR), $r = (e) => !!e && !Number.isNaN(Number(e)), Ks = (e) => Jr(e, "number", $r), So = (e) => !!e && Number.isInteger(Number(e)), sR = (e) => e.endsWith("%") && $r(e.slice(0, -1)), me = (e) => Th.test(e), xn = (e) => nR.test(e), cR = /* @__PURE__ */ new Set(["length", "size", "percentage"]), lR = (e) => Jr(e, cR, $h), uR = (e) => Jr(e, "position", $h), dR = /* @__PURE__ */ new Set(["image", "url"]), fR = (e) => Jr(e, dR, hR), pR = (e) => Jr(e, "", vR), Eo = () => !0, Jr = (e, t, n) => {
  const r = Th.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, mR = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  rR.test(e) && !oR.test(e)
), $h = () => !1, vR = (e) => aR.test(e), hR = (e) => iR.test(e), gR = () => {
  const e = Ie("colors"), t = Ie("spacing"), n = Ie("blur"), r = Ie("brightness"), o = Ie("borderColor"), a = Ie("borderRadius"), i = Ie("borderSpacing"), s = Ie("borderWidth"), l = Ie("contrast"), u = Ie("grayscale"), d = Ie("hueRotate"), f = Ie("invert"), p = Ie("gap"), g = Ie("gradientColorStops"), h = Ie("gradientColorStopPositions"), v = Ie("inset"), b = Ie("margin"), y = Ie("opacity"), w = Ie("padding"), C = Ie("saturate"), E = Ie("scale"), S = Ie("sepia"), P = Ie("skew"), x = Ie("space"), N = Ie("translate"), R = () => ["auto", "contain", "none"], M = () => ["auto", "hidden", "clip", "visible", "scroll"], k = () => ["auto", me, t], B = () => [me, t], Z = () => ["", on, wn], F = () => ["auto", $r, me], H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], j = () => ["solid", "dashed", "dotted", "double", "none"], W = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], O = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], V = () => ["", "0", me], ne = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], q = () => [$r, me];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Eo],
      spacing: [on, wn],
      blur: ["none", "", xn, me],
      brightness: q(),
      borderColor: [e],
      borderRadius: ["none", "", "full", xn, me],
      borderSpacing: B(),
      borderWidth: Z(),
      contrast: q(),
      grayscale: V(),
      hueRotate: q(),
      invert: V(),
      gap: B(),
      gradientColorStops: [e],
      gradientColorStopPositions: [sR, wn],
      inset: k(),
      margin: k(),
      opacity: q(),
      padding: B(),
      saturate: q(),
      scale: q(),
      sepia: V(),
      skew: q(),
      space: B(),
      translate: B()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", me]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [xn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ne()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ne()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...H(), me]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: M()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": M()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": M()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", So, me]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: k()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", me]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: V()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: V()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", So, me]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Eo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", So, me]
        }, me]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": F()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": F()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Eo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [So, me]
        }, me]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": F()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": F()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", me]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", me]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...O()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...O(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...O(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [x]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [x]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", me, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [me, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [me, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [xn]
        }, xn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [me, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [me, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [me, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [me, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", xn, wn]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ks]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Eo]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", me]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", $r, Ks]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", on, me]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", me]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", me]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [y]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...j(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", on, wn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", on, me]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: B()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", me]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", me]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [y]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...H(), uR]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", lR]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, fR]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [h]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [g]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...j(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: j()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...j()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [on, me]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [on, wn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: Z()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [on, wn]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", xn, pR]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Eo]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...W(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": W()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", xn, me]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [C]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [S]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [C]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [S]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", me]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: q()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", me]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: q()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", me]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [So, me]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [N]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [N]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [P]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [P]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", me]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", me]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": B()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": B()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": B()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": B()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": B()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": B()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": B()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": B()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": B()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": B()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": B()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": B()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": B()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": B()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": B()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": B()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": B()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": B()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", me]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [on, wn, Ks]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, bR = /* @__PURE__ */ JN(gR);
function $(...e) {
  return bR(fn(e));
}
const ZJ = RN, yR = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  _N,
  {
    ref: n,
    className: $("border-b", e),
    ...t
  }
));
yR.displayName = "AccordionItem";
const wR = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ m(TN, { className: "flex", children: /* @__PURE__ */ ee(
  wh,
  {
    ref: r,
    className: $(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ m(Ji, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
wR.displayName = wh.displayName;
const xR = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ m(
  xh,
  {
    ref: r,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: /* @__PURE__ */ m("div", { className: $("pb-4 pt-0", e), children: t })
  }
));
xR.displayName = xh.displayName;
function _n(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e);
  c.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var CR = "DismissableLayer", Xc = "dismissableLayer.update", SR = "dismissableLayer.pointerDownOutside", ER = "dismissableLayer.focusOutside", Qf, Mh = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Oh = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...l
    } = e, u = c.useContext(Mh), [d, f] = c.useState(null), p = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = c.useState({}), h = te(t, (x) => f(x)), v = Array.from(u.layers), [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = v.indexOf(b), w = d ? v.indexOf(d) : -1, C = u.layersWithOutsidePointerEventsDisabled.size > 0, E = w >= y, S = RR((x) => {
      const N = x.target, R = [...u.branches].some((M) => M.contains(N));
      !E || R || (o == null || o(x), i == null || i(x), x.defaultPrevented || s == null || s());
    }, p), P = _R((x) => {
      const N = x.target;
      [...u.branches].some((M) => M.contains(N)) || (a == null || a(x), i == null || i(x), x.defaultPrevented || s == null || s());
    }, p);
    return _n((x) => {
      w === u.layers.size - 1 && (r == null || r(x), !x.defaultPrevented && s && (x.preventDefault(), s()));
    }, p), c.useEffect(() => {
      if (d)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Qf = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Jf(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Qf);
        };
    }, [d, p, n, u]), c.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Jf());
    }, [d, u]), c.useEffect(() => {
      const x = () => g({});
      return document.addEventListener(Xc, x), () => document.removeEventListener(Xc, x);
    }, []), /* @__PURE__ */ m(
      Y.div,
      {
        ...l,
        ref: h,
        style: {
          pointerEvents: C ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: I(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: I(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: I(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
Oh.displayName = CR;
var PR = "DismissableLayerBranch", NR = c.forwardRef((e, t) => {
  const n = c.useContext(Mh), r = c.useRef(null), o = te(t, r);
  return c.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ m(Y.div, { ...e, ref: o });
});
NR.displayName = PR;
function RR(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e), r = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          Dh(
            SR,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function _R(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && Dh(ER, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Jf() {
  const e = new CustomEvent(Xc);
  document.dispatchEvent(e);
}
function Dh(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Nt(o, a) : o.dispatchEvent(a);
}
var Xs = "focusScope.autoFocusOnMount", qs = "focusScope.autoFocusOnUnmount", ep = { bubbles: !1, cancelable: !0 }, TR = "FocusScope", eo = c.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [s, l] = c.useState(null), u = fe(o), d = fe(a), f = c.useRef(null), p = te(t, (v) => l(v)), g = c.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  c.useEffect(() => {
    if (r) {
      let v = function(C) {
        if (g.paused || !s) return;
        const E = C.target;
        s.contains(E) ? f.current = E : Sn(f.current, { select: !0 });
      }, b = function(C) {
        if (g.paused || !s) return;
        const E = C.relatedTarget;
        E !== null && (s.contains(E) || Sn(f.current, { select: !0 }));
      }, y = function(C) {
        if (document.activeElement === document.body)
          for (const S of C)
            S.removedNodes.length > 0 && Sn(s);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", b);
      const w = new MutationObserver(y);
      return s && w.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", b), w.disconnect();
      };
    }
  }, [r, s, g.paused]), c.useEffect(() => {
    if (s) {
      np.add(g);
      const v = document.activeElement;
      if (!s.contains(v)) {
        const y = new CustomEvent(Xs, ep);
        s.addEventListener(Xs, u), s.dispatchEvent(y), y.defaultPrevented || ($R(IR(Ah(s)), { select: !0 }), document.activeElement === v && Sn(s));
      }
      return () => {
        s.removeEventListener(Xs, u), setTimeout(() => {
          const y = new CustomEvent(qs, ep);
          s.addEventListener(qs, d), s.dispatchEvent(y), y.defaultPrevented || Sn(v ?? document.body, { select: !0 }), s.removeEventListener(qs, d), np.remove(g);
        }, 0);
      };
    }
  }, [s, u, d, g]);
  const h = c.useCallback(
    (v) => {
      if (!n && !r || g.paused) return;
      const b = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, y = document.activeElement;
      if (b && y) {
        const w = v.currentTarget, [C, E] = MR(w);
        C && E ? !v.shiftKey && y === E ? (v.preventDefault(), n && Sn(C, { select: !0 })) : v.shiftKey && y === C && (v.preventDefault(), n && Sn(E, { select: !0 })) : y === w && v.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ m(Y.div, { tabIndex: -1, ...i, ref: p, onKeyDown: h });
});
eo.displayName = TR;
function $R(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Sn(r, { select: t }), document.activeElement !== n) return;
}
function MR(e) {
  const t = Ah(e), n = tp(t, e), r = tp(t.reverse(), e);
  return [n, r];
}
function Ah(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function tp(e, t) {
  for (const n of e)
    if (!OR(n, { upTo: t })) return n;
}
function OR(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function DR(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Sn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && DR(e) && t && e.select();
  }
}
var np = AR();
function AR() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = rp(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = rp(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function rp(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function IR(e) {
  return e.filter((t) => t.tagName !== "A");
}
var kR = "Portal", Ih = c.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, a] = c.useState(!1);
  Ce(() => a(!0), []);
  const i = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? vn.createPortal(/* @__PURE__ */ m(Y.div, { ...r, ref: t }), i) : null;
});
Ih.displayName = kR;
var Zs = 0;
function LR() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? op()), document.body.insertAdjacentElement("beforeend", e[1] ?? op()), Zs++, () => {
      Zs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Zs--;
    };
  }, []);
}
function op() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var he = function() {
  return he = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, he.apply(this, arguments);
};
function nr(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function to(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var ln = "right-scroll-bar-position", un = "width-before-scroll-bar", FR = "with-scroll-bars-hidden", BR = "--removed-body-scroll-bar-size";
function Qs(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function WR(e, t) {
  var n = at(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var zR = typeof window < "u" ? c.useLayoutEffect : c.useEffect, ap = /* @__PURE__ */ new WeakMap();
function no(e, t) {
  var n = WR(null, function(r) {
    return e.forEach(function(o) {
      return Qs(o, r);
    });
  });
  return zR(function() {
    var r = ap.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), i = n.current;
      o.forEach(function(s) {
        a.has(s) || Qs(s, null);
      }), a.forEach(function(s) {
        o.has(s) || Qs(s, i);
      });
    }
    ap.set(n, e);
  }, [e]), n;
}
function HR(e) {
  return e;
}
function jR(e, t) {
  t === void 0 && (t = HR);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, r);
      return n.push(i), function() {
        n = n.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(a);
      }
      n = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var i = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(a), i = n;
      }
      var l = function() {
        var d = i;
        i = [], d.forEach(a);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(d) {
          i.push(d), u();
        },
        filter: function(d) {
          return i = i.filter(d), n;
        }
      };
    }
  };
  return o;
}
function ro(e) {
  e === void 0 && (e = {});
  var t = jR(null);
  return t.options = he({ async: !0, ssr: !1 }, e), t;
}
var kh = function(e) {
  var t = e.sideCar, n = nr(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return c.createElement(r, he({}, n));
};
kh.isSideCarExport = !0;
function oo(e, t) {
  return e.useMedium(t), kh;
}
var Lh = ro(), Js = function() {
}, ts = c.forwardRef(function(e, t) {
  var n = c.useRef(null), r = c.useState({
    onScrollCapture: Js,
    onWheelCapture: Js,
    onTouchMoveCapture: Js
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, g = e.noIsolation, h = e.inert, v = e.allowPinchZoom, b = e.as, y = b === void 0 ? "div" : b, w = e.gapMode, C = nr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = p, S = no([n, t]), P = he(he({}, C), o);
  return c.createElement(
    c.Fragment,
    null,
    d && c.createElement(E, { sideCar: Lh, removeScrollBar: u, shards: f, noIsolation: g, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n, gapMode: w }),
    i ? c.cloneElement(c.Children.only(s), he(he({}, P), { ref: S })) : c.createElement(y, he({}, P, { className: l, ref: S }), s)
  );
});
ts.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ts.classNames = {
  fullWidth: un,
  zeroRight: ln
};
var VR = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function UR() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = VR();
  return t && e.setAttribute("nonce", t), e;
}
function GR(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function YR(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var KR = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = UR()) && (GR(t, n), YR(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, XR = function() {
  var e = KR();
  return function(t, n) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, rr = function() {
  var e = XR(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, qR = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ec = function(e) {
  return parseInt(e || "", 10) || 0;
}, ZR = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ec(n), ec(r), ec(o)];
}, QR = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return qR;
  var t = ZR(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, JR = rr(), Mr = "data-scroll-locked", e_ = function(e, t, n, r) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(FR, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(Mr, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ln, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(un, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(ln, " .").concat(ln, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(un, " .").concat(un, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Mr, `] {
    `).concat(BR, ": ").concat(s, `px;
  }
`);
}, ip = function() {
  var e = parseInt(document.body.getAttribute(Mr) || "0", 10);
  return isFinite(e) ? e : 0;
}, t_ = function() {
  c.useEffect(function() {
    return document.body.setAttribute(Mr, (ip() + 1).toString()), function() {
      var e = ip() - 1;
      e <= 0 ? document.body.removeAttribute(Mr) : document.body.setAttribute(Mr, e.toString());
    };
  }, []);
}, ao = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  t_();
  var a = c.useMemo(function() {
    return QR(o);
  }, [o]);
  return c.createElement(JR, { styles: e_(a, !t, o, n ? "" : "!important") });
}, qc = !1;
if (typeof window < "u")
  try {
    var Ia = Object.defineProperty({}, "passive", {
      get: function() {
        return qc = !0, !0;
      }
    });
    window.addEventListener("test", Ia, Ia), window.removeEventListener("test", Ia, Ia);
  } catch {
    qc = !1;
  }
var dr = qc ? { passive: !1 } : !1, n_ = function(e) {
  return e.tagName === "TEXTAREA";
}, Fh = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !n_(e) && n[t] === "visible")
  );
}, r_ = function(e) {
  return Fh(e, "overflowY");
}, o_ = function(e) {
  return Fh(e, "overflowX");
}, sp = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Bh(e, r);
    if (o) {
      var a = Wh(e, r), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, a_ = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, i_ = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Bh = function(e, t) {
  return e === "v" ? r_(t) : o_(t);
}, Wh = function(e, t) {
  return e === "v" ? a_(t) : i_(t);
}, s_ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, c_ = function(e, t, n, r, o) {
  var a = s_(e, window.getComputedStyle(t).direction), i = a * r, s = n.target, l = t.contains(s), u = !1, d = i > 0, f = 0, p = 0;
  do {
    var g = Wh(e, s), h = g[0], v = g[1], b = g[2], y = v - b - a * h;
    (h || y) && Bh(e, s) && (f += y, p += h), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (d && Math.abs(f) < 1 || !d && Math.abs(p) < 1) && (u = !0), u;
}, ka = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, cp = function(e) {
  return [e.deltaX, e.deltaY];
}, lp = function(e) {
  return e && "current" in e ? e.current : e;
}, l_ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, u_ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, d_ = 0, fr = [];
function f_(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), o = c.useState(d_++)[0], a = c.useState(rr)[0], i = c.useRef(e);
  c.useEffect(function() {
    i.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = to([e.lockRef.current], (e.shards || []).map(lp), !0).filter(Boolean);
      return v.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = c.useCallback(function(v, b) {
    if ("touches" in v && v.touches.length === 2)
      return !i.current.allowPinchZoom;
    var y = ka(v), w = n.current, C = "deltaX" in v ? v.deltaX : w[0] - y[0], E = "deltaY" in v ? v.deltaY : w[1] - y[1], S, P = v.target, x = Math.abs(C) > Math.abs(E) ? "h" : "v";
    if ("touches" in v && x === "h" && P.type === "range")
      return !1;
    var N = sp(x, P);
    if (!N)
      return !0;
    if (N ? S = x : (S = x === "v" ? "h" : "v", N = sp(x, P)), !N)
      return !1;
    if (!r.current && "changedTouches" in v && (C || E) && (r.current = S), !S)
      return !0;
    var R = r.current || S;
    return c_(R, b, v, R === "h" ? C : E);
  }, []), l = c.useCallback(function(v) {
    var b = v;
    if (!(!fr.length || fr[fr.length - 1] !== a)) {
      var y = "deltaY" in b ? cp(b) : ka(b), w = t.current.filter(function(S) {
        return S.name === b.type && (S.target === b.target || b.target === S.shadowParent) && l_(S.delta, y);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var C = (i.current.shards || []).map(lp).filter(Boolean).filter(function(S) {
          return S.contains(b.target);
        }), E = C.length > 0 ? s(b, C[0]) : !i.current.noIsolation;
        E && b.cancelable && b.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(v, b, y, w) {
    var C = { name: v, delta: b, target: y, should: w, shadowParent: p_(y) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== C;
      });
    }, 1);
  }, []), d = c.useCallback(function(v) {
    n.current = ka(v), r.current = void 0;
  }, []), f = c.useCallback(function(v) {
    u(v.type, cp(v), v.target, s(v, e.lockRef.current));
  }, []), p = c.useCallback(function(v) {
    u(v.type, ka(v), v.target, s(v, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return fr.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, dr), document.addEventListener("touchmove", l, dr), document.addEventListener("touchstart", d, dr), function() {
      fr = fr.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", l, dr), document.removeEventListener("touchmove", l, dr), document.removeEventListener("touchstart", d, dr);
    };
  }, []);
  var g = e.removeScrollBar, h = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    h ? c.createElement(a, { styles: u_(o) }) : null,
    g ? c.createElement(ao, { gapMode: e.gapMode }) : null
  );
}
function p_(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const m_ = oo(Lh, f_);
var zh = c.forwardRef(function(e, t) {
  return c.createElement(ts, he({}, e, { ref: t, sideCar: m_ }));
});
zh.classNames = ts.classNames;
var v_ = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, pr = /* @__PURE__ */ new WeakMap(), La = /* @__PURE__ */ new WeakMap(), Fa = {}, tc = 0, Hh = function(e) {
  return e && (e.host || Hh(e.parentNode));
}, h_ = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Hh(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, g_ = function(e, t, n, r) {
  var o = h_(t, Array.isArray(e) ? e : [e]);
  Fa[n] || (Fa[n] = /* @__PURE__ */ new WeakMap());
  var a = Fa[n], i = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(f) {
    !f || s.has(f) || (s.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var d = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (s.has(p))
        d(p);
      else
        try {
          var g = p.getAttribute(r), h = g !== null && g !== "false", v = (pr.get(p) || 0) + 1, b = (a.get(p) || 0) + 1;
          pr.set(p, v), a.set(p, b), i.push(p), v === 1 && h && La.set(p, !0), b === 1 && p.setAttribute(n, "true"), h || p.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", p, y);
        }
    });
  };
  return d(t), s.clear(), tc++, function() {
    i.forEach(function(f) {
      var p = pr.get(f) - 1, g = a.get(f) - 1;
      pr.set(f, p), a.set(f, g), p || (La.has(f) || f.removeAttribute(r), La.delete(f)), g || f.removeAttribute(n);
    }), tc--, tc || (pr = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap(), La = /* @__PURE__ */ new WeakMap(), Fa = {});
  };
}, io = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = v_(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), g_(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, $u = "Dialog", [jh, Vh] = De($u), [b_, Wt] = jh($u), Uh = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = c.useRef(null), l = c.useRef(null), [u = !1, d] = Me({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ m(
    b_,
    {
      scope: t,
      triggerRef: s,
      contentRef: l,
      contentId: Le(),
      titleId: Le(),
      descriptionId: Le(),
      open: u,
      onOpenChange: d,
      onOpenToggle: c.useCallback(() => d((f) => !f), [d]),
      modal: i,
      children: n
    }
  );
};
Uh.displayName = $u;
var Gh = "DialogTrigger", Yh = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Wt(Gh, n), a = te(t, o.triggerRef);
    return /* @__PURE__ */ m(
      Y.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Du(o.open),
        ...r,
        ref: a,
        onClick: I(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Yh.displayName = Gh;
var Mu = "DialogPortal", [y_, Kh] = jh(Mu, {
  forceMount: void 0
}), Xh = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Wt(Mu, t);
  return /* @__PURE__ */ m(y_, { scope: t, forceMount: n, children: c.Children.map(r, (i) => /* @__PURE__ */ m(Be, { present: n || a.open, children: /* @__PURE__ */ m(Ih, { asChild: !0, container: o, children: i }) })) });
};
Xh.displayName = Mu;
var hi = "DialogOverlay", qh = c.forwardRef(
  (e, t) => {
    const n = Kh(hi, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Wt(hi, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ m(Be, { present: r || a.open, children: /* @__PURE__ */ m(w_, { ...o, ref: t }) }) : null;
  }
);
qh.displayName = hi;
var w_ = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Wt(hi, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ m(zh, { as: Ke, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ m(
        Y.div,
        {
          "data-state": Du(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Gn = "DialogContent", Zh = c.forwardRef(
  (e, t) => {
    const n = Kh(Gn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Wt(Gn, e.__scopeDialog);
    return /* @__PURE__ */ m(Be, { present: r || a.open, children: a.modal ? /* @__PURE__ */ m(x_, { ...o, ref: t }) : /* @__PURE__ */ m(C_, { ...o, ref: t }) });
  }
);
Zh.displayName = Gn;
var x_ = c.forwardRef(
  (e, t) => {
    const n = Wt(Gn, e.__scopeDialog), r = c.useRef(null), o = te(t, n.contentRef, r);
    return c.useEffect(() => {
      const a = r.current;
      if (a) return io(a);
    }, []), /* @__PURE__ */ m(
      Qh,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: I(e.onCloseAutoFocus, (a) => {
          var i;
          a.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: I(e.onPointerDownOutside, (a) => {
          const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: I(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), C_ = c.forwardRef(
  (e, t) => {
    const n = Wt(Gn, e.__scopeDialog), r = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ m(
      Qh,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var l, u;
          (l = e.onInteractOutside) == null || l.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), Qh = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = Wt(Gn, n), l = c.useRef(null), u = te(t, l);
    return LR(), /* @__PURE__ */ ee(Fe, { children: [
      /* @__PURE__ */ m(
        eo,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ m(
            Oh,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Du(s.open),
              ...i,
              ref: u,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ ee(Fe, { children: [
        /* @__PURE__ */ m(E_, { titleId: s.titleId }),
        /* @__PURE__ */ m(N_, { contentRef: l, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Ou = "DialogTitle", Jh = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Wt(Ou, n);
    return /* @__PURE__ */ m(Y.h2, { id: o.titleId, ...r, ref: t });
  }
);
Jh.displayName = Ou;
var eg = "DialogDescription", tg = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Wt(eg, n);
    return /* @__PURE__ */ m(Y.p, { id: o.descriptionId, ...r, ref: t });
  }
);
tg.displayName = eg;
var ng = "DialogClose", rg = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Wt(ng, n);
    return /* @__PURE__ */ m(
      Y.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: I(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
rg.displayName = ng;
function Du(e) {
  return e ? "open" : "closed";
}
var og = "DialogTitleWarning", [S_, ag] = J1(og, {
  contentName: Gn,
  titleName: Ou,
  docsSlug: "dialog"
}), E_ = ({ titleId: e }) => {
  const t = ag(og), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, P_ = "DialogDescriptionWarning", N_ = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ag(P_).contentName}}.`;
  return c.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, R_ = Uh, __ = Yh, T_ = Xh, $_ = qh, M_ = Zh, O_ = Jh, D_ = tg, ig = rg, sg = "AlertDialog", [A_, QJ] = De(sg, [
  Vh
]), bn = Vh(), cg = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = bn(t);
  return /* @__PURE__ */ m(R_, { ...r, ...n, modal: !0 });
};
cg.displayName = sg;
var I_ = "AlertDialogTrigger", lg = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = bn(n);
    return /* @__PURE__ */ m(__, { ...o, ...r, ref: t });
  }
);
lg.displayName = I_;
var k_ = "AlertDialogPortal", ug = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = bn(t);
  return /* @__PURE__ */ m(T_, { ...r, ...n });
};
ug.displayName = k_;
var L_ = "AlertDialogOverlay", dg = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = bn(n);
    return /* @__PURE__ */ m($_, { ...o, ...r, ref: t });
  }
);
dg.displayName = L_;
var Or = "AlertDialogContent", [F_, B_] = A_(Or), fg = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e, a = bn(n), i = c.useRef(null), s = te(t, i), l = c.useRef(null);
    return /* @__PURE__ */ m(
      S_,
      {
        contentName: Or,
        titleName: pg,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ m(F_, { scope: n, cancelRef: l, children: /* @__PURE__ */ ee(
          M_,
          {
            role: "alertdialog",
            ...a,
            ...o,
            ref: s,
            onOpenAutoFocus: I(o.onOpenAutoFocus, (u) => {
              var d;
              u.preventDefault(), (d = l.current) == null || d.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (u) => u.preventDefault(),
            onInteractOutside: (u) => u.preventDefault(),
            children: [
              /* @__PURE__ */ m(bu, { children: r }),
              /* @__PURE__ */ m(z_, { contentRef: i })
            ]
          }
        ) })
      }
    );
  }
);
fg.displayName = Or;
var pg = "AlertDialogTitle", mg = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = bn(n);
    return /* @__PURE__ */ m(O_, { ...o, ...r, ref: t });
  }
);
mg.displayName = pg;
var vg = "AlertDialogDescription", hg = c.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = bn(n);
  return /* @__PURE__ */ m(D_, { ...o, ...r, ref: t });
});
hg.displayName = vg;
var W_ = "AlertDialogAction", gg = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = bn(n);
    return /* @__PURE__ */ m(ig, { ...o, ...r, ref: t });
  }
);
gg.displayName = W_;
var bg = "AlertDialogCancel", yg = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = B_(bg, n), a = bn(n), i = te(t, o);
    return /* @__PURE__ */ m(ig, { ...a, ...r, ref: i });
  }
);
yg.displayName = bg;
var z_ = ({ contentRef: e }) => {
  const t = `\`${Or}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Or}\` by passing a \`${vg}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Or}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return c.useEffect(() => {
    var r;
    document.getElementById(
      (r = e.current) == null ? void 0 : r.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, H_ = cg, j_ = lg, V_ = ug, wg = dg, xg = fg, Cg = gg, Sg = yg, Eg = mg, Pg = hg;
const up = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, dp = fn, yn = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return dp(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((u) => {
    const d = n == null ? void 0 : n[u], f = a == null ? void 0 : a[u];
    if (d === null) return null;
    const p = up(d) || up(f);
    return o[u][p];
  }), s = n && Object.entries(n).reduce((u, d) => {
    let [f, p] = d;
    return p === void 0 || (u[f] = p), u;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, d) => {
    let { class: f, className: p, ...g } = d;
    return Object.entries(g).every((h) => {
      let [v, b] = h;
      return Array.isArray(b) ? b.includes({
        ...a,
        ...s
      }[v]) : {
        ...a,
        ...s
      }[v] === b;
    }) ? [
      ...u,
      f,
      p
    ] : u;
  }, []);
  return dp(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Lr = yn(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), aa = c.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, a) => /* @__PURE__ */ m(
    r ? Ke : "button",
    {
      className: $(Lr({ variant: t, size: n, className: e })),
      ref: a,
      ...o
    }
  )
);
aa.displayName = "Button";
const JJ = H_, eee = j_, U_ = V_, Ng = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  wg,
  {
    className: $(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Ng.displayName = wg.displayName;
const G_ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ ee(U_, { children: [
  /* @__PURE__ */ m(Ng, {}),
  /* @__PURE__ */ m(
    xg,
    {
      ref: n,
      className: $(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
G_.displayName = xg.displayName;
const Y_ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m(
  "div",
  {
    className: $(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Y_.displayName = "AlertDialogHeader";
const K_ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m(
  "div",
  {
    className: $(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
K_.displayName = "AlertDialogFooter";
const X_ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Eg,
  {
    ref: n,
    className: $("text-lg font-semibold", e),
    ...t
  }
));
X_.displayName = Eg.displayName;
const q_ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Pg,
  {
    ref: n,
    className: $("text-sm text-muted-foreground", e),
    ...t
  }
));
q_.displayName = Pg.displayName;
const Z_ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Cg,
  {
    ref: n,
    className: $(Lr(), e),
    ...t
  }
));
Z_.displayName = Cg.displayName;
const Q_ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Sg,
  {
    ref: n,
    className: $(
      Lr({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
Q_.displayName = Sg.displayName;
const J_ = yn(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), eT = c.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ m(
  "div",
  {
    ref: r,
    role: "alert",
    className: $(J_({ variant: t }), e),
    ...n
  }
));
eT.displayName = "Alert";
const tT = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "h5",
  {
    ref: n,
    className: $("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
tT.displayName = "AlertTitle";
const nT = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "div",
  {
    ref: n,
    className: $("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
nT.displayName = "AlertDescription";
var rT = "AspectRatio", Rg = c.forwardRef(
  (e, t) => {
    const { ratio: n = 1 / 1, style: r, ...o } = e;
    return /* @__PURE__ */ m(
      "div",
      {
        style: {
          // ensures inner element is contained
          position: "relative",
          // ensures padding bottom trick maths works
          width: "100%",
          paddingBottom: `${100 / n}%`
        },
        "data-radix-aspect-ratio-wrapper": "",
        children: /* @__PURE__ */ m(
          Y.div,
          {
            ...o,
            ref: t,
            style: {
              ...r,
              // ensures children expand in ratio
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        )
      }
    );
  }
);
Rg.displayName = rT;
var oT = Rg;
const tee = oT;
var Au = "Avatar", [aT, nee] = De(Au), [iT, _g] = aT(Au), Tg = c.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [o, a] = c.useState("idle");
    return /* @__PURE__ */ m(
      iT,
      {
        scope: n,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: a,
        children: /* @__PURE__ */ m(Y.span, { ...r, ref: t })
      }
    );
  }
);
Tg.displayName = Au;
var $g = "AvatarImage", Mg = c.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
    }, ...a } = e, i = _g($g, n), s = sT(r), l = fe((u) => {
      o(u), i.onImageLoadingStatusChange(u);
    });
    return Ce(() => {
      s !== "idle" && l(s);
    }, [s, l]), s === "loaded" ? /* @__PURE__ */ m(Y.img, { ...a, ref: t, src: r }) : null;
  }
);
Mg.displayName = $g;
var Og = "AvatarFallback", Dg = c.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e, a = _g(Og, n), [i, s] = c.useState(r === void 0);
    return c.useEffect(() => {
      if (r !== void 0) {
        const l = window.setTimeout(() => s(!0), r);
        return () => window.clearTimeout(l);
      }
    }, [r]), i && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ m(Y.span, { ...o, ref: t }) : null;
  }
);
Dg.displayName = Og;
function sT(e) {
  const [t, n] = c.useState("idle");
  return Ce(() => {
    if (!e) {
      n("error");
      return;
    }
    let r = !0;
    const o = new window.Image(), a = (i) => () => {
      r && n(i);
    };
    return n("loading"), o.onload = a("loaded"), o.onerror = a("error"), o.src = e, () => {
      r = !1;
    };
  }, [e]), t;
}
var Ag = Tg, Ig = Mg, kg = Dg;
const cT = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Ag,
  {
    ref: n,
    className: $(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
cT.displayName = Ag.displayName;
const lT = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Ig,
  {
    ref: n,
    className: $("aspect-square h-full w-full", e),
    ...t
  }
));
lT.displayName = Ig.displayName;
const uT = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  kg,
  {
    ref: n,
    className: $(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
uT.displayName = kg.displayName;
const dT = yn(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function ree({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ m("div", { className: $(dT({ variant: t }), e), ...n });
}
const fT = c.forwardRef(({ ...e }, t) => /* @__PURE__ */ m("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
fT.displayName = "Breadcrumb";
const pT = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "ol",
  {
    ref: n,
    className: $(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      e
    ),
    ...t
  }
));
pT.displayName = "BreadcrumbList";
const mT = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "li",
  {
    ref: n,
    className: $("inline-flex items-center gap-1.5", e),
    ...t
  }
));
mT.displayName = "BreadcrumbItem";
const vT = c.forwardRef(({ asChild: e, className: t, ...n }, r) => /* @__PURE__ */ m(
  e ? Ke : "a",
  {
    ref: r,
    className: $("transition-colors hover:text-foreground", t),
    ...n
  }
));
vT.displayName = "BreadcrumbLink";
const hT = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: $("font-normal text-foreground", e),
    ...t
  }
));
hT.displayName = "BreadcrumbPage";
const gT = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ m(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: $("[&>svg]:size-3.5", t),
    ...n,
    children: e ?? /* @__PURE__ */ m(Qr, {})
  }
);
gT.displayName = "BreadcrumbSeparator";
const bT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ ee(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: $("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ m(Eh, { className: "h-4 w-4" }),
      /* @__PURE__ */ m("span", { className: "sr-only", children: "More" })
    ]
  }
);
bT.displayName = "BreadcrumbElipssis";
function xe(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function xt(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ot(e, t) {
  const n = xe(e);
  return isNaN(t) ? xt(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function It(e, t) {
  const n = xe(e);
  if (isNaN(t)) return xt(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), o = xt(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const a = o.getDate();
  return r >= a ? o : (n.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), n);
}
const Iu = 6048e5, yT = 864e5;
let wT = {};
function ia() {
  return wT;
}
function Xt(e, t) {
  var s, l, u, d;
  const n = ia(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = xe(e), a = o.getDay(), i = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function Yn(e) {
  return Xt(e, { weekStartsOn: 1 });
}
function Lg(e) {
  const t = xe(e), n = t.getFullYear(), r = xt(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = Yn(r), a = xt(e, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const i = Yn(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function Fr(e) {
  const t = xe(e);
  return t.setHours(0, 0, 0, 0), t;
}
function gi(e) {
  const t = xe(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Gt(e, t) {
  const n = Fr(e), r = Fr(t), o = +n - gi(n), a = +r - gi(r);
  return Math.round((o - a) / yT);
}
function xT(e) {
  const t = Lg(e), n = xt(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Yn(n);
}
function Zc(e, t) {
  const n = t * 7;
  return ot(e, n);
}
function CT(e, t) {
  return It(e, t * 12);
}
function ST(e) {
  let t;
  return e.forEach(function(n) {
    const r = xe(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function ET(e) {
  let t;
  return e.forEach((n) => {
    const r = xe(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function ft(e, t) {
  const n = Fr(e), r = Fr(t);
  return +n == +r;
}
function ku(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function PT(e) {
  if (!ku(e) && typeof e != "number")
    return !1;
  const t = xe(e);
  return !isNaN(Number(t));
}
function Wo(e, t) {
  const n = xe(e), r = xe(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
function NT(e, t, n) {
  const r = Xt(e, n), o = Xt(t, n), a = +r - gi(r), i = +o - gi(o);
  return Math.round((a - i) / Iu);
}
function Lu(e) {
  const t = xe(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function pt(e) {
  const t = xe(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Fg(e) {
  const t = xe(e), n = xt(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Fu(e, t) {
  var s, l, u, d;
  const n = ia(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = xe(e), a = o.getDay(), i = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function Bg(e) {
  return Fu(e, { weekStartsOn: 1 });
}
const RT = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, _T = (e, t, n) => {
  let r;
  const o = RT[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function nc(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const TT = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, $T = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, MT = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, OT = {
  date: nc({
    formats: TT,
    defaultWidth: "full"
  }),
  time: nc({
    formats: $T,
    defaultWidth: "full"
  }),
  dateTime: nc({
    formats: MT,
    defaultWidth: "full"
  })
}, DT = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, AT = (e, t, n, r) => DT[e];
function Po(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const IT = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, kT = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, LT = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, FT = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, BT = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, WT = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, zT = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, HT = {
  ordinalNumber: zT,
  era: Po({
    values: IT,
    defaultWidth: "wide"
  }),
  quarter: Po({
    values: kT,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Po({
    values: LT,
    defaultWidth: "wide"
  }),
  day: Po({
    values: FT,
    defaultWidth: "wide"
  }),
  dayPeriod: Po({
    values: BT,
    defaultWidth: "wide",
    formattingValues: WT,
    defaultFormattingWidth: "wide"
  })
};
function No(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? VT(s, (f) => f.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      jT(s, (f) => f.test(i))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(l) : l, u = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(u)
    ) : u;
    const d = t.slice(i.length);
    return { value: u, rest: d };
  };
}
function jT(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function VT(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function UT(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const s = t.slice(o.length);
    return { value: i, rest: s };
  };
}
const GT = /^(\d+)(th|st|nd|rd)?/i, YT = /\d+/i, KT = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, XT = {
  any: [/^b/i, /^(a|c)/i]
}, qT = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ZT = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, QT = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, JT = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, e$ = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, t$ = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, n$ = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, r$ = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, o$ = {
  ordinalNumber: UT({
    matchPattern: GT,
    parsePattern: YT,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: No({
    matchPatterns: KT,
    defaultMatchWidth: "wide",
    parsePatterns: XT,
    defaultParseWidth: "any"
  }),
  quarter: No({
    matchPatterns: qT,
    defaultMatchWidth: "wide",
    parsePatterns: ZT,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: No({
    matchPatterns: QT,
    defaultMatchWidth: "wide",
    parsePatterns: JT,
    defaultParseWidth: "any"
  }),
  day: No({
    matchPatterns: e$,
    defaultMatchWidth: "wide",
    parsePatterns: t$,
    defaultParseWidth: "any"
  }),
  dayPeriod: No({
    matchPatterns: n$,
    defaultMatchWidth: "any",
    parsePatterns: r$,
    defaultParseWidth: "any"
  })
}, Wg = {
  code: "en-US",
  formatDistance: _T,
  formatLong: OT,
  formatRelative: AT,
  localize: HT,
  match: o$,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function a$(e) {
  const t = xe(e);
  return Gt(t, Fg(t)) + 1;
}
function zg(e) {
  const t = xe(e), n = +Yn(t) - +xT(t);
  return Math.round(n / Iu) + 1;
}
function Hg(e, t) {
  var d, f, p, g;
  const n = xe(e), r = n.getFullYear(), o = ia(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((g = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, i = xt(e, 0);
  i.setFullYear(r + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = Xt(i, t), l = xt(e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const u = Xt(l, t);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= u.getTime() ? r : r - 1;
}
function i$(e, t) {
  var s, l, u, d;
  const n = ia(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, o = Hg(e, t), a = xt(e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), Xt(a, t);
}
function jg(e, t) {
  const n = xe(e), r = +Xt(n, t) - +i$(n, t);
  return Math.round(r / Iu) + 1;
}
function Te(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Cn = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Te(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Te(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Te(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return Te(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Te(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Te(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Te(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Te(o, t.length);
  }
}, mr = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, fp = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return Cn.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = Hg(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = a % 100;
      return Te(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Te(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Lg(e);
    return Te(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return Te(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return Te(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return Te(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Cn.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return Te(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = jg(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Te(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = zg(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Te(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Cn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = a$(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Te(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return Te(a, 2);
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return Te(a, t.length);
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return Te(o, t.length);
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = mr.noon : r === 0 ? o = mr.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = mr.evening : r >= 12 ? o = mr.afternoon : r >= 4 ? o = mr.morning : o = mr.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return Cn.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Cn.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Te(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Te(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Cn.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Cn.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Cn.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return mp(r);
      case "XXXX":
      case "XX":
        return Ln(r);
      case "XXXXX":
      case "XXX":
      default:
        return Ln(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return mp(r);
      case "xxxx":
      case "xx":
        return Ln(r);
      case "xxxxx":
      case "xxx":
      default:
        return Ln(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + pp(r, ":");
      case "OOOO":
      default:
        return "GMT" + Ln(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + pp(r, ":");
      case "zzzz":
      default:
        return "GMT" + Ln(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return Te(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return Te(r, t.length);
  }
};
function pp(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + Te(a, 2);
}
function mp(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Te(Math.abs(e) / 60, 2) : Ln(e, t);
}
function Ln(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Te(Math.trunc(r / 60), 2), a = Te(r % 60, 2);
  return n + o + t + a;
}
const vp = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Vg = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, s$ = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return vp(e, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", vp(r, t)).replace("{{time}}", Vg(o, t));
}, c$ = {
  p: Vg,
  P: s$
}, l$ = /^D+$/, u$ = /^Y+$/, d$ = ["D", "DD", "YY", "YYYY"];
function f$(e) {
  return l$.test(e);
}
function p$(e) {
  return u$.test(e);
}
function m$(e, t, n) {
  const r = v$(e, t, n);
  if (console.warn(r), d$.includes(e)) throw new RangeError(r);
}
function v$(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const h$ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, g$ = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, b$ = /^'([^]*?)'?$/, y$ = /''/g, w$ = /[a-zA-Z]/;
function or(e, t, n) {
  var d, f, p, g, h, v, b, y;
  const r = ia(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Wg, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((g = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, i = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (h = n == null ? void 0 : n.locale) == null ? void 0 : h.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((y = (b = r.locale) == null ? void 0 : b.options) == null ? void 0 : y.weekStartsOn) ?? 0, s = xe(e);
  if (!PT(s))
    throw new RangeError("Invalid time value");
  let l = t.match(g$).map((w) => {
    const C = w[0];
    if (C === "p" || C === "P") {
      const E = c$[C];
      return E(w, o.formatLong);
    }
    return w;
  }).join("").match(h$).map((w) => {
    if (w === "''")
      return { isToken: !1, value: "'" };
    const C = w[0];
    if (C === "'")
      return { isToken: !1, value: x$(w) };
    if (fp[C])
      return { isToken: !0, value: w };
    if (C.match(w$))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + C + "`"
      );
    return { isToken: !1, value: w };
  });
  o.localize.preprocessor && (l = o.localize.preprocessor(s, l));
  const u = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return l.map((w) => {
    if (!w.isToken) return w.value;
    const C = w.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && p$(C) || !(n != null && n.useAdditionalDayOfYearTokens) && f$(C)) && m$(C, t, String(e));
    const E = fp[C[0]];
    return E(s, C, o.localize, u);
  }).join("");
}
function x$(e) {
  const t = e.match(b$);
  return t ? t[1].replace(y$, "'") : e;
}
function C$(e) {
  const t = xe(e), n = t.getFullYear(), r = t.getMonth(), o = xt(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function S$(e) {
  return Math.trunc(+xe(e) / 1e3);
}
function E$(e) {
  const t = xe(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function P$(e, t) {
  return NT(
    E$(e),
    pt(e),
    t
  ) + 1;
}
function Qc(e, t) {
  const n = xe(e), r = xe(t);
  return n.getTime() > r.getTime();
}
function Ug(e, t) {
  const n = xe(e), r = xe(t);
  return +n < +r;
}
function Bu(e, t) {
  const n = xe(e), r = xe(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function N$(e, t) {
  const n = xe(e), r = xe(t);
  return n.getFullYear() === r.getFullYear();
}
function rc(e, t) {
  return ot(e, -t);
}
function oc(e, t) {
  const n = xe(e), r = n.getFullYear(), o = n.getDate(), a = xt(e, 0);
  a.setFullYear(r, t, 15), a.setHours(0, 0, 0, 0);
  const i = C$(a);
  return n.setMonth(t, Math.min(o, i)), n;
}
function hp(e, t) {
  const n = xe(e);
  return isNaN(+n) ? xt(e, NaN) : (n.setFullYear(t), n);
}
var ue = function() {
  return ue = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, ue.apply(this, arguments);
};
function R$(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Gg(e, t, n) {
  for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function sa(e) {
  return e.mode === "multiple";
}
function ca(e) {
  return e.mode === "range";
}
function ns(e) {
  return e.mode === "single";
}
var _$ = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};
function T$(e, t) {
  return or(e, "LLLL y", t);
}
function $$(e, t) {
  return or(e, "d", t);
}
function M$(e, t) {
  return or(e, "LLLL", t);
}
function O$(e) {
  return "".concat(e);
}
function D$(e, t) {
  return or(e, "cccccc", t);
}
function A$(e, t) {
  return or(e, "yyyy", t);
}
var I$ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: T$,
  formatDay: $$,
  formatMonthCaption: M$,
  formatWeekNumber: O$,
  formatWeekdayName: D$,
  formatYearCaption: A$
}), k$ = function(e, t, n) {
  return or(e, "do MMMM (EEEE)", n);
}, L$ = function() {
  return "Month: ";
}, F$ = function() {
  return "Go to next month";
}, B$ = function() {
  return "Go to previous month";
}, W$ = function(e, t) {
  return or(e, "cccc", t);
}, z$ = function(e) {
  return "Week n. ".concat(e);
}, H$ = function() {
  return "Year: ";
}, j$ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: k$,
  labelMonthDropdown: L$,
  labelNext: F$,
  labelPrevious: B$,
  labelWeekNumber: z$,
  labelWeekday: W$,
  labelYearDropdown: H$
});
function V$() {
  var e = "buttons", t = _$, n = Wg, r = {}, o = {}, a = 1, i = {}, s = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: I$,
    labels: j$,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: i,
    today: s,
    mode: "default"
  };
}
function U$(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, i = e.toDate;
  return r ? a = pt(r) : t && (a = new Date(t, 0, 1)), o ? i = Lu(o) : n && (i = new Date(n, 11, 31)), {
    fromDate: a ? Fr(a) : void 0,
    toDate: i ? Fr(i) : void 0
  };
}
var Yg = At(void 0);
function G$(e) {
  var t, n = e.initialProps, r = V$(), o = U$(n), a = o.fromDate, i = o.toDate, s = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  s !== "buttons" && (!a || !i) && (s = "buttons");
  var l;
  (ns(n) || sa(n) || ca(n)) && (l = n.onSelect);
  var u = ue(ue(ue({}, r), n), { captionLayout: s, classNames: ue(ue({}, r.classNames), n.classNames), components: ue({}, n.components), formatters: ue(ue({}, r.formatters), n.formatters), fromDate: a, labels: ue(ue({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: ue(ue({}, r.modifiers), n.modifiers), modifiersClassNames: ue(ue({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: l, styles: ue(ue({}, r.styles), n.styles), toDate: i });
  return m(Yg.Provider, { value: u, children: e.children });
}
function Ae() {
  var e = Zt(Yg);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Kg(e) {
  var t = Ae(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return m("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: n }) });
}
function Y$(e) {
  return m("svg", ue({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: m("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Xg(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, i = e.caption, s = e.className, l = e.style, u = Ae(), d = (n = (t = u.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : Y$;
  return ee("div", { className: s, style: l, children: [m("span", { className: u.classNames.vhidden, children: e["aria-label"] }), m("select", { name: e.name, "aria-label": e["aria-label"], className: u.classNames.dropdown, style: u.styles.dropdown, value: o, onChange: r, children: a }), ee("div", { className: u.classNames.caption_label, style: u.styles.caption_label, "aria-hidden": "true", children: [i, m(d, { className: u.classNames.dropdown_icon, style: u.styles.dropdown_icon })] })] });
}
function K$(e) {
  var t, n = Ae(), r = n.fromDate, o = n.toDate, a = n.styles, i = n.locale, s = n.formatters.formatMonthCaption, l = n.classNames, u = n.components, d = n.labels.labelMonthDropdown;
  if (!r)
    return m(Fe, {});
  if (!o)
    return m(Fe, {});
  var f = [];
  if (N$(r, o))
    for (var p = pt(r), g = r.getMonth(); g <= o.getMonth(); g++)
      f.push(oc(p, g));
  else
    for (var p = pt(/* @__PURE__ */ new Date()), g = 0; g <= 11; g++)
      f.push(oc(p, g));
  var h = function(b) {
    var y = Number(b.target.value), w = oc(pt(e.displayMonth), y);
    e.onChange(w);
  }, v = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : Xg;
  return m(v, { name: "months", "aria-label": d(), className: l.dropdown_month, style: a.dropdown_month, onChange: h, value: e.displayMonth.getMonth(), caption: s(e.displayMonth, { locale: i }), children: f.map(function(b) {
    return m("option", { value: b.getMonth(), children: s(b, { locale: i }) }, b.getMonth());
  }) });
}
function X$(e) {
  var t, n = e.displayMonth, r = Ae(), o = r.fromDate, a = r.toDate, i = r.locale, s = r.styles, l = r.classNames, u = r.components, d = r.formatters.formatYearCaption, f = r.labels.labelYearDropdown, p = [];
  if (!o)
    return m(Fe, {});
  if (!a)
    return m(Fe, {});
  for (var g = o.getFullYear(), h = a.getFullYear(), v = g; v <= h; v++)
    p.push(hp(Fg(/* @__PURE__ */ new Date()), v));
  var b = function(w) {
    var C = hp(pt(n), Number(w.target.value));
    e.onChange(C);
  }, y = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : Xg;
  return m(y, { name: "years", "aria-label": f(), className: l.dropdown_year, style: s.dropdown_year, onChange: b, value: n.getFullYear(), caption: d(n, { locale: i }), children: p.map(function(w) {
    return m("option", { value: w.getFullYear(), children: d(w, { locale: i }) }, w.getFullYear());
  }) });
}
function q$(e, t) {
  var n = at(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function Z$(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), a = e.toDate, i = e.fromDate, s = e.numberOfMonths, l = s === void 0 ? 1 : s;
  if (a && Wo(a, o) < 0) {
    var u = -1 * (l - 1);
    o = It(a, u);
  }
  return i && Wo(o, i) < 0 && (o = i), pt(o);
}
function Q$() {
  var e = Ae(), t = Z$(e), n = q$(t, e.month), r = n[0], o = n[1], a = function(i) {
    var s;
    if (!e.disableNavigation) {
      var l = pt(i);
      o(l), (s = e.onMonthChange) === null || s === void 0 || s.call(e, l);
    }
  };
  return [r, a];
}
function J$(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = pt(e), a = pt(It(o, r)), i = Wo(a, o), s = [], l = 0; l < i; l++) {
    var u = It(o, l);
    s.push(u);
  }
  return n && (s = s.reverse()), s;
}
function eM(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = r ? a : 1, s = pt(e);
    if (!n)
      return It(s, i);
    var l = Wo(n, e);
    if (!(l < a))
      return It(s, i);
  }
}
function tM(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = r ? a : 1, s = pt(e);
    if (!n)
      return It(s, -i);
    var l = Wo(s, n);
    if (!(l <= 0))
      return It(s, -i);
  }
}
var qg = At(void 0);
function nM(e) {
  var t = Ae(), n = Q$(), r = n[0], o = n[1], a = J$(r, t), i = eM(r, t), s = tM(r, t), l = function(f) {
    return a.some(function(p) {
      return Bu(f, p);
    });
  }, u = function(f, p) {
    l(f) || (p && Ug(f, p) ? o(It(f, 1 + t.numberOfMonths * -1)) : o(f));
  }, d = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: u,
    previousMonth: s,
    nextMonth: i,
    isDateDisplayed: l
  };
  return m(qg.Provider, { value: d, children: e.children });
}
function la() {
  var e = Zt(qg);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function gp(e) {
  var t, n = Ae(), r = n.classNames, o = n.styles, a = n.components, i = la().goToMonth, s = function(d) {
    i(It(d, e.displayIndex ? -e.displayIndex : 0));
  }, l = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : Kg, u = m(l, { id: e.id, displayMonth: e.displayMonth });
  return ee("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [m("div", { className: r.vhidden, children: u }), m(K$, { onChange: s, displayMonth: e.displayMonth }), m(X$, { onChange: s, displayMonth: e.displayMonth })] });
}
function rM(e) {
  return m("svg", ue({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: m("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function oM(e) {
  return m("svg", ue({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: m("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var bi = Ze(function(e, t) {
  var n = Ae(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var i = a.join(" "), s = ue(ue({}, o.button_reset), o.button);
  return e.style && Object.assign(s, e.style), m("button", ue({}, e, { ref: t, type: "button", className: i, style: s }));
});
function aM(e) {
  var t, n, r = Ae(), o = r.dir, a = r.locale, i = r.classNames, s = r.styles, l = r.labels, u = l.labelPrevious, d = l.labelNext, f = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return m(Fe, {});
  var p = u(e.previousMonth, { locale: a }), g = [
    i.nav_button,
    i.nav_button_previous
  ].join(" "), h = d(e.nextMonth, { locale: a }), v = [
    i.nav_button,
    i.nav_button_next
  ].join(" "), b = (t = f == null ? void 0 : f.IconRight) !== null && t !== void 0 ? t : oM, y = (n = f == null ? void 0 : f.IconLeft) !== null && n !== void 0 ? n : rM;
  return ee("div", { className: i.nav, style: s.nav, children: [!e.hidePrevious && m(bi, { name: "previous-month", "aria-label": p, className: g, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? m(b, { className: i.nav_icon, style: s.nav_icon }) : m(y, { className: i.nav_icon, style: s.nav_icon }) }), !e.hideNext && m(bi, { name: "next-month", "aria-label": h, className: v, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? m(y, { className: i.nav_icon, style: s.nav_icon }) : m(b, { className: i.nav_icon, style: s.nav_icon }) })] });
}
function bp(e) {
  var t = Ae().numberOfMonths, n = la(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, i = n.displayMonths, s = i.findIndex(function(h) {
    return Bu(e.displayMonth, h);
  }), l = s === 0, u = s === i.length - 1, d = t > 1 && (l || !u), f = t > 1 && (u || !l), p = function() {
    r && a(r);
  }, g = function() {
    o && a(o);
  };
  return m(aM, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: f, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: g });
}
function iM(e) {
  var t, n = Ae(), r = n.classNames, o = n.disableNavigation, a = n.styles, i = n.captionLayout, s = n.components, l = (t = s == null ? void 0 : s.CaptionLabel) !== null && t !== void 0 ? t : Kg, u;
  return o ? u = m(l, { id: e.id, displayMonth: e.displayMonth }) : i === "dropdown" ? u = m(gp, { displayMonth: e.displayMonth, id: e.id }) : i === "dropdown-buttons" ? u = ee(Fe, { children: [m(gp, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), m(bp, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : u = ee(Fe, { children: [m(l, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), m(bp, { displayMonth: e.displayMonth, id: e.id })] }), m("div", { className: r.caption, style: a.caption, children: u });
}
function sM(e) {
  var t = Ae(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? m("tfoot", { className: o, style: r.tfoot, children: m("tr", { children: m("td", { colSpan: 8, children: n }) }) }) : m(Fe, {});
}
function cM(e, t, n) {
  for (var r = n ? Yn(/* @__PURE__ */ new Date()) : Xt(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var i = ot(r, a);
    o.push(i);
  }
  return o;
}
function lM() {
  var e = Ae(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, i = e.ISOWeek, s = e.formatters.formatWeekdayName, l = e.labels.labelWeekday, u = cM(o, a, i);
  return ee("tr", { style: n.head_row, className: t.head_row, children: [r && m("td", { style: n.head_cell, className: t.head_cell }), u.map(function(d, f) {
    return m("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": l(d, { locale: o }), children: s(d, { locale: o }) }, f);
  })] });
}
function uM() {
  var e, t = Ae(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : lM;
  return m("thead", { style: r.head, className: n.head, children: m(a, {}) });
}
function dM(e) {
  var t = Ae(), n = t.locale, r = t.formatters.formatDay;
  return m(Fe, { children: r(e.date, { locale: n }) });
}
var Wu = At(void 0);
function fM(e) {
  if (!sa(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return m(Wu.Provider, { value: t, children: e.children });
  }
  return m(pM, { initialProps: e.initialProps, children: e.children });
}
function pM(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, i = function(u, d, f) {
    var p, g;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, u, d, f);
    var h = !!(d.selected && o && (r == null ? void 0 : r.length) === o);
    if (!h) {
      var v = !!(!d.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var b = r ? Gg([], r) : [];
        if (d.selected) {
          var y = b.findIndex(function(w) {
            return ft(u, w);
          });
          b.splice(y, 1);
        } else
          b.push(u);
        (g = t.onSelect) === null || g === void 0 || g.call(t, b, u, d, f);
      }
    }
  }, s = {
    disabled: []
  };
  r && s.disabled.push(function(u) {
    var d = a && r.length > a - 1, f = r.some(function(p) {
      return ft(p, u);
    });
    return !!(d && !f);
  });
  var l = {
    selected: r,
    onDayClick: i,
    modifiers: s
  };
  return m(Wu.Provider, { value: l, children: n });
}
function zu() {
  var e = Zt(Wu);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function mM(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? ft(o, e) && ft(r, e) ? void 0 : ft(o, e) ? { from: o, to: void 0 } : ft(r, e) ? void 0 : Qc(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? Qc(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? Ug(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var Hu = At(void 0);
function vM(e) {
  if (!ca(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return m(Hu.Provider, { value: t, children: e.children });
  }
  return m(hM, { initialProps: e.initialProps, children: e.children });
}
function hM(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, i = o.to, s = t.min, l = t.max, u = function(g, h, v) {
    var b, y;
    (b = t.onDayClick) === null || b === void 0 || b.call(t, g, h, v);
    var w = mM(g, r);
    (y = t.onSelect) === null || y === void 0 || y.call(t, w, g, h, v);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a ? (d.range_start = [a], i ? (d.range_end = [i], ft(a, i) || (d.range_middle = [
    {
      after: a,
      before: i
    }
  ])) : d.range_end = [a]) : i && (d.range_start = [i], d.range_end = [i]), s && (a && !i && d.disabled.push({
    after: rc(a, s - 1),
    before: ot(a, s - 1)
  }), a && i && d.disabled.push({
    after: a,
    before: ot(a, s - 1)
  }), !a && i && d.disabled.push({
    after: rc(i, s - 1),
    before: ot(i, s - 1)
  })), l) {
    if (a && !i && (d.disabled.push({
      before: ot(a, -l + 1)
    }), d.disabled.push({
      after: ot(a, l - 1)
    })), a && i) {
      var f = Gt(i, a) + 1, p = l - f;
      d.disabled.push({
        before: rc(a, p)
      }), d.disabled.push({
        after: ot(i, p)
      });
    }
    !a && i && (d.disabled.push({
      before: ot(i, -l + 1)
    }), d.disabled.push({
      after: ot(i, l - 1)
    }));
  }
  return m(Hu.Provider, { value: { selected: r, onDayClick: u, modifiers: d }, children: n });
}
function ju() {
  var e = Zt(Hu);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function di(e) {
  return Array.isArray(e) ? Gg([], e) : e !== void 0 ? [e] : [];
}
function gM(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = di(o);
  }), t;
}
var kt;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(kt || (kt = {}));
var bM = kt.Selected, an = kt.Disabled, yM = kt.Hidden, wM = kt.Today, ac = kt.RangeEnd, ic = kt.RangeMiddle, sc = kt.RangeStart, xM = kt.Outside;
function CM(e, t, n) {
  var r, o = (r = {}, r[bM] = di(e.selected), r[an] = di(e.disabled), r[yM] = di(e.hidden), r[wM] = [e.today], r[ac] = [], r[ic] = [], r[sc] = [], r[xM] = [], r);
  return e.fromDate && o[an].push({ before: e.fromDate }), e.toDate && o[an].push({ after: e.toDate }), sa(e) ? o[an] = o[an].concat(t.modifiers[an]) : ca(e) && (o[an] = o[an].concat(n.modifiers[an]), o[sc] = n.modifiers[sc], o[ic] = n.modifiers[ic], o[ac] = n.modifiers[ac]), o;
}
var Zg = At(void 0);
function SM(e) {
  var t = Ae(), n = zu(), r = ju(), o = CM(t, n, r), a = gM(t.modifiers), i = ue(ue({}, o), a);
  return m(Zg.Provider, { value: i, children: e.children });
}
function Qg() {
  var e = Zt(Zg);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function EM(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function PM(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function NM(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function RM(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function _M(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function TM(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var a = Gt(o, r) < 0;
    a && (n = [o, r], r = n[0], o = n[1]);
    var i = Gt(e, r) >= 0 && Gt(o, e) >= 0;
    return i;
  }
  return o ? ft(o, e) : r ? ft(r, e) : !1;
}
function $M(e) {
  return ku(e);
}
function MM(e) {
  return Array.isArray(e) && e.every(ku);
}
function OM(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if ($M(n))
      return ft(e, n);
    if (MM(n))
      return n.includes(e);
    if (PM(n))
      return TM(e, n);
    if (_M(n))
      return n.dayOfWeek.includes(e.getDay());
    if (EM(n)) {
      var r = Gt(n.before, e), o = Gt(n.after, e), a = r > 0, i = o < 0, s = Qc(n.before, n.after);
      return s ? i && a : a || i;
    }
    return NM(n) ? Gt(e, n.after) > 0 : RM(n) ? Gt(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function Vu(e, t, n) {
  var r = Object.keys(t).reduce(function(a, i) {
    var s = t[i];
    return OM(e, s) && a.push(i), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !Bu(e, n) && (o.outside = !0), o;
}
function DM(e, t) {
  for (var n = pt(e[0]), r = Lu(e[e.length - 1]), o, a, i = n; i <= r; ) {
    var s = Vu(i, t), l = !s.disabled && !s.hidden;
    if (!l) {
      i = ot(i, 1);
      continue;
    }
    if (s.selected)
      return i;
    s.today && !a && (a = i), o || (o = i), i = ot(i, 1);
  }
  return a || o;
}
var AM = 365;
function Jg(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, i = t.retry, s = i === void 0 ? { count: 0, lastFocused: e } : i, l = o.weekStartsOn, u = o.fromDate, d = o.toDate, f = o.locale, p = {
    day: ot,
    week: Zc,
    month: It,
    year: CT,
    startOfWeek: function(b) {
      return o.ISOWeek ? Yn(b) : Xt(b, { locale: f, weekStartsOn: l });
    },
    endOfWeek: function(b) {
      return o.ISOWeek ? Bg(b) : Fu(b, { locale: f, weekStartsOn: l });
    }
  }, g = p[n](e, r === "after" ? 1 : -1);
  r === "before" && u ? g = ST([u, g]) : r === "after" && d && (g = ET([d, g]));
  var h = !0;
  if (a) {
    var v = Vu(g, a);
    h = !v.disabled && !v.hidden;
  }
  return h ? g : s.count > AM ? s.lastFocused : Jg(g, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: ue(ue({}, s), { count: s.count + 1 })
  });
}
var eb = At(void 0);
function IM(e) {
  var t = la(), n = Qg(), r = at(), o = r[0], a = r[1], i = at(), s = i[0], l = i[1], u = DM(t.displayMonths, n), d = o ?? (s && t.isDateDisplayed(s)) ? s : u, f = function() {
    l(o), a(void 0);
  }, p = function(b) {
    a(b);
  }, g = Ae(), h = function(b, y) {
    if (o) {
      var w = Jg(o, {
        moveBy: b,
        direction: y,
        context: g,
        modifiers: n
      });
      ft(o, w) || (t.goToDate(w, o), p(w));
    }
  }, v = {
    focusedDay: o,
    focusTarget: d,
    blur: f,
    focus: p,
    focusDayAfter: function() {
      return h("day", "after");
    },
    focusDayBefore: function() {
      return h("day", "before");
    },
    focusWeekAfter: function() {
      return h("week", "after");
    },
    focusWeekBefore: function() {
      return h("week", "before");
    },
    focusMonthBefore: function() {
      return h("month", "before");
    },
    focusMonthAfter: function() {
      return h("month", "after");
    },
    focusYearBefore: function() {
      return h("year", "before");
    },
    focusYearAfter: function() {
      return h("year", "after");
    },
    focusStartOfWeek: function() {
      return h("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return h("endOfWeek", "after");
    }
  };
  return m(eb.Provider, { value: v, children: e.children });
}
function Uu() {
  var e = Zt(eb);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function kM(e, t) {
  var n = Qg(), r = Vu(e, n, t);
  return r;
}
var Gu = At(void 0);
function LM(e) {
  if (!ns(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return m(Gu.Provider, { value: t, children: e.children });
  }
  return m(FM, { initialProps: e.initialProps, children: e.children });
}
function FM(e) {
  var t = e.initialProps, n = e.children, r = function(a, i, s) {
    var l, u, d;
    if ((l = t.onDayClick) === null || l === void 0 || l.call(t, a, i, s), i.selected && !t.required) {
      (u = t.onSelect) === null || u === void 0 || u.call(t, void 0, a, i, s);
      return;
    }
    (d = t.onSelect) === null || d === void 0 || d.call(t, a, a, i, s);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return m(Gu.Provider, { value: o, children: n });
}
function tb() {
  var e = Zt(Gu);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function BM(e, t) {
  var n = Ae(), r = tb(), o = zu(), a = ju(), i = Uu(), s = i.focusDayAfter, l = i.focusDayBefore, u = i.focusWeekAfter, d = i.focusWeekBefore, f = i.blur, p = i.focus, g = i.focusMonthBefore, h = i.focusMonthAfter, v = i.focusYearBefore, b = i.focusYearAfter, y = i.focusStartOfWeek, w = i.focusEndOfWeek, C = function(W) {
    var O, V, ne, q;
    ns(n) ? (O = r.onDayClick) === null || O === void 0 || O.call(r, e, t, W) : sa(n) ? (V = o.onDayClick) === null || V === void 0 || V.call(o, e, t, W) : ca(n) ? (ne = a.onDayClick) === null || ne === void 0 || ne.call(a, e, t, W) : (q = n.onDayClick) === null || q === void 0 || q.call(n, e, t, W);
  }, E = function(W) {
    var O;
    p(e), (O = n.onDayFocus) === null || O === void 0 || O.call(n, e, t, W);
  }, S = function(W) {
    var O;
    f(), (O = n.onDayBlur) === null || O === void 0 || O.call(n, e, t, W);
  }, P = function(W) {
    var O;
    (O = n.onDayMouseEnter) === null || O === void 0 || O.call(n, e, t, W);
  }, x = function(W) {
    var O;
    (O = n.onDayMouseLeave) === null || O === void 0 || O.call(n, e, t, W);
  }, N = function(W) {
    var O;
    (O = n.onDayPointerEnter) === null || O === void 0 || O.call(n, e, t, W);
  }, R = function(W) {
    var O;
    (O = n.onDayPointerLeave) === null || O === void 0 || O.call(n, e, t, W);
  }, M = function(W) {
    var O;
    (O = n.onDayTouchCancel) === null || O === void 0 || O.call(n, e, t, W);
  }, k = function(W) {
    var O;
    (O = n.onDayTouchEnd) === null || O === void 0 || O.call(n, e, t, W);
  }, B = function(W) {
    var O;
    (O = n.onDayTouchMove) === null || O === void 0 || O.call(n, e, t, W);
  }, Z = function(W) {
    var O;
    (O = n.onDayTouchStart) === null || O === void 0 || O.call(n, e, t, W);
  }, F = function(W) {
    var O;
    (O = n.onDayKeyUp) === null || O === void 0 || O.call(n, e, t, W);
  }, H = function(W) {
    var O;
    switch (W.key) {
      case "ArrowLeft":
        W.preventDefault(), W.stopPropagation(), n.dir === "rtl" ? s() : l();
        break;
      case "ArrowRight":
        W.preventDefault(), W.stopPropagation(), n.dir === "rtl" ? l() : s();
        break;
      case "ArrowDown":
        W.preventDefault(), W.stopPropagation(), u();
        break;
      case "ArrowUp":
        W.preventDefault(), W.stopPropagation(), d();
        break;
      case "PageUp":
        W.preventDefault(), W.stopPropagation(), W.shiftKey ? v() : g();
        break;
      case "PageDown":
        W.preventDefault(), W.stopPropagation(), W.shiftKey ? b() : h();
        break;
      case "Home":
        W.preventDefault(), W.stopPropagation(), y();
        break;
      case "End":
        W.preventDefault(), W.stopPropagation(), w();
        break;
    }
    (O = n.onDayKeyDown) === null || O === void 0 || O.call(n, e, t, W);
  }, j = {
    onClick: C,
    onFocus: E,
    onBlur: S,
    onKeyDown: H,
    onKeyUp: F,
    onMouseEnter: P,
    onMouseLeave: x,
    onPointerEnter: N,
    onPointerLeave: R,
    onTouchCancel: M,
    onTouchEnd: k,
    onTouchMove: B,
    onTouchStart: Z
  };
  return j;
}
function WM() {
  var e = Ae(), t = tb(), n = zu(), r = ju(), o = ns(e) ? t.selected : sa(e) ? n.selected : ca(e) ? r.selected : void 0;
  return o;
}
function zM(e) {
  return Object.values(kt).includes(e);
}
function HM(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (zM(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function jM(e, t) {
  var n = ue({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = ue(ue({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function VM(e, t, n) {
  var r, o, a, i = Ae(), s = Uu(), l = kM(e, t), u = BM(e, l), d = WM(), f = !!(i.onDayClick || i.mode !== "default");
  Oe(function() {
    var P;
    l.outside || s.focusedDay && f && ft(s.focusedDay, e) && ((P = n.current) === null || P === void 0 || P.focus());
  }, [
    s.focusedDay,
    e,
    n,
    f,
    l.outside
  ]);
  var p = HM(i, l).join(" "), g = jM(i, l), h = !!(l.outside && !i.showOutsideDays || l.hidden), v = (a = (o = i.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : dM, b = m(v, { date: e, displayMonth: t, activeModifiers: l }), y = {
    style: g,
    className: p,
    children: b,
    role: "gridcell"
  }, w = s.focusTarget && ft(s.focusTarget, e) && !l.outside, C = s.focusedDay && ft(s.focusedDay, e), E = ue(ue(ue({}, y), (r = { disabled: l.disabled, role: "gridcell" }, r["aria-selected"] = l.selected, r.tabIndex = C || w ? 0 : -1, r)), u), S = {
    isButton: f,
    isHidden: h,
    activeModifiers: l,
    selectedDays: d,
    buttonProps: E,
    divProps: y
  };
  return S;
}
function UM(e) {
  var t = ze(null), n = VM(e.date, e.displayMonth, t);
  return n.isHidden ? m("div", { role: "gridcell" }) : n.isButton ? m(bi, ue({ name: "day", ref: t }, n.buttonProps)) : m("div", ue({}, n.divProps));
}
function GM(e) {
  var t = e.number, n = e.dates, r = Ae(), o = r.onWeekNumberClick, a = r.styles, i = r.classNames, s = r.locale, l = r.labels.labelWeekNumber, u = r.formatters.formatWeekNumber, d = u(Number(t), { locale: s });
  if (!o)
    return m("span", { className: i.weeknumber, style: a.weeknumber, children: d });
  var f = l(Number(t), { locale: s }), p = function(g) {
    o(t, n, g);
  };
  return m(bi, { name: "week-number", "aria-label": f, className: i.weeknumber, style: a.weeknumber, onClick: p, children: d });
}
function YM(e) {
  var t, n, r = Ae(), o = r.styles, a = r.classNames, i = r.showWeekNumber, s = r.components, l = (t = s == null ? void 0 : s.Day) !== null && t !== void 0 ? t : UM, u = (n = s == null ? void 0 : s.WeekNumber) !== null && n !== void 0 ? n : GM, d;
  return i && (d = m("td", { className: a.cell, style: o.cell, children: m(u, { number: e.weekNumber, dates: e.dates }) })), ee("tr", { className: a.row, style: o.row, children: [d, e.dates.map(function(f) {
    return m("td", { className: a.cell, style: o.cell, role: "presentation", children: m(l, { displayMonth: e.displayMonth, date: f }) }, S$(f));
  })] });
}
function yp(e, t, n) {
  for (var r = n != null && n.ISOWeek ? Bg(t) : Fu(t, n), o = n != null && n.ISOWeek ? Yn(e) : Xt(e, n), a = Gt(r, o), i = [], s = 0; s <= a; s++)
    i.push(ot(o, s));
  var l = i.reduce(function(u, d) {
    var f = n != null && n.ISOWeek ? zg(d) : jg(d, n), p = u.find(function(g) {
      return g.weekNumber === f;
    });
    return p ? (p.dates.push(d), u) : (u.push({
      weekNumber: f,
      dates: [d]
    }), u);
  }, []);
  return l;
}
function KM(e, t) {
  var n = yp(pt(e), Lu(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = P$(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], i = Zc(a, 6 - r), s = yp(Zc(a, 1), i, t);
      n.push.apply(n, s);
    }
  }
  return n;
}
function XM(e) {
  var t, n, r, o = Ae(), a = o.locale, i = o.classNames, s = o.styles, l = o.hideHead, u = o.fixedWeeks, d = o.components, f = o.weekStartsOn, p = o.firstWeekContainsDate, g = o.ISOWeek, h = KM(e.displayMonth, {
    useFixedWeeks: !!u,
    ISOWeek: g,
    locale: a,
    weekStartsOn: f,
    firstWeekContainsDate: p
  }), v = (t = d == null ? void 0 : d.Head) !== null && t !== void 0 ? t : uM, b = (n = d == null ? void 0 : d.Row) !== null && n !== void 0 ? n : YM, y = (r = d == null ? void 0 : d.Footer) !== null && r !== void 0 ? r : sM;
  return ee("table", { id: e.id, className: i.table, style: s.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!l && m(v, {}), m("tbody", { className: i.tbody, style: s.tbody, children: h.map(function(w) {
    return m(b, { displayMonth: e.displayMonth, dates: w.dates, weekNumber: w.weekNumber }, w.weekNumber);
  }) }), m(y, { displayMonth: e.displayMonth })] });
}
function qM() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var ZM = qM() ? ra : Oe, cc = !1, QM = 0;
function wp() {
  return "react-day-picker-".concat(++QM);
}
function JM(e) {
  var t, n = e ?? (cc ? wp() : null), r = at(n), o = r[0], a = r[1];
  return ZM(function() {
    o === null && a(wp());
  }, []), Oe(function() {
    cc === !1 && (cc = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function eO(e) {
  var t, n, r = Ae(), o = r.dir, a = r.classNames, i = r.styles, s = r.components, l = la().displayMonths, u = JM(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), d = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, f = [a.month], p = i.month, g = e.displayIndex === 0, h = e.displayIndex === l.length - 1, v = !g && !h;
  o === "rtl" && (t = [g, h], h = t[0], g = t[1]), g && (f.push(a.caption_start), p = ue(ue({}, p), i.caption_start)), h && (f.push(a.caption_end), p = ue(ue({}, p), i.caption_end)), v && (f.push(a.caption_between), p = ue(ue({}, p), i.caption_between));
  var b = (n = s == null ? void 0 : s.Caption) !== null && n !== void 0 ? n : iM;
  return ee("div", { className: f.join(" "), style: p, children: [m(b, { id: u, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), m(XM, { id: d, "aria-labelledby": u, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function tO(e) {
  var t = Ae(), n = t.classNames, r = t.styles;
  return m("div", { className: n.months, style: r.months, children: e.children });
}
function nO(e) {
  var t, n, r = e.initialProps, o = Ae(), a = Uu(), i = la(), s = at(!1), l = s[0], u = s[1];
  Oe(function() {
    o.initialFocus && a.focusTarget && (l || (a.focus(a.focusTarget), u(!0)));
  }, [
    o.initialFocus,
    l,
    a.focus,
    a.focusTarget,
    a
  ]);
  var d = [o.classNames.root, o.className];
  o.numberOfMonths > 1 && d.push(o.classNames.multiple_months), o.showWeekNumber && d.push(o.classNames.with_weeknumber);
  var f = ue(ue({}, o.styles.root), o.style), p = Object.keys(r).filter(function(h) {
    return h.startsWith("data-");
  }).reduce(function(h, v) {
    var b;
    return ue(ue({}, h), (b = {}, b[v] = r[v], b));
  }, {}), g = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : tO;
  return m("div", ue({ className: d.join(" "), style: f, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, p, { children: m(g, { children: i.displayMonths.map(function(h, v) {
    return m(eO, { displayIndex: v, displayMonth: h }, v);
  }) }) }));
}
function rO(e) {
  var t = e.children, n = R$(e, ["children"]);
  return m(G$, { initialProps: n, children: m(nM, { children: m(LM, { initialProps: n, children: m(fM, { initialProps: n, children: m(vM, { initialProps: n, children: m(SM, { children: m(IM, { children: t }) }) }) }) }) }) });
}
function oO(e) {
  return m(rO, ue({}, e, { children: m(nO, { initialProps: e }) }));
}
function aO({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ m(
    oO,
    {
      showOutsideDays: n,
      className: $("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: $(
          Lr({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: $(
          Lr({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...t
      },
      components: {
        IconLeft: ({ ...o }) => /* @__PURE__ */ m(Sh, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ m(Qr, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
aO.displayName = "Calendar";
const iO = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "div",
  {
    ref: n,
    className: $(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
iO.displayName = "Card";
const sO = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "div",
  {
    ref: n,
    className: $("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
sO.displayName = "CardHeader";
const cO = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "h3",
  {
    ref: n,
    className: $(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
cO.displayName = "CardTitle";
const lO = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "p",
  {
    ref: n,
    className: $("text-sm text-muted-foreground", e),
    ...t
  }
));
lO.displayName = "CardDescription";
const uO = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m("div", { ref: n, className: $("p-6 pt-0", e), ...t }));
uO.displayName = "CardContent";
const dO = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "div",
  {
    ref: n,
    className: $("flex items-center p-6 pt-0", e),
    ...t
  }
));
dO.displayName = "CardFooter";
function fO(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function xp(e) {
  return fO(e) || Array.isArray(e);
}
function pO() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Yu(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((i) => {
    const s = e[i], l = t[i];
    return typeof s == "function" ? `${s}` == `${l}` : !xp(s) || !xp(l) ? s === l : Yu(s, l);
  });
}
function Cp(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function mO(e, t) {
  if (e.length !== t.length) return !1;
  const n = Cp(e), r = Cp(t);
  return n.every((o, a) => {
    const i = r[a];
    return Yu(o, i);
  });
}
function Ku(e) {
  return typeof e == "number";
}
function Jc(e) {
  return typeof e == "string";
}
function rs(e) {
  return typeof e == "boolean";
}
function Sp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function We(e) {
  return Math.abs(e);
}
function Xu(e) {
  return Math.sign(e);
}
function Fo(e, t) {
  return We(e - t);
}
function vO(e, t) {
  if (e === 0 || t === 0 || We(e) <= We(t)) return 0;
  const n = Fo(We(e), We(t));
  return We(n / e);
}
function zo(e) {
  return Ho(e).map(Number);
}
function Ot(e) {
  return e[ua(e)];
}
function ua(e) {
  return Math.max(0, e.length - 1);
}
function qu(e, t) {
  return t === ua(e);
}
function Ep(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Ho(e) {
  return Object.keys(e);
}
function nb(e, t) {
  return [e, t].reduce((n, r) => (Ho(r).forEach((o) => {
    const a = n[o], i = r[o], s = Sp(a) && Sp(i);
    n[o] = s ? nb(a, i) : i;
  }), n), {});
}
function el(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function hO(e, t) {
  const n = {
    start: r,
    center: o,
    end: a
  };
  function r() {
    return 0;
  }
  function o(l) {
    return a(l) / 2;
  }
  function a(l) {
    return t - l;
  }
  function i(l, u) {
    return Jc(e) ? n[e](l) : e(t, l, u);
  }
  return {
    measure: i
  };
}
function jo() {
  let e = [];
  function t(o, a, i, s = {
    passive: !0
  }) {
    let l;
    if ("addEventListener" in o)
      o.addEventListener(a, i, s), l = () => o.removeEventListener(a, i, s);
    else {
      const u = o;
      u.addListener(i), l = () => u.removeListener(i);
    }
    return e.push(l), r;
  }
  function n() {
    e = e.filter((o) => o());
  }
  const r = {
    add: t,
    clear: n
  };
  return r;
}
function gO(e, t, n, r) {
  const o = jo(), a = 1e3 / 60;
  let i = null, s = 0, l = 0;
  function u() {
    o.add(e, "visibilitychange", () => {
      e.hidden && h();
    });
  }
  function d() {
    g(), o.clear();
  }
  function f(b) {
    if (!l) return;
    i || (i = b);
    const y = b - i;
    for (i = b, s += y; s >= a; )
      n(a), s -= a;
    const w = s / a;
    r(w), l && t.requestAnimationFrame(f);
  }
  function p() {
    l || (l = t.requestAnimationFrame(f));
  }
  function g() {
    t.cancelAnimationFrame(l), i = null, s = 0, l = 0;
  }
  function h() {
    i = null, s = 0;
  }
  return {
    init: u,
    destroy: d,
    start: p,
    stop: g,
    update: () => n(a),
    render: r
  };
}
function bO(e, t) {
  const n = t === "rtl", r = e === "y", o = r ? "y" : "x", a = r ? "x" : "y", i = !r && n ? -1 : 1, s = d(), l = f();
  function u(h) {
    const {
      height: v,
      width: b
    } = h;
    return r ? v : b;
  }
  function d() {
    return r ? "top" : n ? "right" : "left";
  }
  function f() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function p(h) {
    return h * i;
  }
  return {
    scroll: o,
    cross: a,
    startEdge: s,
    endEdge: l,
    measureSize: u,
    direction: p
  };
}
function Kn(e = 0, t = 0) {
  const n = We(e - t);
  function r(u) {
    return u < e;
  }
  function o(u) {
    return u > t;
  }
  function a(u) {
    return r(u) || o(u);
  }
  function i(u) {
    return a(u) ? r(u) ? e : t : u;
  }
  function s(u) {
    return n ? u - n * Math.ceil((u - t) / n) : u;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: i,
    reachedAny: a,
    reachedMax: o,
    reachedMin: r,
    removeOffset: s
  };
}
function rb(e, t, n) {
  const {
    constrain: r
  } = Kn(0, e), o = e + 1;
  let a = i(t);
  function i(p) {
    return n ? We((o + p) % o) : r(p);
  }
  function s() {
    return a;
  }
  function l(p) {
    return a = i(p), f;
  }
  function u(p) {
    return d().set(s() + p);
  }
  function d() {
    return rb(e, s(), n);
  }
  const f = {
    get: s,
    set: l,
    add: u,
    clone: d
  };
  return f;
}
function yO(e, t, n, r, o, a, i, s, l, u, d, f, p, g, h, v, b, y, w) {
  const {
    cross: C,
    direction: E
  } = e, S = ["INPUT", "SELECT", "TEXTAREA"], P = {
    passive: !1
  }, x = jo(), N = jo(), R = Kn(50, 225).constrain(g.measure(20)), M = {
    mouse: 300,
    touch: 400
  }, k = {
    mouse: 500,
    touch: 600
  }, B = h ? 43 : 25;
  let Z = !1, F = 0, H = 0, j = !1, W = !1, O = !1, V = !1;
  function ne(_) {
    if (!w) return;
    function K(de) {
      (rs(w) || w(_, de)) && G(de);
    }
    const oe = t;
    x.add(oe, "dragstart", (de) => de.preventDefault(), P).add(oe, "touchmove", () => {
    }, P).add(oe, "touchend", () => {
    }).add(oe, "touchstart", K).add(oe, "mousedown", K).add(oe, "touchcancel", X).add(oe, "contextmenu", X).add(oe, "click", Q, !0);
  }
  function q() {
    x.clear(), N.clear();
  }
  function A() {
    const _ = V ? n : t;
    N.add(_, "touchmove", z, P).add(_, "touchend", X).add(_, "mousemove", z, P).add(_, "mouseup", X);
  }
  function D(_) {
    const K = _.nodeName || "";
    return S.includes(K);
  }
  function L() {
    return (h ? k : M)[V ? "mouse" : "touch"];
  }
  function U(_, K) {
    const oe = f.add(Xu(_) * -1), de = d.byDistance(_, !h).distance;
    return h || We(_) < R ? de : b && K ? de * 0.5 : d.byIndex(oe.get(), 0).distance;
  }
  function G(_) {
    const K = el(_, r);
    V = K, O = h && K && !_.buttons && Z, Z = Fo(o.get(), i.get()) >= 2, !(K && _.button !== 0) && (D(_.target) || (j = !0, a.pointerDown(_), u.useFriction(0).useDuration(0), o.set(i), A(), F = a.readPoint(_), H = a.readPoint(_, C), p.emit("pointerDown")));
  }
  function z(_) {
    if (!el(_, r) && _.touches.length >= 2) return X(_);
    const oe = a.readPoint(_), de = a.readPoint(_, C), ce = Fo(oe, F), le = Fo(de, H);
    if (!W && !V && (!_.cancelable || (W = ce > le, !W)))
      return X(_);
    const ye = a.pointerMove(_);
    ce > v && (O = !0), u.useFriction(0.3).useDuration(0.75), s.start(), o.add(E(ye)), _.preventDefault();
  }
  function X(_) {
    const oe = d.byDistance(0, !1).index !== f.get(), de = a.pointerUp(_) * L(), ce = U(E(de), oe), le = vO(de, ce), ye = B - 10 * le, pe = y + le / 50;
    W = !1, j = !1, N.clear(), u.useDuration(ye).useFriction(pe), l.distance(ce, !h), V = !1, p.emit("pointerUp");
  }
  function Q(_) {
    O && (_.stopPropagation(), _.preventDefault(), O = !1);
  }
  function J() {
    return j;
  }
  return {
    init: ne,
    destroy: q,
    pointerDown: J
  };
}
function wO(e, t) {
  let r, o;
  function a(f) {
    return f.timeStamp;
  }
  function i(f, p) {
    const h = `client${(p || e.scroll) === "x" ? "X" : "Y"}`;
    return (el(f, t) ? f : f.touches[0])[h];
  }
  function s(f) {
    return r = f, o = f, i(f);
  }
  function l(f) {
    const p = i(f) - i(o), g = a(f) - a(r) > 170;
    return o = f, g && (r = f), p;
  }
  function u(f) {
    if (!r || !o) return 0;
    const p = i(o) - i(r), g = a(f) - a(r), h = a(f) - a(o) > 170, v = p / g;
    return g && !h && We(v) > 0.1 ? v : 0;
  }
  return {
    pointerDown: s,
    pointerMove: l,
    pointerUp: u,
    readPoint: i
  };
}
function xO() {
  function e(n) {
    const {
      offsetTop: r,
      offsetLeft: o,
      offsetWidth: a,
      offsetHeight: i
    } = n;
    return {
      top: r,
      right: o + a,
      bottom: r + i,
      left: o,
      width: a,
      height: i
    };
  }
  return {
    measure: e
  };
}
function CO(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function SO(e, t, n, r, o, a, i) {
  const s = [e].concat(r);
  let l, u, d = [], f = !1;
  function p(b) {
    return o.measureSize(i.measure(b));
  }
  function g(b) {
    if (!a) return;
    u = p(e), d = r.map(p);
    function y(w) {
      for (const C of w) {
        if (f) return;
        const E = C.target === e, S = r.indexOf(C.target), P = E ? u : d[S], x = p(E ? e : r[S]);
        if (We(x - P) >= 0.5) {
          b.reInit(), t.emit("resize");
          break;
        }
      }
    }
    l = new ResizeObserver((w) => {
      (rs(a) || a(b, w)) && y(w);
    }), n.requestAnimationFrame(() => {
      s.forEach((w) => l.observe(w));
    });
  }
  function h() {
    f = !0, l && l.disconnect();
  }
  return {
    init: g,
    destroy: h
  };
}
function EO(e, t, n, r, o, a) {
  let i = 0, s = 0, l = o, u = a, d = e.get(), f = 0;
  function p(P) {
    const x = P / 1e3, N = l * x, R = r.get() - e.get(), M = !l;
    let k = 0;
    return M ? (i = 0, n.set(r), e.set(r), k = R) : (n.set(e), i += R / N, i *= u, d += i, e.add(i * x), k = d - f), s = Xu(k), f = d, S;
  }
  function g() {
    const P = r.get() - t.get();
    return We(P) < 1e-3;
  }
  function h() {
    return l;
  }
  function v() {
    return s;
  }
  function b() {
    return i;
  }
  function y() {
    return C(o);
  }
  function w() {
    return E(a);
  }
  function C(P) {
    return l = P, S;
  }
  function E(P) {
    return u = P, S;
  }
  const S = {
    direction: v,
    duration: h,
    velocity: b,
    seek: p,
    settled: g,
    useBaseFriction: w,
    useBaseDuration: y,
    useFriction: E,
    useDuration: C
  };
  return S;
}
function PO(e, t, n, r, o) {
  const a = o.measure(10), i = o.measure(50), s = Kn(0.1, 0.99);
  let l = !1;
  function u() {
    return !(l || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function d(g) {
    if (!u()) return;
    const h = e.reachedMin(t.get()) ? "min" : "max", v = We(e[h] - t.get()), b = n.get() - t.get(), y = s.constrain(v / i);
    n.subtract(b * y), !g && We(b) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function f(g) {
    l = !g;
  }
  return {
    shouldConstrain: u,
    constrain: d,
    toggleActive: f
  };
}
function NO(e, t, n, r, o) {
  const a = Kn(-t + e, 0), i = f(), s = d(), l = p();
  function u(h, v) {
    return Fo(h, v) < 1;
  }
  function d() {
    const h = i[0], v = Ot(i), b = i.lastIndexOf(h), y = i.indexOf(v) + 1;
    return Kn(b, y);
  }
  function f() {
    return n.map((h, v) => {
      const {
        min: b,
        max: y
      } = a, w = a.constrain(h), C = !v, E = qu(n, v);
      return C ? y : E || u(b, w) ? b : u(y, w) ? y : w;
    }).map((h) => parseFloat(h.toFixed(3)));
  }
  function p() {
    if (t <= e + o) return [a.max];
    if (r === "keepSnaps") return i;
    const {
      min: h,
      max: v
    } = s;
    return i.slice(h, v);
  }
  return {
    snapsContained: l,
    scrollContainLimit: s
  };
}
function RO(e, t, n) {
  const r = t[0], o = n ? r - e : Ot(t);
  return {
    limit: Kn(o, r)
  };
}
function _O(e, t, n, r) {
  const a = t.min + 0.1, i = t.max + 0.1, {
    reachedMin: s,
    reachedMax: l
  } = Kn(a, i);
  function u(p) {
    return p === 1 ? l(n.get()) : p === -1 ? s(n.get()) : !1;
  }
  function d(p) {
    if (!u(p)) return;
    const g = e * (p * -1);
    r.forEach((h) => h.add(g));
  }
  return {
    loop: d
  };
}
function TO(e) {
  const {
    max: t,
    length: n
  } = e;
  function r(a) {
    const i = a - t;
    return n ? i / -n : 0;
  }
  return {
    get: r
  };
}
function $O(e, t, n, r, o) {
  const {
    startEdge: a,
    endEdge: i
  } = e, {
    groupSlides: s
  } = o, l = f().map(t.measure), u = p(), d = g();
  function f() {
    return s(r).map((v) => Ot(v)[i] - v[0][a]).map(We);
  }
  function p() {
    return r.map((v) => n[a] - v[a]).map((v) => -We(v));
  }
  function g() {
    return s(u).map((v) => v[0]).map((v, b) => v + l[b]);
  }
  return {
    snaps: u,
    snapsAligned: d
  };
}
function MO(e, t, n, r, o, a) {
  const {
    groupSlides: i
  } = o, {
    min: s,
    max: l
  } = r, u = d();
  function d() {
    const p = i(a), g = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : g ? p : p.slice(s, l).map((h, v, b) => {
      const y = !v, w = qu(b, v);
      if (y) {
        const C = Ot(b[0]) + 1;
        return Ep(C);
      }
      if (w) {
        const C = ua(a) - Ot(b)[0] + 1;
        return Ep(C, Ot(b)[0]);
      }
      return h;
    });
  }
  return {
    slideRegistry: u
  };
}
function OO(e, t, n, r, o) {
  const {
    reachedAny: a,
    removeOffset: i,
    constrain: s
  } = r;
  function l(h) {
    return h.concat().sort((v, b) => We(v) - We(b))[0];
  }
  function u(h) {
    const v = e ? i(h) : s(h), b = t.map((w, C) => ({
      diff: d(w - v, 0),
      index: C
    })).sort((w, C) => We(w.diff) - We(C.diff)), {
      index: y
    } = b[0];
    return {
      index: y,
      distance: v
    };
  }
  function d(h, v) {
    const b = [h, h + n, h - n];
    if (!e) return h;
    if (!v) return l(b);
    const y = b.filter((w) => Xu(w) === v);
    return y.length ? l(y) : Ot(b) - n;
  }
  function f(h, v) {
    const b = t[h] - o.get(), y = d(b, v);
    return {
      index: h,
      distance: y
    };
  }
  function p(h, v) {
    const b = o.get() + h, {
      index: y,
      distance: w
    } = u(b), C = !e && a(b);
    if (!v || C) return {
      index: y,
      distance: h
    };
    const E = t[y] - w, S = h + d(E, 0);
    return {
      index: y,
      distance: S
    };
  }
  return {
    byDistance: p,
    byIndex: f,
    shortcut: d
  };
}
function DO(e, t, n, r, o, a, i) {
  function s(f) {
    const p = f.distance, g = f.index !== t.get();
    a.add(p), p && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), g && (n.set(t.get()), t.set(f.index), i.emit("select"));
  }
  function l(f, p) {
    const g = o.byDistance(f, p);
    s(g);
  }
  function u(f, p) {
    const g = t.clone().set(f), h = o.byIndex(g.get(), p);
    s(h);
  }
  return {
    distance: l,
    index: u
  };
}
function AO(e, t, n, r, o, a, i, s) {
  const l = {
    passive: !0,
    capture: !0
  };
  let u = 0;
  function d(g) {
    if (!s) return;
    function h(v) {
      if ((/* @__PURE__ */ new Date()).getTime() - u > 10) return;
      i.emit("slideFocusStart"), e.scrollLeft = 0;
      const w = n.findIndex((C) => C.includes(v));
      Ku(w) && (o.useDuration(0), r.index(w, 0), i.emit("slideFocus"));
    }
    a.add(document, "keydown", f, !1), t.forEach((v, b) => {
      a.add(v, "focus", (y) => {
        (rs(s) || s(g, y)) && h(b);
      }, l);
    });
  }
  function f(g) {
    g.code === "Tab" && (u = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: d
  };
}
function Do(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(l) {
    t = i(l);
  }
  function o(l) {
    t += i(l);
  }
  function a(l) {
    t -= i(l);
  }
  function i(l) {
    return Ku(l) ? l : l.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function ob(e, t) {
  const n = e.scroll === "x" ? a : i, r = t.style;
  let o = !1;
  function a(f) {
    return `translate3d(${f}px,0px,0px)`;
  }
  function i(f) {
    return `translate3d(0px,${f}px,0px)`;
  }
  function s(f) {
    o || (r.transform = n(e.direction(f)));
  }
  function l(f) {
    o = !f;
  }
  function u() {
    o || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: u,
    to: s,
    toggleActive: l
  };
}
function IO(e, t, n, r, o, a, i, s, l) {
  const d = zo(o), f = zo(o).reverse(), p = y().concat(w());
  function g(x, N) {
    return x.reduce((R, M) => R - o[M], N);
  }
  function h(x, N) {
    return x.reduce((R, M) => g(R, N) > 0 ? R.concat([M]) : R, []);
  }
  function v(x) {
    return a.map((N, R) => ({
      start: N - r[R] + 0.5 + x,
      end: N + t - 0.5 + x
    }));
  }
  function b(x, N, R) {
    const M = v(N);
    return x.map((k) => {
      const B = R ? 0 : -n, Z = R ? n : 0, F = R ? "end" : "start", H = M[k][F];
      return {
        index: k,
        loopPoint: H,
        slideLocation: Do(-1),
        translate: ob(e, l[k]),
        target: () => s.get() > H ? B : Z
      };
    });
  }
  function y() {
    const x = i[0], N = h(f, x);
    return b(N, n, !1);
  }
  function w() {
    const x = t - i[0] - 1, N = h(d, x);
    return b(N, -n, !0);
  }
  function C() {
    return p.every(({
      index: x
    }) => {
      const N = d.filter((R) => R !== x);
      return g(N, t) <= 0.1;
    });
  }
  function E() {
    p.forEach((x) => {
      const {
        target: N,
        translate: R,
        slideLocation: M
      } = x, k = N();
      k !== M.get() && (R.to(k), M.set(k));
    });
  }
  function S() {
    p.forEach((x) => x.translate.clear());
  }
  return {
    canLoop: C,
    clear: S,
    loop: E,
    loopPoints: p
  };
}
function kO(e, t, n) {
  let r, o = !1;
  function a(l) {
    if (!n) return;
    function u(d) {
      for (const f of d)
        if (f.type === "childList") {
          l.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((d) => {
      o || (rs(n) || n(l, d)) && u(d);
    }), r.observe(e, {
      childList: !0
    });
  }
  function i() {
    r && r.disconnect(), o = !0;
  }
  return {
    init: a,
    destroy: i
  };
}
function LO(e, t, n, r) {
  const o = {};
  let a = null, i = null, s, l = !1;
  function u() {
    s = new IntersectionObserver((h) => {
      l || (h.forEach((v) => {
        const b = t.indexOf(v.target);
        o[b] = v;
      }), a = null, i = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: r
    }), t.forEach((h) => s.observe(h));
  }
  function d() {
    s && s.disconnect(), l = !0;
  }
  function f(h) {
    return Ho(o).reduce((v, b) => {
      const y = parseInt(b), {
        isIntersecting: w
      } = o[y];
      return (h && w || !h && !w) && v.push(y), v;
    }, []);
  }
  function p(h = !0) {
    if (h && a) return a;
    if (!h && i) return i;
    const v = f(h);
    return h && (a = v), h || (i = v), v;
  }
  return {
    init: u,
    destroy: d,
    get: p
  };
}
function FO(e, t, n, r, o, a) {
  const {
    measureSize: i,
    startEdge: s,
    endEdge: l
  } = e, u = n[0] && o, d = h(), f = v(), p = n.map(i), g = b();
  function h() {
    if (!u) return 0;
    const w = n[0];
    return We(t[s] - w[s]);
  }
  function v() {
    if (!u) return 0;
    const w = a.getComputedStyle(Ot(r));
    return parseFloat(w.getPropertyValue(`margin-${l}`));
  }
  function b() {
    return n.map((w, C, E) => {
      const S = !C, P = qu(E, C);
      return S ? p[C] + d : P ? p[C] + f : E[C + 1][s] - w[s];
    }).map(We);
  }
  return {
    slideSizes: p,
    slideSizesWithGaps: g,
    startGap: d,
    endGap: f
  };
}
function BO(e, t, n, r, o, a, i, s, l) {
  const {
    startEdge: u,
    endEdge: d,
    direction: f
  } = e, p = Ku(n);
  function g(y, w) {
    return zo(y).filter((C) => C % w === 0).map((C) => y.slice(C, C + w));
  }
  function h(y) {
    return y.length ? zo(y).reduce((w, C, E) => {
      const S = Ot(w) || 0, P = S === 0, x = C === ua(y), N = o[u] - a[S][u], R = o[u] - a[C][d], M = !r && P ? f(i) : 0, k = !r && x ? f(s) : 0, B = We(R - k - (N + M));
      return E && B > t + l && w.push(C), x && w.push(y.length), w;
    }, []).map((w, C, E) => {
      const S = Math.max(E[C - 1] || 0);
      return y.slice(S, w);
    }) : [];
  }
  function v(y) {
    return p ? g(y, n) : h(y);
  }
  return {
    groupSlides: v
  };
}
function WO(e, t, n, r, o, a, i) {
  const {
    align: s,
    axis: l,
    direction: u,
    startIndex: d,
    loop: f,
    duration: p,
    dragFree: g,
    dragThreshold: h,
    inViewThreshold: v,
    slidesToScroll: b,
    skipSnaps: y,
    containScroll: w,
    watchResize: C,
    watchSlides: E,
    watchDrag: S,
    watchFocus: P
  } = a, x = 2, N = xO(), R = N.measure(t), M = n.map(N.measure), k = bO(l, u), B = k.measureSize(R), Z = CO(B), F = hO(s, B), H = !f && !!w, j = f || !!w, {
    slideSizes: W,
    slideSizesWithGaps: O,
    startGap: V,
    endGap: ne
  } = FO(k, R, M, n, j, o), q = BO(k, B, b, f, R, M, V, ne, x), {
    snaps: A,
    snapsAligned: D
  } = $O(k, F, R, M, q), L = -Ot(A) + Ot(O), {
    snapsContained: U,
    scrollContainLimit: G
  } = NO(B, L, D, w, x), z = H ? U : D, {
    limit: X
  } = RO(L, z, f), Q = rb(ua(z), d, f), J = Q.clone(), re = zo(n), _ = ({
    dragHandler: ie,
    scrollBody: we,
    scrollBounds: Se,
    options: {
      loop: He
    }
  }, Xe) => {
    He || Se.constrain(ie.pointerDown()), we.seek(Xe);
  }, K = ({
    scrollBody: ie,
    translate: we,
    location: Se,
    offsetLocation: He,
    scrollLooper: Xe,
    slideLooper: lt,
    dragHandler: rt,
    animation: $t,
    eventHandler: se,
    scrollBounds: Pe,
    options: {
      loop: _e
    }
  }, vt) => {
    const ht = ie.settled(), ur = !Pe.shouldConstrain(), Da = _e ? ht : ht && ur;
    Da && !rt.pointerDown() && ($t.stop(), se.emit("settle")), Da || se.emit("scroll");
    const q1 = Se.get() * vt + ye.get() * (1 - vt);
    He.set(q1), _e && (Xe.loop(ie.direction()), lt.loop()), we.to(He.get());
  }, oe = gO(r, o, (ie) => _(be, ie), (ie) => K(be, ie)), de = 0.68, ce = z[Q.get()], le = Do(ce), ye = Do(ce), pe = Do(ce), Ee = Do(ce), Ve = EO(le, pe, ye, Ee, p, de), ct = OO(f, z, L, X, Ee), Ge = DO(oe, Q, J, Ve, ct, Ee, i), tt = TO(X), nt = jo(), Ut = LO(t, n, i, v), {
    slideRegistry: ae
  } = MO(H, w, z, G, q, re), ge = AO(e, n, ae, Ge, Ve, nt, i, P), be = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: i,
    containerRect: R,
    slideRects: M,
    animation: oe,
    axis: k,
    dragHandler: yO(k, e, r, o, Ee, wO(k, o), le, oe, Ge, Ve, ct, Q, i, Z, g, h, y, de, S),
    eventStore: nt,
    percentOfView: Z,
    index: Q,
    indexPrevious: J,
    limit: X,
    location: le,
    offsetLocation: pe,
    previousLocation: ye,
    options: a,
    resizeHandler: SO(t, i, o, n, k, C, N),
    scrollBody: Ve,
    scrollBounds: PO(X, pe, Ee, Ve, Z),
    scrollLooper: _O(L, X, pe, [le, pe, ye, Ee]),
    scrollProgress: tt,
    scrollSnapList: z.map(tt.get),
    scrollSnaps: z,
    scrollTarget: ct,
    scrollTo: Ge,
    slideLooper: IO(k, B, L, W, O, A, z, pe, n),
    slideFocus: ge,
    slidesHandler: kO(t, i, E),
    slidesInView: Ut,
    slideIndexes: re,
    slideRegistry: ae,
    slidesToScroll: q,
    target: Ee,
    translate: ob(k, t)
  };
  return be;
}
function zO() {
  let e = {}, t;
  function n(u) {
    t = u;
  }
  function r(u) {
    return e[u] || [];
  }
  function o(u) {
    return r(u).forEach((d) => d(t, u)), l;
  }
  function a(u, d) {
    return e[u] = r(u).concat([d]), l;
  }
  function i(u, d) {
    return e[u] = r(u).filter((f) => f !== d), l;
  }
  function s() {
    e = {};
  }
  const l = {
    init: n,
    emit: o,
    off: i,
    on: a,
    clear: s
  };
  return l;
}
const HO = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0
};
function jO(e) {
  function t(a, i) {
    return nb(a, i || {});
  }
  function n(a) {
    const i = a.breakpoints || {}, s = Ho(i).filter((l) => e.matchMedia(l).matches).map((l) => i[l]).reduce((l, u) => t(l, u), {});
    return t(a, s);
  }
  function r(a) {
    return a.map((i) => Ho(i.breakpoints || {})).reduce((i, s) => i.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function VO(e) {
  let t = [];
  function n(a, i) {
    return t = i.filter(({
      options: s
    }) => e.optionsAtMedia(s).active !== !1), t.forEach((s) => s.init(a, e)), i.reduce((s, l) => Object.assign(s, {
      [l.name]: l
    }), {});
  }
  function r() {
    t = t.filter((a) => a.destroy());
  }
  return {
    init: n,
    destroy: r
  };
}
function yi(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, a = jO(o), i = VO(a), s = jo(), l = zO(), {
    mergeOptions: u,
    optionsAtMedia: d,
    optionsMediaQueries: f
  } = a, {
    on: p,
    off: g,
    emit: h
  } = l, v = k;
  let b = !1, y, w = u(HO, yi.globalOptions), C = u(w), E = [], S, P, x;
  function N() {
    const {
      container: re,
      slides: _
    } = C;
    P = (Jc(re) ? e.querySelector(re) : re) || e.children[0];
    const oe = Jc(_) ? P.querySelectorAll(_) : _;
    x = [].slice.call(oe || P.children);
  }
  function R(re) {
    const _ = WO(e, P, x, r, o, re, l);
    if (re.loop && !_.slideLooper.canLoop()) {
      const K = Object.assign({}, re, {
        loop: !1
      });
      return R(K);
    }
    return _;
  }
  function M(re, _) {
    b || (w = u(w, re), C = d(w), E = _ || E, N(), y = R(C), f([w, ...E.map(({
      options: K
    }) => K)]).forEach((K) => s.add(K, "change", k)), C.active && (y.translate.to(y.location.get()), y.animation.init(), y.slidesInView.init(), y.slideFocus.init(J), y.eventHandler.init(J), y.resizeHandler.init(J), y.slidesHandler.init(J), y.options.loop && y.slideLooper.loop(), P.offsetParent && x.length && y.dragHandler.init(J), S = i.init(J, E)));
  }
  function k(re, _) {
    const K = q();
    B(), M(u({
      startIndex: K
    }, re), _), l.emit("reInit");
  }
  function B() {
    y.dragHandler.destroy(), y.eventStore.clear(), y.translate.clear(), y.slideLooper.clear(), y.resizeHandler.destroy(), y.slidesHandler.destroy(), y.slidesInView.destroy(), y.animation.destroy(), i.destroy(), s.clear();
  }
  function Z() {
    b || (b = !0, s.clear(), B(), l.emit("destroy"), l.clear());
  }
  function F(re, _, K) {
    !C.active || b || (y.scrollBody.useBaseFriction().useDuration(_ === !0 ? 0 : C.duration), y.scrollTo.index(re, K || 0));
  }
  function H(re) {
    const _ = y.index.add(1).get();
    F(_, re, -1);
  }
  function j(re) {
    const _ = y.index.add(-1).get();
    F(_, re, 1);
  }
  function W() {
    return y.index.add(1).get() !== q();
  }
  function O() {
    return y.index.add(-1).get() !== q();
  }
  function V() {
    return y.scrollSnapList;
  }
  function ne() {
    return y.scrollProgress.get(y.location.get());
  }
  function q() {
    return y.index.get();
  }
  function A() {
    return y.indexPrevious.get();
  }
  function D() {
    return y.slidesInView.get();
  }
  function L() {
    return y.slidesInView.get(!1);
  }
  function U() {
    return S;
  }
  function G() {
    return y;
  }
  function z() {
    return e;
  }
  function X() {
    return P;
  }
  function Q() {
    return x;
  }
  const J = {
    canScrollNext: W,
    canScrollPrev: O,
    containerNode: X,
    internalEngine: G,
    destroy: Z,
    off: g,
    on: p,
    emit: h,
    plugins: U,
    previousScrollSnap: A,
    reInit: v,
    rootNode: z,
    scrollNext: H,
    scrollPrev: j,
    scrollProgress: ne,
    scrollSnapList: V,
    scrollTo: F,
    selectedScrollSnap: q,
    slideNodes: Q,
    slidesInView: D,
    slidesNotInView: L
  };
  return M(t, n), setTimeout(() => l.emit("init"), 0), J;
}
yi.globalOptions = void 0;
function Zu(e = {}, t = []) {
  const n = ze(e), r = ze(t), [o, a] = at(), [i, s] = at(), l = tr(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return Oe(() => {
    Yu(n.current, e) || (n.current = e, l());
  }, [e, l]), Oe(() => {
    mO(r.current, t) || (r.current = t, l());
  }, [t, l]), Oe(() => {
    if (pO() && i) {
      yi.globalOptions = Zu.globalOptions;
      const u = yi(i, n.current, r.current);
      return a(u), () => u.destroy();
    } else
      a(void 0);
  }, [i, a]), [s, o];
}
Zu.globalOptions = void 0;
const ab = c.createContext(null);
function os() {
  const e = c.useContext(ab);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const UO = c.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: a,
    ...i
  }, s) => {
    const [l, u] = Zu(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      r
    ), [d, f] = c.useState(!1), [p, g] = c.useState(!1), h = c.useCallback((w) => {
      w && (f(w.canScrollPrev()), g(w.canScrollNext()));
    }, []), v = c.useCallback(() => {
      u == null || u.scrollPrev();
    }, [u]), b = c.useCallback(() => {
      u == null || u.scrollNext();
    }, [u]), y = c.useCallback(
      (w) => {
        w.key === "ArrowLeft" ? (w.preventDefault(), v()) : w.key === "ArrowRight" && (w.preventDefault(), b());
      },
      [v, b]
    );
    return c.useEffect(() => {
      !u || !n || n(u);
    }, [u, n]), c.useEffect(() => {
      if (u)
        return h(u), u.on("reInit", h), u.on("select", h), () => {
          u == null || u.off("select", h);
        };
    }, [u, h]), /* @__PURE__ */ m(
      ab.Provider,
      {
        value: {
          carouselRef: l,
          api: u,
          opts: t,
          orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: v,
          scrollNext: b,
          canScrollPrev: d,
          canScrollNext: p
        },
        children: /* @__PURE__ */ m(
          "div",
          {
            ref: s,
            onKeyDownCapture: y,
            className: $("relative", o),
            role: "region",
            "aria-roledescription": "carousel",
            ...i,
            children: a
          }
        )
      }
    );
  }
);
UO.displayName = "Carousel";
const GO = c.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = os();
  return /* @__PURE__ */ m("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ m(
    "div",
    {
      ref: n,
      className: $(
        "flex",
        o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
GO.displayName = "CarouselContent";
const YO = c.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = os();
  return /* @__PURE__ */ m(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: $(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
YO.displayName = "CarouselItem";
const KO = c.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollPrev: i, canScrollPrev: s } = os();
  return /* @__PURE__ */ ee(
    aa,
    {
      ref: o,
      variant: t,
      size: n,
      className: $(
        "absolute  h-8 w-8 rounded-full",
        a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !s,
      onClick: i,
      ...r,
      children: [
        /* @__PURE__ */ m(DN, { className: "h-4 w-4" }),
        /* @__PURE__ */ m("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
KO.displayName = "CarouselPrevious";
const XO = c.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollNext: i, canScrollNext: s } = os();
  return /* @__PURE__ */ ee(
    aa,
    {
      ref: o,
      variant: t,
      size: n,
      className: $(
        "absolute h-8 w-8 rounded-full",
        a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !s,
      onClick: i,
      ...r,
      children: [
        /* @__PURE__ */ m(AN, { className: "h-4 w-4" }),
        /* @__PURE__ */ m("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
XO.displayName = "CarouselNext";
var Ba = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qO = Array.isArray, zt = qO, ZO = typeof Ba == "object" && Ba && Ba.Object === Object && Ba, ib = ZO, QO = ib, JO = typeof self == "object" && self && self.Object === Object && self, eD = QO || JO || Function("return this")(), Jt = eD, tD = Jt, nD = tD.Symbol, da = nD, Pp = da, sb = Object.prototype, rD = sb.hasOwnProperty, oD = sb.toString, Ro = Pp ? Pp.toStringTag : void 0;
function aD(e) {
  var t = rD.call(e, Ro), n = e[Ro];
  try {
    e[Ro] = void 0;
    var r = !0;
  } catch {
  }
  var o = oD.call(e);
  return r && (t ? e[Ro] = n : delete e[Ro]), o;
}
var iD = aD, sD = Object.prototype, cD = sD.toString;
function lD(e) {
  return cD.call(e);
}
var uD = lD, Np = da, dD = iD, fD = uD, pD = "[object Null]", mD = "[object Undefined]", Rp = Np ? Np.toStringTag : void 0;
function vD(e) {
  return e == null ? e === void 0 ? mD : pD : Rp && Rp in Object(e) ? dD(e) : fD(e);
}
var ar = vD;
function hD(e) {
  return e != null && typeof e == "object";
}
var ir = hD, gD = ar, bD = ir, yD = "[object Symbol]";
function wD(e) {
  return typeof e == "symbol" || bD(e) && gD(e) == yD;
}
var fa = wD, xD = zt, CD = fa, SD = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ED = /^\w*$/;
function PD(e, t) {
  if (xD(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || CD(e) ? !0 : ED.test(e) || !SD.test(e) || t != null && e in Object(t);
}
var Qu = PD;
function ND(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Tn = ND;
const cb = /* @__PURE__ */ Qt(Tn);
var RD = ar, _D = Tn, TD = "[object AsyncFunction]", $D = "[object Function]", MD = "[object GeneratorFunction]", OD = "[object Proxy]";
function DD(e) {
  if (!_D(e))
    return !1;
  var t = RD(e);
  return t == $D || t == MD || t == TD || t == OD;
}
var Ju = DD;
const wi = /* @__PURE__ */ Qt(Ju);
var AD = Jt, ID = AD["__core-js_shared__"], kD = ID, lc = kD, _p = function() {
  var e = /[^.]+$/.exec(lc && lc.keys && lc.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function LD(e) {
  return !!_p && _p in e;
}
var FD = LD, BD = Function.prototype, WD = BD.toString;
function zD(e) {
  if (e != null) {
    try {
      return WD.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var lb = zD, HD = Ju, jD = FD, VD = Tn, UD = lb, GD = /[\\^$.*+?()[\]{}|]/g, YD = /^\[object .+?Constructor\]$/, KD = Function.prototype, XD = Object.prototype, qD = KD.toString, ZD = XD.hasOwnProperty, QD = RegExp(
  "^" + qD.call(ZD).replace(GD, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function JD(e) {
  if (!VD(e) || jD(e))
    return !1;
  var t = HD(e) ? QD : YD;
  return t.test(UD(e));
}
var eA = JD;
function tA(e, t) {
  return e == null ? void 0 : e[t];
}
var nA = tA, rA = eA, oA = nA;
function aA(e, t) {
  var n = oA(e, t);
  return rA(n) ? n : void 0;
}
var sr = aA, iA = sr, sA = iA(Object, "create"), as = sA, Tp = as;
function cA() {
  this.__data__ = Tp ? Tp(null) : {}, this.size = 0;
}
var lA = cA;
function uA(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var dA = uA, fA = as, pA = "__lodash_hash_undefined__", mA = Object.prototype, vA = mA.hasOwnProperty;
function hA(e) {
  var t = this.__data__;
  if (fA) {
    var n = t[e];
    return n === pA ? void 0 : n;
  }
  return vA.call(t, e) ? t[e] : void 0;
}
var gA = hA, bA = as, yA = Object.prototype, wA = yA.hasOwnProperty;
function xA(e) {
  var t = this.__data__;
  return bA ? t[e] !== void 0 : wA.call(t, e);
}
var CA = xA, SA = as, EA = "__lodash_hash_undefined__";
function PA(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = SA && t === void 0 ? EA : t, this;
}
var NA = PA, RA = lA, _A = dA, TA = gA, $A = CA, MA = NA;
function so(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
so.prototype.clear = RA;
so.prototype.delete = _A;
so.prototype.get = TA;
so.prototype.has = $A;
so.prototype.set = MA;
var OA = so;
function DA() {
  this.__data__ = [], this.size = 0;
}
var AA = DA;
function IA(e, t) {
  return e === t || e !== e && t !== t;
}
var ed = IA, kA = ed;
function LA(e, t) {
  for (var n = e.length; n--; )
    if (kA(e[n][0], t))
      return n;
  return -1;
}
var is = LA, FA = is, BA = Array.prototype, WA = BA.splice;
function zA(e) {
  var t = this.__data__, n = FA(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : WA.call(t, n, 1), --this.size, !0;
}
var HA = zA, jA = is;
function VA(e) {
  var t = this.__data__, n = jA(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var UA = VA, GA = is;
function YA(e) {
  return GA(this.__data__, e) > -1;
}
var KA = YA, XA = is;
function qA(e, t) {
  var n = this.__data__, r = XA(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var ZA = qA, QA = AA, JA = HA, eI = UA, tI = KA, nI = ZA;
function co(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
co.prototype.clear = QA;
co.prototype.delete = JA;
co.prototype.get = eI;
co.prototype.has = tI;
co.prototype.set = nI;
var ss = co, rI = sr, oI = Jt, aI = rI(oI, "Map"), td = aI, $p = OA, iI = ss, sI = td;
function cI() {
  this.size = 0, this.__data__ = {
    hash: new $p(),
    map: new (sI || iI)(),
    string: new $p()
  };
}
var lI = cI;
function uI(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var dI = uI, fI = dI;
function pI(e, t) {
  var n = e.__data__;
  return fI(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var cs = pI, mI = cs;
function vI(e) {
  var t = mI(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var hI = vI, gI = cs;
function bI(e) {
  return gI(this, e).get(e);
}
var yI = bI, wI = cs;
function xI(e) {
  return wI(this, e).has(e);
}
var CI = xI, SI = cs;
function EI(e, t) {
  var n = SI(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var PI = EI, NI = lI, RI = hI, _I = yI, TI = CI, $I = PI;
function lo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
lo.prototype.clear = NI;
lo.prototype.delete = RI;
lo.prototype.get = _I;
lo.prototype.has = TI;
lo.prototype.set = $I;
var nd = lo, ub = nd, MI = "Expected a function";
function rd(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(MI);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var i = e.apply(this, r);
    return n.cache = a.set(o, i) || a, i;
  };
  return n.cache = new (rd.Cache || ub)(), n;
}
rd.Cache = ub;
var OI = rd, DI = OI, AI = 500;
function II(e) {
  var t = DI(e, function(r) {
    return n.size === AI && n.clear(), r;
  }), n = t.cache;
  return t;
}
var kI = II, LI = kI, FI = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, BI = /\\(\\)?/g, WI = LI(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(FI, function(n, r, o, a) {
    t.push(o ? a.replace(BI, "$1") : r || n);
  }), t;
}), zI = WI;
function HI(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var db = HI, Mp = da, jI = db, VI = zt, UI = fa, Op = Mp ? Mp.prototype : void 0, Dp = Op ? Op.toString : void 0;
function fb(e) {
  if (typeof e == "string")
    return e;
  if (VI(e))
    return jI(e, fb) + "";
  if (UI(e))
    return Dp ? Dp.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var GI = fb, YI = GI;
function KI(e) {
  return e == null ? "" : YI(e);
}
var pb = KI, XI = zt, qI = Qu, ZI = zI, QI = pb;
function JI(e, t) {
  return XI(e) ? e : qI(e, t) ? [e] : ZI(QI(e));
}
var mb = JI, ek = fa;
function tk(e) {
  if (typeof e == "string" || ek(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var ls = tk, nk = mb, rk = ls;
function ok(e, t) {
  t = nk(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[rk(t[n++])];
  return n && n == r ? e : void 0;
}
var od = ok, ak = od;
function ik(e, t, n) {
  var r = e == null ? void 0 : ak(e, t);
  return r === void 0 ? n : r;
}
var sk = ik;
function ck(e) {
  return e == null;
}
var lk = ck;
const uk = /* @__PURE__ */ Qt(lk);
var dk = ar, fk = zt, pk = ir, mk = "[object String]";
function vk(e) {
  return typeof e == "string" || !fk(e) && pk(e) && dk(e) == mk;
}
var hk = vk;
const vb = /* @__PURE__ */ Qt(hk);
var tl = { exports: {} }, Ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ap;
function gk() {
  if (Ap) return Ne;
  Ap = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function C(S) {
    if (typeof S == "object" && S !== null) {
      var P = S.$$typeof;
      switch (P) {
        case t:
          switch (S = S.type, S) {
            case l:
            case u:
            case r:
            case a:
            case o:
            case f:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case s:
                case d:
                case h:
                case g:
                case i:
                  return S;
                default:
                  return P;
              }
          }
        case n:
          return P;
      }
    }
  }
  function E(S) {
    return C(S) === u;
  }
  return Ne.AsyncMode = l, Ne.ConcurrentMode = u, Ne.ContextConsumer = s, Ne.ContextProvider = i, Ne.Element = t, Ne.ForwardRef = d, Ne.Fragment = r, Ne.Lazy = h, Ne.Memo = g, Ne.Portal = n, Ne.Profiler = a, Ne.StrictMode = o, Ne.Suspense = f, Ne.isAsyncMode = function(S) {
    return E(S) || C(S) === l;
  }, Ne.isConcurrentMode = E, Ne.isContextConsumer = function(S) {
    return C(S) === s;
  }, Ne.isContextProvider = function(S) {
    return C(S) === i;
  }, Ne.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, Ne.isForwardRef = function(S) {
    return C(S) === d;
  }, Ne.isFragment = function(S) {
    return C(S) === r;
  }, Ne.isLazy = function(S) {
    return C(S) === h;
  }, Ne.isMemo = function(S) {
    return C(S) === g;
  }, Ne.isPortal = function(S) {
    return C(S) === n;
  }, Ne.isProfiler = function(S) {
    return C(S) === a;
  }, Ne.isStrictMode = function(S) {
    return C(S) === o;
  }, Ne.isSuspense = function(S) {
    return C(S) === f;
  }, Ne.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === u || S === a || S === o || S === f || S === p || typeof S == "object" && S !== null && (S.$$typeof === h || S.$$typeof === g || S.$$typeof === i || S.$$typeof === s || S.$$typeof === d || S.$$typeof === b || S.$$typeof === y || S.$$typeof === w || S.$$typeof === v);
  }, Ne.typeOf = C, Ne;
}
var Re = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ip;
function bk() {
  return Ip || (Ip = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function C(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === r || _ === u || _ === a || _ === o || _ === f || _ === p || typeof _ == "object" && _ !== null && (_.$$typeof === h || _.$$typeof === g || _.$$typeof === i || _.$$typeof === s || _.$$typeof === d || _.$$typeof === b || _.$$typeof === y || _.$$typeof === w || _.$$typeof === v);
    }
    function E(_) {
      if (typeof _ == "object" && _ !== null) {
        var K = _.$$typeof;
        switch (K) {
          case t:
            var oe = _.type;
            switch (oe) {
              case l:
              case u:
              case r:
              case a:
              case o:
              case f:
                return oe;
              default:
                var de = oe && oe.$$typeof;
                switch (de) {
                  case s:
                  case d:
                  case h:
                  case g:
                  case i:
                    return de;
                  default:
                    return K;
                }
            }
          case n:
            return K;
        }
      }
    }
    var S = l, P = u, x = s, N = i, R = t, M = d, k = r, B = h, Z = g, F = n, H = a, j = o, W = f, O = !1;
    function V(_) {
      return O || (O = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ne(_) || E(_) === l;
    }
    function ne(_) {
      return E(_) === u;
    }
    function q(_) {
      return E(_) === s;
    }
    function A(_) {
      return E(_) === i;
    }
    function D(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function L(_) {
      return E(_) === d;
    }
    function U(_) {
      return E(_) === r;
    }
    function G(_) {
      return E(_) === h;
    }
    function z(_) {
      return E(_) === g;
    }
    function X(_) {
      return E(_) === n;
    }
    function Q(_) {
      return E(_) === a;
    }
    function J(_) {
      return E(_) === o;
    }
    function re(_) {
      return E(_) === f;
    }
    Re.AsyncMode = S, Re.ConcurrentMode = P, Re.ContextConsumer = x, Re.ContextProvider = N, Re.Element = R, Re.ForwardRef = M, Re.Fragment = k, Re.Lazy = B, Re.Memo = Z, Re.Portal = F, Re.Profiler = H, Re.StrictMode = j, Re.Suspense = W, Re.isAsyncMode = V, Re.isConcurrentMode = ne, Re.isContextConsumer = q, Re.isContextProvider = A, Re.isElement = D, Re.isForwardRef = L, Re.isFragment = U, Re.isLazy = G, Re.isMemo = z, Re.isPortal = X, Re.isProfiler = Q, Re.isStrictMode = J, Re.isSuspense = re, Re.isValidElementType = C, Re.typeOf = E;
  }()), Re;
}
process.env.NODE_ENV === "production" ? tl.exports = gk() : tl.exports = bk();
var kp = tl.exports, yk = ar, wk = ir, xk = "[object Number]";
function Ck(e) {
  return typeof e == "number" || wk(e) && yk(e) == xk;
}
var hb = Ck;
const Sk = /* @__PURE__ */ Qt(hb);
var Ek = hb;
function Pk(e) {
  return Ek(e) && e != +e;
}
var Nk = Pk;
const Rk = /* @__PURE__ */ Qt(Nk);
var Wa = function(t) {
  return vb(t) && t.indexOf("%") === t.length - 1;
}, Mt = function(t) {
  return Sk(t) && !Rk(t);
}, xi = function(t) {
  return Mt(t) || vb(t);
};
function nl(e) {
  "@babel/helpers - typeof";
  return nl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nl(e);
}
var _k = ["viewBox", "children"], Tk = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], Lp = ["points", "pathLength"], uc = {
  svg: _k,
  polygon: Lp,
  polyline: Lp
}, gb = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], $k = function(t, n, r) {
  return function(o) {
    return t(n, r, o), null;
  };
}, Mk = function(t, n, r) {
  if (!cb(t) || nl(t) !== "object")
    return null;
  var o = null;
  return Object.keys(t).forEach(function(a) {
    var i = t[a];
    gb.includes(a) && typeof i == "function" && (o || (o = {}), o[a] = $k(i, n, r));
  }), o;
}, Ok = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, Dk = function(t, n, r, o) {
  var a, i = (a = uc == null ? void 0 : uc[o]) !== null && a !== void 0 ? a : [];
  return !wi(t) && (o && i.includes(n) || Tk.includes(n)) || gb.includes(n);
}, bb = function(t, n, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var o = t;
  if (/* @__PURE__ */ Bo(t) && (o = t.props), !cb(o))
    return null;
  var a = {};
  return Object.keys(o).forEach(function(i) {
    var s;
    Dk((s = o) === null || s === void 0 ? void 0 : s[i], i, n, r) && (a[i] = o[i]);
  }), a;
}, Ak = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function rl() {
  return rl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, rl.apply(this, arguments);
}
function Ik(e, t) {
  if (e == null) return {};
  var n = kk(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function kk(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Lk(e) {
  var t = e.children, n = e.width, r = e.height, o = e.viewBox, a = e.className, i = e.style, s = e.title, l = e.desc, u = Ik(e, Ak), d = o || {
    width: n,
    height: r,
    x: 0,
    y: 0
  }, f = fn("recharts-surface", a);
  return /* @__PURE__ */ T.createElement("svg", rl({}, bb(u, !0, "svg"), {
    className: f,
    width: n,
    height: r,
    style: i,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height)
  }), /* @__PURE__ */ T.createElement("title", null, s), /* @__PURE__ */ T.createElement("desc", null, l), t);
}
var Fk = process.env.NODE_ENV !== "production", fi = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    o[a - 2] = arguments[a];
  if (Fk && typeof console < "u" && console.warn && (n === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (n === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var i = 0;
      console.warn(n.replace(/%s/g, function() {
        return o[i++];
      }));
    }
};
function Bk(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var a = Array(o); ++r < o; )
    a[r] = e[r + t];
  return a;
}
var Wk = Bk, zk = Wk;
function Hk(e, t, n) {
  var r = e.length;
  return n = n === void 0 ? r : n, !t && n >= r ? e : zk(e, t, n);
}
var jk = Hk, Vk = "\\ud800-\\udfff", Uk = "\\u0300-\\u036f", Gk = "\\ufe20-\\ufe2f", Yk = "\\u20d0-\\u20ff", Kk = Uk + Gk + Yk, Xk = "\\ufe0e\\ufe0f", qk = "\\u200d", Zk = RegExp("[" + qk + Vk + Kk + Xk + "]");
function Qk(e) {
  return Zk.test(e);
}
var yb = Qk;
function Jk(e) {
  return e.split("");
}
var eL = Jk, wb = "\\ud800-\\udfff", tL = "\\u0300-\\u036f", nL = "\\ufe20-\\ufe2f", rL = "\\u20d0-\\u20ff", oL = tL + nL + rL, aL = "\\ufe0e\\ufe0f", iL = "[" + wb + "]", ol = "[" + oL + "]", al = "\\ud83c[\\udffb-\\udfff]", sL = "(?:" + ol + "|" + al + ")", xb = "[^" + wb + "]", Cb = "(?:\\ud83c[\\udde6-\\uddff]){2}", Sb = "[\\ud800-\\udbff][\\udc00-\\udfff]", cL = "\\u200d", Eb = sL + "?", Pb = "[" + aL + "]?", lL = "(?:" + cL + "(?:" + [xb, Cb, Sb].join("|") + ")" + Pb + Eb + ")*", uL = Pb + Eb + lL, dL = "(?:" + [xb + ol + "?", ol, Cb, Sb, iL].join("|") + ")", fL = RegExp(al + "(?=" + al + ")|" + dL + uL, "g");
function pL(e) {
  return e.match(fL) || [];
}
var mL = pL, vL = eL, hL = yb, gL = mL;
function bL(e) {
  return hL(e) ? gL(e) : vL(e);
}
var yL = bL, wL = jk, xL = yb, CL = yL, SL = pb;
function EL(e) {
  return function(t) {
    t = SL(t);
    var n = xL(t) ? CL(t) : void 0, r = n ? n[0] : t.charAt(0), o = n ? wL(n, 1).join("") : t.slice(1);
    return r[e]() + o;
  };
}
var PL = EL, NL = PL, RL = NL("toUpperCase"), _L = RL;
const Nb = /* @__PURE__ */ Qt(_L);
function za(e) {
  return function() {
    return e;
  };
}
const Rb = Math.cos, Ci = Math.sin, Ht = Math.sqrt, Si = Math.PI, us = 2 * Si, il = Math.PI, sl = 2 * il, Fn = 1e-6, TL = sl - Fn;
function _b(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function $L(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return _b;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let o = 1, a = r.length; o < a; ++o)
      this._ += Math.round(arguments[o] * n) / n + r[o];
  };
}
class ML {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? _b : $L(t);
  }
  moveTo(t, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${this._x1 = +t},${this._y1 = +n}`;
  }
  quadraticCurveTo(t, n, r, o) {
    this._append`Q${+t},${+n},${this._x1 = +r},${this._y1 = +o}`;
  }
  bezierCurveTo(t, n, r, o, a, i) {
    this._append`C${+t},${+n},${+r},${+o},${this._x1 = +a},${this._y1 = +i}`;
  }
  arcTo(t, n, r, o, a) {
    if (t = +t, n = +n, r = +r, o = +o, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let i = this._x1, s = this._y1, l = r - t, u = o - n, d = i - t, f = s - n, p = d * d + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (p > Fn) if (!(Math.abs(f * l - u * d) > Fn) || !a)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let g = r - i, h = o - s, v = l * l + u * u, b = g * g + h * h, y = Math.sqrt(v), w = Math.sqrt(p), C = a * Math.tan((il - Math.acos((v + p - b) / (2 * y * w))) / 2), E = C / w, S = C / y;
      Math.abs(E - 1) > Fn && this._append`L${t + E * d},${n + E * f}`, this._append`A${a},${a},0,0,${+(f * g > d * h)},${this._x1 = t + S * l},${this._y1 = n + S * u}`;
    }
  }
  arc(t, n, r, o, a, i) {
    if (t = +t, n = +n, r = +r, i = !!i, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(o), l = r * Math.sin(o), u = t + s, d = n + l, f = 1 ^ i, p = i ? o - a : a - o;
    this._x1 === null ? this._append`M${u},${d}` : (Math.abs(this._x1 - u) > Fn || Math.abs(this._y1 - d) > Fn) && this._append`L${u},${d}`, r && (p < 0 && (p = p % sl + sl), p > TL ? this._append`A${r},${r},0,1,${f},${t - s},${n - l}A${r},${r},0,1,${f},${this._x1 = u},${this._y1 = d}` : p > Fn && this._append`A${r},${r},0,${+(p >= il)},${f},${this._x1 = t + r * Math.cos(a)},${this._y1 = n + r * Math.sin(a)}`);
  }
  rect(t, n, r, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+o}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function OL(e) {
  let t = 3;
  return e.digits = function(n) {
    if (!arguments.length) return t;
    if (n == null)
      t = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${n}`);
      t = r;
    }
    return e;
  }, () => new ML(t);
}
const ad = {
  draw(e, t) {
    const n = Ht(t / Si);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, us);
  }
}, DL = {
  draw(e, t) {
    const n = Ht(t / 5) / 2;
    e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
  }
}, Tb = Ht(1 / 3), AL = Tb * 2, IL = {
  draw(e, t) {
    const n = Ht(t / AL), r = n * Tb;
    e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
  }
}, kL = {
  draw(e, t) {
    const n = Ht(t), r = -n / 2;
    e.rect(r, r, n, n);
  }
}, LL = 0.8908130915292852, $b = Ci(Si / 10) / Ci(7 * Si / 10), FL = Ci(us / 10) * $b, BL = -Rb(us / 10) * $b, WL = {
  draw(e, t) {
    const n = Ht(t * LL), r = FL * n, o = BL * n;
    e.moveTo(0, -n), e.lineTo(r, o);
    for (let a = 1; a < 5; ++a) {
      const i = us * a / 5, s = Rb(i), l = Ci(i);
      e.lineTo(l * n, -s * n), e.lineTo(s * r - l * o, l * r + s * o);
    }
    e.closePath();
  }
}, dc = Ht(3), zL = {
  draw(e, t) {
    const n = -Ht(t / (dc * 3));
    e.moveTo(0, n * 2), e.lineTo(-dc * n, -n), e.lineTo(dc * n, -n), e.closePath();
  }
}, Ct = -0.5, St = Ht(3) / 2, cl = 1 / Ht(12), HL = (cl / 2 + 1) * 3, jL = {
  draw(e, t) {
    const n = Ht(t / HL), r = n / 2, o = n * cl, a = r, i = n * cl + n, s = -a, l = i;
    e.moveTo(r, o), e.lineTo(a, i), e.lineTo(s, l), e.lineTo(Ct * r - St * o, St * r + Ct * o), e.lineTo(Ct * a - St * i, St * a + Ct * i), e.lineTo(Ct * s - St * l, St * s + Ct * l), e.lineTo(Ct * r + St * o, Ct * o - St * r), e.lineTo(Ct * a + St * i, Ct * i - St * a), e.lineTo(Ct * s + St * l, Ct * l - St * s), e.closePath();
  }
};
function VL(e, t) {
  let n = null, r = OL(o);
  e = typeof e == "function" ? e : za(e || ad), t = typeof t == "function" ? t : za(t === void 0 ? 64 : +t);
  function o() {
    let a;
    if (n || (n = a = r()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), a) return n = null, a + "" || null;
  }
  return o.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : za(a), o) : e;
  }, o.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : za(+a), o) : t;
  }, o.context = function(a) {
    return arguments.length ? (n = a ?? null, o) : n;
  }, o;
}
function Vo(e) {
  "@babel/helpers - typeof";
  return Vo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vo(e);
}
var UL = ["type", "size", "sizeType"];
function ll() {
  return ll = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ll.apply(this, arguments);
}
function Fp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Bp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fp(Object(n), !0).forEach(function(r) {
      GL(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fp(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function GL(e, t, n) {
  return t = YL(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function YL(e) {
  var t = KL(e, "string");
  return Vo(t) == "symbol" ? t : String(t);
}
function KL(e, t) {
  if (Vo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Vo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function XL(e, t) {
  if (e == null) return {};
  var n = qL(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function qL(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Mb = {
  symbolCircle: ad,
  symbolCross: DL,
  symbolDiamond: IL,
  symbolSquare: kL,
  symbolStar: WL,
  symbolTriangle: zL,
  symbolWye: jL
}, ZL = Math.PI / 180, QL = function(t) {
  var n = "symbol".concat(Nb(t));
  return Mb[n] || ad;
}, JL = function(t, n, r) {
  if (n === "area")
    return t;
  switch (r) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var o = 18 * ZL;
      return 1.25 * t * t * (Math.tan(o) - Math.tan(o * 2) * Math.pow(Math.tan(o), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, e2 = function(t, n) {
  Mb["symbol".concat(Nb(t))] = n;
}, Ob = function(t) {
  var n = t.type, r = n === void 0 ? "circle" : n, o = t.size, a = o === void 0 ? 64 : o, i = t.sizeType, s = i === void 0 ? "area" : i, l = XL(t, UL), u = Bp(Bp({}, l), {}, {
    type: r,
    size: a,
    sizeType: s
  }), d = function() {
    var b = QL(r), y = VL().type(b).size(JL(a, s, r));
    return y();
  }, f = u.className, p = u.cx, g = u.cy, h = bb(u, !0);
  return p === +p && g === +g && a === +a ? /* @__PURE__ */ T.createElement("path", ll({}, h, {
    className: fn("recharts-symbols", f),
    transform: "translate(".concat(p, ", ").concat(g, ")"),
    d: d()
  })) : null;
};
Ob.registerSymbol = e2;
function Br(e) {
  "@babel/helpers - typeof";
  return Br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Br(e);
}
function ul() {
  return ul = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ul.apply(this, arguments);
}
function Wp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function t2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wp(Object(n), !0).forEach(function(r) {
      Uo(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wp(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function n2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function r2(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ab(r.key), r);
  }
}
function o2(e, t, n) {
  return t && r2(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function a2(e, t, n) {
  return t = Ei(t), i2(e, Db() ? Reflect.construct(t, n || [], Ei(e).constructor) : t.apply(e, n));
}
function i2(e, t) {
  if (t && (Br(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return s2(e);
}
function s2(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Db() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Db = function() {
    return !!e;
  })();
}
function Ei(e) {
  return Ei = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ei(e);
}
function c2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && dl(e, t);
}
function dl(e, t) {
  return dl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, dl(e, t);
}
function Uo(e, t, n) {
  return t = Ab(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ab(e) {
  var t = l2(e, "string");
  return Br(t) == "symbol" ? t : String(t);
}
function l2(e, t) {
  if (Br(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Br(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Et = 32, id = /* @__PURE__ */ function(e) {
  c2(t, e);
  function t() {
    return n2(this, t), a2(this, t, arguments);
  }
  return o2(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(r) {
        var o = this.props.inactiveColor, a = Et / 2, i = Et / 6, s = Et / 3, l = r.inactive ? o : r.color;
        if (r.type === "plainline")
          return /* @__PURE__ */ T.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            strokeDasharray: r.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: Et,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (r.type === "line")
          return /* @__PURE__ */ T.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            d: "M0,".concat(a, "h").concat(s, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(Et, "M").concat(2 * s, ",").concat(a, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(s, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (r.type === "rect")
          return /* @__PURE__ */ T.createElement("path", {
            stroke: "none",
            fill: l,
            d: "M0,".concat(Et / 8, "h").concat(Et, "v").concat(Et * 3 / 4, "h").concat(-Et, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ T.isValidElement(r.legendIcon)) {
          var u = t2({}, r);
          return delete u.legendIcon, /* @__PURE__ */ T.cloneElement(r.legendIcon, u);
        }
        return /* @__PURE__ */ T.createElement(Ob, {
          fill: l,
          cx: a,
          cy: a,
          size: Et,
          sizeType: "diameter",
          type: r.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var r = this, o = this.props, a = o.payload, i = o.iconSize, s = o.layout, l = o.formatter, u = o.inactiveColor, d = {
        x: 0,
        y: 0,
        width: Et,
        height: Et
      }, f = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, p = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(g, h) {
        var v = g.formatter || l, b = fn(Uo(Uo({
          "recharts-legend-item": !0
        }, "legend-item-".concat(h), !0), "inactive", g.inactive));
        if (g.type === "none")
          return null;
        var y = wi(g.value) ? null : g.value;
        fi(
          !wi(g.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var w = g.inactive ? u : g.color;
        return /* @__PURE__ */ T.createElement("li", ul({
          className: b,
          style: f,
          key: "legend-item-".concat(h)
        }, Mk(r.props, g, h)), /* @__PURE__ */ T.createElement(Lk, {
          width: i,
          height: i,
          viewBox: d,
          style: p
        }, r.renderIcon(g)), /* @__PURE__ */ T.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: w
          }
        }, v ? v(y, g, h) : y));
      });
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, o = r.payload, a = r.layout, i = r.align;
      if (!o || !o.length)
        return null;
      var s = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? i : "left"
      };
      return /* @__PURE__ */ T.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]), t;
}(Xi);
Uo(id, "displayName", "Legend");
Uo(id, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var u2 = ss;
function d2() {
  this.__data__ = new u2(), this.size = 0;
}
var f2 = d2;
function p2(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var m2 = p2;
function v2(e) {
  return this.__data__.get(e);
}
var h2 = v2;
function g2(e) {
  return this.__data__.has(e);
}
var b2 = g2, y2 = ss, w2 = td, x2 = nd, C2 = 200;
function S2(e, t) {
  var n = this.__data__;
  if (n instanceof y2) {
    var r = n.__data__;
    if (!w2 || r.length < C2 - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new x2(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var E2 = S2, P2 = ss, N2 = f2, R2 = m2, _2 = h2, T2 = b2, $2 = E2;
function uo(e) {
  var t = this.__data__ = new P2(e);
  this.size = t.size;
}
uo.prototype.clear = N2;
uo.prototype.delete = R2;
uo.prototype.get = _2;
uo.prototype.has = T2;
uo.prototype.set = $2;
var Ib = uo, M2 = "__lodash_hash_undefined__";
function O2(e) {
  return this.__data__.set(e, M2), this;
}
var D2 = O2;
function A2(e) {
  return this.__data__.has(e);
}
var I2 = A2, k2 = nd, L2 = D2, F2 = I2;
function Pi(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new k2(); ++t < n; )
    this.add(e[t]);
}
Pi.prototype.add = Pi.prototype.push = L2;
Pi.prototype.has = F2;
var kb = Pi;
function B2(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var W2 = B2;
function z2(e, t) {
  return e.has(t);
}
var Lb = z2, H2 = kb, j2 = W2, V2 = Lb, U2 = 1, G2 = 2;
function Y2(e, t, n, r, o, a) {
  var i = n & U2, s = e.length, l = t.length;
  if (s != l && !(i && l > s))
    return !1;
  var u = a.get(e), d = a.get(t);
  if (u && d)
    return u == t && d == e;
  var f = -1, p = !0, g = n & G2 ? new H2() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < s; ) {
    var h = e[f], v = t[f];
    if (r)
      var b = i ? r(v, h, f, t, e, a) : r(h, v, f, e, t, a);
    if (b !== void 0) {
      if (b)
        continue;
      p = !1;
      break;
    }
    if (g) {
      if (!j2(t, function(y, w) {
        if (!V2(g, w) && (h === y || o(h, y, n, r, a)))
          return g.push(w);
      })) {
        p = !1;
        break;
      }
    } else if (!(h === v || o(h, v, n, r, a))) {
      p = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), p;
}
var Fb = Y2, K2 = Jt, X2 = K2.Uint8Array, q2 = X2;
function Z2(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
var Q2 = Z2;
function J2(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var sd = J2, zp = da, Hp = q2, eF = ed, tF = Fb, nF = Q2, rF = sd, oF = 1, aF = 2, iF = "[object Boolean]", sF = "[object Date]", cF = "[object Error]", lF = "[object Map]", uF = "[object Number]", dF = "[object RegExp]", fF = "[object Set]", pF = "[object String]", mF = "[object Symbol]", vF = "[object ArrayBuffer]", hF = "[object DataView]", jp = zp ? zp.prototype : void 0, fc = jp ? jp.valueOf : void 0;
function gF(e, t, n, r, o, a, i) {
  switch (n) {
    case hF:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case vF:
      return !(e.byteLength != t.byteLength || !a(new Hp(e), new Hp(t)));
    case iF:
    case sF:
    case uF:
      return eF(+e, +t);
    case cF:
      return e.name == t.name && e.message == t.message;
    case dF:
    case pF:
      return e == t + "";
    case lF:
      var s = nF;
    case fF:
      var l = r & oF;
      if (s || (s = rF), e.size != t.size && !l)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      r |= aF, i.set(e, t);
      var d = tF(s(e), s(t), r, o, a, i);
      return i.delete(e), d;
    case mF:
      if (fc)
        return fc.call(e) == fc.call(t);
  }
  return !1;
}
var bF = gF;
function yF(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Bb = yF, wF = Bb, xF = zt;
function CF(e, t, n) {
  var r = t(e);
  return xF(e) ? r : wF(r, n(e));
}
var SF = CF;
function EF(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (a[o++] = i);
  }
  return a;
}
var PF = EF;
function NF() {
  return [];
}
var RF = NF, _F = PF, TF = RF, $F = Object.prototype, MF = $F.propertyIsEnumerable, Vp = Object.getOwnPropertySymbols, OF = Vp ? function(e) {
  return e == null ? [] : (e = Object(e), _F(Vp(e), function(t) {
    return MF.call(e, t);
  }));
} : TF, DF = OF;
function AF(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var IF = AF, kF = ar, LF = ir, FF = "[object Arguments]";
function BF(e) {
  return LF(e) && kF(e) == FF;
}
var WF = BF, Up = WF, zF = ir, Wb = Object.prototype, HF = Wb.hasOwnProperty, jF = Wb.propertyIsEnumerable, VF = Up(/* @__PURE__ */ function() {
  return arguments;
}()) ? Up : function(e) {
  return zF(e) && HF.call(e, "callee") && !jF.call(e, "callee");
}, cd = VF, Ni = { exports: {} };
function UF() {
  return !1;
}
var GF = UF;
Ni.exports;
(function(e, t) {
  var n = Jt, r = GF, o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, i = a && a.exports === o, s = i ? n.Buffer : void 0, l = s ? s.isBuffer : void 0, u = l || r;
  e.exports = u;
})(Ni, Ni.exports);
var zb = Ni.exports, YF = 9007199254740991, KF = /^(?:0|[1-9]\d*)$/;
function XF(e, t) {
  var n = typeof e;
  return t = t ?? YF, !!t && (n == "number" || n != "symbol" && KF.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ld = XF, qF = 9007199254740991;
function ZF(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= qF;
}
var ud = ZF, QF = ar, JF = ud, eB = ir, tB = "[object Arguments]", nB = "[object Array]", rB = "[object Boolean]", oB = "[object Date]", aB = "[object Error]", iB = "[object Function]", sB = "[object Map]", cB = "[object Number]", lB = "[object Object]", uB = "[object RegExp]", dB = "[object Set]", fB = "[object String]", pB = "[object WeakMap]", mB = "[object ArrayBuffer]", vB = "[object DataView]", hB = "[object Float32Array]", gB = "[object Float64Array]", bB = "[object Int8Array]", yB = "[object Int16Array]", wB = "[object Int32Array]", xB = "[object Uint8Array]", CB = "[object Uint8ClampedArray]", SB = "[object Uint16Array]", EB = "[object Uint32Array]", ke = {};
ke[hB] = ke[gB] = ke[bB] = ke[yB] = ke[wB] = ke[xB] = ke[CB] = ke[SB] = ke[EB] = !0;
ke[tB] = ke[nB] = ke[mB] = ke[rB] = ke[vB] = ke[oB] = ke[aB] = ke[iB] = ke[sB] = ke[cB] = ke[lB] = ke[uB] = ke[dB] = ke[fB] = ke[pB] = !1;
function PB(e) {
  return eB(e) && JF(e.length) && !!ke[QF(e)];
}
var NB = PB;
function RB(e) {
  return function(t) {
    return e(t);
  };
}
var Hb = RB, Ri = { exports: {} };
Ri.exports;
(function(e, t) {
  var n = ib, r = t && !t.nodeType && t, o = r && !0 && e && !e.nodeType && e, a = o && o.exports === r, i = a && n.process, s = function() {
    try {
      var l = o && o.require && o.require("util").types;
      return l || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(Ri, Ri.exports);
var _B = Ri.exports, TB = NB, $B = Hb, Gp = _B, Yp = Gp && Gp.isTypedArray, MB = Yp ? $B(Yp) : TB, jb = MB, OB = IF, DB = cd, AB = zt, IB = zb, kB = ld, LB = jb, FB = Object.prototype, BB = FB.hasOwnProperty;
function WB(e, t) {
  var n = AB(e), r = !n && DB(e), o = !n && !r && IB(e), a = !n && !r && !o && LB(e), i = n || r || o || a, s = i ? OB(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || BB.call(e, u)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    kB(u, l))) && s.push(u);
  return s;
}
var zB = WB, HB = Object.prototype;
function jB(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || HB;
  return e === n;
}
var VB = jB;
function UB(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var GB = UB, YB = GB, KB = YB(Object.keys, Object), XB = KB, qB = VB, ZB = XB, QB = Object.prototype, JB = QB.hasOwnProperty;
function e5(e) {
  if (!qB(e))
    return ZB(e);
  var t = [];
  for (var n in Object(e))
    JB.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var t5 = e5, n5 = Ju, r5 = ud;
function o5(e) {
  return e != null && r5(e.length) && !n5(e);
}
var ds = o5, a5 = zB, i5 = t5, s5 = ds;
function c5(e) {
  return s5(e) ? a5(e) : i5(e);
}
var dd = c5, l5 = SF, u5 = DF, d5 = dd;
function f5(e) {
  return l5(e, d5, u5);
}
var p5 = f5, Kp = p5, m5 = 1, v5 = Object.prototype, h5 = v5.hasOwnProperty;
function g5(e, t, n, r, o, a) {
  var i = n & m5, s = Kp(e), l = s.length, u = Kp(t), d = u.length;
  if (l != d && !i)
    return !1;
  for (var f = l; f--; ) {
    var p = s[f];
    if (!(i ? p in t : h5.call(t, p)))
      return !1;
  }
  var g = a.get(e), h = a.get(t);
  if (g && h)
    return g == t && h == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var b = i; ++f < l; ) {
    p = s[f];
    var y = e[p], w = t[p];
    if (r)
      var C = i ? r(w, y, p, t, e, a) : r(y, w, p, e, t, a);
    if (!(C === void 0 ? y === w || o(y, w, n, r, a) : C)) {
      v = !1;
      break;
    }
    b || (b = p == "constructor");
  }
  if (v && !b) {
    var E = e.constructor, S = t.constructor;
    E != S && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof S == "function" && S instanceof S) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var b5 = g5, y5 = sr, w5 = Jt, x5 = y5(w5, "DataView"), C5 = x5, S5 = sr, E5 = Jt, P5 = S5(E5, "Promise"), N5 = P5, R5 = sr, _5 = Jt, T5 = R5(_5, "Set"), Vb = T5, $5 = sr, M5 = Jt, O5 = $5(M5, "WeakMap"), D5 = O5, fl = C5, pl = td, ml = N5, vl = Vb, hl = D5, Ub = ar, fo = lb, Xp = "[object Map]", A5 = "[object Object]", qp = "[object Promise]", Zp = "[object Set]", Qp = "[object WeakMap]", Jp = "[object DataView]", I5 = fo(fl), k5 = fo(pl), L5 = fo(ml), F5 = fo(vl), B5 = fo(hl), Bn = Ub;
(fl && Bn(new fl(new ArrayBuffer(1))) != Jp || pl && Bn(new pl()) != Xp || ml && Bn(ml.resolve()) != qp || vl && Bn(new vl()) != Zp || hl && Bn(new hl()) != Qp) && (Bn = function(e) {
  var t = Ub(e), n = t == A5 ? e.constructor : void 0, r = n ? fo(n) : "";
  if (r)
    switch (r) {
      case I5:
        return Jp;
      case k5:
        return Xp;
      case L5:
        return qp;
      case F5:
        return Zp;
      case B5:
        return Qp;
    }
  return t;
});
var W5 = Bn, pc = Ib, z5 = Fb, H5 = bF, j5 = b5, em = W5, tm = zt, nm = zb, V5 = jb, U5 = 1, rm = "[object Arguments]", om = "[object Array]", Ha = "[object Object]", G5 = Object.prototype, am = G5.hasOwnProperty;
function Y5(e, t, n, r, o, a) {
  var i = tm(e), s = tm(t), l = i ? om : em(e), u = s ? om : em(t);
  l = l == rm ? Ha : l, u = u == rm ? Ha : u;
  var d = l == Ha, f = u == Ha, p = l == u;
  if (p && nm(e)) {
    if (!nm(t))
      return !1;
    i = !0, d = !1;
  }
  if (p && !d)
    return a || (a = new pc()), i || V5(e) ? z5(e, t, n, r, o, a) : H5(e, t, l, n, r, o, a);
  if (!(n & U5)) {
    var g = d && am.call(e, "__wrapped__"), h = f && am.call(t, "__wrapped__");
    if (g || h) {
      var v = g ? e.value() : e, b = h ? t.value() : t;
      return a || (a = new pc()), o(v, b, n, r, a);
    }
  }
  return p ? (a || (a = new pc()), j5(e, t, n, r, o, a)) : !1;
}
var K5 = Y5, X5 = K5, im = ir;
function Gb(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !im(e) && !im(t) ? e !== e && t !== t : X5(e, t, n, r, Gb, o);
}
var Yb = Gb, q5 = Ib, Z5 = Yb, Q5 = 1, J5 = 2;
function e4(e, t, n, r) {
  var o = n.length, a = o, i = !r;
  if (e == null)
    return !a;
  for (e = Object(e); o--; ) {
    var s = n[o];
    if (i && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++o < a; ) {
    s = n[o];
    var l = s[0], u = e[l], d = s[1];
    if (i && s[2]) {
      if (u === void 0 && !(l in e))
        return !1;
    } else {
      var f = new q5();
      if (r)
        var p = r(u, d, l, e, t, f);
      if (!(p === void 0 ? Z5(d, u, Q5 | J5, r, f) : p))
        return !1;
    }
  }
  return !0;
}
var t4 = e4, n4 = Tn;
function r4(e) {
  return e === e && !n4(e);
}
var Kb = r4, o4 = Kb, a4 = dd;
function i4(e) {
  for (var t = a4(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, o4(o)];
  }
  return t;
}
var s4 = i4;
function c4(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var Xb = c4, l4 = t4, u4 = s4, d4 = Xb;
function f4(e) {
  var t = u4(e);
  return t.length == 1 && t[0][2] ? d4(t[0][0], t[0][1]) : function(n) {
    return n === e || l4(n, e, t);
  };
}
var p4 = f4;
function m4(e, t) {
  return e != null && t in Object(e);
}
var v4 = m4, h4 = mb, g4 = cd, b4 = zt, y4 = ld, w4 = ud, x4 = ls;
function C4(e, t, n) {
  t = h4(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var i = x4(t[r]);
    if (!(a = e != null && n(e, i)))
      break;
    e = e[i];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && w4(o) && y4(i, o) && (b4(e) || g4(e)));
}
var S4 = C4, E4 = v4, P4 = S4;
function N4(e, t) {
  return e != null && P4(e, t, E4);
}
var R4 = N4, _4 = Yb, T4 = sk, $4 = R4, M4 = Qu, O4 = Kb, D4 = Xb, A4 = ls, I4 = 1, k4 = 2;
function L4(e, t) {
  return M4(e) && O4(t) ? D4(A4(e), t) : function(n) {
    var r = T4(n, e);
    return r === void 0 && r === t ? $4(n, e) : _4(t, r, I4 | k4);
  };
}
var F4 = L4;
function B4(e) {
  return e;
}
var fs = B4;
function W4(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var z4 = W4, H4 = od;
function j4(e) {
  return function(t) {
    return H4(t, e);
  };
}
var V4 = j4, U4 = z4, G4 = V4, Y4 = Qu, K4 = ls;
function X4(e) {
  return Y4(e) ? U4(K4(e)) : G4(e);
}
var q4 = X4, Z4 = p4, Q4 = F4, J4 = fs, e3 = zt, t3 = q4;
function n3(e) {
  return typeof e == "function" ? e : e == null ? J4 : typeof e == "object" ? e3(e) ? Q4(e[0], e[1]) : Z4(e) : t3(e);
}
var qb = n3;
function r3(e, t, n, r) {
  for (var o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var o3 = r3;
function a3(e) {
  return e !== e;
}
var i3 = a3;
function s3(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; )
    if (e[r] === t)
      return r;
  return -1;
}
var c3 = s3, l3 = o3, u3 = i3, d3 = c3;
function f3(e, t, n) {
  return t === t ? d3(e, t, n) : l3(e, u3, n);
}
var p3 = f3, m3 = p3;
function v3(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && m3(e, t, 0) > -1;
}
var h3 = v3;
function g3(e, t, n) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (n(t, e[r]))
      return !0;
  return !1;
}
var b3 = g3;
function y3() {
}
var w3 = y3, mc = Vb, x3 = w3, C3 = sd, S3 = 1 / 0, E3 = mc && 1 / C3(new mc([, -0]))[1] == S3 ? function(e) {
  return new mc(e);
} : x3, P3 = E3, N3 = kb, R3 = h3, _3 = b3, T3 = Lb, $3 = P3, M3 = sd, O3 = 200;
function D3(e, t, n) {
  var r = -1, o = R3, a = e.length, i = !0, s = [], l = s;
  if (n)
    i = !1, o = _3;
  else if (a >= O3) {
    var u = t ? null : $3(e);
    if (u)
      return M3(u);
    i = !1, o = T3, l = new N3();
  } else
    l = t ? [] : s;
  e:
    for (; ++r < a; ) {
      var d = e[r], f = t ? t(d) : d;
      if (d = n || d !== 0 ? d : 0, i && f === f) {
        for (var p = l.length; p--; )
          if (l[p] === f)
            continue e;
        t && l.push(f), s.push(d);
      } else o(l, f, n) || (l !== s && l.push(f), s.push(d));
    }
  return s;
}
var A3 = D3, I3 = qb, k3 = A3;
function L3(e, t) {
  return e && e.length ? k3(e, I3(t)) : [];
}
var F3 = L3;
const sm = /* @__PURE__ */ Qt(F3);
function Zb(e, t, n) {
  return t === !0 ? sm(e, n) : wi(t) ? sm(e, t) : e;
}
function Wr(e) {
  "@babel/helpers - typeof";
  return Wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wr(e);
}
var B3 = ["ref"];
function cm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function An(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cm(Object(n), !0).forEach(function(r) {
      ps(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cm(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function W3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function lm(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ey(r.key), r);
  }
}
function z3(e, t, n) {
  return t && lm(e.prototype, t), n && lm(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function H3(e, t, n) {
  return t = _i(t), j3(e, Qb() ? Reflect.construct(t, n || [], _i(e).constructor) : t.apply(e, n));
}
function j3(e, t) {
  if (t && (Wr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Jb(e);
}
function Qb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Qb = function() {
    return !!e;
  })();
}
function _i(e) {
  return _i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, _i(e);
}
function Jb(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function V3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && gl(e, t);
}
function gl(e, t) {
  return gl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, gl(e, t);
}
function ps(e, t, n) {
  return t = ey(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ey(e) {
  var t = U3(e, "string");
  return Wr(t) == "symbol" ? t : String(t);
}
function U3(e, t) {
  if (Wr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Wr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function G3(e, t) {
  if (e == null) return {};
  var n = Y3(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Y3(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function K3(e) {
  return e.value;
}
function X3(e, t) {
  if (/* @__PURE__ */ T.isValidElement(e))
    return /* @__PURE__ */ T.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ T.createElement(e, t);
  t.ref;
  var n = G3(t, B3);
  return /* @__PURE__ */ T.createElement(id, n);
}
var um = 1, fd = /* @__PURE__ */ function(e) {
  V3(t, e);
  function t() {
    var n;
    W3(this, t);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return n = H3(this, t, [].concat(o)), ps(Jb(n), "lastBoundingBox", {
      width: -1,
      height: -1
    }), n;
  }
  return z3(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        return r.height = this.wrapperNode.offsetHeight, r.width = this.wrapperNode.offsetWidth, r;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var r = this.props.onBBoxUpdate, o = this.getBBox();
      o ? (Math.abs(o.width - this.lastBoundingBox.width) > um || Math.abs(o.height - this.lastBoundingBox.height) > um) && (this.lastBoundingBox.width = o.width, this.lastBoundingBox.height = o.height, r && r(o)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, r && r(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? An({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(r) {
      var o = this.props, a = o.layout, i = o.align, s = o.verticalAlign, l = o.margin, u = o.chartWidth, d = o.chartHeight, f, p;
      if (!r || (r.left === void 0 || r.left === null) && (r.right === void 0 || r.right === null))
        if (i === "center" && a === "vertical") {
          var g = this.getBBoxSnapshot();
          f = {
            left: ((u || 0) - g.width) / 2
          };
        } else
          f = i === "right" ? {
            right: l && l.right || 0
          } : {
            left: l && l.left || 0
          };
      if (!r || (r.top === void 0 || r.top === null) && (r.bottom === void 0 || r.bottom === null))
        if (s === "middle") {
          var h = this.getBBoxSnapshot();
          p = {
            top: ((d || 0) - h.height) / 2
          };
        } else
          p = s === "bottom" ? {
            bottom: l && l.bottom || 0
          } : {
            top: l && l.top || 0
          };
      return An(An({}, f), p);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.content, i = o.width, s = o.height, l = o.wrapperStyle, u = o.payloadUniqBy, d = o.payload, f = An(An({
        position: "absolute",
        width: i || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(l)), l);
      return /* @__PURE__ */ T.createElement("div", {
        className: "recharts-legend-wrapper",
        style: f,
        ref: function(g) {
          r.wrapperNode = g;
        }
      }, X3(a, An(An({}, this.props), {}, {
        payload: Zb(d, u, K3)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(r, o) {
      var a = r.props.layout;
      return a === "vertical" && Mt(r.props.height) ? {
        height: r.props.height
      } : a === "horizontal" ? {
        width: r.props.width || o
      } : null;
    }
  }]), t;
}(Xi);
ps(fd, "displayName", "Legend");
ps(fd, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var dm = da, q3 = cd, Z3 = zt, fm = dm ? dm.isConcatSpreadable : void 0;
function Q3(e) {
  return Z3(e) || q3(e) || !!(fm && e && e[fm]);
}
var J3 = Q3, eW = Bb, tW = J3;
function ty(e, t, n, r, o) {
  var a = -1, i = e.length;
  for (n || (n = tW), o || (o = []); ++a < i; ) {
    var s = e[a];
    t > 0 && n(s) ? t > 1 ? ty(s, t - 1, n, r, o) : eW(o, s) : r || (o[o.length] = s);
  }
  return o;
}
var nW = ty;
function rW(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), i = r(t), s = i.length; s--; ) {
      var l = i[e ? s : ++o];
      if (n(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var oW = rW, aW = oW, iW = aW(), sW = iW, cW = sW, lW = dd;
function uW(e, t) {
  return e && cW(e, t, lW);
}
var dW = uW, fW = ds;
function pW(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!fW(n))
      return e(n, r);
    for (var o = n.length, a = t ? o : -1, i = Object(n); (t ? a-- : ++a < o) && r(i[a], a, i) !== !1; )
      ;
    return n;
  };
}
var mW = pW, vW = dW, hW = mW, gW = hW(vW), bW = gW, yW = bW, wW = ds;
function xW(e, t) {
  var n = -1, r = wW(e) ? Array(e.length) : [];
  return yW(e, function(o, a, i) {
    r[++n] = t(o, a, i);
  }), r;
}
var CW = xW;
function SW(e, t) {
  var n = e.length;
  for (e.sort(t); n--; )
    e[n] = e[n].value;
  return e;
}
var EW = SW, pm = fa;
function PW(e, t) {
  if (e !== t) {
    var n = e !== void 0, r = e === null, o = e === e, a = pm(e), i = t !== void 0, s = t === null, l = t === t, u = pm(t);
    if (!s && !u && !a && e > t || a && i && l && !s && !u || r && i && l || !n && l || !o)
      return 1;
    if (!r && !a && !u && e < t || u && n && o && !r && !a || s && n && o || !i && o || !l)
      return -1;
  }
  return 0;
}
var NW = PW, RW = NW;
function _W(e, t, n) {
  for (var r = -1, o = e.criteria, a = t.criteria, i = o.length, s = n.length; ++r < i; ) {
    var l = RW(o[r], a[r]);
    if (l) {
      if (r >= s)
        return l;
      var u = n[r];
      return l * (u == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var TW = _W, vc = db, $W = od, MW = qb, OW = CW, DW = EW, AW = Hb, IW = TW, kW = fs, LW = zt;
function FW(e, t, n) {
  t.length ? t = vc(t, function(a) {
    return LW(a) ? function(i) {
      return $W(i, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [kW];
  var r = -1;
  t = vc(t, AW(MW));
  var o = OW(e, function(a, i, s) {
    var l = vc(t, function(u) {
      return u(a);
    });
    return { criteria: l, index: ++r, value: a };
  });
  return DW(o, function(a, i) {
    return IW(a, i, n);
  });
}
var BW = FW;
function WW(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var zW = WW, HW = zW, mm = Math.max;
function jW(e, t, n) {
  return t = mm(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = mm(r.length - t, 0), i = Array(a); ++o < a; )
      i[o] = r[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = r[o];
    return s[t] = n(i), HW(e, this, s);
  };
}
var VW = jW;
function UW(e) {
  return function() {
    return e;
  };
}
var GW = UW, YW = sr, KW = function() {
  try {
    var e = YW(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), XW = KW, qW = GW, vm = XW, ZW = fs, QW = vm ? function(e, t) {
  return vm(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: qW(t),
    writable: !0
  });
} : ZW, JW = QW, ez = 800, tz = 16, nz = Date.now;
function rz(e) {
  var t = 0, n = 0;
  return function() {
    var r = nz(), o = tz - (r - n);
    if (n = r, o > 0) {
      if (++t >= ez)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var oz = rz, az = JW, iz = oz, sz = iz(az), cz = sz, lz = fs, uz = VW, dz = cz;
function fz(e, t) {
  return dz(uz(e, t, lz), e + "");
}
var pz = fz, mz = ed, vz = ds, hz = ld, gz = Tn;
function bz(e, t, n) {
  if (!gz(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? vz(n) && hz(t, n.length) : r == "string" && t in n) ? mz(n[t], e) : !1;
}
var yz = bz, wz = nW, xz = BW, Cz = pz, hm = yz, Sz = Cz(function(e, t) {
  if (e == null)
    return [];
  var n = t.length;
  return n > 1 && hm(e, t[0], t[1]) ? t = [] : n > 2 && hm(t[0], t[1], t[2]) && (t = [t[0]]), xz(e, wz(t, 1), []);
}), Ez = Sz;
const Pz = /* @__PURE__ */ Qt(Ez);
function Go(e) {
  "@babel/helpers - typeof";
  return Go = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Go(e);
}
function bl() {
  return bl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, bl.apply(this, arguments);
}
function Nz(e, t) {
  return $z(e) || Tz(e, t) || _z(e, t) || Rz();
}
function Rz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _z(e, t) {
  if (e) {
    if (typeof e == "string") return gm(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gm(e, t);
  }
}
function gm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Tz(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, i, s = [], l = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (d) {
      u = !0, o = d;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (u) throw o;
      }
    }
    return s;
  }
}
function $z(e) {
  if (Array.isArray(e)) return e;
}
function bm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function hc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bm(Object(n), !0).forEach(function(r) {
      Mz(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bm(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Mz(e, t, n) {
  return t = Oz(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Oz(e) {
  var t = Dz(e, "string");
  return Go(t) == "symbol" ? t : String(t);
}
function Dz(e, t) {
  if (Go(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Go(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Az(e) {
  return Array.isArray(e) && xi(e[0]) && xi(e[1]) ? e.join(" ~ ") : e;
}
var Iz = function(t) {
  var n = t.separator, r = n === void 0 ? " : " : n, o = t.contentStyle, a = o === void 0 ? {} : o, i = t.itemStyle, s = i === void 0 ? {} : i, l = t.labelStyle, u = l === void 0 ? {} : l, d = t.payload, f = t.formatter, p = t.itemSorter, g = t.wrapperClassName, h = t.labelClassName, v = t.label, b = t.labelFormatter, y = t.accessibilityLayer, w = y === void 0 ? !1 : y, C = function() {
    if (d && d.length) {
      var B = {
        padding: 0,
        margin: 0
      }, Z = (p ? Pz(d, p) : d).map(function(F, H) {
        if (F.type === "none")
          return null;
        var j = hc({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: F.color || "#000"
        }, s), W = F.formatter || f || Az, O = F.value, V = F.name, ne = O, q = V;
        if (W && ne != null && q != null) {
          var A = W(O, V, F, H, d);
          if (Array.isArray(A)) {
            var D = Nz(A, 2);
            ne = D[0], q = D[1];
          } else
            ne = A;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ T.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(H),
            style: j
          }, xi(q) ? /* @__PURE__ */ T.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, q) : null, xi(q) ? /* @__PURE__ */ T.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, r) : null, /* @__PURE__ */ T.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, ne), /* @__PURE__ */ T.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, F.unit || ""))
        );
      });
      return /* @__PURE__ */ T.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: B
      }, Z);
    }
    return null;
  }, E = hc({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), S = hc({
    margin: 0
  }, u), P = !uk(v), x = P ? v : "", N = fn("recharts-default-tooltip", g), R = fn("recharts-tooltip-label", h);
  P && b && d !== void 0 && d !== null && (x = b(v, d));
  var M = w ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ T.createElement("div", bl({
    className: N,
    style: E
  }, M), /* @__PURE__ */ T.createElement("p", {
    className: R,
    style: S
  }, /* @__PURE__ */ T.isValidElement(x) ? x : "".concat(x)), C());
};
function Yo(e) {
  "@babel/helpers - typeof";
  return Yo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yo(e);
}
function ja(e, t, n) {
  return t = kz(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function kz(e) {
  var t = Lz(e, "string");
  return Yo(t) == "symbol" ? t : String(t);
}
function Lz(e, t) {
  if (Yo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Yo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _o = "recharts-tooltip-wrapper", Fz = {
  visibility: "hidden"
};
function Bz(e) {
  var t = e.coordinate, n = e.translateX, r = e.translateY;
  return fn(_o, ja(ja(ja(ja({}, "".concat(_o, "-right"), Mt(n) && t && Mt(t.x) && n >= t.x), "".concat(_o, "-left"), Mt(n) && t && Mt(t.x) && n < t.x), "".concat(_o, "-bottom"), Mt(r) && t && Mt(t.y) && r >= t.y), "".concat(_o, "-top"), Mt(r) && t && Mt(t.y) && r < t.y));
}
function ym(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.key, o = e.offsetTopLeft, a = e.position, i = e.reverseDirection, s = e.tooltipDimension, l = e.viewBox, u = e.viewBoxDimension;
  if (a && Mt(a[r]))
    return a[r];
  var d = n[r] - s - o, f = n[r] + o;
  if (t[r])
    return i[r] ? d : f;
  if (i[r]) {
    var p = d, g = l[r];
    return p < g ? Math.max(f, l[r]) : Math.max(d, l[r]);
  }
  var h = f + s, v = l[r] + u;
  return h > v ? Math.max(d, l[r]) : Math.max(f, l[r]);
}
function Wz(e) {
  var t = e.translateX, n = e.translateY, r = e.useTranslate3d;
  return {
    transform: r ? "translate3d(".concat(t, "px, ").concat(n, "px, 0)") : "translate(".concat(t, "px, ").concat(n, "px)")
  };
}
function zz(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.offsetTopLeft, o = e.position, a = e.reverseDirection, i = e.tooltipBox, s = e.useTranslate3d, l = e.viewBox, u, d, f;
  return i.height > 0 && i.width > 0 && n ? (d = ym({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "x",
    offsetTopLeft: r,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.width,
    viewBox: l,
    viewBoxDimension: l.width
  }), f = ym({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "y",
    offsetTopLeft: r,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.height,
    viewBox: l,
    viewBoxDimension: l.height
  }), u = Wz({
    translateX: d,
    translateY: f,
    useTranslate3d: s
  })) : u = Fz, {
    cssProperties: u,
    cssClasses: Bz({
      translateX: d,
      translateY: f,
      coordinate: n
    })
  };
}
function zr(e) {
  "@babel/helpers - typeof";
  return zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zr(e);
}
function wm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function xm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wm(Object(n), !0).forEach(function(r) {
      xl(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wm(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Hz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jz(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ry(r.key), r);
  }
}
function Vz(e, t, n) {
  return t && jz(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Uz(e, t, n) {
  return t = Ti(t), Gz(e, ny() ? Reflect.construct(t, n || [], Ti(e).constructor) : t.apply(e, n));
}
function Gz(e, t) {
  if (t && (zr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return yl(e);
}
function ny() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ny = function() {
    return !!e;
  })();
}
function Ti(e) {
  return Ti = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ti(e);
}
function yl(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Yz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && wl(e, t);
}
function wl(e, t) {
  return wl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, wl(e, t);
}
function xl(e, t, n) {
  return t = ry(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ry(e) {
  var t = Kz(e, "string");
  return zr(t) == "symbol" ? t : String(t);
}
function Kz(e, t) {
  if (zr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (zr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Cm = 1, Xz = /* @__PURE__ */ function(e) {
  Yz(t, e);
  function t() {
    var n;
    Hz(this, t);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return n = Uz(this, t, [].concat(o)), xl(yl(n), "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), xl(yl(n), "handleKeyDown", function(i) {
      if (i.key === "Escape") {
        var s, l, u, d;
        n.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (l = n.props.coordinate) === null || l === void 0 ? void 0 : l.x) !== null && s !== void 0 ? s : 0,
            y: (u = (d = n.props.coordinate) === null || d === void 0 ? void 0 : d.y) !== null && u !== void 0 ? u : 0
          }
        });
      }
    }), n;
  }
  return Vz(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        (Math.abs(r.width - this.state.lastBoundingBox.width) > Cm || Math.abs(r.height - this.state.lastBoundingBox.height) > Cm) && this.setState({
          lastBoundingBox: {
            width: r.width,
            height: r.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var r, o;
      this.props.active && this.updateBBox(), this.state.dismissed && (((r = this.props.coordinate) === null || r === void 0 ? void 0 : r.x) !== this.state.dismissedAtCoordinate.x || ((o = this.props.coordinate) === null || o === void 0 ? void 0 : o.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, l = o.animationEasing, u = o.children, d = o.coordinate, f = o.hasPayload, p = o.isAnimationActive, g = o.offset, h = o.position, v = o.reverseDirection, b = o.useTranslate3d, y = o.viewBox, w = o.wrapperStyle, C = zz({
        allowEscapeViewBox: i,
        coordinate: d,
        offsetTopLeft: g,
        position: h,
        reverseDirection: v,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: b,
        viewBox: y
      }), E = C.cssClasses, S = C.cssProperties, P = xm(xm({
        transition: p && a ? "transform ".concat(s, "ms ").concat(l) : void 0
      }, S), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && f ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, w);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ T.createElement("div", {
          tabIndex: -1,
          className: E,
          style: P,
          ref: function(N) {
            r.wrapperNode = N;
          }
        }, u)
      );
    }
  }]), t;
}(Xi), qz = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Zz = {
  isSsr: qz()
};
function Hr(e) {
  "@babel/helpers - typeof";
  return Hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hr(e);
}
function Sm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Em(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sm(Object(n), !0).forEach(function(r) {
      pd(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sm(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Qz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Jz(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ay(r.key), r);
  }
}
function eH(e, t, n) {
  return t && Jz(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function tH(e, t, n) {
  return t = $i(t), nH(e, oy() ? Reflect.construct(t, n || [], $i(e).constructor) : t.apply(e, n));
}
function nH(e, t) {
  if (t && (Hr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return rH(e);
}
function rH(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function oy() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (oy = function() {
    return !!e;
  })();
}
function $i(e) {
  return $i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, $i(e);
}
function oH(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Cl(e, t);
}
function Cl(e, t) {
  return Cl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Cl(e, t);
}
function pd(e, t, n) {
  return t = ay(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ay(e) {
  var t = aH(e, "string");
  return Hr(t) == "symbol" ? t : String(t);
}
function aH(e, t) {
  if (Hr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Hr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function iH(e) {
  return e.dataKey;
}
function sH(e, t) {
  return /* @__PURE__ */ T.isValidElement(e) ? /* @__PURE__ */ T.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ T.createElement(e, t) : /* @__PURE__ */ T.createElement(Iz, t);
}
var md = /* @__PURE__ */ function(e) {
  oH(t, e);
  function t() {
    return Qz(this, t), tH(this, t, arguments);
  }
  return eH(t, [{
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, l = o.animationEasing, u = o.content, d = o.coordinate, f = o.filterNull, p = o.isAnimationActive, g = o.offset, h = o.payload, v = o.payloadUniqBy, b = o.position, y = o.reverseDirection, w = o.useTranslate3d, C = o.viewBox, E = o.wrapperStyle, S = h ?? [];
      f && S.length && (S = Zb(h.filter(function(x) {
        return x.value != null && (x.hide !== !0 || r.props.includeHidden);
      }), v, iH));
      var P = S.length > 0;
      return /* @__PURE__ */ T.createElement(Xz, {
        allowEscapeViewBox: i,
        animationDuration: s,
        animationEasing: l,
        isAnimationActive: p,
        active: a,
        coordinate: d,
        hasPayload: P,
        offset: g,
        position: b,
        reverseDirection: y,
        useTranslate3d: w,
        viewBox: C,
        wrapperStyle: E
      }, sH(u, Em(Em({}, this.props), {}, {
        payload: S
      })));
    }
  }]), t;
}(Xi);
pd(md, "displayName", "Tooltip");
pd(md, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !Zz.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var cH = Jt, lH = function() {
  return cH.Date.now();
}, uH = lH, dH = /\s/;
function fH(e) {
  for (var t = e.length; t-- && dH.test(e.charAt(t)); )
    ;
  return t;
}
var pH = fH, mH = pH, vH = /^\s+/;
function hH(e) {
  return e && e.slice(0, mH(e) + 1).replace(vH, "");
}
var gH = hH, bH = gH, Pm = Tn, yH = fa, Nm = NaN, wH = /^[-+]0x[0-9a-f]+$/i, xH = /^0b[01]+$/i, CH = /^0o[0-7]+$/i, SH = parseInt;
function EH(e) {
  if (typeof e == "number")
    return e;
  if (yH(e))
    return Nm;
  if (Pm(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Pm(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = bH(e);
  var n = xH.test(e);
  return n || CH.test(e) ? SH(e.slice(2), n ? 2 : 8) : wH.test(e) ? Nm : +e;
}
var PH = EH, NH = Tn, gc = uH, Rm = PH, RH = "Expected a function", _H = Math.max, TH = Math.min;
function $H(e, t, n) {
  var r, o, a, i, s, l, u = 0, d = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(RH);
  t = Rm(t) || 0, NH(n) && (d = !!n.leading, f = "maxWait" in n, a = f ? _H(Rm(n.maxWait) || 0, t) : a, p = "trailing" in n ? !!n.trailing : p);
  function g(P) {
    var x = r, N = o;
    return r = o = void 0, u = P, i = e.apply(N, x), i;
  }
  function h(P) {
    return u = P, s = setTimeout(y, t), d ? g(P) : i;
  }
  function v(P) {
    var x = P - l, N = P - u, R = t - x;
    return f ? TH(R, a - N) : R;
  }
  function b(P) {
    var x = P - l, N = P - u;
    return l === void 0 || x >= t || x < 0 || f && N >= a;
  }
  function y() {
    var P = gc();
    if (b(P))
      return w(P);
    s = setTimeout(y, v(P));
  }
  function w(P) {
    return s = void 0, p && r ? g(P) : (r = o = void 0, i);
  }
  function C() {
    s !== void 0 && clearTimeout(s), u = 0, r = l = o = s = void 0;
  }
  function E() {
    return s === void 0 ? i : w(gc());
  }
  function S() {
    var P = gc(), x = b(P);
    if (r = arguments, o = this, l = P, x) {
      if (s === void 0)
        return h(l);
      if (f)
        return clearTimeout(s), s = setTimeout(y, t), g(l);
    }
    return s === void 0 && (s = setTimeout(y, t)), i;
  }
  return S.cancel = C, S.flush = E, S;
}
var MH = $H, OH = MH, DH = Tn, AH = "Expected a function";
function IH(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(AH);
  return DH(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), OH(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
var kH = IH;
const LH = /* @__PURE__ */ Qt(kH);
function Ko(e) {
  "@babel/helpers - typeof";
  return Ko = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ko(e);
}
function _m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Va(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _m(Object(n), !0).forEach(function(r) {
      FH(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _m(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function FH(e, t, n) {
  return t = BH(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function BH(e) {
  var t = WH(e, "string");
  return Ko(t) == "symbol" ? t : String(t);
}
function WH(e, t) {
  if (Ko(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ko(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zH(e, t) {
  return UH(e) || VH(e, t) || jH(e, t) || HH();
}
function HH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jH(e, t) {
  if (e) {
    if (typeof e == "string") return Tm(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Tm(e, t);
  }
}
function Tm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function VH(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, i, s = [], l = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (d) {
      u = !0, o = d;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (u) throw o;
      }
    }
    return s;
  }
}
function UH(e) {
  if (Array.isArray(e)) return e;
}
var GH = /* @__PURE__ */ Ze(function(e, t) {
  var n = e.aspect, r = e.initialDimension, o = r === void 0 ? {
    width: -1,
    height: -1
  } : r, a = e.width, i = a === void 0 ? "100%" : a, s = e.height, l = s === void 0 ? "100%" : s, u = e.minWidth, d = u === void 0 ? 0 : u, f = e.minHeight, p = e.maxHeight, g = e.children, h = e.debounce, v = h === void 0 ? 0 : h, b = e.id, y = e.className, w = e.onResize, C = e.style, E = C === void 0 ? {} : C, S = ze(null), P = ze();
  P.current = w, Z1(t, function() {
    return Object.defineProperty(S.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), S.current;
      },
      configurable: !0
    });
  });
  var x = at({
    containerWidth: o.width,
    containerHeight: o.height
  }), N = zH(x, 2), R = N[0], M = N[1], k = tr(function(Z, F) {
    M(function(H) {
      var j = Math.round(Z), W = Math.round(F);
      return H.containerWidth === j && H.containerHeight === W ? H : {
        containerWidth: j,
        containerHeight: W
      };
    });
  }, []);
  Oe(function() {
    var Z = function(V) {
      var ne, q = V[0].contentRect, A = q.width, D = q.height;
      k(A, D), (ne = P.current) === null || ne === void 0 || ne.call(P, A, D);
    };
    v > 0 && (Z = LH(Z, v, {
      trailing: !0,
      leading: !1
    }));
    var F = new ResizeObserver(Z), H = S.current.getBoundingClientRect(), j = H.width, W = H.height;
    return k(j, W), F.observe(S.current), function() {
      F.disconnect();
    };
  }, [k, v]);
  var B = dn(function() {
    var Z = R.containerWidth, F = R.containerHeight;
    if (Z < 0 || F < 0)
      return null;
    fi(Wa(i) || Wa(l), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, i, l), fi(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
    var H = Wa(i) ? Z : i, j = Wa(l) ? F : l;
    n && n > 0 && (H ? j = H / n : j && (H = j * n), p && j > p && (j = p)), fi(H > 0 || j > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, H, j, i, l, d, f, n);
    var W = !Array.isArray(g) && kp.isElement(g) && Ok(g.type).endsWith("Chart");
    return T.Children.map(g, function(O) {
      return kp.isElement(O) ? /* @__PURE__ */ qi(O, Va({
        width: H,
        height: j
      }, W ? {
        style: Va({
          height: "100%",
          width: "100%",
          maxHeight: j,
          maxWidth: H
        }, O.props.style)
      } : {})) : O;
    });
  }, [n, g, l, p, f, d, R, i]);
  return /* @__PURE__ */ T.createElement("div", {
    id: b ? "".concat(b) : void 0,
    className: fn("recharts-responsive-container", y),
    style: Va(Va({}, E), {}, {
      width: i,
      height: l,
      minWidth: d,
      minHeight: f,
      maxHeight: p
    }),
    ref: S
  }, B);
});
function it() {
  return it = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, it.apply(null, arguments);
}
const YH = { light: "", dark: ".dark" }, iy = c.createContext(null);
function sy() {
  const e = c.useContext(iy);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const KH = c.forwardRef(({ id: e, className: t, children: n, config: r, ...o }, a) => {
  const i = c.useId(), s = `chart-${e || i.replace(/:/g, "")}`;
  return /* @__PURE__ */ m(iy.Provider, { value: { config: r }, children: /* @__PURE__ */ ee(
    "div",
    {
      "data-chart": s,
      ref: a,
      className: $(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ m(XH, { id: s, config: r }),
        /* @__PURE__ */ m(GH, { children: n })
      ]
    }
  ) });
});
KH.displayName = "Chart";
const XH = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(
    ([r, o]) => o.theme || o.color
  );
  return n.length ? /* @__PURE__ */ m(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(YH).map(
          ([r, o]) => `
${o} [data-chart=${e}] {
${n.map(([a, i]) => {
            var l;
            const s = ((l = i.theme) == null ? void 0 : l[r]) || i.color;
            return s ? `  --color-${a}: ${s};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, oee = md, qH = c.forwardRef(
  ({
    active: e,
    payload: t,
    className: n,
    indicator: r = "dot",
    hideLabel: o = !1,
    hideIndicator: a = !1,
    label: i,
    labelFormatter: s,
    labelClassName: l,
    formatter: u,
    color: d,
    nameKey: f,
    labelKey: p
  }, g) => {
    const { config: h } = sy(), v = c.useMemo(() => {
      var S;
      if (o || !(t != null && t.length))
        return null;
      const [y] = t, w = `${p || y.dataKey || y.name || "value"}`, C = Sl(h, y, w), E = !p && typeof i == "string" ? ((S = h[i]) == null ? void 0 : S.label) || i : C == null ? void 0 : C.label;
      return s ? /* @__PURE__ */ m("div", { className: $("font-medium", l), children: s(E, t) }) : E ? /* @__PURE__ */ m("div", { className: $("font-medium", l), children: E }) : null;
    }, [
      i,
      s,
      t,
      o,
      l,
      h,
      p
    ]);
    if (!e || !(t != null && t.length))
      return null;
    const b = t.length === 1 && r !== "dot";
    return /* @__PURE__ */ ee(
      "div",
      {
        ref: g,
        className: $(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          n
        ),
        children: [
          b ? null : v,
          /* @__PURE__ */ m("div", { className: "grid gap-1.5", children: t.map((y, w) => {
            const C = `${f || y.name || y.dataKey || "value"}`, E = Sl(h, y, C), S = d || y.payload.fill || y.color;
            return /* @__PURE__ */ m(
              "div",
              {
                className: $(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  r === "dot" && "items-center"
                ),
                children: u && (y == null ? void 0 : y.value) !== void 0 && y.name ? u(y.value, y.name, y, w, y.payload) : /* @__PURE__ */ ee(Fe, { children: [
                  E != null && E.icon ? /* @__PURE__ */ m(E.icon, {}) : !a && /* @__PURE__ */ m(
                    "div",
                    {
                      className: $(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": r === "dot",
                          "w-1": r === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
                          "my-0.5": b && r === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": S,
                        "--color-border": S
                      }
                    }
                  ),
                  /* @__PURE__ */ ee(
                    "div",
                    {
                      className: $(
                        "flex flex-1 justify-between leading-none",
                        b ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ ee("div", { className: "grid gap-1.5", children: [
                          b ? v : null,
                          /* @__PURE__ */ m("span", { className: "text-muted-foreground", children: (E == null ? void 0 : E.label) || y.name })
                        ] }),
                        y.value && /* @__PURE__ */ m("span", { className: "font-mono font-medium tabular-nums text-foreground", children: y.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              y.dataKey
            );
          }) })
        ]
      }
    );
  }
);
qH.displayName = "ChartTooltip";
const aee = fd, ZH = c.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: o }, a) => {
    const { config: i } = sy();
    return n != null && n.length ? /* @__PURE__ */ m(
      "div",
      {
        ref: a,
        className: $(
          "flex items-center justify-center gap-4",
          r === "top" ? "pb-3" : "pt-3",
          e
        ),
        children: n.map((s) => {
          const l = `${o || s.dataKey || "value"}`, u = Sl(i, s, l);
          return /* @__PURE__ */ ee(
            "div",
            {
              className: $(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                u != null && u.icon && !t ? /* @__PURE__ */ m(u.icon, {}) : /* @__PURE__ */ m(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-[2px]",
                    style: {
                      backgroundColor: s.color
                    }
                  }
                ),
                u == null ? void 0 : u.label
              ]
            },
            s.value
          );
        })
      }
    ) : null;
  }
);
ZH.displayName = "ChartLegend";
function Sl(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = n;
  return n in t && typeof t[n] == "string" ? o = t[n] : r && n in r && typeof r[n] == "string" && (o = r[n]), o in e ? e[o] : e[n];
}
function po(e) {
  const t = c.useRef({ value: e, previous: e });
  return c.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function pa(e) {
  const [t, n] = c.useState(void 0);
  return Ce(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let i, s;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          i = u.inlineSize, s = u.blockSize;
        } else
          i = e.offsetWidth, s = e.offsetHeight;
        n({ width: i, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var vd = "Checkbox", [QH, iee] = De(vd), [JH, ej] = QH(vd), cy = c.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: l = "on",
      onCheckedChange: u,
      ...d
    } = e, [f, p] = c.useState(null), g = te(t, (C) => p(C)), h = c.useRef(!1), v = f ? !!f.closest("form") : !0, [b = !1, y] = Me({
      prop: o,
      defaultProp: a,
      onChange: u
    }), w = c.useRef(b);
    return c.useEffect(() => {
      const C = f == null ? void 0 : f.form;
      if (C) {
        const E = () => y(w.current);
        return C.addEventListener("reset", E), () => C.removeEventListener("reset", E);
      }
    }, [f, y]), /* @__PURE__ */ ee(JH, { scope: n, state: b, disabled: s, children: [
      /* @__PURE__ */ m(
        Y.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": jn(b) ? "mixed" : b,
          "aria-required": i,
          "data-state": dy(b),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: l,
          ...d,
          ref: g,
          onKeyDown: I(e.onKeyDown, (C) => {
            C.key === "Enter" && C.preventDefault();
          }),
          onClick: I(e.onClick, (C) => {
            y((E) => jn(E) ? !0 : !E), v && (h.current = C.isPropagationStopped(), h.current || C.stopPropagation());
          })
        }
      ),
      v && /* @__PURE__ */ m(
        tj,
        {
          control: f,
          bubbles: !h.current,
          name: r,
          value: l,
          checked: b,
          required: i,
          disabled: s,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
cy.displayName = vd;
var ly = "CheckboxIndicator", uy = c.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = ej(ly, n);
    return /* @__PURE__ */ m(Be, { present: r || jn(a.state) || a.state === !0, children: /* @__PURE__ */ m(
      Y.span,
      {
        "data-state": dy(a.state),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
uy.displayName = ly;
var tj = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = c.useRef(null), i = po(n), s = pa(t);
  return c.useEffect(() => {
    const l = a.current, u = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(u, "checked").set;
    if (i !== n && f) {
      const p = new Event("click", { bubbles: r });
      l.indeterminate = jn(n), f.call(l, jn(n) ? !1 : n), l.dispatchEvent(p);
    }
  }, [i, n, r]), /* @__PURE__ */ m(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: jn(n) ? !1 : n,
      ...o,
      tabIndex: -1,
      ref: a,
      style: {
        ...e.style,
        ...s,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function jn(e) {
  return e === "indeterminate";
}
function dy(e) {
  return jn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var fy = cy, nj = uy;
const rj = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  fy,
  {
    ref: n,
    className: $(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ m(
      nj,
      {
        className: $("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ m(Zr, { className: "h-4 w-4" })
      }
    )
  }
));
rj.displayName = fy.displayName;
const see = ch, cee = xu, lee = Su;
var $m = 1, oj = 0.9, aj = 0.8, ij = 0.17, bc = 0.1, yc = 0.999, sj = 0.9999, cj = 0.99, lj = /[\\\/_+.#"@\[\(\{&]/, uj = /[\\\/_+.#"@\[\(\{&]/g, dj = /[\s-]/, py = /[\s-]/g;
function El(e, t, n, r, o, a, i) {
  if (a === t.length) return o === e.length ? $m : cj;
  var s = `${o},${a}`;
  if (i[s] !== void 0) return i[s];
  for (var l = r.charAt(a), u = n.indexOf(l, o), d = 0, f, p, g, h; u >= 0; ) f = El(e, t, n, r, u + 1, a + 1, i), f > d && (u === o ? f *= $m : lj.test(e.charAt(u - 1)) ? (f *= aj, g = e.slice(o, u - 1).match(uj), g && o > 0 && (f *= Math.pow(yc, g.length))) : dj.test(e.charAt(u - 1)) ? (f *= oj, h = e.slice(o, u - 1).match(py), h && o > 0 && (f *= Math.pow(yc, h.length))) : (f *= ij, o > 0 && (f *= Math.pow(yc, u - o))), e.charAt(u) !== t.charAt(a) && (f *= sj)), (f < bc && n.charAt(u - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(u - 1) !== r.charAt(a)) && (p = El(e, t, n, r, u + 1, a + 2, i), p * bc > f && (f = p * bc)), f > d && (d = f), u = n.indexOf(l, u + 1);
  return i[s] = d, d;
}
function Mm(e) {
  return e.toLowerCase().replace(py, " ");
}
function fj(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, El(e, t, Mm(e), Mm(t), 0, 0, {});
}
function Dr(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o);
  };
}
function pj(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function my(...e) {
  return (t) => e.forEach(
    (n) => pj(n, t)
  );
}
function ma(...e) {
  return tr(my(...e), e);
}
function mj(e, t) {
  const n = /* @__PURE__ */ At(t);
  function r(a) {
    const { children: i, ...s } = a, l = dn(
      () => s,
      Object.values(s)
    );
    return /* @__PURE__ */ $e(n.Provider, {
      value: l
    }, i);
  }
  function o(a) {
    const i = Zt(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return r.displayName = e + "Provider", [
    r,
    o
  ];
}
function vj(e, t = []) {
  let n = [];
  function r(a, i) {
    const s = /* @__PURE__ */ At(i), l = n.length;
    n = [
      ...n,
      i
    ];
    function u(f) {
      const { scope: p, children: g, ...h } = f, v = (p == null ? void 0 : p[e][l]) || s, b = dn(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ $e(v.Provider, {
        value: b
      }, g);
    }
    function d(f, p) {
      const g = (p == null ? void 0 : p[e][l]) || s, h = Zt(g);
      if (h) return h;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return u.displayName = a + "Provider", [
      u,
      d
    ];
  }
  const o = () => {
    const a = n.map((i) => /* @__PURE__ */ At(i));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return dn(
        () => ({
          [`__scope${e}`]: {
            ...s,
            [e]: l
          }
        }),
        [
          s,
          l
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    hj(o, ...t)
  ];
}
function hj(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(a) {
      const i = r.reduce((s, { useScope: l, scopeName: u }) => {
        const f = l(a)[`__scope${u}`];
        return {
          ...s,
          ...f
        };
      }, {});
      return dn(
        () => ({
          [`__scope${t.scopeName}`]: i
        }),
        [
          i
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
const gj = globalThis != null && globalThis.document ? ra : () => {
}, bj = c.useId || (() => {
});
let yj = 0;
function wc(e) {
  const [t, n] = c.useState(bj());
  return gj(() => {
    n(
      (r) => r ?? String(yj++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function vy(e) {
  const t = ze(e);
  return Oe(() => {
    t.current = e;
  }), dn(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function wj({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = xj({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, i = a ? e : r, s = vy(n), l = tr((u) => {
    if (a) {
      const f = typeof u == "function" ? u(e) : u;
      f !== e && s(f);
    } else o(u);
  }, [
    a,
    e,
    o,
    s
  ]);
  return [
    i,
    l
  ];
}
function xj({ defaultProp: e, onChange: t }) {
  const n = at(e), [r] = n, o = ze(r), a = vy(t);
  return Oe(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const hd = /* @__PURE__ */ Ze((e, t) => {
  const { children: n, ...r } = e, o = Hn.toArray(n), a = o.find(Sj);
  if (a) {
    const i = a.props.children, s = o.map((l) => l === a ? Hn.count(i) > 1 ? Hn.only(null) : /* @__PURE__ */ Bo(i) ? i.props.children : null : l);
    return /* @__PURE__ */ $e(Pl, it({}, r, {
      ref: t
    }), /* @__PURE__ */ Bo(i) ? /* @__PURE__ */ qi(i, void 0, s) : null);
  }
  return /* @__PURE__ */ $e(Pl, it({}, r, {
    ref: t
  }), n);
});
hd.displayName = "Slot";
const Pl = /* @__PURE__ */ Ze((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Bo(n) ? /* @__PURE__ */ qi(n, {
    ...Ej(r, n.props),
    ref: t ? my(t, n.ref) : n.ref
  }) : Hn.count(n) > 1 ? Hn.only(null) : null;
});
Pl.displayName = "SlotClone";
const Cj = ({ children: e }) => /* @__PURE__ */ $e(rh, null, e);
function Sj(e) {
  return /* @__PURE__ */ Bo(e) && e.type === Cj;
}
function Ej(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      a(...s), o(...s);
    } : o && (n[r] = o) : r === "style" ? n[r] = {
      ...o,
      ...a
    } : r === "className" && (n[r] = [
      o,
      a
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
const Pj = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Rt = Pj.reduce((e, t) => {
  const n = /* @__PURE__ */ Ze((r, o) => {
    const { asChild: a, ...i } = r, s = a ? hd : t;
    return Oe(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ $e(s, it({}, i, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function Nj(e, t) {
  e && oh(
    () => e.dispatchEvent(t)
  );
}
function gd(e) {
  const t = ze(e);
  return Oe(() => {
    t.current = e;
  }), dn(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function Rj(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = gd(e);
  Oe(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const Nl = "dismissableLayer.update", _j = "dismissableLayer.pointerDownOutside", Tj = "dismissableLayer.focusOutside";
let Om;
const $j = /* @__PURE__ */ At({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Mj = /* @__PURE__ */ Ze((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: i, onInteractOutside: s, onDismiss: l, ...u } = e, d = Zt($j), [f, p] = at(null), g = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = at({}), v = ma(
    t,
    (N) => p(N)
  ), b = Array.from(d.layers), [y] = [
    ...d.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = b.indexOf(y), C = f ? b.indexOf(f) : -1, E = d.layersWithOutsidePointerEventsDisabled.size > 0, S = C >= w, P = Oj((N) => {
    const R = N.target, M = [
      ...d.branches
    ].some(
      (k) => k.contains(R)
    );
    !S || M || (a == null || a(N), s == null || s(N), N.defaultPrevented || l == null || l());
  }, g), x = Dj((N) => {
    const R = N.target;
    [
      ...d.branches
    ].some(
      (k) => k.contains(R)
    ) || (i == null || i(N), s == null || s(N), N.defaultPrevented || l == null || l());
  }, g);
  return Rj((N) => {
    C === d.layers.size - 1 && (o == null || o(N), !N.defaultPrevented && l && (N.preventDefault(), l()));
  }, g), Oe(() => {
    if (f)
      return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Om = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), Dm(), () => {
        r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = Om);
      };
  }, [
    f,
    g,
    r,
    d
  ]), Oe(() => () => {
    f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), Dm());
  }, [
    f,
    d
  ]), Oe(() => {
    const N = () => h({});
    return document.addEventListener(Nl, N), () => document.removeEventListener(Nl, N);
  }, []), /* @__PURE__ */ $e(Rt.div, it({}, u, {
    ref: v,
    style: {
      pointerEvents: E ? S ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: Dr(e.onFocusCapture, x.onFocusCapture),
    onBlurCapture: Dr(e.onBlurCapture, x.onBlurCapture),
    onPointerDownCapture: Dr(e.onPointerDownCapture, P.onPointerDownCapture)
  }));
});
function Oj(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = gd(e), r = ze(!1), o = ze(() => {
  });
  return Oe(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let u = function() {
          hy(_j, n, l, {
            discrete: !0
          });
        };
        const l = {
          originalEvent: s
        };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = u, t.addEventListener("click", o.current, {
          once: !0
        })) : u();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Dj(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = gd(e), r = ze(!1);
  return Oe(() => {
    const o = (a) => {
      a.target && !r.current && hy(Tj, n, {
        originalEvent: a
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Dm() {
  const e = new CustomEvent(Nl);
  document.dispatchEvent(e);
}
function hy(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? Nj(o, a) : o.dispatchEvent(a);
}
function Am(e) {
  const t = ze(e);
  return Oe(() => {
    t.current = e;
  }), dn(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
const xc = "focusScope.autoFocusOnMount", Cc = "focusScope.autoFocusOnUnmount", Im = {
  bubbles: !1,
  cancelable: !0
}, Aj = /* @__PURE__ */ Ze((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...i } = e, [s, l] = at(null), u = Am(o), d = Am(a), f = ze(null), p = ma(
    t,
    (v) => l(v)
  ), g = ze({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  Oe(() => {
    if (r) {
      let v = function(C) {
        if (g.paused || !s) return;
        const E = C.target;
        s.contains(E) ? f.current = E : En(f.current, {
          select: !0
        });
      }, b = function(C) {
        if (g.paused || !s) return;
        const E = C.relatedTarget;
        E !== null && (s.contains(E) || En(f.current, {
          select: !0
        }));
      }, y = function(C) {
        if (document.activeElement === document.body)
          for (const S of C) S.removedNodes.length > 0 && En(s);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", b);
      const w = new MutationObserver(y);
      return s && w.observe(s, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", b), w.disconnect();
      };
    }
  }, [
    r,
    s,
    g.paused
  ]), Oe(() => {
    if (s) {
      Lm.add(g);
      const v = document.activeElement;
      if (!s.contains(v)) {
        const y = new CustomEvent(xc, Im);
        s.addEventListener(xc, u), s.dispatchEvent(y), y.defaultPrevented || (Ij(Wj(gy(s)), {
          select: !0
        }), document.activeElement === v && En(s));
      }
      return () => {
        s.removeEventListener(xc, u), setTimeout(() => {
          const y = new CustomEvent(Cc, Im);
          s.addEventListener(Cc, d), s.dispatchEvent(y), y.defaultPrevented || En(v ?? document.body, {
            select: !0
          }), s.removeEventListener(Cc, d), Lm.remove(g);
        }, 0);
      };
    }
  }, [
    s,
    u,
    d,
    g
  ]);
  const h = tr((v) => {
    if (!n && !r || g.paused) return;
    const b = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, y = document.activeElement;
    if (b && y) {
      const w = v.currentTarget, [C, E] = kj(w);
      C && E ? !v.shiftKey && y === E ? (v.preventDefault(), n && En(C, {
        select: !0
      })) : v.shiftKey && y === C && (v.preventDefault(), n && En(E, {
        select: !0
      })) : y === w && v.preventDefault();
    }
  }, [
    n,
    r,
    g.paused
  ]);
  return /* @__PURE__ */ $e(Rt.div, it({
    tabIndex: -1
  }, i, {
    ref: p,
    onKeyDown: h
  }));
});
function Ij(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (En(r, {
      select: t
    }), document.activeElement !== n) return;
}
function kj(e) {
  const t = gy(e), n = km(t, e), r = km(t.reverse(), e);
  return [
    n,
    r
  ];
}
function gy(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function km(e, t) {
  for (const n of e)
    if (!Lj(n, {
      upTo: t
    })) return n;
}
function Lj(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Fj(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function En(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Fj(e) && t && e.select();
  }
}
const Lm = Bj();
function Bj() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Fm(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Fm(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Fm(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Wj(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const zj = /* @__PURE__ */ Ze((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ vn.createPortal(/* @__PURE__ */ $e(Rt.div, it({}, o, {
    ref: t
  })), r) : null;
}), Bm = globalThis != null && globalThis.document ? ra : () => {
};
function Hj(e, t) {
  return Q1((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const ms = (e) => {
  const { present: t, children: n } = e, r = jj(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Hn.only(n), a = ma(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ qi(o, {
    ref: a
  }) : null;
};
ms.displayName = "Presence";
function jj(e) {
  const [t, n] = at(), r = ze({}), o = ze(e), a = ze("none"), i = e ? "mounted" : "unmounted", [s, l] = Hj(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return Oe(() => {
    const u = Ua(r.current);
    a.current = s === "mounted" ? u : "none";
  }, [
    s
  ]), Bm(() => {
    const u = r.current, d = o.current;
    if (d !== e) {
      const p = a.current, g = Ua(u);
      e ? l("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(d && p !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    l
  ]), Bm(() => {
    if (t) {
      const u = (f) => {
        const g = Ua(r.current).includes(f.animationName);
        f.target === t && g && oh(
          () => l("ANIMATION_END")
        );
      }, d = (f) => {
        f.target === t && (a.current = Ua(r.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      l("ANIMATION_END");
  }, [
    t,
    l
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(s),
    ref: tr((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function Ua(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let Sc = 0;
function Vj() {
  Oe(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Wm()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Wm()), Sc++, () => {
      Sc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Sc--;
    };
  }, []);
}
function Wm() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var by = ro(), Ec = function() {
}, vs = c.forwardRef(function(e, t) {
  var n = c.useRef(null), r = c.useState({
    onScrollCapture: Ec,
    onWheelCapture: Ec,
    onTouchMoveCapture: Ec
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, g = e.noIsolation, h = e.inert, v = e.allowPinchZoom, b = e.as, y = b === void 0 ? "div" : b, w = nr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), C = p, E = no([n, t]), S = he(he({}, w), o);
  return c.createElement(
    c.Fragment,
    null,
    d && c.createElement(C, { sideCar: by, removeScrollBar: u, shards: f, noIsolation: g, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    i ? c.cloneElement(c.Children.only(s), he(he({}, S), { ref: E })) : c.createElement(y, he({}, S, { className: l, ref: E }), s)
  );
});
vs.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
vs.classNames = {
  fullWidth: un,
  zeroRight: ln
};
var Rl = !1;
if (typeof window < "u")
  try {
    var Ga = Object.defineProperty({}, "passive", {
      get: function() {
        return Rl = !0, !0;
      }
    });
    window.addEventListener("test", Ga, Ga), window.removeEventListener("test", Ga, Ga);
  } catch {
    Rl = !1;
  }
var vr = Rl ? { passive: !1 } : !1, Uj = function(e) {
  return e.tagName === "TEXTAREA";
}, yy = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Uj(e) && n[t] === "visible")
  );
}, Gj = function(e) {
  return yy(e, "overflowY");
}, Yj = function(e) {
  return yy(e, "overflowX");
}, zm = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = wy(e, n);
    if (r) {
      var o = xy(e, n), a = o[1], i = o[2];
      if (a > i)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, Kj = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Xj = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, wy = function(e, t) {
  return e === "v" ? Gj(t) : Yj(t);
}, xy = function(e, t) {
  return e === "v" ? Kj(t) : Xj(t);
}, qj = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Zj = function(e, t, n, r, o) {
  var a = qj(e, window.getComputedStyle(t).direction), i = a * r, s = n.target, l = t.contains(s), u = !1, d = i > 0, f = 0, p = 0;
  do {
    var g = xy(e, s), h = g[0], v = g[1], b = g[2], y = v - b - a * h;
    (h || y) && wy(e, s) && (f += y, p += h), s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (d && f === 0 || !d && p === 0) && (u = !0), u;
}, Ya = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Hm = function(e) {
  return [e.deltaX, e.deltaY];
}, jm = function(e) {
  return e && "current" in e ? e.current : e;
}, Qj = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Jj = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, e6 = 0, hr = [];
function t6(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), o = c.useState(e6++)[0], a = c.useState(function() {
    return rr();
  })[0], i = c.useRef(e);
  c.useEffect(function() {
    i.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = to([e.lockRef.current], (e.shards || []).map(jm), !0).filter(Boolean);
      return v.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = c.useCallback(function(v, b) {
    if ("touches" in v && v.touches.length === 2)
      return !i.current.allowPinchZoom;
    var y = Ya(v), w = n.current, C = "deltaX" in v ? v.deltaX : w[0] - y[0], E = "deltaY" in v ? v.deltaY : w[1] - y[1], S, P = v.target, x = Math.abs(C) > Math.abs(E) ? "h" : "v";
    if ("touches" in v && x === "h" && P.type === "range")
      return !1;
    var N = zm(x, P);
    if (!N)
      return !0;
    if (N ? S = x : (S = x === "v" ? "h" : "v", N = zm(x, P)), !N)
      return !1;
    if (!r.current && "changedTouches" in v && (C || E) && (r.current = S), !S)
      return !0;
    var R = r.current || S;
    return Zj(R, b, v, R === "h" ? C : E);
  }, []), l = c.useCallback(function(v) {
    var b = v;
    if (!(!hr.length || hr[hr.length - 1] !== a)) {
      var y = "deltaY" in b ? Hm(b) : Ya(b), w = t.current.filter(function(S) {
        return S.name === b.type && S.target === b.target && Qj(S.delta, y);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var C = (i.current.shards || []).map(jm).filter(Boolean).filter(function(S) {
          return S.contains(b.target);
        }), E = C.length > 0 ? s(b, C[0]) : !i.current.noIsolation;
        E && b.cancelable && b.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(v, b, y, w) {
    var C = { name: v, delta: b, target: y, should: w };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== C;
      });
    }, 1);
  }, []), d = c.useCallback(function(v) {
    n.current = Ya(v), r.current = void 0;
  }, []), f = c.useCallback(function(v) {
    u(v.type, Hm(v), v.target, s(v, e.lockRef.current));
  }, []), p = c.useCallback(function(v) {
    u(v.type, Ya(v), v.target, s(v, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return hr.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, vr), document.addEventListener("touchmove", l, vr), document.addEventListener("touchstart", d, vr), function() {
      hr = hr.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", l, vr), document.removeEventListener("touchmove", l, vr), document.removeEventListener("touchstart", d, vr);
    };
  }, []);
  var g = e.removeScrollBar, h = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    h ? c.createElement(a, { styles: Jj(o) }) : null,
    g ? c.createElement(ao, { gapMode: "margin" }) : null
  );
}
const n6 = oo(by, t6);
var Cy = c.forwardRef(function(e, t) {
  return c.createElement(vs, he({}, e, { ref: t, sideCar: n6 }));
});
Cy.classNames = vs.classNames;
const Sy = "Dialog", [Ey, uee] = vj(Sy), [r6, cr] = Ey(Sy), o6 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: i = !0 } = e, s = ze(null), l = ze(null), [u = !1, d] = wj({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ $e(r6, {
    scope: t,
    triggerRef: s,
    contentRef: l,
    contentId: wc(),
    titleId: wc(),
    descriptionId: wc(),
    open: u,
    onOpenChange: d,
    onOpenToggle: tr(
      () => d(
        (f) => !f
      ),
      [
        d
      ]
    ),
    modal: i
  }, n);
}, Py = "DialogPortal", [a6, Ny] = Ey(Py, {
  forceMount: void 0
}), i6 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = cr(Py, t);
  return /* @__PURE__ */ $e(a6, {
    scope: t,
    forceMount: n
  }, Hn.map(
    r,
    (i) => /* @__PURE__ */ $e(ms, {
      present: n || a.open
    }, /* @__PURE__ */ $e(zj, {
      asChild: !0,
      container: o
    }, i))
  ));
}, _l = "DialogOverlay", s6 = /* @__PURE__ */ Ze((e, t) => {
  const n = Ny(_l, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = cr(_l, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ $e(ms, {
    present: r || a.open
  }, /* @__PURE__ */ $e(c6, it({}, o, {
    ref: t
  }))) : null;
}), c6 = /* @__PURE__ */ Ze((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = cr(_l, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ $e(Cy, {
      as: hd,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ $e(Rt.div, it({
      "data-state": _y(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), jr = "DialogContent", l6 = /* @__PURE__ */ Ze((e, t) => {
  const n = Ny(jr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = cr(jr, e.__scopeDialog);
  return /* @__PURE__ */ $e(ms, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ $e(u6, it({}, o, {
    ref: t
  })) : /* @__PURE__ */ $e(d6, it({}, o, {
    ref: t
  })));
}), u6 = /* @__PURE__ */ Ze((e, t) => {
  const n = cr(jr, e.__scopeDialog), r = ze(null), o = ma(t, n.contentRef, r);
  return Oe(() => {
    const a = r.current;
    if (a) return io(a);
  }, []), /* @__PURE__ */ $e(Ry, it({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: Dr(e.onCloseAutoFocus, (a) => {
      var i;
      a.preventDefault(), (i = n.triggerRef.current) === null || i === void 0 || i.focus();
    }),
    onPointerDownOutside: Dr(e.onPointerDownOutside, (a) => {
      const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
      (i.button === 2 || s) && a.preventDefault();
    }),
    onFocusOutside: Dr(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), d6 = /* @__PURE__ */ Ze((e, t) => {
  const n = cr(jr, e.__scopeDialog), r = ze(!1), o = ze(!1);
  return /* @__PURE__ */ $e(Ry, it({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var i;
      if ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, a), !a.defaultPrevented) {
        var s;
        r.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus(), a.preventDefault();
      }
      r.current = !1, o.current = !1;
    },
    onInteractOutside: (a) => {
      var i, s;
      (i = e.onInteractOutside) === null || i === void 0 || i.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
      const l = a.target;
      ((s = n.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(l)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
    }
  }));
}), Ry = /* @__PURE__ */ Ze((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = cr(jr, n), l = ze(null), u = ma(t, l);
  return Vj(), /* @__PURE__ */ $e(rh, null, /* @__PURE__ */ $e(Aj, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ $e(Mj, it({
    role: "dialog",
    id: s.contentId,
    "aria-describedby": s.descriptionId,
    "aria-labelledby": s.titleId,
    "data-state": _y(s.open)
  }, i, {
    ref: u,
    onDismiss: () => s.onOpenChange(!1)
  }))), !1);
}), f6 = "DialogTitle";
function _y(e) {
  return e ? "open" : "closed";
}
const p6 = "DialogTitleWarning";
mj(p6, {
  contentName: jr,
  titleName: f6,
  docsSlug: "dialog"
});
const m6 = o6, v6 = i6, h6 = s6, g6 = l6;
var To = '[cmdk-group=""]', Pc = '[cmdk-group-items=""]', b6 = '[cmdk-group-heading=""]', bd = '[cmdk-item=""]', Vm = `${bd}:not([aria-disabled="true"])`, Tl = "cmdk-item-select", Wn = "data-value", y6 = (e, t, n) => fj(e, t, n), Ty = c.createContext(void 0), va = () => c.useContext(Ty), $y = c.createContext(void 0), yd = () => c.useContext($y), My = c.createContext(void 0), Oy = c.forwardRef((e, t) => {
  let n = Rr(() => {
    var A, D;
    return { search: "", value: (D = (A = e.value) != null ? A : e.defaultValue) != null ? D : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = Rr(() => /* @__PURE__ */ new Set()), o = Rr(() => /* @__PURE__ */ new Map()), a = Rr(() => /* @__PURE__ */ new Map()), i = Rr(() => /* @__PURE__ */ new Set()), s = Dy(e), { label: l, children: u, value: d, onValueChange: f, filter: p, shouldFilter: g, loop: h, disablePointerSelection: v = !1, vimBindings: b = !0, ...y } = e, w = c.useId(), C = c.useId(), E = c.useId(), S = c.useRef(null), P = $6();
  Xn(() => {
    if (d !== void 0) {
      let A = d.trim();
      n.current.value = A, x.emit();
    }
  }, [d]), Xn(() => {
    P(6, Z);
  }, []);
  let x = c.useMemo(() => ({ subscribe: (A) => (i.current.add(A), () => i.current.delete(A)), snapshot: () => n.current, setState: (A, D, L) => {
    var U, G, z;
    if (!Object.is(n.current[A], D)) {
      if (n.current[A] = D, A === "search") B(), M(), P(1, k);
      else if (A === "value" && (L || P(5, Z), ((U = s.current) == null ? void 0 : U.value) !== void 0)) {
        let X = D ?? "";
        (z = (G = s.current).onValueChange) == null || z.call(G, X);
        return;
      }
      x.emit();
    }
  }, emit: () => {
    i.current.forEach((A) => A());
  } }), []), N = c.useMemo(() => ({ value: (A, D, L) => {
    var U;
    D !== ((U = a.current.get(A)) == null ? void 0 : U.value) && (a.current.set(A, { value: D, keywords: L }), n.current.filtered.items.set(A, R(D, L)), P(2, () => {
      M(), x.emit();
    }));
  }, item: (A, D) => (r.current.add(A), D && (o.current.has(D) ? o.current.get(D).add(A) : o.current.set(D, /* @__PURE__ */ new Set([A]))), P(3, () => {
    B(), M(), n.current.value || k(), x.emit();
  }), () => {
    a.current.delete(A), r.current.delete(A), n.current.filtered.items.delete(A);
    let L = F();
    P(4, () => {
      B(), (L == null ? void 0 : L.getAttribute("id")) === A && k(), x.emit();
    });
  }), group: (A) => (o.current.has(A) || o.current.set(A, /* @__PURE__ */ new Set()), () => {
    a.current.delete(A), o.current.delete(A);
  }), filter: () => s.current.shouldFilter, label: l || e["aria-label"], disablePointerSelection: v, listId: w, inputId: E, labelId: C, listInnerRef: S }), []);
  function R(A, D) {
    var L, U;
    let G = (U = (L = s.current) == null ? void 0 : L.filter) != null ? U : y6;
    return A ? G(A, n.current.search, D) : 0;
  }
  function M() {
    if (!n.current.search || s.current.shouldFilter === !1) return;
    let A = n.current.filtered.items, D = [];
    n.current.filtered.groups.forEach((U) => {
      let G = o.current.get(U), z = 0;
      G.forEach((X) => {
        let Q = A.get(X);
        z = Math.max(Q, z);
      }), D.push([U, z]);
    });
    let L = S.current;
    H().sort((U, G) => {
      var z, X;
      let Q = U.getAttribute("id"), J = G.getAttribute("id");
      return ((z = A.get(J)) != null ? z : 0) - ((X = A.get(Q)) != null ? X : 0);
    }).forEach((U) => {
      let G = U.closest(Pc);
      G ? G.appendChild(U.parentElement === G ? U : U.closest(`${Pc} > *`)) : L.appendChild(U.parentElement === L ? U : U.closest(`${Pc} > *`));
    }), D.sort((U, G) => G[1] - U[1]).forEach((U) => {
      let G = S.current.querySelector(`${To}[${Wn}="${encodeURIComponent(U[0])}"]`);
      G == null || G.parentElement.appendChild(G);
    });
  }
  function k() {
    let A = H().find((L) => L.getAttribute("aria-disabled") !== "true"), D = A == null ? void 0 : A.getAttribute(Wn);
    x.setState("value", D || void 0);
  }
  function B() {
    var A, D, L, U;
    if (!n.current.search || s.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let G = 0;
    for (let z of r.current) {
      let X = (D = (A = a.current.get(z)) == null ? void 0 : A.value) != null ? D : "", Q = (U = (L = a.current.get(z)) == null ? void 0 : L.keywords) != null ? U : [], J = R(X, Q);
      n.current.filtered.items.set(z, J), J > 0 && G++;
    }
    for (let [z, X] of o.current) for (let Q of X) if (n.current.filtered.items.get(Q) > 0) {
      n.current.filtered.groups.add(z);
      break;
    }
    n.current.filtered.count = G;
  }
  function Z() {
    var A, D, L;
    let U = F();
    U && (((A = U.parentElement) == null ? void 0 : A.firstChild) === U && ((L = (D = U.closest(To)) == null ? void 0 : D.querySelector(b6)) == null || L.scrollIntoView({ block: "nearest" })), U.scrollIntoView({ block: "nearest" }));
  }
  function F() {
    var A;
    return (A = S.current) == null ? void 0 : A.querySelector(`${bd}[aria-selected="true"]`);
  }
  function H() {
    var A;
    return Array.from((A = S.current) == null ? void 0 : A.querySelectorAll(Vm));
  }
  function j(A) {
    let D = H()[A];
    D && x.setState("value", D.getAttribute(Wn));
  }
  function W(A) {
    var D;
    let L = F(), U = H(), G = U.findIndex((X) => X === L), z = U[G + A];
    (D = s.current) != null && D.loop && (z = G + A < 0 ? U[U.length - 1] : G + A === U.length ? U[0] : U[G + A]), z && x.setState("value", z.getAttribute(Wn));
  }
  function O(A) {
    let D = F(), L = D == null ? void 0 : D.closest(To), U;
    for (; L && !U; ) L = A > 0 ? _6(L, To) : T6(L, To), U = L == null ? void 0 : L.querySelector(Vm);
    U ? x.setState("value", U.getAttribute(Wn)) : W(A);
  }
  let V = () => j(H().length - 1), ne = (A) => {
    A.preventDefault(), A.metaKey ? V() : A.altKey ? O(1) : W(1);
  }, q = (A) => {
    A.preventDefault(), A.metaKey ? j(0) : A.altKey ? O(-1) : W(-1);
  };
  return c.createElement(Rt.div, { ref: t, tabIndex: -1, ...y, "cmdk-root": "", onKeyDown: (A) => {
    var D;
    if ((D = y.onKeyDown) == null || D.call(y, A), !A.defaultPrevented) switch (A.key) {
      case "n":
      case "j": {
        b && A.ctrlKey && ne(A);
        break;
      }
      case "ArrowDown": {
        ne(A);
        break;
      }
      case "p":
      case "k": {
        b && A.ctrlKey && q(A);
        break;
      }
      case "ArrowUp": {
        q(A);
        break;
      }
      case "Home": {
        A.preventDefault(), j(0);
        break;
      }
      case "End": {
        A.preventDefault(), V();
        break;
      }
      case "Enter":
        if (!A.nativeEvent.isComposing && A.keyCode !== 229) {
          A.preventDefault();
          let L = F();
          if (L) {
            let U = new Event(Tl);
            L.dispatchEvent(U);
          }
        }
    }
  } }, c.createElement("label", { "cmdk-label": "", htmlFor: N.inputId, id: N.labelId, style: O6 }, l), hs(e, (A) => c.createElement($y.Provider, { value: x }, c.createElement(Ty.Provider, { value: N }, A))));
}), w6 = c.forwardRef((e, t) => {
  var n, r;
  let o = c.useId(), a = c.useRef(null), i = c.useContext(My), s = va(), l = Dy(e), u = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : i == null ? void 0 : i.forceMount;
  Xn(() => {
    if (!u) return s.item(o, i == null ? void 0 : i.id);
  }, [u]);
  let d = Ay(o, a, [e.value, e.children, a], e.keywords), f = yd(), p = qn((P) => P.value && P.value === d.current), g = qn((P) => u || s.filter() === !1 ? !0 : P.search ? P.filtered.items.get(o) > 0 : !0);
  c.useEffect(() => {
    let P = a.current;
    if (!(!P || e.disabled)) return P.addEventListener(Tl, h), () => P.removeEventListener(Tl, h);
  }, [g, e.onSelect, e.disabled]);
  function h() {
    var P, x;
    v(), (x = (P = l.current).onSelect) == null || x.call(P, d.current);
  }
  function v() {
    f.setState("value", d.current, !0);
  }
  if (!g) return null;
  let { disabled: b, value: y, onSelect: w, forceMount: C, keywords: E, ...S } = e;
  return c.createElement(Rt.div, { ref: Xo([a, t]), ...S, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!b, "aria-selected": !!p, "data-disabled": !!b, "data-selected": !!p, onPointerMove: b || s.disablePointerSelection ? void 0 : v, onClick: b ? void 0 : h }, e.children);
}), x6 = c.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, i = c.useId(), s = c.useRef(null), l = c.useRef(null), u = c.useId(), d = va(), f = qn((g) => o || d.filter() === !1 ? !0 : g.search ? g.filtered.groups.has(i) : !0);
  Xn(() => d.group(i), []), Ay(i, s, [e.value, e.heading, l]);
  let p = c.useMemo(() => ({ id: i, forceMount: o }), [o]);
  return c.createElement(Rt.div, { ref: Xo([s, t]), ...a, "cmdk-group": "", role: "presentation", hidden: f ? void 0 : !0 }, n && c.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: u }, n), hs(e, (g) => c.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? u : void 0 }, c.createElement(My.Provider, { value: p }, g))));
}), C6 = c.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = c.useRef(null), a = qn((i) => !i.search);
  return !n && !a ? null : c.createElement(Rt.div, { ref: Xo([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), S6 = c.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = yd(), i = qn((d) => d.search), s = qn((d) => d.value), l = va(), u = c.useMemo(() => {
    var d;
    let f = (d = l.listInnerRef.current) == null ? void 0 : d.querySelector(`${bd}[${Wn}="${encodeURIComponent(s)}"]`);
    return f == null ? void 0 : f.getAttribute("id");
  }, []);
  return c.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), c.createElement(Rt.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": u, id: l.inputId, type: "text", value: o ? e.value : i, onChange: (d) => {
    o || a.setState("search", d.target.value), n == null || n(d.target.value);
  } });
}), E6 = c.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = c.useRef(null), i = c.useRef(null), s = va();
  return c.useEffect(() => {
    if (i.current && a.current) {
      let l = i.current, u = a.current, d, f = new ResizeObserver(() => {
        d = requestAnimationFrame(() => {
          let p = l.offsetHeight;
          u.style.setProperty("--cmdk-list-height", p.toFixed(1) + "px");
        });
      });
      return f.observe(l), () => {
        cancelAnimationFrame(d), f.unobserve(l);
      };
    }
  }, []), c.createElement(Rt.div, { ref: Xo([a, t]), ...o, "cmdk-list": "", role: "listbox", "aria-label": r, id: s.listId }, hs(e, (l) => c.createElement("div", { ref: Xo([i, s.listInnerRef]), "cmdk-list-sizer": "" }, l)));
}), P6 = c.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: i, ...s } = e;
  return c.createElement(m6, { open: n, onOpenChange: r }, c.createElement(v6, { container: i }, c.createElement(h6, { "cmdk-overlay": "", className: o }), c.createElement(g6, { "aria-label": e.label, "cmdk-dialog": "", className: a }, c.createElement(Oy, { ref: t, ...s }))));
}), N6 = c.forwardRef((e, t) => qn((n) => n.filtered.count === 0) ? c.createElement(Rt.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), R6 = c.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return c.createElement(Rt.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, hs(e, (i) => c.createElement("div", { "aria-hidden": !0 }, i)));
}), mt = Object.assign(Oy, { List: E6, Item: w6, Input: S6, Group: x6, Separator: C6, Dialog: P6, Empty: N6, Loading: R6 });
function _6(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function T6(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function Dy(e) {
  let t = c.useRef(e);
  return Xn(() => {
    t.current = e;
  }), t;
}
var Xn = typeof window > "u" ? c.useEffect : c.useLayoutEffect;
function Rr(e) {
  let t = c.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Xo(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function qn(e) {
  let t = yd(), n = () => e(t.snapshot());
  return c.useSyncExternalStore(t.subscribe, n, n);
}
function Ay(e, t, n, r = []) {
  let o = c.useRef(), a = va();
  return Xn(() => {
    var i;
    let s = (() => {
      var u;
      for (let d of n) {
        if (typeof d == "string") return d.trim();
        if (typeof d == "object" && "current" in d) return d.current ? (u = d.current.textContent) == null ? void 0 : u.trim() : o.current;
      }
    })(), l = r.map((u) => u.trim());
    a.value(e, s, l), (i = t.current) == null || i.setAttribute(Wn, s), o.current = s;
  }), o;
}
var $6 = () => {
  let [e, t] = c.useState(), n = Rr(() => /* @__PURE__ */ new Map());
  return Xn(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function M6(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function hs({ asChild: e, children: t }, n) {
  return e && c.isValidElement(t) ? c.cloneElement(M6(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var O6 = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
function D6(e, t) {
  const n = c.createContext(t), r = (a) => {
    const { children: i, ...s } = a, l = c.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ m(n.Provider, { value: l, children: i });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const i = c.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function A6(e, t = []) {
  let n = [];
  function r(a, i) {
    const s = c.createContext(i), l = n.length;
    n = [...n, i];
    const u = (f) => {
      var y;
      const { scope: p, children: g, ...h } = f, v = ((y = p == null ? void 0 : p[e]) == null ? void 0 : y[l]) || s, b = c.useMemo(() => h, Object.values(h));
      return /* @__PURE__ */ m(v.Provider, { value: b, children: g });
    };
    u.displayName = a + "Provider";
    function d(f, p) {
      var v;
      const g = ((v = p == null ? void 0 : p[e]) == null ? void 0 : v[l]) || s, h = c.useContext(g);
      if (h) return h;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return [u, d];
  }
  const o = () => {
    const a = n.map((i) => c.createContext(i));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return o.scopeName = e, [r, I6(o, ...t)];
}
function I6(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = r.reduce((s, { useScope: l, scopeName: u }) => {
        const f = l(a)[`__scope${u}`];
        return { ...s, ...f };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var k6 = "DismissableLayer", $l = "dismissableLayer.update", L6 = "dismissableLayer.pointerDownOutside", F6 = "dismissableLayer.focusOutside", Um, Iy = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), wd = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...l
    } = e, u = c.useContext(Iy), [d, f] = c.useState(null), p = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = c.useState({}), h = te(t, (x) => f(x)), v = Array.from(u.layers), [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = v.indexOf(b), w = d ? v.indexOf(d) : -1, C = u.layersWithOutsidePointerEventsDisabled.size > 0, E = w >= y, S = z6((x) => {
      const N = x.target, R = [...u.branches].some((M) => M.contains(N));
      !E || R || (o == null || o(x), i == null || i(x), x.defaultPrevented || s == null || s());
    }, p), P = H6((x) => {
      const N = x.target;
      [...u.branches].some((M) => M.contains(N)) || (a == null || a(x), i == null || i(x), x.defaultPrevented || s == null || s());
    }, p);
    return _n((x) => {
      w === u.layers.size - 1 && (r == null || r(x), !x.defaultPrevented && s && (x.preventDefault(), s()));
    }, p), c.useEffect(() => {
      if (d)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Um = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Gm(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Um);
        };
    }, [d, p, n, u]), c.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Gm());
    }, [d, u]), c.useEffect(() => {
      const x = () => g({});
      return document.addEventListener($l, x), () => document.removeEventListener($l, x);
    }, []), /* @__PURE__ */ m(
      Y.div,
      {
        ...l,
        ref: h,
        style: {
          pointerEvents: C ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: I(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: I(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: I(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
wd.displayName = k6;
var B6 = "DismissableLayerBranch", W6 = c.forwardRef((e, t) => {
  const n = c.useContext(Iy), r = c.useRef(null), o = te(t, r);
  return c.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ m(Y.div, { ...e, ref: o });
});
W6.displayName = B6;
function z6(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e), r = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          ky(
            L6,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function H6(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && ky(F6, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Gm() {
  const e = new CustomEvent($l);
  document.dispatchEvent(e);
}
function ky(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Nt(o, a) : o.dispatchEvent(a);
}
var j6 = "Portal", Ly = c.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, a] = c.useState(!1);
  Ce(() => a(!0), []);
  const i = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? vn.createPortal(/* @__PURE__ */ m(Y.div, { ...r, ref: t }), i) : null;
});
Ly.displayName = j6;
function V6(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var gs = (e) => {
  const { present: t, children: n } = e, r = U6(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), a = te(r.ref, G6(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: a }) : null;
};
gs.displayName = "Presence";
function U6(e) {
  const [t, n] = c.useState(), r = c.useRef({}), o = c.useRef(e), a = c.useRef("none"), i = e ? "mounted" : "unmounted", [s, l] = V6(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return c.useEffect(() => {
    const u = Ka(r.current);
    a.current = s === "mounted" ? u : "none";
  }, [s]), Ce(() => {
    const u = r.current, d = o.current;
    if (d !== e) {
      const p = a.current, g = Ka(u);
      e ? l("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(d && p !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ce(() => {
    if (t) {
      let u;
      const d = t.ownerDocument.defaultView ?? window, f = (g) => {
        const v = Ka(r.current).includes(g.animationName);
        if (g.target === t && v && (l("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, p = (g) => {
        g.target === t && (a.current = Ka(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(u), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: c.useCallback((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function Ka(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function G6(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Nc = 0;
function Y6() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ym()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ym()), Nc++, () => {
      Nc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Nc--;
    };
  }, []);
}
function Ym() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Fy = ro(), Rc = function() {
}, bs = c.forwardRef(function(e, t) {
  var n = c.useRef(null), r = c.useState({
    onScrollCapture: Rc,
    onWheelCapture: Rc,
    onTouchMoveCapture: Rc
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, g = e.noIsolation, h = e.inert, v = e.allowPinchZoom, b = e.as, y = b === void 0 ? "div" : b, w = e.gapMode, C = nr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = p, S = no([n, t]), P = he(he({}, C), o);
  return c.createElement(
    c.Fragment,
    null,
    d && c.createElement(E, { sideCar: Fy, removeScrollBar: u, shards: f, noIsolation: g, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n, gapMode: w }),
    i ? c.cloneElement(c.Children.only(s), he(he({}, P), { ref: S })) : c.createElement(y, he({}, P, { className: l, ref: S }), s)
  );
});
bs.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
bs.classNames = {
  fullWidth: un,
  zeroRight: ln
};
var Ml = !1;
if (typeof window < "u")
  try {
    var Xa = Object.defineProperty({}, "passive", {
      get: function() {
        return Ml = !0, !0;
      }
    });
    window.addEventListener("test", Xa, Xa), window.removeEventListener("test", Xa, Xa);
  } catch {
    Ml = !1;
  }
var gr = Ml ? { passive: !1 } : !1, K6 = function(e) {
  return e.tagName === "TEXTAREA";
}, By = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !K6(e) && n[t] === "visible")
  );
}, X6 = function(e) {
  return By(e, "overflowY");
}, q6 = function(e) {
  return By(e, "overflowX");
}, Km = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Wy(e, r);
    if (o) {
      var a = zy(e, r), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Z6 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Q6 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Wy = function(e, t) {
  return e === "v" ? X6(t) : q6(t);
}, zy = function(e, t) {
  return e === "v" ? Z6(t) : Q6(t);
}, J6 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, e8 = function(e, t, n, r, o) {
  var a = J6(e, window.getComputedStyle(t).direction), i = a * r, s = n.target, l = t.contains(s), u = !1, d = i > 0, f = 0, p = 0;
  do {
    var g = zy(e, s), h = g[0], v = g[1], b = g[2], y = v - b - a * h;
    (h || y) && Wy(e, s) && (f += y, p += h), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (d && Math.abs(f) < 1 || !d && Math.abs(p) < 1) && (u = !0), u;
}, qa = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Xm = function(e) {
  return [e.deltaX, e.deltaY];
}, qm = function(e) {
  return e && "current" in e ? e.current : e;
}, t8 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, n8 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, r8 = 0, br = [];
function o8(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), o = c.useState(r8++)[0], a = c.useState(rr)[0], i = c.useRef(e);
  c.useEffect(function() {
    i.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = to([e.lockRef.current], (e.shards || []).map(qm), !0).filter(Boolean);
      return v.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = c.useCallback(function(v, b) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !i.current.allowPinchZoom;
    var y = qa(v), w = n.current, C = "deltaX" in v ? v.deltaX : w[0] - y[0], E = "deltaY" in v ? v.deltaY : w[1] - y[1], S, P = v.target, x = Math.abs(C) > Math.abs(E) ? "h" : "v";
    if ("touches" in v && x === "h" && P.type === "range")
      return !1;
    var N = Km(x, P);
    if (!N)
      return !0;
    if (N ? S = x : (S = x === "v" ? "h" : "v", N = Km(x, P)), !N)
      return !1;
    if (!r.current && "changedTouches" in v && (C || E) && (r.current = S), !S)
      return !0;
    var R = r.current || S;
    return e8(R, b, v, R === "h" ? C : E);
  }, []), l = c.useCallback(function(v) {
    var b = v;
    if (!(!br.length || br[br.length - 1] !== a)) {
      var y = "deltaY" in b ? Xm(b) : qa(b), w = t.current.filter(function(S) {
        return S.name === b.type && (S.target === b.target || b.target === S.shadowParent) && t8(S.delta, y);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var C = (i.current.shards || []).map(qm).filter(Boolean).filter(function(S) {
          return S.contains(b.target);
        }), E = C.length > 0 ? s(b, C[0]) : !i.current.noIsolation;
        E && b.cancelable && b.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(v, b, y, w) {
    var C = { name: v, delta: b, target: y, should: w, shadowParent: a8(y) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== C;
      });
    }, 1);
  }, []), d = c.useCallback(function(v) {
    n.current = qa(v), r.current = void 0;
  }, []), f = c.useCallback(function(v) {
    u(v.type, Xm(v), v.target, s(v, e.lockRef.current));
  }, []), p = c.useCallback(function(v) {
    u(v.type, qa(v), v.target, s(v, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return br.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, gr), document.addEventListener("touchmove", l, gr), document.addEventListener("touchstart", d, gr), function() {
      br = br.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", l, gr), document.removeEventListener("touchmove", l, gr), document.removeEventListener("touchstart", d, gr);
    };
  }, []);
  var g = e.removeScrollBar, h = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    h ? c.createElement(a, { styles: n8(o) }) : null,
    g ? c.createElement(ao, { gapMode: e.gapMode }) : null
  );
}
function a8(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const i8 = oo(Fy, o8);
var Hy = c.forwardRef(function(e, t) {
  return c.createElement(bs, he({}, e, { ref: t, sideCar: i8 }));
});
Hy.classNames = bs.classNames;
var xd = "Dialog", [jy, dee] = A6(xd), [s8, jt] = jy(xd), Vy = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = c.useRef(null), l = c.useRef(null), [u = !1, d] = Me({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ m(
    s8,
    {
      scope: t,
      triggerRef: s,
      contentRef: l,
      contentId: Le(),
      titleId: Le(),
      descriptionId: Le(),
      open: u,
      onOpenChange: d,
      onOpenToggle: c.useCallback(() => d((f) => !f), [d]),
      modal: i,
      children: n
    }
  );
};
Vy.displayName = xd;
var Uy = "DialogTrigger", Gy = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = jt(Uy, n), a = te(t, o.triggerRef);
    return /* @__PURE__ */ m(
      Y.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ed(o.open),
        ...r,
        ref: a,
        onClick: I(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Gy.displayName = Uy;
var Cd = "DialogPortal", [c8, Yy] = jy(Cd, {
  forceMount: void 0
}), Ky = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = jt(Cd, t);
  return /* @__PURE__ */ m(c8, { scope: t, forceMount: n, children: c.Children.map(r, (i) => /* @__PURE__ */ m(gs, { present: n || a.open, children: /* @__PURE__ */ m(Ly, { asChild: !0, container: o, children: i }) })) });
};
Ky.displayName = Cd;
var Mi = "DialogOverlay", Xy = c.forwardRef(
  (e, t) => {
    const n = Yy(Mi, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = jt(Mi, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ m(gs, { present: r || a.open, children: /* @__PURE__ */ m(l8, { ...o, ref: t }) }) : null;
  }
);
Xy.displayName = Mi;
var l8 = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = jt(Mi, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ m(Hy, { as: Ke, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ m(
        Y.div,
        {
          "data-state": Ed(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Zn = "DialogContent", qy = c.forwardRef(
  (e, t) => {
    const n = Yy(Zn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = jt(Zn, e.__scopeDialog);
    return /* @__PURE__ */ m(gs, { present: r || a.open, children: a.modal ? /* @__PURE__ */ m(u8, { ...o, ref: t }) : /* @__PURE__ */ m(d8, { ...o, ref: t }) });
  }
);
qy.displayName = Zn;
var u8 = c.forwardRef(
  (e, t) => {
    const n = jt(Zn, e.__scopeDialog), r = c.useRef(null), o = te(t, n.contentRef, r);
    return c.useEffect(() => {
      const a = r.current;
      if (a) return io(a);
    }, []), /* @__PURE__ */ m(
      Zy,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: I(e.onCloseAutoFocus, (a) => {
          var i;
          a.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: I(e.onPointerDownOutside, (a) => {
          const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: I(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), d8 = c.forwardRef(
  (e, t) => {
    const n = jt(Zn, e.__scopeDialog), r = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ m(
      Zy,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var l, u;
          (l = e.onInteractOutside) == null || l.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), Zy = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = jt(Zn, n), l = c.useRef(null), u = te(t, l);
    return Y6(), /* @__PURE__ */ ee(Fe, { children: [
      /* @__PURE__ */ m(
        eo,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ m(
            wd,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Ed(s.open),
              ...i,
              ref: u,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ ee(Fe, { children: [
        /* @__PURE__ */ m(f8, { titleId: s.titleId }),
        /* @__PURE__ */ m(m8, { contentRef: l, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Sd = "DialogTitle", Qy = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = jt(Sd, n);
    return /* @__PURE__ */ m(Y.h2, { id: o.titleId, ...r, ref: t });
  }
);
Qy.displayName = Sd;
var Jy = "DialogDescription", ew = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = jt(Jy, n);
    return /* @__PURE__ */ m(Y.p, { id: o.descriptionId, ...r, ref: t });
  }
);
ew.displayName = Jy;
var tw = "DialogClose", nw = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = jt(tw, n);
    return /* @__PURE__ */ m(
      Y.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: I(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
nw.displayName = tw;
function Ed(e) {
  return e ? "open" : "closed";
}
var rw = "DialogTitleWarning", [fee, ow] = D6(rw, {
  contentName: Zn,
  titleName: Sd,
  docsSlug: "dialog"
}), f8 = ({ titleId: e }) => {
  const t = ow(rw), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, p8 = "DialogDescriptionWarning", m8 = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ow(p8).contentName}}.`;
  return c.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Pd = Vy, Nd = Gy, Rd = Ky, ha = Xy, ga = qy, ba = Qy, ya = ew, wa = nw;
const v8 = Pd, pee = Nd, h8 = Rd, mee = wa, aw = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  ha,
  {
    ref: n,
    className: $(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
aw.displayName = ha.displayName;
const iw = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ ee(h8, { children: [
  /* @__PURE__ */ m(aw, {}),
  /* @__PURE__ */ ee(
    ga,
    {
      ref: r,
      className: $(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ ee(wa, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ m(_u, { className: "h-4 w-4" }),
          /* @__PURE__ */ m("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
iw.displayName = ga.displayName;
const g8 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m(
  "div",
  {
    className: $(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
g8.displayName = "DialogHeader";
const b8 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m(
  "div",
  {
    className: $(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
b8.displayName = "DialogFooter";
const y8 = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  ba,
  {
    ref: n,
    className: $(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
y8.displayName = ba.displayName;
const w8 = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  ya,
  {
    ref: n,
    className: $("text-sm text-muted-foreground", e),
    ...t
  }
));
w8.displayName = ya.displayName;
const _d = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  mt,
  {
    ref: n,
    className: $(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
_d.displayName = mt.displayName;
const vee = ({ children: e, ...t }) => /* @__PURE__ */ m(v8, { ...t, children: /* @__PURE__ */ m(iw, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ m(_d, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), sw = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ ee("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ m(WN, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ m(
    mt.Input,
    {
      ref: n,
      className: $(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
sw.displayName = mt.Input.displayName;
const x8 = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  mt.List,
  {
    ref: n,
    className: $("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
x8.displayName = mt.List.displayName;
const cw = c.forwardRef((e, t) => /* @__PURE__ */ m(
  mt.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
cw.displayName = mt.Empty.displayName;
const lw = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  mt.Group,
  {
    ref: n,
    className: $(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
lw.displayName = mt.Group.displayName;
const C8 = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  mt.Separator,
  {
    ref: n,
    className: $("-mx-1 h-px bg-border", e),
    ...t
  }
));
C8.displayName = mt.Separator.displayName;
const uw = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  mt.Item,
  {
    ref: n,
    className: $(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      e
    ),
    ...t
  }
));
uw.displayName = mt.Item.displayName;
const S8 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m(
  "span",
  {
    className: $(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
S8.displayName = "CommandShortcut";
var E8 = "DismissableLayer", Ol = "dismissableLayer.update", P8 = "dismissableLayer.pointerDownOutside", N8 = "dismissableLayer.focusOutside", Zm, dw = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), fw = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...l
    } = e, u = c.useContext(dw), [d, f] = c.useState(null), p = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = c.useState({}), h = te(t, (x) => f(x)), v = Array.from(u.layers), [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = v.indexOf(b), w = d ? v.indexOf(d) : -1, C = u.layersWithOutsidePointerEventsDisabled.size > 0, E = w >= y, S = T8((x) => {
      const N = x.target, R = [...u.branches].some((M) => M.contains(N));
      !E || R || (o == null || o(x), i == null || i(x), x.defaultPrevented || s == null || s());
    }, p), P = $8((x) => {
      const N = x.target;
      [...u.branches].some((M) => M.contains(N)) || (a == null || a(x), i == null || i(x), x.defaultPrevented || s == null || s());
    }, p);
    return _n((x) => {
      w === u.layers.size - 1 && (r == null || r(x), !x.defaultPrevented && s && (x.preventDefault(), s()));
    }, p), c.useEffect(() => {
      if (d)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Zm = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Qm(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Zm);
        };
    }, [d, p, n, u]), c.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Qm());
    }, [d, u]), c.useEffect(() => {
      const x = () => g({});
      return document.addEventListener(Ol, x), () => document.removeEventListener(Ol, x);
    }, []), /* @__PURE__ */ m(
      Y.div,
      {
        ...l,
        ref: h,
        style: {
          pointerEvents: C ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: I(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: I(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: I(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
fw.displayName = E8;
var R8 = "DismissableLayerBranch", _8 = c.forwardRef((e, t) => {
  const n = c.useContext(dw), r = c.useRef(null), o = te(t, r);
  return c.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ m(Y.div, { ...e, ref: o });
});
_8.displayName = R8;
function T8(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e), r = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          pw(
            P8,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function $8(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && pw(N8, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Qm() {
  const e = new CustomEvent(Ol);
  document.dispatchEvent(e);
}
function pw(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Nt(o, a) : o.dispatchEvent(a);
}
var _c = 0;
function M8() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Jm()), document.body.insertAdjacentElement("beforeend", e[1] ?? Jm()), _c++, () => {
      _c === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), _c--;
    };
  }, []);
}
function Jm() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const O8 = ["top", "right", "bottom", "left"], Nn = Math.min, yt = Math.max, Oi = Math.round, Za = Math.floor, Kt = (e) => ({
  x: e,
  y: e
}), D8 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, A8 = {
  start: "end",
  end: "start"
};
function Dl(e, t, n) {
  return yt(e, Nn(t, n));
}
function pn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function mn(e) {
  return e.split("-")[0];
}
function mo(e) {
  return e.split("-")[1];
}
function Td(e) {
  return e === "x" ? "y" : "x";
}
function $d(e) {
  return e === "y" ? "height" : "width";
}
function Yt(e) {
  return ["top", "bottom"].includes(mn(e)) ? "y" : "x";
}
function Md(e) {
  return Td(Yt(e));
}
function I8(e, t, n) {
  n === void 0 && (n = !1);
  const r = mo(e), o = Md(e), a = $d(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Di(i)), [i, Di(i)];
}
function k8(e) {
  const t = Di(e);
  return [Al(e), t, Al(t)];
}
function Al(e) {
  return e.replace(/start|end/g, (t) => A8[t]);
}
function L8(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], a = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? a : i;
    default:
      return [];
  }
}
function F8(e, t, n, r) {
  const o = mo(e);
  let a = L8(mn(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(Al)))), a;
}
function Di(e) {
  return e.replace(/left|right|bottom|top/g, (t) => D8[t]);
}
function B8(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function mw(e) {
  return typeof e != "number" ? B8(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ai(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function ev(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Yt(t), i = Md(t), s = $d(i), l = mn(t), u = a === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[s] / 2 - o[s] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (mo(t)) {
    case "start":
      g[i] -= p * (n && u ? -1 : 1);
      break;
    case "end":
      g[i] += p * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const W8 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = n, s = a.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = ev(u, r, l), p = r, g = {}, h = 0;
  for (let v = 0; v < s.length; v++) {
    const {
      name: b,
      fn: y
    } = s[v], {
      x: w,
      y: C,
      data: E,
      reset: S
    } = await y({
      x: d,
      y: f,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: g,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = w ?? d, f = C ?? f, g = {
      ...g,
      [b]: {
        ...g[b],
        ...E
      }
    }, S && h <= 50 && (h++, typeof S == "object" && (S.placement && (p = S.placement), S.rects && (u = S.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: d,
      y: f
    } = ev(u, p, l)), v = -1);
  }
  return {
    x: d,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: g
  };
};
async function qo(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: g = 0
  } = pn(t, e), h = mw(g), b = s[p ? f === "floating" ? "reference" : "floating" : f], y = Ai(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(b))) == null || n ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), w = f === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, C = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), E = await (a.isElement == null ? void 0 : a.isElement(C)) ? await (a.getScale == null ? void 0 : a.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Ai(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: C,
    strategy: l
  }) : w);
  return {
    top: (y.top - S.top + h.top) / E.y,
    bottom: (S.bottom - y.bottom + h.bottom) / E.y,
    left: (y.left - S.left + h.left) / E.x,
    right: (S.right - y.right + h.right) / E.x
  };
}
const z8 = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: l
    } = t, {
      element: u,
      padding: d = 0
    } = pn(e, t) || {};
    if (u == null)
      return {};
    const f = mw(d), p = {
      x: n,
      y: r
    }, g = Md(o), h = $d(g), v = await i.getDimensions(u), b = g === "y", y = b ? "top" : "left", w = b ? "bottom" : "right", C = b ? "clientHeight" : "clientWidth", E = a.reference[h] + a.reference[g] - p[g] - a.floating[h], S = p[g] - a.reference[g], P = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let x = P ? P[C] : 0;
    (!x || !await (i.isElement == null ? void 0 : i.isElement(P))) && (x = s.floating[C] || a.floating[h]);
    const N = E / 2 - S / 2, R = x / 2 - v[h] / 2 - 1, M = Nn(f[y], R), k = Nn(f[w], R), B = M, Z = x - v[h] - k, F = x / 2 - v[h] / 2 + N, H = Dl(B, F, Z), j = !l.arrow && mo(o) != null && F !== H && a.reference[h] / 2 - (F < B ? M : k) - v[h] / 2 < 0, W = j ? F < B ? F - B : F - Z : 0;
    return {
      [g]: p[g] + W,
      data: {
        [g]: H,
        centerOffset: F - H - W,
        ...j && {
          alignmentOffset: W
        }
      },
      reset: j
    };
  }
}), H8 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
        platform: l,
        elements: u
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: v = !0,
        ...b
      } = pn(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const y = mn(o), w = Yt(s), C = mn(s) === s, E = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), S = p || (C || !v ? [Di(s)] : k8(s)), P = h !== "none";
      !p && P && S.push(...F8(s, v, h, E));
      const x = [s, ...S], N = await qo(t, b), R = [];
      let M = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (d && R.push(N[y]), f) {
        const F = I8(o, i, E);
        R.push(N[F[0]], N[F[1]]);
      }
      if (M = [...M, {
        placement: o,
        overflows: R
      }], !R.every((F) => F <= 0)) {
        var k, B;
        const F = (((k = a.flip) == null ? void 0 : k.index) || 0) + 1, H = x[F];
        if (H && (!(f === "alignment" ? w !== Yt(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        M.every((O) => O.overflows[0] > 0 && Yt(O.placement) === w)))
          return {
            data: {
              index: F,
              overflows: M
            },
            reset: {
              placement: H
            }
          };
        let j = (B = M.filter((W) => W.overflows[0] <= 0).sort((W, O) => W.overflows[1] - O.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!j)
          switch (g) {
            case "bestFit": {
              var Z;
              const W = (Z = M.filter((O) => {
                if (P) {
                  const V = Yt(O.placement);
                  return V === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  V === "y";
                }
                return !0;
              }).map((O) => [O.placement, O.overflows.filter((V) => V > 0).reduce((V, ne) => V + ne, 0)]).sort((O, V) => O[1] - V[1])[0]) == null ? void 0 : Z[0];
              W && (j = W);
              break;
            }
            case "initialPlacement":
              j = s;
              break;
          }
        if (o !== j)
          return {
            reset: {
              placement: j
            }
          };
      }
      return {};
    }
  };
};
function tv(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function nv(e) {
  return O8.some((t) => e[t] >= 0);
}
const j8 = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = pn(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await qo(t, {
            ...o,
            elementContext: "reference"
          }), i = tv(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: nv(i)
            }
          };
        }
        case "escaped": {
          const a = await qo(t, {
            ...o,
            altBoundary: !0
          }), i = tv(a, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: nv(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function V8(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = mn(n), s = mo(n), l = Yt(n) === "y", u = ["left", "top"].includes(i) ? -1 : 1, d = a && l ? -1 : 1, f = pn(t, e);
  let {
    mainAxis: p,
    crossAxis: g,
    alignmentAxis: h
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return s && typeof h == "number" && (g = s === "end" ? h * -1 : h), l ? {
    x: g * d,
    y: p * u
  } : {
    x: p * u,
    y: g * d
  };
}
const U8 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: i,
        middlewareData: s
      } = t, l = await V8(t, e);
      return i === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, G8 = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: s = {
          fn: (b) => {
            let {
              x: y,
              y: w
            } = b;
            return {
              x: y,
              y: w
            };
          }
        },
        ...l
      } = pn(e, t), u = {
        x: n,
        y: r
      }, d = await qo(t, l), f = Yt(mn(o)), p = Td(f);
      let g = u[p], h = u[f];
      if (a) {
        const b = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", w = g + d[b], C = g - d[y];
        g = Dl(w, g, C);
      }
      if (i) {
        const b = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", w = h + d[b], C = h - d[y];
        h = Dl(w, h, C);
      }
      const v = s.fn({
        ...t,
        [p]: g,
        [f]: h
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [p]: a,
            [f]: i
          }
        }
      };
    }
  };
}, Y8 = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: i
      } = t, {
        offset: s = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = pn(e, t), d = {
        x: n,
        y: r
      }, f = Yt(o), p = Td(f);
      let g = d[p], h = d[f];
      const v = pn(s, t), b = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (l) {
        const C = p === "y" ? "height" : "width", E = a.reference[p] - a.floating[C] + b.mainAxis, S = a.reference[p] + a.reference[C] - b.mainAxis;
        g < E ? g = E : g > S && (g = S);
      }
      if (u) {
        var y, w;
        const C = p === "y" ? "width" : "height", E = ["top", "left"].includes(mn(o)), S = a.reference[f] - a.floating[C] + (E && ((y = i.offset) == null ? void 0 : y[f]) || 0) + (E ? 0 : b.crossAxis), P = a.reference[f] + a.reference[C] + (E ? 0 : ((w = i.offset) == null ? void 0 : w[f]) || 0) - (E ? b.crossAxis : 0);
        h < S ? h = S : h > P && (h = P);
      }
      return {
        [p]: g,
        [f]: h
      };
    }
  };
}, K8 = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: i,
        elements: s
      } = t, {
        apply: l = () => {
        },
        ...u
      } = pn(e, t), d = await qo(t, u), f = mn(o), p = mo(o), g = Yt(o) === "y", {
        width: h,
        height: v
      } = a.floating;
      let b, y;
      f === "top" || f === "bottom" ? (b = f, y = p === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = f, b = p === "end" ? "top" : "bottom");
      const w = v - d.top - d.bottom, C = h - d.left - d.right, E = Nn(v - d[b], w), S = Nn(h - d[y], C), P = !t.middlewareData.shift;
      let x = E, N = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (N = C), (r = t.middlewareData.shift) != null && r.enabled.y && (x = w), P && !p) {
        const M = yt(d.left, 0), k = yt(d.right, 0), B = yt(d.top, 0), Z = yt(d.bottom, 0);
        g ? N = h - 2 * (M !== 0 || k !== 0 ? M + k : yt(d.left, d.right)) : x = v - 2 * (B !== 0 || Z !== 0 ? B + Z : yt(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: N,
        availableHeight: x
      });
      const R = await i.getDimensions(s.floating);
      return h !== R.width || v !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ys() {
  return typeof window < "u";
}
function vo(e) {
  return vw(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function wt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function en(e) {
  var t;
  return (t = (vw(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function vw(e) {
  return ys() ? e instanceof Node || e instanceof wt(e).Node : !1;
}
function Lt(e) {
  return ys() ? e instanceof Element || e instanceof wt(e).Element : !1;
}
function qt(e) {
  return ys() ? e instanceof HTMLElement || e instanceof wt(e).HTMLElement : !1;
}
function rv(e) {
  return !ys() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof wt(e).ShadowRoot;
}
function xa(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Ft(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function X8(e) {
  return ["table", "td", "th"].includes(vo(e));
}
function ws(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Od(e) {
  const t = Dd(), n = Lt(e) ? Ft(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function q8(e) {
  let t = Rn(e);
  for (; qt(t) && !Vr(t); ) {
    if (Od(t))
      return t;
    if (ws(t))
      return null;
    t = Rn(t);
  }
  return null;
}
function Dd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Vr(e) {
  return ["html", "body", "#document"].includes(vo(e));
}
function Ft(e) {
  return wt(e).getComputedStyle(e);
}
function xs(e) {
  return Lt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Rn(e) {
  if (vo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    rv(e) && e.host || // Fallback.
    en(e)
  );
  return rv(t) ? t.host : t;
}
function hw(e) {
  const t = Rn(e);
  return Vr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : qt(t) && xa(t) ? t : hw(t);
}
function Zo(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = hw(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = wt(o);
  if (a) {
    const s = Il(i);
    return t.concat(i, i.visualViewport || [], xa(o) ? o : [], s && n ? Zo(s) : []);
  }
  return t.concat(o, Zo(o, [], n));
}
function Il(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function gw(e) {
  const t = Ft(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = qt(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = Oi(n) !== a || Oi(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function Ad(e) {
  return Lt(e) ? e : e.contextElement;
}
function Ar(e) {
  const t = Ad(e);
  if (!qt(t))
    return Kt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = gw(t);
  let i = (a ? Oi(n.width) : n.width) / r, s = (a ? Oi(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const Z8 = /* @__PURE__ */ Kt(0);
function bw(e) {
  const t = wt(e);
  return !Dd() || !t.visualViewport ? Z8 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Q8(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== wt(e) ? !1 : t;
}
function Qn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Ad(e);
  let i = Kt(1);
  t && (r ? Lt(r) && (i = Ar(r)) : i = Ar(e));
  const s = Q8(a, n, r) ? bw(a) : Kt(0);
  let l = (o.left + s.x) / i.x, u = (o.top + s.y) / i.y, d = o.width / i.x, f = o.height / i.y;
  if (a) {
    const p = wt(a), g = r && Lt(r) ? wt(r) : r;
    let h = p, v = Il(h);
    for (; v && r && g !== h; ) {
      const b = Ar(v), y = v.getBoundingClientRect(), w = Ft(v), C = y.left + (v.clientLeft + parseFloat(w.paddingLeft)) * b.x, E = y.top + (v.clientTop + parseFloat(w.paddingTop)) * b.y;
      l *= b.x, u *= b.y, d *= b.x, f *= b.y, l += C, u += E, h = wt(v), v = Il(h);
    }
  }
  return Ai({
    width: d,
    height: f,
    x: l,
    y: u
  });
}
function Id(e, t) {
  const n = xs(e).scrollLeft;
  return t ? t.left + n : Qn(en(e)).left + n;
}
function yw(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Id(e, r)
  )), a = r.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function J8(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = en(r), s = t ? ws(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Kt(1);
  const d = Kt(0), f = qt(r);
  if ((f || !f && !a) && ((vo(r) !== "body" || xa(i)) && (l = xs(r)), qt(r))) {
    const g = Qn(r);
    u = Ar(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const p = i && !f && !a ? yw(i, l, !0) : Kt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + p.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + p.y
  };
}
function eV(e) {
  return Array.from(e.getClientRects());
}
function tV(e) {
  const t = en(e), n = xs(e), r = e.ownerDocument.body, o = yt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = yt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Id(e);
  const s = -n.scrollTop;
  return Ft(r).direction === "rtl" && (i += yt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function nV(e, t) {
  const n = wt(e), r = en(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    const u = Dd();
    (!u || u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function rV(e, t) {
  const n = Qn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = qt(e) ? Ar(e) : Kt(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = o * a.x, u = r * a.y;
  return {
    width: i,
    height: s,
    x: l,
    y: u
  };
}
function ov(e, t, n) {
  let r;
  if (t === "viewport")
    r = nV(e, n);
  else if (t === "document")
    r = tV(en(e));
  else if (Lt(t))
    r = rV(t, n);
  else {
    const o = bw(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ai(r);
}
function ww(e, t) {
  const n = Rn(e);
  return n === t || !Lt(n) || Vr(n) ? !1 : Ft(n).position === "fixed" || ww(n, t);
}
function oV(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Zo(e, [], !1).filter((s) => Lt(s) && vo(s) !== "body"), o = null;
  const a = Ft(e).position === "fixed";
  let i = a ? Rn(e) : e;
  for (; Lt(i) && !Vr(i); ) {
    const s = Ft(i), l = Od(i);
    !l && s.position === "fixed" && (o = null), (a ? !l && !o : !l && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || xa(i) && !l && ww(e, i)) ? r = r.filter((d) => d !== i) : o = s, i = Rn(i);
  }
  return t.set(e, r), r;
}
function aV(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? ws(t) ? [] : oV(t, this._c) : [].concat(n), r], s = i[0], l = i.reduce((u, d) => {
    const f = ov(t, d, o);
    return u.top = yt(f.top, u.top), u.right = Nn(f.right, u.right), u.bottom = Nn(f.bottom, u.bottom), u.left = yt(f.left, u.left), u;
  }, ov(t, s, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function iV(e) {
  const {
    width: t,
    height: n
  } = gw(e);
  return {
    width: t,
    height: n
  };
}
function sV(e, t, n) {
  const r = qt(t), o = en(t), a = n === "fixed", i = Qn(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Kt(0);
  function u() {
    l.x = Id(o);
  }
  if (r || !r && !a)
    if ((vo(t) !== "body" || xa(o)) && (s = xs(t)), r) {
      const g = Qn(t, !0, a, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && u();
  a && !r && o && u();
  const d = o && !r && !a ? yw(o, s) : Kt(0), f = i.left + s.scrollLeft - l.x - d.x, p = i.top + s.scrollTop - l.y - d.y;
  return {
    x: f,
    y: p,
    width: i.width,
    height: i.height
  };
}
function Tc(e) {
  return Ft(e).position === "static";
}
function av(e, t) {
  if (!qt(e) || Ft(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return en(e) === n && (n = n.ownerDocument.body), n;
}
function xw(e, t) {
  const n = wt(e);
  if (ws(e))
    return n;
  if (!qt(e)) {
    let o = Rn(e);
    for (; o && !Vr(o); ) {
      if (Lt(o) && !Tc(o))
        return o;
      o = Rn(o);
    }
    return n;
  }
  let r = av(e, t);
  for (; r && X8(r) && Tc(r); )
    r = av(r, t);
  return r && Vr(r) && Tc(r) && !Od(r) ? n : r || q8(e) || n;
}
const cV = async function(e) {
  const t = this.getOffsetParent || xw, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: sV(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function lV(e) {
  return Ft(e).direction === "rtl";
}
const uV = {
  convertOffsetParentRelativeRectToViewportRelativeRect: J8,
  getDocumentElement: en,
  getClippingRect: aV,
  getOffsetParent: xw,
  getElementRects: cV,
  getClientRects: eV,
  getDimensions: iV,
  getScale: Ar,
  isElement: Lt,
  isRTL: lV
};
function Cw(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function dV(e, t) {
  let n = null, r;
  const o = en(e);
  function a() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function i(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), a();
    const u = e.getBoundingClientRect(), {
      left: d,
      top: f,
      width: p,
      height: g
    } = u;
    if (s || t(), !p || !g)
      return;
    const h = Za(f), v = Za(o.clientWidth - (d + p)), b = Za(o.clientHeight - (f + g)), y = Za(d), C = {
      rootMargin: -h + "px " + -v + "px " + -b + "px " + -y + "px",
      threshold: yt(0, Nn(1, l)) || 1
    };
    let E = !0;
    function S(P) {
      const x = P[0].intersectionRatio;
      if (x !== l) {
        if (!E)
          return i();
        x ? i(!1, x) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      x === 1 && !Cw(u, e.getBoundingClientRect()) && i(), E = !1;
    }
    try {
      n = new IntersectionObserver(S, {
        ...C,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(S, C);
    }
    n.observe(e);
  }
  return i(!0), a;
}
function fV(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = Ad(e), d = o || a ? [...u ? Zo(u) : [], ...Zo(t)] : [];
  d.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const f = u && s ? dV(u, n) : null;
  let p = -1, g = null;
  i && (g = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === u && g && (g.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var C;
      (C = g) == null || C.observe(t);
    })), n();
  }), u && !l && g.observe(u), g.observe(t));
  let h, v = l ? Qn(e) : null;
  l && b();
  function b() {
    const y = Qn(e);
    v && !Cw(v, y) && n(), v = y, h = requestAnimationFrame(b);
  }
  return n(), () => {
    var y;
    d.forEach((w) => {
      o && w.removeEventListener("scroll", n), a && w.removeEventListener("resize", n);
    }), f == null || f(), (y = g) == null || y.disconnect(), g = null, l && cancelAnimationFrame(h);
  };
}
const pV = U8, mV = G8, vV = H8, hV = K8, gV = j8, iv = z8, bV = Y8, yV = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: uV,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return W8(e, t, {
    ...o,
    platform: a
  });
};
var wV = typeof document < "u", xV = function() {
}, pi = wV ? ra : xV;
function Ii(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Ii(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !Ii(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Sw(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function sv(e, t) {
  const n = Sw(e);
  return Math.round(t * n) / n;
}
function $c(e) {
  const t = c.useRef(e);
  return pi(() => {
    t.current = e;
  }), t;
}
function CV(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: l,
    open: u
  } = e, [d, f] = c.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, g] = c.useState(r);
  Ii(p, r) || g(r);
  const [h, v] = c.useState(null), [b, y] = c.useState(null), w = c.useCallback((O) => {
    O !== P.current && (P.current = O, v(O));
  }, []), C = c.useCallback((O) => {
    O !== x.current && (x.current = O, y(O));
  }, []), E = a || h, S = i || b, P = c.useRef(null), x = c.useRef(null), N = c.useRef(d), R = l != null, M = $c(l), k = $c(o), B = $c(u), Z = c.useCallback(() => {
    if (!P.current || !x.current)
      return;
    const O = {
      placement: t,
      strategy: n,
      middleware: p
    };
    k.current && (O.platform = k.current), yV(P.current, x.current, O).then((V) => {
      const ne = {
        ...V,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: B.current !== !1
      };
      F.current && !Ii(N.current, ne) && (N.current = ne, qr.flushSync(() => {
        f(ne);
      }));
    });
  }, [p, t, n, k, B]);
  pi(() => {
    u === !1 && N.current.isPositioned && (N.current.isPositioned = !1, f((O) => ({
      ...O,
      isPositioned: !1
    })));
  }, [u]);
  const F = c.useRef(!1);
  pi(() => (F.current = !0, () => {
    F.current = !1;
  }), []), pi(() => {
    if (E && (P.current = E), S && (x.current = S), E && S) {
      if (M.current)
        return M.current(E, S, Z);
      Z();
    }
  }, [E, S, Z, M, R]);
  const H = c.useMemo(() => ({
    reference: P,
    floating: x,
    setReference: w,
    setFloating: C
  }), [w, C]), j = c.useMemo(() => ({
    reference: E,
    floating: S
  }), [E, S]), W = c.useMemo(() => {
    const O = {
      position: n,
      left: 0,
      top: 0
    };
    if (!j.floating)
      return O;
    const V = sv(j.floating, d.x), ne = sv(j.floating, d.y);
    return s ? {
      ...O,
      transform: "translate(" + V + "px, " + ne + "px)",
      ...Sw(j.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: V,
      top: ne
    };
  }, [n, s, j.floating, d.x, d.y]);
  return c.useMemo(() => ({
    ...d,
    update: Z,
    refs: H,
    elements: j,
    floatingStyles: W
  }), [d, Z, H, j, W]);
}
const SV = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? iv({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? iv({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, EV = (e, t) => ({
  ...pV(e),
  options: [e, t]
}), PV = (e, t) => ({
  ...mV(e),
  options: [e, t]
}), NV = (e, t) => ({
  ...bV(e),
  options: [e, t]
}), RV = (e, t) => ({
  ...vV(e),
  options: [e, t]
}), _V = (e, t) => ({
  ...hV(e),
  options: [e, t]
}), TV = (e, t) => ({
  ...gV(e),
  options: [e, t]
}), $V = (e, t) => ({
  ...SV(e),
  options: [e, t]
});
var MV = "Arrow", Ew = c.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ m(
    Y.svg,
    {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ m("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Ew.displayName = MV;
var OV = Ew, kd = "Popper", [Pw, tn] = De(kd), [DV, Nw] = Pw(kd), Rw = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = c.useState(null);
  return /* @__PURE__ */ m(DV, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Rw.displayName = kd;
var _w = "PopperAnchor", Tw = c.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = Nw(_w, n), i = c.useRef(null), s = te(t, i);
    return c.useEffect(() => {
      a.onAnchorChange((r == null ? void 0 : r.current) || i.current);
    }), r ? null : /* @__PURE__ */ m(Y.div, { ...o, ref: s });
  }
);
Tw.displayName = _w;
var Ld = "PopperContent", [AV, IV] = Pw(Ld), $w = c.forwardRef(
  (e, t) => {
    var z, X, Q, J, re, _;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: s = 0,
      avoidCollisions: l = !0,
      collisionBoundary: u = [],
      collisionPadding: d = 0,
      sticky: f = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: h,
      ...v
    } = e, b = Nw(Ld, n), [y, w] = c.useState(null), C = te(t, (K) => w(K)), [E, S] = c.useState(null), P = pa(E), x = (P == null ? void 0 : P.width) ?? 0, N = (P == null ? void 0 : P.height) ?? 0, R = r + (a !== "center" ? "-" + a : ""), M = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, k = Array.isArray(u) ? u : [u], B = k.length > 0, Z = {
      padding: M,
      boundary: k.filter(LV),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: B
    }, { refs: F, floatingStyles: H, placement: j, isPositioned: W, middlewareData: O } = CV({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: R,
      whileElementsMounted: (...K) => fV(...K, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        EV({ mainAxis: o + N, alignmentAxis: i }),
        l && PV({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? NV() : void 0,
          ...Z
        }),
        l && RV({ ...Z }),
        _V({
          ...Z,
          apply: ({ elements: K, rects: oe, availableWidth: de, availableHeight: ce }) => {
            const { width: le, height: ye } = oe.reference, pe = K.floating.style;
            pe.setProperty("--radix-popper-available-width", `${de}px`), pe.setProperty("--radix-popper-available-height", `${ce}px`), pe.setProperty("--radix-popper-anchor-width", `${le}px`), pe.setProperty("--radix-popper-anchor-height", `${ye}px`);
          }
        }),
        E && $V({ element: E, padding: s }),
        FV({ arrowWidth: x, arrowHeight: N }),
        p && TV({ strategy: "referenceHidden", ...Z })
      ]
    }), [V, ne] = Dw(j), q = fe(h);
    Ce(() => {
      W && (q == null || q());
    }, [W, q]);
    const A = (z = O.arrow) == null ? void 0 : z.x, D = (X = O.arrow) == null ? void 0 : X.y, L = ((Q = O.arrow) == null ? void 0 : Q.centerOffset) !== 0, [U, G] = c.useState();
    return Ce(() => {
      y && G(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ m(
      "div",
      {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: W ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: U,
          "--radix-popper-transform-origin": [
            (J = O.transformOrigin) == null ? void 0 : J.x,
            (re = O.transformOrigin) == null ? void 0 : re.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((_ = O.hide) == null ? void 0 : _.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ m(
          AV,
          {
            scope: n,
            placedSide: V,
            onArrowChange: S,
            arrowX: A,
            arrowY: D,
            shouldHideArrow: L,
            children: /* @__PURE__ */ m(
              Y.div,
              {
                "data-side": V,
                "data-align": ne,
                ...v,
                ref: C,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: W ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
$w.displayName = Ld;
var Mw = "PopperArrow", kV = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ow = c.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = IV(Mw, r), i = kV[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ m(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ m(
          OV,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Ow.displayName = Mw;
function LV(e) {
  return e !== null;
}
var FV = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, y, w;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, s = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, d] = Dw(n), f = { start: "0%", center: "50%", end: "100%" }[d], p = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + s / 2, g = (((w = o.arrow) == null ? void 0 : w.y) ?? 0) + l / 2;
    let h = "", v = "";
    return u === "bottom" ? (h = i ? f : `${p}px`, v = `${-l}px`) : u === "top" ? (h = i ? f : `${p}px`, v = `${r.floating.height + l}px`) : u === "right" ? (h = `${-l}px`, v = i ? f : `${g}px`) : u === "left" && (h = `${r.floating.width + l}px`, v = i ? f : `${g}px`), { data: { x: h, y: v } };
  }
});
function Dw(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var ho = Rw, go = Tw, Ca = $w, Sa = Ow, BV = "Portal", Aw = c.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, a] = c.useState(!1);
  Ce(() => a(!0), []);
  const i = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? vn.createPortal(/* @__PURE__ */ m(Y.div, { ...r, ref: t }), i) : null;
});
Aw.displayName = BV;
var Mc = "rovingFocusGroup.onEntryFocus", WV = { bubbles: !1, cancelable: !0 }, Cs = "RovingFocusGroup", [kl, Iw, zV] = hn(Cs), [HV, nn] = De(
  Cs,
  [zV]
), [jV, VV] = HV(Cs), kw = c.forwardRef(
  (e, t) => /* @__PURE__ */ m(kl.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ m(kl.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ m(UV, { ...e, ref: t }) }) })
);
kw.displayName = Cs;
var UV = c.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: i,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: l,
    onEntryFocus: u,
    preventScrollOnEntryFocus: d = !1,
    ...f
  } = e, p = c.useRef(null), g = te(t, p), h = Bt(a), [v = null, b] = Me({
    prop: i,
    defaultProp: s,
    onChange: l
  }), [y, w] = c.useState(!1), C = fe(u), E = Iw(n), S = c.useRef(!1), [P, x] = c.useState(0);
  return c.useEffect(() => {
    const N = p.current;
    if (N)
      return N.addEventListener(Mc, C), () => N.removeEventListener(Mc, C);
  }, [C]), /* @__PURE__ */ m(
    jV,
    {
      scope: n,
      orientation: r,
      dir: h,
      loop: o,
      currentTabStopId: v,
      onItemFocus: c.useCallback(
        (N) => b(N),
        [b]
      ),
      onItemShiftTab: c.useCallback(() => w(!0), []),
      onFocusableItemAdd: c.useCallback(
        () => x((N) => N + 1),
        []
      ),
      onFocusableItemRemove: c.useCallback(
        () => x((N) => N - 1),
        []
      ),
      children: /* @__PURE__ */ m(
        Y.div,
        {
          tabIndex: y || P === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: I(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: I(e.onFocus, (N) => {
            const R = !S.current;
            if (N.target === N.currentTarget && R && !y) {
              const M = new CustomEvent(Mc, WV);
              if (N.currentTarget.dispatchEvent(M), !M.defaultPrevented) {
                const k = E().filter((j) => j.focusable), B = k.find((j) => j.active), Z = k.find((j) => j.id === v), H = [B, Z, ...k].filter(
                  Boolean
                ).map((j) => j.ref.current);
                Bw(H, d);
              }
            }
            S.current = !1;
          }),
          onBlur: I(e.onBlur, () => w(!1))
        }
      )
    }
  );
}), Lw = "RovingFocusGroupItem", Fw = c.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      ...i
    } = e, s = Le(), l = a || s, u = VV(Lw, n), d = u.currentTabStopId === l, f = Iw(n), { onFocusableItemAdd: p, onFocusableItemRemove: g } = u;
    return c.useEffect(() => {
      if (r)
        return p(), () => g();
    }, [r, p, g]), /* @__PURE__ */ m(
      kl.ItemSlot,
      {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ m(
          Y.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": u.orientation,
            ...i,
            ref: t,
            onMouseDown: I(e.onMouseDown, (h) => {
              r ? u.onItemFocus(l) : h.preventDefault();
            }),
            onFocus: I(e.onFocus, () => u.onItemFocus(l)),
            onKeyDown: I(e.onKeyDown, (h) => {
              if (h.key === "Tab" && h.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (h.target !== h.currentTarget) return;
              const v = KV(h, u.orientation, u.dir);
              if (v !== void 0) {
                if (h.metaKey || h.ctrlKey || h.altKey || h.shiftKey) return;
                h.preventDefault();
                let y = f().filter((w) => w.focusable).map((w) => w.ref.current);
                if (v === "last") y.reverse();
                else if (v === "prev" || v === "next") {
                  v === "prev" && y.reverse();
                  const w = y.indexOf(h.currentTarget);
                  y = u.loop ? XV(y, w + 1) : y.slice(w + 1);
                }
                setTimeout(() => Bw(y));
              }
            })
          }
        )
      }
    );
  }
);
Fw.displayName = Lw;
var GV = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function YV(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function KV(e, t, n) {
  const r = YV(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return GV[r];
}
function Bw(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function XV(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Ea = kw, Pa = Fw, Ww = ro(), Oc = function() {
}, Ss = c.forwardRef(function(e, t) {
  var n = c.useRef(null), r = c.useState({
    onScrollCapture: Oc,
    onWheelCapture: Oc,
    onTouchMoveCapture: Oc
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, g = e.noIsolation, h = e.inert, v = e.allowPinchZoom, b = e.as, y = b === void 0 ? "div" : b, w = e.gapMode, C = nr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = p, S = no([n, t]), P = he(he({}, C), o);
  return c.createElement(
    c.Fragment,
    null,
    d && c.createElement(E, { sideCar: Ww, removeScrollBar: u, shards: f, noIsolation: g, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n, gapMode: w }),
    i ? c.cloneElement(c.Children.only(s), he(he({}, P), { ref: S })) : c.createElement(y, he({}, P, { className: l, ref: S }), s)
  );
});
Ss.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ss.classNames = {
  fullWidth: un,
  zeroRight: ln
};
var Ll = !1;
if (typeof window < "u")
  try {
    var Qa = Object.defineProperty({}, "passive", {
      get: function() {
        return Ll = !0, !0;
      }
    });
    window.addEventListener("test", Qa, Qa), window.removeEventListener("test", Qa, Qa);
  } catch {
    Ll = !1;
  }
var yr = Ll ? { passive: !1 } : !1, qV = function(e) {
  return e.tagName === "TEXTAREA";
}, zw = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !qV(e) && n[t] === "visible")
  );
}, ZV = function(e) {
  return zw(e, "overflowY");
}, QV = function(e) {
  return zw(e, "overflowX");
}, cv = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Hw(e, r);
    if (o) {
      var a = jw(e, r), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, JV = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, eU = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Hw = function(e, t) {
  return e === "v" ? ZV(t) : QV(t);
}, jw = function(e, t) {
  return e === "v" ? JV(t) : eU(t);
}, tU = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, nU = function(e, t, n, r, o) {
  var a = tU(e, window.getComputedStyle(t).direction), i = a * r, s = n.target, l = t.contains(s), u = !1, d = i > 0, f = 0, p = 0;
  do {
    var g = jw(e, s), h = g[0], v = g[1], b = g[2], y = v - b - a * h;
    (h || y) && Hw(e, s) && (f += y, p += h), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (d && Math.abs(f) < 1 || !d && Math.abs(p) < 1) && (u = !0), u;
}, Ja = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, lv = function(e) {
  return [e.deltaX, e.deltaY];
}, uv = function(e) {
  return e && "current" in e ? e.current : e;
}, rU = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, oU = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, aU = 0, wr = [];
function iU(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), o = c.useState(aU++)[0], a = c.useState(rr)[0], i = c.useRef(e);
  c.useEffect(function() {
    i.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = to([e.lockRef.current], (e.shards || []).map(uv), !0).filter(Boolean);
      return v.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = c.useCallback(function(v, b) {
    if ("touches" in v && v.touches.length === 2)
      return !i.current.allowPinchZoom;
    var y = Ja(v), w = n.current, C = "deltaX" in v ? v.deltaX : w[0] - y[0], E = "deltaY" in v ? v.deltaY : w[1] - y[1], S, P = v.target, x = Math.abs(C) > Math.abs(E) ? "h" : "v";
    if ("touches" in v && x === "h" && P.type === "range")
      return !1;
    var N = cv(x, P);
    if (!N)
      return !0;
    if (N ? S = x : (S = x === "v" ? "h" : "v", N = cv(x, P)), !N)
      return !1;
    if (!r.current && "changedTouches" in v && (C || E) && (r.current = S), !S)
      return !0;
    var R = r.current || S;
    return nU(R, b, v, R === "h" ? C : E);
  }, []), l = c.useCallback(function(v) {
    var b = v;
    if (!(!wr.length || wr[wr.length - 1] !== a)) {
      var y = "deltaY" in b ? lv(b) : Ja(b), w = t.current.filter(function(S) {
        return S.name === b.type && (S.target === b.target || b.target === S.shadowParent) && rU(S.delta, y);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var C = (i.current.shards || []).map(uv).filter(Boolean).filter(function(S) {
          return S.contains(b.target);
        }), E = C.length > 0 ? s(b, C[0]) : !i.current.noIsolation;
        E && b.cancelable && b.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(v, b, y, w) {
    var C = { name: v, delta: b, target: y, should: w, shadowParent: sU(y) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== C;
      });
    }, 1);
  }, []), d = c.useCallback(function(v) {
    n.current = Ja(v), r.current = void 0;
  }, []), f = c.useCallback(function(v) {
    u(v.type, lv(v), v.target, s(v, e.lockRef.current));
  }, []), p = c.useCallback(function(v) {
    u(v.type, Ja(v), v.target, s(v, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return wr.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, yr), document.addEventListener("touchmove", l, yr), document.addEventListener("touchstart", d, yr), function() {
      wr = wr.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", l, yr), document.removeEventListener("touchmove", l, yr), document.removeEventListener("touchstart", d, yr);
    };
  }, []);
  var g = e.removeScrollBar, h = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    h ? c.createElement(a, { styles: oU(o) }) : null,
    g ? c.createElement(ao, { gapMode: e.gapMode }) : null
  );
}
function sU(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const cU = oo(Ww, iU);
var Vw = c.forwardRef(function(e, t) {
  return c.createElement(Ss, he({}, e, { ref: t, sideCar: cU }));
});
Vw.classNames = Ss.classNames;
var Fl = ["Enter", " "], lU = ["ArrowDown", "PageUp", "Home"], Uw = ["ArrowUp", "PageDown", "End"], uU = [...lU, ...Uw], dU = {
  ltr: [...Fl, "ArrowRight"],
  rtl: [...Fl, "ArrowLeft"]
}, fU = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Na = "Menu", [Qo, pU, mU] = hn(Na), [lr, Ra] = De(Na, [
  mU,
  tn,
  nn
]), _a = tn(), Gw = nn(), [Yw, $n] = lr(Na), [vU, Ta] = lr(Na), Kw = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: i = !0 } = e, s = _a(t), [l, u] = c.useState(null), d = c.useRef(!1), f = fe(a), p = Bt(o);
  return c.useEffect(() => {
    const g = () => {
      d.current = !0, document.addEventListener("pointerdown", h, { capture: !0, once: !0 }), document.addEventListener("pointermove", h, { capture: !0, once: !0 });
    }, h = () => d.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", h, { capture: !0 }), document.removeEventListener("pointermove", h, { capture: !0 });
    };
  }, []), /* @__PURE__ */ m(ho, { ...s, children: /* @__PURE__ */ m(
    Yw,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: l,
      onContentChange: u,
      children: /* @__PURE__ */ m(
        vU,
        {
          scope: t,
          onClose: c.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: d,
          dir: p,
          modal: i,
          children: r
        }
      )
    }
  ) });
};
Kw.displayName = Na;
var hU = "MenuAnchor", Fd = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = _a(n);
    return /* @__PURE__ */ m(go, { ...o, ...r, ref: t });
  }
);
Fd.displayName = hU;
var Bd = "MenuPortal", [gU, Xw] = lr(Bd, {
  forceMount: void 0
}), qw = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = $n(Bd, t);
  return /* @__PURE__ */ m(gU, { scope: t, forceMount: n, children: /* @__PURE__ */ m(Be, { present: n || a.open, children: /* @__PURE__ */ m(Aw, { asChild: !0, container: o, children: r }) }) });
};
qw.displayName = Bd;
var Pt = "MenuContent", [bU, Wd] = lr(Pt), Zw = c.forwardRef(
  (e, t) => {
    const n = Xw(Pt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = $n(Pt, e.__scopeMenu), i = Ta(Pt, e.__scopeMenu);
    return /* @__PURE__ */ m(Qo.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ m(Be, { present: r || a.open, children: /* @__PURE__ */ m(Qo.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ m(yU, { ...o, ref: t }) : /* @__PURE__ */ m(wU, { ...o, ref: t }) }) }) });
  }
), yU = c.forwardRef(
  (e, t) => {
    const n = $n(Pt, e.__scopeMenu), r = c.useRef(null), o = te(t, r);
    return c.useEffect(() => {
      const a = r.current;
      if (a) return io(a);
    }, []), /* @__PURE__ */ m(
      zd,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: I(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), wU = c.forwardRef((e, t) => {
  const n = $n(Pt, e.__scopeMenu);
  return /* @__PURE__ */ m(
    zd,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), zd = c.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEntryFocus: l,
      onEscapeKeyDown: u,
      onPointerDownOutside: d,
      onFocusOutside: f,
      onInteractOutside: p,
      onDismiss: g,
      disableOutsideScroll: h,
      ...v
    } = e, b = $n(Pt, n), y = Ta(Pt, n), w = _a(n), C = Gw(n), E = pU(n), [S, P] = c.useState(null), x = c.useRef(null), N = te(t, x, b.onContentChange), R = c.useRef(0), M = c.useRef(""), k = c.useRef(0), B = c.useRef(null), Z = c.useRef("right"), F = c.useRef(0), H = h ? Vw : c.Fragment, j = h ? { as: Ke, allowPinchZoom: !0 } : void 0, W = (V) => {
      var z, X;
      const ne = M.current + V, q = E().filter((Q) => !Q.disabled), A = document.activeElement, D = (z = q.find((Q) => Q.ref.current === A)) == null ? void 0 : z.textValue, L = q.map((Q) => Q.textValue), U = OU(L, ne, D), G = (X = q.find((Q) => Q.textValue === U)) == null ? void 0 : X.ref.current;
      (function Q(J) {
        M.current = J, window.clearTimeout(R.current), J !== "" && (R.current = window.setTimeout(() => Q(""), 1e3));
      })(ne), G && setTimeout(() => G.focus());
    };
    c.useEffect(() => () => window.clearTimeout(R.current), []), M8();
    const O = c.useCallback((V) => {
      var q, A;
      return Z.current === ((q = B.current) == null ? void 0 : q.side) && AU(V, (A = B.current) == null ? void 0 : A.area);
    }, []);
    return /* @__PURE__ */ m(
      bU,
      {
        scope: n,
        searchRef: M,
        onItemEnter: c.useCallback(
          (V) => {
            O(V) && V.preventDefault();
          },
          [O]
        ),
        onItemLeave: c.useCallback(
          (V) => {
            var ne;
            O(V) || ((ne = x.current) == null || ne.focus(), P(null));
          },
          [O]
        ),
        onTriggerLeave: c.useCallback(
          (V) => {
            O(V) && V.preventDefault();
          },
          [O]
        ),
        pointerGraceTimerRef: k,
        onPointerGraceIntentChange: c.useCallback((V) => {
          B.current = V;
        }, []),
        children: /* @__PURE__ */ m(H, { ...j, children: /* @__PURE__ */ m(
          eo,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: I(a, (V) => {
              var ne;
              V.preventDefault(), (ne = x.current) == null || ne.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ m(
              fw,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: u,
                onPointerDownOutside: d,
                onFocusOutside: f,
                onInteractOutside: p,
                onDismiss: g,
                children: /* @__PURE__ */ m(
                  Ea,
                  {
                    asChild: !0,
                    ...C,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: S,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: I(l, (V) => {
                      y.isUsingKeyboardRef.current || V.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ m(
                      Ca,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": m0(b.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...w,
                        ...v,
                        ref: N,
                        style: { outline: "none", ...v.style },
                        onKeyDown: I(v.onKeyDown, (V) => {
                          const q = V.target.closest("[data-radix-menu-content]") === V.currentTarget, A = V.ctrlKey || V.altKey || V.metaKey, D = V.key.length === 1;
                          q && (V.key === "Tab" && V.preventDefault(), !A && D && W(V.key));
                          const L = x.current;
                          if (V.target !== L || !uU.includes(V.key)) return;
                          V.preventDefault();
                          const G = E().filter((z) => !z.disabled).map((z) => z.ref.current);
                          Uw.includes(V.key) && G.reverse(), $U(G);
                        }),
                        onBlur: I(e.onBlur, (V) => {
                          V.currentTarget.contains(V.target) || (window.clearTimeout(R.current), M.current = "");
                        }),
                        onPointerMove: I(
                          e.onPointerMove,
                          Jo((V) => {
                            const ne = V.target, q = F.current !== V.clientX;
                            if (V.currentTarget.contains(ne) && q) {
                              const A = V.clientX > F.current ? "right" : "left";
                              Z.current = A, F.current = V.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Zw.displayName = Pt;
var xU = "MenuGroup", Hd = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ m(Y.div, { role: "group", ...r, ref: t });
  }
);
Hd.displayName = xU;
var CU = "MenuLabel", Qw = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ m(Y.div, { ...r, ref: t });
  }
);
Qw.displayName = CU;
var ki = "MenuItem", dv = "menu.itemSelect", Es = c.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = c.useRef(null), i = Ta(ki, e.__scopeMenu), s = Wd(ki, e.__scopeMenu), l = te(t, a), u = c.useRef(!1), d = () => {
      const f = a.current;
      if (!n && f) {
        const p = new CustomEvent(dv, { bubbles: !0, cancelable: !0 });
        f.addEventListener(dv, (g) => r == null ? void 0 : r(g), { once: !0 }), Nt(f, p), p.defaultPrevented ? u.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ m(
      Jw,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: I(e.onClick, d),
        onPointerDown: (f) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, f), u.current = !0;
        },
        onPointerUp: I(e.onPointerUp, (f) => {
          var p;
          u.current || (p = f.currentTarget) == null || p.click();
        }),
        onKeyDown: I(e.onKeyDown, (f) => {
          const p = s.searchRef.current !== "";
          n || p && f.key === " " || Fl.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
Es.displayName = ki;
var Jw = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, i = Wd(ki, n), s = Gw(n), l = c.useRef(null), u = te(t, l), [d, f] = c.useState(!1), [p, g] = c.useState("");
    return c.useEffect(() => {
      const h = l.current;
      h && g((h.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ m(
      Qo.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ m(Pa, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ m(
          Y.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: u,
            onPointerMove: I(
              e.onPointerMove,
              Jo((h) => {
                r ? i.onItemLeave(h) : (i.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: I(
              e.onPointerLeave,
              Jo((h) => i.onItemLeave(h))
            ),
            onFocus: I(e.onFocus, () => f(!0)),
            onBlur: I(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), SU = "MenuCheckboxItem", e0 = c.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ m(a0, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ m(
      Es,
      {
        role: "menuitemcheckbox",
        "aria-checked": Li(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Ud(n),
        onSelect: I(
          o.onSelect,
          () => r == null ? void 0 : r(Li(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
e0.displayName = SU;
var t0 = "MenuRadioGroup", [EU, PU] = lr(
  t0,
  { value: void 0, onValueChange: () => {
  } }
), n0 = c.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = fe(r);
    return /* @__PURE__ */ m(EU, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ m(Hd, { ...o, ref: t }) });
  }
);
n0.displayName = t0;
var r0 = "MenuRadioItem", o0 = c.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = PU(r0, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ m(a0, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ m(
      Es,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": Ud(a),
        onSelect: I(
          r.onSelect,
          () => {
            var i;
            return (i = o.onValueChange) == null ? void 0 : i.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
o0.displayName = r0;
var jd = "MenuItemIndicator", [a0, NU] = lr(
  jd,
  { checked: !1 }
), i0 = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = NU(jd, n);
    return /* @__PURE__ */ m(
      Be,
      {
        present: r || Li(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ m(
          Y.span,
          {
            ...o,
            ref: t,
            "data-state": Ud(a.checked)
          }
        )
      }
    );
  }
);
i0.displayName = jd;
var RU = "MenuSeparator", s0 = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ m(
      Y.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
s0.displayName = RU;
var _U = "MenuArrow", c0 = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = _a(n);
    return /* @__PURE__ */ m(Sa, { ...o, ...r, ref: t });
  }
);
c0.displayName = _U;
var Vd = "MenuSub", [TU, l0] = lr(Vd), u0 = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = $n(Vd, t), i = _a(t), [s, l] = c.useState(null), [u, d] = c.useState(null), f = fe(o);
  return c.useEffect(() => (a.open === !1 && f(!1), () => f(!1)), [a.open, f]), /* @__PURE__ */ m(ho, { ...i, children: /* @__PURE__ */ m(
    Yw,
    {
      scope: t,
      open: r,
      onOpenChange: f,
      content: u,
      onContentChange: d,
      children: /* @__PURE__ */ m(
        TU,
        {
          scope: t,
          contentId: Le(),
          triggerId: Le(),
          trigger: s,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
u0.displayName = Vd;
var Ao = "MenuSubTrigger", d0 = c.forwardRef(
  (e, t) => {
    const n = $n(Ao, e.__scopeMenu), r = Ta(Ao, e.__scopeMenu), o = l0(Ao, e.__scopeMenu), a = Wd(Ao, e.__scopeMenu), i = c.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: l } = a, u = { __scopeMenu: e.__scopeMenu }, d = c.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return c.useEffect(() => d, [d]), c.useEffect(() => {
      const f = s.current;
      return () => {
        window.clearTimeout(f), l(null);
      };
    }, [s, l]), /* @__PURE__ */ m(Fd, { asChild: !0, ...u, children: /* @__PURE__ */ m(
      Jw,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": m0(n.open),
        ...e,
        ref: oa(t, o.onTriggerChange),
        onClick: (f) => {
          var p;
          (p = e.onClick) == null || p.call(e, f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: I(
          e.onPointerMove,
          Jo((f) => {
            a.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: I(
          e.onPointerLeave,
          Jo((f) => {
            var g, h;
            d();
            const p = (g = n.content) == null ? void 0 : g.getBoundingClientRect();
            if (p) {
              const v = (h = n.content) == null ? void 0 : h.dataset.side, b = v === "right", y = b ? -5 : 5, w = p[b ? "left" : "right"], C = p[b ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + y, y: f.clientY },
                  { x: w, y: p.top },
                  { x: C, y: p.top },
                  { x: C, y: p.bottom },
                  { x: w, y: p.bottom }
                ],
                side: v
              }), window.clearTimeout(s.current), s.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(f), f.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: I(e.onKeyDown, (f) => {
          var g;
          const p = a.searchRef.current !== "";
          e.disabled || p && f.key === " " || dU[r.dir].includes(f.key) && (n.onOpenChange(!0), (g = n.content) == null || g.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
d0.displayName = Ao;
var f0 = "MenuSubContent", p0 = c.forwardRef(
  (e, t) => {
    const n = Xw(Pt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = $n(Pt, e.__scopeMenu), i = Ta(Pt, e.__scopeMenu), s = l0(f0, e.__scopeMenu), l = c.useRef(null), u = te(t, l);
    return /* @__PURE__ */ m(Qo.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ m(Be, { present: r || a.open, children: /* @__PURE__ */ m(Qo.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ m(
      zd,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
        ref: u,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (d) => {
          var f;
          i.isUsingKeyboardRef.current && ((f = l.current) == null || f.focus()), d.preventDefault();
        },
        onCloseAutoFocus: (d) => d.preventDefault(),
        onFocusOutside: I(e.onFocusOutside, (d) => {
          d.target !== s.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: I(e.onEscapeKeyDown, (d) => {
          i.onClose(), d.preventDefault();
        }),
        onKeyDown: I(e.onKeyDown, (d) => {
          var g;
          const f = d.currentTarget.contains(d.target), p = fU[i.dir].includes(d.key);
          f && p && (a.onOpenChange(!1), (g = s.trigger) == null || g.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
p0.displayName = f0;
function m0(e) {
  return e ? "open" : "closed";
}
function Li(e) {
  return e === "indeterminate";
}
function Ud(e) {
  return Li(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function $U(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function MU(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function OU(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = MU(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function DU(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, l = t[a].y, u = t[i].x, d = t[i].y;
    l > r != d > r && n < (u - s) * (r - l) / (d - l) + s && (o = !o);
  }
  return o;
}
function AU(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return DU(n, t);
}
function Jo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Gd = Kw, Yd = Fd, Kd = qw, Xd = Zw, qd = Hd, Zd = Qw, Qd = Es, Jd = e0, ef = n0, tf = o0, nf = i0, rf = s0, of = c0, af = u0, sf = d0, cf = p0, lf = "ContextMenu", [IU, hee] = De(lf, [
  Ra
]), Qe = Ra(), [kU, v0] = IU(lf), h0 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [i, s] = c.useState(!1), l = Qe(t), u = fe(r), d = c.useCallback(
    (f) => {
      s(f), u(f);
    },
    [u]
  );
  return /* @__PURE__ */ m(
    kU,
    {
      scope: t,
      open: i,
      onOpenChange: d,
      modal: a,
      children: /* @__PURE__ */ m(
        Gd,
        {
          ...l,
          dir: o,
          open: i,
          onOpenChange: d,
          modal: a,
          children: n
        }
      )
    }
  );
};
h0.displayName = lf;
var g0 = "ContextMenuTrigger", b0 = c.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = v0(g0, n), i = Qe(n), s = c.useRef({ x: 0, y: 0 }), l = c.useRef({
      getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...s.current })
    }), u = c.useRef(0), d = c.useCallback(
      () => window.clearTimeout(u.current),
      []
    ), f = (p) => {
      s.current = { x: p.clientX, y: p.clientY }, a.onOpenChange(!0);
    };
    return c.useEffect(() => d, [d]), c.useEffect(() => void (r && d()), [r, d]), /* @__PURE__ */ ee(Fe, { children: [
      /* @__PURE__ */ m(Yd, { ...i, virtualRef: l }),
      /* @__PURE__ */ m(
        Y.span,
        {
          "data-state": a.open ? "open" : "closed",
          "data-disabled": r ? "" : void 0,
          ...o,
          ref: t,
          style: { WebkitTouchCallout: "none", ...e.style },
          onContextMenu: r ? e.onContextMenu : I(e.onContextMenu, (p) => {
            d(), f(p), p.preventDefault();
          }),
          onPointerDown: r ? e.onPointerDown : I(
            e.onPointerDown,
            ei((p) => {
              d(), u.current = window.setTimeout(() => f(p), 700);
            })
          ),
          onPointerMove: r ? e.onPointerMove : I(e.onPointerMove, ei(d)),
          onPointerCancel: r ? e.onPointerCancel : I(e.onPointerCancel, ei(d)),
          onPointerUp: r ? e.onPointerUp : I(e.onPointerUp, ei(d))
        }
      )
    ] });
  }
);
b0.displayName = g0;
var LU = "ContextMenuPortal", y0 = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = Qe(t);
  return /* @__PURE__ */ m(Kd, { ...r, ...n });
};
y0.displayName = LU;
var w0 = "ContextMenuContent", x0 = c.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = v0(w0, n), a = Qe(n), i = c.useRef(!1);
    return /* @__PURE__ */ m(
      Xd,
      {
        ...a,
        ...r,
        ref: t,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (s) => {
          var l;
          (l = e.onCloseAutoFocus) == null || l.call(e, s), !s.defaultPrevented && i.current && s.preventDefault(), i.current = !1;
        },
        onInteractOutside: (s) => {
          var l;
          (l = e.onInteractOutside) == null || l.call(e, s), !s.defaultPrevented && !o.modal && (i.current = !0);
        },
        style: {
          ...e.style,
          "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
x0.displayName = w0;
var FU = "ContextMenuGroup", C0 = c.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = Qe(n);
    return /* @__PURE__ */ m(qd, { ...o, ...r, ref: t });
  }
);
C0.displayName = FU;
var BU = "ContextMenuLabel", S0 = c.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = Qe(n);
    return /* @__PURE__ */ m(Zd, { ...o, ...r, ref: t });
  }
);
S0.displayName = BU;
var WU = "ContextMenuItem", E0 = c.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = Qe(n);
    return /* @__PURE__ */ m(Qd, { ...o, ...r, ref: t });
  }
);
E0.displayName = WU;
var zU = "ContextMenuCheckboxItem", P0 = c.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Qe(n);
  return /* @__PURE__ */ m(Jd, { ...o, ...r, ref: t });
});
P0.displayName = zU;
var HU = "ContextMenuRadioGroup", N0 = c.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Qe(n);
  return /* @__PURE__ */ m(ef, { ...o, ...r, ref: t });
});
N0.displayName = HU;
var jU = "ContextMenuRadioItem", R0 = c.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Qe(n);
  return /* @__PURE__ */ m(tf, { ...o, ...r, ref: t });
});
R0.displayName = jU;
var VU = "ContextMenuItemIndicator", _0 = c.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Qe(n);
  return /* @__PURE__ */ m(nf, { ...o, ...r, ref: t });
});
_0.displayName = VU;
var UU = "ContextMenuSeparator", T0 = c.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Qe(n);
  return /* @__PURE__ */ m(rf, { ...o, ...r, ref: t });
});
T0.displayName = UU;
var GU = "ContextMenuArrow", YU = c.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = Qe(n);
    return /* @__PURE__ */ m(of, { ...o, ...r, ref: t });
  }
);
YU.displayName = GU;
var KU = "ContextMenuSub", $0 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, i = Qe(t), [s, l] = Me({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ m(af, { ...i, open: s, onOpenChange: l, children: n });
};
$0.displayName = KU;
var XU = "ContextMenuSubTrigger", M0 = c.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Qe(n);
  return /* @__PURE__ */ m(sf, { ...o, ...r, ref: t });
});
M0.displayName = XU;
var qU = "ContextMenuSubContent", O0 = c.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Qe(n);
  return /* @__PURE__ */ m(
    cf,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
O0.displayName = qU;
function ei(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
var ZU = h0, QU = b0, D0 = y0, A0 = x0, JU = C0, I0 = S0, k0 = E0, L0 = P0, eG = N0, F0 = R0, B0 = _0, W0 = T0, tG = $0, z0 = M0, H0 = O0;
const gee = ZU, bee = QU, yee = JU, wee = D0, xee = tG, Cee = eG, nG = c.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ ee(
  z0,
  {
    ref: o,
    className: $(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ m(Qr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
nG.displayName = z0.displayName;
const rG = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  H0,
  {
    ref: n,
    className: $(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
rG.displayName = H0.displayName;
const oG = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(D0, { children: /* @__PURE__ */ m(
  A0,
  {
    ref: n,
    className: $(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
) }));
oG.displayName = A0.displayName;
const aG = c.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ m(
  k0,
  {
    ref: r,
    className: $(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
aG.displayName = k0.displayName;
const iG = c.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ ee(
  L0,
  {
    ref: o,
    className: $(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ m("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ m(B0, { children: /* @__PURE__ */ m(Zr, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
iG.displayName = L0.displayName;
const sG = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ ee(
  F0,
  {
    ref: r,
    className: $(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ m("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ m(B0, { children: /* @__PURE__ */ m(es, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
sG.displayName = F0.displayName;
const cG = c.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ m(
  I0,
  {
    ref: r,
    className: $(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
cG.displayName = I0.displayName;
const lG = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  W0,
  {
    ref: n,
    className: $("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
lG.displayName = W0.displayName;
const uG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m(
  "span",
  {
    className: $(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
uG.displayName = "ContextMenuShortcut";
function dG(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const j0 = T.createContext({
  drawerRef: {
    current: null
  },
  overlayRef: {
    current: null
  },
  onPress: () => {
  },
  onRelease: () => {
  },
  onDrag: () => {
  },
  onNestedDrag: () => {
  },
  onNestedOpenChange: () => {
  },
  onNestedRelease: () => {
  },
  openProp: void 0,
  dismissible: !1,
  isOpen: !1,
  isDragging: !1,
  keyboardIsOpen: {
    current: !1
  },
  snapPointsOffset: null,
  snapPoints: null,
  modal: !1,
  shouldFade: !1,
  activeSnapPoint: null,
  onOpenChange: () => {
  },
  setActiveSnapPoint: () => {
  },
  closeDrawer: () => {
  },
  direction: "bottom",
  shouldScaleBackground: !1,
  setBackgroundColorOnScale: !0,
  noBodyStyles: !1
}), uf = () => {
  const e = T.useContext(j0);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
dG(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.data-vaul-dragging .data-vaul-scrollable [vault-drawer-direction=top]{overflow-y:hidden!important}.data-vaul-dragging .data-vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.data-vaul-dragging .data-vaul-scrollable [vault-drawer-direction=left]{overflow-x:hidden!important}.data-vaul-dragging .data-vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-vaul-snap-points=false][data-state=closed]{animation-name:fadeOut}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,100%,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,100%,0)}}@keyframes slideFromTop{from{transform:translate3d(0,-100%,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,-100%,0)}}@keyframes slideFromLeft{from{transform:translate3d(-100%,0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(-100%,0,0)}}@keyframes slideFromRight{from{transform:translate3d(100%,0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(100%,0,0)}}`);
const fG = typeof window < "u" ? ra : Oe;
function Bl(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
function pG() {
  return df(/^Mac/);
}
function mG() {
  return df(/^iPhone/);
}
function vG() {
  return df(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  pG() && navigator.maxTouchPoints > 1;
}
function V0() {
  return mG() || vG();
}
function df(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const Dc = typeof document < "u" && window.visualViewport;
function fv(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function U0(e) {
  for (fv(e) && (e = e.parentElement); e && !fv(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const hG = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
let ti = 0, Ac;
function gG(e = {}) {
  let { isDisabled: t } = e;
  fG(() => {
    if (!t)
      return ti++, ti === 1 && (V0() ? Ac = yG() : Ac = bG()), () => {
        ti--, ti === 0 && Ac();
      };
  }, [
    t
  ]);
}
function bG() {
  return Bl(G0(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
}
function yG() {
  let e, t = 0, n = (f) => {
    e = U0(f.target), !(e === document.documentElement && e === document.body) && (t = f.changedTouches[0].pageY);
  }, r = (f) => {
    if (!e || e === document.documentElement || e === document.body) {
      f.preventDefault();
      return;
    }
    let p = f.changedTouches[0].pageY, g = e.scrollTop, h = e.scrollHeight - e.clientHeight;
    h !== 0 && ((g <= 0 && p > t || g >= h && p < t) && f.preventDefault(), t = p);
  }, o = (f) => {
    let p = f.target;
    Wl(p) && p !== document.activeElement && (f.preventDefault(), p.style.transform = "translateY(-2000px)", p.focus(), requestAnimationFrame(() => {
      p.style.transform = "";
    }));
  }, a = (f) => {
    let p = f.target;
    Wl(p) && (p.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      p.style.transform = "", Dc && (Dc.height < window.innerHeight ? requestAnimationFrame(() => {
        pv(p);
      }) : Dc.addEventListener("resize", () => pv(p), {
        once: !0
      }));
    }));
  }, i = () => {
    window.scrollTo(0, 0);
  }, s = window.pageXOffset, l = window.pageYOffset, u = Bl(G0(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let d = Bl($o(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), $o(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), $o(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), $o(document, "focus", a, !0), $o(window, "scroll", i));
  return () => {
    u(), d(), window.scrollTo(s, l);
  };
}
function G0(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function $o(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function pv(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = U0(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom;
      const i = n.getBoundingClientRect().bottom;
      a > i && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function Wl(e) {
  return e instanceof HTMLInputElement && !hG.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function wG(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function xG(...e) {
  return (t) => e.forEach((n) => wG(n, t));
}
function Y0(...e) {
  return c.useCallback(xG(...e), e);
}
const CG = /* @__PURE__ */ new WeakMap();
function Ye(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && CG.set(e, r);
}
const Ue = (e) => {
  switch (e) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return e;
  }
};
function ni(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let o = r.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[Ue(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[Ue(t) ? 5 : 4]) : null);
}
function SG(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function Ic(e, t) {
  if (!e) return () => {
  };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function EG(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const je = {
  DURATION: 0.5,
  EASE: [
    0.32,
    0.72,
    0,
    1
  ]
}, K0 = 0.4, PG = 0.25, NG = 100, X0 = 8, In = 16, zl = 26, kc = "vaul-dragging";
function q0(e) {
  const t = T.useRef(e);
  return T.useEffect(() => {
    t.current = e;
  }), T.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function RG({ defaultProp: e, onChange: t }) {
  const n = T.useState(e), [r] = n, o = T.useRef(r), a = q0(t);
  return T.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
function Z0({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = RG({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, i = a ? e : r, s = q0(n), l = T.useCallback((u) => {
    if (a) {
      const f = typeof u == "function" ? u(e) : u;
      f !== e && s(f);
    } else
      o(u);
  }, [
    a,
    e,
    o,
    s
  ]);
  return [
    i,
    l
  ];
}
function _G({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: i, direction: s = "bottom" }) {
  const [l, u] = Z0({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), [d, f] = T.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  T.useEffect(() => {
    function S() {
      f({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", S), () => window.removeEventListener("resize", S);
  }, []);
  const p = T.useMemo(() => l === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    l
  ]), g = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === l || !n, h = T.useMemo(() => n == null ? void 0 : n.findIndex((S) => S === l), [
    n,
    l
  ]), v = T.useMemo(() => {
    var S;
    return (S = n == null ? void 0 : n.map((P) => {
      const x = typeof P == "string";
      let N = 0;
      if (x && (N = parseInt(P, 10)), Ue(s)) {
        const M = x ? N : d ? P * d.innerHeight : 0;
        return d ? s === "bottom" ? d.innerHeight - M : -d.innerHeight + M : M;
      }
      const R = x ? N : d ? P * d.innerWidth : 0;
      return d ? s === "right" ? d.innerWidth - R : -d.innerWidth + R : R;
    })) != null ? S : [];
  }, [
    n,
    d
  ]), b = T.useMemo(() => h !== null ? v == null ? void 0 : v[h] : null, [
    v,
    h
  ]), y = T.useCallback((S) => {
    var P;
    const x = (P = v == null ? void 0 : v.findIndex((N) => N === S)) != null ? P : null;
    i(x), Ye(r.current, {
      transition: `transform ${je.DURATION}s cubic-bezier(${je.EASE.join(",")})`,
      transform: Ue(s) ? `translate3d(0, ${S}px, 0)` : `translate3d(${S}px, 0, 0)`
    }), v && x !== v.length - 1 && x !== a ? Ye(o.current, {
      transition: `opacity ${je.DURATION}s cubic-bezier(${je.EASE.join(",")})`,
      opacity: "0"
    }) : Ye(o.current, {
      transition: `opacity ${je.DURATION}s cubic-bezier(${je.EASE.join(",")})`,
      opacity: "1"
    }), u(x !== null ? n == null ? void 0 : n[x] : null);
  }, [
    r.current,
    n,
    v,
    a,
    o,
    u
  ]);
  T.useEffect(() => {
    if (l || e) {
      var S;
      const P = (S = n == null ? void 0 : n.findIndex((x) => x === e || x === l)) != null ? S : -1;
      v && P !== -1 && typeof v[P] == "number" && y(v[P]);
    }
  }, [
    l,
    e,
    n,
    v,
    y
  ]);
  function w({ draggedDistance: S, closeDrawer: P, velocity: x, dismissible: N }) {
    if (a === void 0) return;
    const R = s === "bottom" || s === "right" ? (b ?? 0) - S : (b ?? 0) + S, M = h === a - 1, k = h === 0, B = S > 0;
    if (M && Ye(o.current, {
      transition: `opacity ${je.DURATION}s cubic-bezier(${je.EASE.join(",")})`
    }), x > 2 && !B) {
      N ? P() : y(v[0]);
      return;
    }
    if (x > 2 && B && v && n) {
      y(v[n.length - 1]);
      return;
    }
    const Z = v == null ? void 0 : v.reduce((H, j) => typeof H != "number" || typeof j != "number" ? H : Math.abs(j - R) < Math.abs(H - R) ? j : H), F = Ue(s) ? window.innerHeight : window.innerWidth;
    if (x > K0 && Math.abs(S) < F * 0.4) {
      const H = B ? 1 : -1;
      if (H > 0 && p) {
        y(v[n.length - 1]);
        return;
      }
      if (k && H < 0 && N && P(), h === null) return;
      y(v[h + H]);
      return;
    }
    y(Z);
  }
  function C({ draggedDistance: S }) {
    if (b === null) return;
    const P = s === "bottom" || s === "right" ? b - S : b + S;
    (s === "bottom" || s === "right") && P < v[v.length - 1] || (s === "top" || s === "left") && P > v[v.length - 1] || Ye(r.current, {
      transform: Ue(s) ? `translate3d(0, ${P}px, 0)` : `translate3d(${P}px, 0, 0)`
    });
  }
  function E(S, P) {
    if (!n || typeof h != "number" || !v || a === void 0) return null;
    const x = h === a - 1;
    if (h >= a && P)
      return 0;
    if (x && !P) return 1;
    if (!g && !x) return null;
    const R = x ? h + 1 : h - 1, M = x ? v[R] - v[R - 1] : v[R + 1] - v[R], k = S / Math.abs(M);
    return x ? 1 - k : k;
  }
  return {
    isLastSnapPoint: p,
    activeSnapPoint: l,
    shouldFade: g,
    getPercentageDragged: E,
    setActiveSnapPoint: u,
    activeSnapPointIndex: h,
    onRelease: w,
    onDrag: C,
    snapPointsOffset: v
  };
}
const TG = () => () => {
};
function $G() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: o } = uf(), a = T.useRef(null), i = dn(() => document.body.style.backgroundColor, []);
  function s() {
    return (window.innerWidth - zl) / window.innerWidth;
  }
  T.useEffect(() => {
    if (t && n) {
      a.current && clearTimeout(a.current);
      const l = document.querySelector("[data-vaul-drawer-wrapper]"), u = EG(r && !o ? Ic(document.body, {
        background: "black"
      }) : TG, Ic(l, {
        transformOrigin: Ue(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${je.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${je.EASE.join(",")})`
      })), d = Ic(l, {
        borderRadius: `${X0}px`,
        overflow: "hidden",
        ...Ue(e) ? {
          transform: `scale(${s()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${s()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      return () => {
        d(), a.current = window.setTimeout(() => {
          u(), i ? document.body.style.background = i : document.body.style.removeProperty("background");
        }, je.DURATION * 1e3);
      };
    }
  }, [
    t,
    n,
    i
  ]);
}
function MG({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: o, snapPoints: a, shouldScaleBackground: i = !1, setBackgroundColorOnScale: s = !0, closeThreshold: l = PG, scrollLockTimeout: u = NG, dismissible: d = !0, fadeFromIndex: f = a && a.length - 1, activeSnapPoint: p, setActiveSnapPoint: g, fixed: h, modal: v = !0, onClose: b, noBodyStyles: y, direction: w = "bottom", defaultOpen: C = !1, repositionInputs: E = !0 }) {
  var S;
  const [P = !1, x] = Z0({
    defaultProp: C,
    prop: e,
    onChange: t
  }), [N, R] = T.useState(!1), [M, k] = T.useState(!1), [B, Z] = T.useState(!1), F = T.useRef(null), H = T.useRef(null), j = T.useRef(null), W = T.useRef(null), O = T.useRef(null), V = T.useRef(!1), ne = T.useRef(null), q = T.useRef(0), A = T.useRef(!1), D = T.useRef(0), L = T.useRef(null), U = T.useRef(((S = L.current) == null ? void 0 : S.getBoundingClientRect().height) || 0), G = T.useRef(0), z = T.useCallback((ae) => {
    a && ae === _.length - 1 && (H.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: X, activeSnapPointIndex: Q, setActiveSnapPoint: J, onRelease: re, snapPointsOffset: _, onDrag: K, shouldFade: oe, getPercentageDragged: de } = _G({
    snapPoints: a,
    activeSnapPointProp: p,
    setActiveSnapPointProp: g,
    drawerRef: L,
    fadeFromIndex: f,
    overlayRef: F,
    onSnapPointChange: z,
    direction: w
  });
  gG({
    isDisabled: !P || M || !v || B || !N || !E
  });
  function ce() {
    return (window.innerWidth - zl) / window.innerWidth;
  }
  function le(ae) {
    var ge;
    !d && !a || L.current && !L.current.contains(ae.target) || (U.current = ((ge = L.current) == null ? void 0 : ge.getBoundingClientRect().height) || 0, k(!0), j.current = /* @__PURE__ */ new Date(), V0() && window.addEventListener("touchend", () => V.current = !1, {
      once: !0
    }), ae.target.setPointerCapture(ae.pointerId), q.current = Ue(w) ? ae.clientY : ae.clientX);
  }
  function ye(ae, ge) {
    var be;
    let ie = ae;
    const we = (be = window.getSelection()) == null ? void 0 : be.toString(), Se = L.current ? ni(L.current, w) : null, He = /* @__PURE__ */ new Date();
    if (ie.hasAttribute("data-vaul-no-drag") || ie.closest("[data-vaul-no-drag]"))
      return !1;
    if (w === "right" || w === "left")
      return !0;
    if (H.current && He.getTime() - H.current.getTime() < 500)
      return !1;
    if (Se !== null && (w === "bottom" ? Se > 0 : Se < 0))
      return !0;
    if (we && we.length > 0)
      return !1;
    if (O.current && He.getTime() - O.current.getTime() < u && Se === 0 || ge)
      return O.current = He, !1;
    for (; ie; ) {
      if (ie.scrollHeight > ie.clientHeight) {
        if (ie.scrollTop !== 0)
          return O.current = /* @__PURE__ */ new Date(), !1;
        if (ie.getAttribute("role") === "dialog")
          return !0;
      }
      ie = ie.parentNode;
    }
    return !0;
  }
  function pe(ae) {
    if (L.current && M) {
      const ge = w === "bottom" || w === "right" ? 1 : -1, be = (q.current - (Ue(w) ? ae.clientY : ae.clientX)) * ge, ie = be > 0, we = a && !d && !ie;
      if (we && Q === 0) return;
      const Se = Math.abs(be), He = document.querySelector("[data-vaul-drawer-wrapper]");
      let Xe = Se / U.current;
      const lt = de(Se, ie);
      if (lt !== null && (Xe = lt), we && Xe >= 1 || !V.current && !ye(ae.target, ie)) return;
      if (L.current.classList.add(kc), V.current = !0, Ye(L.current, {
        transition: "none"
      }), Ye(F.current, {
        transition: "none"
      }), a && K({
        draggedDistance: be
      }), ie && !a) {
        const $t = SG(be), se = Math.min($t * -1, 0) * ge;
        Ye(L.current, {
          transform: Ue(w) ? `translate3d(0, ${se}px, 0)` : `translate3d(${se}px, 0, 0)`
        });
        return;
      }
      const rt = 1 - Xe;
      if ((oe || f && Q === f - 1) && (r == null || r(ae, Xe), Ye(F.current, {
        opacity: `${rt}`,
        transition: "none"
      }, !0)), He && F.current && i) {
        const $t = Math.min(ce() + Xe * (1 - ce()), 1), se = 8 - Xe * 8, Pe = Math.max(0, 14 - Xe * 14);
        Ye(He, {
          borderRadius: `${se}px`,
          transform: Ue(w) ? `scale(${$t}) translate3d(0, ${Pe}px, 0)` : `scale(${$t}) translate3d(${Pe}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!a) {
        const $t = Se * ge;
        Ye(L.current, {
          transform: Ue(w) ? `translate3d(0, ${$t}px, 0)` : `translate3d(${$t}px, 0, 0)`
        });
      }
    }
  }
  T.useEffect(() => {
    var ae;
    function ge() {
      if (!L.current) return;
      const be = document.activeElement;
      if (Wl(be) || A.current) {
        var ie;
        const we = ((ie = window.visualViewport) == null ? void 0 : ie.height) || 0;
        let Se = window.innerHeight - we;
        const He = L.current.getBoundingClientRect().height || 0;
        G.current || (G.current = He);
        const Xe = L.current.getBoundingClientRect().top;
        if (Math.abs(D.current - Se) > 60 && (A.current = !A.current), a && a.length > 0 && _ && Q) {
          const lt = _[Q] || 0;
          Se += lt;
        }
        if (D.current = Se, He > we || A.current) {
          const lt = L.current.getBoundingClientRect().height;
          let rt = lt;
          lt > we && (rt = we - zl), h ? L.current.style.height = `${lt - Math.max(Se, 0)}px` : L.current.style.height = `${Math.max(rt, we - Xe)}px`;
        } else
          L.current.style.height = `${G.current}px`;
        a && a.length > 0 && !A.current ? L.current.style.bottom = "0px" : L.current.style.bottom = `${Math.max(Se, 0)}px`;
      }
    }
    return (ae = window.visualViewport) == null || ae.addEventListener("resize", ge), () => {
      var be;
      return (be = window.visualViewport) == null ? void 0 : be.removeEventListener("resize", ge);
    };
  }, [
    Q,
    a,
    _
  ]);
  function Ee() {
    ct(), b == null || b(), x(!1), setTimeout(() => {
      a && J(a[0]);
    }, je.DURATION * 1e3);
  }
  function Ve() {
    if (!L.current) return;
    const ae = document.querySelector("[data-vaul-drawer-wrapper]"), ge = ni(L.current, w);
    Ye(L.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${je.DURATION}s cubic-bezier(${je.EASE.join(",")})`
    }), Ye(F.current, {
      transition: `opacity ${je.DURATION}s cubic-bezier(${je.EASE.join(",")})`,
      opacity: "1"
    }), i && ge && ge > 0 && P && Ye(ae, {
      borderRadius: `${X0}px`,
      overflow: "hidden",
      ...Ue(w) ? {
        transform: `scale(${ce()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${ce()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${je.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${je.EASE.join(",")})`
    }, !0);
  }
  function ct() {
    !M || !L.current || (L.current.classList.remove(kc), V.current = !1, k(!1), W.current = /* @__PURE__ */ new Date());
  }
  function Ge(ae) {
    if (!M || !L.current) return;
    L.current.classList.remove(kc), V.current = !1, k(!1), W.current = /* @__PURE__ */ new Date();
    const ge = ni(L.current, w);
    if (!ye(ae.target, !1) || !ge || Number.isNaN(ge) || j.current === null) return;
    const be = W.current.getTime() - j.current.getTime(), ie = q.current - (Ue(w) ? ae.clientY : ae.clientX), we = Math.abs(ie) / be;
    if (we > 0.05 && (Z(!0), setTimeout(() => {
      Z(!1);
    }, 200)), a) {
      re({
        draggedDistance: ie * (w === "bottom" || w === "right" ? 1 : -1),
        closeDrawer: Ee,
        velocity: we,
        dismissible: d
      }), o == null || o(ae, !0);
      return;
    }
    if (w === "bottom" || w === "right" ? ie > 0 : ie < 0) {
      Ve(), o == null || o(ae, !0);
      return;
    }
    if (we > K0) {
      Ee(), o == null || o(ae, !1);
      return;
    }
    var Se;
    const He = Math.min((Se = L.current.getBoundingClientRect().height) != null ? Se : 0, window.innerHeight);
    if (ge >= He * l) {
      Ee(), o == null || o(ae, !1);
      return;
    }
    o == null || o(ae, !0), Ve();
  }
  T.useEffect(() => {
    P && (Ye(document.documentElement, {
      scrollBehavior: "auto"
    }), H.current = /* @__PURE__ */ new Date());
  }, [
    P
  ]), T.useEffect(() => {
    if (L.current) {
      var ae;
      const ge = L == null || (ae = L.current) == null ? void 0 : ae.querySelectorAll("*");
      ge == null || ge.forEach((be) => {
        const ie = be;
        (ie.scrollHeight > ie.clientHeight || ie.scrollWidth > ie.clientWidth) && ie.classList.add("vaul-scrollable");
      });
    }
  }, [
    P
  ]);
  function tt(ae) {
    const ge = ae ? (window.innerWidth - In) / window.innerWidth : 1, be = ae ? -In : 0;
    ne.current && window.clearTimeout(ne.current), Ye(L.current, {
      transition: `transform ${je.DURATION}s cubic-bezier(${je.EASE.join(",")})`,
      transform: `scale(${ge}) translate3d(0, ${be}px, 0)`
    }), !ae && L.current && (ne.current = setTimeout(() => {
      const ie = ni(L.current, w);
      Ye(L.current, {
        transition: "none",
        transform: Ue(w) ? `translate3d(0, ${ie}px, 0)` : `translate3d(${ie}px, 0, 0)`
      });
    }, 500));
  }
  function nt(ae, ge) {
    if (ge < 0) return;
    const be = Ue(w) ? window.innerHeight : window.innerWidth, ie = (be - In) / be, we = ie + ge * (1 - ie), Se = -In + ge * In;
    Ye(L.current, {
      transform: Ue(w) ? `scale(${we}) translate3d(0, ${Se}px, 0)` : `scale(${we}) translate3d(${Se}px, 0, 0)`,
      transition: "none"
    });
  }
  function Ut(ae, ge) {
    const be = Ue(w) ? window.innerHeight : window.innerWidth, ie = ge ? (be - In) / be : 1, we = ge ? -In : 0;
    ge && Ye(L.current, {
      transition: `transform ${je.DURATION}s cubic-bezier(${je.EASE.join(",")})`,
      transform: Ue(w) ? `scale(${ie}) translate3d(0, ${we}px, 0)` : `scale(${ie}) translate3d(${we}px, 0, 0)`
    });
  }
  return /* @__PURE__ */ T.createElement(Pd, {
    defaultOpen: C,
    modal: v,
    onOpenChange: (ae) => {
      ae && R(!0), x(ae);
    },
    open: P
  }, /* @__PURE__ */ T.createElement(j0.Provider, {
    value: {
      activeSnapPoint: X,
      snapPoints: a,
      setActiveSnapPoint: J,
      drawerRef: L,
      overlayRef: F,
      onOpenChange: t,
      onPress: le,
      onRelease: Ge,
      onDrag: pe,
      dismissible: d,
      isOpen: P,
      isDragging: M,
      shouldFade: oe,
      closeDrawer: Ee,
      onNestedDrag: nt,
      onNestedOpenChange: tt,
      onNestedRelease: Ut,
      keyboardIsOpen: A,
      modal: v,
      snapPointsOffset: _,
      direction: w,
      shouldScaleBackground: i,
      setBackgroundColorOnScale: s,
      noBodyStyles: y
    }
  }, n));
}
const Q0 = /* @__PURE__ */ T.forwardRef(function({ children: e, ...t }, n) {
  const { overlayRef: r, snapPoints: o, onRelease: a, shouldFade: i, isOpen: s } = uf(), l = Y0(n, r), u = o && o.length > 0;
  return /* @__PURE__ */ T.createElement(ha, {
    onMouseUp: a,
    ref: l,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": s && u ? "true" : "false",
    "data-vaul-snap-points-overlay": s && i ? "true" : "false",
    ...t
  });
});
Q0.displayName = "Drawer.Overlay";
const J0 = /* @__PURE__ */ T.forwardRef(function({ onOpenAutoFocus: e, onPointerDownOutside: t, onAnimationEnd: n, style: r, ...o }, a) {
  const { drawerRef: i, onPress: s, onRelease: l, onDrag: u, keyboardIsOpen: d, snapPointsOffset: f, modal: p, isOpen: g, direction: h, snapPoints: v } = uf(), [b, y] = T.useState(!1), w = Y0(a, i), C = T.useRef(null), E = T.useRef(!1), S = v && v.length > 0;
  $G();
  const P = (x, N, R = 0) => {
    if (E.current) return !0;
    const M = Math.abs(x.y), k = Math.abs(x.x), B = k > M, Z = [
      "bottom",
      "right"
    ].includes(N) ? 1 : -1;
    if (N === "left" || N === "right") {
      if (!(x.x * Z < 0) && k >= 0 && k <= R)
        return B;
    } else if (!(x.y * Z < 0) && M >= 0 && M <= R)
      return !B;
    return E.current = !0, !0;
  };
  return Oe(() => {
    S && window.requestAnimationFrame(() => {
      y(!0);
    });
  }, []), /* @__PURE__ */ T.createElement(ga, {
    "data-vaul-drawer-direction": h,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": b ? "true" : "false",
    "data-vaul-snap-points": g && S ? "true" : "false",
    ...o,
    ref: w,
    style: f && f.length > 0 ? {
      "--snap-point-height": `${f[0]}px`,
      ...r
    } : r,
    onOpenAutoFocus: (x) => {
      if (e)
        e(x);
      else {
        var N;
        x.preventDefault(), (N = i.current) == null || N.focus();
      }
    },
    onPointerDown: (x) => {
      o.onPointerDown == null || o.onPointerDown.call(o, x), C.current = {
        x: x.clientX,
        y: x.clientY
      }, s(x);
    },
    onPointerDownOutside: (x) => {
      if (t == null || t(x), !p || x.defaultPrevented) {
        x.preventDefault();
        return;
      }
      d.current && (d.current = !1);
    },
    onFocusOutside: (x) => {
      if (!p) {
        x.preventDefault();
        return;
      }
    },
    onEscapeKeyDown: (x) => {
      if (!p) {
        x.preventDefault();
        return;
      }
    },
    onPointerMove: (x) => {
      if (o.onPointerMove == null || o.onPointerMove.call(o, x), !C.current) return;
      const N = x.clientY - C.current.y, R = x.clientX - C.current.x, M = x.pointerType === "touch" ? 10 : 2;
      P({
        x: R,
        y: N
      }, h, M) ? u(x) : (Math.abs(R) > M || Math.abs(N) > M) && (C.current = null);
    },
    onPointerUp: (x) => {
      o.onPointerUp == null || o.onPointerUp.call(o, x), C.current = null, E.current = !1, l(x);
    }
  });
});
J0.displayName = "Drawer.Content";
const Vt = {
  Root: MG,
  Content: J0,
  Overlay: Q0,
  Trigger: Nd,
  Portal: Rd,
  Close: wa,
  Title: ba,
  Description: ya
}, OG = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ m(
  Vt.Root,
  {
    shouldScaleBackground: e,
    ...t
  }
);
OG.displayName = "Drawer";
const See = Vt.Trigger, DG = Vt.Portal, Eee = Vt.Close, ex = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Vt.Overlay,
  {
    ref: n,
    className: $("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
ex.displayName = Vt.Overlay.displayName;
const AG = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ ee(DG, { children: [
  /* @__PURE__ */ m(ex, {}),
  /* @__PURE__ */ ee(
    Vt.Content,
    {
      ref: r,
      className: $(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ m("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        t
      ]
    }
  )
] }));
AG.displayName = "DrawerContent";
const IG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m(
  "div",
  {
    className: $("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
IG.displayName = "DrawerHeader";
const kG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m(
  "div",
  {
    className: $("mt-auto flex flex-col gap-2 p-4", e),
    ...t
  }
);
kG.displayName = "DrawerFooter";
const LG = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Vt.Title,
  {
    ref: n,
    className: $(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
LG.displayName = Vt.Title.displayName;
const FG = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Vt.Description,
  {
    ref: n,
    className: $("text-sm text-muted-foreground", e),
    ...t
  }
));
FG.displayName = Vt.Description.displayName;
var ff = "DropdownMenu", [BG, Pee] = De(
  ff,
  [Ra]
), Je = Ra(), [WG, tx] = BG(ff), nx = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: i,
    modal: s = !0
  } = e, l = Je(t), u = c.useRef(null), [d = !1, f] = Me({
    prop: o,
    defaultProp: a,
    onChange: i
  });
  return /* @__PURE__ */ m(
    WG,
    {
      scope: t,
      triggerId: Le(),
      triggerRef: u,
      contentId: Le(),
      open: d,
      onOpenChange: f,
      onOpenToggle: c.useCallback(() => f((p) => !p), [f]),
      modal: s,
      children: /* @__PURE__ */ m(Gd, { ...l, open: d, onOpenChange: f, dir: r, modal: s, children: n })
    }
  );
};
nx.displayName = ff;
var rx = "DropdownMenuTrigger", ox = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = tx(rx, n), i = Je(n);
    return /* @__PURE__ */ m(Yd, { asChild: !0, ...i, children: /* @__PURE__ */ m(
      Y.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: oa(t, a.triggerRef),
        onPointerDown: I(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
        }),
        onKeyDown: I(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && a.onOpenToggle(), s.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
ox.displayName = rx;
var zG = "DropdownMenuPortal", ax = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Je(t);
  return /* @__PURE__ */ m(Kd, { ...r, ...n });
};
ax.displayName = zG;
var ix = "DropdownMenuContent", sx = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = tx(ix, n), a = Je(n), i = c.useRef(!1);
    return /* @__PURE__ */ m(
      Xd,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: I(e.onCloseAutoFocus, (s) => {
          var l;
          i.current || (l = o.triggerRef.current) == null || l.focus(), i.current = !1, s.preventDefault();
        }),
        onInteractOutside: I(e.onInteractOutside, (s) => {
          const l = s.detail.originalEvent, u = l.button === 0 && l.ctrlKey === !0, d = l.button === 2 || u;
          (!o.modal || d) && (i.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
sx.displayName = ix;
var HG = "DropdownMenuGroup", cx = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Je(n);
    return /* @__PURE__ */ m(qd, { ...o, ...r, ref: t });
  }
);
cx.displayName = HG;
var jG = "DropdownMenuLabel", lx = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Je(n);
    return /* @__PURE__ */ m(Zd, { ...o, ...r, ref: t });
  }
);
lx.displayName = jG;
var VG = "DropdownMenuItem", ux = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Je(n);
    return /* @__PURE__ */ m(Qd, { ...o, ...r, ref: t });
  }
);
ux.displayName = VG;
var UG = "DropdownMenuCheckboxItem", dx = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Je(n);
  return /* @__PURE__ */ m(Jd, { ...o, ...r, ref: t });
});
dx.displayName = UG;
var GG = "DropdownMenuRadioGroup", fx = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Je(n);
  return /* @__PURE__ */ m(ef, { ...o, ...r, ref: t });
});
fx.displayName = GG;
var YG = "DropdownMenuRadioItem", px = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Je(n);
  return /* @__PURE__ */ m(tf, { ...o, ...r, ref: t });
});
px.displayName = YG;
var KG = "DropdownMenuItemIndicator", mx = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Je(n);
  return /* @__PURE__ */ m(nf, { ...o, ...r, ref: t });
});
mx.displayName = KG;
var XG = "DropdownMenuSeparator", vx = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Je(n);
  return /* @__PURE__ */ m(rf, { ...o, ...r, ref: t });
});
vx.displayName = XG;
var qG = "DropdownMenuArrow", ZG = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Je(n);
    return /* @__PURE__ */ m(of, { ...o, ...r, ref: t });
  }
);
ZG.displayName = qG;
var QG = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, i = Je(t), [s = !1, l] = Me({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ m(af, { ...i, open: s, onOpenChange: l, children: n });
}, JG = "DropdownMenuSubTrigger", hx = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Je(n);
  return /* @__PURE__ */ m(sf, { ...o, ...r, ref: t });
});
hx.displayName = JG;
var e7 = "DropdownMenuSubContent", gx = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Je(n);
  return /* @__PURE__ */ m(
    cf,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
gx.displayName = e7;
var t7 = nx, n7 = ox, bx = ax, yx = sx, r7 = cx, wx = lx, xx = ux, Cx = dx, o7 = fx, Sx = px, Ex = mx, Px = vx, a7 = QG, Nx = hx, Rx = gx;
const Nee = t7, Ree = n7, _ee = r7, Tee = bx, $ee = a7, Mee = o7, i7 = c.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ ee(
  Nx,
  {
    ref: o,
    className: $(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ m(Qr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
i7.displayName = Nx.displayName;
const s7 = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Rx,
  {
    ref: n,
    className: $(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
s7.displayName = Rx.displayName;
const c7 = c.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ m(bx, { children: /* @__PURE__ */ m(
  yx,
  {
    ref: r,
    sideOffset: t,
    className: $(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
c7.displayName = yx.displayName;
const l7 = c.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ m(
  xx,
  {
    ref: r,
    className: $(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
l7.displayName = xx.displayName;
const u7 = c.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ ee(
  Cx,
  {
    ref: o,
    className: $(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ m("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ m(Ex, { children: /* @__PURE__ */ m(Zr, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
u7.displayName = Cx.displayName;
const d7 = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ ee(
  Sx,
  {
    ref: r,
    className: $(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ m("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ m(Ex, { children: /* @__PURE__ */ m(es, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
d7.displayName = Sx.displayName;
const f7 = c.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ m(
  wx,
  {
    ref: r,
    className: $(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
f7.displayName = wx.displayName;
const p7 = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Px,
  {
    ref: n,
    className: $("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
p7.displayName = Px.displayName;
const m7 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m(
  "span",
  {
    className: $("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
m7.displayName = "DropdownMenuShortcut";
var v7 = (e) => e.type === "checkbox", h7 = (e) => e instanceof Date, _x = (e) => e == null;
const g7 = (e) => typeof e == "object";
var bo = (e) => !_x(e) && !Array.isArray(e) && g7(e) && !h7(e), b7 = (e) => bo(e) && e.target ? v7(e.target) ? e.target.checked : e.target.value : e, y7 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, w7 = (e, t) => e.has(y7(t)), x7 = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return bo(t) && t.hasOwnProperty("isPrototypeOf");
}, C7 = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function pf(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(C7 && (e instanceof Blob || e instanceof FileList)) && (n || bo(e)))
    if (t = n ? [] : {}, !n && !x7(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = pf(e[r]));
  else
    return e;
  return t;
}
var Tx = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Hl = (e) => e === void 0, qe = (e, t, n) => {
  if (!t || !bo(e))
    return n;
  const r = Tx(t.split(/[,[\].]+?/)).reduce((o, a) => _x(o) ? o : o[a], e);
  return Hl(r) || r === e ? Hl(e[t]) ? n : e[t] : r;
}, mv = (e) => typeof e == "boolean", S7 = (e) => /^\w*$/.test(e), E7 = (e) => Tx(e.replace(/["|']|\]/g, "").split(/\.|\[/)), vv = (e, t, n) => {
  let r = -1;
  const o = S7(t) ? [t] : E7(t), a = o.length, i = a - 1;
  for (; ++r < a; ) {
    const s = o[r];
    let l = n;
    if (r !== i) {
      const u = e[s];
      l = bo(u) || Array.isArray(u) ? u : isNaN(+o[r + 1]) ? {} : [];
    }
    if (s === "__proto__")
      return;
    e[s] = l, e = e[s];
  }
  return e;
};
const hv = {
  BLUR: "blur",
  CHANGE: "change"
}, gv = {
  all: "all"
}, $x = T.createContext(null), Ps = () => T.useContext($x), P7 = (e) => {
  const { children: t, ...n } = e;
  return T.createElement($x.Provider, { value: n }, t);
};
var N7 = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const i = a;
        return t._proxyFormState[i] !== gv.all && (t._proxyFormState[i] = !r || gv.all), n && (n[i] = !0), e[i];
      }
    });
  return o;
}, R7 = (e) => bo(e) && !Object.keys(e).length, _7 = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return R7(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((i) => t[i] === !0);
}, T7 = (e) => Array.isArray(e) ? e : [e], Mx = (e, t, n) => !e || !t || e === t || T7(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function Ox(e) {
  const t = T.useRef(e);
  t.current = e, T.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function $7(e) {
  const t = Ps(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [i, s] = T.useState(n._formState), l = T.useRef(!0), u = T.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), d = T.useRef(o);
  return d.current = o, Ox({
    disabled: r,
    next: (f) => l.current && Mx(d.current, f.name, a) && _7(f, u.current, n._updateFormState) && s({
      ...n._formState,
      ...f
    }),
    subject: n._subjects.state
  }), T.useEffect(() => (l.current = !0, u.current.isValid && n._updateValid(!0), () => {
    l.current = !1;
  }), [n]), N7(i, n, u.current, !1);
}
var M7 = (e) => typeof e == "string", O7 = (e, t, n, r, o) => M7(e) ? qe(n, e, o) : Array.isArray(e) ? e.map((a) => qe(n, a)) : n;
function D7(e) {
  const t = Ps(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: i } = e || {}, s = T.useRef(r);
  s.current = r, Ox({
    disabled: a,
    subject: n._subjects.values,
    next: (d) => {
      Mx(s.current, d.name, i) && u(pf(O7(s.current, n._names, d.values || n._formValues, !1, o)));
    }
  });
  const [l, u] = T.useState(n._getWatch(r, o));
  return T.useEffect(() => n._removeUnmounted()), l;
}
function A7(e) {
  const t = Ps(), { name: n, disabled: r, control: o = t.control, shouldUnregister: a } = e, i = w7(o._names.array, n), s = D7({
    control: o,
    name: n,
    defaultValue: qe(o._formValues, n, qe(o._defaultValues, n, e.defaultValue)),
    exact: !0
  }), l = $7({
    control: o,
    name: n,
    exact: !0
  }), u = T.useRef(o.register(n, {
    ...e.rules,
    value: s,
    ...mv(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return T.useEffect(() => {
    const d = o._options.shouldUnregister || a, f = (p, g) => {
      const h = qe(o._fields, p);
      h && h._f && (h._f.mount = g);
    };
    if (f(n, !0), d) {
      const p = pf(qe(o._options.defaultValues, n));
      vv(o._defaultValues, n, p), Hl(qe(o._formValues, n)) && vv(o._formValues, n, p);
    }
    return () => {
      (i ? d && !o._state.action : d) ? o.unregister(n) : f(n, !1);
    };
  }, [n, o, i, a]), T.useEffect(() => {
    qe(o._fields, n) && o._updateDisabledField({
      disabled: r,
      fields: o._fields,
      name: n,
      value: qe(o._fields, n)._f.value
    });
  }, [r, n, o]), {
    field: {
      name: n,
      value: s,
      ...mv(r) || l.disabled ? { disabled: l.disabled || r } : {},
      onChange: T.useCallback((d) => u.current.onChange({
        target: {
          value: b7(d),
          name: n
        },
        type: hv.CHANGE
      }), [n]),
      onBlur: T.useCallback(() => u.current.onBlur({
        target: {
          value: qe(o._formValues, n),
          name: n
        },
        type: hv.BLUR
      }), [n, o]),
      ref: T.useCallback((d) => {
        const f = qe(o._fields, n);
        f && d && (f._f.ref = {
          focus: () => d.focus(),
          select: () => d.select(),
          setCustomValidity: (p) => d.setCustomValidity(p),
          reportValidity: () => d.reportValidity()
        });
      }, [o._fields, n])
    },
    formState: l,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!qe(l.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!qe(l.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!qe(l.touchedFields, n)
      },
      isValidating: {
        enumerable: !0,
        get: () => !!qe(l.validatingFields, n)
      },
      error: {
        enumerable: !0,
        get: () => qe(l.errors, n)
      }
    })
  };
}
const I7 = (e) => e.render(A7(e));
var k7 = "Label", Dx = c.forwardRef((e, t) => /* @__PURE__ */ m(
  Y.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Dx.displayName = k7;
var Ax = Dx;
const L7 = yn(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Ix = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Ax,
  {
    ref: n,
    className: $(L7(), e),
    ...t
  }
));
Ix.displayName = Ax.displayName;
const Oee = P7, kx = c.createContext(
  {}
), Dee = ({
  ...e
}) => /* @__PURE__ */ m(kx.Provider, { value: { name: e.name }, children: /* @__PURE__ */ m(I7, { ...e }) }), Ns = () => {
  const e = c.useContext(kx), t = c.useContext(Lx), { getFieldState: n, formState: r } = Ps(), o = n(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: a } = t;
  return {
    id: a,
    name: e.name,
    formItemId: `${a}-form-item`,
    formDescriptionId: `${a}-form-item-description`,
    formMessageId: `${a}-form-item-message`,
    ...o
  };
}, Lx = c.createContext(
  {}
), F7 = c.forwardRef(({ className: e, ...t }, n) => {
  const r = c.useId();
  return /* @__PURE__ */ m(Lx.Provider, { value: { id: r }, children: /* @__PURE__ */ m("div", { ref: n, className: $("space-y-2", e), ...t }) });
});
F7.displayName = "FormItem";
const B7 = c.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = Ns();
  return /* @__PURE__ */ m(
    Ix,
    {
      ref: n,
      className: $(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
B7.displayName = "FormLabel";
const W7 = c.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = Ns();
  return /* @__PURE__ */ m(
    Ke,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
W7.displayName = "FormControl";
const z7 = c.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = Ns();
  return /* @__PURE__ */ m(
    "p",
    {
      ref: n,
      id: r,
      className: $("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
z7.displayName = "FormDescription";
const H7 = c.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = Ns(), i = o ? String(o == null ? void 0 : o.message) : t;
  return i ? /* @__PURE__ */ m(
    "p",
    {
      ref: r,
      id: a,
      className: $("text-sm font-medium text-destructive", e),
      ...n,
      children: i
    }
  ) : null;
});
H7.displayName = "FormMessage";
var j7 = "DismissableLayer", jl = "dismissableLayer.update", V7 = "dismissableLayer.pointerDownOutside", U7 = "dismissableLayer.focusOutside", bv, Fx = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Bx = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...l
    } = e, u = c.useContext(Fx), [d, f] = c.useState(null), p = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = c.useState({}), h = te(t, (x) => f(x)), v = Array.from(u.layers), [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = v.indexOf(b), w = d ? v.indexOf(d) : -1, C = u.layersWithOutsidePointerEventsDisabled.size > 0, E = w >= y, S = K7((x) => {
      const N = x.target, R = [...u.branches].some((M) => M.contains(N));
      !E || R || (o == null || o(x), i == null || i(x), x.defaultPrevented || s == null || s());
    }, p), P = X7((x) => {
      const N = x.target;
      [...u.branches].some((M) => M.contains(N)) || (a == null || a(x), i == null || i(x), x.defaultPrevented || s == null || s());
    }, p);
    return _n((x) => {
      w === u.layers.size - 1 && (r == null || r(x), !x.defaultPrevented && s && (x.preventDefault(), s()));
    }, p), c.useEffect(() => {
      if (d)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (bv = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), yv(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = bv);
        };
    }, [d, p, n, u]), c.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), yv());
    }, [d, u]), c.useEffect(() => {
      const x = () => g({});
      return document.addEventListener(jl, x), () => document.removeEventListener(jl, x);
    }, []), /* @__PURE__ */ m(
      Y.div,
      {
        ...l,
        ref: h,
        style: {
          pointerEvents: C ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: I(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: I(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: I(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
Bx.displayName = j7;
var G7 = "DismissableLayerBranch", Y7 = c.forwardRef((e, t) => {
  const n = c.useContext(Fx), r = c.useRef(null), o = te(t, r);
  return c.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ m(Y.div, { ...e, ref: o });
});
Y7.displayName = G7;
function K7(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e), r = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          Wx(
            V7,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function X7(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && Wx(U7, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function yv() {
  const e = new CustomEvent(jl);
  document.dispatchEvent(e);
}
function Wx(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Nt(o, a) : o.dispatchEvent(a);
}
var Lc, mf = "HoverCard", [zx, Aee] = De(mf, [
  tn
]), Rs = tn(), [q7, vf] = zx(mf), Hx = (e) => {
  const {
    __scopeHoverCard: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    openDelay: i = 700,
    closeDelay: s = 300
  } = e, l = Rs(t), u = c.useRef(0), d = c.useRef(0), f = c.useRef(!1), p = c.useRef(!1), [g = !1, h] = Me({
    prop: r,
    defaultProp: o,
    onChange: a
  }), v = c.useCallback(() => {
    clearTimeout(d.current), u.current = window.setTimeout(() => h(!0), i);
  }, [i, h]), b = c.useCallback(() => {
    clearTimeout(u.current), !f.current && !p.current && (d.current = window.setTimeout(() => h(!1), s));
  }, [s, h]), y = c.useCallback(() => h(!1), [h]);
  return c.useEffect(() => () => {
    clearTimeout(u.current), clearTimeout(d.current);
  }, []), /* @__PURE__ */ m(
    q7,
    {
      scope: t,
      open: g,
      onOpenChange: h,
      onOpen: v,
      onClose: b,
      onDismiss: y,
      hasSelectionRef: f,
      isPointerDownOnContentRef: p,
      children: /* @__PURE__ */ m(ho, { ...l, children: n })
    }
  );
};
Hx.displayName = mf;
var jx = "HoverCardTrigger", Vx = c.forwardRef(
  (e, t) => {
    const { __scopeHoverCard: n, ...r } = e, o = vf(jx, n), a = Rs(n);
    return /* @__PURE__ */ m(go, { asChild: !0, ...a, children: /* @__PURE__ */ m(
      Y.a,
      {
        "data-state": o.open ? "open" : "closed",
        ...r,
        ref: t,
        onPointerEnter: I(e.onPointerEnter, Bi(o.onOpen)),
        onPointerLeave: I(e.onPointerLeave, Bi(o.onClose)),
        onFocus: I(e.onFocus, o.onOpen),
        onBlur: I(e.onBlur, o.onClose),
        onTouchStart: I(e.onTouchStart, (i) => i.preventDefault())
      }
    ) });
  }
);
Vx.displayName = jx;
var Z7 = "HoverCardPortal", [Iee, Q7] = zx(Z7, {
  forceMount: void 0
}), Fi = "HoverCardContent", Ux = c.forwardRef(
  (e, t) => {
    const n = Q7(Fi, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = vf(Fi, e.__scopeHoverCard);
    return /* @__PURE__ */ m(Be, { present: r || a.open, children: /* @__PURE__ */ m(
      J7,
      {
        "data-state": a.open ? "open" : "closed",
        ...o,
        onPointerEnter: I(e.onPointerEnter, Bi(a.onOpen)),
        onPointerLeave: I(e.onPointerLeave, Bi(a.onClose)),
        ref: t
      }
    ) });
  }
);
Ux.displayName = Fi;
var J7 = c.forwardRef((e, t) => {
  const {
    __scopeHoverCard: n,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: a,
    onInteractOutside: i,
    ...s
  } = e, l = vf(Fi, n), u = Rs(n), d = c.useRef(null), f = te(t, d), [p, g] = c.useState(!1);
  return c.useEffect(() => {
    if (p) {
      const h = document.body;
      return Lc = h.style.userSelect || h.style.webkitUserSelect, h.style.userSelect = "none", h.style.webkitUserSelect = "none", () => {
        h.style.userSelect = Lc, h.style.webkitUserSelect = Lc;
      };
    }
  }, [p]), c.useEffect(() => {
    if (d.current) {
      const h = () => {
        g(!1), l.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          var b;
          ((b = document.getSelection()) == null ? void 0 : b.toString()) !== "" && (l.hasSelectionRef.current = !0);
        });
      };
      return document.addEventListener("pointerup", h), () => {
        document.removeEventListener("pointerup", h), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [l.isPointerDownOnContentRef, l.hasSelectionRef]), c.useEffect(() => {
    d.current && n9(d.current).forEach((v) => v.setAttribute("tabindex", "-1"));
  }), /* @__PURE__ */ m(
    Bx,
    {
      asChild: !0,
      disableOutsidePointerEvents: !1,
      onInteractOutside: i,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: I(a, (h) => {
        h.preventDefault();
      }),
      onDismiss: l.onDismiss,
      children: /* @__PURE__ */ m(
        Ca,
        {
          ...u,
          ...s,
          onPointerDown: I(s.onPointerDown, (h) => {
            h.currentTarget.contains(h.target) && g(!0), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !0;
          }),
          ref: f,
          style: {
            ...s.style,
            userSelect: p ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: p ? "text" : void 0,
            "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
            "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
            "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      )
    }
  );
}), e9 = "HoverCardArrow", t9 = c.forwardRef(
  (e, t) => {
    const { __scopeHoverCard: n, ...r } = e, o = Rs(n);
    return /* @__PURE__ */ m(Sa, { ...o, ...r, ref: t });
  }
);
t9.displayName = e9;
function Bi(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function n9(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
var r9 = Hx, o9 = Vx, Gx = Ux;
const kee = r9, Lee = o9, a9 = c.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ m(
  Gx,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: $(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
a9.displayName = Gx.displayName;
var i9 = Object.defineProperty, s9 = Object.defineProperties, c9 = Object.getOwnPropertyDescriptors, Wi = Object.getOwnPropertySymbols, Yx = Object.prototype.hasOwnProperty, Kx = Object.prototype.propertyIsEnumerable, wv = (e, t, n) => t in e ? i9(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, l9 = (e, t) => {
  for (var n in t || (t = {})) Yx.call(t, n) && wv(e, n, t[n]);
  if (Wi) for (var n of Wi(t)) Kx.call(t, n) && wv(e, n, t[n]);
  return e;
}, u9 = (e, t) => s9(e, c9(t)), d9 = (e, t) => {
  var n = {};
  for (var r in e) Yx.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Wi) for (var r of Wi(e)) t.indexOf(r) < 0 && Kx.call(e, r) && (n[r] = e[r]);
  return n;
}, f9 = "^\\d+$";
function p9(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), r = setTimeout(e, 50);
  return [t, n, r];
}
function m9(e) {
  let t = c.useRef();
  return c.useEffect(() => {
    t.current = e;
  }), t.current;
}
var v9 = 18, Xx = 40, h9 = `${Xx}px`, g9 = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function b9({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
  let o = c.useRef({ done: !1, refocused: !1 }), [a, i] = c.useState(!1), [s, l] = c.useState(!1), [u, d] = c.useState(!1), f = c.useMemo(() => n === "none" ? !1 : (n === "increase-width" || n === "experimental-no-flickering") && a && s, [a, s, n]), p = c.useCallback(() => {
    let g = e.current, h = t.current;
    if (!g || !h || u || n === "none") return;
    let v = g, b = v.getBoundingClientRect().left + v.offsetWidth, y = v.getBoundingClientRect().top + v.offsetHeight / 2, w = b - v9, C = y;
    if (!(document.querySelectorAll(g9).length === 0 && document.elementFromPoint(w, C) === g) && (i(!0), d(!0), !o.current.refocused && document.activeElement === h)) {
      let E = [h.selectionStart, h.selectionEnd];
      h.blur(), h.focus(), h.setSelectionRange(E[0], E[1]), o.current.refocused = !0;
    }
  }, [e, t, u, n]);
  return c.useEffect(() => {
    let g = e.current;
    if (!g || n === "none") return;
    function h() {
      let b = window.innerWidth - g.getBoundingClientRect().right;
      l(b >= Xx);
    }
    h();
    let v = setInterval(h, 1e3);
    return () => {
      clearInterval(v);
    };
  }, [e, n]), c.useEffect(() => {
    let g = r || document.activeElement === t.current;
    if (n === "none" || !g) return;
    let h = setTimeout(p, 0), v = setTimeout(p, 2e3), b = setTimeout(p, 5e3), y = setTimeout(() => {
      d(!0);
    }, 6e3);
    return () => {
      clearTimeout(h), clearTimeout(v), clearTimeout(b), clearTimeout(y);
    };
  }, [t, r, n, p]), { hasPWMBadge: a, willPushPWMBadge: f, PWM_BADGE_SPACE_WIDTH: h9 };
}
var qx = c.createContext({}), Zx = c.forwardRef((e, t) => {
  var n = e, { value: r, onChange: o, maxLength: a, textAlign: i = "left", pattern: s = f9, inputMode: l = "numeric", onComplete: u, pushPasswordManagerStrategy: d = "increase-width", containerClassName: f, noScriptCSSFallback: p = y9, render: g, children: h } = n, v = d9(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "inputMode", "onComplete", "pushPasswordManagerStrategy", "containerClassName", "noScriptCSSFallback", "render", "children"]), b, y, w, C, E;
  let [S, P] = c.useState(typeof v.defaultValue == "string" ? v.defaultValue : ""), x = r ?? S, N = m9(x), R = c.useCallback((_) => {
    o == null || o(_), P(_);
  }, [o]), M = c.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), k = c.useRef(null), B = c.useRef(null), Z = c.useRef({ value: x, onChange: R, isIOS: typeof window < "u" && ((y = (b = window == null ? void 0 : window.CSS) == null ? void 0 : b.supports) == null ? void 0 : y.call(b, "-webkit-touch-callout", "none")) }), F = c.useRef({ prev: [(w = k.current) == null ? void 0 : w.selectionStart, (C = k.current) == null ? void 0 : C.selectionEnd, (E = k.current) == null ? void 0 : E.selectionDirection] });
  c.useImperativeHandle(t, () => k.current, []), c.useEffect(() => {
    let _ = k.current, K = B.current;
    if (!_ || !K) return;
    Z.current.value !== _.value && Z.current.onChange(_.value), F.current.prev = [_.selectionStart, _.selectionEnd, _.selectionDirection];
    function oe() {
      if (document.activeElement !== _) {
        ne(null), A(null);
        return;
      }
      let le = _.selectionStart, ye = _.selectionEnd, pe = _.selectionDirection, Ee = _.maxLength, Ve = _.value, ct = F.current.prev, Ge = -1, tt = -1, nt;
      if (Ve.length !== 0 && le !== null && ye !== null) {
        let be = le === ye, ie = le === Ve.length && Ve.length < Ee;
        if (be && !ie) {
          let we = le;
          if (we === 0) Ge = 0, tt = 1, nt = "forward";
          else if (we === Ee) Ge = we - 1, tt = we, nt = "backward";
          else if (Ee > 1 && Ve.length > 1) {
            let Se = 0;
            if (ct[0] !== null && ct[1] !== null) {
              nt = we < ct[1] ? "backward" : "forward";
              let He = ct[0] === ct[1] && ct[0] < Ee;
              nt === "backward" && !He && (Se = -1);
            }
            Ge = Se + we, tt = Se + we + 1;
          }
        }
        Ge !== -1 && tt !== -1 && Ge !== tt && k.current.setSelectionRange(Ge, tt, nt);
      }
      let Ut = Ge !== -1 ? Ge : le, ae = tt !== -1 ? tt : ye, ge = nt ?? pe;
      ne(Ut), A(ae), F.current.prev = [Ut, ae, ge];
    }
    if (document.addEventListener("selectionchange", oe, { capture: !0 }), oe(), document.activeElement === _ && O(!0), !document.getElementById("input-otp-style")) {
      let le = document.createElement("style");
      if (le.id = "input-otp-style", document.head.appendChild(le), le.sheet) {
        let ye = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        Mo(le.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), Mo(le.sheet, `[data-input-otp]:autofill { ${ye} }`), Mo(le.sheet, `[data-input-otp]:-webkit-autofill { ${ye} }`), Mo(le.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), Mo(le.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let de = () => {
      K && K.style.setProperty("--root-height", `${_.clientHeight}px`);
    };
    de();
    let ce = new ResizeObserver(de);
    return ce.observe(_), () => {
      document.removeEventListener("selectionchange", oe, { capture: !0 }), ce.disconnect();
    };
  }, []);
  let [H, j] = c.useState(!1), [W, O] = c.useState(!1), [V, ne] = c.useState(null), [q, A] = c.useState(null);
  c.useEffect(() => {
    p9(() => {
      var _, K, oe, de;
      (_ = k.current) == null || _.dispatchEvent(new Event("input"));
      let ce = (K = k.current) == null ? void 0 : K.selectionStart, le = (oe = k.current) == null ? void 0 : oe.selectionEnd, ye = (de = k.current) == null ? void 0 : de.selectionDirection;
      ce !== null && le !== null && (ne(ce), A(le), F.current.prev = [ce, le, ye]);
    });
  }, [x, W]), c.useEffect(() => {
    N !== void 0 && x !== N && N.length < a && x.length === a && (u == null || u(x));
  }, [a, u, N, x]);
  let D = b9({ containerRef: B, inputRef: k, pushPasswordManagerStrategy: d, isFocused: W }), L = c.useCallback((_) => {
    let K = _.currentTarget.value.slice(0, a);
    if (K.length > 0 && M && !M.test(K)) {
      _.preventDefault();
      return;
    }
    typeof N == "string" && K.length < N.length && document.dispatchEvent(new Event("selectionchange")), R(K);
  }, [a, R, N, M]), U = c.useCallback(() => {
    var _;
    if (k.current) {
      let K = Math.min(k.current.value.length, a - 1), oe = k.current.value.length;
      (_ = k.current) == null || _.setSelectionRange(K, oe), ne(K), A(oe);
    }
    O(!0);
  }, [a]), G = c.useCallback((_) => {
    var K, oe;
    let de = k.current;
    if (!Z.current.isIOS || !_.clipboardData || !de) return;
    let ce = _.clipboardData.getData("text/plain");
    _.preventDefault();
    let le = (K = k.current) == null ? void 0 : K.selectionStart, ye = (oe = k.current) == null ? void 0 : oe.selectionEnd, pe = (le !== ye ? x.slice(0, le) + ce + x.slice(ye) : x.slice(0, le) + ce + x.slice(le)).slice(0, a);
    if (pe.length > 0 && M && !M.test(pe)) return;
    de.value = pe, R(pe);
    let Ee = Math.min(pe.length, a - 1), Ve = pe.length;
    de.setSelectionRange(Ee, Ve), ne(Ee), A(Ve);
  }, [a, R, M, x]), z = c.useMemo(() => ({ position: "relative", cursor: v.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [v.disabled]), X = c.useMemo(() => ({ position: "absolute", inset: 0, width: D.willPushPWMBadge ? `calc(100% + ${D.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: D.willPushPWMBadge ? `inset(0 ${D.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: i, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [D.PWM_BADGE_SPACE_WIDTH, D.willPushPWMBadge, i]), Q = c.useMemo(() => c.createElement("input", u9(l9({ autoComplete: v.autoComplete || "one-time-code" }, v), { "data-input-otp": !0, "data-input-otp-mss": V, "data-input-otp-mse": q, inputMode: l, pattern: M == null ? void 0 : M.source, style: X, maxLength: a, value: x, ref: k, onPaste: (_) => {
    var K;
    G(_), (K = v.onPaste) == null || K.call(v, _);
  }, onChange: L, onMouseOver: (_) => {
    var K;
    j(!0), (K = v.onMouseOver) == null || K.call(v, _);
  }, onMouseLeave: (_) => {
    var K;
    j(!1), (K = v.onMouseLeave) == null || K.call(v, _);
  }, onFocus: (_) => {
    var K;
    U(), (K = v.onFocus) == null || K.call(v, _);
  }, onBlur: (_) => {
    var K;
    O(!1), (K = v.onBlur) == null || K.call(v, _);
  } })), [L, U, G, l, X, a, q, V, v, M == null ? void 0 : M.source, x]), J = c.useMemo(() => ({ slots: Array.from({ length: a }).map((_, K) => {
    let oe = W && V !== null && q !== null && (V === q && K === V || K >= V && K < q), de = x[K] !== void 0 ? x[K] : null;
    return { char: de, isActive: oe, hasFakeCaret: oe && de === null };
  }), isFocused: W, isHovering: !v.disabled && H }), [W, H, a, q, V, v.disabled, x]), re = c.useMemo(() => g ? g(J) : c.createElement(qx.Provider, { value: J }, h), [h, J, g]);
  return c.createElement(c.Fragment, null, p !== null && c.createElement("noscript", null, c.createElement("style", null, p)), c.createElement("div", { ref: B, "data-input-otp-container": !0, style: z, className: f }, re, c.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, Q)));
});
Zx.displayName = "Input";
function Mo(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var y9 = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;
const w9 = c.forwardRef(({ className: e, containerClassName: t, ...n }, r) => /* @__PURE__ */ m(
  Zx,
  {
    ref: r,
    containerClassName: $(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      t
    ),
    className: $("disabled:cursor-not-allowed", e),
    ...n
  }
));
w9.displayName = "InputOTP";
const x9 = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m("div", { ref: n, className: $("flex items-center", e), ...t }));
x9.displayName = "InputOTPGroup";
const C9 = c.forwardRef(({ index: e, className: t, ...n }, r) => {
  const o = c.useContext(qx), { char: a, hasFakeCaret: i, isActive: s } = o.slots[e];
  return /* @__PURE__ */ ee(
    "div",
    {
      ref: r,
      className: $(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        s && "z-10 ring-2 ring-ring ring-offset-background",
        t
      ),
      ...n,
      children: [
        a,
        i && /* @__PURE__ */ m("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ m("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })
      ]
    }
  );
});
C9.displayName = "InputOTPSlot";
const S9 = c.forwardRef(({ ...e }, t) => /* @__PURE__ */ m("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ m(LN, {}) }));
S9.displayName = "InputOTPSeparator";
const Qx = c.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ m(
    "input",
    {
      type: t,
      className: $(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ref: r,
      ...n
    }
  )
);
Qx.displayName = "Input";
var _s = "Menubar", [Vl, E9, P9] = hn(_s), [Jx, Fee] = De(_s, [
  P9,
  nn
]), et = Ra(), eC = nn(), [N9, hf] = Jx(_s), tC = c.forwardRef(
  (e, t) => {
    const {
      __scopeMenubar: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      loop: i = !0,
      dir: s,
      ...l
    } = e, u = Bt(s), d = eC(n), [f = "", p] = Me({
      prop: r,
      onChange: o,
      defaultProp: a
    }), [g, h] = c.useState(null);
    return /* @__PURE__ */ m(
      N9,
      {
        scope: n,
        value: f,
        onMenuOpen: c.useCallback(
          (v) => {
            p(v), h(v);
          },
          [p]
        ),
        onMenuClose: c.useCallback(() => p(""), [p]),
        onMenuToggle: c.useCallback(
          (v) => {
            p((b) => b ? "" : v), h(v);
          },
          [p]
        ),
        dir: u,
        loop: i,
        children: /* @__PURE__ */ m(Vl.Provider, { scope: n, children: /* @__PURE__ */ m(Vl.Slot, { scope: n, children: /* @__PURE__ */ m(
          Ea,
          {
            asChild: !0,
            ...d,
            orientation: "horizontal",
            loop: i,
            dir: u,
            currentTabStopId: g,
            onCurrentTabStopIdChange: h,
            children: /* @__PURE__ */ m(Y.div, { role: "menubar", ...l, ref: t })
          }
        ) }) })
      }
    );
  }
);
tC.displayName = _s;
var gf = "MenubarMenu", [R9, nC] = Jx(gf), rC = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = Le(), a = n || o || "LEGACY_REACT_AUTO_VALUE", i = hf(gf, t), s = et(t), l = c.useRef(null), u = c.useRef(!1), d = i.value === a;
  return c.useEffect(() => {
    d || (u.current = !1);
  }, [d]), /* @__PURE__ */ m(
    R9,
    {
      scope: t,
      value: a,
      triggerId: Le(),
      triggerRef: l,
      contentId: Le(),
      wasKeyboardTriggerOpenRef: u,
      children: /* @__PURE__ */ m(
        Gd,
        {
          ...s,
          open: d,
          onOpenChange: (f) => {
            f || i.onMenuClose();
          },
          modal: !1,
          dir: i.dir,
          ...r
        }
      )
    }
  );
};
rC.displayName = gf;
var Ul = "MenubarTrigger", oC = c.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = eC(n), i = et(n), s = hf(Ul, n), l = nC(Ul, n), u = c.useRef(null), d = te(t, u, l.triggerRef), [f, p] = c.useState(!1), g = s.value === l.value;
    return /* @__PURE__ */ m(Vl.ItemSlot, { scope: n, value: l.value, disabled: r, children: /* @__PURE__ */ m(
      Pa,
      {
        asChild: !0,
        ...a,
        focusable: !r,
        tabStopId: l.value,
        children: /* @__PURE__ */ m(Yd, { asChild: !0, ...i, children: /* @__PURE__ */ m(
          Y.button,
          {
            type: "button",
            role: "menuitem",
            id: l.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": g,
            "aria-controls": g ? l.contentId : void 0,
            "data-highlighted": f ? "" : void 0,
            "data-state": g ? "open" : "closed",
            "data-disabled": r ? "" : void 0,
            disabled: r,
            ...o,
            ref: d,
            onPointerDown: I(e.onPointerDown, (h) => {
              !r && h.button === 0 && h.ctrlKey === !1 && (s.onMenuOpen(l.value), g || h.preventDefault());
            }),
            onPointerEnter: I(e.onPointerEnter, () => {
              var v;
              !!s.value && !g && (s.onMenuOpen(l.value), (v = u.current) == null || v.focus());
            }),
            onKeyDown: I(e.onKeyDown, (h) => {
              r || (["Enter", " "].includes(h.key) && s.onMenuToggle(l.value), h.key === "ArrowDown" && s.onMenuOpen(l.value), ["Enter", " ", "ArrowDown"].includes(h.key) && (l.wasKeyboardTriggerOpenRef.current = !0, h.preventDefault()));
            }),
            onFocus: I(e.onFocus, () => p(!0)),
            onBlur: I(e.onBlur, () => p(!1))
          }
        ) })
      }
    ) });
  }
);
oC.displayName = Ul;
var _9 = "MenubarPortal", aC = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = et(t);
  return /* @__PURE__ */ m(Kd, { ...r, ...n });
};
aC.displayName = _9;
var Gl = "MenubarContent", iC = c.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, align: r = "start", ...o } = e, a = et(n), i = hf(Gl, n), s = nC(Gl, n), l = E9(n), u = c.useRef(!1);
    return /* @__PURE__ */ m(
      Xd,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        "data-radix-menubar-content": "",
        ...a,
        ...o,
        ref: t,
        align: r,
        onCloseAutoFocus: I(e.onCloseAutoFocus, (d) => {
          var p;
          !!!i.value && !u.current && ((p = s.triggerRef.current) == null || p.focus()), u.current = !1, d.preventDefault();
        }),
        onFocusOutside: I(e.onFocusOutside, (d) => {
          const f = d.target;
          l().some((g) => {
            var h;
            return (h = g.ref.current) == null ? void 0 : h.contains(f);
          }) && d.preventDefault();
        }),
        onInteractOutside: I(e.onInteractOutside, () => {
          u.current = !0;
        }),
        onEntryFocus: (d) => {
          s.wasKeyboardTriggerOpenRef.current || d.preventDefault();
        },
        onKeyDown: I(
          e.onKeyDown,
          (d) => {
            if (["ArrowRight", "ArrowLeft"].includes(d.key)) {
              const f = d.target, p = f.hasAttribute("data-radix-menubar-subtrigger"), g = f.closest("[data-radix-menubar-content]") !== d.currentTarget, v = (i.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === d.key;
              if (!v && p || g && v) return;
              let w = l().filter((S) => !S.disabled).map((S) => S.value);
              v && w.reverse();
              const C = w.indexOf(s.value);
              w = i.loop ? H9(w, C + 1) : w.slice(C + 1);
              const [E] = w;
              E && i.onMenuOpen(E);
            }
          },
          { checkForDefaultPrevented: !1 }
        ),
        style: {
          ...e.style,
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
iC.displayName = Gl;
var T9 = "MenubarGroup", sC = c.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = et(n);
    return /* @__PURE__ */ m(qd, { ...o, ...r, ref: t });
  }
);
sC.displayName = T9;
var $9 = "MenubarLabel", cC = c.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = et(n);
    return /* @__PURE__ */ m(Zd, { ...o, ...r, ref: t });
  }
);
cC.displayName = $9;
var M9 = "MenubarItem", lC = c.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = et(n);
    return /* @__PURE__ */ m(Qd, { ...o, ...r, ref: t });
  }
);
lC.displayName = M9;
var O9 = "MenubarCheckboxItem", uC = c.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = et(n);
    return /* @__PURE__ */ m(Jd, { ...o, ...r, ref: t });
  }
);
uC.displayName = O9;
var D9 = "MenubarRadioGroup", dC = c.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = et(n);
    return /* @__PURE__ */ m(ef, { ...o, ...r, ref: t });
  }
);
dC.displayName = D9;
var A9 = "MenubarRadioItem", fC = c.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = et(n);
    return /* @__PURE__ */ m(tf, { ...o, ...r, ref: t });
  }
);
fC.displayName = A9;
var I9 = "MenubarItemIndicator", pC = c.forwardRef((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = et(n);
  return /* @__PURE__ */ m(nf, { ...o, ...r, ref: t });
});
pC.displayName = I9;
var k9 = "MenubarSeparator", mC = c.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = et(n);
    return /* @__PURE__ */ m(rf, { ...o, ...r, ref: t });
  }
);
mC.displayName = k9;
var L9 = "MenubarArrow", F9 = c.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = et(n);
    return /* @__PURE__ */ m(of, { ...o, ...r, ref: t });
  }
);
F9.displayName = L9;
var B9 = "MenubarSub", vC = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, i = et(t), [s = !1, l] = Me({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ m(af, { ...i, open: s, onOpenChange: l, children: n });
};
vC.displayName = B9;
var W9 = "MenubarSubTrigger", hC = c.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = et(n);
    return /* @__PURE__ */ m(
      sf,
      {
        "data-radix-menubar-subtrigger": "",
        ...o,
        ...r,
        ref: t
      }
    );
  }
);
hC.displayName = W9;
var z9 = "MenubarSubContent", gC = c.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = et(n);
    return /* @__PURE__ */ m(
      cf,
      {
        ...o,
        "data-radix-menubar-content": "",
        ...r,
        ref: t,
        style: {
          ...e.style,
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
gC.displayName = z9;
function H9(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var bC = tC, j9 = rC, yC = oC, wC = aC, xC = iC, V9 = sC, CC = cC, SC = lC, EC = uC, U9 = dC, PC = fC, NC = pC, RC = mC, G9 = vC, _C = hC, TC = gC;
const Bee = j9, Wee = V9, zee = wC, Hee = G9, jee = U9, Y9 = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  bC,
  {
    ref: n,
    className: $(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
Y9.displayName = bC.displayName;
const K9 = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  yC,
  {
    ref: n,
    className: $(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
K9.displayName = yC.displayName;
const X9 = c.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ ee(
  _C,
  {
    ref: o,
    className: $(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ m(Qr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
X9.displayName = _C.displayName;
const q9 = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  TC,
  {
    ref: n,
    className: $(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
q9.displayName = TC.displayName;
const Z9 = c.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ m(wC, { children: /* @__PURE__ */ m(
    xC,
    {
      ref: a,
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: $(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...o
    }
  ) })
);
Z9.displayName = xC.displayName;
const Q9 = c.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ m(
  SC,
  {
    ref: r,
    className: $(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Q9.displayName = SC.displayName;
const J9 = c.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ ee(
  EC,
  {
    ref: o,
    className: $(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ m("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ m(NC, { children: /* @__PURE__ */ m(Zr, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
J9.displayName = EC.displayName;
const eY = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ ee(
  PC,
  {
    ref: r,
    className: $(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ m("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ m(NC, { children: /* @__PURE__ */ m(es, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
eY.displayName = PC.displayName;
const tY = c.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ m(
  CC,
  {
    ref: r,
    className: $(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
tY.displayName = CC.displayName;
const nY = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  RC,
  {
    ref: n,
    className: $("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
nY.displayName = RC.displayName;
const rY = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m(
  "span",
  {
    className: $(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
rY.displayname = "MenubarShortcut";
var oY = "DismissableLayer", Yl = "dismissableLayer.update", aY = "dismissableLayer.pointerDownOutside", iY = "dismissableLayer.focusOutside", xv, $C = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), MC = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...l
    } = e, u = c.useContext($C), [d, f] = c.useState(null), p = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = c.useState({}), h = te(t, (x) => f(x)), v = Array.from(u.layers), [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = v.indexOf(b), w = d ? v.indexOf(d) : -1, C = u.layersWithOutsidePointerEventsDisabled.size > 0, E = w >= y, S = lY((x) => {
      const N = x.target, R = [...u.branches].some((M) => M.contains(N));
      !E || R || (o == null || o(x), i == null || i(x), x.defaultPrevented || s == null || s());
    }, p), P = uY((x) => {
      const N = x.target;
      [...u.branches].some((M) => M.contains(N)) || (a == null || a(x), i == null || i(x), x.defaultPrevented || s == null || s());
    }, p);
    return _n((x) => {
      w === u.layers.size - 1 && (r == null || r(x), !x.defaultPrevented && s && (x.preventDefault(), s()));
    }, p), c.useEffect(() => {
      if (d)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (xv = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Cv(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = xv);
        };
    }, [d, p, n, u]), c.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Cv());
    }, [d, u]), c.useEffect(() => {
      const x = () => g({});
      return document.addEventListener(Yl, x), () => document.removeEventListener(Yl, x);
    }, []), /* @__PURE__ */ m(
      Y.div,
      {
        ...l,
        ref: h,
        style: {
          pointerEvents: C ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: I(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: I(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: I(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
MC.displayName = oY;
var sY = "DismissableLayerBranch", cY = c.forwardRef((e, t) => {
  const n = c.useContext($C), r = c.useRef(null), o = te(t, r);
  return c.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ m(Y.div, { ...e, ref: o });
});
cY.displayName = sY;
function lY(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e), r = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          OC(
            aY,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function uY(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && OC(iY, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Cv() {
  const e = new CustomEvent(Yl);
  document.dispatchEvent(e);
}
function OC(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Nt(o, a) : o.dispatchEvent(a);
}
var dY = "VisuallyHidden", $a = c.forwardRef(
  (e, t) => /* @__PURE__ */ m(
    Y.span,
    {
      ...e,
      ref: t,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
      }
    }
  )
);
$a.displayName = dY;
var DC = $a, yo = "NavigationMenu", [bf, AC, fY] = hn(yo), [Kl, pY, mY] = hn(yo), [yf, Vee] = De(
  yo,
  [fY, mY]
), [vY, _t] = yf(yo), [hY, gY] = yf(yo), IC = c.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      delayDuration: i = 200,
      skipDelayDuration: s = 300,
      orientation: l = "horizontal",
      dir: u,
      ...d
    } = e, [f, p] = c.useState(null), g = te(t, (R) => p(R)), h = Bt(u), v = c.useRef(0), b = c.useRef(0), y = c.useRef(0), [w, C] = c.useState(!0), [E = "", S] = Me({
      prop: r,
      onChange: (R) => {
        const M = R !== "", k = s > 0;
        M ? (window.clearTimeout(y.current), k && C(!1)) : (window.clearTimeout(y.current), y.current = window.setTimeout(
          () => C(!0),
          s
        )), o == null || o(R);
      },
      defaultProp: a
    }), P = c.useCallback(() => {
      window.clearTimeout(b.current), b.current = window.setTimeout(() => S(""), 150);
    }, [S]), x = c.useCallback(
      (R) => {
        window.clearTimeout(b.current), S(R);
      },
      [S]
    ), N = c.useCallback(
      (R) => {
        E === R ? window.clearTimeout(b.current) : v.current = window.setTimeout(() => {
          window.clearTimeout(b.current), S(R);
        }, i);
      },
      [E, S, i]
    );
    return c.useEffect(() => () => {
      window.clearTimeout(v.current), window.clearTimeout(b.current), window.clearTimeout(y.current);
    }, []), /* @__PURE__ */ m(
      LC,
      {
        scope: n,
        isRootMenu: !0,
        value: E,
        dir: h,
        orientation: l,
        rootNavigationMenu: f,
        onTriggerEnter: (R) => {
          window.clearTimeout(v.current), w ? N(R) : x(R);
        },
        onTriggerLeave: () => {
          window.clearTimeout(v.current), P();
        },
        onContentEnter: () => window.clearTimeout(b.current),
        onContentLeave: P,
        onItemSelect: (R) => {
          S((M) => M === R ? "" : R);
        },
        onItemDismiss: () => S(""),
        children: /* @__PURE__ */ m(
          Y.nav,
          {
            "aria-label": "Main",
            "data-orientation": l,
            dir: h,
            ...d,
            ref: g
          }
        )
      }
    );
  }
);
IC.displayName = yo;
var kC = "NavigationMenuSub", bY = c.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      ...s
    } = e, l = _t(kC, n), [u = "", d] = Me({
      prop: r,
      onChange: o,
      defaultProp: a
    });
    return /* @__PURE__ */ m(
      LC,
      {
        scope: n,
        isRootMenu: !1,
        value: u,
        dir: l.dir,
        orientation: i,
        rootNavigationMenu: l.rootNavigationMenu,
        onTriggerEnter: (f) => d(f),
        onItemSelect: (f) => d(f),
        onItemDismiss: () => d(""),
        children: /* @__PURE__ */ m(Y.div, { "data-orientation": i, ...s, ref: t })
      }
    );
  }
);
bY.displayName = kC;
var LC = (e) => {
  const {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    dir: o,
    orientation: a,
    children: i,
    value: s,
    onItemSelect: l,
    onItemDismiss: u,
    onTriggerEnter: d,
    onTriggerLeave: f,
    onContentEnter: p,
    onContentLeave: g
  } = e, [h, v] = c.useState(null), [b, y] = c.useState(/* @__PURE__ */ new Map()), [w, C] = c.useState(null);
  return /* @__PURE__ */ m(
    vY,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: s,
      previousValue: po(s),
      baseId: Le(),
      dir: o,
      orientation: a,
      viewport: h,
      onViewportChange: v,
      indicatorTrack: w,
      onIndicatorTrackChange: C,
      onTriggerEnter: fe(d),
      onTriggerLeave: fe(f),
      onContentEnter: fe(p),
      onContentLeave: fe(g),
      onItemSelect: fe(l),
      onItemDismiss: fe(u),
      onViewportContentChange: c.useCallback((E, S) => {
        y((P) => (P.set(E, S), new Map(P)));
      }, []),
      onViewportContentRemove: c.useCallback((E) => {
        y((S) => S.has(E) ? (S.delete(E), new Map(S)) : S);
      }, []),
      children: /* @__PURE__ */ m(bf.Provider, { scope: t, children: /* @__PURE__ */ m(hY, { scope: t, items: b, children: i }) })
    }
  );
}, FC = "NavigationMenuList", BC = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = _t(FC, n), a = /* @__PURE__ */ m(Y.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return /* @__PURE__ */ m(Y.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ m(bf.Slot, { scope: n, children: o.isRootMenu ? /* @__PURE__ */ m(XC, { asChild: !0, children: a }) : a }) });
  }
);
BC.displayName = FC;
var WC = "NavigationMenuItem", [yY, zC] = yf(WC), HC = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e, a = Le(), i = r || a || "LEGACY_REACT_AUTO_VALUE", s = c.useRef(null), l = c.useRef(null), u = c.useRef(null), d = c.useRef(() => {
    }), f = c.useRef(!1), p = c.useCallback((h = "start") => {
      if (s.current) {
        d.current();
        const v = ql(s.current);
        v.length && Cf(h === "start" ? v : v.reverse());
      }
    }, []), g = c.useCallback(() => {
      if (s.current) {
        const h = ql(s.current);
        h.length && (d.current = NY(h));
      }
    }, []);
    return /* @__PURE__ */ m(
      yY,
      {
        scope: n,
        value: i,
        triggerRef: l,
        contentRef: s,
        focusProxyRef: u,
        wasEscapeCloseRef: f,
        onEntryKeyDown: p,
        onFocusProxyEnter: p,
        onRootContentClose: g,
        onContentFocusOutside: g,
        children: /* @__PURE__ */ m(Y.li, { ...o, ref: t })
      }
    );
  }
);
HC.displayName = WC;
var Xl = "NavigationMenuTrigger", jC = c.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = _t(Xl, e.__scopeNavigationMenu), i = zC(Xl, e.__scopeNavigationMenu), s = c.useRef(null), l = te(s, i.triggerRef, t), u = ZC(a.baseId, i.value), d = QC(a.baseId, i.value), f = c.useRef(!1), p = c.useRef(!1), g = i.value === a.value;
  return /* @__PURE__ */ ee(Fe, { children: [
    /* @__PURE__ */ m(bf.ItemSlot, { scope: n, value: i.value, children: /* @__PURE__ */ m(qC, { asChild: !0, children: /* @__PURE__ */ m(
      Y.button,
      {
        id: u,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": Sf(g),
        "aria-expanded": g,
        "aria-controls": d,
        ...o,
        ref: l,
        onPointerEnter: I(e.onPointerEnter, () => {
          p.current = !1, i.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: I(
          e.onPointerMove,
          zi(() => {
            r || p.current || i.wasEscapeCloseRef.current || f.current || (a.onTriggerEnter(i.value), f.current = !0);
          })
        ),
        onPointerLeave: I(
          e.onPointerLeave,
          zi(() => {
            r || (a.onTriggerLeave(), f.current = !1);
          })
        ),
        onClick: I(e.onClick, () => {
          a.onItemSelect(i.value), p.current = g;
        }),
        onKeyDown: I(e.onKeyDown, (h) => {
          const b = { horizontal: "ArrowDown", vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[a.orientation];
          g && h.key === b && (i.onEntryKeyDown(), h.preventDefault());
        })
      }
    ) }) }),
    g && /* @__PURE__ */ ee(Fe, { children: [
      /* @__PURE__ */ m(
        DC,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: i.focusProxyRef,
          onFocus: (h) => {
            const v = i.contentRef.current, b = h.relatedTarget, y = b === s.current, w = v == null ? void 0 : v.contains(b);
            (y || !w) && i.onFocusProxyEnter(y ? "start" : "end");
          }
        }
      ),
      a.viewport && /* @__PURE__ */ m("span", { "aria-owns": d })
    ] })
  ] });
});
jC.displayName = Xl;
var wY = "NavigationMenuLink", Sv = "navigationMenu.linkSelect", VC = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
    return /* @__PURE__ */ m(qC, { asChild: !0, children: /* @__PURE__ */ m(
      Y.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...a,
        ref: t,
        onClick: I(
          e.onClick,
          (i) => {
            const s = i.target, l = new CustomEvent(Sv, {
              bubbles: !0,
              cancelable: !0
            });
            if (s.addEventListener(Sv, (u) => o == null ? void 0 : o(u), { once: !0 }), Nt(s, l), !l.defaultPrevented && !i.metaKey) {
              const u = new CustomEvent(mi, {
                bubbles: !0,
                cancelable: !0
              });
              Nt(s, u);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
VC.displayName = wY;
var wf = "NavigationMenuIndicator", UC = c.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = _t(wf, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? vn.createPortal(
    /* @__PURE__ */ m(Be, { present: n || a, children: /* @__PURE__ */ m(xY, { ...r, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
UC.displayName = wf;
var xY = c.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = _t(wf, n), a = AC(n), [i, s] = c.useState(
    null
  ), [l, u] = c.useState(null), d = o.orientation === "horizontal", f = !!o.value;
  c.useEffect(() => {
    var v;
    const h = (v = a().find((b) => b.value === o.value)) == null ? void 0 : v.ref.current;
    h && s(h);
  }, [a, o.value]);
  const p = () => {
    i && u({
      size: d ? i.offsetWidth : i.offsetHeight,
      offset: d ? i.offsetLeft : i.offsetTop
    });
  };
  return Zl(i, p), Zl(o.indicatorTrack, p), l ? /* @__PURE__ */ m(
    Y.div,
    {
      "aria-hidden": !0,
      "data-state": f ? "visible" : "hidden",
      "data-orientation": o.orientation,
      ...r,
      ref: t,
      style: {
        position: "absolute",
        ...d ? {
          left: 0,
          width: l.size + "px",
          transform: `translateX(${l.offset}px)`
        } : {
          top: 0,
          height: l.size + "px",
          transform: `translateY(${l.offset}px)`
        },
        ...r.style
      }
    }
  ) : null;
}), Ur = "NavigationMenuContent", GC = c.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = _t(Ur, e.__scopeNavigationMenu), a = zC(Ur, e.__scopeNavigationMenu), i = te(a.contentRef, t), s = a.value === o.value, l = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ m(CY, { forceMount: n, ...l, ref: i }) : /* @__PURE__ */ m(Be, { present: n || s, children: /* @__PURE__ */ m(
    YC,
    {
      "data-state": Sf(s),
      ...l,
      ref: i,
      onPointerEnter: I(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: I(
        e.onPointerLeave,
        zi(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !s && o.isRootMenu ? "none" : void 0,
        ...l.style
      }
    }
  ) });
});
GC.displayName = Ur;
var CY = c.forwardRef((e, t) => {
  const n = _t(Ur, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return Ce(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), Ce(() => () => o(e.value), [e.value, o]), null;
}), mi = "navigationMenu.rootContentDismiss", YC = c.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: r,
    triggerRef: o,
    focusProxyRef: a,
    wasEscapeCloseRef: i,
    onRootContentClose: s,
    onContentFocusOutside: l,
    ...u
  } = e, d = _t(Ur, n), f = c.useRef(null), p = te(f, t), g = ZC(d.baseId, r), h = QC(d.baseId, r), v = AC(n), b = c.useRef(null), { onItemDismiss: y } = d;
  c.useEffect(() => {
    const C = f.current;
    if (d.isRootMenu && C) {
      const E = () => {
        var S;
        y(), s(), C.contains(document.activeElement) && ((S = o.current) == null || S.focus());
      };
      return C.addEventListener(mi, E), () => C.removeEventListener(mi, E);
    }
  }, [d.isRootMenu, e.value, o, y, s]);
  const w = c.useMemo(() => {
    const E = v().map((M) => M.value);
    d.dir === "rtl" && E.reverse();
    const S = E.indexOf(d.value), P = E.indexOf(d.previousValue), x = r === d.value, N = P === E.indexOf(r);
    if (!x && !N) return b.current;
    const R = (() => {
      if (S !== P) {
        if (x && P !== -1) return S > P ? "from-end" : "from-start";
        if (N && S !== -1) return S > P ? "to-start" : "to-end";
      }
      return null;
    })();
    return b.current = R, R;
  }, [d.previousValue, d.value, d.dir, v, r]);
  return /* @__PURE__ */ m(XC, { asChild: !0, children: /* @__PURE__ */ m(
    MC,
    {
      id: h,
      "aria-labelledby": g,
      "data-motion": w,
      "data-orientation": d.orientation,
      ...u,
      ref: p,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        var E;
        const C = new Event(mi, {
          bubbles: !0,
          cancelable: !0
        });
        (E = f.current) == null || E.dispatchEvent(C);
      },
      onFocusOutside: I(e.onFocusOutside, (C) => {
        var S;
        l();
        const E = C.target;
        (S = d.rootNavigationMenu) != null && S.contains(E) && C.preventDefault();
      }),
      onPointerDownOutside: I(e.onPointerDownOutside, (C) => {
        var x;
        const E = C.target, S = v().some((N) => {
          var R;
          return (R = N.ref.current) == null ? void 0 : R.contains(E);
        }), P = d.isRootMenu && ((x = d.viewport) == null ? void 0 : x.contains(E));
        (S || P || !d.isRootMenu) && C.preventDefault();
      }),
      onKeyDown: I(e.onKeyDown, (C) => {
        var P;
        const E = C.altKey || C.ctrlKey || C.metaKey;
        if (C.key === "Tab" && !E) {
          const x = ql(C.currentTarget), N = document.activeElement, R = x.findIndex((B) => B === N), k = C.shiftKey ? x.slice(0, R).reverse() : x.slice(R + 1, x.length);
          Cf(k) ? C.preventDefault() : (P = a.current) == null || P.focus();
        }
      }),
      onEscapeKeyDown: I(e.onEscapeKeyDown, (C) => {
        i.current = !0;
      })
    }
  ) });
}), xf = "NavigationMenuViewport", KC = c.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, a = !!_t(xf, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ m(Be, { present: n || a, children: /* @__PURE__ */ m(SY, { ...r, ref: t }) });
});
KC.displayName = xf;
var SY = c.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = _t(xf, n), i = te(t, a.onViewportChange), s = gY(
    Ur,
    e.__scopeNavigationMenu
  ), [l, u] = c.useState(null), [d, f] = c.useState(null), p = l ? (l == null ? void 0 : l.width) + "px" : void 0, g = l ? (l == null ? void 0 : l.height) + "px" : void 0, h = !!a.value, v = h ? a.value : a.previousValue;
  return Zl(d, () => {
    d && u({ width: d.offsetWidth, height: d.offsetHeight });
  }), /* @__PURE__ */ m(
    Y.div,
    {
      "data-state": Sf(h),
      "data-orientation": a.orientation,
      ...o,
      ref: i,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !h && a.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": p,
        "--radix-navigation-menu-viewport-height": g,
        ...o.style
      },
      onPointerEnter: I(e.onPointerEnter, a.onContentEnter),
      onPointerLeave: I(e.onPointerLeave, zi(a.onContentLeave)),
      children: Array.from(s.items).map(([y, { ref: w, forceMount: C, ...E }]) => {
        const S = v === y;
        return /* @__PURE__ */ m(Be, { present: C || S, children: /* @__PURE__ */ m(
          YC,
          {
            ...E,
            ref: oa(w, (P) => {
              S && P && f(P);
            })
          }
        ) }, y);
      })
    }
  );
}), EY = "FocusGroup", XC = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = _t(EY, n);
    return /* @__PURE__ */ m(Kl.Provider, { scope: n, children: /* @__PURE__ */ m(Kl.Slot, { scope: n, children: /* @__PURE__ */ m(Y.div, { dir: o.dir, ...r, ref: t }) }) });
  }
), Ev = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], PY = "FocusGroupItem", qC = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = pY(n), a = _t(PY, n);
    return /* @__PURE__ */ m(Kl.ItemSlot, { scope: n, children: /* @__PURE__ */ m(
      Y.button,
      {
        ...r,
        ref: t,
        onKeyDown: I(e.onKeyDown, (i) => {
          if (["Home", "End", ...Ev].includes(i.key)) {
            let l = o().map((f) => f.ref.current);
            if ([a.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(i.key) && l.reverse(), Ev.includes(i.key)) {
              const f = l.indexOf(i.currentTarget);
              l = l.slice(f + 1);
            }
            setTimeout(() => Cf(l)), i.preventDefault();
          }
        })
      }
    ) });
  }
);
function ql(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Cf(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function NY(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Zl(e, t) {
  const n = fe(t);
  Ce(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
function Sf(e) {
  return e ? "open" : "closed";
}
function ZC(e, t) {
  return `${e}-trigger-${t}`;
}
function QC(e, t) {
  return `${e}-content-${t}`;
}
function zi(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var JC = IC, eS = BC, RY = HC, tS = jC, _Y = VC, nS = UC, rS = GC, oS = KC;
const TY = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ ee(
  JC,
  {
    ref: r,
    className: $(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ m(aS, {})
    ]
  }
));
TY.displayName = JC.displayName;
const $Y = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  eS,
  {
    ref: n,
    className: $(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
$Y.displayName = eS.displayName;
const Uee = RY, MY = yn(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), OY = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ ee(
  tS,
  {
    ref: r,
    className: $(MY(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ m(
        Ji,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
OY.displayName = tS.displayName;
const DY = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  rS,
  {
    ref: n,
    className: $(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
DY.displayName = rS.displayName;
const Gee = _Y, aS = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m("div", { className: $("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ m(
  oS,
  {
    className: $(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
aS.displayName = oS.displayName;
const AY = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  nS,
  {
    ref: n,
    className: $(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ m("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
AY.displayName = nS.displayName;
const IY = ({ className: e, ...t }) => /* @__PURE__ */ m(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: $("mx-auto flex w-full justify-center", e),
    ...t
  }
);
IY.displayName = "Pagination";
const kY = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "ul",
  {
    ref: n,
    className: $("flex flex-row items-center gap-1", e),
    ...t
  }
));
kY.displayName = "PaginationContent";
const LY = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m("li", { ref: n, className: $("", e), ...t }));
LY.displayName = "PaginationItem";
const Ef = ({
  className: e,
  isActive: t,
  size: n = "icon",
  ...r
}) => /* @__PURE__ */ m(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: $(
      Lr({
        variant: t ? "outline" : "ghost",
        size: n
      }),
      e
    ),
    ...r
  }
);
Ef.displayName = "PaginationLink";
const FY = ({
  className: e,
  ...t
}) => /* @__PURE__ */ ee(
  Ef,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: $("gap-1 pl-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ m(Sh, { className: "h-4 w-4" }),
      /* @__PURE__ */ m("span", { children: "Previous" })
    ]
  }
);
FY.displayName = "PaginationPrevious";
const BY = ({
  className: e,
  ...t
}) => /* @__PURE__ */ ee(
  Ef,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: $("gap-1 pr-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ m("span", { children: "Next" }),
      /* @__PURE__ */ m(Qr, { className: "h-4 w-4" })
    ]
  }
);
BY.displayName = "PaginationNext";
const WY = ({
  className: e,
  ...t
}) => /* @__PURE__ */ ee(
  "span",
  {
    "aria-hidden": !0,
    className: $("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ m(Eh, { className: "h-4 w-4" }),
      /* @__PURE__ */ m("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
WY.displayName = "PaginationEllipsis";
var zY = "DismissableLayer", Ql = "dismissableLayer.update", HY = "dismissableLayer.pointerDownOutside", jY = "dismissableLayer.focusOutside", Pv, iS = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), sS = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...l
    } = e, u = c.useContext(iS), [d, f] = c.useState(null), p = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = c.useState({}), h = te(t, (x) => f(x)), v = Array.from(u.layers), [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = v.indexOf(b), w = d ? v.indexOf(d) : -1, C = u.layersWithOutsidePointerEventsDisabled.size > 0, E = w >= y, S = GY((x) => {
      const N = x.target, R = [...u.branches].some((M) => M.contains(N));
      !E || R || (o == null || o(x), i == null || i(x), x.defaultPrevented || s == null || s());
    }, p), P = YY((x) => {
      const N = x.target;
      [...u.branches].some((M) => M.contains(N)) || (a == null || a(x), i == null || i(x), x.defaultPrevented || s == null || s());
    }, p);
    return _n((x) => {
      w === u.layers.size - 1 && (r == null || r(x), !x.defaultPrevented && s && (x.preventDefault(), s()));
    }, p), c.useEffect(() => {
      if (d)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Pv = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Nv(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Pv);
        };
    }, [d, p, n, u]), c.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Nv());
    }, [d, u]), c.useEffect(() => {
      const x = () => g({});
      return document.addEventListener(Ql, x), () => document.removeEventListener(Ql, x);
    }, []), /* @__PURE__ */ m(
      Y.div,
      {
        ...l,
        ref: h,
        style: {
          pointerEvents: C ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: I(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: I(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: I(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
sS.displayName = zY;
var VY = "DismissableLayerBranch", UY = c.forwardRef((e, t) => {
  const n = c.useContext(iS), r = c.useRef(null), o = te(t, r);
  return c.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ m(Y.div, { ...e, ref: o });
});
UY.displayName = VY;
function GY(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e), r = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          cS(
            HY,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function YY(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && cS(jY, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Nv() {
  const e = new CustomEvent(Ql);
  document.dispatchEvent(e);
}
function cS(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Nt(o, a) : o.dispatchEvent(a);
}
var Fc = 0;
function KY() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Rv()), document.body.insertAdjacentElement("beforeend", e[1] ?? Rv()), Fc++, () => {
      Fc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Fc--;
    };
  }, []);
}
function Rv() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var XY = "Portal", lS = c.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, a] = c.useState(!1);
  Ce(() => a(!0), []);
  const i = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? vn.createPortal(/* @__PURE__ */ m(Y.div, { ...r, ref: t }), i) : null;
});
lS.displayName = XY;
var uS = ro(), Bc = function() {
}, Ts = c.forwardRef(function(e, t) {
  var n = c.useRef(null), r = c.useState({
    onScrollCapture: Bc,
    onWheelCapture: Bc,
    onTouchMoveCapture: Bc
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, g = e.noIsolation, h = e.inert, v = e.allowPinchZoom, b = e.as, y = b === void 0 ? "div" : b, w = e.gapMode, C = nr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = p, S = no([n, t]), P = he(he({}, C), o);
  return c.createElement(
    c.Fragment,
    null,
    d && c.createElement(E, { sideCar: uS, removeScrollBar: u, shards: f, noIsolation: g, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n, gapMode: w }),
    i ? c.cloneElement(c.Children.only(s), he(he({}, P), { ref: S })) : c.createElement(y, he({}, P, { className: l, ref: S }), s)
  );
});
Ts.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ts.classNames = {
  fullWidth: un,
  zeroRight: ln
};
var Jl = !1;
if (typeof window < "u")
  try {
    var ri = Object.defineProperty({}, "passive", {
      get: function() {
        return Jl = !0, !0;
      }
    });
    window.addEventListener("test", ri, ri), window.removeEventListener("test", ri, ri);
  } catch {
    Jl = !1;
  }
var xr = Jl ? { passive: !1 } : !1, qY = function(e) {
  return e.tagName === "TEXTAREA";
}, dS = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !qY(e) && n[t] === "visible")
  );
}, ZY = function(e) {
  return dS(e, "overflowY");
}, QY = function(e) {
  return dS(e, "overflowX");
}, _v = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = fS(e, r);
    if (o) {
      var a = pS(e, r), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, JY = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, eK = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, fS = function(e, t) {
  return e === "v" ? ZY(t) : QY(t);
}, pS = function(e, t) {
  return e === "v" ? JY(t) : eK(t);
}, tK = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, nK = function(e, t, n, r, o) {
  var a = tK(e, window.getComputedStyle(t).direction), i = a * r, s = n.target, l = t.contains(s), u = !1, d = i > 0, f = 0, p = 0;
  do {
    var g = pS(e, s), h = g[0], v = g[1], b = g[2], y = v - b - a * h;
    (h || y) && fS(e, s) && (f += y, p += h), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (d && Math.abs(f) < 1 || !d && Math.abs(p) < 1) && (u = !0), u;
}, oi = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Tv = function(e) {
  return [e.deltaX, e.deltaY];
}, $v = function(e) {
  return e && "current" in e ? e.current : e;
}, rK = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, oK = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, aK = 0, Cr = [];
function iK(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), o = c.useState(aK++)[0], a = c.useState(rr)[0], i = c.useRef(e);
  c.useEffect(function() {
    i.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = to([e.lockRef.current], (e.shards || []).map($v), !0).filter(Boolean);
      return v.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = c.useCallback(function(v, b) {
    if ("touches" in v && v.touches.length === 2)
      return !i.current.allowPinchZoom;
    var y = oi(v), w = n.current, C = "deltaX" in v ? v.deltaX : w[0] - y[0], E = "deltaY" in v ? v.deltaY : w[1] - y[1], S, P = v.target, x = Math.abs(C) > Math.abs(E) ? "h" : "v";
    if ("touches" in v && x === "h" && P.type === "range")
      return !1;
    var N = _v(x, P);
    if (!N)
      return !0;
    if (N ? S = x : (S = x === "v" ? "h" : "v", N = _v(x, P)), !N)
      return !1;
    if (!r.current && "changedTouches" in v && (C || E) && (r.current = S), !S)
      return !0;
    var R = r.current || S;
    return nK(R, b, v, R === "h" ? C : E);
  }, []), l = c.useCallback(function(v) {
    var b = v;
    if (!(!Cr.length || Cr[Cr.length - 1] !== a)) {
      var y = "deltaY" in b ? Tv(b) : oi(b), w = t.current.filter(function(S) {
        return S.name === b.type && (S.target === b.target || b.target === S.shadowParent) && rK(S.delta, y);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var C = (i.current.shards || []).map($v).filter(Boolean).filter(function(S) {
          return S.contains(b.target);
        }), E = C.length > 0 ? s(b, C[0]) : !i.current.noIsolation;
        E && b.cancelable && b.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(v, b, y, w) {
    var C = { name: v, delta: b, target: y, should: w, shadowParent: sK(y) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== C;
      });
    }, 1);
  }, []), d = c.useCallback(function(v) {
    n.current = oi(v), r.current = void 0;
  }, []), f = c.useCallback(function(v) {
    u(v.type, Tv(v), v.target, s(v, e.lockRef.current));
  }, []), p = c.useCallback(function(v) {
    u(v.type, oi(v), v.target, s(v, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return Cr.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, xr), document.addEventListener("touchmove", l, xr), document.addEventListener("touchstart", d, xr), function() {
      Cr = Cr.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", l, xr), document.removeEventListener("touchmove", l, xr), document.removeEventListener("touchstart", d, xr);
    };
  }, []);
  var g = e.removeScrollBar, h = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    h ? c.createElement(a, { styles: oK(o) }) : null,
    g ? c.createElement(ao, { gapMode: e.gapMode }) : null
  );
}
function sK(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const cK = oo(uS, iK);
var mS = c.forwardRef(function(e, t) {
  return c.createElement(Ts, he({}, e, { ref: t, sideCar: cK }));
});
mS.classNames = Ts.classNames;
var Pf = "Popover", [vS, Yee] = De(Pf, [
  tn
]), Ma = tn(), [lK, Mn] = vS(Pf), hS = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !1
  } = e, s = Ma(t), l = c.useRef(null), [u, d] = c.useState(!1), [f = !1, p] = Me({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ m(ho, { ...s, children: /* @__PURE__ */ m(
    lK,
    {
      scope: t,
      contentId: Le(),
      triggerRef: l,
      open: f,
      onOpenChange: p,
      onOpenToggle: c.useCallback(() => p((g) => !g), [p]),
      hasCustomAnchor: u,
      onCustomAnchorAdd: c.useCallback(() => d(!0), []),
      onCustomAnchorRemove: c.useCallback(() => d(!1), []),
      modal: i,
      children: n
    }
  ) });
};
hS.displayName = Pf;
var gS = "PopoverAnchor", uK = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Mn(gS, n), a = Ma(n), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return c.useEffect(() => (i(), () => s()), [i, s]), /* @__PURE__ */ m(go, { ...a, ...r, ref: t });
  }
);
uK.displayName = gS;
var bS = "PopoverTrigger", yS = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Mn(bS, n), a = Ma(n), i = te(t, o.triggerRef), s = /* @__PURE__ */ m(
      Y.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ES(o.open),
        ...r,
        ref: i,
        onClick: I(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ m(go, { asChild: !0, ...a, children: s });
  }
);
yS.displayName = bS;
var Nf = "PopoverPortal", [dK, fK] = vS(Nf, {
  forceMount: void 0
}), wS = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Mn(Nf, t);
  return /* @__PURE__ */ m(dK, { scope: t, forceMount: n, children: /* @__PURE__ */ m(Be, { present: n || a.open, children: /* @__PURE__ */ m(lS, { asChild: !0, container: o, children: r }) }) });
};
wS.displayName = Nf;
var Gr = "PopoverContent", xS = c.forwardRef(
  (e, t) => {
    const n = fK(Gr, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Mn(Gr, e.__scopePopover);
    return /* @__PURE__ */ m(Be, { present: r || a.open, children: a.modal ? /* @__PURE__ */ m(pK, { ...o, ref: t }) : /* @__PURE__ */ m(mK, { ...o, ref: t }) });
  }
);
xS.displayName = Gr;
var pK = c.forwardRef(
  (e, t) => {
    const n = Mn(Gr, e.__scopePopover), r = c.useRef(null), o = te(t, r), a = c.useRef(!1);
    return c.useEffect(() => {
      const i = r.current;
      if (i) return io(i);
    }, []), /* @__PURE__ */ m(mS, { as: Ke, allowPinchZoom: !0, children: /* @__PURE__ */ m(
      CS,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: I(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), a.current || (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: I(
          e.onPointerDownOutside,
          (i) => {
            const s = i.detail.originalEvent, l = s.button === 0 && s.ctrlKey === !0, u = s.button === 2 || l;
            a.current = u;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: I(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), mK = c.forwardRef(
  (e, t) => {
    const n = Mn(Gr, e.__scopePopover), r = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ m(
      CS,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var l, u;
          (l = e.onInteractOutside) == null || l.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), CS = c.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: i,
      onEscapeKeyDown: s,
      onPointerDownOutside: l,
      onFocusOutside: u,
      onInteractOutside: d,
      ...f
    } = e, p = Mn(Gr, n), g = Ma(n);
    return KY(), /* @__PURE__ */ m(
      eo,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ m(
          sS,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: d,
            onEscapeKeyDown: s,
            onPointerDownOutside: l,
            onFocusOutside: u,
            onDismiss: () => p.onOpenChange(!1),
            children: /* @__PURE__ */ m(
              Ca,
              {
                "data-state": ES(p.open),
                role: "dialog",
                id: p.contentId,
                ...g,
                ...f,
                ref: t,
                style: {
                  ...f.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), SS = "PopoverClose", vK = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Mn(SS, n);
    return /* @__PURE__ */ m(
      Y.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: I(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
vK.displayName = SS;
var hK = "PopoverArrow", gK = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ma(n);
    return /* @__PURE__ */ m(Sa, { ...o, ...r, ref: t });
  }
);
gK.displayName = hK;
function ES(e) {
  return e ? "open" : "closed";
}
var bK = hS, yK = yS, wK = wS, PS = xS;
const xK = bK, CK = yK, NS = c.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ m(wK, { children: /* @__PURE__ */ m(
  PS,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: $(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
NS.displayName = PS.displayName;
var Rf = "Progress", _f = 100, [SK, Kee] = De(Rf), [EK, PK] = SK(Rf), RS = c.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: a = NK,
      ...i
    } = e;
    (o || o === 0) && !Mv(o) && console.error(RK(`${o}`, "Progress"));
    const s = Mv(o) ? o : _f;
    r !== null && !Ov(r, s) && console.error(_K(`${r}`, "Progress"));
    const l = Ov(r, s) ? r : null, u = Hi(l) ? a(l, s) : void 0;
    return /* @__PURE__ */ m(EK, { scope: n, value: l, max: s, children: /* @__PURE__ */ m(
      Y.div,
      {
        "aria-valuemax": s,
        "aria-valuemin": 0,
        "aria-valuenow": Hi(l) ? l : void 0,
        "aria-valuetext": u,
        role: "progressbar",
        "data-state": $S(l, s),
        "data-value": l ?? void 0,
        "data-max": s,
        ...i,
        ref: t
      }
    ) });
  }
);
RS.displayName = Rf;
var _S = "ProgressIndicator", TS = c.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = PK(_S, n);
    return /* @__PURE__ */ m(
      Y.div,
      {
        "data-state": $S(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
TS.displayName = _S;
function NK(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function $S(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Hi(e) {
  return typeof e == "number";
}
function Mv(e) {
  return Hi(e) && !isNaN(e) && e > 0;
}
function Ov(e, t) {
  return Hi(e) && !isNaN(e) && e <= t && e >= 0;
}
function RK(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${_f}\`.`;
}
function _K(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${_f} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var MS = RS, TK = TS;
const $K = c.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ m(
  MS,
  {
    ref: r,
    className: $(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ m(
      TK,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
$K.displayName = MS.displayName;
var Tf = "Radio", [MK, OS] = De(Tf), [OK, DK] = MK(Tf), DS = c.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: r,
      checked: o = !1,
      required: a,
      disabled: i,
      value: s = "on",
      onCheck: l,
      ...u
    } = e, [d, f] = c.useState(null), p = te(t, (v) => f(v)), g = c.useRef(!1), h = d ? !!d.closest("form") : !0;
    return /* @__PURE__ */ ee(OK, { scope: n, checked: o, disabled: i, children: [
      /* @__PURE__ */ m(
        Y.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": kS(o),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: s,
          ...u,
          ref: p,
          onClick: I(e.onClick, (v) => {
            o || l == null || l(), h && (g.current = v.isPropagationStopped(), g.current || v.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ m(
        AK,
        {
          control: d,
          bubbles: !g.current,
          name: r,
          value: s,
          checked: o,
          required: a,
          disabled: i,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
DS.displayName = Tf;
var AS = "RadioIndicator", IS = c.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = DK(AS, n);
    return /* @__PURE__ */ m(Be, { present: r || a.checked, children: /* @__PURE__ */ m(
      Y.span,
      {
        "data-state": kS(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
IS.displayName = AS;
var AK = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = c.useRef(null), i = po(n), s = pa(t);
  return c.useEffect(() => {
    const l = a.current, u = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(u, "checked").set;
    if (i !== n && f) {
      const p = new Event("click", { bubbles: r });
      f.call(l, n), l.dispatchEvent(p);
    }
  }, [i, n, r]), /* @__PURE__ */ m(
    "input",
    {
      type: "radio",
      "aria-hidden": !0,
      defaultChecked: n,
      ...o,
      tabIndex: -1,
      ref: a,
      style: {
        ...e.style,
        ...s,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function kS(e) {
  return e ? "checked" : "unchecked";
}
var IK = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], $f = "RadioGroup", [kK, Xee] = De($f, [
  nn,
  OS
]), LS = nn(), FS = OS(), [LK, FK] = kK($f), BS = c.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: o,
      value: a,
      required: i = !1,
      disabled: s = !1,
      orientation: l,
      dir: u,
      loop: d = !0,
      onValueChange: f,
      ...p
    } = e, g = LS(n), h = Bt(u), [v, b] = Me({
      prop: a,
      defaultProp: o,
      onChange: f
    });
    return /* @__PURE__ */ m(
      LK,
      {
        scope: n,
        name: r,
        required: i,
        disabled: s,
        value: v,
        onValueChange: b,
        children: /* @__PURE__ */ m(
          Ea,
          {
            asChild: !0,
            ...g,
            orientation: l,
            dir: h,
            loop: d,
            children: /* @__PURE__ */ m(
              Y.div,
              {
                role: "radiogroup",
                "aria-required": i,
                "aria-orientation": l,
                "data-disabled": s ? "" : void 0,
                dir: h,
                ...p,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
BS.displayName = $f;
var WS = "RadioGroupItem", zS = c.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = FK(WS, n), i = a.disabled || r, s = LS(n), l = FS(n), u = c.useRef(null), d = te(t, u), f = a.value === o.value, p = c.useRef(!1);
    return c.useEffect(() => {
      const g = (v) => {
        IK.includes(v.key) && (p.current = !0);
      }, h = () => p.current = !1;
      return document.addEventListener("keydown", g), document.addEventListener("keyup", h), () => {
        document.removeEventListener("keydown", g), document.removeEventListener("keyup", h);
      };
    }, []), /* @__PURE__ */ m(
      Pa,
      {
        asChild: !0,
        ...s,
        focusable: !i,
        active: f,
        children: /* @__PURE__ */ m(
          DS,
          {
            disabled: i,
            required: a.required,
            checked: f,
            ...l,
            ...o,
            name: a.name,
            ref: d,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: I((g) => {
              g.key === "Enter" && g.preventDefault();
            }),
            onFocus: I(o.onFocus, () => {
              var g;
              p.current && ((g = u.current) == null || g.click());
            })
          }
        )
      }
    );
  }
);
zS.displayName = WS;
var BK = "RadioGroupIndicator", HS = c.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = FS(n);
    return /* @__PURE__ */ m(IS, { ...o, ...r, ref: t });
  }
);
HS.displayName = BK;
var jS = BS, VS = zS, WK = HS;
const zK = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  jS,
  {
    className: $("grid gap-2", e),
    ...t,
    ref: n
  }
));
zK.displayName = jS.displayName;
const HK = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  VS,
  {
    ref: n,
    className: $(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ m(WK, { className: "flex items-center justify-center", children: /* @__PURE__ */ m(es, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
HK.displayName = VS.displayName;
const {
  createElement: Yr,
  createContext: jK,
  forwardRef: US,
  useCallback: ut,
  useContext: GS,
  useEffect: Vn,
  useImperativeHandle: YS,
  useLayoutEffect: VK,
  useMemo: UK,
  useRef: dt,
  useState: Ir
} = c, Dv = c[`useId${Math.random()}`.slice(0, 5)], GK = VK, $s = jK(null);
$s.displayName = "PanelGroupContext";
const Un = GK, YK = typeof Dv == "function" ? Dv : () => null;
let KK = 0;
function Mf(e = null) {
  const t = YK(), n = dt(e || t || null);
  return n.current === null && (n.current = "" + KK++), e ?? n.current;
}
function KS({
  children: e,
  className: t = "",
  collapsedSize: n,
  collapsible: r,
  defaultSize: o,
  forwardedRef: a,
  id: i,
  maxSize: s,
  minSize: l,
  onCollapse: u,
  onExpand: d,
  onResize: f,
  order: p,
  style: g,
  tagName: h = "div",
  ...v
}) {
  const b = GS($s);
  if (b === null)
    throw Error("Panel components must be rendered within a PanelGroup container");
  const {
    collapsePanel: y,
    expandPanel: w,
    getPanelSize: C,
    getPanelStyle: E,
    groupId: S,
    isPanelCollapsed: P,
    reevaluatePanelConstraints: x,
    registerPanel: N,
    resizePanel: R,
    unregisterPanel: M
  } = b, k = Mf(i), B = dt({
    callbacks: {
      onCollapse: u,
      onExpand: d,
      onResize: f
    },
    constraints: {
      collapsedSize: n,
      collapsible: r,
      defaultSize: o,
      maxSize: s,
      minSize: l
    },
    id: k,
    idIsFromProps: i !== void 0,
    order: p
  });
  dt({
    didLogMissingDefaultSizeWarning: !1
  }), Un(() => {
    const {
      callbacks: F,
      constraints: H
    } = B.current, j = {
      ...H
    };
    B.current.id = k, B.current.idIsFromProps = i !== void 0, B.current.order = p, F.onCollapse = u, F.onExpand = d, F.onResize = f, H.collapsedSize = n, H.collapsible = r, H.defaultSize = o, H.maxSize = s, H.minSize = l, (j.collapsedSize !== H.collapsedSize || j.collapsible !== H.collapsible || j.maxSize !== H.maxSize || j.minSize !== H.minSize) && x(B.current, j);
  }), Un(() => {
    const F = B.current;
    return N(F), () => {
      M(F);
    };
  }, [p, k, N, M]), YS(a, () => ({
    collapse: () => {
      y(B.current);
    },
    expand: (F) => {
      w(B.current, F);
    },
    getId() {
      return k;
    },
    getSize() {
      return C(B.current);
    },
    isCollapsed() {
      return P(B.current);
    },
    isExpanded() {
      return !P(B.current);
    },
    resize: (F) => {
      R(B.current, F);
    }
  }), [y, w, C, P, k, R]);
  const Z = E(B.current, o);
  return Yr(h, {
    ...v,
    children: e,
    className: t,
    id: i,
    style: {
      ...Z,
      ...g
    },
    // CSS selectors
    "data-panel": "",
    "data-panel-collapsible": r || void 0,
    "data-panel-group-id": S,
    "data-panel-id": k,
    "data-panel-size": parseFloat("" + Z.flexGrow).toFixed(1)
  });
}
const XS = US((e, t) => Yr(KS, {
  ...e,
  forwardedRef: t
}));
KS.displayName = "Panel";
XS.displayName = "forwardRef(Panel)";
let eu = null, zn = null;
function XK(e, t) {
  if (t) {
    const n = (t & eE) !== 0, r = (t & tE) !== 0, o = (t & nE) !== 0, a = (t & rE) !== 0;
    if (n)
      return o ? "se-resize" : a ? "ne-resize" : "e-resize";
    if (r)
      return o ? "sw-resize" : a ? "nw-resize" : "w-resize";
    if (o)
      return "s-resize";
    if (a)
      return "n-resize";
  }
  switch (e) {
    case "horizontal":
      return "ew-resize";
    case "intersection":
      return "move";
    case "vertical":
      return "ns-resize";
  }
}
function qK() {
  zn !== null && (document.head.removeChild(zn), eu = null, zn = null);
}
function Wc(e, t) {
  const n = XK(e, t);
  eu !== n && (eu = n, zn === null && (zn = document.createElement("style"), document.head.appendChild(zn)), zn.innerHTML = `*{cursor: ${n}!important;}`);
}
function qS(e) {
  return e.type === "keydown";
}
function ZS(e) {
  return e.type.startsWith("pointer");
}
function QS(e) {
  return e.type.startsWith("mouse");
}
function Ms(e) {
  if (ZS(e)) {
    if (e.isPrimary)
      return {
        x: e.clientX,
        y: e.clientY
      };
  } else if (QS(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  return {
    x: 1 / 0,
    y: 1 / 0
  };
}
function ZK() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
function QK(e, t, n) {
  return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function JK(e, t) {
  if (e === t) throw new Error("Cannot compare node with itself");
  const n = {
    a: kv(e),
    b: kv(t)
  };
  let r;
  for (; n.a.at(-1) === n.b.at(-1); )
    e = n.a.pop(), t = n.b.pop(), r = e;
  ve(r, "Stacking order can only be calculated for elements with a common ancestor");
  const o = {
    a: Iv(Av(n.a)),
    b: Iv(Av(n.b))
  };
  if (o.a === o.b) {
    const a = r.childNodes, i = {
      a: n.a.at(-1),
      b: n.b.at(-1)
    };
    let s = a.length;
    for (; s--; ) {
      const l = a[s];
      if (l === i.a) return 1;
      if (l === i.b) return -1;
    }
  }
  return Math.sign(o.a - o.b);
}
const eX = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function tX(e) {
  var t;
  const n = getComputedStyle((t = JS(e)) !== null && t !== void 0 ? t : e).display;
  return n === "flex" || n === "inline-flex";
}
function nX(e) {
  const t = getComputedStyle(e);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || tX(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || eX.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function Av(e) {
  let t = e.length;
  for (; t--; ) {
    const n = e[t];
    if (ve(n, "Missing node"), nX(n)) return n;
  }
  return null;
}
function Iv(e) {
  return e && Number(getComputedStyle(e).zIndex) || 0;
}
function kv(e) {
  const t = [];
  for (; e; )
    t.push(e), e = JS(e);
  return t;
}
function JS(e) {
  const {
    parentNode: t
  } = e;
  return t && t instanceof ShadowRoot ? t.host : t;
}
const eE = 1, tE = 2, nE = 4, rE = 8, rX = ZK() === "coarse";
let Dt = [], kr = !1, Pn = /* @__PURE__ */ new Map(), Os = /* @__PURE__ */ new Map();
const ea = /* @__PURE__ */ new Set();
function oX(e, t, n, r, o) {
  var a;
  const {
    ownerDocument: i
  } = t, s = {
    direction: n,
    element: t,
    hitAreaMargins: r,
    setResizeHandlerState: o
  }, l = (a = Pn.get(i)) !== null && a !== void 0 ? a : 0;
  return Pn.set(i, l + 1), ea.add(s), ji(), function() {
    var d;
    Os.delete(e), ea.delete(s);
    const f = (d = Pn.get(i)) !== null && d !== void 0 ? d : 1;
    if (Pn.set(i, f - 1), ji(), f === 1 && Pn.delete(i), Dt.includes(s)) {
      const p = Dt.indexOf(s);
      p >= 0 && Dt.splice(p, 1), Df(), o("up", !0, null);
    }
  };
}
function Lv(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = Ms(e);
  kr = !0, Of({
    target: t,
    x: n,
    y: r
  }), ji(), Dt.length > 0 && (Vi("down", e), e.preventDefault(), e.stopPropagation());
}
function Oo(e) {
  const {
    x: t,
    y: n
  } = Ms(e);
  if (kr && e.buttons === 0 && (kr = !1, Vi("up", e)), !kr) {
    const {
      target: r
    } = e;
    Of({
      target: r,
      x: t,
      y: n
    });
  }
  Vi("move", e), Df(), Dt.length > 0 && e.preventDefault();
}
function Sr(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = Ms(e);
  Os.clear(), kr = !1, Dt.length > 0 && e.preventDefault(), Vi("up", e), Of({
    target: t,
    x: n,
    y: r
  }), Df(), ji();
}
function Of({
  target: e,
  x: t,
  y: n
}) {
  Dt.splice(0);
  let r = null;
  e instanceof HTMLElement && (r = e), ea.forEach((o) => {
    const {
      element: a,
      hitAreaMargins: i
    } = o, s = a.getBoundingClientRect(), {
      bottom: l,
      left: u,
      right: d,
      top: f
    } = s, p = rX ? i.coarse : i.fine;
    if (t >= u - p && t <= d + p && n >= f - p && n <= l + p) {
      if (r !== null && a !== r && !a.contains(r) && !r.contains(a) && // Calculating stacking order has a cost, so we should avoid it if possible
      // That is why we only check potentially intersecting handles,
      // and why we skip if the event target is within the handle's DOM
      JK(r, a) > 0) {
        let h = r, v = !1;
        for (; h && !h.contains(a); ) {
          if (QK(h.getBoundingClientRect(), s)) {
            v = !0;
            break;
          }
          h = h.parentElement;
        }
        if (v)
          return;
      }
      Dt.push(o);
    }
  });
}
function zc(e, t) {
  Os.set(e, t);
}
function Df() {
  let e = !1, t = !1;
  Dt.forEach((r) => {
    const {
      direction: o
    } = r;
    o === "horizontal" ? e = !0 : t = !0;
  });
  let n = 0;
  Os.forEach((r) => {
    n |= r;
  }), e && t ? Wc("intersection", n) : e ? Wc("horizontal", n) : t ? Wc("vertical", n) : qK();
}
function ji() {
  Pn.forEach((e, t) => {
    const {
      body: n
    } = t;
    n.removeEventListener("contextmenu", Sr), n.removeEventListener("pointerdown", Lv), n.removeEventListener("pointerleave", Oo), n.removeEventListener("pointermove", Oo);
  }), window.removeEventListener("pointerup", Sr), window.removeEventListener("pointercancel", Sr), ea.size > 0 && (kr ? (Dt.length > 0 && Pn.forEach((e, t) => {
    const {
      body: n
    } = t;
    e > 0 && (n.addEventListener("contextmenu", Sr), n.addEventListener("pointerleave", Oo), n.addEventListener("pointermove", Oo));
  }), window.addEventListener("pointerup", Sr), window.addEventListener("pointercancel", Sr)) : Pn.forEach((e, t) => {
    const {
      body: n
    } = t;
    e > 0 && (n.addEventListener("pointerdown", Lv, {
      capture: !0
    }), n.addEventListener("pointermove", Oo));
  }));
}
function Vi(e, t) {
  ea.forEach((n) => {
    const {
      setResizeHandlerState: r
    } = n, o = Dt.includes(n);
    r(e, o, t);
  });
}
function aX() {
  const [e, t] = Ir(0);
  return ut(() => t((n) => n + 1), []);
}
function ve(e, t) {
  if (!e)
    throw console.error(t), Error(t);
}
const Af = 10;
function Jn(e, t, n = Af) {
  return e.toFixed(n) === t.toFixed(n) ? 0 : e > t ? 1 : -1;
}
function cn(e, t, n = Af) {
  return Jn(e, t, n) === 0;
}
function bt(e, t, n) {
  return Jn(e, t, n) === 0;
}
function iX(e, t, n) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++) {
    const o = e[r], a = t[r];
    if (!bt(o, a, n))
      return !1;
  }
  return !0;
}
function Tr({
  panelConstraints: e,
  panelIndex: t,
  size: n
}) {
  const r = e[t];
  ve(r != null, `Panel constraints not found for index ${t}`);
  let {
    collapsedSize: o = 0,
    collapsible: a,
    maxSize: i = 100,
    minSize: s = 0
  } = r;
  if (Jn(n, s) < 0)
    if (a) {
      const l = (o + s) / 2;
      Jn(n, l) < 0 ? n = o : n = s;
    } else
      n = s;
  return n = Math.min(i, n), n = parseFloat(n.toFixed(Af)), n;
}
function Io({
  delta: e,
  initialLayout: t,
  panelConstraints: n,
  pivotIndices: r,
  prevLayout: o,
  trigger: a
}) {
  if (bt(e, 0))
    return t;
  const i = [...t], [s, l] = r;
  ve(s != null, "Invalid first pivot index"), ve(l != null, "Invalid second pivot index");
  let u = 0;
  if (a === "keyboard") {
    {
      const f = e < 0 ? l : s, p = n[f];
      ve(p, `Panel constraints not found for index ${f}`);
      const {
        collapsedSize: g = 0,
        collapsible: h,
        minSize: v = 0
      } = p;
      if (h) {
        const b = t[f];
        if (ve(b != null, `Previous layout not found for panel index ${f}`), bt(b, g)) {
          const y = v - b;
          Jn(y, Math.abs(e)) > 0 && (e = e < 0 ? 0 - y : y);
        }
      }
    }
    {
      const f = e < 0 ? s : l, p = n[f];
      ve(p, `No panel constraints found for index ${f}`);
      const {
        collapsedSize: g = 0,
        collapsible: h,
        minSize: v = 0
      } = p;
      if (h) {
        const b = t[f];
        if (ve(b != null, `Previous layout not found for panel index ${f}`), bt(b, v)) {
          const y = b - g;
          Jn(y, Math.abs(e)) > 0 && (e = e < 0 ? 0 - y : y);
        }
      }
    }
  }
  {
    const f = e < 0 ? 1 : -1;
    let p = e < 0 ? l : s, g = 0;
    for (; ; ) {
      const v = t[p];
      ve(v != null, `Previous layout not found for panel index ${p}`);
      const y = Tr({
        panelConstraints: n,
        panelIndex: p,
        size: 100
      }) - v;
      if (g += y, p += f, p < 0 || p >= n.length)
        break;
    }
    const h = Math.min(Math.abs(e), Math.abs(g));
    e = e < 0 ? 0 - h : h;
  }
  {
    let p = e < 0 ? s : l;
    for (; p >= 0 && p < n.length; ) {
      const g = Math.abs(e) - Math.abs(u), h = t[p];
      ve(h != null, `Previous layout not found for panel index ${p}`);
      const v = h - g, b = Tr({
        panelConstraints: n,
        panelIndex: p,
        size: v
      });
      if (!bt(h, b) && (u += h - b, i[p] = b, u.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, {
        numeric: !0
      }) >= 0))
        break;
      e < 0 ? p-- : p++;
    }
  }
  if (iX(o, i))
    return o;
  {
    const f = e < 0 ? l : s, p = t[f];
    ve(p != null, `Previous layout not found for panel index ${f}`);
    const g = p + u, h = Tr({
      panelConstraints: n,
      panelIndex: f,
      size: g
    });
    if (i[f] = h, !bt(h, g)) {
      let v = g - h, y = e < 0 ? l : s;
      for (; y >= 0 && y < n.length; ) {
        const w = i[y];
        ve(w != null, `Previous layout not found for panel index ${y}`);
        const C = w + v, E = Tr({
          panelConstraints: n,
          panelIndex: y,
          size: C
        });
        if (bt(w, E) || (v -= E - w, i[y] = E), bt(v, 0))
          break;
        e > 0 ? y-- : y++;
      }
    }
  }
  const d = i.reduce((f, p) => p + f, 0);
  return bt(d, 100) ? i : o;
}
function sX({
  layout: e,
  panelsArray: t,
  pivotIndices: n
}) {
  let r = 0, o = 100, a = 0, i = 0;
  const s = n[0];
  ve(s != null, "No pivot index found"), t.forEach((f, p) => {
    const {
      constraints: g
    } = f, {
      maxSize: h = 100,
      minSize: v = 0
    } = g;
    p === s ? (r = v, o = h) : (a += v, i += h);
  });
  const l = Math.min(o, 100 - a), u = Math.max(r, 100 - i), d = e[s];
  return {
    valueMax: l,
    valueMin: u,
    valueNow: d
  };
}
function ta(e, t = document) {
  return Array.from(t.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`));
}
function oE(e, t, n = document) {
  const o = ta(e, n).findIndex((a) => a.getAttribute("data-panel-resize-handle-id") === t);
  return o ?? null;
}
function aE(e, t, n) {
  const r = oE(e, t, n);
  return r != null ? [r, r + 1] : [-1, -1];
}
function iE(e, t = document) {
  var n;
  if (t instanceof HTMLElement && (t == null || (n = t.dataset) === null || n === void 0 ? void 0 : n.panelGroupId) == e)
    return t;
  const r = t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);
  return r || null;
}
function Ds(e, t = document) {
  const n = t.querySelector(`[data-panel-resize-handle-id="${e}"]`);
  return n || null;
}
function cX(e, t, n, r = document) {
  var o, a, i, s;
  const l = Ds(t, r), u = ta(e, r), d = l ? u.indexOf(l) : -1, f = (o = (a = n[d]) === null || a === void 0 ? void 0 : a.id) !== null && o !== void 0 ? o : null, p = (i = (s = n[d + 1]) === null || s === void 0 ? void 0 : s.id) !== null && i !== void 0 ? i : null;
  return [f, p];
}
function lX({
  committedValuesRef: e,
  eagerValuesRef: t,
  groupId: n,
  layout: r,
  panelDataArray: o,
  panelGroupElement: a,
  setLayout: i
}) {
  dt({
    didWarnAboutMissingResizeHandle: !1
  }), Un(() => {
    if (!a)
      return;
    const s = ta(n, a);
    for (let l = 0; l < o.length - 1; l++) {
      const {
        valueMax: u,
        valueMin: d,
        valueNow: f
      } = sX({
        layout: r,
        panelsArray: o,
        pivotIndices: [l, l + 1]
      }), p = s[l];
      if (p != null) {
        const g = o[l];
        ve(g, `No panel data found for index "${l}"`), p.setAttribute("aria-controls", g.id), p.setAttribute("aria-valuemax", "" + Math.round(u)), p.setAttribute("aria-valuemin", "" + Math.round(d)), p.setAttribute("aria-valuenow", f != null ? "" + Math.round(f) : "");
      }
    }
    return () => {
      s.forEach((l, u) => {
        l.removeAttribute("aria-controls"), l.removeAttribute("aria-valuemax"), l.removeAttribute("aria-valuemin"), l.removeAttribute("aria-valuenow");
      });
    };
  }, [n, r, o, a]), Vn(() => {
    if (!a)
      return;
    const s = t.current;
    ve(s, "Eager values not found");
    const {
      panelDataArray: l
    } = s, u = iE(n, a);
    ve(u != null, `No group found for id "${n}"`);
    const d = ta(n, a);
    ve(d, `No resize handles found for group id "${n}"`);
    const f = d.map((p) => {
      const g = p.getAttribute("data-panel-resize-handle-id");
      ve(g, "Resize handle element has no handle id attribute");
      const [h, v] = cX(n, g, l, a);
      if (h == null || v == null)
        return () => {
        };
      const b = (y) => {
        if (!y.defaultPrevented)
          switch (y.key) {
            case "Enter": {
              y.preventDefault();
              const w = l.findIndex((C) => C.id === h);
              if (w >= 0) {
                const C = l[w];
                ve(C, `No panel data found for index ${w}`);
                const E = r[w], {
                  collapsedSize: S = 0,
                  collapsible: P,
                  minSize: x = 0
                } = C.constraints;
                if (E != null && P) {
                  const N = Io({
                    delta: bt(E, S) ? x - S : S - E,
                    initialLayout: r,
                    panelConstraints: l.map((R) => R.constraints),
                    pivotIndices: aE(n, g, a),
                    prevLayout: r,
                    trigger: "keyboard"
                  });
                  r !== N && i(N);
                }
              }
              break;
            }
          }
      };
      return p.addEventListener("keydown", b), () => {
        p.removeEventListener("keydown", b);
      };
    });
    return () => {
      f.forEach((p) => p());
    };
  }, [a, e, t, n, r, o, i]);
}
function Fv(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function sE(e, t) {
  const n = e === "horizontal", {
    x: r,
    y: o
  } = Ms(t);
  return n ? r : o;
}
function uX(e, t, n, r, o) {
  const a = n === "horizontal", i = Ds(t, o);
  ve(i, `No resize handle element found for id "${t}"`);
  const s = i.getAttribute("data-panel-group-id");
  ve(s, "Resize handle element has no group id attribute");
  let {
    initialCursorPosition: l
  } = r;
  const u = sE(n, e), d = iE(s, o);
  ve(d, `No group element found for id "${s}"`);
  const f = d.getBoundingClientRect(), p = a ? f.width : f.height;
  return (u - l) / p * 100;
}
function dX(e, t, n, r, o, a) {
  if (qS(e)) {
    const i = n === "horizontal";
    let s = 0;
    e.shiftKey ? s = 100 : o != null ? s = o : s = 10;
    let l = 0;
    switch (e.key) {
      case "ArrowDown":
        l = i ? 0 : s;
        break;
      case "ArrowLeft":
        l = i ? -s : 0;
        break;
      case "ArrowRight":
        l = i ? s : 0;
        break;
      case "ArrowUp":
        l = i ? 0 : -s;
        break;
      case "End":
        l = 100;
        break;
      case "Home":
        l = -100;
        break;
    }
    return l;
  } else
    return r == null ? 0 : uX(e, t, n, r, a);
}
function fX({
  panelDataArray: e
}) {
  const t = Array(e.length), n = e.map((a) => a.constraints);
  let r = 0, o = 100;
  for (let a = 0; a < e.length; a++) {
    const i = n[a];
    ve(i, `Panel constraints not found for index ${a}`);
    const {
      defaultSize: s
    } = i;
    s != null && (r++, t[a] = s, o -= s);
  }
  for (let a = 0; a < e.length; a++) {
    const i = n[a];
    ve(i, `Panel constraints not found for index ${a}`);
    const {
      defaultSize: s
    } = i;
    if (s != null)
      continue;
    const l = e.length - r, u = o / l;
    r++, t[a] = u, o -= u;
  }
  return t;
}
function Er(e, t, n) {
  t.forEach((r, o) => {
    const a = e[o];
    ve(a, `Panel data not found for index ${o}`);
    const {
      callbacks: i,
      constraints: s,
      id: l
    } = a, {
      collapsedSize: u = 0,
      collapsible: d
    } = s, f = n[l];
    if (f == null || r !== f) {
      n[l] = r;
      const {
        onCollapse: p,
        onExpand: g,
        onResize: h
      } = i;
      h && h(r, f), d && (p || g) && (g && (f == null || cn(f, u)) && !cn(r, u) && g(), p && (f == null || !cn(f, u)) && cn(r, u) && p());
    }
  });
}
function ai(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] != t[n])
      return !1;
  return !0;
}
function pX({
  defaultSize: e,
  dragState: t,
  layout: n,
  panelData: r,
  panelIndex: o,
  precision: a = 3
}) {
  const i = n[o];
  let s;
  return i == null ? s = e != null ? e.toPrecision(a) : "1" : r.length === 1 ? s = "1" : s = i.toPrecision(a), {
    flexBasis: 0,
    flexGrow: s,
    flexShrink: 1,
    // Without this, Panel sizes may be unintentionally overridden by their content
    overflow: "hidden",
    // Disable pointer events inside of a panel during resize
    // This avoid edge cases like nested iframes
    pointerEvents: t !== null ? "none" : void 0
  };
}
function mX(e, t = 10) {
  let n = null;
  return (...o) => {
    n !== null && clearTimeout(n), n = setTimeout(() => {
      e(...o);
    }, t);
  };
}
function Bv(e) {
  try {
    if (typeof localStorage < "u")
      e.getItem = (t) => localStorage.getItem(t), e.setItem = (t, n) => {
        localStorage.setItem(t, n);
      };
    else
      throw new Error("localStorage not supported in this environment");
  } catch (t) {
    console.error(t), e.getItem = () => null, e.setItem = () => {
    };
  }
}
function cE(e) {
  return `react-resizable-panels:${e}`;
}
function lE(e) {
  return e.map((t) => {
    const {
      constraints: n,
      id: r,
      idIsFromProps: o,
      order: a
    } = t;
    return o ? r : a ? `${a}:${JSON.stringify(n)}` : JSON.stringify(n);
  }).sort((t, n) => t.localeCompare(n)).join(",");
}
function uE(e, t) {
  try {
    const n = cE(e), r = t.getItem(n);
    if (r) {
      const o = JSON.parse(r);
      if (typeof o == "object" && o != null)
        return o;
    }
  } catch {
  }
  return null;
}
function vX(e, t, n) {
  var r, o;
  const a = (r = uE(e, n)) !== null && r !== void 0 ? r : {}, i = lE(t);
  return (o = a[i]) !== null && o !== void 0 ? o : null;
}
function hX(e, t, n, r, o) {
  var a;
  const i = cE(e), s = lE(t), l = (a = uE(e, o)) !== null && a !== void 0 ? a : {};
  l[s] = {
    expandToSizes: Object.fromEntries(n.entries()),
    layout: r
  };
  try {
    o.setItem(i, JSON.stringify(l));
  } catch (u) {
    console.error(u);
  }
}
function Wv({
  layout: e,
  panelConstraints: t
}) {
  const n = [...e], r = n.reduce((a, i) => a + i, 0);
  if (n.length !== t.length)
    throw Error(`Invalid ${t.length} panel layout: ${n.map((a) => `${a}%`).join(", ")}`);
  if (!bt(r, 100) && n.length > 0)
    for (let a = 0; a < t.length; a++) {
      const i = n[a];
      ve(i != null, `No layout data found for index ${a}`);
      const s = 100 / r * i;
      n[a] = s;
    }
  let o = 0;
  for (let a = 0; a < t.length; a++) {
    const i = n[a];
    ve(i != null, `No layout data found for index ${a}`);
    const s = Tr({
      panelConstraints: t,
      panelIndex: a,
      size: i
    });
    i != s && (o += i - s, n[a] = s);
  }
  if (!bt(o, 0))
    for (let a = 0; a < t.length; a++) {
      const i = n[a];
      ve(i != null, `No layout data found for index ${a}`);
      const s = i + o, l = Tr({
        panelConstraints: t,
        panelIndex: a,
        size: s
      });
      if (i !== l && (o -= l - i, n[a] = l, bt(o, 0)))
        break;
    }
  return n;
}
const gX = 100, ko = {
  getItem: (e) => (Bv(ko), ko.getItem(e)),
  setItem: (e, t) => {
    Bv(ko), ko.setItem(e, t);
  }
}, zv = {};
function dE({
  autoSaveId: e = null,
  children: t,
  className: n = "",
  direction: r,
  forwardedRef: o,
  id: a = null,
  onLayout: i = null,
  keyboardResizeBy: s = null,
  storage: l = ko,
  style: u,
  tagName: d = "div",
  ...f
}) {
  const p = Mf(a), g = dt(null), [h, v] = Ir(null), [b, y] = Ir([]), w = aX(), C = dt({}), E = dt(/* @__PURE__ */ new Map()), S = dt(0), P = dt({
    autoSaveId: e,
    direction: r,
    dragState: h,
    id: p,
    keyboardResizeBy: s,
    onLayout: i,
    storage: l
  }), x = dt({
    layout: b,
    panelDataArray: [],
    panelDataArrayChanged: !1
  });
  dt({
    didLogIdAndOrderWarning: !1,
    didLogPanelConstraintsWarning: !1,
    prevPanelIds: []
  }), YS(o, () => ({
    getId: () => P.current.id,
    getLayout: () => {
      const {
        layout: D
      } = x.current;
      return D;
    },
    setLayout: (D) => {
      const {
        onLayout: L
      } = P.current, {
        layout: U,
        panelDataArray: G
      } = x.current, z = Wv({
        layout: D,
        panelConstraints: G.map((X) => X.constraints)
      });
      Fv(U, z) || (y(z), x.current.layout = z, L && L(z), Er(G, z, C.current));
    }
  }), []), Un(() => {
    P.current.autoSaveId = e, P.current.direction = r, P.current.dragState = h, P.current.id = p, P.current.onLayout = i, P.current.storage = l;
  }), lX({
    committedValuesRef: P,
    eagerValuesRef: x,
    groupId: p,
    layout: b,
    panelDataArray: x.current.panelDataArray,
    setLayout: y,
    panelGroupElement: g.current
  }), Vn(() => {
    const {
      panelDataArray: D
    } = x.current;
    if (e) {
      if (b.length === 0 || b.length !== D.length)
        return;
      let L = zv[e];
      L == null && (L = mX(hX, gX), zv[e] = L);
      const U = [...D], G = new Map(E.current);
      L(e, U, G, b, l);
    }
  }, [e, b, l]), Vn(() => {
  });
  const N = ut((D) => {
    const {
      onLayout: L
    } = P.current, {
      layout: U,
      panelDataArray: G
    } = x.current;
    if (D.constraints.collapsible) {
      const z = G.map((re) => re.constraints), {
        collapsedSize: X = 0,
        panelSize: Q,
        pivotIndices: J
      } = kn(G, D, U);
      if (ve(Q != null, `Panel size not found for panel "${D.id}"`), !cn(Q, X)) {
        E.current.set(D.id, Q);
        const _ = _r(G, D) === G.length - 1 ? Q - X : X - Q, K = Io({
          delta: _,
          initialLayout: U,
          panelConstraints: z,
          pivotIndices: J,
          prevLayout: U,
          trigger: "imperative-api"
        });
        ai(U, K) || (y(K), x.current.layout = K, L && L(K), Er(G, K, C.current));
      }
    }
  }, []), R = ut((D, L) => {
    const {
      onLayout: U
    } = P.current, {
      layout: G,
      panelDataArray: z
    } = x.current;
    if (D.constraints.collapsible) {
      const X = z.map((oe) => oe.constraints), {
        collapsedSize: Q = 0,
        panelSize: J = 0,
        minSize: re = 0,
        pivotIndices: _
      } = kn(z, D, G), K = L ?? re;
      if (cn(J, Q)) {
        const oe = E.current.get(D.id), de = oe != null && oe >= K ? oe : K, le = _r(z, D) === z.length - 1 ? J - de : de - J, ye = Io({
          delta: le,
          initialLayout: G,
          panelConstraints: X,
          pivotIndices: _,
          prevLayout: G,
          trigger: "imperative-api"
        });
        ai(G, ye) || (y(ye), x.current.layout = ye, U && U(ye), Er(z, ye, C.current));
      }
    }
  }, []), M = ut((D) => {
    const {
      layout: L,
      panelDataArray: U
    } = x.current, {
      panelSize: G
    } = kn(U, D, L);
    return ve(G != null, `Panel size not found for panel "${D.id}"`), G;
  }, []), k = ut((D, L) => {
    const {
      panelDataArray: U
    } = x.current, G = _r(U, D);
    return pX({
      defaultSize: L,
      dragState: h,
      layout: b,
      panelData: U,
      panelIndex: G
    });
  }, [h, b]), B = ut((D) => {
    const {
      layout: L,
      panelDataArray: U
    } = x.current, {
      collapsedSize: G = 0,
      collapsible: z,
      panelSize: X
    } = kn(U, D, L);
    return ve(X != null, `Panel size not found for panel "${D.id}"`), z === !0 && cn(X, G);
  }, []), Z = ut((D) => {
    const {
      layout: L,
      panelDataArray: U
    } = x.current, {
      collapsedSize: G = 0,
      collapsible: z,
      panelSize: X
    } = kn(U, D, L);
    return ve(X != null, `Panel size not found for panel "${D.id}"`), !z || Jn(X, G) > 0;
  }, []), F = ut((D) => {
    const {
      panelDataArray: L
    } = x.current;
    L.push(D), L.sort((U, G) => {
      const z = U.order, X = G.order;
      return z == null && X == null ? 0 : z == null ? -1 : X == null ? 1 : z - X;
    }), x.current.panelDataArrayChanged = !0, w();
  }, [w]);
  Un(() => {
    if (x.current.panelDataArrayChanged) {
      x.current.panelDataArrayChanged = !1;
      const {
        autoSaveId: D,
        onLayout: L,
        storage: U
      } = P.current, {
        layout: G,
        panelDataArray: z
      } = x.current;
      let X = null;
      if (D) {
        const J = vX(D, z, U);
        J && (E.current = new Map(Object.entries(J.expandToSizes)), X = J.layout);
      }
      X == null && (X = fX({
        panelDataArray: z
      }));
      const Q = Wv({
        layout: X,
        panelConstraints: z.map((J) => J.constraints)
      });
      Fv(G, Q) || (y(Q), x.current.layout = Q, L && L(Q), Er(z, Q, C.current));
    }
  }), Un(() => {
    const D = x.current;
    return () => {
      D.layout = [];
    };
  }, []);
  const H = ut((D) => function(U) {
    U.preventDefault();
    const G = g.current;
    if (!G)
      return () => null;
    const {
      direction: z,
      dragState: X,
      id: Q,
      keyboardResizeBy: J,
      onLayout: re
    } = P.current, {
      layout: _,
      panelDataArray: K
    } = x.current, {
      initialLayout: oe
    } = X ?? {}, de = aE(Q, D, G);
    let ce = dX(U, D, z, X, J, G);
    const le = z === "horizontal";
    document.dir === "rtl" && le && (ce = -ce);
    const ye = K.map((Ve) => Ve.constraints), pe = Io({
      delta: ce,
      initialLayout: oe ?? _,
      panelConstraints: ye,
      pivotIndices: de,
      prevLayout: _,
      trigger: qS(U) ? "keyboard" : "mouse-or-touch"
    }), Ee = !ai(_, pe);
    (ZS(U) || QS(U)) && S.current != ce && (S.current = ce, !Ee && ce !== 0 ? le ? zc(D, ce < 0 ? eE : tE) : zc(D, ce < 0 ? nE : rE) : zc(D, 0)), Ee && (y(pe), x.current.layout = pe, re && re(pe), Er(K, pe, C.current));
  }, []), j = ut((D, L) => {
    const {
      onLayout: U
    } = P.current, {
      layout: G,
      panelDataArray: z
    } = x.current, X = z.map((oe) => oe.constraints), {
      panelSize: Q,
      pivotIndices: J
    } = kn(z, D, G);
    ve(Q != null, `Panel size not found for panel "${D.id}"`);
    const _ = _r(z, D) === z.length - 1 ? Q - L : L - Q, K = Io({
      delta: _,
      initialLayout: G,
      panelConstraints: X,
      pivotIndices: J,
      prevLayout: G,
      trigger: "imperative-api"
    });
    ai(G, K) || (y(K), x.current.layout = K, U && U(K), Er(z, K, C.current));
  }, []), W = ut((D, L) => {
    const {
      layout: U,
      panelDataArray: G
    } = x.current, {
      collapsedSize: z = 0,
      collapsible: X
    } = L, {
      collapsedSize: Q = 0,
      collapsible: J,
      maxSize: re = 100,
      minSize: _ = 0
    } = D.constraints, {
      panelSize: K
    } = kn(G, D, U);
    K != null && (X && J && cn(K, z) ? cn(z, Q) || j(D, Q) : K < _ ? j(D, _) : K > re && j(D, re));
  }, [j]), O = ut((D, L) => {
    const {
      direction: U
    } = P.current, {
      layout: G
    } = x.current;
    if (!g.current)
      return;
    const z = Ds(D, g.current);
    ve(z, `Drag handle element not found for id "${D}"`);
    const X = sE(U, L);
    v({
      dragHandleId: D,
      dragHandleRect: z.getBoundingClientRect(),
      initialCursorPosition: X,
      initialLayout: G
    });
  }, []), V = ut(() => {
    v(null);
  }, []), ne = ut((D) => {
    const {
      panelDataArray: L
    } = x.current, U = _r(L, D);
    U >= 0 && (L.splice(U, 1), delete C.current[D.id], x.current.panelDataArrayChanged = !0, w());
  }, [w]), q = UK(() => ({
    collapsePanel: N,
    direction: r,
    dragState: h,
    expandPanel: R,
    getPanelSize: M,
    getPanelStyle: k,
    groupId: p,
    isPanelCollapsed: B,
    isPanelExpanded: Z,
    reevaluatePanelConstraints: W,
    registerPanel: F,
    registerResizeHandle: H,
    resizePanel: j,
    startDragging: O,
    stopDragging: V,
    unregisterPanel: ne,
    panelGroupElement: g.current
  }), [N, h, r, R, M, k, p, B, Z, W, F, H, j, O, V, ne]), A = {
    display: "flex",
    flexDirection: r === "horizontal" ? "row" : "column",
    height: "100%",
    overflow: "hidden",
    width: "100%"
  };
  return Yr($s.Provider, {
    value: q
  }, Yr(d, {
    ...f,
    children: t,
    className: n,
    id: a,
    ref: g,
    style: {
      ...A,
      ...u
    },
    // CSS selectors
    "data-panel-group": "",
    "data-panel-group-direction": r,
    "data-panel-group-id": p
  }));
}
const fE = US((e, t) => Yr(dE, {
  ...e,
  forwardedRef: t
}));
dE.displayName = "PanelGroup";
fE.displayName = "forwardRef(PanelGroup)";
function _r(e, t) {
  return e.findIndex((n) => n === t || n.id === t.id);
}
function kn(e, t, n) {
  const r = _r(e, t), a = r === e.length - 1 ? [r - 1, r] : [r, r + 1], i = n[r];
  return {
    ...t.constraints,
    panelSize: i,
    pivotIndices: a
  };
}
function bX({
  disabled: e,
  handleId: t,
  resizeHandler: n,
  panelGroupElement: r
}) {
  Vn(() => {
    if (e || n == null || r == null)
      return;
    const o = Ds(t, r);
    if (o == null)
      return;
    const a = (i) => {
      if (!i.defaultPrevented)
        switch (i.key) {
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
          case "ArrowUp":
          case "End":
          case "Home": {
            i.preventDefault(), n(i);
            break;
          }
          case "F6": {
            i.preventDefault();
            const s = o.getAttribute("data-panel-group-id");
            ve(s, `No group element found for id "${s}"`);
            const l = ta(s, r), u = oE(s, t, r);
            ve(u !== null, `No resize element found for id "${t}"`);
            const d = i.shiftKey ? u > 0 ? u - 1 : l.length - 1 : u + 1 < l.length ? u + 1 : 0;
            l[d].focus();
            break;
          }
        }
    };
    return o.addEventListener("keydown", a), () => {
      o.removeEventListener("keydown", a);
    };
  }, [r, e, t, n]);
}
function pE({
  children: e = null,
  className: t = "",
  disabled: n = !1,
  hitAreaMargins: r,
  id: o,
  onBlur: a,
  onDragging: i,
  onFocus: s,
  style: l = {},
  tabIndex: u = 0,
  tagName: d = "div",
  ...f
}) {
  var p, g;
  const h = dt(null), v = dt({
    onDragging: i
  });
  Vn(() => {
    v.current.onDragging = i;
  });
  const b = GS($s);
  if (b === null)
    throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");
  const {
    direction: y,
    groupId: w,
    registerResizeHandle: C,
    startDragging: E,
    stopDragging: S,
    panelGroupElement: P
  } = b, x = Mf(o), [N, R] = Ir("inactive"), [M, k] = Ir(!1), [B, Z] = Ir(null), F = dt({
    state: N
  });
  Un(() => {
    F.current.state = N;
  }), Vn(() => {
    if (n)
      Z(null);
    else {
      const O = C(x);
      Z(() => O);
    }
  }, [n, x, C]);
  const H = (p = r == null ? void 0 : r.coarse) !== null && p !== void 0 ? p : 15, j = (g = r == null ? void 0 : r.fine) !== null && g !== void 0 ? g : 5;
  return Vn(() => {
    if (n || B == null)
      return;
    const O = h.current;
    return ve(O, "Element ref not attached"), oX(x, O, y, {
      coarse: H,
      fine: j
    }, (ne, q, A) => {
      if (q)
        switch (ne) {
          case "down": {
            R("drag"), ve(A, 'Expected event to be defined for "down" action'), E(x, A);
            const {
              onDragging: D
            } = v.current;
            D && D(!0);
            break;
          }
          case "move": {
            const {
              state: D
            } = F.current;
            D !== "drag" && R("hover"), ve(A, 'Expected event to be defined for "move" action'), B(A);
            break;
          }
          case "up": {
            R("hover"), S();
            const {
              onDragging: D
            } = v.current;
            D && D(!1);
            break;
          }
        }
      else
        R("inactive");
    });
  }, [H, y, n, j, C, x, B, E, S]), bX({
    disabled: n,
    handleId: x,
    resizeHandler: B,
    panelGroupElement: P
  }), Yr(d, {
    ...f,
    children: e,
    className: t,
    id: o,
    onBlur: () => {
      k(!1), a == null || a();
    },
    onFocus: () => {
      k(!0), s == null || s();
    },
    ref: h,
    role: "separator",
    style: {
      ...{
        touchAction: "none",
        userSelect: "none"
      },
      ...l
    },
    tabIndex: u,
    // CSS selectors
    "data-panel-group-direction": y,
    "data-panel-group-id": w,
    "data-resize-handle": "",
    "data-resize-handle-active": N === "drag" ? "pointer" : M ? "keyboard" : void 0,
    "data-resize-handle-state": N,
    "data-panel-resize-handle-enabled": !n,
    "data-panel-resize-handle-id": x
  });
}
pE.displayName = "PanelResizeHandle";
const qee = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m(
  fE,
  {
    className: $(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      e
    ),
    ...t
  }
), Zee = XS, Qee = ({
  withHandle: e,
  className: t,
  ...n
}) => /* @__PURE__ */ m(
  pE,
  {
    className: $(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      t
    ),
    ...n,
    children: e && /* @__PURE__ */ m("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ m(FN, { className: "h-2.5 w-2.5" }) })
  }
);
function na(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function yX(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var If = "ScrollArea", [mE, Jee] = De(If), [wX, Tt] = mE(If), vE = c.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...i
    } = e, [s, l] = c.useState(null), [u, d] = c.useState(null), [f, p] = c.useState(null), [g, h] = c.useState(null), [v, b] = c.useState(null), [y, w] = c.useState(0), [C, E] = c.useState(0), [S, P] = c.useState(!1), [x, N] = c.useState(!1), R = te(t, (k) => l(k)), M = Bt(o);
    return /* @__PURE__ */ m(
      wX,
      {
        scope: n,
        type: r,
        dir: M,
        scrollHideDelay: a,
        scrollArea: s,
        viewport: u,
        onViewportChange: d,
        content: f,
        onContentChange: p,
        scrollbarX: g,
        onScrollbarXChange: h,
        scrollbarXEnabled: S,
        onScrollbarXEnabledChange: P,
        scrollbarY: v,
        onScrollbarYChange: b,
        scrollbarYEnabled: x,
        onScrollbarYEnabledChange: N,
        onCornerWidthChange: w,
        onCornerHeightChange: E,
        children: /* @__PURE__ */ m(
          Y.div,
          {
            dir: M,
            ...i,
            ref: R,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": y + "px",
              "--radix-scroll-area-corner-height": C + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
vE.displayName = If;
var hE = "ScrollAreaViewport", gE = c.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...a } = e, i = Tt(hE, n), s = c.useRef(null), l = te(t, s, i.onViewportChange);
    return /* @__PURE__ */ ee(Fe, { children: [
      /* @__PURE__ */ m(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ m(
        Y.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...a,
          ref: l,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ m("div", { ref: i.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
gE.displayName = hE;
var rn = "ScrollAreaScrollbar", kf = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Tt(rn, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = o, s = e.orientation === "horizontal";
    return c.useEffect(() => (s ? a(!0) : i(!0), () => {
      s ? a(!1) : i(!1);
    }), [s, a, i]), o.type === "hover" ? /* @__PURE__ */ m(xX, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ m(CX, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ m(bE, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ m(Lf, { ...r, ref: t }) : null;
  }
);
kf.displayName = rn;
var xX = c.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Tt(rn, e.__scopeScrollArea), [a, i] = c.useState(!1);
  return c.useEffect(() => {
    const s = o.scrollArea;
    let l = 0;
    if (s) {
      const u = () => {
        window.clearTimeout(l), i(!0);
      }, d = () => {
        l = window.setTimeout(() => i(!1), o.scrollHideDelay);
      };
      return s.addEventListener("pointerenter", u), s.addEventListener("pointerleave", d), () => {
        window.clearTimeout(l), s.removeEventListener("pointerenter", u), s.removeEventListener("pointerleave", d);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ m(Be, { present: n || a, children: /* @__PURE__ */ m(
    bE,
    {
      "data-state": a ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), CX = c.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Tt(rn, e.__scopeScrollArea), a = e.orientation === "horizontal", i = Is(() => l("SCROLL_END"), 100), [s, l] = yX("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return c.useEffect(() => {
    if (s === "idle") {
      const u = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(u);
    }
  }, [s, o.scrollHideDelay, l]), c.useEffect(() => {
    const u = o.viewport, d = a ? "scrollLeft" : "scrollTop";
    if (u) {
      let f = u[d];
      const p = () => {
        const g = u[d];
        f !== g && (l("SCROLL"), i()), f = g;
      };
      return u.addEventListener("scroll", p), () => u.removeEventListener("scroll", p);
    }
  }, [o.viewport, a, l, i]), /* @__PURE__ */ m(Be, { present: n || s !== "hidden", children: /* @__PURE__ */ m(
    Lf,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: I(e.onPointerEnter, () => l("POINTER_ENTER")),
      onPointerLeave: I(e.onPointerLeave, () => l("POINTER_LEAVE"))
    }
  ) });
}), bE = c.forwardRef((e, t) => {
  const n = Tt(rn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, i] = c.useState(!1), s = e.orientation === "horizontal", l = Is(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      i(s ? u : d);
    }
  }, 10);
  return Kr(n.viewport, l), Kr(n.content, l), /* @__PURE__ */ m(Be, { present: r || a, children: /* @__PURE__ */ m(
    Lf,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), Lf = c.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Tt(rn, e.__scopeScrollArea), a = c.useRef(null), i = c.useRef(0), [s, l] = c.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = SE(s.viewport, s.content), d = {
    ...r,
    sizes: s,
    onSizesChange: l,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (p) => a.current = p,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (p) => i.current = p
  };
  function f(p, g) {
    return _X(p, i.current, s, g);
  }
  return n === "horizontal" ? /* @__PURE__ */ m(
    SX,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const p = o.viewport.scrollLeft, g = Hv(p, s, o.dir);
          a.current.style.transform = `translate3d(${g}px, 0, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = f(p, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ m(
    EX,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const p = o.viewport.scrollTop, g = Hv(p, s);
          a.current.style.transform = `translate3d(0, ${g}px, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollTop = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollTop = f(p));
      }
    }
  ) : null;
}), SX = c.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Tt(rn, e.__scopeScrollArea), [i, s] = c.useState(), l = c.useRef(null), u = te(t, l, a.onScrollbarXChange);
  return c.useEffect(() => {
    l.current && s(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ m(
    wE,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: u,
      sizes: n,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": As(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, f) => {
        if (a.viewport) {
          const p = a.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(p), PE(p, f) && d.preventDefault();
        }
      },
      onResize: () => {
        l.current && a.viewport && i && r({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: l.current.clientWidth,
            paddingStart: Gi(i.paddingLeft),
            paddingEnd: Gi(i.paddingRight)
          }
        });
      }
    }
  );
}), EX = c.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Tt(rn, e.__scopeScrollArea), [i, s] = c.useState(), l = c.useRef(null), u = te(t, l, a.onScrollbarYChange);
  return c.useEffect(() => {
    l.current && s(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ m(
    wE,
    {
      "data-orientation": "vertical",
      ...o,
      ref: u,
      sizes: n,
      style: {
        top: 0,
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": As(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, f) => {
        if (a.viewport) {
          const p = a.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(p), PE(p, f) && d.preventDefault();
        }
      },
      onResize: () => {
        l.current && a.viewport && i && r({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: l.current.clientHeight,
            paddingStart: Gi(i.paddingTop),
            paddingEnd: Gi(i.paddingBottom)
          }
        });
      }
    }
  );
}), [PX, yE] = mE(rn), wE = c.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: a,
    onThumbPointerUp: i,
    onThumbPointerDown: s,
    onThumbPositionChange: l,
    onDragScroll: u,
    onWheelScroll: d,
    onResize: f,
    ...p
  } = e, g = Tt(rn, n), [h, v] = c.useState(null), b = te(t, (R) => v(R)), y = c.useRef(null), w = c.useRef(""), C = g.viewport, E = r.content - r.viewport, S = fe(d), P = fe(l), x = Is(f, 10);
  function N(R) {
    if (y.current) {
      const M = R.clientX - y.current.left, k = R.clientY - y.current.top;
      u({ x: M, y: k });
    }
  }
  return c.useEffect(() => {
    const R = (M) => {
      const k = M.target;
      (h == null ? void 0 : h.contains(k)) && S(M, E);
    };
    return document.addEventListener("wheel", R, { passive: !1 }), () => document.removeEventListener("wheel", R, { passive: !1 });
  }, [C, h, E, S]), c.useEffect(P, [r, P]), Kr(h, x), Kr(g.content, x), /* @__PURE__ */ m(
    PX,
    {
      scope: n,
      scrollbar: h,
      hasThumb: o,
      onThumbChange: fe(a),
      onThumbPointerUp: fe(i),
      onThumbPositionChange: P,
      onThumbPointerDown: fe(s),
      children: /* @__PURE__ */ m(
        Y.div,
        {
          ...p,
          ref: b,
          style: { position: "absolute", ...p.style },
          onPointerDown: I(e.onPointerDown, (R) => {
            R.button === 0 && (R.target.setPointerCapture(R.pointerId), y.current = h.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", g.viewport && (g.viewport.style.scrollBehavior = "auto"), N(R));
          }),
          onPointerMove: I(e.onPointerMove, N),
          onPointerUp: I(e.onPointerUp, (R) => {
            const M = R.target;
            M.hasPointerCapture(R.pointerId) && M.releasePointerCapture(R.pointerId), document.body.style.webkitUserSelect = w.current, g.viewport && (g.viewport.style.scrollBehavior = ""), y.current = null;
          })
        }
      )
    }
  );
}), Ui = "ScrollAreaThumb", xE = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = yE(Ui, e.__scopeScrollArea);
    return /* @__PURE__ */ m(Be, { present: n || o.hasThumb, children: /* @__PURE__ */ m(NX, { ref: t, ...r }) });
  }
), NX = c.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, a = Tt(Ui, n), i = yE(Ui, n), { onThumbPositionChange: s } = i, l = te(
      t,
      (f) => i.onThumbChange(f)
    ), u = c.useRef(), d = Is(() => {
      u.current && (u.current(), u.current = void 0);
    }, 100);
    return c.useEffect(() => {
      const f = a.viewport;
      if (f) {
        const p = () => {
          if (d(), !u.current) {
            const g = TX(f, s);
            u.current = g, s();
          }
        };
        return s(), f.addEventListener("scroll", p), () => f.removeEventListener("scroll", p);
      }
    }, [a.viewport, d, s]), /* @__PURE__ */ m(
      Y.div,
      {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...o,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: I(e.onPointerDownCapture, (f) => {
          const g = f.target.getBoundingClientRect(), h = f.clientX - g.left, v = f.clientY - g.top;
          i.onThumbPointerDown({ x: h, y: v });
        }),
        onPointerUp: I(e.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
xE.displayName = Ui;
var Ff = "ScrollAreaCorner", CE = c.forwardRef(
  (e, t) => {
    const n = Tt(Ff, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ m(RX, { ...e, ref: t }) : null;
  }
);
CE.displayName = Ff;
var RX = c.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Tt(Ff, n), [a, i] = c.useState(0), [s, l] = c.useState(0), u = !!(a && s);
  return Kr(o.scrollbarX, () => {
    var f;
    const d = ((f = o.scrollbarX) == null ? void 0 : f.offsetHeight) || 0;
    o.onCornerHeightChange(d), l(d);
  }), Kr(o.scrollbarY, () => {
    var f;
    const d = ((f = o.scrollbarY) == null ? void 0 : f.offsetWidth) || 0;
    o.onCornerWidthChange(d), i(d);
  }), u ? /* @__PURE__ */ m(
    Y.div,
    {
      ...r,
      ref: t,
      style: {
        width: a,
        height: s,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function Gi(e) {
  return e ? parseInt(e, 10) : 0;
}
function SE(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function As(e) {
  const t = SE(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function _X(e, t, n, r = "ltr") {
  const o = As(n), a = o / 2, i = t || a, s = o - i, l = n.scrollbar.paddingStart + i, u = n.scrollbar.size - n.scrollbar.paddingEnd - s, d = n.content - n.viewport, f = r === "ltr" ? [0, d] : [d * -1, 0];
  return EE([l, u], f)(e);
}
function Hv(e, t, n = "ltr") {
  const r = As(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, i = t.content - t.viewport, s = a - r, l = n === "ltr" ? [0, i] : [i * -1, 0], u = na(e, l);
  return EE([0, i], [0, s])(u);
}
function EE(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function PE(e, t) {
  return e > 0 && e < t;
}
var TX = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, i = n.left !== a.left, s = n.top !== a.top;
    (i || s) && t(), n = a, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function Is(e, t) {
  const n = fe(e), r = c.useRef(0);
  return c.useEffect(() => () => window.clearTimeout(r.current), []), c.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function Kr(e, t) {
  const n = fe(t);
  Ce(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
var NE = vE, $X = gE, MX = CE;
const OX = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ ee(
  NE,
  {
    ref: r,
    className: $("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ m($X, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ m(RE, {}),
      /* @__PURE__ */ m(MX, {})
    ]
  }
));
OX.displayName = NE.displayName;
const RE = c.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ m(
  kf,
  {
    ref: r,
    orientation: t,
    className: $(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ m(xE, { className: "relative flex-1 rounded-full bg-border" })
  }
));
RE.displayName = kf.displayName;
var DX = "DismissableLayer", tu = "dismissableLayer.update", AX = "dismissableLayer.pointerDownOutside", IX = "dismissableLayer.focusOutside", jv, _E = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), TE = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...l
    } = e, u = c.useContext(_E), [d, f] = c.useState(null), p = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = c.useState({}), h = te(t, (x) => f(x)), v = Array.from(u.layers), [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = v.indexOf(b), w = d ? v.indexOf(d) : -1, C = u.layersWithOutsidePointerEventsDisabled.size > 0, E = w >= y, S = FX((x) => {
      const N = x.target, R = [...u.branches].some((M) => M.contains(N));
      !E || R || (o == null || o(x), i == null || i(x), x.defaultPrevented || s == null || s());
    }, p), P = BX((x) => {
      const N = x.target;
      [...u.branches].some((M) => M.contains(N)) || (a == null || a(x), i == null || i(x), x.defaultPrevented || s == null || s());
    }, p);
    return _n((x) => {
      w === u.layers.size - 1 && (r == null || r(x), !x.defaultPrevented && s && (x.preventDefault(), s()));
    }, p), c.useEffect(() => {
      if (d)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (jv = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Vv(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = jv);
        };
    }, [d, p, n, u]), c.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Vv());
    }, [d, u]), c.useEffect(() => {
      const x = () => g({});
      return document.addEventListener(tu, x), () => document.removeEventListener(tu, x);
    }, []), /* @__PURE__ */ m(
      Y.div,
      {
        ...l,
        ref: h,
        style: {
          pointerEvents: C ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: I(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: I(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: I(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
TE.displayName = DX;
var kX = "DismissableLayerBranch", LX = c.forwardRef((e, t) => {
  const n = c.useContext(_E), r = c.useRef(null), o = te(t, r);
  return c.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ m(Y.div, { ...e, ref: o });
});
LX.displayName = kX;
function FX(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e), r = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          $E(
            AX,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function BX(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && $E(IX, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Vv() {
  const e = new CustomEvent(tu);
  document.dispatchEvent(e);
}
function $E(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Nt(o, a) : o.dispatchEvent(a);
}
var Hc = 0;
function WX() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Uv()), document.body.insertAdjacentElement("beforeend", e[1] ?? Uv()), Hc++, () => {
      Hc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Hc--;
    };
  }, []);
}
function Uv() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var zX = "Portal", ME = c.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, a] = c.useState(!1);
  Ce(() => a(!0), []);
  const i = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? vn.createPortal(/* @__PURE__ */ m(Y.div, { ...r, ref: t }), i) : null;
});
ME.displayName = zX;
var OE = ro(), jc = function() {
}, ks = c.forwardRef(function(e, t) {
  var n = c.useRef(null), r = c.useState({
    onScrollCapture: jc,
    onWheelCapture: jc,
    onTouchMoveCapture: jc
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, g = e.noIsolation, h = e.inert, v = e.allowPinchZoom, b = e.as, y = b === void 0 ? "div" : b, w = e.gapMode, C = nr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = p, S = no([n, t]), P = he(he({}, C), o);
  return c.createElement(
    c.Fragment,
    null,
    d && c.createElement(E, { sideCar: OE, removeScrollBar: u, shards: f, noIsolation: g, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n, gapMode: w }),
    i ? c.cloneElement(c.Children.only(s), he(he({}, P), { ref: S })) : c.createElement(y, he({}, P, { className: l, ref: S }), s)
  );
});
ks.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ks.classNames = {
  fullWidth: un,
  zeroRight: ln
};
var nu = !1;
if (typeof window < "u")
  try {
    var ii = Object.defineProperty({}, "passive", {
      get: function() {
        return nu = !0, !0;
      }
    });
    window.addEventListener("test", ii, ii), window.removeEventListener("test", ii, ii);
  } catch {
    nu = !1;
  }
var Pr = nu ? { passive: !1 } : !1, HX = function(e) {
  return e.tagName === "TEXTAREA";
}, DE = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !HX(e) && n[t] === "visible")
  );
}, jX = function(e) {
  return DE(e, "overflowY");
}, VX = function(e) {
  return DE(e, "overflowX");
}, Gv = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = AE(e, r);
    if (o) {
      var a = IE(e, r), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, UX = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, GX = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, AE = function(e, t) {
  return e === "v" ? jX(t) : VX(t);
}, IE = function(e, t) {
  return e === "v" ? UX(t) : GX(t);
}, YX = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, KX = function(e, t, n, r, o) {
  var a = YX(e, window.getComputedStyle(t).direction), i = a * r, s = n.target, l = t.contains(s), u = !1, d = i > 0, f = 0, p = 0;
  do {
    var g = IE(e, s), h = g[0], v = g[1], b = g[2], y = v - b - a * h;
    (h || y) && AE(e, s) && (f += y, p += h), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (d && Math.abs(f) < 1 || !d && Math.abs(p) < 1) && (u = !0), u;
}, si = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Yv = function(e) {
  return [e.deltaX, e.deltaY];
}, Kv = function(e) {
  return e && "current" in e ? e.current : e;
}, XX = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, qX = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ZX = 0, Nr = [];
function QX(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), o = c.useState(ZX++)[0], a = c.useState(rr)[0], i = c.useRef(e);
  c.useEffect(function() {
    i.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = to([e.lockRef.current], (e.shards || []).map(Kv), !0).filter(Boolean);
      return v.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = c.useCallback(function(v, b) {
    if ("touches" in v && v.touches.length === 2)
      return !i.current.allowPinchZoom;
    var y = si(v), w = n.current, C = "deltaX" in v ? v.deltaX : w[0] - y[0], E = "deltaY" in v ? v.deltaY : w[1] - y[1], S, P = v.target, x = Math.abs(C) > Math.abs(E) ? "h" : "v";
    if ("touches" in v && x === "h" && P.type === "range")
      return !1;
    var N = Gv(x, P);
    if (!N)
      return !0;
    if (N ? S = x : (S = x === "v" ? "h" : "v", N = Gv(x, P)), !N)
      return !1;
    if (!r.current && "changedTouches" in v && (C || E) && (r.current = S), !S)
      return !0;
    var R = r.current || S;
    return KX(R, b, v, R === "h" ? C : E);
  }, []), l = c.useCallback(function(v) {
    var b = v;
    if (!(!Nr.length || Nr[Nr.length - 1] !== a)) {
      var y = "deltaY" in b ? Yv(b) : si(b), w = t.current.filter(function(S) {
        return S.name === b.type && (S.target === b.target || b.target === S.shadowParent) && XX(S.delta, y);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var C = (i.current.shards || []).map(Kv).filter(Boolean).filter(function(S) {
          return S.contains(b.target);
        }), E = C.length > 0 ? s(b, C[0]) : !i.current.noIsolation;
        E && b.cancelable && b.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(v, b, y, w) {
    var C = { name: v, delta: b, target: y, should: w, shadowParent: JX(y) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== C;
      });
    }, 1);
  }, []), d = c.useCallback(function(v) {
    n.current = si(v), r.current = void 0;
  }, []), f = c.useCallback(function(v) {
    u(v.type, Yv(v), v.target, s(v, e.lockRef.current));
  }, []), p = c.useCallback(function(v) {
    u(v.type, si(v), v.target, s(v, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return Nr.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, Pr), document.addEventListener("touchmove", l, Pr), document.addEventListener("touchstart", d, Pr), function() {
      Nr = Nr.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", l, Pr), document.removeEventListener("touchmove", l, Pr), document.removeEventListener("touchstart", d, Pr);
    };
  }, []);
  var g = e.removeScrollBar, h = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    h ? c.createElement(a, { styles: qX(o) }) : null,
    g ? c.createElement(ao, { gapMode: e.gapMode }) : null
  );
}
function JX(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const eq = oo(OE, QX);
var kE = c.forwardRef(function(e, t) {
  return c.createElement(ks, he({}, e, { ref: t, sideCar: eq }));
});
kE.classNames = ks.classNames;
var tq = [" ", "Enter", "ArrowUp", "ArrowDown"], nq = [" ", "Enter"], Oa = "Select", [Ls, Fs, rq] = hn(Oa), [wo, ete] = De(Oa, [
  rq,
  tn
]), Bs = tn(), [oq, On] = wo(Oa), [aq, iq] = wo(Oa), LE = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    value: i,
    defaultValue: s,
    onValueChange: l,
    dir: u,
    name: d,
    autoComplete: f,
    disabled: p,
    required: g
  } = e, h = Bs(t), [v, b] = c.useState(null), [y, w] = c.useState(null), [C, E] = c.useState(!1), S = Bt(u), [P = !1, x] = Me({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [N, R] = Me({
    prop: i,
    defaultProp: s,
    onChange: l
  }), M = c.useRef(null), k = v ? !!v.closest("form") : !0, [B, Z] = c.useState(/* @__PURE__ */ new Set()), F = Array.from(B).map((H) => H.props.value).join(";");
  return /* @__PURE__ */ m(ho, { ...h, children: /* @__PURE__ */ ee(
    oq,
    {
      required: g,
      scope: t,
      trigger: v,
      onTriggerChange: b,
      valueNode: y,
      onValueNodeChange: w,
      valueNodeHasChildren: C,
      onValueNodeHasChildrenChange: E,
      contentId: Le(),
      value: N,
      onValueChange: R,
      open: P,
      onOpenChange: x,
      dir: S,
      triggerPointerDownPosRef: M,
      disabled: p,
      children: [
        /* @__PURE__ */ m(Ls.Provider, { scope: t, children: /* @__PURE__ */ m(
          aq,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: c.useCallback((H) => {
              Z((j) => new Set(j).add(H));
            }, []),
            onNativeOptionRemove: c.useCallback((H) => {
              Z((j) => {
                const W = new Set(j);
                return W.delete(H), W;
              });
            }, []),
            children: n
          }
        ) }),
        k ? /* @__PURE__ */ ee(
          lP,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: d,
            autoComplete: f,
            value: N,
            onChange: (H) => R(H.target.value),
            disabled: p,
            children: [
              N === void 0 ? /* @__PURE__ */ m("option", { value: "" }) : null,
              Array.from(B)
            ]
          },
          F
        ) : null
      ]
    }
  ) });
};
LE.displayName = Oa;
var FE = "SelectTrigger", BE = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Bs(n), i = On(FE, n), s = i.disabled || r, l = te(t, i.onTriggerChange), u = Fs(n), [d, f, p] = uP((h) => {
      const v = u().filter((w) => !w.disabled), b = v.find((w) => w.value === i.value), y = dP(v, h, b);
      y !== void 0 && i.onValueChange(y.value);
    }), g = () => {
      s || (i.onOpenChange(!0), p());
    };
    return /* @__PURE__ */ m(go, { asChild: !0, ...a, children: /* @__PURE__ */ m(
      Y.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: s,
        "data-disabled": s ? "" : void 0,
        "data-placeholder": cP(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: I(o.onClick, (h) => {
          h.currentTarget.focus();
        }),
        onPointerDown: I(o.onPointerDown, (h) => {
          const v = h.target;
          v.hasPointerCapture(h.pointerId) && v.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && (g(), i.triggerPointerDownPosRef.current = {
            x: Math.round(h.pageX),
            y: Math.round(h.pageY)
          }, h.preventDefault());
        }),
        onKeyDown: I(o.onKeyDown, (h) => {
          const v = d.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && f(h.key), !(v && h.key === " ") && tq.includes(h.key) && (g(), h.preventDefault());
        })
      }
    ) });
  }
);
BE.displayName = FE;
var WE = "SelectValue", zE = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: i = "", ...s } = e, l = On(WE, n), { onValueNodeHasChildrenChange: u } = l, d = a !== void 0, f = te(t, l.onValueNodeChange);
    return Ce(() => {
      u(d);
    }, [u, d]), /* @__PURE__ */ m(
      Y.span,
      {
        ...s,
        ref: f,
        style: { pointerEvents: "none" },
        children: cP(l.value) ? /* @__PURE__ */ m(Fe, { children: i }) : a
      }
    );
  }
);
zE.displayName = WE;
var sq = "SelectIcon", HE = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ m(Y.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
HE.displayName = sq;
var cq = "SelectPortal", jE = (e) => /* @__PURE__ */ m(ME, { asChild: !0, ...e });
jE.displayName = cq;
var er = "SelectContent", VE = c.forwardRef(
  (e, t) => {
    const n = On(er, e.__scopeSelect), [r, o] = c.useState();
    if (Ce(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? qr.createPortal(
        /* @__PURE__ */ m(UE, { scope: e.__scopeSelect, children: /* @__PURE__ */ m(Ls.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ m("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ m(GE, { ...e, ref: t });
  }
);
VE.displayName = er;
var sn = 10, [UE, Dn] = wo(er), lq = "SelectContentImpl", GE = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: s,
      sideOffset: l,
      align: u,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: p,
      collisionPadding: g,
      sticky: h,
      hideWhenDetached: v,
      avoidCollisions: b,
      //
      ...y
    } = e, w = On(er, n), [C, E] = c.useState(null), [S, P] = c.useState(null), x = te(t, (z) => E(z)), [N, R] = c.useState(null), [M, k] = c.useState(
      null
    ), B = Fs(n), [Z, F] = c.useState(!1), H = c.useRef(!1);
    c.useEffect(() => {
      if (C) return io(C);
    }, [C]), WX();
    const j = c.useCallback(
      (z) => {
        const [X, ...Q] = B().map((_) => _.ref.current), [J] = Q.slice(-1), re = document.activeElement;
        for (const _ of z)
          if (_ === re || (_ == null || _.scrollIntoView({ block: "nearest" }), _ === X && S && (S.scrollTop = 0), _ === J && S && (S.scrollTop = S.scrollHeight), _ == null || _.focus(), document.activeElement !== re)) return;
      },
      [B, S]
    ), W = c.useCallback(
      () => j([N, C]),
      [j, N, C]
    );
    c.useEffect(() => {
      Z && W();
    }, [Z, W]);
    const { onOpenChange: O, triggerPointerDownPosRef: V } = w;
    c.useEffect(() => {
      if (C) {
        let z = { x: 0, y: 0 };
        const X = (J) => {
          var re, _;
          z = {
            x: Math.abs(Math.round(J.pageX) - (((re = V.current) == null ? void 0 : re.x) ?? 0)),
            y: Math.abs(Math.round(J.pageY) - (((_ = V.current) == null ? void 0 : _.y) ?? 0))
          };
        }, Q = (J) => {
          z.x <= 10 && z.y <= 10 ? J.preventDefault() : C.contains(J.target) || O(!1), document.removeEventListener("pointermove", X), V.current = null;
        };
        return V.current !== null && (document.addEventListener("pointermove", X), document.addEventListener("pointerup", Q, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", X), document.removeEventListener("pointerup", Q, { capture: !0 });
        };
      }
    }, [C, O, V]), c.useEffect(() => {
      const z = () => O(!1);
      return window.addEventListener("blur", z), window.addEventListener("resize", z), () => {
        window.removeEventListener("blur", z), window.removeEventListener("resize", z);
      };
    }, [O]);
    const [ne, q] = uP((z) => {
      const X = B().filter((re) => !re.disabled), Q = X.find((re) => re.ref.current === document.activeElement), J = dP(X, z, Q);
      J && setTimeout(() => J.ref.current.focus());
    }), A = c.useCallback(
      (z, X, Q) => {
        const J = !H.current && !Q;
        (w.value !== void 0 && w.value === X || J) && (R(z), J && (H.current = !0));
      },
      [w.value]
    ), D = c.useCallback(() => C == null ? void 0 : C.focus(), [C]), L = c.useCallback(
      (z, X, Q) => {
        const J = !H.current && !Q;
        (w.value !== void 0 && w.value === X || J) && k(z);
      },
      [w.value]
    ), U = r === "popper" ? ru : YE, G = U === ru ? {
      side: s,
      sideOffset: l,
      align: u,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: p,
      collisionPadding: g,
      sticky: h,
      hideWhenDetached: v,
      avoidCollisions: b
    } : {};
    return /* @__PURE__ */ m(
      UE,
      {
        scope: n,
        content: C,
        viewport: S,
        onViewportChange: P,
        itemRefCallback: A,
        selectedItem: N,
        onItemLeave: D,
        itemTextRefCallback: L,
        focusSelectedItem: W,
        selectedItemText: M,
        position: r,
        isPositioned: Z,
        searchRef: ne,
        children: /* @__PURE__ */ m(kE, { as: Ke, allowPinchZoom: !0, children: /* @__PURE__ */ m(
          eo,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (z) => {
              z.preventDefault();
            },
            onUnmountAutoFocus: I(o, (z) => {
              var X;
              (X = w.trigger) == null || X.focus({ preventScroll: !0 }), z.preventDefault();
            }),
            children: /* @__PURE__ */ m(
              TE,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (z) => z.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ m(
                  U,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: (z) => z.preventDefault(),
                    ...y,
                    ...G,
                    onPlaced: () => F(!0),
                    ref: x,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: I(y.onKeyDown, (z) => {
                      const X = z.ctrlKey || z.altKey || z.metaKey;
                      if (z.key === "Tab" && z.preventDefault(), !X && z.key.length === 1 && q(z.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(z.key)) {
                        let J = B().filter((re) => !re.disabled).map((re) => re.ref.current);
                        if (["ArrowUp", "End"].includes(z.key) && (J = J.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(z.key)) {
                          const re = z.target, _ = J.indexOf(re);
                          J = J.slice(_ + 1);
                        }
                        setTimeout(() => j(J)), z.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
GE.displayName = lq;
var uq = "SelectItemAlignedPosition", YE = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = On(er, n), i = Dn(er, n), [s, l] = c.useState(null), [u, d] = c.useState(null), f = te(t, (x) => d(x)), p = Fs(n), g = c.useRef(!1), h = c.useRef(!0), { viewport: v, selectedItem: b, selectedItemText: y, focusSelectedItem: w } = i, C = c.useCallback(() => {
    if (a.trigger && a.valueNode && s && u && v && b && y) {
      const x = a.trigger.getBoundingClientRect(), N = u.getBoundingClientRect(), R = a.valueNode.getBoundingClientRect(), M = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const re = M.left - N.left, _ = R.left - re, K = x.left - _, oe = x.width + K, de = Math.max(oe, N.width), ce = window.innerWidth - sn, le = na(_, [sn, ce - de]);
        s.style.minWidth = oe + "px", s.style.left = le + "px";
      } else {
        const re = N.right - M.right, _ = window.innerWidth - R.right - re, K = window.innerWidth - x.right - _, oe = x.width + K, de = Math.max(oe, N.width), ce = window.innerWidth - sn, le = na(_, [sn, ce - de]);
        s.style.minWidth = oe + "px", s.style.right = le + "px";
      }
      const k = p(), B = window.innerHeight - sn * 2, Z = v.scrollHeight, F = window.getComputedStyle(u), H = parseInt(F.borderTopWidth, 10), j = parseInt(F.paddingTop, 10), W = parseInt(F.borderBottomWidth, 10), O = parseInt(F.paddingBottom, 10), V = H + j + Z + O + W, ne = Math.min(b.offsetHeight * 5, V), q = window.getComputedStyle(v), A = parseInt(q.paddingTop, 10), D = parseInt(q.paddingBottom, 10), L = x.top + x.height / 2 - sn, U = B - L, G = b.offsetHeight / 2, z = b.offsetTop + G, X = H + j + z, Q = V - X;
      if (X <= L) {
        const re = b === k[k.length - 1].ref.current;
        s.style.bottom = "0px";
        const _ = u.clientHeight - v.offsetTop - v.offsetHeight, K = Math.max(
          U,
          G + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (re ? D : 0) + _ + W
        ), oe = X + K;
        s.style.height = oe + "px";
      } else {
        const re = b === k[0].ref.current;
        s.style.top = "0px";
        const K = Math.max(
          L,
          H + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (re ? A : 0) + G
        ) + Q;
        s.style.height = K + "px", v.scrollTop = X - L + v.offsetTop;
      }
      s.style.margin = `${sn}px 0`, s.style.minHeight = ne + "px", s.style.maxHeight = B + "px", r == null || r(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    p,
    a.trigger,
    a.valueNode,
    s,
    u,
    v,
    b,
    y,
    a.dir,
    r
  ]);
  Ce(() => C(), [C]);
  const [E, S] = c.useState();
  Ce(() => {
    u && S(window.getComputedStyle(u).zIndex);
  }, [u]);
  const P = c.useCallback(
    (x) => {
      x && h.current === !0 && (C(), w == null || w(), h.current = !1);
    },
    [C, w]
  );
  return /* @__PURE__ */ m(
    fq,
    {
      scope: n,
      contentWrapper: s,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: P,
      children: /* @__PURE__ */ m(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: E
          },
          children: /* @__PURE__ */ m(
            Y.div,
            {
              ...o,
              ref: f,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
YE.displayName = uq;
var dq = "SelectPopperPosition", ru = c.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = sn,
    ...a
  } = e, i = Bs(n);
  return /* @__PURE__ */ m(
    Ca,
    {
      ...i,
      ...a,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
ru.displayName = dq;
var [fq, Bf] = wo(er, {}), ou = "SelectViewport", KE = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = Dn(ou, n), i = Bf(ou, n), s = te(t, a.onViewportChange), l = c.useRef(0);
    return /* @__PURE__ */ ee(Fe, { children: [
      /* @__PURE__ */ m(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ m(Ls.Slot, { scope: n, children: /* @__PURE__ */ m(
        Y.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: s,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            overflow: "auto",
            ...o.style
          },
          onScroll: I(o.onScroll, (u) => {
            const d = u.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: p } = i;
            if (p != null && p.current && f) {
              const g = Math.abs(l.current - d.scrollTop);
              if (g > 0) {
                const h = window.innerHeight - sn * 2, v = parseFloat(f.style.minHeight), b = parseFloat(f.style.height), y = Math.max(v, b);
                if (y < h) {
                  const w = y + g, C = Math.min(h, w), E = w - C;
                  f.style.height = C + "px", f.style.bottom === "0px" && (d.scrollTop = E > 0 ? E : 0, f.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = d.scrollTop;
          })
        }
      ) })
    ] });
  }
);
KE.displayName = ou;
var XE = "SelectGroup", [pq, mq] = wo(XE), qE = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Le();
    return /* @__PURE__ */ m(pq, { scope: n, id: o, children: /* @__PURE__ */ m(Y.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
qE.displayName = XE;
var ZE = "SelectLabel", QE = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = mq(ZE, n);
    return /* @__PURE__ */ m(Y.div, { id: o.id, ...r, ref: t });
  }
);
QE.displayName = ZE;
var Yi = "SelectItem", [vq, JE] = wo(Yi), eP = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = On(Yi, n), l = Dn(Yi, n), u = s.value === r, [d, f] = c.useState(a ?? ""), [p, g] = c.useState(!1), h = te(
      t,
      (y) => {
        var w;
        return (w = l.itemRefCallback) == null ? void 0 : w.call(l, y, r, o);
      }
    ), v = Le(), b = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ m(
      vq,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: v,
        isSelected: u,
        onItemTextChange: c.useCallback((y) => {
          f((w) => w || ((y == null ? void 0 : y.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ m(
          Ls.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ m(
              Y.div,
              {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": u && p,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: h,
                onFocus: I(i.onFocus, () => g(!0)),
                onBlur: I(i.onBlur, () => g(!1)),
                onPointerUp: I(i.onPointerUp, b),
                onPointerMove: I(i.onPointerMove, (y) => {
                  var w;
                  o ? (w = l.onItemLeave) == null || w.call(l) : y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: I(i.onPointerLeave, (y) => {
                  var w;
                  y.currentTarget === document.activeElement && ((w = l.onItemLeave) == null || w.call(l));
                }),
                onKeyDown: I(i.onKeyDown, (y) => {
                  var C;
                  ((C = l.searchRef) == null ? void 0 : C.current) !== "" && y.key === " " || (nq.includes(y.key) && b(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
eP.displayName = Yi;
var Lo = "SelectItemText", tP = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, i = On(Lo, n), s = Dn(Lo, n), l = JE(Lo, n), u = iq(Lo, n), [d, f] = c.useState(null), p = te(
      t,
      (y) => f(y),
      l.onItemTextChange,
      (y) => {
        var w;
        return (w = s.itemTextRefCallback) == null ? void 0 : w.call(s, y, l.value, l.disabled);
      }
    ), g = d == null ? void 0 : d.textContent, h = c.useMemo(
      () => /* @__PURE__ */ m("option", { value: l.value, disabled: l.disabled, children: g }, l.value),
      [l.disabled, l.value, g]
    ), { onNativeOptionAdd: v, onNativeOptionRemove: b } = u;
    return Ce(() => (v(h), () => b(h)), [v, b, h]), /* @__PURE__ */ ee(Fe, { children: [
      /* @__PURE__ */ m(Y.span, { id: l.textId, ...a, ref: p }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? qr.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
tP.displayName = Lo;
var nP = "SelectItemIndicator", rP = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return JE(nP, n).isSelected ? /* @__PURE__ */ m(Y.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
rP.displayName = nP;
var au = "SelectScrollUpButton", oP = c.forwardRef((e, t) => {
  const n = Dn(au, e.__scopeSelect), r = Bf(au, e.__scopeSelect), [o, a] = c.useState(!1), i = te(t, r.onScrollButtonChange);
  return Ce(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const u = l.scrollTop > 0;
        a(u);
      };
      const l = n.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ m(
    iP,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = n;
        s && l && (s.scrollTop = s.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
oP.displayName = au;
var iu = "SelectScrollDownButton", aP = c.forwardRef((e, t) => {
  const n = Dn(iu, e.__scopeSelect), r = Bf(iu, e.__scopeSelect), [o, a] = c.useState(!1), i = te(t, r.onScrollButtonChange);
  return Ce(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const u = l.scrollHeight - l.clientHeight, d = Math.ceil(l.scrollTop) < u;
        a(d);
      };
      const l = n.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ m(
    iP,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = n;
        s && l && (s.scrollTop = s.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
aP.displayName = iu;
var iP = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = Dn("SelectScrollButton", n), i = c.useRef(null), s = Fs(n), l = c.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return c.useEffect(() => () => l(), [l]), Ce(() => {
    var d;
    const u = s().find((f) => f.ref.current === document.activeElement);
    (d = u == null ? void 0 : u.ref.current) == null || d.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ m(
    Y.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: I(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: I(o.onPointerMove, () => {
        var u;
        (u = a.onItemLeave) == null || u.call(a), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: I(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), hq = "SelectSeparator", sP = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ m(Y.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
sP.displayName = hq;
var su = "SelectArrow", gq = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Bs(n), a = On(su, n), i = Dn(su, n);
    return a.open && i.position === "popper" ? /* @__PURE__ */ m(Sa, { ...o, ...r, ref: t }) : null;
  }
);
gq.displayName = su;
function cP(e) {
  return e === "" || e === void 0;
}
var lP = c.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = c.useRef(null), a = te(t, o), i = po(n);
    return c.useEffect(() => {
      const s = o.current, l = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== n && d) {
        const f = new Event("change", { bubbles: !0 });
        d.call(s, n), s.dispatchEvent(f);
      }
    }, [i, n]), /* @__PURE__ */ m($a, { asChild: !0, children: /* @__PURE__ */ m("select", { ...r, ref: a, defaultValue: n }) });
  }
);
lP.displayName = "BubbleSelect";
function uP(e) {
  const t = fe(e), n = c.useRef(""), r = c.useRef(0), o = c.useCallback(
    (i) => {
      const s = n.current + i;
      t(s), function l(u) {
        n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      }(s);
    },
    [t]
  ), a = c.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return c.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, a];
}
function dP(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = bq(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function bq(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var yq = LE, fP = BE, wq = zE, xq = HE, Cq = jE, pP = VE, Sq = KE, Eq = qE, mP = QE, vP = eP, Pq = tP, Nq = rP, hP = oP, gP = aP, bP = sP;
const tte = yq, nte = Eq, rte = wq, Rq = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ ee(
  fP,
  {
    ref: r,
    className: $(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ m(xq, { asChild: !0, children: /* @__PURE__ */ m(Ji, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Rq.displayName = fP.displayName;
const yP = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  hP,
  {
    ref: n,
    className: $(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ m(IN, { className: "h-4 w-4" })
  }
));
yP.displayName = hP.displayName;
const wP = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  gP,
  {
    ref: n,
    className: $(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ m(Ji, { className: "h-4 w-4" })
  }
));
wP.displayName = gP.displayName;
const _q = c.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ m(Cq, { children: /* @__PURE__ */ ee(
  pP,
  {
    ref: o,
    className: $(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ m(yP, {}),
      /* @__PURE__ */ m(
        Sq,
        {
          className: $(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ m(wP, {})
    ]
  }
) }));
_q.displayName = pP.displayName;
const Tq = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  mP,
  {
    ref: n,
    className: $("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
Tq.displayName = mP.displayName;
const $q = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ ee(
  vP,
  {
    ref: r,
    className: $(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ m("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ m(Nq, { children: /* @__PURE__ */ m(Zr, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ m(Pq, { children: t })
    ]
  }
));
$q.displayName = vP.displayName;
const Mq = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  bP,
  {
    ref: n,
    className: $("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Mq.displayName = bP.displayName;
var Oq = "Separator", Xv = "horizontal", Dq = ["horizontal", "vertical"], xP = c.forwardRef((e, t) => {
  const { decorative: n, orientation: r = Xv, ...o } = e, a = Aq(r) ? r : Xv, s = n ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
  return /* @__PURE__ */ m(
    Y.div,
    {
      "data-orientation": a,
      ...s,
      ...o,
      ref: t
    }
  );
});
xP.displayName = Oq;
function Aq(e) {
  return Dq.includes(e);
}
var CP = xP;
const SP = c.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ m(
    CP,
    {
      ref: o,
      decorative: n,
      orientation: t,
      className: $(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
SP.displayName = CP.displayName;
const Iq = Pd, ote = Nd, ate = wa, kq = Rd, EP = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  ha,
  {
    className: $(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
EP.displayName = ha.displayName;
const Lq = yn(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), PP = c.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ ee(kq, { children: [
  /* @__PURE__ */ m(EP, {}),
  /* @__PURE__ */ ee(
    ga,
    {
      ref: o,
      className: $(Lq({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ ee(wa, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ m(_u, { className: "h-4 w-4" }),
          /* @__PURE__ */ m("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
PP.displayName = ga.displayName;
const Fq = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m(
  "div",
  {
    className: $(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Fq.displayName = "SheetHeader";
const Bq = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m(
  "div",
  {
    className: $(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Bq.displayName = "SheetFooter";
const Wq = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  ba,
  {
    ref: n,
    className: $("text-lg font-semibold text-foreground", e),
    ...t
  }
));
Wq.displayName = ba.displayName;
const zq = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  ya,
  {
    ref: n,
    className: $("text-sm text-muted-foreground", e),
    ...t
  }
));
zq.displayName = ya.displayName;
const Vc = 768;
function Hq() {
  const [e, t] = c.useState(void 0);
  return c.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${Vc - 1}px)`), r = () => {
      t(window.innerWidth < Vc);
    };
    return n.addEventListener("change", r), t(window.innerWidth < Vc), () => n.removeEventListener("change", r);
  }, []), !!e;
}
function qv({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ m(
    "div",
    {
      className: $("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
function jq(e, t = []) {
  let n = [];
  function r(a, i) {
    const s = c.createContext(i), l = n.length;
    n = [...n, i];
    const u = (f) => {
      var y;
      const { scope: p, children: g, ...h } = f, v = ((y = p == null ? void 0 : p[e]) == null ? void 0 : y[l]) || s, b = c.useMemo(() => h, Object.values(h));
      return /* @__PURE__ */ m(v.Provider, { value: b, children: g });
    };
    u.displayName = a + "Provider";
    function d(f, p) {
      var v;
      const g = ((v = p == null ? void 0 : p[e]) == null ? void 0 : v[l]) || s, h = c.useContext(g);
      if (h) return h;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return [u, d];
  }
  const o = () => {
    const a = n.map((i) => c.createContext(i));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return o.scopeName = e, [r, Vq(o, ...t)];
}
function Vq(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = r.reduce((s, { useScope: l, scopeName: u }) => {
        const f = l(a)[`__scope${u}`];
        return { ...s, ...f };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Uq(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var NP = (e) => {
  const { present: t, children: n } = e, r = Gq(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), a = te(r.ref, Yq(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: a }) : null;
};
NP.displayName = "Presence";
function Gq(e) {
  const [t, n] = c.useState(), r = c.useRef({}), o = c.useRef(e), a = c.useRef("none"), i = e ? "mounted" : "unmounted", [s, l] = Uq(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return c.useEffect(() => {
    const u = ci(r.current);
    a.current = s === "mounted" ? u : "none";
  }, [s]), Ce(() => {
    const u = r.current, d = o.current;
    if (d !== e) {
      const p = a.current, g = ci(u);
      e ? l("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(d && p !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ce(() => {
    if (t) {
      let u;
      const d = t.ownerDocument.defaultView ?? window, f = (g) => {
        const v = ci(r.current).includes(g.animationName);
        if (g.target === t && v && (l("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, p = (g) => {
        g.target === t && (a.current = ci(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(u), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: c.useCallback((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function ci(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Yq(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var [Ws, ite] = jq("Tooltip", [
  tn
]), zs = tn(), RP = "TooltipProvider", Kq = 700, cu = "tooltip.open", [Xq, Wf] = Ws(RP), _P = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = Kq,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, [i, s] = c.useState(!0), l = c.useRef(!1), u = c.useRef(0);
  return c.useEffect(() => {
    const d = u.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ m(
    Xq,
    {
      scope: t,
      isOpenDelayed: i,
      delayDuration: n,
      onOpen: c.useCallback(() => {
        window.clearTimeout(u.current), s(!1);
      }, []),
      onClose: c.useCallback(() => {
        window.clearTimeout(u.current), u.current = window.setTimeout(
          () => s(!0),
          r
        );
      }, [r]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: c.useCallback((d) => {
        l.current = d;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
_P.displayName = RP;
var Hs = "Tooltip", [qq, js] = Ws(Hs), TP = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o = !1,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: s
  } = e, l = Wf(Hs, e.__scopeTooltip), u = zs(t), [d, f] = c.useState(null), p = Le(), g = c.useRef(0), h = i ?? l.disableHoverableContent, v = s ?? l.delayDuration, b = c.useRef(!1), [y = !1, w] = Me({
    prop: r,
    defaultProp: o,
    onChange: (x) => {
      x ? (l.onOpen(), document.dispatchEvent(new CustomEvent(cu))) : l.onClose(), a == null || a(x);
    }
  }), C = c.useMemo(() => y ? b.current ? "delayed-open" : "instant-open" : "closed", [y]), E = c.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, b.current = !1, w(!0);
  }, [w]), S = c.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, w(!1);
  }, [w]), P = c.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      b.current = !0, w(!0), g.current = 0;
    }, v);
  }, [v, w]);
  return c.useEffect(() => () => {
    g.current && (window.clearTimeout(g.current), g.current = 0);
  }, []), /* @__PURE__ */ m(ho, { ...u, children: /* @__PURE__ */ m(
    qq,
    {
      scope: t,
      contentId: p,
      open: y,
      stateAttribute: C,
      trigger: d,
      onTriggerChange: f,
      onTriggerEnter: c.useCallback(() => {
        l.isOpenDelayed ? P() : E();
      }, [l.isOpenDelayed, P, E]),
      onTriggerLeave: c.useCallback(() => {
        h ? S() : (window.clearTimeout(g.current), g.current = 0);
      }, [S, h]),
      onOpen: E,
      onClose: S,
      disableHoverableContent: h,
      children: n
    }
  ) });
};
TP.displayName = Hs;
var lu = "TooltipTrigger", $P = c.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = js(lu, n), a = Wf(lu, n), i = zs(n), s = c.useRef(null), l = te(t, s, o.onTriggerChange), u = c.useRef(!1), d = c.useRef(!1), f = c.useCallback(() => u.current = !1, []);
    return c.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ m(go, { asChild: !0, ...i, children: /* @__PURE__ */ m(
      Y.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: I(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !d.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: I(e.onPointerLeave, () => {
          o.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: I(e.onPointerDown, () => {
          u.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: I(e.onFocus, () => {
          u.current || o.onOpen();
        }),
        onBlur: I(e.onBlur, o.onClose),
        onClick: I(e.onClick, o.onClose)
      }
    ) });
  }
);
$P.displayName = lu;
var Zq = "TooltipPortal", [ste, Qq] = Ws(Zq, {
  forceMount: void 0
}), Xr = "TooltipContent", MP = c.forwardRef(
  (e, t) => {
    const n = Qq(Xr, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, i = js(Xr, e.__scopeTooltip);
    return /* @__PURE__ */ m(NP, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ m(OP, { side: o, ...a, ref: t }) : /* @__PURE__ */ m(Jq, { side: o, ...a, ref: t }) });
  }
), Jq = c.forwardRef((e, t) => {
  const n = js(Xr, e.__scopeTooltip), r = Wf(Xr, e.__scopeTooltip), o = c.useRef(null), a = te(t, o), [i, s] = c.useState(null), { trigger: l, onClose: u } = n, d = o.current, { onPointerInTransitChange: f } = r, p = c.useCallback(() => {
    s(null), f(!1);
  }, [f]), g = c.useCallback(
    (h, v) => {
      const b = h.currentTarget, y = { x: h.clientX, y: h.clientY }, w = rZ(y, b.getBoundingClientRect()), C = oZ(y, w), E = aZ(v.getBoundingClientRect()), S = sZ([...C, ...E]);
      s(S), f(!0);
    },
    [f]
  );
  return c.useEffect(() => () => p(), [p]), c.useEffect(() => {
    if (l && d) {
      const h = (b) => g(b, d), v = (b) => g(b, l);
      return l.addEventListener("pointerleave", h), d.addEventListener("pointerleave", v), () => {
        l.removeEventListener("pointerleave", h), d.removeEventListener("pointerleave", v);
      };
    }
  }, [l, d, g, p]), c.useEffect(() => {
    if (i) {
      const h = (v) => {
        const b = v.target, y = { x: v.clientX, y: v.clientY }, w = (l == null ? void 0 : l.contains(b)) || (d == null ? void 0 : d.contains(b)), C = !iZ(y, i);
        w ? p() : C && (p(), u());
      };
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [l, d, i, u, p]), /* @__PURE__ */ m(OP, { ...e, ref: a });
}), [eZ, tZ] = Ws(Hs, { isInside: !1 }), OP = c.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      ...s
    } = e, l = js(Xr, n), u = zs(n), { onClose: d } = l;
    return c.useEffect(() => (document.addEventListener(cu, d), () => document.removeEventListener(cu, d)), [d]), c.useEffect(() => {
      if (l.trigger) {
        const f = (p) => {
          const g = p.target;
          g != null && g.contains(l.trigger) && d();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [l.trigger, d]), /* @__PURE__ */ m(
      wd,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ ee(
          Ca,
          {
            "data-state": l.stateAttribute,
            ...u,
            ...s,
            ref: t,
            style: {
              ...s.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ m(bu, { children: r }),
              /* @__PURE__ */ m(eZ, { scope: n, isInside: !0, children: /* @__PURE__ */ m(DC, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
MP.displayName = Xr;
var DP = "TooltipArrow", nZ = c.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = zs(n);
    return tZ(
      DP,
      n
    ).isInside ? null : /* @__PURE__ */ m(Sa, { ...o, ...r, ref: t });
  }
);
nZ.displayName = DP;
function rZ(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function oZ(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function aZ(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function iZ(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, l = t[a].y, u = t[i].x, d = t[i].y;
    l > r != d > r && n < (u - s) * (r - l) / (d - l) + s && (o = !o);
  }
  return o;
}
function sZ(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), cZ(t);
}
function cZ(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], i = t[t.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], i = n[n.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var lZ = _P, uZ = TP, dZ = $P, AP = MP;
const fZ = lZ, pZ = uZ, mZ = dZ, IP = c.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ m(
  AP,
  {
    ref: r,
    sideOffset: t,
    className: $(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
IP.displayName = AP.displayName;
const vZ = "sidebar:state", hZ = 60 * 60 * 24 * 7, gZ = "16rem", bZ = "18rem", yZ = "3rem", wZ = "b", kP = c.createContext(null);
function Vs() {
  const e = c.useContext(kP);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
const xZ = c.forwardRef(
  ({
    defaultOpen: e = !0,
    open: t,
    onOpenChange: n,
    className: r,
    style: o,
    children: a,
    ...i
  }, s) => {
    const l = Hq(), [u, d] = c.useState(!1), [f, p] = c.useState(e), g = t ?? f, h = c.useCallback(
      (w) => {
        const C = typeof w == "function" ? w(g) : w;
        n ? n(C) : p(C), document.cookie = `${vZ}=${C}; path=/; max-age=${hZ}`;
      },
      [n, g]
    ), v = c.useCallback(() => l ? d((w) => !w) : h((w) => !w), [l, h, d]);
    c.useEffect(() => {
      const w = (C) => {
        C.key === wZ && (C.metaKey || C.ctrlKey) && (C.preventDefault(), v());
      };
      return window.addEventListener("keydown", w), () => window.removeEventListener("keydown", w);
    }, [v]);
    const b = g ? "expanded" : "collapsed", y = c.useMemo(
      () => ({
        state: b,
        open: g,
        setOpen: h,
        isMobile: l,
        openMobile: u,
        setOpenMobile: d,
        toggleSidebar: v
      }),
      [b, g, h, l, u, d, v]
    );
    return /* @__PURE__ */ m(kP.Provider, { value: y, children: /* @__PURE__ */ m(fZ, { delayDuration: 0, children: /* @__PURE__ */ m(
      "div",
      {
        style: {
          "--sidebar-width": gZ,
          "--sidebar-width-icon": yZ,
          ...o
        },
        className: $(
          "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
          r
        ),
        ref: s,
        ...i,
        children: a
      }
    ) }) });
  }
);
xZ.displayName = "SidebarProvider";
const CZ = c.forwardRef(
  ({
    side: e = "left",
    variant: t = "sidebar",
    collapsible: n = "offcanvas",
    className: r,
    children: o,
    ...a
  }, i) => {
    const { isMobile: s, state: l, openMobile: u, setOpenMobile: d } = Vs();
    return n === "none" ? /* @__PURE__ */ m(
      "div",
      {
        className: $(
          "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
          r
        ),
        ref: i,
        ...a,
        children: o
      }
    ) : s ? /* @__PURE__ */ m(Iq, { open: u, onOpenChange: d, ...a, children: /* @__PURE__ */ m(
      PP,
      {
        "data-sidebar": "sidebar",
        "data-mobile": "true",
        className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
        style: {
          "--sidebar-width": bZ
        },
        side: e,
        children: /* @__PURE__ */ m("div", { className: "flex h-full w-full flex-col", children: o })
      }
    ) }) : /* @__PURE__ */ ee(
      "div",
      {
        ref: i,
        className: "group peer hidden md:block text-sidebar-foreground",
        "data-state": l,
        "data-collapsible": l === "collapsed" ? n : "",
        "data-variant": t,
        "data-side": e,
        children: [
          /* @__PURE__ */ m(
            "div",
            {
              className: $(
                "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
                "group-data-[collapsible=offcanvas]:w-0",
                "group-data-[side=right]:rotate-180",
                t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
              )
            }
          ),
          /* @__PURE__ */ m(
            "div",
            {
              className: $(
                "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
                e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                // Adjust the padding for floating and inset variants.
                t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
                r
              ),
              ...a,
              children: /* @__PURE__ */ m(
                "div",
                {
                  "data-sidebar": "sidebar",
                  className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                  children: o
                }
              )
            }
          )
        ]
      }
    );
  }
);
CZ.displayName = "Sidebar";
const SZ = c.forwardRef(({ className: e, onClick: t, ...n }, r) => {
  const { toggleSidebar: o } = Vs();
  return /* @__PURE__ */ ee(
    aa,
    {
      ref: r,
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      className: $("h-7 w-7", e),
      onClick: (a) => {
        t == null || t(a), o();
      },
      ...n,
      children: [
        /* @__PURE__ */ m(BN, {}),
        /* @__PURE__ */ m("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
});
SZ.displayName = "SidebarTrigger";
const EZ = c.forwardRef(({ className: e, ...t }, n) => {
  const { toggleSidebar: r } = Vs();
  return /* @__PURE__ */ m(
    "button",
    {
      ref: n,
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: r,
      title: "Toggle Sidebar",
      className: $(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        e
      ),
      ...t
    }
  );
});
EZ.displayName = "SidebarRail";
const PZ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "main",
  {
    ref: n,
    className: $(
      "relative flex min-h-svh flex-1 flex-col bg-background",
      "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
      e
    ),
    ...t
  }
));
PZ.displayName = "SidebarInset";
const NZ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Qx,
  {
    ref: n,
    "data-sidebar": "input",
    className: $(
      "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
      e
    ),
    ...t
  }
));
NZ.displayName = "SidebarInput";
const RZ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "div",
  {
    ref: n,
    "data-sidebar": "header",
    className: $("flex flex-col gap-2 p-2", e),
    ...t
  }
));
RZ.displayName = "SidebarHeader";
const _Z = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "div",
  {
    ref: n,
    "data-sidebar": "footer",
    className: $("flex flex-col gap-2 p-2", e),
    ...t
  }
));
_Z.displayName = "SidebarFooter";
const TZ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  SP,
  {
    ref: n,
    "data-sidebar": "separator",
    className: $("mx-2 w-auto bg-sidebar-border", e),
    ...t
  }
));
TZ.displayName = "SidebarSeparator";
const $Z = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "div",
  {
    ref: n,
    "data-sidebar": "content",
    className: $(
      "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
      e
    ),
    ...t
  }
));
$Z.displayName = "SidebarContent";
const MZ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "div",
  {
    ref: n,
    "data-sidebar": "group",
    className: $("relative flex w-full min-w-0 flex-col p-2", e),
    ...t
  }
));
MZ.displayName = "SidebarGroup";
const OZ = c.forwardRef(({ className: e, asChild: t = !1, ...n }, r) => /* @__PURE__ */ m(
  t ? Ke : "div",
  {
    ref: r,
    "data-sidebar": "group-label",
    className: $(
      "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
      e
    ),
    ...n
  }
));
OZ.displayName = "SidebarGroupLabel";
const DZ = c.forwardRef(({ className: e, asChild: t = !1, ...n }, r) => /* @__PURE__ */ m(
  t ? Ke : "button",
  {
    ref: r,
    "data-sidebar": "group-action",
    className: $(
      "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      // Increases the hit area of the button on mobile.
      "after:absolute after:-inset-2 after:md:hidden",
      "group-data-[collapsible=icon]:hidden",
      e
    ),
    ...n
  }
));
DZ.displayName = "SidebarGroupAction";
const AZ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "div",
  {
    ref: n,
    "data-sidebar": "group-content",
    className: $("w-full text-sm", e),
    ...t
  }
));
AZ.displayName = "SidebarGroupContent";
const IZ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "ul",
  {
    ref: n,
    "data-sidebar": "menu",
    className: $("flex w-full min-w-0 flex-col gap-1", e),
    ...t
  }
));
IZ.displayName = "SidebarMenu";
const kZ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "li",
  {
    ref: n,
    "data-sidebar": "menu-item",
    className: $("group/menu-item relative", e),
    ...t
  }
));
kZ.displayName = "SidebarMenuItem";
const LZ = yn(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), FZ = c.forwardRef(
  ({
    asChild: e = !1,
    isActive: t = !1,
    variant: n = "default",
    size: r = "default",
    tooltip: o,
    className: a,
    ...i
  }, s) => {
    const l = e ? Ke : "button", { isMobile: u, state: d } = Vs(), f = /* @__PURE__ */ m(
      l,
      {
        ref: s,
        "data-sidebar": "menu-button",
        "data-size": r,
        "data-active": t,
        className: $(LZ({ variant: n, size: r }), a),
        ...i
      }
    );
    return o ? (typeof o == "string" && (o = {
      children: o
    }), /* @__PURE__ */ ee(pZ, { children: [
      /* @__PURE__ */ m(mZ, { asChild: !0, children: f }),
      /* @__PURE__ */ m(
        IP,
        {
          side: "right",
          align: "center",
          hidden: d !== "collapsed" || u,
          ...o
        }
      )
    ] })) : f;
  }
);
FZ.displayName = "SidebarMenuButton";
const BZ = c.forwardRef(({ className: e, asChild: t = !1, showOnHover: n = !1, ...r }, o) => /* @__PURE__ */ m(
  t ? Ke : "button",
  {
    ref: o,
    "data-sidebar": "menu-action",
    className: $(
      "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
      // Increases the hit area of the button on mobile.
      "after:absolute after:-inset-2 after:md:hidden",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      n && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
      e
    ),
    ...r
  }
));
BZ.displayName = "SidebarMenuAction";
const WZ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "div",
  {
    ref: n,
    "data-sidebar": "menu-badge",
    className: $(
      "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      e
    ),
    ...t
  }
));
WZ.displayName = "SidebarMenuBadge";
const zZ = c.forwardRef(({ className: e, showIcon: t = !1, ...n }, r) => {
  const o = c.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ ee(
    "div",
    {
      ref: r,
      "data-sidebar": "menu-skeleton",
      className: $("rounded-md h-8 flex gap-2 px-2 items-center", e),
      ...n,
      children: [
        t && /* @__PURE__ */ m(
          qv,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ m(
          qv,
          {
            className: "h-4 flex-1 max-w-[--skeleton-width]",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": o
            }
          }
        )
      ]
    }
  );
});
zZ.displayName = "SidebarMenuSkeleton";
const HZ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "ul",
  {
    ref: n,
    "data-sidebar": "menu-sub",
    className: $(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      e
    ),
    ...t
  }
));
HZ.displayName = "SidebarMenuSub";
const jZ = c.forwardRef(({ ...e }, t) => /* @__PURE__ */ m("li", { ref: t, ...e }));
jZ.displayName = "SidebarMenuSubItem";
const VZ = c.forwardRef(({ asChild: e = !1, size: t = "md", isActive: n, className: r, ...o }, a) => /* @__PURE__ */ m(
  e ? Ke : "a",
  {
    ref: a,
    "data-sidebar": "menu-sub-button",
    "data-size": t,
    "data-active": n,
    className: $(
      "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
      "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
      t === "sm" && "text-xs",
      t === "md" && "text-sm",
      "group-data-[collapsible=icon]:hidden",
      r
    ),
    ...o
  }
));
VZ.displayName = "SidebarMenuSubButton";
var LP = ["PageUp", "PageDown"], FP = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], BP = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, xo = "Slider", [uu, UZ, GZ] = hn(xo), [WP, cte] = De(xo, [
  GZ
]), [YZ, Us] = WP(xo), zP = c.forwardRef(
  (e, t) => {
    const {
      name: n,
      min: r = 0,
      max: o = 100,
      step: a = 1,
      orientation: i = "horizontal",
      disabled: s = !1,
      minStepsBetweenThumbs: l = 0,
      defaultValue: u = [r],
      value: d,
      onValueChange: f = () => {
      },
      onValueCommit: p = () => {
      },
      inverted: g = !1,
      ...h
    } = e, v = c.useRef(/* @__PURE__ */ new Set()), b = c.useRef(0), w = i === "horizontal" ? KZ : XZ, [C = [], E] = Me({
      prop: d,
      defaultProp: u,
      onChange: (M) => {
        var B;
        (B = [...v.current][b.current]) == null || B.focus(), f(M);
      }
    }), S = c.useRef(C);
    function P(M) {
      const k = eQ(C, M);
      R(M, k);
    }
    function x(M) {
      R(M, b.current);
    }
    function N() {
      const M = S.current[b.current];
      C[b.current] !== M && p(C);
    }
    function R(M, k, { commit: B } = { commit: !1 }) {
      const Z = oQ(a), F = aQ(Math.round((M - r) / a) * a + r, Z), H = na(F, [r, o]);
      E((j = []) => {
        const W = QZ(j, H, k);
        if (rQ(W, l * a)) {
          b.current = W.indexOf(H);
          const O = String(W) !== String(j);
          return O && B && p(W), O ? W : j;
        } else
          return j;
      });
    }
    return /* @__PURE__ */ m(
      YZ,
      {
        scope: e.__scopeSlider,
        name: n,
        disabled: s,
        min: r,
        max: o,
        valueIndexToChangeRef: b,
        thumbs: v.current,
        values: C,
        orientation: i,
        children: /* @__PURE__ */ m(uu.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ m(uu.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ m(
          w,
          {
            "aria-disabled": s,
            "data-disabled": s ? "" : void 0,
            ...h,
            ref: t,
            onPointerDown: I(h.onPointerDown, () => {
              s || (S.current = C);
            }),
            min: r,
            max: o,
            inverted: g,
            onSlideStart: s ? void 0 : P,
            onSlideMove: s ? void 0 : x,
            onSlideEnd: s ? void 0 : N,
            onHomeKeyDown: () => !s && R(r, 0, { commit: !0 }),
            onEndKeyDown: () => !s && R(o, C.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: M, direction: k }) => {
              if (!s) {
                const F = LP.includes(M.key) || M.shiftKey && FP.includes(M.key) ? 10 : 1, H = b.current, j = C[H], W = a * F * k;
                R(j + W, H, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
zP.displayName = xo;
var [HP, jP] = WP(xo, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), KZ = c.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: r,
      dir: o,
      inverted: a,
      onSlideStart: i,
      onSlideMove: s,
      onSlideEnd: l,
      onStepKeyDown: u,
      ...d
    } = e, [f, p] = c.useState(null), g = te(t, (C) => p(C)), h = c.useRef(), v = Bt(o), b = v === "ltr", y = b && !a || !b && a;
    function w(C) {
      const E = h.current || f.getBoundingClientRect(), S = [0, E.width], x = zf(S, y ? [n, r] : [r, n]);
      return h.current = E, x(C - E.left);
    }
    return /* @__PURE__ */ m(
      HP,
      {
        scope: e.__scopeSlider,
        startEdge: y ? "left" : "right",
        endEdge: y ? "right" : "left",
        direction: y ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ m(
          VP,
          {
            dir: v,
            "data-orientation": "horizontal",
            ...d,
            ref: g,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (C) => {
              const E = w(C.clientX);
              i == null || i(E);
            },
            onSlideMove: (C) => {
              const E = w(C.clientX);
              s == null || s(E);
            },
            onSlideEnd: () => {
              h.current = void 0, l == null || l();
            },
            onStepKeyDown: (C) => {
              const S = BP[y ? "from-left" : "from-right"].includes(C.key);
              u == null || u({ event: C, direction: S ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), XZ = c.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: r,
      inverted: o,
      onSlideStart: a,
      onSlideMove: i,
      onSlideEnd: s,
      onStepKeyDown: l,
      ...u
    } = e, d = c.useRef(null), f = te(t, d), p = c.useRef(), g = !o;
    function h(v) {
      const b = p.current || d.current.getBoundingClientRect(), y = [0, b.height], C = zf(y, g ? [r, n] : [n, r]);
      return p.current = b, C(v - b.top);
    }
    return /* @__PURE__ */ m(
      HP,
      {
        scope: e.__scopeSlider,
        startEdge: g ? "bottom" : "top",
        endEdge: g ? "top" : "bottom",
        size: "height",
        direction: g ? 1 : -1,
        children: /* @__PURE__ */ m(
          VP,
          {
            "data-orientation": "vertical",
            ...u,
            ref: f,
            style: {
              ...u.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (v) => {
              const b = h(v.clientY);
              a == null || a(b);
            },
            onSlideMove: (v) => {
              const b = h(v.clientY);
              i == null || i(b);
            },
            onSlideEnd: () => {
              p.current = void 0, s == null || s();
            },
            onStepKeyDown: (v) => {
              const y = BP[g ? "from-bottom" : "from-top"].includes(v.key);
              l == null || l({ event: v, direction: y ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), VP = c.forwardRef(
  (e, t) => {
    const {
      __scopeSlider: n,
      onSlideStart: r,
      onSlideMove: o,
      onSlideEnd: a,
      onHomeKeyDown: i,
      onEndKeyDown: s,
      onStepKeyDown: l,
      ...u
    } = e, d = Us(xo, n);
    return /* @__PURE__ */ m(
      Y.span,
      {
        ...u,
        ref: t,
        onKeyDown: I(e.onKeyDown, (f) => {
          f.key === "Home" ? (i(f), f.preventDefault()) : f.key === "End" ? (s(f), f.preventDefault()) : LP.concat(FP).includes(f.key) && (l(f), f.preventDefault());
        }),
        onPointerDown: I(e.onPointerDown, (f) => {
          const p = f.target;
          p.setPointerCapture(f.pointerId), f.preventDefault(), d.thumbs.has(p) ? p.focus() : r(f);
        }),
        onPointerMove: I(e.onPointerMove, (f) => {
          f.target.hasPointerCapture(f.pointerId) && o(f);
        }),
        onPointerUp: I(e.onPointerUp, (f) => {
          const p = f.target;
          p.hasPointerCapture(f.pointerId) && (p.releasePointerCapture(f.pointerId), a(f));
        })
      }
    );
  }
), UP = "SliderTrack", GP = c.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = Us(UP, n);
    return /* @__PURE__ */ m(
      Y.span,
      {
        "data-disabled": o.disabled ? "" : void 0,
        "data-orientation": o.orientation,
        ...r,
        ref: t
      }
    );
  }
);
GP.displayName = UP;
var du = "SliderRange", YP = c.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = Us(du, n), a = jP(du, n), i = c.useRef(null), s = te(t, i), l = o.values.length, u = o.values.map(
      (p) => XP(p, o.min, o.max)
    ), d = l > 1 ? Math.min(...u) : 0, f = 100 - Math.max(...u);
    return /* @__PURE__ */ m(
      Y.span,
      {
        "data-orientation": o.orientation,
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: s,
        style: {
          ...e.style,
          [a.startEdge]: d + "%",
          [a.endEdge]: f + "%"
        }
      }
    );
  }
);
YP.displayName = du;
var fu = "SliderThumb", KP = c.forwardRef(
  (e, t) => {
    const n = UZ(e.__scopeSlider), [r, o] = c.useState(null), a = te(t, (s) => o(s)), i = c.useMemo(
      () => r ? n().findIndex((s) => s.ref.current === r) : -1,
      [n, r]
    );
    return /* @__PURE__ */ m(qZ, { ...e, ref: a, index: i });
  }
), qZ = c.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, index: r, name: o, ...a } = e, i = Us(fu, n), s = jP(fu, n), [l, u] = c.useState(null), d = te(t, (w) => u(w)), f = l ? !!l.closest("form") : !0, p = pa(l), g = i.values[r], h = g === void 0 ? 0 : XP(g, i.min, i.max), v = JZ(r, i.values.length), b = p == null ? void 0 : p[s.size], y = b ? tQ(b, h, s.direction) : 0;
    return c.useEffect(() => {
      if (l)
        return i.thumbs.add(l), () => {
          i.thumbs.delete(l);
        };
    }, [l, i.thumbs]), /* @__PURE__ */ ee(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [s.startEdge]: `calc(${h}% + ${y}px)`
        },
        children: [
          /* @__PURE__ */ m(uu.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ m(
            Y.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || v,
              "aria-valuemin": i.min,
              "aria-valuenow": g,
              "aria-valuemax": i.max,
              "aria-orientation": i.orientation,
              "data-orientation": i.orientation,
              "data-disabled": i.disabled ? "" : void 0,
              tabIndex: i.disabled ? void 0 : 0,
              ...a,
              ref: d,
              style: g === void 0 ? { display: "none" } : e.style,
              onFocus: I(e.onFocus, () => {
                i.valueIndexToChangeRef.current = r;
              })
            }
          ) }),
          f && /* @__PURE__ */ m(
            ZZ,
            {
              name: o ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
              value: g
            },
            r
          )
        ]
      }
    );
  }
);
KP.displayName = fu;
var ZZ = (e) => {
  const { value: t, ...n } = e, r = c.useRef(null), o = po(t);
  return c.useEffect(() => {
    const a = r.current, i = window.HTMLInputElement.prototype, l = Object.getOwnPropertyDescriptor(i, "value").set;
    if (o !== t && l) {
      const u = new Event("input", { bubbles: !0 });
      l.call(a, t), a.dispatchEvent(u);
    }
  }, [o, t]), /* @__PURE__ */ m("input", { style: { display: "none" }, ...n, ref: r, defaultValue: t });
};
function QZ(e = [], t, n) {
  const r = [...e];
  return r[n] = t, r.sort((o, a) => o - a);
}
function XP(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return na(a, [0, 100]);
}
function JZ(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function eQ(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((o) => Math.abs(o - t)), r = Math.min(...n);
  return n.indexOf(r);
}
function tQ(e, t, n) {
  const r = e / 2, a = zf([0, 50], [0, r]);
  return (r - a(t) * n) * n;
}
function nQ(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function rQ(e, t) {
  if (t > 0) {
    const n = nQ(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function zf(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function oQ(e) {
  return (String(e).split(".")[1] || "").length;
}
function aQ(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
var qP = zP, iQ = GP, sQ = YP, cQ = KP;
const lQ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ ee(
  qP,
  {
    ref: n,
    className: $(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ m(iQ, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ m(sQ, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ m(cQ, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
lQ.displayName = qP.displayName;
var Zv = ["light", "dark"], uQ = "(prefers-color-scheme: dark)", dQ = c.createContext(void 0), fQ = { setTheme: (e) => {
}, themes: [] }, pQ = () => {
  var e;
  return (e = c.useContext(dQ)) != null ? e : fQ;
};
c.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: a, value: i, attrs: s, nonce: l }) => {
  let u = a === "system", d = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${s.map((h) => `'${h}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`, f = o ? Zv.includes(a) && a ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", p = (h, v = !1, b = !0) => {
    let y = i ? i[h] : h, w = v ? h + "|| ''" : `'${y}'`, C = "";
    return o && b && !v && Zv.includes(h) && (C += `d.style.colorScheme = '${h}';`), n === "class" ? v || y ? C += `c.add(${w})` : C += "null" : y && (C += `d[s](n,${w})`), C;
  }, g = e ? `!function(){${d}${p(e)}}()` : r ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${uQ}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${p(i ? "x[e]" : "e", !0)}}${u ? "" : "else{" + p(a, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${p(i ? "x[e]" : "e", !0)}}else{${p(a, !1, !1)};}${f}}catch(t){}}();`;
  return c.createElement("script", { nonce: l, dangerouslySetInnerHTML: { __html: g } });
});
var mQ = (e) => {
  switch (e) {
    case "success":
      return gQ;
    case "info":
      return yQ;
    case "warning":
      return bQ;
    case "error":
      return wQ;
    default:
      return null;
  }
}, vQ = Array(12).fill(0), hQ = ({ visible: e }) => T.createElement("div", { className: "sonner-loading-wrapper", "data-visible": e }, T.createElement("div", { className: "sonner-spinner" }, vQ.map((t, n) => T.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${n}` })))), gQ = T.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, T.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), bQ = T.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, T.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), yQ = T.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, T.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), wQ = T.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, T.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), xQ = () => {
  let [e, t] = T.useState(document.hidden);
  return T.useEffect(() => {
    let n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
}, pu = 1, CQ = class {
  constructor() {
    this.subscribe = (e) => (this.subscribers.push(e), () => {
      let t = this.subscribers.indexOf(e);
      this.subscribers.splice(t, 1);
    }), this.publish = (e) => {
      this.subscribers.forEach((t) => t(e));
    }, this.addToast = (e) => {
      this.publish(e), this.toasts = [...this.toasts, e];
    }, this.create = (e) => {
      var t;
      let { message: n, ...r } = e, o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : pu++, a = this.toasts.find((s) => s.id === o), i = e.dismissible === void 0 ? !0 : e.dismissible;
      return a ? this.toasts = this.toasts.map((s) => s.id === o ? (this.publish({ ...s, ...e, id: o, title: n }), { ...s, ...e, id: o, dismissible: i, title: n }) : s) : this.addToast({ title: n, ...r, dismissible: i, id: o }), o;
    }, this.dismiss = (e) => (e || this.toasts.forEach((t) => {
      this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
    }), this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })), e), this.message = (e, t) => this.create({ ...t, message: e }), this.error = (e, t) => this.create({ ...t, message: e, type: "error" }), this.success = (e, t) => this.create({ ...t, type: "success", message: e }), this.info = (e, t) => this.create({ ...t, type: "info", message: e }), this.warning = (e, t) => this.create({ ...t, type: "warning", message: e }), this.loading = (e, t) => this.create({ ...t, type: "loading", message: e }), this.promise = (e, t) => {
      if (!t) return;
      let n;
      t.loading !== void 0 && (n = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let r = e instanceof Promise ? e : e(), o = n !== void 0;
      return r.then(async (a) => {
        if (EQ(a) && !a.ok) {
          o = !1;
          let i = typeof t.error == "function" ? await t.error(`HTTP error! status: ${a.status}`) : t.error, s = typeof t.description == "function" ? await t.description(`HTTP error! status: ${a.status}`) : t.description;
          this.create({ id: n, type: "error", message: i, description: s });
        } else if (t.success !== void 0) {
          o = !1;
          let i = typeof t.success == "function" ? await t.success(a) : t.success, s = typeof t.description == "function" ? await t.description(a) : t.description;
          this.create({ id: n, type: "success", message: i, description: s });
        }
      }).catch(async (a) => {
        if (t.error !== void 0) {
          o = !1;
          let i = typeof t.error == "function" ? await t.error(a) : t.error, s = typeof t.description == "function" ? await t.description(a) : t.description;
          this.create({ id: n, type: "error", message: i, description: s });
        }
      }).finally(() => {
        var a;
        o && (this.dismiss(n), n = void 0), (a = t.finally) == null || a.call(t);
      }), n;
    }, this.custom = (e, t) => {
      let n = (t == null ? void 0 : t.id) || pu++;
      return this.create({ jsx: e(n), id: n, ...t }), n;
    }, this.subscribers = [], this.toasts = [];
  }
}, gt = new CQ(), SQ = (e, t) => {
  let n = (t == null ? void 0 : t.id) || pu++;
  return gt.addToast({ title: e, ...t, id: n }), n;
}, EQ = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", PQ = SQ, NQ = () => gt.toasts, lte = Object.assign(PQ, { success: gt.success, info: gt.info, warning: gt.warning, error: gt.error, custom: gt.custom, message: gt.message, promise: gt.promise, dismiss: gt.dismiss, loading: gt.loading }, { getHistory: NQ });
function RQ(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
RQ(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function li(e) {
  return e.label !== void 0;
}
var _Q = 3, TQ = "32px", $Q = 4e3, MQ = 356, OQ = 14, DQ = 20, AQ = 200;
function IQ(...e) {
  return e.filter(Boolean).join(" ");
}
var kQ = (e) => {
  var t, n, r, o, a, i, s, l, u, d;
  let { invert: f, toast: p, unstyled: g, interacting: h, setHeights: v, visibleToasts: b, heights: y, index: w, toasts: C, expanded: E, removeToast: S, defaultRichColors: P, closeButton: x, style: N, cancelButtonStyle: R, actionButtonStyle: M, className: k = "", descriptionClassName: B = "", duration: Z, position: F, gap: H, loadingIcon: j, expandByDefault: W, classNames: O, icons: V, closeButtonAriaLabel: ne = "Close toast", pauseWhenPageIsHidden: q, cn: A } = e, [D, L] = T.useState(!1), [U, G] = T.useState(!1), [z, X] = T.useState(!1), [Q, J] = T.useState(!1), [re, _] = T.useState(0), [K, oe] = T.useState(0), de = T.useRef(null), ce = T.useRef(null), le = w === 0, ye = w + 1 <= b, pe = p.type, Ee = p.dismissible !== !1, Ve = p.className || "", ct = p.descriptionClassName || "", Ge = T.useMemo(() => y.findIndex((se) => se.toastId === p.id) || 0, [y, p.id]), tt = T.useMemo(() => {
    var se;
    return (se = p.closeButton) != null ? se : x;
  }, [p.closeButton, x]), nt = T.useMemo(() => p.duration || Z || $Q, [p.duration, Z]), Ut = T.useRef(0), ae = T.useRef(0), ge = T.useRef(0), be = T.useRef(null), [ie, we] = F.split("-"), Se = T.useMemo(() => y.reduce((se, Pe, _e) => _e >= Ge ? se : se + Pe.height, 0), [y, Ge]), He = xQ(), Xe = p.invert || f, lt = pe === "loading";
  ae.current = T.useMemo(() => Ge * H + Se, [Ge, Se]), T.useEffect(() => {
    L(!0);
  }, []), T.useLayoutEffect(() => {
    if (!D) return;
    let se = ce.current, Pe = se.style.height;
    se.style.height = "auto";
    let _e = se.getBoundingClientRect().height;
    se.style.height = Pe, oe(_e), v((vt) => vt.find((ht) => ht.toastId === p.id) ? vt.map((ht) => ht.toastId === p.id ? { ...ht, height: _e } : ht) : [{ toastId: p.id, height: _e, position: p.position }, ...vt]);
  }, [D, p.title, p.description, v, p.id]);
  let rt = T.useCallback(() => {
    G(!0), _(ae.current), v((se) => se.filter((Pe) => Pe.toastId !== p.id)), setTimeout(() => {
      S(p);
    }, AQ);
  }, [p, S, v, ae]);
  T.useEffect(() => {
    if (p.promise && pe === "loading" || p.duration === 1 / 0 || p.type === "loading") return;
    let se, Pe = nt;
    return E || h || q && He ? (() => {
      if (ge.current < Ut.current) {
        let _e = (/* @__PURE__ */ new Date()).getTime() - Ut.current;
        Pe = Pe - _e;
      }
      ge.current = (/* @__PURE__ */ new Date()).getTime();
    })() : Pe !== 1 / 0 && (Ut.current = (/* @__PURE__ */ new Date()).getTime(), se = setTimeout(() => {
      var _e;
      (_e = p.onAutoClose) == null || _e.call(p, p), rt();
    }, Pe)), () => clearTimeout(se);
  }, [E, h, W, p, nt, rt, p.promise, pe, q, He]), T.useEffect(() => {
    let se = ce.current;
    if (se) {
      let Pe = se.getBoundingClientRect().height;
      return oe(Pe), v((_e) => [{ toastId: p.id, height: Pe, position: p.position }, ..._e]), () => v((_e) => _e.filter((vt) => vt.toastId !== p.id));
    }
  }, [v, p.id]), T.useEffect(() => {
    p.delete && rt();
  }, [rt, p.delete]);
  function $t() {
    return V != null && V.loading ? T.createElement("div", { className: "sonner-loader", "data-visible": pe === "loading" }, V.loading) : j ? T.createElement("div", { className: "sonner-loader", "data-visible": pe === "loading" }, j) : T.createElement(hQ, { visible: pe === "loading" });
  }
  return T.createElement("li", { "aria-live": p.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: ce, className: A(k, Ve, O == null ? void 0 : O.toast, (t = p == null ? void 0 : p.classNames) == null ? void 0 : t.toast, O == null ? void 0 : O.default, O == null ? void 0 : O[pe], (n = p == null ? void 0 : p.classNames) == null ? void 0 : n[pe]), "data-sonner-toast": "", "data-rich-colors": (r = p.richColors) != null ? r : P, "data-styled": !(p.jsx || p.unstyled || g), "data-mounted": D, "data-promise": !!p.promise, "data-removed": U, "data-visible": ye, "data-y-position": ie, "data-x-position": we, "data-index": w, "data-front": le, "data-swiping": z, "data-dismissible": Ee, "data-type": pe, "data-invert": Xe, "data-swipe-out": Q, "data-expanded": !!(E || W && D), style: { "--index": w, "--toasts-before": w, "--z-index": C.length - w, "--offset": `${U ? re : ae.current}px`, "--initial-height": W ? "auto" : `${K}px`, ...N, ...p.style }, onPointerDown: (se) => {
    lt || !Ee || (de.current = /* @__PURE__ */ new Date(), _(ae.current), se.target.setPointerCapture(se.pointerId), se.target.tagName !== "BUTTON" && (X(!0), be.current = { x: se.clientX, y: se.clientY }));
  }, onPointerUp: () => {
    var se, Pe, _e, vt;
    if (Q || !Ee) return;
    be.current = null;
    let ht = Number(((se = ce.current) == null ? void 0 : se.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), ur = (/* @__PURE__ */ new Date()).getTime() - ((Pe = de.current) == null ? void 0 : Pe.getTime()), Da = Math.abs(ht) / ur;
    if (Math.abs(ht) >= DQ || Da > 0.11) {
      _(ae.current), (_e = p.onDismiss) == null || _e.call(p, p), rt(), J(!0);
      return;
    }
    (vt = ce.current) == null || vt.style.setProperty("--swipe-amount", "0px"), X(!1);
  }, onPointerMove: (se) => {
    var Pe;
    if (!be.current || !Ee) return;
    let _e = se.clientY - be.current.y, vt = se.clientX - be.current.x, ht = (ie === "top" ? Math.min : Math.max)(0, _e), ur = se.pointerType === "touch" ? 10 : 2;
    Math.abs(ht) > ur ? (Pe = ce.current) == null || Pe.style.setProperty("--swipe-amount", `${_e}px`) : Math.abs(vt) > ur && (be.current = null);
  } }, tt && !p.jsx ? T.createElement("button", { "aria-label": ne, "data-disabled": lt, "data-close-button": !0, onClick: lt || !Ee ? () => {
  } : () => {
    var se;
    rt(), (se = p.onDismiss) == null || se.call(p, p);
  }, className: A(O == null ? void 0 : O.closeButton, (o = p == null ? void 0 : p.classNames) == null ? void 0 : o.closeButton) }, T.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, T.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), T.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, p.jsx || T.isValidElement(p.title) ? p.jsx || p.title : T.createElement(T.Fragment, null, pe || p.icon || p.promise ? T.createElement("div", { "data-icon": "", className: A(O == null ? void 0 : O.icon, (a = p == null ? void 0 : p.classNames) == null ? void 0 : a.icon) }, p.promise || p.type === "loading" && !p.icon ? p.icon || $t() : null, p.type !== "loading" ? p.icon || (V == null ? void 0 : V[pe]) || mQ(pe) : null) : null, T.createElement("div", { "data-content": "", className: A(O == null ? void 0 : O.content, (i = p == null ? void 0 : p.classNames) == null ? void 0 : i.content) }, T.createElement("div", { "data-title": "", className: A(O == null ? void 0 : O.title, (s = p == null ? void 0 : p.classNames) == null ? void 0 : s.title) }, p.title), p.description ? T.createElement("div", { "data-description": "", className: A(B, ct, O == null ? void 0 : O.description, (l = p == null ? void 0 : p.classNames) == null ? void 0 : l.description) }, p.description) : null), T.isValidElement(p.cancel) ? p.cancel : p.cancel && li(p.cancel) ? T.createElement("button", { "data-button": !0, "data-cancel": !0, style: p.cancelButtonStyle || R, onClick: (se) => {
    var Pe, _e;
    li(p.cancel) && Ee && ((_e = (Pe = p.cancel).onClick) == null || _e.call(Pe, se), rt());
  }, className: A(O == null ? void 0 : O.cancelButton, (u = p == null ? void 0 : p.classNames) == null ? void 0 : u.cancelButton) }, p.cancel.label) : null, T.isValidElement(p.action) ? p.action : p.action && li(p.action) ? T.createElement("button", { "data-button": !0, "data-action": !0, style: p.actionButtonStyle || M, onClick: (se) => {
    var Pe, _e;
    li(p.action) && (se.defaultPrevented || ((_e = (Pe = p.action).onClick) == null || _e.call(Pe, se), rt()));
  }, className: A(O == null ? void 0 : O.actionButton, (d = p == null ? void 0 : p.classNames) == null ? void 0 : d.actionButton) }, p.action.label) : null));
};
function Qv() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var LQ = (e) => {
  let { invert: t, position: n = "bottom-right", hotkey: r = ["altKey", "KeyT"], expand: o, closeButton: a, className: i, offset: s, theme: l = "light", richColors: u, duration: d, style: f, visibleToasts: p = _Q, toastOptions: g, dir: h = Qv(), gap: v = OQ, loadingIcon: b, icons: y, containerAriaLabel: w = "Notifications", pauseWhenPageIsHidden: C, cn: E = IQ } = e, [S, P] = T.useState([]), x = T.useMemo(() => Array.from(new Set([n].concat(S.filter((q) => q.position).map((q) => q.position)))), [S, n]), [N, R] = T.useState([]), [M, k] = T.useState(!1), [B, Z] = T.useState(!1), [F, H] = T.useState(l !== "system" ? l : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), j = T.useRef(null), W = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), O = T.useRef(null), V = T.useRef(!1), ne = T.useCallback((q) => {
    var A;
    (A = S.find((D) => D.id === q.id)) != null && A.delete || gt.dismiss(q.id), P((D) => D.filter(({ id: L }) => L !== q.id));
  }, [S]);
  return T.useEffect(() => gt.subscribe((q) => {
    if (q.dismiss) {
      P((A) => A.map((D) => D.id === q.id ? { ...D, delete: !0 } : D));
      return;
    }
    setTimeout(() => {
      vn.flushSync(() => {
        P((A) => {
          let D = A.findIndex((L) => L.id === q.id);
          return D !== -1 ? [...A.slice(0, D), { ...A[D], ...q }, ...A.slice(D + 1)] : [q, ...A];
        });
      });
    });
  }), []), T.useEffect(() => {
    if (l !== "system") {
      H(l);
      return;
    }
    l === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? H("dark") : H("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: q }) => {
      H(q ? "dark" : "light");
    });
  }, [l]), T.useEffect(() => {
    S.length <= 1 && k(!1);
  }, [S]), T.useEffect(() => {
    let q = (A) => {
      var D, L;
      r.every((U) => A[U] || A.code === U) && (k(!0), (D = j.current) == null || D.focus()), A.code === "Escape" && (document.activeElement === j.current || (L = j.current) != null && L.contains(document.activeElement)) && k(!1);
    };
    return document.addEventListener("keydown", q), () => document.removeEventListener("keydown", q);
  }, [r]), T.useEffect(() => {
    if (j.current) return () => {
      O.current && (O.current.focus({ preventScroll: !0 }), O.current = null, V.current = !1);
    };
  }, [j.current]), S.length ? T.createElement("section", { "aria-label": `${w} ${W}`, tabIndex: -1 }, x.map((q, A) => {
    var D;
    let [L, U] = q.split("-");
    return T.createElement("ol", { key: q, dir: h === "auto" ? Qv() : h, tabIndex: -1, ref: j, className: i, "data-sonner-toaster": !0, "data-theme": F, "data-y-position": L, "data-x-position": U, style: { "--front-toast-height": `${((D = N[0]) == null ? void 0 : D.height) || 0}px`, "--offset": typeof s == "number" ? `${s}px` : s || TQ, "--width": `${MQ}px`, "--gap": `${v}px`, ...f }, onBlur: (G) => {
      V.current && !G.currentTarget.contains(G.relatedTarget) && (V.current = !1, O.current && (O.current.focus({ preventScroll: !0 }), O.current = null));
    }, onFocus: (G) => {
      G.target instanceof HTMLElement && G.target.dataset.dismissible === "false" || V.current || (V.current = !0, O.current = G.relatedTarget);
    }, onMouseEnter: () => k(!0), onMouseMove: () => k(!0), onMouseLeave: () => {
      B || k(!1);
    }, onPointerDown: (G) => {
      G.target instanceof HTMLElement && G.target.dataset.dismissible === "false" || Z(!0);
    }, onPointerUp: () => Z(!1) }, S.filter((G) => !G.position && A === 0 || G.position === q).map((G, z) => {
      var X, Q;
      return T.createElement(kQ, { key: G.id, icons: y, index: z, toast: G, defaultRichColors: u, duration: (X = g == null ? void 0 : g.duration) != null ? X : d, className: g == null ? void 0 : g.className, descriptionClassName: g == null ? void 0 : g.descriptionClassName, invert: t, visibleToasts: p, closeButton: (Q = g == null ? void 0 : g.closeButton) != null ? Q : a, interacting: B, position: q, style: g == null ? void 0 : g.style, unstyled: g == null ? void 0 : g.unstyled, classNames: g == null ? void 0 : g.classNames, cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle, actionButtonStyle: g == null ? void 0 : g.actionButtonStyle, removeToast: ne, toasts: S.filter((J) => J.position == G.position), heights: N.filter((J) => J.position == G.position), setHeights: R, expandByDefault: o, gap: v, loadingIcon: b, expanded: M, pauseWhenPageIsHidden: C, cn: E });
    }));
  })) : null;
};
const ute = ({ ...e }) => {
  const { theme: t = "system" } = pQ();
  return /* @__PURE__ */ m(
    LQ,
    {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...e
    }
  );
};
var Hf = "Switch", [FQ, dte] = De(Hf), [BQ, WQ] = FQ(Hf), ZP = c.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: l = "on",
      onCheckedChange: u,
      ...d
    } = e, [f, p] = c.useState(null), g = te(t, (w) => p(w)), h = c.useRef(!1), v = f ? !!f.closest("form") : !0, [b = !1, y] = Me({
      prop: o,
      defaultProp: a,
      onChange: u
    });
    return /* @__PURE__ */ ee(BQ, { scope: n, checked: b, disabled: s, children: [
      /* @__PURE__ */ m(
        Y.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": b,
          "aria-required": i,
          "data-state": e1(b),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: l,
          ...d,
          ref: g,
          onClick: I(e.onClick, (w) => {
            y((C) => !C), v && (h.current = w.isPropagationStopped(), h.current || w.stopPropagation());
          })
        }
      ),
      v && /* @__PURE__ */ m(
        zQ,
        {
          control: f,
          bubbles: !h.current,
          name: r,
          value: l,
          checked: b,
          required: i,
          disabled: s,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
ZP.displayName = Hf;
var QP = "SwitchThumb", JP = c.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = WQ(QP, n);
    return /* @__PURE__ */ m(
      Y.span,
      {
        "data-state": e1(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
JP.displayName = QP;
var zQ = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = c.useRef(null), i = po(n), s = pa(t);
  return c.useEffect(() => {
    const l = a.current, u = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(u, "checked").set;
    if (i !== n && f) {
      const p = new Event("click", { bubbles: r });
      f.call(l, n), l.dispatchEvent(p);
    }
  }, [i, n, r]), /* @__PURE__ */ m(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: n,
      ...o,
      tabIndex: -1,
      ref: a,
      style: {
        ...e.style,
        ...s,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function e1(e) {
  return e ? "checked" : "unchecked";
}
var t1 = ZP, HQ = JP;
const jQ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  t1,
  {
    className: $(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ m(
      HQ,
      {
        className: $(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
jQ.displayName = t1.displayName;
const VQ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ m(
  "table",
  {
    ref: n,
    className: $("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
VQ.displayName = "Table";
const UQ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m("thead", { ref: n, className: $("[&_tr]:border-b", e), ...t }));
UQ.displayName = "TableHeader";
const GQ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "tbody",
  {
    ref: n,
    className: $("[&_tr:last-child]:border-0", e),
    ...t
  }
));
GQ.displayName = "TableBody";
const YQ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "tfoot",
  {
    ref: n,
    className: $(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      e
    ),
    ...t
  }
));
YQ.displayName = "TableFooter";
const KQ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "tr",
  {
    ref: n,
    className: $(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
KQ.displayName = "TableRow";
const XQ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "th",
  {
    ref: n,
    className: $(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
XQ.displayName = "TableHead";
const qQ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "td",
  {
    ref: n,
    className: $("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
qQ.displayName = "TableCell";
const ZQ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "caption",
  {
    ref: n,
    className: $("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
ZQ.displayName = "TableCaption";
var jf = "Tabs", [QQ, fte] = De(jf, [
  nn
]), n1 = nn(), [JQ, Vf] = QQ(jf), r1 = c.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      dir: s,
      activationMode: l = "automatic",
      ...u
    } = e, d = Bt(s), [f, p] = Me({
      prop: r,
      onChange: o,
      defaultProp: a
    });
    return /* @__PURE__ */ m(
      JQ,
      {
        scope: n,
        baseId: Le(),
        value: f,
        onValueChange: p,
        orientation: i,
        dir: d,
        activationMode: l,
        children: /* @__PURE__ */ m(
          Y.div,
          {
            dir: d,
            "data-orientation": i,
            ...u,
            ref: t
          }
        )
      }
    );
  }
);
r1.displayName = jf;
var o1 = "TabsList", a1 = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Vf(o1, n), i = n1(n);
    return /* @__PURE__ */ m(
      Ea,
      {
        asChild: !0,
        ...i,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: /* @__PURE__ */ m(
          Y.div,
          {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
a1.displayName = o1;
var i1 = "TabsTrigger", s1 = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, i = Vf(i1, n), s = n1(n), l = u1(i.baseId, r), u = d1(i.baseId, r), d = r === i.value;
    return /* @__PURE__ */ m(
      Pa,
      {
        asChild: !0,
        ...s,
        focusable: !o,
        active: d,
        children: /* @__PURE__ */ m(
          Y.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": d,
            "aria-controls": u,
            "data-state": d ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: l,
            ...a,
            ref: t,
            onMouseDown: I(e.onMouseDown, (f) => {
              !o && f.button === 0 && f.ctrlKey === !1 ? i.onValueChange(r) : f.preventDefault();
            }),
            onKeyDown: I(e.onKeyDown, (f) => {
              [" ", "Enter"].includes(f.key) && i.onValueChange(r);
            }),
            onFocus: I(e.onFocus, () => {
              const f = i.activationMode !== "manual";
              !d && !o && f && i.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
s1.displayName = i1;
var c1 = "TabsContent", l1 = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...i } = e, s = Vf(c1, n), l = u1(s.baseId, r), u = d1(s.baseId, r), d = r === s.value, f = c.useRef(d);
    return c.useEffect(() => {
      const p = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ m(Be, { present: o || d, children: ({ present: p }) => /* @__PURE__ */ m(
      Y.div,
      {
        "data-state": d ? "active" : "inactive",
        "data-orientation": s.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !p,
        id: u,
        tabIndex: 0,
        ...i,
        ref: t,
        style: {
          ...e.style,
          animationDuration: f.current ? "0s" : void 0
        },
        children: p && a
      }
    ) });
  }
);
l1.displayName = c1;
function u1(e, t) {
  return `${e}-trigger-${t}`;
}
function d1(e, t) {
  return `${e}-content-${t}`;
}
var eJ = r1, f1 = a1, p1 = s1, m1 = l1;
const pte = eJ, tJ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  f1,
  {
    ref: n,
    className: $(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
tJ.displayName = f1.displayName;
const nJ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  p1,
  {
    ref: n,
    className: $(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
nJ.displayName = p1.displayName;
const rJ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  m1,
  {
    ref: n,
    className: $(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
rJ.displayName = m1.displayName;
const oJ = c.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ m(
    "textarea",
    {
      className: $(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
oJ.displayName = "Textarea";
var aJ = "DismissableLayer", mu = "dismissableLayer.update", iJ = "dismissableLayer.pointerDownOutside", sJ = "dismissableLayer.focusOutside", Jv, v1 = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), h1 = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...l
    } = e, u = c.useContext(v1), [d, f] = c.useState(null), p = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = c.useState({}), h = te(t, (x) => f(x)), v = Array.from(u.layers), [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = v.indexOf(b), w = d ? v.indexOf(d) : -1, C = u.layersWithOutsidePointerEventsDisabled.size > 0, E = w >= y, S = lJ((x) => {
      const N = x.target, R = [...u.branches].some((M) => M.contains(N));
      !E || R || (o == null || o(x), i == null || i(x), x.defaultPrevented || s == null || s());
    }, p), P = uJ((x) => {
      const N = x.target;
      [...u.branches].some((M) => M.contains(N)) || (a == null || a(x), i == null || i(x), x.defaultPrevented || s == null || s());
    }, p);
    return _n((x) => {
      w === u.layers.size - 1 && (r == null || r(x), !x.defaultPrevented && s && (x.preventDefault(), s()));
    }, p), c.useEffect(() => {
      if (d)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Jv = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), eh(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Jv);
        };
    }, [d, p, n, u]), c.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), eh());
    }, [d, u]), c.useEffect(() => {
      const x = () => g({});
      return document.addEventListener(mu, x), () => document.removeEventListener(mu, x);
    }, []), /* @__PURE__ */ m(
      Y.div,
      {
        ...l,
        ref: h,
        style: {
          pointerEvents: C ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: I(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: I(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: I(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
h1.displayName = aJ;
var cJ = "DismissableLayerBranch", g1 = c.forwardRef((e, t) => {
  const n = c.useContext(v1), r = c.useRef(null), o = te(t, r);
  return c.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ m(Y.div, { ...e, ref: o });
});
g1.displayName = cJ;
function lJ(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e), r = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          b1(
            iJ,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function uJ(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && b1(sJ, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function eh() {
  const e = new CustomEvent(mu);
  document.dispatchEvent(e);
}
function b1(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Nt(o, a) : o.dispatchEvent(a);
}
var dJ = h1, fJ = g1, pJ = "Portal", y1 = c.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, a] = c.useState(!1);
  Ce(() => a(!0), []);
  const i = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? vn.createPortal(/* @__PURE__ */ m(Y.div, { ...r, ref: t }), i) : null;
});
y1.displayName = pJ;
var Uf = "ToastProvider", [Gf, mJ, vJ] = hn("Toast"), [w1, mte] = De("Toast", [vJ]), [hJ, Gs] = w1(Uf), x1 = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: i
  } = e, [s, l] = c.useState(null), [u, d] = c.useState(0), f = c.useRef(!1), p = c.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${Uf}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ m(Gf.Provider, { scope: t, children: /* @__PURE__ */ m(
    hJ,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: o,
      swipeThreshold: a,
      toastCount: u,
      viewport: s,
      onViewportChange: l,
      onToastAdd: c.useCallback(() => d((g) => g + 1), []),
      onToastRemove: c.useCallback(() => d((g) => g - 1), []),
      isFocusedToastEscapeKeyDownRef: f,
      isClosePausedRef: p,
      children: i
    }
  ) });
};
x1.displayName = Uf;
var C1 = "ToastViewport", gJ = ["F8"], vu = "toast.viewportPause", hu = "toast.viewportResume", S1 = c.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = gJ,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, i = Gs(C1, n), s = mJ(n), l = c.useRef(null), u = c.useRef(null), d = c.useRef(null), f = c.useRef(null), p = te(t, f, i.onViewportChange), g = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = i.toastCount > 0;
    c.useEffect(() => {
      const b = (y) => {
        var C;
        r.every((E) => y[E] || y.code === E) && ((C = f.current) == null || C.focus());
      };
      return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
    }, [r]), c.useEffect(() => {
      const b = l.current, y = f.current;
      if (h && b && y) {
        const w = () => {
          if (!i.isClosePausedRef.current) {
            const P = new CustomEvent(vu);
            y.dispatchEvent(P), i.isClosePausedRef.current = !0;
          }
        }, C = () => {
          if (i.isClosePausedRef.current) {
            const P = new CustomEvent(hu);
            y.dispatchEvent(P), i.isClosePausedRef.current = !1;
          }
        }, E = (P) => {
          !b.contains(P.relatedTarget) && C();
        }, S = () => {
          b.contains(document.activeElement) || C();
        };
        return b.addEventListener("focusin", w), b.addEventListener("focusout", E), b.addEventListener("pointermove", w), b.addEventListener("pointerleave", S), window.addEventListener("blur", w), window.addEventListener("focus", C), () => {
          b.removeEventListener("focusin", w), b.removeEventListener("focusout", E), b.removeEventListener("pointermove", w), b.removeEventListener("pointerleave", S), window.removeEventListener("blur", w), window.removeEventListener("focus", C);
        };
      }
    }, [h, i.isClosePausedRef]);
    const v = c.useCallback(
      ({ tabbingDirection: b }) => {
        const w = s().map((C) => {
          const E = C.ref.current, S = [E, ...$J(E)];
          return b === "forwards" ? S : S.reverse();
        });
        return (b === "forwards" ? w.reverse() : w).flat();
      },
      [s]
    );
    return c.useEffect(() => {
      const b = f.current;
      if (b) {
        const y = (w) => {
          var S, P, x;
          const C = w.altKey || w.ctrlKey || w.metaKey;
          if (w.key === "Tab" && !C) {
            const N = document.activeElement, R = w.shiftKey;
            if (w.target === b && R) {
              (S = u.current) == null || S.focus();
              return;
            }
            const B = v({ tabbingDirection: R ? "backwards" : "forwards" }), Z = B.findIndex((F) => F === N);
            Uc(B.slice(Z + 1)) ? w.preventDefault() : R ? (P = u.current) == null || P.focus() : (x = d.current) == null || x.focus();
          }
        };
        return b.addEventListener("keydown", y), () => b.removeEventListener("keydown", y);
      }
    }, [s, v]), /* @__PURE__ */ ee(
      fJ,
      {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", g),
        tabIndex: -1,
        style: { pointerEvents: h ? void 0 : "none" },
        children: [
          h && /* @__PURE__ */ m(
            gu,
            {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const b = v({
                  tabbingDirection: "forwards"
                });
                Uc(b);
              }
            }
          ),
          /* @__PURE__ */ m(Gf.Slot, { scope: n, children: /* @__PURE__ */ m(Y.ol, { tabIndex: -1, ...a, ref: p }) }),
          h && /* @__PURE__ */ m(
            gu,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const b = v({
                  tabbingDirection: "backwards"
                });
                Uc(b);
              }
            }
          )
        ]
      }
    );
  }
);
S1.displayName = C1;
var E1 = "ToastFocusProxy", gu = c.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, a = Gs(E1, n);
    return /* @__PURE__ */ m(
      $a,
      {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (i) => {
          var u;
          const s = i.relatedTarget;
          !((u = a.viewport) != null && u.contains(s)) && r();
        }
      }
    );
  }
);
gu.displayName = E1;
var Ys = "Toast", bJ = "toast.swipeStart", yJ = "toast.swipeMove", wJ = "toast.swipeCancel", xJ = "toast.swipeEnd", P1 = c.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...i } = e, [s = !0, l] = Me({
      prop: r,
      defaultProp: o,
      onChange: a
    });
    return /* @__PURE__ */ m(Be, { present: n || s, children: /* @__PURE__ */ m(
      EJ,
      {
        open: s,
        ...i,
        ref: t,
        onClose: () => l(!1),
        onPause: fe(e.onPause),
        onResume: fe(e.onResume),
        onSwipeStart: I(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: I(e.onSwipeMove, (u) => {
          const { x: d, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`);
        }),
        onSwipeCancel: I(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: I(e.onSwipeEnd, (u) => {
          const { x: d, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), l(!1);
        })
      }
    ) });
  }
);
P1.displayName = Ys;
var [CJ, SJ] = w1(Ys, {
  onClose() {
  }
}), EJ = c.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      type: r = "foreground",
      duration: o,
      open: a,
      onClose: i,
      onEscapeKeyDown: s,
      onPause: l,
      onResume: u,
      onSwipeStart: d,
      onSwipeMove: f,
      onSwipeCancel: p,
      onSwipeEnd: g,
      ...h
    } = e, v = Gs(Ys, n), [b, y] = c.useState(null), w = te(t, (F) => y(F)), C = c.useRef(null), E = c.useRef(null), S = o || v.duration, P = c.useRef(0), x = c.useRef(S), N = c.useRef(0), { onToastAdd: R, onToastRemove: M } = v, k = fe(() => {
      var H;
      (b == null ? void 0 : b.contains(document.activeElement)) && ((H = v.viewport) == null || H.focus()), i();
    }), B = c.useCallback(
      (F) => {
        !F || F === 1 / 0 || (window.clearTimeout(N.current), P.current = (/* @__PURE__ */ new Date()).getTime(), N.current = window.setTimeout(k, F));
      },
      [k]
    );
    c.useEffect(() => {
      const F = v.viewport;
      if (F) {
        const H = () => {
          B(x.current), u == null || u();
        }, j = () => {
          const W = (/* @__PURE__ */ new Date()).getTime() - P.current;
          x.current = x.current - W, window.clearTimeout(N.current), l == null || l();
        };
        return F.addEventListener(vu, j), F.addEventListener(hu, H), () => {
          F.removeEventListener(vu, j), F.removeEventListener(hu, H);
        };
      }
    }, [v.viewport, S, l, u, B]), c.useEffect(() => {
      a && !v.isClosePausedRef.current && B(S);
    }, [a, S, v.isClosePausedRef, B]), c.useEffect(() => (R(), () => M()), [R, M]);
    const Z = c.useMemo(() => b ? O1(b) : null, [b]);
    return v.viewport ? /* @__PURE__ */ ee(Fe, { children: [
      Z && /* @__PURE__ */ m(
        PJ,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          "aria-atomic": !0,
          children: Z
        }
      ),
      /* @__PURE__ */ m(CJ, { scope: n, onClose: k, children: qr.createPortal(
        /* @__PURE__ */ m(Gf.ItemSlot, { scope: n, children: /* @__PURE__ */ m(
          dJ,
          {
            asChild: !0,
            onEscapeKeyDown: I(s, () => {
              v.isFocusedToastEscapeKeyDownRef.current || k(), v.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ m(
              Y.li,
              {
                role: "status",
                "aria-live": "off",
                "aria-atomic": !0,
                tabIndex: 0,
                "data-state": a ? "open" : "closed",
                "data-swipe-direction": v.swipeDirection,
                ...h,
                ref: w,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: I(e.onKeyDown, (F) => {
                  F.key === "Escape" && (s == null || s(F.nativeEvent), F.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0, k()));
                }),
                onPointerDown: I(e.onPointerDown, (F) => {
                  F.button === 0 && (C.current = { x: F.clientX, y: F.clientY });
                }),
                onPointerMove: I(e.onPointerMove, (F) => {
                  if (!C.current) return;
                  const H = F.clientX - C.current.x, j = F.clientY - C.current.y, W = !!E.current, O = ["left", "right"].includes(v.swipeDirection), V = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max, ne = O ? V(0, H) : 0, q = O ? 0 : V(0, j), A = F.pointerType === "touch" ? 10 : 2, D = { x: ne, y: q }, L = { originalEvent: F, delta: D };
                  W ? (E.current = D, ui(yJ, f, L, {
                    discrete: !1
                  })) : th(D, v.swipeDirection, A) ? (E.current = D, ui(bJ, d, L, {
                    discrete: !1
                  }), F.target.setPointerCapture(F.pointerId)) : (Math.abs(H) > A || Math.abs(j) > A) && (C.current = null);
                }),
                onPointerUp: I(e.onPointerUp, (F) => {
                  const H = E.current, j = F.target;
                  if (j.hasPointerCapture(F.pointerId) && j.releasePointerCapture(F.pointerId), E.current = null, C.current = null, H) {
                    const W = F.currentTarget, O = { originalEvent: F, delta: H };
                    th(H, v.swipeDirection, v.swipeThreshold) ? ui(xJ, g, O, {
                      discrete: !0
                    }) : ui(
                      wJ,
                      p,
                      O,
                      {
                        discrete: !0
                      }
                    ), W.addEventListener("click", (V) => V.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        v.viewport
      ) })
    ] }) : null;
  }
), PJ = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = Gs(Ys, t), [a, i] = c.useState(!1), [s, l] = c.useState(!1);
  return _J(() => i(!0)), c.useEffect(() => {
    const u = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(u);
  }, []), s ? null : /* @__PURE__ */ m(y1, { asChild: !0, children: /* @__PURE__ */ m($a, { ...r, children: a && /* @__PURE__ */ ee(Fe, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, NJ = "ToastTitle", N1 = c.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ m(Y.div, { ...r, ref: t });
  }
);
N1.displayName = NJ;
var RJ = "ToastDescription", R1 = c.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ m(Y.div, { ...r, ref: t });
  }
);
R1.displayName = RJ;
var _1 = "ToastAction", T1 = c.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ m(M1, { altText: n, asChild: !0, children: /* @__PURE__ */ m(Yf, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${_1}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
T1.displayName = _1;
var $1 = "ToastClose", Yf = c.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = SJ($1, n);
    return /* @__PURE__ */ m(M1, { asChild: !0, children: /* @__PURE__ */ m(
      Y.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: I(e.onClick, o.onClose)
      }
    ) });
  }
);
Yf.displayName = $1;
var M1 = c.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ m(
    Y.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function O1(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), TJ(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", a = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const i = r.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(...O1(r));
    }
  }), t;
}
function ui(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Nt(o, a) : o.dispatchEvent(a);
}
var th = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), a = r > o;
  return t === "left" || t === "right" ? a && r > n : !a && o > n;
};
function _J(e = () => {
}) {
  const t = fe(e);
  Ce(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function TJ(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function $J(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Uc(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var MJ = x1, D1 = S1, A1 = P1, I1 = N1, k1 = R1, L1 = T1, F1 = Yf;
const vte = MJ, OJ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  D1,
  {
    ref: n,
    className: $(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      e
    ),
    ...t
  }
));
OJ.displayName = D1.displayName;
const DJ = yn(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), AJ = c.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ m(
  A1,
  {
    ref: r,
    className: $(DJ({ variant: t }), e),
    ...n
  }
));
AJ.displayName = A1.displayName;
const IJ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  L1,
  {
    ref: n,
    className: $(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
IJ.displayName = L1.displayName;
const kJ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  F1,
  {
    ref: n,
    className: $(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ m(_u, { className: "h-4 w-4" })
  }
));
kJ.displayName = F1.displayName;
const LJ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  I1,
  {
    ref: n,
    className: $("text-sm font-semibold", e),
    ...t
  }
));
LJ.displayName = I1.displayName;
const FJ = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  k1,
  {
    ref: n,
    className: $("text-sm opacity-90", e),
    ...t
  }
));
FJ.displayName = k1.displayName;
var BJ = "Toggle", Kf = c.forwardRef((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [i = !1, s] = Me({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ m(
    Y.button,
    {
      type: "button",
      "aria-pressed": i,
      "data-state": i ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...a,
      ref: t,
      onClick: I(e.onClick, () => {
        e.disabled || s(!i);
      })
    }
  );
});
Kf.displayName = BJ;
var B1 = Kf;
const W1 = yn(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), WJ = c.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ m(
  B1,
  {
    ref: o,
    className: $(W1({ variant: t, size: n, className: e })),
    ...r
  }
));
WJ.displayName = B1.displayName;
var Co = "ToggleGroup", [z1, hte] = De(Co, [
  nn
]), H1 = nn(), Xf = T.forwardRef((e, t) => {
  const { type: n, ...r } = e;
  if (n === "single")
    return /* @__PURE__ */ m(zJ, { ...r, ref: t });
  if (n === "multiple")
    return /* @__PURE__ */ m(HJ, { ...r, ref: t });
  throw new Error(`Missing prop \`type\` expected on \`${Co}\``);
});
Xf.displayName = Co;
var [j1, V1] = z1(Co), zJ = T.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = Me({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ m(
    j1,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: i ? [i] : [],
      onItemActivate: s,
      onItemDeactivate: T.useCallback(() => s(""), [s]),
      children: /* @__PURE__ */ m(U1, { ...a, ref: t })
    }
  );
}), HJ = T.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i = [], s] = Me({
    prop: n,
    defaultProp: r,
    onChange: o
  }), l = T.useCallback(
    (d) => s((f = []) => [...f, d]),
    [s]
  ), u = T.useCallback(
    (d) => s((f = []) => f.filter((p) => p !== d)),
    [s]
  );
  return /* @__PURE__ */ m(
    j1,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: i,
      onItemActivate: l,
      onItemDeactivate: u,
      children: /* @__PURE__ */ m(U1, { ...a, ref: t })
    }
  );
});
Xf.displayName = Co;
var [jJ, VJ] = z1(Co), U1 = T.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: n,
      disabled: r = !1,
      rovingFocus: o = !0,
      orientation: a,
      dir: i,
      loop: s = !0,
      ...l
    } = e, u = H1(n), d = Bt(i), f = { role: "group", dir: d, ...l };
    return /* @__PURE__ */ m(jJ, { scope: n, rovingFocus: o, disabled: r, children: o ? /* @__PURE__ */ m(
      Ea,
      {
        asChild: !0,
        ...u,
        orientation: a,
        dir: d,
        loop: s,
        children: /* @__PURE__ */ m(Y.div, { ...f, ref: t })
      }
    ) : /* @__PURE__ */ m(Y.div, { ...f, ref: t }) });
  }
), Ki = "ToggleGroupItem", G1 = T.forwardRef(
  (e, t) => {
    const n = V1(Ki, e.__scopeToggleGroup), r = VJ(Ki, e.__scopeToggleGroup), o = H1(e.__scopeToggleGroup), a = n.value.includes(e.value), i = r.disabled || e.disabled, s = { ...e, pressed: a, disabled: i }, l = T.useRef(null);
    return r.rovingFocus ? /* @__PURE__ */ m(
      Pa,
      {
        asChild: !0,
        ...o,
        focusable: !i,
        active: a,
        ref: l,
        children: /* @__PURE__ */ m(nh, { ...s, ref: t })
      }
    ) : /* @__PURE__ */ m(nh, { ...s, ref: t });
  }
);
G1.displayName = Ki;
var nh = T.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: n, value: r, ...o } = e, a = V1(Ki, n), i = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, s = a.type === "single" ? i : void 0;
    return /* @__PURE__ */ m(
      Kf,
      {
        ...s,
        ...o,
        ref: t,
        onPressedChange: (l) => {
          l ? a.onItemActivate(r) : a.onItemDeactivate(r);
        }
      }
    );
  }
), Y1 = Xf, K1 = G1;
const X1 = c.createContext({
  size: "default",
  variant: "default"
}), UJ = c.forwardRef(({ className: e, variant: t, size: n, children: r, ...o }, a) => /* @__PURE__ */ m(
  Y1,
  {
    ref: a,
    className: $("flex items-center justify-center gap-1", e),
    ...o,
    children: /* @__PURE__ */ m(X1.Provider, { value: { variant: t, size: n }, children: r })
  }
));
UJ.displayName = Y1.displayName;
const GJ = c.forwardRef(({ className: e, children: t, variant: n, size: r, ...o }, a) => {
  const i = c.useContext(X1);
  return /* @__PURE__ */ m(
    K1,
    {
      ref: a,
      className: $(
        W1({
          variant: i.variant || n,
          size: i.size || r
        }),
        e
      ),
      ...o,
      children: t
    }
  );
});
GJ.displayName = K1.displayName;
const gte = ({
  options: e,
  value: t,
  onValueChange: n,
  placeholder: r = "Select model..."
}) => {
  const [o, a] = at(!1), i = e.find((l) => l.value === t), s = e.reduce((l, u) => {
    const d = u.category || "Uncategorized";
    return l[d] || (l[d] = []), l[d].push(u), l;
  }, {});
  return /* @__PURE__ */ ee(xK, { open: o, onOpenChange: a, children: [
    /* @__PURE__ */ m(CK, { asChild: !0, children: /* @__PURE__ */ ee(
      aa,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": o,
        className: "w-full justify-between",
        children: [
          t ? i == null ? void 0 : i.label : r,
          /* @__PURE__ */ m(kN, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ m(NS, { className: "w-full p-0", children: /* @__PURE__ */ ee(_d, { children: [
      /* @__PURE__ */ m(sw, { placeholder: `Search ${r.toLowerCase()}` }),
      /* @__PURE__ */ m(cw, { children: "No model found." }),
      Object.entries(s).map(([l, u]) => /* @__PURE__ */ m(lw, { heading: l, children: u.map((d) => /* @__PURE__ */ ee(
        uw,
        {
          value: d.value,
          onSelect: () => {
            n(d.value), a(!1);
          },
          className: "flex items-center",
          children: [
            /* @__PURE__ */ m(
              Zr,
              {
                className: $(
                  "mr-2 h-4 w-4",
                  t === d.value ? "opacity-100" : "opacity-0"
                )
              }
            ),
            /* @__PURE__ */ ee("div", { children: [
              /* @__PURE__ */ m("div", { children: d.label }),
              d.description && /* @__PURE__ */ m("div", { className: "text-xs text-muted-foreground", children: d.description })
            ] })
          ]
        },
        d.value
      )) }, l))
    ] }) })
  ] });
};
export {
  ZJ as Accordion,
  xR as AccordionContent,
  yR as AccordionItem,
  wR as AccordionTrigger,
  eT as Alert,
  nT as AlertDescription,
  JJ as AlertDialog,
  Z_ as AlertDialogAction,
  Q_ as AlertDialogCancel,
  G_ as AlertDialogContent,
  q_ as AlertDialogDescription,
  K_ as AlertDialogFooter,
  Y_ as AlertDialogHeader,
  Ng as AlertDialogOverlay,
  U_ as AlertDialogPortal,
  X_ as AlertDialogTitle,
  eee as AlertDialogTrigger,
  tT as AlertTitle,
  tee as AspectRatio,
  cT as Avatar,
  uT as AvatarFallback,
  lT as AvatarImage,
  ree as Badge,
  fT as Breadcrumb,
  bT as BreadcrumbEllipsis,
  mT as BreadcrumbItem,
  vT as BreadcrumbLink,
  pT as BreadcrumbList,
  hT as BreadcrumbPage,
  gT as BreadcrumbSeparator,
  aa as Button,
  aO as Calendar,
  iO as Card,
  uO as CardContent,
  lO as CardDescription,
  dO as CardFooter,
  sO as CardHeader,
  cO as CardTitle,
  UO as Carousel,
  GO as CarouselContent,
  YO as CarouselItem,
  XO as CarouselNext,
  KO as CarouselPrevious,
  KH as ChartContainer,
  aee as ChartLegend,
  ZH as ChartLegendContent,
  XH as ChartStyle,
  oee as ChartTooltip,
  qH as ChartTooltipContent,
  rj as Checkbox,
  see as Collapsible,
  lee as CollapsibleContent,
  cee as CollapsibleTrigger,
  _d as Command,
  vee as CommandDialog,
  cw as CommandEmpty,
  lw as CommandGroup,
  sw as CommandInput,
  uw as CommandItem,
  x8 as CommandList,
  C8 as CommandSeparator,
  S8 as CommandShortcut,
  gee as ContextMenu,
  iG as ContextMenuCheckboxItem,
  oG as ContextMenuContent,
  yee as ContextMenuGroup,
  aG as ContextMenuItem,
  cG as ContextMenuLabel,
  wee as ContextMenuPortal,
  Cee as ContextMenuRadioGroup,
  sG as ContextMenuRadioItem,
  lG as ContextMenuSeparator,
  uG as ContextMenuShortcut,
  xee as ContextMenuSub,
  rG as ContextMenuSubContent,
  nG as ContextMenuSubTrigger,
  bee as ContextMenuTrigger,
  v8 as Dialog,
  mee as DialogClose,
  iw as DialogContent,
  w8 as DialogDescription,
  b8 as DialogFooter,
  g8 as DialogHeader,
  aw as DialogOverlay,
  h8 as DialogPortal,
  y8 as DialogTitle,
  pee as DialogTrigger,
  OG as Drawer,
  Eee as DrawerClose,
  AG as DrawerContent,
  FG as DrawerDescription,
  kG as DrawerFooter,
  IG as DrawerHeader,
  ex as DrawerOverlay,
  DG as DrawerPortal,
  LG as DrawerTitle,
  See as DrawerTrigger,
  Nee as DropdownMenu,
  u7 as DropdownMenuCheckboxItem,
  c7 as DropdownMenuContent,
  _ee as DropdownMenuGroup,
  l7 as DropdownMenuItem,
  f7 as DropdownMenuLabel,
  Tee as DropdownMenuPortal,
  Mee as DropdownMenuRadioGroup,
  d7 as DropdownMenuRadioItem,
  p7 as DropdownMenuSeparator,
  m7 as DropdownMenuShortcut,
  $ee as DropdownMenuSub,
  s7 as DropdownMenuSubContent,
  i7 as DropdownMenuSubTrigger,
  Ree as DropdownMenuTrigger,
  Oee as Form,
  W7 as FormControl,
  z7 as FormDescription,
  Dee as FormField,
  F7 as FormItem,
  B7 as FormLabel,
  H7 as FormMessage,
  kee as HoverCard,
  a9 as HoverCardContent,
  Lee as HoverCardTrigger,
  Qx as Input,
  w9 as InputOTP,
  x9 as InputOTPGroup,
  S9 as InputOTPSeparator,
  C9 as InputOTPSlot,
  Ix as Label,
  Y9 as Menubar,
  J9 as MenubarCheckboxItem,
  Z9 as MenubarContent,
  Wee as MenubarGroup,
  Q9 as MenubarItem,
  tY as MenubarLabel,
  Bee as MenubarMenu,
  zee as MenubarPortal,
  jee as MenubarRadioGroup,
  eY as MenubarRadioItem,
  nY as MenubarSeparator,
  rY as MenubarShortcut,
  Hee as MenubarSub,
  q9 as MenubarSubContent,
  X9 as MenubarSubTrigger,
  K9 as MenubarTrigger,
  gte as ModelSelector,
  TY as NavigationMenu,
  DY as NavigationMenuContent,
  AY as NavigationMenuIndicator,
  Uee as NavigationMenuItem,
  Gee as NavigationMenuLink,
  $Y as NavigationMenuList,
  OY as NavigationMenuTrigger,
  aS as NavigationMenuViewport,
  IY as Pagination,
  kY as PaginationContent,
  WY as PaginationEllipsis,
  LY as PaginationItem,
  Ef as PaginationLink,
  BY as PaginationNext,
  FY as PaginationPrevious,
  xK as Popover,
  NS as PopoverContent,
  CK as PopoverTrigger,
  $K as Progress,
  zK as RadioGroup,
  HK as RadioGroupItem,
  Qee as ResizableHandle,
  Zee as ResizablePanel,
  qee as ResizablePanelGroup,
  OX as ScrollArea,
  RE as ScrollBar,
  tte as Select,
  _q as SelectContent,
  nte as SelectGroup,
  $q as SelectItem,
  Tq as SelectLabel,
  wP as SelectScrollDownButton,
  yP as SelectScrollUpButton,
  Mq as SelectSeparator,
  Rq as SelectTrigger,
  rte as SelectValue,
  SP as Separator,
  Iq as Sheet,
  ate as SheetClose,
  PP as SheetContent,
  zq as SheetDescription,
  Bq as SheetFooter,
  Fq as SheetHeader,
  EP as SheetOverlay,
  kq as SheetPortal,
  Wq as SheetTitle,
  ote as SheetTrigger,
  CZ as Sidebar,
  $Z as SidebarContent,
  _Z as SidebarFooter,
  MZ as SidebarGroup,
  DZ as SidebarGroupAction,
  AZ as SidebarGroupContent,
  OZ as SidebarGroupLabel,
  RZ as SidebarHeader,
  NZ as SidebarInput,
  PZ as SidebarInset,
  IZ as SidebarMenu,
  BZ as SidebarMenuAction,
  WZ as SidebarMenuBadge,
  FZ as SidebarMenuButton,
  kZ as SidebarMenuItem,
  zZ as SidebarMenuSkeleton,
  HZ as SidebarMenuSub,
  VZ as SidebarMenuSubButton,
  jZ as SidebarMenuSubItem,
  xZ as SidebarProvider,
  EZ as SidebarRail,
  TZ as SidebarSeparator,
  SZ as SidebarTrigger,
  qv as Skeleton,
  lQ as Slider,
  jQ as Switch,
  VQ as Table,
  GQ as TableBody,
  ZQ as TableCaption,
  qQ as TableCell,
  YQ as TableFooter,
  XQ as TableHead,
  UQ as TableHeader,
  KQ as TableRow,
  pte as Tabs,
  rJ as TabsContent,
  tJ as TabsList,
  nJ as TabsTrigger,
  oJ as Textarea,
  AJ as Toast,
  IJ as ToastAction,
  kJ as ToastClose,
  FJ as ToastDescription,
  vte as ToastProvider,
  LJ as ToastTitle,
  OJ as ToastViewport,
  ute as Toaster,
  WJ as Toggle,
  UJ as ToggleGroup,
  GJ as ToggleGroupItem,
  pZ as Tooltip,
  IP as TooltipContent,
  fZ as TooltipProvider,
  mZ as TooltipTrigger,
  dT as badgeVariants,
  Lr as buttonVariants,
  $ as cn,
  MY as navigationMenuTriggerStyle,
  lte as toast,
  W1 as toggleVariants,
  Ns as useFormField,
  Vs as useSidebar
};

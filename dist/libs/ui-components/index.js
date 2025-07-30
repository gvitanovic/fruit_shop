var Hr = (e) => {
  throw TypeError(e);
};
var dr = (e, t, r) => t.has(e) || Hr("Cannot " + r);
var m = (e, t, r) => (dr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), I = (e, t, r) => t.has(e) ? Hr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), O = (e, t, r, s) => (dr(e, t, "write to private field"), s ? s.call(e, r) : t.set(e, r), r), de = (e, t, r) => (dr(e, t, "access private method"), r);
var Tt = (e, t, r, s) => ({
  set _(n) {
    O(e, t, n, r);
  },
  get _() {
    return m(e, t, s);
  }
});
import * as Qt from "react";
import we, { forwardRef as Jt, useState as Re, useEffect as Xt, Component as Hs } from "react";
import { createPortal as Un } from "react-dom";
import { AlertTriangle as Gs, RefreshCw as er, Home as Ys, X as Js, Search as Ln, ShoppingCart as Nr, Package as Xs, User as Mn, Eye as qn, Minus as Qn, Plus as Bn, Trash2 as Wn, CheckCircle as Kn } from "lucide-react";
import { useDebounce as Hn } from "use-debounce";
import { useProductSuggestions as Gn, useCart as Er, useAddToCart as Yn, useRemoveFromCart as Jn, useFilteredProducts as Xn, useUpdatePassword as ei } from "@fruit-shop/hooks";
import Gr from "next/link";
import { usePathname as ti, useSearchParams as ri } from "next/navigation";
import { ProductService as Yr, CartService as si, PasswordService as Jr } from "@fruit-shop/domain";
import pr from "next/image";
var gr = { exports: {} }, wt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xr;
function ni() {
  if (Xr) return wt;
  Xr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(s, n, i) {
    var o = null;
    if (i !== void 0 && (o = "" + i), n.key !== void 0 && (o = "" + n.key), "key" in n) {
      i = {};
      for (var c in n)
        c !== "key" && (i[c] = n[c]);
    } else i = n;
    return n = i.ref, {
      $$typeof: e,
      type: s,
      key: o,
      ref: n !== void 0 ? n : null,
      props: i
    };
  }
  return wt.Fragment = t, wt.jsx = r, wt.jsxs = r, wt;
}
var _t = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var es;
function ii() {
  return es || (es = 1, process.env.NODE_ENV !== "production" && function() {
    function e(v) {
      if (v == null) return null;
      if (typeof v == "function")
        return v.$$typeof === ce ? null : v.displayName || v.name || null;
      if (typeof v == "string") return v;
      switch (v) {
        case x:
          return "Fragment";
        case S:
          return "Profiler";
        case z:
          return "StrictMode";
        case Z:
          return "Suspense";
        case Y:
          return "SuspenseList";
        case T:
          return "Activity";
      }
      if (typeof v == "object")
        switch (typeof v.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), v.$$typeof) {
          case N:
            return "Portal";
          case $:
            return (v.displayName || "Context") + ".Provider";
          case w:
            return (v._context.displayName || "Context") + ".Consumer";
          case C:
            var R = v.render;
            return v = v.displayName, v || (v = R.displayName || R.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
          case ne:
            return R = v.displayName || null, R !== null ? R : e(v.type) || "Memo";
          case ge:
            R = v._payload, v = v._init;
            try {
              return e(v(R));
            } catch {
            }
        }
      return null;
    }
    function t(v) {
      return "" + v;
    }
    function r(v) {
      try {
        t(v);
        var R = !1;
      } catch {
        R = !0;
      }
      if (R) {
        R = console;
        var Q = R.error, re = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return Q.call(
          R,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          re
        ), t(v);
      }
    }
    function s(v) {
      if (v === x) return "<>";
      if (typeof v == "object" && v !== null && v.$$typeof === ge)
        return "<...>";
      try {
        var R = e(v);
        return R ? "<" + R + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var v = ue.A;
      return v === null ? null : v.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(v) {
      if (D.call(v, "key")) {
        var R = Object.getOwnPropertyDescriptor(v, "key").get;
        if (R && R.isReactWarning) return !1;
      }
      return v.key !== void 0;
    }
    function c(v, R) {
      function Q() {
        ie || (ie = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          R
        ));
      }
      Q.isReactWarning = !0, Object.defineProperty(v, "key", {
        get: Q,
        configurable: !0
      });
    }
    function h() {
      var v = e(this.type);
      return le[v] || (le[v] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), v = this.props.ref, v !== void 0 ? v : null;
    }
    function p(v, R, Q, re, Ee, be, xt, Ge) {
      return Q = be.ref, v = {
        $$typeof: j,
        type: v,
        key: R,
        props: be,
        _owner: Ee
      }, (Q !== void 0 ? Q : null) !== null ? Object.defineProperty(v, "ref", {
        enumerable: !1,
        get: h
      }) : Object.defineProperty(v, "ref", { enumerable: !1, value: null }), v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(v, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(v, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: xt
      }), Object.defineProperty(v, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ge
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    }
    function b(v, R, Q, re, Ee, be, xt, Ge) {
      var se = R.children;
      if (se !== void 0)
        if (re)
          if (V(se)) {
            for (re = 0; re < se.length; re++)
              y(se[re]);
            Object.freeze && Object.freeze(se);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(se);
      if (D.call(R, "key")) {
        se = e(v);
        var ze = Object.keys(R).filter(function(cr) {
          return cr !== "key";
        });
        re = 0 < ze.length ? "{key: someKey, " + ze.join(": ..., ") + ": ...}" : "{key: someKey}", De[se + re] || (ze = 0 < ze.length ? "{" + ze.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          re,
          se,
          ze,
          se
        ), De[se + re] = !0);
      }
      if (se = null, Q !== void 0 && (r(Q), se = "" + Q), o(R) && (r(R.key), se = "" + R.key), "key" in R) {
        Q = {};
        for (var Ye in R)
          Ye !== "key" && (Q[Ye] = R[Ye]);
      } else Q = R;
      return se && c(
        Q,
        typeof v == "function" ? v.displayName || v.name || "Unknown" : v
      ), p(
        v,
        se,
        be,
        Ee,
        n(),
        Q,
        xt,
        Ge
      );
    }
    function y(v) {
      typeof v == "object" && v !== null && v.$$typeof === j && v._store && (v._store.validated = 1);
    }
    var l = we, j = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), $ = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), Y = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), ge = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), ce = Symbol.for("react.client.reference"), ue = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, V = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    l = {
      "react-stack-bottom-frame": function(v) {
        return v();
      }
    };
    var ie, le = {}, ve = l["react-stack-bottom-frame"].bind(
      l,
      i
    )(), Ue = q(s(i)), De = {};
    _t.Fragment = x, _t.jsx = function(v, R, Q, re, Ee) {
      var be = 1e4 > ue.recentlyCreatedOwnerStacks++;
      return b(
        v,
        R,
        Q,
        !1,
        re,
        Ee,
        be ? Error("react-stack-top-frame") : ve,
        be ? q(s(v)) : Ue
      );
    }, _t.jsxs = function(v, R, Q, re, Ee) {
      var be = 1e4 > ue.recentlyCreatedOwnerStacks++;
      return b(
        v,
        R,
        Q,
        !0,
        re,
        Ee,
        be ? Error("react-stack-top-frame") : ve,
        be ? q(s(v)) : Ue
      );
    };
  }()), _t;
}
process.env.NODE_ENV === "production" ? gr.exports = ni() : gr.exports = ii();
var a = gr.exports;
function en(e) {
  var t, r, s = "";
  if (typeof e == "string" || typeof e == "number") s += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (r = en(e[t])) && (s && (s += " "), s += r);
  } else for (r in e) e[r] && (s && (s += " "), s += r);
  return s;
}
function ct() {
  for (var e, t, r = 0, s = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = en(e)) && (s && (s += " "), s += t);
  return s;
}
const ts = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, rs = ct, oi = (e, t) => (r) => {
  var s;
  if ((t == null ? void 0 : t.variants) == null) return rs(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: n, defaultVariants: i } = t, o = Object.keys(n).map((p) => {
    const b = r == null ? void 0 : r[p], y = i == null ? void 0 : i[p];
    if (b === null) return null;
    const l = ts(b) || ts(y);
    return n[p][l];
  }), c = r && Object.entries(r).reduce((p, b) => {
    let [y, l] = b;
    return l === void 0 || (p[y] = l), p;
  }, {}), h = t == null || (s = t.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((p, b) => {
    let { class: y, className: l, ...j } = b;
    return Object.entries(j).every((N) => {
      let [x, z] = N;
      return Array.isArray(z) ? z.includes({
        ...i,
        ...c
      }[x]) : {
        ...i,
        ...c
      }[x] === z;
    }) ? [
      ...p,
      y,
      l
    ] : p;
  }, []);
  return rs(e, o, h, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, ai = oi(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background select-none",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600",
        secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
        destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600",
        outline: "border border-gray-300 bg-transparent hover:bg-gray-50 focus:ring-gray-500",
        ghost: "hover:bg-gray-100 focus:ring-gray-500"
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-6 text-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), ee = Jt(
  ({ className: e, variant: t, size: r, ...s }, n) => /* @__PURE__ */ a.jsx(
    "button",
    {
      className: ct(ai({ variant: t, size: r, className: e })),
      ref: n,
      ...s
    }
  )
);
ee.displayName = "Button";
const it = Jt(
  ({ className: e, type: t = "text", error: r, label: s, id: n, ...i }, o) => {
    const c = n || `input-${Math.random().toString(36).substr(2, 9)}`, h = r ? `${c}-error` : void 0;
    return /* @__PURE__ */ a.jsxs("div", { className: "w-full", children: [
      s && /* @__PURE__ */ a.jsx(
        "label",
        {
          htmlFor: c,
          className: "block text-sm font-medium text-gray-700 mb-1",
          children: s
        }
      ),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          id: c,
          type: t,
          className: ct(
            "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
            r && "border-red-500 focus:ring-red-600",
            e
          ),
          "aria-invalid": r ? "true" : "false",
          "aria-describedby": h,
          ref: o,
          ...i
        }
      ),
      r && /* @__PURE__ */ a.jsx(
        "p",
        {
          id: h,
          role: "alert",
          "aria-live": "polite",
          className: "mt-1 text-sm text-red-600",
          children: r
        }
      )
    ] });
  }
);
it.displayName = "Input";
const dt = Jt(({ className: e, ...t }, r) => /* @__PURE__ */ a.jsx(
  "label",
  {
    ref: r,
    className: ct(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      e
    ),
    ...t
  }
));
dt.displayName = "Label";
const yr = ({ className: e, variant: t = "default", ...r }) => {
  const s = {
    default: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800"
  };
  return /* @__PURE__ */ a.jsx(
    "span",
    {
      className: ct(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        "border border-current border-opacity-20",
        // Add border for better contrast
        s[t],
        e
      ),
      role: r.role || "status",
      ...r
    }
  );
}, tn = ({ className: e, size: t = "md", ...r }) => {
  const s = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: ct(
        "animate-spin rounded-full border-2 border-gray-300 border-t-blue-600",
        s[t],
        e
      ),
      ...r
    }
  );
}, rn = Jt(
  ({ className: e, error: t, children: r, ...s }, n) => /* @__PURE__ */ a.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ a.jsx(
      "select",
      {
        className: ct(
          "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          t && "border-red-500 focus-visible:ring-red-500",
          e
        ),
        ref: n,
        ...s,
        children: r
      }
    ),
    t && /* @__PURE__ */ a.jsx("p", { className: "mt-1 text-sm text-red-600", children: t })
  ] })
);
rn.displayName = "Select";
const ci = ({ children: e }) => {
  const [t, r] = Re(!1), [s, n] = Re(null);
  return Xt(() => {
    r(!0);
    let i = document.getElementById("portal-root");
    return i || (i = document.createElement("div"), i.id = "portal-root", document.body.appendChild(i)), n(i), () => r(!1);
  }, []), !t || !s ? null : Un(e, s);
};
class sn extends Hs {
  constructor(t) {
    super(t), this.handleRetry = () => {
      this.setState({ hasError: !1, error: void 0, errorInfo: void 0 });
    }, this.handleGoHome = () => {
      window.location.href = "/";
    }, this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(t) {
    return {
      hasError: !0,
      error: t
    };
  }
  componentDidCatch(t, r) {
    console.error("ErrorBoundary caught an error:", t, r), this.setState({
      error: t,
      errorInfo: r
    });
  }
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ a.jsx("div", { className: "min-h-[400px] flex items-center justify-center p-6", children: /* @__PURE__ */ a.jsxs("div", { className: "text-center space-y-6 max-w-md", children: [
      /* @__PURE__ */ a.jsx("div", { className: "w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto", children: /* @__PURE__ */ a.jsx(Gs, { className: "w-8 h-8 text-red-600" }) }),
      /* @__PURE__ */ a.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ a.jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Something went wrong" }),
        /* @__PURE__ */ a.jsx("p", { className: "text-gray-600", children: "We're sorry, but something unexpected happened. Please try refreshing the page or go back to the homepage." })
      ] }),
      this.props.showDetails && this.state.error && /* @__PURE__ */ a.jsxs("details", { className: "text-left bg-gray-100 p-4 rounded-lg", children: [
        /* @__PURE__ */ a.jsx("summary", { className: "cursor-pointer text-sm font-medium text-gray-700 mb-2", children: "Error Details" }),
        /* @__PURE__ */ a.jsxs("pre", { className: "text-xs text-red-600 whitespace-pre-wrap overflow-auto", children: [
          this.state.error.message,
          this.state.error.stack
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
        /* @__PURE__ */ a.jsxs(ee, { onClick: this.handleRetry, variant: "outline", children: [
          /* @__PURE__ */ a.jsx(er, { className: "w-4 h-4 mr-2" }),
          "Try Again"
        ] }),
        /* @__PURE__ */ a.jsxs(ee, { onClick: this.handleGoHome, children: [
          /* @__PURE__ */ a.jsx(Ys, { className: "w-4 h-4 mr-2" }),
          "Go Home"
        ] })
      ] })
    ] }) }) : this.props.children;
  }
}
const ui = ({ isOpen: e, onClose: t, title: r, children: s, size: n = "md" }) => {
  if (Xt(() => {
    const o = (c) => {
      c.key === "Escape" && t();
    };
    if (e) {
      document.addEventListener("keydown", o), document.body.style.overflow = "hidden";
      const c = document.getElementById("modal-dialog");
      c && c.focus();
    }
    return () => {
      document.removeEventListener("keydown", o), document.body.style.overflow = "unset";
    };
  }, [e, t]), !e)
    return null;
  const i = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl"
  };
  return /* @__PURE__ */ a.jsx(ci, { children: /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": r ? "modal-title" : void 0,
      children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "absolute inset-0 bg-black bg-opacity-50",
            onClick: t,
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            id: "modal-dialog",
            className: `relative bg-white rounded-lg shadow-lg w-full ${i[n]} max-h-[90vh] overflow-hidden focus:outline-none`,
            tabIndex: -1,
            children: [
              r && /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between p-6 border-b", children: [
                /* @__PURE__ */ a.jsx(
                  "h2",
                  {
                    id: "modal-title",
                    className: "text-xl font-semibold",
                    children: r
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  ee,
                  {
                    variant: "ghost",
                    size: "sm",
                    onClick: t,
                    className: "p-1 h-auto",
                    "aria-label": "Close dialog",
                    children: /* @__PURE__ */ a.jsx(Js, { className: "w-5 h-5", "aria-hidden": "true" })
                  }
                )
              ] }),
              /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: "overflow-y-auto max-h-[calc(90vh-140px)]",
                  role: "document",
                  children: s
                }
              )
            ]
          }
        )
      ]
    }
  ) });
}, li = ({ onSearch: e, placeholder: t = "Search products..." }) => {
  const [r, s] = Re(""), [n, i] = Re(!1), [o, c] = Re(-1), [h] = Hn(r, 300), { data: p = [], isLoading: b } = Gn(
    h,
    n && h.length > 2
  ), y = "search-combobox", l = "search-listbox", j = (S) => {
    S.preventDefault(), r.trim() && (e(r.trim()), i(!1), c(-1));
  }, N = (S) => {
    s(S), e(S), i(!1), c(-1);
  }, x = () => {
    s(""), e(""), i(!1), c(-1);
  }, z = (S) => {
    if (!(!n || p.length === 0))
      switch (S.key) {
        case "ArrowDown":
          S.preventDefault(), c(
            (w) => w < p.length - 1 ? w + 1 : 0
          );
          break;
        case "ArrowUp":
          S.preventDefault(), c(
            (w) => w > 0 ? w - 1 : p.length - 1
          );
          break;
        case "Enter":
          S.preventDefault(), o >= 0 ? N(p[o]) : r.trim() && j(S);
          break;
        case "Escape":
          i(!1), c(-1);
          break;
      }
  };
  return Xt(() => {
    const S = (w) => {
      w.target.closest("[data-search-container]") || i(!1);
    };
    return document.addEventListener("click", S), () => document.removeEventListener("click", S);
  }, []), /* @__PURE__ */ a.jsxs("div", { className: "relative w-full max-w-md", "data-search-container": !0, children: [
    /* @__PURE__ */ a.jsxs("form", { onSubmit: j, className: "flex", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ a.jsx(
          it,
          {
            id: y,
            value: r,
            onChange: (S) => {
              s(S.target.value), i(!0), c(-1);
            },
            onKeyDown: z,
            placeholder: t,
            className: "pr-8",
            onFocus: () => r.length > 2 && i(!0),
            role: "combobox",
            "aria-expanded": n && p.length > 0,
            "aria-haspopup": "listbox",
            "aria-owns": l,
            "aria-activedescendant": o >= 0 ? `suggestion-${o}` : void 0,
            "aria-autocomplete": "list",
            "aria-label": "Search for products"
          }
        ),
        r && /* @__PURE__ */ a.jsx(
          ee,
          {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: x,
            className: "absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0",
            "aria-label": "Clear search",
            children: /* @__PURE__ */ a.jsx(Js, { className: "w-4 h-4", "aria-hidden": "true" })
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs(
        ee,
        {
          type: "submit",
          className: "ml-2",
          "aria-label": "Search",
          children: [
            /* @__PURE__ */ a.jsx(Ln, { className: "w-4 h-4", "aria-hidden": "true" }),
            /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: "Search" })
          ]
        }
      )
    ] }),
    n && r.length > 2 && /* @__PURE__ */ a.jsx(
      "div",
      {
        id: l,
        role: "listbox",
        "aria-label": "Search suggestions",
        className: "absolute top-full left-0 right-0 z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
        children: b ? /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "p-3 text-center text-gray-500",
            role: "status",
            "aria-live": "polite",
            children: "Loading suggestions..."
          }
        ) : p.length > 0 ? p.map((S, w) => /* @__PURE__ */ a.jsx(
          "button",
          {
            id: `suggestion-${w}`,
            onClick: () => N(S),
            className: `w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${w === o ? "bg-gray-100" : ""}`,
            role: "option",
            "aria-selected": w === o,
            children: S
          },
          w
        )) : /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "p-3 text-center text-gray-500",
            role: "status",
            children: "No suggestions found"
          }
        )
      }
    )
  ] });
}, di = ({ strength: e }) => {
  const t = (s) => s < 50 ? "bg-red-500" : s < 80 ? "bg-yellow-500" : "bg-green-500", r = (s) => s < 50 ? "Weak" : s < 80 ? "Medium" : "Strong";
  return /* @__PURE__ */ a.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex justify-between text-sm", children: [
        /* @__PURE__ */ a.jsx("span", { children: "Password Strength" }),
        /* @__PURE__ */ a.jsx("span", { className: "font-medium", children: r(e.percentage) })
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "h-2 bg-gray-200 rounded-full overflow-hidden", children: /* @__PURE__ */ a.jsx(
        "div",
        {
          className: `h-full transition-all duration-300 ${t(e.percentage)}`,
          style: { width: `${e.percentage}%` }
        }
      ) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ a.jsx("div", { className: "text-sm font-medium text-gray-700", children: "Requirements:" }),
      e.rules.map((s, n) => /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-2 text-sm", children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `w-4 h-4 rounded-full flex items-center justify-center ${s.met ? "bg-green-500 text-white" : "bg-gray-300"}`,
            children: s.met && /* @__PURE__ */ a.jsx("span", { className: "text-xs", children: "✓" })
          }
        ),
        /* @__PURE__ */ a.jsx("span", { className: s.met ? "text-green-700" : "text-gray-600", children: s.name })
      ] }, n))
    ] })
  ] });
}, fi = () => /* @__PURE__ */ a.jsxs("div", { className: "bg-white rounded-lg shadow-md p-8 text-center space-y-4", children: [
  /* @__PURE__ */ a.jsx("div", { className: "w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto", children: /* @__PURE__ */ a.jsx(Nr, { className: "w-8 h-8 text-red-600" }) }),
  /* @__PURE__ */ a.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ a.jsx("h2", { className: "text-xl font-bold text-gray-900", children: "Cart Error" }),
    /* @__PURE__ */ a.jsx("p", { className: "text-gray-600", children: "We're having trouble loading your cart. Please try again." })
  ] }),
  /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
    /* @__PURE__ */ a.jsxs(
      ee,
      {
        variant: "outline",
        onClick: () => window.location.reload(),
        children: [
          /* @__PURE__ */ a.jsx(er, { className: "w-4 h-4 mr-2" }),
          "Refresh Cart"
        ]
      }
    ),
    /* @__PURE__ */ a.jsx(ee, { onClick: () => window.location.href = "/products", children: "Continue Shopping" })
  ] })
] }), ll = ({ children: e }) => /* @__PURE__ */ a.jsx(sn, { fallback: /* @__PURE__ */ a.jsx(fi, {}), children: e }), hi = () => /* @__PURE__ */ a.jsxs("div", { className: "bg-white rounded-lg shadow-md p-6 text-center space-y-4", children: [
  /* @__PURE__ */ a.jsx("div", { className: "w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto", children: /* @__PURE__ */ a.jsx(Xs, { className: "w-6 h-6 text-red-600" }) }),
  /* @__PURE__ */ a.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ a.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Product Loading Error" }),
    /* @__PURE__ */ a.jsx("p", { className: "text-sm text-gray-600", children: "Unable to load product information. Please try refreshing the page." })
  ] }),
  /* @__PURE__ */ a.jsxs(
    ee,
    {
      size: "sm",
      variant: "outline",
      onClick: () => window.location.reload(),
      children: [
        /* @__PURE__ */ a.jsx(er, { className: "w-4 h-4 mr-2" }),
        "Retry"
      ]
    }
  )
] }), mi = ({ children: e }) => /* @__PURE__ */ a.jsx(sn, { fallback: /* @__PURE__ */ a.jsx(hi, {}), children: e }), pi = () => {
  const e = ti(), { data: t } = Er(), r = [
    { href: "/products", label: "Products", icon: Xs },
    { href: "/cart", label: "Cart", icon: Nr },
    { href: "/profile", label: "Profile", icon: Mn }
  ];
  return /* @__PURE__ */ a.jsx(
    "header",
    {
      role: "banner",
      className: "bg-white shadow-sm border-b",
      "aria-label": "Site header",
      children: /* @__PURE__ */ a.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between h-16", children: [
        /* @__PURE__ */ a.jsx(
          Gr,
          {
            href: "/",
            className: "font-bold text-xl text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded",
            "aria-label": "FruitShop home page",
            children: "FruitShop"
          }
        ),
        /* @__PURE__ */ a.jsx(
          "nav",
          {
            role: "navigation",
            "aria-label": "Main navigation",
            className: "flex items-center space-x-4",
            children: r.map(({ href: s, label: n, icon: i }) => {
              const o = e === s, c = s === "/cart", h = (t == null ? void 0 : t.totalItems) || 0;
              return /* @__PURE__ */ a.jsxs(
                Gr,
                {
                  href: s,
                  className: `flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${o ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"}`,
                  "aria-label": c && h > 0 ? `${n} (${h} items)` : n,
                  "aria-current": o ? "page" : void 0,
                  children: [
                    /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ a.jsx(i, { className: "w-4 h-4", "aria-hidden": "true" }),
                      c && h > 0 && /* @__PURE__ */ a.jsx(
                        yr,
                        {
                          variant: "danger",
                          className: "absolute -top-2 -right-10 min-w-[1.2rem] h-4 text-xs flex items-center justify-center p-0 transform translate-x-1/2 -translate-y-1/2",
                          "aria-label": `${h} items in cart`,
                          children: h
                        }
                      )
                    ] }),
                    /* @__PURE__ */ a.jsx("span", { children: n })
                  ]
                },
                s
              );
            })
          }
        )
      ] }) })
    }
  );
}, gi = ({ product: e }) => {
  const [t, r] = Re(e.packageSize), [s, n] = Re(!1), { data: i } = Er(), { mutate: o, isPending: c } = Yn(), h = Yr.calculateDiscountedPrice(e.price, e.discount), p = i ? si.getItemQuantityInCart(i, e.id) : 0, b = e.stock - p, y = Yr.isValidQuantity(t, e.packageSize), l = y && t <= b && b > 0, j = (S) => {
    const w = parseInt(S) || 0;
    r(w);
  }, N = () => {
    l && o({
      productId: e.id,
      productName: e.name,
      price: h,
      quantity: t,
      image: e.image,
      packageSize: e.packageSize
    });
  }, x = () => {
    const S = t + e.packageSize;
    S <= b && r(S);
  }, z = () => {
    const S = t - e.packageSize;
    S >= e.packageSize && r(S);
  };
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs(
      "article",
      {
        className: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2",
        "aria-labelledby": `product-title-${e.id}`,
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ a.jsx(
              pr,
              {
                src: e.image,
                alt: `${e.name} - Fresh fruit available in ${e.colors.join(", ")} colors`,
                width: 400,
                height: 300,
                className: "w-full h-48 object-cover",
                priority: !1
              }
            ),
            e.discount > 0 && /* @__PURE__ */ a.jsxs(
              yr,
              {
                variant: "danger",
                className: "absolute top-2 right-2",
                "aria-label": `${e.discount}% discount`,
                children: [
                  e.discount,
                  "% OFF"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "p-4 space-y-3", children: [
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx(
                "h3",
                {
                  id: `product-title-${e.id}`,
                  className: "font-semibold text-lg",
                  children: e.name
                }
              ),
              /* @__PURE__ */ a.jsx("div", { className: "flex items-center space-x-2 mt-1", "aria-label": "Available colors", children: e.colors.map((S) => /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: `w-4 h-4 rounded-full ${S === "green" ? "bg-green-500" : S === "orange" ? "bg-orange-500" : "bg-yellow-500"}`,
                  "aria-label": `${S} color option`,
                  role: "img"
                },
                S
              )) })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-2", "aria-label": "Price information", children: [
                /* @__PURE__ */ a.jsxs("span", { className: "text-lg font-bold", children: [
                  "$",
                  h.toFixed(2)
                ] }),
                e.discount > 0 && /* @__PURE__ */ a.jsxs("span", { className: "text-sm text-gray-500 line-through", children: [
                  "$",
                  e.price.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ a.jsx(
                ee,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => n(!0),
                  "aria-label": `View details for ${e.name}`,
                  children: /* @__PURE__ */ a.jsx(qn, { className: "w-4 h-4", "aria-hidden": "true" })
                }
              )
            ] }),
            /* @__PURE__ */ a.jsxs("div", { className: "text-sm text-gray-600", "aria-label": "Product information", children: [
              /* @__PURE__ */ a.jsxs("p", { children: [
                "Stock: ",
                /* @__PURE__ */ a.jsx("span", { "aria-label": `${b} units available`, children: b })
              ] }),
              /* @__PURE__ */ a.jsxs("p", { children: [
                "Package: ",
                /* @__PURE__ */ a.jsxs("span", { "aria-label": `Sold in packages of ${e.packageSize} units`, children: [
                  e.packageSize,
                  " units"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ a.jsxs("fieldset", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ a.jsx("legend", { className: "sr-only", children: "Select quantity" }),
              /* @__PURE__ */ a.jsx(
                ee,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: z,
                  disabled: t <= e.packageSize,
                  "aria-label": `Decrease quantity by ${e.packageSize}`,
                  children: "-"
                }
              ),
              /* @__PURE__ */ a.jsx(
                it,
                {
                  type: "number",
                  value: t,
                  onChange: (S) => j(S.target.value),
                  className: "w-20 text-center",
                  min: e.packageSize,
                  step: e.packageSize,
                  "aria-label": "Quantity",
                  "aria-describedby": `quantity-help-${e.id}`
                }
              ),
              /* @__PURE__ */ a.jsx(
                ee,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: x,
                  disabled: t + e.packageSize > b,
                  "aria-label": `Increase quantity by ${e.packageSize}`,
                  children: "+"
                }
              ),
              /* @__PURE__ */ a.jsxs(
                "div",
                {
                  id: `quantity-help-${e.id}`,
                  className: "sr-only",
                  children: [
                    "Quantity must be in multiples of ",
                    e.packageSize,
                    ". Available stock: ",
                    b
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ a.jsxs(
              ee,
              {
                onClick: N,
                disabled: !l || c,
                className: "w-full",
                "aria-describedby": y ? void 0 : `quantity-error-${e.id}`,
                children: [
                  /* @__PURE__ */ a.jsx(Nr, { className: "w-4 h-4 mr-2", "aria-hidden": "true" }),
                  c ? "Adding to cart..." : `Add ${t} ${t === 1 ? "unit" : "units"} to Cart`
                ]
              }
            ),
            !y && /* @__PURE__ */ a.jsxs(
              "p",
              {
                id: `quantity-error-${e.id}`,
                role: "alert",
                className: "text-sm text-red-600",
                children: [
                  "Quantity must be a multiple of ",
                  e.packageSize
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ a.jsx(
      ui,
      {
        isOpen: s,
        onClose: () => n(!1),
        title: `${e.name} - Product Details`,
        size: "lg",
        children: /* @__PURE__ */ a.jsxs("div", { className: "p-6 space-y-4", children: [
          /* @__PURE__ */ a.jsx(
            pr,
            {
              src: e.image,
              alt: `Detailed view of ${e.name} - Fresh fruit`,
              width: 600,
              height: 400,
              className: "w-full h-64 object-cover rounded-lg"
            }
          ),
          /* @__PURE__ */ a.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ a.jsx("h3", { className: "text-2xl font-bold", children: e.name }),
              /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-2", "aria-label": "Price information", children: [
                /* @__PURE__ */ a.jsxs("span", { className: "text-2xl font-bold", children: [
                  "$",
                  h.toFixed(2)
                ] }),
                e.discount > 0 && /* @__PURE__ */ a.jsxs("span", { className: "text-lg text-gray-500 line-through", "aria-label": `Original price $${e.price.toFixed(2)}`, children: [
                  "$",
                  e.price.toFixed(2)
                ] })
              ] })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ a.jsx("span", { className: "font-medium", children: "Available colors:" }),
                e.colors.map((S) => /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    className: `w-6 h-6 rounded-full ${S === "green" ? "bg-green-500" : S === "orange" ? "bg-orange-500" : "bg-yellow-500"}`,
                    "aria-label": `${S} color option`,
                    role: "img"
                  },
                  S
                ))
              ] }),
              e.discount > 0 && /* @__PURE__ */ a.jsxs(
                yr,
                {
                  variant: "danger",
                  "aria-label": `${e.discount}% discount applied`,
                  children: [
                    e.discount,
                    "% OFF"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [
              /* @__PURE__ */ a.jsxs("div", { children: [
                /* @__PURE__ */ a.jsx("span", { className: "font-medium", children: "Stock:" }),
                " ",
                e.stock,
                " units"
              ] }),
              /* @__PURE__ */ a.jsxs("div", { children: [
                /* @__PURE__ */ a.jsx("span", { className: "font-medium", children: "Package Size:" }),
                " ",
                e.packageSize,
                " units"
              ] })
            ] }),
            /* @__PURE__ */ a.jsx("p", { className: "text-gray-700", children: e.description })
          ] })
        ] })
      }
    )
  ] });
}, yi = ({ filters: e, onFiltersChange: t }) => {
  const r = [
    { value: "green", label: "Green" },
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" }
  ], s = [
    { value: "name-asc", label: "Alphabetically (A-Z)" },
    { value: "name-desc", label: "Alphabetically (Z-A)" },
    { value: "price-asc", label: "Price (Low-High)" },
    { value: "price-desc", label: "Price (High-Low)" },
    { value: "discount-desc", label: "Discount (Highest first)" }
  ], n = (c) => {
    const h = e.colors.includes(c) ? e.colors.filter((p) => p !== c) : [...e.colors, c];
    t({ ...e, colors: h });
  }, i = (c) => {
    t({ ...e, sortOrder: c });
  }, o = () => {
    t({
      colors: [],
      sortOrder: "name-asc",
      searchQuery: e.searchQuery
      // Keep search query
    });
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md space-y-6", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ a.jsx(dt, { htmlFor: "sort", children: "Sort By" }),
      /* @__PURE__ */ a.jsx(
        rn,
        {
          id: "sort",
          value: e.sortOrder,
          onChange: (c) => i(c.target.value),
          children: s.map((c) => /* @__PURE__ */ a.jsx("option", { value: c.value, children: c.label }, c.value))
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ a.jsx(dt, { children: "Filter by Color" }),
      /* @__PURE__ */ a.jsx("div", { className: "space-y-2", children: r.map((c) => /* @__PURE__ */ a.jsxs("label", { className: "flex items-center space-x-2 cursor-pointer", children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            checked: e.colors.includes(c.value),
            onChange: () => n(c.value),
            className: "rounded border-gray-300"
          }
        ),
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `w-4 h-4 rounded-full ${c.value === "green" ? "bg-green-500" : c.value === "orange" ? "bg-orange-500" : "bg-yellow-500"}`
            }
          ),
          /* @__PURE__ */ a.jsx("span", { children: c.label })
        ] })
      ] }, c.value)) })
    ] }),
    /* @__PURE__ */ a.jsx(
      ee,
      {
        variant: "outline",
        onClick: o,
        className: "w-full",
        children: "Clear Filters"
      }
    )
  ] });
};
class dl extends Hs {
  constructor(t) {
    super(t), this.handleRetry = () => {
      this.setState({ hasError: !1, error: void 0 }), window.location.reload();
    }, this.handleGoHome = () => {
      window.location.href = "/";
    }, this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(t) {
    return {
      hasError: !0,
      error: t
    };
  }
  componentDidCatch(t, r) {
    console.error("Global ErrorBoundary caught an error:", t, r);
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ a.jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center p-6", children: /* @__PURE__ */ a.jsxs("div", { className: "text-center space-y-8 max-w-lg", children: [
      /* @__PURE__ */ a.jsx("div", { className: "w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto", children: /* @__PURE__ */ a.jsx(Gs, { className: "w-10 h-10 text-red-600" }) }),
      /* @__PURE__ */ a.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ a.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Oops! Something went wrong" }),
        /* @__PURE__ */ a.jsx("p", { className: "text-lg text-gray-600", children: "We're experiencing technical difficulties with FruitShop. Our team has been notified and is working to fix this issue." })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ a.jsxs(
          "button",
          {
            onClick: this.handleRetry,
            className: "inline-flex items-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors",
            children: [
              /* @__PURE__ */ a.jsx(er, { className: "w-5 h-5 mr-2" }),
              "Reload Page"
            ]
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "button",
          {
            onClick: this.handleGoHome,
            className: "inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors",
            children: [
              /* @__PURE__ */ a.jsx(Ys, { className: "w-5 h-5 mr-2" }),
              "Go to Homepage"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "pt-4 border-t border-gray-200", children: /* @__PURE__ */ a.jsx("p", { className: "text-sm text-gray-500", children: "If this problem persists, please contact our support team." }) })
    ] }) }) : this.props.children;
  }
}
var tr = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, rr = typeof window > "u" || "Deno" in globalThis;
function je() {
}
function vi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bi(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function xi(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function vr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function wi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ss(e, t) {
  const {
    type: r = "all",
    exact: s,
    fetchStatus: n,
    predicate: i,
    queryKey: o,
    stale: c
  } = e;
  if (o) {
    if (s) {
      if (t.queryHash !== zr(o, t.options))
        return !1;
    } else if (!$t(t.queryKey, o))
      return !1;
  }
  if (r !== "all") {
    const h = t.isActive();
    if (r === "active" && !h || r === "inactive" && h)
      return !1;
  }
  return !(typeof c == "boolean" && t.isStale() !== c || n && n !== t.state.fetchStatus || i && !i(t));
}
function ns(e, t) {
  const { exact: r, status: s, predicate: n, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey)
      return !1;
    if (r) {
      if (zt(t.options.mutationKey) !== zt(i))
        return !1;
    } else if (!$t(t.options.mutationKey, i))
      return !1;
  }
  return !(s && t.state.status !== s || n && !n(t));
}
function zr(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || zt)(e);
}
function zt(e) {
  return JSON.stringify(
    e,
    (t, r) => xr(r) ? Object.keys(r).sort().reduce((s, n) => (s[n] = r[n], s), {}) : r
  );
}
function $t(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every((r) => $t(e[r], t[r])) : !1;
}
function br(e, t) {
  if (e === t)
    return e;
  const r = is(e) && is(t);
  if (r || xr(e) && xr(t)) {
    const s = r ? e : Object.keys(e), n = s.length, i = r ? t : Object.keys(t), o = i.length, c = r ? [] : {}, h = new Set(s);
    let p = 0;
    for (let b = 0; b < o; b++) {
      const y = r ? b : i[b];
      (!r && h.has(y) || r) && e[y] === void 0 && t[y] === void 0 ? (c[y] = void 0, p++) : (c[y] = br(e[y], t[y]), c[y] === e[y] && e[y] !== void 0 && p++);
    }
    return n === o && p === n ? e : c;
  }
  return t;
}
function is(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function xr(e) {
  if (!os(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(!os(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function os(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function _i(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function ji(e, t, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(e, t);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return br(e, t);
      } catch (s) {
        throw console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${s}`
        ), s;
      }
    return br(e, t);
  }
  return t;
}
function ki(e, t, r = 0) {
  const s = [...e, t];
  return r && s.length > r ? s.slice(1) : s;
}
function Si(e, t, r = 0) {
  const s = [t, ...e];
  return r && s.length > r ? s.slice(0, -1) : s;
}
var Bt = Symbol();
function nn(e, t) {
  return process.env.NODE_ENV !== "production" && e.queryFn === Bt && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`
  ), !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Bt ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var Xe, Qe, ft, Us, Pi = (Us = class extends tr {
  constructor() {
    super();
    I(this, Xe);
    I(this, Qe);
    I(this, ft);
    O(this, ft, (t) => {
      if (!rr && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    m(this, Qe) || this.setEventListener(m(this, ft));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = m(this, Qe)) == null || t.call(this), O(this, Qe, void 0));
  }
  setEventListener(t) {
    var r;
    O(this, ft, t), (r = m(this, Qe)) == null || r.call(this), O(this, Qe, t((s) => {
      typeof s == "boolean" ? this.setFocused(s) : this.onFocus();
    }));
  }
  setFocused(t) {
    m(this, Xe) !== t && (O(this, Xe, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((r) => {
      r(t);
    });
  }
  isFocused() {
    var t;
    return typeof m(this, Xe) == "boolean" ? m(this, Xe) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, Xe = new WeakMap(), Qe = new WeakMap(), ft = new WeakMap(), Us), on = new Pi(), ht, Be, mt, Ls, Ni = (Ls = class extends tr {
  constructor() {
    super();
    I(this, ht, !0);
    I(this, Be);
    I(this, mt);
    O(this, mt, (t) => {
      if (!rr && window.addEventListener) {
        const r = () => t(!0), s = () => t(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", s, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", s);
        };
      }
    });
  }
  onSubscribe() {
    m(this, Be) || this.setEventListener(m(this, mt));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = m(this, Be)) == null || t.call(this), O(this, Be, void 0));
  }
  setEventListener(t) {
    var r;
    O(this, mt, t), (r = m(this, Be)) == null || r.call(this), O(this, Be, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    m(this, ht) !== t && (O(this, ht, t), this.listeners.forEach((s) => {
      s(t);
    }));
  }
  isOnline() {
    return m(this, ht);
  }
}, ht = new WeakMap(), Be = new WeakMap(), mt = new WeakMap(), Ls), Wt = new Ni();
function Ei() {
  let e, t;
  const r = new Promise((n, i) => {
    e = n, t = i;
  });
  r.status = "pending", r.catch(() => {
  });
  function s(n) {
    Object.assign(r, n), delete r.resolve, delete r.reject;
  }
  return r.resolve = (n) => {
    s({
      status: "fulfilled",
      value: n
    }), e(n);
  }, r.reject = (n) => {
    s({
      status: "rejected",
      reason: n
    }), t(n);
  }, r;
}
function zi(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function an(e) {
  return (e ?? "online") === "online" ? Wt.isOnline() : !0;
}
var cn = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function fr(e) {
  return e instanceof cn;
}
function un(e) {
  let t = !1, r = 0, s = !1, n;
  const i = Ei(), o = (x) => {
    var z;
    s || (l(new cn(x)), (z = e.abort) == null || z.call(e));
  }, c = () => {
    t = !0;
  }, h = () => {
    t = !1;
  }, p = () => on.isFocused() && (e.networkMode === "always" || Wt.isOnline()) && e.canRun(), b = () => an(e.networkMode) && e.canRun(), y = (x) => {
    var z;
    s || (s = !0, (z = e.onSuccess) == null || z.call(e, x), n == null || n(), i.resolve(x));
  }, l = (x) => {
    var z;
    s || (s = !0, (z = e.onError) == null || z.call(e, x), n == null || n(), i.reject(x));
  }, j = () => new Promise((x) => {
    var z;
    n = (S) => {
      (s || p()) && x(S);
    }, (z = e.onPause) == null || z.call(e);
  }).then(() => {
    var x;
    n = void 0, s || (x = e.onContinue) == null || x.call(e);
  }), N = () => {
    if (s)
      return;
    let x;
    const z = r === 0 ? e.initialPromise : void 0;
    try {
      x = z ?? e.fn();
    } catch (S) {
      x = Promise.reject(S);
    }
    Promise.resolve(x).then(y).catch((S) => {
      var Y;
      if (s)
        return;
      const w = e.retry ?? (rr ? 0 : 3), $ = e.retryDelay ?? zi, C = typeof $ == "function" ? $(r, S) : $, Z = w === !0 || typeof w == "number" && r < w || typeof w == "function" && w(r, S);
      if (t || !Z) {
        l(S);
        return;
      }
      r++, (Y = e.onFail) == null || Y.call(e, r, S), _i(C).then(() => p() ? void 0 : j()).then(() => {
        t ? l(S) : N();
      });
    });
  };
  return {
    promise: i,
    cancel: o,
    continue: () => (n == null || n(), i),
    cancelRetry: c,
    continueRetry: h,
    canStart: b,
    start: () => (b() ? N() : j().then(N), i)
  };
}
var $i = (e) => setTimeout(e, 0);
function Ai() {
  let e = [], t = 0, r = (c) => {
    c();
  }, s = (c) => {
    c();
  }, n = $i;
  const i = (c) => {
    t ? e.push(c) : n(() => {
      r(c);
    });
  }, o = () => {
    const c = e;
    e = [], c.length && n(() => {
      s(() => {
        c.forEach((h) => {
          r(h);
        });
      });
    });
  };
  return {
    batch: (c) => {
      let h;
      t++;
      try {
        h = c();
      } finally {
        t--, t || o();
      }
      return h;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (c) => (...h) => {
      i(() => {
        c(...h);
      });
    },
    schedule: i,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (c) => {
      r = c;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (c) => {
      s = c;
    },
    setScheduler: (c) => {
      n = c;
    }
  };
}
var pe = Ai(), et, Ms, ln = (Ms = class {
  constructor() {
    I(this, et);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), bi(this.gcTime) && O(this, et, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (rr ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    m(this, et) && (clearTimeout(m(this, et)), O(this, et, void 0));
  }
}, et = new WeakMap(), Ms), pt, tt, _e, rt, fe, Ft, st, ke, Ie, qs, Ci = (qs = class extends ln {
  constructor(t) {
    super();
    I(this, ke);
    I(this, pt);
    I(this, tt);
    I(this, _e);
    I(this, rt);
    I(this, fe);
    I(this, Ft);
    I(this, st);
    O(this, st, !1), O(this, Ft, t.defaultOptions), this.setOptions(t.options), this.observers = [], O(this, rt, t.client), O(this, _e, m(this, rt).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, O(this, pt, Oi(this.options)), this.state = t.state ?? m(this, pt), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var t;
    return (t = m(this, fe)) == null ? void 0 : t.promise;
  }
  setOptions(t) {
    this.options = { ...m(this, Ft), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && m(this, _e).remove(this);
  }
  setData(t, r) {
    const s = ji(this.state.data, t, this.options);
    return de(this, ke, Ie).call(this, {
      data: s,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), s;
  }
  setState(t, r) {
    de(this, ke, Ie).call(this, { type: "setState", state: t, setStateOptions: r });
  }
  cancel(t) {
    var s, n;
    const r = (s = m(this, fe)) == null ? void 0 : s.promise;
    return (n = m(this, fe)) == null || n.cancel(t), r ? r.then(je).catch(je) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(m(this, pt));
  }
  isActive() {
    return this.observers.some(
      (t) => wi(t.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Bt || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStatic() {
    return this.getObserversCount() > 0 ? this.observers.some(
      (t) => vr(t.options.staleTime, this) === "static"
    ) : !1;
  }
  isStale() {
    return this.getObserversCount() > 0 ? this.observers.some(
      (t) => t.getCurrentResult().isStale
    ) : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(t = 0) {
    return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !xi(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var r;
    const t = this.observers.find((s) => s.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = m(this, fe)) == null || r.continue();
  }
  onOnline() {
    var r;
    const t = this.observers.find((s) => s.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = m(this, fe)) == null || r.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), m(this, _e).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((r) => r !== t), this.observers.length || (m(this, fe) && (m(this, st) ? m(this, fe).cancel({ revert: !0 }) : m(this, fe).cancelRetry()), this.scheduleGc()), m(this, _e).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || de(this, ke, Ie).call(this, { type: "invalidate" });
  }
  fetch(t, r) {
    var p, b, y;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (m(this, fe))
        return m(this, fe).continueRetry(), m(this, fe).promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const l = this.observers.find((j) => j.options.queryFn);
      l && this.setOptions(l.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const s = new AbortController(), n = (l) => {
      Object.defineProperty(l, "signal", {
        enumerable: !0,
        get: () => (O(this, st, !0), s.signal)
      });
    }, i = () => {
      const l = nn(this.options, r), N = (() => {
        const x = {
          client: m(this, rt),
          queryKey: this.queryKey,
          meta: this.meta
        };
        return n(x), x;
      })();
      return O(this, st, !1), this.options.persister ? this.options.persister(
        l,
        N,
        this
      ) : l(N);
    }, c = (() => {
      const l = {
        fetchOptions: r,
        options: this.options,
        queryKey: this.queryKey,
        client: m(this, rt),
        state: this.state,
        fetchFn: i
      };
      return n(l), l;
    })();
    (p = this.options.behavior) == null || p.onFetch(c, this), O(this, tt, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((b = c.fetchOptions) == null ? void 0 : b.meta)) && de(this, ke, Ie).call(this, { type: "fetch", meta: (y = c.fetchOptions) == null ? void 0 : y.meta });
    const h = (l) => {
      var j, N, x, z;
      fr(l) && l.silent || de(this, ke, Ie).call(this, {
        type: "error",
        error: l
      }), fr(l) || ((N = (j = m(this, _e).config).onError) == null || N.call(
        j,
        l,
        this
      ), (z = (x = m(this, _e).config).onSettled) == null || z.call(
        x,
        this.state.data,
        l,
        this
      )), this.scheduleGc();
    };
    return O(this, fe, un({
      initialPromise: r == null ? void 0 : r.initialPromise,
      fn: c.fetchFn,
      abort: s.abort.bind(s),
      onSuccess: (l) => {
        var j, N, x, z;
        if (l === void 0) {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), h(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(l);
        } catch (S) {
          h(S);
          return;
        }
        (N = (j = m(this, _e).config).onSuccess) == null || N.call(j, l, this), (z = (x = m(this, _e).config).onSettled) == null || z.call(
          x,
          l,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: h,
      onFail: (l, j) => {
        de(this, ke, Ie).call(this, { type: "failed", failureCount: l, error: j });
      },
      onPause: () => {
        de(this, ke, Ie).call(this, { type: "pause" });
      },
      onContinue: () => {
        de(this, ke, Ie).call(this, { type: "continue" });
      },
      retry: c.options.retry,
      retryDelay: c.options.retryDelay,
      networkMode: c.options.networkMode,
      canRun: () => !0
    })), m(this, fe).start();
  }
}, pt = new WeakMap(), tt = new WeakMap(), _e = new WeakMap(), rt = new WeakMap(), fe = new WeakMap(), Ft = new WeakMap(), st = new WeakMap(), ke = new WeakSet(), Ie = function(t) {
  const r = (s) => {
    switch (t.type) {
      case "failed":
        return {
          ...s,
          fetchFailureCount: t.failureCount,
          fetchFailureReason: t.error
        };
      case "pause":
        return {
          ...s,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...s,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...s,
          ...Fi(s.data, this.options),
          fetchMeta: t.meta ?? null
        };
      case "success":
        return O(this, tt, void 0), {
          ...s,
          data: t.data,
          dataUpdateCount: s.dataUpdateCount + 1,
          dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!t.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const n = t.error;
        return fr(n) && n.revert && m(this, tt) ? { ...m(this, tt), fetchStatus: "idle" } : {
          ...s,
          error: n,
          errorUpdateCount: s.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: s.fetchFailureCount + 1,
          fetchFailureReason: n,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...s,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...s,
          ...t.state
        };
    }
  };
  this.state = r(this.state), pe.batch(() => {
    this.observers.forEach((s) => {
      s.onQueryUpdate();
    }), m(this, _e).notify({ query: this, type: "updated", action: t });
  });
}, qs);
function Fi(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: an(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function Oi(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, r = t !== void 0, s = r ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? s ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var Ae, Qs, Ri = (Qs = class extends tr {
  constructor(t = {}) {
    super();
    I(this, Ae);
    this.config = t, O(this, Ae, /* @__PURE__ */ new Map());
  }
  build(t, r, s) {
    const n = r.queryKey, i = r.queryHash ?? zr(n, r);
    let o = this.get(i);
    return o || (o = new Ci({
      client: t,
      queryKey: n,
      queryHash: i,
      options: t.defaultQueryOptions(r),
      state: s,
      defaultOptions: t.getQueryDefaults(n)
    }), this.add(o)), o;
  }
  add(t) {
    m(this, Ae).has(t.queryHash) || (m(this, Ae).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const r = m(this, Ae).get(t.queryHash);
    r && (t.destroy(), r === t && m(this, Ae).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    pe.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return m(this, Ae).get(t);
  }
  getAll() {
    return [...m(this, Ae).values()];
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (s) => ss(r, s)
    );
  }
  findAll(t = {}) {
    const r = this.getAll();
    return Object.keys(t).length > 0 ? r.filter((s) => ss(t, s)) : r;
  }
  notify(t) {
    pe.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  onFocus() {
    pe.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    pe.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, Ae = new WeakMap(), Qs), Ce, he, nt, Fe, Me, Bs, Zi = (Bs = class extends ln {
  constructor(t) {
    super();
    I(this, Fe);
    I(this, Ce);
    I(this, he);
    I(this, nt);
    this.mutationId = t.mutationId, O(this, he, t.mutationCache), O(this, Ce, []), this.state = t.state || Di(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    m(this, Ce).includes(t) || (m(this, Ce).push(t), this.clearGcTimeout(), m(this, he).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    O(this, Ce, m(this, Ce).filter((r) => r !== t)), this.scheduleGc(), m(this, he).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    m(this, Ce).length || (this.state.status === "pending" ? this.scheduleGc() : m(this, he).remove(this));
  }
  continue() {
    var t;
    return ((t = m(this, nt)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var i, o, c, h, p, b, y, l, j, N, x, z, S, w, $, C, Z, Y, ne, ge;
    const r = () => {
      de(this, Fe, Me).call(this, { type: "continue" });
    };
    O(this, nt, un({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (T, ce) => {
        de(this, Fe, Me).call(this, { type: "failed", failureCount: T, error: ce });
      },
      onPause: () => {
        de(this, Fe, Me).call(this, { type: "pause" });
      },
      onContinue: r,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => m(this, he).canRun(this)
    }));
    const s = this.state.status === "pending", n = !m(this, nt).canStart();
    try {
      if (s)
        r();
      else {
        de(this, Fe, Me).call(this, { type: "pending", variables: t, isPaused: n }), await ((o = (i = m(this, he).config).onMutate) == null ? void 0 : o.call(
          i,
          t,
          this
        ));
        const ce = await ((h = (c = this.options).onMutate) == null ? void 0 : h.call(c, t));
        ce !== this.state.context && de(this, Fe, Me).call(this, {
          type: "pending",
          context: ce,
          variables: t,
          isPaused: n
        });
      }
      const T = await m(this, nt).start();
      return await ((b = (p = m(this, he).config).onSuccess) == null ? void 0 : b.call(
        p,
        T,
        t,
        this.state.context,
        this
      )), await ((l = (y = this.options).onSuccess) == null ? void 0 : l.call(y, T, t, this.state.context)), await ((N = (j = m(this, he).config).onSettled) == null ? void 0 : N.call(
        j,
        T,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((z = (x = this.options).onSettled) == null ? void 0 : z.call(x, T, null, t, this.state.context)), de(this, Fe, Me).call(this, { type: "success", data: T }), T;
    } catch (T) {
      try {
        throw await ((w = (S = m(this, he).config).onError) == null ? void 0 : w.call(
          S,
          T,
          t,
          this.state.context,
          this
        )), await ((C = ($ = this.options).onError) == null ? void 0 : C.call(
          $,
          T,
          t,
          this.state.context
        )), await ((Y = (Z = m(this, he).config).onSettled) == null ? void 0 : Y.call(
          Z,
          void 0,
          T,
          this.state.variables,
          this.state.context,
          this
        )), await ((ge = (ne = this.options).onSettled) == null ? void 0 : ge.call(
          ne,
          void 0,
          T,
          t,
          this.state.context
        )), T;
      } finally {
        de(this, Fe, Me).call(this, { type: "error", error: T });
      }
    } finally {
      m(this, he).runNext(this);
    }
  }
}, Ce = new WeakMap(), he = new WeakMap(), nt = new WeakMap(), Fe = new WeakSet(), Me = function(t) {
  const r = (s) => {
    switch (t.type) {
      case "failed":
        return {
          ...s,
          failureCount: t.failureCount,
          failureReason: t.error
        };
      case "pause":
        return {
          ...s,
          isPaused: !0
        };
      case "continue":
        return {
          ...s,
          isPaused: !1
        };
      case "pending":
        return {
          ...s,
          context: t.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: t.isPaused,
          status: "pending",
          variables: t.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...s,
          data: t.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...s,
          data: void 0,
          error: t.error,
          failureCount: s.failureCount + 1,
          failureReason: t.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = r(this.state), pe.batch(() => {
    m(this, Ce).forEach((s) => {
      s.onMutationUpdate(t);
    }), m(this, he).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, Bs);
function Di() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var Ve, Se, Ot, Ws, Ti = (Ws = class extends tr {
  constructor(t = {}) {
    super();
    I(this, Ve);
    I(this, Se);
    I(this, Ot);
    this.config = t, O(this, Ve, /* @__PURE__ */ new Set()), O(this, Se, /* @__PURE__ */ new Map()), O(this, Ot, 0);
  }
  build(t, r, s) {
    const n = new Zi({
      mutationCache: this,
      mutationId: ++Tt(this, Ot)._,
      options: t.defaultMutationOptions(r),
      state: s
    });
    return this.add(n), n;
  }
  add(t) {
    m(this, Ve).add(t);
    const r = It(t);
    if (typeof r == "string") {
      const s = m(this, Se).get(r);
      s ? s.push(t) : m(this, Se).set(r, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (m(this, Ve).delete(t)) {
      const r = It(t);
      if (typeof r == "string") {
        const s = m(this, Se).get(r);
        if (s)
          if (s.length > 1) {
            const n = s.indexOf(t);
            n !== -1 && s.splice(n, 1);
          } else s[0] === t && m(this, Se).delete(r);
      }
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    const r = It(t);
    if (typeof r == "string") {
      const s = m(this, Se).get(r), n = s == null ? void 0 : s.find(
        (i) => i.state.status === "pending"
      );
      return !n || n === t;
    } else
      return !0;
  }
  runNext(t) {
    var s;
    const r = It(t);
    if (typeof r == "string") {
      const n = (s = m(this, Se).get(r)) == null ? void 0 : s.find((i) => i !== t && i.state.isPaused);
      return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
    } else
      return Promise.resolve();
  }
  clear() {
    pe.batch(() => {
      m(this, Ve).forEach((t) => {
        this.notify({ type: "removed", mutation: t });
      }), m(this, Ve).clear(), m(this, Se).clear();
    });
  }
  getAll() {
    return Array.from(m(this, Ve));
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (s) => ns(r, s)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((r) => ns(t, r));
  }
  notify(t) {
    pe.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((r) => r.state.isPaused);
    return pe.batch(
      () => Promise.all(
        t.map((r) => r.continue().catch(je))
      )
    );
  }
}, Ve = new WeakMap(), Se = new WeakMap(), Ot = new WeakMap(), Ws);
function It(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function as(e) {
  return {
    onFetch: (t, r) => {
      var b, y, l, j, N;
      const s = t.options, n = (l = (y = (b = t.fetchOptions) == null ? void 0 : b.meta) == null ? void 0 : y.fetchMore) == null ? void 0 : l.direction, i = ((j = t.state.data) == null ? void 0 : j.pages) || [], o = ((N = t.state.data) == null ? void 0 : N.pageParams) || [];
      let c = { pages: [], pageParams: [] }, h = 0;
      const p = async () => {
        let x = !1;
        const z = ($) => {
          Object.defineProperty($, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? x = !0 : t.signal.addEventListener("abort", () => {
              x = !0;
            }), t.signal)
          });
        }, S = nn(t.options, t.fetchOptions), w = async ($, C, Z) => {
          if (x)
            return Promise.reject();
          if (C == null && $.pages.length)
            return Promise.resolve($);
          const ne = (() => {
            const ue = {
              client: t.client,
              queryKey: t.queryKey,
              pageParam: C,
              direction: Z ? "backward" : "forward",
              meta: t.options.meta
            };
            return z(ue), ue;
          })(), ge = await S(ne), { maxPages: T } = t.options, ce = Z ? Si : ki;
          return {
            pages: ce($.pages, ge, T),
            pageParams: ce($.pageParams, C, T)
          };
        };
        if (n && i.length) {
          const $ = n === "backward", C = $ ? Ii : cs, Z = {
            pages: i,
            pageParams: o
          }, Y = C(s, Z);
          c = await w(Z, Y, $);
        } else {
          const $ = e ?? i.length;
          do {
            const C = h === 0 ? o[0] ?? s.initialPageParam : cs(s, c);
            if (h > 0 && C == null)
              break;
            c = await w(c, C), h++;
          } while (h < $);
        }
        return c;
      };
      t.options.persister ? t.fetchFn = () => {
        var x, z;
        return (z = (x = t.options).persister) == null ? void 0 : z.call(
          x,
          p,
          {
            client: t.client,
            queryKey: t.queryKey,
            meta: t.options.meta,
            signal: t.signal
          },
          r
        );
      } : t.fetchFn = p;
    }
  };
}
function cs(e, { pages: t, pageParams: r }) {
  const s = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[s],
    t,
    r[s],
    r
  ) : void 0;
}
function Ii(e, { pages: t, pageParams: r }) {
  var s;
  return t.length > 0 ? (s = e.getPreviousPageParam) == null ? void 0 : s.call(e, t[0], t, r[0], r) : void 0;
}
var H, We, Ke, gt, yt, He, vt, bt, Ks, Vi = (Ks = class {
  constructor(e = {}) {
    I(this, H);
    I(this, We);
    I(this, Ke);
    I(this, gt);
    I(this, yt);
    I(this, He);
    I(this, vt);
    I(this, bt);
    O(this, H, e.queryCache || new Ri()), O(this, We, e.mutationCache || new Ti()), O(this, Ke, e.defaultOptions || {}), O(this, gt, /* @__PURE__ */ new Map()), O(this, yt, /* @__PURE__ */ new Map()), O(this, He, 0);
  }
  mount() {
    Tt(this, He)._++, m(this, He) === 1 && (O(this, vt, on.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), m(this, H).onFocus());
    })), O(this, bt, Wt.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), m(this, H).onOnline());
    })));
  }
  unmount() {
    var e, t;
    Tt(this, He)._--, m(this, He) === 0 && ((e = m(this, vt)) == null || e.call(this), O(this, vt, void 0), (t = m(this, bt)) == null || t.call(this), O(this, bt, void 0));
  }
  isFetching(e) {
    return m(this, H).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return m(this, We).findAll({ ...e, status: "pending" }).length;
  }
  /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */
  getQueryData(e) {
    var r;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (r = m(this, H).get(t.queryHash)) == null ? void 0 : r.state.data;
  }
  ensureQueryData(e) {
    const t = this.defaultQueryOptions(e), r = m(this, H).build(this, t), s = r.state.data;
    return s === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && r.isStaleByTime(vr(t.staleTime, r)) && this.prefetchQuery(t), Promise.resolve(s));
  }
  getQueriesData(e) {
    return m(this, H).findAll(e).map(({ queryKey: t, state: r }) => {
      const s = r.data;
      return [t, s];
    });
  }
  setQueryData(e, t, r) {
    const s = this.defaultQueryOptions({ queryKey: e }), n = m(this, H).get(
      s.queryHash
    ), i = n == null ? void 0 : n.state.data, o = vi(t, i);
    if (o !== void 0)
      return m(this, H).build(this, s).setData(o, { ...r, manual: !0 });
  }
  setQueriesData(e, t, r) {
    return pe.batch(
      () => m(this, H).findAll(e).map(({ queryKey: s }) => [
        s,
        this.setQueryData(s, t, r)
      ])
    );
  }
  getQueryState(e) {
    var r;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (r = m(this, H).get(
      t.queryHash
    )) == null ? void 0 : r.state;
  }
  removeQueries(e) {
    const t = m(this, H);
    pe.batch(() => {
      t.findAll(e).forEach((r) => {
        t.remove(r);
      });
    });
  }
  resetQueries(e, t) {
    const r = m(this, H);
    return pe.batch(() => (r.findAll(e).forEach((s) => {
      s.reset();
    }), this.refetchQueries(
      {
        type: "active",
        ...e
      },
      t
    )));
  }
  cancelQueries(e, t = {}) {
    const r = { revert: !0, ...t }, s = pe.batch(
      () => m(this, H).findAll(e).map((n) => n.cancel(r))
    );
    return Promise.all(s).then(je).catch(je);
  }
  invalidateQueries(e, t = {}) {
    return pe.batch(() => (m(this, H).findAll(e).forEach((r) => {
      r.invalidate();
    }), (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries(
      {
        ...e,
        type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
      },
      t
    )));
  }
  refetchQueries(e, t = {}) {
    const r = {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }, s = pe.batch(
      () => m(this, H).findAll(e).filter((n) => !n.isDisabled() && !n.isStatic()).map((n) => {
        let i = n.fetch(void 0, r);
        return r.throwOnError || (i = i.catch(je)), n.state.fetchStatus === "paused" ? Promise.resolve() : i;
      })
    );
    return Promise.all(s).then(je);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const r = m(this, H).build(this, t);
    return r.isStaleByTime(
      vr(t.staleTime, r)
    ) ? r.fetch(t) : Promise.resolve(r.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(je).catch(je);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = as(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(je).catch(je);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = as(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return Wt.isOnline() ? m(this, We).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return m(this, H);
  }
  getMutationCache() {
    return m(this, We);
  }
  getDefaultOptions() {
    return m(this, Ke);
  }
  setDefaultOptions(e) {
    O(this, Ke, e);
  }
  setQueryDefaults(e, t) {
    m(this, gt).set(zt(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...m(this, gt).values()], r = {};
    return t.forEach((s) => {
      $t(e, s.queryKey) && Object.assign(r, s.defaultOptions);
    }), r;
  }
  setMutationDefaults(e, t) {
    m(this, yt).set(zt(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...m(this, yt).values()], r = {};
    return t.forEach((s) => {
      $t(e, s.mutationKey) && Object.assign(r, s.defaultOptions);
    }), r;
  }
  defaultQueryOptions(e) {
    if (e._defaulted)
      return e;
    const t = {
      ...m(this, Ke).queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = zr(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === Bt && (t.enabled = !1), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...m(this, Ke).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    m(this, H).clear(), m(this, We).clear();
  }
}, H = new WeakMap(), We = new WeakMap(), Ke = new WeakMap(), gt = new WeakMap(), yt = new WeakMap(), He = new WeakMap(), vt = new WeakMap(), bt = new WeakMap(), Ks), Ui = Qt.createContext(
  void 0
), Li = ({
  client: e,
  children: t
}) => (Qt.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ a.jsx(Ui.Provider, { value: e, children: t }));
const Mi = new Vi({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: !1,
      staleTime: 30 * 1e3,
      // 30 seconds
      gcTime: 10 * 60 * 1e3
      // 10 minutes
    },
    mutations: {
      retry: 1
    }
  }
}), fl = ({ children: e }) => /* @__PURE__ */ a.jsx(Li, { client: Mi, children: /* @__PURE__ */ a.jsxs("div", { className: "min-h-screen bg-gray-50", children: [
  /* @__PURE__ */ a.jsx(
    "a",
    {
      href: "#main-content",
      className: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium",
      children: "Skip to main content"
    }
  ),
  /* @__PURE__ */ a.jsx(pi, {}),
  /* @__PURE__ */ a.jsx(
    "main",
    {
      id: "main-content",
      role: "main",
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
      "aria-label": "Main content",
      children: e
    }
  ),
  /* @__PURE__ */ a.jsx(
    "div",
    {
      id: "sr-announcements",
      "aria-live": "polite",
      "aria-atomic": "true",
      className: "sr-only"
    }
  )
] }) }), hl = () => {
  var y;
  const { data: e, isLoading: t, error: r } = Er(), { mutate: s, isPending: n } = Jn(), [i, o] = Re({}), c = (l, j) => {
    const N = Math.max(0, parseInt(j) || 0);
    o((x) => ({ ...x, [l]: N }));
  }, h = (l, j) => {
    const N = i[l] || 0, x = e == null ? void 0 : e.items.find((w) => w.productId === l), z = x ? x.quantity : 0, S = N + j;
    S <= z && o((w) => ({ ...w, [l]: S }));
  }, p = (l, j) => {
    const N = i[l] || 0, x = Math.max(0, N - j);
    o((z) => ({ ...z, [l]: x }));
  }, b = (l) => {
    const j = i[l] || 0;
    j > 0 && (s({ productId: l, quantity: j }), o((N) => ({ ...N, [l]: 0 })));
  };
  return t ? /* @__PURE__ */ a.jsx("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ a.jsx(tn, { size: "lg" }) }) : r ? /* @__PURE__ */ a.jsx("div", { className: "text-center py-12", children: /* @__PURE__ */ a.jsx("p", { className: "text-red-600", children: "Error loading cart. Please try again." }) }) : !e || e.items.length === 0 ? /* @__PURE__ */ a.jsxs("div", { className: "text-center py-12", children: [
    /* @__PURE__ */ a.jsx("h1", { className: "text-3xl font-bold mb-4", children: "Your Cart" }),
    /* @__PURE__ */ a.jsx("p", { className: "text-gray-600 mb-4", children: "Your cart is empty" }),
    /* @__PURE__ */ a.jsx(ee, { onClick: () => window.location.href = "/products", children: "Browse Products" })
  ] }) : /* @__PURE__ */ a.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ a.jsx("h1", { className: "text-3xl font-bold", children: "Your Cart" }),
      /* @__PURE__ */ a.jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ a.jsxs("p", { className: "text-sm text-gray-600", children: [
          e == null ? void 0 : e.totalItems,
          " items"
        ] }),
        /* @__PURE__ */ a.jsxs("p", { className: "text-2xl font-bold", children: [
          "$",
          ((y = e == null ? void 0 : e.totalPrice) == null ? void 0 : y.toFixed(2)) ?? "0.00"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "space-y-4", children: e == null ? void 0 : e.items.map((l) => {
      const j = i[l.productId] || 0, N = j > 0 && j <= l.quantity, x = j % l.packageSize === 0;
      return /* @__PURE__ */ a.jsx("div", { className: "bg-white p-6 rounded-lg shadow-md", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-start space-x-4", children: [
        /* @__PURE__ */ a.jsx(
          pr,
          {
            src: l.image,
            alt: l.productName,
            width: 80,
            height: 80,
            className: "w-20 h-20 object-cover rounded-md"
          }
        ),
        /* @__PURE__ */ a.jsxs("div", { className: "flex-1 space-y-2", children: [
          /* @__PURE__ */ a.jsx("h3", { className: "font-semibold text-lg", children: l.productName }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ a.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ a.jsxs("p", { className: "text-sm text-gray-600", children: [
                "Price: $",
                l.price.toFixed(2),
                " each"
              ] }),
              /* @__PURE__ */ a.jsxs("p", { className: "text-sm text-gray-600", children: [
                "Quantity: ",
                l.quantity,
                " units"
              ] }),
              /* @__PURE__ */ a.jsxs("p", { className: "text-sm text-gray-600", children: [
                "Package: ",
                l.packageSize,
                " units"
              ] })
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "text-right", children: /* @__PURE__ */ a.jsxs("p", { className: "font-bold text-lg", children: [
              "$",
              (l.price * l.quantity).toFixed(2)
            ] }) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-4 pt-4 border-t", children: [
            /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ a.jsx("span", { className: "text-sm font-medium", children: "Remove:" }),
              /* @__PURE__ */ a.jsx(
                ee,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: () => p(l.productId, l.packageSize),
                  disabled: j <= 0,
                  children: /* @__PURE__ */ a.jsx(Qn, { className: "w-3 h-3" })
                }
              ),
              /* @__PURE__ */ a.jsx(
                it,
                {
                  type: "number",
                  value: j,
                  onChange: (z) => c(l.productId, z.target.value),
                  className: "w-20 text-center",
                  min: "0",
                  max: l.quantity,
                  step: l.packageSize
                }
              ),
              /* @__PURE__ */ a.jsx(
                ee,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: () => h(l.productId, l.packageSize),
                  disabled: j + l.packageSize > l.quantity,
                  children: /* @__PURE__ */ a.jsx(Bn, { className: "w-3 h-3" })
                }
              )
            ] }),
            /* @__PURE__ */ a.jsxs(
              ee,
              {
                variant: "destructive",
                size: "sm",
                onClick: () => b(l.productId),
                disabled: !N || !x || n,
                children: [
                  /* @__PURE__ */ a.jsx(Wn, { className: "w-4 h-4 mr-1" }),
                  n ? "Removing..." : "Remove"
                ]
              }
            )
          ] }),
          !x && j > 0 && /* @__PURE__ */ a.jsxs("p", { className: "text-sm text-red-600", children: [
            "Remove quantity must be a multiple of ",
            l.packageSize
          ] })
        ] })
      ] }) }, l.productId);
    }) }),
    /* @__PURE__ */ a.jsx("div", { className: "bg-white p-6 rounded-lg shadow-md", children: /* @__PURE__ */ a.jsxs("div", { className: "flex justify-between items-center text-xl font-bold", children: [
      /* @__PURE__ */ a.jsxs("span", { children: [
        "Total: $",
        e == null ? void 0 : e.totalPrice.toFixed(2)
      ] }),
      /* @__PURE__ */ a.jsx(ee, { size: "lg", children: "Proceed to Checkout" })
    ] }) })
  ] });
}, ml = () => {
  const e = ri(), [t, r] = Re({
    colors: [],
    // Start with no color filters to show all products
    sortOrder: "name-asc",
    searchQuery: ""
  });
  Xt(() => {
    const c = e.get("search") || "";
    r((h) => ({ ...h, searchQuery: c }));
  }, [e]);
  const { data: s = [], isLoading: n, error: i } = Xn(t), o = (c) => {
    r((h) => ({ ...h, searchQuery: c }));
  };
  return n ? /* @__PURE__ */ a.jsx("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ a.jsx(tn, { size: "lg" }) }) : i ? /* @__PURE__ */ a.jsx("div", { className: "text-center py-12", children: /* @__PURE__ */ a.jsx("p", { className: "text-red-600", children: "Error loading products. Please try again." }) }) : /* @__PURE__ */ a.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ a.jsx("h1", { className: "text-3xl font-bold", children: "Products" }),
      /* @__PURE__ */ a.jsxs("p", { className: "text-gray-600", children: [
        s.length,
        " products found"
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "max-w-md", children: /* @__PURE__ */ a.jsx(
      li,
      {
        onSearch: o,
        placeholder: "Search products..."
      }
    ) }),
    /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ a.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ a.jsx(
        yi,
        {
          filters: t,
          onFiltersChange: r
        }
      ) }),
      /* @__PURE__ */ a.jsx("div", { className: "lg:col-span-3", children: s.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "text-center py-12", children: /* @__PURE__ */ a.jsx("p", { className: "text-gray-600", children: "No products found matching your criteria." }) }) : /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: s.map((c) => /* @__PURE__ */ a.jsx(mi, { children: /* @__PURE__ */ a.jsx(gi, { product: c }) }, c.id)) }) })
    ] })
  ] });
};
var Rt = (e) => e.type === "checkbox", Je = (e) => e instanceof Date, me = (e) => e == null;
const dn = (e) => typeof e == "object";
var G = (e) => !me(e) && !Array.isArray(e) && dn(e) && !Je(e), qi = (e) => G(e) && e.target ? Rt(e.target) ? e.target.checked : e.target.value : e, Qi = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Bi = (e, t) => e.has(Qi(t)), Wi = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return G(t) && t.hasOwnProperty("isPrototypeOf");
}, $r = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function oe(e) {
  let t;
  const r = Array.isArray(e), s = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (!($r && (e instanceof Blob || s)) && (r || G(e)))
    if (t = r ? [] : {}, !r && !Wi(e))
      t = e;
    else
      for (const n in e)
        e.hasOwnProperty(n) && (t[n] = oe(e[n]));
  else
    return e;
  return t;
}
var sr = (e) => /^\w*$/.test(e), X = (e) => e === void 0, Ar = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Cr = (e) => Ar(e.replace(/["|']|\]/g, "").split(/\.|\[/)), E = (e, t, r) => {
  if (!t || !G(e))
    return r;
  const s = (sr(t) ? [t] : Cr(t)).reduce((n, i) => me(n) ? n : n[i], e);
  return X(s) || s === e ? X(e[t]) ? r : e[t] : s;
}, $e = (e) => typeof e == "boolean", L = (e, t, r) => {
  let s = -1;
  const n = sr(t) ? [t] : Cr(t), i = n.length, o = i - 1;
  for (; ++s < i; ) {
    const c = n[s];
    let h = r;
    if (s !== o) {
      const p = e[c];
      h = G(p) || Array.isArray(p) ? p : isNaN(+n[s + 1]) ? {} : [];
    }
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return;
    e[c] = h, e = e[c];
  }
};
const us = {
  BLUR: "blur",
  FOCUS_OUT: "focusout"
}, Pe = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Te = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Ki = we.createContext(null);
Ki.displayName = "HookFormContext";
var Hi = (e, t, r, s = !0) => {
  const n = {
    defaultValues: t._defaultValues
  };
  for (const i in e)
    Object.defineProperty(n, i, {
      get: () => {
        const o = i;
        return t._proxyFormState[o] !== Pe.all && (t._proxyFormState[o] = !s || Pe.all), e[o];
      }
    });
  return n;
};
const Gi = typeof window < "u" ? Qt.useLayoutEffect : Qt.useEffect;
var Oe = (e) => typeof e == "string", Yi = (e, t, r, s, n) => Oe(e) ? (s && t.watch.add(e), E(r, e, n)) : Array.isArray(e) ? e.map((i) => (s && t.watch.add(i), E(r, i))) : (s && (t.watchAll = !0), r), Fr = (e, t, r, s, n) => t ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [s]: n || !0
  }
} : {}, Pt = (e) => Array.isArray(e) ? e : [e], ls = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (n) => {
      for (const i of e)
        i.next && i.next(n);
    },
    subscribe: (n) => (e.push(n), {
      unsubscribe: () => {
        e = e.filter((i) => i !== n);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, wr = (e) => me(e) || !dn(e);
function qe(e, t, r = /* @__PURE__ */ new WeakSet()) {
  if (wr(e) || wr(t))
    return e === t;
  if (Je(e) && Je(t))
    return e.getTime() === t.getTime();
  const s = Object.keys(e), n = Object.keys(t);
  if (s.length !== n.length)
    return !1;
  if (r.has(e) || r.has(t))
    return !0;
  r.add(e), r.add(t);
  for (const i of s) {
    const o = e[i];
    if (!n.includes(i))
      return !1;
    if (i !== "ref") {
      const c = t[i];
      if (Je(o) && Je(c) || G(o) && G(c) || Array.isArray(o) && Array.isArray(c) ? !qe(o, c, r) : o !== c)
        return !1;
    }
  }
  return !0;
}
var ye = (e) => G(e) && !Object.keys(e).length, Or = (e) => e.type === "file", Ne = (e) => typeof e == "function", Kt = (e) => {
  if (!$r)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, fn = (e) => e.type === "select-multiple", Rr = (e) => e.type === "radio", Ji = (e) => Rr(e) || Rt(e), hr = (e) => Kt(e) && e.isConnected;
function Xi(e, t) {
  const r = t.slice(0, -1).length;
  let s = 0;
  for (; s < r; )
    e = X(e) ? s++ : e[t[s++]];
  return e;
}
function eo(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !X(e[t]))
      return !1;
  return !0;
}
function J(e, t) {
  const r = Array.isArray(t) ? t : sr(t) ? [t] : Cr(t), s = r.length === 1 ? e : Xi(e, r), n = r.length - 1, i = r[n];
  return s && delete s[i], n !== 0 && (G(s) && ye(s) || Array.isArray(s) && eo(s)) && J(e, r.slice(0, -1)), e;
}
var hn = (e) => {
  for (const t in e)
    if (Ne(e[t]))
      return !0;
  return !1;
};
function Ht(e, t = {}) {
  const r = Array.isArray(e);
  if (G(e) || r)
    for (const s in e)
      Array.isArray(e[s]) || G(e[s]) && !hn(e[s]) ? (t[s] = Array.isArray(e[s]) ? [] : {}, Ht(e[s], t[s])) : me(e[s]) || (t[s] = !0);
  return t;
}
function mn(e, t, r) {
  const s = Array.isArray(e);
  if (G(e) || s)
    for (const n in e)
      Array.isArray(e[n]) || G(e[n]) && !hn(e[n]) ? X(t) || wr(r[n]) ? r[n] = Array.isArray(e[n]) ? Ht(e[n], []) : { ...Ht(e[n]) } : mn(e[n], me(t) ? {} : t[n], r[n]) : r[n] = !qe(e[n], t[n]);
  return r;
}
var jt = (e, t) => mn(e, t, Ht(t));
const ds = {
  value: !1,
  isValid: !1
}, fs = { value: !0, isValid: !0 };
var pn = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !X(e[0].attributes.value) ? X(e[0].value) || e[0].value === "" ? fs : { value: e[0].value, isValid: !0 } : fs
    ) : ds;
  }
  return ds;
}, gn = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: s }) => X(e) ? e : t ? e === "" ? NaN : e && +e : r && Oe(e) ? new Date(e) : s ? s(e) : e;
const hs = {
  isValid: !1,
  value: null
};
var yn = (e) => Array.isArray(e) ? e.reduce((t, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : t, hs) : hs;
function ms(e) {
  const t = e.ref;
  return Or(t) ? t.files : Rr(t) ? yn(e.refs).value : fn(t) ? [...t.selectedOptions].map(({ value: r }) => r) : Rt(t) ? pn(e.refs).value : gn(X(t.value) ? e.ref.value : t.value, e);
}
var to = (e, t, r, s) => {
  const n = {};
  for (const i of e) {
    const o = E(t, i);
    o && L(n, i, o._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: n,
    shouldUseNativeValidation: s
  };
}, Gt = (e) => e instanceof RegExp, kt = (e) => X(e) ? e : Gt(e) ? e.source : G(e) ? Gt(e.value) ? e.value.source : e.value : e, ps = (e) => ({
  isOnSubmit: !e || e === Pe.onSubmit,
  isOnBlur: e === Pe.onBlur,
  isOnChange: e === Pe.onChange,
  isOnAll: e === Pe.all,
  isOnTouch: e === Pe.onTouched
});
const gs = "AsyncFunction";
var ro = (e) => !!e && !!e.validate && !!(Ne(e.validate) && e.validate.constructor.name === gs || G(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === gs)), so = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), ys = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((s) => e.startsWith(s) && /^\.\w+/.test(e.slice(s.length))));
const Nt = (e, t, r, s) => {
  for (const n of r || Object.keys(e)) {
    const i = E(e, n);
    if (i) {
      const { _f: o, ...c } = i;
      if (o) {
        if (o.refs && o.refs[0] && t(o.refs[0], n) && !s)
          return !0;
        if (o.ref && t(o.ref, o.name) && !s)
          return !0;
        if (Nt(c, t))
          break;
      } else if (G(c) && Nt(c, t))
        break;
    }
  }
};
function vs(e, t, r) {
  const s = E(e, r);
  if (s || sr(r))
    return {
      error: s,
      name: r
    };
  const n = r.split(".");
  for (; n.length; ) {
    const i = n.join("."), o = E(t, i), c = E(e, i);
    if (o && !Array.isArray(o) && r !== i)
      return { name: r };
    if (c && c.type)
      return {
        name: i,
        error: c
      };
    if (c && c.root && c.root.type)
      return {
        name: `${i}.root`,
        error: c.root
      };
    n.pop();
  }
  return {
    name: r
  };
}
var no = (e, t, r, s) => {
  r(e);
  const { name: n, ...i } = e;
  return ye(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find((o) => t[o] === (!s || Pe.all));
}, io = (e, t, r) => !e || !t || e === t || Pt(e).some((s) => s && (r ? s === t : s.startsWith(t) || t.startsWith(s))), oo = (e, t, r, s, n) => n.isOnAll ? !1 : !r && n.isOnTouch ? !(t || e) : (r ? s.isOnBlur : n.isOnBlur) ? !e : (r ? s.isOnChange : n.isOnChange) ? e : !0, ao = (e, t) => !Ar(E(e, t)).length && J(e, t), co = (e, t, r) => {
  const s = Pt(E(e, r));
  return L(s, "root", t[r]), L(e, r, s), e;
}, qt = (e) => Oe(e);
function bs(e, t, r = "validate") {
  if (qt(e) || Array.isArray(e) && e.every(qt) || $e(e) && !e)
    return {
      type: r,
      message: qt(e) ? e : "",
      ref: t
    };
}
var lt = (e) => G(e) && !Gt(e) ? e : {
  value: e,
  message: ""
}, xs = async (e, t, r, s, n, i) => {
  const { ref: o, refs: c, required: h, maxLength: p, minLength: b, min: y, max: l, pattern: j, validate: N, name: x, valueAsNumber: z, mount: S } = e._f, w = E(r, x);
  if (!S || t.has(x))
    return {};
  const $ = c ? c[0] : o, C = (D) => {
    n && $.reportValidity && ($.setCustomValidity($e(D) ? "" : D || ""), $.reportValidity());
  }, Z = {}, Y = Rr(o), ne = Rt(o), ge = Y || ne, T = (z || Or(o)) && X(o.value) && X(w) || Kt(o) && o.value === "" || w === "" || Array.isArray(w) && !w.length, ce = Fr.bind(null, x, s, Z), ue = (D, V, q, ie = Te.maxLength, le = Te.minLength) => {
    const ve = D ? V : q;
    Z[x] = {
      type: D ? ie : le,
      message: ve,
      ref: o,
      ...ce(D ? ie : le, ve)
    };
  };
  if (i ? !Array.isArray(w) || !w.length : h && (!ge && (T || me(w)) || $e(w) && !w || ne && !pn(c).isValid || Y && !yn(c).isValid)) {
    const { value: D, message: V } = qt(h) ? { value: !!h, message: h } : lt(h);
    if (D && (Z[x] = {
      type: Te.required,
      message: V,
      ref: $,
      ...ce(Te.required, V)
    }, !s))
      return C(V), Z;
  }
  if (!T && (!me(y) || !me(l))) {
    let D, V;
    const q = lt(l), ie = lt(y);
    if (!me(w) && !isNaN(w)) {
      const le = o.valueAsNumber || w && +w;
      me(q.value) || (D = le > q.value), me(ie.value) || (V = le < ie.value);
    } else {
      const le = o.valueAsDate || new Date(w), ve = (v) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + v), Ue = o.type == "time", De = o.type == "week";
      Oe(q.value) && w && (D = Ue ? ve(w) > ve(q.value) : De ? w > q.value : le > new Date(q.value)), Oe(ie.value) && w && (V = Ue ? ve(w) < ve(ie.value) : De ? w < ie.value : le < new Date(ie.value));
    }
    if ((D || V) && (ue(!!D, q.message, ie.message, Te.max, Te.min), !s))
      return C(Z[x].message), Z;
  }
  if ((p || b) && !T && (Oe(w) || i && Array.isArray(w))) {
    const D = lt(p), V = lt(b), q = !me(D.value) && w.length > +D.value, ie = !me(V.value) && w.length < +V.value;
    if ((q || ie) && (ue(q, D.message, V.message), !s))
      return C(Z[x].message), Z;
  }
  if (j && !T && Oe(w)) {
    const { value: D, message: V } = lt(j);
    if (Gt(D) && !w.match(D) && (Z[x] = {
      type: Te.pattern,
      message: V,
      ref: o,
      ...ce(Te.pattern, V)
    }, !s))
      return C(V), Z;
  }
  if (N) {
    if (Ne(N)) {
      const D = await N(w, r), V = bs(D, $);
      if (V && (Z[x] = {
        ...V,
        ...ce(Te.validate, V.message)
      }, !s))
        return C(V.message), Z;
    } else if (G(N)) {
      let D = {};
      for (const V in N) {
        if (!ye(D) && !s)
          break;
        const q = bs(await N[V](w, r), $, V);
        q && (D = {
          ...q,
          ...ce(V, q.message)
        }, C(q.message), s && (Z[x] = D));
      }
      if (!ye(D) && (Z[x] = {
        ref: $,
        ...D
      }, !s))
        return Z;
    }
  }
  return C(!0), Z;
};
const uo = {
  mode: Pe.onSubmit,
  reValidateMode: Pe.onChange,
  shouldFocusError: !0
};
function lo(e = {}) {
  let t = {
    ...uo,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isLoading: Ne(t.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1
  }, s = {}, n = G(t.defaultValues) || G(t.values) ? oe(t.defaultValues || t.values) || {} : {}, i = t.shouldUnregister ? {} : oe(n), o = {
    action: !1,
    mount: !1,
    watch: !1
  }, c = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, h, p = 0;
  const b = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  };
  let y = {
    ...b
  };
  const l = {
    array: ls(),
    state: ls()
  }, j = t.criteriaMode === Pe.all, N = (u) => (d) => {
    clearTimeout(p), p = setTimeout(u, d);
  }, x = async (u) => {
    if (!t.disabled && (b.isValid || y.isValid || u)) {
      const d = t.resolver ? ye((await ne()).errors) : await T(s, !0);
      d !== r.isValid && l.state.next({
        isValid: d
      });
    }
  }, z = (u, d) => {
    !t.disabled && (b.isValidating || b.validatingFields || y.isValidating || y.validatingFields) && ((u || Array.from(c.mount)).forEach((f) => {
      f && (d ? L(r.validatingFields, f, d) : J(r.validatingFields, f));
    }), l.state.next({
      validatingFields: r.validatingFields,
      isValidating: !ye(r.validatingFields)
    }));
  }, S = (u, d = [], f, P, k = !0, _ = !0) => {
    if (P && f && !t.disabled) {
      if (o.action = !0, _ && Array.isArray(E(s, u))) {
        const A = f(E(s, u), P.argA, P.argB);
        k && L(s, u, A);
      }
      if (_ && Array.isArray(E(r.errors, u))) {
        const A = f(E(r.errors, u), P.argA, P.argB);
        k && L(r.errors, u, A), ao(r.errors, u);
      }
      if ((b.touchedFields || y.touchedFields) && _ && Array.isArray(E(r.touchedFields, u))) {
        const A = f(E(r.touchedFields, u), P.argA, P.argB);
        k && L(r.touchedFields, u, A);
      }
      (b.dirtyFields || y.dirtyFields) && (r.dirtyFields = jt(n, i)), l.state.next({
        name: u,
        isDirty: ue(u, d),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      L(i, u, d);
  }, w = (u, d) => {
    L(r.errors, u, d), l.state.next({
      errors: r.errors
    });
  }, $ = (u) => {
    r.errors = u, l.state.next({
      errors: r.errors,
      isValid: !1
    });
  }, C = (u, d, f, P) => {
    const k = E(s, u);
    if (k) {
      const _ = E(i, u, X(f) ? E(n, u) : f);
      X(_) || P && P.defaultChecked || d ? L(i, u, d ? _ : ms(k._f)) : q(u, _), o.mount && x();
    }
  }, Z = (u, d, f, P, k) => {
    let _ = !1, A = !1;
    const U = {
      name: u
    };
    if (!t.disabled) {
      if (!f || P) {
        (b.isDirty || y.isDirty) && (A = r.isDirty, r.isDirty = U.isDirty = ue(), _ = A !== U.isDirty);
        const M = qe(E(n, u), d);
        A = !!E(r.dirtyFields, u), M ? J(r.dirtyFields, u) : L(r.dirtyFields, u, !0), U.dirtyFields = r.dirtyFields, _ = _ || (b.dirtyFields || y.dirtyFields) && A !== !M;
      }
      if (f) {
        const M = E(r.touchedFields, u);
        M || (L(r.touchedFields, u, f), U.touchedFields = r.touchedFields, _ = _ || (b.touchedFields || y.touchedFields) && M !== f);
      }
      _ && k && l.state.next(U);
    }
    return _ ? U : {};
  }, Y = (u, d, f, P) => {
    const k = E(r.errors, u), _ = (b.isValid || y.isValid) && $e(d) && r.isValid !== d;
    if (t.delayError && f ? (h = N(() => w(u, f)), h(t.delayError)) : (clearTimeout(p), h = null, f ? L(r.errors, u, f) : J(r.errors, u)), (f ? !qe(k, f) : k) || !ye(P) || _) {
      const A = {
        ...P,
        ..._ && $e(d) ? { isValid: d } : {},
        errors: r.errors,
        name: u
      };
      r = {
        ...r,
        ...A
      }, l.state.next(A);
    }
  }, ne = async (u) => {
    z(u, !0);
    const d = await t.resolver(i, t.context, to(u || c.mount, s, t.criteriaMode, t.shouldUseNativeValidation));
    return z(u), d;
  }, ge = async (u) => {
    const { errors: d } = await ne(u);
    if (u)
      for (const f of u) {
        const P = E(d, f);
        P ? L(r.errors, f, P) : J(r.errors, f);
      }
    else
      r.errors = d;
    return d;
  }, T = async (u, d, f = {
    valid: !0
  }) => {
    for (const P in u) {
      const k = u[P];
      if (k) {
        const { _f: _, ...A } = k;
        if (_) {
          const U = c.array.has(_.name), M = k._f && ro(k._f);
          M && b.validatingFields && z([P], !0);
          const xe = await xs(k, c.disabled, i, j, t.shouldUseNativeValidation && !d, U);
          if (M && b.validatingFields && z([P]), xe[_.name] && (f.valid = !1, d))
            break;
          !d && (E(xe, _.name) ? U ? co(r.errors, xe, _.name) : L(r.errors, _.name, xe[_.name]) : J(r.errors, _.name));
        }
        !ye(A) && await T(A, d, f);
      }
    }
    return f.valid;
  }, ce = () => {
    for (const u of c.unMount) {
      const d = E(s, u);
      d && (d._f.refs ? d._f.refs.every((f) => !hr(f)) : !hr(d._f.ref)) && Ge(u);
    }
    c.unMount = /* @__PURE__ */ new Set();
  }, ue = (u, d) => !t.disabled && (u && d && L(i, u, d), !qe(v(), n)), D = (u, d, f) => Yi(u, c, {
    ...o.mount ? i : X(d) ? n : Oe(u) ? { [u]: d } : d
  }, f, d), V = (u) => Ar(E(o.mount ? i : n, u, t.shouldUnregister ? E(n, u, []) : [])), q = (u, d, f = {}) => {
    const P = E(s, u);
    let k = d;
    if (P) {
      const _ = P._f;
      _ && (!_.disabled && L(i, u, gn(d, _)), k = Kt(_.ref) && me(d) ? "" : d, fn(_.ref) ? [..._.ref.options].forEach((A) => A.selected = k.includes(A.value)) : _.refs ? Rt(_.ref) ? _.refs.forEach((A) => {
        (!A.defaultChecked || !A.disabled) && (Array.isArray(k) ? A.checked = !!k.find((U) => U === A.value) : A.checked = k === A.value || !!k);
      }) : _.refs.forEach((A) => A.checked = A.value === k) : Or(_.ref) ? _.ref.value = "" : (_.ref.value = k, _.ref.type || l.state.next({
        name: u,
        values: oe(i)
      })));
    }
    (f.shouldDirty || f.shouldTouch) && Z(u, k, f.shouldTouch, f.shouldDirty, !0), f.shouldValidate && De(u);
  }, ie = (u, d, f) => {
    for (const P in d) {
      if (!d.hasOwnProperty(P))
        return;
      const k = d[P], _ = u + "." + P, A = E(s, _);
      (c.array.has(u) || G(k) || A && !A._f) && !Je(k) ? ie(_, k, f) : q(_, k, f);
    }
  }, le = (u, d, f = {}) => {
    const P = E(s, u), k = c.array.has(u), _ = oe(d);
    L(i, u, _), k ? (l.array.next({
      name: u,
      values: oe(i)
    }), (b.isDirty || b.dirtyFields || y.isDirty || y.dirtyFields) && f.shouldDirty && l.state.next({
      name: u,
      dirtyFields: jt(n, i),
      isDirty: ue(u, _)
    })) : P && !P._f && !me(_) ? ie(u, _, f) : q(u, _, f), ys(u, c) && l.state.next({ ...r }), l.state.next({
      name: o.mount ? u : void 0,
      values: oe(i)
    });
  }, ve = async (u) => {
    o.mount = !0;
    const d = u.target;
    let f = d.name, P = !0;
    const k = E(s, f), _ = (M) => {
      P = Number.isNaN(M) || Je(M) && isNaN(M.getTime()) || qe(M, E(i, f, M));
    }, A = ps(t.mode), U = ps(t.reValidateMode);
    if (k) {
      let M, xe;
      const Dt = d.type ? ms(k._f) : qi(u), Le = u.type === us.BLUR || u.type === us.FOCUS_OUT, Tn = !so(k._f) && !t.resolver && !E(r.errors, f) && !k._f.deps || oo(Le, E(r.touchedFields, f), r.isSubmitted, U, A), ur = ys(f, c, Le);
      L(i, f, Dt), Le ? (k._f.onBlur && k._f.onBlur(u), h && h(0)) : k._f.onChange && k._f.onChange(u);
      const lr = Z(f, Dt, Le), In = !ye(lr) || ur;
      if (!Le && l.state.next({
        name: f,
        type: u.type,
        values: oe(i)
      }), Tn)
        return (b.isValid || y.isValid) && (t.mode === "onBlur" ? Le && x() : Le || x()), In && l.state.next({ name: f, ...ur ? {} : lr });
      if (!Le && ur && l.state.next({ ...r }), t.resolver) {
        const { errors: Wr } = await ne([f]);
        if (_(Dt), P) {
          const Vn = vs(r.errors, s, f), Kr = vs(Wr, s, Vn.name || f);
          M = Kr.error, f = Kr.name, xe = ye(Wr);
        }
      } else
        z([f], !0), M = (await xs(k, c.disabled, i, j, t.shouldUseNativeValidation))[f], z([f]), _(Dt), P && (M ? xe = !1 : (b.isValid || y.isValid) && (xe = await T(s, !0)));
      P && (k._f.deps && De(k._f.deps), Y(f, xe, M, lr));
    }
  }, Ue = (u, d) => {
    if (E(r.errors, d) && u.focus)
      return u.focus(), 1;
  }, De = async (u, d = {}) => {
    let f, P;
    const k = Pt(u);
    if (t.resolver) {
      const _ = await ge(X(u) ? u : k);
      f = ye(_), P = u ? !k.some((A) => E(_, A)) : f;
    } else u ? (P = (await Promise.all(k.map(async (_) => {
      const A = E(s, _);
      return await T(A && A._f ? { [_]: A } : A);
    }))).every(Boolean), !(!P && !r.isValid) && x()) : P = f = await T(s);
    return l.state.next({
      ...!Oe(u) || (b.isValid || y.isValid) && f !== r.isValid ? {} : { name: u },
      ...t.resolver || !u ? { isValid: f } : {},
      errors: r.errors
    }), d.shouldFocus && !P && Nt(s, Ue, u ? k : c.mount), P;
  }, v = (u) => {
    const d = {
      ...o.mount ? i : n
    };
    return X(u) ? d : Oe(u) ? E(d, u) : u.map((f) => E(d, f));
  }, R = (u, d) => ({
    invalid: !!E((d || r).errors, u),
    isDirty: !!E((d || r).dirtyFields, u),
    error: E((d || r).errors, u),
    isValidating: !!E(r.validatingFields, u),
    isTouched: !!E((d || r).touchedFields, u)
  }), Q = (u) => {
    u && Pt(u).forEach((d) => J(r.errors, d)), l.state.next({
      errors: u ? r.errors : {}
    });
  }, re = (u, d, f) => {
    const P = (E(s, u, { _f: {} })._f || {}).ref, k = E(r.errors, u) || {}, { ref: _, message: A, type: U, ...M } = k;
    L(r.errors, u, {
      ...M,
      ...d,
      ref: P
    }), l.state.next({
      name: u,
      errors: r.errors,
      isValid: !1
    }), f && f.shouldFocus && P && P.focus && P.focus();
  }, Ee = (u, d) => Ne(u) ? l.state.subscribe({
    next: (f) => u(D(void 0, d), f)
  }) : D(u, d, !0), be = (u) => l.state.subscribe({
    next: (d) => {
      io(u.name, d.name, u.exact) && no(d, u.formState || b, Dn, u.reRenderRoot) && u.callback({
        values: { ...i },
        ...r,
        ...d
      });
    }
  }).unsubscribe, xt = (u) => (o.mount = !0, y = {
    ...y,
    ...u.formState
  }, be({
    ...u,
    formState: y
  })), Ge = (u, d = {}) => {
    for (const f of u ? Pt(u) : c.mount)
      c.mount.delete(f), c.array.delete(f), d.keepValue || (J(s, f), J(i, f)), !d.keepError && J(r.errors, f), !d.keepDirty && J(r.dirtyFields, f), !d.keepTouched && J(r.touchedFields, f), !d.keepIsValidating && J(r.validatingFields, f), !t.shouldUnregister && !d.keepDefaultValue && J(n, f);
    l.state.next({
      values: oe(i)
    }), l.state.next({
      ...r,
      ...d.keepDirty ? { isDirty: ue() } : {}
    }), !d.keepIsValid && x();
  }, se = ({ disabled: u, name: d }) => {
    ($e(u) && o.mount || u || c.disabled.has(d)) && (u ? c.disabled.add(d) : c.disabled.delete(d));
  }, ze = (u, d = {}) => {
    let f = E(s, u);
    const P = $e(d.disabled) || $e(t.disabled);
    return L(s, u, {
      ...f || {},
      _f: {
        ...f && f._f ? f._f : { ref: { name: u } },
        name: u,
        mount: !0,
        ...d
      }
    }), c.mount.add(u), f ? se({
      disabled: $e(d.disabled) ? d.disabled : t.disabled,
      name: u
    }) : C(u, !0, d.value), {
      ...P ? { disabled: d.disabled || t.disabled } : {},
      ...t.progressive ? {
        required: !!d.required,
        min: kt(d.min),
        max: kt(d.max),
        minLength: kt(d.minLength),
        maxLength: kt(d.maxLength),
        pattern: kt(d.pattern)
      } : {},
      name: u,
      onChange: ve,
      onBlur: ve,
      ref: (k) => {
        if (k) {
          ze(u, d), f = E(s, u);
          const _ = X(k.value) && k.querySelectorAll && k.querySelectorAll("input,select,textarea")[0] || k, A = Ji(_), U = f._f.refs || [];
          if (A ? U.find((M) => M === _) : _ === f._f.ref)
            return;
          L(s, u, {
            _f: {
              ...f._f,
              ...A ? {
                refs: [
                  ...U.filter(hr),
                  _,
                  ...Array.isArray(E(n, u)) ? [{}] : []
                ],
                ref: { type: _.type, name: u }
              } : { ref: _ }
            }
          }), C(u, !1, void 0, _);
        } else
          f = E(s, u, {}), f._f && (f._f.mount = !1), (t.shouldUnregister || d.shouldUnregister) && !(Bi(c.array, u) && o.action) && c.unMount.add(u);
      }
    };
  }, Ye = () => t.shouldFocusError && Nt(s, Ue, c.mount), cr = (u) => {
    $e(u) && (l.state.next({ disabled: u }), Nt(s, (d, f) => {
      const P = E(s, f);
      P && (d.disabled = P._f.disabled || u, Array.isArray(P._f.refs) && P._f.refs.forEach((k) => {
        k.disabled = P._f.disabled || u;
      }));
    }, 0, !1));
  }, Mr = (u, d) => async (f) => {
    let P;
    f && (f.preventDefault && f.preventDefault(), f.persist && f.persist());
    let k = oe(i);
    if (l.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: _, values: A } = await ne();
      r.errors = _, k = oe(A);
    } else
      await T(s);
    if (c.disabled.size)
      for (const _ of c.disabled)
        J(k, _);
    if (J(r.errors, "root"), ye(r.errors)) {
      l.state.next({
        errors: {}
      });
      try {
        await u(k, f);
      } catch (_) {
        P = _;
      }
    } else
      d && await d({ ...r.errors }, f), Ye(), setTimeout(Ye);
    if (l.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: ye(r.errors) && !P,
      submitCount: r.submitCount + 1,
      errors: r.errors
    }), P)
      throw P;
  }, Rn = (u, d = {}) => {
    E(s, u) && (X(d.defaultValue) ? le(u, oe(E(n, u))) : (le(u, d.defaultValue), L(n, u, oe(d.defaultValue))), d.keepTouched || J(r.touchedFields, u), d.keepDirty || (J(r.dirtyFields, u), r.isDirty = d.defaultValue ? ue(u, oe(E(n, u))) : ue()), d.keepError || (J(r.errors, u), b.isValid && x()), l.state.next({ ...r }));
  }, qr = (u, d = {}) => {
    const f = u ? oe(u) : n, P = oe(f), k = ye(u), _ = k ? n : P;
    if (d.keepDefaultValues || (n = f), !d.keepValues) {
      if (d.keepDirtyValues) {
        const A = /* @__PURE__ */ new Set([
          ...c.mount,
          ...Object.keys(jt(n, i))
        ]);
        for (const U of Array.from(A))
          E(r.dirtyFields, U) ? L(_, U, E(i, U)) : le(U, E(_, U));
      } else {
        if ($r && X(u))
          for (const A of c.mount) {
            const U = E(s, A);
            if (U && U._f) {
              const M = Array.isArray(U._f.refs) ? U._f.refs[0] : U._f.ref;
              if (Kt(M)) {
                const xe = M.closest("form");
                if (xe) {
                  xe.reset();
                  break;
                }
              }
            }
          }
        if (d.keepFieldsRef)
          for (const A of c.mount)
            le(A, E(_, A));
        else
          s = {};
      }
      i = t.shouldUnregister ? d.keepDefaultValues ? oe(n) : {} : oe(_), l.array.next({
        values: { ..._ }
      }), l.state.next({
        values: { ..._ }
      });
    }
    c = {
      mount: d.keepDirtyValues ? c.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, o.mount = !b.isValid || !!d.keepIsValid || !!d.keepDirtyValues, o.watch = !!t.shouldUnregister, l.state.next({
      submitCount: d.keepSubmitCount ? r.submitCount : 0,
      isDirty: k ? !1 : d.keepDirty ? r.isDirty : !!(d.keepDefaultValues && !qe(u, n)),
      isSubmitted: d.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: k ? {} : d.keepDirtyValues ? d.keepDefaultValues && i ? jt(n, i) : r.dirtyFields : d.keepDefaultValues && u ? jt(n, u) : d.keepDirty ? r.dirtyFields : {},
      touchedFields: d.keepTouched ? r.touchedFields : {},
      errors: d.keepErrors ? r.errors : {},
      isSubmitSuccessful: d.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Qr = (u, d) => qr(Ne(u) ? u(i) : u, d), Zn = (u, d = {}) => {
    const f = E(s, u), P = f && f._f;
    if (P) {
      const k = P.refs ? P.refs[0] : P.ref;
      k.focus && (k.focus(), d.shouldSelect && Ne(k.select) && k.select());
    }
  }, Dn = (u) => {
    r = {
      ...r,
      ...u
    };
  }, Br = {
    control: {
      register: ze,
      unregister: Ge,
      getFieldState: R,
      handleSubmit: Mr,
      setError: re,
      _subscribe: be,
      _runSchema: ne,
      _focusError: Ye,
      _getWatch: D,
      _getDirty: ue,
      _setValid: x,
      _setFieldArray: S,
      _setDisabledField: se,
      _setErrors: $,
      _getFieldArray: V,
      _reset: qr,
      _resetDefaultValues: () => Ne(t.defaultValues) && t.defaultValues().then((u) => {
        Qr(u, t.resetOptions), l.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: ce,
      _disableForm: cr,
      _subjects: l,
      _proxyFormState: b,
      get _fields() {
        return s;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return o;
      },
      set _state(u) {
        o = u;
      },
      get _defaultValues() {
        return n;
      },
      get _names() {
        return c;
      },
      set _names(u) {
        c = u;
      },
      get _formState() {
        return r;
      },
      get _options() {
        return t;
      },
      set _options(u) {
        t = {
          ...t,
          ...u
        };
      }
    },
    subscribe: xt,
    trigger: De,
    register: ze,
    handleSubmit: Mr,
    watch: Ee,
    setValue: le,
    getValues: v,
    reset: Qr,
    resetField: Rn,
    clearErrors: Q,
    unregister: Ge,
    setError: re,
    setFocus: Zn,
    getFieldState: R
  };
  return {
    ...Br,
    formControl: Br
  };
}
function fo(e = {}) {
  const t = we.useRef(void 0), r = we.useRef(void 0), [s, n] = we.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Ne(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    isReady: !1,
    defaultValues: Ne(e.defaultValues) ? void 0 : e.defaultValues
  });
  if (!t.current)
    if (e.formControl)
      t.current = {
        ...e.formControl,
        formState: s
      }, e.defaultValues && !Ne(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
    else {
      const { formControl: o, ...c } = lo(e);
      t.current = {
        ...c,
        formState: s
      };
    }
  const i = t.current.control;
  return i._options = e, Gi(() => {
    const o = i._subscribe({
      formState: i._proxyFormState,
      callback: () => n({ ...i._formState }),
      reRenderRoot: !0
    });
    return n((c) => ({
      ...c,
      isReady: !0
    })), i._formState.isReady = !0, o;
  }, [i]), we.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]), we.useEffect(() => {
    e.mode && (i._options.mode = e.mode), e.reValidateMode && (i._options.reValidateMode = e.reValidateMode);
  }, [i, e.mode, e.reValidateMode]), we.useEffect(() => {
    e.errors && (i._setErrors(e.errors), i._focusError());
  }, [i, e.errors]), we.useEffect(() => {
    e.shouldUnregister && i._subjects.state.next({
      values: i._getWatch()
    });
  }, [i, e.shouldUnregister]), we.useEffect(() => {
    if (i._proxyFormState.isDirty) {
      const o = i._getDirty();
      o !== s.isDirty && i._subjects.state.next({
        isDirty: o
      });
    }
  }, [i, s.isDirty]), we.useEffect(() => {
    e.values && !qe(e.values, r.current) ? (i._reset(e.values, {
      keepFieldsRef: !0,
      ...i._options.resetOptions
    }), r.current = e.values, n((o) => ({ ...o }))) : i._resetDefaultValues();
  }, [i, e.values]), we.useEffect(() => {
    i._state.mount || (i._setValid(), i._state.mount = !0), i._state.watch && (i._state.watch = !1, i._subjects.state.next({ ...i._formState })), i._removeUnmounted();
  }), t.current.formState = Hi(s, i), t.current;
}
const ws = (e, t, r) => {
  if (e && "reportValidity" in e) {
    const s = E(r, t);
    e.setCustomValidity(s && s.message || ""), e.reportValidity();
  }
}, _r = (e, t) => {
  for (const r in t.fields) {
    const s = t.fields[r];
    s && s.ref && "reportValidity" in s.ref ? ws(s.ref, r, e) : s && s.refs && s.refs.forEach((n) => ws(n, r, e));
  }
}, _s = (e, t) => {
  t.shouldUseNativeValidation && _r(e, t);
  const r = {};
  for (const s in e) {
    const n = E(t.fields, s), i = Object.assign(e[s] || {}, { ref: n && n.ref });
    if (ho(t.names || Object.keys(e), s)) {
      const o = Object.assign({}, E(r, s));
      L(o, "root", i), L(r, s, o);
    } else L(r, s, i);
  }
  return r;
}, ho = (e, t) => {
  const r = js(t);
  return e.some((s) => js(s).match(`^${r}\\.\\d+`));
};
function js(e) {
  return e.replace(/\]|\[/g, "");
}
function g(e, t, r) {
  function s(c, h) {
    var p;
    Object.defineProperty(c, "_zod", {
      value: c._zod ?? {},
      enumerable: !1
    }), (p = c._zod).traits ?? (p.traits = /* @__PURE__ */ new Set()), c._zod.traits.add(e), t(c, h);
    for (const b in o.prototype)
      b in c || Object.defineProperty(c, b, { value: o.prototype[b].bind(c) });
    c._zod.constr = o, c._zod.def = h;
  }
  const n = (r == null ? void 0 : r.Parent) ?? Object;
  class i extends n {
  }
  Object.defineProperty(i, "name", { value: e });
  function o(c) {
    var h;
    const p = r != null && r.Parent ? new i() : this;
    s(p, c), (h = p._zod).deferred ?? (h.deferred = []);
    for (const b of p._zod.deferred)
      b();
    return p;
  }
  return Object.defineProperty(o, "init", { value: s }), Object.defineProperty(o, Symbol.hasInstance, {
    value: (c) => {
      var h, p;
      return r != null && r.Parent && c instanceof r.Parent ? !0 : (p = (h = c == null ? void 0 : c._zod) == null ? void 0 : h.traits) == null ? void 0 : p.has(e);
    }
  }), Object.defineProperty(o, "name", { value: e }), o;
}
class At extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
const vn = {};
function ot(e) {
  return vn;
}
function mo(e) {
  const t = Object.values(e).filter((s) => typeof s == "number");
  return Object.entries(e).filter(([s, n]) => t.indexOf(+s) === -1).map(([s, n]) => n);
}
function po(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function bn(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function Zr(e) {
  return e == null;
}
function Dr(e) {
  const t = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
function B(e, t, r) {
  Object.defineProperty(e, t, {
    get() {
      {
        const s = r();
        return e[t] = s, s;
      }
    },
    set(s) {
      Object.defineProperty(e, t, {
        value: s
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Tr(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function St(e) {
  return JSON.stringify(e);
}
const xn = Error.captureStackTrace ? Error.captureStackTrace : (...e) => {
};
function jr(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const go = bn(() => {
  var e;
  if (typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) != null && e.includes("Cloudflare")))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function kr(e) {
  if (jr(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(jr(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
const yo = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function nr(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ut(e, t, r) {
  const s = new e._zod.constr(t ?? e._zod.def);
  return (!t || r != null && r.parent) && (s._zod.parent = e), s;
}
function F(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if ((t == null ? void 0 : t.message) !== void 0) {
    if ((t == null ? void 0 : t.error) !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function vo(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
function bo(e, t) {
  const r = {}, s = e._zod.def;
  for (const n in t) {
    if (!(n in s.shape))
      throw new Error(`Unrecognized key: "${n}"`);
    t[n] && (r[n] = s.shape[n]);
  }
  return ut(e, {
    ...e._zod.def,
    shape: r,
    checks: []
  });
}
function xo(e, t) {
  const r = { ...e._zod.def.shape }, s = e._zod.def;
  for (const n in t) {
    if (!(n in s.shape))
      throw new Error(`Unrecognized key: "${n}"`);
    t[n] && delete r[n];
  }
  return ut(e, {
    ...e._zod.def,
    shape: r,
    checks: []
  });
}
function wo(e, t) {
  if (!kr(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = {
    ...e._zod.def,
    get shape() {
      const s = { ...e._zod.def.shape, ...t };
      return Tr(this, "shape", s), s;
    },
    checks: []
    // delete existing checks
  };
  return ut(e, r);
}
function _o(e, t) {
  return ut(e, {
    ...e._zod.def,
    get shape() {
      const r = { ...e._zod.def.shape, ...t._zod.def.shape };
      return Tr(this, "shape", r), r;
    },
    catchall: t._zod.def.catchall,
    checks: []
    // delete existing checks
  });
}
function jo(e, t, r) {
  const s = t._zod.def.shape, n = { ...s };
  if (r)
    for (const i in r) {
      if (!(i in s))
        throw new Error(`Unrecognized key: "${i}"`);
      r[i] && (n[i] = e ? new e({
        type: "optional",
        innerType: s[i]
      }) : s[i]);
    }
  else
    for (const i in s)
      n[i] = e ? new e({
        type: "optional",
        innerType: s[i]
      }) : s[i];
  return ut(t, {
    ...t._zod.def,
    shape: n,
    checks: []
  });
}
function ko(e, t, r) {
  const s = t._zod.def.shape, n = { ...s };
  if (r)
    for (const i in r) {
      if (!(i in n))
        throw new Error(`Unrecognized key: "${i}"`);
      r[i] && (n[i] = new e({
        type: "nonoptional",
        innerType: s[i]
      }));
    }
  else
    for (const i in s)
      n[i] = new e({
        type: "nonoptional",
        innerType: s[i]
      });
  return ut(t, {
    ...t._zod.def,
    shape: n,
    // optional: [],
    checks: []
  });
}
function Et(e, t = 0) {
  var r;
  for (let s = t; s < e.issues.length; s++)
    if (((r = e.issues[s]) == null ? void 0 : r.continue) !== !0)
      return !0;
  return !1;
}
function Ir(e, t) {
  return t.map((r) => {
    var s;
    return (s = r).path ?? (s.path = []), r.path.unshift(e), r;
  });
}
function Vt(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.message;
}
function at(e, t, r) {
  var n, i, o, c, h, p;
  const s = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const b = Vt((o = (i = (n = e.inst) == null ? void 0 : n._zod.def) == null ? void 0 : i.error) == null ? void 0 : o.call(i, e)) ?? Vt((c = t == null ? void 0 : t.error) == null ? void 0 : c.call(t, e)) ?? Vt((h = r.customError) == null ? void 0 : h.call(r, e)) ?? Vt((p = r.localeError) == null ? void 0 : p.call(r, e)) ?? "Invalid input";
    s.message = b;
  }
  return delete s.inst, delete s.continue, t != null && t.reportInput || delete s.input, s;
}
function Vr(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Ct(...e) {
  const [t, r, s] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: r,
    inst: s
  } : { ...t };
}
const wn = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), Object.defineProperty(e, "message", {
    get() {
      return JSON.stringify(t, po, 2);
    },
    enumerable: !0
    // configurable: false,
  }), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, Ur = g("$ZodError", wn), ir = g("$ZodError", wn, { Parent: Error });
function So(e, t = (r) => r.message) {
  const r = {}, s = [];
  for (const n of e.issues)
    n.path.length > 0 ? (r[n.path[0]] = r[n.path[0]] || [], r[n.path[0]].push(t(n))) : s.push(t(n));
  return { formErrors: s, fieldErrors: r };
}
function Po(e, t) {
  const r = t || function(i) {
    return i.message;
  }, s = { _errors: [] }, n = (i) => {
    for (const o of i.issues)
      if (o.code === "invalid_union" && o.errors.length)
        o.errors.map((c) => n({ issues: c }));
      else if (o.code === "invalid_key")
        n({ issues: o.issues });
      else if (o.code === "invalid_element")
        n({ issues: o.issues });
      else if (o.path.length === 0)
        s._errors.push(r(o));
      else {
        let c = s, h = 0;
        for (; h < o.path.length; ) {
          const p = o.path[h];
          h === o.path.length - 1 ? (c[p] = c[p] || { _errors: [] }, c[p]._errors.push(r(o))) : c[p] = c[p] || { _errors: [] }, c = c[p], h++;
        }
      }
  };
  return n(e), s;
}
const _n = (e) => (t, r, s, n) => {
  const i = s ? Object.assign(s, { async: !1 }) : { async: !1 }, o = t._zod.run({ value: r, issues: [] }, i);
  if (o instanceof Promise)
    throw new At();
  if (o.issues.length) {
    const c = new ((n == null ? void 0 : n.Err) ?? e)(o.issues.map((h) => at(h, i, ot())));
    throw xn(c, n == null ? void 0 : n.callee), c;
  }
  return o.value;
}, No = /* @__PURE__ */ _n(ir), jn = (e) => async (t, r, s, n) => {
  const i = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let o = t._zod.run({ value: r, issues: [] }, i);
  if (o instanceof Promise && (o = await o), o.issues.length) {
    const c = new ((n == null ? void 0 : n.Err) ?? e)(o.issues.map((h) => at(h, i, ot())));
    throw xn(c, n == null ? void 0 : n.callee), c;
  }
  return o.value;
}, Eo = /* @__PURE__ */ jn(ir), kn = (e) => (t, r, s) => {
  const n = s ? { ...s, async: !1 } : { async: !1 }, i = t._zod.run({ value: r, issues: [] }, n);
  if (i instanceof Promise)
    throw new At();
  return i.issues.length ? {
    success: !1,
    error: new (e ?? Ur)(i.issues.map((o) => at(o, n, ot())))
  } : { success: !0, data: i.value };
}, zo = /* @__PURE__ */ kn(ir), Sn = (e) => async (t, r, s) => {
  const n = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let i = t._zod.run({ value: r, issues: [] }, n);
  return i instanceof Promise && (i = await i), i.issues.length ? {
    success: !1,
    error: new e(i.issues.map((o) => at(o, n, ot())))
  } : { success: !0, data: i.value };
}, $o = /* @__PURE__ */ Sn(ir), Ao = /^[cC][^\s-]{8,}$/, Co = /^[0-9a-z]+$/, Fo = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Oo = /^[0-9a-vA-V]{20}$/, Ro = /^[A-Za-z0-9]{27}$/, Zo = /^[a-zA-Z0-9_-]{21}$/, Do = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, To = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, ks = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/, Io = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Vo = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Uo() {
  return new RegExp(Vo, "u");
}
const Lo = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Mo = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/, qo = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Qo = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Bo = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Pn = /^[A-Za-z0-9_-]*$/, Wo = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/, Ko = /^\+(?:[0-9]){6,14}[0-9]$/, Nn = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Ho = /* @__PURE__ */ new RegExp(`^${Nn}$`);
function En(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Go(e) {
  return new RegExp(`^${En(e)}$`);
}
function Yo(e) {
  const t = En({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-]\\d{2}:\\d{2})");
  const s = `${t}(?:${r.join("|")})`;
  return new RegExp(`^${Nn}T(?:${s})$`);
}
const Jo = (e) => {
  const t = e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, Xo = /^[^A-Z]*$/, ea = /^[^a-z]*$/, Ze = /* @__PURE__ */ g("$ZodCheck", (e, t) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
}), ta = /* @__PURE__ */ g("$ZodCheckMaxLength", (e, t) => {
  var r;
  Ze.init(e, t), (r = e._zod.def).when ?? (r.when = (s) => {
    const n = s.value;
    return !Zr(n) && n.length !== void 0;
  }), e._zod.onattach.push((s) => {
    const n = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < n && (s._zod.bag.maximum = t.maximum);
  }), e._zod.check = (s) => {
    const n = s.value;
    if (n.length <= t.maximum)
      return;
    const o = Vr(n);
    s.issues.push({
      origin: o,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), ra = /* @__PURE__ */ g("$ZodCheckMinLength", (e, t) => {
  var r;
  Ze.init(e, t), (r = e._zod.def).when ?? (r.when = (s) => {
    const n = s.value;
    return !Zr(n) && n.length !== void 0;
  }), e._zod.onattach.push((s) => {
    const n = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > n && (s._zod.bag.minimum = t.minimum);
  }), e._zod.check = (s) => {
    const n = s.value;
    if (n.length >= t.minimum)
      return;
    const o = Vr(n);
    s.issues.push({
      origin: o,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), sa = /* @__PURE__ */ g("$ZodCheckLengthEquals", (e, t) => {
  var r;
  Ze.init(e, t), (r = e._zod.def).when ?? (r.when = (s) => {
    const n = s.value;
    return !Zr(n) && n.length !== void 0;
  }), e._zod.onattach.push((s) => {
    const n = s._zod.bag;
    n.minimum = t.length, n.maximum = t.length, n.length = t.length;
  }), e._zod.check = (s) => {
    const n = s.value, i = n.length;
    if (i === t.length)
      return;
    const o = Vr(n), c = i > t.length;
    s.issues.push({
      origin: o,
      ...c ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: s.value,
      inst: e,
      continue: !t.abort
    });
  };
}), or = /* @__PURE__ */ g("$ZodCheckStringFormat", (e, t) => {
  var r, s;
  Ze.init(e, t), e._zod.onattach.push((n) => {
    const i = n._zod.bag;
    i.format = t.format, t.pattern && (i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(t.pattern));
  }), t.pattern ? (r = e._zod).check ?? (r.check = (n) => {
    t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: n.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (s = e._zod).check ?? (s.check = () => {
  });
}), na = /* @__PURE__ */ g("$ZodCheckRegex", (e, t) => {
  or.init(e, t), e._zod.check = (r) => {
    t.pattern.lastIndex = 0, !t.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: r.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), ia = /* @__PURE__ */ g("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = Xo), or.init(e, t);
}), oa = /* @__PURE__ */ g("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = ea), or.init(e, t);
}), aa = /* @__PURE__ */ g("$ZodCheckIncludes", (e, t) => {
  Ze.init(e, t);
  const r = nr(t.includes), s = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${r}` : r);
  t.pattern = s, e._zod.onattach.push((n) => {
    const i = n._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(s);
  }), e._zod.check = (n) => {
    n.value.includes(t.includes, t.position) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ca = /* @__PURE__ */ g("$ZodCheckStartsWith", (e, t) => {
  Ze.init(e, t);
  const r = new RegExp(`^${nr(t.prefix)}.*`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((s) => {
    const n = s._zod.bag;
    n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(r);
  }), e._zod.check = (s) => {
    s.value.startsWith(t.prefix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: s.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ua = /* @__PURE__ */ g("$ZodCheckEndsWith", (e, t) => {
  Ze.init(e, t);
  const r = new RegExp(`.*${nr(t.suffix)}$`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((s) => {
    const n = s._zod.bag;
    n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(r);
  }), e._zod.check = (s) => {
    s.value.endsWith(t.suffix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: s.value,
      inst: e,
      continue: !t.abort
    });
  };
}), la = /* @__PURE__ */ g("$ZodCheckOverwrite", (e, t) => {
  Ze.init(e, t), e._zod.check = (r) => {
    r.value = t.tx(r.value);
  };
});
class da {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const s = t.split(`
`).filter((o) => o), n = Math.min(...s.map((o) => o.length - o.trimStart().length)), i = s.map((o) => o.slice(n)).map((o) => " ".repeat(this.indent * 2) + o);
    for (const o of i)
      this.content.push(o);
  }
  compile() {
    const t = Function, r = this == null ? void 0 : this.args, n = [...((this == null ? void 0 : this.content) ?? [""]).map((i) => `  ${i}`)];
    return new t(...r, n.join(`
`));
  }
}
const fa = {
  major: 4,
  minor: 0,
  patch: 5
}, te = /* @__PURE__ */ g("$ZodType", (e, t) => {
  var n;
  var r;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = fa;
  const s = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && s.unshift(e);
  for (const i of s)
    for (const o of i._zod.onattach)
      o(e);
  if (s.length === 0)
    (r = e._zod).deferred ?? (r.deferred = []), (n = e._zod.deferred) == null || n.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const i = (o, c, h) => {
      let p = Et(o), b;
      for (const y of c) {
        if (y._zod.def.when) {
          if (!y._zod.def.when(o))
            continue;
        } else if (p)
          continue;
        const l = o.issues.length, j = y._zod.check(o);
        if (j instanceof Promise && (h == null ? void 0 : h.async) === !1)
          throw new At();
        if (b || j instanceof Promise)
          b = (b ?? Promise.resolve()).then(async () => {
            await j, o.issues.length !== l && (p || (p = Et(o, l)));
          });
        else {
          if (o.issues.length === l)
            continue;
          p || (p = Et(o, l));
        }
      }
      return b ? b.then(() => o) : o;
    };
    e._zod.run = (o, c) => {
      const h = e._zod.parse(o, c);
      if (h instanceof Promise) {
        if (c.async === !1)
          throw new At();
        return h.then((p) => i(p, s, c));
      }
      return i(h, s, c);
    };
  }
  e["~standard"] = {
    validate: (i) => {
      var o;
      try {
        const c = zo(e, i);
        return c.success ? { value: c.data } : { issues: (o = c.error) == null ? void 0 : o.issues };
      } catch {
        return $o(e, i).then((h) => {
          var p;
          return h.success ? { value: h.data } : { issues: (p = h.error) == null ? void 0 : p.issues };
        });
      }
    },
    vendor: "zod",
    version: 1
  };
}), Lr = /* @__PURE__ */ g("$ZodString", (e, t) => {
  var r;
  te.init(e, t), e._zod.pattern = [...((r = e == null ? void 0 : e._zod.bag) == null ? void 0 : r.patterns) ?? []].pop() ?? Jo(e._zod.bag), e._zod.parse = (s, n) => {
    if (t.coerce)
      try {
        s.value = String(s.value);
      } catch {
      }
    return typeof s.value == "string" || s.issues.push({
      expected: "string",
      code: "invalid_type",
      input: s.value,
      inst: e
    }), s;
  };
}), W = /* @__PURE__ */ g("$ZodStringFormat", (e, t) => {
  or.init(e, t), Lr.init(e, t);
}), ha = /* @__PURE__ */ g("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = To), W.init(e, t);
}), ma = /* @__PURE__ */ g("$ZodUUID", (e, t) => {
  if (t.version) {
    const s = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (s === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = ks(s));
  } else
    t.pattern ?? (t.pattern = ks());
  W.init(e, t);
}), pa = /* @__PURE__ */ g("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = Io), W.init(e, t);
}), ga = /* @__PURE__ */ g("$ZodURL", (e, t) => {
  W.init(e, t), e._zod.check = (r) => {
    try {
      const s = r.value, n = new URL(s), i = n.href;
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(n.hostname) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: Wo.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(n.protocol.endsWith(":") ? n.protocol.slice(0, -1) : n.protocol) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), !s.endsWith("/") && i.endsWith("/") ? r.value = i.slice(0, -1) : r.value = i;
      return;
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "url",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), ya = /* @__PURE__ */ g("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = Uo()), W.init(e, t);
}), va = /* @__PURE__ */ g("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = Zo), W.init(e, t);
}), ba = /* @__PURE__ */ g("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = Ao), W.init(e, t);
}), xa = /* @__PURE__ */ g("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Co), W.init(e, t);
}), wa = /* @__PURE__ */ g("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = Fo), W.init(e, t);
}), _a = /* @__PURE__ */ g("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = Oo), W.init(e, t);
}), ja = /* @__PURE__ */ g("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = Ro), W.init(e, t);
}), ka = /* @__PURE__ */ g("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = Yo(t)), W.init(e, t);
}), Sa = /* @__PURE__ */ g("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = Ho), W.init(e, t);
}), Pa = /* @__PURE__ */ g("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = Go(t)), W.init(e, t);
}), Na = /* @__PURE__ */ g("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = Do), W.init(e, t);
}), Ea = /* @__PURE__ */ g("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = Lo), W.init(e, t), e._zod.onattach.push((r) => {
    const s = r._zod.bag;
    s.format = "ipv4";
  });
}), za = /* @__PURE__ */ g("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = Mo), W.init(e, t), e._zod.onattach.push((r) => {
    const s = r._zod.bag;
    s.format = "ipv6";
  }), e._zod.check = (r) => {
    try {
      new URL(`http://[${r.value}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), $a = /* @__PURE__ */ g("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = qo), W.init(e, t);
}), Aa = /* @__PURE__ */ g("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = Qo), W.init(e, t), e._zod.check = (r) => {
    const [s, n] = r.value.split("/");
    try {
      if (!n)
        throw new Error();
      const i = Number(n);
      if (`${i}` !== n)
        throw new Error();
      if (i < 0 || i > 128)
        throw new Error();
      new URL(`http://[${s}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function zn(e) {
  if (e === "")
    return !0;
  if (e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const Ca = /* @__PURE__ */ g("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = Bo), W.init(e, t), e._zod.onattach.push((r) => {
    r._zod.bag.contentEncoding = "base64";
  }), e._zod.check = (r) => {
    zn(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function Fa(e) {
  if (!Pn.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return zn(r);
}
const Oa = /* @__PURE__ */ g("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = Pn), W.init(e, t), e._zod.onattach.push((r) => {
    r._zod.bag.contentEncoding = "base64url";
  }), e._zod.check = (r) => {
    Fa(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ra = /* @__PURE__ */ g("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = Ko), W.init(e, t);
});
function Za(e, t = null) {
  try {
    const r = e.split(".");
    if (r.length !== 3)
      return !1;
    const [s] = r;
    if (!s)
      return !1;
    const n = JSON.parse(atob(s));
    return !("typ" in n && (n == null ? void 0 : n.typ) !== "JWT" || !n.alg || t && (!("alg" in n) || n.alg !== t));
  } catch {
    return !1;
  }
}
const Da = /* @__PURE__ */ g("$ZodJWT", (e, t) => {
  W.init(e, t), e._zod.check = (r) => {
    Za(r.value, t.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ta = /* @__PURE__ */ g("$ZodUnknown", (e, t) => {
  te.init(e, t), e._zod.parse = (r) => r;
}), Ia = /* @__PURE__ */ g("$ZodNever", (e, t) => {
  te.init(e, t), e._zod.parse = (r, s) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
});
function Ss(e, t, r) {
  e.issues.length && t.issues.push(...Ir(r, e.issues)), t.value[r] = e.value;
}
const Va = /* @__PURE__ */ g("$ZodArray", (e, t) => {
  te.init(e, t), e._zod.parse = (r, s) => {
    const n = r.value;
    if (!Array.isArray(n))
      return r.issues.push({
        expected: "array",
        code: "invalid_type",
        input: n,
        inst: e
      }), r;
    r.value = Array(n.length);
    const i = [];
    for (let o = 0; o < n.length; o++) {
      const c = n[o], h = t.element._zod.run({
        value: c,
        issues: []
      }, s);
      h instanceof Promise ? i.push(h.then((p) => Ss(p, r, o))) : Ss(h, r, o);
    }
    return i.length ? Promise.all(i).then(() => r) : r;
  };
});
function Ut(e, t, r) {
  e.issues.length && t.issues.push(...Ir(r, e.issues)), t.value[r] = e.value;
}
function Ps(e, t, r, s) {
  e.issues.length ? s[r] === void 0 ? r in s ? t.value[r] = void 0 : t.value[r] = e.value : t.issues.push(...Ir(r, e.issues)) : e.value === void 0 ? r in s && (t.value[r] = void 0) : t.value[r] = e.value;
}
const Ua = /* @__PURE__ */ g("$ZodObject", (e, t) => {
  te.init(e, t);
  const r = bn(() => {
    const y = Object.keys(t.shape);
    for (const j of y)
      if (!(t.shape[j] instanceof te))
        throw new Error(`Invalid element at key "${j}": expected a Zod schema`);
    const l = vo(t.shape);
    return {
      shape: t.shape,
      keys: y,
      keySet: new Set(y),
      numKeys: y.length,
      optionalKeys: new Set(l)
    };
  });
  B(e._zod, "propValues", () => {
    const y = t.shape, l = {};
    for (const j in y) {
      const N = y[j]._zod;
      if (N.values) {
        l[j] ?? (l[j] = /* @__PURE__ */ new Set());
        for (const x of N.values)
          l[j].add(x);
      }
    }
    return l;
  });
  const s = (y) => {
    const l = new da(["shape", "payload", "ctx"]), j = r.value, N = (w) => {
      const $ = St(w);
      return `shape[${$}]._zod.run({ value: input[${$}], issues: [] }, ctx)`;
    };
    l.write("const input = payload.value;");
    const x = /* @__PURE__ */ Object.create(null);
    let z = 0;
    for (const w of j.keys)
      x[w] = `key_${z++}`;
    l.write("const newResult = {}");
    for (const w of j.keys)
      if (j.optionalKeys.has(w)) {
        const $ = x[w];
        l.write(`const ${$} = ${N(w)};`);
        const C = St(w);
        l.write(`
        if (${$}.issues.length) {
          if (input[${C}] === undefined) {
            if (${C} in input) {
              newResult[${C}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${$}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${C}, ...iss.path] : [${C}],
              }))
            );
          }
        } else if (${$}.value === undefined) {
          if (${C} in input) newResult[${C}] = undefined;
        } else {
          newResult[${C}] = ${$}.value;
        }
        `);
      } else {
        const $ = x[w];
        l.write(`const ${$} = ${N(w)};`), l.write(`
          if (${$}.issues.length) payload.issues = payload.issues.concat(${$}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${St(w)}, ...iss.path] : [${St(w)}]
          })));`), l.write(`newResult[${St(w)}] = ${$}.value`);
      }
    l.write("payload.value = newResult;"), l.write("return payload;");
    const S = l.compile();
    return (w, $) => S(y, w, $);
  };
  let n;
  const i = jr, o = !vn.jitless, h = o && go.value, p = t.catchall;
  let b;
  e._zod.parse = (y, l) => {
    b ?? (b = r.value);
    const j = y.value;
    if (!i(j))
      return y.issues.push({
        expected: "object",
        code: "invalid_type",
        input: j,
        inst: e
      }), y;
    const N = [];
    if (o && h && (l == null ? void 0 : l.async) === !1 && l.jitless !== !0)
      n || (n = s(t.shape)), y = n(y, l);
    else {
      y.value = {};
      const $ = b.shape;
      for (const C of b.keys) {
        const Z = $[C], Y = Z._zod.run({ value: j[C], issues: [] }, l), ne = Z._zod.optin === "optional" && Z._zod.optout === "optional";
        Y instanceof Promise ? N.push(Y.then((ge) => ne ? Ps(ge, y, C, j) : Ut(ge, y, C))) : ne ? Ps(Y, y, C, j) : Ut(Y, y, C);
      }
    }
    if (!p)
      return N.length ? Promise.all(N).then(() => y) : y;
    const x = [], z = b.keySet, S = p._zod, w = S.def.type;
    for (const $ of Object.keys(j)) {
      if (z.has($))
        continue;
      if (w === "never") {
        x.push($);
        continue;
      }
      const C = S.run({ value: j[$], issues: [] }, l);
      C instanceof Promise ? N.push(C.then((Z) => Ut(Z, y, $))) : Ut(C, y, $);
    }
    return x.length && y.issues.push({
      code: "unrecognized_keys",
      keys: x,
      input: j,
      inst: e
    }), N.length ? Promise.all(N).then(() => y) : y;
  };
});
function Ns(e, t, r, s) {
  for (const n of e)
    if (n.issues.length === 0)
      return t.value = n.value, t;
  return t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: r,
    errors: e.map((n) => n.issues.map((i) => at(i, s, ot())))
  }), t;
}
const La = /* @__PURE__ */ g("$ZodUnion", (e, t) => {
  te.init(e, t), B(e._zod, "optin", () => t.options.some((r) => r._zod.optin === "optional") ? "optional" : void 0), B(e._zod, "optout", () => t.options.some((r) => r._zod.optout === "optional") ? "optional" : void 0), B(e._zod, "values", () => {
    if (t.options.every((r) => r._zod.values))
      return new Set(t.options.flatMap((r) => Array.from(r._zod.values)));
  }), B(e._zod, "pattern", () => {
    if (t.options.every((r) => r._zod.pattern)) {
      const r = t.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${r.map((s) => Dr(s.source)).join("|")})$`);
    }
  }), e._zod.parse = (r, s) => {
    let n = !1;
    const i = [];
    for (const o of t.options) {
      const c = o._zod.run({
        value: r.value,
        issues: []
      }, s);
      if (c instanceof Promise)
        i.push(c), n = !0;
      else {
        if (c.issues.length === 0)
          return c;
        i.push(c);
      }
    }
    return n ? Promise.all(i).then((o) => Ns(o, r, e, s)) : Ns(i, r, e, s);
  };
}), Ma = /* @__PURE__ */ g("$ZodIntersection", (e, t) => {
  te.init(e, t), e._zod.parse = (r, s) => {
    const n = r.value, i = t.left._zod.run({ value: n, issues: [] }, s), o = t.right._zod.run({ value: n, issues: [] }, s);
    return i instanceof Promise || o instanceof Promise ? Promise.all([i, o]).then(([h, p]) => Es(r, h, p)) : Es(r, i, o);
  };
});
function Sr(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (kr(e) && kr(t)) {
    const r = Object.keys(t), s = Object.keys(e).filter((i) => r.indexOf(i) !== -1), n = { ...e, ...t };
    for (const i of s) {
      const o = Sr(e[i], t[i]);
      if (!o.valid)
        return {
          valid: !1,
          mergeErrorPath: [i, ...o.mergeErrorPath]
        };
      n[i] = o.data;
    }
    return { valid: !0, data: n };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const r = [];
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = t[s], o = Sr(n, i);
      if (!o.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...o.mergeErrorPath]
        };
      r.push(o.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Es(e, t, r) {
  if (t.issues.length && e.issues.push(...t.issues), r.issues.length && e.issues.push(...r.issues), Et(e))
    return e;
  const s = Sr(t.value, r.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return e.value = s.data, e;
}
const qa = /* @__PURE__ */ g("$ZodEnum", (e, t) => {
  te.init(e, t);
  const r = mo(t.entries);
  e._zod.values = new Set(r), e._zod.pattern = new RegExp(`^(${r.filter((s) => yo.has(typeof s)).map((s) => typeof s == "string" ? nr(s) : s.toString()).join("|")})$`), e._zod.parse = (s, n) => {
    const i = s.value;
    return e._zod.values.has(i) || s.issues.push({
      code: "invalid_value",
      values: r,
      input: i,
      inst: e
    }), s;
  };
}), Qa = /* @__PURE__ */ g("$ZodTransform", (e, t) => {
  te.init(e, t), e._zod.parse = (r, s) => {
    const n = t.transform(r.value, r);
    if (s.async)
      return (n instanceof Promise ? n : Promise.resolve(n)).then((o) => (r.value = o, r));
    if (n instanceof Promise)
      throw new At();
    return r.value = n, r;
  };
}), Ba = /* @__PURE__ */ g("$ZodOptional", (e, t) => {
  te.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", B(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), B(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${Dr(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, s) => t.innerType._zod.optin === "optional" ? t.innerType._zod.run(r, s) : r.value === void 0 ? r : t.innerType._zod.run(r, s);
}), Wa = /* @__PURE__ */ g("$ZodNullable", (e, t) => {
  te.init(e, t), B(e._zod, "optin", () => t.innerType._zod.optin), B(e._zod, "optout", () => t.innerType._zod.optout), B(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${Dr(r.source)}|null)$`) : void 0;
  }), B(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (r, s) => r.value === null ? r : t.innerType._zod.run(r, s);
}), Ka = /* @__PURE__ */ g("$ZodDefault", (e, t) => {
  te.init(e, t), e._zod.optin = "optional", B(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, s) => {
    if (r.value === void 0)
      return r.value = t.defaultValue, r;
    const n = t.innerType._zod.run(r, s);
    return n instanceof Promise ? n.then((i) => zs(i, t)) : zs(n, t);
  };
});
function zs(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const Ha = /* @__PURE__ */ g("$ZodPrefault", (e, t) => {
  te.init(e, t), e._zod.optin = "optional", B(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, s) => (r.value === void 0 && (r.value = t.defaultValue), t.innerType._zod.run(r, s));
}), Ga = /* @__PURE__ */ g("$ZodNonOptional", (e, t) => {
  te.init(e, t), B(e._zod, "values", () => {
    const r = t.innerType._zod.values;
    return r ? new Set([...r].filter((s) => s !== void 0)) : void 0;
  }), e._zod.parse = (r, s) => {
    const n = t.innerType._zod.run(r, s);
    return n instanceof Promise ? n.then((i) => $s(i, e)) : $s(n, e);
  };
});
function $s(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const Ya = /* @__PURE__ */ g("$ZodCatch", (e, t) => {
  te.init(e, t), e._zod.optin = "optional", B(e._zod, "optout", () => t.innerType._zod.optout), B(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, s) => {
    const n = t.innerType._zod.run(r, s);
    return n instanceof Promise ? n.then((i) => (r.value = i.value, i.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: i.issues.map((o) => at(o, s, ot()))
      },
      input: r.value
    }), r.issues = []), r)) : (r.value = n.value, n.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: n.issues.map((i) => at(i, s, ot()))
      },
      input: r.value
    }), r.issues = []), r);
  };
}), Ja = /* @__PURE__ */ g("$ZodPipe", (e, t) => {
  te.init(e, t), B(e._zod, "values", () => t.in._zod.values), B(e._zod, "optin", () => t.in._zod.optin), B(e._zod, "optout", () => t.out._zod.optout), B(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, s) => {
    const n = t.in._zod.run(r, s);
    return n instanceof Promise ? n.then((i) => As(i, t, s)) : As(n, t, s);
  };
});
function As(e, t, r) {
  return Et(e) ? e : t.out._zod.run({ value: e.value, issues: e.issues }, r);
}
const Xa = /* @__PURE__ */ g("$ZodReadonly", (e, t) => {
  te.init(e, t), B(e._zod, "propValues", () => t.innerType._zod.propValues), B(e._zod, "values", () => t.innerType._zod.values), B(e._zod, "optin", () => t.innerType._zod.optin), B(e._zod, "optout", () => t.innerType._zod.optout), e._zod.parse = (r, s) => {
    const n = t.innerType._zod.run(r, s);
    return n instanceof Promise ? n.then(Cs) : Cs(n);
  };
});
function Cs(e) {
  return e.value = Object.freeze(e.value), e;
}
const ec = /* @__PURE__ */ g("$ZodCustom", (e, t) => {
  Ze.init(e, t), te.init(e, t), e._zod.parse = (r, s) => r, e._zod.check = (r) => {
    const s = r.value, n = t.fn(s);
    if (n instanceof Promise)
      return n.then((i) => Fs(i, r, s, e));
    Fs(n, r, s, e);
  };
});
function Fs(e, t, r, s) {
  if (!e) {
    const n = {
      code: "custom",
      input: r,
      inst: s,
      // incorporates params.error into issue reporting
      path: [...s._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !s._zod.def.abort
      // params: inst._zod.def.params,
    };
    s._zod.def.params && (n.params = s._zod.def.params), t.issues.push(Ct(n));
  }
}
class tc {
  constructor() {
    this._map = /* @__PURE__ */ new Map(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...r) {
    const s = r[0];
    if (this._map.set(t, s), s && typeof s == "object" && "id" in s) {
      if (this._idmap.has(s.id))
        throw new Error(`ID ${s.id} already exists in the registry`);
      this._idmap.set(s.id, t);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new Map(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const r = this._map.get(t);
    return r && typeof r == "object" && "id" in r && this._idmap.delete(r.id), this._map.delete(t), this;
  }
  get(t) {
    const r = t._zod.parent;
    if (r) {
      const s = { ...this.get(r) ?? {} };
      return delete s.id, { ...s, ...this._map.get(t) };
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function rc() {
  return new tc();
}
const Lt = /* @__PURE__ */ rc();
function sc(e, t) {
  return new e({
    type: "string",
    ...F(t)
  });
}
function nc(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...F(t)
  });
}
function Os(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...F(t)
  });
}
function ic(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...F(t)
  });
}
function oc(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...F(t)
  });
}
function ac(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...F(t)
  });
}
function cc(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...F(t)
  });
}
function uc(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...F(t)
  });
}
function lc(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...F(t)
  });
}
function dc(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...F(t)
  });
}
function fc(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...F(t)
  });
}
function hc(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...F(t)
  });
}
function mc(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...F(t)
  });
}
function pc(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...F(t)
  });
}
function gc(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...F(t)
  });
}
function yc(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...F(t)
  });
}
function vc(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...F(t)
  });
}
function bc(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...F(t)
  });
}
function xc(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...F(t)
  });
}
function wc(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...F(t)
  });
}
function _c(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...F(t)
  });
}
function jc(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...F(t)
  });
}
function kc(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...F(t)
  });
}
function Sc(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...F(t)
  });
}
function Pc(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...F(t)
  });
}
function Nc(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...F(t)
  });
}
function Ec(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...F(t)
  });
}
function zc(e) {
  return new e({
    type: "unknown"
  });
}
function $c(e, t) {
  return new e({
    type: "never",
    ...F(t)
  });
}
function $n(e, t) {
  return new ta({
    check: "max_length",
    ...F(t),
    maximum: e
  });
}
function Yt(e, t) {
  return new ra({
    check: "min_length",
    ...F(t),
    minimum: e
  });
}
function An(e, t) {
  return new sa({
    check: "length_equals",
    ...F(t),
    length: e
  });
}
function Ac(e, t) {
  return new na({
    check: "string_format",
    format: "regex",
    ...F(t),
    pattern: e
  });
}
function Cc(e) {
  return new ia({
    check: "string_format",
    format: "lowercase",
    ...F(e)
  });
}
function Fc(e) {
  return new oa({
    check: "string_format",
    format: "uppercase",
    ...F(e)
  });
}
function Oc(e, t) {
  return new aa({
    check: "string_format",
    format: "includes",
    ...F(t),
    includes: e
  });
}
function Rc(e, t) {
  return new ca({
    check: "string_format",
    format: "starts_with",
    ...F(t),
    prefix: e
  });
}
function Zc(e, t) {
  return new ua({
    check: "string_format",
    format: "ends_with",
    ...F(t),
    suffix: e
  });
}
function Zt(e) {
  return new la({
    check: "overwrite",
    tx: e
  });
}
function Dc(e) {
  return Zt((t) => t.normalize(e));
}
function Tc() {
  return Zt((e) => e.trim());
}
function Ic() {
  return Zt((e) => e.toLowerCase());
}
function Vc() {
  return Zt((e) => e.toUpperCase());
}
function Uc(e, t, r) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...F(r)
  });
}
function Lc(e, t, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...F(r)
  });
}
function Rs(e, t) {
  try {
    var r = e();
  } catch (s) {
    return t(s);
  }
  return r && r.then ? r.then(void 0, t) : r;
}
function Mc(e, t) {
  for (var r = {}; e.length; ) {
    var s = e[0], n = s.code, i = s.message, o = s.path.join(".");
    if (!r[o]) if ("unionErrors" in s) {
      var c = s.unionErrors[0].errors[0];
      r[o] = { message: c.message, type: c.code };
    } else r[o] = { message: i, type: n };
    if ("unionErrors" in s && s.unionErrors.forEach(function(b) {
      return b.errors.forEach(function(y) {
        return e.push(y);
      });
    }), t) {
      var h = r[o].types, p = h && h[s.code];
      r[o] = Fr(o, t, r, n, p ? [].concat(p, s.message) : s.message);
    }
    e.shift();
  }
  return r;
}
function qc(e, t) {
  for (var r = {}; e.length; ) {
    var s = e[0], n = s.code, i = s.message, o = s.path.join(".");
    if (!r[o]) if (s.code === "invalid_union") {
      var c = s.errors[0][0];
      r[o] = { message: c.message, type: c.code };
    } else r[o] = { message: i, type: n };
    if (s.code === "invalid_union" && s.errors.forEach(function(b) {
      return b.forEach(function(y) {
        return e.push(y);
      });
    }), t) {
      var h = r[o].types, p = h && h[s.code];
      r[o] = Fr(o, t, r, n, p ? [].concat(p, s.message) : s.message);
    }
    e.shift();
  }
  return r;
}
function Qc(e, t, r) {
  if (r === void 0 && (r = {}), function(s) {
    return "_def" in s && typeof s._def == "object" && "typeName" in s._def;
  }(e)) return function(s, n, i) {
    try {
      return Promise.resolve(Rs(function() {
        return Promise.resolve(e[r.mode === "sync" ? "parse" : "parseAsync"](s, t)).then(function(o) {
          return i.shouldUseNativeValidation && _r({}, i), { errors: {}, values: r.raw ? Object.assign({}, s) : o };
        });
      }, function(o) {
        if (function(c) {
          return Array.isArray(c == null ? void 0 : c.issues);
        }(o)) return { values: {}, errors: _s(Mc(o.errors, !i.shouldUseNativeValidation && i.criteriaMode === "all"), i) };
        throw o;
      }));
    } catch (o) {
      return Promise.reject(o);
    }
  };
  if (function(s) {
    return "_zod" in s && typeof s._zod == "object";
  }(e)) return function(s, n, i) {
    try {
      return Promise.resolve(Rs(function() {
        return Promise.resolve((r.mode === "sync" ? No : Eo)(e, s, t)).then(function(o) {
          return i.shouldUseNativeValidation && _r({}, i), { errors: {}, values: r.raw ? Object.assign({}, s) : o };
        });
      }, function(o) {
        if (function(c) {
          return c instanceof Ur;
        }(o)) return { values: {}, errors: _s(qc(o.issues, !i.shouldUseNativeValidation && i.criteriaMode === "all"), i) };
        throw o;
      }));
    } catch (o) {
      return Promise.reject(o);
    }
  };
  throw new Error("Invalid input: not a Zod schema");
}
const Bc = /* @__PURE__ */ g("ZodISODateTime", (e, t) => {
  ka.init(e, t), K.init(e, t);
});
function Wc(e) {
  return Sc(Bc, e);
}
const Kc = /* @__PURE__ */ g("ZodISODate", (e, t) => {
  Sa.init(e, t), K.init(e, t);
});
function Hc(e) {
  return Pc(Kc, e);
}
const Gc = /* @__PURE__ */ g("ZodISOTime", (e, t) => {
  Pa.init(e, t), K.init(e, t);
});
function Yc(e) {
  return Nc(Gc, e);
}
const Jc = /* @__PURE__ */ g("ZodISODuration", (e, t) => {
  Na.init(e, t), K.init(e, t);
});
function Xc(e) {
  return Ec(Jc, e);
}
const eu = (e, t) => {
  Ur.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (r) => Po(e, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => So(e, r)
      // enumerable: false,
    },
    addIssue: {
      value: (r) => e.issues.push(r)
      // enumerable: false,
    },
    addIssues: {
      value: (r) => e.issues.push(...r)
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, ar = g("ZodError", eu, {
  Parent: Error
}), tu = /* @__PURE__ */ _n(ar), ru = /* @__PURE__ */ jn(ar), su = /* @__PURE__ */ kn(ar), nu = /* @__PURE__ */ Sn(ar), ae = /* @__PURE__ */ g("ZodType", (e, t) => (te.init(e, t), e.def = t, Object.defineProperty(e, "_def", { value: t }), e.check = (...r) => e.clone(
  {
    ...t,
    checks: [
      ...t.checks ?? [],
      ...r.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
    ]
  }
  // { parent: true }
), e.clone = (r, s) => ut(e, r, s), e.brand = () => e, e.register = (r, s) => (r.add(e, s), e), e.parse = (r, s) => tu(e, r, s, { callee: e.parse }), e.safeParse = (r, s) => su(e, r, s), e.parseAsync = async (r, s) => ru(e, r, s, { callee: e.parseAsync }), e.safeParseAsync = async (r, s) => nu(e, r, s), e.spa = e.safeParseAsync, e.refine = (r, s) => e.check(Gu(r, s)), e.superRefine = (r) => e.check(Yu(r)), e.overwrite = (r) => e.check(Zt(r)), e.optional = () => Ts(e), e.nullable = () => Is(e), e.nullish = () => Ts(Is(e)), e.nonoptional = (r) => Lu(e, r), e.array = () => Nu(e), e.or = (r) => Au([e, r]), e.and = (r) => Fu(e, r), e.transform = (r) => Vs(e, Zu(r)), e.default = (r) => Iu(e, r), e.prefault = (r) => Uu(e, r), e.catch = (r) => qu(e, r), e.pipe = (r) => Vs(e, r), e.readonly = () => Wu(e), e.describe = (r) => {
  const s = e.clone();
  return Lt.add(s, { description: r }), s;
}, Object.defineProperty(e, "description", {
  get() {
    var r;
    return (r = Lt.get(e)) == null ? void 0 : r.description;
  },
  configurable: !0
}), e.meta = (...r) => {
  if (r.length === 0)
    return Lt.get(e);
  const s = e.clone();
  return Lt.add(s, r[0]), s;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), Cn = /* @__PURE__ */ g("_ZodString", (e, t) => {
  Lr.init(e, t), ae.init(e, t);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...s) => e.check(Ac(...s)), e.includes = (...s) => e.check(Oc(...s)), e.startsWith = (...s) => e.check(Rc(...s)), e.endsWith = (...s) => e.check(Zc(...s)), e.min = (...s) => e.check(Yt(...s)), e.max = (...s) => e.check($n(...s)), e.length = (...s) => e.check(An(...s)), e.nonempty = (...s) => e.check(Yt(1, ...s)), e.lowercase = (s) => e.check(Cc(s)), e.uppercase = (s) => e.check(Fc(s)), e.trim = () => e.check(Tc()), e.normalize = (...s) => e.check(Dc(...s)), e.toLowerCase = () => e.check(Ic()), e.toUpperCase = () => e.check(Vc());
}), iu = /* @__PURE__ */ g("ZodString", (e, t) => {
  Lr.init(e, t), Cn.init(e, t), e.email = (r) => e.check(nc(ou, r)), e.url = (r) => e.check(uc(au, r)), e.jwt = (r) => e.check(kc(_u, r)), e.emoji = (r) => e.check(lc(cu, r)), e.guid = (r) => e.check(Os(Zs, r)), e.uuid = (r) => e.check(ic(Mt, r)), e.uuidv4 = (r) => e.check(oc(Mt, r)), e.uuidv6 = (r) => e.check(ac(Mt, r)), e.uuidv7 = (r) => e.check(cc(Mt, r)), e.nanoid = (r) => e.check(dc(uu, r)), e.guid = (r) => e.check(Os(Zs, r)), e.cuid = (r) => e.check(fc(lu, r)), e.cuid2 = (r) => e.check(hc(du, r)), e.ulid = (r) => e.check(mc(fu, r)), e.base64 = (r) => e.check(wc(bu, r)), e.base64url = (r) => e.check(_c(xu, r)), e.xid = (r) => e.check(pc(hu, r)), e.ksuid = (r) => e.check(gc(mu, r)), e.ipv4 = (r) => e.check(yc(pu, r)), e.ipv6 = (r) => e.check(vc(gu, r)), e.cidrv4 = (r) => e.check(bc(yu, r)), e.cidrv6 = (r) => e.check(xc(vu, r)), e.e164 = (r) => e.check(jc(wu, r)), e.datetime = (r) => e.check(Wc(r)), e.date = (r) => e.check(Hc(r)), e.time = (r) => e.check(Yc(r)), e.duration = (r) => e.check(Xc(r));
});
function mr(e) {
  return sc(iu, e);
}
const K = /* @__PURE__ */ g("ZodStringFormat", (e, t) => {
  W.init(e, t), Cn.init(e, t);
}), ou = /* @__PURE__ */ g("ZodEmail", (e, t) => {
  pa.init(e, t), K.init(e, t);
}), Zs = /* @__PURE__ */ g("ZodGUID", (e, t) => {
  ha.init(e, t), K.init(e, t);
}), Mt = /* @__PURE__ */ g("ZodUUID", (e, t) => {
  ma.init(e, t), K.init(e, t);
}), au = /* @__PURE__ */ g("ZodURL", (e, t) => {
  ga.init(e, t), K.init(e, t);
}), cu = /* @__PURE__ */ g("ZodEmoji", (e, t) => {
  ya.init(e, t), K.init(e, t);
}), uu = /* @__PURE__ */ g("ZodNanoID", (e, t) => {
  va.init(e, t), K.init(e, t);
}), lu = /* @__PURE__ */ g("ZodCUID", (e, t) => {
  ba.init(e, t), K.init(e, t);
}), du = /* @__PURE__ */ g("ZodCUID2", (e, t) => {
  xa.init(e, t), K.init(e, t);
}), fu = /* @__PURE__ */ g("ZodULID", (e, t) => {
  wa.init(e, t), K.init(e, t);
}), hu = /* @__PURE__ */ g("ZodXID", (e, t) => {
  _a.init(e, t), K.init(e, t);
}), mu = /* @__PURE__ */ g("ZodKSUID", (e, t) => {
  ja.init(e, t), K.init(e, t);
}), pu = /* @__PURE__ */ g("ZodIPv4", (e, t) => {
  Ea.init(e, t), K.init(e, t);
}), gu = /* @__PURE__ */ g("ZodIPv6", (e, t) => {
  za.init(e, t), K.init(e, t);
}), yu = /* @__PURE__ */ g("ZodCIDRv4", (e, t) => {
  $a.init(e, t), K.init(e, t);
}), vu = /* @__PURE__ */ g("ZodCIDRv6", (e, t) => {
  Aa.init(e, t), K.init(e, t);
}), bu = /* @__PURE__ */ g("ZodBase64", (e, t) => {
  Ca.init(e, t), K.init(e, t);
}), xu = /* @__PURE__ */ g("ZodBase64URL", (e, t) => {
  Oa.init(e, t), K.init(e, t);
}), wu = /* @__PURE__ */ g("ZodE164", (e, t) => {
  Ra.init(e, t), K.init(e, t);
}), _u = /* @__PURE__ */ g("ZodJWT", (e, t) => {
  Da.init(e, t), K.init(e, t);
}), ju = /* @__PURE__ */ g("ZodUnknown", (e, t) => {
  Ta.init(e, t), ae.init(e, t);
});
function Ds() {
  return zc(ju);
}
const ku = /* @__PURE__ */ g("ZodNever", (e, t) => {
  Ia.init(e, t), ae.init(e, t);
});
function Su(e) {
  return $c(ku, e);
}
const Pu = /* @__PURE__ */ g("ZodArray", (e, t) => {
  Va.init(e, t), ae.init(e, t), e.element = t.element, e.min = (r, s) => e.check(Yt(r, s)), e.nonempty = (r) => e.check(Yt(1, r)), e.max = (r, s) => e.check($n(r, s)), e.length = (r, s) => e.check(An(r, s)), e.unwrap = () => e.element;
});
function Nu(e, t) {
  return Uc(Pu, e, t);
}
const Eu = /* @__PURE__ */ g("ZodObject", (e, t) => {
  Ua.init(e, t), ae.init(e, t), B(e, "shape", () => t.shape), e.keyof = () => Ou(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: Ds() }), e.loose = () => e.clone({ ...e._zod.def, catchall: Ds() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Su() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (r) => wo(e, r), e.merge = (r) => _o(e, r), e.pick = (r) => bo(e, r), e.omit = (r) => xo(e, r), e.partial = (...r) => jo(Fn, e, r[0]), e.required = (...r) => ko(On, e, r[0]);
});
function zu(e, t) {
  const r = {
    type: "object",
    get shape() {
      return Tr(this, "shape", { ...e }), this.shape;
    },
    ...F(t)
  };
  return new Eu(r);
}
const $u = /* @__PURE__ */ g("ZodUnion", (e, t) => {
  La.init(e, t), ae.init(e, t), e.options = t.options;
});
function Au(e, t) {
  return new $u({
    type: "union",
    options: e,
    ...F(t)
  });
}
const Cu = /* @__PURE__ */ g("ZodIntersection", (e, t) => {
  Ma.init(e, t), ae.init(e, t);
});
function Fu(e, t) {
  return new Cu({
    type: "intersection",
    left: e,
    right: t
  });
}
const Pr = /* @__PURE__ */ g("ZodEnum", (e, t) => {
  qa.init(e, t), ae.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
  const r = new Set(Object.keys(t.entries));
  e.extract = (s, n) => {
    const i = {};
    for (const o of s)
      if (r.has(o))
        i[o] = t.entries[o];
      else
        throw new Error(`Key ${o} not found in enum`);
    return new Pr({
      ...t,
      checks: [],
      ...F(n),
      entries: i
    });
  }, e.exclude = (s, n) => {
    const i = { ...t.entries };
    for (const o of s)
      if (r.has(o))
        delete i[o];
      else
        throw new Error(`Key ${o} not found in enum`);
    return new Pr({
      ...t,
      checks: [],
      ...F(n),
      entries: i
    });
  };
});
function Ou(e, t) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((s) => [s, s])) : e;
  return new Pr({
    type: "enum",
    entries: r,
    ...F(t)
  });
}
const Ru = /* @__PURE__ */ g("ZodTransform", (e, t) => {
  Qa.init(e, t), ae.init(e, t), e._zod.parse = (r, s) => {
    r.addIssue = (i) => {
      if (typeof i == "string")
        r.issues.push(Ct(i, r.value, t));
      else {
        const o = i;
        o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = r.value), o.inst ?? (o.inst = e), o.continue ?? (o.continue = !0), r.issues.push(Ct(o));
      }
    };
    const n = t.transform(r.value, r);
    return n instanceof Promise ? n.then((i) => (r.value = i, r)) : (r.value = n, r);
  };
});
function Zu(e) {
  return new Ru({
    type: "transform",
    transform: e
  });
}
const Fn = /* @__PURE__ */ g("ZodOptional", (e, t) => {
  Ba.init(e, t), ae.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Ts(e) {
  return new Fn({
    type: "optional",
    innerType: e
  });
}
const Du = /* @__PURE__ */ g("ZodNullable", (e, t) => {
  Wa.init(e, t), ae.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Is(e) {
  return new Du({
    type: "nullable",
    innerType: e
  });
}
const Tu = /* @__PURE__ */ g("ZodDefault", (e, t) => {
  Ka.init(e, t), ae.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Iu(e, t) {
  return new Tu({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : t;
    }
  });
}
const Vu = /* @__PURE__ */ g("ZodPrefault", (e, t) => {
  Ha.init(e, t), ae.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Uu(e, t) {
  return new Vu({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : t;
    }
  });
}
const On = /* @__PURE__ */ g("ZodNonOptional", (e, t) => {
  Ga.init(e, t), ae.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Lu(e, t) {
  return new On({
    type: "nonoptional",
    innerType: e,
    ...F(t)
  });
}
const Mu = /* @__PURE__ */ g("ZodCatch", (e, t) => {
  Ya.init(e, t), ae.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function qu(e, t) {
  return new Mu({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Qu = /* @__PURE__ */ g("ZodPipe", (e, t) => {
  Ja.init(e, t), ae.init(e, t), e.in = t.in, e.out = t.out;
});
function Vs(e, t) {
  return new Qu({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Bu = /* @__PURE__ */ g("ZodReadonly", (e, t) => {
  Xa.init(e, t), ae.init(e, t);
});
function Wu(e) {
  return new Bu({
    type: "readonly",
    innerType: e
  });
}
const Ku = /* @__PURE__ */ g("ZodCustom", (e, t) => {
  ec.init(e, t), ae.init(e, t);
});
function Hu(e) {
  const t = new Ze({
    check: "custom"
    // ...util.normalizeParams(params),
  });
  return t._zod.check = e, t;
}
function Gu(e, t = {}) {
  return Lc(Ku, e, t);
}
function Yu(e) {
  const t = Hu((r) => (r.addIssue = (s) => {
    if (typeof s == "string")
      r.issues.push(Ct(s, r.value, t._zod.def));
    else {
      const n = s;
      n.fatal && (n.continue = !1), n.code ?? (n.code = "custom"), n.input ?? (n.input = r.value), n.inst ?? (n.inst = t), n.continue ?? (n.continue = !t._zod.def.abort), r.issues.push(Ct(n));
    }
  }, e(r.value, r)));
  return t;
}
const Ju = zu({
  currentPassword: mr().min(1, "Current password is required"),
  newPassword: mr().min(8, "Password must be at least 8 characters"),
  confirmPassword: mr().min(1, "Please confirm your password")
}).refine((e) => e.newPassword === e.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
}), pl = () => {
  var x, z, S;
  const [e, t] = Re(!1), { mutate: r, isPending: s, error: n } = ei(), {
    register: i,
    handleSubmit: o,
    watch: c,
    reset: h,
    formState: { errors: p, isValid: b }
  } = fo({
    resolver: Qc(Ju),
    mode: "onChange"
  }), y = c("newPassword", ""), l = Jr.calculateStrength(y), j = Jr.isStrongPassword(y), N = (w) => {
    if (!j) return;
    const $ = {
      currentPassword: w.currentPassword,
      newPassword: w.newPassword,
      confirmPassword: w.confirmPassword
    };
    r($, {
      onSuccess: () => {
        t(!0), h(), setTimeout(() => t(!1), 5e3);
      }
    });
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "max-w-2xl mx-auto space-y-8", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ a.jsx("h1", { className: "text-3xl font-bold", children: "Profile" }),
      /* @__PURE__ */ a.jsx("p", { className: "text-gray-600 mt-2", children: "Update your account settings" })
    ] }),
    e && /* @__PURE__ */ a.jsxs("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-2", children: [
      /* @__PURE__ */ a.jsx(Kn, { className: "w-5 h-5 text-green-600" }),
      /* @__PURE__ */ a.jsx("p", { className: "text-green-800", children: "Password updated successfully!" })
    ] }),
    n && /* @__PURE__ */ a.jsx("div", { className: "bg-red-50 border border-red-200 rounded-lg p-4", children: /* @__PURE__ */ a.jsx("p", { className: "text-red-800", children: "Error updating password. Please try again." }) }),
    /* @__PURE__ */ a.jsxs("div", { className: "bg-white p-8 rounded-lg shadow-md", children: [
      /* @__PURE__ */ a.jsx("h2", { className: "text-xl font-semibold mb-6", children: "Update Password" }),
      /* @__PURE__ */ a.jsxs("form", { onSubmit: o(N), className: "space-y-6", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ a.jsx(dt, { htmlFor: "currentPassword", children: "Current Password" }),
          /* @__PURE__ */ a.jsx(
            it,
            {
              id: "currentPassword",
              type: "password",
              ...i("currentPassword"),
              error: (x = p.currentPassword) == null ? void 0 : x.message
            }
          )
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ a.jsx(dt, { htmlFor: "newPassword", children: "New Password" }),
          /* @__PURE__ */ a.jsx(
            it,
            {
              id: "newPassword",
              type: "password",
              ...i("newPassword"),
              error: (z = p.newPassword) == null ? void 0 : z.message
            }
          )
        ] }),
        y && /* @__PURE__ */ a.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ a.jsx(di, { strength: l }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ a.jsx(dt, { htmlFor: "confirmPassword", children: "Confirm New Password" }),
          /* @__PURE__ */ a.jsx(
            it,
            {
              id: "confirmPassword",
              type: "password",
              ...i("confirmPassword"),
              error: (S = p.confirmPassword) == null ? void 0 : S.message
            }
          )
        ] }),
        /* @__PURE__ */ a.jsx(
          ee,
          {
            type: "submit",
            disabled: !b || !j || s,
            className: "w-full",
            size: "lg",
            children: s ? "Updating..." : "Update Password"
          }
        ),
        y && !j && /* @__PURE__ */ a.jsx("p", { className: "text-sm text-red-600 text-center", children: "Password must be strong to update (minimum 80% strength)" })
      ] })
    ] })
  ] });
};
export {
  fl as AppLayout,
  yr as Badge,
  ee as Button,
  hl as CartContainer,
  ll as CartErrorBoundary,
  sn as ErrorBoundary,
  dl as GlobalErrorBoundary,
  pi as Header,
  it as Input,
  dt as Label,
  ui as Modal,
  di as PasswordStrength,
  ci as Portal,
  gi as ProductCard,
  mi as ProductErrorBoundary,
  yi as ProductFilters,
  ml as ProductsContainer,
  pl as ProfileContainer,
  li as SearchBar,
  rn as Select,
  tn as Spinner
};

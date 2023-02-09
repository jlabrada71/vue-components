import { openBlock as r, createElementBlock as a } from "vue";
const p = (o, n) => {
  const t = o.__vccOpts || o;
  for (const [s, c] of n)
    t[s] = c;
  return t;
}, i = {
  name: "FlButton"
}, l = {
  type: "button",
  class: "p-3 rounded-sm text-pink-50 bg-blue-500 active:shadow-sm active:bg-pink-800 transition-colors transition-shadows duration-500 ease-linear"
};
function u(o, n, t, s, c, m) {
  return r(), a("button", l, "Hellow");
}
const _ = /* @__PURE__ */ p(i, [["render", u]]), e = { FlButton: _ }, f = {
  install(o) {
    for (const n in e)
      if (e.hasOwnProperty(n)) {
        const t = e[n];
        o.component(t.name, t);
      }
  }
};
export {
  f as default
};

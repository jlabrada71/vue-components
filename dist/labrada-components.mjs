import { openBlock as r, createElementBlock as a } from "vue";
const i = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [s, c] of o)
    n[s] = c;
  return n;
}, l = {}, p = {
  type: "button",
  class: "p-3 rounded-sm text-pink-50 bg-blue-500 active:shadow-sm active:bg-pink-800 transition-colors transition-shadows duration-500 ease-linear"
};
function _(t, o) {
  return r(), a("button", p, "Hellow");
}
const d = /* @__PURE__ */ i(l, [["render", _]]), u = { FIButton: d }, e = u, m = {
  install(t) {
    Object.keys(e).forEach((o) => {
      t.component(o, e[o]);
    });
  }
};
export {
  m as default
};

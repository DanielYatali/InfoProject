var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Login_1
});
var import_index_f8d0dc99 = require("../../chunks/index-f8d0dc99.js");
var import_svelte_forms = require("svelte-forms");
var import_validators = require("svelte-forms/validators");
const LoginForm = (0, import_index_f8d0dc99.c)(($$result, $$props, $$bindings, slots) => {
  let $password, $$unsubscribe_password;
  let $name, $$unsubscribe_name;
  let $myForm, $$unsubscribe_myForm;
  const name = (0, import_svelte_forms.field)("name", "", [(0, import_validators.required)()], { validateOnChange: false });
  $$unsubscribe_name = (0, import_index_f8d0dc99.a)(name, (value) => $name = value);
  const password = (0, import_svelte_forms.field)("password", "", [(0, import_validators.required)()], { validateOnChange: false });
  $$unsubscribe_password = (0, import_index_f8d0dc99.a)(password, (value) => $password = value);
  const myForm = (0, import_svelte_forms.form)(name, password);
  $$unsubscribe_myForm = (0, import_index_f8d0dc99.a)(myForm, (value) => $myForm = value);
  $$unsubscribe_password();
  $$unsubscribe_name();
  $$unsubscribe_myForm();
  return `<div class="${"card"}"><h3 class="${"font-semibold text-3xl"}">Login</h3>
  <input class="${"input"}" type="${"text"}" placeholder="${"Enter Name"}"${(0, import_index_f8d0dc99.b)("value", $name.value, 0)}>
  ${$myForm.hasError("name.required") ? `<div class="${"error"}">Name is required</div>` : ``}
  <input class="${"input"}" type="${"password"}" placeholder="${"Password"}"${(0, import_index_f8d0dc99.b)("value", $password.value, 0)}>
  ${$myForm.hasError("password.required") ? `<div class="${"error"}">Password is required</div>` : ``}
  
  

  <button class="${"bg-gray-400 rounded-full hover:bg-slate-600 p-1 w-28 h-10"}">Sign Up</button>
</div>`;
});
const Login_1 = (0, import_index_f8d0dc99.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}">${(0, import_index_f8d0dc99.v)(LoginForm, "Login").$$render($$result, {}, {}, {})}
</div>`;
});
module.exports = __toCommonJS(stdin_exports);

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

// ../module-d/dist/esm/index.js
var require_esm = __commonJS({
  "../module-d/dist/esm/index.js"(exports) {
    var __defProp2 = Object.defineProperty;
    var __markAsModule2 = (target) => __defProp2(target, "__esModule", { value: true });
    var __export = (target, all) => {
      __markAsModule2(target);
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    __export(exports, {
      default: () => moduleD
    });
    console.log("imported module-d");
    function moduleD() {
      console.log("D");
    }
  }
});

// ../module-a/dist/index.js
var require_dist = __commonJS({
  "../module-a/dist/index.js"(exports) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __markAsModule2 = (target) => __defProp2(target, "__esModule", { value: true });
    var __export = (target, all) => {
      __markAsModule2(target);
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __reExport2 = (target, module2, desc) => {
      if (module2 && typeof module2 === "object" || typeof module2 === "function") {
        for (let key of __getOwnPropNames2(module2))
          if (!__hasOwnProp2.call(target, key) && key !== "default")
            __defProp2(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc2(module2, key)) || desc.enumerable });
      }
      return target;
    };
    var __toModule2 = (module2) => {
      return __reExport2(__markAsModule2(__defProp2(module2 != null ? __create2(__getProtoOf2(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
    };
    __export(exports, {
      default: () => A2
    });
    var import_module_d2 = __toModule2(require_esm());
    console.log("imported module-a");
    function A2() {
      (0, import_module_d2.default)();
    }
  }
});

// ../module-d/dist/index.js
var require_dist2 = __commonJS({
  "../module-d/dist/index.js"(exports) {
    var __defProp2 = Object.defineProperty;
    var __markAsModule2 = (target) => __defProp2(target, "__esModule", { value: true });
    var __export = (target, all) => {
      __markAsModule2(target);
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    __export(exports, {
      default: () => moduleD
    });
    console.log("imported module-d");
    function moduleD() {
      console.log("D");
    }
  }
});

// src/index.js
var import_module_a = __toModule(require_dist());

// ../module-b/dist/index.js
var import_module_d = __toModule(require_dist2());
console.log("imported module-b");
function B() {
  (0, import_module_d.default)();
}

// src/index.js
console.log(import_module_a.default, B);

// src/index.js
import D from "module-d";
console.log("imported module-b");
function B() {
  D();
}
export {
  B as default
};

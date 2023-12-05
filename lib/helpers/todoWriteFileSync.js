"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = todoWriteFileSync;
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function todoWriteFileSync(data) {
  return _fs.default.writeFileSync("./lib/database/todos.json", JSON.stringify(data));
}
//# sourceMappingURL=todoWriteFileSync.js.map
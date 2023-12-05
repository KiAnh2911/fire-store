"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fieldsData;
function fieldsData(obj, fields) {
  let objNew = {};
  fields.map(field => {
    if (obj[field]) {
      objNew[field] = obj[field];
    }
  });
  return objNew;
}
//# sourceMappingURL=fields.js.map
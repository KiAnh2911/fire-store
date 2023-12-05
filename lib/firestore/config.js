"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const admin = require("firebase-admin");
const serviceAccount = require("../../serviceAccounts.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
var _default = exports.default = db;
//# sourceMappingURL=config.js.map
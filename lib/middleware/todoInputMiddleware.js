"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = todoInputMiddleware;
var yup = _interopRequireWildcard(require("yup"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
async function todoInputMiddleware(ctx, next) {
  try {
    const todo = ctx.request.body;
    let schema = yup.object().shape({
      title: yup.string().required()
    });
    await schema.validate(todo);
    return next();
  } catch (error) {
    console.error("middleware", error);
    ctx.status = 404;
    ctx.body = {
      success: false,
      error: error.message,
      errorName: error.name
    };
  }
}
//# sourceMappingURL=todoInputMiddleware.js.map
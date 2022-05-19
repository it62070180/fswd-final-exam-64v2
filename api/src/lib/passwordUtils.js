"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.verifyPassword = exports.preUpdateHook = exports.preSaveHook = void 0;
var bcrypt_1 = require("bcrypt");
function preSaveHook(next) {
    return __awaiter(this, void 0, void 0, function () {
        var salt, _a, _b, err_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!this.isModified('password')) {
                        return [2 /*return*/, next()];
                    }
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, bcrypt_1["default"].genSalt(10)];
                case 2:
                    salt = _c.sent();
                    _a = this.set;
                    _b = ['password'];
                    return [4 /*yield*/, bcrypt_1["default"].hash(this.password, salt)];
                case 3:
                    _a.apply(this, _b.concat([_c.sent()]));
                    return [2 /*return*/, next()];
                case 4:
                    err_1 = _c.sent();
                    return [2 /*return*/, next(err_1)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.preSaveHook = preSaveHook;
function preUpdateHook(next) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var update, salt, _c, _d, err_2;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    update = this.getUpdate();
                    if (!((_a = update === null || update === void 0 ? void 0 : update.$set) === null || _a === void 0 ? void 0 : _a.password)) {
                        return [2 /*return*/, next()];
                    }
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, bcrypt_1["default"].genSalt(10)];
                case 2:
                    salt = _e.sent();
                    _c = this.set;
                    _d = ['password'];
                    return [4 /*yield*/, bcrypt_1["default"].hash((_b = update === null || update === void 0 ? void 0 : update.$set) === null || _b === void 0 ? void 0 : _b.password, salt)];
                case 3:
                    _c.apply(this, _d.concat([_e.sent()]));
                    return [2 /*return*/, next()];
                case 4:
                    err_2 = _e.sent();
                    return [2 /*return*/, next(err_2)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.preUpdateHook = preUpdateHook;
function verifyPassword(password) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, bcrypt_1["default"].compare(password, this.password)];
        });
    });
}
exports.verifyPassword = verifyPassword;
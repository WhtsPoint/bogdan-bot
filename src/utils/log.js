"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var config_1 = __importDefault(require("../settings/config"));
function log(error) {
    fs_1.default.writeFileSync(config_1.default.error_file, "[".concat((new Date()).toLocaleString(), "] ").concat(error, "\n"), { flag: "a" });
}
exports.default = log;
//# sourceMappingURL=log.js.map
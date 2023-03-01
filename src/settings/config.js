"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var config = {
    api_token: "6110015905:AAEuBkskJeIvYApzQHyaHC2nuDeFTmHfMq8",
    error_file: path_1.default.resolve(__dirname, "../logs/error.log"),
    max_count_on_inline: 50
};
exports.default = config;
//# sourceMappingURL=config.js.map
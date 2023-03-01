"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var telegraf_ts_1 = require("telegraf-ts");
var config_1 = __importDefault(require("../settings/config"));
var inlineQueryMiddleware_1 = __importDefault(require("./middlewares/inlineQueryMiddleware"));
var log_1 = __importDefault(require("../utils/log"));
var bot = new telegraf_ts_1.Telegraf(config_1.default.api_token);
bot.use(inlineQueryMiddleware_1.default);
bot.catch(function (error) { return (0, log_1.default)("Bot error: " + error); });
bot.launch();
//# sourceMappingURL=bot.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("../settings/config"));
function filterSounds(list, searchLine) {
    var page = parseInt(searchLine);
    if (page && page > 0)
        return list.slice((page - 1) * config_1.default.max_count_on_inline, page * config_1.default.max_count_on_inline);
    return list.filter(function (_a) {
        var title = _a.title;
        return title.toLowerCase().includes(searchLine.toLowerCase());
    }).slice(0, config_1.default.max_count_on_inline);
}
exports.default = filterSounds;
//# sourceMappingURL=filterSounds.js.map
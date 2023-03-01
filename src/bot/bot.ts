import {Telegraf} from "telegraf-ts"
import config from "../settings/config"
import inlineQueryMiddleware from "./middlewares/inlineQueryMiddleware"
import log from "../utils/log"

const bot = new Telegraf(config.api_token)

bot.use(inlineQueryMiddleware)

bot.catch((error) => log("Bot error: " + error))

bot.launch()
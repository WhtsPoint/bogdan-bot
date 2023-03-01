import {Telegraf} from "telegraf-ts"
import config from "../settings/config"
import inlineQueryMiddleware from "./middlewares/inlineQueryMiddleware"
import renderSound from "./commands/renderSound"
import log from "../utils/log"

const bot = new Telegraf(config.api_token)

bot.use(inlineQueryMiddleware, renderSound)

bot.catch((error) => {
    console.error(error)
    log("Bot error: " + error)
})

bot.launch()
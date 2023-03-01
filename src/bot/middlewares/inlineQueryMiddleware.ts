import {Composer, InlineQueryResultCachedVoice} from "telegraf-ts"
import inlineQueryAnswer from "../../settings/inlineQueryAnswer"
import {randomUUID} from "crypto"
import filterSounds from "../../utils/filterSounds"

const inlineQueryMiddleware = new Composer()

inlineQueryMiddleware.on("inline_query", async (ctx) => {

    const searchLine = ctx.update.inline_query.query
    const memesList = filterSounds(inlineQueryAnswer.memes, searchLine)
    const memesAnswer = memesList.map((params) : InlineQueryResultCachedVoice => {
        const {title, fileId} = params
        return {title, type : "voice", id : randomUUID(), voice_file_id : fileId}
    })

    return await ctx.answerInlineQuery(memesAnswer, {cache_time : 1})
})

export default inlineQueryMiddleware
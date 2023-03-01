import {TelegrafContext} from "telegraf-ts"
import fs from "fs"
import delay from "../utils/delay"
import path from "path"

async function createSound(filePath: string, ctx: TelegrafContext): Promise<void> {
    const files = fs.readdirSync(filePath)
    let resultArray = []
    for(const file of files) {
        await ctx.replyWithVoice({source: path.resolve(filePath, file)}).then((ctx) => {
            resultArray.push({title: path.parse(file).name, fileId: ctx.voice.file_id})
        })
        await delay(500)
    }

    await ctx.reply("Created Sounds JSON : \n" + JSON.stringify(resultArray))
}

export default createSound
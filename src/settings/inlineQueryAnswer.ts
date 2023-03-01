import memes from "../json/memes.json"

interface IInlineQueryAnswer {
    memes : {title: string, fileId: string, enabled?: boolean}[]
}

const inlineQueryAnswer : IInlineQueryAnswer = {memes}

export default inlineQueryAnswer

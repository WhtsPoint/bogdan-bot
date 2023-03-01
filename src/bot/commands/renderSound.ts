import {Composer} from "telegraf-ts"
import config from "../../settings/config"
import createSound from "../../sound-creation/createSound"
import path from "path"

const renderSound = new Composer()

renderSound.command("renderSound", async (ctx) => {
    if(config.is_dev) await createSound(path.resolve(__dirname, "../../sound-creation/sounds"), ctx)
})

export default renderSound
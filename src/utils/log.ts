import fs from "fs"
import config from "../settings/config"

function log(error: string): void {
    fs.writeFileSync(config.error_file, `[${(new Date()).toLocaleString()}] ${error}\n`, {flag : "a"})
}

export default log
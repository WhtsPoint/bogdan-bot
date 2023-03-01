import path from "path"

interface IConfig {
    api_token: string,
    error_file: string,
    max_count_on_inline: number,
    is_dev: boolean
}

const config : IConfig = {
    api_token: process.env.API_KEY,
    error_file: path.resolve(__dirname, "../logs/error.log"),
    max_count_on_inline: 50,
    is_dev: process.env.DEV === "true"
}

export default config
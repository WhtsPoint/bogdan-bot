import config from "../settings/config"

type ITitleArray<DataType> = (DataType & {title : string})[]

function filterSounds<DataType>(list : ITitleArray<DataType>, searchLine : string) : ITitleArray<DataType> {
    const page = parseInt(searchLine)
    if(page && page > 0) return list.slice((page - 1) * config.max_count_on_inline, page * config.max_count_on_inline)
    return list.filter(({title}) => title.toLowerCase().includes(searchLine.toLowerCase())).slice(0, config.max_count_on_inline)
}

export default filterSounds
import { FetchResults, FetchItem } from "./interface/feeds"

const items = (items: FetchItem[]) => {
  return items.map(item => {
    const result = {
      title: item.title.substr(0, 200) || "",
      link: item.alternate[0].href || "",
      content: (item.content || item.summary || { content: "" }).content,
      image: item.enclosure ? item.enclosure[0].href : ""
    }

    return result
  })
}

export const entries = (entries: FetchResults[]) => {
  return entries.map(entry => ({
    title: entry.data.title || "",
    link: entry.data.alternate[0].href || "",
    items: items(entry.data.items)
  }))
}

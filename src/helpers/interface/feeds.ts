export interface FetchResults {
  data: {
    title: string
    alternate: { href: string }[]
    items: FetchItem[]
  }
}

export interface FetchItem {
  title: string
  alternate: { href: string }[]
  content: {
    content: string
  },
  enclosure: {href: string}[],
  summary: string
  visual: {
    url: string
  }
}

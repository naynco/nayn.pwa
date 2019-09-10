import axios from "axios"
import { stringify } from "query-string"

import { FetchResults } from "./interface/feeds"

export const fetch = (url: string): Promise<FetchResults> => {
  const baseUrl = "api/v3/streams/contents"
  const options = stringify({
    count: 100,
    streamId: "feed"
  })
  const query = encodeURIComponent(url)
  return axios.get(`${baseUrl}?${options}/${query}`)
}


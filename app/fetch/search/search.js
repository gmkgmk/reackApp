import {
  get
} from '../get'

export function getSearchData(cityName, page, type, keyword) {
  const keywordStr = keyword ? '/' + keyword : ''
  const result = get('/api/search/' + page + '/' + cityName + '/' + type + keywordStr)
  return result
}
import { get } from '../get'

export function getOrderListData(username) {
    const result = get('/api/orderlist/' + username)
    return result
}


export function postComment(id, comment, star) {
    const result = post('/api/submitComment', {
        id: id,
        comment: comment,
        star: star
    })
    return result
}
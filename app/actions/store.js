import * as actionTypes from '../constants/store'

export function update(data) {
  return {
    type: actionTypes.STORE_UPDATE,
    data
  }
}

export function add(item) {
  return {
    type: actionTypes.STORE_ADD,
    item
  }
}

export function remove(item) {
  return {
    type: actionTypes.STORE_REMOVE,
    item
  }
}
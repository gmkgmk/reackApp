// try catch是为了兼容Ios下safar兼容
let local = {
  getItem(key) {
    let value;
    try {
      value = localStorage.getItem(key)
    } catch (err) {
      if (__DEV__) {
        console.error("localStorage.getItem报错", err)
      }
    } finally {
      return value
    }
  },
  setItem(key,value){
    console.log(key,value)
    try{
      localStorage.setItem(key, value)
    }catch(err){
      if(__DEV__){
        console.error("localStorage.setItem", err)
      }
    }
  }
}

export default local;
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
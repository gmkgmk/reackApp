export function post(url,obj) {
  const defaultOptions = {
      credentials: 'include',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      body:JSON.stringify(obj)
    };
   return fetch(Url,defaultOptions)
}

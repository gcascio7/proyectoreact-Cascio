let is_ok = true;

let customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
        if (is_ok) {
                resolve(task)
        } else {
            reject("Error")
        }
    } , time)
  })
}

export default customFetch;
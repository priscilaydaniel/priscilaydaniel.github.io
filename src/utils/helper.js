export const debounce = (callback, wait) => {
  let timeoutId = null

  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      callback(...args)
    }, wait)
  }
}

export const throttle = (callback, limit) => {
  let waiting = false

  return (...args) => {
    if (!waiting) {
      callback(...args)
      waiting = true
      setTimeout(() => {
        waiting = false
      }, limit)
    }
  }
}

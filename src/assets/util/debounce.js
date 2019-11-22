function debounce(fn,delay = 500) {
  let that = this
  return function(...args) {
    if(that.timer) {
      // console.log('销毁')
      clearTimeout(that.timer)
    }
    that.timer = setTimeout(() => {
      // console.log('执行')
      fn.call(that,...args)
    }, delay)
  }
}

export default debounce
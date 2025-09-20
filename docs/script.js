onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove('not-loaded')
    clearTimeout(c)
  }, 1000)

  const message = document.querySelector('.message')
  if (message) {
    setTimeout(() => {
      message.classList.add('message--visible')
    }, 4000)

    setTimeout(() => {
      message.classList.remove('message--visible')
    }, 9000)
  }
}

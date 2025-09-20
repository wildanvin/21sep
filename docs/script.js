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

  const caso = document.querySelector('.caso')
  if (caso) {
    setTimeout(() => {
      caso.classList.add('caso--visible')
    }, 9500)

    setTimeout(() => {
      caso.classList.remove('caso--visible')
    }, 14500)
  }

  const amo = document.querySelector('.amo')
  if (amo) {
    setTimeout(() => {
      amo.classList.add('amo--visible')
    }, 15000)

    // setTimeout(() => {
    //   amo.classList.remove('amo--visible')
    // }, 14500)
  }
}

function count() {
  let start = document.getElementById('txtStart')
  let end = document.getElementById('txtEnd')
  let step = document.getElementById('txtStep')
  let res = document.getElementById('res')

  if (
    start.value.length == 0 ||
    end.value.length == 0 ||
    step.value.length == 0
  ) {
    res.innerHTML = 'Data is missing. Try again!'
    res.style.color = 'rgb(128, 0, 32)'
  } else {
    let i = Number(start.value)
    let j = Number(end.value)
    let k = Number(step.value)

    if (k <= 0) {
      window.alert('Invalid step. Considering step 1!')
      k = 1
    }

    res.style.color = 'inherit'
    res.innerHTML = 'Counting: '
    if (i < j) {
      let a = i
      const intervalId = setInterval(() => {
        if (a > j) {
          clearInterval(intervalId)
          return
        }
        res.innerHTML += `${a} `
        a += k
      }, 100)
    } else {
      let a = i
      const intervalId = setInterval(() => {
        if (a < j) {
          clearInterval(intervalId)
          return
        }
        res.innerHTML += `${a} `
        a -= k
      }, 100)
    }
  }
}

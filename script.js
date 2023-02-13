function count() {
  var button = document.querySelector('input[type="button"]')
  button.disabled = true

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
    button.disabled = false
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
          button.disabled = false
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
          button.disabled = false
          return
        }
        res.innerHTML += `${a} `
        a -= k
      }, 100)
    }
  }
}

function multTable() {
  let num = document.getElementById('txtNumber')
  let res = document.getElementById('result')

  if (num.value.length == 0) {
    res.innerHTML = 'Please type a number!'
    res.style.color = 'rgb(128, 0, 32)'
  } else {
    let n = Number(num.value)
    let factor = 1
    res.innerHTML = ''
    res.style.color = 'inherit'
    while (factor <= 10) {
      res.innerHTML += `${n} x ${factor} = ${n * factor}` + '<br>'
      factor++
    }
  }
}

function clearResult() {
  let res = document.getElementById('result')
  res.innerHTML = ''
}

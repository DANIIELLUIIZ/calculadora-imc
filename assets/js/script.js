let weight = document.querySelector('#weight-input')
let height = document.querySelector('#height-input')
let btnCalc = document.querySelector('#calculate')
let result = document.querySelector('#result')
let imc = document.querySelector('#imc')

function main() {
  calcImc()
  imcClassification()
}

function calcImc() {
  let userWeight = parseFloat(weight.value)
  let userHeight = parseFloat(height.value)

  if (userWeight <= 0 || userHeight <= 0) {
    result.innerHTML = 'Digite valores válidos'
    return
  }

  let imc = (userWeight / (userHeight * userHeight)).toFixed(2)

  return imc
}

function imcClassification() {
  let imcValue = calcImc()
  let resultUser
  if (imcValue > 0 && imcValue < 16.0) {
    resultUser = 'Magreza grave'
  } else if (imcValue >= 16.0 && imcValue <= 16.9) {
    resultUser = 'Magreza moderada'
  } else if (imcValue >= 17.0 && imcValue <= 18.4) {
    resultUser = 'Magreza leve'
  } else if (imcValue >= 18.5 && imcValue <= 24.9) {
    resultUser = 'Peso saudável (normal)'
  } else if (imcValue >= 25.0 && imcValue <= 29.9) {
    resultUser = 'Sobrepeso'
  } else if (imcValue >= 30.0 && imcValue <= 34.9) {
    resultUser = ' Obesidade grau I (leve)'
  } else if (imcValue >= 35.0 && imcValue <= 39.9) {
    resultUser = 'Obesidade grau II (moderada)'
  } else if (imcValue > 40) {
    resultUser = 'Obesidade grau III (grave ou mórbida)'
  } else {
    return
  }
  result.innerHTML = resultUser
  imc.innerHTML = imcValue
}

btnCalc.addEventListener('click', e => {
  e.preventDefault()
  main()
})

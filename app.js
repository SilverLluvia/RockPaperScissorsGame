const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let computerChoice
let result 
var drawResult = 0
var winResult = 0
var loseResult = 0

document.getElementById('intro-click').onclick = function() {showGame()}

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function showGame() {
let userChoice
  document.getElementById('container').style.display = 'inline-block'
  document.getElementById('intro').style.display = 'none'
}

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1) 

  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    drawResult++
    result = 'draw!'
    document.getElementById('computer-img').src = 'computer-draw.png'
    document.getElementById('user-img').src = 'profile-draw.png'
  }
  if (computerChoice === 'rock' && userChoice === 'paper') {
    winResult++
    result = 'win!'
    document.getElementById('computer-img').src = 'computer-lose.png'
    document.getElementById('user-img').src = 'profile-win.png'
  }
  if (computerChoice === 'rock' && userChoice === 'scissors') {
    loseResult++
    result = 'lose!'
    document.getElementById('computer-img').src = 'computer-win.png'
    document.getElementById('user-img').src = 'profile-lose.png'
  }
  if (computerChoice === 'paper' && userChoice === 'rock') {
    loseResult++
    result = 'lose!'
    document.getElementById('computer-img').src = 'computer-win.png'
    document.getElementById('user-img').src = 'profile-lose.png'
  }
  if (computerChoice === 'paper' && userChoice === 'scissors') {
    winResult++
    result = 'win!'
    document.getElementById('computer-img').src = 'computer-lose.png'
    document.getElementById('user-img').src = 'profile-win.png'
  }
  if (computerChoice === 'scissors' && userChoice === 'rock') {
    winResult++
    result = 'win!'
    document.getElementById('computer-img').src = 'computer-lose.png'
    document.getElementById('user-img').src = 'profile-win.png'
  }
  if (computerChoice === 'scissors' && userChoice === 'paper') {
    loseResult++
    result = 'lose!'
    document.getElementById('computer-img').src = 'computer-win.png'
    document.getElementById('user-img').src = 'profile-lose.png'
  }
  
  resultDisplay.innerHTML = result

  switch(result) {
    case 'draw!': document.getElementById('draw-result').innerHTML = drawResult
    case 'win!': document.getElementById('win-result').innerHTML = winResult
    case 'lose!': document.getElementById('lose-result').innerHTML = loseResult
  }
}

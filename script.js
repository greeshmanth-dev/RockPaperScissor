const totalScore={computerScore:0,playerScore:0}
function getComputerChoice(){
  const rpsChoices=['Rock','Paper','Scissors']
  const randomChoice=Math.floor(Math.random()*rpsChoices.length)
  return rpsChoices[randomChoice]
}
function getResult(playerChoice,computerChoice){
  let score;
  if(playerChoice==computerChoice){
    score=0;
  }else if(playerChoice=='Rock' && computerChoice=='Paper'){
    score=1;
  }else if(playerChoice=='Rock' && computerChoice=='Scissors'){
    score=1;
  }else if(playerChoice=='Scissors' && computerChoice=='Paper'){
    score=1;
  }else{
    score=-1;
  }
  return score
}
function showResults(score,playerChoice,computerChoice){
  const playerScoreDiv=document.getElementById('player-score')
  const handsDiv=document.getElementById('hands')
  const resultDiv=document.getElementById('result')
  console.log(resultDiv.innerText)
  if(score==-1){
    resultDiv.innerText='You Lose!'
  }else if (score==0){
    resultDiv.innerText="It's a Draw" 
  }else{
    resultDiv.innerText='You Won!'
  }
handsDiv.innerText=`👦:${playerChoice} vs 🤖:${computerChoice}`
playerScoreDiv.innerText=totalScore['playerScore']
}
function onClickRPS(playerChoice){
  console.log({playerChoice})
  const computerChoice=getComputerChoice()
  console.log({computerChoice})
  const score=getResult(playerChoice,computerChoice)
  totalScore['playerScore']+=score
  showResults(score,playerChoice,computerChoice)
  console.log({score})
}

function playGame(){
  let rpsButtons=document.querySelectorAll('.rpsButton')
  rpsButtons.forEach(rpsButton=>{
    rpsButton.onclick=()=>onClickRPS(rpsButton.value)
  })
   let endButton=document.getElementById('endGameButton');
   endButton.onclick=()=>endGame(totalScore)
}
function endGame(totalScore){
 totalScore['playerScore']=0
  totalScore['computerScore']=0
  const playerScoreDiv=document.getElementById('player-score')
  const handsDiv=document.getElementById('hands')
  const resultDiv=document.getElementById('result')
  playerScoreDiv.innerText=''
  handsDiv.innerText=''
  resultDiv.innerText=''
}
playGame()

const allChoices= document.querySelectorAll('.rpsButton')
const hand = document.getElementById('hands')
const result = document.getElementById('result')
const playerScore = document.getElementById('player-score')
const reset = document.getElementById('endGameButton')
let winStreak =0;

const textResult= new Array("You Win!", "It's a Draw!", "You Lose!");
const gameChoices= new Array("Rock", "Paper", "Scissors");



allChoices.forEach(userchoice => userchoice.onclick =()=>{
    const robotChoice = Math.floor(Math.random()*3)
    hand.innerHTML=`👱 ${userchoice.value} vs 🤖 ${gameChoices[robotChoice]}`

    switch(userchoice.value){
        case "Rock": // 0
    
        if(robotChoice==0){
            result.innerHTML=textResult[1]
        }else if(robotChoice==1){
            winStreak--
            result.innerHTML=textResult[2]

        }else{
            winStreak++
            result.innerHTML=textResult[0]
        }
        
        break
        case 'Paper': // 1
        if(robotChoice==0){
            winStreak++
            result.innerHTML=textResult[0]

        }else if(robotChoice==1){
            result.innerHTML=textResult[1]
        }else{
            winStreak--
            result.innerHTML=textResult[2]
        }
            
        break
        case 'Scissors': // 2
        if(robotChoice==0){
            winStreak--
            result.innerHTML=textResult[2]
        }else if(robotChoice==1){
            winStreak++
            result.innerHTML=textResult[0]
        }else{
            result.innerHTML=textResult[1]
        }
        break
    }
    playerScore.innerHTML=`Win Streak: ${winStreak}`
})


reset.onclick=()=>{
    playerScore.innerHTML=''
    hand.innerHTML=''
    result.innerHTML=''
    winStreak=0
}






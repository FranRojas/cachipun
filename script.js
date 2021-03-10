
let userOption = '';
let pcOption= '';
let userScore = 0;
let pcScore = 0;
let result =  document.querySelector('.h2-result')
let uScore = document.querySelector('.user-score-screen')
let pScore = document.querySelector('.pc-score-screen')
let options = ['rock','paper','scissors']

let user = document.querySelector('.user-side').addEventListener('click',function(event){
    userOption = (event.target.alt) ;
    playTheGame(userOption)
})

function round(userOption){
   
        pcSelection()
       
            if (userOption === 'rock' && pcOption === 'paper'){
                pScore.textContent = `${pcScore += 1}`
            return  result.textContent = `You Lost - ${pcOption} beats ${userOption}`
            } else if (userOption === 'rock' && pcOption === 'scissors'){
                uScore.textContent = `${userScore +=1}`
                return result.textContent = `You Win - ${userOption} beats ${pcOption}!`
            }  else if (userOption === 'paper' && pcOption === 'rock'){
                uScore.textContent = `${userScore +=1}`
                return  result.textContent = `You Win - ${userOption} beats ${pcOption}!`
            } else if (userOption === 'paper' && pcOption === 'scissors'){
                pScore.textContent = ` ${pcScore += 1}`
                return result.textContent = `You Lost - ${pcOption} beats ${userOption}`
            } else if  (userOption === 'scissors' && pcOption === 'paper'){
                uScore.textContent = `${userScore +=1}`
                return  result.textContent = `You Win - ${userOption} beats ${pcOption}!`
            } else if (userOption === 'scissors' && pcOption === 'rock'){
                pScore.textContent = `${pcScore += 1}`
                return result.textContent = `You Lost - ${pcOption} beats ${userOption}`
            } else if (userOption === pcOption){
                return result.textContent = "It's a tie"
            } else {
                return
            } 
         
         
}

function pcSelection(){
   let pc= Math.floor(Math.random()*options.length)
   pcOption = options[pc]
   return pcOption;
 
}

function playTheGame(userOption){
    if(userScore == 5){
        result.textContent = "It's over, you Won. Start Again"
        pcScore= 0;
        userScore = 0;
        uScore.textContent =0;
        pScore.textContent = 0;
       return 
    }  else if (pcScore == 5){
        result.textContent = "It's over, you Lost. Start Again"
        pcScore= 0;
        userScore = 0;
        uScore.textContent =0;
        pScore.textContent = 0;
       return 
        
    } else {
        round(userOption);
    }
}

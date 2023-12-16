const user_choice_span=document.getElementById("user_choice")
const computer_choice_span=document.getElementById("computer_choice")
const result_span=document.getElementById("result")
let user_choice
let computer_choice
const Buttons=document.querySelectorAll("button")
Buttons.forEach(button => 
    button.addEventListener('click',(e)=>{
        user_choice=e.target.id
        user_choice_span.innerHTML=user_choice
        computer_choice=Computer_Choice()
        computer_choice_span.innerHTML=computer_choice
        let result=Result(user_choice,computer_choice)
        result_span.innerHTML=result
        
    })
);
function Computer_Choice()
{
    const randomInt=Math.floor(Math.random()*3)
    let cc
    switch (randomInt) {
        case 0:
            cc="STONE"
            break;
            case 1:
            cc="PAPER"
            break;
        case 2:
            cc="SCISSOR"
            break;
        default:
            cc="STONE"
            break;
    }
    return cc
}
function Result(user_choice,computer_choice)
{
    let answer="IT'S A DRAW"

    if (user_choice==="SCISSOR" && computer_choice==="PAPER")
    answer="YOU WON"
    if (user_choice==="STONE" && computer_choice==="SCISSOR")
    answer="YOU WON"
    if (user_choice==="PAPER" && computer_choice==="STONE")
    answer="YOU WON"
    if (user_choice==="PAPER" && computer_choice==="SCISSOR")
    answer="YOU LOSE"
    if (user_choice==="STONE" && computer_choice==="PAPER")
    answer="YOU LOSE"
    if (user_choice==="SCISSOR" && computer_choice==="STONE")
    answer="YOU LOSE"
    return answer


}
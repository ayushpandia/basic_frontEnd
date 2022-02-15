(function (){
    formAnswer = document.querySelector("#answer")
    let ac = 0
    let wa = 0
    spanWins = document.querySelector("#trueCount")
    spanLoses = document.querySelector("#falseCount")
    newGame()

    function randomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let SubmitBtn = document.querySelector("button[name=submit]")
    let Nextbtn = document.querySelector("button[name=next]")
    SubmitBtn.addEventListener("click", function(){
        let answer =  formAnswer.value
        if (answer == (firstNumber * secondNumber))
        {
            formAnswer.style.color = "green"
            ac+=1
            return 
        }
        else 
        {
            formAnswer.style.color = "red"
            formAnswer.value="The correct answer is " + (firstNumber * secondNumber);
            wa+=1
        }
    })

    Nextbtn.addEventListener("click", newGame)

    function newGame(){
        formAnswer.value=""
        formAnswer.style.color = "black"
        spanWins.innerHTML = ac
        spanLoses.innerHTML = wa
        let container = document.querySelector("#container")
        let divfirstNumber = container.querySelector("#firstNumber")
        let max1 =  document.querySelector("input[number=one]").value
        let max2 =  document.querySelector("input[number=two]").value
        firstNumber = max1
        secondNumber = randomInt(1, max2)

        divfirstNumber.innerHTML = firstNumber

        let divsecondNumber = container.querySelector("#secondNumber")
        divsecondNumber.innerHTML = secondNumber
    }
})();

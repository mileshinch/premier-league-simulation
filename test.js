// let myVariable = 10;

let myAnswer;

console.log(myAnswer);

function myFunction() {
    myAnswer = 10;
    console.log("myFunc was run");
}

function showAnswer() {
    document.getElementById("result").innerHTML = myAnswer;
}
// myFunc();

btn.addEventListener("click", myFunction)

btn1.addEventListener("click", showAnswer)




console.log(myAnswer)
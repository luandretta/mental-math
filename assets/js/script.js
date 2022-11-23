// Wait for the DOM to finish loading before runnning the game
//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded"), function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);

            }
        });
    }
    document.getElementById("answer-box").addEventListener("keydown"), 
    function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    }
    runGame("addition");
}

/**
 * After the script is loaded, the user can choice what he want to learn, then begin the main loop
 */

function runGame(gameType) {
    document.getElementById("answer-box").value= "";
    document.getElementById("answer-box").focus();


    // Creates two random numbers between 1 and 100
    let num1 = Math.floor(Math.random() * 100) + 1;
    let num2 = Math.floor(Math.random() * 100) + 1;

    // Creates two random numbers between 1 and 10
    let num3 = Math.floor(Math.random() * 10) + 1;
    let num4 = Math.floor(Math.random() * 10) + 1; 


    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num3, num4);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    }  else if (gameType === "division") {
		displayDivisionQuestion(num3, num4);
	} else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }


}


/**
 * Check the answers
 */
function checkAnswer() {


    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];


    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);


/**
 * Get the operands and the operator directly from the dom
 */
 function calculateCorrectAnswer() {


    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;


    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    }  else if (operator ==="/") {
		return [operand1 / operand2, "division"];
	} else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

/**
 * Increments the score by 1
 */
 function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * Increments the wrong answers by 1
 */
 function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;   
}


/**
 * Create a table with math questions
 */
 function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";   
}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}

function displayDivisionQuestion(operand1, operand2) {
	document.getElementById("operand1").textContent = (operand1 * operand2);
	document.getElementById("operand2").textContent = operand2;
	document.getElementById("operator").textContent = "/";
}
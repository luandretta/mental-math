// Wait for the DOM to finish loading before runnning the game
//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded"), function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit"){
                checkAnswer();
            }else {
                let gameType = this.getAttribute("data-type");
                runCalculation(calculationType);
            }
        });
    }
    document.getElementById("answer").addEventListener("keydown"), 
    function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    }
    runCalculation("addition");
}

/**
 * After the script is loaded, the user can choice what he want to learn, then begin the main loop
 */

function runCalculation(calculationType)


/**
 * Check the answers
 */
function checkAnswer ()

/**
 * Get the operands and the operator directly from the dom
 */

function correctAnswer()
/**
 * Increments the score by 1
 */
function incrementScore()
/**
 * Increments the wrong answers by 1
 */
function incrementWrongAnswer()

/**
 * Create a table with math questions
 */

function additionQuestions(operand1, operand2) 

function subtractionQuestions(operand1, operand2) 

function multiplyQuestions(operand1, operand2) 

function divisionQuestions(operand1, operand2) 


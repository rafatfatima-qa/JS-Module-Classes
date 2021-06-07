/* Addition */
function addFunc() {

    let num1, num2, result;

    num1 = parseFloat(document.querySelector("#input1").value);
    num2 = parseFloat(document.querySelector("#input2").value);

    result = num1 + num2;

    let newHeading = document.querySelector('#heading1 > span');
    newHeading.innerHTML = result;

}

/* Subtraction */
function subtractFunc(){

    let num1, num2, result;

    num1 = parseFloat(document.querySelector("#input1").value);
    num2 = parseFloat(document.querySelector("#input2").value);

    result = num1 - num2;

    let newHeading = document.querySelector('#heading1 > span');
    newHeading.innerHTML = result;
}

/* Multiplication */
function multiplyFunc(){
    let num1, num2, result;

    num1 = parseFloat(document.querySelector("#input1").value);
    num2 = parseFloat(document.querySelector("#input2").value);

    result = num1 * num2;

    let newHeading = document.querySelector('#heading1 > span');
    newHeading.innerHTML = result;
}

/* Division */
function divideFunc(){
    let num1, num2, result;

    num1 = parseFloat(document.querySelector("#input1").value);
    num2 = parseFloat(document.querySelector("#input2").value);

    result = num1 / num2;

    let newHeading = document.querySelector('#heading1 > span');
    newHeading.innerHTML = result;
}




// Addition Numbers using Function

function addtonumbers(num1,num2){
    console.log('this number is addition');
    var total = num1 + num2;
    return total;
    
}
var firstNum = 40;
var secondNum= 60;
var result = addtonumbers(firstNum,secondNum);
console.log("Total addition number is =", result);

// Subtraction using function 

function subtractionTwoNumbers(firstNum1,secondNum2){
    var subtract = firstNum1 - secondNum2;
    return subtract;
}


var subTractNum =subtractionTwoNumbers(80,65);
console.log("This is subtractNum is =",subTractNum);

// Multipuie the numbers using Function

function MultipuieTwoNumbers(multipi1,multipi2){
    var multipieNumbers = multipi1 * multipi2;
    return multipieNumbers;
}

var multipieToal = MultipuieTwoNumbers(60,5);
console.log("this multipule number is =",multipieToal);

// Divided Numbers using Function

function dividedTwoNumbers(dividedNum1,dividedNum2){
    var dividedTotal = dividedNum1/dividedNum2;
    return dividedTotal;

}

var divtotal = dividedTwoNumbers(80,5);
console.log("this divided number is =", divtotal);
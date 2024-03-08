function sum(num1, num2,fnToCall){
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data){
    console.log("Result of the sum is : "+data);
}

function displayResultInPassive(data){
    console.log("Sum's result is : "+data);
}

const num = sum(10,20,displayResult);
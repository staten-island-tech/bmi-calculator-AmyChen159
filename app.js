const x = Number(prompt("enter your height in inches"))
const y = Number(prompt("enter your weight in pounds"))

function BMI(x,y){
    console.log(y/(x*x)*703);
}
BMI(x,y);


function calc(BMI) {
    if (BMI < 18.5){
        console.log("underweight");
    } else if (BMI < 24.9){
        console.log("healthy weight");
    } else {
        console.log("overweight");
    }
}

calc(BMI);

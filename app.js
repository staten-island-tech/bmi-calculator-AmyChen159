const x = Number(prompt("enter your height in inches"))
const y = Number(prompt("enter your weight in pounds"))

function calc(x,y){
    console.log(y/(x*x)*703);
}
calc(x,y);

function BMI(){
    if (x < 18.5){
        console.log("underweight");
    } else {
        console.log("Healthy weight");
    }
}
BMI(calc(x,y));
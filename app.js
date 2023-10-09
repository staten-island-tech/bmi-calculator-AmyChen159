const x = Number(prompt("enter your height in cm"))
const y = Number(prompt("enter your weight in kg"))

function BMI(x,y){
    console.log(y/(x*x)*10000);
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
calc(y/(x*x)*10000)

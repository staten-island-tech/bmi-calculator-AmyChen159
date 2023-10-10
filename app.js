//const x = Number(prompt("enter your height in cm"))
//const y = Number(prompt("enter your weight in kg"))

/* const Jimothy = {
    firstName: "Jimothy",
    lastName: "Tittertot",
    height: 170,
    weight: 60,
};
const Martha = {
    firstName: "Martha",
    lastName: "Bertha",
    height: 150,
    weight: 50,
};

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
calc(y/(x*x)*10000) */

const Jimothy = {
    firstName: "Jimothy",
    lastName: "Tittertot",
    height: 170,
    weight: 60,
};

const Martha = {
    firstName: "Martha",
    lastName: "Bertha",
    height: 150,
    weight: 90
}

function calculate(user){
    let bmi = (user.weight/(user.height*user.height)*10000);
    return bmi;
}

function compare(bmi){
    if (bmi < 18.5){
        console.log("underweight");
        console.log(":(")
    } else if (bmi < 24.9){
        console.log("healthy weight");
        console.log(":)")
    } else {
        console.log("overweight");
        console.log(":(")
    }
}

function use(user){
    let bmi = calculate(user);
    console.log(`${user.firstName} ${user.lastName}`);
    console.log(`${user.height} centimeters ${user.weight} kilograms`);
    console.log(bmi);
    compare(bmi);
}
use(Jimothy);

console.log("hello ia ma ");

let rating=3;
if(rating===3){
    console.log("Your are right")
}

for (let i=1;i<=10;i++){
    console.log(i);
}

for (i=0;i<6;i++){
    console.log("Da ba dee da ba daa")
}
let maximum=parseInt(prompt("enter a number"));
if(!maximum){
    maximum=parseInt(prompt("Enter"));
}
const targetNum=Math.floor(Math.random()*maximum)+1;
console.log(targetNum)

let guess=parseInt(prompt("Enter your first guess"));

while (guess!==targetNum){
    if(guess>targetNum){
        guess=parseInt(prompt("too high! Enter a new guess!"))
    }else{
        guess=parseInt(prompt("too low! Enter a new guess!"))
    }
}
console.log("You got it!")
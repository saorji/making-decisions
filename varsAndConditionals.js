/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25;
let jamieLannisterAttack = 45;

if(jonSnowAttack > jamieLannisterAttack) {
    console.log(`Jon Snow has a better attack than jamie`);
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log(`Jamie has a better attack than jon`);
} else {
    console.log(`Jon and Jamie have thesame attack`);
}

let jonSnowHealth = 100;
let jonSnowDefense = 0;

if (jonSnowHealth <= jamieLannisterAttack){
    console.log(`Jon Snow has been slained`)
} else {
    jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

jonSnowDefense += 25;

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
    console.log(`Jon Snow has been slained`);
} else {
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense;
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

if(jonSnowHealth + 50 >= 100) {
    jonSnowHealth = 100;
} else {
    jonSnowHealth += 50;
}

console.log(jonSnowHealth);

let coinLandsHeads = false;

// if(coinLandsHeads === true) {
//     console.log(`the fight continue's`)
// } else {
//     console.log(`Jon is allowed to run away`);
// }

if(coinLandsHeads !== false) {
    console.log(`the fight continue's`)
} else {
    console.log(`Jon is allowed to run away`);
}

// For-loop

// for (let i=0; i < 5; i++) {
//     jonSnowHealth -= jamieLannisterAttack - jonSnowDefense;
//    if (jonSnowHealth <= 0){
//        console.log(`jon has been slain`);
//    } else {
//        console.log(`jon Snow's health is ${jonSnowHealth}`);
//    }
// }

// for(let i=0; i<5;i++){
//     jonSnowHealth-=(jamieLannisterAttack-jonSnowDefense);

//     if(jonSnowHealth<=0){
//         console.log("Jon has been slained");
//     }else{
//         console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
//     }
// }

// While-loop

while(jonSnowHealth > 0){
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense;
    console.log(`jon's health is now ${jonSnowHealth}`);
if (jonSnowHealth <= 0) {
   console.log(`jon has been slain`);
}
}
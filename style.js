// die Throw
const canThrowdice = [true,true,true,true,true,];
const diceThrow = [1, 2, 3, 4, 5];
let Rollmade = 0;
const Maxroll = 3;
const dices =[0,0,0,0,0,0];
const dice = [0,0,0,0,0,0];
const kies = [true, true, true, true, true, true, true];
const sub = [0,0,0,0,0,0];

function rollAllDice(){
    if (Rollmade < Maxroll) {
        for (let i = 0; i < diceThrow.length; i++) {
            if (!holdice[i]) {
                const rollResult = Math.floor(Math.random() * 6) + 1;
                diceThrow[i] = rollResult;
                console.log("Dice " + (i + 1) + " rolled: " + rollResult);
                document.getElementById("die" + (i + 1)).textContent = rollResult;

            }
        }
        Rollmade++;
        updateRollCount();
    } else {
        alert("Max NUH UH AH !!!");
    }

    calculateScore();
    if(kies[0] == true){document.getElementById("aces").innerHTML = dice[0];}
    if(kies[1] == true){document.getElementById("twos").innerHTML = dice[1];}
    if(kies[2] == true){document.getElementById("threes").innerHTML = dice[2];}
    if(kies[3] == true){document.getElementById("fours").innerHTML = dice[3];}
    if(kies[4] == true){document.getElementById("fives").innerHTML = dice[4];}
    if(kies[5] == true){document.getElementById("sixes").innerHTML = dice[5];}
    document.getElementById("totaal").innerHTML = subtotaal;

}
// update rolling
function updateRollCount() {
  const remainingRolls = Maxroll - Rollmade;
  document.getElementById("rollCount").textContent = "Rolls left: " + remainingRolls;
}
// hold dice
const holdice = [false, false, false, false, false];
function holdie(index) {
    holdice[index] = !holdice[index];
    const dieElement = document.getElementById('die' + (index + 1));
    dieElement.classList.toggle('held', holdice[index]);
}
//
const CalculateValue = [0,0,0,0,0];
let subtotaal = 0;
function calculateScore (){
CalculateValue[0] = diceThrow[0];
CalculateValue[1] = diceThrow[1];
CalculateValue[2] = diceThrow[2];
CalculateValue[3] = diceThrow[3];
CalculateValue[4] = diceThrow[4];
console.log(CalculateValue);

for(i = 0; i < 6 ; i++){
    dices[i] = CalculateValue.filter(num => num == i + 1 ).length;
}
console.log(dices);

dice[0] = dices[0] * 1;
dice[1] = dices[1] * 2;
dice[2] = dices[2] * 3;
dice[3] = dices[3] * 4;
dice[4] = dices[4] * 5;
dice[5] = dices[5] * 6;

subtotaal = sub[0] + sub[1] + sub[2] + sub[3] + sub[4] + sub[5];
if(subtotaal >= 60){
    subtotaal = sub[0] + sub[1] + sub[2] + sub[3] + sub[4] + sub[5] + 35;
    document.getElementById("checkbonus").innerHTML = "35";
}
// Max een keer fillen


// Three of a kind
let Three_of = 0;

for (let i = 0; i < 6; i++) {
    if (dices[i] >= 3) {
        Three_of = dice[0] + dice[1] + dice[2] + dice[3] + dice[4] + dice[5];
        break;
    }
}
document.getElementById("threeOfAKind").innerHTML = Three_of;


// Four  of a kind
let Four_of = 0;

for (let i = 0; i < 6; i++) {
    if (dices[i] >= 4) {
        Four_of = dice[0] + dice[1] + dice[2] + dice[3] + dice[4] + dice[5];
        break;
    }
}
document.getElementById("FourOfAKind").innerHTML = Four_of;

let Full_house = 0;

for(j = 0; j < 6; j++){
for (let i = 0; i < 6; i++) {
    if (dices[i] == 3 && dices[j] == 2) {
                Full_house = 25;
            }
        }
    }
    document.getElementById("Full_House").innerHTML = Full_house;

    let Yahtzee = 0;

    for (let i = 0; i < 6; i++) {
        if (dices[i] >= 5) {
            Yahtzee = 50;
            break;
        }
    }
    document.getElementById("Yahtzee").innerHTML = Yahtzee;

    // chance Score
    let Chance = dice.reduce((total, die) => total + die, 0);
document.getElementById("Chance").innerHTML = Chance;


}



function onthoud1(){
    document.getElementById("aces").innerHTML = dice[0];
    sub[0] = dice[0];
    kies[0] = false;
    Rollmade = 0;
    document.getElementById("rollCount").textContent = "Rolls left: " + 3;
    document.getElementById("aces").style.color = "red";
}
function onthoud2(){
    document.getElementById("twos").innerHTML = dice[1];
    sub[1] = dice[1];
    kies[1] = false;
    Rollmade = 0;
    document.getElementById("rollCount").textContent = "Rolls left: " + 3;
    document.getElementById("twos").style.color = "red";
}
function onthoud3(){
    document.getElementById("threes").innerHTML = dice[2];
    sub[2] = dice[2];
    kies[2] = false;
    Rollmade = 0;
    document.getElementById("rollCount").textContent = "Rolls left: " + 3;
    document.getElementById("threes").style.color = "red";
}
function onthoud4(){
    document.getElementById("fours").innerHTML = dice[3];
    sub[3] = dice[3];
    kies[3] = false;
    Rollmade = 0;
    document.getElementById("rollCount").textContent = "Rolls left: " + 3;
    document.getElementById("fours").style.color = "red";
}
function onthoud5(){
    document.getElementById("fives").innerHTML = dice[4];
    sub[4] = dice[4];
    kies[4] = false;
    Rollmade = 0;
    document.getElementById("rollCount").textContent = "Rolls left: " + 3;
    document.getElementById("fives").style.color = "red";
}
function onthoud6(){
    document.getElementById("sixes").innerHTML = dice[5];
    sub[5] = dice[5];
    kies[5] = false;
    Rollmade = 0;
    document.getElementById("rollCount").textContent = "Rolls left: " + 3;
    document.getElementById("sixes").style.color = "red";
}


function ounthoudThree() {
    Rollmade = 0;
    document.getElementById("rollCount").textContent = "Rolls left: " + 3;
    document.getElementById("threeOfAKind").style.color = "red";
}
function ounthoudFour() {
    Rollmade = 0;
    document.getElementById("rollCount").textContent = "Rolls left: " + 3;
    document.getElementById("FourOfAKind").style.color = "red";
}








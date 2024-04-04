// Array and andere digen
const canThrowdice = [true,true,true,true,true,];
const diceThrow = [1, 2, 3, 4, 5];
let Rollmade = 0;
const Maxroll = 3;
const dices =[0,0,0,0,0,0];
const dice = [0,0,0,0,0,0];
const kies = [true, true, true, true, true, true];
const sub = [0,0,0,0,0,0];
const sublower = [0,0,0,0,0,0,0];
const kieslower = [true, true, true, true, true, true, true];
let Three_of = 0;
let Three_TF = false;
let Four_of = 0;
let Four_TF = false;
let Full_housePunt = 0;
let Full_houseTF = false;
let Small_straightPunt = 0;
let Large_straightPunt = 0;
let YahtzeePunt = 0;
let YahtzeeTF = false;
let ChancePunt = 0;



// Roll function
function rollAllDice(){
    Full_houseTF = false;
    YahtzeeTF = false;
    Four_TF = false;
    Three_TF = false;
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
// Score Calculate
    calculateScore();
    if(kies[0] == true){document.getElementById("aces").innerHTML = dice[0];}
    if(kies[1] == true){document.getElementById("twos").innerHTML = dice[1];}
    if(kies[2] == true){document.getElementById("threes").innerHTML = dice[2];}
    if(kies[3] == true){document.getElementById("fours").innerHTML = dice[3];}
    if(kies[4] == true){document.getElementById("fives").innerHTML = dice[4];}
    if(kies[5] == true){document.getElementById("sixes").innerHTML = dice[5];}
    document.getElementById("totaal").innerHTML = subtotaal;

    if(kieslower[0] == true){document.getElementById("threeOfAKind").innerHTML = Three_of;}
    if(kieslower[1] == true){document.getElementById("FourOfAKind").innerHTML = Four_of;}
    if(kieslower[2] == true){document.getElementById("Full_House").innerHTML =Full_housePunt;}
    if(kieslower[3] == true){document.getElementById("Small_straight").innerHTML = Small_straightPunt;}
    if(kieslower[4] == true){document.getElementById("Large_Straight").innerHTML = Large_straightPunt;}
    if(kieslower[5] == true){document.getElementById("Yahtzee").innerHTML = YahtzeePunt;}
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
function unholdAllDice() {
    holdice.fill(false);
    const diceElements = document.querySelectorAll('.die');
    diceElements.forEach(dieElement => dieElement.classList.remove('held'));
}
// CalculateValue
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
if(subtotaal >= 63){
    subtotaal = sub[0] + sub[1] + sub[2] + sub[3] + sub[4] + sub[5] + 35;
    document.getElementById("checkbonus").innerHTML = "35";
}

// Three of a kind
if(kieslower[0] == true){
for (let i = 0; i < 6; i++) {
    if (dices[i] >= 3) {
        Three_TF = true;
    }
}
if(Three_TF == true){Three_of = dice[0] + dice[1] + dice[2] + dice[3] + dice[4] + dice[5];}else{Three_of = 0;}
}
document.getElementById("threeOfAKind").innerHTML = Three_of;

// Four  of a kind
if(kieslower[1] == true){
for (let i = 0; i < 6; i++) {
    if (dices[i] >= 4) {
        Four_TF = true;  
    }
    }
    if (Four_TF == true){Four_of = dice[0] + dice[1] + dice[2] + dice[3] + dice[4] + dice[5];}else{Four_of = 0; 
}
}
document.getElementById("FourOfAKind").innerHTML = Four_of;

//Fullhouse

if(kieslower[2] == true){
for(j = 0; j < 6; j++){
for (let i = 0; i < 6; i++) {
    if (dices[i] == 3 && dices[j] == 2){
                //Full_housePunt = 25;  
                Full_houseTF = true;
    } 

        }
    }
    if(Full_houseTF == true){Full_housePunt = 25;}else{Full_housePunt = 0;}
}
document.getElementById("Full_House").innerHTML = Full_housePunt;
    // Small straight
    if(kieslower[3] == true){
    if(dices[0]&& dices[1]&&dices[2]&&dices[3]||dices[1]&&dices[2]&&dices[3]&&dices[4]||dices[2]&&dices[3] && dices[4] &&dices[5]){
    Small_straightPunt = 30;
    }else{Small_straightPunt = 0;}
}
    document.getElementById("Small_straight").innerHTML = Small_straightPunt;

// Large Straight
if(kieslower[4] == true){
    if(dices[0]&& dices[1]&&dices[2]&&dices[3]&& dices[4]||dices[1]&& dices[2]&&dices[3]&&dices[4]&& dices[5]){
    Large_straightPunt = 40;
    }else{Large_straightPunt = 0;}
}
    document.getElementById("Large_Straight").innerHTML = Large_straightPunt;

//Yathzee 
if(kieslower[5] == true){
    for (let i = 0; i < 6; i++) {
        if (dices[i] == 5) {
            YahtzeeTF = true;
        }
    }
    if(YahtzeeTF == true){YahtzeePunt = 50;}else{YahtzeePunt = 0;}
}
    document.getElementById("Yahtzee").innerHTML = YahtzeePunt;

// chance Score
if(kieslower[6] == true){
    ChancePunt = dice.reduce((total, die) => total + die, 0);
    document.getElementById("Chance").innerHTML = ChancePunt;
}


// Grand totaal
    let Lowertotaal = sublower[0] + sublower[1]+ sublower[2]+ sublower[3]+ sublower[4]+ sublower[5]+ sublower[6];
    document.getElementById("Lower_Total").innerHTML = Lowertotaal;
    Grandtotal = Lowertotaal + subtotaal;
    document.getElementById("Grand_Total").innerHTML = Grandtotal;
}


function onthoud1(){
    document.getElementById("aces");
    if(aces.name == "locked") return;
    aces.innerHTML = dice[0];
    sub[0] = dice[0];
    kies[0] = false;
    Rollmade = 0;
    document.getElementById("rollCount").textContent = "Rolls left: " + 3;
    aces.style.color = "red";
    aces.name = "locked";
}
function onthoud2(){
    document.getElementById("twos");
    if(twos.name == "locked") return;
    twos.innerHTML = dice[1];
    sub[1] = dice[1];
    kies[1] = false;
    Rollmade = 0;
    document.getElementById("rollCount").textContent = "Rolls left: " + 3;
    document.getElementById("twos").style.color = "red";
    twos.name = "locked";
}
function onthoud3(){
    document.getElementById("threes")
    if(threes.name == "locked") return;
    threes.innerHTML = dice[2];
    sub[2] = dice[2];
    kies[2] = false;
    Rollmade = 0;
    document.getElementById("rollCount").textContent = "Rolls left: " + 3;
    document.getElementById("threes").style.color = "red";
    threes.name = "locked";
}
function onthoud4(){
    document.getElementById("fours")
    if(fours.name == "locked") return;
    fours.innerHTML = dice[3];
    sub[3] = dice[3];
    kies[3] = false;
    Rollmade = 0;
    document.getElementById("rollCount").textContent = "Rolls left: " + 3;
    document.getElementById("fours").style.color = "red";
    fours.name = "locked";
}
function onthoud5(){
    document.getElementById("fives")
    if(fives.name == "locked") return;
    fives.innerHTML = dice[4];
    sub[4] = dice[4];
    kies[4] = false;
    Rollmade = 0;
    document.getElementById("rollCount").textContent = "Rolls left: " + 3;
    document.getElementById("fives").style.color = "red";
    fives.name = "locked";
}
function onthoud6(){
    document.getElementById("sixes")
    if(sixes.name == "locked") return;
    sixes.innerHTML = dice[5];
    sub[5] = dice[5];
    kies[5] = false;
    Rollmade = 0;
    document.getElementById("rollCount").textContent = "Rolls left: " + 3;
    document.getElementById("sixes").style.color = "red";
    sixes.name = "locked";
}


function onthoudThree() {
    if(threeOfAKind.name == "locked") return;
    Rollmade = 0;
    document.getElementById("rollCount").textContent = "Rolls left: " + 3;
    document.getElementById("threeOfAKind").style.color = "red";
    sublower[0] = Three_of;
    kieslower[0] = false;
    threeOfAKind.name = "locked";
}
function onthoudFour() {
    if(FourOfAKind.name == "locked") return;
    Rollmade = 0;
    document.getElementById("rollCount").textContent = "Rolls left: " + 3;
    document.getElementById("FourOfAKind").style.color = "red";
    sublower[1] = Four_of;
    kieslower[1] = false;
    FourOfAKind.name = "locked";
}
function onthoudFull() {
    if(Full_House.name == "locked") return;
    Rollmade = 0;
    document.getElementById("rollCount").textContent = "Rolls left: " + 3;
    document.getElementById("Full_House").style.color = "red";  
    sublower[2] = Full_housePunt;
    kieslower[2] = false;
    Full_House.name = "locked";
}
function onthoudSmall_str() {
    if(Small_straight.name == "locked") return;
    Rollmade = 0;
    document.getElementById("rollCount").textContent = "Rolls left: " + 3;
    document.getElementById("Small_straight").style.color = "red";
    sublower[3] = Small_straightPunt;
    kieslower[3] = false;
    Small_straight.name = "locked";
}
function onthoudLarge_str() {
    if(Large_Straight.name == "locked") return;
    Rollmade = 0;
    document.getElementById("rollCount").textContent = "Rolls left: " + 3;
    document.getElementById("Large_Straight").style.color = "red";
    sublower[4] = Large_straightPunt;
    kieslower[4] = false;
    Large_Straight.name = "locked";
}
function onthoudYathzee() {
    if(Yahtzee.name == "locked") return;
    Rollmade = 0;
    document.getElementById("rollCount").textContent = "Rolls left: " + 3;
    document.getElementById("Yahtzee").style.color = "red";
    sublower[5] = YahtzeePunt;
    kieslower[5] = false;
    Yahtzee.name = "locked";
}
function onthoudChance() {
    if(Chance.name == "locked") return;
    Rollmade = 0;
    document.getElementById("rollCount").textContent = "Rolls left: " + 3;
    document.getElementById("Chance").style.color = "red";
    sublower[6] = ChancePunt;
    kieslower[6] = false;
    Chance.name = "locked";
}











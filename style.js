
// dubblesteen rollen en Maxrollens

const diceThrow = [1, 2, 3, 4, 5];
let canThrow = [true, true, true, true, true];
let Rollmade = 0;
const Maxroll = 3

function rollAllDice(){
if (Rollmade < Maxroll)
  for (let i = 0; i < diceThrow.length; i++) {
    if (canThrow[i]) {
      const rollResult = Math.floor(Math.random() * 6) + 1;
      diceThrow[i] = rollResult;
      console.log("Dice " + (i + 1) + " rolled: " + rollResult);
      document.getElementById("die" + (i + 1)).textContent = rollResult;
    }
  }
  Rollmade++;
}
//Rolling Updater

// Reset

const input = document.getElementById("input");
const output = document.getElementById("output"); // Fixed variable name to match below
const button = document.getElementById("bt");
const token = document.getElementById("token");
const oddsdisplay = document.getElementById("oddsdisplay");

button.onclick = function() {
    let rollAmount = Number(input.value);
    let foundToken = false; 

    if(typeof rollAmount === 'number' && Number.isFinite(rollAmount)){
    let failChance = 1 - (1 / 137500);
    let winChance = (1 - Math.pow(failChance, rollAmount)) * 100;
    oddsdisplay.textContent = `Overall odds: ${winChance.toFixed(4)}%`;

    for (let i = 0; i < rollAmount; i++) {
        let result = Math.floor(Math.random() * 137500) + 1; 
        
        if (result === 100) {
            foundToken = true;
            break; 
        }
    }
    
    if (foundToken) {
        output.style.color = `gold`;
        output.textContent = "you got the token!"; 
        token.style.visibility = `visible`;
        token.style.animation = `rotate 3s linear infinite`;
    } else {
        output.style.color = `black`;
        output.textContent = "no token!";
        token.style.visibility = `hidden`;
        token.style.animation = `none`; 
    }
   }
   else{
    oddsdisplay.textContent = "Please input a number"
    output.textContent = ""
    token.style.visibility = `hidden`;
    token.style.animation = `none`; 
   } 
};
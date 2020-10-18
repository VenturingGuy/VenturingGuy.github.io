import {Unit} from './data.js'

window.addEventListener('load', initializeStats)

/* Creates two instances of a class corresponding to the player
and the enemy */

let playerUnit = new Unit("Zack", 5600, 200, 5600, 200,
["O Shot", "O Strike", "O Finish"], 
[2500, 2800, 3500], "A", "S", "L", 80, 120, 850, 100)
console.log(playerUnit)
console.log(playerUnit.hp)


let enemyUnit = new Unit("Gunguy", 12000, 450, 12000, 450,
["Blast Shot", "Collision"],
[2500, 4000], "S", "S", "S", 80, 70, 200, 100)

/* Defines consts that correspond to HTML elements to allow
for editing using the functions below */

const playerHealth = document.getElementById("player-hp")
const playerEnergy = document.getElementById("player-en")

const enemyHealth = document.getElementById("enemy-hp")
const enemyEnergy = document.getElementById("enemy-en")

const playerAction = document.getElementById("action-output")
playerAction.addEventListener("click", changeAction)

const playerAttack = document.getElementById("attack-output")
playerAttack.addEventListener("click", changeAttack)

const combatStart = document.getElementById("final-confirm")
combatStart.addEventListener("click", fightProcess)

/* Sets the stats/attacks for both units to be displayed upon loading page */

function initializeStats() {
    let playerHP = playerUnit.maxHP
    playerHealth.textContent += playerHP

    let playerEN = playerUnit.maxEN
    playerEnergy.textContent += playerEN

    let enemyHP = enemyUnit.maxHP
    enemyHealth.textContent += enemyHP

    let enemyEN = enemyUnit.maxEN
    enemyEnergy.textContent += enemyEN

    changeAttack()
}

/* Manages display of which action player switches to onclick,
calls changeAttack to display blank */

function changeAction() {
    switch(playerAction.innerText){
        case "Attack":
            playerAction.innerText = "Defend"
            break;
        case 'Defend':
            playerAction.innerText = "Evade"
            break;
        case 'Evade':
            playerAction.innerText = "Attack"
            break;
    }
    changeAttack()
}

/* Changes attack onclick based on instanced class list of attacks,
displays blank if not attacking,
switches to first attack on action being attack
or previous attack being the last in list */

function changeAttack() {
    if (playerAction.innerText == "Attack") {
        const attackList = playerUnit.attacks
        let selectedAttack = playerAttack.innerText
        let nextAttack = attackList.indexOf(selectedAttack) + 1
        if (playerAttack.innerText == "---" 
        || attackList[nextAttack] == attackList[attackList.length]) {
            playerAttack.innerText = attackList[0]
        }
        else {
            playerAttack.innerText = attackList[nextAttack]
        }
    }
    else {
        playerAttack.innerText = "---"
    }
}

function enemyTurn() {
    /* weaponAttack * ((attack stat + enemyWill)/200) * weaponPerformance */
    let baseAttack = enemyUnit.attackPotency[1] 
    * ((enemyUnit.attackStat + enemyUnit.willPower)/200)
    * enemyUnit.totalPerformance

    console.log(baseAttack)
    /* unitArmor * ((playerDefense + playerWill)/200) * playerSizeAdjustment */
    let baseDefense = playerUnit.armorStat 
    * ((playerUnit.defenseStat + playerUnit.willPower)/200) 
    * playerUnit.sizeAdjustment

    console.log(baseDefense)
    /* (baseAttack-baseDefense) * ((100 * player.totalPerformance)/100) */
    let finalDamage = Math.round((baseAttack - baseDefense) * ((100 * playerUnit.totalPerformance)/100))
    console.log(finalDamage)
    playerUnit.hp -= finalDamage
    if (playerUnit.hp <= 0){
        playerUnit.hp = 0
        console.log("OH NO")
    }
    playerHealth.textContent = "HP: " + playerUnit.hp + " / " + playerUnit.maxHP
}

function playerTurn() {
    enemyUnit.hp -= playerUnit.attackPotency[1]
    if (enemyUnit.hp <= 0){
        enemyUnit.hp = 0
        console.log("OH YEAH")
    }
    enemyHealth.textContent = "HP: " + enemyUnit.hp
}

function fightProcess() {
    enemyTurn()
    playerTurn()
}
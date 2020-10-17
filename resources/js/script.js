import {Unit} from './data.js'

window.addEventListener('load', initializeStats)


let playerUnit = new Unit("Zack", 5600, 200, 5600, 200,
["O Shot", "O Strike", "O Finish"], 
[2500, 2800, 3500])


let enemyUnit = new Unit("Gunguy", 12000, 450, 12000, 450,
["Blast Shot", "Collision"],
[2500, 4000])

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

function initializeStats() {
    let playerHP = playerUnit.hp
    playerHealth.textContent += playerHP

    let playerEN = playerUnit.en
    playerEnergy.textContent += playerEN

    let enemyHP = enemyUnit.hp
    enemyHealth.textContent += enemyHP

    let enemyEN = enemyUnit.en
    enemyEnergy.textContent += enemyEN

    changeAttack()
}

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

function fightProcess() {
    console.log(playerUnit.attacks)
}
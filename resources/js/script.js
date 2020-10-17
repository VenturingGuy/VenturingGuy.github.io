import {Unit} from './data.js'

window.addEventListener('load', initializeStats)


let playerUnit = new Unit("Zack", 5600, 200, 5600, 200, ["O Shot", "O Strike", "O Finish"])
console.log(playerUnit)

const playerHealth = document.getElementById('player-hp')
const playerEnergy = document.getElementById('player-en')

const enemyHealth = document.getElementById('enemy-hp')
const enemyEnergy = document.getElementById('enemy-en')

const playerAction = document.getElementById('action-output')
playerAction.addEventListener('click', changeAction)

const playerAttack = document.getElementById('attack-output')
playerAttack.addEventListener('click', changeAttack)

const combatStart = document.getElementById('final-confirm')
combatStart.addEventListener('click', fightProcess)

function initializeStats() {
    let playerHP = playerUnit.hp
    playerHealth.textContent += playerHP

    let playerEN = playerUnit.en
    playerEnergy.textContent += playerEN
}

function changeAction() {
    switch(playerAction.innerText){
        case 'Attack':
            playerAction.innerText = 'Defend'
            break;
        case 'Defend':
            playerAction.innerText = 'Evade'
            break;
        case 'Evade':
            playerAction.innerText = 'Attack'
            break;
    }
    changeAttack()
}

function changeAttack() {
    if (playerAction.innerText == 'Attack') {
        const attackList = playerUnit.attacks
        console.log(attackList)
    }
    else {
        playerAttack.innerText = '---'
    }
}

function fightProcess() {
    console.log(data.playerData.Attacks)
}
import player_data from './data.js'

window.addEventListener('load', initializeStats)

const playerHealth = document.getElementById('player-hp')
const playerEnergy = document.getElementById('player-en')

const playerAction = document.getElementById('action-output')
playerAction.addEventListener('click', changeAction)

const playerAttack = document.getElementById('attack-output')
playerAttack.addEventListener('click', changeAttack)

function initializeStats() {
    let playerHP = player_data[0].HP
    playerHealth.textContent += playerHP

    let playerEN = player_data[0].EN
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
        switch(playerAttack.innerText){
            case '---':
                playerAttack.innerText = 'O Slash'
                break;
            case 'O Slash':
                playerAttack.innerText = 'O Shot'
                break;
            case 'O Shot':
                playerAttack.innerText = 'O Blow'
                break;
            case 'O Blow':
                playerAttack.innerText = 'O Finish'
                break;
            case 'O Finish':
                playerAttack.innerText = 'O Slash'
                break;
        }
    }
    else {
        playerAttack.innerText = '---'
    }
}
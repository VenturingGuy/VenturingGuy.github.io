import player_data from './data.js'

const playerAction = document.getElementById('action-output')
playerAction.addEventListener('click', changeAction)

const playerAttack = document.getElementById('attack-output')
playerAttack.addEventListener('click', changeAttack)

function changeAction() {
    switch(playerAction.innerHTML){
        case 'Attack':
            playerAction.innerHTML = 'Defend'
            break;
        case 'Defend':
            playerAction.innerHTML = 'Evade'
            break;
        case 'Evade':
            playerAction.innerHTML = 'Attack'
            break;
    }
    changeAttack()
}

function changeAttack() {
    if (playerAction.innerHTML == 'Attack') {
        switch(playerAttack.innerHTML){
            case '---':
                playerAttack.innerHTML = 'O Slash'
                break;
            case 'O Slash':
                playerAttack.innerHTML = 'O Shot'
                break;
            case 'O Shot':
                playerAttack.innerHTML = 'O Blow'
                break;
            case 'O Blow':
                playerAttack.innerHTML = 'O Finish'
                break;
            case 'O Finish':
                playerAttack.innerHTML = 'O Slash'
                break;
        }
    }
    else {
        playerAttack.innerHTML = '---'
    }
}

console.log(player_data)
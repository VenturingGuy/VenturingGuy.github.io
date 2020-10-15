function changeAction() {
    switch(document.getElementById('action-output').innerHTML){
        case 'Attack':
            document.getElementById('action-output').innerHTML = 'Defend'
            changeAttack()
            break;
        case 'Defend':
            document.getElementById('action-output').innerHTML = 'Evade'
            break;
        case 'Evade':
            document.getElementById('action-output').innerHTML = 'Attack'
            changeAttack()
            break;
    }
}

function changeAttack() {
    if (document.getElementById('action-output').innerHTML == 'Attack') {
        switch(document.getElementById('attack-output').innerHTML){
            case '---':
                document.getElementById('attack-output').innerHTML = 'O Slash'
                break;
            case 'O Slash':
                document.getElementById('attack-output').innerHTML = 'O Shot'
                break;
            case 'O Shot':
                document.getElementById('attack-output').innerHTML = 'O Blow'
                break;
            case 'O Blow':
                document.getElementById('attack-output').innerHTML = 'O Finish'
                break;
            case 'O Finish':
                document.getElementById('attack-output').innerHTML = 'O Slash'
                break;
        }
    }
    else {
        document.getElementById('attack-output').innerHTML = '---'
    }
}
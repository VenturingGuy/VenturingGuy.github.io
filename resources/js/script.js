import {Unit} from './data.js'

window.addEventListener('load', initializeStats)

/* Creates two instances of a class corresponding to the player
and the enemy */

let playerUnit = new Unit({
    name: "Zack",
    maxHP: 5600,
    maxEN: 200,
    hp: 5600,
    en: 200,
    attacks: ["O Shot", "O Strike", "O Finish"], 
    attackPotency: [2500, 2800, 3500],
    weaponPerformance: "A",
    attackCost: [20, 35, 50],
    pilotPerformance: "A",
    unitPerformance: "S",
    unitSize: "L",
    attackStat: 80,
    defenseStat: 120,
    armorStat: 850,
    evadeStat: 145,
    mobilityStat: 60,
    accuracyStat: 90,
    willPower: 100})

    console.log(playerUnit)

let enemyUnit = new Unit({
    name: "Gunguy",
    maxHP: 12000,
    maxEN: 450,
    hp: 12000,
    en: 450,
    attacks: ["Blast Shot", "Collision"],
    attackPotency: [2500, 4000],
    weaponPerformance: "A",
    attackCost: [40, 70],
    pilotPerformance: "S",
    unitPerformance: "S",
    unitSize: "S",
    attackStat: 80,
    defenseStat: 70,
    evadeStat: 130,
    accuracyStat: 80,
    armorStat: 200,
    mobilityStat: 40,
    willPower: 100})


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

const enemyAttack = document.getElementById("en-attack-output")

const combatStart = document.getElementById("final-confirm")
combatStart.addEventListener("click", fightConfirm)

const displayDiv = document.getElementById("battle-log")
const displayMessage = document.getElementById("battle-display")


/* Sets the stats/attacks for both units to be displayed upon loading page */

function initializeStats() {
    changeAttack()
    updateStats()
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
        const attackList = playerUnit.stats.attacks
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

function damageCalculation(unit1, unit2, attackChoice) {
    /* weaponAttack * ((attack stat + enemyWill)/200) * weaponPerformance */
    const attackList = unit1.stats.attacks
    let attackNumber = attackList.indexOf(attackChoice)
    let baseAttack = unit1.stats.attackPotency[attackNumber]
    * ((unit1.stats.attackStat + unit1.stats.willPower)/200)
    * unit1.stats.totalPerformance
    console.log(baseAttack)
    /* unitArmor * ((playerDefense + playerWill)/200) * playerSizeAdjustment */
    let baseDefense = unit2.stats.armorStat
    * ((unit2.stats.defenseStat + unit2.stats.willPower)/200)
    * unit2.stats.sizeAdjustment
 

    /* (baseAttack-baseDefense) * ((100 * player.totalPerformance)/100) */
    let finalDamage = Math.round((baseAttack - baseDefense)
    *((100 * unit2.stats.totalPerformance)/100))

    unit1.stats.willPower += 3
    if (unit1.stats.willPower >= 150){
        unit1.stats.willPower = 150
    }

    unit1.stats.en -= unit1.stats.attackCost[attackNumber]
    if (unit1.stats.en <= 0){
        unit1.stats.en = 0
    }

    unit2.stats.willPower += 5
    if (unit2.stats.willPower >= 150){
        unit2.stats.willPower = 150
    }

    unit2.stats.hp -= finalDamage
    console.log(unit2.stats.hp)
    updateStats()
}

function changeEnemyAttack() {
    let attackList = enemyUnit.stats.attacks
    let chosenAttack = attackList[Math.floor(Math.random() * attackList.length)]
    return chosenAttack
}

function enemyTurn() {
    damageCalculation(enemyUnit, playerUnit, enemyAttack.innerText)
    if (playerUnit.stats.hp <= 0){
        playerUnit.stats.hp = 0
        console.log("OH NO")
    }
    displayDiv.style =
    "border: solid 2px #004992;" +
    "background: linear-gradient(180deg, rgba(0,13,238,0.9) 0%, rgba(0, 0, 68, 0.9) 50%, rgba(0,13,238,0.9) 90%)"
    displayMessage.innerText = (playerUnit.stats.name + ": Agh!")
}

function playerTurn() {
    displayMessage.innerText = (playerUnit.stats.name + ": Here I go!")
    damageCalculation(playerUnit, enemyUnit, playerAttack.innerText)
}

function updateStats() {
    playerHealth.textContent = "HP: " + playerUnit.stats.hp + " / " + playerUnit.stats.maxHP
    enemyHealth.textContent = "HP: " + enemyUnit.stats.hp + " / " + enemyUnit.stats.maxHP
    playerEnergy.textContent = "EN: " + playerUnit.stats.en + " / " + playerUnit.stats.maxEN
    enemyEnergy.textContent = "EN: " + enemyUnit.stats.en + " / " + enemyUnit.stats.maxEN

    enemyAttack.innerText = changeEnemyAttack()
}

function fightConfirm(){
    const attackList = playerUnit.stats.attacks
    const attackChoice = playerAttack.innerText
    const attackNumber = attackList.indexOf(attackChoice)
    if (playerUnit.stats.en >= playerUnit.stats.attackCost[attackNumber]){
        console.log(playerUnit.stats.en)
        console.log(playerUnit.stats.attackCost[attackNumber])
        fightProcess()
    }
    else{
        combatStart.style = "color: red;"
    }
}

function evasionCheck(unit1, unit2) {
    const baseHit = ((unit1.stats.accuracyStat / 2) + 140)
    * (unit1.stats.totalPerformance + unit1.stats.weaponTerrain)
    const baseEvade = ((unit2.stats.evadeStat/2) + unit2.stats.mobilityStat)
    * (unit2.stats.totalPerformance)

    const finalHit = Math.round((baseHit + baseEvade)
        * (unit2.stats.sizeAdjustment - (unit2.stats.totalPerformance * 0.6)))
        
    console.log(finalHit)
    let failChance = Math.floor(Math.random() * 100) + 1
    console.log(failChance)
    if (finalHit > failChance){
        return true
    }
    else{
        return false
    }
}

function fightProcess() {
    let fightStart = evasionCheck(enemyUnit, playerUnit)
    displayDiv.style = 
    "background: linear-gradient(180deg, rgba(169,33,0,1) 0%, rgb(68, 14, 0, 1) 50%, rgba(169,33,0,1) 90%);"
    + "border: solid 2px #7e2814;"
    displayMessage.innerText = (enemyUnit.stats.name + ": Take this!")
    if (fightStart == true){
        enemyTurn()
        updateStats()
    }
    else{
        displayMessage.innerText = (enemyUnit.stats.name + ": I missed!?")
    }
    fightStart = evasionCheck(playerUnit, enemyUnit)
    if (fightStart == true){
        setTimeout(playerTurn, 3000)
        updateStats()
    }
    else  {
        displayMessage.innerText = (playerUnit.stats.name + ": How did I miss!?")
    }
}
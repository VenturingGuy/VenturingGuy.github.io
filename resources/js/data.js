export class Unit {
    constructor(name, maxHP, maxEN, hp, en, attacks) {
        this.name = name
        this.maxHP = maxHP
        this.maxEN = maxEN
        this.hp = hp
        this.en = en
        this.attacks = attacks
    }
    getName(){
        return this.name
    }
}

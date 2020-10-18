export class Unit {
    /* So this kinda got out of hand. Learning experience. */
    constructor(params) {
        this.stats = params
        let terrainPerformace = this.getTerrainPerformace
        this.terrainPerformance = terrainPerformace
        let totalPerformance = this.getTotalPerformance
        this.totalPerformance = totalPerformance
    }

    get getTerrainPerformace() {
        return this.calcTerrainPerformace()
    }

    get getTotalPerformance() {
        return this.calcTotalPerformance()
    }
    
    calcTerrainPerformace() {
        let pilotNum = 3
        let unitNum = 3
        switch(this.pilotPerformance){
            case "S":
                pilotNum = 4
                break;
            case "A":
                pilotNum = 3
                break;
            case "B":
                pilotNum = 2
                break;
            case "C":
                pilotNum = 1
                break;
            case "D":
                pilotNum = 0
                break;
        }
        switch(this.unitPerformance){
            case "S":
                unitNum = 4
                break;
            case "A":
                unitNum = 3
                break;
            case "B":
                unitNum = 2
                break;
            case "C":
                unitNum = 1
                break;
            case "D":
                unitNum = 0
                break;
        }
        return pilotNum + unitNum

    }

    calcTotalPerformance() {
        let totalAdjustment = 1.0
        if (this.terrainPerformance > 6){
            totalAdjustment = 1.1
        }
        else if (this.terrainPerformance > 5){
            totalAdjustment = 1.0
        }
        else if (this.terrainPerformance > 3){
            totalAdjustment = 0.9
        }
        else if (this.terrainPerformance > 1){
            totalAdjustment = 0.8
        }
        else{
            totalAdjustment = 0.4
        }
        return totalAdjustment
    }

    get getSizeAdjustment() {
        return this.sizeMap[this.unitSize]
    }

    sizeMap = {
        XL: 1.4,
        L: 1.2,
        M: 1.0,
        S: 0.8
    }
}

export class Unit {
    /* So this kinda got out of hand. Learning experience. */
    constructor(params) {
        this.stats = params
        this.stats.terrainPerformance = this.terrainMap[this.stats.pilotPerformance]
        + this.terrainMap[this.stats.unitPerformance]
        this.stats.totalPerformance = this.totalMap[this.stats.terrainPerformance]
        this.stats.sizeAdjustment = this.sizeMap[this.stats.unitSize]
    }
    
    terrainMap = {
        S: 4,
        A: 3,
        B: 2,
        C: 1,
        D: 0
    }

    totalMap = {
        8: 1.1,
        7: 1.1,
        6: 1.0,
        5: 0.9,
        4: 0.9,
        3: 0.8,
        2: 0.8,
        1: 0.4,
        0: 0.4
    }

    sizeMap = {
        XL: 1.4,
        L: 1.2,
        M: 1.0,
        S: 0.8
    }
}

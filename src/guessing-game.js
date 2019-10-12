class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.workNumber = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.workNumber = Math.round(this.min + (this.max - this.min) / 2);
        return this.workNumber;
    }

    lower() {
        this.max = this.workNumber;
    }

    greater() {
        this.min = this.workNumber;
    }
}

module.exports = GuessingGame;

class Thermostat {
    constructor(){
        this.temperature = 20;
        this.PSM = true;
    }

    getTemperature(){
        return this.temperature;
    }

    up(){
        if (this.PSM === true && this.temperature < 25){
            this.temperature++;
        } else if (this.PSM === false && this.temperature < 32){
            this.temperature++;
        }
    }

    down(){
        if (this.temperature > 10){
        this.temperature--;}
    }

    setPSM(status){
        this.PSM = status;
    }

    reset(){
        this.temperature = 20;
    }

    currentEnergyUsage(){
        if (this.temperature < 18){
            return 'Low Usage'
        } else if (this.temperature <= 25){
            return 'Medium Usage'
        } else {
            return 'High Usage'
        }
    }
}

module.exports = Thermostat;


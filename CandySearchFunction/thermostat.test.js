const Thermostat = require('./thermostat');

describe('thermostat', () => {
    it('thermostat starts at 20 degrees', () => {
        const thermostat = new Thermostat();
        expect(thermostat.getTemperature()).toBe(20);
    });

    it('increases the temperature by 5 degrees', () => {
        const thermostat = new Thermostat();
        for (let i=0; i<5; i++){
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toBe(25);
    })

    it('decreases the temperature by 5 degrees', () => {
        const thermostat = new Thermostat();
        for (let i=0; i<5; i++){
            thermostat.down();
        }
        expect(thermostat.getTemperature()).toBe(15);
    })

    it('doesnt let you go below 10 degrees', () => {
        const thermostat = new Thermostat();
        for (let i=0; i<20; i++){
            thermostat.down();
        }
        expect(thermostat.getTemperature()).toBe(10);
    })

    it('turns off powersvaing mode', () => {
        const thermostat = new Thermostat();
        thermostat.setPSM(false);
        expect(thermostat.PSM).toBe(false);
    })

    it('max temperature is 25 if PSM is on', () => {
        const thermostat = new Thermostat();
        for (let i=0; i<20; i++){
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toBe(25);
    })

    it('max temperature is 32 if PSM is off', () => {
        const thermostat = new Thermostat();
        thermostat.setPSM(false);
        for (let i=0; i<20; i++){
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toBe(32);
    })

    it('resets temperature to 20', () => {
        const thermostat = new Thermostat();
        thermostat.up();
        thermostat.reset();
        expect(thermostat.getTemperature()).toBe(20);
    })

    it('returns thermostats energy usage', () => {
        const thermostat = new Thermostat();
        expect(thermostat.currentEnergyUsage()).toBe('Medium Usage')
    })
});

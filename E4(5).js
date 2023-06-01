class ElectricalAppliance {
    constructor(name) {
        this.name = name;
        this.voltage = 220;
        this.onOff = false;
    }
    buttonOnOff(buttonOnOff) {
        if (buttonOnOff === 'on') {
            this.onOff = true;
        } else {
            this.onOff = false;
        }
    }
    energyConsumption(time) {
        let сonsumption = this.devicePower * time * 0.01;
        console.log(`${this.name} за ${time} часов потратил ${сonsumption} кВт*ч `);
    }
}
class Boiler extends ElectricalAppliance {
    constructor(name, amperage, hot, voltage, onOff) {
        super(voltage, onOff);
        this.name = name;
        this.amperage = amperage;
        this.hot = hot;
        this.devicePower = this.voltage * amperage
    }
    getInfo() {
        console.log(this.name);
        for (const key in this) {
            if (typeof this[key] !== "function"){
                console.log(`${key}: ${this[key]}`);
            }
        }

    }

}
class AudioSpeaker extends ElectricalAppliance {
    constructor(name, amperage, volume, voltage, onOff) {
        super(voltage, onOff);
        this.name = name;
        this.amperage = amperage;
        this.volume = volume;
        this.devicePower = this.voltage * amperage
    }
    getInfo() {
        console.log(this.name);
        for (const key in this) {
            if (typeof this[key] !== "function"){
                console.log(`${key}: ${this[key]}`);
            }
        }

    }

}
const boilerAriston= new Boiler('Ariston', 0.55, 100);
const audioSpeakerJBL= new AudioSpeaker('JBL', 0.2, 100);

boilerAriston.buttonOnOff('on');
boilerAriston.getInfo();
boilerAriston.energyConsumption(10);


audioSpeakerJBL.buttonOnOff('on');
audioSpeakerJBL.getInfo();
audioSpeakerJBL.energyConsumption(10);
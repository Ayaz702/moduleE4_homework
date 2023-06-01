function ElectricalAppliance(name){
    this.voltage = 220;
    this.onOff = false
}
ElectricalAppliance.prototype.buttonOnOff = function(buttonOnOff) {
    if (buttonOnOff === 'on') {
        this.onOff = true;
    } else {
        this.onOff = false;
    }
}
ElectricalAppliance.prototype.energyConsumption = function(time) {
    let сonsumption = this.devicePower * time * 0.01;
    console.log(`${this.name} за ${time} часов потратил ${сonsumption} кВт*ч `);
}
function Boiler(name, amperage, hot) {
    this.name = name;
    this.amperage = amperage;
    this.hot = hot;
    this.devicePower = this.voltage * amperage
}
Boiler.prototype = new ElectricalAppliance()
Boiler.prototype.getInfo = function() {
    console.log(this.name);
    for (const key in this) {
        if (typeof this[key] !== "function"){
            console.log(`${key}: ${this[key]}`);
        }
    }
}
function AudioSpeaker(name, amperage, volume) {
    this.name = name;
    this.amperage = amperage;
    this.volume = volume;
    this.devicePower = this.voltage * amperage
}
AudioSpeaker.prototype = new ElectricalAppliance()
AudioSpeaker.prototype.getInfo = function() {
    console.log(this.name);
    for (const key in this) {
        if (typeof this[key] !== "function"){
            console.log(`${key}: ${this[key]}`);
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
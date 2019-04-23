function CoffeeMachine(power) {
	this.waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;
	var self = this, timerId;
	
    function getBoilTime() {
		return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}
	
    function onReady() {
		console.log('Coffe is ready');
	}
	
    this.run = function() {
		timerId = setTimeout(onReady, getBoilTime());
    };
    this.stop = function() {
		clearTimeout(timerId);
	};
}
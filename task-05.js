function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var machineRun = false;
	var WATER_HEAT_CAPACITY = 4200;
	var onReady = function() {
        console.log('Coffee is ready');
        machineRun = false;
    }
    function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
	
    this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Значение должно быть положительным");
		}
		if (amount > capacity) {
			throw new Error("Нельзя залить больше, чем " + capacity);
		}
		waterAmount = amount;
	};
	this.isRunning = function() {
        return machineRun;
    }
    this.setOnReady = function(f) {
        onReady = function() {
            machineRun = false;
            f();
            
        };
    }
	this.run = function() {
        machineRun = true;
        setTimeout(onReady, getTimeToBoil());
	};
}



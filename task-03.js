function CoffeeMachine(power, capacity) {
	var waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;
	
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
    this.addWater = function(amount) {
        if (amount < 0) {
			throw new Error("Значение должно быть положительным");
		}
		if (amount > (capacity - waterAmount)) {
			throw new Error("Нельзя залить больше, чем " + capacity);
		}
		waterAmount += amount;

	};
	
    function onReady() {
		console.log('Coffee is ready');
    }
    
	this.run = function() {
		setTimeout(onReady, getTimeToBoil());
	};
}
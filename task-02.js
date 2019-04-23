function CoffeeMachine(power, capacity) {
	const machinePower = power;
	this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Значение должно быть положительным");
		}
		if (amount > capacity) {
			throw new Error("Нельзя залить воды больше, чем " + capacity);
		}
		waterAmount = amount;
	};
    
	this.getWaterAmount = function() {
		return waterAmount;
    };
    this.getPower = function() {
        return machinePower;
    }
}
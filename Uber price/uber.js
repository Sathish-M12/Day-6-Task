

class UberPriceCalculator {
    constructor(baseFare, costPerKm, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKm = costPerKm;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distanceKm, durationMinutes) {
        /**
         * Calculates the total price for an Uber ride.
         *
         * @param {number} distanceKm - Distance traveled in kilometers.
         * @param {number} durationMinutes - Duration of the ride in minutes.
         * @returns {number} Total fare for the ride.
         */
        const price = this.baseFare + (this.costPerKm * distanceKm) + (this.costPerMinute * durationMinutes);
        return price;
    }
}

// Example :
const baseFare = 25; // Base fare in Rupees
const costPerKm = 15; // Cost per kilometer in Rupees
const costPerMinute = 2; // Cost per minute in Rupees

const ride = new UberPriceCalculator(baseFare, costPerKm, costPerMinute);
const distanceTraveled = 10.5; // kilometers
const duration = 20; // minutes

const totalFare = ride.calculatePrice(distanceTraveled, duration);
console.log(`Total fare: ${totalFare.toFixed(2)}`);

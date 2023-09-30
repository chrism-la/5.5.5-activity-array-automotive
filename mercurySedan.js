//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle(
    "Mercury",
    "Sedan",
    "1965",
    "color",
    "mileage"
);
console.log(v.make);

//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.

//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num) {
        if (this.passenger < this.maximumPassengers) {
            if (num + this.passenger <= this.maximumPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log("Not enough room");
            }
        } else {
            console.log("There is no room available");
        }
    }

    start() {}

    checkService() {
        if (this.mileage > 30000) {
            this.scheduleService = true;
            return this.scheduleService;
        }
    }
}

//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.

//Create at least two new instances of the Car class and test them here:
let x = new VehicleModule.Vehicle(
    "Mercedes",
    "Coupe",
    "2023",
    "Black",
    "10000"
);
console.log(x.make);

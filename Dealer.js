class Dealer {
    constructor(person, currency) {
        this.person = person;
        this.currency = currency;
        this.listOfCars = [];
    }

    myNameIs() {
        return `Hi, my name is ${this.person}!`
    }

    formatMoney(EUR) {
        return `${EUR.toLocaleString('de-DE')}`
    }

    getCar(carModel, carPrice) {
        let newCar = {
            model: carModel,
            price: carPrice,
        }

        this.listOfCars.push(newCar)
        console.log(newCar)
        return `New car everyone! ${carModel} for only ${this.formatMoney(carPrice)} ${this.currency}!`
    }

    carList() {
        let list = '';
        let listNumber = 0;
        for (const car of this.listOfCars) {
            list += `\n${++listNumber}) ${car.model}: ${car.price} EUR;`;
        }
        let header = `${this.person} 's car dealership:`;
        let headerLength = header.length;
        let headerLengthSymbol = '='.repeat(headerLength)
        return `\n${header}\n${headerLengthSymbol}${list}`.replace(/;$/, ".");
    }

    changeCarPrice(index, newPrice) {
        this.listOfCars[index - 1].price = newPrice;
        return `New ${this.listOfCars[index - 1].model} price is ${this.formatMoney(newPrice)}.`
        // this.listOfCars.module = this.listOfCars[index - 1].model
        // this.listOfCars.price = newPrice;
        // return `New ${this.listOfCars.modul} price is ${this.listOfCars.price} ${this.currency}.`
    }

    sellCar(index) {
        if (index > this.listOfCars.length) {
            return `SORRY! There is no such car for sale :(`
        } else {
            this.listOfCars.splice(index - 1, 1)
            return `Wow! ${this.listOfCars[index - 1].model} sold for ${this.formatMoney(this.listOfCars[index - 1].price)}!`
        }
    }



}

export { Dealer }
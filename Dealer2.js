class Dealer {
    constructor(name, currency) {
        this.name = name;
        this.currency = currency;
        this.carsForSale = [];
        this.soldCars = [];

        console.log(`Hi, my name is ${name}!`);
    }

    formatPrice(price) {
        return `${price.toLocaleString('de-DE')} ${this.currency}`;
    }

    getCar(name, price) {
        this.carsForSale.push({
            name: name,
            price: price,
        });
        return `New car everyone! ${name} for only ${this.formatPrice(price)}!`;
    }

    carList() {
        const header = `${this.name}'s car dealership:`;
        let lineSize = header.length;

        let table = [];

        if (this.carsForSale.length) {
            let index = 1;
            for (const car of this.carsForSale) {
                const tableLine = `${index++}) ${car.name}: ${this.formatPrice(car.price)};`;
                if (tableLine.length > lineSize) {
                    lineSize = tableLine.length;
                }
                table.push(tableLine);
            }
        } else {
            table.push('SORRY! No cars for sale :(');
        }
        return `${header}\n${'='.repeat(lineSize)}\n${table.join('\n')}`;
    }

    changeCarPrice(index, newPrice) {
        this.carsForSale[index - 1].price = newPrice;
        const { name, price } = this.carsForSale[index - 1];
        return `New ${name} price is ${this.formatPrice(price)}.`;
    }

    sellCar(index) {
        if (index > this.carsForSale.length) {
            return `SORRY! There is no such car for sale :(`;
        }

        const soldCar = this.carsForSale[index - 1];
        const { name, price } = soldCar;

        this.carsForSale.splice(index - 1, 1);
        this.soldCars.push(soldCar);

        return `Wow! ${name} sold for ${this.formatPrice(price)}!`;
    }

    fortune() {
        const count = this.soldCars.length;
        const price = this.soldCars.reduce((total, car) => total + car.price, 0);
        const formatedPrice = this.formatPrice(price);
        return `${this.name} has sold ${count} cars for total of ${formatedPrice}!`;
    }
}

export { Dealer }
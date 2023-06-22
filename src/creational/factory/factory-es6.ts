class BmwFactory {
	static create(type: string) {
		if (type === 'X5') {
			return new Bmw(type, 108000, 300);
		} else if (type === 'X6') {
			return new Bmw(type, 111000, 320);
		}
	}
}

class Bmw {
	constructor(public model: string, public price: number, public maxSpeed: number) {
		this.model = model;
		this.price = price;
		this.maxSpeed = maxSpeed;
	}
}

export default BmwFactory;

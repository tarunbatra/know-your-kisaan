export default class Seller {
	constructor({ name='Farmer', cash=1000, expenses= 1000, inventory=10 } = {}) {
		this.name = name
		this.cash = cash
		this.expenses = expenses
		this.inventory = inventory
	}

	toString() {
		return this.name
	}

	produce (quantity) {
		// Sellers have expenses to produce
		// and for other essentials stuff
		this.cash -= this.expenses
		this.inventory += quantity
	}

	offerProduct () {
		return {
			quantity: this.inventory,
			unit: 'kg',
			product: 'crop',
		}
	}

	sell (quantity, price) {
		this.cash += price
		this.inventory -= quantity
	}
}
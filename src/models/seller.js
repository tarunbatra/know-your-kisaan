export default class Seller {
	constructor({ name='Farmer', cash=0, expenses=0, inventory=0 } = {}) {
		this.name = name
		this.cash = cash
		this.expenses = expenses
		this.inventory = inventory
		this.bankrupt = false
	}

	toString() {
		return this.name
	}

	produce (quantity) {
		// Sellers have expenses to produce
		// and for other essentials stuff
		if (this.cash - this.expenses > 0) {
			this.cash = this.cash - this.expenses
			this.inventory += quantity
		}
		else {
			this.bankrupt = true
			this.inventory = 0
		}
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
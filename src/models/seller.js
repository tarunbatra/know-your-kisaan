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
		if (this.cash < this.expenses) {
			this.bankrupt = true
		}
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
		this.cash += quantity * price
		this.inventory -= quantity
	}
}
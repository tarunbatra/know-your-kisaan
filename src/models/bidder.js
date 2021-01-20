export default class Bidder {
	constructor({ name='Bidder', cash=0, expenses=0, minimumPrice=0, margin=0 } = {}) {
		this.name = name
		this.cash = cash
		this.expenses = expenses
		this.minimumPrice = minimumPrice
		this.margin = margin
		this.currentBid = null
		this.bankrupt = false
	}

	toString() {
		return this.name
	}

	purchase () {
		// Cash is reduced because the the seller
		// needs to be paid for the purchase
		this.cash -= this.currentBid.price * this.currentBid.quantity
		// Cash is increased after selling the product
		// further for some profit margin
		this.cash += this.currentBid.price + this.margin * this.currentBid.quantity
		this.currentBid = null
	}

	bid ({ quantity, unit, product }, competingBid={}) {
		const potentialBid = competingBid.price > this.minimumPrice ? competingBid.price + this.minimumPrice : this.minimumPrice
		if (this.cash < this.expenses || this.cash < quantity * potentialBid) {
			this.bankrupt = true
			this.currentBid = null
		} else {
			// Bidders have expenses to take part in the market
			// and for other essentials stuff
			this.cash -= this.expenses
			this.currentBid = {
				price: potentialBid,
				quantity,
				unit,
				product,
				bidder: this,
			}
		}
		return this.currentBid
	}
}
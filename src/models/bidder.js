export default class Bidder {
	constructor({ name='Bidder', cash=10000, expenses=1000, minimumPrice=50, margin=50 } = {}) {
		this.name = name
		this.cash = cash
		this.expenses = expenses
		this.minimumPrice = minimumPrice
		this.margin = margin
		this.bid = null
	}

	toString() {
		return this.name
	}

	purchase () {
		// Cash is reduced because the the seller
		// needs to be paid for the purchase
		this.cash -= this.bid.price * this.bid.quantity
		// Cash is increased after selling the product
		// further for some profit margin
		this.cash += this.bid.price + this.margin * this.bid.quantity
		this.bid = null
	}

	bid ({ quantity, unit, product }, competingBid={}) {
		const potentialBid = competingBid.price > this.minimumPrice ? competingBid.price + this.minimumPrice : this.minimumPrice
		if (this.cash < this.expenses || this.cash < quantity * potentialBid) {
			this.bankrupt = true
			this.bid = null
		} else {
			// Bidders have expenses to take part in the market
			// and for other essentials stuff
			this.cash -= this.expenses
			this.bid = {
				price: potentialBid,
				quantity,
				unit,
				product,
			}
		}
		return this.bid
	}
}
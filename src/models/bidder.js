export default class Bidder {
	constructor({ name='Bidder', cash=10000, expenses=1000, minimumPrice=50, margin=50 } = {}) {
		this.name = name
		this.cash = cash
		this.expenses = expenses
		this.minimumPrice = minimumPrice
		this.margin = margin
	}

	toString() {
		return this.name
	}

	purchase (quantity, price) {
		// Cash is reduced because the the seller
		// needs to be paid for the purchase
		this.cash -= price
		// Cash is increased after selling the product
		// further for some profit margin
		this.cash += price + this.margin * quantity
	}

	bid (quantity, competingBid=0) {
		const perUnitCompetingBid = competingBid / quantity
		const potentialBid = quantity * (perUnitCompetingBid > this.minimumPrice ? perUnitCompetingBid + this.minimumPrice : this.minimumPrice)
		if (this.cash < this.expenses || this.cash < potentialBid) {
			this.bankrupt = true
			return -1
		}
		// Bidders have expenses to take part in the market
		// and for other essentials stuff
		this.cash -= this.expenses
		return potentialBid
	}
}
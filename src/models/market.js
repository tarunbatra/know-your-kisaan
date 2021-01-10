export default class Market {
	constructor(seller, naiveBidder, predatoryBidder) {
		this.seller = seller
		this.naiveBidder = naiveBidder
		this.predatoryBidder = predatoryBidder
		// this.naiveBidder = new Bidder({ name: 'APMC', cash: 2000, expenses: 500, minimumPrice: 50 })
		// this.predatoryBidder = new Bidder({ name: 'Pio', cash: 100000, expenses: 500, minimumPrice: 10 })
		// this.seller = new Seller({ name: 'Farmer', cash: 1000, expenses: 1000, inventory: 0 })
	}

	startTrading() {
		this.seller.produce(10)
		const offer = this.seller.offerProduct()
		if (!offer) throw new Error('No product to trade')
		const naiveBid = this.naiveBidder.bid(offer)
		const predatoryBid = this.predatoryBidder.bid(offer, naiveBid)
		return [naiveBid, predatoryBid]
	}

	finishTrading(winner) {
		const { quantity, price, product } = winner.bid
		winner.purchase()
		this.seller.sell(quantity, price)
		console.log(`${this.seller} sold ${quantity} of ${product} to ${winner} for a total price of ${price}`)
	}
}

new Market()
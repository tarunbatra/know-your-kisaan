import Seller from './seller'
import Bidder from './bidder'
import { farmer, apmc, corporate, market } from '../stores'
export default class Market {
	constructor(seller, naiveBidder, predatoryBidder) {
		this.seller = new Seller({ name: 'Farmer', cash: 500, expenses: 100 })
		this.naiveBidder = naiveBidder || new Bidder({ name: 'APMC', cash: 2000, expenses: 500, minimumPrice: 50, margin: 5 })
		this.predatoryBidder = predatoryBidder || new Bidder({ name: 'Corporate', cash: 10000, expenses: 100, minimumPrice: 10, margin: 10 })
		this.currentBids = []
		this._updateStore()
	}

	startTrading() {
		console.log(this.seller)
		this.seller.produce(1)
		const offer = this.seller.offerProduct()
		if (!offer || this.seller.bankrupt) {
			this._updateStore()
			throw new Error('No product to trade')
		}
		const naiveBid = this.naiveBidder.bid(offer)
		this.predatoryBidder.bid(offer, naiveBid || {})
		this._updateStore()
	}

	finishTrading(winningBidder) {
		const { quantity, price, product } = winningBidder.currentBid
		winningBidder.purchase()
		this.seller.sell(quantity, price)
		console.log(`${this.seller} sold ${quantity} of ${product} to ${winningBidder} for a total price of ${price}`)
		this._updateStore()
	}

	_updateStore() {
		farmer.set(this.seller)
		apmc.set(this.naiveBidder)
		corporate.set(this.predatoryBidder)
		market.set(this)
	}
}

import Seller from './seller'
import Bidder from './bidder'
import { farmer, apmc, corporate, market } from '../stores'
export default class Market {
	constructor(seller, naiveBidder, predatoryBidder) {
		this.seller = new Seller({ name: 'Farmer', cash: 50, expenses: 20 })
		this.naiveBidder = naiveBidder || new Bidder({ name: 'APMC', cash: 200, expenses: 20, minimumPrice: 5, margin: 5 })
		this.predatoryBidder = predatoryBidder || new Bidder({ name: 'Corporate', cash: 700, expenses: 10, minimumPrice: 1, margin: 10 })
		this.currentBids = []
		this._updateStore()
	}

	startTrading() {
		this.seller.produce(10)
		const offer = this.seller.offerProduct()
		if (!offer) throw new Error('No product to trade')
		const naiveBid = this.naiveBidder.bid(offer)
		this.predatoryBidder.bid(offer, naiveBid || {})
		this._updateStore()
		return this.currentBids
	}

	finishTrading(winningBid) {
		const { quantity, price, product } = winningBid
		winningBid.bidder.purchase()
		this.seller.sell(quantity, price)
		console.log(`${this.seller} sold ${quantity} of ${product} to ${winningBid.bidder} for a total price of ${price}`)
		this._updateStore()
	}

	_updateStore() {
		farmer.set(this.seller)
		apmc.set(this.naiveBidder)
		corporate.set(this.predatoryBidder)
		market.set(this)
	}
}

new Market()
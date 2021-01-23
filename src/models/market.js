import Seller from './seller'
import Bidder from './bidder'
import { farmer, apmc, corporate, market } from '../stores'
import { parameters } from '../constants'

export default class Market {
	constructor() {
		this.seller = new Seller({
			name: 'Farmer',
			cash: parameters.farmer.cash,
			expenses: parameters.farmer.expenses,
		})
		this.naiveBidder = new Bidder({
			name: 'APMC',
			cash: parameters.apmc.cash,
			expenses: parameters.apmc.expenses,
			minimumPrice: parameters.apmc.minimumPrice,
			margin: parameters.apmc.margin,
		})
		this.predatoryBidder = new Bidder({
			name: 'Corporate',
			cash: parameters.corporate.cash,
			expenses: parameters.corporate.expenses,
			minimumPrice: parameters.corporate.minimumPrice,
			margin: parameters.corporate.margin,
		})

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

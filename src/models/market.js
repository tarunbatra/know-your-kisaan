import Seller from './seller.js'
import Bidder from './bidder.js'

export class Market {
	constructor() {
		this.naiveBidder = new Bidder({ name: 'APMC', cash: 2000, expenses: 500, minimumPrice: 50 })
		this.predatoryBidder = new Bidder({ name: 'Pio', cash: 100000, expenses: 500, minimumPrice: 10 })
		this.seller = new Seller({ name: 'Farmer', cash: 1000, expenses: 1000, inventory: 0 })
	}

	trade() {
			seller.produce(10)
			const offer = seller.offerProduct()
			if (!product) throw new Error('No product to trade')
			const { quantity, unit, product } = offer
			const naiveBid = naiveBidder.bid(quantity)

			const predatoryBid = predatoryBidder.bid(quantity, naiveBid)
			console.log('bid', predatoryBid)
			const winner = naiveBid > predatoryBid ? naiveBidder : predatoryBidder
			const winningBid = Math.max(naiveBid, predatoryBid)
			if (winningBid < 0) throw new Error('No bids placed')
			winner.purchase(quantity, winningBid)
			seller.sell(quantity, winningBid)
			console.log(`${seller} sold ${quantity}${unit} of ${product} to ${winner} for a total price of ${winningBid}`)
		}
	}
}

new Market()
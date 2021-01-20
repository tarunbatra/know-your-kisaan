<script>
	import { getContext } from 'svelte'
	const { open } = getContext('simple-modal')
	import InfoBox from './InfoBox.svelte'
	import BidSelector from './BidSelector.svelte'
	import Btn from './Btn.svelte'
	import { BTN_TEXT, STATE } from '../constants'
	import { market } from '../stores'
	import Market from '../models/market'

	export let appState

	const componentList = [
		InfoBox,
		BidSelector,
	]

	market.set(new Market())

	async function openPopup() {
		if (appState === STATE.GAME_STARTED) {
			$market.startTrading()
		}
		open(componentList[appState], {
			appState,
			market: $market,
		}, {}, {
			onClose: () => {
				if (appState === STATE.GAME_NOT_STARTED) {
					appState = STATE.GAME_STARTED
				} else {
					const winningBidder = $market.naiveBidder.currentBid?.price > $market.predatoryBidder.currentBid?.price
															? $market.naiveBidder
															: $market.predatoryBidder
					$market.finishTrading(winningBidder)
				}
			},
		})
	}
</script>

<Btn on:click={openPopup} text={BTN_TEXT[appState]}/>
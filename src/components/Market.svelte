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
		InfoBox,
	]

	market.set(new Market())

	async function openPopup() {
		if (appState === STATE.GAME_STARTED) {
			try {
				$market.startTrading()
			} catch (err) {
				appState = STATE.GAME_OVER
			}
		}
		open(componentList[appState], {
			appState,
			market: $market,
		}, {
			closeButton: appState !== STATE.GAME_STARTED,
			closeOnOuterClick: appState !== STATE.GAME_STARTED,
		}, {
			onOpened: () => {
				switch (appState) {
					case STATE.GAME_NOT_STARTED:
						appState = STATE.GAME_STARTED
						break;
					default:
						break;
				}
			},
			onClose: () => {
				switch (appState) {
					case STATE.GAME_OVER:
						window?.location?.reload()
						break;
					default:
						break;
				}
			},
		})
	}
</script>

<Btn on:click={openPopup} text={BTN_TEXT[appState]} />
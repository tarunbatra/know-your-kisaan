<script>
	import { getContext } from 'svelte'
	import { fly } from 'svelte/transition';
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
		const isGameStarted = appState === STATE.GAME_STARTED
		if (isGameStarted) {
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
			closeButton: !isGameStarted,
			closeOnOuterClick: !isGameStarted,
			transitionWindow: fly,
			transitionWindowProps: {
				y: 20,
				duration: 250
			},
		}, {
			onClose: () => {
				if (appState === STATE.GAME_NOT_STARTED) {
					appState = STATE.GAME_STARTED
				}
			},
		})
	}
</script>

<Btn on:click={openPopup} text={BTN_TEXT[appState]} disabled={appState === STATE.GAME_OVER} />
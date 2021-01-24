<script>
	import { getContext } from 'svelte'
	const { open, close } = getContext('simple-modal')
	import InfoBox from './InfoBox.svelte'
	import BidSelector from './BidSelector.svelte'
	import Btn from './Btn.svelte'
	import { mainBtnText, STATE, infoboxHeaderList } from '../constants'
	import { market } from '../stores'
	import Market from '../models/market'

	export let appState

	const componentList = [
		InfoBox,
		BidSelector,
		InfoBox,
	]

	let count = 0

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
			close,
			count,
			header: infoboxHeaderList[appState]
		}, {
			closeButton: appState !== STATE.GAME_STARTED,
			closeOnOuterClick: appState !== STATE.GAME_STARTED,
		}, {
			onOpened: () => {
				switch (appState) {
				case STATE.GAME_NOT_STARTED:
					appState = STATE.GAME_STARTED
					break
				default:
					break
				}
			},
			onClose: () => {
				count++

				switch (appState) {
				case STATE.GAME_OVER:
					window?.location?.reload()
					break
				default:
					break
				}
			},
		})
	}
</script>

<Btn on:click={openPopup} text={mainBtnText[appState]} />
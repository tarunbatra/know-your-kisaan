<script>
  import { getContext, onMount } from 'svelte';
  const { open } = getContext('simple-modal');
  import InfoBox from './InfoBox.svelte';
  import BidSelector from './BidSelector.svelte';
  import Btn from './Btn.svelte';
  import { BTN_TEXT, STATE } from '../constants'

  export let market
  export let appState

  const componentList = [
    InfoBox,
    BidSelector,
  ]

  async function openPopup() {
    open(componentList[appState], {
			appState,
			market,
		}, {}, {
      onClose: () => {
				if (appState === STATE.GAME_NOT_STARTED) {
          appState = STATE.GAME_STARTED
          const bids = market.startTrading()
          const sortedBids = bids.sort((a, b) => a?.price < b?.price)
          market.finishTrading(sortedBids[0])
        }
      },
      onOpen: () => {
				if (appState === STATE.GAME_STARTED) {
          const bids = market.startTrading()
        }
      }
    })
  }
</script>

<Btn on:click={openPopup} text={BTN_TEXT[appState]}/>
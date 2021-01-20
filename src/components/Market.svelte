<script>
  import { getContext, onMount } from 'svelte';
  const { open } = getContext('simple-modal');
  import InfoBox from './InfoBox.svelte';
  import BidSelector from './BidSelector.svelte';
  import Btn from './Btn.svelte';
  import { BTN_TEXT, STATE } from '../constants'
  import { market } from '../stores'

  export let appState

  const componentList = [
    InfoBox,
    BidSelector,
  ]

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
          const sortedBids = $market.currentBids.sort((a, b) => a?.price < b?.price)
          $market.finishTrading(sortedBids[0])
        }
      },
    })
  }
</script>

<Btn on:click={openPopup} text={BTN_TEXT[appState]}/>
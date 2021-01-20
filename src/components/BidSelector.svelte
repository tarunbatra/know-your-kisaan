<script>
  export let market
  // export let appState
</script>

<div>
  <div>{JSON.stringify(market.naiveBidder.currentBid)}</div>
  <div>{JSON.stringify(market.predatoryBidder.currentBid)}</div>
</div>
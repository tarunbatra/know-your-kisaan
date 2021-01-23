<script>
	import { getContext } from 'svelte'
	const { close } = getContext('simple-modal')

	export let market
	let bidOver = false;

	async function selectBid(winner) {
		market.finishTrading(winner)
		bidOver = true;
		close()
	}
</script>

<div class="bid-container">
	{#each [market.naiveBidder, market.predatoryBidder] as bidder}
		<div class="bid">
			{#if !bidder.bankrupt && bidder.currentBid}
				<p>Rs.{bidder.currentBid.price * bidder.currentBid.quantity} for {bidder.currentBid.quantity}{bidder.currentBid.unit}</p>
			{:else if !bidder.bankrupt}
				<p> Bankrupt {bidder.name} can not participate</p>
			{/if}
			<br />
			<button winner={bidder} on:click={selectBid.bind(this, bidder)} disabled={bidOver || bidder.bankrupt} > Sell </button>
		</div>
	{/each}
</div>

<style>
	.bid-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
	.bid {
		border: 1px solid red;
		border-radius: 1em;
		width: 30%;
		height: 30%;
		text-align: center;
	}
</style>
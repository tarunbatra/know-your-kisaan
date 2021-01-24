<script>
	import { getContext } from 'svelte'
	import { currency, seasons, year } from '../constants'
	const { close } = getContext('simple-modal')

	export let market
	export let count = 0
	let bidOver = false

	async function selectBid(winner) {
		market.finishTrading(winner)
		bidOver = true
		close()
	}

	const marketYear = parseInt(count / 2) + year
	const season =  seasons[count % 2]
</script>
<div>
	<h3 class="center">{season} season, {marketYear}</h3>
	<h5>Events</h5>
	<p>
		💰 You have spent {currency}{market.seller.expenses} to produce the crop.
		<br />
		{#if !market.naiveBidder.bankrupt && market.naiveBidder.currentBid}
			💰 {market.naiveBidder.name} spent {currency}{market.naiveBidder.expenses} due to heavy lincesing fees.
		{:else}
			🚫 {market.naiveBidder.name} has gone bankrupt.
		{/if}
		<br />
		{#if !market.predatoryBidder.bankrupt && market.predatoryBidder.currentBid}
			💰 {market.predatoryBidder.name} spent {currency}{market.predatoryBidder.expenses} on licensing fees.
		{:else}
			🚫 {market.predatoryBidder.name} has gone bankrupt.
		{/if}
	</p>
	<h3 class="center">👇 Sell your crop 👇</h3>
	<div class="bid-container">
		{#each [market.naiveBidder, market.predatoryBidder] as bidder}
			<div>
				<button class="bid" winner={bidder} on:click={selectBid.bind(this, bidder)} disabled={bidOver || bidder.bankrupt} class:disabled={bidder.bankrupt}>
					{#if bidder.bankrupt}
					N/A
					{:else}
					<strong>{currency}{bidder.currentBid.price}</strong>
					{/if}
					<br />
					<small class="center small">{bidder.name}</small><br />
				</button>
			</div>
		{/each}
	</div>
</div>

<style>
	.bid-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
	.bid {
		font-size: x-large;
		font-weight: bolder;
		color: #6d6875;
		background-color: #ffcdb2;
		box-shadow: 1px 1px #6d6875;
		border-radius: 1em;
		width: 5em;
		height: 5em;
		min-width: min-content;
		min-height: min-content;
		text-align: center;
	}
	.disabled {
		opacity: 30%;
		filter: grayscale(100%);
	}
	.center {
		text-align: center;
	}
	.small {
		font-size: x-small;
		margin-top: 0px;
		vertical-align: bottom;
		opacity: 70%
	}
</style>
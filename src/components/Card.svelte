<script>
	import Meter from './Meter.svelte'
	export let img = {}
	export let cash = 0
	export let name = 'Name'
	export let disabled = false
	const  disabledText = 'Bankrupt'
</script>

<div class="card" >
	<div>
		<img src={img.src} alt={img.alt} class:disabled>
		<br />
		{#if disabled}
		<h2 class="overlay">{disabledText}</h2><br />
		{:else}
		<span class="cash">
			<Meter name="Cash" value={cash} max={1500} />
		</span>
		{/if}
		<h2>{name}</h2>
	</div>
</div>



<style>
	.card {
		max-width: max-content;
		display: flex;
		flex-wrap: wrap;
		border: 2px solid #ffb4a2;
		border-radius: 1em;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 1em;
		margin: 0.2em 0.2em 0.2em 0.2em;
		background-color: #e5989b;
	}
	.disabled {
		opacity: 30%;
		filter: grayscale(100%);
	}
	img {
		display: inline-block;
		width: 100%;
  	height: auto;
		max-width: 400px;
		border-radius: 1em;
		padding: 0.2em;
	}
	.cash {
		display: inline-block;
		width: 100%;
		padding: 0.1em;
	}
	h2 {
		display: block;
		text-align: center;
		color: #6d6875;
		margin: 0 auto;
	}
	.overlay {
		text-align: center;
		vertical-align: middle;
	}
</style>
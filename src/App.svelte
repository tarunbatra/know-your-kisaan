<script>
	import Modal from 'svelte-simple-modal'
	import Farmer from './components/Farmer.svelte'
	import APMC from './components/APMC.svelte'
	import Corporate from './components/Corporate.svelte'
	import Market from './components/Market.svelte'
	import AboutUsPopup from './components/AboutUsPopup.svelte'
	import Btn from './components/Btn.svelte'
	import { state } from './stores'
	import { STATE } from './constants'
</script>

<main>
	<Modal><AboutUsPopup /></Modal>
	<div>
		<h5 class="head">Play this quick game to</h5>
		<h1 class="head">Know your Kisaan</h1>
	</div>
	<div class="container">
		<div class="list">
			<div class="apmc">
				<APMC />
			</div>
			<div class="corporate">
				<Corporate />
			</div>
		</div>
		<div class="farmer">
			<Farmer />
		</div>
		<div class="btn">
			{#if $state !== STATE.GAME_OVER}
			<Modal>
				<Market bind:appState={$state} />
			</Modal>
			{:else}
				<Btn on:click={() => window.location.reload()} text="Reset" />
			{/if}
		</div>
	</div>
</main>

<style>
	.container {
		margin-left: auto;
		display: grid;
	}
	.list {
		display: flex;
	}
	.apmc{
		grid-row: 1;
	}
	.corporate {
		grid-row: 1;
	}
	.farmer {
		grid-row: 2;
	}
	.btn {
		grid-row: 3;
	}
	.head {
		display: block;
		text-align: center;
		color: #6d6875;
		margin: 0 auto;
	}
	main {
		display: block;
	}
	@media (min-width: 600px) {
		.container {
			margin-left: 25%;
			grid-template-columns: 200px 400px 200px;
		}
		.farmer {
			grid-column: 2;
		}
		.list {
			grid-column-start: 1;
			grid-column-end: 4;
		}
		.btn {
			grid-column: 2;
		}
	}
</style>

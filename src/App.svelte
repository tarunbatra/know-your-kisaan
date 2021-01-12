<script>
	import { onMount } from 'svelte';
	import Modal from 'svelte-simple-modal';
	import Market from './models/market';
	import Farmer from './components/Farmer.svelte';
	import APMC from './components/APMC.svelte';
	import Corporate from './components/Corporate.svelte';
	import Popup from './components/Popup.svelte';

	import { welcomeMsg } from './constants'
	let farmer;
	let apmc;
	let corporate;

	onMount(async () => {
	})
</script>

<main>
	<h5 class="head">Play this quick game to</h5>
	<h1 class="head">Know your Kisaan</h1>
	<div class="container">
		<div class="list">
			<div class="apmc">
				<APMC bind:model={apmc} />
			</div>
			<div class="corporate">
				<Corporate bind:model={corporate} />
			</div>
		</div>
		<div class="farmer">
			<Farmer bind:model={farmer} />
		</div>
		<div class="btn">
			<Modal>
				<Popup info={welcomeMsg} btnText="Start"/>
			</Modal>
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
		}
		.farmer {
			margin-left: 17%;
		}
		.btn {
			margin-left: -32%;
		}
	}
</style>

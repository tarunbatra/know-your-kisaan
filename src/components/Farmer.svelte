<script>
	import Card from './Card.svelte'
	import { farmer } from '../stores'
	export let name = 'Farmer'

	let img = {
		src: '/images/farmer.jpg',
		alt: 'A farmer with bullocks'
	}
</script>

<Card {name} {img} bind:cash={$farmer.cash} disabled={$farmer.bankrupt} />

<script>
	import Card from './Card.svelte'
	import { corporate } from '../stores'
	export let name = 'Corporate'

	let img = {
		src: '/images/corporate.jpg',
		alt: 'Corporate buiding'
	}
</script>

<Card {name} {img} cash={$corporate.cash} disabled={$corporate.bankrupt} />

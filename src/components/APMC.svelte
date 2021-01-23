<script>
	import Card from './Card.svelte'
	import { apmc } from '../stores'
	export let name = 'APMC'

	let img = {
		src: '/images/apmc.jpg',
		alt: 'APMC premises'
	}
</script>

<Card {name} {img} cash={$apmc.cash} disabled={$apmc.bankrupt} />

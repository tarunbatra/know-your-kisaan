<script>
	import Card from './Card.svelte'
	import Bidder from '../models/bidder'
  export let name = 'APMC'
	export let model = new Bidder({ name, cash: 100 })
	let img = {
		src: '/images/apmc.jpg',
		alt: 'APMC premises'
	}
</script>

<Card {name} {img} cash={model.cash} />

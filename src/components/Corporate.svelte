<script>
	import Card from './Card.svelte'
	import Bidder from '../models/bidder'
  export let name = 'Corporate'
	export let model = new Bidder({ name, cash: 5000 })
	let img = {
		src: '/images/corporate.jpg',
		alt: 'Corporate buiding'
	}
</script>

<Card {name} {img} cash={model.cash}></Card>

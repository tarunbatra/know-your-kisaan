<script>
	import Card from './Card.svelte'
	import Seller from '../models/seller'
  export let name = 'Farmer'
	export let model = new Seller({ name, cash: 5000 })
	let img = {
		src: '/images/farmer.jpg',
		alt: 'A farmer with bullocks'
	}
</script>

<Card {name} {img} cash={model.cash}></Card>

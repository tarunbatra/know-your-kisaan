<script>
	import Farmer from "./components/Farmer.svelte";
	import APMC from "./components/APMC.svelte";
	import Corporate from "./components/Corporate.svelte";
	export let user = { loggedIn: false }

	export function toggle() {
		user.loggedIn = !user.loggedIn
	}
</script>

<main>
	<div class="container">
		<div class="list">
			<div class="apmc">
				<APMC></APMC>
			</div>
			<div class="corporate">
				<Corporate></Corporate>
			</div>
		</div>
		<div class="farmer">
			<Farmer></Farmer>
		</div>

	</div>
</main>

<style>
	.container {
		display: grid;
	}
	.list {
		display: flex;
	}
	.apmc{
		grid-row: 1;
	}
	.corporate{
		grid-row: 1;
	}
	.farmer{
		grid-row: 2;
	}
</style>

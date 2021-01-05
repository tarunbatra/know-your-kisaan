<script>
	export let name
	export let user = { loggedIn: false }

	export function toggle() {
		user.loggedIn = !user.loggedIn
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{#if user.loggedIn}
	<button on:click={toggle}>
		Log out
	</button>
	{:else}
	<button on:click={toggle}>
		Log in
	</button>
	{/if}

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
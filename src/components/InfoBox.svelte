<script>
	import { gameOverMsg, welcomeMsg } from '../constants'

	export let appState
	export let info
	export let close
	export let header

	const infoList = [
		welcomeMsg,
		null,
		gameOverMsg,
	]

</script>
<div>
	{#if header}
		<h2 class="center">{header}</h2>
	{/if}

	<p>{@html info || infoList[appState]}</p>
	{#if close}
	<div class="center">
		<button class ="closeBtn center" on:click={close}>OK</button>
	</div>
	{/if}
</div>


<style>
	.center {
		display: flex;
		justify-content: space-around;
	}
	.closeBtn {
		border-radius: 0.5em;
		background-color: #be7777;
		color: white;
	}
</style>
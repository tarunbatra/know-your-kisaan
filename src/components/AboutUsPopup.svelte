<script>
  import { getContext } from 'svelte'
import InfoBox from './InfoBox.svelte'
import { aboutUsMsg } from '../constants'
  const { open } = getContext('simple-modal')

function openAboutSection () {
	open(InfoBox, {
		info: aboutUsMsg,
	})
}
</script>

<button class="about" on:click={openAboutSection} name="about">ℹ️</button>

<style>
  .about{
		float: right;
		font-size: larger;
    padding: 0;
    border: none;
    background: none;
	}
</style>
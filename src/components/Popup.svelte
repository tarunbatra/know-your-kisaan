<script>
  import { getContext } from 'svelte';
  const { open } = getContext('simple-modal');
  import InfoBox from './InfoBox.svelte';
  import Btn from './Btn.svelte';

  export let info;
  export let btnText;

  async function showInfo() {
    open(InfoBox, {
      info
    })
  }
</script>

<Btn on:click={showInfo} text={btnText}/>
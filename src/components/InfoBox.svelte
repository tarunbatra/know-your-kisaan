<script>
  import { welcomeMsg } from '../constants'

  export let appState

  const infoList = [
    welcomeMsg,
  ];

</script>

<div>
  <p>{@html infoList[appState]}</p>
</div>
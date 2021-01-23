<script>
  import { gameOverMsg, welcomeMsg } from '../constants'

  export let appState
  export let info

  const infoList = [
  	welcomeMsg,
  	null,
  	gameOverMsg,
  ]

</script>

<div>
  <p>{@html info || infoList[appState]}</p>
</div>

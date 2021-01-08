<script>
  import Meter from './Meter.svelte'
  export let value = 0
  export let max = 100
</script>

<Meter name="Cash" {value} {max}></Meter>
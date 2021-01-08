<script>
  export let value = 0
  export let max = 100
  export let name = 'Meter'
</script>

<div class="meter">
  <progress min=0 {max} {value}></progress>
  <p class="label">
    <strong>{name}</strong><br>{value}
  </p>
</div>


<style>
  /* progress {
  } */
  progress {
    /* transform: rotate(270deg); */
    /* border-radius: 7px; */
    width: 80%;
    box-shadow: 1px 1px 4px rgba( 0, 0, 0, 0.2 );
  }
  progress::-webkit-progress-bar {
    background-color: rgb(97, 97, 107);
  }
  progress::-webkit-progress-value {
    box-shadow: 1px 1px 5px 3px rgba( 255, 0, 0, 0.8 );
  }
  progress::-moz-progress-bar {
    background-color: rgb(97, 97, 107);
  }
  progress::-moz-progress-value {
    box-shadow: 1px 1px 5px 3px rgba( 255, 0, 0, 0.8 );
  }

  .label {
    font-size: small;
    display: inline-block;
    width: 10%;
    padding: 0.2em;
    margin-right: 0.1em;
  }
  .meter {
    width: 100%;
    display: flexbox;
  }
</style>
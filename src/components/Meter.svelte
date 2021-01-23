<script>
  export let value = 0
  export let max = 100
  export let name = 'Meter'
</script>

<div class="meter">
  <progress min=0 {max} {value}></progress><br />
  <p class="label">
    <strong>{name}: </strong>{value}
  </p>
</div>


<style>
  progress {
    width: 100%;
    box-shadow: 1px 1px 4px rgba( 0, 0, 0, 0.2 );
  }
  progress::-webkit-progress-bar {
    background-color: #6d6875;
  }
  progress::-webkit-progress-value {
    box-shadow: 1px 1px 5px 3px rgba( 255, 0, 0, 0.8 );
  }
  progress::-moz-progress-bar {
    background-color: #6d6875;
  }
  progress::-moz-progress-value {
    box-shadow: 1px 1px 5px 3px rgba( 255, 0, 0, 0.8 );
  }

  .label {
    font-size: small;
    display: block;
    width: 100%;
    padding: 0.2em;
    margin: 0 auto;
    text-align: center;
  }
  .meter {
    width: 100%;
    display: flexbox;
  }
</style>
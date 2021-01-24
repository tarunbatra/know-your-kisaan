<script>
  export let text = 'Start'
  export let disabled = false
</script>

<button on:click class:disabled={disabled}>{text}</button>

<style>
  button {
    display: block;
    min-width: 50%;
    width: 90vw;
    background-color: #be7777;
    border: 2px white;
    border-radius: 0.5em;
    color: white;
    margin-top: 0.2em;
    height: 3em;
    margin: 0.2em auto;
  }
  .disabled {
    background-color: #ffb5b5;
  }
  @media (min-width: 600px) {
    button {
      width: 400px;
    }
  }
</style>
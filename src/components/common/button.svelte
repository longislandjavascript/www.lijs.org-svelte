<button>
	<slot />
</button>

<style>
  button {
    border-radius: 8px;
    border: none;
    background: transparent;
    border: 1px solid steelblue;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    min-width: 200px;
    cursor: pointer;
    height: 35px;
  }

  button:hover {
    opacity: 0.9;
  }
</style>
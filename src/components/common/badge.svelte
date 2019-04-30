<span class="badge">
	<span class="text">{title}</span>
	<span class="value">{value}</span>
</span>

<script>
export let title;
export let value;
</script>

<style>
  .badge {
    border-radius: 6px;
    display: flex;
    width: 250px;

    border: 1px solid #333;
    margin: 10px;
  }

  .text {
    flex: 2;
    background: #333;
    border-radius: 5px 0px 0px 5px;
    padding: 3px;
    color: white;
  }

  .value {
    flex: 1;
    background: teal;
    color: white;
    border-radius: 0px 5px 5px 0px;
    padding: 3px;
  }
</style>

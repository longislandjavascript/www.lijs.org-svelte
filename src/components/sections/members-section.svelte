<script>
  const fetchData = () => {
    return fetch('/.netlify/functions/fetchMembers').then(res => {
      return res.json().then(data => {
        return data;
      });
    });
  };
</script>

<div class="container">
	<div class="wrapper">
		{#await fetchData() then data}
		<h3 style="color: gold">{data.count} and counting!</h3>
		{#each data.members as {thumbnail} (thumbnail)}
		<img src={thumbnail} alt="member" />
		{/each}
		{:catch error}
		<div>{error.message}</div>
		{/await}
	</div>
</div>

<style>
  .container {
    background: #333;
    padding: 20px;
  }
  .wrapper {
    max-width: 960px;
    margin: 0 auto;
  }
  img {
    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin: 2px;
  }
</style>
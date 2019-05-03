<script>
  import { scale } from "svelte/transition";
  async function fetchData() {
    const result = await fetch("/.netlify/functions/fetchMembers");
    const data = await result.json();
    return data;
  }
</script>

<style>
  .container {
    background: #333;
    padding: 20px;
  }
  .wrapper {
    max-width: 960px;
    margin: 0 auto;
    min-height: 300px;
  }
  img {
    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin: 2px;
  }
</style>

<div class="container">
  <div class="wrapper">
    {#await fetchData() then data}
    <h3 style="color: gold">{data.count} and counting!</h3>
    {#each data.members as {thumbnail} (thumbnail)}
    <img transition:scale="{{duration:3000}}" src="{thumbnail}" alt="member" />
    {/each} {:catch error}
    <div>{error.message}</div>
    {/await}
  </div>
</div>

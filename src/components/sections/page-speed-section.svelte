<script>
  import { fade } from "svelte/transition";
  import { Badge } from "../common";
  import Spinner from 'svelte-spinner';
  import { format } from 'date-fns';
  const getPageSpeedTestData = () => {
    return fetch("/.netlify/functions/fetchPageSpeedTest").then(res => {
      return res.json().then(data => {
        console.log("DATA", data)
        return data;
      });
    });
  };

  let speedIndex = getPageSpeedTestData();
</script>

<style>
  .container {
    padding: 10px;
    max-width: 960px;
    margin: 40px auto;
  }

  .badge-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .pending-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>

<div class="container">
  {#await speedIndex}
  <div class="pending-wrapper">
    <h3>A PageSpeed Insights test in progress</h3>
    <Spinner size="30" speed="750" color="gold" thickness="2" gap="20" />
  </div>

  <h5>The results will show up here once the test is complete.</h5>

  {:then data}
  <div transition:fade>
    <h3>Results from PageSpeed Insights test</h3>
    <h5>Completed on {format(data.analysisUTCTimestamp, 'MMMM DD, YYYY')} at {format(data.analysisUTCTimestamp, 'hh:MM A')}</h5>
    <div class="badge-wrapper">
      <Badge title="Speed Index"
      value={data.lighthouseResult.audits["speed-index"].displayValue} /> 
      <Badge
      title="First Paint"
      value={data.lighthouseResult.audits["first-meaningful-paint"].displayValue}
      /> 
      <Badge title="Time to Interactive"
      value={data.lighthouseResult.audits["interactive"].displayValue} />
    </div>
  </div>
  {:catch error}
  <h2>Oops...looks like the test didn't work.</h2>
  <button on:click={() => getPageSpeedTestData()}>Try again</button>
  {/await}
</div>
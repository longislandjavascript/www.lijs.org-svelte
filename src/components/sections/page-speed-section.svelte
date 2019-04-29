<script>
  import { fade } from 'svelte/transition';
  import Spinner from 'svelte-spinner';
  import { Badge } from '../common';
  const getSpeedIndex = () => {
    return fetch('/.netlify/functions/fetchPageSpeedTest').then(res => {
      return res.json().then(data => {
        console.log('data', data.lighthouseResult.audits);
        return data;
      });
    });
  };
</script>


<div class="container">

{#await getSpeedIndex()}
<h3>A PageSpeed Insights test in progress...</h3>
<h3>The results will show up below once the test is complete.</h3>
  <Spinner
    size="80"
    speed="750"
    color="gold"
    thickness="2"
    gap="40"
  />
{:then data}
<div transition:fade>

<h3>Results from PageSpeed Insights test</h3>
<div class="badge-wrapper">
<Badge title="Speed Index" value={data.lighthouseResult.audits["speed-index"].displayValue} />
<Badge title="First Paint" value={data.lighthouseResult.audits["first-meaningful-paint"].displayValue} />
<Badge title="Time to Interactive" value={data.lighthouseResult.audits["interactive"].displayValue} />
</div>
</div>
{/await}
</div>


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
</style>
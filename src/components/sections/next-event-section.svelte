<script>
  import { fade } from "svelte/transition";
  import Spinner from "svelte-spinner";
  import Button from "../common/button.svelte";

  function fetchData() {
    return fetch("/.netlify/functions/fetchNextEvent").then(res => {
      return res.json().then(data => {
        return data;
      });
    });
  }
</script>

<div class="container">
	<div class="wrapper">
		<h2>Next Event:</h2>
		<div style="min-height: 600px;">
	
		{#await fetchData()}

		<Spinner
			size="100"
			speed="750"
			color="gold"
			thickness="2"
			gap="40"
		/>

		{:then data}
		<div transition:fade>
		<h1 class="title neon">{data.name}</h1>
	
		<div style="margin: 20px 10px;"><span class="tag">{data.rsvps} are going</span></div>
		<a href={data.link} target="_blank" rel="noopener noreferrer">
			<Button>RSVP Now!</Button>
			</a>

		<h2>When:</h2>
		<div class="gold">
			<h2>{data.date} </h2>
			<div><b> {data.time}</b></div>
		</div>
		<h2>Where:</h2>
		<div class="gold">
			<h3>{data.venue}</h3>
			<div> {data.address_street}</div>
			<div>
				{data.address_city_state}
			</div>
		</div>

		<div style="margin-top: 20px;">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.0293071831807!2d-73.43106468465672!3d40.87123103579583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8287816d84b91%3A0x9a83753169b72bea!2sLaunchPad+Huntington!5e0!3m2!1sen!2sus!4v1556485745363!5m2!1sen!2sus"
			 width="600" height="450" frameborder="0" style="border:0;max-width: 90%;" allowfullscreen title="map"></iframe>
		</div>

</div>	
	{:catch error}
		<div>{error.message}</div>
		{/await}
		</div>
	</div>
</div>



	<style>
	.container {
	  background: #333;
	  color: white;
	  padding: 10px;
	}

	.wrapper {
	  max-width: 960px;
	  margin: 0 auto;
	}

	.gold {
	  color: gold;
	}

	.title {
	  font-size: 4vw;
	  text-transform: uppercase;
	  background-color: rgba(0, 0, 0, 0.8);
	  padding: 10px;
	  border-radius: 20px;
	}

	.tag {
	  color: white;
	  padding: 8px 12px;
	  font-weight: bold;
	}

	h2,
	h3 {
	  padding: 5px;
	  margin: 5px;
	}

	.neon {
	  color: gold;
	}

	@media only screen and (min-width: 640px) {
	  .neon {
	    color: #333;
	    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px rgb(70, 70, 70),
	      0 0 40px #0ff, 0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff,
	      0 0 150px #0ff;
	  }
	}
</style>
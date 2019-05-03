<div class="container">
	<div class="wrapper">
		<h1>Next Event:</h1>
		<div style="min-height: 600px;">

			{#await fetchData()}
			<Spinner size="100" speed="750" color="gold" thickness="2" gap="40" />
			{:then data}
			<div>
		
			<h1 transition:fade class="title">{data.name}</h1>
	
				<div style="margin: 20px 10px;"><span class="tag">{data.rsvps} are going!</span></div>
				<a href={data.link} target="_blank" rel="noopener noreferrer">
					<Button>RSVP Now!</Button>
				</a>
				<div>
					<h3 class="when-where">When</h3>
					<div class="gold">
						<h2>{data.date} </h2>
						<div><b> {data.time}</b></div>
					</div>
					<h3 class="when-where">Where</h3>
					<div class="gold">
						<h2>{data.venue}</h2>
						<div> <b>{data.address_street}</b></div>
						<div>
							<b>
								{data.address_city_state}
							</b>
						</div>
					</div>
				</div>

				<div style="margin-top: 20px;">
					<iframe 
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.0293071831807!2d-73.43106468465672!3d40.87123103579583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8287816d84b91%3A0x9a83753169b72bea!2sLaunchPad+Huntington!5e0!3m2!1sen!2sus!4v1556485745363!5m2!1sen!2sus"
						 width="600" 
						 height="450" 
						 frameborder="0" 
						 style="border:0;max-width: 90%;" 
						 allowfullscreen 
						 title="map" />
				</div>

			</div>
			{:catch error}
			<div>{error.message}</div>
			{/await}
		</div>
	</div>
</div>

<script>
  import { fade } from "svelte/transition";
  import Spinner from "svelte-spinner";
  import { Button } from "../common";

  function fetchData() {
    return fetch("/.netlify/functions/fetchNextEvent").then(res => {
      return res.json().then(data => {
        return data;
      });
    });
  }
</script>

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
	  font-size: 3vw;
	  color: gold;
		text-transform: uppercase;

	}

	@media (max-width: 650px) {
		.title {
	  font-size: 40px;
	}
	}

	.tag {
	  color: white;
	  padding: 8px 12px;
	  font-weight: bold;
	}

	h2 {
	  padding: 5px;
	  margin: 5px;
	}

	.when-where {
	  text-decoration: underline;
		color: lightgray;
	}
</style>
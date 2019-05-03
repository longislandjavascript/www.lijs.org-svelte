<div class="container">
	<h1 class="neon">Long Island <span class="js">JavaScript</span> Group</h1>
	<h3 style="color: white;">Visit us on</h3>
	<div class="visit-section">

	<div class="button-wrapper">

		{#each socialButtons as socialButton (socialButton.link)}
		<ImageLink {...socialButton} />
		{/each}
	</div>
</div>
</div>


<script>
	import { ImageLink } from "../common";
	import { CLOUDINARY_BASE_URL, PUBLIC_SLACK_URL } from "../../env_vars";
	const IMAGE_URL = `${CLOUDINARY_BASE_URL}/v1556488884/lijs.org`;
	const socialButtons = [
	  {
	    img: `${IMAGE_URL}/meetup-icon.png`,
	    link: "https://www.meetup.com/long-island-javascript-group/"
	  },
	  {
	    img: `${IMAGE_URL}/slack-icon.png`,
	    link: PUBLIC_SLACK_URL
	  },
	  {
	    img: `${IMAGE_URL}/github-icon.png`,
	    link: "https://github.com/lijs-meetup"
	  }
	];
</script>

<style>
  .container {
    padding: 20px;
    margin: 0;
    max-width: 100vw;
		background-color: #333;
  }
  h1 {
    font-size: 10vw;
    padding: 0px;
    margin: 10px;
		color: rgb(163, 163, 163);
  }

	/* .js {
		color: rgb(212, 236, 255)

	} */

	.neon {
		color: rgb(212, 236, 255);
  /* text-shadow: 1px 1px 2px rgba(219, 219, 219, 0.8); */
}

  .button-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
    width: 100%;
  }

	.visit-section {
		max-width: 960px;
		margin: 0 auto;
		border: 2px solid black;
		border-radius: 30px;
		background: white;
	}
</style>
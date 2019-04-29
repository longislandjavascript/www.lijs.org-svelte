<div class="container">
	<h1>Long Island JavaScript Group</h1>
	<h3>Visit us on:</h3>
	<div class="button-wrapper">

		{#each socialButtons as socialButton (socialButton.link)}
		<ImageLink {...socialButton} />
		{/each}
	</div>
</div>


<script>
	import { ImageLink } from '../common';
	const IMAGE_URL = 'https://res.cloudinary.com/gojutin/image/upload/v1556488884/lijs.org';
	const socialButtons = [
	  {
	    img: `${IMAGE_URL}/meetup-icon.png`,
	    link: 'https://www.meetup.com/long-island-javascript-group/',
	  },
	  {
	    img: `${IMAGE_URL}/slack-icon.png`,
	    link: 'https://publicslack.com/slacks/https-lijs-group-slack-com/invites/new',
	  },
	  {
	    img: `${IMAGE_URL}/github-icon.png`,
	    link: 'https://github.com/lijs-meetup',
	  },
	];
</script>

<style>
  .container {
    padding: 20px;
    margin: 0;
    max-width: 100vw;
  }
  h1 {
    font-size: 10vw;
    padding: 0px;
    margin: 10px;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
    width: 100%;
  }
</style>
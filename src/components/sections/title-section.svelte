<h1>Long Island JavaScript Group</h1>
<h3>Visit us on:</h3>
<div class="button-wrapper">

	{#each socialButtons as socialButton (socialButton.link)}
	<SocialButton {...socialButton} />
	{/each}
</div>


<script>
	import SocialButton from "../social-button.svelte";
	const IMAGE_URL =
	  "https://res.cloudinary.com/gojutin/image/upload/v1556471736/lijs.org";
	const socialButtons = [
	  {
	    img: `${IMAGE_URL}/meetup-icon.png`,
	    link: "https://www.meetup.com/long-island-javascript-group/"
	  },
	  {
	    img: `${IMAGE_URL}/slack-icon.png`,
	    link:
	      "https://publicslack.com/slacks/https-lijs-group-slack-com/invites/new"
	  },
	  {
	    img: `${IMAGE_URL}/github-icon.png`,
	    link: "https://github.com/lijs-meetup"
	  }
	];
</script>

<style>
  h1 {
    font-size: 10vw;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
    width: 100%;
  }
</style>
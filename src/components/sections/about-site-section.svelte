<script>
	import { ImageLink } from '../common';
	const BASE_URL = 'https://res.cloudinary.com/gojutin/image/upload/w_300/v1556492206/lijs.org';
	const links = [
	  {
	    text: 'This site is built with',
	    img: `${BASE_URL}/svelte-logo.png`,
	    link: 'https://svelte.dev',
	  },
	  {
	    text: 'and powered by',
	    img: `${BASE_URL}/netlify-logo.png`,
	    link: 'https://netlify.com',
	  },
	];
</script>

<div class="container">
{#each links as link (link.text)}
<div>
	<h3>{link.text}</h3>
<ImageLink img={link.img} link={link.ref} />
</div>
{/each}
</div>

<style>
	.container {
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: space-around;
	  align-items: center;
	  padding: 10px;
	  max-width: 960px;
	  margin: 40px auto;
	}
</style>
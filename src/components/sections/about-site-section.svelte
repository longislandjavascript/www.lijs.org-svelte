<div class="container">
	{#each links as link (link.text)}
		<div>
			<h2>{link.text}</h2>
			<ImageLink img={link.img} link={link.ref} />
		</div>
	{/each}
</div>

<script lang="ts">
	import  ImageLink  from "../common/image-link.svelte";
	import { CLOUDINARY_BASE_URL } from "../../env_vars";
	const BASE_URL = `${CLOUDINARY_BASE_URL}/w_300/v1556492206/lijs.org`;
	const links = [
		{
			text: "This site is built with",
			img: `${BASE_URL}/svelte-logo.png`,
			link: "https://svelte.dev"
		},
		{
			text: "and powered by",
			img: `${BASE_URL}/netlify-logo.png`,
			link: "https://netlify.com"
		}
	];
</script>


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
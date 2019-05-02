<div class="container">
	<div>
		<h2>This site is built with</h2>
		<a href="https://svelte.dev" target="_blank" rel="noopener noreferrer">
		<div>	<SvelteLogo /></div>
		</a>
	</div>
	<div>
		<h2>and powered by</h2>
		<a href="https://netlify.com" target="_blank" rel="noopener noreferrer">
		<img src={netlify_img} alt="Netlify Logo"  />
		</a>
	</div>

</div>

<script lang="ts">
	import  ImageLink  from "../common/image-link.svelte";
	import SvelteLogo from '../common/svelte.svelte'
	import { CLOUDINARY_BASE_URL } from "../../env_vars";

	const BASE_URL: string = `${CLOUDINARY_BASE_URL}/w_250/v1556814904/lijs.org`;
	let netlify_img = `${BASE_URL}/netlify-logo.png`

</script>


<style>
	.container {
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: space-around;
	  align-items: flex-start;
	  padding: 10px;
	  max-width: 960px;
	  margin: 40px auto;
	}

	a {
		text-decoration: none;
	}
</style>
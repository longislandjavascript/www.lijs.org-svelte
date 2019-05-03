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
			<div>	<NetlifyLogo /></div>
		</a>
	</div>

</div>

<script lang="ts">
	import  ImageLink  from "../common/image-link.svelte";
	import SvelteLogo from '../common/svelte.svelte'
	import NetlifyLogo from '../common/netlify.svelte'

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
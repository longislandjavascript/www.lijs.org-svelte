<script>
	import SocialButton from '../social-button.svelte';
</script>
<div class="container">

<div>
<SocialButton img="https://res.cloudinary.com/gojutin/image/upload/v1556492206/lijs.org/svelte-logo.png" link="https://svelte.dev" />
</div>
	<div>
		<h3>This site is built with</h3>

		<a href="https://svelte.dev" target="_blank" rel="noopener noreferrer">
			<img alt="name" width={200} src="https://res.cloudinary.com/gojutin/image/upload/v1556492206/lijs.org/svelte-logo.png" />
		</a>
	</div>
	<div>
		<h3>and powered by</h3>
		<a href="https://svelte.dev" target="_blank" rel="noopener noreferrer">
			<img alt="name" width={200} src="https://res.cloudinary.com/gojutin/image/upload/v1556492206/lijs.org/netlify-logo.png" />
		</a>
	</div>
</div>

<style>
	.container {
	  display: flex;
	  flex-wrap: wrap;
	  align-items: center;
	  justify-content: space-around;
	  padding: 10px;
	  max-width: 960px;
	  margin: 40px auto;
	}
</style>
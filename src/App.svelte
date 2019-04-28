<div class="container">
	<TitleSection />
</div>

<script>
	import TitleSection from "./components/sections/title-section.svelte";
	fetch("/.netlify/functions/hello.js").then(data => {
	  console.log(data, "Yay!!!");
	});
</script>

<style>
	.container {
	  text-align: center;
	  padding: 0px;
	}
</style>
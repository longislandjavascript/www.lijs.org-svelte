<script>
	import TitleSection from "./components/sections/title-section.svelte";
	import NextEventSection from "./components/sections/next-event-section.svelte";
	import MembersSection from "./components/sections/members-section.svelte";
	import FaqSection from "./components/sections/faq-section.svelte";
	import AboutSite from "./components/sections/about-site-section.svelte";
	import PageSpeed from "./components/sections/page-speed-section.svelte";
	import ContactForm from "./components/sections/contact-form.svelte";
</script>

<div class="container">
	<TitleSection />
	<NextEventSection />
	<MembersSection />
	<FaqSection />
	<ContactForm />
	<AboutSite />

	<PageSpeed />

</div>

<style>
	.container {
	  text-align: center;
	  padding: 0;
	  margin: 0;
	}
</style>
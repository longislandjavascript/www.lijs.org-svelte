<div class="container">

	<div class="wrapper">
		<h1 class="title">FAQ</h1>
		{#each faqs as faq (faq.q)}
		<div>
			<h2 class="q">{faq.q.toUpperCase()}</h2>
			<h3 class="a">{faq.a}</h3>
			<hr style="border-top: 1px dashed steelblue;" />
		</div>
		{/each}
	</div>
</div>

<script>
import { faqs } from "../../constants";
</script>

<style>
  .container {
    background: #333;
    padding: 10px;
  }
  .title {
    background: gold;
  }

  .wrapper {
    max-width: 900px;
    margin: 0 auto;
  }

  .q {
    color: gold;
  }

  .a {
    line-height: 22px;
    color: lightgray;
  }
</style>



<script>
  import { CLOUDINARY_BASE_URL } from "../../env_vars";
  import { onMount } from "svelte";
  import scrollMonitor from "scrollmonitor";
  import { quintOut, cubicOut } from "svelte/easing";
  import { fade, draw, fly } from "svelte/transition";
  const BASE_URL = `${CLOUDINARY_BASE_URL}/w_250/v1556851795/lijs.org`;
  let netlify_img = `${BASE_URL}/netlify-logo.png`;
  let visible = false;
  onMount(() => {
    var myElement = document.getElementById("container");
    var elementWatcher = scrollMonitor.create(myElement);

    elementWatcher.enterViewport(function() {
      visible = true;
    });
    elementWatcher.exitViewport(function() {
      visible = false;
    });
  });

  function expand(node, params) {
    const { delay = 0, duration = 400, easing = cubicOut } = params;

    const w = parseFloat(getComputedStyle(node).strokeWidth);

    return {
      delay,
      duration,
      easing,
      css: t => `opacity: ${t}; stroke-width: ${t * w}`
    };
  }
</script>

<style>
  .centered {
    font-size: 65px;
    text-align: center;
    position: relative;
    top: -160px;
    font-weight: bold;
    letter-spacing: 0.12em;
    color: #676778;
    font-weight: 400;
    text-shadow: 1px 1px white;
  }

  .centered span {
    will-change: filter;
  }
</style>

<div id="container">
  {#if visible}
  <img in:fade="{{duration: 2000}}" src="{netlify_img}" />

  <div class="centered" out:fly="{{y: -20, duration: 800}}">
    {#each 'netlify' as char, i}
    <span in:fade="{{delay: 1000 + i * 150, duration: 800}}">{char}</span>
    {/each}
  </div>
  {/if}
</div>

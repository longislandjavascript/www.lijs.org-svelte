<script>
  import { CLOUDINARY_BASE_URL } from "../../env_vars";
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  const BASE_URL = `${CLOUDINARY_BASE_URL}/w_265/v1556851795/lijs.org`;
  const netlify_img = `${BASE_URL}/netlify-logo.png`;
</script>

<style>
  .centered {
    font-size: 70px;
    text-align: center;
    position: relative;
    top: -175px;
    left: 5px;
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

<img in:fade="{{duration: 2000}}" src="{netlify_img}" />

<div class="centered" out:fly="{{y: -20, duration: 800}}">
  {#each 'netlify' as char, i}
  <span in:fade="{{delay: 1000 + i * 150, duration: 800}}">{char}</span>
  {/each}
</div>

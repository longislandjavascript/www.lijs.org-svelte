<script>
  let BASE_URL =
    "https://res.cloudinary.com/gojutin/image/upload/w_240/v1556725425/lijs.org/sponsors";

  let sponsors = [
    { img: `${BASE_URL}/launchpad-logo.png`, link: "http://launchpadli.com/" },
    { img: `${BASE_URL}/oreilly-logo.png`, link: "https://www.oreilly.com/" }
  ];
</script>

<style>
  .container {
    background: #efefef;
    padding: 20px;
  }
  .wrapper {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
  .sponsor {
    margin: 10px;
    cursor: pointer;
  }
</style>

<div class="container">
  <h1>Our meetup is sponsored by</h1>
  <div class="wrapper">
    {#each sponsors as sponsor (sponsor.link)}
    <a
      class="sponsor"
      href="{sponsor.link}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="{sponsor.img}" />
    </a>
    {/each}
  </div>
</div>

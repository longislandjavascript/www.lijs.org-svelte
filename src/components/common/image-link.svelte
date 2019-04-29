<a href={link} target="_blank" rel="noreferrer noopener"><img width={200} src={img} alt="image-link" /></a>

<style>
	a {
	  height: 30px;
	  width: 230px;
	  color: white;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  padding: 5px;
	  cursor: pointer;
	  font-weight: bold;
	  margin: 20px;
	}

	a:hover {
	  opacity: 0.8;
	}
</style>

<script>
  export let img;
  export let link;
</script>

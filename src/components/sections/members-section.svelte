<script>
  function fetchData() {
    return fetch('/.netlify/functions/fetchMembers').then(res => {
      return res.json().then(data => {
        console.log('DATA', data);
        return data;
      });
    });
  }
</script>

{#await fetchData() then data}
  <div>{data}</div>
{/await}
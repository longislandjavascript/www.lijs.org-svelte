
<div class="container">
  <h1 style="color: white;padding: 0;margin:0;">Contact Us</h1>
  <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
    <select name="reason" bind:value={reason} >
      {#each contactReasons as option (option)}
      <option value={option}>{option}</option>
      {/each}
    </select>

    <input type="text" name="name" placeholder="Your name" bind:value={username}  />
    <input type="text" name="email" placeholder="Your email" bind:value={email}  />
    <textarea name="message" placeholder="Your message" bind:value={message}  />

    <button type="submit" disabled={disabled}>Submit</button>
  </form>
</div>

<script lang="ts">
  let reason = "";
  let username = "";
  let email = "";
  let message = "";
  const contactReasons: string[] = [
    "I have a question or suggestion",
    "I'm interested in presenting",
    "I'm interested in sponsoring",
    "Something else"
  ];

  function validateEmail(m): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m);
  }

  $: disabled = !message || !username || !email || !validateEmail(email);
</script>

<style>

  .container {
    background: #333;
    padding: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    margin: 0 auto;
  }
  select,
  input,
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 10px;
    border: none;
    color: white;
    padding: 6px 10px;
    margin: 5px;
    width: 100%;
    outline: none;
    background: rgb(63, 63, 63);
  }

  @media only screen and (max-width: 480px) {
    input {
      width: 100%;
    }
  }

  button {
    font-weight: bold;
    border-radius: 10px;
    border: none;
    background: steelblue;
    color: white;
    padding: 10px 10px;
    margin: 5px;
    min-width: 250px;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.9;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
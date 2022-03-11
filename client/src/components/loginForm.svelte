<script type="module">
import { form, field } from 'svelte-forms';
import { required } from 'svelte-forms/validators';
import { bind } from 'svelte/internal';

 const name = field('name', '', [required()], {
    validateOnChange: false
  });
  const password = field('password', '', [required()], {
    validateOnChange: false
  })

  const myForm = form(name, password);
  function validate(){
    name.validate();
    password.validate();
    let user = {
      'username': $name.value,
      'password': $password.value,
    }
    console.log(user)
    fetch('https://alivewrathfulwireframe.danielyatali0.repl.co/rand',{mode: 'no-cors'})
        .then(results => results.json())
        .then(console.log)
    }
</script>

<div class="card">
  <h3 class="font-semibold text-3xl">Login</h3>
  <input class="input" type="text" bind:value={$name.value} placeholder="Enter Name">
  {#if $myForm.hasError('name.required')}
    <div class="error">Name is required</div>
  {/if}
  <input class ="input" type="password" bind:value={$password.value} placeholder="Password">
  {#if $myForm.hasError('password.required')}
    <div class="error">Password is required</div>
  {/if}
  
  

  <button class = "bg-gray-400 rounded-full hover:bg-slate-600 p-1 w-28 h-10" on:click={validate}>Sign Up</button>
</div>

<style>

</style>
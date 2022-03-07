<script>
  import Button from './lib/components/Button.svelte'
  import Themer from './lib/components/Themer.svelte'
  import { theme, theme_os, theme_user, THEME } from './lib/stores/theme.store'
  import Demo from './lib/routes/Demo.svelte'
</script>

<Themer/>

<main class="p-10">
  <h1>Hello {$theme}</h1>
  <div>
    <strong>User:</strong>
    {$theme_user}
  </div>
  <div>
    <strong>OS:</strong>
    {$theme_os}
  </div>

  <hr/>

  {#if $theme !== 'light'}
    <Button on:click={THEME.light}>Light</Button>
  {/if}

  {#if $theme !== 'dark'}
    <Button on:click={THEME.dark}>Dark</Button>
  {/if}

  <Button on:click={THEME.reset}>Reset</Button>

  <Demo/>
</main>

<style>
  hr {
    @apply my-5;
  }
</style>

<script>
  import { location, push } from 'svelte-spa-router'

  const items = [
    { text: 'Home', href: '/' },
    { text: 'Typography', href: '/typography' }
  ]
</script>

<ul>
  {#each items as item (item.href)}
    <li class="text-slate-400 cursor-pointer py-3 px-5 hover:text-blue-200" class:text-blue-400={$location === item.href} class:hover:text-blue-400={$location === item.href} class:bg-slate-900={$location === item.href} on:click={() => push(item.href)}>
      {item.text}
    </li>
  {/each}
</ul>

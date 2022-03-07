<script>
  import Button from '../components/Button.svelte'
</script>

<hr class="my-6"/>

<header>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
</header>

<article>
  <div class="flex gap-1 my-1">
    <Button>Base Button</Button>
    <Button disabled>Base Disabled</Button>
  </div>

  <div class="flex gap-1 my-1">
    <Button primary>Primary Button</Button>
    <Button primary disabled>Primary Disabled</Button>
  </div>

  <div class="flex gap-1 my-1">
    <Button secondary>Secondary Button</Button>
    <Button secondary disabled>Secondary Disabled</Button>
  </div>

  <div class="flex gap-1 my-1">
    <Button success>Success Button</Button>
    <Button success disabled>Success Disabled</Button>
  </div>

  <div class="flex gap-1 my-1">
    <Button error>Error Button</Button>
    <Button error disabled>Error Disabled</Button>
  </div>
</article>

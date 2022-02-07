<script>
  import Router from 'svelte-spa-router'
  import routes from './demo/demo.routes'
  import DemoNav from './demo/components/DemoNav.svelte'
</script>

<div class="flex h-screen w-screen relative">
  <nav class="w-[60rem] bg-slate-800 text-base">
    <DemoNav/>
  </nav>
  <main class="w-full text-left bg-slate-100 overflow-auto">
    <Router {routes}/>
  </main>
</div>

<style global>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  html { font-size: 4px }
</style>

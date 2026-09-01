<script setup>
import Header from '../components/AppHeader.vue'
import Guides from '../components/AppGuides.vue'
import Footer from '../components/AppFooter.vue'
</script>

<template>
  <div class="container py-4 px-3 mx-auto">
    <Header />

    <h1>Build Bootstrap with Vue</h1>
    <div class="col-lg-8 px-0">
      <p class="fs-xl">You've successfully loaded the Bootstrap + Vue example! It's loaded up with <a href="https://getbootstrap.com/">Bootstrap 6</a> and uses Vue and Vite to compile and bundle our Sass and JavaScript. It also features a handful of custom Vue components.</p>
      <p>If this button appears blue and the link appears purple, you've done it!</p>
    </div>

    <button type="button" class="btn-solid theme-primary me-3" data-bs-toggle="drawer" data-bs-target="#drawerExample">Toggle drawer</button>
    <a id="popoverButton" class="fg-success" href="#" role="button" data-bs-toggle="popover" title="Custom popover" data-bs-content="This is a Bootstrap popover.">Example popover</a>

    <dialog class="drawer drawer-end" tabindex="-1" id="drawerExample" aria-labelledby="drawerExampleLabel">
      <div class="drawer-header">
        <h5 class="drawer-title" id="drawerExampleLabel">Drawer</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="drawer" aria-label="Close"></button>
      </div>
      <div class="drawer-body">
        <div>
          Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
        </div>
        <button class="btn-solid theme-secondary mt-3" type="button" id="menuButton" data-bs-toggle="menu">
          Menu button
        </button>
        <div class="menu" aria-labelledby="menuButton">
          <a class="menu-item" href="#">Action</a>
          <a class="menu-item" href="#">Another action</a>
          <a class="menu-item" href="#">Something else here</a>
        </div>
      </div>
    </dialog>

    <hr class="col-1 my-5 mx-0">

    <Guides />

    <Footer />
  </div>
</template>

<script setup>
import GuideItem from './AppGuideItem.vue'
</script>

<script>
export default {
  data() {
    return {
      resources: [
        { 
          url: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/',
          title: 'Bootstrap quick start guide'
        },
        { 
          url: 'https://getbootstrap.com/docs/5.3/getting-started/webpack/',
          title: 'Bootstrap Webpack guide'
        },
        { 
          url: 'https://getbootstrap.com/docs/5.3/getting-started/parcel/',
          title: 'Bootstrap Parcel guide'
        },
        { 
          url: 'https://getbootstrap.com/docs/5.3/getting-started/vite/',
          title: 'Bootstrap Vite guide'
        },
        { 
          url: 'https://getbootstrap.com/docs/5.3/getting-started/contribute/',
          title: 'Contributing to Bootstrap'
        },
      ]
    }
  }
}
</script>

<template>
  <h2>Guides</h2>
  <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>

  <ul class="ps-0 list-style-none">
    <!-- TODO fix later -->
    <!-- eslint-disable-next-line vue/valid-v-for -->
    <GuideItem
      v-for="item in resources"
      :href="item.url"
      :text="item.title"
    />
  </ul>
</template>

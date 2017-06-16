<template>
  <div class="container">
    <div>
      <v-header/>
      <h1 class="title">
        C4 Ministry
      </h1>
      <h2 class="subtitle">
        Events
      </h2>
      <v-footer/>
    </div>
  </div>
</template>

<script>
import Header from '~components/Header.vue'
import Footer from '~components/Footer.vue'

export default {
  components: {
    'v-header': Header,
    'v-footer': Footer
  }
}
</script>

<template>
  <div class="container">
    <div>
      <v-header/>
      <h1 class="title">
        C4 Ministry
      </h1>
      <h2 class="subtitle">
        Blog
      </h2>
      <section class="blog" id="blog">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12 centertext">
              <p class="all-td">from Tumblr</p>
              <h2>Blog</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 featurebox">
              <div class="fh-desc">
                <ul class="tumblr" id="tumblr"></ul>
              </div>
            </div>
          </div>
        </div>
      </section>
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

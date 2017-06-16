<template>
  <div class="container">
    <div>
      <v-header/>
      <h1 class="title">
        C4 Ministry
      </h1>
      <h2 class="subtitle">
        Sermons
      </h2>
      <section class="video" id="video">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12 centertext">
              <p class="all-td">from Vimeo</p>
              <h2>Sermons</h2>
            </div>
          </div>
        </div>
      </section>
      <div class="embed-container">
        <div id="embed"></div>
      </div>
      <div class="table-container container">
        <div class="row">
          <div class="col-xs-12">
            <table id="video-table" class="table table-hover">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Sermon</th>
                  <th>Scripture</th>
                  <th>Speaker</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
            <div id="see-more"></div>
          </div>
        </div>
      </div>
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

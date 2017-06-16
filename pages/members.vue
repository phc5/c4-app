<template>
  <div class="container">
    <div>
      <v-header/>
      <h1 class="title">
        C4 Ministry
      </h1>
      <h2 class="subtitle">
        Members
      </h2>
      <section class="cleanup">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12 centertext">
              <p class="all-td">Thanks for volunteering</p>
              <h2>Church Clean Up</h2>
            </div>
          </div>
          <table class="table table-hover">
            <tr>
              <th>Date</th>
              <th>Volunteers</th>
              <th>Status</th>
            </tr>
            <tr>
              <td class="cleanup-date">1/14/17</td>
              <td>David Choi &amp; Jean Sur</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">1/28/17</td>
              <td>Daniel Park &amp; Gloria Park</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">2/11/17</td>
              <td>Paul Chong &amp; Daniel Kim</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">2/25/17</td>
              <td>Daniel Yoon &amp; Josh Yoon</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">3/11/17</td>
              <td>Stephanie Tang &amp; Kevin Sohn</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">3/25/17</td>
              <td>Sandy Phan &amp; Boh Kim</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">4/8/17</td>
              <td>Eunice Yoon &amp; Becky Park</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">4/22/17</td>
              <td>Youth Group</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">5/13/17</td>
              <td>David Choi &amp; Jean Sur</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">5/27/17</td>
              <td>Daniel Park &amp; Gloria Park</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">6/10/17</td>
              <td>Paul Chong &amp; Daniel Kim</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">6/24/17</td>
              <td>Daniel Yoon &amp; Josh Yoon</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">7/8/17</td>
              <td>Stephanie Tang &amp; Kevin Sohn</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">7/22/17</td>
              <td>Sandy Phan &amp; Boh Kim</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">8/12/17</td>
              <td>Eunice Yoon &amp; Becky Park</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">8/26/17</td>
              <td>Youth Group</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">9/9/17</td>
              <td>David Choi &amp; Jean Sur</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">9/23/17</td>
              <td>Daniel Park &amp; Gloria Park</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">10/14/17</td>
              <td>Paul Chong &amp; Daniel Kim</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">10/28/17</td>
              <td>Daniel Yoon &amp; Josh Yoon</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">11/11/17</td>
              <td>Stephanie Tang &amp; Kevin Sohn</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">11/25/17</td>
              <td>Sandy Phan &amp; Boh Kim</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">12/9/17</td>
              <td>Eunice Yoon &amp; Becky Park</td>
              <td class="cleanup-status"></td>
            </tr>
            <tr>
              <td class="cleanup-date">12/23/17</td>
              <td>Youth Group</td>
              <td class="cleanup-status"></td>
            </tr>
          </table>
        </div>
      </section>
      <section class="cleanup" id="cleanup">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12 centertext">
              <p class="all-td">What to clean</p>
              <h2>Cleanup Instructions</h2>
            </div>
          </div>
          <div class="row">
          </div class="col-xs-12">
          <div>
            <ul class="cleanup-list">
              <li>Say hello to our senior pastor, James Park!</li>
              <li>Vacuum carpet upstairs and downstairs</li>
              <li>Wipe down dining tables</li>
              <li>Sweep downstairs floor (kitchen, dining, &amp; sanctuary)</li>
              <li>Mop floor (kitchen, dining, &amp; sanctuary)</li>
              <li>Clean mirrors and toilets in both bathroom</li>
              <li>Wash dishes</li>
              <li>Organize elementary, CCM, and meeting rooms</li>
              <li>Take out trash and replace trash bags</li>
              <li>Wash your hands</li>
              <li>Say goodbye to Pastor James Park!</li>
            </ul>
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

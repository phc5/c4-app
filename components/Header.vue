<template>
  <div class="header">
    <a class="logo">
      <img src="/assets/logo.png">
      <span>C4 Ministry</span>
    </a>
    <ul class="nav">
      <li><nuxt-link to="/" class="nav-link">Home</nuxt-link></li>
      <li><nuxt-link to="/about" class="nav-link">About</nuxt-link></li>
      <li><nuxt-link to="/events" class="nav-link">Events</nuxt-link></li>
      <li><nuxt-link to="/sermons" class="nav-link">Sermons</nuxt-link></li>
      <li><nuxt-link to="/blog" class="nav-link">Blog</nuxt-link></li>
      <li><nuxt-link to="/members" class="nav-link">Members</nuxt-link></li>
      <li><nuxt-link to="/contact" class="nav-link">Contact</nuxt-link></li>
    </ul>
  </div>
</template>

<style lang="scss">
.nav {
  padding: 10px 60px;
  
  li {
    display: inline-block;
    list-style-type: none;
  }
}

.nav-link {
  cursor: pointer;

  &:hover,
  &.active {
    border-bottom: 3px solid #950000;
  }
}
</style>

module.exports = {
  head: { // headers of the page
    title: 'C4 Ministry - California Christ Community Church',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'C4 Ministry, California Christ Community Church, Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', href: './favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Pacifico' },
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }
      // { rel: 'stylesheet', href: './scss/style.scss' }
    ]
  },
  loading: { // customize progress bar color
    color: '#950000'
  },
  build: { // build configuration
    extend(config, ctx) { // run eslint on save
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    'assets/style.scss'
  ]
}

const Nuxt = require('nuxt')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = require('express')()

// Body parser, to access req.body
app.use(bodyParser.json())

// Sessions to create req.session
app.use(session({
  secret: 'super-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}))

// POST /api/login to log in the user and add him to the req.session.authUser
app.post('/api/login', function (req, res) {
  if (req.body.username === 'c4member' && req.body.password === 'c4trinity') {
    req.session.authUser = { username: req.body.username }
    return res.json({ username: req.body.username })
  }
  res.status(401).json({ error: 'Incorrect username or password. Please try again.' })
})

// POST /api/logout to log out the user and remove it from the req.session
app.post('/api/logout', function (req, res) {
  delete req.session.authUser
  res.json({ ok: true })
})

// We instantiate Nuxt.js with the options
const isProd = process.env.NODE_ENV === 'production'
const nuxt = new Nuxt({ dev: !isProd })
// No build in production
const promise = (isProd ? Promise.resolve() : nuxt.build())
promise.then(() => {
  app.use(nuxt.render)
  app.listen(3000)
  console.log('Server is listening on http://localhost:3000')
})
.catch((error) => {
  console.error(error)
  process.exit(1)
})

# C4 Ministry

> C4 Ministry  
> Vue.js/Nuxt.js project  
> Deployed on GitHub served on Netlify  

## Table of Contents

* [To Do](#to-do)
* [Build Setup](#build-setup)
* [Netlify Setup](#netlify-setup)
* [Contributing](#contributing)
* [Changelog](#changelog)
* [Credits](#credits)


## To Do

* [x] Vue.js Nuxt.js implementation on Netlify
* [ ] Import c4ministry.com jQuery app to Vue.js
* [ ] About (Church, Staff, Ministry, Vision, Cell group info)
* [ ] Upcoming events (Google Calendar API)
* [ ] Sermons (Mixcloud API)
* [ ] Blog (Tumblr API)
* [ ] Contact (Google Docs API)
* [ ] Update homepage to be more dynamic as Overview - events, newcomer instructions, get connected section
* [ ] Authentication for Members only page including forms
* [ ] Gallery? (Facebook API)



## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```



## Netlify Setup

Deploy Settings   | c4ministry
---               | ---
Repository        | https://github.com/c4ministry/c4-app
Branch            | master
Build command     | Not set
Publish directory | ./dist



## Contributing

### Make a new branch and push it to GitHub.
```bash
git checkout -b feature_branch_name
git push -u origin feature_branch_name
```

### Updating from Master
```bash
git pull origin master
```

### Merge from master
```bash
git checkout feature_branch_name
git merge master
```

### How to have a fresh install of c4ministry

```sh
# Clone the repository on your machine
git clone https://github.com/c4ministry/c4-nuxt.git

# Head into the local repository
cd c4ministry

# Create a new feature branch
git checkout -b feature/my-new-feature

# Add some work

# Make a beautiful commit, reference related issues if needed
git commit -m "your beautiful commit message"

# Push your branch
git push -u origin feature/my-new-feature

# Then make a pull request!
```



## Changelog

### 0.0.1

* Vue.js Nuxt.js starter template deployed on GitHub served by Netlify



## Credits

* [David Choi](https://github.com/davidgumzchoi)
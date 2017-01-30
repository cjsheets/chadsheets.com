# Personal Portfolio

This site is published to [cjsheets.github.io](cjsheets.github.io) and is the landing page for [chadsheets.com](chadsheets.com).

![](assets/img/site-screenshot.jpg?raw=true)


## Install

First ensure Jekyll and bundler are installed:

```
gem install jekyll bundler

```

Clone this repository and install ruby and npm dependencies:

```
git clone git@github.com:cjsheets/cjsheets.github.io.git
cd cjsheets.github.io
bundle install
npm install
```

## Run

Use Grunt to monitor javascript for changes:

```
grunt -v dev
```

For Jekyll development, simply run:

```
bundle exec jekyll serve
```

Navigate to `http://localhost:4000`



## Technology Stack

This package contains:

| Front-End | Back-End |
| ------- | ------- |
| Jekyll | GitHub Pages |
| JS | Cloudflare |
| HTML5/SCSS | Formspree |
| Grunt | |
 

### Credit

* Based on [mmistakes/so-simple-theme](https://github.com/mmistakes/so-simple-theme)

### To-Do:

* Add carousel for projects

### License

MIT License

[![Analytics](https://cjs-beacon.appspot.com/UA-10006093-3/github/cjsheets/cjsheets.github.io?pixel)](https://github.com/cjsheets/cjsheets.github.io)

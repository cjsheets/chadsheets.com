# Personal Portfolio

This site is published to [cjsheets.github.io](https://cjsheets.github.io) and is the landing page for [chadsheets.com](http://chadsheets.com).

![](assets/img/site-screenshot.jpg?raw=true)

The site provides my updated [resume](assets/doc/ChadSheets-Resume-Extended.pdf), a list of projects 
I've worked on and my contact information. I occasionally post here: [blog.chadsheets.com](https://blog.chadsheets.com)
as well.

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
| Bootstrap | Cloudflare |
| HTML5/SCSS | Formspree |
| Grunt | |
 

### Credit

* Loosely based on [mmistakes/so-simple-theme](https://github.com/mmistakes/so-simple-theme)

### To-Do:

* load images dynamically
* Resolve _config url changing
* Fix mobile view
* Add carousel for projects
* Bottom margin visible in firefox
* Remove unused classes and libs

### License

MIT License

* I would appreciate if you asked before using my background photo

[![Analytics](https://cjs-beacon.appspot.com/UA-10006093-3/github/cjsheets/cjsheets.github.io?pixel)](https://github.com/cjsheets/cjsheets.github.io)

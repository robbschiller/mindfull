## Mindful ##

Mindful is a simple, modular, open source mobile web application meant to serve as an experiment for others wanting to learn about front-end development and the [Parse JS SDK](http://parse.com/docs/js_guide). It's designed to be utility for letting a user quickly jot down an item they lent to a friend and give color coded indications as to the length of time those items have been lent out.

This app makes use of a few different popular JS libraries including

  - [Backbone](http://backbonejs.org)
  - [Underscore](http://underscorejs.org)
  - [Require](http://requirejs.org/)
  - [Grunt](http://gruntjs.com/)

It also uses [Ratchet](http://maker.github.com/ratchet) for framing the mobile UI and [Bower](http://twitter.github.com/bower) for package management. Granted, this is potentially a slightly overloaded dependency scheme for such a small and simple application - But, the point is to learn more about these tools and apply them to solving a small problem.

### Getting Started ###
Make sure you have [Node](http://nodejs.org), [NPM](http://npmjs.org) and [Bower](http://twitter.github.com/bower) installed. You should probably install them in that order as well.

Then, just run this commands -

1. `$ git clone git@github.com:robbschiller/mindful.git` // Clone or Fork this repo
2. `$ npm install` to install your node dependancies to build the server // Install all the dependancies managed through NPM
3. `$ bower install` to install your front-end dependancies to build on top of the server // Install dependancies manged through Bower
4. `$ node server.js` to fire up the app!
5. Go to localhost:3000 in your browser
6. Break some stuff!

If you've got any questions or want to make any changes - Submit a pull request or open an Issue. This is a work in progress!
# Amazium-site [![Build Status](https://travis-ci.org/OwlyStuff/amazium-site.svg?branch=master)](https://travis-ci.org/OwlyStuff/amazium-site)

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Updating NPM dev dependencies

amazium-site uses `npm shrinkwrap` to strictly manage dev dependency versions. This has been done to ensure all installations of this application use exactly the same npm dependencies versions.

To update a dev dependency:

* Run `npm update` - This will update the dependency to latest.
* Run `npm shrinkwrap --dev` - This will update the npm shrinkwrap.
* commit both `packages.json` and `npm-shrinkwrap.json` to repo.

When installing new dependencies you would need to run `npm shrinkwrap --dev` to update the shrinkwrap file.

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

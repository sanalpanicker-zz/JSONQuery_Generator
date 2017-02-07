
## Application UI

![Alt text](https://cloud.githubusercontent.com/assets/6621843/22671199/de1c342a-ec81-11e6-8753-58881a1ed220.png "App screen shot")

## Synopsis

Create a web interface that helps you find a local restaurant based on cuisine type and location using the Yelp API for local search.

You can add any specific features you think are useful, but it should
Allow searching by location
Allow selection type of food (e.g. Pizza, Italian, Tapas, etc.)
Allow sorting by rating or distance

API test console here: https://www.yelp.com/developers/api_console

## Directory Structure

├── _images
|   ├── png
|   └── svg
├── _scripts
|    └── jGen.js
├── _test
|    └── jGen_test.js
├── _styles
|    └── jGen.css
|   
├── _templates
|    └── jGen.html
├── app.js
├── main.js
├── karma.conf.js
├── webpack.config.js
├── package.json
├── bower.json
└── index.html


## Technology Stack

Used Angular 1.5 framework for routing and data binding.
Angular form validations
Jquery for DOM manipulations
Bundling and packaging using webpack
Karma + Jasmine for Unit testing

## Installation

Download the source code and get to the root folder
1) Run bower Installation :  $ bower install
2) Run NPM Installation :  $ npm install
3) Run webpack-dev-server installation : npm install webpack-dev-server -g [use sudo if you have permission issues]

you should have all the libs installed by now

3)start bundling the application :$ npm run bundle
4)Launch the application - real time refresh for CSS and HTML : $ sudo webpack-dev-server --hot --inline --open

5) Application should lauch at http://localhost:8080/.
6) Enjoy generating JSONQuery.

## Tests

Test cases can be run by going to the root and running - Karma Start

## Improvements that can be done in had more time

1)The Query generation can add delete and add button to give more flexibity to rule and group creation
2)More detailed test cases could be written
3)Error handling and validations could be more graceful and detialed
4)Could have a responvie UI.

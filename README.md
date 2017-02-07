
## Application UI

![Alt text](https://cloud.githubusercontent.com/assets/6621843/22671199/de1c342a-ec81-11e6-8753-58881a1ed220.png "App screen shot")

## Synopsis

Given a JSON schema for a query, design and implement a UI to display a form that can be used to create this query. On submit of this form show the final Query JSON on the HTML page below the form.

The form should display the help for the fields as per the description provided in the JSON schema.

Write unit tests to test the validation of the above form.You can use any frontend framework/library such as Angular, Backbone, Bootstrap,jQuery etc.

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

## Improvements that could be done if I had more time

1)The Query generation can add delete and add button to give more flexibity to rule and group creation.
2)More detailed test cases could be written
3)Error handling and validations could be more graceful and detailed
4)Could have a responvie UI.

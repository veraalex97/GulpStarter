##Learn GulpJS & automate your entire process.

<h5>First things first. Let's install some of the things we need.</h5>



Todo:
Fix the markdown

First front end related work using gulp and node to handle compiling of sass and using build tools.
==========

Steps to start a project using gulp:
============
  ...sudo npm install gulp -g ("This install glup globally, sudo is needed.")...
  * npm init
    - This sets up the package.json file. ("author", "version", "license", etc)
  * npm install gulp --save-dev
    - This adds gulp in the package.json dependencies.
  * npm install
  * Now set up the folder structure. (Usually goes the following way)
    - app
      - css/
      - images/
      - js/
      - fonts/
      - scss/
      - index.html
    - dist/
    - gulpfile.js
    - node_modules/
    - package.json
  * In this structure, we can use the app folder for development purposes. while `dist` as in "distribution" to contain our optimized files for the production site. All the code goes in `app.`

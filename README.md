#Learn GulpJS, automate your front end process then push to production using Express/NodeJS :)

<h4>First things first. Let's install some of the things we need.</h4>
=======

###Requirements:
<p>NodeJS with npm</p>
<b>Mac</b>
```bash
brew install node
```
<b>Linux (Ubuntu, Linux Mint, Debian)</b>
```bash
sudo apt install nodejs
```
<b>Windows</b>
<br>
You can go ahead and download NodeJS from the link [here](https://nodejs.org/en/download/).

<h5>You could start by cloning this repo but that would take the fun away from this tutorial. The point of this is to learn how to do it on your own.</h5>

<p>First things first. Let's install some of the things we need.</p>

For Yarn users

```bash
npm init
```


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

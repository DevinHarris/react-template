# React Template starter.

> In this starter template, you'll find an easy to get started way of creating React apps. The reason I created this is because while working with React itself is great, the setup and configuration is not.

> This template is easily customizable and you can add and remove things to fit your project.

## Techologies in this stack:

1. React
2. Webpack
3. NPM Scripts:
   1. `"build": "webpack"`: Compiles your code down to code Modern Browsers understand.
   2. `"pro-build"`: "webpack -p": Same as `"build": "webpack"`, but builds for production
   3. `"dev"`: "webpack-dev-server": Spins up Webpack Dev Server.
   4. `"ext-dev"`: "webpack-dev-server --host 0.0.0.0": Spins up Weback Dev Server, but can be accessed from external devices connected to your network.
4. Sass (SCSS)
5. Yarn

## Usage and Installation:

1. Simply run the `yarn` command from your command line.
2. After the installation is finished, run the `dev` NPM script using `yarn dev` and wait for Webpack to compile.
3. This should open a new tab or window in your browser and you should see the `<Test />` component compiled with the Success message from `Test.js`.
4. You can now delete `Test.js` and remove the `import` statement from `app.js` and start creating your own React Components!

# Lifeline

### Getting Started

Clone the repo, install Node.js modules and run `npm start`:

```
$ git clone -o Lifeline -b master --single-branch \
      https://github.com/didjoman/Lifeline.git MyApp
$ cd MyApp
$ npm install
$ npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) in your browser.

### How to Test

The unit tests are powered by [chai](http://chaijs.com/) and [mocha](http://mochajs.org/).

```
$ npm test
```

### How to Deploy

```shell
$ npm run deploy                # Deploys the project to GitHub Pages
```

Alternatively, you can build a production release to manually deploy to S3, Firebase, Netlify, and other static hosts. Simply run the command below and copy the generated `build` folder to your static host.

```shell
$ npm run build release         # Build production release 
```

### Screenshot

![alt tag](https://cloud.githubusercontent.com/assets/631898/13892698/73f84c3c-ed59-11e5-81ec-4af604879bba.png

# 👘  express-japan-travel

![The sky comming in to Japan](public/images/air.jpg)

<br>

Previous masters app. Breathing new life into it as an **Express.JS** app. 

It's a proof-of-concept web app, masquerading as a travel company.

Yes, I took the photo - no filters. Rad.

<br>

## 👘  Why clone me?

1. You want to check out my *mad-skillz*;
1. You want to learn by example about...
* MVC,
* Express routing,
* Templating with partials,
* Testing,
* ES6 syntax,
* linting,
* etc.

<br>

## 👘  Install

1. `git clone <this_url> && cd <repo_name>`
1. `npm install`

<br>

## 👘  Run

`node -r esm index.js`

Implementation of ES6 modules in Express requires esm be passed to node.

<br>

## 👘  Run with google maps

`GMAPKEY=<your-key> node -r esm index.js`

Inject your key into Node's environment variables.

See [Google Maps Platform > Web > Maps JavaScript API > Get an API Key](https://developers.google.com/maps/documentation/javascript/get-api-key)

<br>

## 👘  Run tests

`./node_modules/mocha/bin/mocha --require esm --exit`

Implementation of ES6 modules in Express requires esm be passed to mocha.

<br>

## 👘  Lint and fix

`./node_modules/.bin/eslint  . --fix`

<br>

## 👘  Status

In progress...

* to ES6
* to MVC
* to template engine ([mustache-express](https://github.com/bryanburgers/node-mustache-express#readme))
* isolate dependencies
* [SuperTest](https://github.com/visionmedia/supertest#readme),  [Mocha](https://mochajs.org/), [Cheerio](https://github.com/cheeriojs/cheerio)
* to CI/CD

<br>

## 👘  Environment

* node 13.5
* express 6.13.4

### Dependencies

````
"dependencies": {
    "esm": "^3.2.25",
    "express": "^4.17.1",
    "mocha": "^7.0.0",
    "mustache": "^4.0.0",
    "mustache-express": "^1.3.0"
  },
  "devDependencies": {
    "cheerio": "^1.0.0-rc.3",
    "eslint": "^6.8.0",
    "eslint-config-google": "^0.14.0",
    "supertest": "^4.0.2"
  }
  ````

### Template dependencies
* jquery-3.3.1 (TODO: upgrade)
* bootstrap 4.1.3 (TODO: upgrade)

<br>

<hr>

rach@rach
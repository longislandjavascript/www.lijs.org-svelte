
# lijs.org

[https://www.lijs.org](https://www.lijs.org)

[![Netlify Status](https://api.netlify.com/api/v1/badges/cdc3bef1-1a65-4072-95d8-cfe20e0befd0/deploy-status)](https://app.netlify.com/sites/lijs-org/deploys)

### The official website of the Long Island JavaScript Group

### This site is built with
[![Svelte Logo][svelte-logo]](https://svelte.dev)


[svelte-logo]: https://res.cloudinary.com/gojutin/image/upload/w_100/v1556492206/lijs.org/svelte-logo.png "Svelte Logo"

### and powered by
[![Netlify Logo][netlify-logo]](https://www.netlify.com)

[netlify-logo]: https://res.cloudinary.com/gojutin/image/upload/w_100/v1556501674/lijs.org/netlify-logo.png "Netlify Logo"

It is deployed to the custom domain [www.lijs.org](https://www.lijs.org) via a Netlify continuous deployment GitHub integration.

Pushing to the `master` branch automatically runs a new build and triggers a new deployment.

The Meetup data is fetched from the Meetup API via a Netlify Lambda function and the contact form is hosted with a Netlify form.

## Usage
You will need to have `node` and `npm` installed on your computer.

**Recommended:**
```sh
git clone git@github.com:lijs-meetup/lijs.org-svelte.git
```

To start the development server:

```sh
npm run develop
```

Open your browser and visit [http://localhost:5000](http://localhost:5000)

To start the Netlify Dev development server:

```sh
npm run dev
```

The Netlify CLI will assign a port and provide the link in the terminal once compiled.


### Available Scripts

| Script        | Description           
| ------------- |:-------------
| `develop`     | Compiles the source code and starts the development server in watch mode..
| `dev`         | Compiles the source code and starts the Netlify Dev server. 
| `autobuild`   | Compiles the source code in watch mode.
| `start`       | Serves the compiled production code.
| `start:dev`   | Serves the compiled code in dev mode.


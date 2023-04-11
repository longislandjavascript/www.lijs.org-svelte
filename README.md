
# DEPRECATED- www.lijs.org

Built with Svelte. 

The site is deployed to the custom domain [www.lijs.org](https://www.lijs.org) via a [Netlify continuous deployment GitHub integration](https://www.netlify.com/docs/continuous-deployment/). Deployments are triggered automatically by pushing to the `master` branch.

All API data (Meetup, PageSpeed Insights) is fetched via [Netlify Lambda functions](https://www.netlify.com/docs/functions/). Most API URLs are saved as a Netlify environment variable, which is passed down to the client during development via [Netlify Dev](https://www.netlify.com/products/dev/).

The contact form is managed by [Netlify Forms](https://www.netlify.com/docs/form-handling/).

## Usage
You will need to have `node` and `npm` installed on your computer.

```sh
git clone git@github.com:lijs-meetup/lijs.org-svelte.git
cd lijs.org-svelte
npm install
```

To start the development server:

```sh
npm run develop
```

Open your browser and visit [http://localhost:5000](http://localhost:5000)


To start the [Netlify Dev](https://www.netlify.com/products/dev/) development server:

```sh
npm run dev
```

The Netlify CLI will assign a port and provide the link in the terminal once compiled.

When using Netlify Dev, the Netlify environment will be locally available, allowing access to lambda functions and environment variables. 

### Available Scripts

| Script        | Description           
| ------------- |:-------------
| `develop`     | Compiles the source code and starts the development server in watch mode..
| `dev`         | Compiles the source code and starts the Netlify Dev server. 
| `autobuild`   | Compiles the source code in watch mode.
| `start`       | Serves the compiled production code.
| `start:dev`   | Serves the compiled code in dev mode.


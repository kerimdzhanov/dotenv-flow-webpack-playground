# dotenv-flow-webpack playground

This project is a **dotenv-flow-webpack** plugin playground
that is created for you to try out and play with the functionality of the plugin.


## Installation

##### 1. Pull the project source from GitHub:

```sh
$ git clone https://github.com/kerimdzhanov/dotenv-flow-webpack-playground.git
```

…or:

```sh
$ git clone git@github.com:kerimdzhanov/dotenv-flow-webpack-playground.git
```

##### 2. Install dependencies

Using npm:

```sh
$ npm install
```

Using yarn:

```sh
$ yarn
```


## Project files

There are basically just a few files to take a look: 

1. `webpack.config.js` – with a basic webpack configuration (generated with _webpack scaffold_) and **dotenv-flow-webpack** plugin integration.
2. `package.json` – with basic dev dependencies (including webpack and **dotenv-flow-webpack** plugin) and two basic build/run scripts.
3. _`.env*` files_ – that contains particular environment variables to checks basic _dotenv-flow_'s loading and overwriting behavior.
4. `src/index.ts` – example playground script to try out environment variables loading and tree-shaking behavior.


## Running and building the app

To run the app in development mode (that loads environment variables from a set of `.env[.local]` + `.env.development[.local]`), run:

```sh
$ npm start
```

…or:

```sh
$ yarn start
```

To try out the build of app in production mode (that loads variables from a set `.env[.local]` + `.env.production[.local]` appropriately), run:

```sh
$ npm build
```

…or:

```sh
$ yarn build
```

Once built, check out the `dist/` folder to see how tree-shaking and environment variables replacement works.

## License

Licensed under [MIT](LICENSE) © 2023 Dan Kerimdzhanov

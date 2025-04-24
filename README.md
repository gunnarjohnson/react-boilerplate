# React Boilerplate

**A modern React boilerplate with Babel + PostCSS + Webpack.** This boilerplate enables quick and easy [React](https://reactjs.org/) app development with [Webpack 5](https://webpack.js.org/), and supports next generation JavaScript and CSS via [Babel](https://babeljs.io/) and [PostCSS](https://postcss.org/).

## Table of Contents

- [Installation](#installation)
- [Commands](#commands)
- [Support](#support)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- [Node.js >= 18.12.0](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (included with Node.js)

### Get Boilerplate

Choose from the following options:

- **Clone**
  - Create your repository: https://github.com/your-name/your-repo.git
  - Clone boilerplate repository: `git clone https://github.com/gunnarjohnson/react-boilerplate.git your-directory`
  - Navigate to your directory: `cd your-directory`
  - Remove origin: `git remote rm origin`
  - Add new origin: `git remote add origin https://github.com/your-name/your-repo.git`
  - Push project to your repository: `git push origin main` (or `git push origin master`)
- [**Download**](https://github.com/gunnarjohnson/react-boilerplate/archive/master.zip)
- [**Fork**](https://github.com/gunnarjohnson/react-boilerplate/fork)

### Install Dependencies

```sh
npm install
```

Installs the dependencies in the local `node_modules` folder.

## Commands

**Compile and Minify for Production**

```sh
npm run build
```

Builds the app in Webpack's production mode to the `dist` folder. Rename this directory to `docs` if you intend to publish the app with GitHub Pages.

**Compile and Hot-Reload for Development**

```sh
npm run dev
```

Runs the app in Webpack's development mode using `webpack-dev-server`. Open [http://localhost:8080/](http://localhost:8080/) to view the app in the browser.

**Format with [Prettier](https://prettier.io/)**

```sh
npm run format
```

**Lint with [ESLint](https://eslint.org/)**

```sh
npm run lint
```

**Run Tests with [Jest](https://jestjs.io/)**

```sh
# Run tests once without watching for changes
npm run test

# Run tests and watch for changes
npm run test:watch
```

## Support

Ideas? Questions? Please [open an issue](https://github.com/gunnarjohnson/react-boilerplate/issues/new).

## Contributing

Please contribute using [GitHub Flow](https://guides.github.com/introduction/flow/).

- [Fork repository](https://github.com/gunnarjohnson/react-boilerplate/fork)
- Create your feature branch: `git checkout -b feature/fooBar`
- Commit your changes: `git commit -am 'Add some fooBar'`
- Push to the branch: `git push origin feature/fooBar`
- [Open a pull request](https://github.com/gunnarjohnson/react-boilerplate/compare)

## License

React Boilerplate is open source software [licensed as MIT](https://github.com/gunnarjohnson/react-boilerplate/blob/master/LICENSE.txt).

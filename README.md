# React Boilerplate

**A modern React boilerplate with Babel + PostCSS + Webpack.** This boilerplate enables quick and easy [React](https://reactjs.org/) app development with [Webpack 4](https://webpack.js.org/), and supports next generation JavaScript and CSS via [Babel](https://babeljs.io/) and [PostCSS](https://postcss.org/).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- [Node.js >= 14.0.0](https://nodejs.org/)
- npm (included with Node.js)

### Get Boilerplate

Choose from the following options:

- **Clone**
  - Create your repository: https://github.com/your-name/your-repo.git
  - Clone boilerplate repository: `git clone https://github.com/gunnarjohnson/react-boilerplate.git your-directory`
  - Navigate to your directory: `cd your-directory`
  - Remove origin: `git remote rm origin`
  - Add new origin: `git remote add origin https://github.com/your-name/your-repo.git`
  - Push project to your repository: `git push origin master`
- [**Download**](https://github.com/gunnarjohnson/react-boilerplate/archive/master.zip)
- [**Fork**](https://github.com/gunnarjohnson/react-boilerplate/fork)

### Install Dependencies

```
npm install
```

Installs the dependencies in the local `node_modules` folder.

### Modify Code Editor Settings (Optional)

#### Visual Studio Code

- Install the [postcss-language extension](https://marketplace.visualstudio.com/items?itemName=mhmadhamster.postcss-language)
- Create `.vscode` folder in working directory: `/react-boilerplate/.vscode`
- Create `settings.json` file in `.vscode` folder: `/react-boilerplate/.vscode/settings.json`
- Add the following to `settings.json`:
  ```
  {
    "files.associations": {
      "*.css": "postcss"
    }
  }
  ```

## Usage

### Development

```
npm run dev
```

Runs the app in Webpack's development mode using `webpack-plugin-serve`. Open [http://localhost:8080/](http://localhost:8080/) to view the app in the browser.

### Deployment

```
npm run build
```

Builds the app in Webpack's production mode to the `dist` folder. Rename this directory to `docs` if you intend to publish the app with GitHub Pages.

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

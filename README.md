| Statements | Branches | Functions | Lines |
| -----------|----------|-----------|-------|
| ![Statements](https://img.shields.io/badge/Coverage-88.59%25-yellow.svg "Make me better!") | ![Branches](https://img.shields.io/badge/Coverage-86.36%25-yellow.svg "Make me better!") | ![Functions](https://img.shields.io/badge/Coverage-86.49%25-yellow.svg "Make me better!") | ![Lines](https://img.shields.io/badge/Coverage-93.1%25-brightgreen.svg "Make me better!") |


This project demonstrates my experiments on a [Create React App](https://github.com/facebook/create-react-app) with [TypeScript](https://www.typescriptlang.org/) and [Redux](https://redux.js.org/) in order to get to a more production worthy app. This app makes REST calls for listing and searching [Star Wars](https://swapi.co/) characters. This code shows how you could organize your Components and the Redux infrastructure in a more "real world" app.


## Goals

- Add testing, test coverage reporting, and approach 100% test coverage.
- Use a scalable file structure, centered around feature/domain.
- Maintain small files and classes.
- Leverage TypeScript's type system as much as possible.

### Testing

- Added [airbnb's Enzyme](https://github.com/airbnb/enzyme) and [Test Renderer](https://en.reactjs.org/docs/test-renderer.html) for component testing
- Added test coverage (`$ yarn test:coverage`) using the [Facebook docs](https://facebook.github.io/create-react-app/docs/running-tests)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:coverage`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

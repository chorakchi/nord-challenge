# Frontend Coding Challenge

Deployed on:
https://nord-challenge.netlify.app/

Storybook Deployed on:
https://nord-storybook.netlify.app/

test coverage:
https://nord-test-coverage.netlify.app/

## Before running

In order to use the 'financialmodelingprep' API you need an `Authentication token`, which you will put in the environment variables (`.env.local`) of the project.

[Adding a custom environment variables](https://nextjs.org/docs/basic-features/environment-variables)

After signing up to `financialmodelingprep.com` and copying the token set it in `.env.local` for `REACT_APP_AUTHORIZATION_TOKEN`
then install by `yarn` and then run with `yarn dev` in yuor local

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the .next.\
Your app is ready to be deployed!

### `yarn sb`
you can run storybook wiht this.
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

## read more
https://nord-storybook.netlify.app/

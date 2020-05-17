#### This project was created with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Scripts

### `npm install`

This command installs a package, and any packages that it depends on.<br />

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Deploy Your React App To Heroku

### Requirements:
* [Node / NPM](https://nodejs.org/)
* [Git](https://git-scm.com/downloads)
* [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)


### Step 1: Sign up For Heroku
**Visit [Heroku](https://www.heroku.com/) for free hosting**

This step explains itself, we need to sign up for Heroku before we can do any deployment. So head over to Heroku and sign up. Once you signed up make sure you head over to your email and confirm your account.


### Step 2: Setup React App
Open up your React app and open up your package.json file. If your using create-react-app we’re going to add a new object called engines. Inside of our engines object, we need to specify the versions for npm and node. To do this open up your terminal and type in:

### `npm -v`
Press enter

### `node -v`
Press enter

```
{
  "name": "contact-manager",
  "version": "0.1.0",
  "private": true,
  "engines": {
    "npm": "6.12.0",
    "node": "12.13.0"
  },
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^1.2.28",
    "@fortawesome/free-regular-svg-icons": "^5.13.0",
    "@fortawesome/free-solid-svg-icons": "^5.13.0",
    "@fortawesome/react-fontawesome": "^0.1.9",
    "@reduxjs/toolkit": "^1.3.6",
    ...
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
  ...
}
```
Your versions may be different than mine, but that's fine. Once you specified your engine versions save your file.


### Step 3: Create Heroku Git Repository
With your terminal still open navigate to your React app folder and change directory into it. Now we need to connect our project to Heroku. If you haven’t already installed the Heroku CLI. To make sure it’s installed correctly run this command:

### `heroku --version`

You should see your Heroku CLI version. Once that is installed we need to setup up Heroku git repository by running these commands:

1. heroku login (Enter your Heroku credentials)
1. git init
1. git add .
1. git commit -m “initial commit”
1. heroku create (You should see two links after running this command. Copy the second one)
1. git remote add heroku PASTE THE LINK YOU JUST COPIED
1. git push heroku master

Once you run the last command Heroku will start to run some tests on your app. If everything goes right you should see a successful deploy message. Now you’re able to navigate to your app by running:

### `heroku open`

Anytime you make changes to your app and want to re-deploy the only commands you need to run are:

1. git add .
1. git commit -m “any message goes here”
1. git push heroku master
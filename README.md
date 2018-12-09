[![npm version](https://badge.fury.io/js/react-native-template-andrewm.svg)](https://badge.fury.io/js/react-native-template-andrewm)
[![npm downloads](https://img.shields.io/npm/dt/react-native-template-andrewm.svg)](https://www.npmjs.com/package/react-native-template-andrewm)
![](https://img.shields.io/github/issues-raw/andrewmarmion/react-native-template-andrewm.svg)
![](https://img.shields.io/github/last-commit/andrewmarmion/react-native-template-andrewm.svg)
![](https://img.shields.io/github/languages/top/andrewmarmion/react-native-template-andrewm.svg)
![](https://img.shields.io/npm/l/react-native-template-andrewm.svg)


# `react-native-template-andrewm`

```
react-native init NewApp --template andrewm && node NewApp/setup.js
```

Instructions in `app/*` directories.

# Finishing Setup
Make sure you have detox, storybook and filamentcli on your machine. If you have these already then you can run `setup.js`.

## setup.js
Run `node setup.js` this will update the `package.json` so that it has the required updated scripts and values for the following dependencies.

## Detox
Detox should be set up on your machine see [Detox - Getting Started](https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md) for more details on how to install it. At time of writing you will only need to do step one as the `setup.js` and the inital template setup take care of the remaining steps.

To run detox:

`npm run detox_ios` 

`npm run detox_android`

Note you must have Genymotion installed to use detox on Android and you may have to update the device name. Once you have run your emulator you can get its device name by running `adb devices`. 

In this template Detox uses Jest. End to end tests are in the `./e2e` folder. A sample working test exists so run one of the above commands to see it in action.

## Storybook
This template uses storybook to edit components. 

To use storybook go to `./index.js` and comment out the line 

`import MainAppProvider from './app/index';` 

and uncomment 

`import Storybook from './storybook';` 

Save and reload your app to see the storybook view of the components. 

## Filament support

This repository supports Filament CLI when using the `filament-jordandrn` and the `filament-andrewmrn` package. Currently this repository is set to use `filament-andrewmrn`.

### Steps to install
1. Install `filament` globally with `npm i -g filamentcli`

   Steps 2 & 3 are handled by the template setup and the `setup.js`.

2. Install `filament-andrewmrn` in the project with `npm i filament-andrewmrn`
3. Link the package to your project by modifying `package.json` and adding the following to the top level of the file:
  ```
  "config": {
    "filament": {
      "package": "filament-andrewmrn"
    }
  }
  ```

You'll now be able to use filament commands to generate screens, components, network  and redux controllers:

- `filament new component <componentName>`
- `filament new screen <screenName>`
- `filament new network <networkControllerName>`
- `filament new redux <reduxName>`

# Testing and Linting

### Testing is provided via Jest. 

`npm run test`        This will run jest in verbose mode. 

`npm run test_clear`  This will clear the jest cache.

`npm run test_update` This will update any snapshots you have used.

Tests are stored in `./__tests__`. Jest matches on `*.test.js` this is because detox matches on the *.spec.js and confusions and errors will arise if they are not separate. 

A sample working test exists so run `npm run test` to see it in action.

### Linting is provided by Eslint

`npm run lint` will run the command `eslint *.js ./ --fix`.

# Thanks

Many thank to jordand who inspired this template. This template borrows from the jordand [template](https://github.com/JordanDuncan/react-native-template-jordand). 

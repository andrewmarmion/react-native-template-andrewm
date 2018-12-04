const fs = require('fs');
let json = require('./package.json');

let { scripts, name } = json;

console.log('Adding missing scripts');
scripts.storybook = 'storybook start';
scripts.test = 'jest --verbose';
scripts.test_update = 'jest -u';
scripts.test_clear = 'jest --clearCache';
scripts.lint = 'eslint *.js ./ --fix';
scripts.detox_ios = 'detox build -c ios.sim.debug && detox test -c ios.sim.debug';
scripts.detox_android = 'detox build -c android.emu.debug && detox test -c android.emu.debug';

json.scripts = scripts;

json.config = {
  'filament': {
    'package': 'filament-jordandrn'
  }
};

console.log('Setting jest');
// this sets the transform and the testMatch so that it doesn't interfere with detox
json.jest = {
  'preset': 'react-native',
  'transform': {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js'
  },
  'testMatch': [
    '<rootDir>/__tests__/**/*.test.js?(x)',
    '<rootDir>/app/**/*.test.js'
  ]
};

console.log('Setting detox');
json.detox = {
  'configurations': {
    'ios.sim.debug': {
      'binaryPath': `ios/build/Build/Products/Debug-iphonesimulator/${name}.app`,
      'build': `xcodebuild -project ios/${name}.xcodeproj -scheme ${name} -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build -UseModernBuildSystem=NO`,
      'type': 'ios.simulator',
      'name': 'iPhone 7'
    },
    'android.emu.debug': {
      'binaryPath': 'android/app/build/outputs/apk/debug/app-debug.apk',
      'build': 'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..',
      'type': 'android.emulator',
      'name': 'Nexus_5X_API_27_x86'
    }
  },
  'test-runner': 'jest'
};

console.log('Setting rnpm');
json.rnpm = {
  'assets': [
    'app/assets/fonts'
  ]
};

fs.writeFile('package.json', JSON.stringify(json, null, 2), 'utf8', (err) => {
  if (err) throw err;
  console.log('complete');
});

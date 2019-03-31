/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry,YellowBox} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);

// RN < 0.52
console.ignoredYellowBox = ['Warning: ReactNative.createElement'];
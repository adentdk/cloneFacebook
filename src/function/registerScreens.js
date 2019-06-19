import {Navigation} from 'react-native-navigation';

import App from '../../App';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Error404 from '../screens/Error404';

export function registerScreens() {
    Navigation.registerComponent(`App`, () => App);
    Navigation.registerComponent(`Login`, () => Login);
    Navigation.registerComponent(`Home`, () => Home);
    Navigation.registerComponent(`PageNotFound`, () => Error404);
}
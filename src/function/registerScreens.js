import {Navigation} from 'react-native-navigation';

import App from '../../App';
import Login from '../screens/Login';
import Logout from '../screens/Logout';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Friends from '../screens/Friends';
import CreateNewFeed from '../screens/CreateNewFeed';
import DetailsFeed from '../screens/DetailsFeed';
import Error404 from '../screens/Error404';

export function registerScreens() {
    Navigation.registerComponent(`App`, () => App);
    Navigation.registerComponent(`Login`, () => Login);
    Navigation.registerComponent(`Logout`, () => Logout);
    Navigation.registerComponent(`Home`, () => Home);
    Navigation.registerComponent(`Menu`, () => Menu);
    Navigation.registerComponent(`Friends`, () => Friends);
    Navigation.registerComponent(`CreateNewFeed`, () => CreateNewFeed);
    Navigation.registerComponent(`DetailsFeed`, () => DetailsFeed);
    Navigation.registerComponent(`PageNotFound`, () => Error404);
}
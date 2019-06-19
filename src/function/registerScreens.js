import {Navigation} from 'react-native-navigation';

import App from '../../App';
import Login from '../screens/Login';
import NewsFeeds from '../screens/NewsFeeds';
import Error404 from '../screens/Error404';

export function registerScreens() {
    Navigation.registerComponent(`App`, () => App);
    Navigation.registerComponent(`Login`, () => Login);
    Navigation.registerComponent(`NewsFeed`, () => NewsFeeds);
    Navigation.registerComponent(`PageNotFound`, () => Error404);
}
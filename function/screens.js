import {Navigation} from 'react-native-navigation';

import App from '../App';
import Login from '../screens/Login';
import News from '../screens/News';
import Error404 from '../screens/Error404';

export function registerScreens() {
    Navigation.registerComponent(`App`, () => App);
    Navigation.registerComponent(`Login`, () => Login);
    Navigation.registerComponent(`NewsFeed`, () => News);
    Navigation.registerComponent(`PageNotFound`, () => Error404);
}


Navigation.setDefaultOptions({
    topBar: {
      visible: false,
      animate: false,
    },
    layout : {
      backgroundColor : '',
    }
  
  });
  
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
          stack: {
              id: 'App',
              children: [
                {
                  component: {
                      name: "Login"
                  }
                },
              ]
          }
      }
    });
  });



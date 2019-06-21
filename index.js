import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/function/registerScreens';

registerScreens();


Navigation.setDefaultOptions({
    
    topBar: {
      visible: false,
      drawBehind: true,
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



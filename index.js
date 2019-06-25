import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/function/registerScreens';

registerScreens();


Navigation.setDefaultOptions({
    topBar: {
      visible: false,
      drawBehind: true,
      height:0,
      paddingTop: -20,
      searchBarHiddenWhenScrolling:true,
      topMargin:-20,
    },
    layout : {
      backgroundColor : 'transparent',
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



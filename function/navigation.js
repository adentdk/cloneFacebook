import { Navigation } from "react-native-navigation";

export const goToAuth = () => Navigation.setRoot({
    root: {
        bottomTabs: {
            id: 'BottomTabsId',
            children: [
                {
                    component: {
                        name: 'Login',
                        options: {
                            bottomTab: {
                                fontSize:12,
                                text: 'Login',
                            }
                        }
                    },
                },
                {
                    component: {
                        name : 'SignUp',
                        options: {
                            bottomTab: {
                                text: 'SignUp',
                                fontSize: 12,
                            }
                        }
                    },
                },

            ]
        }
    }
});

export const goToHome = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'App',
            children: [
                {
                    component: {
                        name: 'NewsFeed',
                    }
                }
            ]
        }
    }
});
import { AppRegistry,Dimensions } from 'react-native';
import App from './App';
import First from './First'
import Second from './Second'
import {DrawerNavigator} from 'react-navigation'
const MyApp = DrawerNavigator({
    Home: {
      screen: App,
    },
    First: {
      screen: First,
    },
    Second: {
        screen: Second,
      },
  },{
    drawerWidth:Dimensions.get('window').width/2
  });

AppRegistry.registerComponent('DrawerNavigation', () => MyApp);

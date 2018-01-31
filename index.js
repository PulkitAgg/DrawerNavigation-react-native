import { AppRegistry,Dimensions } from 'react-native';
import App from './src/Components/App';
import First from './src/Components/First'
import Second from './src/Components/Second'
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

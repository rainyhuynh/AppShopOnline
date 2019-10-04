import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromLeft } from 'react-navigation-transitions';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';


const StackNavigator = createStackNavigator({
    Authentication: { screen: Authentication },
    ChangeInfo: { screen: ChangeInfo },
    OrderHistory: { screen: OrderHistory },
    Main: { screen: Main }
}, {
        initialRouteName: 'Main',
        transitionConfig: () => fromLeft(1000),
        headerMode: 'none'
});

export default createAppContainer(StackNavigator);

//const app = createAppContainer(StackNavigator);





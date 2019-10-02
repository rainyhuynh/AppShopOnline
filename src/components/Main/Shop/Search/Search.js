import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromLeft } from 'react-navigation-transitions';
import SearchView from './SearchView'
import ProductDetail from './../ProductDetail/ProductDetail'

const StackNavigator = createStackNavigator({
    SearchView: { screen: SearchView },
    ProductDetail: { screen: ProductDetail }
    }, {
        initialRouteName: 'SearchView',
        transitionConfig: () => fromLeft(1000),
        headerMode: 'none'
});


export default createAppContainer(StackNavigator);
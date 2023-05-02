import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartScreen from '../../../Screen/Cart/Cart.screen'
import FoodScreen from '../../../Screen/Food/Food.screen'


const Stack = createNativeStackNavigator()

const CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="CartScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="CartScreen" component={CartScreen} />
            <Stack.Screen name="FoodScreen" component={FoodScreen} />
        </Stack.Navigator>
    )
}

export default CartNavigator

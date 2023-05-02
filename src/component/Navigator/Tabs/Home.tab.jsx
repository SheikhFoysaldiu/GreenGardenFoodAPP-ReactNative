import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../../../Screen/Home/Home.screen'
import FoodScreen from '../../../Screen/Food/Food.screen'
import CartScreen from '../../../Screen/Cart/Cart.screen'


const Stack = createNativeStackNavigator()

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="FoodScreen" component={FoodScreen} />
            <Stack.Screen name="CartScreen" component={CartScreen} />

        </Stack.Navigator>
    )
}

export default HomeNavigator

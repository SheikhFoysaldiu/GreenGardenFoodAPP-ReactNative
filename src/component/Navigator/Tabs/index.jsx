import { StyleSheet, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'


import theme from '../../../theme'
import HomeNavigator from './Home.tab'
import CartNavigator from './Cart.tab'
import { useDispatch, useSelector } from "react-redux";
import HomeScreen from '../../../Screen/Home/Home.screen'
import CartScreen from '../../../Screen/Cart/Cart.screen'
const Tab = createBottomTabNavigator()

const TabsNavigator = () => {
    const cart = useSelector(state => state.cart);
    const totalQuantity = cart.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const quantity = totalQuantity ? totalQuantity : 0;
    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Cart') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    }

                    // update the cart icon badge count based on the number of items in the cart
                    if (route.name === 'Cart' && quantity > 0) {
                        return (
                            <View style={{ width: 24, height: 24, margin: 5 }}>
                                <Ionicons name={iconName} size={size} color={color} />
                                <View style={{
                                    position: 'absolute',
                                    backgroundColor: '#014421',
                                    borderRadius: 10,
                                    width: 20,
                                    height: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    right: -10,
                                    top: -5,
                                }}>
                                    <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>
                                        {quantity}
                                    </Text>
                                </View>
                            </View>
                        );
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name='Home' component={HomeNavigator} />
            <Tab.Screen name='Cart' component={CartNavigator} />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: theme.colors.white,
        borderTopWidth: 0,
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowColor: theme.colors.black,
        shadowOpacity: 0.1,
        shadowRadius: 24,
        elevation: 5
    },
    tabBarLabel: {
        fontFamily: theme.fonts.type.semiBold
    }
})

export default TabsNavigator

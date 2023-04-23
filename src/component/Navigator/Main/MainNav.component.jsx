import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../../Screen/Home/Home.screen";
import CartScreen from "../../../Screen/Cart/Cart.screen";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";

import FoodScreen from "../../../Screen/Food/Food.screen";
import { useDispatch, useSelector } from "react-redux";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='FoodItem' component={FoodScreen} />
            <Stack.Screen name='CartStack' component={CartScreen} />
        </Stack.Navigator>
    );
}


function CartStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='CartScreen' component={CartScreen} />
            <Stack.Screen name='FoodItemScreen' component={FoodScreen} />
        </Stack.Navigator>
    );
}

function MainTabNavigator() {
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
            <Tab.Screen name='Home' component={HomeStack} />
            <Tab.Screen name='Cart' component={CartStack} />

        </Tab.Navigator>
    );
}

export default MainTabNavigator;

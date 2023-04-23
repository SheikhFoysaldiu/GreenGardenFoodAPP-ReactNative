import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { decrementItem, incrementItem, setCartItems } from '../../redux/action/Cart.action';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const cartItems = cart.cartItems
    const navigation = useNavigation();


    const dispatch = useDispatch();

    const handleDecrement = useCallback((item) => {
        const selectedItem = cart.cartItems.find(cartItem => cartItem.id === item.id);
        const quantity = selectedItem ? selectedItem.quantity : 0;

        if (quantity > 0) {
            dispatch(decrementItem(item));
        }
    }, [dispatch, cart]);

    const handleIncrement = useCallback((item) => {
        const selectedItem = cartItems.find(cartItem => cartItem.id === item.id);
        const quantity = selectedItem ? selectedItem.quantity : 0;

        if (quantity < item.stock) {
            dispatch(incrementItem(item));
        }
    }, [cartItems, dispatch]);



    const handleRemove = useCallback((id) => {
        const newCartItems = cartItems.filter((item) => item.id !== id);
        dispatch(setCartItems(newCartItems));
    }, [cartItems, dispatch]);

    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    };

    const handleCheckout = () => {
        // handle checkout logic here
    };


    return (
        <>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Cart</Text>
                </View>
                <View style={styles.cartItems}>
                    {
                        cartItems.length === 0 ? (
                            <View style={styles.emptyContainer}>
                                <Text style={styles.emptyText}>Your cart is empty</Text>
                            </View>
                        ) : (
                            <View style={styles.cartItems}>

                                {
                                    cartItems.map((item) => (
                                        <TouchableOpacity style={styles.cartItem} key={item.id} onPress={() => navigation.navigate("FoodItemScreen", { item })}>
                                            <Image source={{ uri: item.image }} style={styles.itemImage} />
                                            <View style={styles.itemDetails}>
                                                <Text style={styles.itemTitle}>{item.name}</Text>
                                                <Text style={styles.itemPrice}>${item.price}</Text>
                                                <View style={styles.quantityContainer}>
                                                    <TouchableOpacity onPress={() => handleDecrement(item)}>
                                                        <Ionicons name="remove-circle-outline" size={24} color="#014421" />
                                                    </TouchableOpacity>
                                                    <Text style={styles.quantity}>{item.quantity}</Text>
                                                    <TouchableOpacity onPress={() => handleIncrement(item)}>
                                                        <Ionicons name="add-circle-outline" size={24} color="#014421" />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <TouchableOpacity onPress={() => handleRemove(item.id)}>
                                                <Ionicons name="trash-outline" size={24} color="#014421" />
                                            </TouchableOpacity>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        )

                    }





                </View>


            </ScrollView>
            <View style={styles.totalContainer}>
                <Text style={{ fontSize: 12 }}>Estimated Cooking Time : 10 Min</Text>
                <Text style={styles.totalText}>Subtotal: {calculateTotal().toFixed(2)} TAKA</Text>
                <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
                    <Text style={styles.checkoutButtonText}>Checkout</Text>

                </TouchableOpacity>

            </View></>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#014421"
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    cartItems: {
        flex: 1,
        padding: 10
    },
    cartItem: {
        flexGrow: 1,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#014421"
    },
    itemImage: {
        width: 80,
        height: 80,
        marginRight: 10
    },
    itemDetails: {
        flex: 1
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5
    },
    itemPrice: {
        fontSize: 16,
        color: "#777",
        marginBottom: 5
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    quantity: {
        fontSize: 16,
        marginLeft: 10,
        marginRight: 10
    },
    totalContainer: {
        height: 110,
        borderTopWidth: 1,
        borderTopColor: "#014421",
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    totalText: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },
    checkoutButton: {
        backgroundColor: "#014421",
        padding: 10,
        borderRadius: 5
    },
    checkoutButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    emptyText: {
        fontSize: 20,
        fontWeight: "bold"
    }

});

export default Cart;


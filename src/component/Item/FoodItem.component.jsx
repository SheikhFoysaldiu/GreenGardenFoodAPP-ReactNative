import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementItem, incrementItem, removeFromCart } from '../../redux/action/Cart.action';

const FoodItem = ({ item }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const selectedItem = useMemo(() => {
        return cart.cartItems.find(cartItem => cartItem.id === item.id);
    }, [cart, item]);
    const quantity = selectedItem ? selectedItem.quantity : 0;

    const handleDecrement = useCallback(() => {
        if (quantity > 0) {
            dispatch(decrementItem(item));
        }
    }, [dispatch, item, quantity]);

    const handleIncrement = useCallback(() => {
        if (quantity < item.stock) {
            dispatch(incrementItem(item));
        }
    }, [dispatch, item, quantity]);


    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('FoodItem', { item })} >

            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{`$${item.price.toFixed(2)}`}</Text>
                <View style={styles.stockContainer}>
                    <Icon name="cart-outline" size={20} color="#888" />
                    <Text style={styles.stock}>{`${item.stock} left in stock`}</Text>
                </View>
            </View>


            <View style={styles.actions}>
                <TouchableOpacity style={styles.button} onPress={() => handleDecrement(item)}>
                    <Icon name="minus" size={20} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.count}>{quantity}</Text>
                <TouchableOpacity style={styles.button} onPress={() => handleIncrement(item)}>
                    <Icon name="plus" size={20} color="#fff" />
                </TouchableOpacity>
            </View >
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#014421',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    details: {
        flex: 1,
        marginHorizontal: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 14,
        color: '#888',
    },
    stockContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    stock: {
        marginLeft: 5,
        fontSize: 14,
        color: '#888',
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#014421',
        borderRadius: 20,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    count: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
});


export default FoodItem;

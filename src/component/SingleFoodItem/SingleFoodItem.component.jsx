import React, { useCallback, useMemo, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { decrementItem, incrementItem } from '../../redux/action/Cart.action';

const SingleFoodItem = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [continueReading, setContinueReading] = useState(false);
    const item = route.params.item
    console.log(route.params)

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
        <View
            style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={"#000"} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{item.name}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.row}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>{item.price.toFixed(2)} Taka</Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.ratingContainer}>
                        <Ionicons name="star" size={16} color={"#014421"} />
                        <Text style={styles.rating}>{item.rating}</Text>
                    </View>
                    <View style={styles.caloriesContainer}>
                        <Ionicons name="flame" size={16} color={"#014421"} />
                        <Text style={styles.calories}>{item.calories} cal</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <Ionicons name="timer" size={16} color={"#014421"} />
                        <Text style={styles.time}>{item.time} min</Text>
                    </View>



                </View>


                <View style={{ flex: 1 }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ flexGrow: 1 }}>
                        <Text style={styles.description}>
                            {
                                item?.description?.length < 150 &&
                                item.description.substring(0, item.description?.length)


                            }


                        </Text>
                        {
                            item.description?.length > 150 &&
                            <>
                                {
                                    !continueReading &&
                                    <>
                                        <Text style={styles.description}>
                                            {item.description.substring(0, 150)}...
                                        </Text>
                                        <TouchableOpacity style={styles.moreButton}>
                                            <Text style={styles.moreText} onPress={
                                                () => {
                                                    setContinueReading(true);
                                                }
                                            }>Continue reading</Text>
                                        </TouchableOpacity>
                                    </>
                                }
                                {
                                    continueReading &&
                                    <Text style={styles.description}>
                                        {item.description.substring(0, item.description.length)}
                                    </Text>
                                }
                            </>
                        }
                    </ScrollView>
                </View>

                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={() => handleDecrement(item)}>
                        <Ionicons name="remove-circle" size={24} color={"#fff"} />
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{quantity}</Text>
                    <TouchableOpacity onPress={() => handleIncrement(item)}>
                        <Ionicons name="add-circle" size={24} color={"#fff"} />
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 20,
        paddingHorizontal: 16,
        color: '#fff',
    },
    headerTitle: {
        marginLeft: 16,
        fontSize: 20,
        fontWeight: 'bold',

    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 12,
    },
    image: {
        width: '90%',
        height: 200,
        borderRadius: 16,
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    row: {

        flexDirection: 'row',

        alignItems: 'center',
        marginTop: 8,
        marginBottom: 4,
    },
    ratingContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    caloriesContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    timeContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    name: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#014421',
    },
    rating: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#014421',
    },
    calories: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#014421',
    },
    time: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#014421',
    },
    description: {
        flex: 1,
        position: 'relative',
        fontSize: 16,
        lineHeight: 24,

    },
    moreButton: {
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 16,
    },
    moreText: {
        color: '#014421',
        fontWeight: 'bold',
    },
    quantityContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 16,
        marginTop: 16,
        marginBottom: 32,
        backgroundColor: '#014421'
    },
    quantity: {
        marginHorizontal: 16,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        borderRadius: 28,
        backgroundColor: '#014421',
        marginHorizontal: 16,
        marginBottom: 32,
    },
    addText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
});
export default SingleFoodItem;
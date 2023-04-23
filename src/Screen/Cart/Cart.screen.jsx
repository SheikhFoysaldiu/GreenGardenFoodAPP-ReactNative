import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import Cart from "../../component/Cart/Cart.component";
import { Platform } from "react-native";


const CartScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Cart
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? 20 : 0,
    },
});

export default CartScreen;

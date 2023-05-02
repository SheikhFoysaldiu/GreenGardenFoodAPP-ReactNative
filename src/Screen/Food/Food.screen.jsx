import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import SingleFoodItem from '../../component/SingleFoodItem/SingleFoodItem.component';
import { Platform } from "react-native";
const FoodScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <SingleFoodItem navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? 20 : 0,
    }

})

export default FoodScreen;

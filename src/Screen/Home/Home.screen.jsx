import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Header from '../../component/Header/Header.component';
import Hero from '../../component/Hero/Hero.component';
import MenuList from '../../component/Menu/FoodManuList.component';
import SearchBar from '../../component/Search/Search.component';
import { Platform } from 'react-native';
const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Hero />
            <SearchBar />
            <MenuList />
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === "android" ? 20 : 0,
    }
})

export default HomeScreen;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Carousel from '../Carousel/Carousel.component';


const Hero = ({ seatNumber, date }) => {
    return (
        <View style={styles.container}>
            <Carousel />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 70,
        width: '100%',
        marginTop: 2,
    },

});

export default Hero;

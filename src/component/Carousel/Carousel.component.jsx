import React, { useState, useRef, useEffect } from 'react';
import { View, Image, Dimensions, ScrollView, TouchableOpacity, Text } from 'react-native';

const { width } = Dimensions.get('window');

const images = [
    { uri: 'https://source.unsplash.com/random/300x300/?food' },
    { uri: 'https://source.unsplash.com/random/300x300/?drink' },
    { uri: 'https://source.unsplash.com/random/300x300/?snack' },
    { uri: 'https://source.unsplash.com/random/300x300/?juice' },

];

const Carousel = () => {
    const scrollViewRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            scrollViewRef.current.scrollTo({
                x: (activeIndex) * width,
                y: 0,
                animated: true,
            });
            setActiveIndex((activeIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(intervalId);
    }, [activeIndex]);

    const onScrollEnd = (event) => {
        const offset = event.nativeEvent.contentOffset.x;
        setActiveIndex(Math.round(offset / width));
    };

    const onPressMenuItem = (index) => {
        scrollViewRef.current.scrollTo({
            x: width * index,
            y: 0, animated: true
        });
        setActiveIndex(index);
    };

    return (
        <View style={{ height: 200, padding: 5, }}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={onScrollEnd}
            >
                {images.map((image, index) => (
                    <Image key={index} source={image} style={{ width, height: 200, }} resizeMode="cover" />
                ))}
            </ScrollView>

        </View>
    );
};

export default Carousel;

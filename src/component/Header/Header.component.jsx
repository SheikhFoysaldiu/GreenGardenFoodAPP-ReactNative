import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Image
                    style={styles.logo}
                    source={require('../../dummy/Images/Green_Garden.png')}
                />
                {/* <Text style={styles.logo}>Green Garden Restaurant</Text> */}
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={styles.profileIcon}
                    source={require('../../dummy/Images/Food1.jpg')}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowColor: '#014421',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 1,
        backgroundColor: '#fff',
    },
    logo: {
        width: 100,
        height: 40,
        resizeMode: 'contain',
        padding: 10,
    },
    profileIcon: {
        width: 40,
        height: 40,
        borderRadius: 120
    },
});

export default Header;

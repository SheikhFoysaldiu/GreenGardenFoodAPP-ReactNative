import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
    const [search, setSearch] = React.useState('');
    console.log(search);
    return (
        <View style={styles.searchContainer}>
            <Ionicons name="ios-search" size={20} style={styles.searchIcon} />
            <TextInput
                value={search}
                onChangeText={(text) => setSearch(text)}
                placeholder="Search for food and drinks"
                style={styles.searchInput}
                placeholderTextColor="#9b9b9b"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 20,
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 20,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
});

export default SearchBar;

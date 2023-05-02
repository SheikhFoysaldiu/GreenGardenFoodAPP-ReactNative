import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MenuData from "../../dummy/Data/MenuData.js";
import FoodItem from "../Item/FoodItem.component.jsx";

const MenuList = ({ navigation }) => {
    const [selectedMenu, setSelectedMenu] = useState(MenuData[0].id);

    const handleMenuPress = (menu) => {
        setSelectedMenu(menu);
    };

    const RenderItem = ({ item }) => {
        console.log(item);
        return <FoodItem navigation={navigation} item={item} />;
    };

    return (
        <>
            <View style={styles.menuContainer}>
                <View style={styles.menuHeader}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {MenuData.map((item) => (
                            <TouchableOpacity
                                key={item.id}
                                style={[
                                    styles.menuButton,
                                    {
                                        backgroundColor:
                                            selectedMenu === item.id ? "#014421" : "#FFF",
                                    },
                                ]}
                                onPress={() => handleMenuPress(item.id)}
                            >
                                <Text
                                    style={[
                                        styles.menuButtonText,
                                        { color: selectedMenu === item.id ? "#FFF" : "#000" },
                                    ]}
                                >
                                    {item.category}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                <FlatList
                    data={MenuData.find((menu) => menu.id === selectedMenu).items}
                    keyExtractor={(item) => item.id}
                    renderItem={RenderItem}
                    contentContainerStyle={styles.menuList}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    menuHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    menuButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#014421",
        marginRight: 10,
    },
    menuButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    menuList: {
        paddingTop: 10,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        backgroundColor: "#014421",
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    itemText: {
        marginLeft: 10,
        fontSize: 16,
    },
    itemRight: {},
});

export default MenuList;

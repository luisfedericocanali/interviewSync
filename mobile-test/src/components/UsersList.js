import { FlatList, View, Text, Pressable } from "react-native";
import React from 'react';
import { heightPercentageToDP } from "react-native-responsive-screen";
export const UsersList = ({ data, navigation }) => {
    const renderItem = ({ item }) => {
        return (
            <Pressable onPress={()=> navigation.navigate('Details', { item })}>
                <View style={{
                    padding: heightPercentageToDP(2),
                    width: '90%', alignItems: 'center', justifyContent: 'center', borderRadius: 5,
                    borderColor: 'black', borderWidth: 1, alignSelf: 'center', marginVertical: heightPercentageToDP(1)
                }}>
                    <Text style={{ fontSize: 14, fontWeight: '600' }}>
                        {item.name}
                    </Text>
                </View>
            </Pressable>
        )
    }
    return (
        <View>
            <FlatList
                data={data.users}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
            />
        </View>
    )
}

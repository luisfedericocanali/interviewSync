import {ActivityIndicator, FlatList, View, Text} from "react-native";
import React from 'react';
export const UsersList = ({data})=>{
 const renderItem = ({ item }) => {
    return (
        <View>
        <Text>
         {item.name}
        </Text>
        </View>
    )
  }
    return(
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
        />
    )
}

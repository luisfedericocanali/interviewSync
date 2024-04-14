import React, { useEffect } from 'react';
import Container from "../../components/Container";
import {View, FlatList,Text, Pressable} from "react-native"
import {Loading} from "../../components/Loading";
import UsersList from "../../components/UsersList"
import {useQuery} from "@tanstack/react-query";
const HomeScreen = ({ navigation }) => {
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://dev.api.syncremote.co/api/v1/admin/users').then((res) =>
                res.json(),
            ),
    })
    const renderItem = ({ item }) => {
        return (
        <Pressable onPress={()=> navigation.navigate('Details', {item})}>
                <View style={{width: '90%', alignItems: 'center', justifyContent: 'center', borderRadius: 5, borderColor: 'black', borderWidth: 1, alignSelf:'center'}}>
                    <Text style={{fontSize: 14, fontWeight: '600'}}>
                        {item.name}
                    </Text>
                </View>
            </Pressable>
        )
      }
    const dataArray = [data]
    if (isPending){
        return(
            <Loading/>
        )
    }
    return (
        <Container>
            <View>
            <FlatList
                       data={data.users}
                       renderItem={renderItem}
                       keyExtractor={(item)=> item._id}
                   />
            </View>
        </Container>
    )
};

export default HomeScreen;

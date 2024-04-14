import React, { useEffect } from 'react';
import Container from "../../components/Container";
import {View, FlatList,Text, Pressable} from "react-native"
import {Loading} from "../../components/Loading";
import {UsersList} from "../../components/UsersList"
import {useQuery} from "@tanstack/react-query";
const HomeScreen = ({ navigation }) => {
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://dev.api.syncremote.co/api/v1/admin/users').then((res) =>
                res.json(),
            ),
    })
    if (isPending){
        return(
            <Loading/>
        )
    }
    if (error) {
        return (
            Alert.alert('Error', error)
        )
    }
    return (
        <Container>
            <Text style={{
                fontSize: 15, fontWeight:'600', textAlign:'center'
            }}>
                List of Users
            </Text>
            <View>
                <UsersList data={data} navigation={navigation}/>
            </View>
        </Container>
    )
};

export default HomeScreen;

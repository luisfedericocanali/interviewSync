import React from 'react';
import Container from "../../components/Container";
import { Text, View } from 'react-native'
import Separator from "../../components/Separator"

const DetailsScreen = ({ route }) => {
    const { item } = route?.params
    return (
        <Container>
            <View style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 18 }}>
                    {item.name}
                </Text>
                <Separator height />
                {item.interest &&
                    <View style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <Text> Interests</Text>
                        {item.interest.map((item) => {
                            return (
                                <View key={item}>
                                    <Text>
                                        {item}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>
                }
            </View>
        </Container>
    )
};

export default DetailsScreen;

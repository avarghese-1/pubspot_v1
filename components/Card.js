//Creates a card component for use on the initial venue and truck screens for navigation to other screens
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'

const Card = props => {
    return (
    <TouchableOpacity onPress={props.onClick}>
        <View style = {styles.card}>
            <Text>{props.title}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOpacity: .26,
        shadowOffset: {width:0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20
    }
})

export default Card
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const EventInfoScreen = props => {
    return(
        <View style = {styles.screen}>
            <Text>The Event Info Screen for Trucks and Venues</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default EventInfoScreen
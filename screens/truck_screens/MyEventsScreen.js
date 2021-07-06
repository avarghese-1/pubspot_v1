import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const MyEventsScreen = props => {
    return(
        <View style = {styles.screen}>
            <Text>The My Events Screen for Trucks</Text>
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

export default MyEventsScreen
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const AddEventScreen = props => {
    return(
        <View style = {styles.screen}>
            <Text>The Add Event Screen for Venues</Text>
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

export default AddEventScreen
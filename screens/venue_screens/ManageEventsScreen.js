import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const ManageEventsScreen = props => {
    return(
        <View style = {styles.screen}>
            <Text>The Manage Events Screen for Venues</Text>
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

export default ManageEventsScreen
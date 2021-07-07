import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const BidScreen = props => {
    return(
        <View style = {styles.screen}>
            <Text>The Bid Events Screen for Trucks</Text>
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


export default BidScreen
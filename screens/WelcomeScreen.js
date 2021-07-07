import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const WelcomeScreen = props => {
    return(
        <View style = {styles.screen}>
            <Text>Event Info Page</Text>
             <Button 
                title='Event Info'
                onPress={() => props.navigation.navigate('Event Info')}
            />
            <Text>Venue Pages:</Text>
            <Button 
                title='Venue Home Screen'
                onPress={() => props.navigation.navigate('Venue Home')}
            />
            <Button 
                title='Add Event Screen'
                onPress={() => props.navigation.navigate('Add Event Screen')}
            />
            <Button 
                title='Event Decision Screen'
                onPress={() => props.navigation.navigate('Event Decisions')}
            />
            <Button 
                title='Manage Events Screen'
                onPress={() => props.navigation.navigate('Manage Events')}
            />
            <Text>Truck Pages:</Text>
            <Button 
                title='Truck Home Screen'
                onPress={() => props.navigation.navigate('Truck Home')}
            />
            <Button 
                title='Bid Screen'
                onPress={() => props.navigation.navigate('Bid Screen')}
            />
             <Button 
                title='My Events Screen'
                onPress={() => props.navigation.navigate('My Events')}
            />
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

export default WelcomeScreen
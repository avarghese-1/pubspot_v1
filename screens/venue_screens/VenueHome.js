import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native'
import Card from '../../components/Card';

const VenueHome = props => {
    return(
        <View>
        <Card 
            title='Post New Event'
            onClick={() => props.navigation.navigate('Add Event Screen')}
        />
        <Card 
            title='Manage Events'
            onClick={() => props.navigation.navigate('Manage Events')}
        />

        </View>
        
    )
}

const styles = StyleSheet.create({

})

export default VenueHome
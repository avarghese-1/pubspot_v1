import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native'
import Card from '../../components/Card';

const TruckHome = props => {
    return(
        <View>
            <Card 
                title='Bid On Events'
                onClick={() => props.navigation.navigate('Bid Screen')}
            />
            <Card
                title='My Events'
                onClick={() => props.navigation.navigate('My Events')}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default TruckHome
/**
 * E-Book-Reader APP
 * 
 * Books Component
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { Colors } from '@shared'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { withNavigation } from 'react-navigation'

import Best from './Best'

const AUTOBIOGRAPHY = [
    {
        _id: '9038746890',
        image: '',
    },
    {
        _id: '7846537e8',
        image: '',
    },
    {
        _id: '298768954',
        image: '',
    },
    {
        _id: '46789087',
        image: '',
    },
    {
        _id: '17657890',
        image: '',
    },
    {
        _id: '3987657886',
        image: '',
    },
]

class Books extends React.Component {

    _keyExtractor = (item, index) => `${index}`

    _renderItem = ({ item }) => (
        <Best
            key={item._id}
            handleOnPress={() => this.props.navigation.navigate('Detail')}
        />
    )

    render() {
        return (
            <View>
                <Text style={styles.title}>Best of Autobiography</Text>
                <FlatList
                    data={AUTOBIOGRAPHY}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    scrollEventThrottle={16}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View >
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        color: Colors.congoBrown,
        marginTop: 5,
        marginBottom: 20,
    },
})

export default withNavigation(Books)

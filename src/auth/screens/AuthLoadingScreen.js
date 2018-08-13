/**
 * E-Book-Reader APP
 * 
 * AuthLoadingScreen
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { Colors } from '@shared'
import React, { Component } from 'react'
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View } from 'react-native'

class AuthLoadingScreen extends Component {

    constructor(props) {
        super(props)
        this._bootstrapAsync()
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const customer = await AsyncStorage.getItem('customer')
        if (!customer) {
            return this.props.navigation.navigate('Auth')
        }

        const { token } = JSON.parse(customer)

        this.props.navigation.navigate(token ? 'App' : 'Auth')
    }

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle='dark-content'
                    backgroundColor={Colors.snow}
                />
                <ActivityIndicator color={Colors.titanWhite} size='large' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.blueViolet,
    }
})

export default AuthLoadingScreen

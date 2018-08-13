/**
 * E-Book-Reader APP
 * 
 * WelcomeNavigation
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'

import { LoginScreen, RegisterScreen, WelcomeScreen } from '../screens'

export default createStackNavigator(
    {
        Welcome: { screen: WelcomeScreen },
        Login: { screen: LoginScreen },
        Register: { screen: RegisterScreen },
    },
    {
        initialRouteName: 'Welcome',
        headerMode: 'none',
        navigationOptions: () => ({
            headerTitleStyle: {
                fontWeight: 'normal',
            },
        })
    }
)

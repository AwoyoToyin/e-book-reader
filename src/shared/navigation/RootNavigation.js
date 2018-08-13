/**
 * E-Book-Reader APP
 * 
 * RootNavigation
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { DrawerNavigation } from '@app'
import { AuthLoadingScreen, AuthStackNavigation } from '@auth'
import React, { Component } from 'react'
import { createSwitchNavigator } from 'react-navigation'

export const SwitchNavigator = createSwitchNavigator(
    {
        AuthLoading: { screen: AuthLoadingScreen },
        Auth: AuthStackNavigation,
        App: DrawerNavigation,
    },
    {
        initialRouteName: 'AuthLoading',
        headerMode: 'float',
        mode: 'modal',
    }
)

export default class RootNavigation extends Component {
    componentDidMount() {
        // this._notificationSubscription = this._registerForPushNotifications()
    }

    componentWillUnmount() {
        // this._notificationSubscription && this._notificationSubscription.remove()
    }

    _registerForPushNotifications() {
        // Send our push token over to our backend so we can receive notifications
        // You can comment the following line out if you want to stop receiving
        // a notification every time you open the app. Check out the source
        // for this function in api/registerForPushNotificationsAsync.js
        registerForPushNotificationsAsync()

        // Watch for incoming notifications
        this._notificationSubscription = Notifications.addListener(this._handleNotification)
    }

    _handleNotification = ({ origin, data }) => {
        console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`)
    }

    render() {
        const navigationPersistenceKey = __DEV__ ? '0001NavigationState' : null
        return (
            <SwitchNavigator
                // persistenceKey={navigationPersistenceKey}
            // renderLoadingExperimental={() => <ActivityIndicator />}
            />
        )
    }
}

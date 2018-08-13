/**
 * E-Book-Reader APP
 * 
 * App
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { RootNavigation } from '@shared'
import { AppLoading, Font } from 'expo'
import { Root } from 'native-base'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'

import setupApollo from './src/graphql/setupApollo'

export default class App extends React.Component {
    state = {
        isLoadingComplete: false,
        client: '',
    }

    componentDidMount = async () => {
        try {
            const client = await setupApollo()
            this.setState({ client })
        } catch (e) {
        }
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            // Asset.loadAsync([
            //     require('./assets/images/robot-dev.png'),
            //     require('./assets/images/robot-prod.png'),
            // ]),
            Font.loadAsync({
                // This is the font that we are using for our tab bar
                // ...Icon.Ionicons.font,
                // 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
                'Roboto': require('native-base/Fonts/Roboto.ttf'),
                'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            }),
        ])
    }

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error)
    }

    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true })
    }

    render() {
        if (!this.state.client ||
            (!this.state.isLoadingComplete &&
            !this.props.skipLoadingScreen)
        ) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            )
        } else {
            return (
                <ApolloProvider client={this.state.client}>
                    <View style={styles.container}>
                        {Platform.OS === 'ios' && <StatusBar
                            barStyle='dark-content'
                        />}
                        <RootNavigation />
                    </View>
                </ApolloProvider>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})

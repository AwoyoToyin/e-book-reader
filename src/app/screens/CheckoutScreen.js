/**
 * E-Book-Reader APP
 * 
 * CheckoutScreen
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { Ionicons } from '@expo/vector-icons';
import { Colors, Layout, Touchable } from '@shared';
import React, { Component } from 'react';
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native';

import { Header } from '../components';

const SCREEN_WIDTH = Layout.window.width

export default class CheckoutScreen extends Component {

    state = {
        refreshing: false,
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: `Checkout`,
            headerLeft: (
                <Touchable
                    background={Touchable.Ripple(Colors.blueViolet, true)}
                    style={[styles.headerItem, styles.headerIcon]}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name='ios-arrow-back' size={25} color={Colors.congoBrown} />
                </Touchable>
            ),
        }
    }

    _onRefresh = () => {
        this.setState({ refreshing: true })
        setTimeout(() => {
            this.setState({ refreshing: false })
        }, 1500)
    }

    render() {

        return (
            <View style={styles.container}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                >
                    <View style={styles.content}>
                    </View>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.snow,
    },
    headerItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerIcon: {
        paddingVertical: 9,
        paddingHorizontal: 20,
    },
    content: {
        flex: 1,
        padding: 20,
    },
})

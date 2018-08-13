/**
 * E-Book-Reader APP
 * 
 * HomeScreen
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { Feather } from '@expo/vector-icons'
import { Colors, Touchable } from '@shared'
import React, { Component } from 'react'
import { RefreshControl, ScrollView, StatusBar, StyleSheet, View } from 'react-native'

import { Books, HomeCarousel, Showcase } from '../components'

export default class HomeScreen extends Component {

    state = {
        refreshing: false,
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: `Home`,
            headerLeft: (
                <Touchable
                    background={Touchable.Ripple(Colors.blueViolet, true)}
                    style={[styles.headerItem, styles.menuIcon]}
                    onPress={() => navigation.toggleDrawer()}
                >
                    <Feather name='grid' size={20} color={Colors.congoBrown} />
                </Touchable>
            ),
            headerRight: (
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}>
                    <Touchable
                        background={Touchable.Ripple(Colors.blueViolet, true)}
                        style={[styles.headerItem, styles.menuIcon]}
                        onPress={() => navigation.navigate('Cart')}
                    >
                        <View style={{
                            position: 'relative',
                        }}>
                            <Feather name='shopping-cart' size={20} color={Colors.congoBrown} />
                            <View style={styles.cartHasItems}></View>
                        </View>
                    </Touchable>
                    <Touchable
                        background={Touchable.Ripple(Colors.blueViolet, true)}
                        style={[styles.headerItem, styles.menuIcon]}
                        onPress={() => navigation.navigate('Search')}
                    >
                        <Feather name='search' size={20} color={Colors.congoBrown} />
                    </Touchable>
                </View>
            )
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
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor={Colors.blueViolet}
                />

                {/** Content */}
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                >
                    <View style={styles.content}>
                        <HomeCarousel />

                        <View style={{
                            paddingLeft: 20,
                            paddingTop: 20,
                        }}>
                            {/** Showcase */}
                            <Showcase />

                            {/** Best of Autobiography */}
                            <Books />
                        </View>
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
    menuIcon: {
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    cartHasItems: {
        position: 'absolute',
        top: 0,
        left: 18,
        width: 7,
        height: 7,
        backgroundColor: Colors.blueViolet,
        borderRadius: 50,
    },
    content: {
        flex: 1,
        paddingTop: 20,
    },
})


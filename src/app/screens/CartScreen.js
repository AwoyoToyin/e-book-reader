/**
 * E-Book-Reader APP
 * 
 * CartScreen
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { Foundation, Ionicons } from '@expo/vector-icons';
import { Colors, Touchable } from '@shared';
import React, { Component } from 'react';
import { FlatList, Platform, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

import { CartItem, CartTotal } from '../components';

export default class CartScreen extends Component {

    state = {
        refreshing: false,
        cartItems: [
            {
                _id: '1287654678',
                image: '',
                title: 'Wings of fire by APJ',
                price: '$50.00',
                qty: '1',
                short_description: 'An Autobiography of APJ Abdul Kalam1999 and Arun Tiwari',
            },
            {
                _id: '3287654678',
                image: '',
                title: 'Wings of fire by APJ',
                price: '$30.00',
                qty: '3',
                short_description: 'An Autobiography of APJ Abdul Kalam1999 and Arun Tiwari',
            },
        ]
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Checkout Cart',
            headerLeft: (
                <Touchable
                    background={Touchable.Ripple(Colors.blueViolet, true)}
                    style={[styles.headerItem, styles.headerIcon]}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name='ios-arrow-back' size={25} color={Colors.congoBrown} />
                </Touchable>
            ),
            headerRight: (
                <View style={{
                    marginRight: 20,
                }}>
                    <Text style={{
                        fontSize: 18,
                        color: Colors.blueViolet,
                    }}>$68.1</Text>
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

    _increaseQty = (index) => {
        this.setState((state) => {
            const cartItems = state.cartItems
            const cartItem = cartItems[index]

            cartItem.qty = `${(+cartItem.qty + 1)}`
            cartItems[index] = cartItem
            return { cartItems }
        })
    }

    _decreaseQty = (index) => {
        this.setState((state) => {
            const cartItems = state.cartItems
            const cartItem = cartItems[index]

            const prevQty = +cartItem.qty

            if (prevQty > 1) {
                cartItem.qty = `${(prevQty - 1)}`
                cartItems[index] = cartItem
                return { cartItems }
            }
        })
    }

    _removeItem = (index) => {
        this.setState((state) => {
            const cartItems = state.cartItems.filter((cartItem, i) => i !== index)
            return { cartItems }
        })
    }

    _keyExtractor = (item, index) => `${index}`

    _renderItem = ({ item, index }) => (
        <CartItem
            key={item._id}
            item={item}
            index={index}
            increaseQty={this._increaseQty}
            decreaseQty={this._decreaseQty}
            removeItem={this._removeItem}
        />
    )

    render() {

        return (
            <View style={styles.container}>
                {
                    (this.state.cartItems.length > 0) ?
                        (
                            <View style={{ flex: 1 }}>
                                <ScrollView
                                    refreshControl={
                                        <RefreshControl
                                            refreshing={this.state.refreshing}
                                            onRefresh={this._onRefresh}
                                        />
                                    }
                                >
                                    <View style={styles.content}>

                                        {/** Cart Items */}
                                        <View style={{ padding: 20, }}>
                                            <FlatList
                                                data={this.state.cartItems}
                                                extraData={this.state}
                                                keyExtractor={this._keyExtractor}
                                                renderItem={this._renderItem}
                                                scrollEventThrottle={16}
                                            />
                                        </View>

                                        {/** Cart Total */}
                                        <CartTotal />

                                    </View>
                                </ScrollView>

                                <Touchable
                                    background={Touchable.Ripple(Colors.titanWhite, false)}
                                    style={styles.cartFooter}
                                    onPress={() => { }}
                                >
                                    <Text style={styles.checkoutText}>Proceed to Checkout</Text>
                                </Touchable>
                            </View>
                        ) : (
                            <View style={[styles.content, styles.emptyCart]}>
                                <Foundation name='trees' size={250} color={Colors.blueViolet} />
                                <Text style={styles.emptyCartText}>Your cart is currently empty</Text>
                                <Text style={styles.emptyCartAdd}>Add a few items to your cart to checkout</Text>
                            </View>
                        )
                }
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
        paddingBottom: 70,
    },
    cartFooter: {
        ...Platform.select({
            ios: {
                height: 70,
            },
            android: {
                height: 60,
            },
        }),
        backgroundColor: Colors.blueViolet,
        position: 'absolute',
        zIndex: 10,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkoutText: {
        color: Colors.titanWhite,
        fontSize: 14,
    },
    emptyCart: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 0,
    },
    emptyCartText: {
        fontSize: 16,
        color: Colors.congoBrown,
        marginVertical: 5,
    },
    emptyCartAdd: {
        fontSize: 14,
        color: Colors.congoBrown,
    },
})

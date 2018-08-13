/**
 * E-Book-Reader APP
 * 
 * DetailScreen
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { Feather, Ionicons } from '@expo/vector-icons'
import { Colors, Layout, Touchable } from '@shared'
import { Button, Input, Item } from 'native-base'
import React, { Component } from 'react'
import { Platform, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'

import { AdditionalInfo, AddReview, ProductImage } from '../components'

const SCREEN_WIDTH = Layout.window.width
const BOOK_WIDTH = (SCREEN_WIDTH - 50) * 0.40

const VIEWING = {
    image: '',
    title: 'Wings of fire by APJ',
    rating: 4.9,
    price: '$50.00',
    specialPrice: '$45.99',
    qty_in_stock: 5,
    in_stock: true,
    short_description: 'An Autobiography of APJ Abdul Kalam1999 and Arun Tiwari',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    reviews: [],
}

const REVIEWS = [
    {
        _id: '1287654678',
        name: 'Lorem Ipsum',
        rating: 5,
        comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
    },
    {
        _id: '97652167833',
        name: 'APJ Abdul Kalam1999',
        rating: 4.5,
        comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
    {
        _id: '56987657844',
        name: 'Lorem Ipsum',
        rating: 3.5,
        comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
        _id: '85673298736',
        name: 'Lorem Ipsum',
        rating: 5,
        comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
    },
    {
        _id: '28879457789',
        name: 'Lorem Ipsum',
        rating: 5,
        comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
    },
]

export default class DetailScreen extends Component {

    state = {
        qty: '1',

        // Review
        submittedRating: 0,
        submittedComment: '',
        refreshing: false,
        reviewModalVisible: false,
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: `${VIEWING.title}`,
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
                <Touchable
                    background={Touchable.Ripple(Colors.blueViolet, true)}
                    style={[styles.headerItem, styles.headerIcon, { paddingVertical: 15, }]}
                    onPress={() => navigation.navigate('Cart')}
                >
                    <View style={{
                        position: 'relative',
                    }}>
                        <Feather name='shopping-cart' size={20} color={Colors.congoBrown} />
                        <View style={styles.cartHasItems}></View>
                    </View>
                </Touchable>
            )
        }
    }


    _setReviewData = (value) => {
        this.setState(value)
    }

    _setReviewModalVisible = (visible) => {
        this.setState({ reviewModalVisible: visible })
    }

    _onRefresh = () => {
        this.setState({ refreshing: true })
        setTimeout(() => {
            this.setState({ refreshing: false })
        }, 1500)
    }

    _incrementQty = () => {
        const qty = `${+this.state.qty + 1}`
        this.setState({ qty })
    }

    _decreaseQty = () => {
        const prevQty = +this.state.qty
        if (prevQty > 1) {
            const qty = `${prevQty - 1}`
            this.setState({ qty })
        }
    }

    _handleQtyChanged = (value) => {
        let qty = +value
        if (qty >= 0) {
            qty = `${qty}`
            this.setState({ qty })
        }
    }

    _addToCart = () => {
        const qty = +this.state.qty
        if (qty < 1) {
            alert(`You can not ${qty} quantity of this item`)
            return false
        }

        alert(`${qty} quantity of this item added to cart`)
    }

    render() {

        return (
            <View style={styles.container}>

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
                        <View style={styles.buyDetails}>
                            <ProductImage style={{ width: BOOK_WIDTH, }} />
                            <View style={styles.detailsInfo}>
                                <View style={styles.titleRatings}>
                                    <Text numberOfLines={1} ellipsizeMode='tail' style={[styles.title]}>{VIEWING.title}</Text>
                                    <View style={styles.rating}>
                                        <Text style={styles.ratingText}>{VIEWING.rating}</Text>
                                    </View>
                                </View>
                                <Text numberOfLines={3} ellipsizeMode='tail' style={styles.short_description}>{VIEWING.short_description}</Text>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.qtyLeft}>Only {VIEWING.qty_in_stock} left in stock</Text>

                                <View style={styles.prices}>
                                    <Text style={[styles.price, (VIEWING.specialPrice) ? styles.oldPrice : {}]}>{VIEWING.price}</Text>
                                    {
                                        VIEWING.specialPrice &&
                                        <Text style={[styles.price, styles.newPrice]}>{VIEWING.specialPrice}</Text>
                                    }
                                </View>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.freeShipping}>FREE Shipping on eligible orders</Text>
                            </View>
                        </View>

                        <AdditionalInfo
                            description={VIEWING.description}
                            reviews={REVIEWS}
                            setModalVisible={this._setReviewModalVisible}
                        />
                    </View>

                </ScrollView>

                {/** Floating action button */}
                {/* <TouchableOpacity
                    style={styles.add}
                    onPress={() => this._setReviewModalVisible(true)}
                >
                    <Feather name='plus' size={30} color={Colors.titanWhite} />
                </TouchableOpacity> */}

                <View style={styles.buyActions}>
                    <View style={styles.buyQty}>
                        <Button
                            transparent
                            style={styles.buyQtyPlusMinusBtn}
                            onPress={() => this._decreaseQty()}
                        >
                            <Feather name="minus" size={20} color={Colors.titanWhite} />
                        </Button>
                        <Item regular style={styles.buyQtyInputContainer}>
                            <Input
                                value={this.state.qty}
                                keyboardType='number-pad'
                                onChangeText={(value) => this._handleQtyChanged(value)}
                                style={styles.buyQtyInput}
                            />
                        </Item>
                        <Button
                            transparent
                            style={styles.buyQtyPlusMinusBtn}
                            onPress={() => this._incrementQty()}
                        >
                            <Feather name="plus" size={20} color={Colors.titanWhite} />
                        </Button>
                    </View>
                    <Button
                        transparent
                        style={styles.buyBtn}
                        onPress={() => this._addToCart()}
                    >
                        <Text style={styles.buyActionsText}>Buy Now</Text>
                    </Button>
                </View>

                {/** Review Form */}
                <AddReview
                    name={VIEWING.title}
                    modalVisible={this.state.reviewModalVisible}
                    setModalVisible={this._setReviewModalVisible}
                    rating={this.state.submittedRating}
                    comment={this.state.submittedComment}
                    setData={this._setReviewData}
                />
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
        padding: 20,
    },
    buyDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailsInfo: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: (SCREEN_WIDTH - 50) - BOOK_WIDTH,
    },
    titleRatings: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    title: {
        fontSize: 20,
        color: Colors.congoBrown,
        fontWeight: '500',
        width: 140,
    },
    rating: {
        width: 30,
        height: 30,
        borderWidth: 2,
        borderRadius: 100/2,
        borderColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: 12,
    },
    short_description: {
        fontSize: 12,
        color: Colors.congoBrown,
        marginVertical: 12,
        lineHeight: 20,
        fontWeight: '200',
    },
    qtyLeft: {
        fontSize: 12,
        color: 'green',
    },
    prices: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginVertical: 10,
    },
    price: {
        fontSize: 24,
        color: Colors.congoBrown,
        fontWeight: '500',
    },
    oldPrice: {
        fontSize: 14,
        textDecorationLine: 'line-through',
        textDecorationColor: Colors.congoBrown,
        fontWeight: 'normal',
    },
    newPrice: {
        marginLeft: 15,
    },
    freeShipping: {
        fontSize: 12,
        color: Colors.congoBrown,
        marginVertical: 12,
        fontWeight: '200',
    },
    buyActions: {
        ...Platform.select({
            ios: {
                height: 70,
            },
            android: {
                height: 60,
            },
        }),
        backgroundColor: Colors.blueViolet,
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buyActionsText: {
        color: Colors.titanWhite,
        fontSize: 14,
    },
    buyQty: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 115,
    },
    buyQtyPlusMinusBtn: {
        width: 30,
    },
    buyQtyInputContainer: {
        borderWidth: 0,
        borderColor: 'transparent',
        width: 50,
        height: 35,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buyQtyInput: {
        color: Colors.titanWhite,
        fontSize: 18,
    },
    buyBtn: {
        paddingHorizontal: 15,
        alignSelf: 'center',
    },
})

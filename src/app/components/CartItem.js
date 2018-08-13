/**
 * E-Book-Reader APP
 * 
 * CartItem Component
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { Feather, MaterialIcons } from '@expo/vector-icons'
import { Colors, Layout } from '@shared'
import { Input, Item } from 'native-base'
import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import ProductImage from './ProductImage'

const SCREEN_WIDTH = Layout.window.width
const BOOK_WIDTH = (SCREEN_WIDTH - 50) * 0.40

const CartItem = ({ index, item, increaseQty, decreaseQty, removeItem }) => (
    <View style={styles.buyDetails}>
        <ProductImage style={{
            width: BOOK_WIDTH,
        }} />
        <View style={styles.detailsInfo}>
            <View style={styles.titleRatings}>
                <Text numberOfLines={1} ellipsizeMode='tail' style={[styles.title]}>{item.title}</Text>
            </View>
            <Text numberOfLines={3} ellipsizeMode='tail' style={styles.short_description}>{item.short_description}</Text>
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.price}>{item.qty} x {item.price}</Text>
            <View style={styles.buyRequest}>
                <View style={styles.buyQtyContainer}>
                    <Item regular style={styles.buyQty}>
                        <Input
                            placeholder='1'
                            value={item.qty}
                            keyboardType='numeric'
                            style={{
                            fontSize: 12,
                        }} />
                    </Item>
                    <View style={styles.buyQtyButtons}>
                        <TouchableOpacity style={styles.buyQtyButton} onPress={() => increaseQty(index)}>
                            <MaterialIcons name='arrow-drop-up' size={20} color={Colors.congoBrown} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buyQtyButton} onPress={() => decreaseQty(index)}>
                            <MaterialIcons name='arrow-drop-down' size={20} color={Colors.congoBrown} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.bin} onPress={() => removeItem(index)}>
                    <Feather name='trash' size={18} color={Colors.congoBrown} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
)

const styles = StyleSheet.create({
    buyDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    productImage: {
        width: BOOK_WIDTH,
        height: 170,
        shadowRadius: 3,
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
        fontWeight: '400',
        width: 140,
    },
    short_description: {
        fontSize: 12,
        color: Colors.congoBrown,
        marginVertical: 12,
        lineHeight: 20,
        fontWeight: '200',
    },
    price: {
        fontSize: 16,
        color: Colors.congoBrown,
    },
    buyRequest: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        marginTop: 12,
    },
    buyQtyContainer: {
        flexDirection: 'row',
    },
    buyQty: {
        width: 40,
        borderColor: Colors.congoBrown,
        borderWidth: StyleSheet.hairlineWidth,
        borderRightWidth: 0,
    },
    buyQtyButtons: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    buyQtyButton: {
        width: 30,
        height: 20,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.congoBrown,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bin: {
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default CartItem

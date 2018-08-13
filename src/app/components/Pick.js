/**
 * E-Book-Reader APP
 * 
 * TopPicks Component
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { Colors, Layout } from '@shared'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import ProductImage from './ProductImage'

const SCREEN_WIDTH = Layout.window.width
const SMALL_BOOK_WIDTH = ((SCREEN_WIDTH - 20) / 4) + 10

export default class Pick extends React.PureComponent {
    _onPress = () => {
        this.props.handleOnPress()
    }

    render() {
        const { pick } = this.props

        return (
            <TouchableOpacity
                onPress={this._onPress}
            >
                <View style={styles.smallBookItem}>
                    <ProductImage style={{
                        width: '100%',
                        height: '70%',
                    }} />
                    <View style={styles.smallBookInfo}>
                        <Text style={styles.author}>{pick.author}</Text>
                        <Text style={styles.genre}>{pick.genre}</Text>
                        <View style={styles.prices}>
                            <Text style={[styles.price, (pick.specialPrice) ? styles.oldPrice : {}]}>{pick.price}</Text>
                            {
                                pick.specialPrice &&
                                <Text style={[styles.price, styles.newPrice]}>{pick.specialPrice}</Text>
                            }
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    smallBookItem: {
        width: SMALL_BOOK_WIDTH,
        height: 180,
        marginRight: 15,
    },
    smallBookInfo: {
        width: '100%',
        height: '30%',
        paddingVertical: 5,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    author: {
        fontSize: 10,
        color: Colors.congoBrown,
    },
    genre: {
        fontSize: 8,
        color: Colors.congoBrown,
    },
    prices: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    price: {
        fontSize: 12,
        color: Colors.congoBrown,
        fontWeight: '700',
    },
    oldPrice: {
        fontSize: 10,
        textDecorationLine: 'line-through',
        textDecorationColor: Colors.congoBrown,
        fontWeight: 'normal',
    },
    newPrice: {
        color: Colors.blueViolet
    },
})

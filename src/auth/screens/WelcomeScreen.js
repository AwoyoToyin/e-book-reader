/**
 * E-Book-Reader APP
 * 
 * WelcomeScreen
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { Colors, Layout } from '@shared'
import React, { Component } from 'react'
import { Animated, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { Page } from '../components'

const SCREEN_WIDTH = Layout.window.width
const FIXED_BAR_WIDTH = SCREEN_WIDTH * 0.60 // might want to increase for more items
const BAR_SPACE = 10

const pages = [
    {
        heading: 'We love books! Do you?',
        body: 'When you read a book, you are taking in all that the book is about. People, places, things...',
        index: 0
    },
    {
        heading: 'Do you like books?',
        body: 'When you read a book, you are taking in all that the book is about. People, places, things...',
        index: 1
    },
    {
        heading: 'Do you enjoy reading?',
        body: 'When you read a book, you are taking in all that the book is about. People, places, things...',
        index: 2
    },
]

export default class WelcomeScreen extends Component {
    numItems = pages.length
    itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
    animVal = new Animated.Value(0)

    render() {
        const page = []
        const barArray = []
        pages.forEach((p, i) => {
            page.push(<Page key={i} heading={p.heading} body={p.body} index={p.index} />)

            const scrollBarVal = this.animVal.interpolate({
                inputRange: [SCREEN_WIDTH * (i - 1), SCREEN_WIDTH * (i + 1)],
                outputRange: [-this.itemWidth, this.itemWidth],
                extrapolate: 'clamp',
            })

            barArray.push(
                <View
                    key={`bar${i}`}
                    style={[styles.track, {
                        width: this.itemWidth,
                        marginLeft: i === 0 ? 0 : BAR_SPACE,
                    }]}
                >
                    <Animated.View
                        style={[styles.bar, {
                            width: this.itemWidth,
                            transform: [
                                { translateX: scrollBarVal },
                            ],
                        }]}
                    />
                </View>
            )
        })

        return (
            <View style={styles.container}>
                <ScrollView
                    scrollEventThrottle={16}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollView}
                    onScroll={
                        Animated.event(
                            [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
                        )
                    }
                >
                    {page}
                </ScrollView>

                <View style={styles.bottom}>
                    <View style={styles.barContainer}>
                        {barArray}
                    </View>
                    <View style={styles.actions}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <Text style={styles.action}>Signin</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Register')}
                        >
                            <Text style={[styles.action, { color: Colors.blueViolet, }]}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flexDirection: 'row',
        backgroundColor: Colors.snow,
    },
    bottom: {
        height: 220,
        backgroundColor: Colors.snow,
    },
    barContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        marginVertical: 30,
    },
    track: {
        backgroundColor: '#ccc',
        overflow: 'hidden',
        height: 2,
    },
    bar: {
        backgroundColor: Colors.blueViolet,
        height: 2,
        position: 'absolute',
        left: 0,
        top: 0,
    },
    actions: {
        flex: 1,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    action: {
        fontSize: 14,
        // color: Colors.congoBrown,
    },
})

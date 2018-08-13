/**
 * E-Book-Reader APP
 * 
 * Page Component
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { Ionicons } from '@expo/vector-icons'
import { Colors, Layout } from '@shared'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SCREEN_WIDTH = Layout.window.width

const Page = (props) => (
    <View style={styles.scrollPage}>
        <View style={[styles.screen]}>
            <View style={{
                height: 200,
                width: 200,
                backgroundColor: Colors.titanWhite,
                borderRadius: 100,
                marginBottom: 60,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Ionicons name="md-bookmarks" size={120} color={Colors.blueViolet} />
            </View>
            <Text style={styles.heading}>{props.heading}</Text>
            <Text style={styles.body}>{props.body}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    scrollPage: {
        width: SCREEN_WIDTH,
    },
    screen: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: Colors.snow,
    },
    heading: {
        fontSize: 16,
        marginBottom: 20,
        color: Colors.congoBrown,
    },
    body: {
        paddingHorizontal: 50,
        fontSize: 14,
        color: Colors.congoBrown,
    },
})

export default Page

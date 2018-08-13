/**
 * E-Book-Reader APP
 * 
 * Header Component
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { Colors, Layout } from '@shared'
import React, { PureComponent } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

const SCREEN_WIDTH = Layout.window.width
const HEADER_LR_WIDTH = ((SCREEN_WIDTH - 20) * 0.25)

const Header = (props) => {
    const { leftIcons, title, rightIcons } = props

    return (
        <View style={styles.header}>
            {/** Left */}
            <View style={[styles.headerLR]}>
                {leftIcons}
            </View>

            {/** Body */}
            <View style={[styles.headerBody, styles.headerItem]}>
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.headerBodyText}>{title}</Text>
            </View>

            {/** Right */}
            <View style={[styles.headerLR, { ...props.rightStyle }]}>
                {rightIcons}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        ...Platform.select({
            ios: {
                height: 50,
            },
            android: {
                height: 80,
            }
        }),
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: Colors.snow,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            ...Platform.select({
                ios: {
                    height: 10
                },
            })
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    headerItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerLR: {
        width: HEADER_LR_WIDTH,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    headerBody: {
        flex: 1,
        marginHorizontal: 10,
        paddingVertical: 15,
    },
    headerBodyText: {
        fontSize: 16,
        color: Colors.congoBrown,
    },
})

export default Header

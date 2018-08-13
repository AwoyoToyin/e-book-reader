/**
 * E-Book-Reader APP
 * 
 * AdditionalInfo Component
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { Feather } from '@expo/vector-icons'
import { Colors, Layout } from '@shared'
import { ScrollableTab, Tab, Tabs } from 'native-base'
import React from 'react'
import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Review from './Review'

export default class AdditionalInfo extends React.PureComponent {
    _keyExtractor = (item, index) => `${index}`

    _renderItem = ({ item }) => (
        <Review
            name={item.name}
            rating={item.rating}
            comment={item.comment}
        />
    )

    _showModal = () => {
        this.props.setModalVisible(true)
    }

    render() {

        const { description, reviews, } = this.props

        return (
            <View style={styles.moreInfo}>
                <Tabs
                    // locked={true}
                    tabBarBackgroundColor={Colors.snow}
                    renderTabBar={() => <ScrollableTab
                        style={{ borderWidth: 0 }}
                    />}
                    tabBarUnderlineStyle={{
                        borderBottomWidth: 4,
                        borderBottomColor: Colors.blueViolet,
                    }}
                    style={{
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                    }}
                >
                    {/** Tab */}
                    <Tab
                        heading='Info'
                        tabStyle={styles.tabStyle}
                        textStyle={styles.tabTextStyle}
                        activeTabStyle={styles.tabStyle}
                        activeTextStyle={styles.tabTextStyle}
                    >
                        <View style={styles.tabContent}>
                            {/** Tab Content */}
                            <Text numberOfLines={10} ellipsizeMode='tail' style={styles.description}>{description}</Text>
                        </View>
                    </Tab>
                    <Tab
                        heading='Review'
                        tabStyle={styles.tabStyle}
                        textStyle={styles.tabTextStyle}
                        activeTabStyle={styles.tabStyle}
                        activeTextStyle={styles.tabTextStyle}
                    >
                        <View style={[styles.tabContent, styles.reviewsContent]}>

                            {/** Floating action button */}
                            <TouchableOpacity
                                style={styles.add}
                                onPress={this._showModal}
                            >
                                <Feather name='plus' size={30} color={Colors.titanWhite} />
                            </TouchableOpacity>

                            {/** Reviews goes here */}
                            <FlatList
                                data={reviews}
                                keyExtractor={this._keyExtractor}
                                renderItem={this._renderItem}
                                removeClippedSubviews={false}
                            />

                        </View>
                    </Tab>
                </Tabs>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    moreInfo: {
        marginVertical: 20,
        backgroundColor: Colors.snow,
    },
    tabStyle: {
        backgroundColor: Colors.snow,
        justifyContent: 'flex-start',
        // alignItems: 'flex-end',
        width: 100,
        // borderWidth: 1,
    },
    tabTextStyle: {
        color: Colors.congoBrown,
        fontSize: 14,
        fontWeight: 'normal',
        marginLeft: -20,
    },
    tabContent: {
        paddingVertical: 15,
        backgroundColor: Colors.snow,
    },
    reviewsContent: {
        ...Platform.select({
            ios: {
                height: 385,
            },
        }),
    },
    add: {
        height: 50,
        width: 50,
        backgroundColor: Colors.blueViolet,
        borderRadius: 100 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50, //90
        right: 20,
        zIndex: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            ...Platform.select({
                ios: {
                    height: 3,
                },
            })
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },
    description: {
        fontSize: 12,
        color: Colors.congoBrown,
        lineHeight: 20,
    },
})

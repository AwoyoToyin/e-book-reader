/**
 * E-Book-Reader APP
 * 
 * CategoriesScreen
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { Entypo, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Colors, Layout, Touchable } from '@shared';
import React, { Component } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Category, ProductImage } from '../components';

const SCREEN_WIDTH = Layout.window.width
const BEST_WIDTH = SCREEN_WIDTH - 65

const CATEGORIES = [
    {
        _id: '1287654678',
        name: 'Art & Photography',
        icon: <Ionicons name='ios-camera' size={85} color={Colors.blueViolet} />
    },
    {
        _id: '97652167833',
        name: 'Biography & Memoirs',
        icon: <FontAwesome name='address-book' size={60} color={Colors.blueViolet} />
    },
    {
        _id: '56987657844',
        name: 'Business & Investing',
        icon: <MaterialIcons name='account-balance' size={75} color={Colors.blueViolet} />
    },
    {
        _id: '85673298736',
        name: `Children's Books`,
        icon: <MaterialIcons name='child-care' size={70} color={Colors.blueViolet} />
    },
    {
        _id: '28879457789',
        name: 'Cooking & Wine',
        icon: <MaterialCommunityIcons name='silverware-variant' size={80} color={Colors.blueViolet} />
    },
    {
        _id: '28979457789',
        name: 'History & Mistory',
        icon: <MaterialCommunityIcons name='sword-cross' size={70} color={Colors.blueViolet} />
    },
    {
        _id: '90876567898',
        name: 'Literature & Fiction',
        icon: <Entypo name='feather' size={70} color={Colors.blueViolet} />
    },
    {
        _id: '68476546789',
        name: 'Mistory & Suspense',
        icon: <MaterialCommunityIcons name='incognito' size={80} color={Colors.blueViolet} />
    },
    {
        _id: '09387689023',
        name: 'Romance & Love',
        icon: <MaterialCommunityIcons name='heart' size={70} color={Colors.blueViolet} />
    },
]

const BEST = [
    { image: '' },
    { image: '' },
    { image: '' },
    { image: '' },
    { image: '' },
]

export default class CategoriesScreen extends Component {

    state = {
        refreshing: false,
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: `Browse Categories`,
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

    _renderFirstList = (category, index) => {
        if (index < 6) {
            return <Category key={index} index={index}
                category={category}
                handleOnPress={() => this.props.navigation.navigate('Listing')}
            />
        }
    }

    _renderSecondList = (category, index) => {
        if (index > 5) {
            return <Category key={index} index={index}
                category={category}
                handleOnPress={() => this.props.navigation.navigate('Listing')}
            />
        }
    }

    _renderBestList = (item, index) => {
        return <ProductImage key={index} style={{
            width: BEST_WIDTH,
            height: 140,
            marginRight: 15,
            shadowRadius: 2,
        }} />
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
                        {/** Top Listing */}
                        <View style={styles.listContainer}>
                            {CATEGORIES.map(this._renderFirstList)}
                        </View>
                        {/** Best of the Year */}
                        <View>
                            <View style={styles.bestContainer}>
                                <Text style={styles.bestText}>Best of 2018</Text>
                                <Text style={styles.bestAll}>View all</Text>
                            </View>
                            <ScrollView
                                scrollEventThrottle={16}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                style={styles.scrollView}
                            >
                                {BEST.map(this._renderBestList)}
                            </ScrollView>
                        </View>
                        {/** Bottom Listing */}
                        <View style={styles.listContainer}>
                            {CATEGORIES.map(this._renderSecondList)}
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
    headerIcon: {
        paddingVertical: 9,
        paddingHorizontal: 20,
    },
    content: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        padding: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    bestContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    bestText: {
        fontSize: 14,
        color: Colors.congoBrown,
        fontWeight: '700',
    },
    bestAll: {
        fontSize: 12,
        color: Colors.congoBrown,
    },
    scrollView: {
        flexDirection: 'row',
        backgroundColor: Colors.snow,
        paddingLeft: 20,
    },
})

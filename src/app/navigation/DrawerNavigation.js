/**
 * E-Book-Reader APP
 * 
 * DrawerNavigation
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { Colors, Layout } from '@shared'
import React from 'react'
import { Platform } from 'react-native'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'

import {
    AboutScreen,
    BookmarksScreen,
    CartScreen,
    CategoriesScreen,
    CheckoutScreen,
    CollectionScreen,
    DetailScreen,
    HomeScreen,
    ListingScreen,
    SearchScreen,
} from '../screens'
import DrawerMenu from './DrawerMenu'

const { window: { width } } = Layout

const MainStack = createStackNavigator(
    {
        Home: { screen: HomeScreen },
        Categories: { screen: CategoriesScreen },
        Listing: { screen: ListingScreen },
        Detail: { screen: DetailScreen },
        About: { screen: AboutScreen },
        Bookmarks: { screen: BookmarksScreen },
        Collections: { screen: CollectionScreen },
        Cart: { screen: CartScreen },
        Checkout: { screen: CheckoutScreen },
        Search: { screen: SearchScreen },
    },
    {
        initialRouteName: 'Home',
        headerMode: 'screen',
        navigationOptions: {
            headerStyle: {
                ...Platform.select({
                    ios: {
                        height: 50,
                    },
                }),
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
            headerTitleStyle: {
                fontWeight: '400',
                color: Colors.congoBrown
            }
        },
    }
)

const DrawerStack = createDrawerNavigator(
    {
        Main: MainStack,
    },
    {
        contentComponent: DrawerMenu,
        drawerWidth: width,
        drawerBackgroundColor: 'transparent',
    }
)

export default DrawerStack

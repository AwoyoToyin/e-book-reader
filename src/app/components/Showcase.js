/**
 * E-Book-Reader APP
 * 
 * Showcase Component
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { Colors } from '@shared'
import { ScrollableTab, Tab, Tabs } from 'native-base'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { withNavigation } from 'react-navigation'

import Pick from './Pick'

const PICKS = [
    {
        _id: '9038746890',
        image: '',
        author: 'Steve Jobs',
        genre: 'Autobiography',
        price: '$12.50'
    },
    {
        _id: '7846537e8',
        image: '',
        author: 'Ellen Degeneres',
        genre: 'Biography',
        price: '$30.30',
        specialPrice: '$25.30'
    },
    {
        _id: '298768954',
        image: '',
        author: 'Bharathiar',
        genre: 'Biography',
        price: '$60.50',
        specialPrice: '$45.30'
    },
    {
        _id: '46789087',
        image: '',
        author: 'Bharathiar',
        genre: 'Biography',
        price: '$60.50',
        specialPrice: '$45.30'
    },
    {
        _id: '17657890',
        image: '',
        author: 'Bharathiar',
        genre: 'Biography',
        price: '$60.50',
        specialPrice: '$45.30'
    },
    {
        _id: '3987657886',
        image: '',
        author: 'Bharathiar',
        genre: 'Biography',
        price: '$60.50',
        specialPrice: '$45.30'
    },
]

class Showcase extends React.Component {
    _keyExtractor = (item, index) => `${index}`

    _renderItem = ({ item }) => (
        <Pick
            key={item._id}
            pick={item}
            handleOnPress={() => this.props.navigation.navigate('Detail')}
        />
    )

    render() {
        return (
            <View>
                {/** Tabs */}
                <Tabs
                    locked={true}
                    tabBarBackgroundColor={Colors.snow}
                    renderTabBar={() => <ScrollableTab
                        // tabsBorderBottomWidth={0}
                        style={{ borderWidth: 0 }}
                    />}
                    tabBarUnderlineStyle={{
                        borderBottomWidth: 4,
                        borderBottomColor: Colors.blueViolet,
                    }}
                >
                    {/** Tabs */}
                    <Tab
                        heading='Top Picks'
                        tabStyle={styles.tabStyle}
                        textStyle={styles.tabTextStyle}
                        activeTabStyle={styles.tabStyle}
                        activeTextStyle={styles.tabTextStyle}
                    >
                        <View style={styles.tabContent}>
                            {/** Tab Content */}
                            <FlatList
                                data={PICKS}
                                extraData={this.state}
                                keyExtractor={this._keyExtractor}
                                renderItem={this._renderItem}
                                scrollEventThrottle={16}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </Tab>
                    <Tab
                        heading='Best Selling'
                        tabStyle={styles.tabStyle}
                        textStyle={styles.tabTextStyle}
                        activeTabStyle={styles.tabStyle}
                        activeTextStyle={styles.tabTextStyle}
                    >
                        <View style={styles.tabContent}>
                            <Text>Content for Tab Two</Text>
                        </View>
                    </Tab>
                    <Tab
                        heading='Most Viewed'
                        tabStyle={styles.tabStyle}
                        textStyle={styles.tabTextStyle}
                        activeTabStyle={styles.tabStyle}
                        activeTextStyle={styles.tabTextStyle}
                    >
                        <View style={styles.tabContent}>
                            <Text>Content for Tab Three</Text>
                        </View>
                    </Tab>
                    <Tab
                        heading='Kids Special'
                        tabStyle={styles.tabStyle}
                        textStyle={styles.tabTextStyle}
                        activeTabStyle={styles.tabStyle}
                        activeTextStyle={styles.tabTextStyle}
                    >
                        <View style={styles.tabContent}>
                            <Text>Content for Tab Four</Text>
                        </View>
                    </Tab>
                </Tabs>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabStyle: {
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        paddingLeft: 0,
        marginRight: 20,
    },
    tabTextStyle: {
        color: Colors.congoBrown,
        fontSize: 12,
        fontWeight: 'normal',
        marginLeft: -1,
    },
    tabContent: {
        paddingVertical: 20,
        backgroundColor: Colors.snow,
    },
})

export default withNavigation(Showcase)

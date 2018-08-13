/**
 * E-Book-Reader APP
 * 
 * SearchScreen
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { Ionicons } from '@expo/vector-icons'
import { Colors, Layout } from '@shared'
import React, { Component } from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { ProgressBar } from '../components'

const SCREEN_WIDTH = Layout.window.width
const FORM_WIDTH = SCREEN_WIDTH - 40

export default class SearchScreen extends Component {

    state = {
        searching: false,
        searchTerm: '',
        searchResults: [],
    }

    static navigationOptions = {
        header: null
    }

    _search = (searchTerm) => {
        this._toggleSearch(searchTerm)
        setTimeout(() => {
            this.setState({ searching: false, })
        }, 1500)
    }

    _toggleSearch = (searchTerm) => {
        this.setState(() => {
            let searching = false
            if (searchTerm.length > 3) {
                searching = true
            }
            return { searchTerm, searching }
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor={Colors.blueViolet}
                />

                <View style={styles.header}>
                    <Text
                        numberOfLines={1} ellipsizeMode='tail'
                        style={styles.title}
                    >
                        {
                            (this.state.searchTerm) ? (
                                `Search results for '${this.state.searchTerm}'`
                            ) : (
                                `Start typing to search...`
                            )
                        }
                    </Text>

                    <TouchableOpacity
                        style={styles.closeContainer}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Ionicons
                            name='md-close'
                            size={30}
                            style={styles.closeIcon}
                        />
                    </TouchableOpacity>
                </View>

                <View style={[styles.formContainer]}>
                    <TextInput
                        value={this.state.searchTerm}
                        autoFocus={true}
                        onChangeText={(text) => this._search(text)}
                        underlineColorAndroid='transparent'
                        style={styles.textInput}
                    />
                    {
                        /** Progress Bar */
                        (this.state.searching && this.state.searchResults.length < 1) &&
                        <ProgressBar
                            progressTintColor={Colors.congoBrown}
                            initialProgress={0}
                            style={styles.activityIndicatorWrapper}
                        />
                        /** Progress Bar */
                    }
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 16,
        color: Colors.congoBrown,
        marginTop: 10,
    },
    closeContainer: {
        position: 'absolute',
        right: 20,
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    closeIcon: {
        color: Colors.congoBrown,
    },
    formContainer: {
        marginTop: 50,
        paddingHorizontal: 20,
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    textInput: {
        width: FORM_WIDTH,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Colors.congoBrown,
        fontSize: 18,
        letterSpacing: 1,
        paddingVertical: 5,
        color: Colors.congoBrown,
    },
    activityIndicatorWrapper: {
        width: FORM_WIDTH,
        position: 'absolute',
        ...Platform.select({
            ios: {
                bottom: -2,
            },
            android: {
                bottom: -7,
            },
        })
    },
})

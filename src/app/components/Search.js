/**
 * E-Book-Reader APP
 * 
 * Search Component
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { Ionicons } from '@expo/vector-icons'
import { Colors, Layout } from '@shared'
import React from 'react'
import { Modal, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import ProgressBar from './ProgressBar'

const SCREEN_WIDTH = Layout.window.width
const FORM_WIDTH = SCREEN_WIDTH - 40

const Search = (props) => {

    const {
        state: {
            searchModalVisible,
            searching,
            searchTerm,
            searchResults
        },
        setModalVisible,
        search,
    } = props

    return (
        <Modal
            animationType='fade'
            transparent={false}
            visible={searchModalVisible}
            onRequestClose={() => setModalVisible()}
        >
            <View style={styles.container}>
                <View>
                    <Text
                        numberOfLines={1} ellipsizeMode='tail'
                        style={styles.title}
                    >
                        {
                            (searchTerm) ? (
                                `Search results for '${searchTerm}'`
                            ) : (
                                `Start typing to search...`
                            )
                        }
                    </Text>

                    <TouchableOpacity
                        style={styles.closeContainer}
                        onPress={() => setModalVisible(false)}
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
                        value={searchTerm}
                        autoFocus={true}
                        onChangeText={(text) => search(text)}
                        underlineColorAndroid='transparent'
                        style={styles.textInput}
                    />
                    {
                        /** Progress Bar */
                        (searching && searchResults.length < 1) &&
                        <ProgressBar
                            progressTintColor={Colors.congoBrown}
                            initialProgress={0}
                            style={styles.activityIndicatorWrapper}
                        />
                        /** Progress Bar */
                    }
                </View>
            </View>
        </Modal >
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        ...Platform.select({
            ios: {
                paddingTop: 70,
            },
            android: {
                paddingTop: 30,
            },
        })
    },
    title: {
        fontSize: 16,
        color: Colors.congoBrown,
        marginTop: 20,
    },
    closeContainer: {
        position: 'absolute',
        right: 0,
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    closeIcon: {
        color: Colors.congoBrown,
    },
    formContainer: {
        marginTop: 50,
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

export default Search

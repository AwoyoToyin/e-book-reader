/**
 * E-Book-Reader APP
 * 
 * LoginScreen
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import LOGIN from '@graphql/query/login.query'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors, Loader, Touchable } from '@shared'
import { Button, Input, Item } from 'native-base'
import React, { Component } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import { connect } from 'react-redux'
import { ApolloConsumer, graphql, compose } from 'react-apollo'

import { login } from '../../store/actions'

class LoginScreen extends Component {
    state = {
        phone: '09012345678',
        password: 'password'
    }

    _onSubmit = () => {
        this.props.login(this.state)
    }

    render() {
        return (
            // <ApolloConsumer>
            //     {client => (
                    <View style={styles.container}>

                        {/* {isLoading && <Loader />} */}

                        <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
                            <ScrollView style={styles.container}>
                                <View style={styles.scrollInner}>
                                    {/** Logo Area */}
                                    <View>
                                        <MaterialCommunityIcons
                                            name='book' size={60} color={Colors.blueViolet}
                                            style={{
                                                marginLeft: -8,
                                                marginBottom: 10,
                                            }}
                                        />
                                        <Text style={styles.header}>Signin</Text>
                                        <Text style={styles.headerExcerpt}>Thoughts of the story</Text>
                                        {/* <Text style={styles.headerExcerpt}>The current cache is: {client.extract()}</Text> */}
                                    </View>
                                    {/** Logo Area */}

                                    {/** Social Area */}
                                    <View style={styles.social}>
                                        <Button iconLeft transparent danger style={{
                                            marginRight: 40,
                                        }}>
                                            <FontAwesome name='google' size={30} color='red' />
                                            <Text style={styles.socialText}>Google</Text>
                                        </Button>
                                        <Button iconLeft transparent>
                                            <FontAwesome name='facebook' size={30} color='blue' />
                                            <Text style={styles.socialText}>Facebook</Text>
                                        </Button>
                                    </View>
                                    {/** Social Area */}

                                    {/** Form Area */}
                                    <View>
                                        <Item regular style={styles.inputItem}>
                                            {/* <Label style={styles.inputLabel}>Phone Number</Label> */}
                                            <Input style={styles.textInput} placeholder='08076456725' keyboardType='phone-pad' />
                                        </Item>
                                        <Item regular last style={styles.inputItem}>
                                            {/* <Label style={styles.inputLabel}>Password</Label> */}
                                            <Input style={styles.textInput} placeholder='secure@password' secureTextEntry={true} />
                                        </Item>
                                    </View>
                                    {/** Form Area */}

                                    {/** Form after */}
                                    <View style={styles.formAfter}>
                                        <Text style={styles.formAfterText}>Don't have an account?</Text>
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('Register')}
                                        >
                                            <Text style={[styles.formAfterText, {
                                                color: Colors.blueViolet,
                                                textDecorationLine: 'underline',
                                                textDecorationColor: Colors.congoBrown
                                            }]}>Register here</Text>
                                        </TouchableOpacity>
                                    </View>
                                    {/** Form after */}
                                </View>
                            </ScrollView>
                        </KeyboardAvoidingView>
                        <Touchable
                            background={Touchable.Ripple(Colors.snow, false)}
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('App')}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </Touchable>
                    </View>
            //     )}
            // </ApolloConsumer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollInner: {
        paddingTop: 100,
        paddingHorizontal: 20,
    },
    header: {
        color: Colors.blueViolet,
        fontSize: 16,
        fontWeight: 'bold',
    },
    headerExcerpt: {
        color: Colors.congoBrown,
        fontSize: 12,
        marginVertical: 10,
    },
    social: {
        flexDirection: 'row',
        marginVertical: 15,
    },
    socialText: {
        fontSize: 12,
        color: Colors.congoBrown,
        marginLeft: 5,
    },
    inputItem: {
        borderWidth: StyleSheet.hairlineWidth,
        marginTop: 15,
    },
    inputLabel: {
        fontSize: 10,
        color: Colors.congoBrown,
    },
    textInput: {
        letterSpacing: 1,
        fontSize: 12,
    },
    formAfter: {
        marginVertical: 20,
        flexDirection: 'row',
    },
    formAfterText: {
        fontSize: 12,
        color: Colors.congoBrown,
        marginRight: 5,
    },
    button: {
        ...Platform.select({
            ios: {
                height: 70,
            },
            android: {
                height: 60,
            },
        }),
        backgroundColor: Colors.blueViolet,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: Colors.titanWhite,
        fontSize: 14,
    },
})

export default LoginScreen

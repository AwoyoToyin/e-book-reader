/**
 * E-Book-Reader APP
 * 
 * DrawerMenu
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { Feather, Ionicons } from '@expo/vector-icons'
import { Colors, Layout, Touchable } from '@shared'
import React from 'react'
import { AsyncStorage, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const SCREEN_WIDTH = Layout.window.width
const MENU_WIDTH = ((SCREEN_WIDTH - 40) / 2) - 20

class DrawerMenu extends React.Component {

    _navigate(route) {
        this.props.navigation.navigate(`${route}`)
    }

    async _logout() {
        // handle logout
        await AsyncStorage.removeItem('customer')
        this.props.navigation.navigate('Auth')
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor='#6a51ae'
                />
                <View style={styles.itemsContainer}>
                    <View style={styles.menuTop}>
                        <View style={styles.profile}>
                            <View style={styles.profileImage}></View>
                            <Text style={styles.profileName}>Philip Robo</Text>
                        </View>

                        <Touchable
                            background={Touchable.Ripple(Colors.snow, true)}
                            style={styles.closeIcon}
                            onPress={() => this.props.navigation.toggleDrawer()}
                        >
                            <Ionicons name='md-close' size={25} color={Colors.titanWhite} />
                        </Touchable>
                    </View>
                    
                    <View style={styles.menuContainer}>
                        <View style={styles.menuRow}>
                            <TouchableOpacity style={styles.menuItem}
                                onPress={() => this._navigate('Collections')}
                            >
                                <View style={styles.menuItemInner}>
                                    <Feather name='layers' size={28} color={Colors.titanWhite} />
                                    <Text style={styles.menuItemText}>My Collection</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}
                                onPress={() => this._navigate('Bookmarks')}
                            >
                                <View style={styles.menuItemInner}>
                                    <Feather name='pocket' size={28} color={Colors.titanWhite} />
                                    <Text style={styles.menuItemText}>Bookmarks</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuRow}>
                            <TouchableOpacity style={styles.menuItem}
                                onPress={() => this._navigate('Categories')}
                            >
                                <View style={styles.menuItemInner}>
                                    <Feather name='list' size={28} color={Colors.titanWhite} />
                                    <Text style={styles.menuItemText}>Categories</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}
                                onPress={() => this._navigate('About')}
                            >
                                <View style={styles.menuItemInner}>
                                    <Feather name='award' size={28} color={Colors.titanWhite} />
                                    <Text style={styles.menuItemText}>About</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuRow}>
                            <TouchableOpacity style={styles.menuItem}
                                onPress={() => this._logout()}
                            >
                                <View style={styles.menuItemInner}>
                                    <Feather name='log-out' size={28} color={Colors.titanWhite} />
                                    <Text style={styles.menuItemText}>Sign Out</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ marginLeft: 0, fontSize: 12, color: Colors.titanWhite }}>Ver. 0.1</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.chevronTriangle, styles.chevronBottomLeft]} />
                <View style={[styles.chevronTriangle, styles.chevronBottomRight]} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    itemsContainer: {
        backgroundColor: Colors.blueViolet,
        height: 340,
        width: Layout.window.width,
        padding: 20,
        ...Platform.select({
            ios: {
                paddingTop: 30,
            }
        })
    },
    menuTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25,
    },
    profileImage: {
        backgroundColor: Colors.titanWhite,
        height: 50,
        width: 50,
        borderRadius: 100/2,
        marginRight: 10,
    },
    profileName: {
        color: Colors.titanWhite,
        fontSize: 14,
    },
    closeIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    menuContainer: {
        flexDirection: 'column',
    },
    menuRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    menuItem: {
        width: MENU_WIDTH,
        paddingVertical: 5,
    },
    menuItemInner: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuItemText: {
        fontSize: 14,
        marginLeft: 10,
        color: Colors.titanWhite,
    },
    chevronTriangle: {
        backgroundColor: 'transparent',
        borderTopWidth: 30,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: Layout.window.width / 2,
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: Colors.blueViolet,
    },
    chevronBottomLeft: {
        position: 'absolute',
        top: 340,
        left: 0,
        transform: [
            { scale: -1 }
        ]
    },
    chevronBottomRight: {
        position: 'absolute',
        top: 340,
        right: 0,
        transform: [
            { scaleY: -1 }
        ]
    }
})

export default DrawerMenu

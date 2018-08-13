import React from 'react'
import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'

import { Colors } from '../constants'

const Loader = () => {
    return (
        <Modal
            visible={true}
            animationType={'fade'}
            transparent={true}
            onRequestClose={() => false}
        >
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator color={Colors.blueViolet} animating={true} size='large' />
                    <Text style={{ fontSize: 16, color: Colors.blueViolet, marginLeft: 10, }}>
                        Processing...
                    </Text>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
        flexDirection: 'row',
        backgroundColor: Colors.snow,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    }
})

export default Loader

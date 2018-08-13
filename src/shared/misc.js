import { Toast } from 'native-base'
import { AsyncStorage } from 'react-native'

export const ErrorResponse = () => {
    return {
        status: 500,
        message: 'Something went wrong'
    }
}

export const ToastSuccess = (props) => {
    const { message, position = 'bottom', buttonText } = props
    Toast.show({
        text: message,
        position: position,
        buttonText: buttonText,
        type: 'success',
        duration: 5000
    })
}

export const ToastError = (props) => {
    const { message, position = 'bottom', buttonText } = props
    Toast.show({
        text: message,
        position: position,
        buttonText: buttonText,
        type: 'danger',
        duration: 5000
    })
}

export async function setAsyncStorage(key, value) {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (error) {
        // Error saving data
    }
}

export async function getAsyncStorage(key) {
    try {
        const value = await AsyncStorage.getItem(key)
        return value
    } catch (error) {
        // Error retrieving data
        return error
    }
}

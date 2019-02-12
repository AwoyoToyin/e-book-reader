/**
 * E-Book-Reader APP
 * 
 * AccountReducer
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import update from 'react-addons-update'

import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from '../Utils/action-types'

const initialState = {
    info: {},
    isLoading: false,
    fetched: false,
    error: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return update(state, {
                isLoading: {
                    $set: true
                },
                info: {
                    $set: {}
                }
            })

        case LOGIN_SUCCESS:
            return update(state, {
                isLoading: {
                    $set: false
                },
                fetched: {
                    $set: true
                },
                info: {
                    $set: action.payload
                }
            })

        case LOGIN_FAILURE:
            return update(state, {
                isLoading: {
                    $set: false
                },
                fetched: {
                    $set: false
                },
                error: {
                    $set: action.error
                }
            })

        default:
            return state
    }
}

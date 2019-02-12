/**
 * E-Book-Reader APP
 * 
 * AccountAction
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import axios from 'axios'

import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from '../Utils/action-types'
import { ErrorResponse, ToastError } from '@shared'

/** LOGIN ACTIONS */
export function login(payload) {
    return { type: LOGIN, payload }
}

export function loginSuccess(payload) {
    return { type: LOGIN_SUCCESS, payload }
}

export function loginFailure(error) {
    return { type: LOGIN_FAILURE, error }
}

export function performLogin(payload) {
    /** Send a request to our API to log customer in */
    return new Promise((resolve, reject) => {
        if (payload.phone !== '09012345678' || payload.password !== 'password') {
            return reject(ErrorResponse())
        }

        return resolve({
            name: 'Philip Balogun',
            token: 'TK73671863554'
        })
    })
}
/** LOGIN ACTIONS */

/**
 * E-Book-Reader APP
 * 
 * AccountEpic
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { setAsyncStorage, ToastError, ToastSuccess } from '@shared'
import { ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, delay, map, switchMap } from 'rxjs/operators'

import { loginFailure, loginSuccess, performLogin } from '../actions'
import { LOGIN } from '../Utils/action-types'

const logCustomerIn = (response) => {
    return setAsyncStorage('customer', JSON.stringify(response))
        .then(() => {
            // show success message
            ToastSuccess({
                message: 'Login successful',
            })
            return loginSuccess(response)
        })
}

export const loginEpic = action$ => action$.pipe(
    ofType(LOGIN),
    delay(2000), // delay request for 2 seconds
    switchMap(action => from(performLogin(action.payload)).pipe(
        map(response => logCustomerIn(response)),
        catchError(error => {
            // show error response
            ToastError({
                message: 'Invalid credentials',
                // position: 'top',
                buttonText: 'Retry',
            })
            return of(loginFailure(error))
        })
    )),
)

/**
 * E-Book-Reader APP
 * 
 * Reducers
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { combineReducers } from 'redux'

import accountReducer from './account.reducer'
// import categoryReducer from './category.reducer'

export default combineReducers({
    customer: accountReducer,
    // category: categoryReducer,
})

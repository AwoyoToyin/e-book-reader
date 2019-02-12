/**
 * E-Book-Reader APP
 * 
 * Login Query
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import gql from 'graphql-tag'

export default gql`
    query user($login: String!) {
        user(login: $login) {
            avatarUrl
            email
            name
        }
    }
`

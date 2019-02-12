/**
 * E-Book-Reader APP
 * 
 * Customer Resolver
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import query from '../query/login.query';

const RIDER = {
    defaults: {
        currentCustomer: {
            __typename: 'CurrentCustomer',
            avatarUrl: null,
            email: null,
            name: null,
        }
    },
    resolvers: {
        Query: {
            login: (_, { login }, { cache }) => {
                console.log('login: ', login)
                const previousState = cache.readQuery({ query })
                const data = {
                    ...previousState,
                    currentCustomer: {
                        ...previousState.currentCustomer,
                        ...value
                    }
                }
                cache.writeData({ query, data })
            },
        },
    }
}

export default RIDER

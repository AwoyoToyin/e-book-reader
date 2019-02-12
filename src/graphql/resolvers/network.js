/**
 * E-Book-Reader APP
 * 
 * Network Resolver
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
const NETWORK = {
    defaults: {},
    resolvers: {
        Mutation: {
            updateNetworkStatus: (_, { isConnected }, { cache }) => {
                const data = {
                    networkStatus: {
                        __typename: 'NetworkStatus',
                        isConnected
                    },
                };
                cache.writeData({ data });
                return null;
            },
        }
    }
}

export default NETWORK

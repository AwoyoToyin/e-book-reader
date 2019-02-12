/**
 * E-Book-Reader APP
 * 
 * SetupApollo
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { InMemoryCache } from 'apollo-cache-inmemory'
import { CachePersistor } from 'apollo-cache-persist'
import ApolloClient from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import { withClientState } from 'apollo-link-state'
import merge from 'lodash.merge'
import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'

import { customer, network } from './resolvers'

const SCHEMA_VERSION = '0.0.1' // Must be a string.
const SCHEMA_VERSION_KEY = 'apollo-schema-versioning'

export default async function setupApollo() {
    const cache = new InMemoryCache()

    const stateLink = withClientState({
        ...merge(customer, network),
        cache,
    })

    // const persistor = new CachePersistor({
    //     cache,
    //     storage: AsyncStorage,
    // })

    // // Read the current schema version from AsyncStorage.
    // let currentVersion = await AsyncStorage.getItem(SCHEMA_VERSION_KEY)

    // if (currentVersion === SCHEMA_VERSION) {
    //     // If the current version matches the latest version,
    //     // we're good to go and can restore the cache.
    //     await persistor.restore()
    // } else {
    //     // Otherwise, we'll want to purge the outdated persisted cache
    //     // and mark ourselves as having updated to the latest version.
    //     await persistor.purge()
    //     await AsyncStorage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION)
    // }

    const client = new ApolloClient({
        cache,
        link: ApolloLink.from([
            stateLink,
            onError(({ graphQLErrors, networkError }) => {
                if (graphQLErrors)
                    graphQLErrors.map(({ message, locations, path }) =>
                        console.log(
                            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                        ),
                    )
                if (networkError) console.log(`[Network error]: ${networkError}`)
            }),
            new HttpLink({
                uri: 'https://api.github.com/graphql',
                // credentials: 'same-origin',
                dataIdFromObject: r => r.id,
            })
        ]),
    })

    return client
}

/**
 * E-Book-Reader APP
 * 
 * HomeCarousel Component
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Carousel from 'react-native-snap-carousel'

import { SliderEntry } from '../components'
import { itemWidth, sliderWidth } from '../styles/SliderEntry.style'

const CAROUSEL_BOOKS = [
    {
        title: 'Favourites landscapes 1',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/SsJmZ9jl.jpg'
    },
    {
        title: 'Favourites landscapes 2',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/5tj6S7Ol.jpg'
    },
    {
        title: 'Favourites landscapes 3',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat',
        illustration: 'https://i.imgur.com/pmSqIFZl.jpg'
    },
    {
        title: 'Favourites landscapes 4',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/cA8zoGel.jpg'
    },
    {
        title: 'Favourites landscapes 5',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/pewusMzl.jpg'
    },
    {
        title: 'Favourites landscapes 6',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat',
        illustration: 'https://i.imgur.com/l49aYS3l.jpg'
    }
]

const _renderItem = ({ item, index }) => {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />
}

const HomeCarousel = (props) => (
    <View style={styles.exampleContainer}>
        <Carousel
            data={CAROUSEL_BOOKS}
            renderItem={_renderItem}
            parallax={true}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            inactiveSlideScale={0.95}
            inactiveSlideOpacity={0.65}
            enableMomentum={true}
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContentContainer}
            activeAnimationType={'spring'}
            activeAnimationOptions={{
                friction: 4,
                tension: 40
            }}
        />
    </View>
)

const styles = StyleSheet.create({

})

export default HomeCarousel

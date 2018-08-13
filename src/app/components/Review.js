/**
 * E-Book-Reader APP
 * 
 * Review Component
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { Colors, Layout } from '@shared';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StarRating from 'react-native-star-rating';

export default class Review extends React.PureComponent {
    render() {
        const { name, rating, comment } = this.props
        return (
            <View style={styles.container}>
                {/** Customer's photo */}
                <View style={styles.customerPhoto}></View>
                <View style={styles.reviewInfo}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.name}>{name}</Text>
                    <View style={{ width: 90, marginVertical: 6 }}>
                        <StarRating
                            disabled={false}
                            emptyStar={'ios-star-outline'}
                            fullStar={'ios-star'}
                            halfStar={'ios-star-half'}
                            iconSet={'Ionicons'}
                            maxStars={5}
                            rating={rating}
                            fullStarColor={Colors.yellow50}
                            starSize={15}
                        />
                    </View>
                    <Text numberOfLines={3} ellipsizeMode='tail' style={styles.comment}>{comment}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 50,
        width: Layout.window.width - 105,
    },
    customerPhoto: {
        height: 50,
        width: 50,
        backgroundColor: Colors.congoBrown,
        borderRadius: 50,
        marginRight: 15,
    },
    reviewInfo: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 12,
        color: Colors.congoBrown,
    },
    comment: {
        fontSize: 12,
        color: Colors.congoBrown,
        lineHeight: 20,
    },
})

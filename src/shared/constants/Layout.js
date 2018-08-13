/**
 * E-Book-Reader APP
 * 
 * Layout
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Layout = {
    window: {
        width,
        height,
    },
    isSmallDevice: width < 375,
    aspectRatio: width / height,
}

export default Layout

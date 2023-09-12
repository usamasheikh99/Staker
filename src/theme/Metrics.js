import {Dimensions, Platform, PixelRatio, StyleSheet} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const scaleFont = (size) => RFValue(size)

export default Metrics = {
  width: width,
  height: height,
  scaleWidth: (val) => (width * val) / 100,
  scaleHeight: (val) => (width * val) / 100,
  defaultMargin: width * 0.04,
  smallMargin: width * 0.03,
  largeMargin: width * 0.08,
  smallFont:scaleFont(10),
  defaultFont:scaleFont(14),
  largeFont:scaleFont(16),
  fontSize: (e) => scaleFont(e)
}


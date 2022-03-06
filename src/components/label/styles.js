import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLORS } from 'utils/constants/colors';

const styles = StyleSheet.create({
  label: {
    fontSize: scale(16),
    color: COLORS.black,
  },
});

export default styles;
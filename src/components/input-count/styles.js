import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLORS } from 'utils/constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderBottomWidth: scale(0.4),
  },
  input: {
    paddingVertical: scale(10),
    fontSize: scale(14),
  },
  blurBorder: {
    borderColor: COLORS.darkGray,
  },
  activeBorder: {
    borderColor: COLORS.primary,
    borderBottomWidth: scale(1),
  },
});

export default styles;

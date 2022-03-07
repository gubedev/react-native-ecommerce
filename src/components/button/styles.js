import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLORS } from 'utils/constants/colors';

const styles = StyleSheet.create({
  container: {
    height: scale(50),
    backgroundColor: COLORS.primary,
    borderRadius: scale(5),
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    marginVertical: scale(10),
    paddingHorizontal: scale(50),
  },
  label: {
    fontSize: scale(16),
    fontWeight: '300',
    color: COLORS.white,
    letterSpacing: scale(2),
  },
  unFilled: {
    backgroundColor: 'transparent',
    borderWidth: scale(0.7),
    borderColor: COLORS.primary,
  },
  unFilledLabel: {
    color: COLORS.black,
  },
});

export default styles;

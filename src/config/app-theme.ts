import {StyleSheet} from 'react-native';

export const colors = {
  darkGray: '#2D2D2D',
  lightGray: '#9B9B9B',
  orange: '#FF9427',

  textPrimary: 'white',
  textSecondary: '#666666',
  background: '#000000',
};

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
    flex: 1,
  },
  primaryColor: {
    color: colors.textPrimary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  mainResult: {
    color: colors.textPrimary,
    fontSize: 70,
    fontWeight: '500',
    marginEnd: 10,
    textAlign: 'right',
  },
  subResult: {
    color: colors.textSecondary,
    fontSize: 40,
    fontWeight: '400',
    marginEnd: 10,
    textAlign: 'right',
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.darkGray,
    borderRadius: 100,
    height: 80,
    justifyContent: 'center',
    marginHorizontal: 10,
    width: 80,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
    // padding: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '100%',
  },
});

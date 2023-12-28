import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textInputMain: {
    color: 'white',
    fontSize: 13,
    paddingHorizontal: 8,
  },
  viewMain: {
    backgroundColor: '#0F1923',
    borderRadius: 4,
    height: 48,
    justifyContent: 'center',
    padding: 8,
  },
  viewMainError: {
    borderColor: 'red',
  },
  viewMainFocused: {
    borderColor: 'white',
  },
});

export default styles;

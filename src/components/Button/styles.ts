import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  iconMain: {
    paddingLeft: 8,
  },
  pressableMain: {
    alignItems: 'center',
    borderRadius: 4,
    flexDirection: 'row',
    height: 48,
    justifyContent: 'center',
  },
  textMain: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
  },
  viewDisabledOverlay: {
    backgroundColor: 'black',
    bottom: 0,
    left: 0,
    opacity: 0.5,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  viewMain: {
    position: 'relative',
  },
});

export default styles;

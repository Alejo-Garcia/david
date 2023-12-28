import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollViewSettings: {
    marginHorizontal: 8,
    paddingTop: 8,
  },
  scrollViewSettingsStatus: {
    flex: 1,
  },
  tableBorder: {borderColor: '#c8e1ff', borderWidth: 2},
  tableHead: {
    backgroundColor: '#f1f8ff',
    height: 40,
  },
  tableHeadText: {
    margin: 6,
  },
  textError: {
    color: 'white',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
  },
  viewActivityIndicator: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  viewButtonError: {
    marginTop: 16,
  },
  viewError: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  viewMain: {
    backgroundColor: '#19232D',
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;

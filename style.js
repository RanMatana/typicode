import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  linearGradient: {
    flex: 1,
  },
  contentTxt: {
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
  },
  content: {
    height: 80,
    width,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  row: {
    width: width / 1.1,
    height: height / 8,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
    flexDirection: 'row',
  },
  rowName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  rowText: {
    fontSize: 12,
  },
  viewInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  input: {
    width: width / 1.4,
    backgroundColor: 'white',
    borderRadius: 20,
    height: 50,
  },
  submit: {
    width: width / 2,
    backgroundColor: 'white',
    height: 50,
    margin: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

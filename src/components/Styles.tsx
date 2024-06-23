import {StyleSheet} from 'react-native';

export const colors = {
  white: '#FFF',
  green: '#1A2421',
  grey: '#CCC',
  grey100: '#E0E0E0',
};

export const CommonStyles = StyleSheet.create({
  flex1: {flex: 1},
  fdRow: {flexDirection: 'row'},
  fdColumn: {flexDirection: 'column'},
});

export const ProductStyles = StyleSheet.create({
  Title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: colors.green,
  },
  Picker: {height: 50, width: 150},
  Card: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    borderRadius: 10,
    marginVertical: 8,
    padding: 8,
  },
  ShowMoreBTN: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.grey100,
    marginVertical: 10,
    borderRadius: 10
  },
  NoData: {padding: 10},
  verticalBar: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    paddingHorizontal: 8,
  },
});

export const FilterStyles = StyleSheet.create({
  Container: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
  PriceRange: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
  Chip: {
    padding: 8,
    backgroundColor: colors.grey100,
    borderRadius: 5,
    marginRight: 10,
  },
});

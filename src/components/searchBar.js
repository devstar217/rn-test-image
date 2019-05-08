import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default class SearchBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ionicons
          name='ios-search'
          size={20}
          color='#555'
        />
        <TextInput
          style={styles.inputStyle}
          placeholder='Search'
          underlineColorAndroid='transparent'
          placeholderTextColor='#fff'
        />
        <Ionicons
          name='md-search'
          size={25}
          color='#fff'
          onPress={() => this.props.navigation.navigate('searchScreen')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    margin: 10,
    backgroundColor: '#2e2e2e',
    borderRadius: 10,
    paddingHorizontal: 10
  },
  inputStyle: {
    width: width - 110,
    height: 30,
    alignSelf: 'center',
    color: '#fff',
    backgroundColor: 'transparent'
  }
})

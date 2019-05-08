import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TextLabel from './label';

const { width } = Dimensions.get('window');

const HeaderLabelComponent = ({ label, showBackItem, navigation }) => {
  return (
    <View style={styles.container}>
      {showBackItem &&
        <TouchableOpacity
          style={styles.backItemContainerStyle}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name='ios-arrow-back'
            size={20}
            color='#fff'
          />
          <TextLabel
            fontSize={15}
            color='#fff'
            label='Back'
            marginLeft={5}
          />
        </TouchableOpacity>}
      {label && <TextLabel
          fontSize={30}
          fontWeight='bold'
          color='#fff'
          label={label}
        />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 70,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
  },
  backItemContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default HeaderLabelComponent

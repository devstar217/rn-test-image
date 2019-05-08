import React from 'react';
import { View, StyleSheet } from 'react-native';

const HeaderContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 160,
    paddingTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    backgroundColor: '#272727'
  }
})

export default HeaderContainer;

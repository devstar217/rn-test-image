import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const TextLabel = ({ fontSize, label, ...styles }) => {
  return (
    <View>
      <Text
        style={{
            ...styles,
            fontSize: fontSize,
            lineHeight: fontSize + 2,
        }}
      >
        {label}
      </Text>
    </View>
  )
}

export default TextLabel;

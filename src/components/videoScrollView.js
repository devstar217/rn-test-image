import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image } from 'react-native';
import TextLabel from './label';
import { ENTRIES1, ENTRIES2 } from '../static';

const { width, height } = Dimensions.get('window');

export default class VideoScrollView extends React.Component {

  _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemStyle}
        onPress={() =>
          this.props.navigation.navigate('descriptionScreen', {
            data: item
          })
        }
      >
        <View style={styles.imageContainerStyle}>
          <Image
            source={{ uri: item.download_url }}
            style={styles.imageStyle}
          />
        </View>
      </TouchableOpacity>
    )
  }

  separator = () => {
    return (
      <View style={styles.separatorStyle}/>
    )
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextLabel
          fontSize={16}
          fontWeight='bold'
          color='#fff'
          label={this.props.label}
        />
        <FlatList
          horizontal
          data={this.props.data}
          renderItem={this._renderItem}
          ItemSeparatorComponent={this.separator}
          keyExtractor={item => item.id}
        />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  itemStyle: {
    width: 90,
    height: 130,
    backgroundColor: 'transparent'
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
    height: 20
  },
  separatorStyle: {
    width: 5,
    height: 130,
    backgroundColor: 'transparent',
  },
  imageStyle: {
    width: 90,
    height: 98
  },
  imageContainerStyle: {
    width: 90,
    height: 100,
    borderColor: '#7cfc00',
    borderBottomWidth: 2
  }
});

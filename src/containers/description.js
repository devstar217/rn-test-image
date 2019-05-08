import React from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome, Foundation, Feather } from '@expo/vector-icons';
import Stars from 'react-native-stars';
import HeaderLabelComponent from '../components/headerLabelComponent';
import TextLabel from '../components/label';

const { height } = Dimensions.get('window');

class Description extends React.Component {
  componentWillMount() {
    this.setState({ data: this.props.navigation.getParam('data') });
  }
  render() {
    const data = this.state.data;
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: data.download_url }}
          style={StyleSheet.absoluteFillObject}
          resizeMode='cover'
        />
        <View style={styles.mainContainerStyle}>
          <View style={styles.header}>
            <HeaderLabelComponent
              showBackItem
              navigation={this.props.navigation}
            />
          </View>
          <ScrollView style={styles.bodyContainerStyle}>
            <View style={styles.titleContainerStyle}>
              <View style={styles.titleStyle}>
                <TextLabel
                  fontSize={22}
                  fontWeight='bold'
                  color='#fff'
                  label="Black Panther"
                />
                <View style={styles.rowContainerStyle}>
                  <TextLabel
                    fontSize={22}
                    color='#fff'
                    label="(2018)"
                  />
                  <FontAwesome
                    name='refresh'
                    size={25}
                    color='white'
                    style={{marginLeft: 5}}
                  />
                  <FontAwesome
                    name='search'
                    size={25}
                    style={{marginLeft: 5}}
                    color='white'
                  />
                  <Foundation
                    name='wrench'
                    size={30}
                    style={{marginLeft: 5}}
                    color='white'
                  />
                </View>
                <View style={styles.rowContainerStyle}>
                  <Stars
                    default={3.67}
                    spacing={5}
                    count={5}
                    backingColor='cornsilk'
                    fullStar={<FontAwesome name={'star'} size={15} style={[styles.myStarStyle]}/>}
                    emptyStar={<FontAwesome name={'star'} size={15} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                  />
                  <TextLabel
                    fontSize={15}
                    color='#fff'
                    marginLeft={5}
                    label="(2018)"
                  />
                </View>
              </View>
              <Image
                source={{ uri: data.download_url }}
                resizeMode='cover'
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.descriptionContainer}>
              <TextLabel
                fontSize={16}
                fontWeight='bold'
                color='#fff'
                label='DESCRIPTION'
              />
              <TextLabel
                fontSize={14}
                fontWeight='bold'
                color='#fff'
                marginTop={5}
                label='this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences'
              />
            </View>
            <View style={styles.informationContainerStyle}>
              <TextLabel
                fontSize={16}
                fontWeight='bold'
                color='#fff'
                label='INFORMATION'
              />
              <View style={styles.rowContainerStyle}>
                <View style={styles.informationTitleStyle}>
                  <TextLabel
                    fontSize={15}
                    fontWeight='bold'
                    color='#fff'
                    label='Studio'
                  />
                  <TextLabel
                    fontSize={15}
                    fontWeight='bold'
                    color='#fff'
                    label='Genre'
                  />
                  <TextLabel
                    fontSize={15}
                    fontWeight='bold'
                    color='#fff'
                    label='Released'
                  />
                  <TextLabel
                    fontSize={15}
                    fontWeight='bold'
                    color='#fff'
                    label='Runtime'
                  />
                </View>
                <View style={styles.informationDescriptionContainerStyle}>
                  <TextLabel
                    fontSize={15}
                    fontWeight='bold'
                    color='#fff'
                    label='Studio'
                  />
                  <TextLabel
                    fontSize={15}
                    fontWeight='bold'
                    color='#fff'
                    label='Genre'
                  />
                  <TextLabel
                    fontSize={15}
                    fontWeight='bold'
                    color='#fff'
                    label='Released'
                  />
                  <TextLabel
                    fontSize={15}
                    fontWeight='bold'
                    color='#fff'
                    label='Runtime'
                  />
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={styles.buttomContainerStyle}>
            <TouchableOpacity style={styles.addItemContainerStyle}>
              <TextLabel
                fontSize={20}
                fontWeight='bold'
                color='#fff'
                label='Add to Library'
              />
              <View style={styles.iconContainerStyle}>
                <Feather
                  name='plus'
                  size={20}
                  color='white'
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  mainContainerStyle: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 20
  },
  bodyContainerStyle: {
    height: height - 180,
  },
  header: {
    height: 100,
    justifyContent: 'flex-end'
  },
  titleContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  titleStyle: {
    alignItems: 'flex-start'
  },
  imageStyle: {
    width: 100,
    height: 150
  },
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  rowContainerStyle: {
    flexDirection: 'row'
  },
  descriptionContainer: {
    marginTop: 20
  },
  informationContainerStyle: {
    marginTop: 40
  },
  informationTitleStyle: {
    marginTop: 10,
    alignItems: 'flex-end'
  },
  informationDescriptionContainerStyle: {
    marginLeft: 10,
    marginTop: 10
  },
  buttomContainerStyle: {
    height: 80,
    marginTop: 10
  },
  addItemContainerStyle: {
    width: 150,
    height: 30,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent'
  },
  iconContainerStyle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#40dc96',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
});

export default Description;

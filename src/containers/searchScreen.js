import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { AppLoading } from 'expo';
import { Feather, FontAwesome } from '@expo/vector-icons';
import Stars from 'react-native-stars';
import HeaderLabelComponent from '../components/headerLabelComponent';
import SearchBar from '../components/searchBar';
import HeaderContainer from './headerContainer';
import TextLabel from '../components/label';

const { width, height } = Dimensions.get('window');

class Main extends React.Component {
  state = { apiCalling: true }

  componentWillMount() {
    const url = "https://randomuser.me/api/?seed=${seed}&page=${page}&results=20";
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          apiCalling: false,
          data: res.results
        })
      })
  }

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
        <TextLabel
          fontSize={20}
          fontWeight='bold'
          color='#fff'
          label={item.name.last}
        />
        <View style={styles.descriptionContainerStyle}>
          <Image
            source={{ uri: item.picture.thumbnail }}
            style={styles.imageStyle}
          />
          <View style={styles.videoDescriptionContainerStyle}>
            <View style={styles.starContainerStyle}>
              <Stars
                default={3.67}
                spacing={5}
                count={5}
                backingColor='cornsilk'
                fullStar={<FontAwesome name={'star'} size={15} style={[styles.myStarStyle]}/>}
                emptyStar={<FontAwesome name={'star-o'} size={15} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
              />
              <TextLabel
                fontSize={10}
                fontWeight='bold'
                color='#fff'
                label='| 1111 |'
              />
            </View>
            <TextLabel
              fontSize={16}
              fontWeight='bold'
              color='#fff'
              label='1956'
            />
            <TextLabel
              fontSize={14}
              fontWeight='bold'
              color='#fff'
              width={width - 160}
              height={95}
              label='this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences this is test sentences'
            />
          </View>
        </View>
        <TouchableOpacity style={styles.addItemContainerStyle}>
          <TextLabel
            fontSize={15}
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
        <HeaderContainer>
          <HeaderLabelComponent
            label="Search"
            showBackItem
            navigation={navigation}
          />
          <SearchBar navigation={navigation} />
        </HeaderContainer>
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.separator}
          contentContainerStyle={styles.listContainerStyle}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  listContainerStyle: {
    paddingVertical: 20
  },
  itemStyle: {
    width: width - 40,
    height: 200,
    borderRadius: 8,
    backgroundColor: '#272727',
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  separatorStyle: {
    width: width,
    height: 20,
    backgroundColor: 'transparent'
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
  descriptionContainerStyle: {
    flexDirection: 'row'
  },
  imageStyle: {
    width: 90,
    height: 120
  },
  videoDescriptionContainerStyle: {
    marginLeft: 5
  },
  starContainerStyle: {
    flexDirection: 'row'
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
  }
});

export default Main

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { AppLoading } from 'expo';
import VideoScrollView from '../components/videoScrollView';
import HeaderLabelComponent from '../components/headerLabelComponent';
import SearchBar from '../components/searchBar';
import HeaderContainer from './headerContainer';

class Main extends React.Component {
  state = { apiCalling: true }

  componentWillMount() {
    const url = "https://picsum.photos/v2/list";
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          apiCalling: false,
          data: res
        })
      })
  }

  renderScrollView = () => {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <HeaderContainer>
          <HeaderLabelComponent
            label="Home"
            showBackItem
            navigation={navigation}
          />
          <SearchBar navigation={navigation} />
        </HeaderContainer>
        <ScrollView>
          <VideoScrollView
            label="Available Movies"
            data={this.state.data}
            navigation={this.props.navigation}
          />
          <VideoScrollView
            label="Wanted Movies"
            data={this.state.data}
            navigation={this.props.navigation}
          />
          <VideoScrollView
            label="Discover New Movies"
            data={this.state.data}
            navigation={this.props.navigation}
          />
          <VideoScrollView
            label="Extra Movies"
            data={this.state.data}
            navigation={this.props.navigation}
          />
        </ScrollView>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.apiCalling ? <AppLoading />
          : this.renderScrollView()
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default Main

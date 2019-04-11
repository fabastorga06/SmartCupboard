import React from 'react';
import { Image, FlatList, ImageBackground, View, TouchableOpacity, StyleSheet } from 'react-native';
import tool from '../../images/tool.png';
import market from '../../images/market.png';
import backgroundImg from '../../images/screen4.jpg';

export default class Preview extends React.Component {

  static navigationOptions = {
    title: 'SMART CUPBOARD',
  };

  constructor(props)
  {
    super(props);

    this.state = { GridViewItems: [
      {key: 'Configuration', image: tool, navigate: 'Configuration' },
      {key: 'Application', image: market, navigate: 'MainPage'}]
    }
  }

  render() {
    return (
      <ImageBackground source={backgroundImg} style={styles.container}>
        <View style={styles.MainContainer}>
          <FlatList data={ this.state.GridViewItems }
            renderItem={({item}) =>
              <TouchableOpacity style={styles.previewBlock}
                onPress={()=> {this.props.navigation.navigate(item.navigate, {})}}>
                <Image source={item.image} style={styles.previewLogo}/>
              </TouchableOpacity>} numColumns={2}/>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  MainContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    margin: 14
  },
  previewBlock: {
    justifyContent: 'center',
    flex:1,
    alignItems: 'center',
    height: 60,
    width: 200,
    margin: 5,
    backgroundColor: '#00BCD4',
    opacity: 0.8,
    borderRadius: 25
  },
  previewLogo: {
    height: 50,
    width: 50,
    justifyContent: 'center',
  },
})


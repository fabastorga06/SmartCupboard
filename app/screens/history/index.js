import React from 'react';
import { ImageBackground, FlatList, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import backgroundImg from '../../images/screen10.jpg';

export default class History extends React.Component {

  static navigationOptions = {
    title: 'SMART CUPBOARD',
  };

  render() {
    const {params} = this.props.navigation.state
      return(
        <ImageBackground source={backgroundImg} style={styles.container}>
          <View style={styles.MainContainer}>
            <View style={styles.content}>
                <FlatList data={ params.list }
                  renderItem={({item}) =>
                    <View style={styles.GridViewBlock}>
                      <TouchableOpacity style={styles.buttonContainer}
                        onPress={()=> {this.props.navigation.navigate('Products', { list : item})}}>
                        <Text style={styles.title}>{item.date}</Text>
                      </TouchableOpacity>
                    </View>}
                    keyExtractor={(item,index) => index.toString()}
                    numColumns={1}/>
              </View>
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
    alignItems: 'center',
  },
  MainContainer:{
    justifyContent: 'center',
    flex:1,
    margin: 14
  },
  content: {
    padding: 20,
    backgroundColor: '#7E8F92',
    width: 350,
    opacity: 0.8,
    borderRadius: 25
  },
  GridViewBlock: {
    justifyContent: 'center',
    flex:1,
    alignItems: 'center',
    height: 60,
    width: 300,
    margin: 5
  },
  buttonContainer: {
    width: 300,
    height: 55,
    borderRadius: 25,
    backgroundColor: "#00BCD4",
    justifyContent: 'center',
    marginTop: 20
  },
  title: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
})

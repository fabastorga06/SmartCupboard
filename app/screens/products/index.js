import React from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import backgroundImg from '../../images/screen10.jpg';

export default class Products extends React.Component {

  static navigationOptions = {
    title: 'SMART CUPBOARD',
  };

  render() {
    const {params} = this.props.navigation.state
    return (
      <ImageBackground source={backgroundImg} style={styles.container}>
        <View style={styles.MainContainer}>
          <View style={styles.header}>
            <Text style={styles.title}> {params.list.caseA.product} : {params.list.caseA.quantity}</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.title}> {params.list.caseB.product} : {params.list.caseB.quantity}</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.title}> {params.list.caseC.product} : {params.list.caseC.quantity}</Text>
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
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#7E8F92',
    textAlign: 'center',
    padding: 10,
    height: 60,
    width: 350,
    opacity: 0.8,
    borderRadius: 25,
    margin: 4
  },
})

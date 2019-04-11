import React from 'react';
import { Text, ImageBackground, View, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import backgroundImg from '../../images/screen7.jpg';
import { api } from '../../configuration/config';

export default class Configuration extends React.Component {

  static navigationOptions = {
    title: 'SMART CUPBOARD',
  };

  _executeQuery = async (query) => {
		try{
		  let response = await fetch(query)
      let resjson = await response.json()
      this._handleResponse(resjson)
		}
		catch(error){
      this.AlertMessage("API ERROR")
		}
  }

  _executeQueryLights = async (query) => {
		try{
		  let response = await fetch(query)
      let resjson = await response.json()
      this._handleResponseLights(resjson)
		}
		catch(error){
      this.AlertMessage("API ERROR")
		}
  }

  AlertMessage(item) {
    Alert.alert(item);
  }

  _handleResponse= (response) =>{
    this.props.navigation.navigate('Names', {response:response})
  }

  _onPressProducts = () => {
    this._executeQuery(api.URL+'/api/v1/products/names')
  }

  _handleResponseLights= (response) =>{
    this.AlertMessage('Lights '+response.status)
  }

  _onPressLights = () => {
    this._executeQueryLights(api.URL+'/api/v1/products/lights')
  }

  render() {
    return (
      <ImageBackground source={backgroundImg} style={styles.container}>
        <View style={styles.MainContainer}>
          <TouchableOpacity style={styles.buttonContainer}
            onPress = {this._onPressProducts}>
            <Text style={styles.title}>Products</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}
            onPress = {this._onPressLights}>
            <Text style={styles.title}>Lights</Text>
          </TouchableOpacity>
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
  buttonContainer: {
    width: 300,
    height: 85,
    borderRadius: 25,
    backgroundColor: "#00BCD4",
    justifyContent: 'center',
    marginTop: 20
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
})

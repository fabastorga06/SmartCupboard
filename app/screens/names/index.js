import React from 'react';
import { ImageBackground, Text, TextInput, View, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import backgroundImg from '../../images/screen10.jpg';
import { api } from '../../configuration/config';

export default class Names extends React.Component {

  static navigationOptions = {
    title: 'SMART CUPBOARD',
  };

  constructor(props)
  {
    super(props);

    this.state = {
        caseA : this.props.navigation.state.params.response.caseA,
        caseB : this.props.navigation.state.params.response.caseB,
        caseC : this.props.navigation.state.params.response.caseC
    }
  }


  _handleResponse = (response) =>{
    if(response.nModified==1){
      this.AlertMessage('Products Updated')
    }else{
      this.AlertMessage('Nothing to update')
    }
  }

  _executeQuery = async (query) => {
    try{
      let response = await fetch(query,{method: "PUT"})
      let resjson = await response.json()
      this._handleResponse(resjson)
    }
    catch(error){
      this.AlertMessage("ERROR")
    }
  }

  _onPressSave= () =>{
    this._executeQuery(api.URL+'/api/v1/products/update?caseA='+this.state.caseA+'&caseB='+this.state.caseB+'&caseC='+this.state.caseC)
  }

  AlertMessage (item) {
    Alert.alert(item);
  }

  render() {
    const {params} = this.props.navigation.state
    return (
      <ImageBackground source={backgroundImg} style={styles.container}>
        <View style = {styles.MainContainer}>
          <View style = {styles.inputContainer}>
            <TextInput style={styles.title}
              onChangeText={(caseA) => this.setState({caseA})}
              value={this.state.caseA}/>
          </View>
          <View style = {styles.inputContainer}>
            <TextInput style={styles.title}
              onChangeText={(caseB) => this.setState({caseB})}
              value={this.state.caseB}/>
          </View>
          <View style = {styles.inputContainer}>
              <TextInput style={styles.title}
              onChangeText={(caseC) => this.setState({caseC})}
              value={this.state.caseC}/>
          </View>
          <View style = {{width: 300,height: 70}}>
            <TouchableOpacity style={styles.buttonContainer}
              onPress = {this._onPressSave}>
              <Text style={styles.title}>Save</Text>
            </TouchableOpacity>
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
  MainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  inputContainer:{
    width: 300,
    height: 50,
    backgroundColor: '#7E8F92',
    opacity: 0.8,
    borderRadius: 25,
    margin: 2
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
  buttonContainer: {
    width: 300,
    height: 85,
    borderRadius: 25,
    backgroundColor: "#00BCD4",
    justifyContent: 'center',
    marginTop: 20
  },
})

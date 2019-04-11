import React from 'react';
import { ImageBackground, FlatList, Text, View, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import Collapsible from 'react-native-collapsible';
import backgroundImg from '../../images/screen8.jpg';
import { api } from '../../configuration/config';

export default class MainPage extends React.Component {

  static navigationOptions = {
    title: 'SMART CUPBOARD',
  };

  constructor(props)
  {
    super(props);

    this.state = {
      collapsed: true,
      GridViewItems: []
    }
  }

  _handleResponseProducts = (response) =>{
    this.setState({
      GridViewItems: response,
      collapsed: !(this.state.collapsed)
    });
	}

	_executeQueryProducts = async (query) => {
		try{
		  let response = await fetch(query)
		  let resjson = await response.json()
		  this._handleResponseProducts(resjson)
		}
		catch(error){
      this.AlertMessage("API ERROR")
		}
  }

  _executeQueryList = async (query) => {
		try{
		  let response = await fetch(query)
		  let resjson = await response.json()
		  this._handleResponseList(resjson)
		}
		catch(error){
      this.AlertMessage("API ERROR")
		}
  }

  _handleResponseList = (response) =>{
    this.props.navigation.navigate('History', {list : response})
  }

  _onPressHistory = () =>{
    this._executeQueryList(api.URL+'/api/v1/shopping/list')
  }

  _toggleExpanded = () => {
    this._executeQueryProducts(api.URL+'/api/v1/products')
  }

  AlertMessage (item) {
    Alert.alert(item);
  }

  render() {
    return (
      <ImageBackground source={backgroundImg} style={styles.container}>
        <View style={styles.MainContainer}>
          <TouchableOpacity onPress={this._toggleExpanded}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Products</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed} align="center">
            <View style={styles.content}>
                <FlatList data={ this.state.GridViewItems }
                  renderItem={({item}) =>
                    <View style={styles.GridViewBlock}>
                      <Text style={styles.GridText}>
                        {item.product}: {item.quantity}
                      </Text>
                    </View>} numColumns={1}/>
            </View>
          </Collapsible>
        </View>
        <View style={styles.MainContainer}>
          <TouchableOpacity style={styles.buttonContainer}
            onPress={()=> {this.props.navigation.navigate('List', {})}}>
            <Text style={styles.title}> Shopping List </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}
            onPress={this._onPressHistory}>
            <Text style={styles.title}> Shopping History </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  MainContainer:{
    justifyContent: 'center',
    flex:1,
    margin: 2,
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
  header: {
    textAlign: 'center',
    height: 45,
    width: 350,
    opacity: 0.8,
    backgroundColor: '#7E8F92',
    opacity: 0.9,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'rgb(0, 0, 0)'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
    color: '#ffffff',
    fontWeight: '500',
    opacity: 0.8
  },
  GridViewBlock: {
    justifyContent: 'center',
    flex:1,
    alignItems: 'center',
    height: 60,
    width: 300,
    margin: 5,
    backgroundColor: '#7E8F92',
    opacity: 0.9,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'rgb(0, 0, 0)'
  },
  GridText: {
    color: '#fff',
    padding: 10,
    fontSize: 16,
    textAlign: 'justify'
  },
  content: {
    padding: 5,
    width: 350,
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  },
})


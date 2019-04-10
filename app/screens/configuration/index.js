import React from 'react';
import { Text, FlatList, ImageBackground, View, TouchableOpacity, Alert } from 'react-native';
import backgroundImg from '../../images/screen7.jpg';
import styles from '../../styles/styles';

export default class Configuration extends React.Component {

    static navigationOptions = {
        title: 'SMART CUPBOARD',
    };
    
    constructor(props)
    {
    super(props);

    this.state = { GridViewItems: [
        {key: 'Products', navigate: 'Names' },
        {key: 'Lights', navigate: 'MainPage'}
        ]}
    }

    _executeQuery = async (query) => {
		try{
		  let response = await fetch(query)
          let resjson = await response.json()
          this._handleResponse(resjson) 
		  
		}
		catch(error){
            this.GetGridViewItem("ERROR")
		}
    }
    
    GetGridViewItem (item) {
        Alert.alert(item);
    }
    _handleResponse= (response) =>{
        this.props.navigation.navigate('Names', {list : response})
	}
    _onPressProducts = () => {
        this._executeQuery('http://10.0.2.2:8000/api/v1/products')
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
                        onPress = {this._onPressProducts}> 
                        <Text style={styles.title}>Lights</Text>
                    </TouchableOpacity>
                </View> 
                </ImageBackground> 
        );
    }
}

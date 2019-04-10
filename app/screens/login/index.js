
import React from 'react';
import { 
  Text,
  View,
  StyleSheet,
  ImageBackground, 
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import backgroundImg from '../../images/loginBackground.jpg'
import logo from '../../images/logo.png'
import title from '../../images/title.png'
import styles from '../../styles/styles' 
//import Icon from 'react-native-vector-icons/Ionicons'

export default class Login extends React.Component {
	static navigationOptions = {
			title: 'SMART CUPBOARD'
	};

	constructor() {
		super();
		this.state = {
			showPassword: true,
			press: false,
			user: '',
			password: '',
			warningMessage: ''
		}
	}

	_showPass = () => {
		if (this.state.press == false) {
			this.setState({
				showPassword: false,
				press: true
			})
		} else {
			this.setState({
				showPassword: true,
				press: false
			})
		}
	}	

	_onUserChanged = event => {
		this.setState({
		  user: event.nativeEvent.text,
		});
	  };
	
	  _onPasswordChanged = event => {
		this.setState({
		  password: event.nativeEvent.text,
		});
	  };
	
	  _handleResponse = (response) =>{
		  
		if (this.state.user === response[0].user && this.state.password === response[0].pass) {
			this.props.navigation.navigate('Preview', {});
			this.setState({
				warningMessage: '',
				  });
		} else {
		 	this.setState({
			warningMessage: "User not founded",
		  	});
		}
	}

	  _executeQuery = async (query) => {
		try{
		  let response = await fetch(query)
		  let resjson = await response.json()
		  this._handleResponse(resjson) 
		  
		}
		catch(error){
			this.setState({
				warningMessage: 'API Error',
			});
		}
	}

	_onLoginPress = () => {
		this._executeQuery('http://10.0.2.2:8000/api/v1/auth?user='+this.state.user+'&pass='+this.state.password)
	}

	

  	render() {
    	return (
      		<ImageBackground source={backgroundImg} style={styles.rootcontainer}> 
    			<View style={styles.logoContainer}>
          			<Image source={logo} style={styles.logo} />
					<Image source={title} style={styles.titlelogin} />
        		</View>

        		<View style={styles.inputContainer}>
					<TextInput 
					style={styles.input}
					value={this.state.user}
					onChange={this._onUserChanged}
					placeholder={'Username'}
					placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
					underlineColorAndroid='transparent'
					/>          
				</View>

				<View style={styles.inputContainer}>
					<TextInput 
					style={styles.input}
					value={this.state.password}
					onChange={this._onPasswordChanged}
					placeholder={'Password'}
					secureTextEntry={this.state.showPassword}
					placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
					underlineColorAndroid='transparent'
					/>    
					<TouchableOpacity 
					style={styles.botonEye}
					onPress={this._showPass.bind(this)}
					>
					{/*	<Icon 
						name={this.state.press == false ? 'ios-eye-outline' : 'ios-eye-off-outline'} 
						size={26} 
						color={'rgba(255, 255, 255, 0.7)'} />  
					*/}
					</TouchableOpacity>      
				</View>

				<TouchableOpacity style={styles.botonLogin} onPress={this._onLoginPress}>
					<Text style={styles.text}>Login</Text>
				</TouchableOpacity>

				<Text style={styles.description}>{this.state.warningMessage}</Text>

			</ImageBackground>     
		);
	}
}


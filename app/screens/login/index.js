
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
	
	_onLoginPress = () => {
		const user = 'Fabian';
		const password = 'hola123';
	
		if (this.state.user === user && this.state.password === password) {
			this.props.navigation.navigate('Preview', {});
			this.setState({
				warningMessage: '',
				  });
		} else {
		 	this.setState({
			warningMessage: 'No existe el usuario...',
		  	});
		}
	}

  	render() {
    	return (
      		<ImageBackground source={backgroundImg} style={styles.container}> 
    			<View style={styles.logoContainer}>
          			<Image source={logo} style={styles.logo} />
					<Image source={title} style={styles.title} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
	alignItems: 'center'
  },
  logoContainer: {
	marginTop: 85,
	flexDirection: 'row'
  },
  logo: {
    height: 150,
	width: 150, 
  },
  title : {
	height: 190,
	width: 190
  },
  inputContainer: {
	marginTop: 10
  },
  input: {
	width: 300,
	height: 50,
	borderRadius: 25,
	fontSize: 18,
	paddingLeft: 45,
	marginHorizontal: 25,
	backgroundColor: 'rgba(0, 0, 0, 0.35)',
	color: 'white'
  },
  icon: {
	position: 'absolute',
	top: 25,
	left: 37
  }, 
  botonEye: {
	position: 'absolute',
	top: 25,
	right: 37
  }, 
  botonLogin: {
	width: 300,
	height: 85, 
	borderRadius: 25,
	backgroundColor: "#FFBF00",
	justifyContent: 'center',
	marginTop: 20
  },
  text: {
	color: 'white',
	fontSize: 20,
	fontWeight: 'bold',
	textAlign: 'center'
  }, 
  description: {
    marginTop: 20,
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  }
});
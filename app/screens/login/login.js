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

import background_img from '../../images/loginBackground.jpg'
import logo from '../../images/logo.png'
import title from '../../images/title.png'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Login extends React.Component {
    static navigationOptions = {
        title: 'Login'
    };

	constructor() {
		super();
		this.state = {
			showPassword: true,
			press: false
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

  	render() {
    	return (
      		<ImageBackground source={background_img} style={styles.container}> 
    			<View style={styles.logoContainer}>
          			<Image source={logo} style={styles.logo} />
					<Image source={title} style={styles.title} />
        		</View>

        		<View style={styles.inputContainer}>
					<Icon 
					name={'ios-person-outline'} 
					size={28} 
					color={'rgba(255, 255, 255, 0.7)'}
					style={styles.icon}
					/>
					<TextInput 
					style={styles.input}
					placeholder={'Username'}
					placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
					underlineColorAndroid='transparent'
					/>          
				</View>

				<View style={styles.inputContainer}>
					<Icon 
					name={'ios-lock-outline'} 
					size={28} 
					color={'rgba(255, 255, 255, 0.7)'}
					style={styles.icon}
					/>
					<TextInput 
					style={styles.input}
					placeholder={'Password'}
					secureTextEntry={this.state.showPassword}
					placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
					underlineColorAndroid='transparent'
					/>    
					<TouchableOpacity 
					style={styles.botonEye}
					onPress={this._showPass.bind(this)}
					>
						<Icon 
						name={this.state.press == false ? 'ios-eye-outline' : 'ios-eye-off-outline'} 
						size={26} 
						color={'rgba(255, 255, 255, 0.7)'} />
					</TouchableOpacity>      
				</View>

				<TouchableOpacity style={styles.botonLogin}>
					<Text style={styles.text}>Login</Text>
				</TouchableOpacity>

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
	marginTop: 200,
	flexDirection: 'row'
  },
  logo: {
    height: 200,
	width: 200, 
  },
  title : {
	height: 275,
	width: 275
  },
  inputContainer: {
	  marginTop: 10
  },
  input: {
	  width: 350,
	  height: 100,
	  borderRadius: 25,
	  fontSize: 20,
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
	  width: 350,
	  height: 100, 
	  borderRadius: 25,
	  backgroundColor: "#FFBF00",
	  justifyContent: 'center',
	  marginTop: 20
  },
  text: {
	  color: 'white',
	  fontSize: 28,
	  fontWeight: 'bold',
	  textAlign: 'center'
  }
});

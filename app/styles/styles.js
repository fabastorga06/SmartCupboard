import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
      flex: 1,
      width: "100%",
      height: "100%",
      alignItems: 'center',
    },
    previewContainer: {
      flex: 1,
      width: "100%",
      height: "100%",
    },
    MainContainer:{
      justifyContent: 'center',
      flex:1,
      margin: 14
    },
    title: {
      color: '#fff',
      fontSize: 24,
      textAlign: 'center',
        
    },
    titleContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      margin: 5,
      backgroundColor: '#00BCD4'
    },
    buttonContainer: {
      width: 300,
      height: 85, 
      borderRadius: 25,
      backgroundColor: "#00BCD4",
      justifyContent: 'center',
      marginTop: 20
    },
    GridViewBlock: {
      justifyContent: 'center',
      flex:1,
      alignItems: 'center',
      height: 60,
      width: 300,
      margin: 5,
      backgroundColor: '#7E8F92',
      opacity: 0.8,
      borderWidth: 2,
      borderColor: 'rgb(0, 0, 0)'
    },
    GridText: {
      color: '#fff',
      padding: 10,
      fontSize: 16,
      textAlign: 'justify'
    },
    rootcontainer: {
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
    titlelogin : {
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
      marginTop: 20,
      borderWidth: 2,
      borderColor: 'rgb(0, 0, 0)'
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
    },
    previewlogo: {
      height: 50,
      width: 50, 
      justifyContent: 'center',
    },   
    previewLogo: {
      height: 50,
      width: 50, 
      justifyContent: 'center',
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
      borderWidth: 2,
      borderColor: 'rgb(0, 0, 0)'
    },
    header: {
      backgroundColor: '#7E8F92',
      textAlign: 'center',
      padding: 10,
      height: 60,
      width: 350,
      opacity: 0.8
    },
    headerText: {
      textAlign: 'center',
      fontSize: 24,
      color: '#ffffff',
    fontWeight: '500',
    opacity: 0.8
	  
    },
    content: {
      padding: 20,
      backgroundColor: '#7E8F92',
      width: 350,
      opacity: 0.8
    }
  });
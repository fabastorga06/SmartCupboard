import React from 'react';

import { StyleSheet, ImageBackground, FlatList, Text, View, Alert } from 'react-native';
import backgroundImg from '../../images/Night_sky.jpg'; 

export default class MainPage extends React.Component {

    static navigationOptions = {
        title: 'SmartCupboard',
    };
    
    constructor(props)
    {
    super(props);

    this.state = { GridViewItems: [
        {key: 'Atun: Buy 2 units, Sardimar'},
        {key: 'Arroz: Buy 1 kg, Tio Pelon'},
        {key: 'Ketchup: Buy 1 unit, Kerns'},
    ]}
    }

    GetGridViewItem (item) {
    
    Alert.alert(item);

    }


    render() {
        return (
                <ImageBackground source={backgroundImg} style={styles.container}>
                <View style={styles.MainContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}> My Shoping List </Text>
                    </View>
                    <FlatList data={ this.state.GridViewItems }
                        renderItem={({item}) =>
                            <View style={styles.GridViewBlockStyle}>
                                <Text style={styles.GridViewInsideTextItemStyle} 
                                    onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key}
                                </Text>
                            </View>} numColumns={1}/>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.title} onPress={()=> {this.props.navigation.navigate('MainPage', {})}}> Mark as completed </Text>
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
margin: 14, 
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
  justifyContent: 'center',
  alignItems: 'center',
  height: 40,
  margin: 5,
  backgroundColor: '#00BCD4',
  borderRadius:20
},
GridViewBlockStyle: {
  justifyContent: 'center',
  flex:1,
  alignItems: 'center',
  height: 60,
  width: 300,
  margin: 5,
  backgroundColor: '#c7d3e5'
},
GridViewInsideTextItemStyle: {
   color: '#fff',
   padding: 10,
   fontSize: 24,
   justifyContent: 'center',
 },

});

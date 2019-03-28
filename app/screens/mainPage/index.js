import React from 'react';

import { StyleSheet, Image, FlatList, Text, View, Alert } from 'react-native';

import backgroundImage from '../../images/Night_sky.jpg'; 

export default class MainPage extends React.Component {

    static navigationOptions = {
        title: 'MainPage',
    };
    
    constructor(props)
    {
    super(props);

    this.state = { GridViewItems: [
        {key: 'Atun 1 available'},
        {key: 'Arroz'},
        {key: 'Frijoles'},
        {key: 'Salsa'},
        {key: 'Salsa'},
        {key: 'Salsa'},
        {key: 'Salsa'},
        {key: 'Salsa'},
        {key: 'Salsa'},
        {key: 'Salsa'}
    ]}
    }

    GetGridViewItem (item) {
    
    Alert.alert(item);

    }


    render() {
        return (
             
                <View style={styles.MainContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}> My Products </Text>
                    </View>
                    <FlatList data={ this.state.GridViewItems }
                        renderItem={({item}) =>
                            <View style={styles.GridViewBlockStyle}>
                                <Text style={styles.GridViewInsideTextItemStyle} 
                                    onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key}
                                </Text>
                            </View>} numColumns={1}/>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.title} onPress={()=> {this.props.navigation.navigate('List', {})}}> Shopping List </Text>
                    </View>
                    <View style={styles.buttonContainer} >
                        <Text style={styles.title} onPress={()=> {Alert.alert('hola')}}> Shopping History </Text>
                    </View>
                </View> 
                
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

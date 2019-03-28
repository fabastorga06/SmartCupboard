import React from 'react';

import { StyleSheet, FlatList, Text, View, Alert } from 'react-native';


export default class MainPage extends React.Component {

    static navigationOptions = {
        title: 'List',
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
                <View style={styles.MainContainer} backgroundColor = '#8c88e4'>
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
                        <Text style={styles.title} onPress={()=> {this.props.navigation.navigate('MainPage', {})}}> Go Back </Text>
                    </View>
                </View>
    );
    }
}

const styles = StyleSheet.create({

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

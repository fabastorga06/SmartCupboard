import React from 'react';

import { StyleSheet, Image, FlatList, Text, View, TouchableOpacity } from 'react-native';
import tool from '../../images/tool.png'
import market from '../../images/market.png'

export default class Preview extends React.Component {

    static navigationOptions = {
        title: 'SmartCupboard',
    };
    
    constructor(props)
    {
    super(props);

    this.state = { GridViewItems: [
        {key: 'Configuration', image: tool, navigate: 'Configuration' },
        {key: 'Application', image: market, navigate: 'MainPage'},


    ]}
    }



    render() {
        return (
             
                <View style={styles.MainContainer}>
                    <FlatList data={ this.state.GridViewItems }
                        renderItem={({item}) =>
                            <TouchableOpacity style={styles.GridViewBlockStyle} 
                                onPress={()=> {this.props.navigation.navigate(item.navigate, {})}}>
                                <Image source={item.image} style={styles.logo}/>
                            </TouchableOpacity>} numColumns={2}/>
                </View> 
                
    );
    }
}

const styles = StyleSheet.create({

logo: {
    height: 50,
    width: 50, 
    justifyContent: 'center',
},
MainContainer:{
    justifyContent: 'center',
    flex:1,
    margin: 14
},
GridViewBlockStyle: {
  justifyContent: 'center',
  flex:1,
  alignItems: 'center',
  height: 60,
  margin: 5,
  backgroundColor: '#c7d3e5'
}

});

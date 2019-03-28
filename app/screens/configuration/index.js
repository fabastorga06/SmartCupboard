import React from 'react';

import { StyleSheet, FlatList, View, Text} from 'react-native';


export default class Configuration extends React.Component {

    static navigationOptions = {
        title: 'Configuration',
    };
    
    constructor(props)
    {
    super(props);

    this.state = { GridViewItems: [
        {key: 'Cases'},
        {key: 'Brands'},
        {key: 'limits'},


    ]}
    }


    render() {
        return (
             
                <View style={styles.MainContainer}>
                    <FlatList data={ this.state.GridViewItems }
                        renderItem={({item}) =>
                            <View style={styles.GridViewBlockStyle}>
                                <Text title={item.key} style={styles.GridViewInsideTextItemStyle}/>
                            </View>} numColumns={2}/>
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
},
GridViewInsideTextItemStyle: {
    color: '#fff',
    padding: 10,
    fontSize: 24,
    justifyContent: 'center',
},

});

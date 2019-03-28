import React from 'react';

import { ImageBackground, FlatList, Text, View, Alert } from 'react-native';
import backgroundImg from '../../images/Night_sky.jpg';
import styles from '../../styles/styles'

export default class History extends React.Component {

    static navigationOptions = {
        title: 'SMART CUPBOARD',
    };
    
    constructor(props)
    {
    super(props);

    this.state = { GridViewItems: [
        {key: 'Completed: 29/2/2019'},
        {key: 'Completed: 14/2/2019'},
        {key: 'Completed: 06/2/2019'},
        {key: 'Completed: 22/1/2019'},
        {key: 'Completed: 27/12/2018'},
        {key: 'Completed: 22/12/2018'},
        {key: 'Completed: 17/12/2018'},
        {key: 'Completed: 12/12/2018'},
        {key: 'Completed: 09/12/2018'},
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
                            <View style={styles.GridViewBlock}>
                                <Text style={styles.GridText} 
                                    onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key}
                                </Text>
                            </View>} numColumns={1}/>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.title} onPress={()=> {this.props.navigation.navigate('MainPage', {})}}> Clear History </Text>
                    </View>
                </View>
                </ImageBackground>
    );
    }
}

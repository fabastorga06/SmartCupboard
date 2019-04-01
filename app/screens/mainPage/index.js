import React from 'react';
import { ImageBackground, FlatList, Text, View, Alert, TouchableOpacity } from 'react-native';
import backgroundImg from '../../images/Night_sky.jpg'; 
import styles from '../../styles/styles'

export default class MainPage extends React.Component {

    static navigationOptions = {
        title: 'SMART CUPBOARD',
    };
    
    constructor(props)
    {
    super(props);

    this.state = { GridViewItems: [
        {key: 'Atun: 1 unit available'},
        {key: 'Arroz: 2 kg available'},
        {key: 'Frijoles: unavailable'},
        {key: 'Ketchup: unavailable'},
        {key: 'Sal: unavailable'},]}
    }

    GetGridViewItem (item) {
        Alert.alert(item);
    }

    render() {
        return (
                <ImageBackground source={backgroundImg} style={styles.container}>
                <View style={styles.MainContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}> My Products </Text>
                    </View>
                    <FlatList data={ this.state.GridViewItems }
                        renderItem={({item}) =>
                            <View style={styles.GridViewBlock}>
                                <Text style={styles.GridText} 
                                    onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key}
                                </Text>
                            </View>} numColumns={1}/>
                    <TouchableOpacity style={styles.buttonContainer} 
                        onPress={()=> {this.props.navigation.navigate('List', {})}}> 
                        <Text style={styles.title}> Shopping List </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} 
                        onPress={()=> {this.props.navigation.navigate('History', {})}}> 
                        <Text style={styles.title}> Shopping History </Text>
                    </TouchableOpacity>
                </View> 
                </ImageBackground>      
        );
    }
}



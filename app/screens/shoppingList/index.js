import React from 'react';
import { ImageBackground, FlatList, Text, View, Alert } from 'react-native';
import backgroundImg from '../../images/Night_sky.jpg';
import styles from '../../styles/styles'

export default class List extends React.Component {

    static navigationOptions = {
        title: 'SMART CUPBOARD',
    };
    
    constructor(props)
    {
    super(props);

    this.state = { GridViewItems: [
        {key: 'Atun: Buy 2 units, Sardimar'},
        {key: 'Arroz: Buy 1 kg, Tio Pelon'},
        {key: 'Ketchup: Buy 1 unit, Kerns'},]}
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
                        <Text style={styles.title} onPress={()=> {this.props.navigation.navigate('MainPage', {})}}> Mark as completed </Text>
                    </View>
                </View>
                </ImageBackground>
        );
    }
}

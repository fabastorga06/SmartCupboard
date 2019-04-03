import React from 'react';
import { Text, FlatList, ImageBackground, View, TouchableOpacity } from 'react-native';
import backgroundImg from '../../images/screen7.jpg';
import styles from '../../styles/styles';

export default class Configuration extends React.Component {

    static navigationOptions = {
        title: 'SMART CUPBOARD',
    };
    
    constructor(props)
    {
    super(props);

    this.state = { GridViewItems: [
        {key: 'Cases', navigate: 'Configuration' },
        {key: 'Brands', navigate: 'MainPage'},
        {key: 'Limits', navigate: 'MainPage'},
        {key: 'Units', navigate: 'MainPage'},]}
    }

    render() {
        return (
                <ImageBackground source={backgroundImg} style={styles.previewContainer}>
                <View style={styles.MainContainer}>
                    <FlatList data={ this.state.GridViewItems }
                        renderItem={({item}) =>
                            <TouchableOpacity style={styles.previewBlock} 
                                onPress={()=> {this.props.navigation.navigate(item.navigate, {})}}>
                                <Text style={styles.GridText}>{item.key}</Text>
                            </TouchableOpacity>} numColumns={2}/>
                </View> 
                </ImageBackground>
        );
    }
}

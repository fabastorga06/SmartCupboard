import React from 'react';

import { Image, FlatList, ImageBackground, View, TouchableOpacity } from 'react-native';
import tool from '../../images/tool.png';
import market from '../../images/market.png';
import backgroundImg from '../../images/Night_sky.jpg';
import styles from '../../styles/styles';

export default class Preview extends React.Component {

    static navigationOptions = {
        title: 'SMART CUPBOARD',
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
                <ImageBackground source={backgroundImg} style={styles.previewContainer}>
                <View style={styles.MainContainer}>
                    <FlatList data={ this.state.GridViewItems }
                        renderItem={({item}) =>
                            <TouchableOpacity style={styles.previewBlock} 
                                onPress={()=> {this.props.navigation.navigate(item.navigate, {})}}>
                                <Image source={item.image} style={styles.previewLogo}/>
                            </TouchableOpacity>} numColumns={2}/>
                </View> 
                </ImageBackground>
    );
    }
}



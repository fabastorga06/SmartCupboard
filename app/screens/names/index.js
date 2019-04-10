import React from 'react';
import { 
    ImageBackground,
    FlatList, 
    Text, 
    View, 
    Alert,
    TouchableOpacity
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import backgroundImg from '../../images/screen10.jpg';
import styles from '../../styles/styles'

export default class Names extends React.Component {

    static navigationOptions = {
        title: 'SMART CUPBOARD',
    };
    
    constructor(props)
    {
    super(props);

    this.state = {
        GridViewItems: [

        ]}
    }

    

    GetGridViewItem (item) {
        Alert.alert(item);
    }

    render() {
        const {params} = this.props.navigation.state
        return (
                <ImageBackground source={backgroundImg} style={styles.container}>
                <View style={styles.MainContainer}>
                    <TouchableOpacity onPress={this._toggleExpanded}>
                    </TouchableOpacity>
                        <View style={styles.content}>
                            <FlatList data={ params.list }
                                renderItem={({item}) =>
                                <View style={styles.GridViewBlock}>
                                    <Text style={styles.GridText}>
                                     {item.product}</Text>
                                </View>} numColumns={1}
                            />
                        </View>
                </View>
                </ImageBackground>
        );
    }
}

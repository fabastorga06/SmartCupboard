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

export default class List extends React.Component {

    static navigationOptions = {
        title: 'SMART CUPBOARD',
    };
    
    constructor(props)
    {
    super(props);

    this.state = { 
        collapsed: true,
        GridViewItems: [
            {key: 'Atun: Buy 2 units, Sardimar'},
            {key: 'Arroz: Buy 1 kg, Tio Pelon'},
            {key: 'Ketchup: Buy 1 unit, Kerns'}
        ]}
    }

    _toggleExpanded = () => {
        this.setState({ 
            collapsed: !(this.state.collapsed) 
        });
    }

    GetGridViewItem (item) {
        Alert.alert(item);
    }

    render() {
        return (
                <ImageBackground source={backgroundImg} style={styles.container}>
                    <View style={styles.MainContainer}>
                        <TouchableOpacity onPress={this._toggleExpanded}>
                            <View style={styles.header}>
                                <Text style={styles.headerText}>My Shopping List</Text>
                            </View>
                        </TouchableOpacity>
                        <Collapsible collapsed={this.state.collapsed} align="center">
                            <View style={styles.content}>

                                <FlatList data={ this.state.GridViewItems }
                                    renderItem={({item}) =>
                                    <View style={styles.GridViewBlock}>
                                        <Text style={styles.GridText} 
                                            onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key}
                                        </Text>
                                    </View>} numColumns={1}
                                />
                            </View>
                        </Collapsible>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.title} onPress={()=> {this.props.navigation.navigate('MainPage', {})}}> Mark as completed </Text>
                        </View>
                    </View>
                </ImageBackground>
        );
    }
}

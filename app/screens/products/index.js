import React from 'react';
import { 
    ImageBackground,
    FlatList, 
    Text, 
    View, 
    Alert,
    TouchableOpacity
} from 'react-native';
import backgroundImg from '../../images/screen10.jpg';
import styles from '../../styles/styles'

export default class Products extends React.Component {

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
                        <View style={styles.header}>
                            <Text style={styles.GridText}> {params.list.caseA.product} : {params.list.caseA.quantity}</Text>
                        </View>
                        <View style={styles.header}>
                            <Text style={styles.GridText}> {params.list.caseB.product} : {params.list.caseB.quantity}</Text>
                        </View>
                        <View style={styles.header}>
                            <Text style={styles.GridText}> {params.list.caseC.product} : {params.list.caseC.quantity}</Text>
                        </View>

                </View>
                </ImageBackground>
        );
    }
}

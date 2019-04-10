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

        ]}
    }

    _handleResponseProducts = (response) =>{
        this.setState({
            GridViewItems: response, 
            collapsed: !(this.state.collapsed) 
        });
	}

	_executeQueryProducts = async (query) => {
		try{
		  let response = await fetch(query)
		  let resjson = await response.json()
		  this._handleResponseProducts(resjson) 
		  
		}
		catch(error){
            this.GetGridViewItem("ERROR")
		}
    }
    
    _handleResponseComplete = (response) =>{
        this.props.navigation.navigate('MainPage', {})
	}

	_executeQueryComplete = async (query) => {
		try{
		  let response = await fetch(query,{method: "POST"})
		  let resjson = await response.json()
		  this._handleResponseComplete(resjson) 
		  
		}
		catch(error){
            this.GetGridViewItem("ERROR")
		}
	}

    _executeQueryCheck = async (query) => {
		try{
		  let response = await fetch(query)
		  let resjson = await response.json()
		  this._handleResponseCheck(resjson) 
		  
		}
		catch(error){
            this.GetGridViewItem("ERROR")
		}
    }
    
    _handleResponseCheck = (response) =>{
        if(response.status=="true"){
            this.GetGridViewItem("Nothing to buy")
        }
        else{
            this._executeQueryComplete('http://10.0.2.2:8000/api/v1/shopping/complete')
        }
	}
    _toggleExpanded = () => {
        this._executeQueryProducts('http://10.0.2.2:8000/api/v1/shopping/products')
    }

    _onPressComplete = () =>{
        this._executeQueryCheck('http://10.0.2.2:8000/api/v1/shopping/check')
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
                                        <Text style={styles.GridText}>
                                        {item.product}: {item.quantity} To buy
                                        </Text>
                                    </View>} numColumns={1}
                                />
                            </View>
                        </Collapsible>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.title} onPress={this._onPressComplete}> Mark as completed </Text>
                        </View>
                    </View>
                </ImageBackground>
        );
    }
}

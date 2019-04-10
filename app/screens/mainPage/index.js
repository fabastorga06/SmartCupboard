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
import backgroundImg from '../../images/screen8.jpg'; 
import styles from '../../styles/styles'

export default class MainPage extends React.Component {

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


    _handleResponse = (response) =>{
        this.setState({
            GridViewItems: response, 
            collapsed: !(this.state.collapsed) 
        });
	}

	_executeQuery = async (query) => {
		try{
		  let response = await fetch(query)
		  let resjson = await response.json()
		  this._handleResponse(resjson) 
		  
		}
		catch(error){
            this.GetGridViewItem("ERROR")
		}
    }
    
    _executeQueryList = async (query) => {
		try{
		  let response = await fetch(query)
		  let resjson = await response.json()
		  this._handleResponseList(resjson) 
		  
		}
		catch(error){
            this.GetGridViewItem("ERROR")
		}
    }
    
    _handleResponseList = (response) =>{
        this.props.navigation.navigate('History', {list : response})
    }
    
    _onPressHistory = () =>{
        this._executeQueryList('http://10.0.2.2:8000/api/v1/shopping/list')
    }



    _toggleExpanded = () => {
        this._executeQuery('http://10.0.2.2:8000/api/v1/products')
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
                            <Text style={styles.headerText}>Products</Text>
                        </View>
                    </TouchableOpacity>
                    <Collapsible collapsed={this.state.collapsed} align="center">
                        <View style={styles.content}>

                            <FlatList data={ this.state.GridViewItems }
                                renderItem={({item}) =>
                                <View style={styles.GridViewBlock}>
                                    <Text style={styles.GridText}>
                                        {item.product}: {item.quantity}
                                    </Text>
                                </View>} numColumns={1}
                            />
                        </View>
                    </Collapsible>

                    <TouchableOpacity style={styles.buttonContainer} 
                        onPress={()=> {this.props.navigation.navigate('List', {})}}> 
                        <Text style={styles.title}> Shopping List </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} 
                        onPress={this._onPressHistory}> 
                        <Text style={styles.title}> Shopping History </Text>
                    </TouchableOpacity>
                </View> 
                </ImageBackground>      
        );
    }
}
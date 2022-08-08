import React, {Component} from 'react';
import {Text,
    View,
    StyleSheet,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Image,
    Alert,
    Platform
    } from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import axios from 'axios';

export default class ISSLocationScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            location: {},
        };

    }
    componentDidMount(){
        this.getISSLocation()
    }
    getISSLocation = ()=>{
        axios
        .get("https://api.wheretheiss.at/v1/satellites/25544")
        .then(Response =>{
            this.setState({locations:Response.data})
        })
        .catch(error =>{
            Alert.alert(error.message)
        })
    }

    render(){

        if(Object.keys(this.state.location).length ===0){
            return(
                <View style= {{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text> loading </Text>
                </View>
            )
        }
    }
}

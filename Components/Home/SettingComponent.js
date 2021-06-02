import React, { Component } from 'react';
import { View, Text, Switch, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { Card, CardItem, Picker } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from "react-native-modal";
import { Button, } from 'react-native-paper';

export default class EditProfileComponent extends Component {
  render() {
    return (
      <View style={{backgroundColor:'rgba(65,204,201,0.2)',flex:1}}>
      <Card style={{marginTop:'3%'}}>
        <CardItem bordered >
          <View style={{flexDirection:'row'}}>
        <Text style={{marginTop:'1%'}}>Allow App Notificatons</Text>
        <Switch style={{marginLeft:'44%'}}
        value={this.props.switch}
        onValueChange={this.props.switchChange}></Switch>
        </View>
        </CardItem>        

        <CardItem bordered>
        <TouchableOpacity style={{flexDirection:'row'}}
        onPress={this.props.deleteAccount}>
        <Text style={{marginRight:'60%'}}>Delete Account</Text>
        </TouchableOpacity>
        </CardItem>

        <CardItem bordered>
        <TouchableOpacity style={{flexDirection:'row'}}
        onPress={this.props.toggleModalLanguage}>
        <Text style={{marginRight:'70%'}}>App Language</Text>
        <Icon name="chevron-right" style={{marginTop:'1%'}}/>
        </TouchableOpacity>
        </CardItem>

        <CardItem bordered>
        <TouchableOpacity style={{flexDirection:'row'}}>
        <Text style={{marginRight:'65%'}}>About Developers</Text>
        </TouchableOpacity>
        </CardItem>
      </Card>

      <View style={{marginTop:'60%',alignItems:'center'}}>                 
      <Text style={{fontSize:12}}>
      Powered by:
      </Text>
      {/* <Image source={require('../../Assets/Images/DD5.png')} style={{width:'60%', height:'45%', marginTop:'1%', marginBottom:'1%'}}/> */}
      <Text style={{marginTop:'2%', marginBottom:'2%', fontSize:18, color:'rgb(65,204,201)', fontWeight:'bold'}}>Adithptham Technologies Pvt. Ltd.</Text>
      <Text style={{fontSize:12}}>
      App Version 1.0.1
      </Text>
      </View>
      
      <Modal isVisible={this.props.isModalLanguageVisible}
      onBackdropPress={this.props.toggleModalLanguage}>
        
          <TouchableOpacity onPress={this.props.toggleModalLanguage}>
          <CardItem bordered>
          <Text>English</Text>
          </CardItem>
          </TouchableOpacity>       
       
        <TouchableOpacity onPress={this.props.toggleModalLanguage}>
        <CardItem bordered>
          <Text>Kannada</Text>
          </CardItem>
        </TouchableOpacity>        
        
        <TouchableOpacity onPress={this.props.toggleModalLanguage}>
        <CardItem bordered>
          <Text>Hindi</Text>
          </CardItem>
        </TouchableOpacity>        
        
        <TouchableOpacity onPress={this.props.toggleModalLanguage}>
        <CardItem bordered>
          <Text>Tamil</Text>
          </CardItem>
        </TouchableOpacity>      

        <TouchableOpacity onPress={this.props.toggleModalLanguage}>
        <CardItem bordered>
          <Text>Telugu</Text>
          </CardItem>
        </TouchableOpacity>
               
        <TouchableOpacity onPress={this.props.toggleModalLanguage}>
        <CardItem bordered>
          <Text>Malayalam</Text>
          </CardItem> 
        </TouchableOpacity>
                      
        </Modal>       

        </View>
    );
  }
}

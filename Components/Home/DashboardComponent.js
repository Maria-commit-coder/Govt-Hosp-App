import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { Card, CardItem } from 'native-base';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, } from 'react-native-paper';
import UserAvatar  from 'react-native-user-avatar';

export default class DashboardComponent extends Component {
  
  render() {
    return (
      <View style={{backgroundColor:'rgba(65,204,201,0.2)', flex:1}}>

      <View style={{alignItems:'center', height:105}}>
          <View style={{marginTop:'5%'}}>
      <UserAvatar size="70" name="Trupz" color={'rgba(65,204,201,0.6)'}  />      
      </View>
      <Text style={{fontSize:18}}>Welcome !</Text>
      </View>

        <Card style={{marginTop:'3%'}}>

            <TouchableOpacity onPress={this.props.navigatetoProfileComponent}>
            <CardItem bordered style={{borderBottomWidth:1, borderColor:'rgb(65,204,201)'}}>
              <View style={{flexDirection:'row'}}>
              <Icon name='user' size={20}/>
                <Text style={{marginLeft:'7%'}}>Profile Details</Text>
                </View>
            </CardItem>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.props.toggleModalEpin}>
            <CardItem bordered style={{borderBottomWidth:1, borderColor:'rgb(65,204,201)'}}>
            <View style={{flexDirection:'row'}}>
              <Icon name='lock' size={21}/>
                <Text style={{marginLeft:'7%'}}>Change e-PIN</Text>
                </View>
            </CardItem>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.props.navigatetoAboutHealthDepartmentComponent}>
            <CardItem bordered style={{borderBottomWidth:1, borderColor:'rgb(65,204,201)'}}>
            <View style={{flexDirection:'row'}}>
              <Icon name='hospital-o' size={21}/>
                <Text style={{marginLeft:'7%'}}>About Health Dept.</Text>
                </View>
            </CardItem>
            </TouchableOpacity>            

            <TouchableOpacity onPress={this.props.navigatetoSettingComponent}>
            <CardItem bordered style={{borderBottomWidth:1, borderColor:'rgb(65,204,201)'}}>
            <View style={{flexDirection:'row'}}>
              <Icon name='cog' size={21}/>
                <Text style={{marginLeft:'7%'}}>Settings</Text>
                </View>
            </CardItem>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.props.navigatetoAppSupportComponent}>
            <CardItem bordered style={{borderBottomWidth:1, borderColor:'rgb(65,204,201)'}}>
            <View style={{flexDirection:'row'}}>
              <Icon name='support' size={21}/>
                <Text style={{marginLeft:'7%'}}>App Support</Text>
                </View>
            </CardItem>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.props.navigatetoReviewHistoryComponent}>
            <CardItem bordered style={{borderBottomWidth:1, borderColor:'rgb(65,204,201)'}}>
            <View style={{flexDirection:'row'}}>
              <Icon name='book' size={20}/>
                <Text style={{marginLeft:'7%'}}>Reviews History</Text>
                </View>
            </CardItem>
            </TouchableOpacity>
           
            <TouchableOpacity onPress={this.props.logout}>
            <CardItem bordered style={{borderBottomWidth:1, borderColor:'rgb(65,204,201)'}}>
            <View style={{flexDirection:'row'}}>
              <Icon name='power-off' size={20}/>
                <Text style={{marginLeft:'7%'}}>Logout</Text>
                </View>
            </CardItem>
            </TouchableOpacity>
        </Card>

        <View style={{marginTop:"15%",alignItems:"center"}}>                 
      <Text style={{fontSize:13}}>
      Powered by:
      </Text>
      <Image source={require('../../Assets/Images/DD5.png')} style={{width:'55%', height:'30%', marginBottom:'1%', marginTop:'1%'}}/>
      <Text style={{fontSize:13}}>
      App Version 1.0.1
      </Text>
      </View>

      <Modal isVisible={this.props.isModalEpinVisible}
       onBackdropPress={this.props.toggleModalEpin}
       style={{width:'90%', marginLeft:'5%'}}>
        <ScrollView>
        <CardItem bordered style={{backgroundColor:'rgb(65,204,201)'}}>
        <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Change your e-PIN here</Text>
        </CardItem>

        <CardItem>
        <View>
         <Text style={{fontSize:18, color:'black'}}>Old e-PIN :</Text>
         <View style={{borderColor:'black',borderWidth:1, borderRadius:10, height:50, marginTop:'3%',flexDirection:'row'}}>
         <TextInput
           placeholder='Old e-PIN...'
           placeholderTextColor='rgba(65,204,201,0.4)'
           maxLength={6}
           keyboardType='numeric'
           secureTextEntry={this.props.hidden1}
           style={{width:'90%',color:'black', fontSize:18, marginTop:'-2%'}}
           onChangeText={(text)=>this.props.handleOldEpinChange(text)}
           ></TextInput>
           <TouchableOpacity onPress={this.props.onInputLabel1Pressed}>
          <Icon name='eye' size={20} style={{ color:'black', marginTop:'60%'}}/>          
          </TouchableOpacity>
          </View>          
           </View>
           </CardItem>

           <CardItem>
         <View>
         <Text style={{fontSize:18, color:'black'}}>New e-PIN :</Text>
         <View style={{borderColor:'black',borderWidth:1, borderRadius:10, height:50, marginTop:'3%',flexDirection:'row'}}>
         <TextInput
           placeholder='New e-PIN...'
           placeholderTextColor='rgba(65,204,201,0.4)'
           maxLength={6}
           keyboardType='numeric'
           secureTextEntry={this.props.hidden2}
           style={{width:'90%',color:'black', fontSize:18, marginTop:'-2%'}}
           onChangeText={(text)=>this.props.handleNewEpinChange(text)}
           ></TextInput>
           <TouchableOpacity onPress={this.props.onInputLabel2Pressed}>
          <Icon name='eye' size={20} style={{ color:'black', marginTop:'60%'}}/>          
          </TouchableOpacity>
          </View>          
           </View>
           </CardItem>

           <CardItem>
         <View>
         <Text style={{fontSize:18, color:'black'}}>Confirm New e-PIN :</Text>
         <View style={{borderColor:'black',borderWidth:1, borderRadius:10, height:50, marginTop:'3%',flexDirection:'row'}}>
         <TextInput
           placeholder='Confirm New e-PIN...'
           placeholderTextColor='rgba(65,204,201,0.4)'
           maxLength={6}
           keyboardType='numeric'
           secureTextEntry={this.props.hidden3}
           style={{width:'90%',color:'black', fontSize:18, marginTop:'-2%'}}
           onChangeText={(text)=>this.props.handleCnewEpinChange(text)}
           ></TextInput>
           <TouchableOpacity onPress={this.props.onInputLabel3Pressed}>
          <Icon name='eye' size={20} style={{ color:'black', marginTop:'60%'}}/>          
          </TouchableOpacity>
          </View>          
           </View>
           </CardItem>

        <CardItem>
           <Button style={{width:'40%', backgroundColor:'rgba(65,204,201,0.7)', marginLeft:'30%', borderRadius:19}}
           onPress={this.props.CheckEpinInput}>
               <Text style={{color:'white'}}>Save</Text>
           </Button>
        </CardItem>

        </ScrollView>
        </Modal>

      </View>
    );
  }
}

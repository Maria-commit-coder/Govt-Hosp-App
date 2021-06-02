import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Container, Header, Left, Body, Button, Title, Card, CardItem } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserAvatar  from 'react-native-user-avatar';
import DatePicker from 'react-native-datepicker';
import { RadioButton } from 'react-native-paper';

export default class Task6 extends Component {
    
  render() {
    
    return (
        
        <Container>
      

        <ScrollView style={{flex:1}}>
        <View style={{backgroundColor:'rgba(65,204,201,0.2)', alignItems:'center', height:130}}>
          <View style={{marginTop:'5%'}}>
      <UserAvatar size="95" name="Trupz" color={'rgba(65,204,201,0.6)'}  />      
      </View>
      <Text style={{fontSize:18}}>Welcome {this.props.fname}!</Text>
      </View>

      { this.props.EditProfile ?  
      <View style={{backgroundColor:'rgba(65,204,201,0.2)',flex:1}}> 
      <Card style={{width:'90%', marginLeft:17, marginTop:20}}>
            <CardItem header bordered style={{backgroundColor:'rgba(65,204,201,0.6)'}}>
              <Text style={{fontSize:20}}>Contact Information</Text>
                  <Icon name='check-circle' size={20} style={{marginLeft:95}}/>
              </CardItem>
              <CardItem bordered>
              <Body>
              <TextInput 
                  placeholder='Name'
                  placeholderTextColor='black'
                  value={this.props.fname}
                  style={{width:'80%'}} onChangeText={(text)=>this.props.handleNameChange(text)}>

                  </TextInput>     

           <TextInput
                  placeholder='Phone Number'
                  placeholderTextColor='black'
                  keyboardType='numeric'
                  maxLength={10}
                  value={this.props.fphnmbr}
                  style={{width:'80%'}} onChangeText={(text)=>this.props.handlePhoneChange(text)}>

                  </TextInput>             
                 

                  <DatePicker 
        style={{width: 200}}
        date={this.props.fdate}
        mode="date"
        placeholder="DOB"
        format="YYYY-MM-DD"
        minDate="1950-01-01"
        maxDate="2020-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => this.props.DateChange(date)}
      /> 

        <TextInput
        placeholder='Aadhar Number'
       placeholderTextColor='black'
        keyboardType='numeric'
        maxLength={12}
       value={this.props.faadhar}
        style={{width:'80%'}} onChangeText={(text)=>this.props.handleAadharChange(text)}>
            </TextInput>             
              
                  <TextInput
                  placeholder='City'
                  placeholderTextColor='black'
                  style={{width:'80%'}} onChangeText={(text)=>this.props.handleCityChange(text)}
                  maxLength={15}
                  value={this.props.fcity}>
                  </TextInput>

                  <TextInput
                  placeholder='Email'
                  placeholderTextColor='black'
                  style={{width:'80%'}} onChangeText={(text)=>this.props.handleemailChange(text)}
                  value={this.props.femail}>
                  </TextInput>

        <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'row'}}>
        <RadioButton
         value="Male"
          status={this.props.fchecked === 'Male' ? 'checked' : 'unchecked'}
          onPress={(checked) => { this.props.ChooseGender('Male')}}
        />
        <Text style={{marginTop:8}}>Male</Text>
        </View>

        <View style={{flexDirection:'row', marginLeft:25}}>
        <RadioButton
         value="Female"
          status={this.props.fchecked === 'Female' ? 'checked' : 'unchecked'}
          onPress={(checked) => { this.props.ChooseGender('Female')}}/>
        <Text style={{marginTop:8}}>Female</Text>
        </View>

        <View style={{flexDirection:'row', marginLeft:25}}>
        <RadioButton
          value="Other"
          status={this.props.fchecked === 'Other' ? 'checked' : 'unchecked'}
          onPress={() => { this.props.ChooseGender('Other')}}/>
        <Text style={{marginTop:8}}>Other</Text>
        </View>
        </View>
 

      

                </Body>
                </CardItem>
                
                <CardItem>
                <View style={{flexDirection:'row', marginTop:10}}>
        <Button 
        onPress={this.props.CheckTextInput}        
        style={{backgroundColor:'rgba(65,204,201,0.7)', width:70, marginLeft:47}}>
        <Text style={{marginLeft:18, fontSize:15}}>Save</Text>
        </Button>

        <Button onPress={this.props.EditProfileIcon}
        style={{backgroundColor:'rgba(65,204,201,0.7)', width:70, marginLeft:60}}>
        <Text style={{marginLeft:13, fontSize:15}}>Cancel</Text>
        </Button>
        </View>
                </CardItem>
                </Card>
                </View>

        
                
     :
        <View style={{backgroundColor:'rgba(65,204,201,0.2)'}}>
      <Card style={{width:'90%', marginLeft:17, marginTop:20}}>
            <CardItem header bordered style={{backgroundColor:'rgba(65,204,201,0.6)'}}>
              <Text style={{fontSize:20}}>Contact Information</Text>
              <TouchableOpacity onPress={this.props.Editprofile}>
                  <Icon name='pencil' size={20} style={{marginLeft:95}}/>
              </TouchableOpacity>
            </CardItem>

      <CardItem bordered>
              <Body>
              <Text style={{ height:50, marginTop:3, fontSize:15}}>
             Name: {this.props.Name}
           </Text>
      
                <Text style={{height:50, marginTop:3, fontSize:15}}> Phone Number:    {this.props.PhoneNumber}
                </Text>

                <Text style={{ height:50, marginTop:3, fontSize:15}}>
                    Date:  {this.props.date}
                </Text>

                <Text style={{height:50, marginTop:3, fontSize:15}}>
                  Aadhar:   {this.props.Aadhar}
                </Text>
                
                 <Text style={{ height:50, marginTop:3, fontSize:15}}>
                     City:  {this.props.City}
                 </Text>

                 <Text style={{height:50, marginTop:3, fontSize:15}}>
                     Email:   {this.props.email}
                 </Text>

                <Text style={{height:50, marginTop:3, fontSize:15}}>
                    Gender:   {this.props.checked}
                </Text>

                
              </Body>
            </CardItem>

            <CardItem>
              <Button onPress={this.props.navigatetoHomeComponent}
              style={{width:'30%', marginLeft:100, backgroundColor:'rgba(65,204,201,0.7)'}}>
                <Text style={{fontSize:18, marginLeft:30}}>
                  OK
                </Text>
              </Button>
            </CardItem>
    </Card> 
    </View>  
    }

    
         
        </ScrollView>
      </Container>
      
    );
  }
}
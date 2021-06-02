import React, {Component} from 'react';
import { View, Text, ScrollView} from 'react-native';
import {Card,Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class NotificationComponent extends Component {
  render() {
    return (
      
      <View style={{flex: 1, backgroundColor: 'rgba(65,204,201,0.2)',}}>
        
                  
              {/* <View style={{alignItems:'center',}}>

                <Image  source={require('../../Assets/Images/DD5.png')}></Image>
                <View style={{marginTop:'-31%',alignItems:'center'}}>
                <Text >You have no notification right now.</Text>
                <Text >Come back later.</Text>
                </View>
             
            </View>    */}
       
          <ScrollView>
         
          <Card style={{ marginTop:'4%',borderRadius:3,  borderWidth:2, borderColor:'rgb(65,204,201)', width:'95%', marginLeft:'2.5%',}}>
            <Card.Content>
             
              <Text style={{fontWeight:'bold', fontSize:17, marginBottom: '1%'}}>Reports</Text>
              
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Icon size={30} name="bell-o"/>
              <Text style={{marginBottom:'1%', marginLeft:'3%', width:'95%'}}>Please collect your test report by evening.
              Thank you Have a nice day</Text>
              </View>
              
              <Text style={{opacity:0.6, fontSize:12, marginTop:'2%'}}>15 min</Text>
            </Card.Content>
          </Card>

          <Card style={{ marginTop:'4%',borderRadius:3,  borderWidth:2, borderColor:'rgb(65,204,201)', width:'95%', marginLeft:'2.5%',}}>
            <Card.Content>
             
              <Text style={{fontWeight:'bold', fontSize:17, marginBottom: '1%'}}>Appointment</Text>
              
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Icon size={30} name="bell-o"/>
              <Text style={{marginBottom:'1%', marginLeft:'3%', width:'95%'}}>Your appointment with Dr.Pooja has been scheduled. Please be on time</Text>
              </View>
              
              <Text style={{opacity:0.6, fontSize:12, marginTop:'2%'}}>15 min</Text>
            </Card.Content>
          </Card>

          <Card style={{ marginTop:'4%',borderRadius:3,  borderWidth:2, borderColor:'rgb(65,204,201)', width:'95%', marginLeft:'2.5%',}}>
            <Card.Content>
             
              <Text style={{fontWeight:'bold', fontSize:17, marginBottom: '1%'}}>Blood Camp</Text>
              
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Icon size={30} name="bell-o"/>
              <Text style={{marginBottom:'1%', marginLeft:'3%', width:'90%'}}>Free blood checkup camp has been scheduled on 16 March 2020. 
              Interested people can come and attend. </Text>
              </View>
              
              <Text style={{opacity:0.6, fontSize:12, marginTop:'2%'}}>15 min</Text>
            </Card.Content>
          </Card>
          </ScrollView> 
       
      </View>
    );
  }
}
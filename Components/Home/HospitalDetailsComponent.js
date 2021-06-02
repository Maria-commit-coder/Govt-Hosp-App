import React, { Component } from 'react';
import { View, Text,ScrollView,Image,TouchableOpacity} from 'react-native';
import { Card,CardItem, Button,Footer, Container } from 'native-base';
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/FontAwesome'
export default class HospitalDetailsComponent extends Component {
  render() {
    return (
      
      <Container>
 <ScrollView  style={{backgroundColor:'rgba(65,204,201,0.2)', flex:1}} >
        <Card >
        
          <CardItem>
        <View style={{flexDirection:"column"}}>
              <Text style={{fontWeight:"bold",fontSize:25,marginBottom:"15%"}}>K.C. General Hospital</Text>
              <View style={{flexDirection:"row"}}>
              <Icon name="phone" size={15} style={{marginTop:"1%",marginRight:"5%"}}/>
              <Text style={{fontSize:14,marginBottom:"2%"}}> +080 23334343, +080 34442433</Text>
              </View>
              <View style={{flexDirection:"row"}}>
              <Icon name="address-book" size={15} style={{marginTop:"1%",marginRight:"5%"}}/>
              <Text style={{fontSize:14,marginBottom:"5%"}}> 2nd cross, No. 19, Behind Post office,{'\n'} Malleshwaram, Bangalore:560021</Text>
               </View>
              <View style={{flexDirection:"row"}}>
              <Icon name="inbox" size={15} style={{marginTop:"1%",marginRight:"5%"}}/>
              <Text style={{fontSize:14,marginBottom:"10%"}}> www.kchospitals.gov.in </Text>
              </View>
             
              </View>

              </CardItem>
              <CardItem>
              <TouchableOpacity>
                <Text style={{fontWeight:"bold",fontSize:13}}> Malleshwaram, </Text>
                </TouchableOpacity>
               
                <TouchableOpacity>
                <Text style={{fontWeight:"bold",fontSize:13}}> Bangalore </Text>
                </TouchableOpacity>
           
           <TouchableOpacity style={{marginLeft:"40%",marginTop:"-2%"}}>
             <Icon name="map-marker" size={30} />
           </TouchableOpacity>
              
              
          </CardItem>
          <CardItem>
          <View style={{flexDirection:"column"}}>
          <Text style={{fontSize:15, fontWeight:'bold', marginBottom:'5%'}}>
              Gallery :
              </Text>
              <Text style={{marginLeft:"80%"}}>
                +55 Photos
              </Text>
              </View>
          </CardItem>
          <CardItem>
            <View style={{flexDirection:"column"}}>
          <Text style={{fontSize:15, fontWeight:'bold', marginBottom:'5%'}}>
              About us :
              </Text>
              <Text>
              The establishment is functional on{'\n'}
              Monday:- Open 24 Hrs{'\n'}
              Tuesday:- Open 24 Hrs{'\n'}
               Wednesday:- Open 24 Hrs{'\n'}
               Thursday:- Open 24 Hrs{'\n'}  
               Friday:- Open 24 Hrs{'\n'}
               Saturday:- Open 24 Hrs{'\n'}
               Sunday:- Open 24 Hrs{'\n'}
              </Text>
              </View>
          </CardItem>
          <CardItem>
            <View style={{flexDirection:"column"}}>
            <Text style={{fontSize:15, fontWeight:'bold', marginBottom:'5%'}}>
             Description :
              </Text>
              <Text style={{fontSize:13}}>
              No. of doctors: 140{'\n'}
              No. of beds: 370{'\n'}
              No. of ambulances: 15{'\n'}
              No. of nurses: 250{'\n'}
              Treatments provided: All types{'\n'}
            </Text>
            </View>
          </CardItem>
          <CardItem>
            <View style={{flexDirection:"column"}}>
            <Text style={{fontWeight:'bold',fontSize:15,marginBottom:"10%"}}>
             Specialists:              
            </Text>
            <View style={{flexDirection:"row"}}>
        <View style={{flexDirection:"column",marginRight:"2%"}}>
            <UserAvatar size="60" name="VD" src="data:image/jpeg;base64,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"/>
            
            <Text style={{fontSize:12,marginLeft:"10%", marginTop:'3%',color:"grey"}}>Dr. Vir Das</Text>
           <Text style={{fontSize:10,marginLeft:"5%", marginTop:'3%',color:"grey"}}>General Physician</Text>
            
            </View>
            <View style={{flexDirection:"column"}}>
            <View style={{marginLeft:"20%"}}>
            <UserAvatar size="60" name="VD" src="data:image/jpeg;base64,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"/>
            </View>
            <Text style={{fontSize:12,marginLeft:"5%", marginTop:'3%',color:"grey"}}>Dr. Santosh Gupta</Text>
           <Text style={{fontSize:10,marginLeft:"20%", marginTop:'3%',color:"grey"}}>Cardiologist</Text>
            
            </View>
            
            </View>

            </View>
            </CardItem>
            <CardItem>
              <TouchableOpacity  onPress={this.props.navigatetoDoctorDetailsComponent}>
              <Text style={{fontWeight:'bold',fontSize:15,marginBottom:"10%"}}>
             Doctor details:              
            </Text>
              </TouchableOpacity>
            
              </CardItem>
               <CardItem>
            <Text style={{fontWeight:'bold',fontSize:15,marginBottom:"10%"}}>
             Reviews:              
            </Text>
            </CardItem>
            </Card>

        </ScrollView>
        <Footer style={{backgroundColor:"white"}}>
          <Button style={{width:"90%", backgroundColor:'rgb(65,204,201)',marginTop:"1.5%", borderRadius:19}}
          onPress={this.props.navigatetoReviewHospitalComponent}>
            <Text style={{marginLeft:"30%",color:"white",fontSize:17, marginTop:'-2%'}}>Review Hospital</Text>
          </Button>
        </Footer>
         
      </Container>

     
    );
  }
}
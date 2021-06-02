import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header, Body, Right, Left, Container, Button, Card } from 'native-base';
import SearchHeader from 'react-native-search-header';

export default class HomeComponent extends Component {
 
  render() {
    return (
      <Container>

            <SearchHeader
                ref = {(searchHeader) => {
                  this.searchHeader = searchHeader;
              }}
                placeholder = 'Search...'
                placeholderColor = 'gray'
                // pinnedSuggestions = {[ `arijit singh`, `mirchi lol`, `alcohol ink` ]}
                onClear = {() => {
                    console.log(`Clearing input!`);
                }}
            />

        <Header style={{backgroundColor:'rgb(65,204,201)'}}>
          <Left>
            <TouchableOpacity onPress={this.props.openDashboard}>
            <Icon name="bars" color="white" size={20} />
            </TouchableOpacity> 
          </Left>
          <Body>
            <Button transparent onPress = {() => this.searchHeader.show()}
            style={{width:'100%'}}>
                <Icon name="search" color='white' size={20} style={{marginLeft:'-5%'}}/>
                <Text style={{fontSize:20, color:'white', marginRight:'42%'}}>Search</Text>
            </Button>
          </Body>
          <Right>
          <Button transparent>
            <TouchableOpacity>
               <Icon name="map-marker" color="white" size={23}/>
            </TouchableOpacity>
          </Button>
            <Button transparent onPress={this.props.navigatetoNotificationComponent}>
               <Icon name="bell" color="white" size={20}/>
            </Button>
          </Right>
        </Header>   

        <ScrollView style={{backgroundColor:'rgba(65,204,201,0.2)', flex:1}}>

        <TouchableOpacity onPress={this.props.navigatetoHospitalDetailsComponent} style={{marginTop:'3%'}}>        
        <Card style={{width:'95%', marginLeft:'2.5%', flexDirection:'row',borderRadius:5}}> 

         <View style={{justifyContent:'center',}}>
         <Image style={{height:100, width:90, alignSelf:'flex-start',  }}
         source={{uri:'https://image.shutterstock.com/image-illustration/medical-icon-hospital-symbol-swiss-260nw-62604025.jpg'}}/>
        </View>

       <View style={{flexDirection:'column', marginLeft:'3%', marginTop:'1%'}}>
       <Text style={{fontSize:18, fontWeight:'bold'}}>K.C. General Hospital</Text>

       <View style={{flexDirection:'row'}}>
       <Text style={{marginTop:'2%', fontSize:16}}>Hospital Id: </Text>
       <Text style={{fontSize:16, fontWeight:'bold', marginTop:'2%'}}>123</Text>
       </View>

       <Text style={{fontSize:16, marginTop:'2%'}}>Malleshwaram, Bengaluru</Text>

       <View style={{flexDirection:'row'}}>
       <Icon name='phone' size={18} style={{marginTop:'2%'}}/>
       <Text style={{marginTop:'2%'}}>  080 - 12345678</Text>
       </View>

       <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:'3%', marginBottom:'3%'}}>
       <Icon name='star' size={18} color={'gold'}/>
       <Icon name='star' size={18} color={'gold'}/>
       <Icon name='star' size={18} color={'gold'}/>
       <Icon name='star-half-empty' size={18} color={'gold'}/>
       <Icon name='star-o' size={18} color={'gold'}/>

       <Switch style={{marginLeft:'30%', marginTop:'-3%'}}
        value={this.props.switch1}
        onValueChange={this.props.switch1Change}>
       </Switch>        
       </View>
       </View>

       </Card>
       </TouchableOpacity>

       <TouchableOpacity onPress={this.props.navigatetoHospitalDetailsComponent} style={{marginTop:'3%'}}>        
        <Card style={{width:'95%', marginLeft:'2.5%', flexDirection:'row',borderRadius:5}}> 

         <View style={{justifyContent:'center',}}>
         <Image style={{height:100, width:90, alignSelf:'flex-start',  }}
         source={{uri:'https://image.shutterstock.com/image-illustration/medical-icon-hospital-symbol-swiss-260nw-62604025.jpg'}}/>
        </View>

       <View style={{flexDirection:'column', marginLeft:'3%', marginTop:'1%'}}>
       <Text style={{fontSize:18, fontWeight:'bold'}}>Victoria Hospital</Text>

       <View style={{flexDirection:'row'}}>
       <Text style={{marginTop:'2%', fontSize:16}}>Hospital Id: </Text>
       <Text style={{fontSize:16, fontWeight:'bold', marginTop:'2%'}}>124</Text>
       </View>

       <Text style={{fontSize:16, marginTop:'2%'}}>New Tharagupet, Bengaluru</Text>

       <View style={{flexDirection:'row'}}>
       <Icon name='phone' size={18} style={{marginTop:'2%'}}/>
       <Text style={{marginTop:'2%'}}>  080 - 14256367</Text>
       </View>

       <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:'3%', marginBottom:'3%'}}>
       <Icon name='star' size={18} color={'gold'}/>
       <Icon name='star' size={18} color={'gold'}/>
       <Icon name='star' size={18} color={'gold'}/>
       <Icon name='star-o' size={18} color={'gold'}/>
       <Icon name='star-o' size={18} color={'gold'}/>

       <Switch style={{marginLeft:'30%', marginTop:'-3%'}}
        value={this.props.switch2}
        onValueChange={this.props.switch2Change}>
       </Switch>        
       </View>
       </View>

       </Card>
       </TouchableOpacity>

        </ScrollView>    
      </Container>
    );
  }
}

import React, { Component } from 'react';
import { View, Text,ScrollView } from 'react-native';
import { Container,Card } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ReviewHistoryComponent extends Component {
  
  render() {
    return (
    <Container  style={{backgroundColor:'rgba(65,204,201,0.2)', flex:1}}>
      <ScrollView>
      <Card style={{width:'95%', marginLeft:'2.5%', marginTop:'4%'}}> 
      <View style={{flexDirection:'column', marginLeft:'3%', marginTop:'1%'}}>
        <Text style={{opacity:0.6}} >10 March 2020</Text>
       <Text style={{fontSize:18, fontWeight:'bold',marginTop:'2%'}}>K.C. General Hospital </Text>
       <View style={{flexDirection:'row', marginTop:'3%', marginBottom:'3%'}}>
       <Icon name='star' size={18} color={'gold'} style={{marginRight:'2%'}}/>
       <Icon name='star' size={18} color={'gold'}style={{marginRight:'2%'}}/>
       <Icon name='star' size={18} color={'gold'}style={{marginRight:'2%'}}/>
       <Icon name='star-o' size={18} color={'gold'}style={{marginRight:'2%'}}/>
       <Icon name='star-o' size={18} color={'gold'}/>
      </View>
      <Text style={{fontSize:18,marginTop:'2%'}}>Dr.Maria </Text>
      <View style={{flexDirection:'row', marginTop:'3%', marginBottom:'3%'}}>
       <Icon name='star' size={18} color={'gold'} style={{marginRight:'2%'}}/>
       <Icon name='star' size={18} color={'gold'}style={{marginRight:'2%'}}/>
       <Icon name='star' size={18} color={'gold'}style={{marginRight:'2%'}}/>
       <Icon name='star-half-empty' size={18} color={'gold'}style={{marginRight:'2%'}}/>
       <Icon name='star-o' size={18} color={'gold'}/>
      </View>
      <Text style={{fontSize:16, marginBottom:'2%'}}>{this.props.text}</Text>
       </View>
      </Card>

      <Card style={{width:'95%', marginLeft:'2.5%'}}>
      <View style={{flexDirection:'column', marginLeft:'3%', marginTop:'1%'}}>
        <Text style={{opacity:0.6}}>20 Febraury 2020</Text>
       <Text style={{fontSize:18, fontWeight:'bold',marginTop:'2%'}}>Victoria Hospital </Text>
       <View style={{flexDirection:'row', marginTop:'3%', marginBottom:'3%'}}>
       <Icon name='star' size={18} color={'gold'} style={{marginRight:'2%'}}/>
       <Icon name='star' size={18} color={'gold'}style={{marginRight:'2%'}}/>
       <Icon name='star' size={18} color={'gold'}style={{marginRight:'2%'}}/>
       <Icon name='star' size={18} color={'gold'}style={{marginRight:'2%'}}/>
       <Icon name='star-o' size={18} color={'gold'}/>
      </View>
      <Text style={{fontSize:18, marginTop:'2%'}}>Dr.P.Trupthi </Text>
      <View style={{flexDirection:'row', marginTop:'3%', marginBottom:'3%'}}>
       <Icon name='star' size={18} color={'gold'} style={{marginRight:'2%'}}/>
       <Icon name='star' size={18} color={'gold'}style={{marginRight:'2%'}}/>
       <Icon name='star' size={18} color={'gold'}style={{marginRight:'2%'}}/>
       <Icon name='star' size={18} color={'gold'}style={{marginRight:'2%'}}/>
       <Icon name='star-half-empty' size={18} color={'gold'}/>
      </View>
      <Text style={{fontSize:18, marginTop:'2%'}}>Dr.P.Pooja </Text>
      <View style={{flexDirection:'row', marginTop:'3%', marginBottom:'3%'}}>
       <Icon name='star' size={18} color={'gold'} style={{marginRight:'2%'}}/>
       <Icon name='star' size={18} color={'gold'}style={{marginRight:'2%'}}/>
       <Icon name='star' size={18} color={'gold'}style={{marginRight:'2%'}}/>
       <Icon name='star' size={18} color={'gold'}style={{marginRight:'2%'}}/>
       <Icon name='star-o' size={18} color={'gold'}/>
      </View>
      <Text style={{fontSize:16, marginBottom:'2%'}}>{this.props.text1}</Text>      
       </View>
      </Card>
      </ScrollView>
    </Container>
    );
  }
}
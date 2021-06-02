import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import { Card, CardItem } from 'native-base';
import { Slider } from 'react-native-elements';

export default class ReviewDoctorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <ScrollView style={{backgroundColor:'rgba(65,204,201,0.2)', flex:1}}>
        <Text style={{marginTop:'2%', fontSize:17}}>Please read the following questions and rate the doctor.</Text>
        
        <Card>
          <CardItem bordered>
            <View style={{flexDirection:'column'}}>
            <Text style={{marginBottom:'3%'}}>1. First Question</Text>

            <View style={{flexDirection:'row'}}>
          <Text>     1</Text>
          <Text>                  2</Text>
          <Text>                   3</Text>
          <Text>                  4</Text>
          <Text>                  5</Text>
        </View>

        <View style={{flexDirection:'row'}}>
        
        <Text> </Text>
        <RadioButton
         value="1"
          status={this.props.first === '1' ? 'checked' : 'unchecked'}
          onPress={(checked) => { this.props.FirstQuestion('1')}}
          style={{marginLeft:25}}/>       
        
        <Text>          </Text>
        <RadioButton
         value="2"
          status={this.props.first === '2' ? 'checked' : 'unchecked'}
          onPress={(checked) => { this.props.FirstQuestion('2')}}/>
        
        <Text>          </Text>
        <RadioButton
          value="3"
          status={this.props.first === '3' ? 'checked' : 'unchecked'}
          onPress={(checked) => { this.props.FirstQuestion('3')}}/>        
        
        <Text>          </Text>
        <RadioButton
          value="4"
          status={this.props.first === '4' ? 'checked' : 'unchecked'}
          onPress={(checked) => { this.props.FirstQuestion('4')}}/>        
        
        <Text>          </Text>
        <RadioButton
          value="5"
          status={this.props.first === '5' ? 'checked' : 'unchecked'}
          onPress={(checked) => { this.props.FirstQuestion('5')}}/>        
        </View>  
        </View>
            
          </CardItem>

          <CardItem bordered>
            <View style={{flexDirection:'column'}}>
            <Text style={{marginBottom:'3%'}}>2. Second Question</Text>

        <View style={{flexDirection:'row'}}>
          <Text>     1</Text>
          <Text>                  2</Text>
          <Text>                   3</Text>
          <Text>                  4</Text>
          <Text>                  5</Text>
        </View>

        <View style={{flexDirection:'row'}}>
        
        <Text> </Text>
        <RadioButton
         value="1"
          status={this.props.second === '1' ? 'checked' : 'unchecked'}
          onPress={(checked) => { this.props.SecondQuestion('1')}}
          style={{marginLeft:25}}/>       
        
        <Text>          </Text>
        <RadioButton
         value="2"
          status={this.props.second === '2' ? 'checked' : 'unchecked'}
          onPress={(checked) => { this.props.SecondQuestion('2')}}/>
        
        <Text>          </Text>
        <RadioButton
          value="3"
          status={this.props.second === '3' ? 'checked' : 'unchecked'}
          onPress={(checked) => { this.props.SecondQuestion('3')}}/>        
        
        <Text>          </Text>
        <RadioButton
          value="4"
          status={this.props.second === '4' ? 'checked' : 'unchecked'}
          onPress={(checked) => { this.props.SecondQuestion('4')}}/>        
        
        <Text>          </Text>
        <RadioButton
          value="5"
          status={this.props.second === '5' ? 'checked' : 'unchecked'}
          onPress={(checked) => { this.props.SecondQuestion('5')}}/>        
        </View>
        </View>
            
          </CardItem>

          <CardItem bordered>
            <View style={{flexDirection:'column'}}>
            <Text style={{marginBottom:'3%'}}>3. Third Question</Text>

            <View style={{flexDirection:'row'}}>
        <Text>    Yes</Text>
        <Text>               No</Text>
        </View>

        <View style={{flexDirection:'row'}}>

          <Text>  </Text>
        <RadioButton
         value="Yes"
          status={this.props.third === 'Yes' ? 'checked' : 'unchecked'}
          onPress={(checked) => { this.props.ThirdQuestion('Yes')}}/>
        
        <Text>          </Text>
        <RadioButton
         value="No"
          status={this.props.third === 'No' ? 'checked' : 'unchecked'}
          onPress={(checked) => { this.props.ThirdQuestion('No')}}/>
        </View>
        </View>
            
          </CardItem>

          <CardItem bordered>
            <View style={{flexDirection:'column'}}>
            <Text style={{marginBottom:'3%'}}>4. Fourth Question</Text>

            <View style={{flexDirection:'row'}}>
        <Text>    Yes</Text>
        <Text>               No</Text>
        </View>

        <View style={{flexDirection:'row'}}>

          <Text>  </Text>
        <RadioButton
         value="Yes"
          status={this.props.fourth === 'Yes' ? 'checked' : 'unchecked'}
          onPress={(checked) => { this.props.FourthQuestion('Yes')}}/>
        
        <Text>          </Text>
        <RadioButton
         value="No"
          status={this.props.fourth === 'No' ? 'checked' : 'unchecked'}
          onPress={(checked) => { this.props.FourthQuestion('No')}}/>
        </View>
        </View>
            
          </CardItem>

        <CardItem bordered>
          <View style={{flexDirection:'column'}}>
          <Text style={{marginBottom:'3%'}}>5. Fifth Question</Text>
          <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
          <Slider
          value={this.props.value}
          onValueChange={value => this.props.slider(value)}
          minimumValue={0}
          maximumValue={5}
          step={1}
          thumbTintColor={'rgb(65,204,201)'}
          />
          <Text>Value: {this.props.value}</Text>
          </View>
          </View>
        </CardItem>

          <CardItem>
            <Button style={{width:'40%', backgroundColor:'rgba(65,204,201,0.7)', marginLeft:'30%', borderRadius:19}}
            onPress={this.props.save}>
              <Text style={{color:'white'}}>Save</Text>
            </Button>
          </CardItem>

        </Card>
      </ScrollView>
    );
  }
}

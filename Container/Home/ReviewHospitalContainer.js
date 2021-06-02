import React, { Component } from 'react';
import { View, Text, ToastAndroid } from 'react-native';
import ReviewHospitalComponent from '../../Components/Home/ReviewHospitalComponent';

export default class ReviewHospitalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first:'',
      second:'',
      third:'',
      fourth:'',
      value:0,
    };
  }

  FirstQuestion=(checked)=>{
    this.setState({first:checked})      
  }

  SecondQuestion=(checked)=>{
    this.setState({second:checked})      
  }

  ThirdQuestion=(checked)=>{
    this.setState({third:checked})      
  }

  FourthQuestion=(checked)=>{
    this.setState({fourth:checked})      
  }

  save=()=>{
    ToastAndroid.show('Thanks for your reviews.', ToastAndroid.SHORT); 
    this.navigatetoHomeComponent();   
  }

  navigatetoHomeComponent = () => {
    this.props.navigation.navigate('HomeContainer');
  };

  navigatetoReviewDoctorComponent = () => {
    this.props.navigation.navigate('ReviewDoctorContainer');
  };

  slider=(value)=>{
    this.setState({value:value})
  }

  render() {
    return (
     <ReviewHospitalComponent
     first={this.state.first}
     second={this.state.second}
     third={this.state.third}
     fourth={this.state.fourth}
     value={this.state.value}
     FirstQuestion={this.FirstQuestion}
     SecondQuestion={this.SecondQuestion}
     ThirdQuestion={this.ThirdQuestion}
     FourthQuestion={this.FourthQuestion}
     navigatetoHomeComponent={this.navigatetoHomeComponent}
     navigatetoReviewDoctorComponent={this.navigatetoReviewDoctorComponent}
     save={this.save}
     slider={(value)=>this.slider(value)}
     />
    );
  }
}

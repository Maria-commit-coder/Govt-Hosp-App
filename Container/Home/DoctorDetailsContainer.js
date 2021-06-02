import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DoctorDetailsComponent from '../../Components/Home/DoctorDetailsComponent';

export default class DoctorDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  navigatetoReviewDoctorComponent = () => {
    this.props.navigation.navigate('ReviewDoctorContainer');
  };
  render() {
    return (
      <DoctorDetailsComponent
      navigatetoReviewDoctorComponent={this.navigatetoReviewDoctorComponent}
      />
    );
  }
}

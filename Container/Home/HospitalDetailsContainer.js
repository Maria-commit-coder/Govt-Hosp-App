import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HospitalDetailsComponent from '../../Components/Home/HospitalDetailsComponent';

export default class HospitalDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  navigatetoReviewHospitalComponent = () => {
    this.props.navigation.navigate('ReviewHospitalContainer');
  };
  navigatetoDoctorDetailsComponent = () => {
    this.props.navigation.navigate('DoctorDetailsContainer');
  };

  render() {
    return (
      <HospitalDetailsComponent
      navigatetoReviewHospitalComponent={this.navigatetoReviewHospitalComponent}
      navigatetoDoctorDetailsComponent={this.navigatetoDoctorDetailsComponent}
     />
    );
  }
}

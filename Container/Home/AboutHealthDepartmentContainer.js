import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AboutHealthDepartmentComponent from '../../Components/Home/AboutHealthDepartmentComponent';

export default class AboutHealthDepartmentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <AboutHealthDepartmentComponent/>
    );
  }
}

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AppSupportComponent from '../../Components/Home/AppSupportComponent';

export default class AppSupportContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <AppSupportComponent/>
    );
  }
}

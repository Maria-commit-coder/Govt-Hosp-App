import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EpinLoginComponent from '../../Components/UserSignUp/EpinLoginComponent';

export default class EpinLoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <EpinLoginComponent/>
    );
  }
}

import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import HomeComponent from '../../Components/Home/HomeComponent';

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch1:true,
      switch2:true,
    };
  }
  openDashboard = () => {
        this.props.navigation.dispatch(DrawerActions.openDrawer())
  };

  navigatetoNotificationComponent = () => {
    this.props.navigation.navigate('NotificationContainer');
  };

  navigatetoHospitalDetailsComponent = () => {
    this.props.navigation.navigate('HospitalDetailsContainer');
  };

  switch1Change=()=>{
    this.setState({switch1: !this.state.switch1})
  }

  switch2Change=()=>{
    this.setState({switch2: !this.state.switch2})
  }

  render() {
    return (
      <HomeComponent
      openDashboard={this.openDashboard}
      navigatetoNotificationComponent={this.navigatetoNotificationComponent}
      navigatetoHospitalDetailsComponent={this.navigatetoHospitalDetailsComponent}
      switch1={this.state.switch1}
      switch1Change={this.switch1Change}
      switch2={this.state.switch2}
      switch2Change={this.switch2Change}
      />
    );
  }
}

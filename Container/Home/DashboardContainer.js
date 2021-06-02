import React, { Component } from 'react';
import { View, Text, Alert, ToastAndroid } from 'react-native';
import DashboardComponent from '../../Components/Home/DashboardComponent';

export default class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalEpinVisible: false,
      hidden1:true,
      hidden2:true,
      hidden3:true,
      oepin:'',
      nepin:'',
      cnepin:'',
    };
  }

  logout=()=>{
    Alert.alert(
      'Log Out',
      'Are you sure you want to logout?',
      [
       
        {text:"NO",onPress:()=>console.warn('You are not logged out')},
        {text:"YES",onPress:()=>console.warn('You are now logged out')},
      ],
      {cancelable:false},
    );
  }

  navigatetoReviewHistoryComponent = () => {
    this.props.navigation.navigate('ReviewHistoryContainer');
  };

  navigatetoEpinLoginContainer = () => {
    this.setState({ isModalEpinVisible: false });
    this.props.navigation.navigate('EpinLoginContainer');
  };

  navigatetoProfileComponent = () => {
    this.props.navigation.navigate('ProfileContainer');
  };

  navigatetoAppSupportComponent = () => {
    this.props.navigation.navigate('AppSupportContainer');
  };

  navigatetoAboutHealthDepartmentComponent = () => {
    this.props.navigation.navigate('AboutHealthDepartmentContainer');
  };

  navigatetoSettingComponent = () => {
    this.props.navigation.navigate('SettingContainer');
  };

  toggleModalEpin = () => {
    this.setState({ isModalEpinVisible: !this.state.isModalEpinVisible });
  }

  onInputLabel1Pressed=() => {   
    this.setState({ hidden1:!this.state.hidden1 });
  }

  onInputLabel2Pressed=() => {   
    this.setState({ hidden2:!this.state.hidden2 });
  }

  onInputLabel3Pressed=() => {   
    this.setState({ hidden3:!this.state.hidden3 });
  }

  handleOldEpinChange=(text)=>{
    this.setState({oepin:text})
  }

  handleNewEpinChange=(text)=>{
    this.setState({nepin:text})
  }

  handleCnewEpinChange=(text)=>{
    this.setState({cnepin:text})
  }

  CheckEpinInput = () => {
    if(this.state.oepin=='')
    {
      ToastAndroid.show('Please enter your old e-PIN', ToastAndroid.SHORT);
    }
    else if(this.state.nepin=='' || this.state.cnepin=='')
    {
      ToastAndroid.show('e-PIN cannot be empty', ToastAndroid.SHORT);
    }     
    else if(this.state.nepin!=this.state.cnepin)
    {
      ToastAndroid.show('e-PIN does not match!', ToastAndroid.SHORT);       
    }
    else{
      ToastAndroid.show('e-PIN reset successfully!', ToastAndroid.SHORT);
      this.navigatetoEpinLoginContainer();
    }
  }

  render() {
    return (
      <DashboardComponent
      isModalEpinVisible={this.state.isModalEpinVisible}
      hidden1={this.state.hidden1}
      hidden2={this.state.hidden2}
      hidden3={this.state.hidden3}
      oepin={this.state.oepin}
      nepin={this.state.nepin}
      cnepin={this.state.cnepin}
      logout={this.logout}
      navigatetoReviewHistoryComponent={this.navigatetoReviewHistoryComponent}
      navigatetoEpinLoginContainer={this.navigatetoEpinLoginContainer}
      navigatetoProfileComponent={this.navigatetoProfileComponent}
      navigatetoAppSupportComponent={this.navigatetoAppSupportComponent}
      navigatetoAboutHealthDepartmentComponent={this.navigatetoAboutHealthDepartmentComponent}
      navigatetoSettingComponent={this.navigatetoSettingComponent}
      toggleModalEpin={this.toggleModalEpin}
      onInputLabel1Pressed={this.onInputLabel1Pressed}
      onInputLabel2Pressed={this.onInputLabel2Pressed}
      onInputLabel3Pressed={this.onInputLabel3Pressed}
      handleOldEpinChange={this.handleOldEpinChange}
      handleNewEpinChange={this.handleNewEpinChange}
      handleCnewEpinChange={this.handleCnewEpinChange}
      CheckEpinInput={this.CheckEpinInput}
      />
    );
  }
}

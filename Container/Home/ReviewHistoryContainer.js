import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ReviewHistoryComponent from '../../Components/Home/ReviewHistoryComponent';

export default class ReviewHistoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:'Review status: Pending',
      text1:'Review status: Pending'
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({text:'Review status: Approved!'})
      this.setState({text1:'Review status: Approved!'})
      }, 10000);
  }

  render() {
    return (
      <ReviewHistoryComponent
      text={this.state.text}
      text1={this.state.text1}
      />
    );
  }
}

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ProfileComponent from '../../Components/Home/ProfileComponent';

export default class Task6Component extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
    Name:'trupz',
     PhoneNumber:'1236547891',
    City:'bangal',
    Aadhar:'123654789632',
    email:'xyz@hm.com',
    EditProfile:false,
    date:"04/01/1997",
    checked:'female',
    fname:'trupz',
    fphnmbr:'11155555222',
    fcity:'bangal',
    faadhar:'123456789632',
    femail:'xyz@hm.com',
    fdate:'04/01/1997',
    fchecked:'female',
    };
  }

 
  CheckTextInput = () => {
    const emailv = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    //Handler for the Submit onPress
    if (this.state.Name == '') 
    {
      alert('Please Enter Name');
    }
    else if (this.state.PhoneNumber == '') 
    {
      alert('Please Enter PhoneNumber');
    }
    else if (this.state.PhoneNumber.length!=10)
    {
      alert('Enter valid phone number');
    }

      else if (this.state.date == '') 
      {       
        alert('Please Enter DOB');        
      } 
      else if (this.state.Aadhar == '') 
      {
        alert('Please Enter Aadhar Number');
      }
      else if (this.state.City == '')
      {
        alert('Please Enter City')
      }
      else if(this.state.email == '')
      {
        alert('Please Enter email')
      }
      else if(emailv.test(this.state.email) === false)
      {
        alert('Please enter valid email')
      }
      else if(this.state.checked == '')
      {
        alert('Please Choose Gender')
      }
    
      else {
        alert('success');
        this.setState({EditProfile:false});
        this.setState({Name:this.state.fname})
        this.setState({PhoneNumber:this.state.fphnmbr})
        this.setState({City:this.state.fcity})
        this.setState({Aadhar:this.state.faadhar})
        this.setState({date:this.state.fdate})
        this.setState({checked:this.state.fchecked})
        this.setState({email:this.state.femail})
      }
      
    }
  
    handleNameChange=(text)=>{
      this.setState({fname:text})
    }
  
  handlePhoneChange=(text)=>{
    this.setState({fphnmbr:text})
  }

  handleCityChange=(text)=>{
    this.setState({fcity:text})
  }

  handleemailChange=(text)=>{
    this.setState({femail:text})
  }

    Editprofile=() => {
        this.setState({EditProfile:true})
    }
  
  EditProfileIcon=() => {
    this.setState({EditProfile:false});
    // console.warn(this.state.Name);
    // this.setState({PhoneNumber:''});
    // this.setState({email:''});
    // this.setState({City:''});
    // this.setState({Aadhar:''});
    // this.setState({date:''});
    // this.setState({checked:''});
}

DateChange=(date)=>{
  this.setState({fdate: date})
}

handleAadharChange=(text)=>{
  this.setState({faadhar:text})
}


ChooseGender=(checked)=>{
  this.setState({fchecked:checked})
    
}
navigatetoHomeComponent = () => {
  this.props.navigation.navigate('HomeContainer');
};


 

  render() {
    
    return (
    <ProfileComponent
    
    CheckTextInput={()=>this.CheckTextInput()}
    Name={this.state.Name}
    fname={this.state.fname}
    handleNameChange={(text)=>this.handleNameChange(text)}
    PhoneNumber={this.state.PhoneNumber}
    fphnmbr={this.state.fphnmbr}
    handlePhoneChange={(text)=>this.handlePhoneChange(text)}
    City={this.state.City}
    fcity={this.state.fcity}
    handleCityChange={(text)=>this.handleCityChange(text)}
    email={this.state.email}
    femail={this.state.femail}
    handleemailChange={(text)=>this.handleemailChange(text)}
    EditProfile={this.state.EditProfile}
    Editprofile={this.Editprofile}
    date={this.state.date}
    fdate={this.state.fdate}
    DateChange={this.DateChange}
   Aadhar={this.state.Aadhar}
   faadhar={this.state.faadhar}
    handleAadharChange={(text)=>this.handleAadharChange(text)}
    checked={this.state.checked}
    fchecked={this.state.fchecked}
    ChooseGender={this.ChooseGender}
    EditProfileIcon={this.EditProfileIcon}
    navigatetoHomeComponent={this.navigatetoHomeComponent}
     />

    );
  }
}
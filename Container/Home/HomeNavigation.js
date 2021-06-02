import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createDrawerNavigator,DrawerActions} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer,withNavigation  } from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import ProfileContainer from './ProfileContainer';
import HomeContainer from './HomeContainer';
import AboutHealthDepartmentContainer from './AboutHealthDepartmentContainer';
import HospitalDetailsContainer from './HospitalDetailsContainer';
import AppSupportContainer from './AppSupportContainer';
import DoctorDetailsContainer from './DoctorDetailsContainer';
import ReviewHistoryContainer from './ReviewHistoryContainer';
import ReviewHospitalContainer from './ReviewHospitalContainer';
import DashboardContainer from './DashboardContainer';
import NotificationContainer from './NotificationContainer';
import SettingContainer from './SettingContainer';
import ReviewDoctorContainer from './ReviewDoctorContainer';

const DrawerNavigator = createDrawerNavigator({
    HomeContainer:{
        screen: HomeContainer
    }
},{
    initialRouteName: 'HomeContainer',
    contentComponent: DashboardContainer,
    drawerWidth: 250
});

const MenuImage = ({navigation}) => {
    if(!navigation.state.isDrawerOpen){
        return <Icon  style={{ paddingLeft: 10 ,fontSize:20,color: 'white'}}  name="bars" /> 
    }else{
        return <Icon  style={{ paddingLeft: 10 ,fontSize:18,color: 'white'}}  name="arrow-left" />
    }
}


const NavStack = createStackNavigator(
{
    
     DrawerNavigator:{
        screen: DrawerNavigator,
         navigationOptions: {
             headerShown:false,
         }  
            
        
    },
    AppSupportContainer : { screen: AppSupportContainer ,
        navigationOptions:{
            title: 'Support',
            headerStyle: {
                backgroundColor:'rgb(65,204,201)'
            },
            headerTitleStyle: {
                color:'white',
                right: 12,
                fontSize:16
            },headerTintColor:'#fff'
        }
        },
        ReviewDoctorContainer : { screen: ReviewDoctorContainer ,
            navigationOptions:{
                title: 'Review Doctor',
                headerStyle: {
                    backgroundColor:'rgb(65,204,201)'
                },
                headerTitleStyle: {
                    color:'white',
                    right: 12,
                    fontSize:16
                },headerTintColor:'#fff'
            }
            },
        AboutHealthDepartmentContainer : { screen: AboutHealthDepartmentContainer ,
            navigationOptions:{
                title: 'About Health Department',
                headerStyle: {
                    backgroundColor:'rgb(65,204,201)'
                },
                headerTitleStyle: {
                    color:'white',
                    right: 12,
                    fontSize:16
                },headerTintColor:'#fff'
            }
            },
            SettingContainer : { screen: SettingContainer ,
                navigationOptions:{
                    title: 'Settings',
                    headerStyle: {
                        backgroundColor:'rgb(65,204,201)'
                    },
                    headerTitleStyle: {
                        color:'white',
                        right: 12,
                        fontSize:16
                    },headerTintColor:'#fff'
                }
                },
        NotificationContainer : { screen: NotificationContainer ,
            navigationOptions:{
                title: 'Notifications',
                headerStyle: {
                    backgroundColor:'rgb(65,204,201)'
                },
                headerTitleStyle: {
                    color:'white',
                    right: 12,
                    fontSize:16
                },headerTintColor:'#fff'
            }
            },
         DoctorDetailsContainer: { screen:  DoctorDetailsContainer,
        navigationOptions:{
            title: 'Doctor Ddetails',
            headerStyle: {
                backgroundColor:'rgb(65,204,201)'
            },
            headerTitleStyle: {
                color:'white',
                right: 12,
                fontSize:16
            },headerTintColor:'#fff'
        }
        },
        HomeContainer: { screen: HomeContainer,
        navigationOptions:{
            title: 'Home',
            headerStyle: {
                backgroundColor:'rgb(65,204,201)'
            },
            headerTitleStyle: {
                color:'white',
                right: 12,
                fontSize:16
            },headerTintColor:'#fff'
        }
        },
        ProfileContainer : { screen: ProfileContainer,  
        navigationOptions:{
            title: 'Profile',
            headerStyle: {
                backgroundColor:'rgb(65,204,201)'
            },
            headerTitleStyle: {
                color:'white',
                right: 12,
                fontSize:16
            },headerTintColor:'#fff'
        }
    },
     HospitalDetailsContainer : { screen:  HospitalDetailsContainer,  
        navigationOptions:{
            title: 'Hospital Details',
            headerStyle: {
                backgroundColor:'rgb(65,204,201)'
            },
            headerTitleStyle: {
                color:'white',
                right: 12,
                fontSize:16
            },headerTintColor:'#fff'
        }
    },
    ReviewHistoryContainer : { screen: ReviewHistoryContainer,  
        navigationOptions:{
            title: 'Reviews History',
            headerStyle: {
                backgroundColor:'rgb(65,204,201)'
            },
            headerTitleStyle: {
                color:'white',
                right: 12,
                fontSize:16
            },headerTintColor:'#fff'
        }
    },
    ReviewHospitalContainer : { screen:  ReviewHospitalContainer,  
        navigationOptions:{
            title: 'Review Hospital',
            headerStyle: {
                backgroundColor:'rgb(65,204,201)'
            },
            headerTitleStyle: {
                color:'white',
                right: 12,
                fontSize:16
            },headerTintColor:'#fff'
        }
    },
   
},
 {
    initialRouteName: "DrawerNavigator"
}
);

const HomeNavigation = createAppContainer(NavStack);

export default HomeNavigation;

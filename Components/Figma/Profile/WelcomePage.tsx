/* eslint-disable react-native/no-inline-styles */
import {View, Text, Modal, Pressable, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Style from './Style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomePage = ({navigation}) => {
  const SignupOptions = [
    {
      title: 'Continue with Google',
      logo: require('./Images/signUP/google.png'),
    },
    {
      title: 'Continue with Facebook',
      logo: require('./Images/signUP/facebook.png'),
    },
    {
      title: 'Continue with Appe',
      logo: require('./Images/signUP/apple.png'),
    },
  ];
  useEffect(() => {
    token();
  }, []);

  const token = async () => {
    // AsyncStorage.clear();
    const res = await AsyncStorage.getItem('token');
    if (res) {
      navigation.navigate('Bottom');
    }
  };
  return (
    <View style={{backgroundColor: '#2242DA', flex: 1}}>
      <Text style={Style.welcomePage}>
        Let' s make your first digital business card
      </Text>
      <Image
        source={require('./Images/Ellipse.png')}
        style={{
          height: 65,
          width: 65,
          position: 'absolute',
          top: 130,
          left: 35,
          zIndex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: '#FFFFFF',
          width: 249,
          top: 154,
          height: 337,
          position: 'absolute',
          left: 55,
          borderWidth: 5,
          borderTopRightRadius: 20,
          borderColor: '#CCE5FF',
        }}>
        <Text
          style={{
            backgroundColor: '#54A4EE',
            color: '#FFFFFF',
            fontWeight: '500',
            textAlign: 'center',
            paddingTop: 10,
            width: 130,
            height: 40,
            borderRadius: 20,
            position: 'absolute',
            top: 10,
            left: 40,
          }}>
          Ryan John
        </Text>
        <View
          style={{
            backgroundColor: '#54A4EE36',
            width: 150,
            height: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            position: 'absolute',
            top: 70,
            left: 60,
          }}>
          <Text>software engineer</Text>
          <Text
            style={{
              alignSelf: 'flex-end',
              paddingRight: 20,
              color: '#2242D8',
              fontWeight: 'bold',
            }}>
            At Google
          </Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            height: 413,
            width: 375,
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}>
          <View
            style={{
              width: 60,
              height: 7,
              backgroundColor: '#E5ECFF',
              position: 'absolute',
              top: 15,
              borderRadius: 42,
            }}
          />
          <Pressable
            style={Style.signUp}
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text style={Style.signUpText}>Sign up</Text>
          </Pressable>
          <Pressable
            style={Style.LogIn}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={Style.logInText}>Login to App</Text>
          </Pressable>
          <View style={Style.divBar}>
            <View style={Style.frstLine} />
            <Text style={Style.divText}>or</Text>
            <View style={Style.secLine} />
          </View>
          <View style={{marginTop: 20}}>
            <FlatList
              data={SignupOptions}
              renderItem={({item}) => (
                <Pressable style={Style.otherSignup}>
                  <Image source={item.logo} style={{height: 22, width: 22}} />
                  <Text style={Style.otherSignupText}>{item.title}</Text>
                </Pressable>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default WelcomePage;

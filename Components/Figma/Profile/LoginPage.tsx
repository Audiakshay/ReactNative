/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Style from './Style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = ({navigation}) => {
  const data = ['Email Address', 'Password'];
  const [loginCredentials, setLoginCredentials] = useState({
    'Email Address': '',
    Password: '',
  });
  useEffect(() => {
    token();
  }, []);

  const token = async () => {
    // AsyncStorage.clear();
    const res = await AsyncStorage.getItem('token');
    if (!res) {
      navigation.navigate('SignUp');
      console.log(res);
      Alert.alert('Sign up first Before login');
    }
  };
  const login = async () => {
    const token = await AsyncStorage.getItem('token');
    const val = JSON.parse(token);
    console.log(val['Email Address']);
    if (
      val['Email Address'] === loginCredentials['Email Address'] &&
      val.Password === loginCredentials.Password
    ) {
      navigation.navigate('Bottom', {name: val.Name});
      Alert.alert('Login credentials successful');
    } else {
      Alert.alert('Login credentials failed');
    }
  };
  return (
    <View style={Style.signupContainer}>
      <View style={{width: 325, height: 67, marginTop: 16}}>
        <Text
          style={{
            color: '#8899EA',
            alignSelf: 'flex-start',
            fontSize: 14,
            fontWeight: '400',
          }}>
          Login
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 18,
          }}>
          <Text
            style={{
              alignSelf: 'flex-start',
              fontSize: 24,
              color: '#2242D8',
              fontWeight: '700',
              marginBottom: 7,
            }}>
            Welcome back
          </Text>
          <Image
            source={require('./Images/hi.png')}
            style={{height: 30, width: 30, gap: 18}}
          />
        </View>
        <Text
          style={{
            alignSelf: 'flex-start',
            fontSize: 12,
            fontWeight: '400',
            color: '#8899EA',
          }}>
          Enter your Email and password to continue
        </Text>
      </View>
      <View style={{marginTop: 52, marginBottom: 29}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={Style.inputContainer}>
              <Text style={Style.placeholderTop}>{item}</Text>
              <TextInput
                style={Style.placeholderBottom}
                placeholder={item}
                onChangeText={val =>
                  setLoginCredentials({...loginCredentials, [item]: val})
                }
              />
            </View>
          )}
        />
      </View>
      <Text style={Style.forgotPassword}>Forgot password?</Text>
      <View style={Style.LoginDiv}>
        <View style={Style.loginFrstLine} />
        <Text style={Style.divText}>or</Text>
        <View style={Style.loginSecLine} />
      </View>
      <Text style={Style.anotherWayLogin}>Login with Mobile no.</Text>
      <View style={Style.alreadyExist}>
        <Text style={{fontSize: 12}}>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate('SignUp')}>
          <Text style={{fontSize: 12, color: '#2242D8', fontWeight: '700'}}>
            Sign up
          </Text>
        </Pressable>
      </View>
      <Pressable style={Style.nxtBtn1} onPress={login}>
        <Text style={{fontSize: 16, color: '#FFFFFF', fontWeight: '500'}}>
          Next
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginPage;

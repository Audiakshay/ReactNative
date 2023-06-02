/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList, Pressable, Image, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import Style from './Style';
import Checkbox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}) => {
  ///////////// validation ///////////////////
  validateEmail = email => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  const data = ['Name', 'Email Address', 'Password', 'Confirm Password'];
  const [isDone, setIsDone] = useState(false);
  const [inputs, setInputs] = useState({
    Name: '',
    'Email Address': '',
    Password: '',
    'Confirm Password': '',
  });

  useEffect(() => {
    token();
  }, []);

  const token = async () => {
    // AsyncStorage.clear();
    const res = await AsyncStorage.getItem('token');
    if (res) {
      navigation.navigate('Login');
      console.log(res);
    } else {
      navigation.navigate('SignUp');
    }
  };
  const onChange = (field, inputValue) => {
    setInputs({...inputs, [field]: inputValue});
  };
  const signUp = async () => {
    await AsyncStorage.setItem('token', JSON.stringify(inputs));
    navigation.navigate('Login');
    console.log(inputs);
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
          SignUp
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
            Welcome to App
          </Text>
          <Image
            source={require('./Images/hi.png')}
            style={{height: 30, width: 30, gap: 18}}
          />
        </View>
        <Text
          style={{
            color: '#8899EA',
            alignSelf: 'flex-start',
            fontSize: 12,
            fontWeight: '400',
          }}>
          Create your asccount to make your first business card
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
                onChangeText={val => onChange(item, val)}
              />
            </View>
          )}
        />
      </View>
      <View style={Style.TC}>
        <Checkbox
          style={{borderWidth: 1, borderRadius: 4, height: 23, width: 23}}
          value={isDone}
          onValueChange={() => setIsDone(!isDone)}
        />
        <Text style={Style.TCtext}>I accepts the terms & conditions</Text>
      </View>
      <View style={Style.alreadyExist}>
        <Text style={{fontSize: 12}}>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={{fontSize: 12, color: '#2242D8', fontWeight: '400'}}>
            Login
          </Text>
        </Pressable>
      </View>
      <Pressable
        disabled={!isDone}
        style={!isDone ? Style.nxtBtn2 : Style.nxtBtn1}
        // onPress={() => navigation.navigate('Login')}
        onPress={signUp}>
        <Text style={{fontSize: 16, color: '#FFFFFF', fontWeight: '500'}}>
          Next
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUp;

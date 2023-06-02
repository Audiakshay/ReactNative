import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import General from './Editcard/General';
import Display from './Editcard/Display';
import Links from './Editcard/Links';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        swipeEnabled: false,
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#000000',
        tabBarIndicatorStyle: {
          backgroundColor: '#EEEEEE',
        },
        tabBarIndicatorContainerStyle: {
          width: 900,
        },
        tabBarItemStyle: {
          width: 100,
          height: 50,
          borderRadius: 25,
          backgroundColor: '#EEEEEE',
          marginLeft: 15,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}>
      <Tab.Screen name="General" component={General} />
      <Tab.Screen name="Display" component={Display} />
      <Tab.Screen name="Links" component={Links} />
    </Tab.Navigator>
  );
};
const EditCard = ({navigation}) => {
  return (
    <>
      <View style={editCardStyle.container}>
        <Pressable
          style={editCardStyle.cancel}
          onPress={() => navigation.goBack()}>
          <Icon name="close" size={20} color={'#3055D9'} />
        </Pressable>
        <Text style={editCardStyle.text}>Edit card</Text>
        <Pressable style={editCardStyle.saveBtn}>
          <Text style={editCardStyle.saveBtnText}>Save</Text>
        </Pressable>
      </View>
      <MyTabs />
    </>
  );
};

export default EditCard;

const editCardStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
    marginHorizontal: 25,
  },
  cancel: {
    height: 35,
    width: 35,
    borderRadius: 20,
    backgroundColor: '#EAEDFB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: '#2242D8',
  },
  saveBtn: {
    width: 70,
    height: 30,
    borderRadius: 22,
    backgroundColor: '#E9ECFB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveBtnText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2242D8',
  },
});

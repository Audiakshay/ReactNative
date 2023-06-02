/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Display = () => {
  const DATA = [
    '#3700DC',
    '#92CAFF',
    '#EEFF00',
    '#00FA00',
    '#F910EB',
    '#8D0077',
    '#FFACAC',
  ];
  return (
    <View style={{flex: 1, marginLeft: 15, marginTop: 30}}>
      <Text style={disStyle.text}>Profile photo</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 25,
        }}>
        <Image source={require('../Images/editCard/profile.png')} />
        <View style={disStyle.changeBtn}>
          <FontAwesome5 name="pen" size={15} color={'#2242D8'} />
          <Text style={disStyle.btnText}>Change photo</Text>
        </View>
      </View>
      <View style={{marginBottom: 25}}>
        <Text style={disStyle.text}>Card color</Text>
        <View style={disStyle.colorBar}>
          <View style={disStyle.plusContainer}>
            <Icon name="add" size={20} />
          </View>
          <View style={disStyle.divLine} />
          <FlatList
            horizontal
            data={DATA}
            renderItem={({item}) => (
              <View
                style={{
                  backgroundColor: item,
                  borderRadius: 20,
                  height: 34,
                  width: 34,
                  marginRight: 6,
                }}
              />
            )}
          />
        </View>
      </View>
      <Text style={disStyle.text}>Logo</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 25,
        }}>
        <View
          style={{
            width: 70,
            height: 70,
            backgroundColor: '#E9ECFB',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#2242D8',
          }}>
          <Image
            source={require('../Images/Cards/cardPallete.png')}
            style={{height: 30, width: 40}}
          />
        </View>
        <View style={disStyle.changeBtn}>
          <FontAwesome5 name="pen" size={15} color={'#2242D8'} />
          <Text style={disStyle.btnText}>Change photo</Text>
        </View>
      </View>
    </View>
  );
};

export default Display;

const disStyle = StyleSheet.create({
  plusContainer: {
    height: 34,
    width: 34,
    borderRadius: 20,
    backgroundColor: '#EAEDFB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  colorBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingLeft: 8,
    width: 325,
    height: 50,
    backgroundColor: '#FFFFFF',
  },
  changeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 151,
    height: 50,
    backgroundColor: '#E9ECFB',
    borderRadius: 20,
    marginLeft: 40,
  },
  btnText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '400',
  },
  divLine: {
    height: 34,
    width: 1,
    backgroundColor: '#EAEDFB',
    marginRight: 6,
  },
  text: {
    marginBottom: 15,
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
  },
});

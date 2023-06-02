/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  SectionList,
  FlatList,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Style from './Style';
import Icon from 'react-native-vector-icons/Ionicons';

const ScannedPages = ({navigation}) => {
  const DATA = [
    {
      title: 'A',
      data: [
        {
          logo: require('./Images/scanned/boy.png'),
          name: 'Aont reni',
          role: 'Co-founder at visio',
        },
        {
          logo: require('./Images/scanned/girl.png'),
          name: 'Aimy len',
          role: 'Marketing head at visio',
        },
      ],
    },
    {
      title: 'B',
      data: [
        {
          logo: require('./Images/scanned/boy.png'),
          name: 'Ben roy',
          role: 'Co-founder at visio',
        },
        {
          logo: require('./Images/scanned/girl.png'),
          name: 'Buzil ken',
          role: 'Marketing head at visio',
        },
      ],
    },
    {
      title: 'C',
      data: [
        {
          logo: require('./Images/scanned/boy.png'),
          name: 'Ciniz mel',
          role: 'Co-founder at visio',
        },
        {
          logo: require('./Images/scanned/girl.png'),
          name: 'Cili ven',
          role: 'Marketing head at visio',
        },
      ],
    },
  ];
  const browse = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  return (
    <View style={{flex: 1}}>
      <View style={Style.scannedHeader}>
        <Pressable style={Style.back} onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={12} />
        </Pressable>
        <Text style={Style.scanHeader}>Scanned</Text>
        <View style={{flexDirection: 'row'}}>
          <Pressable style={Style.plus}>
            <FontAwesome5 name="plus" />
          </Pressable>
          <Pressable style={Style.pen}>
            <FontAwesome5 name="pen" />
          </Pressable>
        </View>
      </View>
      <View style={Style.scanedSearch}>
        <View style={Style.search}>
          <Icon name="search" size={25} style={Style.searchGlass} />
          <TextInput
            placeholder="Search by job, name..."
            style={Style.searchInput}
          />
        </View>
        <View style={Style.filter}>
          <Image source={require('./Images/filter.png')} />
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <SectionList
          sections={DATA}
          renderSectionHeader={({section}) => (
            <View style={Style.secTitle}>
              <Text style={Style.secTitleText}>{section.title}</Text>
            </View>
          )}
          renderItem={({item}) => (
            <View style={Style.sectionList}>
              <Image source={item.logo} />
              <View style={{flex: 1, marginLeft: 18}}>
                <Text style={Style.scanName}>{item.name}</Text>
                <Text style={Style.scanRole}>{item.role}</Text>
              </View>
              <Pressable style={Style.viewBtn}>
                <Text style={Style.viewBtnText}>View</Text>
              </Pressable>
            </View>
          )}
        />
        <View
          style={{
            position: 'absolute',
            left: 320,
            top: 170,
            backgroundColor: '#F4F6FD',
            height: 228,
            width: 21,
            paddingTop: 10,
            borderRadius: 20,
          }}>
          <FlatList
            data={browse}
            renderItem={({item}) => (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 12,
                }}>
                <Text
                  style={{color: '#2242D8', fontWeight: '500', fontSize: 9}}>
                  {item}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default ScannedPages;

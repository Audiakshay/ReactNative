/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, FlatList, Pressable, Modal} from 'react-native';
import React, {useState} from 'react';
import Style from './Style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Cards = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const modal = [
    {text: 'Write to NFC', logo: require('./Images/modalBtn/nfc.png')},
    {text: 'Duplicate card', logo: require('./Images/modalBtn/duplicate.png')},
    {text: 'Delete card', logo: require('./Images/modalBtn/bin.png')},
  ];
  const [cards, setCards] = useState([
    {
      name: 'John ryan',
      type: 'Personal card',
      logo: require('./Images/Cards/cardsLogo.png'),
      id: 1,
    },
    {
      name: 'John ryan',
      type: 'Work card',
      logo: require('./Images/Cards/cardsLogo.png'),
      id: 2,
    },
    {
      name: 'John ryan',
      type: 'Portfolio card',
      logo: require('./Images/Cards/cardsLogo.png'),
      id: 3,
    },
  ]);
  return (
    <View style={{flex: 1}}>
      <Image
        source={require('./Images/Cards/cardPallete.png')}
        style={Style.Container}
      />
      <View style={Style.cardHeader}>
        <Text style={Style.user}>Hey, John</Text>
        <Image
          source={require('./Images/userLogin.png')}
          style={Style.cardBoxImage}
        />
      </View>
      {cards.length < 0 ? (
        <View style={Style.card}>
          <Image source={require('./Images/fileRecord.png')} />
          <Text style={Style.cardText1}>Nothing in your card list!</Text>
          <Text style={Style.cardText2}>
            No worried make your first digital business card now{' '}
          </Text>
          <Image source={require('./Images/line.png')} style={Style.line} />
        </View>
      ) : (
        <View style={Style.flatContainer}>
          <FlatList
            data={cards}
            renderItem={({item}) => (
              <View style={Style.innerFlatContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Image source={item.logo} style={{marginLeft: 14}} />
                  <View style={{flex: 1, marginLeft: 20}}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: '#2242D8',
                        fontWeight: '500',
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#5870E1',
                        fontWeight: '400',
                      }}>
                      {item.type}
                    </Text>
                  </View>
                  <Pressable
                    onPress={() => setOpen(true)}
                    style={Style.moreOption}>
                    <FontAwesome5
                      name="ellipsis-h"
                      size={20}
                      style={{
                        color: '#2242D8',
                      }}
                    />
                  </Pressable>
                </View>
                <View style={Style.cardsBtn}>
                  <Pressable
                    onPress={() => navigation.navigate('Edit')}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 12,
                      paddingRight: 17,
                    }}>
                    <FontAwesome5 name="pen" style={{color: '#2242D8'}} />
                    <Text
                      style={{
                        color: '#2242D8',
                        fontSize: 12,
                        fontWeight: '500',
                      }}>
                      Edit
                    </Text>
                  </Pressable>
                  <Pressable
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 12,
                      width: 123,
                      borderLeftColor: '#B6C1F2',
                      borderRightColor: '#B6C1F2',
                      borderLeftWidth: 1,
                      borderRightWidth: 1,
                      paddingRight: 12,
                      paddingLeft: 9,
                    }}>
                    <FontAwesome5 name="id-card" style={{color: '#2242D8'}} />
                    <Text
                      style={{
                        color: '#2242D8',
                        fontSize: 12,
                        fontWeight: '500',
                      }}>
                      Preview card
                    </Text>
                  </Pressable>
                  <Pressable
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 12,
                      paddingLeft: 17,
                    }}>
                    <FontAwesome5
                      name="paper-plane"
                      style={{color: '#2242D8'}}
                    />
                    <Text
                      style={{
                        color: '#2242D8',
                        fontSize: 12,
                        fontWeight: '500',
                      }}>
                      Share
                    </Text>
                  </Pressable>
                </View>
              </View>
            )}
          />
        </View>
      )}
      <View>
        <Modal transparent visible={open}>
          <View style={Style.cardsModal}>
            <View
              style={{
                height: 7,
                width: 60,
                backgroundColor: '#E9ECFB',
                alignSelf: 'center',
                marginTop: 20,
                borderRadius: 20,
              }}
            />
            <FlatList
              horizontal
              data={modal}
              renderItem={({item}) => (
                <Pressable
                  style={{
                    width: 93,
                    height: 93,
                    backgroundColor:
                      item.text === 'Delete card' ? '#FDEDED' : '#E9ECFB',
                    marginHorizontal: 13,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 35,
                  }}>
                  <Image
                    source={item.logo}
                    style={{
                      height: 20,
                      width: 20,
                      tintColor:
                        item.text === 'Delete card' ? '#EF4B4B' : '#2242D8',
                    }}
                  />
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 12,
                      fontWeight: '500',
                      marginTop: 13,
                    }}>
                    {item.text}
                  </Text>
                </Pressable>
              )}
            />
          </View>
        </Modal>
      </View>
    </View>
  );
};
export default Cards;

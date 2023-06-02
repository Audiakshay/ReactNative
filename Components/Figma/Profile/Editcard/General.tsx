import {View, Text, StyleSheet, SectionList, TextInput} from 'react-native';
import React from 'react';

const General = () => {
  const section = [
    {title: 'Card name', data: ['Work']},
    {title: 'Personal details', data: ['John ryan']},
    {
      title: 'Company details',
      data: ['Company name', 'Designation', 'Department', 'Bio'],
    },
  ];
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <SectionList
        sections={section}
        renderSectionHeader={({section}) => (
          <View style={genStyle.secHeader}>
            <Text style={genStyle.headerText}>{section.title}</Text>
          </View>
        )}
        renderItem={({item}) => (
          <View>
            {item === 'Bio' ? (
              <TextInput
                placeholder={item}
                multiline
                numberOfLines={4}
                style={genStyle.input1}
              />
            ) : (
              <TextInput placeholder={item} style={genStyle.input} />
            )}
          </View>
        )}
      />
    </View>
  );
};

export default General;

const genStyle = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginTop: 15,
    paddingLeft: 18,
    width: 325,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderColor: '#2242D880',
    color: '#2242D8',
    fontSize: 14,
    fontWeight: '500',
  },
  input1: {
    borderWidth: 1,
    marginTop: 15,
    paddingLeft: 18,
    width: 325,
    height: 100,
    textAlignVertical: 'top',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderColor: '#2242D880',
    color: '#2242D8',
    fontSize: 14,
    fontWeight: '500',
  },
  secHeader: {
    marginTop: 30,
  },
  headerText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 19.6,
  },
});

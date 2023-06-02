/* eslint-disable react-native/no-inline-styles */
import React, {useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const BottomSheet1 = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['10%', '90%'], []);

  //Flatlist data
  const data = [
    {
      title: 'Numbers',
      logo: require('../Figma/Profile/Images/links/telephone.png'),
    },
    {
      title: 'Links',
      logo: require('../Figma/Profile/Images/links/link.png'),
    },
    {
      title: 'Account',
      logo: require('../Figma/Profile/Images/links/linkedin.png'),
    },
    {
      title: 'Account',
      logo: require('../Figma/Profile/Images/links/instagram.png'),
    },
    {
      title: 'Account',
      logo: require('../Figma/Profile/Images/links/twitter.png'),
    },
    {
      title: 'Account',
      logo: require('../Figma/Profile/Images/links/facebook.png'),
    },
    {
      title: 'Account',
      logo: require('../Figma/Profile/Images/links/youtube.png'),
    },
    {
      title: 'Account',
      logo: require('../Figma/Profile/Images/links/github.png'),
    },
    {
      title: 'Account',
      logo: require('../Figma/Profile/Images/links/dribbble.png'),
    },
    {
      title: 'Account',
      logo: require('../Figma/Profile/Images/links/behance.png'),
    },
    {
      title: 'Account',
      logo: require('../Figma/Profile/Images/links/spotify.png'),
    },
    {
      title: 'Account',
      logo: require('../Figma/Profile/Images/links/twitch.png'),
    },
  ];

  // renders
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
          <View style={styles.contentContainer}>
            <Text style={styles.addText}>Add links and contacts</Text>
            <Text style={styles.tapField}>Tap on filed to add</Text>
            <View style={styles.appContainer}>
              {data.map(item => (
                <View style={styles.accountContainer} key={item.logo}>
                  <Image
                    source={item.logo}
                    style={{
                      width: 26,
                      height: 26,
                      marginBottom: 10,
                      tintColor: item.title === 'Account' ? null : '#2242D8',
                    }}
                  />
                  <Text style={styles.accountText}>{item.title}</Text>
                </View>
              ))}
            </View>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 24,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#E9ECFB',
    paddingVertical: 20,
    alignItems: 'center',
  },
  addText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginLeft: 25,
  },
  tapField: {
    color: '#6C6C6C',
    fontSize: 12,
    fontWeight: '400',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginBottom: 16,
  },
  accountContainer: {
    width: 93,
    height: 93,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  appContainer: {
    width: 340,
    height: 615,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  accountText: {
    color: '#2242D8',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default BottomSheet1;

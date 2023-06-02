/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  FlatList,
  Pressable,
  TextInput,
  Image,
  ScrollView,
  Modal,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {
  NavigationContainer,
  useNavigationState,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';
import Style from './Style';
import CameraVision from '../../CameraVision/CameraVision';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomePage from './WelcomePage';
import SignUp from './SignUp';
import LoginPage from './LoginPage';
import ScannedPages from './ScannedPages';
import Token from '../../token';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Cards from './Cards';
import EditCard from './EditCard';
// import MyTabs from './EditCard';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CamPage = () => {
  return <CameraVision />;
};
const ScanCard = ({navigation}) => {
  return (
    <View style={Style.scanContainer}>
      <Text style={Style.scanText}>Scan card</Text>
      <View style={Style.innerDiv}>
        <Image source={require('./Images/Scan.png')} />
        <Text style={Style.scanNewCard}>Scan a new card</Text>
        <Text style={Style.ScanDesc}>
          Just tap on scan card to add contact from physical card
        </Text>
        <Pressable
          style={Style.scanBtn}
          onPress={() => navigation.navigate('Scan Id')}>
          <Text style={Style.scanBtnText}>Scan card</Text>
        </Pressable>
        <View style={Style.scannedContact}>
          <View style={Style.badgeContainer}>
            <FontAwesome5 name="id-badge" style={Style.profileBadge} />
          </View>
          <Text style={Style.seeProfiles}>See scanned contacts</Text>
          <FontAwesome5 name="chevron-right" style={Style.nextProfiles} />
        </View>
      </View>
    </View>
  );
};
const AddCard = () => {
  return (
    <ScrollView>
      {/* Image */}
      <View style={Style.imgConatiner}>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/002/618/090/large_2x/business-woman-in-white-shirt-on-grey-background-free-photo.jpg',
          }}
          style={Style.img}
        />
      </View>
      <View style={Style.addContainer}>
        {/* Name */}
        <View style={Style.nameContainer}>
          <Text style={Style.name}>Jani ren</Text>
          <View style={Style.nameCheck} />
        </View>

        {/* About */}
        <View style={Style.aboutConatiner}>
          <Text style={Style.Detailstext}>About</Text>
          <Text style={Style.about}>
            A UX designer must have strong problem- solving skills and be able
            to identify pain points in the user journey and find solutions to
            improve the user experience.
          </Text>
        </View>

        {/* Person details */}
        <View style={Style.personDetailsContainer}>
          <Text style={Style.Detailstext}>Person details</Text>
          <View style={Style.DetailsInnerContainer}>
            <Text style={Style.Details}>Email address:</Text>
            <Text style={Style.Bold}>johnryan@gmail.com</Text>
          </View>
          <View style={Style.DetailsInnerContainer}>
            <Text style={Style.Details}>Mobile number:</Text>
            <Text style={Style.Bold}>9833762389</Text>
          </View>
        </View>

        {/* Company details */}
        <View style={Style.companyDetailsContainer}>
          <Text style={Style.Detailstext}>Company details</Text>
          <View style={Style.DetailsInnerContainer}>
            <Text style={Style.Details}>Company name:</Text>
            <Text style={Style.Bold}>Creative tech minds</Text>
          </View>
          <View style={Style.DetailsInnerContainer}>
            <Text style={Style.Details}>Designation:</Text>
            <Text style={Style.Bold}>Creative designer</Text>
          </View>
          <View style={Style.DetailsInnerContainer}>
            <Text style={Style.Details}>Department:</Text>
            <Text style={Style.Bold}>Design</Text>
          </View>
          <View style={Style.DetailsInnerContainer}>
            <Text style={Style.Details}>Mobile number:</Text>
            <Text style={Style.Bold}>+125648 26585</Text>
          </View>
        </View>

        {/* Contacts and Social links */}
        <View style={Style.contactsContainer}>
          <Text style={Style.Detailstext}>Contacts and Social links</Text>
          <View style={Style.contact}>
            <FontAwesome5 name="phone-alt" style={Style.Font} />
            <View>
              <Text style={Style.Social}>+125485 64862</Text>
              <Text style={Style.Social}>+115483 12487</Text>
            </View>
            <View>
              <Text style={Style.Title}> (For work)</Text>
              <Text style={Style.Title}>(whatsApp only)</Text>
            </View>
          </View>
        </View>
        <View style={Style.product}>
          <FontAwesome5 name="link" style={Style.Font} />
          <Text style={Style.Title}>(Product web)</Text>
        </View>
        <View style={Style.linkedin}>
          <FontAwesome5 name="linkedin" style={Style.Font} />
          <Text style={Style.Social}>ryanjohn12</Text>
          <Text style={Style.Title}>(Product page)</Text>
        </View>
        <Pressable style={Style.cardBtn}>
          <Text style={Style.cardBtnName}>Share contact</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};
const Contacts = ({navigation}) => {
  const data = [
    {
      title: 'All contacts',
      count: '35 contacts',
      logo: require('./Images/allContact.png'),
      directory: [
        require('./Images/allContacts/all3.png'),
        require('./Images/allContacts/all2.png'),
        require('./Images/allContacts/all1.png'),
      ],
    },
    {
      title: 'Recently added',
      count: '30 contacts',
      logo: require('./Images/recentlyAdded.png'),
      directory: [
        require('./Images/recentlyAdded/recent3.png'),
        require('./Images/recentlyAdded/recent2.png'),
        require('./Images/recentlyAdded/recent1.png'),
      ],
    },
    {
      title: 'Live contacts',
      count: '40 contacts',
      logo: require('./Images/liveChat.png'),
      directory: [
        require('./Images/liveContacts/live3.png'),
        require('./Images/liveContacts/live2.png'),
        require('./Images/liveContacts/live1.png'),
      ],
    },
    {
      title: 'Scanned',
      count: '0 contacts',
      logo: require('./Images/empty.png'),
      directory: [
        require('./Images/emptySmall.png'),
        require('./Images/emptySmall.png'),
        require('./Images/emptySmall.png'),
      ],
    },
  ];
  const scanned = contactBtn => {
    if (contactBtn === 'Scanned') {
      navigation.navigate('ScanedContacts');
    }
  };
  return (
    <View style={{flex: 1, alignSelf: 'center'}}>
      <View style={Style.contactHeader}>
        <Text style={Style.contactText}>Contacts</Text>
        <Pressable style={Style.createBtn}>
          <Text style={Style.createBtnText}>+ Create group</Text>
        </Pressable>
      </View>
      <View style={Style.searchBar}>
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
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Pressable
            style={Style.contactBtn}
            onPress={() => scanned(item.title)}>
            <Image source={item.logo} />
            <Image style={Style.small3} source={item.directory[2]} />
            <Image style={Style.small2} source={item.directory[1]} />
            <Image style={Style.small1} source={item.directory[0]} />
            <View style={{flex: 1, marginLeft: 38}}>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#2242D8'}}>
                {item.title}
              </Text>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#8B9CEB'}}>
                {item.count}
              </Text>
            </View>
            <FontAwesome5 name="chevron-right" style={Style.next} />
          </Pressable>
        )}
      />
    </View>
  );
};
const Settings = ({navigation}) => {
  const settingBtn = [
    'Profile',
    'Share app',
    'Rate us',
    'About app',
    'Contact us',
    'Privacy Policy',
  ];
  const [loading, setLoading] = useState(false);

  return (
    <View style={Style.settingContainer}>
      <Text style={Style.settingText}>Settings</Text>
      <View style={Style.sec} />
      <View style={Style.btnContainer}>
        <FlatList
          data={settingBtn}
          renderItem={({item}) => (
            <View style={Style.btnDiv}>
              <Pressable style={Style.setBtn}>
                <Text style={Style.btnText}>{item}</Text>
              </Pressable>
              <FontAwesome5 name="chevron-right" style={Style.next} />
            </View>
          )}
        />
        <View style={Style.LogoutBtn}>
          <Pressable
            onPress={() => {
              setLoading(true);
              AsyncStorage.clear();
            }}>
            <Text style={Style.logout}>Logout?</Text>
          </Pressable>
        </View>
      </View>
      {loading && (
        <View style={{height: '100%', width: '100%'}}>
          <Modal visible={loading} transparent animationType="slide">
            <View
              style={{
                height: 338,
                width: '100%',
                backgroundColor: '#FFFFFF',
                alignItems: 'center',
                justifyContent: 'center',
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
              <View style={Style.logoutContainer}>
                <Text
                  style={{
                    color: '#2242D8',
                    fontSize: 18,
                    fontWeight: '500',
                    marginBottom: 14,
                  }}>
                  Are you sure want to logout?
                </Text>
                <Text style={{width: 181, textAlign: 'center'}}>
                  You will need to again enter your details to login
                </Text>
              </View>
              <Pressable
                style={Style.outConfirm}
                onPress={() => {
                  navigation.navigate('Welcome');
                  setLoading(false);
                }}>
                <Text style={Style.outConfirmtext}>Yes, I want to</Text>
              </Pressable>
              <Pressable
                onPress={() => setLoading(false)}
                style={Style.outConfirm}>
                <Text style={Style.outConfirmtext}>No, I don't want to</Text>
              </Pressable>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
};
const Profile = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Cards') {
            iconName = 'credit-card';
            size = focused ? 25 : 20;
            color = focused ? '#2242D8' : null;
          } else if (route.name === 'Scan card') {
            iconName = 'barcode';
            size = focused ? 25 : 20;
            color = focused ? '#2242D8' : null;
          } else if (route.name === 'Add card') {
            iconName = 'plus-circle';
            size = focused ? 30 : 25;
            color = focused ? '#2242D8' : null;
          } else if (route.name === 'Contacts') {
            iconName = 'address-book';
            size = focused ? 25 : 20;
            color = focused ? '#2242D8' : null;
          } else if (route.name === 'Settings') {
            iconName = 'toolbox';
            size = focused ? 25 : 20;
            color = focused ? '#2242D8' : null;
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Cards"
        component={Cards}
        options={{header: () => null}}
      />
      <Tab.Screen
        name="Scan card"
        component={ScanCard}
        options={{header: () => null}}
      />
      <Tab.Screen
        name="Add card"
        component={AddCard}
        options={{header: () => null}}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{header: () => null}}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{header: () => null}}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

const ScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomePage}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Bottom"
          component={Profile}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{title: null, header: () => null}}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{title: null, header: () => null}}
        />
        <Stack.Screen
          name="ScanedContacts"
          component={ScannedPages}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Edit"
          component={EditCard}
          options={{header: () => null}}
        />
        <Stack.Screen name="Scan Id" component={CamPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenNavigation;

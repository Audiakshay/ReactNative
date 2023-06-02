import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //universal style
  Bold: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  DetailsInnerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Details: {
    fontSize: 16,
    fontWeight: '400',
    paddingTop: 9,
  },
  Detailstext: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    paddingBottom: 3,
  },
  Font: {
    fontSize: 20,
    color: '#2242D8',
  },
  Social: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2242D8',
  },
  Title: {
    fontSize: 12,
    fontWeight: '500',
    color: '#768AE7',
    textAlign: 'right',
  },

  //setting
  settingContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  settingText: {
    fontSize: 30,
    // fontFamily: 'Plus Jakarta Display',
    color: '#2242D8',
    lineHeight: 38.82,
    fontWeight: '500',
    height: 39,
    width: 118,
    top: 25,
    alignSelf: 'flex-start',
    left: '8%',
  },
  sec: {
    height: 100,
    width: 325,
    borderWidth: 2,
    top: 45,
    borderRadius: 20,
    borderColor: '#2242D8',
    backgroundColor: '#EAEDFB',
  },

  btnContainer: {
    marginTop: 60,
  },
  btnDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EAEDFB',
    marginBottom: 5,
    width: 325,
    borderRadius: 20,
    height: 55,
  },
  setBtn: {
    display: 'flex',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 19.6,
    color: '#2242E8',
    paddingLeft: 15,
  },
  next: {
    marginRight: 30,
    color: '#2242E8',
    fontSize: 15,
  },
  logout: {
    color: '#EF4B4B',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 15.6,
  },
  LogoutBtn: {
    position: 'absolute',
    bottom: 260,
    marginLeft: 16,
  },
  outConfirm: {
    backgroundColor: '#2242D8',
    height: 55,
    width: 280,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 9,
    borderRadius: 20,
  },
  outConfirmtext: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  logoutContainer: {
    marginBottom: 34,
    display: 'flex',
    alignItems: 'center',
  },

  //Add Card
  addContainer1: {
    display: 'flex',
    alignItems: 'center',
  },

  //Image Field
  imgConatiner: {
    borderBottomWidth: 5,
    borderBottomColor: '#ACB9FF',
  },
  img: {
    height: 354,
    width: '100%',
  },

  //Add Container
  addContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  //User Name
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ACB9FF',
    width: 325,
  },
  name: {
    fontSize: 24,
    fontWeight: '500',
    color: 'black',
    flex: 1,
  },
  nameCheck: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EAEDFB',
  },

  // About user
  aboutConatiner: {
    width: 325,
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: '#ACB9FF',
  },

  about: {
    fontSize: 16,
    fontWeight: '400',
  },

  //Person details
  personDetailsContainer: {
    width: 325,
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: '#ACB9FF',
  },

  //Company details
  companyDetailsContainer: {
    width: 325,
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: '#ACB9FF',
  },

  //Contacts and Social links
  contactsContainer: {
    width: 325,
    marginVertical: 20,
  },
  contact: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F7FF',
    width: 325,
    height: 80,
    borderRadius: 15,
    paddingHorizontal: 20,
    marginTop: 12,
  },
  product: {
    width: 325,
    height: 47,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F7FF',
    marginBottom: 10,
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  linkedin: {
    width: 325,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F7FF',
    marginBottom: 30,
    borderRadius: 15,
    paddingHorizontal: 20,
  },

  //Card Button
  cardBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2422E8',
    width: 280,
    height: 55,
    marginBottom: 35,
    borderRadius: 20,
  },
  cardBtnName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },

  //Scan card

  //Scan Text
  scanText: {
    fontSize: 30,
    fontWeight: '500',
    color: '#2242D8',
    marginVertical: 28,
    alignSelf: 'flex-start',
    left: '5%',
  },

  //container
  scanContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  //Inner div
  innerDiv: {
    backgroundColor: '#F5F7FD',
    display: 'flex',
    alignItems: 'center',
    height: 680,
    width: 325,
    borderRadius: 20,
    paddingTop: 35,
  },

  //Scanned Contact
  scannedContact: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 80,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingHorizontal: 20,
  },

  //Profile Badge
  profileBadge: {
    color: '#2242D8',
    fontSize: 22,
  },
  badgeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F7FD',
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  //See Profiles
  seeProfiles: {
    color: '#2242D8',
    fontSize: 16,
    fontWeight: '400',
  },

  //Scan New Card
  scanNewCard: {
    color: '#2242D8',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 32,
  },

  //Next Profiles
  nextProfiles: {
    color: '#2242D8',
    fontSize: 16,
  },

  //Scan Description
  ScanDesc: {
    color: '#869BFF',
    width: 201,
    height: 32,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 13,
    marginBottom: 32,
  },
  //Scan Button
  scanBtn: {
    width: 115,
    height: 40,
    backgroundColor: '#F5F7FD',
    borderWidth: 1,
    borderColor: '#2242D880',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 65,
  },
  scanBtnText: {
    color: '#2242D8',
    fontSize: 14,
    fontWeight: '500',
  },

  ///////////////Welcome page///////////////
  welcomePage: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    width: 246,
    height: 54,
    fontSize: 18,
    fontWeight: '500',
    position: 'absolute',
    left: 50,
    top: 82,
    color: '#FFFFFF',
  },
  signUp: {
    width: 280,
    height: 50,
    borderRadius: 20,
    display: 'flex',
    backgroundColor: '#2242D8',
    justifyContent: 'center',
    marginTop: 40,
  },
  signUpText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
    alignSelf: 'center',
  },
  LogIn: {
    width: 280,
    height: 50,
    borderRadius: 20,
    display: 'flex',
    backgroundColor: '#2242D8',
    justifyContent: 'center',
    marginTop: 13,
  },
  logInText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
    alignSelf: 'center',
  },
  divBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  frstLine: {
    borderColor: '#EBEEFC',
    borderWidth: 1,
    height: 0,
    width: 155,
  },
  divText: {
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: '400',
  },
  secLine: {
    borderColor: '#EBEEFC',
    borderWidth: 1,
    height: 0,
    width: 155,
  },
  otherSignup: {
    width: 280,
    height: 50,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 20,
    borderColor: '#2242D857',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  otherSignupText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2242D8',
    paddingLeft: 28,
  },

  ///////////////Sign up Page///////////
  signupContainer: {
    alignSelf: 'center',
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    width: 325,
    height: 67,
    marginBottom: 10,
    paddingVertical: 15,
    borderRadius: 20,
    borderColor: '#2242D8B2',
    paddingHorizontal: 25,
  },
  placeholderTop: {
    fontSize: 12,
    fontWeight: '500',
    paddingLeft: 5,
  },
  placeholderBottom: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2242D8',
  },
  TC: {
    paddingHorizontal: 27,
    width: 325,
    height: 67,
    position: 'absolute',
    top: 430,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  TCtext: {
    fontSize: 12,
    fontWeight: '400',
    color: '#7C7C7C',
  },
  alreadyExist: {
    position: 'absolute',
    top: 570,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  nxtBtn1: {
    width: 280,
    height: 55,
    backgroundColor: '#2242D8',
    position: 'absolute',
    top: 600,
    alignSelf: 'center',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nxtBtn2: {
    width: 280,
    height: 55,
    backgroundColor: 'gray',
    position: 'absolute',
    top: 600,
    alignSelf: 'center',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //////Login page/////
  LoginDiv: {
    position: 'absolute',
    top: 375,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgotPassword: {
    position: 'absolute',
    top: 290,
    left: 30,
    color: '#2242D8',
    fontWeight: '400',
    fontSize: 12,
  },
  anotherWayLogin: {
    position: 'absolute',
    top: 440,
    color: '#2242D8',
    fontWeight: '400',
    fontSize: 14,
    alignSelf: 'center',
  },
  loginFrstLine: {
    borderColor: '#EBEEFC',
    borderWidth: 1,
    width: 155,
  },
  loginSecLine: {
    borderColor: '#EBEEFC',
    borderWidth: 1,
    width: 155,
  },

  ///////Conatct Page///////
  contactHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 45,
    marginBottom: 20,
  },
  contactText: {
    fontSize: 30,
    fontWeight: '500',
    color: '#2242D8',
  },
  createBtn: {
    backgroundColor: '#EAEDFB',
    width: 126,
    height: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  createBtnText: {
    color: '#2242D8',
    fontSize: 12,
    fontWeight: '500',
  },
  contactBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 325,
    height: 110,
    borderWidth: 1,
    borderColor: '#2242D842',
    backgroundColor: '#EAEDFB4F',
    marginBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    marginBottom: 25,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 270,
    height: 50,
    backgroundColor: '#F4F6FD',
    borderRadius: 20,
  },
  filter: {
    width: 50,
    height: 50,
    backgroundColor: '#F4F6FD',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  searchGlass: {
    color: '#2242D8',
    paddingLeft: 16,
  },
  searchInput: {
    width: 200,
    color: '#757575',
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: 21,
  },
  small1: {
    position: 'absolute',
    top: 70,
    left: 60,
  },
  small2: {
    position: 'absolute',
    top: 70,
    left: 35,
  },
  small3: {
    position: 'absolute',
    top: 70,
    left: 15,
  },

  ///////////Scanned pages///////
  scannedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  plus: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F6FD',
    width: 35,
    height: 35,
    borderRadius: 20,
    borderColor: '#2242D8',
    borderWidth: 1,
    marginRight: 7,
  },
  pen: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F6FD',
    borderColor: '#2242D8',
    borderWidth: 1,
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  scanHeader: {
    fontWeight: '500',
    fontSize: 20,
    marginLeft: 25,
    color: '#2242D8',
  },
  back: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEDFB',
    width: 32,
    height: 32,
    borderRadius: 20,
  },
  scanedSearch: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 29,
    gap: 5,
  },
  secTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 35,
    backgroundColor: '#F4F6FD',
    borderRadius: 20,
    marginLeft: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  secTitleText: {
    color: '#2242D8',
    fontSize: 16,
    fontWeight: '500',
  },
  sectionList: {
    width: 294,
    height: 60,
    backgroundColor: '#F4F6FD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginLeft: 18,
    marginBottom: 10,
  },
  viewBtn: {
    width: 55,
    height: 25,
    backgroundColor: '#FFFFFF',
    borderColor: '#2242D8',
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBtnText: {
    color: '#2242D8',
    fontSize: 9,
    fontWeight: '500',
  },
  scanName: {
    color: '#2242D8',
    fontSize: 12,
    fontWeight: '500',
  },
  scanRole: {
    color: '#7085E6',
    fontSize: 9,
    fontWeight: '500',
  },

  ///////Cards ////////
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 15,
    marginRight: 28,
    marginBottom: 23,
    gap: 22,
  },
  card: {
    width: 325,
    height: 680,
    backgroundColor: '#F5F7FD',
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 28,
  },
  cardBoxImage: {
    height: 46,
    width: 46,
    backgroundColor: '#F4F6FD',
    borderRadius: 20,
  },
  cardText1: {
    fontSize: 18,
    color: '#2242D8',
    fontWeight: '500',
    marginTop: 24,
  },
  cardText2: {
    width: 201,
    height: 32,
    color: '#869BFF',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 8,
    textAlign: 'center',
  },
  line: {
    height: 400,
    width: 53,
  },
  user: {
    color: '#2242D8',
    fontSize: 14,
    fontWeight: '500',
  },
  Container: {
    position: 'absolute',
    top: 20,
    left: 25,
  },
  flatContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerFlatContainer: {
    backgroundColor: '#F1F3FC',
    width: 325,
    height: 169,
    marginBottom: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#59ACF3',
    justifyContent: 'center',
  },
  moreOption: {
    borderWidth: 1,
    borderColor: '#2242D8',
    borderRadius: 35,
    width: 45,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginRight: 30,
  },
  cardsBtn: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 296,
    height: 49,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2242D826',
    marginTop: 19,
  },
  cardsModal: {
    height: 183,
    width: '100%',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default styles;

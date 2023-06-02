// import {
//   View,
//   Text,
//   ScrollViewComponent,
//   ScrollView,
//   FlatList,
//   SectionList,
// } from 'react-native';
// import React, {useState} from 'react';

// const App = () => {
//   const [items, setItems] = useState([
//     {name: 'item1'},
//     {name: 'item2'},
//     {name: 'item3'},
//     {name: 'item4'},
//     {name: 'item5'},
//     {name: 'item6'},
//     {name: 'item7'},
//     {name: 'item8'},
//     {name: 'item9'},
//     {name: 'item10'},
//   ]);

//   const DATA = [
//     {title: 'Title: 1', id: 1, data: ['Item 1-1', 'Item 1-2', 'Item 1-3']},
//     {title: 'Title: 2', id: 2, data: ['Item 2-1', 'Item 2-2', 'Item 2-3']},
//     {title: 'Title: 3', id: 3, data: ['Item 3-1', 'Item 3-2', 'Item 3-3']},
//     {title: 'Title: 4', id: 4, data: ['Item 4-1', 'Item 4-2', 'Item 4-3']},
//   ];

//   return (
//     <ScrollView>
//       {/* {items.map(item => (
//         <View
//           style={{
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: 'red',
//             marginBottom: 20,
//           }}
//           >
//           <Text style={{
//             fontSize:50,
//           }}>{item.name}</Text>
//         </View>
//       ))} */}
//       {/* <FlatList
//         data={items}
//         renderItem={({item}) => (
//           <View
//             style={{
//               justifyContent: 'center',
//               alignItems: 'center',
//               backgroundColor: 'yellow',
//               marginBottom: 30,
//             }}>
//             <Text style={{fontSize: 30}}>{item.name}</Text>
//           </View>
//         )}
//       /> */}
//       <SectionList
//         sections={DATA}
//         renderSectionHeader={({section}) => (
//           <View>
//             <Text
//               style={{
//                 textAlign: 'center',
//                 backgroundColor: 'red',
//                 fontSize: 50,
//               }}>
//               {section.title}
//             </Text>
//           </View>
//         )}
//         renderItem={({item}) => <Text style={{fontSize: 50}}>{item}</Text>}
//       />
//     </ScrollView>
//   );
// };

// export default App;

import {View, Text} from 'react-native';
import React from 'react';
import UI from './Components/Redux/UI';
import Store from './Components/Redux/Store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={Store}>
      <UI />
    </Provider>
  );
};

export default App;

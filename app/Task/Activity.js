
// // import React,{useState} from 'react';
// // import {
// //   SafeAreaView,
// //   View,
// //   FlatList,
// //   StyleSheet,
// //   Text,
// //   StatusBar,
// //   Image,
// //   TouchableOpacity
// // } from 'react-native';
// // import { images } from '../../assets/images';
// // import { DATA } from '../../activityData';
// // import {search} from '../../assets/images';
// // import {filer} from '../../assets/images';
// // import {sort} from '../../assets/images';
// // const Footer = () => (
// //   <View style={styles.footer}>
// //     {/* <Text style={styles.footerText}>This is the footer</Text> */}
// //     <View style={styles.imageContainer}>
// //     <Image
// //         source={search}
// //         style={{ width: 20, height: 20, marginRight:90}}
// //       />
// //       <Image
// //         source={filer}
// //         style={{ width: 20, height: 20, marginRight:90}}
// //       />
// //       <Image
// //         source={sort}
// //         style={{ width: 20, height: 20, marginRight:10}}
// //       />
// //       </View>



// //   </View>
// // );

// // const Item = ({ name, number, companyName, ownerName, lastContacted, status }) => (
// //   <View style={styles.item}>
// //     <View>
// //       <Image
// //         source={images}
// //         style={{ width: 50, height: 50, marginTop: 40, marginRight: 20 }}
// //       />
// //     </View>

// //     <View style={styles.textContainer}>
// //       <Text style={styles.title}>{name}</Text>
// //       <Text style={styles.smallText}>{`Number: ${number}`}</Text>
// //       <Text style={styles.smallText}>{`Company: ${companyName}`}</Text>
// //       <Text style={styles.smallText}>{`Owner: ${ownerName}`}</Text>
// //       <Text style={styles.smallText}>{`Last Contacted: ${lastContacted}`}</Text>
// //       <View style={styles.buttonContainer}>
// //         <TouchableOpacity>
// //         <Text style={styles.buttonText}>{`${status}`}</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   </View>
// // );

// // const App = () => {
// //   return (
// //      <SafeAreaView style={styles.container}>
// //     <FlatList
// //       data={DATA}
// //       renderItem={({ item }) => <Item {...item} />}
// //       keyExtractor={(item) => item.id}
// //      //ListFooterComponent={Footer}
// //     />
// //     <Footer/>
// //   </SafeAreaView>
  

// //   );
// // };


// // return (
// //   <SafeAreaView style={styles.container}>
// //     <FlatList
// //       data={filteredData}
// //       renderItem={({ item }) => <Item {...item} />}
// //       keyExtractor={(item) => item.id}
// //       ListFooterComponent={<Footer onSearch={handleSearchPress} />}
// //     />
// //     <Footer/>
// //   </SafeAreaView>
// // );

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     marginTop: StatusBar.currentHeight || 0,
// //   },
// //   item: {
// //     backgroundColor: '#f2f2f2',
// //     padding: 20,
// //     marginVertical: 8,
// //     marginHorizontal: 16,
// //     flexDirection: 'row',
// //   },
// //   footer: {
// //     backgroundColor: '#888', 
// //     padding: 10,
// //     alignItems: 'center',
// //   },
// //   footerText: {
// //     color: '#fff', 
// //   },
// //   title: {
// //     fontSize: 32,
// //   },
// //   textContainer: {
// //     flexDirection: 'column',
// //   },
// //   smallText: {
// //     fontSize: 12,
// //     color: '#555',
// //   },
// //   buttonText: {
// //     fontSize: 12,
// //     color: '#555',
// //   },
// //   buttonContainer: {
// //     backgroundColor: '#ddd', 
// //     padding: 3,
// //     borderRadius: 2,
// //     alignSelf: 'flex-start',
// //     width: 150,
// //     height: 30,
// //     marginRight: 70,
// //     marginTop: 10,
// //     justifyContent: 'center', 
// //     alignItems: 'center', 
// //   },
// //   imageContainer:{
// //     flexDirection:'row',
// //     justifyContent:'center',
// //     marginTop:10,
// //   },
// // });

// // export default App;

// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
//   Image,
//   TouchableOpacity
// } from 'react-native';
// import { images } from '../../assets/images';
// import { DATA } from '../../activityData';
// import {search} from '../../assets/images';
// import {filer} from '../../assets/images';
// import {sort} from '../../assets/images';
// const Footer = () => (
//   <View style={styles.footer}>
//     {/* <Text style={styles.footerText}>This is the footer</Text> */}
//     <View style={styles.imageContainer}>
//     <Image
//         source={search}
//         style={{ width: 20, height: 20, marginRight:90}}
//       />
//       <Image
//         source={filer}
//         style={{ width: 20, height: 20, marginRight:90}}
//       />
//       <Image
//         source={sort}
//         style={{ width: 20, height: 20, marginRight:10}}
//       />
//       </View>



//   </View>
// );

// const Item = ({ name, number, companyName, ownerName, lastContacted, status }) => (
//   <View style={styles.item}>
//     <View>
//       <Image
//         source={images}
//         style={{ width: 50, height: 50, marginTop: 40, marginRight: 20 }}
//       />
//     </View>

//     <View style={styles.textContainer}>
//       <Text style={styles.title}>{name}</Text>
//       <Text style={styles.smallText}>{`Number: ${number}`}</Text>
//       <Text style={styles.smallText}>{`Company: ${companyName}`}</Text>
//       <Text style={styles.smallText}>{`Owner: ${ownerName}`}</Text>
//       <Text style={styles.smallText}>{`Last Contacted: ${lastContacted}`}</Text>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity>
//         <Text style={styles.buttonText}>{`${status}`}</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   </View>
// );



// const App = () => {
//   return (
//      <SafeAreaView style={styles.container}>
//     <FlatList
//       data={DATA}
//       renderItem={({ item }) => <Item {...item} />}
//       keyExtractor={(item) => item.id}
//      //ListFooterComponent={Footer}
//     />
//     <Footer/>
//   </SafeAreaView>
  

//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f2f2f2',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     flexDirection: 'row',
//   },
//   footer: {
//     backgroundColor: '#888', 
//     padding: 10,
//     alignItems: 'center',
//   },
//   footerText: {
//     color: '#fff', 
//   },
//   title: {
//     fontSize: 32,
//   },
//   textContainer: {
//     flexDirection: 'column',
//   },
//   smallText: {
//     fontSize: 12,
//     color: '#555',
//   },
//   buttonText: {
//     fontSize: 12,
//     color: '#555',
//   },
//   buttonContainer: {
//     backgroundColor: '#ddd', 
//     padding: 3,
//     borderRadius: 2,
//     alignSelf: 'flex-start',
//     width: 150,
//     height: 30,
//     marginRight: 70,
//     marginTop: 10,
//     justifyContent: 'center', 
//     alignItems: 'center', 
//   },
//   imageContainer:{
//     flexDirection:'row',
//     justifyContent:'center',
//     marginTop:10,
//   }
// });

// export default App;

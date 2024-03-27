// import { View, Text, StyleSheet } from 'react-native';
// import React from 'react';
 
// const DetailView = ({ label, value }) => {
//   return (
//     <View style={styles.detailItem}>
//       <Text style={styles.label}>{label}:</Text>
//       <Text style={styles.value}>{value}</Text>
//     </View>
//   );
// };
 
// export default function DetailCard({ obj, title }) {
//   const keys = Object.keys(obj);
 
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>{title}</Text>
//       </View>
//       {keys.map((key, index) => (
//         <DetailView key={index} label={key} value={obj[key]} />
//       ))}
//     </View>
//   );
// }
 
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "white",
//     padding: 20,
//     width: "90%", // Adjust the width here
//     borderRadius: 10, // Add borderRadius for styling
//     elevation: 3, // Add elevation for shadow effect
//     marginBottom: 20, // Add marginBottom for spacing
//   },
//   header: {
//     marginBottom: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: "#E2E8F0",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#1E293B",
//   },
//   detailItem: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 10,
//     alignItems: "center",
//   },
//   label: {
//     fontWeight: "bold",
//     marginRight: 10,
//     color: "#4B5563",
//   },
//   value: {
//     color: "#4B5563",
//   },
// });


import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
 
const DetailView = ({ label, value, isStatus }) => {
  return (
    <View style={[styles.detailItem, isStatus && styles.highlight]}>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};
 
export default function DetailCard({ obj, title, Status }) {
  const keys = Object.keys(obj);
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {keys.map((key, index) => (
        <DetailView key={index} label={key} value={obj[key]} isStatus={key === 'Status' && obj[key] === Status} />
      ))}
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    width: "100%",
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
    // height:'70%'
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E293B",
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },
  label: {
    fontWeight: "bold",
    marginRight: 10,
    color: "#4B5563",
  },
  value: {
    color: "#4B5563",
  },
  highlight: {
    backgroundColor: "#FDE68A", // Change highlight color as desired
  },
});
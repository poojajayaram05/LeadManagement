import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

 
const DataRow = ({ key ,label, detail}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.data}>{label}</Text>
      <Text  style={styles.detail}>{detail}</Text>
    </View>
  );
};

const Section = ({ title, isOpen, onPress, children }) => {
  return (
    <View style={styles.sectionContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>{title}</Text>
          <Ionicons name={isOpen ? 'caret-up' : 'caret-down'} size={18} color="black" style={{ marginLeft: 5, marginTop: 10 }} />
        </View>
      </TouchableOpacity>
      {isOpen && <View>{children}</View>}
    </View>
  );
};
 
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  detail: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  data: {
    color: '#023B5E',
    fontSize: 14,
    textAlign: 'left',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
 
});
 
export { DataRow, Section };

// export default DataRow;
// export default Section;

//........................................
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const AccordionDataRow = ({ title, isOpen, onPress, label, detail, color, children }) => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={onPress}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionHeaderText}>{title}</Text>
//           <Ionicons name={isOpen ? 'caret-up' : 'caret-down'} size={18} color="black" style={{ marginLeft: 5, marginTop: 10 }} />
//         </View>
//       </TouchableOpacity>
//       {isOpen && (
//         <View>
//           <View style={styles.row}>
//             <Text style={[styles.label, { color: color }]}>{label}</Text>
//             <Text style={styles.detail}>{detail}</Text>
//           </View>
//           {children} 
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 20,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   sectionHeaderText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: 10,
//   },
//   label: {
//     color: '#023B5E',
//     fontSize: 14,
//     textAlign: 'left',
//   },
//   detail: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'right',
//   },
// });

// export default AccordionDataRow;


//............................................

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
 
// const DataRow = ({ label, detail, color}) => {
//   return (
//     <View>
//     <View style={styles.sectionContainer}>
//     <TouchableOpacity onPress={onPress}>
//       <View style={styles.sectionHeader}>
//       <Text style={styles.sectionHeaderText}>{title}</Text>
//         <Ionicons name={isOpen ? 'caret-up' : 'caret-down'} size={18} color="black" style={{ marginLeft: 5, marginTop: 10 }} />
//       </View>
//     </TouchableOpacity>
//     {isOpen && <View>{children}</View>}
//   </View>
//     <View style={styles.row}>
//       <Text style={styles.data}>{label}</Text>
//       <Text style={{ fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'right',color:color}}>{detail}</Text>
//     </View>
//     </View>
//   );
// };
 
// const styles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: 10,
//   },
//   detail: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'right',
//   },
//   data: {
//     color: '#023B5E',
//     fontSize: 14,
//     textAlign: 'left',
//   },
 
// });
 
// export default DataRow;

//.........................
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const AccordionDataRow = ({ title, isOpen, onPress, label, detail, color }) => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={onPress}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionHeaderText}>{title}</Text>
//           <Ionicons name={isOpen ? 'caret-up' : 'caret-down'} size={18} color="black" style={{ marginLeft: 5, marginTop: 10 }} />
//         </View>
//       </TouchableOpacity>
//       {isOpen && (
//         <View style={styles.row}>
//           <Text style={styles.label}>{label}</Text>
//           <Text style={[styles.detail, { color: color }]}>{detail}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 20,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   sectionHeaderText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: 10,
//   },
//   label: {
//     color: '#023B5E',
//     fontSize: 14,
//     textAlign: 'left',
//   },
//   detail: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'right',
//   },
// });

// export default AccordionDataRow;

//....................

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const SectionWithDataRows = ({ title, isOpen, onPress, children, isSection, fields }) => {
//   return (
//     <View style={styles.container}>
//       {isSection && (
//         <TouchableOpacity onPress={onPress}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionHeaderText}>{title}</Text>
//             <Ionicons name={isOpen ? 'caret-up' : 'caret-down'} size={18} color="black" style={{ marginLeft: 5, marginTop: 10 }} />
//           </View>
//         </TouchableOpacity>
//       )}
//       {isOpen && fields && fields.map((field, index) => (
//         <View key={index} style={styles.row}>
//           <Text style={styles.label}>{field.label}</Text>
//           <Text style={styles.data}>{field.detail}</Text>
//         </View>
//       ))}
//       {children}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 20,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   sectionHeaderText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: 10,
//   },
//   label: {
//     color: 'black',
//     fontSize: 14,
//     textAlign: 'left',
//   },
//   data: {
//     color: '#023B5E',
//     fontSize: 14,
//     textAlign: 'right',
//     fontWeight: 'bold',
//   },
// });

// export default SectionWithDataRows;


// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const SectionWithDataRows = ({ title, isOpen, onPress, fields, leadData, leadId }) => {
//   const renderDataRows = () => {
//     if (!leadData || leadData.length === 0) return null; // Handle case where leadData is empty or undefined

//     const lead = leadData.find((lead) => lead.number === leadId);
//     if (!lead) return null;

//     return fields.map((row, index) => (
//       <View style={styles.row} key={index}>
//         <Text style={styles.label}>{row.label}</Text>
//         <Text style={styles.detail}>{lead[row.value]}</Text>
//       </View>
//     ));
//   };

//   return (
//     <View style={styles.sectionContainer}>
//       <TouchableOpacity onPress={onPress}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionHeaderText}>{title}</Text>
//           <Ionicons name={isOpen ? 'caret-up' : 'caret-down'} size={18} color="black" style={{ marginLeft: 5, marginTop: 10 }} />
//         </View>
//       </TouchableOpacity>
//       {isOpen && renderDataRows()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginBottom: 20,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   sectionHeaderText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: 10,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'left',
//     color: '#023B5E',
//   },
//   detail: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'right',
//   },
// });

// export default SectionWithDataRows;

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
// import { SelectList } from 'react-native-dropdown-select-list';
// import { Ionicons } from '@expo/vector-icons';
 
// const FilterModal = ({ isVisible, onClose, filterOptions, onFilter }) => {
//   const [selectedFilters, setSelectedFilters] = useState({});
 
 
//   const applyFilters = () => {
//     onFilter(selectedFilters);
//   };
 
//   const resetFilters = () => {
//     setSelectedFilters({});
//     onFilter({}, false);
//   };
 
//   return (
//     <Modal animationType="fade" transparent={true} visible={isVisible}>
//       <View style={styles.centeredView}>
//         <View style={styles.modalView}>
//           <View style={styles.headerContainer}>
//             <TouchableOpacity style={styles.resetButtonSmall} onPress={resetFilters}>
//               <Text style={styles.resetText}>Reset</Text>
//             </TouchableOpacity>
//             <Text style={styles.header}>Filter</Text>
//             <TouchableOpacity style={styles.closeButton} onPress={onClose}>
//               <Ionicons name="caret-back" size={24} color="black" />
//               </TouchableOpacity>
//               </View>
//           {filterOptions.map((option, index) => (
//             <View key={index} style={styles.filter}>
//               <View style={styles.titleContainer}>
//                 <Text style={styles.labelText}>{option.title}</Text>
//               </View>
//               <View style={styles.selectListContainer}>
//                 <SelectList
//                   boxStyles={styles.dropdown}
//                   setSelected={(label) =>
//                     setSelectedFilters((prevFilters) => ({
//                       ...prevFilters,
//                       [option.key]: label,
//                     }))
//                   }
//                   data={option.dropdownData.map((item) => ({ value: item, label: item }))}
//                 />
//               </View>
//             </View>
//           ))}
//           <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
//             <Text>Apply Filters</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Modal>
//   );
// };
 
// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalView: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 20,
//     elevation: 5,
//     width: '90%',
//     height: '70%',
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   labelText: {
//     color: '#023B5E',
//     fontWeight: 'bold',
//   },
//   dropdown: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 12,
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//     fontSize: 16,
//   },
//   filter: {
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   titleContainer: {},
//   selectListContainer: {},
//   applyButton: {
//     backgroundColor: '#ccc',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   resetButtonSmall: {
//     padding: 5,
//     borderRadius: 5,
//     alignItems: 'center',
//     backgroundColor: '#ccc',
//   },
//   resetText: {
//     fontSize: 12,
//   },
//   closeButton: {},
// });
 
// export default FilterModal;



import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Ionicons } from '@expo/vector-icons';
 
const FilterModal = ({ isVisible, onClose, filterOptions, onFilter, leadData, dataList, flag }) => {
  const [selectedFilters, setSelectedFilters] = useState({});
 
  const resetFilters = () => {
    setSelectedFilters({});
    onFilter({}, false);
  };
 
  const applyFilters = () => {
    const filteredData = dataList.filter((item) => {
      const genderMatch = !selectedFilters.gender || item.gender === selectedFilters.gender;
      const createdDateMatch = !selectedFilters.createdDate || isDateMatch(selectedFilters.createdDate, new Date(item.sys_created_on));
      // Pass 'item' to isValueMatch function
      console.log("selected filters", selectedFilters)
     
      switch (flag) {
        case 'leadlist':
          const qualificationMatch = !selectedFilters.qualification || item.qualification === selectedFilters.qualification;
          const statusMatch=!selectedFilters.leadstatus||item.leadstatus===selectedFilters.leadstatus;
          return genderMatch && qualificationMatch  && statusMatch;
        case 'contactlist':
          return genderMatch && createdDateMatch;
        case 'opplist':
          const valueMatch = isValueMatch(selectedFilters.oppValue, item.opportunity_value);
          return createdDateMatch && valueMatch;
        case 'accountlist':
          const accountMatch = !selectedFilters.account_type || item.account_type === selectedFilters.account_type;
          return createdDateMatch && accountMatch;
        default:
          return genderMatch && createdDateMatch;
      }
    });
    onFilter(selectedFilters, filteredData);
    return filteredData;
  };
  
 
  // const isDateMatch = (selectedDate, itemDate) => {
  //   switch (selectedDate) {
  //     case 'Today':
  //       return isToday(itemDate);
  //     case 'Yesterday':
  //       return isYesterday(itemDate);
  //     case 'This Week':
  //       return isThisWeek(itemDate);
  //     case 'This Month':
  //       return isThisMonth(itemDate);
  //     default:
  //       return false;
  //   }
  // };
 
  // const isToday = (date) => {
  //   const today = new Date();
  //   return date.toDateString() === today.toDateString();
  // };
 
  // const isYesterday = (date) => {
  //   const yesterday = new Date();
  //   yesterday.setDate(yesterday.getDate() - 1);
  //   return date.toDateString() === yesterday.toDateString();
  // };
 
  // const isThisWeek = (date) => {
  //   const today = new Date();
  //   const thisWeekStart = new Date(today.setDate(today.getDate() - today.getDay()));
  //   const thisWeekEnd = new Date(thisWeekStart);
  //   thisWeekEnd.setDate(thisWeekStart.getDate() + 6);
  //   return date >= thisWeekStart && date <= thisWeekEnd;
  // };
 
  // const isThisMonth = (date) => {
  //   const today = new Date();
  //   const thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  //   const thisMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  //   return date >= thisMonthStart && date <= thisMonthEnd;
  // };
 
  const isDateMatch = (selectedDate, itemDate) => {
    const today = new Date();
    switch (selectedDate) {
      case 'Today':
        return itemDate.toDateString() === today.toDateString();
      case 'Yesterday':
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        return itemDate.toDateString() === yesterday.toDateString();
      case 'This Week':
        const thisWeekStart = new Date(today.setDate(today.getDate() - today.getDay()));
        const thisWeekEnd = new Date(thisWeekStart);
        thisWeekEnd.setDate(thisWeekStart.getDate() + 6);
        return itemDate >= thisWeekStart && itemDate <= thisWeekEnd;
      case 'This Month':
        const thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
        const thisMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        return itemDate >= thisMonthStart && itemDate <= thisMonthEnd;
      default:
        return false;
    }
  };

  const isValueMatch = (selectedValue, oppValue) => {

    switch (selectedValue) {
      case '<60K':
        return oppValue > 600000;
      case '>60K':
        return oppValue < 600000;
      default:
        return false;
    }
  };
  
 
 
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.resetButtonSmall} onPress={resetFilters}>
              <Text style={styles.resetText}>Reset</Text>
            </TouchableOpacity>
            <Text style={styles.header}>Filter</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Ionicons name="caret-back" size={24} color="black" />
            </TouchableOpacity>
          </View>
          {filterOptions.map((option, index) => (
            <View key={index} style={styles.filter}>
              <View style={styles.titleContainer}>
                <Text style={styles.labelText}>{option.title}</Text>
              </View>
              <View style={styles.selectListContainer}>
                <SelectList
                  boxStyles={styles.dropdown}
                  setSelected={(label) =>
                    setSelectedFilters((prevFilters) => ({
                      ...prevFilters,
                      [option.key]: label,
                    }))
                  }
                  data={option.dropdownData.map((item) => ({ value: item, label: item }))}
                />
              </View>
            </View>
          ))}
          <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
            <Text>Apply Filters</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
 
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    width: '90%',
    height: '70%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  labelText: {
    color: '#023B5E',
    fontWeight: 'bold',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  filter: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  titleContainer: {},
  selectListContainer: {},
  applyButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  resetButtonSmall: {
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  resetText: {
    fontSize: 12,
  },
  closeButton: {},
});

 
export default FilterModal;
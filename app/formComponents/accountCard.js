// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Button,
//   Image,
//   ScrollView,
// } from "react-native";
// import { router } from "expo-router";

// import { FontAwesome } from "@expo/vector-icons";
// import useIdStore from "../leadStore";
// import { Ionicons } from "@expo/vector-icons";
// import Colors from "@/constants/Colors";
// import { Linking } from "react-native";
// // Import the avatar image
// import { avatarPic } from '../../assets/images'
// import { Company } from "../../assets/images";

// const AccountCard = ({ firstName, lastName, accountName, accountNumber, phone, email, sys_id, accountType }) => {
//   const [showSecondImage, setShowSecondImage] = useState(false);
//   const [selectedStar, setSelectedStar] = useState(false);
//   const { sysid, setSysId } = useIdStore();
//   const [showDropdown, setShowDropdown] = useState(false);

//   const goToEditLead = () => {
//     setLeadId(Id);
//     router.navigate("formComponents/editLead");

//     closeDropdown();
//   };

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const closeDropdown = () => {
//     setShowDropdown(false);
//   };

//   const handleNavigateToLeadDetails = () => {
//     router.navigate(`/formComponents/accountDetailPage`);
//     setSysId(sys_id)
//   };

//   const handleChangeStatus = () => {
//     router.navigate("/formComponents/changeStatus");
//     setLeadId(number);

//     closeDropdown();
//   };

//   const handleConvertLead = () => {
//     closeDropdown();
//   };

//   const handleReassign = () => {
//     closeDropdown();
//   };
//   const handleEmail = () => {
 
//     Linking.openURL(`mailto:${email}`);
//   };
//   const handleCall = () => {
   
//     Linking.openURL(`tel:${phone}`);
//   };

//   return (
//     <TouchableOpacity onPress={handleNavigateToLeadDetails}>
//       <View style={{ flex: 1 }}>
//         <View style={styles.item}>
         
//             <View style={styles.avatar}>
              
//               {accountType == 'person' ? (
//                      <Image
//                          source={avatarPic}
//                          style={{ width: 40, height: 40, borderRadius: 20, marginBottom: 10 }}
//                      />
//                  ) : (
//                      <Image
//                          source={Company}
//                          style={{ width: 40, height: 40, borderRadius: 20, marginBottom: 10 }}
//                      />
//                  )}
//        </View>
            
//             {/* <Image source={avatarPic} style={styles.avatar} /> */}
//           </View>
//           <View style={styles.textContainer}>
//             <Text style={styles.title}>{accountName}</Text>
//             <Text style={styles.subtitle}>{`${firstName} ${lastName}`}</Text>
//             <Text style={styles.subtitle}>{accountNumber}</Text>
//             <View style={styles.badgeBox}></View>
//           </View>

//           <View style={styles.actionsContainer}>
//               <View style={styles.iconContainer}>
//                         <TouchableOpacity onPress={handleCall} style={styles.actionIcon}>
//                             <Ionicons name="call" size={24} color="black" />
//                         </TouchableOpacity>
//                         <TouchableOpacity onPress={handleEmail} style={styles.actionIcon}>
//                             <Ionicons name="mail" size={24} color="black" />
//                         </TouchableOpacity>
//                     </View>
//                   {/* <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownIcon}>
//                       <Ionicons name="ellipsis-vertical" size={24} color="black" />
//                   </TouchableOpacity> */}
//               </View>

//           {/* <View style={styles.actionsContainer}>
//             <TouchableOpacity
//               onPress={toggleDropdown}
//               style={styles.dropdownIcon}
//             >
//               <Ionicons name="ellipsis-vertical" size={24} color="black" />
//             </TouchableOpacity>
//           </View> */}
//         </View>
//         {/* {showDropdown && (
//           <View style={styles.dropdownContainer}>
//             <ScrollView style={styles.dropdownScrollView}>
//               <View style={styles.dropdownMenu}>
//                 <TouchableOpacity onPress={handleConvertLead}>
//                   <Text style={styles.dropdownMenuItem}>Convert Lead</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={handleReassign}>
//                   <Text style={styles.dropdownMenuItem}>Reassign</Text>
//                 </TouchableOpacity>
//               </View>
//             </ScrollView>
//           </View>
//         )} */}
     
//     </TouchableOpacity>
//   );
// };
// const styles = {
//   item: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     backgroundColor: "white",
//     padding: 20,
//     marginVertical: 1,
//     marginHorizontal: 16,
//     borderRadius: 8,
//     elevation: 2,
//     shadowColor: "#000002",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   badgeBox: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 6,
//   },
//   badgeSecond: {
//     marginLeft: 20,
//   },
//   textContainer: {
//     flex: 1,
//     marginRight: 10,
//   },
//   title: {
//     fontSize: 18,
//     marginBottom: 2,
//     color: "#000000",
//   },
//   subtitle: {
//     fontSize: 14,
//     marginBottom: 3,
//     color: "#999999",
//   },
//   avatarContainer: {
//     marginRight: 10,
//   },
//   image: {
//     height: 60,
//     width: 30,
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//   },
//   badgeContainer: {
//     flexDirection: "column",
//     alignItems: "center",
//     marginTop: 20,
//   },
//   badge: {
//     marginBottom: 1,
//     marginRight: 150,
//     width: 80,
//     flexDirection: "row",
//   },
//   smallButton: {
//     padding: 5,
//   },
//   smallButton: {
//     padding: 3,
//     backgroundColor: "lightgray",
//     borderRadius: 2,
//   },
//   actionsContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   dropdownIcon: {
//     marginLeft: 10,
//   },
//   dropdownContainer: {
//     position: "absolute",
//     top: -10, // Adjust this value to move the dropdown above the card
//     right: 20,
//     width: "auto",
//     zIndex: 999,
//   },
//   dropdownScrollView: {
//     maxHeight: 200, // Set max height for scroll view
//   },
//   dropdownMenu: {
//     backgroundColor: "white",
//     borderRadius: 8,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     elevation: 3,
//     zIndex: 999,
//   },
//   dropdownMenuItem: {
//     fontSize: 16,
//     paddingVertical: 8,
//   },
//   iconContainer: {
//     flexDirection: 'row',
//  gap:10
// },

//   //   filterIcon: {
//   //     marginLeft: 10,
//   //   },
// };
// export default AccountCard;


import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import useIdStore from "../leadStore";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { Linking } from "react-native";
import { avatarPic } from '../../assets/images'
import { Company } from "../../assets/images";
import { femaleAvatar } from "../../assets/images";
import { set } from "react-hook-form";
import { companyIconn } from "../../assets/images";

const AccountCard = ({ firstName, lastName, accountName, accountNumber, phone, email, sys_id, accountType, gender }) => {
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [selectedStar, setSelectedStar] = useState(false);
  const { sysid, setSysId } = useIdStore();
  const{flag, setFlag}=useIdStore();
  const [showDropdown, setShowDropdown] = useState(false);
  const{account_type, setAccountType}=useIdStore();
 
  const goToEditLead = () => {  
    setLeadId(Id);
    router.navigate("formComponents/editLead");
    closeDropdown();
  };
 
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
 
  const closeDropdown = () => {
    setShowDropdown(false);
  };
 
  const handleNavigateToAccountDetails = () => {
    router.navigate(`/renderDetails/renderDetailPage`);
    setFlag('account')
    setAccountType(accountType);
    setSysId(sys_id)
  };
 
  const handleChangeStatus = () => {
    router.navigate("/formComponents/changeStatus");
    setLeadId(number);
    closeDropdown();
  };  
 
  const handleConvertLead = () => {
    closeDropdown();
  };  
 
  const handleReassign = () => {
    closeDropdown();
  };
 
  const handleEmail = () => {
    Linking.openURL(`mailto:${email}`);
  };
 
  const handleCall = () => {
    Linking.openURL(`tel:${phone}`);
  };
 
  return (
    <TouchableOpacity onPress={handleNavigateToAccountDetails}>
      <View style={styles.item}>
      <View style={styles.avatar}>
  {accountType === 'person' ? (
    // gender === 'male' ? (
      <Image
        source={companyIconn}
        style={{ width: 40, height: 40, borderRadius: 20 }}
      />
    // ) : (
    //   <Image
    //     source={femaleAvatar}
    //     style={{ width: 40, height: 40, borderRadius: 20 }}
    //   />
    // )
  ) : (
    <Image
      source={Company}
      style={{ width: 40, height: 40, borderRadius: 20 }}
    />
  )}
</View>
 
        <View style={styles.textContainer}>
          <Text style={styles.title}>{accountName}</Text>
          <Text style={styles.subtitle}>{`${firstName} ${lastName}`}</Text>
          <Text style={styles.subtitle}>{accountNumber}</Text>
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity onPress={handleCall} style={styles.actionIcon}>
            <Ionicons name="call" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEmail} style={styles.actionIcon}>
            <Ionicons name="mail" size={24} color="black" />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownIcon}>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </TouchableOpacity> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};
 
const styles = {
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 20,
    marginVertical: 1,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000002",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 2,
    color: "#000000",
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 3,
    color: "#999999",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionIcon: {
    marginLeft: 10,
  },
};
 
export default AccountCard;


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
// import { avatarPic } from '../../assets/images'
// import { Company } from "../../assets/images";
// import { femaleAvatar } from "../../assets/images";
// import { set } from "react-hook-form";
// import { companyIconn } from "../../assets/images";

// const AccountCard = ({ firstName, lastName, accountName, accountNumber, phone, email, sys_id, accountType, gender, title }) => {
//   const [showSecondImage, setShowSecondImage] = useState(false);
//   const [selectedStar, setSelectedStar] = useState(false);
//   const { sysid, setSysId } = useIdStore();
//   const{flag, setFlag}=useIdStore();
//   const [showDropdown, setShowDropdown] = useState(false);
//   const{account_type, setAccountType}=useIdStore();
 
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
 
//   const handleNavigateToAccountDetails = () => {
//     router.navigate(`/renderDetails/renderDetailPage`);
//     setFlag('account')
//     setAccountType(accountType);
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
//     <TouchableOpacity onPress={handleNavigateToAccountDetails}>
//       <View style={styles.item}>
//       <View style={styles.avatar}>
//   {accountType === 'person' ? (
//       <Image
//         source={companyIconn}
//         style={{ width: 40, height: 40, borderRadius: 20 }}
//       />
//   ) : (
//     <Image
//       source={Company}
//       style={{ width: 40, height: 40, borderRadius: 20 }}
//     />
//   )}
// </View>
 
//         <View style={styles.textContainer}>
//           <Text style={styles.title}>{accountName}</Text>
//           <Text style={styles.subtitle}>{`${firstName} ${lastName}`}{title}</Text>
//           <Text style={styles.subtitle}>{accountNumber}</Text>
//           {/* <Text style={styles.subtitle}>{title}</Text> */}
//         </View>
//         <View style={styles.actionsContainer}>
//           <TouchableOpacity onPress={handleCall} style={styles.actionIcon}>
//             <Ionicons name="call" size={24} color="black" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={handleEmail} style={styles.actionIcon}>
//             <Ionicons name="mail" size={24} color="black" />
//           </TouchableOpacity>
//           {/* <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownIcon}>
//             <Ionicons name="ellipsis-vertical" size={24} color="black" />
//           </TouchableOpacity> */}
//         </View>
//       </View>
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
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
    
//   },
//   actionsContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   actionIcon: {
//     marginLeft: 10,
//   },
// };
 
// export default AccountCard;
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import useIdStore from "../leadStore";
import { Company, ContactAvatar } from "../../assets/images";

const AccountCard = ({ firstName, lastName, number, accountName, accountNumber, phone, email, sys_id, accountType, gender, title }) => {
  const { setSysId, setFlag, setAccountType } = useIdStore();

  const handleNavigateToAccountDetails = () => {
    router.navigate(`/renderDetails/renderDetailPage`);
    setFlag('account');
    setAccountType(accountType);
    setSysId(sys_id);
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
        <View style={styles.avatarContainer}>
          {accountType === 'person' ? (
            <Image
              source={ContactAvatar}
              style={styles.avatar}
            />
          ) : (
            <Image
              source={Company}
              style={styles.avatar}
            />
          )}
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{accountName}</Text>
          <Text style={styles.subtitle}>{`${firstName} ${lastName}`}{title}</Text>
          {/* <Text style={styles.subtitle}>{accountNumber}</Text> */}
          <Text style={styles.subtitle}>{number}</Text>
        </View>
        
        <View style={styles.actionsContainer}>
          <TouchableOpacity onPress={handleCall} style={styles.actionIcon}>
            <Ionicons name="call" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEmail} style={styles.actionIcon}>
            <Ionicons name="mail" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  avatarContainer: {
    marginRight: 10, 
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionIcon: {
    marginLeft: 10,
  },
});

export default AccountCard;

import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./DrawerScreens/dashboard";
import LeadList from "./DrawerScreens/leadList";
import { Lead } from "../assets/images";
import TaskCard from "./DrawerScreens/taskList";
import { View } from "@/components/Themed";

function TabMenu(){
    const Tab =createBottomTabNavigator();
    const screenOptions = {
        tabBarShowLabel:false,
        headerShown:false,
        tabBarStyle:{
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 60,
          background: "#fff"
        }
      }

      return(
        <View>
        <NavigationContainer>
                <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen 
          name="Home" 
          component={Dashboard} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Entypo name="home" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fonSize: 12, color: "#16247d"}}>HOME</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Leads" 
          component={LeadList} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <Entypo name="wallet" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fonSize: 12, color: "#16247d"}}>WALLET</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Tasks" 
          component={TaskCard} 
           options={{
            tabBarIcon: ({focused})=>{
              return (
                <View
                 style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#16247d",
                  width: Platform.OS == "ios" ? 50 : 60,
                  height: Platform.OS == "ios" ? 50 : 60,
                  top: Platform.OS == "ios" ? -10 : -20,
                  borderRadius: Platform.OS == "ios" ? 25 : 30
                 }}
                >
                  <FontAwesome name="exchange" size={24} color="#fff" />
                </View>
              )
            }
           }}
          />
          {/* <Tab.Screen
           name="Menu" 
           component={Prices}
           options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <MaterialIcons name="stacked-line-chart" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fonSize: 12, color: "#16247d"}}>PRICES</Text>
            </View>
              )
            }
          }}
           />
          <Tab.Screen 
          name="Settings" 
          component={Settings} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <Ionicons name="settings" size={24}  color={focused ? "#16247d": "#111"} />
                  <Text style={{fonSize: 12, color: "#16247d"}}>SETTINGS</Text>
            </View>
              )
            }
          }}
        /> */}
       </Tab.Navigator> 
        </NavigationContainer>
        </View>
      )
}

export default TabMenu;
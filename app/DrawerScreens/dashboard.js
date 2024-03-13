import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SmallCard from '../../dashboardComponents/smallCard';
import Scrollcard from '../../dashboardComponents/scrollCard';
import Bigcard from '../../dashboardComponents/bigCard';
import ChartLine from '../../dashboardComponents/lineChart';
 
const total_leads = 0;
const total_calls = 1;
const total_activites = 2;
const sales = 3;
 
const App = () => {
  const [selectedCard, setSelectedCard] = useState(total_leads);
 
  const handleCardPress = (cardIndex) => {
    setSelectedCard(cardIndex === selectedCard ? null : cardIndex);
  };
 
  return (
    <View style={styles.container}>
 
      <ScrollView style={styles.scrollContainer} showsHorizontalScrollIndicator={false}>
        <View style={styles.smallCardGroupContainer}>
          <View style={styles.row1}>
             <SmallCard label1={'Total Leads'} label2={'5'} isSelected={selectedCard === total_leads} onPress={() => handleCardPress(total_leads)} />
              <SmallCard label1={'Total Calls'} label2={'2'} isSelected={selectedCard === total_calls} onPress={() => handleCardPress(total_calls)} />
          </View>
          <View style={styles.row2}>
              <SmallCard label1={'Total Activities'} label2={'10'} isSelected={selectedCard === total_activites} onPress={() => handleCardPress(total_activites)} />
              <SmallCard label1={'Sales'} label2={'5M'} isSelected={selectedCard === sales} onPress={() => handleCardPress(sales)} />
          </View>
        </View>
 
        {selectedCard !== null && (
          <View>
            {selectedCard === total_leads && (
              <View>
                <ChartLine/>
                <Bigcard label1={'Lead by source'} label2={'Lead by Label'}/>
              </View>
            )}
 
            {selectedCard === total_calls && (
              <View>
                <ScrollView horizontal style={styles.cardScrollContainer} showsHorizontalScrollIndicator={false}>
                  <View style={styles.cardContainer}>
                    <Scrollcard label={'All'} total={'2 calls'}/>
                    <Scrollcard label={'Incoming'} total={'0 calls'}/>
                    <Scrollcard label={'Outgoing'} total={'2 calls'}/>
                    <Scrollcard label={'Total Answered'} total={'0 calls'} />
                    <Scrollcard label={'Total Talktime'} total={'00:00 min:sec'}/>
                    <Scrollcard label={'Avg. Talktime'} total={'00:00 min:sec'}/>
                  </View>
                </ScrollView>
                <ChartLine/>
                <Bigcard label1={'Lead by source'} label2={'Lead by Label'}/>
              </View>
            )}
 
            {selectedCard === total_activites && (
               <View>
                <ScrollView horizontal style={styles.cardScrollContainer} showsHorizontalScrollIndicator={false}>
                  <View style={styles.cardContainer}>
                    <Scrollcard label={'Call'} total={'3'}/>
                    <Scrollcard label={'Email'} total={'5'}/>
                    <Scrollcard label={'Message'} total={'5'}/>
                    <Scrollcard label={'Meeting'} total={'1'}/>
                    <Scrollcard label={'CheckIns'} total={'2'} />
                    <Scrollcard label={'Share'} total={'0'}/>
                    <Scrollcard label={'Status Update'} total={'0'}/>
                    <Scrollcard label={'Task Assigned'} total={'0'}/>
                    <Scrollcard label={'Task Completed'} total={'0'}/>
                    <Scrollcard label={'Task Deleted'} total={'0'}/>
                    <Scrollcard label={'Task Updated'} total={'0'}/>
                    <Scrollcard label={'Lead Assign'} total={'0'}/>
                    <Scrollcard label={'Lead Deleted'} total={'0'}/>
                  </View>
                </ScrollView>
                <ChartLine/>
                <Bigcard label1={'Lead by source'} label2={'Lead by Label'}/>
               </View>
            )}
 
            {selectedCard === sales && (
              <View>
                <View style={styles.totalSalesCard}>
                  <Text style={styles.totalSalesText}>Total Sales</Text>
                  <Text style={styles.totalSalesText} >5,000,000 INR</Text>
                </View>
                <Bigcard label1={'Lead by source'} label2={'Lead by Label'}/>
               </View>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6DBDF',
   
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flex: 1,
    paddingTop: 10,
  },
  smallCardGroupContainer: {
    justifyContent: 'space-around',
    // backgroundColor: '#ADD8E6',
    backgroundColor: '#d3e5f5',
    // backgroundColor:'black',
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 10,
    paddingVertical: 10,
    height: 280,
    width: 350,
    marginBottom: 30,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
 
  totalSalesCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#000',
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    marginBottom: 20,
  },
  totalSalesText: {
    fontSize: 18,
    textAlign: 'center',
  },
  cardScrollContainer: {
    height: 100,
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
  },
});
 
export default App;
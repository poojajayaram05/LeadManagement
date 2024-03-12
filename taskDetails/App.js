import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TaskDetailsPage from './src/component/TaskDetailsPage';


export default function App() {
  return (
    <View style={styles.container}>
      <TaskDetailsPage/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start', 
    marginTop:50
  },
});

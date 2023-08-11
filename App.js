import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import {View, StyleSheet} from "react-native";
import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';
import PostsScreen from './src/screens/PostsScreen';



export default function App() {
  const [fontsLoaded] = useFonts({
    'RobotoMedium': require('./src/assets/fonts/roboto-v30-cyrillic_latin-500.ttf'),
    'RobotoRegular': require('./src/assets/fonts/roboto-v30-cyrillic_latin-regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    
    <>
    <View style={styles.container}>
        <RegistrationScreen/>
      {/* <LoginScreen/> */}
        {/* <PostsScreen/> */}
        <StatusBar style="auto" />
    </View>
    </>
    
  
  );
}


const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  },
})


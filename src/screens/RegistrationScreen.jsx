import React from "react";
import { ImageBackground, View, TouchableWithoutFeedback, Keyboard, StyleSheet} from "react-native";
import BgImage from '../assets/images/PhotoBG.jpg';
import CommonTitle from '../components/CommonTitle';
import RegistrationForm  from "../components/RegistrationForm";
import UserAvatar from "../components/UserAvatar";

const RegistrationScreen = ()=>{
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ImageBackground source={BgImage} resizeMethod='resize' resizeMode='cover' style={styles.image} >
                
                    <View style={styles.formWrap}>
                        <UserAvatar/>
                        <CommonTitle text='Реєстрація'/>
                        <RegistrationForm/>

                    </View>
                
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
        );

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },

    image: {
      flex: 1,
      justifyContent: "flex-end",
      borderWidth: 1,
      
    },
 
    formWrap: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 92,
        paddingHorizontal: 16,
   
    }
   
  });
  
export default RegistrationScreen;
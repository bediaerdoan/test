import { View, Text, Image, StyleSheet, TouchableOpacity, err} from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { Colors } from '@/constants/Colors'
import {useWarmUpBrowser} from "./../hooks/useWarmUpBrowser";
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } =useOAuth({ strategy: "oauth_google"});

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, SignIn, SignUp, setActive} =
      await startOAuthFlow();

      if (createdSessionId) {
        setActive({session: createdSessionId});
      } else {
        //blablabla
      }
    } catch {err} {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View>
        <View style={{
            display:'flex',
            alignItems:'center',
            marginTop:100,
      }}>
      <Image source={require('./../assets/images/bo_wix_com_user-manager_users_byGuid_378b07fd-d52a-49e9-a802-db6d5b2d70c7.webp')} 
          style={{
              width:250,
              height:450,
              borderRadius:20,
              borderWidth:6,
              borderColor:'#000',
      }}
      />
      </View>

      <View style={styles.subContainer}>
        <Text style={{
          fontSize:30,
          fontFamily:'outfit-bold',
          textAlign: 'center',
        }}>Your Ultimate 
          <Text style={{
            color: Colors.PRIMARY,
            fontSize: 40
          }}>Communatiy Business Directory</Text> App</Text>
          <Text style={styles.pContainer}>Find Your Favorite bussiness near you and post your own business to your community</Text>
          <TouchableOpacity style={styles.btn}
          onPress={onPress}
          >
            <Text style={{
              textAlign:'center',
              color:'#fff',
              fontFamily:'outfit',
            }}>Let's Get Started</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  subContainer:{
    backgraundColor: '#fff',
    padding:20,
    marginTop:-20,
  },
  pContainer:{
    fontSize:15,
    fontFamily:'otufit',
    textAlign:'center',
    marginVertical:15,
    color:Colors.GRAY
  },
  btn:{
    backgroundColor:Colors.PRIMARY,
    padding:16,
    borderRadius:99,
    marginTop:20,
  }
})
//49.16da kaldım

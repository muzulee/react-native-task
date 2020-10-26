import React from 'react'
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native'

export default class HomeScreen extends React.Component{

    render(){
        return (
            <View style={styles.bigContainer}>
              <Text
                style={styles.bigTextStyle}>
                ONLINE FURNITURE STORE
              </Text>
            <View
                  style={[
                    { justifyContent: "flex-start" },
                    styles.container
                  ]}
            >
              <Image
                source={require('../res/sofa.png')}
                style={{ width: '70%', resizeMode: 'contain', margin: 10 }}
              />
            </View>
            <View style={styles.container}>
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => this.props.navigation.navigate('login')}
            >
                <Text style={[styles.text, styles.loginBtnText]}>GET STARTED</Text>
            </TouchableOpacity>
              <Text>Don't have an account?</Text>
              <Text
                style={styles.bigTextStyle}
                onPress={() => this.props.navigation.navigate('login')}
              >
                Sign in here
              </Text>
            </View>
            </View>
          )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bigContainer: {
      flex: 1,
      padding: 50,
      backgroundColor: 'orange',
    },
    bigTextStyle: {
      color: '#FFFFFF',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 25,
    },
    loginBtn: {
      backgroundColor: "#fff",
      alignItems: "center",
      borderRadius: 30,
      paddingVertical: 15,
      paddingHorizontal: 50,
      marginBottom: 30,
    },
    loginBtnText: {
      color: "#48114b",
      fontSize: 23,
      fontWeight: "bold",
    }
  });
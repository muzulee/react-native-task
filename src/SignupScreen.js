import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default class SignupScreen extends React.Component{

    static navigationOptions = (props) => ({
        title:'Sign up'
    })

    constructor(props) {
        super(props);
        this.state = {
          //****** FormInput *******/
          input: {
            username: null,
            password: null,
          },
        };
    }

    render() {
        return (
          <View>
            <View style={{ margin: 30 }}>
              <Text style={[{ fontSize: 14 }, styles.text]}>Username</Text>
              <TextInput
                keyboardType="default"
                style={styles.input}
                onChangeTextValue={(text) =>
                  this.setState({
                    input: {
                      ...this.state.input,
                      username: text,
                    },
                  })
                }
                value={this.state.input.username}
              />
            </View>
            <View style={{ margin: 30 }}>
              <Text style={[{ fontSize: 14 }, styles.text]}>Password</Text>
              <TextInput
                secureTextEntry
                style={styles.input}
                onChangeTextValue={(text) =>
                  this.setState({
                    input: {
                      ...this.state.input,
                      password: text.replace(/[^0-9]/g, ""),
                    },
                  })
                }
                value={this.state.input.password}
              />
            </View>
            <View
              style={[
                {
                  alignItems: "center",
                  marginTop: 30,
                },
              ]}
            >
              <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('userprofile')}>
                <Text style={[styles.text, styles.btnText]}>SIGNUP</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }

}

const styles = StyleSheet.create({
    text: {
      fontFamily: "Roboto",
      color: "#444",
      fontWeight: "bold",
    },
    input: {
      borderColor: "gray",
      borderBottomWidth: 1,
    },
    btn: {
      backgroundColor: "#DD2C00",
      alignItems: "center",
      borderRadius: 30,
      paddingVertical: 15,
      paddingHorizontal: 50,
      marginBottom: 40,
    },
    btnText: {
      color: "#fff",
      fontSize: 23,
      fontWeight: "bold",
    },
  });
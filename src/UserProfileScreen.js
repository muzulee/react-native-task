import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  Content,
  Header,
  ListItem,
  Text,
  Left,
  Body,
  Right,
  Badge,
} from "native-base";
import dataMenu from "../data/menu.json";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class UserProfileScreen extends React.Component{

  static navigationOptions = (props) => ({
    title:'Profile',
    showIcon: true,
  })

  constructor(props) {
    super(props);
    this.state = {
      // Input
      
    };
}

  render() {
    return (
      <ScrollView>
        <Header searchBar rounded style={{ backgroundColor: "#fa9d24" }} />
        <View style={styles.container}>
          <Image
            source={require("../res/zul.jpg")}
            style={styles.avatar}
          />

          <Text style={styles.text}>Zulfadhlee</Text>
          <View style={styles.loca}>
            <FontAwesome
              name="map-marker"
              color={"red"}
              size={20}
              style={{ marginRight: 8 }}
            />
            <Text style={styles.text}>Johor</Text>
          </View>
        </View>
        <View style={{ padding: 20 }}>
          <FlatList
            data={dataMenu}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              this.renderJobItem(item, this.props.navigation)
            }
            keyExtractor={(data, index) => index.toString()}
          />
        </View>
      </ScrollView>
    );
  }

  renderJobItem(item, navigation) {
    console.log(item);
    let badgeColor;

    if (item.badge == 0) {
      badgeColor = "white";
    } else {
      badgeColor = "black";
    }
    return (
      <Content>
        <ListItem icon>
          <Left>
            <MaterialIcons color={"grey"} size={20} name={item.icon} />
          </Left>
          <Body>
            <TouchableOpacity
              onPress={() => navigation.navigate(item.route, { item })}
            >
              <Text>{item.text}</Text>
            </TouchableOpacity>
          </Body>
          <Right>
            <Badge style={{ backgroundColor: badgeColor }}>
              <Text>{item.badge}</Text>
            </Badge>
          </Right>
        </ListItem>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#555",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  loca: {
    flex: 1,
    flexDirection: "row",
    padding: 6,
    backgroundColor: "#fff",
  },
});

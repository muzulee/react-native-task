import React, { Component } from "react";
import { FlatList, View, StyleSheet, Image } from "react-native";
import {
  Content,
  Header,
  Item,
  Input,
  ListItem,
  Text,
  Left,
  Body,
  Right,
  Thumbnail,
  Button,
  Badge,
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";

import dataProduct from "../data/product.json";

class ProductScreen extends Component {

  static navigationOptions = (props) => ({
    title:'Product',
    showIcon: true,
  })

  constructor(props) {
    super(props);
    this.state = {
      //****** data *******/
      data: [],
      value: null,
    };

    this.arrayholder = [];
  }
  componentDidMount() {
    this.setState({
      data: dataProduct,
    });
    this.arrayholder = dataProduct;
    console.log(this.state.data);
  }
  increaseCounter = (index) => {
    let stateAdd = [...this.state.data];
    stateAdd[index].num += 1;
    this.setState({ data: stateAdd });
  };
  decreaseCounter = (index) => {
    let stateMinus = [...this.state.data];
    stateMinus[index].num -= 1;
    this.setState({ data: stateMinus });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => this.ListItem(item, index)}
          keyExtractor={(data, index) => index.toString()}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }

  renderHeader = () => {
    return (
      <Header searchBar rounded style={{ backgroundColor: "#fa9d24" }}>
        <Item style={{ borderRadius: 30 }}>
          <MaterialIcons
            color="#555"
            size={20}
            name="search"
            style={{ marginHorizontal: 10 }}
          />
          <Input
            placeholder="Search"
            onChangeText={(text) => this.searchFilterFunction(text)}
            value={this.state.value}
          />
        </Item>
      </Header>
    );
  };
  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter((item) => {
      const itemData = `${item.text.toUpperCase()} `;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  ListItem(item, index) {
    return (
      <Content>
        <ListItem Thumbnail style={styles.listBox}>
          <Left
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Thumbnail square style={styles.img} source={{ uri: item.img }} />
          </Left>
          <Body
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text>{item.text}</Text>
            <View
              style={{
                flexDirection: "row",
                width: 100,
                justifyContent: "space-around",
              }}
            >
              <Button transparent onPress={() => this.decreaseCounter(index)}>
                <Entypo color="#555" size={20} name="minus" />
              </Button>
              <Badge style={styles.badge}>
                <Text style={{ color: "#555" }}>{item.num}</Text>
              </Badge>
              <Button transparent onPress={() => this.increaseCounter(index)}>
                <MaterialIcons color="#555" size={20} name="add" />
              </Button>
            </View>
          </Body>
          <Right
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text style={styles.strikeText}>{item.cut_price}</Text>
            <Text>{item.price}</Text>
          </Right>
        </ListItem>
      </Content>
    );
  }
}
export default ProductScreen;

const styles = StyleSheet.create({
  listBox: {
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
    margin: 10,
  },
  badge: {
    backgroundColor: "#fff",
    borderWidth: 1,
    marginTop: 8,
  },
  img: {
    resizeMode: "contain",
  },
  strikeText: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
});

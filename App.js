import React from 'react';
import { StyleSheet, Text, Keyboard, FlatList, TextInput, View } from 'react-native';
import Icon from "@expo/vector-icons/Ionicons";
import * as Animatable from 'react-native-animatable';

const listItems = ['Development', 'Business', 'IT & Software', 'Office Productivity', 'Personal Development', 'Design', 'Marketing', 'LifeStyle', 'Photography', 'Health & Fitness', 'Teacher Training', 'Music']

export default class App extends React.Component {
  state = {
    searchBarFocused: false
  }

  componentDidMount() {
    this.keyboardDidShow = Keyboard.addListener("keyboardDidShow", this.keyboardDidShow)
    this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
    this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
  }

  keyboardDidShow = () => {
    this.setState({ searchBarFocused: true })
  }

  keyboardWillShow = () => {
    this.setState({ searchBarFocused: true })
  }

  keyboardWillHide = () => {
    this.setState({ searchBarFocused: false })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: 80, backgroundColor: 'red',justifyContent: 'center',paddingHorizontal:5}}>
          
          <Animatable.View animation="slideInRight" duration={500} style={{height: 50,backgroundColor: 'white',flexDirection: 'row',padding:5,alignItems:'center'}}>
            <Animatable.View
              animation={
                this.state.searchBarFocused ? "fadeInLeft": "fadeInRight"
              }
              duration={400}
            >
              <Icon name={
                this.state.searchBarFocused ? "md-arrow-back": "ios-search"
              } style={{fontSize:24}} />
            </Animatable.View>
            <TextInput placeholder="Search" style={{fontSize:24,marginLeft:15,flex:1}} />
          </Animatable.View>
          
        </View>

        <FlatList 
          style={{
            backgroundColor: this.state.searchBarFocused ? 'rgba(0,0,0,.3)': 'white'
          }}
          data={listItems}
          renderItem={({item}) => <Text style={{padding:20,fontSize:20}}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

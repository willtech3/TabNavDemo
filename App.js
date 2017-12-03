import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

class ContactsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Contacts",
  };
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', paddingLeft: 10, paddingTop: 50}}>
        <Button onPress={() => this.props.navigation.navigate('Details', {name: "Allison"})} title="Allison"/>
        <Button onPress={() => this.props.navigation.navigate('Details', {name: "Bob"})} title="Bob"/>
        <Button onPress={() => this.props.navigation.navigate('Details', {name: "Cory"})} title="Cory"/>
        <Button onPress={() => this.props.navigation.navigate('Details', {name: "Diane"})} title="Diane"/>
        <Button onPress={() => this.props.navigation.navigate('Details', {name: "Ed"})} title="Ed"/>
        <Button onPress={() => this.props.navigation.navigate('Details', {name: "Frank"})} title="Frank"/>
        <Button onPress={() => this.props.navigation.navigate('Details', {name: "Gina"})} title="Gina"/>
        <Button onPress={() => this.props.navigation.navigate('Details', {name: "Harrisson"})} title="Harrisson"/>
        <Button onPress={() => this.props.navigation.navigate('Details', {name: "Ian"})} title="Ian"/>
        <Button onPress={() => this.props.navigation.navigate('Details', {name: "Janet"})} title="Janet"/>
        <Button onPress={() => this.props.navigation.navigate('Details', {name: "Kyle"})} title="Kyle"/>
        <Button onPress={() => this.props.navigation.navigate('Details', {name: "Lauren"})} title="Lauren"/>
        <Button onPress={() => this.props.navigation.navigate('Details', {name: "Monica"})} title="Monica"/>
      </View>
    );
  }
}

class GalleryScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Gallery",
  };
  render() {
    return (
     <View style={{flex: 1, flexDirection: 'column'}}>
       <View style={{flex: 1, flexDirection: 'row', paddingTop: 50}}>
          <Button onPress={() => this.props.navigation.navigate('Contacts')} title="Contacts" />
          <View style={{width: 100, height: 100, margin: 10, backgroundColor: 'skyblue'}} />
          <View style={{width: 100, height: 100, margin: 10, backgroundColor: 'steelblue'}} />
        </View>
       <View style={{flex: 1, flexDirection: 'row'}}>
         <View style={{width: 100, height: 100, margin: 10, backgroundColor: 'powderblue'}} />
         <View style={{width: 100, height: 100, margin: 10, backgroundColor: 'skyblue'}} />
         <View style={{width: 100, height: 100, margin: 10, backgroundColor: 'steelblue'}} />
       </View>
       <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 100, height: 100, margin: 10, backgroundColor: 'powderblue'}} />
          <View style={{width: 100, height: 100, margin: 10, backgroundColor: 'skyblue'}} />
          <View style={{width: 100, height: 100, margin: 10, backgroundColor: 'steelblue'}} />
       </View>
     </View>
    );
  }
}

class ContactsWrappingScreen extends React.Component {
  render() {
    return (
      <MyStackNavigator />
    );
  }
}

class DetailsScreen extends React.Component {
 static navigationOptions = {
   title: 'Contact Details'
 };
 render() {
   return (
     <View>
       <Text>{this.props.navigation.state.params.name}'s Contact Info</Text>
       <Button onPress={() => this.props.navigation.navigate('Edit')} title="Edit Details"/>
     </View>
   );
 }
}

class EditScreen extends React.Component {
  static navigationOptions = {
    title: 'Edit Contact Details'
  };
  render() {
    return (
      <Text>Edit Details Screen</Text>
    );
  }
}

const MyStackNavigator = StackNavigator({
  Contacts: { screen: ContactsScreen },
  Details:  { screen: DetailsScreen },
  Edit:     { screen: EditScreen },
});

const MyNavigator = TabNavigator({
  Contacts: { screen: ContactsWrappingScreen },
  Gallery:  { screen: GalleryScreen }
});

export default class App extends React.Component {
  render() {
    return <MyNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {View, Text, Button, StyleSheet} from "react-native";


export default class App extends React.Component {
  state ={
    value: 0
  }
  
addValue = () =>
{
  this.setState({value: this.state.value + 1})
  console.log("Value " + (this.state.value + 1))
}


subtrationValue = () =>
  {
    if(this.state.value > 0){
      this.setState({value: this.state.value - 1})
      console.log("Value " + (this.state.value - 1))
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={{fontSize: 60, marginBottom:20}}>{ this.state.value}</Text>
        <StatusBar style= "auto"/>
        <View style={{flexDirection: 'row'}}>
          <Button onPress={this.subtrationValue} title="-1" />
            <Text>  </Text>
          <Button onPress={this.addValue} title="+1" / >

        </View>
      </View>

    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#1B0082',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
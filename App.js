import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default class App extends Component {
  async openDocumentFile(){
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      })
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      )
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err
      }
    }
  }
  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:"center"}}>
        <TouchableOpacity 
        onPress= {()=> this.openDocumentFile()}
        style={{padding: 10, width:10, alignItems:"center", backgroundColor:"d0dbd3"}}>
        <Text> Open Document </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

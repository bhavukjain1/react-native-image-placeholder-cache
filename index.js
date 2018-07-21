import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CacheManager from './CacheManager'

export default class CustomImage extends React.Component {


  state = {
    isLoaded:false,
    path:''
  }

  componentDidMount() {
    this.updateAllData()
  }

  updateAllData = () => {

    const {source} = this.props

    if(!source.uri) {
      this.setState({path:source, isLoaded:true})
      return
    }

    CacheManager.get(source.uri).getPath()
    .then(path => {
        this.setState({path:path, isLoaded:true})
    })
    .catch(err => {
      console.log(err)
    })

  }

  componentDidUpdate(prevProps) {

    if(prevProps.source != this.props.source) {
        this.updateAllData()
    }
  }

  getImageComponent = () => {

    const {source, ...otherProps} = this.props

    if(this.state.isLoaded) {
      if(source.uri) {
        return (
            <Image source={{uri:this.state.path}} {...otherProps}/>
          )
      }else {
        return (
            <Image source={this.props.source} {...otherProps}/>
          )
      }
    }else {
      if(this.props.placeholder) {
        return (
            <Image source={this.props.placeholder} {...otherProps}/>
          )
      }
    }
  }

  render() {

    return (
      <View>
        {this.getImageComponent()}
      </View>
    );
  }
}

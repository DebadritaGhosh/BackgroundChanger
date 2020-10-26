import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      randomBackground: null,
      randomButt: '#9B5CB8',
      randomButtBorder: '#9B5CBF',
    };
  }
  randomBackgroundColorGenerator = () => {
    return (
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')'
    );
  };
  randomButtColorGenerator = () => {
    return (
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')'
    );
  };
  randomButtBorderGenerator = () => {
    return (
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')'
    );
  };

  colorSet = () => {
    this.setState({randomBackground: this.randomBackgroundColorGenerator()});
    this.setState({randomButt: this.randomButtColorGenerator()});
    this.setState({randomButtBorder: this.randomButtBorderGenerator()});
  };

  render() {
    return (
      <View
        style={[
          Styles.container,
          {backgroundColor: this.state.randomBackground},
        ]}>
        <Text style={Styles.simpleText}>{this.state.randomBackground}+)</Text>
        <TouchableOpacity onPress={this.colorSet}>
          <Text
            style={[
              Styles.buttStyle,
              {
                backgroundColor: this.state.randomButt,
                borderColor: this.state.randomButtBorder,
              },
            ]}>
            Click Here
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  simpleText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  buttStyle: {
    color: '#FFF',
    backgroundColor: '#9B5CB8',
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#9B5CBF',
  },
});

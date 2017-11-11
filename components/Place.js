import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  Alert
} from 'react-native';

import axios from 'axios';


export default class Place extends Component<{}> {
 constructor(props){
        super(props);
        this.state = {
            zip: []
        }
    }

    componentDidMount() {
        let zip = this.props.zip;
        axios.get("http://api.apixu.com/v1/current.json?key=f6e5300584f147f5abb172139162905&q=" + zip)
          .then(response => {
            console.log(response.data.current);
            this.setState({
                zip: response.data.current
            })
          })
          .catch(function (error) {
            console.log(error);
          });
}

    render(){
        return(
            <View style={{borderBottomWidth: 3, marginBottom: 10}}>
              <View style={{flex: 1, alignItems: 'center'}}>
                    <Image style={{width: 300, height: 225}} source={this.props.image} />
              </View>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{padding: 10}}>
                    <Text style={styles.title}>{this.props.city}</Text>
                    <Text style={styles.secondaryParagraph}> {this.props.state} </Text>
              </View>
              <View style={[styles.info, styles.tempInfo]}>
                    <Text style={styles.temp}>Current Temp:</Text>
                    <Text style={styles.temp}>{this.state.zip.temp_f} &deg; F </Text>
              </View>
              </View>
            <Text style={styles.title}>
                Why should I visit {this.props.city}?
             </Text>
            <Text style={styles.paragraph}>
                {this.props.description}
            </Text>
            <View>
                <Text style={styles.title}>
                    Facts about {this.props.city}
                </Text>
                <Text style={styles.paragraph}>
                    Famous for: {this.props.fame}
                </Text>
                <Text style={styles.paragraph}>
                    Population: {this.props.population}
                </Text>
                <Text style={styles.paragraph}>
                    {this.props.miles}{this.props.direction} of {this.props.near}
                </Text>
            </View>
        </View>
        )

    }
}

const styles = StyleSheet.create({
  title: {
      fontSize: 28,
      textAlign: 'center',
      margin: 0,
      color: '#000',
      fontWeight: 'bold',
  },
  paragraph: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 5,
    fontSize: 18,
  },
  secondaryParagraph: {
      color: 'gray',
      fontSize: 18
    },
  temp: {
      fontSize: 18,
      color: 'white'
    },
  info: {
    padding: 5,
    backgroundColor: 'navy'
  },
  infoParagraph: {
      textAlign: 'left',
      color: '#FFFFFF',
      marginBottom: 5,
      fontSize: 16
    },
  buttonContainer: {
    margin: 20
  },
  tempInfo: {
    width: 150,
    padding: 10,
    margin: 10
  }
});
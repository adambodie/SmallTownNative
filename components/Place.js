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

        }
    }

    componentDidMount() {
        axios.get("http://api.apixu.com/v1/current.json?key=f6e5300584f147f5abb172139162905&q=56308")
          .then(response => {
            console.log(response.data.current);
            this.setState({
                temperature: response.data.current
            })
          })
          .catch(function (error) {
            console.log(error);
          });
}

    render(){
    //    const current = this.state.temperature.temp_f;
        return(
            <View>
              <View style={{flex: 1, alignItems: 'center'}}>
                    <Image style={{width: 300, height: 225}} source={this.props.image} />
              </View>
              <Text style={styles.secondaryTitle}>{this.props.city}</Text>
              <Text style={styles.secondaryParagraph}> {this.props.state} </Text>
              <View style={styles.info}>
                  <Text style={styles.infoParagraph}>
                    Famous for: {this.props.fame}
                  </Text>
                  <Text style={styles.infoParagraph}>
                    Population: {this.props.population}
                  </Text>
                  <Text style={styles.infoParagraph}>
                    {this.props.miles}{this.props.direction} of {this.props.near}
                  </Text>
              </View>
            <Text style={styles.paragraph}>
                Why should I visit {this.props.city}?
             </Text>
            <Text style={styles.paragraph}>
                {this.props.description}
             </Text>
            </View>
        )

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'anton-regular',
    padding: 20,
    margin: 0,
    color: '#000',
    borderBottomColor: 'white',
    borderBottomWidth: 10,
    backgroundColor: 'navy'
  },
  secondaryTitle: {
      fontSize: 28,
      textAlign: 'left',
      margin: 0,
      color: '#000',
      fontWeight: 'bold',
      marginLeft: 50
  },
  paragraph: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 5,
    fontSize: 16,
    padding: 10
  },
  secondaryParagraph: {
      color: 'gray',
      fontSize: 14,
      marginLeft: 80
    },
  info: {
    padding: 5,
    backgroundColor: 'navy',
    margin: 30
  },
  infoParagraph: {
      textAlign: 'left',
      color: '#FFFFFF',
      marginBottom: 5,
      fontSize: 16
    },
  buttonContainer: {
    margin: 20
  }
});
// Simple intro slider

import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
// import CodeScanner from './codescanner';
import LoginScreen from './LoginScreen';

export default class GetStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }
  _onDone = () => {
    this.setState({showRealApp: true});
  };
  _onSkip = () => {
    this.setState({showRealApp: true});
  };
  _renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
        // <CodeScanner />
        <LoginScreen />
        // <View
        //   style={{
        //     flex: 1,
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     padding: 50,
        //   }}>

        //   <Text>
        //     This will be your screen when you click Skip from any slide or Done
        //     button at last
        //   </Text>
        // </View>
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          onDone={this._onDone}
          showSkipButton={true}
          onSkip={this._onSkip}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
});

const slides = [
  {
    key: 's1',
    text: 'Your personal book review',
    title: 'Book Review',
    image: require('../images/book2.jpg'),
    // {
    //   uri:
    //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    // },
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Barcode Scanner',
    text: 'Scan barcode effortlessly',
    image: require('../images/barcode-512.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Book Rating',
    text: 'Rate your enjoyness reading book',
    image: require('../images/star.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 's4',
    title: 'Book List',
    text: ' Unilimited Book List',
    image: require('../images/review-removebg-preview.png'),
    backgroundColor: '#3395ff',
  },
];

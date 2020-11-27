import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

const data = [
  {
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../assets/images/Onboard1.png'),
    bg: '#59b2ab',
  },
  {
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../assets/images/Onboard2.png'),
    bg: '#febe29',
  },
  {
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../assets/images/Onboard3.png'),
    bg: '#22bcb5',
  },
];

const Onboarding = () => {
  _renderItem = ({item}) => {
    return (
      <View>
        <Text>Hello</Text>
      </View>
      // <View
      //   style={[
      //     styles.slide,
      //     {
      //       backgroundColor: item.bg,
      //     },
      //   ]}>
      //   <Text style={styles.title}>{item.title}</Text>
      //   <Image source={item.image} style={styles.image} />
      //   <Text style={styles.text}>{item.text}</Text>
      // </View>
    );
  };

  _keyExtractor = (item) => item.title;

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        data={data}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});

export default Onboarding;

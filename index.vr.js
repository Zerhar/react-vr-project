import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
} from 'react-vr';

import Bok from './components/Bok';
import Radhuset from './components/Radhuset';
import Ahlens from './components/Ahlens';
import Kebab from './components/Kebab';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View
        style={{
          position: 'absolute'
        }} >
        <Pano
          source={asset('street-view-360.jpg')}
          style={{
            position: 'absolute',
            transform: [
              { rotateZ: 2.5 }
            ]
          }} />
        <Bok />
        <Radhuset />
        <Ahlens />
        <Kebab />
      </ View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
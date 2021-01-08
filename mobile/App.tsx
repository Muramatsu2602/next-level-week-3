import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import mapMarker from './src/images/map-marker.png'

/**
 * View --> div
 * Text --> se quiser estilizar, vai ser separadamente
 */

export default function App() {
  return (
    // no HTML tags!
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -27.2092052,
          longitude: -49.6401092,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          coordinate={{
            latitude: -27.2092052,
            longitude: -49.6401092,
          }}
        >
          <Callout tooltip={true} onPress={() => { alert('oi') }}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das Donzelas</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}

// display: flex is already implicit
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },

  calloutText: {
    color: '#0089a5',
    fontSize: 14,
  }
});

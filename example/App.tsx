import { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import * as SiroReactNative from 'siro-react-native';

export default function App() {
  useEffect(() => {
    setupSiro()
  }, [])

  const setupSiro = () => {
    SiroReactNative.setup('staging');
  }

  const startRecording = () => {
    SiroReactNative.startRecording();
  }

  const sendEvent = (eventName: string, data: { [key: string]: any }) => {
    SiroReactNative.sendEvent(eventName, data);
  }

  const showModal = () => {
    SiroReactNative.showModal();
  }

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>SiroSDK Example App</Text>
      <Button title='Step 1 - Login to Siro' onPress={showModal} />
      <Button title="Step 2 - Start Recording!" onPress={startRecording} />

      <Text style={{ marginBottom: 20 }}>Test Events</Text>
      <Button title="Step 3 - Send event!" onPress={() => sendEvent('Random Event', { random: 'data', someNumber: 5, somebool: true, someArray: ['rrr', 2, true] })} />
      <Button title="Step 4 - Send dropPin event!" onPress={() => sendEvent('dropPin', { random: 'data', someNumber: 5, somebool: true, someArray: ['rrr', 2, true] })} />
      <Button title="Step 5 - Send createLead event!" onPress={() => sendEvent('createLead', { random: 'data', someNumber: 5, somebool: true, someArray: ['rrr', 2, true] })} />
      <Button title="Step 6 - Send leadClosed event!" onPress={() => sendEvent('leadClosed', { random: 'data', someNumber: 5, somebool: true, someArray: ['rrr', 2, true] })} />

      <SiroReactNative.SiroButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

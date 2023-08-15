import { useEffect } from 'react';
import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as SiroReactNative from 'siro-react-native';

console.log(SiroReactNative)



export default function App() {
  useEffect(() => {
    setupSiro()
  }, [])

  const setupSiro = () => {
    console.log('Setting up Siro')
    SiroReactNative.setup('staging');
  }

  const showSiro = () => {
    SiroReactNative.show();
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
      <Text>{SiroReactNative.hello()}</Text>
      <Button title="Step 1 - Set up Siro!" onPress={setupSiro} />
      <Button title='Step 2 - Login to Siro' onPress={showModal} />
      <Button title="Step 3 - Start Recording!" onPress={startRecording} />

      <Text>Test Events</Text>
      <Button title="Step 4 - Send event!" onPress={() => sendEvent('Random Event', { random: 'data', someNumber: 5, somebool: true, someArray: ['rrr', 2, true] })} />
      <Button title="Step 5 - Send dropPin event!" onPress={() => sendEvent('dropPin', { random: 'data', someNumber: 5, somebool: true, someArray: ['rrr', 2, true] })} />
      <Button title="Step 6 - Send createLead event!" onPress={() => sendEvent('createLead', { random: 'data', someNumber: 5, somebool: true, someArray: ['rrr', 2, true] })} />
      <Button title="Step 7 - Send leadClosed event!" onPress={() => sendEvent('leadClosed', { random: 'data', someNumber: 5, somebool: true, someArray: ['rrr', 2, true] })} />


      <TouchableOpacity style={{ padding: 35 }} onPress={showModal}>
        <SiroReactNative.SiroReactNativeView style={{ backgroundColor: 'green' }} />
      </TouchableOpacity>
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

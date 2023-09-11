import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import * as SiroReactNative from "siro-react-native";

const interaction: SiroReactNative.Interaction = {
  id: "123",

  userId: "externalId",
  note: "Got the sale!",
  leadDateCreated: new Date(),
  dateCreated: new Date(),
  contacts: [],
  leadId: "leadId",
  coordinates: { latitude: 0, longitude: 0 },
  stage: {
    id: "stageId",
    name: "stageName",
    color: "#000",
    icon: "icon.jpg",
    won: true,
    interacted: true,
  },
  metadata: {
    some: "data",
    someNumber: 5,
    somebool: true,
    someArray: ["rrr", 2, true],
  },
};

export default function App() {
  useEffect(() => {
    setupSiro();
  }, []);

  const setupSiro = () => {
    SiroReactNative.setup(SiroReactNative.Environment.staging);
  };

  const startRecording = () => {
    SiroReactNative.startRecording();
  };

  const stopRecording = () => {
    SiroReactNative.stopRecording();
  };

  const sendEvent = (eventName: string, data?: SiroReactNative.Interaction) => {
    SiroReactNative.sendEvent(eventName, data);
  };

  const showModal = () => {
    SiroReactNative.showModal();
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>SiroSDK Example App</Text>
      <Button title="Step 1 - Login to Siro" onPress={showModal} />
      <Button title="Step 2 - Start Recording!" onPress={startRecording} />

      <Text style={{ marginBottom: 20 }}>Test Events</Text>
      <Button
        title="Step 3 - Send event!"
        onPress={() => sendEvent("Random Event", interaction)}
      />
      <Button
        title="Step 4 - Send dropPin event!"
        onPress={() => sendEvent("dropPin", interaction)}
      />
      <Button
        title="Step 5 - Send createLead event!"
        onPress={() => sendEvent("createLead")}
      />
      <Button
        title="Step 6 - Send leadClosed event!"
        onPress={() => sendEvent("leadClosed")}
      />
      <Button
        title="Step 7 - Stop Recording!"
        onPress={() => stopRecording()}
      />

      <SiroReactNative.SiroButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

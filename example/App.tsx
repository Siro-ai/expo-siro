import { useEffect, useState } from "react";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setupSiro();
  }, []);

  const setupSiro = () => {
    SiroReactNative.setup(SiroReactNative.Environment.staging);
  };


  const sendEvent = async (eventName: string, data?: SiroReactNative.Interaction) => {
    await SiroReactNative.sendEvent(eventName, data);
  };

  const showModal = () => {
    SiroReactNative.showModal();
  };

  setInterval(() => {
    setIsLoggedIn(SiroReactNative.isUserLoggedIn());
  }, 1000);

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>SiroSDK Example App</Text>
      <Text>Is user logged in {String(isLoggedIn)}</Text>
      <Button title="Step 1 - Login to Siro" onPress={showModal} />

      <Text style={{ marginBottom: 20 }}>Test Events</Text>
      <Button
        title="Step 2 - Send event!"
        onPress={() => sendEvent("Random Event", interaction)}
      />
      <Button
        title="Step 3 - Send dropPin event!"
        onPress={() => sendEvent("dropPin", interaction)}
      />
      <Button
        title="Step 4 - Send createLead event!"
        onPress={() => sendEvent("createLead")}
      />
      <Button
        title="Step 5 - Send leadClosed event!"
        onPress={() => sendEvent("leadClosed")}
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

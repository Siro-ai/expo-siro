# expo-siro

The expo-siro sdk is a wrapper built around the Swift iOS SDK. It allows you to easily manage field sales recordings from an iOS device.

Please note, at this time we only support iOS. If you are interested in integrating Android, please reach out to Jake @ jake@siro.ai.

### Requirements
- iOS 15+

### Getting Started
1. Run `npx expo install expo-siro`
2. Follow iOS SiroSDK set up instructions found here.
3. In your Podfile be sure to set minimum deployment to ios15
4. add `use_frameworks! :linkage => :static` to your podfile
5. Add the following keys to the Info.plist:
- Privacy - Location When In Use Usage Description
- Privacy - Microphone Usage Description
6. Ensure background audio recording is enabled. On Expo you will have to pass in background modes via the `app.json` file.
Signing & Capabilities -> Background Modes -> check Audio, AirPlay, and Picture in Picture

### Usage
1. call `setup` and pass in your `enviornment`. Currently we support `staging` and `production`.
2. Import the `SiroButton` and drop in within any view. `SiroButton` takes no props. It controls the Siro recording modal. The Siro Recording Modal gets embedded into the root view of your app automatically.

```
import { SiroButton } from 'expo-siro'

const App = () => {
	useEffect(() => {
		setup('staging')
	})

	return (
		<View>
			<SiroButton />
		</View>
	)
}
```

## API

### function setup(env: 'staging' | 'production')
Sets up the SiroSDK. Must be called before utilizing the SDK. If `setup` is not called, interactions with the SiroSDK will fail.

### function startRecording()
Starts a recording. User will be asked for access to their location + microphone upon calling the `startRecording` function if they have not yet given the SiroSDK access. Once access is granted, `startRecording` will begin recording conversations.
Please note that there can only ever be one active recording instance. User must be logged in.

### function stopRecording()
Stops the currently active recording session. If there is no active recording session, no action is taken.

### function sendEvent(eventName: string, interactionData: InteractionData)
Sends an event along with any Lead or Interaction data. Events can trigger actions that control the Siro Recorder. 

### function showModal() 
Show's the Siro Recording modal. The modal has two states:
- Login Form: Rendered if the user is not currently logged in.
- Recorder: Rendered if the user has authenticated successfully.

### function hide()
Hides/dismisses the Siro modal.
# expo-siro

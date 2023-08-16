# expo-siro

The expo-siro sdk is a wrapper built around the Swift iOS SDK. It allows you to easily manage field sales recordings from an iOS device.

Please note, at this time we only support iOS. If you are interested in integrating Android, please reach out to Jake @ jake@siro.ai.

### Requirements
- iOS 15+

### Getting Started
1. Run `npx expo install expo-siro`


2. There are a couple of build settings we will need to tweek, so you'll need to install `expo-build-properties`, by running `npx expo install expo-build-properties`


3. In `app.json`, add the following to the config:
```
// app.json
{
  "expo": {
    "name": "my-app",


	// Add these lines below
    "plugins": [
      [
		"expo-build-properties", 
		{
			"ios": {
				"deploymentTarget": "15.0", // Minimum supported iOS version
				"useFrameworks": "static", // In order to support the Firebase SDK dependency
			}
		}
	  ]
    ]
  }
}
```
Alternatively, you can add those values to your `Podfile` directly:
```
// Podfile
use_frameworks! :linkage => :static
platform :ios, 15.0
```


3. Update your plist directly or via the `app.json` file (recommened if using expo): 
```
// app.json
{
	"expo": {
		// add this block:
		"ios": {
			"infoPlist": {
				"NSLocationWhenInUseUsageDescription": "Add your description here", // Allows the SDK to access Location data
				"NSMicrophoneUsageDescription": "Add description here", // Allows the SDK to access the Microphone
				"UIBackgroundModes": {
					"audio" // Allows recording to occur when app is in background mode
				}
			}
		}
	}
}
```


4. Build the iOS app by running: `npx expo run:ios`

### Usage
1. call `setup` and pass in your `enviornment`. Currently we support `staging` and `production`.


2. Import the `SiroButton` and drop in within any view. `SiroButton` takes no props. It controls the Siro recording modal. The Siro Recording Modal gets embedded into the root view of your app automatically.

```
import { View } from 'react-native'
import { SiroButton } from 'expo-siro'

const App = () => {
	useEffect(() => {
		setup('staging')
	}, [])

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
___


### function startRecording()
Starts a recording. User will be asked for access to their location + microphone upon calling the `startRecording` function if they have not yet given the SiroSDK access. Once access is granted, `startRecording` will begin recording conversations.
Please note that there can only ever be one active recording instance. User must be logged in.
___


### function stopRecording()
Stops the currently active recording session. If there is no active recording session, no action is taken.
___


### function sendEvent(eventName: string, interactionData?: InteractionData)
Sends an event along with any Lead or Interaction data. Events can trigger actions that control the Siro Recorder. 

```
import { sendEvent } from 'expo-siro'

interface Coordinates {
	lat: number
    long: number
}

interface Address {
	street: string
    city: string
    state: string
    zip: string
}

interface Stage {
	id: string
    name?: string
    color?: string
    icon?: string
    won?: boolean
    interacted?: boolean
}

interface InteractionData {
	id: string

    // Optional data
    note?: string
    metadata?: any
    leadCreatedAt?: string
    contacts?: Contact[]
    owner?: string
    leadId?: string
    coordinates?: Coordinates[]
    stage?: Stage
    address?: Address
    recordingId?: string
}

const interactionData = {
	id: string // Only the ID is required
}

sendEvent('createLead', interactionData)
```
___


### function showModal() 
Show's the Siro Recording modal. The modal has two states:
- Login Form: Rendered if the user is not currently logged in.
- Recorder: Rendered if the user has authenticated successfully.
___


### function hide()
Hides/dismisses the Siro modal.
# expo-siro

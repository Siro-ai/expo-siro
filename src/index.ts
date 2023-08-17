import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to SiroReactNative.web.ts
// and on native platforms to SiroReactNative.ts
import SiroReactNativeModule from './SiroReactNativeModule';
import SiroButton from './SiroReactNativeView';
import { Interaction, SiroEnv } from './types';


/**
 * Sets up the SiroSDK.
 * @param {SiroEnv} env The environment to use.
 */
export function setup(env: SiroEnv) {
  return SiroReactNativeModule.setup(env);
}

/**
 * Displays the Siro Modal.
 */
export function show() {
  return SiroReactNativeModule.show();
}

/**
 * Hides the Siro Modal.
 */
export function hide() {
  return SiroReactNativeModule.hide();
}


/**
 * Starts the Siro Recorder. Additionally updates the SiroButton
 * to display the recording state.
 */
export function startRecording() {
  SiroReactNativeModule.startRecording();
}

/**
 * Can send an event to the SiroSDK. Custom events can be used to
 * trigger custom actions in the SiroSDK. These actions can include
 * starting, stopping, or pausing the Siro Recorder.
 * 
 * @param {string} event The event to send.
 * @param {Interaction} data The data to send with the event.
 */
export function sendEvent(event: string, data: Interaction) {
  SiroReactNativeModule.sendEvent(event, data);
}

/**
 * Dismisses the Siro Modal.
 */
export function showModal() {
  SiroReactNativeModule.showModal();
}

export { SiroButton };

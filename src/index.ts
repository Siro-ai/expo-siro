import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to SiroReactNative.web.ts
// and on native platforms to SiroReactNative.ts
import SiroReactNativeModule from './SiroReactNativeModule';
import SiroButton from './SiroReactNativeView';
import { Interaction, Environment } from './types';


/**
 * Sets up the SiroSDK.
 * @param {Environment} env The environment to use.
 */
export function setup(env: Environment) {
  return SiroReactNativeModule.setup(env);
}

/**
 * Displays the Siro Recording Modal.
 */
export function show() {
  return SiroReactNativeModule.show();
}

/**
 * Hides the Siro Recording Modal.
 */
export function hide() {
  return SiroReactNativeModule.hide();
}


/**
 * Starts the Siro Recorder, if not already started. Does nothing if a recording is already in progress.
 */
export function startRecording() {
  SiroReactNativeModule.startRecording();
}

/**
 * Stops the Siro Recorder, if not already stopped. Does nothing if a recording is not in progress.
 */
export function stopRecording() {
  SiroReactNativeModule.stopRecording();
}

/**
 * Sends an event, which can trigger recorder actions (e.g., start, stop, or discard a recording).
 * 
 * Include the `data` parameter to send additional data with the event. The data is specific to the event.
 * If your backend already sends Siro lead and interaction data, it is still important for you to include the data field with the id, leadId, and userId, so Siro can associate recordings with the correct records in your database.
 * 
 * @param {string} event The event to send.
 * @param {Interaction} data The data to send with the event.
 */
export function sendEvent(event: string, data?: Interaction) {
  SiroReactNativeModule.sendEvent(event, data);
}

/**
 * Dismisses the Siro Modal.
 */
export function showModal() {
  SiroReactNativeModule.showModal();
}


/**
 * Logs the user out of the Siro.
 */
export function logout() {
  SiroReactNativeModule.logout();
}


export { SiroButton, Environment, Interaction };


// Import the native module. On web, it will be resolved to SiroReactNative.web.ts
// and on native platforms to SiroReactNative.ts
import SiroReactNativeModule from "./SiroReactNativeModule";
import SiroButton from "./SiroReactNativeView";
import { Interaction, Environment } from "./types";


/**
 * Whether the SiroSDK has been initialized.
 */
export const initialized = SiroReactNativeModule.initialized as boolean;

/**
 * Whether the SiroSDK Modal is currently visible.
 */
export const visible = SiroReactNativeModule.visible as boolean;


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
 * Sends an event, which can trigger recorder actions (e.g., start, stop, or discard a recording).
 *
 * Include the `data` parameter to send additional data with the event. The data is specific to the event.
 * If your backend already sends Siro lead and interaction data, it is still important for you to include the data field with the id, leadId, and userId, so Siro can associate recordings with the correct records in your database.
 *
 * @param {string} event The event to send.
 * @param {Interaction} data The data to send with the event.
 */
export async function sendEvent(event: string, data?: Interaction) {
  return await SiroReactNativeModule.sendEvent(event, data !== undefined ? JSON.stringify(data) : undefined);
}

/**
 * Dismisses the Siro Modal.
 */
export function showModal() {
  SiroReactNativeModule.showModal();
}


/**
 * Returns a boolean indicating whether the user is logged in.
 */

export function isUserLoggedIn() {
  return SiroReactNativeModule.isUserLoggedIn() as boolean;
}

export { SiroButton, Environment, Interaction };

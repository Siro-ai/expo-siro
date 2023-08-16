import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from "expo-modules-core";

// Import the native module. On web, it will be resolved to SiroReactNative.web.ts
// and on native platforms to SiroReactNative.ts
import SiroReactNativeModule from "./SiroReactNativeModule";
import SiroButton from "./SiroReactNativeView";

export function setup(env: "staging" | "production") {
  return SiroReactNativeModule.setup(env);
}

export function show() {
  return SiroReactNativeModule.show();
}

export function hide() {
  return SiroReactNativeModule.hide();
}

export function startRecording() {
  SiroReactNativeModule.startRecording();
}

export function sendEvent(event: string, data: any) {
  SiroReactNativeModule.sendEvent(event, data);
}

export function showModal() {
  SiroReactNativeModule.showModal();
}

export { SiroButton };

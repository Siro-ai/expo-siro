import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to SiroReactNative.web.ts
// and on native platforms to SiroReactNative.ts
import SiroReactNativeModule from './SiroReactNativeModule';
import SiroReactNativeView from './SiroReactNativeView';
import { ChangeEventPayload, SiroReactNativeViewProps } from './SiroReactNative.types';

// Get the native constant value.
export const PI = SiroReactNativeModule.PI;

export function hello(): string {
  return SiroReactNativeModule.hello();
}

export async function setValueAsync(value: string) {
  return await SiroReactNativeModule.setValueAsync(value);
}

const emitter = new EventEmitter(SiroReactNativeModule ?? NativeModulesProxy.SiroReactNative);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { SiroReactNativeView, SiroReactNativeViewProps, ChangeEventPayload };

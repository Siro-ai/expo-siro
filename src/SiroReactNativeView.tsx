import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import SiroReactNativeModule from './SiroReactNativeModule';

const NativeView: React.ComponentType<{}> =
  requireNativeViewManager('SiroReactNative');

export default function SiroButton(props: {}) {
  return (
    <TouchableOpacity style={{ padding: 35 }} onPress={SiroReactNativeModule.onPress}>
      <NativeView {...props} />
    </TouchableOpacity>
  )
}

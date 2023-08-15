import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

const NativeView: React.ComponentType<{}> =
  requireNativeViewManager('SiroReactNative');

export default function SiroButton(props: {}) {
  return <NativeView {...props} />;
}

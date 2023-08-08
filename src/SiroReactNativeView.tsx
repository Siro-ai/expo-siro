import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { SiroReactNativeViewProps } from './SiroReactNative.types';

const NativeView: React.ComponentType<SiroReactNativeViewProps> =
  requireNativeViewManager('SiroReactNative');

export default function SiroReactNativeView(props: SiroReactNativeViewProps) {
  return <NativeView {...props} />;
}

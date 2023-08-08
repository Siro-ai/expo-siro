import * as React from 'react';

import { SiroReactNativeViewProps } from './SiroReactNative.types';

export default function SiroReactNativeView(props: SiroReactNativeViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}

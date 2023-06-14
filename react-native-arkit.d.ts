declare module '@panter/react-native-arkit' {
  import { Component } from 'react';
  import { ViewProps } from 'react-native';

  export class ARKit extends Component<ViewProps> {
    static Node: any; 
    static Image: any; 
  }
}

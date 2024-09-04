// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DrawerContextProvider from './context/DrawerContextProvider';
import RightDrawerNavigator from './navigation/RightDrawerNavigator';


export default function App() {
  return (
    <DrawerContextProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <RightDrawerNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </DrawerContextProvider>
  );
}


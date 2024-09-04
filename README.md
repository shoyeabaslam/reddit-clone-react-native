
# React Native Drawer Navigation Setup and Troubleshooting Guide

This guide provides comprehensive steps to set up a simple drawer navigation in a React Native app using React Navigation, and addresses common errors such as `No component found for view with name "RNSScreen"` and `No component found for view with name "RNCSafeAreaProvider"`.

## Step-by-Step Setup

### Step 1: Install Required Packages

Install the necessary packages for React Navigation and drawer navigation:

```bash
npm install @react-navigation/native @react-navigation/drawer
npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
```

If you're using a version of React Native lower than 0.60, manually link the dependencies:

```bash
react-native link react-native-gesture-handler
react-native link react-native-reanimated
react-native link react-native-screens
react-native link react-native-safe-area-context
```

For React Native 0.60 and above, autolinking will handle this step.

### Step 2: Configure iOS Project

For iOS, navigate to the `ios` directory and install CocoaPods dependencies:

```bash
cd ios
pod install
cd ..
```

### Step 3: Enable Screens and Safe Area Provider

In your `App.js`, enable screens and wrap your app in `SafeAreaProvider`:

```jsx
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';

enableScreens();

function App() {
  return (
    <SafeAreaProvider>
      {/* Your navigation and components */}
    </SafeAreaProvider>
  );
}
```

### Step 4: Set Up Drawer Navigation

Set up a basic drawer navigation in your `App.js`:

```jsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
```

### Step 5: Add Screen Components

Create the screen components, e.g., `HomeScreen.js` and `ProfileScreen.js`:

```jsx
// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}
```

```jsx
// ProfileScreen.js
import React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}
```

### Step 6: Rebuild the Project

**For iOS:**

1. Clean the build folder in Xcode: **Shift + Command + K**.
2. Rebuild the app:

```bash
npm run ios
```

**For Android:**

1. Clean the build:

```bash
cd android && ./gradlew clean && cd ..
```

2. Rebuild the app:

```bash
npm run android
```

### Step 7: Restart Metro Bundler

Restart the Metro bundler to clear the cache:

```bash
npm start -- --reset-cache
```

## Troubleshooting Common Errors

### Error: `No component found for view with name "RNSScreen"`

1. Ensure `react-native-screens` is installed and linked properly.
2. Add `enableScreens()` at the top of your `App.js`.
3. Clean and rebuild the project.

### Error: `No component found for view with name "RNCSafeAreaProvider"`

1. Ensure `react-native-safe-area-context` is installed and linked properly.
2. Wrap your app in `SafeAreaProvider` in `App.js`.
3. Clean and rebuild the project.

### Additional Tips

- Always restart your Metro bundler after installing new dependencies.
- Clean builds are crucial after linking or installing new native modules.
- If problems persist, restarting your device or emulator may help.

### Demo
<img width="428" alt="Screenshot 2024-09-04 at 5 31 42 PM" src="https://github.com/user-attachments/assets/ecae6877-20c1-42f7-8fbe-98b1ee5f4049">


## Conclusion

Following these steps will set up a basic drawer navigation in React Native and resolve common errors associated with screen and safe area components.

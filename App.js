
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import PostdetailScreen from './src/screens/PostdetailScreen';
import FeedbackScreen from './src/screens/FeedbackScreen';
import SearchScreen from './src/screens/SearchScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import MessageScreen from './src/screens/MessageScreen';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Postdetail" component={PostdetailScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen}/>
        <Stack.Screen name="MessageScreen" component={MessageScreen}/>
        <Stack.Screen name="NotificationScreen" component={NotificationScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


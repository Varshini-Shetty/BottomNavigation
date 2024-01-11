import { StyleSheet, Text, View, PermissionsAndroid } from 'react-native';
import React, { useEffect } from 'react';
import FetchPost from './src/FetchPost';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './src/Profile';
import { Alert } from 'react-native';

import About from './src/About';
import Setting from './src/Setting';
import Login from './src/Login';
import { combineTransition } from 'react-native-reanimated';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={FetchPost}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="About"
      component={About}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="codepen" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user-o" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
const AboutTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={FetchPost}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="About"
      component={About}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="codepen" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user-o" size={size} color={color} />
        ),
      }}
    />
    {/* Add more tab screens here if needed */}
  </Tab.Navigator>
);

const App = () => {


  // useEffect(() => {
  //   PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   return unsubscribe;
  // }, []);

  // useEffect(() => {
  //   messaging().onNotificationOpenedApp(remoteMessage => {
  //     console.log(
  //       'Notification caused app to open from background state:',
  //       remoteMessage.notification,
  //     );
  //   });
  //   messaging()
  //     .getInitialNotification()
  //     .then(remoteMessage => {
  //       if (remoteMessage) {
  //         console.log(
  //           'Notification caused app to open from quit state:',
  //           remoteMessage.notification,
  //         );
  //       }
  //     });
  // }, []);
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeTab}
          options={{
            drawerIcon: () => <AntDesign name="home" size={25} />,
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Setting}
          options={{
            drawerIcon: () => <AntDesign name="setting" size={25} />,
          }}
        />
        <Drawer.Screen
          name="Logout"
          component={Login}
          options={{
            drawerIcon: () => <FontAwesome name="power-off" size={25} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AudioList from "../screens/AudioList";
import Player from "../screens/Player";
import PlayList from "../screens/PlayList";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import PlayListDetail from "../screens/PlayListDetail";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const PlayListScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PlayList" component={PlayList} />
      <Stack.Screen name="PlayListDetail" component={PlayListDetail} />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AudioList"
        component={AudioList}
        options={{
          headerShown: false,
          tabBarIcon: (color, size) => {
            return <Ionicons name="headset" size={24} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="Player"
        component={Player}
        options={{
          headerShown: false,
          tabBarIcon: (color, size) => {
            return <FontAwesome5 name="compact-disc" size={24} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="PlayListScreen"
        component={PlayListScreen}
        options={{
          headerShown: false,
          tabBarIcon: (color, size) => {
            return (
              <MaterialIcons name="library-music" size={24} color="black" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;

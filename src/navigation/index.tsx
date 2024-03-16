import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './tab-navigator';

import Details from '@/screens/details';

export type RootStackParamList = {
  TabNavigator: undefined;
  Details: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigator">
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

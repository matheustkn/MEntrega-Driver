import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import { RootStackParamList } from '@/navigation';
import Activities from '@/screens/activities';
import Profile from '@/screens/profile';
import Routes from '@/screens/routes';
import Wallet from '@/screens/wallet';

const Tab = createBottomTabNavigator();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome6>['name'];
  color: string;
}) {
  return <FontAwesome6 size={28} style={styles.tabBarIcon} {...props} />;
}

type Props = StackScreenProps<RootStackParamList, 'TabNavigator'>;

export default function TabLayout({ navigation }: Props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#897400',
        tabBarStyle: {
          backgroundColor: '#fde047',
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="Routes"
        component={Routes}
        options={{
          title: 'Rotas',
          tabBarIcon: ({ color }) => <TabBarIcon name="route" color={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          title: 'Carteira',
          tabBarIcon: ({ color }) => <TabBarIcon name="wallet" color={color} />,
        }}
      />
      <Tab.Screen
        name="Activities"
        component={Activities}
        options={{
          title: 'Histórico',
          tabBarIcon: ({ color }) => <TabBarIcon name="newspaper" color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Meu Perfil',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15,
  },
  tabBarIcon: {
    marginBottom: -3,
  },
});

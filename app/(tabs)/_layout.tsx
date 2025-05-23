import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF6F61',
        tabBarStyle: {
          backgroundColor: '#1E1E1E',
          borderTopWidth: 0,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Contador',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-calculator" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

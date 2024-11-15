import { View, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 24, // Equivalent to w-6
          height: 24, // Equivalent to h-6
          tintColor: color,
        }}
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon
                icon={icons.search}
                color={color}
              />
            ),
          }}
        />

<Tabs.Screen
          name="status"
          options={{
            title: 'Status',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon
                icon={icons.status}
                color={color}
              />
            ),
          }}
        />

<Tabs.Screen
          name="dashboard"
          options={{
            title: 'dashboard',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon
                icon={icons.dashboard}
                color={color}
              />
            ),
          }}
        />


<Tabs.Screen
          name="notification"
          options={{
            title: 'Notification',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon
                icon={icons.notification}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { commonStyles, colors } from '../styles/commonStyles';
import Icon from './Icon';

interface TabItem {
  key: string;
  label: string;
  icon: string;
}

interface BottomTabBarProps {
  activeTab: string;
  onTabPress: (tab: string) => void;
}

const tabs: TabItem[] = [
  { key: 'home', label: 'Home', icon: 'home' },
  { key: 'doctors', label: 'Doctors', icon: 'people' },
  { key: 'appointments', label: 'Appointments', icon: 'calendar' },
  { key: 'profile', label: 'Profile', icon: 'person' },
];

export default function BottomTabBar({ activeTab, onTabPress }: BottomTabBarProps) {
  return (
    <View style={[commonStyles.bottomTab, styles.container]}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          style={commonStyles.tabItem}
          onPress={() => onTabPress(tab.key)}
        >
          <Icon
            name={tab.icon as any}
            size={20}
            color={activeTab === tab.key ? colors.primary : colors.textSecondary}
          />
          <Text
            style={[
              styles.tabLabel,
              { color: activeTab === tab.key ? colors.primary : colors.textSecondary }
            ]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 8,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '500',
    marginTop: 4,
  },
});

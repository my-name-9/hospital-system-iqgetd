
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { commonStyles, colors } from '../styles/commonStyles';
import { Department } from '../types/hospital';
import Icon from './Icon';

interface DepartmentCardProps {
  department: Department;
  onPress: () => void;
}

export default function DepartmentCard({ department, onPress }: DepartmentCardProps) {
  const getIconName = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      heart: 'heart',
      brain: 'brain',
      baby: 'baby',
      bone: 'body',
      hand: 'hand-left',
      medical: 'medical',
    };
    return iconMap[iconName] || 'medical';
  };

  return (
    <TouchableOpacity style={[commonStyles.card, styles.container]} onPress={onPress}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Icon name={getIconName(department.icon)} size={24} color={colors.primary} />
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{department.name}</Text>
          <Text style={styles.description}>{department.description}</Text>
        </View>
      </View>
      
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Icon name="people" size={16} color={colors.textSecondary} />
          <Text style={styles.statText}>{department.doctorCount} doctors</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name="list" size={16} color={colors.textSecondary} />
          <Text style={styles.statText}>{department.services.length} services</Text>
        </View>
      </View>
      
      <View style={styles.services}>
        <Text style={styles.servicesLabel}>Services:</Text>
        <Text style={styles.servicesText}>
          {department.services.slice(0, 2).join(', ')}
          {department.services.length > 2 ? '...' : ''}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.backgroundAlt,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginLeft: 4,
  },
  services: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  servicesLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.text,
    marginRight: 8,
  },
  servicesText: {
    fontSize: 12,
    color: colors.textSecondary,
    flex: 1,
  },
});

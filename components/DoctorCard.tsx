
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { commonStyles, colors } from '../styles/commonStyles';
import { Doctor } from '../types/hospital';
import Icon from './Icon';

interface DoctorCardProps {
  doctor: Doctor;
  onPress: () => void;
}

export default function DoctorCard({ doctor, onPress }: DoctorCardProps) {
  return (
    <TouchableOpacity style={[commonStyles.card, styles.container]} onPress={onPress}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Icon name="person" size={24} color={colors.primary} />
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{doctor.name}</Text>
          <Text style={styles.specialty}>{doctor.specialty}</Text>
          <Text style={styles.department}>{doctor.department}</Text>
        </View>
        <View style={styles.rating}>
          <Icon name="star" size={16} color={colors.warning} />
          <Text style={styles.ratingText}>{doctor.rating}</Text>
        </View>
      </View>
      
      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Icon name="time" size={16} color={colors.textSecondary} />
          <Text style={styles.detailText}>{doctor.experience} years exp.</Text>
        </View>
        <View style={styles.detailItem}>
          <Icon name="cash" size={16} color={colors.textSecondary} />
          <Text style={styles.detailText}>${doctor.consultationFee}</Text>
        </View>
      </View>
      
      <View style={styles.availability}>
        <Text style={styles.availabilityLabel}>Available:</Text>
        <Text style={styles.availabilityText}>
          {doctor.availability.slice(0, 3).join(', ')}
          {doctor.availability.length > 3 ? '...' : ''}
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
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
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
    marginBottom: 2,
  },
  specialty: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.primary,
    marginBottom: 2,
  },
  department: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginLeft: 4,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginLeft: 4,
  },
  availability: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  availabilityLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.text,
    marginRight: 8,
  },
  availabilityText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});

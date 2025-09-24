
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { commonStyles, colors } from '../styles/commonStyles';
import { Appointment } from '../types/hospital';
import Icon from './Icon';

interface AppointmentCardProps {
  appointment: Appointment;
  onPress: () => void;
}

export default function AppointmentCard({ appointment, onPress }: AppointmentCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return colors.primary;
      case 'completed':
        return colors.success;
      case 'cancelled':
        return colors.error;
      default:
        return colors.textSecondary;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'time';
      case 'completed':
        return 'checkmark-circle';
      case 'cancelled':
        return 'close-circle';
      default:
        return 'time';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <TouchableOpacity style={[commonStyles.card, styles.container]} onPress={onPress}>
      <View style={styles.header}>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{formatDate(appointment.date)}</Text>
          <Text style={styles.time}>{appointment.time}</Text>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(appointment.status) + '20' }]}>
          <Icon name={getStatusIcon(appointment.status)} size={12} color={getStatusColor(appointment.status)} />
          <Text style={[styles.statusText, { color: getStatusColor(appointment.status) }]}>
            {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
          </Text>
        </View>
      </View>
      
      <View style={styles.doctorInfo}>
        <Text style={styles.doctorName}>{appointment.doctorName}</Text>
        <Text style={styles.department}>{appointment.department}</Text>
      </View>
      
      <View style={styles.footer}>
        <View style={styles.typeContainer}>
          <Icon name="medical" size={14} color={colors.textSecondary} />
          <Text style={styles.typeText}>{appointment.type}</Text>
        </View>
        <Icon name="chevron-forward" size={16} color={colors.textSecondary} />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateContainer: {
    alignItems: 'flex-start',
  },
  date: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  time: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 10,
    fontWeight: '500',
    marginLeft: 4,
  },
  doctorInfo: {
    marginBottom: 12,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  department: {
    fontSize: 14,
    color: colors.primary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginLeft: 4,
    textTransform: 'capitalize',
  },
});

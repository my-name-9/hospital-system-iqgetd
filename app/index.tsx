
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { commonStyles, colors } from '../styles/commonStyles';
import { doctors, departments, appointments } from '../data/hospitalData';
import BottomTabBar from '../components/BottomTabBar';
import DoctorCard from '../components/DoctorCard';
import DepartmentCard from '../components/DepartmentCard';
import AppointmentCard from '../components/AppointmentCard';
import Icon from '../components/Icon';

export default function HospitalApp() {
  const [activeTab, setActiveTab] = useState('home');

  const renderHomeScreen = () => (
    <ScrollView style={commonStyles.content} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={commonStyles.header}>
        <View>
          <Text style={styles.greeting}>Good Morning</Text>
          <Text style={commonStyles.title}>John Doe</Text>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Icon name="notifications" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      {/* Quick Stats */}
      <View style={commonStyles.section}>
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Icon name="calendar" size={24} color={colors.primary} />
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Appointments</Text>
          </View>
          <View style={styles.statCard}>
            <Icon name="people" size={24} color={colors.success} />
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Doctors</Text>
          </View>
          <View style={styles.statCard}>
            <Icon name="medical" size={24} color={colors.warning} />
            <Text style={styles.statNumber}>6</Text>
            <Text style={styles.statLabel}>Departments</Text>
          </View>
        </View>
      </View>

      {/* Upcoming Appointments */}
      <View style={commonStyles.section}>
        <View style={[commonStyles.row, { marginBottom: 16 }]}>
          <Text style={commonStyles.subtitle}>Upcoming Appointments</Text>
          <TouchableOpacity onPress={() => setActiveTab('appointments')}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        {appointments.filter(apt => apt.status === 'scheduled').slice(0, 2).map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
            onPress={() => console.log('Appointment pressed:', appointment.id)}
          />
        ))}
      </View>

      {/* Featured Doctors */}
      <View style={commonStyles.section}>
        <View style={[commonStyles.row, { marginBottom: 16 }]}>
          <Text style={commonStyles.subtitle}>Top Doctors</Text>
          <TouchableOpacity onPress={() => setActiveTab('doctors')}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        {doctors.slice(0, 2).map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            onPress={() => console.log('Doctor pressed:', doctor.id)}
          />
        ))}
      </View>

      {/* Quick Actions */}
      <View style={commonStyles.section}>
        <Text style={[commonStyles.subtitle, { marginBottom: 16 }]}>Quick Actions</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="add-circle" size={24} color={colors.primary} />
            <Text style={styles.actionText}>Book Appointment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="call" size={24} color={colors.success} />
            <Text style={styles.actionText}>Emergency Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="document-text" size={24} color={colors.warning} />
            <Text style={styles.actionText}>Medical Records</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );

  const renderDoctorsScreen = () => (
    <View style={commonStyles.content}>
      <View style={commonStyles.header}>
        <Text style={commonStyles.title}>Doctors</Text>
        <TouchableOpacity>
          <Icon name="search" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 20 }}>
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onPress={() => console.log('Doctor pressed:', doctor.id)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );

  const renderAppointmentsScreen = () => (
    <View style={commonStyles.content}>
      <View style={commonStyles.header}>
        <Text style={commonStyles.title}>Appointments</Text>
        <TouchableOpacity>
          <Icon name="add" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 20 }}>
          {appointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              onPress={() => console.log('Appointment pressed:', appointment.id)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );

  const renderProfileScreen = () => (
    <View style={commonStyles.content}>
      <View style={commonStyles.header}>
        <Text style={commonStyles.title}>Profile</Text>
        <TouchableOpacity>
          <Icon name="settings" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={commonStyles.section}>
          <View style={[commonStyles.card, styles.profileCard]}>
            <View style={styles.profileAvatar}>
              <Icon name="person" size={40} color={colors.primary} />
            </View>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileInfo}>Age: 35 • Blood Group: O+</Text>
            <Text style={styles.profileContact}>john.doe@email.com</Text>
            <Text style={styles.profileContact}>+1 (555) 123-4567</Text>
          </View>

          <View style={styles.profileSection}>
            <Text style={[commonStyles.subtitle, { marginBottom: 12 }]}>Medical Information</Text>
            <View style={commonStyles.card}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Allergies:</Text>
                <Text style={styles.infoValue}>Penicillin, Shellfish</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Medical History:</Text>
                <Text style={styles.infoValue}>Hypertension, Diabetes Type 2</Text>
              </View>
            </View>
          </View>

          <View style={styles.profileSection}>
            <Text style={[commonStyles.subtitle, { marginBottom: 12 }]}>Emergency Contact</Text>
            <View style={commonStyles.card}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Name:</Text>
                <Text style={styles.infoValue}>Jane Doe (Spouse)</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Phone:</Text>
                <Text style={styles.infoValue}>+1 (555) 987-6543</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );

  const renderCurrentScreen = () => {
    switch (activeTab) {
      case 'home':
        return renderHomeScreen();
      case 'doctors':
        return renderDoctorsScreen();
      case 'appointments':
        return renderAppointmentsScreen();
      case 'profile':
        return renderProfileScreen();
      default:
        return renderHomeScreen();
    }
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      {renderCurrentScreen()}
      <BottomTabBar activeTab={activeTab} onTabPress={setActiveTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  greeting: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.backgroundAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  seeAllText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  actionText: {
    fontSize: 12,
    color: colors.text,
    marginTop: 8,
    textAlign: 'center',
    fontWeight: '500',
  },
  profileCard: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.backgroundAlt,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  profileInfo: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  profileContact: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  profileSection: {
    marginTop: 24,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
    flex: 1,
  },
  infoValue: {
    fontSize: 14,
    color: colors.textSecondary,
    flex: 2,
    textAlign: 'right',
  },
});

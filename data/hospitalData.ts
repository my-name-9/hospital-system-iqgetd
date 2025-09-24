
import { Doctor, Department, Appointment, Patient } from '../types/hospital';

export const hospitalInfo = {
  name: 'Bulbul Hospital',
  address: '123 Medical Center Drive, Healthcare City',
  phone: '+1 (555) 123-BULB',
  email: 'info@bulbulhospital.com',
  website: 'www.bulbulhospital.com',
};

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    department: 'Cardiology',
    experience: 12,
    rating: 4.8,
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
    consultationFee: 150,
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    department: 'Neurology',
    experience: 15,
    rating: 4.9,
    availability: ['Monday', 'Wednesday', 'Thursday', 'Saturday'],
    consultationFee: 180,
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    department: 'Pediatrics',
    experience: 8,
    rating: 4.7,
    availability: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    consultationFee: 120,
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialty: 'Orthopedic Surgeon',
    department: 'Orthopedics',
    experience: 20,
    rating: 4.9,
    availability: ['Monday', 'Tuesday', 'Friday', 'Saturday'],
    consultationFee: 200,
  },
  {
    id: '5',
    name: 'Dr. Lisa Thompson',
    specialty: 'Dermatologist',
    department: 'Dermatology',
    experience: 10,
    rating: 4.6,
    availability: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    consultationFee: 130,
  },
];

export const departments: Department[] = [
  {
    id: '1',
    name: 'Cardiology',
    description: 'Heart and cardiovascular system care',
    icon: 'heart',
    doctorCount: 8,
    services: ['ECG', 'Echocardiogram', 'Cardiac Catheterization', 'Stress Testing'],
  },
  {
    id: '2',
    name: 'Neurology',
    description: 'Brain and nervous system disorders',
    icon: 'brain',
    doctorCount: 6,
    services: ['MRI', 'CT Scan', 'EEG', 'Neurological Examination'],
  },
  {
    id: '3',
    name: 'Pediatrics',
    description: 'Medical care for infants, children, and adolescents',
    icon: 'baby',
    doctorCount: 12,
    services: ['Vaccinations', 'Growth Monitoring', 'Developmental Assessment'],
  },
  {
    id: '4',
    name: 'Orthopedics',
    description: 'Bone, joint, and muscle disorders',
    icon: 'bone',
    doctorCount: 10,
    services: ['X-Ray', 'Joint Replacement', 'Fracture Treatment', 'Physical Therapy'],
  },
  {
    id: '5',
    name: 'Dermatology',
    description: 'Skin, hair, and nail conditions',
    icon: 'hand',
    doctorCount: 5,
    services: ['Skin Biopsy', 'Laser Treatment', 'Cosmetic Procedures'],
  },
  {
    id: '6',
    name: 'Emergency',
    description: '24/7 emergency medical care',
    icon: 'medical',
    doctorCount: 15,
    services: ['Trauma Care', 'Critical Care', 'Emergency Surgery'],
  },
];

export const appointments: Appointment[] = [
  {
    id: '1',
    doctorId: '1',
    doctorName: 'Dr. Sarah Johnson',
    department: 'Cardiology',
    date: '2024-01-15',
    time: '10:00 AM',
    status: 'scheduled',
    type: 'consultation',
  },
  {
    id: '2',
    doctorId: '3',
    doctorName: 'Dr. Emily Rodriguez',
    department: 'Pediatrics',
    date: '2024-01-18',
    time: '2:30 PM',
    status: 'scheduled',
    type: 'follow-up',
  },
  {
    id: '3',
    doctorId: '2',
    doctorName: 'Dr. Michael Chen',
    department: 'Neurology',
    date: '2024-01-12',
    time: '9:00 AM',
    status: 'completed',
    type: 'consultation',
  },
];

export const currentPatient: Patient = {
  id: '1',
  name: 'John Doe',
  age: 35,
  gender: 'male',
  phone: '+1 (555) 123-4567',
  email: 'john.doe@email.com',
  bloodGroup: 'O+',
  allergies: ['Penicillin', 'Shellfish'],
  medicalHistory: ['Hypertension', 'Diabetes Type 2'],
  emergencyContact: {
    name: 'Jane Doe',
    phone: '+1 (555) 987-6543',
    relation: 'Spouse',
  },
};

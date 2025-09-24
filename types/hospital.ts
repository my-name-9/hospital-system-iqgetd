
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  department: string;
  experience: number;
  rating: number;
  image?: string;
  availability: string[];
  consultationFee: number;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  icon: string;
  doctorCount: number;
  services: string[];
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  department: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  type: 'consultation' | 'follow-up' | 'emergency';
  notes?: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  phone: string;
  email: string;
  bloodGroup: string;
  allergies: string[];
  medicalHistory: string[];
  emergencyContact: {
    name: string;
    phone: string;
    relation: string;
  };
}

export interface MedicalRecord {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  diagnosis: string;
  prescription: string[];
  notes: string;
  followUpDate?: string;
}

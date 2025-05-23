export interface AccidentData {
  id: number;
  location: string;
  date: string;
  type: string;
  severity: 'low' | 'medium' | 'high';
  cause: string;
}

export interface SafetyTip {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface EmergencyContact {
  id: number;
  name: string;
  number: string;
  category: string;
}
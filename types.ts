
export enum Role {
  FARMER = 'FARMER',
  DISTRIBUTOR = 'DISTRIBUTOR',
  RETAILER = 'RETAILER',
  CONSUMER = 'CONSUMER', // Added for potential future use
}

export enum StageName {
  HARVESTED = 'HARVESTED',
  IN_TRANSIT = 'IN_TRANSIT',
  AT_DISTRIBUTOR = 'AT_DISTRIBUTOR',
  IN_TRANSIT_TO_RETAILER = 'IN_TRANSIT_TO_RETAILER',
  AT_RETAILER = 'AT_RETAILER',
  AVAILABLE_FOR_SALE = 'AVAILABLE_FOR_SALE',
  SOLD = 'SOLD'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface Stage {
  name: StageName;
  timestamp: string;
  actor: string; // e.g., 'Farmer John', 'Distributor XYZ'
  details: Record<string, any>;
  txHash: string;
}

export interface Batch {
  id: string;
  cropType: string;
  farmerId: string;
  farmerName: string;
  farmLocation: string;
  qrCodeUrl: string;
  currentStage: StageName;
  history: Stage[];
  iotSensorId: string;
}

export interface IoTData {
  timestamp: number;
  temperature: number;
  humidity: number;
}

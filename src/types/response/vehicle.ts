export interface vehicleDetailsI {
  currency: string;
  price: number;
  color: string;
  brand: string;
  manufactureYear: string;
  image: string;
  description: string;
}

export interface VehicleI {
  id: string;
  name: string;
  details: vehicleDetailsI;
}

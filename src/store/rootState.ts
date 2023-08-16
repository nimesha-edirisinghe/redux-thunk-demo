import { combineReducers } from 'redux';
import { IVehicle } from './vehicle/vehicleSlice';

import vehicleSlice from 'store/vehicle/vehicleSlice';
export interface IRootSlice {
  vehicles: IVehicle;
}

export const rootReducer = combineReducers({
  vehicles: vehicleSlice,
});

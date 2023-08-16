import { createAsyncThunk } from '@reduxjs/toolkit';
import { VehicleI } from 'types/response/vehicle';
import { vehicleApi } from 'api';

export interface GetVehiclesRequestPayload {
  selectedBrand: string;
}

export const getVehiclesRequest = createAsyncThunk(
  'vehicle/getVehiclesRequest',
  async (payload: GetVehiclesRequestPayload, thunkAPI) => {
    try {
      const { selectedBrand } = payload;
      const queryPram = {
        'details.brand': selectedBrand,
      };
      const response: VehicleI[] = await vehicleApi.getVehiclesRequest(
        selectedBrand?.length === 0 ? {} : queryPram
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

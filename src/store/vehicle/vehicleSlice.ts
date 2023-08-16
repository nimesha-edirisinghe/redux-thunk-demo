// vehicleSlice.ts
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getVehiclesRequest } from './vehicleThunks';
import { IRootSlice } from 'store/rootState';
import { VehicleI } from 'types/response/vehicle';
import { VehicleBidedItemsI } from 'types/vehicle';

export interface IVehicle {
  vehicleData: VehicleI[] | [];
  isLoading: boolean;
  selectedBrand: string | undefined;
  localScope: {
    drawer: boolean;
  };
  bidItems: VehicleBidedItemsI[];
}

export const VehicleSlice = createSlice({
  name: 'vehicle',
  initialState: {
    vehicleData: [],
    isLoading: false,
    selectedBrand: '',
    localScope: {
      drawer: false,
    },
    bidItems: [],
  } as IVehicle,
  reducers: {
    drawerOpenAction: (state) => {
      state.localScope.drawer = true;
    },
    drawerCloseAction: (state) => {
      state.localScope.drawer = false;
    },
    bidItemAction: (
      state,
      action: PayloadAction<{
        image: string;
        name: string;
        amount: string;
      }>
    ) => {
      state.bidItems.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVehiclesRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getVehiclesRequest.fulfilled,
        (state, action: PayloadAction<VehicleI[]>) => {
          state.vehicleData = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(getVehiclesRequest.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const vehicleSliceSelector = (state: IRootSlice) => state.vehicles;

export const { drawerOpenAction, drawerCloseAction, bidItemAction } =
  VehicleSlice.actions;

export default VehicleSlice.reducer;

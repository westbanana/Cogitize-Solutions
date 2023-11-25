"use client";

import type { PayloadAction } from '@reduxjs/toolkit';
import {createSlice} from "@reduxjs/toolkit";
import {IPositionData} from "@/shared/Position/ui/Position";
import {PositionSchema} from "@/shared/Position/model/types/PositionSchema";

const initialState: PositionSchema = {
  currentPosition: null,
};

export const positionSlice = createSlice({
  name: 'position',
  initialState,
  reducers: {
    selectPosition: (state, action: PayloadAction<IPositionData>) => {
      state.currentPosition = action.payload
    },
  },
});

export const { actions: positionActions } = positionSlice;

export const { reducer: positionReducer } = positionSlice;

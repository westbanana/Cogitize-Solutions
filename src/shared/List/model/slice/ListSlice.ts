"use client";

import type { PayloadAction } from '@reduxjs/toolkit';
import {ListSchema} from "@/shared/List/model/types/ListSchema";
import {createSlice} from "@reduxjs/toolkit";
import {IPositionData} from "@/shared/Position/ui/Position";

const initialState: ListSchema = {
  positions: [],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addPosition: (state, action: PayloadAction<IPositionData>) => {
      state.positions.push(action.payload)
    },
  },
});

export const { actions: listActions } = listSlice;

export const { reducer: listReducer } = listSlice;

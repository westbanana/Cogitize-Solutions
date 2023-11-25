"use client";

import type { PayloadAction } from '@reduxjs/toolkit';
import {ListSchema} from "@/shared/List/model/types/ListSchema";
import {createSlice} from "@reduxjs/toolkit";
import {IPositionData} from "@/shared/Position/ui/Position";
import {createUuid} from "@/helpers/uuid/createUuid";

const initialState: ListSchema = {
  positions: []
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addPosition: (state) => {
      state.positions.push({
        id: createUuid(),
        positionTitle: "Должность",
        sumPerHour: 10,
        otherInfo: "Новый",
        duties: null
      })
    },
  },
});

export const { actions: listActions } = listSlice;

export const { reducer: listReducer } = listSlice;

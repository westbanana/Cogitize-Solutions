"use client";

import type { PayloadAction } from '@reduxjs/toolkit';
import {ListSchema} from "@/shared/List/model/types/ListSchema";
import {createSlice} from "@reduxjs/toolkit";
import {IPositionData} from "@/shared/Position/ui/Position";
import {createUuid} from "@/helpers/uuid/createUuid";

// let savedList;
// if (typeof window !== 'undefined') {
//   savedList = localStorage.getItem('list');
// }
// const initialState: ListSchema = {
//   positions: savedList ? JSON.parse(savedList) : []
// };

const initialState: ListSchema = {
  positions: []
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    changePosition: (state, action: PayloadAction<IPositionData>) => {
      state.positions = state.positions.map((position) => {
        if (position.id === action.payload.id) {
          return action.payload
        } else {
          return position
        }
      })
    },
    addPosition: (state) => {
      state.positions.push({
        id: createUuid(),
        positionTitle: "Должность",
        position: state.positions.length,
        sumPerHour: 10,
        otherInfo: "Новый",
        duties: {
          trade: {
            sell: false,
            list: false,
            view: false,
          },
          production: {
            purchase: false,
            appoint: false,
          },
          disassembly: {
            duel: false,
            makeClaims: false
          },
          control: {
            appointPositions: false,
            kick: false
          }
        }
      })
    },
  },
});

export const { actions: listActions } = listSlice;

export const { reducer: listReducer } = listSlice;

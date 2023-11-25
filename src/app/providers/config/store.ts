"use client";

import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import {listReducer} from "@/shared/List/model/slice/ListSlice";
import {positionReducer} from "@/shared/Position/model/slice/PositionSlice";

export const createReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
  reducer: {
    list: listReducer,
    position: positionReducer
  },
  preloadedState: initialState,
});

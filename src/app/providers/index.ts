"use client"

import { StoreProvider } from './ui/StoreProvider';
import {createReduxStore} from "@/app/providers/config/store";
import {StateSchema} from "@/app/providers/config/StateSchema";

export {
  StoreProvider,
  createReduxStore
};
export type { StateSchema };


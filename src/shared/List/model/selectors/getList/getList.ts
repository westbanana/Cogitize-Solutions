"use client";

import {StateSchema} from "@/app/providers/config/StateSchema";

export const getList = (state:StateSchema) => state.list.positions;

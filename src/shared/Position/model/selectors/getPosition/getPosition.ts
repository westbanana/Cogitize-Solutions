"use client";

import {StateSchema} from "@/app/providers/config/StateSchema";

export const getPosition = (state:StateSchema) => state.position.currentPosition;

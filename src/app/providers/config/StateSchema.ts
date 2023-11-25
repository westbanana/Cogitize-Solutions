"use client"

import {ListSchema} from "@/shared/List/model/types/ListSchema";
import {PositionSchema} from "@/shared/Position/model/types/PositionSchema";

export interface StateSchema {
  list: ListSchema,
  position: PositionSchema
}

"use client";

import cls from "./Position.module.scss";
import React, {FC} from "react";
import DndHolder from "../../../assets/dndHolder.svg";
import {useDispatch, useSelector} from "react-redux";
import {getList} from "@/shared/List/model/selectors/getList/getList";
import {getPosition} from "@/shared/Position/model/selectors/getPosition/getPosition";
import {positionActions} from "@/shared/Position/model/slice/PositionSlice";
import {Draggable} from "react-beautiful-dnd";

export interface  IDuties {
  trade: {
    sell: boolean,
    list: boolean,
    view: boolean,
  },
  production: {
    purchase: boolean,
    appoint: boolean,
  },
  disassembly: {
    duel: boolean,
    makeClaims: boolean
  },
  control: {
    appointPositions: boolean,
    kick: boolean
  }
}

export interface IPositionData {
  positionTitle: string,
  sumPerHour: number,
  otherInfo: string,
  id: string,
  duties: IDuties | null,
  position: number
}

interface PositionProps {
  positionData: IPositionData,
  index: number
}

export const Position: FC<PositionProps> = ({positionData, index}) => {
  const {positionTitle, sumPerHour, otherInfo} = positionData
  
  const dispatch = useDispatch()
  const position = useSelector(getPosition)
  const selectPosition = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(positionActions.selectPosition(positionData))
    console.log(positionData.position)
  }
  
  return (
    <Draggable draggableId={positionData.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`
            ${cls.mainContainer}
            ${position?.id === positionData?.id && cls.selectedPosition}
          `}
          onClick={selectPosition}
        >
          <div className={cls.dndHolder}>
            <DndHolder/>
          </div>
          <div className={cls.infoContainer}>
            <div className={cls.upperInfoBlock}>
              <span className={cls.positionTitle}>{positionTitle}</span>
              <span className={cls.positionSumPerHour}>
                <span className={cls.sum}>${sumPerHour}</span>
                <span className={cls.hour}>/час</span>
              </span>
            </div>
            <div className={cls.lowerInfoBlock}>
              <span className={cls.otherInfo}>{otherInfo}</span>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};
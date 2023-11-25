"use client";

import cls from "./Position.module.scss";
import React, {FC} from "react";
import DndHolder from "../../../assets/dndHolder.svg";
import {useDispatch, useSelector} from "react-redux";
import {getList} from "@/shared/List/model/selectors/getList/getList";
import {getPosition} from "@/shared/Position/model/selectors/getPosition/getPosition";
import {positionActions} from "@/shared/Position/model/slice/PositionSlice";
export interface IPositionData {
  positionTitle: string,
  sumPerHour: number,
  otherInfo: string,
  id: number
}

interface PositionProps {
  positionData: IPositionData
}

export const Position: FC<PositionProps> = ({positionData}) => {
  const {positionTitle, sumPerHour, otherInfo} = positionData
  
  const dispatch = useDispatch()
  const position = useSelector(getPosition)
  const selectPosition = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(positionActions.selectPosition(positionData))
  }
  return (
    <div
      className={cls.mainContainer}
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
  );
};
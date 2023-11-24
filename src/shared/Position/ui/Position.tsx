import cls from "./Position.module.scss";
import {FC} from "react";
import DndHolder from "../../../assets/dndHolder.svg";

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
  
  return (
    <div className={cls.mainContainer}>
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
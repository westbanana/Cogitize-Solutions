import cls from "./List.module.scss";
import {IPositionData, Position} from "@/shared/Position/ui/Position";
import {FC} from "react";
import {Button} from "@mui/material";
interface ListProps {
  items: IPositionData[]
}

export const List: FC<ListProps> = ({items}) => {
  return (
    <div className={cls.mainContainer}>
      <div className={cls.List}>
        {items.map(item => (
          <Position key={item.id} positionData={item} />
        ))}
      </div>
      <Button/>
    </div>
  );
};
import cls from "./List.module.scss";
import {IPositionData, Position} from "@/shared/Position/ui/Position";
import {FC} from "react";
import {Button} from "@mui/material";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
interface ListProps {
  items: IPositionData[]
}

export const List: FC<ListProps> = ({items}) => {
  // Функция для обработки конца перетаскивания
  const onDragEnd = (result:any) => {
    console.log(result)
  };
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="positions">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={cls.mainContainer}
          >
            <div className={cls.List}>
              {items.map((item, index) => (
                <Position index={index} key={item.id} positionData={item} />
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
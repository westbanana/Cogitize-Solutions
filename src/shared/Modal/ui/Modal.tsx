'use client'
import {SyntheticEvent, useState} from "react";
import {Box, Button, Tab, Tabs} from "@mui/material";

import cls from "./Modal.module.scss";
import {IPositionData, Position} from "@/shared/Position/ui/Position";
import {List} from "@/shared/List";
import {Block} from "@/shared/Block";
import {Input} from "@/shared/Input";
import {MultiBlock} from "@/shared/MultiBlock";
import {PositionForm} from "@/shared/PositionForm";
interface ModalProps {
  className?: string
}

export const Modal = (props: ModalProps) => {
  const [value, setValue] = useState(0);
  
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  const positionsArray: IPositionData[] = Array.from({length: 10}, (_, i) => ({
    id: i+1,
    positionTitle: `Position ${i+1}`,
    sumPerHour: 50 * (i+1),
    otherInfo: `от ${10 + i} lvl`
  }));
  console.log(value)
  return (
    <div className={cls.mainContainer}>
      <div className={cls.tabsContainer}>
        <Box>
          <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab className={cls.Tab} label="Иерархия" />
            <Tab className={cls.Tab} label="Должности" />
            <Tab className={cls.Tab} label="Список персонала" />
            <Tab className={cls.Tab} label="Наборы экипировки" />
          </Tabs>
        </Box>
        {value === 1 && (
          <div className={cls.tabContent}>
            <div className={cls.leftSide}>List</div>
            <div className={cls.rightSide}>
              <Block blockTitle="Название">
                <Input />
              </Block>
              <MultiBlock title="Обязаности">
                <PositionForm />
              </MultiBlock>
              <Button className={cls.SaveButton}>Сохранить</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
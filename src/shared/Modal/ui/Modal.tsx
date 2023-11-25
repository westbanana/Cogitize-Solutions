'use client'
import {SyntheticEvent, useState} from "react";
import {Box, Button, Tab, Tabs} from "@mui/material";

import cls from "./Modal.module.scss";
import {List} from "@/shared/List";
import {Block} from "@/shared/Block";
import {Input} from "@/shared/Input";
import {MultiBlock} from "@/shared/MultiBlock";
import {PositionForm} from "@/shared/PositionForm";
import {useDispatch, useSelector} from "react-redux";
import {getList} from "@/shared/List/model/selectors/getList/getList";
import {getPosition} from "@/shared/Position/model/selectors/getPosition/getPosition";
import {listActions} from "@/shared/List/model/slice/ListSlice";
interface ModalProps {
  className?: string
}

export const Modal = (props: ModalProps) => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch()
  const selectedPosition = useSelector(getPosition)
  const positionList = useSelector(getList)
  console.log(positionList)
  const addNewPosition = () => {
    dispatch(listActions.addPosition())
  }
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
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
            <div className={cls.leftSide}>
              <List items={positionList} />
              <Button
                className={cls.SaveButton}
                onClick={addNewPosition}
              >
                Создать новую должность
              </Button>
            </div>
              <div className={cls.rightSide}>
            {selectedPosition && (
              <>
                <Block blockTitle="Название">
                  <Input defaultValue={selectedPosition.positionTitle}/>
                </Block>
                <MultiBlock title="Обязаности">
                  <PositionForm currentPositionData={selectedPosition}/>
                </MultiBlock>
                <Button className={cls.SaveButton}>Сохранить</Button>
              </>
            )}
              </div>
          </div>
        )}
      </div>
    </div>
  );
};
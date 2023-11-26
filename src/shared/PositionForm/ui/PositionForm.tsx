import cls from "./PositionForm.module.scss";
import { useFormik } from "formik";
import {FC} from "react";
import {IPositionData} from "@/shared/Position/ui/Position";
import {MultiBlock} from "@/shared/MultiBlock";
import {Block} from "@/shared/Block";
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {listActions} from "@/shared/List/model/slice/ListSlice";

interface PositionFormProps {
  currentPositionData: IPositionData
}

export const PositionForm: FC<PositionFormProps> = ({currentPositionData}) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: currentPositionData,
    onSubmit: values => {
      dispatch(listActions.changePosition(values))
    },
    enableReinitialize: true
  });
  return (
      <form className={cls.form} onSubmit={formik.handleSubmit}>
        <Block blockTitle="Название">
          <Block blockTitle="Название">
            <input
              className={cls.positionTitle}
              name="positionTitle"
              value={formik.values.positionTitle}
              onChange={formik.handleChange}
              defaultValue={formik.values.positionTitle}
            />
          </Block>
        </Block>
        <MultiBlock title="Обязаности">
          <div className={cls.duties}>
            <div className={cls.container}>
              <span className={cls.title}>Торговля</span>
              <label className={cls.label}>
                <input type="checkbox" className={cls.checkbox} name="duties.trade.sell" checked={formik.values.duties?.trade.sell} onChange={formik.handleChange} />
                Продавать продукт
              </label>
              <label className={cls.label}>
                <input type="checkbox" className={cls.checkbox} name="duties.trade.list" checked={formik.values.duties?.trade.list} onChange={formik.handleChange} />
                Выставлять цены
              </label>
              <label className={cls.label}>
                <input type="checkbox" className={cls.checkbox} name="duties.trade.view" checked={formik.values.duties?.trade.view} onChange={formik.handleChange} />
                Смотреть аналитику
              </label>
            </div>
            
            <div className={cls.container}>
              <span className={cls.title}>Производство</span>
              <label className={cls.label}>
                <input type="checkbox" className={cls.checkbox} name="duties.production.purchase" checked={formik.values.duties?.production.purchase} onChange={formik.handleChange} />
                Закупать сырье
              </label>
              <label className={cls.label}>
                <input type="checkbox" className={cls.checkbox} name="duties.production.appoint" checked={formik.values.duties?.production.appoint} onChange={formik.handleChange} />
                Назначать рабочих
              </label>
            </div>
            
            <div className={cls.container}>
              <span className={cls.title}>Разборки</span>
              <label className={cls.label}>
                <input type="checkbox" className={cls.checkbox} name="duties.disassembly.duel" checked={formik.values.duties?.disassembly.duel} onChange={formik.handleChange} />
                Дуель
              </label>
              <label className={cls.label}>
                <input type="checkbox" className={cls.checkbox} name="duties.disassembly.makeClaims" checked={formik.values.duties?.disassembly.makeClaims} onChange={formik.handleChange} />
                Выставлять претензии
              </label>
            </div>
            
            <div className={cls.container}>
              <span className={cls.title}>Управление</span>
              <label className={cls.label}>
                <input type="checkbox" className={cls.checkbox} name="duties.control.appointPositions" checked={formik.values.duties?.control.appointPositions} onChange={formik.handleChange} />
                Назначать должности
              </label>
              <label className={cls.label}>
                <input type="checkbox" className={cls.checkbox} name="duties.control.kick" checked={formik.values.duties?.control.kick} onChange={formik.handleChange} />
                Выгонять из банды
              </label>
            </div>
          </div>
        </MultiBlock>
        <Button type="submit" className={cls.SaveButton}>Сохранить</Button>
      </form>
  );
};

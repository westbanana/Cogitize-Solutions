import cls from "./PositionForm.module.scss";
import { useFormik } from "formik";
import { FC } from "react";
import {IPositionData} from "@/shared/Position/ui/Position";

interface PositionFormProps {
  currentPositionData: IPositionData | null
}

export const PositionForm: FC<PositionFormProps> = ({currentPositionData}) => {
  const formik = useFormik({
    initialValues: currentPositionData?.duties || {
    trade: {
      sell: false,
      list: false,
      view: false,
    },
    production: {
      purchase: false,
      appoint: false,
    },
    disassembly: {
      duel: false,
      makeClaims: false
    },
    control: {
      appointPositions: false,
      kick: false
    }
  },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    enableReinitialize: true
  });
  return (
      <form className={cls.form} onSubmit={formik.handleSubmit}>
        <div className={cls.container}>
          <span className={cls.title}>Торговля</span>
          <label>
            <input type="checkbox" name="trade.sell" checked={formik.values.trade.sell} onChange={formik.handleChange} />
            Продавать продукт
          </label>
          <label>
            <input type="checkbox" name="trade.list" checked={formik.values.trade.list} onChange={formik.handleChange} />
            Выставлять цены
          </label>
          <label>
            <input type="checkbox" name="trade.view" checked={formik.values.trade.view} onChange={formik.handleChange} />
            Смотреть аналитику
          </label>
        </div>
        
        <div className={cls.container}>
          <span className={cls.title}>Производство</span>
          <label>
            <input type="checkbox" name="production.purchase" checked={formik.values.production.purchase} onChange={formik.handleChange} />
            Закупать сырье
          </label>
          <label>
            <input type="checkbox" name="production.appoint" checked={formik.values.production.appoint} onChange={formik.handleChange} />
            Назначать рабочих
          </label>
        </div>
        
        <div className={cls.container}>
          <span className={cls.title}>Разборки</span>
          <label>
            <input type="checkbox" name="disassembly.duel" checked={formik.values.disassembly.duel} onChange={formik.handleChange} />
            Дуель
          </label>
          <label>
            <input type="checkbox" name="disassembly.makeClaims" checked={formik.values.disassembly.makeClaims} onChange={formik.handleChange} />
            Выставлять претензии
          </label>
        </div>
        
        <div className={cls.container}>
          <span className={cls.title}>Управление</span>
          <label>
            <input type="checkbox" name="control.appointPositions" checked={formik.values.control.appointPositions} onChange={formik.handleChange} />
            Назначать должности
          </label>
          <label>
            <input type="checkbox" name="control.kick" checked={formik.values.control.kick} onChange={formik.handleChange} />
            Выгонять из банды
          </label>
        </div>
        {/*<button type="submit">Отправить</button>*/}
      </form>
  );
};

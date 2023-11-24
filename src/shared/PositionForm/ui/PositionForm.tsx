import cls from "./PositionForm.module.scss";
import { useFormik } from "formik";
import { FC } from "react";

interface PositionFormProps {
}

export const PositionForm: FC<PositionFormProps> = ({}) => {
  const formik = useFormik({
    initialValues: {
      trade: '', // Значення 'list' відповідає значенню радіокнопки 'Выставить'
      production: '', // Значення 'purchase' відповідає значенню радіокнопки 'Закупить'
      disassembly: '',
      control: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  return (
      <form className={cls.form} onSubmit={formik.handleSubmit}>
        <div className={cls.container}>
          <span className={cls.title}>Торговля</span>
          <label>
            <input type="radio" {...formik.getFieldProps('trade')} value="sell" checked={formik.values.trade === 'sell'} />
            Продавать продукт
          </label>
          <label>
            <input type="radio" {...formik.getFieldProps('trade')} value="list" checked={formik.values.trade === 'list'} />
            Выставлять цены
          </label>
          <label>
            <input type="radio" {...formik.getFieldProps('trade')} value="view" checked={formik.values.trade === 'view'} />
            Смотреть аналитику
          </label>
        </div>
        
        <div className={cls.container}>
          <span className={cls.title}>Производство</span>
          <label>
            <input type="radio" {...formik.getFieldProps('production')} value="purchase" checked={formik.values.production === 'purchase'} />
            Закупать сырье
          </label>
          <label>
            <input type="radio" {...formik.getFieldProps('production')} value="appoint" checked={formik.values.production === 'appoint'} />
            Назначать рабочих
          </label>
        </div>
        
        <div className={cls.container}>
          <span className={cls.title}>Разборки</span>
          <label>
            <input type="radio" {...formik.getFieldProps('disassembly')} value="duel" checked={formik.values.disassembly === 'duel'} />
            Дуель
          </label>
          <label>
            <input type="radio" {...formik.getFieldProps('disassembly')} value="makeClaims" checked={formik.values.disassembly === 'makeClaims'} />
            Выставлять претензии
          </label>
        </div>
        
        <div className={cls.container}>
          <span className={cls.title}>Управление</span>
          <label>
            <input type="radio" {...formik.getFieldProps('control')} value="appointPositions" checked={formik.values.control === 'appointPositions'} />
            Назначать должности
          </label>
          <label>
            <input type="radio" {...formik.getFieldProps('control')} value="kick" checked={formik.values.control === 'kick'} />
            Выгонять из банды
          </label>
        </div>
        {/*<button type="submit">Отправить</button>*/}
      </form>
  );
};

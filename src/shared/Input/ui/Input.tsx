import cls from "./Input.module.scss";
import {ChangeEvent, FC, useEffect, useState} from "react";
import {number} from "prop-types";
import {set} from "immutable";
interface InputProps {
  placeholder?: string,
  defaultValue?: string,
  name:string,
  onChange: () => void
}

export const Input: FC<InputProps> = ({defaultValue = '', name, placeholder, onChange}) => {
  const [value, setValue] = useState<string>(defaultValue)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    if (target) {
      setValue(target.value)
    }
  }
  
  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])
  
  return (
    <input
      name={name}
      className={cls.Input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
    />
  );
};
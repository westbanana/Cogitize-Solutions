import cls from "./MultiBlock.module.scss";
import {FC, ReactNode} from "react";
interface MultiBlockProps {
  children: ReactNode,
  title: string
}

export const MultiBlock: FC<MultiBlockProps> = ({children, title}) => {
  return (
    <div className={cls.mainContainer}>
      <div className={cls.titleContainer}>
        <span className={cls.title}>{title}</span>
      </div>
      <div className={cls.contentContainer}>
        {children}
      </div>
    </div>
  );
};
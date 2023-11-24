import cls from "./Block.module.scss";
import {FC, ReactNode} from "react";
interface BlockProps {
  blockTitle: string,
  children: ReactNode
}

export const Block:FC<BlockProps> = ({blockTitle, children}) => {
  return (
    <div className={cls.mainContainer}>
      <span className={cls.title}>
        {blockTitle}
      </span>
      {children}
    </div>
  );
};
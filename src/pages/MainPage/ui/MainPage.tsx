import cls from "./MainPage.module.scss";
import {Modal} from "@/shared/Modal";
interface MainPageProps {
  className?: string
}

export const MainPage = (props: MainPageProps) => {
  return (
    <div className={cls.mainContainer}>
      <Modal />
    </div>
  );
};
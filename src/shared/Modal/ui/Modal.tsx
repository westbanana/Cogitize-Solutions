import cls from "./Modal.module.scss";
interface ModalProps {
  className?: string
}

export const Modal = (props: ModalProps) => {
  return (
    <div className={cls.mainContainer}>
    </div>
  );
};
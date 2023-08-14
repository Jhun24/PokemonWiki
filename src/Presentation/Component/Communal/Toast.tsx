import cn from 'classnames';
import * as T from '@radix-ui/react-toast';
import { ToastProps } from '@/Presentation/Component/type';
import style from '@/Presentation/Component/style/Toast.module.css';

const Toast = ({type, title, open, setOpen}: ToastProps) => {
  return(
    <>
      <T.Root className={cn(style.ToastRoot, {[style.ToastError]: type === "error"}, {[style.ToastInfo]: type === "info"})} open={open} onOpenChange={setOpen}>
        <T.Title className={style.ToastTitle}>{title}</T.Title>
      </T.Root>
      <T.Viewport className={style.ToastViewport}/>
    </>
  );
}

export default Toast;
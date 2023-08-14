import { ButtonProps } from '@/Presentation/Component/type';
import style from '@/Presentation/Component/style/Button.module.css';

const Button = ({ text, onSubmit }: ButtonProps) => {
  return (
    <div className={style.Button} onClick={onSubmit}>
      {text}
    </div>
  );
};

export default Button;

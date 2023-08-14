import { InputProps } from '@/Presentation/Component/type';

import style from '@/Presentation/Component/style/InputBox.module.css';

const InputBox = ({ placeholder, onChangeHandler }: InputProps) => {
  return (
    <div className={style.LoginInputBox}>
      <input
        className={style.LoginInput}
        type="text"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default InputBox;

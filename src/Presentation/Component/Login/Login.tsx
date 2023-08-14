import { useEffect, useState, ChangeEventHandler } from 'react';
import cn from 'classnames';
import { AuthViewModel } from '@/Presentation/ViewModel';
import { Button, InputBox, Toast } from '@/Presentation/Component';
import { useAppDispatch } from '@/Presentation/Redux/hook';
import { setUser } from '@/Presentation/Redux/reducer/user';

import style from '@/Presentation/Component/style/Login.module.css';

const Login = () => {
  const authViewModel = new AuthViewModel();
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {}, []);

  const onUserNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async () => {
    try {
      const res = await authViewModel.login({ username, password });
      dispatch(setUser(res));
    } catch (error) {
      setOpen(true);
    }
  };
  return (
    <>
      <div className={style.Login}>
        <InputBox
          placeholder="이름을 입력해주세요"
          onChangeHandler={onUserNameChange}
        />
        <InputBox
          placeholder="비밀번호를 입력해주세요"
          onChangeHandler={onPasswordChange}
        />
        <Button text="로그인" onSubmit={onSubmit} />
      </div>
      <Toast type="error" title='정확한 회원정보를 입력해주세요' content='asfd' open={open} setOpen={setOpen}/>
    </>
  );
};

export default Login;

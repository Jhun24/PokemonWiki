import { useState, ChangeEventHandler } from 'react';

import style from '@/Presentation/Component/style/Login.module.css';

import { Button, InputBox } from '@/Presentation/Component';
const Login = () => {
  const [username, setUsername] = useState('');
  const [passwword, setPassword] = useState('');

  const onUserNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    const data = {
      username: username,
      passwword: passwword,
    };
    return data;
  };
  return (
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
  );
};

export default Login;

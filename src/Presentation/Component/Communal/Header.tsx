import { useEffect, MouseEventHandler } from 'react';
import { useRouter } from 'next/router'
import { useAppSelector, useAppDispatch } from '@/Presentation/Redux/hook';
import { setUser } from '@/Presentation/Redux/reducer/user';
import { AuthViewModel } from '@/Presentation/ViewModel';
import * as Popover from '@radix-ui/react-popover';
import cn from 'classnames';
import { Cross2Icon } from '@radix-ui/react-icons';

import style from '@/Presentation/Component/style/Header.module.css';

const Header = () => {
  const authViewModel = new AuthViewModel();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector(state => state.user);

  const isUserAuth = async () => {
    const res = await authViewModel.getCredential();
    if(res === null) router.push('/');
    else {
      if(user.email === ""){
        dispatch(setUser({...res}));
      }
    }
  }

  const handleFavorite = () => {
    router.push("/favorite");
  }

  const handleLogout = async () => {
    await authViewModel.logout();
    router.push("/");
  }

  useEffect(() => {
    isUserAuth();
  }, [])

  return (
    <div className={style.Header}>
      <Popover.Root>
        <Popover.Trigger asChild>
          <img src={user.image} alt="profileImage" className={style.HeaderImage} />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className={style.PopoverContent} sideOffset={10}>
            <div className={style.PopoverInfo}>
              <h2>유저 정보</h2>
              <p>이름:  {user.username}</p>
              <p>이메일:  {user.email}</p>
              <div className={style.PopoverBtnBox}>
                <div className={cn(style.PopoverFavorite, style.PopoverBtn)} onClick={handleFavorite}>보관함</div>
                <div className={cn(style.PopoverLogout, style.PopoverBtn)} onClick={handleLogout}>로그아웃</div>
              </div>
            </div>
            <Popover.Close className={style.PopoverClose} aria-label="Close">
              <Cross2Icon />
            </Popover.Close>
            <Popover.Arrow className={style.PopoverArrow} />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

export default Header;
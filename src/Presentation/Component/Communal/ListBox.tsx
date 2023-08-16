import { ListBoxType } from '@/Presentation/Component/type';
import style from '@/Presentation/Component/style/ListBox.module.css';

const ListBox = ({children}: ListBoxType ) => {
  return(
    <div className={style.ListBox}>
      {children}
    </div>
  );
};

export default ListBox;
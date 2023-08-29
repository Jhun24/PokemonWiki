import { DetailItemProps } from '@/Presentation/Component/type';
import style from '@/Presentation/Component/style/Detail.module.css';

const DetailItem = ({item}: DetailItemProps) => {
  return(
    <>
      <h2 className={style.name}>{item.name}</h2>
    </>
  ); 
};

export default DetailItem;
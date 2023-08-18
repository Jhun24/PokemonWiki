import { ListContentType } from "@/Presentation/Component/type";
import cn from 'classnames';

import style from '@/Presentation/Component/style/List.module.css';

const List = ({id, image, name, type, onClick}: ListContentType) => {
  return (
    <div className={cn(style.ListContent, style.BounceIn)}>
      <h2>{id}</h2>
      <p>{name}</p>
      <p>{""}</p>
      <img src={image} />
    </div>
  );
};

export default List;
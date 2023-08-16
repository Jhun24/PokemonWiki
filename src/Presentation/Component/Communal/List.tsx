import { ListContentType } from "@/Presentation/Component/type";

import style from '@/Presentation/Component/style/List.module.css';

const List = ({id, image, name, type, onClick}: ListContentType) => {
  return (
    <div className={style.ListContent}>
      <h2>{id}</h2>
      <p>{name}</p>
      <p>{""}</p>
      <img src={image} />
    </div>
  );
};

export default List;
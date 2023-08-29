import { ListContentType } from "@/Presentation/Component/type";
import cn from 'classnames';

import style from '@/Presentation/Component/style/List.module.css';

const List = ({id, image, name, type, category, onClick}: ListContentType) => {
  const checkType = () => {
    if(!!type){
      return type.map((d) => {
        return `${d.type.name}`;
      })
    }
  }

  const beautyfi = (d: string[] | undefined) => {
    if(typeof d === "undefined") return;
    return JSON.stringify(d).replace("[", "").replace("]", "").replaceAll('"', "").replaceAll(',', ', ');
  }
  return (
    <div className={cn(style.ListContent, style.BounceIn)} onClick={onClick}>
      <h2>{id}</h2>
      <p>{name}</p>
      <p>{(!!type)? (beautyfi(checkType())): (category?.name)}</p>
      <img src={image} />
    </div>
  );
};

export default List;
import { ListContentType } from "@/Presentation/Component/type";
import cn from 'classnames';

import style from '@/Presentation/Component/style/List.module.css';

const List = ({id, image, name, type, category, onClick}: ListContentType) => {
  const checkData = () => {
    if(!!type){
      return type.map((d) => {
        return `${d.type.name}`;
      })
    }
    if(!!category){
      
    }
  }
  const beautyfi = (d: string[] | undefined) => {
    if(typeof d === "undefined") return;
    return JSON.stringify(d).replace("[", "").replace("]", "").replaceAll('"', "").replaceAll(',', ', ');
  }
  return (
    <div className={cn(style.ListContent, style.BounceIn)}>
      <h2>{id}</h2>
      <p>{name}</p>
      <p>{beautyfi(checkData())}</p>
      <img src={image} />
    </div>
  );
};

export default List;
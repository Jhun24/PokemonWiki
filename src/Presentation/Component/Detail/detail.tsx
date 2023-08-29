import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/Presentation/Redux/hook';
import DetailPokemon from './pokemon';
import DetailItem from './item';
import { PokemonListType, ItemListType } from '../type';
import { DataViewModel } from '@/Presentation/ViewModel';
import style from '@/Presentation/Component/style/Detail.module.css';
const Detail = () => {
  const [pokemon, setPokemon] = useState<PokemonListType>();
  const [item, setItem] = useState<ItemListType>();
  const { type, id } = useAppSelector((state) => state.detail);
  const dataViewModel = new DataViewModel();
  const router = useRouter();

  const getPokemon = async () => {
    const res = await dataViewModel.getPokemon({id});
    setPokemon(res);
  }
  
  const getItem = async () => {
    const res = await dataViewModel.getItem({id});
    setItem(res);
  }

  const renderData = () => {
    if(type === "pokemon" && !!pokemon){
      return <DetailPokemon pokemon={pokemon}/>;
    }
    else if (type === "item" && !!item){
      return <DetailItem item={item}/>;
    }
    return <></>;
  }

  useEffect(() => {
    if(type === "" || id === 0){
      router.back();
    }
    if(type === "pokemon") getPokemon();
    if(type === "item") getItem();
  }, []);

  return(
    <div className={style.Detail}>
      {renderData()}
    </div>
  );
};

export default Detail;
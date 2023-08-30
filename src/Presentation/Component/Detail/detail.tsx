import { useEffect, useState, CSSProperties } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/Presentation/Redux/hook';
import DetailPokemon from './pokemon';
import DetailItem from './item';
import { PokemonListType, ItemListType } from '../type';
import { DataViewModel } from '@/Presentation/ViewModel';
import ScaleLoader from "react-spinners/ScaleLoader";

import style from '@/Presentation/Component/style/Detail.module.css';

const Detail = () => {
  const [pokemon, setPokemon] = useState<PokemonListType>();
  const [item, setItem] = useState<ItemListType>();
  const [isLoading, setIsLoading] = useState(true);
  const { type, id } = useAppSelector((state) => state.detail);
  const { username } = useAppSelector((state) => state.user);
  const dataViewModel = new DataViewModel();
  const router = useRouter();
  const override: CSSProperties = {
    width: "150px",
    height: "150px",
    padding: "10px",
    borderColor: "#A9A9A9",
  };

  const getPokemon = async () => {
    const res = await dataViewModel.getPokemon({id});
    setPokemon(res);
    setIsLoading(false);
  }
  
  const getItem = async () => {
    const res = await dataViewModel.getItem({id});
    setItem(res);
    setIsLoading(false);
  }

  const renderData = () => {
    if(type === "pokemon" && !!pokemon){
      return <DetailPokemon username={username} pokemon={pokemon}/>;
    }
    else if (type === "item" && !!item){
      return <DetailItem username={username} item={item}/>;
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
      <ScaleLoader
        color={"#A9A9A9"}
        loading={isLoading}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Detail;
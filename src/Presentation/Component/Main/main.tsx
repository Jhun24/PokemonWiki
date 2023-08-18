import { useState, useEffect, MouseEventHandler, UIEventHandler, useRef, RefObject, CSSProperties} from 'react';
import { List, ListBox } from '@/Presentation/Component';
import { MainType, PokemonListType, ItemListType } from '@/Presentation/Component/type';
import { DataViewModel } from '@/Presentation/ViewModel';
import ScaleLoader from "react-spinners/ScaleLoader";

import style from '@/Presentation/Component/style/Main.module.css';

const Main = ({type}: MainType) => {

  const [pokemonData, setPokemonData] = useState<PokemonListType[]>([]);
  const [itemData, setItemData] = useState<ItemListType[]>([]);
  const [offset, setOffset] = useState(0);
  const [needFetch, setNeedFetch] = useState(false);
  const dataViewModel = new DataViewModel();
  const scrollRef = useRef<HTMLDivElement>();
  const LIMIT = 5;
  const override: CSSProperties = {
    width: "30px",
    height: "30px",
    padding: "10px",
    borderColor: "#A9A9A9",
  };

  const getPokemonData = async () => {
    const res: PokemonListType[] = await dataViewModel.getPokemonData({offset});
    setPokemonData(pokemonData.concat(res));
    setOffset(offset + LIMIT);
  };

  const getItemList = async () => {

    setOffset(offset + LIMIT);
  };

  const onListItemClick: MouseEventHandler<HTMLDivElement> = (e) => {

  }

  const renderPokemon = (data: PokemonListType[]): JSX.Element[] => {
    const res =  data.map((element) => {
      return <List key={element.id} id={element.id} image={element.sprites.front_default} name={element.name} type={element.types} onClick={onListItemClick}/>
    });
    return res;
  }

  const handleScroll: UIEventHandler<HTMLDivElement> = () => {
    if(scrollRef.current){
      const listNowHeight = scrollRef.current.scrollTop;
      const listHeight = scrollRef.current.scrollHeight;
      if((listHeight - 400) <= listNowHeight){
        setNeedFetch(true);
      }
    }
  };

  useEffect(() => {
    if(type === "pokemon"){
      getPokemonData();
    }
  }, []);

  useEffect(() => {
    if(offset < 20){
      setNeedFetch(true);
    }
  }, [offset])

  useEffect(() => {
    if(needFetch){
      getPokemonData().then(() => setNeedFetch(false));
    }
  }, [needFetch]);

  return(
    <div className={style.List} onScroll={handleScroll} ref={scrollRef as RefObject<HTMLDivElement>}>
      <ListBox>
          {renderPokemon(pokemonData)}
          <ScaleLoader
            color={"#A9A9A9"}
            loading={needFetch}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
      </ListBox>
    </div>
  );
};

export default Main;

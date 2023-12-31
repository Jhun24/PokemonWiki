import { useState, useEffect, UIEventHandler, useRef, RefObject, CSSProperties } from 'react';
import { useRouter } from 'next/router';
import { Select } from '@radix-ui/themes';
import { List, ListBox } from '@/Presentation/Component';
import { useAppDispatch } from '@/Presentation/Redux/hook';
import { PokemonListType, ItemListType } from '@/Presentation/Component/type';
import { DataViewModel } from '@/Presentation/ViewModel';
import { setDetail } from '@/Presentation/Redux/reducer/detail';
import ScaleLoader from "react-spinners/ScaleLoader";

import style from '@/Presentation/Component/style/Main.module.css';

const Main = () => {

  const [pokemonData, setPokemonData] = useState<PokemonListType[]>([]);
  const [itemData, setItemData] = useState<ItemListType[]>([]);
  const [pokemonOffset, setPokemonOffset] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [type, setType] = useState<"favorite" | "pokemon" | "item">("pokemon");
  const [needFetch, setNeedFetch] = useState(false);
  const dataViewModel = new DataViewModel();
  const scrollRef = useRef<HTMLDivElement>();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const LIMIT = 5;
  const override: CSSProperties = {
    width: "30px",
    height: "30px",
    padding: "10px",
    borderColor: "#A9A9A9",
  };

  const getPokemonData = async () => {
    const res: PokemonListType[] = await dataViewModel.getPokemonData({offset: pokemonOffset});
    setPokemonData(pokemonData.concat(res));
  };

  const getItemList = async () => {
    const res: ItemListType[] = await dataViewModel.getItemData({offset: itemOffset});
    setItemData(itemData.concat(res));
  };

  const onListItemClick = (key: number, type: string): void => {
    dispatch(setDetail({id: key, type}));
    router.push("/detail");
  }

  const renderItem = (data: ItemListType[]): JSX.Element[] => {
    const res =  data.map((element) => {
      return <List key={element.id} id={element.id} image={element.sprites.default} name={element.name} category={element.category} onClick={(e) => onListItemClick(element.id, type)}/>
    });
    return res;
  }

  const renderPokemon = (data: PokemonListType[]): JSX.Element[] => {
    const res =  data.map((element) => {
      return <List key={element.id} id={element.id} image={element.sprites.front_default} name={element.name} type={element.types} onClick={(e) => onListItemClick(element.id, type)}/>
    });
    return res;
  }

  const handleScroll: UIEventHandler<HTMLDivElement> = () => {
    if(scrollRef.current){
      const listNowHeight = scrollRef.current.scrollTop;
      const listHeight = scrollRef.current.scrollHeight;
      if((listHeight - 1200) <= listNowHeight){
        console.log("hi");
        setNeedFetch(true);
      }
    }
  };

  const handleSelect = (value: "pokemon" | "item"): void => {
    setNeedFetch(false);
    setType(value);
    setNeedFetch(true);
  }

  useEffect(() => {
    if(type === "pokemon"){
      getPokemonData();
    }
    else if(type === "item"){
      getItemList();
    }
  }, []);

  useEffect(() => {
    if(type === "pokemon" && pokemonOffset < 50) setNeedFetch(true);
    if(type === "item" && itemOffset < 50) setNeedFetch(true);
  }, [pokemonOffset, itemOffset])

  useEffect(() => {
    if(needFetch){
      if(type === "pokemon"){
        getPokemonData().then(() => {
          setNeedFetch(false)
          setPokemonOffset(pokemonOffset + LIMIT);
        });
      }
      else if(type === "item"){
        getItemList().then(() => {
          setNeedFetch(false);
          setItemOffset(itemOffset + LIMIT);
        });
      }
    }
  }, [needFetch]);

  return(
    <>
      <div className={style.SelectBox}>
        <Select.Root onValueChange={handleSelect}>
          <Select.Trigger placeholder={type} />
          <Select.Content>
            <Select.Group>
              <Select.Label>종류</Select.Label>
              <Select.Item value="pokemon">Pokemon</Select.Item>
              <Select.Item value="item">Item</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </div>
      <div className={style.List} onScroll={handleScroll} ref={scrollRef as RefObject<HTMLDivElement>}>
        <ListBox>
            {(type === "pokemon")? (renderPokemon(pokemonData)) : (renderItem(itemData))}
            <ScaleLoader
              color={"#A9A9A9"}
              loading={needFetch}
              cssOverride={override}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
        </ListBox>
      </div>
    </>
  );
};

export default Main;

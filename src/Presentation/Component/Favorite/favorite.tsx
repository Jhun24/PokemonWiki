import { useState, useEffect, CSSProperties } from 'react';
import { useRouter } from 'next/router';
import { Select } from '@radix-ui/themes';
import ScaleLoader from "react-spinners/ScaleLoader";
import { useAppSelector, useAppDispatch } from '@/Presentation/Redux/hook';
import { setDetail } from '@/Presentation/Redux/reducer/detail';
import { List, ListBox } from '@/Presentation/Component';
import { FavoriteViewModel } from '@/Presentation/ViewModel';
import PokemonEntity from '@/Domain/Entity/pokemon';
import ItemEntity from '@/Domain/Entity/item';

import style from '@/Presentation/Component/style/Main.module.css';

const Favorite = () => {
  const [type, setType] = useState<"pokemon" | "item">("pokemon");
  const [pokemon, setPokemon] = useState<PokemonEntity[]>([]);
  const [item, setItem] = useState<ItemEntity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { username } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const favoriteViewModel = new FavoriteViewModel();
  const override: CSSProperties = {
    width: "30px",
    height: "30px",
    padding: "10px",
    borderColor: "#A9A9A9",
  };

  const handleSelect = (value: "pokemon" | "item"): void => {
    setType(value);
  }

  const fetchPokemon = async (username: string) => {
    setIsLoading(true);
    const res = await favoriteViewModel.getFavoritePokemon({username});
    setPokemon(res);
    setIsLoading(false);
  }

  const fetchItem = async (username: string) => {
    setIsLoading(true);
    const res = await favoriteViewModel.getFavoriteItem({username});
    setItem(res);
    setIsLoading(false);
  }

  const onListItemClick = (key: number, type: string): void => {
    dispatch(setDetail({id: key, type}));
    router.push("/detail");
  }

  const renderItem = (data: ItemEntity[]): JSX.Element[] => {
    const res =  data.map((element) => {
      return <List key={element.id} id={element.id} image={element.sprites.default} name={element.name} category={element.category} onClick={(e) => onListItemClick(element.id, type)}/>
    });
    return res;
  }

  const renderPokemon = (data: PokemonEntity[]): JSX.Element[] => {
    const res =  data.map((element) => {
      return <List key={element.id} id={element.id} image={element.sprites.front_default} name={element.name} type={element.types} onClick={(e) => onListItemClick(element.id, type)}/>
    });
    return res;
  }

  useEffect(() => {
    if(type === "pokemon"){
      fetchPokemon(username);
    }
    else if(type === "item"){
      fetchItem(username);
    }
  }, [type]);
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
      <div className={style.List}>
        <ListBox>
            {(type === "pokemon")? (renderPokemon(pokemon)) : (renderItem(item))}
            <ScaleLoader
              color={"#A9A9A9"}
              loading={isLoading}
              cssOverride={override}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
        </ListBox>
      </div>
    </>
  );
}

export default Favorite;
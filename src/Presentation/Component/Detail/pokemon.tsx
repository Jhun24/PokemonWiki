import { useState } from 'react';
import { Button, Toast } from '@/Presentation/Component';
import { DetailPokemonProps } from '@/Presentation/Component/type';
import { FavoriteViewModel } from '@/Presentation/ViewModel';
import style from '@/Presentation/Component/style/Detail.module.css';

const DetailPokemon = ({username, pokemon}: DetailPokemonProps) => {
  const favoriteViewModel = new FavoriteViewModel();
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<"info" | "error">("info");
  const [title, setTitle] = useState("");
  const handleFavorite = async () => {
    const res = await favoriteViewModel.saveFavoritePokemon({username, pokemonEntity: pokemon});
    if(res){
      setTitle("보관홤에 저장하였습니다");
      setType("info");
      setOpen(true);
    }
    else{
      setTitle("보관함 공간이 꽉 찼습니다");
      setType("error");
      setOpen(true);
    }
  }
  return(
    <>
      <div className={style.DataBox}>
        <h2 className={style.Name}>{pokemon.name}</h2>
        <div className={style.ImageBox}>
          <img src={pokemon.sprites.front_default} />
          <img src={pokemon.sprites.back_default} />
        </div>
        <h3 className={style.Info}>몸무게</h3>
        <p className={style.Text}>{pokemon.height}</p>
        <h3 className={style.Info}>스텟</h3>
        <div className={style.TextBox}>
          {pokemon.stats.map((d) => {
            return <p className={style.Text}>{d.stat.name}</p>;
          })}
        </div>
        <Button text='보관함에 추가' onSubmit={handleFavorite}/>
      </div>
      <Toast type={type} title={title} content='' open={open} setOpen={setOpen}/>
     </>
  ); 
}

export default DetailPokemon;
import { DetailPokemonProps } from '@/Presentation/Component/type';
import style from '@/Presentation/Component/style/Detail.module.css';

const DetailPokemon = ({pokemon}: DetailPokemonProps) => {
  console.log(pokemon);
  return(
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
    </div>
  ); 
}

export default DetailPokemon;
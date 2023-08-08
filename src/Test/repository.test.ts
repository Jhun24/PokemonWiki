import AuthRepositoryImpl from "@/Data/Repository/auth";
import PokemonRepositoryImpl from "@/Data/Repository/pokemon";

test('AuthRepository', ()=>{
  const authRepo = new AuthRepositoryImpl();
  const username = "test";
  const password = "test";
  expect(authRepo.login({password, username}));
});

test('PokemonRepository', ()=>{
  const pokeRepo = new PokemonRepositoryImpl();
  const offset = 0;
  expect(pokeRepo.getPokemon({offset}));
});
import AuthRepositoryImpl from "../Data/Repository/auth";

test('AuthRepository', ()=>{
  const authRepo = new AuthRepositoryImpl();
  const username = "test";
  const password = "test";
  expect(authRepo.login({password, username}));
});
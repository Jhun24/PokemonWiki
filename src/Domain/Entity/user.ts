import { UserType } from './type/user';
class UserEntity {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  token: string;
  username: string;

  constructor({
    email,
    firstName,
    gender,
    id,
    image,
    lastName,
    token,
    username,
  }: UserType) {
    this.email = email;
    this.firstName = firstName;
    this.gender = gender;
    this.id = id;
    this.image = image;
    this.lastName = lastName;
    this.token = token;
    this.username = username;
  }
}

export default UserEntity;

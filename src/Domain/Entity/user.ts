import { UserType } from './type/user';
class UserEntity {
  private email: string;
  private firstName: string;
  private gender: string;
  private id: number;
  private image: string;
  private lastName: string;
  private token: string;
  private username: string;

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

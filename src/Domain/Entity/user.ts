class UserEntity {
  image: string;
  lastName: string;
  token: string;
  username: string;
  email: string;
  firstName: string;
  gender: string;
  id: number;

  constructor(){ 
    this.email = "";
    this.firstName = "";
    this.gender = "";
    this.id = 0;
    this.image = "";
    this.lastName = "";
    this.token = "";
    this.username = ""
  }
}

export default UserEntity;
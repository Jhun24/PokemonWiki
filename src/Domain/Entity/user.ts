class UserEntity {
  image: string | null;
  lastName: string | null;
  token: string | null;
  username: string | null;
  email: string | null;
  firstName: string | null;
  gender: string | null;
  id: number | null;

  constructor() {
    this.email = null;
    this.firstName = null;
    this.gender = null;
    this.id = null;
    this.image = null;
    this.lastName = null;
    this.token = null;
    this.username = null;
  }
}

export default UserEntity;

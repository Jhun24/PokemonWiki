class Auth {
  isAuth: boolean;

  constructor() {
    this.isAuth = false;
  }

  checkAuth(): boolean {
    return this.isAuth;
  }

  updateAuth(): void {
    this.isAuth = !this.isAuth;
  }
}

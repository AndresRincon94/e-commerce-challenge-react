import User from './User';

export interface AppState {
  userLogged: User | null;
  setUserLogged: (user: User | null) => void;
}

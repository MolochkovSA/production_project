export interface IUser {
  id: string
  userName: string
}

export interface UserSchema {
  authData?: IUser
}

import {ColumnType, Generated, Insertable, Selectable, Updateable} from "kysely";

export interface Database {
  user: UserTable
  game: GameTable
  platform: PlatformTable
  constructor: ConstructorTable
}

export interface UserTable {
  id: Generated<number>
  username: string
  first_name: string | undefined
  last_name: string | undefined
  password: string
  email: string
  games: Game[]
  created_at: ColumnType<Date, string | undefined, never>
}

export type User = Selectable<UserTable>
export type NewUser = Insertable<UserTable>
export type UserUpdate = Updateable<UserTable>

export interface GameTable {
  id: Generated<number>
  name: string
  description: string
  platforms: Platform[]
  release_date: string
  created_at: ColumnType<Date, string | undefined, never>
}

export type Game = Selectable<GameTable>
export type NewGame = Insertable<GameTable>
export type GameUpdate = Updateable<GameTable>

export interface PlatformTable {
  id: Generated<number>
  name: string
  description: string
  release_date: string
  created_at: ColumnType<Date, string | undefined, never>
}

export type Platform = Selectable<PlatformTable>
export type NewPlatform = Insertable<PlatformTable>
export type PlatformUpdate = Updateable<PlatformTable>

export interface ConstructorTable {
  id: Generated<number>
  name: string
  description: string
  created_at: ColumnType<Date, string | undefined, never>
}

export type Constructor = Selectable<ConstructorTable>
export type NewConstructor = Insertable<ConstructorTable>
export type ConstructorUpdate = Updateable<ConstructorTable>
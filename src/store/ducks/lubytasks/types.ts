/**
 * Action types
 */
export enum LubyTaskTypes {
  LOAD_REQUEST = '@lubytasks/LOAD_REQUEST',
  LOAD_SUCCCES = '@lubytasks/LOAD_SUCCCES',
  LOAD_FAILURE = '@lubytasks/LOAD_FAILURE',
  NEW_LUBY_TASK = '@lubytasks/NEW_LUBY_TASK'
}

/**
 * Data types
 */
export interface LubyTask {
  id: number
  name: string
}

/**
 * State type
 */
export interface LubyTaskState {
  readonly data: LubyTask[]
  readonly loading: boolean
  readonly error: boolean
}

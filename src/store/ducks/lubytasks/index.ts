import { Reducer } from 'redux';
import { LubyTaskState, LubyTaskTypes } from './types';

const INITIAL_STATE: LubyTaskState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<LubyTaskState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LubyTaskTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case LubyTaskTypes.LOAD_SUCCCES:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case LubyTaskTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: [],
      };
      case LubyTaskTypes.NEW_LUBY_TASK:
        console.log({...state, loading: false, error: false, data: action.payload.data});
        return {
        ...state, loading: false, error: false, data: action.payload.data,
        };
    default:
      return state;
  }
};

export default reducer;

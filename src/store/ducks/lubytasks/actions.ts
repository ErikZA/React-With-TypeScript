import { action } from 'typesafe-actions';
import { LubyTaskTypes, LubyTask } from './types';

export const loadRequest = () => action(LubyTaskTypes.LOAD_REQUEST);

export const loadSuccess = (data: LubyTask[]) => action(LubyTaskTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(LubyTaskTypes.LOAD_FAILURE);

export const newLubyTask = (data: LubyTask) => action(LubyTaskTypes.NEW_LUBY_TASK, { data });

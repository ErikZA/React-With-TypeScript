import React from 'react';

import { LubyTask } from '../../store/ducks/lubytasks/types';

interface OwnProps {
  lubyTask: LubyTask
}

export default function LubyTaskItem({ lubyTask }: OwnProps) {
  return <li>{lubyTask.name}</li>;
}

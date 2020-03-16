import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { LubyTask } from '../../store/ducks/lubytasks/types';
import { ApplicationState } from '../../store';

import * as LubyTaskActions from '../../store/ducks/lubytasks/actions';

import LubyTaskItem from '../LubyTaskItem';

interface StateProps {
  lubytasks: LubyTask[]
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps

class LubyTaskList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { lubytasks } = this.props;

    return (
      <ul>
        {lubytasks.map(task => (
          <LubyTaskItem key={task.id} lubyTask={task} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  lubytasks: state.lubytasks.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(LubyTaskActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LubyTaskList);

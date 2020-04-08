import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { User } from '../../store/ducks/users/types';
import { ApplicationState } from '../../store';

import * as UsersActions from '../../store/ducks/users/actions';

interface StateProps {
  users: User[]
}

interface DispatchProps {
  loadRequest(): void
}

interface OwnProps {

}

type Props = StateProps & DispatchProps & OwnProps

class UsersList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { users } = this.props;

    return (
      <ul>
        { users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  users: state.users.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(UsersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

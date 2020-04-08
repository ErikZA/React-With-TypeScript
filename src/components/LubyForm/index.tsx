import React, { Component } from "react";
import { Formik, Field, } from "formik";
import { string, object } from "yup";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { User } from '../../store/ducks/users/types';


import * as LubyTaskActions from '../../store/ducks/users/actions';
import { ApplicationState } from "../../store";

const initialValues = {
    id: 0,
    name: "",
};

interface DispatchProps {
    newLubyTask(data: User): void
  };

const LubyForm: React.SFC<DispatchProps> = ( {newLubyTask} ) => (
        <div>
            <h1>Welcome</h1>
            <Formik initialValues={initialValues}
                onSubmit={(values: any) => {
                    values.id = Math.floor(Math.random() * Math.floor(1000));
                    console.log(values);
                    newLubyTask(values);
                }}
                validationSchema={object().shape({
                    lubyTask: string()
                        .required("The field is mandatory.")
                        .min(5, "The task must be longer than 5 characters")
                })}
                render={({ handleSubmit, errors, touched }) => (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">
                            <div>Task Name</div>
                            <Field type="text" name="name" />
                            {
                                touched.name && errors.name ? <div>
                                    {errors.name}</div> : null
                            }
                        </label>
                        <button type="submit">Create New Task</button>
                    </form>
                )}>
            </Formik>
        </div>
);

const mapStateToProps = (state: ApplicationState) => ({
    users: state.users.data,
  });

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(LubyTaskActions, dispatch);

export default  connect(mapStateToProps, mapDispatchToProps)(LubyForm);
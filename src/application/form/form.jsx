import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';
import { required, minLength2, validateSubmit, alphaNumeric } from '../../utilities/validations';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { storeError } from '../../actions';

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        storeError
    }, dispatch);
};

@reduxForm({ form: 'myForm' })
@connect(null, matchDispatchToProps)
export default class MyForm extends Component {
    componentWillReceiveProps(nextProps) {
        this.props.submitFailed !== nextProps.submitFailed
            && this.props.storeError(nextProps.submitFailed);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form className='my-form' onSubmit={handleSubmit(validateSubmit)}>
                <div className="form-row">
                    <label htmlFor="username">Enter user name: </label>
                    <div className="form-field">
                        <Field
                            name="username"
                            placeholder="User name"
                            type="text"
                            component={renderField}
                            validate={[required, minLength2]}
                            warn={alphaNumeric}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <label htmlFor="password">Enter password: </label>
                    <div className="form-field">
                        <Field
                            name="password"
                            placeholder="Password"
                            type="password"
                            component={renderField}
                            validate={[required, minLength2]}
                            warn={alphaNumeric}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <button className="form-button" type="submit">Submit</button>
                </div>
            </form>
        );
    }
}
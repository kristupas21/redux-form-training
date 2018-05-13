import React, { Component } from 'react';
import MyForm from './form/form';
import ErrorBlock from './form/errorBlock';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        hasErrors: state.hasErrors
    };
};


@connect(mapStateToProps)
export default class Application extends Component {

    onSubmit = (values) => {

    };

    render() {
        const { hasErrors } = this.props;

        return (
            <div className='application'>
                {hasErrors && <ErrorBlock errorMessage="this is error." />}
                <h4>My Awesome Form</h4>
                <MyForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}
import React from 'react';

const renderField = ({
    input,
    type,
    placeholder,
    meta:
     { touched, error, warning }
}) => {
    return (
        <div className="form-field" >
            <input {...input} {...{type, placeholder}} />
            {touched &&
                ((error &&
                    <span className="form-field__error">{error}</span>
                ) ||
                (warning &&
                    <span className="form-field__warning">{warning}</span>
                ))
            }
        </div>
    );
};

export default renderField;
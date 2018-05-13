import React from 'react';

const ErrorBlock = ({errorMessage}) => {
    return (
        <div className="error-block">
            {errorMessage}
        </div>
    );
};

export default ErrorBlock;